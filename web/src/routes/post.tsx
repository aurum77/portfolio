import { LoaderFunction, useLoaderData } from "react-router-dom"

export const postLoader: LoaderFunction = async () => {
  const data = fetch(`http://127.0.0.1:7567/api`)
    .then(response => response)
  console.log(data)
  return data
}

const Post = () => {
  const data = useLoaderData() as string;

  return (
    <div className="flex flex-col items-start max-w-3xl w-full break-words p-4">
      <div>data from the backend {data}</div>
      <h1>Asp.Net Core'a Nasil Merhaba Deriz?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat vel nibh placerat mattis. Phasellus ut massa eget enim dignissim lacinia sed at dolor. Sed a sollicitudin neque. Nunc odio quam, blandit at vehicula dignissim, porttitor at lorem. Maecenas vel risus varius, vulputate nisl at, egestas ipsum. Vivamus mi lorem, pellentesque congue neque placerat, venenatis volutpat orci. Quisque porta dictum est, at placerat arcu imperdiet sed. Pellentesque volutpat convallis diam in dictum. Nunc consectetur interdum quam, non laoreet turpis congue id. Pellentesque nec tristique urna. Nam ut velit lacinia, cursus justo vel, porttitor tellus. Nam sollicitudin vel tortor et efficitur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat vel nibh placerat mattis. Phasellus ut massa eget enim dignissim lacinia sed at dolor. Sed a sollicitudin neque. Nunc odio quam, blandit at vehicula dignissim, porttitor at lorem. Maecenas vel risus varius, vulputate nisl at, egestas ipsum. Vivamus mi lorem, pellentesque congue neque placerat, venenatis volutpat orci. Quisque porta dictum est, at placerat arcu imperdiet sed. Pellentesque volutpat convallis diam in dictum. Nunc consectetur interdum quam, non laoreet turpis congue id. Pellentesque nec tristique urna. Nam ut velit lacinia, cursus justo vel, porttitor tellus. Nam sollicitudin vel tortor et efficitur.
      </p>
      <h2>Dolor sit amet h2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat vel nibh placerat mattis. Phasellus ut massa eget enim dignissim lacinia sed at dolor. Sed a sollicitudin neque. Nunc odio quam, blandit at vehicula dignissim, porttitor at lorem. Maecenas vel risus varius, vulputate nisl at, egestas ipsum. Vivamus mi lorem, pellentesque congue neque placerat, venenatis volutpat orci. Quisque porta dictum est, at placerat arcu imperdiet sed. Pellentesque volutpat convallis diam in dictum. Nunc consectetur interdum quam, non laoreet turpis congue id. Pellentesque nec tristique urna. Nam ut velit lacinia, cursus justo vel, porttitor tellus. Nam sollicitudin vel tortor et efficitur.
      </p>
      <h3>Dolor sit amet h3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat vel nibh placerat mattis. Phasellus ut massa eget enim dignissim lacinia sed at dolor. Sed a sollicitudin neque. Nunc odio quam, blandit at vehicula dignissim, porttitor at lorem. Maecenas vel risus varius, vulputate nisl at, egestas ipsum. Vivamus mi lorem, pellentesque congue neque placerat, venenatis volutpat orci. Quisque porta dictum est, at placerat arcu imperdiet sed. Pellentesque volutpat convallis diam in dictum. Nunc consectetur interdum quam, non laoreet turpis congue id. Pellentesque nec tristique urna. Nam ut velit lacinia, cursus justo vel, porttitor tellus. Nam sollicitudin vel tortor et efficitur.
      </p>
    </div>

  )
}

export default Post