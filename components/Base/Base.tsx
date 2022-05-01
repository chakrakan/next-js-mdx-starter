import Link from "next/link";
import { PropsWithChildren } from "react";

type BaseProps = PropsWithChildren<{
  children: React.ReactNode;
}>;

export default function Base({ children }: BaseProps) {
  return (
    <>
      <div className="prose-a:text-sky-500 prose-a:no-underline prose-a:transition hover:prose-a:text-sky-600">
        <div className="max-w-[700px] mx-auto flex flex-col min-h-screen px-8 sm:px-4 prose">
          <nav className="flex space-x-5 mt-5 mb-10">
            <Link href="/">
              <a aria-label="Home">Home</a>
            </Link>
            <Link href="/posts">
              <a aria-label="Posts">Posts</a>
            </Link>
          </nav>
          <main className="text-gray-700 flex-grow">{children}</main>
          <div className="my-5 pt-5 border-t-2 border-dotted border-t-slate-600">
            Created by{" "}
            <a target="_blank" rel="noreferrer" href="https://devkanisk.com">
              Kanisk Chakraborty
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
