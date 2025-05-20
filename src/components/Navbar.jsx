// import React from "react";
// import { useDispatch } from "react-redux";
// import { setSearch } from "../redux/slices/SearchSlice";
// const Navbar = () => {
//   const dispatch = useDispatch();
//   return (
//     <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
//       <div>
//         <h3 className="text-xl font-bold text-gray-600">
//           {new Date().toUTCString().slice(0, 16)}
//         </h3>
//         <h1 className="text-2xl font-bold">Flavoro Foods</h1>
//       </div>
//       <div>
//         <input
//           type="search"
//           name="search"
//           id=""
//           placeholder="Search here"
//           autoComplete="off"
//           onChange={(e) => {
//             dispatch(setSearch(e.target.value));
//           }}
//           className="border-2 border-gray-300 text-sm rounded-lg w-full pl-3 focus:outline-none lg:w-[25vw]"
//         />
//       </div>
//     </nav>
//   );
// };
// export default Navbar;


import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { Search } from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between flex-wrap lg:flex-nowrap py-3 mx-6 mb-10 gap-4">
      {/* Left: Branding and Date */}
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>

      {/* Right: Search bar aligned to right */}
      <div className="relative ml-auto w-full lg:w-[25vw]">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-black" /> {/* <- Black icon */}
        </span>
       <input
           type="search"
           name="search"
           placeholder="Search here"
           autoComplete="off"
           onChange={(e) => dispatch(setSearch(e.target.value))}
           className="w-full pl-10 pr-3 py-2 border-2 border-gray-900 text-sm rounded-lg focus:outline-none shadow-lg shadow-black/50"
        />

      </div>
    </nav>
  );
};

export default Navbar;


