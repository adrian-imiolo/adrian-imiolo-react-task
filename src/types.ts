export type Sort = "popular" | "activity" | "name";
export type PageSize = "10" | "20" | "30";
export type Order = "desc" | "asc";
export type SelectOptions = Sort | PageSize | Order;

export interface Tag {
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
    collectives?: unknown;
  }

  export interface TableProps {
    data: Tag[];
  }

  export interface PaginationProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
  }

  export interface SelectProps<T> {
    value: T;
    onChange: (value: T) => void;
    options: T[];
    className?: string;
  }