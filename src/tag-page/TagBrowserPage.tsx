import { useState } from "react";
// import useFetch from "./useFetch";
import TableEl from "./TableEl";

import { SelectGeneric } from "./SelectGeneric";
import PaginationEl from "./PaginationEl";
import { mockData as data } from "./mock";
import { ModeToggle } from "@/components/mode-toggle";
import { Sort, PageSize, Order } from "@/types";

const sortOptions: Sort[] = ["popular", "activity", "name"];
const pageOptions: PageSize[] = ["10", "20", "30"];
const orderOptions: Order[] = ["asc", "desc"];

function TagBrowserPage() {
  const [sort, setSort] = useState<Sort>("popular");
  const [pageSize, setPageSize] = useState<PageSize>("10");
  const [order, setOrder] = useState<Order>("desc");
  const [page, setPage] = useState(1);

  // const url = process.env.REACT_APP_URL;

  // const { loading, data, error } = useFetch(
  //   `${url}tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
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
  function changePageSize(value: PageSize) {
    setPageSize(value);
    console.log(pageSize);
  }
  function changeOrder(value: Order) {
    setOrder(value);
    console.log(order);
  }

  return (
    <div className="bg-gray-50-400 flex items-center flex-col">
      <div className="flex flex-row gap-2 w-[400px] justify-center">
        <SelectGeneric
          onChange={changeSortDirection}
          value={sort}
          options={sortOptions}
        />
        <SelectGeneric
          className="w-16"
          onChange={changePageSize}
          value={pageSize}
          options={pageOptions}
        />
        <SelectGeneric
          onChange={changeOrder}
          value={order}
          options={orderOptions}
        />
        <ModeToggle />
      </div>
      <TableEl data={data} />
      <PaginationEl page={page} setPage={setPage} />
    </div>
  );
}
export default TagBrowserPage;
