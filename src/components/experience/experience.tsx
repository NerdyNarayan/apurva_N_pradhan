import Box from "../ui/box";
import { TextShimmer } from "../ui/shimmer-text";
import { Timeline } from "./timeline";
export default function Experience() {
  return (
    <>
      <TextShimmer className="w-full border-b-[1px] border-primary/[0.15] pb-2 text-start text-xl font-bold">
        Work Experience
      </TextShimmer>
      <Box />
      <Timeline
        data={[
          {
            title: "2023",
            content: (
              <div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex w-[400px] flex-col gap-2">
                    <div className="hidden text-sm text-muted-foreground md:block">
                      12th August 2023
                    </div>

                    <h1>How to build a Next.js app with TypeScript</h1>
                    <span className="text-xs text-muted-foreground">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim ea commodo consequat.
                    </span>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "2023",
            content: (
              <div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex w-[400px] flex-col gap-2">
                    <div className="hidden text-sm text-muted-foreground md:block">
                      12th August 2023
                    </div>

                    <h1>How to build a Next.js app with TypeScript</h1>
                    <span className="text-xs text-muted-foreground">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim ea commodo consequat.
                    </span>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
