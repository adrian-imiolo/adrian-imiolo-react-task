import { useState } from "react";
import useFetch from "./useFetch";
import TableEl from "./TableEl";

import { SelectGeneric } from "./SelectGeneric";
import PaginationEl from "./PaginationEl";
import { mockData as data } from "./mock";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Sort = "popular" | "activity" | "name";
type PageSize = 10 | 20 | 30;
type Order = "desc" | "asc";
export type SelectOptions = Sort | PageSize | Order;

function TagBrowserPage() {
  const [sort, setSort] = useState<Sort>("popular");
  const [pageSize, setPageSize] = useState<PageSize>(10);
  const [order, setOrder] = useState<Order>("desc");
  const [page, setPage] = useState(1);

  // const { loading, data, error } = useFetch(
  //   `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
  // );

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Something went wrong.</div>;
  // }
  // console.log(data);

  function changeSortDirection(value: Sort) {
    setSort(value);
    console.log(sort);
  }
  function changePageSize(e: React.ChangeEvent<HTMLSelectElement>) {
    setPageSize(e.target.value as PageSize);
  }
  function changeOrder(e: React.ChangeEvent<HTMLSelectElement>) {
    setOrder(e.target.value as Order);
  }

  return (
    <div className="bg-gray-50-400 flex items-center flex-col">
      <Select value={sort} onValueChange={changeSortDirection}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="activity">Activity</SelectItem>
          <SelectItem value="name">Name</SelectItem>
        </SelectContent>
      </Select>
      <div>
        <SelectGeneric
          onChange={changeSortDirection}
          value={sort}
          options={["popular", "activity", "name"]}
        />
        <SelectGeneric
          onChange={changePageSize}
          value={pageSize}
          options={[10, 20, 30]}
        />
        <SelectGeneric
          onChange={changeOrder}
          value={order}
          options={["asc", "desc"]}
        />
      </div>
      <TableEl data={data} />
      <PaginationEl page={page} setPage={setPage} />
    </div>
  );
}
export default TagBrowserPage;
