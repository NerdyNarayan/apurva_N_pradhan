import { Suspense } from "react";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto flex w-full flex-col items-start justify-center px-4 md:px-0">
      <Suspense fallback={null}>
        <div className="dark:prose-dark prose my-4 w-full max-w-4xl">
          {children}
        </div>
      </Suspense>
    </article>
  );
}
