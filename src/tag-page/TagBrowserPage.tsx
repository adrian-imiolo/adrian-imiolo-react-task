import useFetch from "./useFetch";

function TagBrowserPage() {
  const tags = useFetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  );
  // const [tags, setTags] = useState([]);
  // async function fetchData() {
  //   const res = await fetch(
  //     "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  //   );
  //   const data = await res.json();
  //   setTags(data.items);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(tags);

  return (
    <div className="bg-orange-400">
      {tags.data.map((tag) => (
        <p key={tag.count}>{tag.name}</p>
      ))}
    </div>
  );
}
export default TagBrowserPage;
