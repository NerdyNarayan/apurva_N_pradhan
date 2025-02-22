"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="flex min-h-[100dvh] w-full items-center justify-center">
      <div>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          404 - Page Not Found
        </h1>
        <p className="mb-4 flex flex-col gap-2">
          The page you are looking for does not exist.
          <Button className="mt-4 w-fit" onClick={() => router.back()}>
            Go Back
          </Button>
        </p>
      </div>
    </section>
  );
}
