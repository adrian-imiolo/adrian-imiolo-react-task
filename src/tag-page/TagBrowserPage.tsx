import { useState } from "react";
import useFetch from "./useFetch";
import TableEl from "./TableEl";
import SelectGeneric from "./SelectGeneric";
import PaginationEl from "./PaginationEl";
import { ModeToggle } from "@/components/mode-toggle";
import { Sort, PageSize, Order, Data } from "@/types";
import OrderToggle from "./OrderToggle";

const sortOptions: Sort[] = ["popular", "activity", "name"];
const pageOptions: PageSize[] = ["10", "20", "30"];

function TagBrowserPage() {
  const [sort, setSort] = useState<Sort>("popular");
  const [pageSize, setPageSize] = useState<PageSize>("10");
  const [order, setOrder] = useState<Order>("desc");
  const [page, setPage] = useState(1);

  const url = import.meta.env.VITE_APP_URL;

  const { loading, data, error } = useFetch<Data>(
    `${url}tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
  );

  if (!data) return null;

  const { items: tags } = data;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong.</div>;
  }

  function changeSortDirection(value: Sort) {
    setSort(value);
  }
  function changePageSize(value: PageSize) {
    setPageSize(value);
  }
  function changeOrder() {
    if (order === "desc") {
      setOrder("asc");
    }
    if (order === "asc") {
      setOrder("desc");
    }
  }

  return (
    <div className="bg-gray-50-400 flex items-center flex-col">
      <div className="flex flex-row gap-2 w-[400px] justify-center">
        <SelectGeneric
          onChange={changeSortDirection}
          value={sort}
          options={sortOptions}
        />
        <OrderToggle order={order} onClick={changeOrder} />

        <SelectGeneric
          className="w-16"
          onChange={changePageSize}
          value={pageSize}
          options={pageOptions}
        />
        <ModeToggle />
      </div>
      <TableEl data={tags} />
      <PaginationEl page={page} setPage={setPage} />
    </div>
  );
}
export default TagBrowserPage;
