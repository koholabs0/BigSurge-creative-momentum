import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-3xl bg-card border border-border overflow-hidden">
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
      <Skeleton className="w-10 h-10 rounded-full mb-4" />
      <div className="space-y-2 mb-6">
        <Skeleton className="h-4 w-full bg-white/20" />
        <Skeleton className="h-4 w-full bg-white/20" />
        <Skeleton className="h-4 w-3/4 bg-white/20" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-full bg-white/20" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24 bg-white/20" />
          <Skeleton className="h-3 w-32 bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="p-8 rounded-2xl bg-card border border-border">
      <Skeleton className="w-14 h-14 rounded-xl mb-6" />
      <Skeleton className="h-7 w-3/4 mb-4" />
      <div className="space-y-2 mb-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="space-y-3 mb-8">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-3xl overflow-hidden bg-muted/30 animate-pulse">
      <div className="py-12 lg:py-20 px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          <div className="space-y-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-16 w-3/4" />
            <Skeleton className="h-16 w-1/2" />
            <div className="grid grid-cols-4 gap-4 mt-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-8" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Skeleton className="w-64 h-80 sm:w-80 sm:h-[420px] rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageHeaderSkeleton() {
  return (
    <div className="mb-16 text-center max-w-3xl mx-auto space-y-6">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-2/3 mx-auto" />
    </div>
  );
}
