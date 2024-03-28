import { useState, useEffect } from "react";
import axios from "axios";

interface Tag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
  collectives?: unknown;
}

function useFetch(url: string) {
  const [data, setData] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    async function getData() {
      try {
        const res = await axios.get(url);
        setData(res.data.items);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.error(err.message);
      }
    }
    getData();
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
