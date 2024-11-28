import { Link, LoaderFunction, useLoaderData } from "react-router-dom";

export const blogLoader: LoaderFunction = async () => {
  const data = await fetch(`http://127.0.0.1/api/blog`).then(
    (response) => response,
  );
  return data;
};

const Blog = () => {
  const data = useLoaderData() as Array<string>;

  return (
    <ul className="flex flex-col items-start max-w-3xl w-full break-words p-4 gap-2">
      {data.length == 0 ? <h1>no blog posts, yet</h1> : data.map((entry) => {
        return (
          <li>
            <Link to={`/blog/${entry}`}>{entry}</Link>
          </li>
        )
      })}
    </ul>
  );
};

export default Blog;
