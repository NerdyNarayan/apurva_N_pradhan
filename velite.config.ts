import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import {defineCollection,defineConfig,s} from "velite"
export const calculateReadingTime = (text:string) => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
};
const computedFields = <T extends {body:string,  slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
  readingTime:calculateReadingTime(data.body),
});
const writings=defineCollection({

  name:"Writing",
  pattern:"writing/*.mdx",
  schema:s.object({
    slug: s.path(),
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    date: s.isodate(),
    published: s.boolean().default(true),
    tags: s.array(s.string()).optional(),
    body:s.mdx()
,
    toc:s.toc()
  }).transform(computedFields),
})

export default defineConfig({
root:"src/content",
output:{

  data:".velite",
  assets:"public/static",
  base:"/static/",
  name:"[name]-[hash:6].[ext]",
  clean:true
},
collections:{writings},
mdx:{
  rehypePlugins:[
    rehypeSlug,
    [rehypePrettyCode,{theme:"kanagawa-dragon"}],
  [

    rehypeAutolinkHeadings,{
      behavior: "wrap",
      properties: {
        className: ["subheading-anchor autolink-heading"],
        ariaLabel: "Link to section",
        
      },
      
    }
  ]
  ],
remarkPlugins: [],

},

})