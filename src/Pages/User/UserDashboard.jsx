import { Link } from "react-router-dom";

function UserDashboard() {
  const profile = {
    firstName: "Juan",
    lastName: "Rico Alentijo",
    username: "rico123",
    password: "********",
    dob: "1999-05-04",
    gender: "Male",
    address: "10 Poblacion, Banaybanay, Dvao Oriental",
    primaryEmail: "ricoalentijo@gmail.com",
    secondaryEmail: "secondaryrico.alt@gmail.com",
    profilePic:
      "https://i.pinimg.com/736x/5b/4b/bb/5b4bbb418353b2c0411e5367491b96be.jpg", // Replace with actual profile picture URL
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#E8F9FF] to-[#C4D9FF]">
      <div className="flex-1 h-screen overflow-auto p-10 flex flex-col items-center justify-center">
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

export default UserDashboard;
