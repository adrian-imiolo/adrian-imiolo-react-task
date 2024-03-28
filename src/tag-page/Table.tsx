import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Tag } from "./useFetch";

interface TableProps {
  data: Tag[];
}

function TableElement({ data }: TableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Count</TableHead>
          <TableHead>Tag</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((tag, i) => {
          return (
            <TableRow key={i}>
              <TableCell className="text-left">{tag.count}</TableCell>
              <TableCell className="text-left">{tag.name}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
export default TableElement;
