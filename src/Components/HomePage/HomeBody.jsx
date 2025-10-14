import { MdEvent, MdAttachMoney, MdSchool } from "react-icons/md";

const HomeBody = () => {
  return (
    <div className=" w-full max-w-[100vw] min-h-screen pt-10 px-2 md:px-8 bg-gradient-to-br from-blue-50 via-lightseeblue to-blue-400 transition-all gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="bg-gradient-to-br from-white via-blue-100 to-blue-200 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h3 className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
            <MdEvent /> Upcoming Event
          </h3>
          <p className="text-2xl font-bold mt-2 text-blue-900">
            Tech Fest 2025
          </p>
          <p className="text-gray-600">21 Oct</p>
        </div>

        <div className="bg-gradient-to-br from-white via-blue-100 to-blue-200 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h3 className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
            <MdAttachMoney /> Fees Pending
          </h3>
          <p className="text-2xl font-bold mt-2 text-blue-900">₹12,500</p>
          <p className="text-gray-600">Due before 31 Oct</p>
        </div>

        <div className="bg-gradient-to-br from-white via-blue-100 to-blue-200 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h3 className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
            <MdSchool /> Attendance
          </h3>
          <p className="text-2xl font-bold mt-2 text-blue-900">84%</p>
          <p className="text-gray-600">Present this semester</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
