import { Link } from "react-router-dom";

function AdminProfile() {
  const profile = {
    firstName: "Juan",
    lastName: "Dela Cruz",
    username: "Juan123",
    password: "********",
    dob: "1990-05-15",
    gender: "Male",
    address: "10 Downing St, London SW1A 2AA, UK",
    primaryEmail: "Juandelacruz@gmail.com",
    secondaryEmail: "juandelacruz.alt@gmail.com",
    profilePic:
      "https://i.pinimg.com/736x/85/e6/47/85e64767b129d2cae2d1c47b1ed0aece.jpg", // Replace with actual profile picture URL
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#E8F9FF] to-[#C4D9FF]">
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

      <div className="flex-1 ml-[20%] h-screen overflow-auto p-10 flex flex-col items-center">
        <div className="bg-white p-8 shadow-xl rounded-lg w-full h-full text-center">
          <div className="flex justify-center">
            <img
              src={profile.profilePic}
              alt="Profile"
              className="w-90 h-90 rounded-full border-4 border-[#C4D9FF] shadow-md"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-gray-600 text-lg">@{profile.username}</p>

          <div className="mt-10 grid grid-cols-2 gap-6 text-left">
            <p className="text-lg font-semibold text-gray-700">
              Date of Birth: <span className="font-normal">{profile.dob}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Gender: <span className="font-normal">{profile.gender}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Address: <span className="font-normal">{profile.address}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Primary Email:{" "}
              <span className="font-normal">{profile.primaryEmail}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Secondary Email:{" "}
              <span className="font-normal">{profile.secondaryEmail}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Password: <span className="font-normal">{profile.password}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
