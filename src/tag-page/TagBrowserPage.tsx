import { useState } from "react";
import useFetch from "./useFetch";
import TableElement from "./Table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SelectGeneric } from "./SelectGeneric";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Sort = "popular" | "activity" | "name";
type PageSize = 10 | 20 | 30;
type Order = "desc" | "asc";
export type SelectOptions = Sort | PageSize | Order;

function TagBrowserPage() {
  const [sort, setSort] = useState<Sort>("popular");
  const [pageSize, setPageSize] = useState<PageSize>(10);
  const [order, setOrder] = useState<Order>("desc");
  const [page, setPage] = useState(1);
  const { loading, data, error } = useFetch(
    `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong.</div>;
  }
  // console.log(data);

  function changeSortDirection(e) {
    setSort(e.target.value);
  }
  function changePageSize(e) {
    console.log("pagesize", pageSize);
    setPageSize(e.target.value);
  }
  function changeOrder(e) {
    console.log("order", order);
    setOrder(e.target.value);
  }
  function nextPage() {
    console.log("page", page);
    setPage((p) => p + 1);
  }
  function prevPage() {
    console.log("page", page);
    if (page > 1) {
      setPage((p) => p - 1);
    }
  }

  // implent pagination
  // every select etc. should be in separate component. All logic should stay here, there just jsx
  // data should be shown in the shadcn table

  return (
    <div className="bg-gray-50-400">
      {/* <Select onValueChange={changeSortDirection}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="activity">Activity</SelectItem>
          <SelectItem value="name">Name</SelectItem>
        </SelectContent>
      </Select> */}
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
      <TableElement data={data} />

      <Pagination className="cursor-pointer">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={prevPage} />
          </PaginationItem>
          {page > 1 && <PaginationItem>...</PaginationItem>}
          <PaginationLink
            className="border-solid border-2 rounded-full"
            onClick={prevPage}
          >
            {page}
          </PaginationLink>
          <PaginationLink className="rounded-full" onClick={nextPage}>
            {page + 1}
          </PaginationLink>
          <PaginationLink
            className="rounded-full"
            onClick={() => setPage((p) => p + 2)}
          >
            {page + 2}
          </PaginationLink>
          <PaginationItem>...</PaginationItem>
          <PaginationItem>
            <PaginationNext
              // className={
              //   endIndex === 100 ? "pointer-events-none opacity-50" : undefined
              // }
              onClick={nextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
export default TagBrowserPage;
