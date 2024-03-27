import { useEffect, useState } from "react";
function TagBrowserPage() {
  // const {
  //   data: tags,
  //   loading,
  //   error,
  // } = useFetch(
  //   "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  // );
  const [tags, setTags] = useState([]);
  async function fetchData() {
    const res = await fetch(
      "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
    );
    const data = await res.json();
    setTags(data.items);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(tags);

  return (
    <div className="bg-orange-400">
      {tags.map((item) => {
        <p key={item.count}>{item.name}</p>;
      })}
    </div>
  );
}
export default TagBrowserPage;
