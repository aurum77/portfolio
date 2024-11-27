import { ErrorResponse, Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gruvbox-base text-gruvbox-fg">
      <h1 className="text-center">Whoops, something went very wrong 😿</h1>
      <div>
        {error.status} {error.statusText}
      </div>
      <div>
        <Link to="/">Go back to the home page</Link>
      </div>
    </div>
  );
};

export default Error;
