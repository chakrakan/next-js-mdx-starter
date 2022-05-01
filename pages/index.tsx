import { SeoContainer } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <SeoContainer
      title={"NextJS Contentlayer Starter"}
      description={
        "A starter template for NextJS leveraging Contentlayer + MDX to get you started fast!"
      }
      url={"next-js-mdx-starter.vercel.app"}
    >
      <p>Hello, welcome to my MDX blog!</p>
      <p>
        If you liked this starter, go ahead and leave a star on the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/chakrakan/next-js-mdx-starter"
        >
          Github Repo
        </a>
        !
      </p>
    </SeoContainer>
  );
};

export default Home;
