import { Link } from "react-router-dom";

function NotFound() {
  function temporaryclose() {
    alert("This is not working yet");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#E8F9FF] to-[#C4D9FF] text-center px-6">
      {/* 404 Number */}
      <h1 className="text-9xl font-extrabold text-gray-800 drop-shadow-md">
        404
      </h1>

      {/* Page Not Found Message */}
      <h2 className="text-3xl font-bold text-gray-800 mt-4">
        OOPS! PAGE NOT FOUND
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Sorry, the page you're looking for doesn't exist. If you think something
        is broken, please report it.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          RETURN HOME
        </Link>
        <a
          href="#"
          onClick={temporaryclose}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
        >
          REPORT A PROBLEM
        </a>
      </div>
    </div>
  );
}

export default NotFound;
