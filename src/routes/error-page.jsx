// import { useState } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  //   const [message, setErrorMessage] = useState("");
  const message = "waduh";

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {error.status} {message}
        </i>
      </p>
    </div>
  );
}
