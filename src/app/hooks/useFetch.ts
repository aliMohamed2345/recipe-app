"use client";
import { useEffect, useState } from "react";

interface UseFetchProps {
  url: string | null;
  options?: RequestInit;
  dependencies?: unknown[];
}

export const useFetch = <T>({
  url,
  options = {},
  dependencies = [],
}: UseFetchProps) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(options), ...dependencies]);

  return { data, error, loading };
};
