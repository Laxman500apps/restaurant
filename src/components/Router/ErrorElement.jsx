import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div>
      <h3>OOps!!! There is an error</h3>
      <h3>
        {error.status} {error.statusText}
      </h3>
    </div>
  );
};
export default ErrorElement;
