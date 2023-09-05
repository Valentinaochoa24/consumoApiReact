import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
   <body class="bg-gray-100 h-screen flex items-center justify-center">
   <div id="error-page" class="text-center">
       <h1 class="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
       <p class="text-lg text-gray-600 mb-2">Sorry, an unexpected error has occurred.</p>
       <p class="mb-4">
           <i class="text-red-500">{error.statusText || error.message}</i>
       </p>
       <a href="/" class="text-blue-500 hover:underline">Go back to homepage</a>
   </div>
</body>
  );
}