import { Post } from ".contentlayer/generated";
import SeoContainer from "components/SeoContainer/SeoContainer";

type BlogPostProps = {
  children: React.ReactNode;
  post: Post;
};

export default function BlogPost({ children, post }: BlogPostProps) {
  return (
    <SeoContainer
      title={post.title}
      description={post.description}
      url={`https://next-js-mdx-starter.vercel.app/posts/${post.slug}`}
    >
      <article>
        <div>
          <h1>{post.title}</h1>
          <p>
            <span>{post.publishedAt}</span>
            <span>{post.readingTime ? ` · ${post.readingTime.text}` : ""}</span>
          </p>
        </div>
        <div className="entry">{children}</div>
      </article>
    </SeoContainer>
  );
}
