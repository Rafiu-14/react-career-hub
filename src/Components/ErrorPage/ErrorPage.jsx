import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center mt-52 overflow-hidden" id="error-page">
      <p className="text-red-500 animate-bounce">404Error</p>
      <h1 className="text-4xl font-extrabold animate-spin">!</h1>
      <button className="bg-red-900 text-white p-2 mt-5 text-center rounded-3xl text-9xl font-extrabold animate-pulse"><NavLink to='/'>Go Back To Home</NavLink></button>
    </div>
  );
}