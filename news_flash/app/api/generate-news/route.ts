import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // load the env var and strip surrounding quotes if present
    const rawKey = process.env.CURRENTS_API_KEY ?? "";
    const apiKey = rawKey.replace(/^"|"$/g, "").trim();

    if (!apiKey) {
      return NextResponse.json({ error: 'CURRENTS_API_KEY not set on server (check .env/.env.local)' }, { status: 500 });
    }

    // Call Currents latest-news endpoint and return up to 5 titles.
    const url = `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${encodeURIComponent(apiKey)}`;

    // configurable timeout and retries
    const timeoutMs = Number(process.env.CURRENTS_TIMEOUT_MS) || 15000; // default 15s
    const maxRetries = 1; // one retry on timeout/errors

    let res: Response | null = null;
    let lastError: any = null;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);

      try {
        res = await fetch(url, { method: 'GET', signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) {
          const text = await res.text();
          // for non-2xx, return upstream message
          return NextResponse.json({ error: 'Failed fetching Currents API', details: text }, { status: res.status });
        }

        break; // success
      } catch (err: any) {
        clearTimeout(timeout);
        lastError = err;
        // if aborted, retry once; otherwise break and return error
        if (err && err.name === 'AbortError') {
          // try again if attempts remain
          if (attempt < maxRetries) continue;
          return NextResponse.json({ error: 'Currents API request timed out' }, { status: 504 });
        }

        // network or other error -- retry once then return
        if (attempt < maxRetries) continue;
        console.error('fetch error for Currents API', err);
        return NextResponse.json({ error: 'Error fetching Currents API', details: String(err) }, { status: 502 });
      }
    }

    if (!res) {
      return NextResponse.json({ error: 'Unknown error contacting Currents API', details: String(lastError) }, { status: 502 });
    }

    const data = await res.json();
    // Currents returns an object with a `news` array containing articles with `title`.
    const news = Array.isArray(data.news) ? data.news : [];
    // map to objects with title and url when available
    const items = news
      .map((n: any) => ({
        title: n.title || n.title_original || null,
        url: n.url || n.source || null,
      }))
      .filter((it: any) => it.title)
      .slice(0, 5);

    return NextResponse.json({ items, count: items.length });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 });
  }
}
