import Link from "next/link";
import { allPosts, Post } from "../.contentlayer/generated/";
import "prismjs/themes/prism-tomorrow.css";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <>
      <div>
        <h1>Posts</h1>
        {posts.map(({ title, description, slug }) => (
          <Link passHref key={`posts/${slug}`} href={`posts/${slug}`}>
            <div
              className="
                    group
                    rounded
                    p-2
                    font-medium
                    transition
                    ease-in-out
                    mb-4
                    hover:cursor-pointer
                    hover:shadow-md
                    dark:hover:shadow-none"
            >
              <p className="m-0">
                <a
                  className="text-blue-700 hover:text-blue-900"
                  aria-label={title}
                >
                  <b>{title}</b>
                </a>
                <br />
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (
      a: { publishedAt: string | number | Date },
      b: { publishedAt: string | number | Date }
    ) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return {
    props: {
      posts,
    },
  };
};
