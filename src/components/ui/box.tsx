import { cn } from "@/lib/utils";

export default function Box({ className }: { className?: string }) {
  return <div className={cn("my-7 md:my-10", className)} />;
}
