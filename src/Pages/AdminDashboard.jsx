import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [1200, 1900, 3000, 5000, 2200, 3300, 4500],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-[#FBFBFB] bg-gradient-to-br from-[#E8F9FF] to-[#C4D9FF]">
      <nav className="bg-white shadow-lg w-1/5 h-screen fixed left-0 top-0 flex flex-col p-5">
        <h1 className="text-3xl font-bold text-gray-800 text-center mt-5">
          Dashboard
        </h1>
        <ul className="space-y-6 mt-6">
          <li>
            <Link
              to="/AdminDashboard"
              className="flex items-center px-5 py-3 font-semibold text-gray-700 hover:bg-[#C4D9FF] transition"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/AdminProfile"
              className="flex items-center px-5 py-3 font-semibold text-gray-700 hover:bg-[#C4D9FF] transition"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center px-5 py-3 font-semibold text-gray-700 hover:bg-[#C4D9FF] transition"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center px-5 py-3 font-semibold text-gray-700 hover:bg-[#C4D9FF] transition"
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex-1 ml-[20%] h-screen overflow-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Dashboard Overview
        </h2>
        <p className="text-gray-600">
          This section contains dashboard widgets and sales stats.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-4xl font-bold">1,234</p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-4xl font-bold">$15,678</p>
          </div>
        </div>

        <div className="mt-10 bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Sales Trend
          </h3>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
