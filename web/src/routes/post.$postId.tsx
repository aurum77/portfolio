import { createFileRoute, notFound } from "@tanstack/react-router";
import DOMPurify from "dompurify";

export const Route = createFileRoute("/post/$postId")({
  loader: async ({ params: { postId } }) => {
    const URI = import.meta.env.VITE_BACKEND_URI;
    const res = await fetch(`${URI}/api/blog/${postId}`);

    if (res.status == 404) {
      throw notFound();
    }

    return await res.text();
  },
  component: () => {
    const data = Route.useLoaderData() as string;
    const sanitized = DOMPurify.sanitize(data);

    return (
      <div
        dangerouslySetInnerHTML={{ __html: sanitized }}
        id="post"
        className="flex flex-col items-start max-w-3xl w-full break-words p-4"
      ></div>
    );
  },
  notFoundComponent: () => {
    return (
      <div
        id="post"
        className="flex flex-col items-start max-w-3xl w-full break-words p-4"
      >
        blog post not found !
      </div>
    );
  },
});
