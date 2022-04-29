import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "THe title of the post",
      required: true,
    },
    publishedAt: {
      type: "string",
      description: "Date post was published at",
      required: true,
    },
    description: {
      type: "string",
      description: "A little blurb about your post",
      required: true,
    },
    cover: {
      type: "string",
      description: "Path to a cover image for your post",
      required: false,
    },
    category: {
      type: "string",
      description: "A category for your post",
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "data/content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypePrism,
      rehypeSlug,
      rehypeAccessibleEmojis,
      rehypeCodeTitles,
      [rehypeAutolinkHeadings, { properties: { classname: ["anchor"] } }],
    ],
  },
});
