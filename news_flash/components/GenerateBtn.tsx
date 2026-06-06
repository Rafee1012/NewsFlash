"use client";

import { useState } from "react";

type Item = { title: string; url?: string | null };

export default function GenerateBtn() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    setItems(null);

    try {
      const res = await fetch('/api/generate-news', { method: 'POST' });
      const json = await res.json();

      if (!res.ok) {
        setError(json?.error || 'Failed to fetch');
      } else {
        setItems(json.items || []);
      }
    } catch (e: any) {
      setError(e?.message || String(e));
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
        <ul className="mt-2 space-y-1">
          {items.map((it, i) => (
            <li key={i}>
              {it.url ? (
                <a href={it.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  {it.title}
                </a>
              ) : (
                <span>{it.title}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
