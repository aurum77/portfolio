import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  loader: async () => {
    const res = await fetch("/api/blog");
    if (!res.ok) throw new Error("failed to fetch");

    return res.json();
  },
  component: () => {
    const data = Route.useLoaderData() as string[];

    return (
      <ul id="blog" className="flex flex-col items-start max-w-3xl w-full break-words p-4 gap-2">
        <h1 className="mb-0">Posts</h1>
        {data.length == 0 ? (
          <h1>no blog posts, yet</h1>
        ) : (
          <ul>
            {data.map((postId) => {
              return (
                <li>
                  <Link
                    key={postId}
                    to={`/post/$postId`}
                    params={{ postId: postId }}
                  >
                    {postId}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </ul>
    );
  },
});
