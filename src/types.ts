export type Sort = "popular" | "activity" | "name";
export type PageSize = "10" | "20" | "30";
export type Order = "desc" | "asc";
export type SelectOptions = Sort | PageSize;

export interface Tag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
  collectives?: unknown;
}

export type Data = {
  items: Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
};

export interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}
