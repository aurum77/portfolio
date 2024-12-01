import DOMPurify from "dompurify";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { BACKEND_URI } from "../config";

export const postLoader: LoaderFunction = async ({ params }) => {
  const post = await fetch(`${BACKEND_URI}/api/blog/${params.postId}`).then(
    (response) => response,
  );

  return post;
};

const Post = () => {
  const data = useLoaderData() as string;
  const sanitized = DOMPurify.sanitize(data);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitized }}
      className="flex flex-col items-start max-w-3xl w-full break-words p-4"
    ></div>
  );
};

export default Post;
