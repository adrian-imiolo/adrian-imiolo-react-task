import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FetchResult } from "@/types";

function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(true);
      console.error(error);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return { data, loading, error };
}

export default useFetch;
