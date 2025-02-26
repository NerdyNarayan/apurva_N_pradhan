import { Suspense } from "react";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="w-full px-4 md:px-0">
      <Suspense fallback={null}>{children}</Suspense>
    </article>
  );
}
