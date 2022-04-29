import { allPosts, Post } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import SeoContainer from "components/SeoContainer";
import Image from "next/image";
import type { GetStaticProps, GetStaticPaths } from "next/types";

type PostProps = {
  post: Post;
};

const MDXcomponents = {
  Image,
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
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <SeoContainer
      title={post.title}
      description={post.description}
      url={`devkanisk.com/posts/${post.slug}`}
      publishedAt={post.publishedAt}
    >
      <article>
        <div>
          <h1>{post.title}</h1>
          <p>
            <span>{post.publishedAt}</span>
          </p>
        </div>
        <div className="entry">
          <MDXComponent components={MDXcomponents} />
        </div>
      </article>
    </SeoContainer>
  );
};

export default PostLayout;
