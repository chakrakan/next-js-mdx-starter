import { allPosts, Post as PostType } from "../../.contentlayer/generated";
import type { GetStaticProps, GetStaticPaths } from "next/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import { BlogPost, MDXComponents } from "components";

type PostProps = {
  post: PostType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params!.slug);
  return {
    props: {
      post,
    },
  };
};

const PostLayout = ({ post }: PostProps) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <BlogPost post={post}>
      <Component components={MDXComponents} />
    </BlogPost>
  );
};

export default PostLayout;
