import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tag } from "@/types";
import PageSkeleton from "./PageSkeleton";

export interface TableProps {
  data: Tag[] | undefined;
  loading: boolean;
}

function TableEl({ data, loading }: TableProps) {
  if (loading) {
    return <PageSkeleton />;
  }
  return (
    <Table className="w-[300px] my-5">
      <TableHeader>
        <TableRow>
          <TableHead>Tag</TableHead>
          <TableHead className="text-right">Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((tag, i) => {
          return (
            <TableRow key={i}>
              <TableCell className="text-left">{tag.name}</TableCell>
              <TableCell className="text-right">{tag.count}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
export default TableEl;
