import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  w: string;
  h: string;
}

export function SkeletonCard({ w, h }: Props) {
  return (
    <div className="flex flex-col space-y-3 justify-center">
      <Skeleton className="rounded-xl" style={{ height: h, width: w }} />
    </div>
  );
}
