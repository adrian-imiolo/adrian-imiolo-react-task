import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Tag } from "@/types";

type Data =
  | {
      items: Tag[];
      has_more: boolean;
      quota_max: number;
      quota_remaining: number;
    }
  | undefined;

interface FetchResult {
  data: Data;
  loading: boolean;
  error: boolean;
}

function useFetch(url: string): FetchResult {
  const [data, setData] = useState<Data>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url); // specifying the expected response data type
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
