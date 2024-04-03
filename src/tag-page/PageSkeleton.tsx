import { Skeleton } from "@/components/ui/skeleton";

function PageSkeleton() {
  return (
    <div className="py-2">
      <div className="flex gap-3 py-3">
        <Skeleton className="w-1/2 h-10" />
        <Skeleton className="w-1/2 h-10" />
      </div>
      <Skeleton className="h-[525px] w-[250px] rounded-xl" />
    </div>
  );
}
export default PageSkeleton;
