import { ErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <>
      <h1>Whoops</h1>
      <div>
        {error.status} {error.statusText}
      </div>
    </>
  );
};

export default Error;
