import { Link, LoaderFunction, useLoaderData } from "react-router-dom"

export const blogLoader: LoaderFunction = async () => {
  const data = fetch(`http://127.0.0.1:7567/api/blog`)
    .then(response => response)
  return data
}

const Blog = () => {
  const data = useLoaderData() as Array<string>;

  return (
    <ul className="flex flex-col items-start max-w-3xl w-full break-words p-4 gap-2">
      {data.map((entry) => {
        return <li><Link to="/blog/1">{entry}</Link></li>
      })}
    </ul>
  )
}

export default Blog
