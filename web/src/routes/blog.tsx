import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { BACKEND_URI } from "../config";

export const Route = createFileRoute('/blog')({
  component: Blog,
  loader: blogLoader
})

async function blogLoader() {
  const res = await fetch(`${BACKEND_URI}/api/blog`)
  if (!res.ok) throw new Error("failed to fetch")

  return res.json();
};

function Blog() {
  const data = Route.useLoaderData() as string[];

  return (
    <ul className="flex flex-col items-start max-w-3xl w-full break-words p-4 gap-2">
      {data.length == 0 ? (
        <h1>no blog posts, yet</h1>
      ) : (
        data.map((postId) => {
          return (
            <li>
              <Link to={`/post/${postId}`}>{postId}</Link>
            </li>
          );
        })
      )}
    </ul>
  )
}