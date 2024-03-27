import { useState, useEffect } from "react";
import axios from "axios";

function useFetch<T>(url: string) {
  const [data, setData] = useState<null | T>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get<T>(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
