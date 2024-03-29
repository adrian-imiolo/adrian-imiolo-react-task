import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function PaginationEl({ page, setPage }: PaginationProps) {
  function nextPage() {
    setPage((p) => p + 1);
  }
  function prevPage() {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  }

  return (
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
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
export default PaginationEl;
