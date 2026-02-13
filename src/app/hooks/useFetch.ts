"use client";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { UseFetchProps } from "../utils/types";
import { axiosInstance } from "../utils/axios";


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
        const response: AxiosResponse<T> = await axiosInstance.get(
          url,
          options
        );
        setData(response.data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : axios.isAxiosError(err) && err.response?.data?.message
            ? err.response.data.message
            : "Unknown error";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Only include dependencies explicitly passed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...dependencies]);

  return { data, error, loading };
};
