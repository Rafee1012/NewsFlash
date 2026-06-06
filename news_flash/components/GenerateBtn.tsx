"use client";

import { useState } from "react";

type Item = { title: string; url?: string | null; image?: string | null; description?: string | null; source?: string | null };

export default function GenerateBtn() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    setItems(null);

    try {
      const controller = new AbortController();
      const clientTimeout = setTimeout(() => controller.abort(), 10000); // 10s client-side timeout

      const res = await fetch('/api/generate-news', { method: 'POST', signal: controller.signal });
      clearTimeout(clientTimeout);
      const json = await res.json();

      if (!res.ok) {
        setError(json?.error || 'Failed to fetch');
      } else {
        setItems(json.items || []);
      }
    } catch (e: any) {
      if (e && e.name === 'AbortError') {
        setError('Request timed out. Try again.');
      } else {
        setError(e?.message || String(e));
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button onClick={handleGenerate} disabled={loading} className="px-4 py-2">
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {error && <div className="text-red-600">{error}</div>}

      {items && (
        <div className="mt-4 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <article key={i} className="flex flex-col gap-2 p-2 border rounded bg-white h-full">
              {it.image ? (
                <img src={it.image} alt={it.title} className="w-full h-20 object-cover rounded" />
              ) : (
                <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-500">No image</div>
              )}

              <div className="flex-1">
                <h3 className="text-sm font-semibold truncate">
                  {it.url ? (
                    <a href={it.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline block">
                      {it.title}
                    </a>
                  ) : (
                    <span className="block truncate">{it.title}</span>
                  )}
                </h3>
                {it.source && <div className="text-xs text-gray-600 mt-1">Source: {it.source}</div>}
                {it.description && (
                  <p className="text-xs mt-1 text-gray-700 max-h-12 overflow-hidden">{it.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
