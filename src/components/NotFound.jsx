/* eslint-disable react/prop-types */
import "../index.css";
function NotFound({ title }) {
  return (
    <div className="mt-4 h-screen text-4xl w-screen flex      ">
      {title}
      <span className=" ms-2  border-8 border-t-8 border-t-blue-500 border-gray-300 rounded-full w-12 h-12 animate-spin"></span>
    </div>
  );
}
export default NotFound;
