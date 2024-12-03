// import { useLoaderData } from "@tanstack/react-router";

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

function Blog() {
  // const data = useLoaderData({ from: '/blog/$postId' });

  return (
    <ul className="flex flex-col items-start max-w-3xl w-full break-words p-4 gap-2">
      blog
      {/* {data.length == 0 ? (
        <h1>no blog posts, yet</h1>
      ) : (
        data.map((entry) => {
          return (
            <li>
              <Link to={`/blog/${entry}`}>{entry}</Link>
            </li>
          );
        })
      )} */}
    </ul>
  )
}