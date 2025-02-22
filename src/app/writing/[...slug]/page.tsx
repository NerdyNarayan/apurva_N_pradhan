// import { type Metadata } from "next";
// // eslint-disable-next-line boundaries/no-unknown
// import siteMetadata from "@/data/siteMetadata";
// import { allWritings } from "contentlayer/generated";
// import { Mdx } from "@/components/ui/mdx-component";
// import { TextShimmer } from "@/components/ui/shimmer-text";
// import Box from "@/components/ui/box";
//
// // export async function generateMetadata(props: {
// //   params: Promise<{ slug: string }>;
// // }): Promise<Metadata | undefined> {
// //   const params = await props.params;
// //   const slug = decodeURI(params.slug);
// //   const writing = allWritings.find((p) => p.slug === slug);
// //   console.log("Available posts:", allWritings);
// //   console.log("Trying to find slug:", slug);
// //   if (!writing) {
// //     return;
// //   }
// //
// //   const publishedAt = new Date(writing.publishedAt).toISOString();
// //   return {
// //     title: writing.title,
// //     description: writing.summary,
// //     openGraph: {
// //       title: writing.title,
// //       description: writing.summary,
// //       siteName: siteMetadata.title,
// //       locale: "en_US",
// //       type: "article",
// //       publishedTime: publishedAt,
// //       url: "./",
// //     },
// //     twitter: {
// //       card: "summary_large_image",
// //       title: writing.title,
// //       description: writing.summary,
// //     },
// //   };
// // }
// // export async function generateStaticParams() {
// //   return allWritings.map((post) => ({
// //     slug: post.slug,
// //   }));
// // }
// //
// //
// interface WritingPageProps {
//   params: {
//     slug: string[];
//   };
// }
// async function getWritingFromParams(params: WritingPageProps["params"]) {
//   const slug = params?.slug?.join("/");
//   const writing = allWritings.find((p) => p.slug === slug);
//   return writing;
// }
// export async function generateMetadata({
//   params,
// }: WritingPageProps): Promise<Metadata> {
//   const writing = await getWritingFromParams(params);
//   if (!writing) {
//     return {};
//   }
//   return {
//     title: writing.title,
//     description: writing.summary,
//     openGraph: {
//       title: writing.title,
//       description: writing.summary,
//       locale: "en_US",
//       url: writing.slug,
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: writing.title,
//       description: writing.summary,
//     },
//   };
// }
//
// export default async function Page(props: {
//   params: Promise<{ slug: string }>;
// }) {
//   const params = await props.params;
//   const slug = decodeURI(params.slug);
//   const writing = allWritings.find((p) => p.slug === slug);
//
//   return (
//     <>
//       <div className="flex flex-row items-center justify-between text-center">
//         <TextShimmer className="w-full pb-2 text-start text-2xl font-bold">
//           {writing!.title}
//         </TextShimmer>
//         <span className="flex-shrink-0 text-sm text-primary/80">
//           {writing!.publishedAt}
//         </span>
//       </div>
//       <span className="text-sm text-muted-foreground">{writing?.summary}</span>
//       <Box />
//
//       <Mdx code={writing!.body.code} />
//     </>
//   );
// }
