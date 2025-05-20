// import React, { useEffect, useState } from "react";
// import FoodData from "../data/FoodData.js";
// import { useDispatch, useSelector } from "react-redux";
// import { setCategory } from "../redux/slices/CategorySlice.jsx";

// const CategoryMenu = ({ onCategorySelect }) => {
//   const [categories, setCategories] = useState([]);

//   const ListUniqueCategories = () => {
//     const uniqueCategories = [
//       ...new Set(FoodData.map((food) => food.category)),
//     ];
//     setCategories(uniqueCategories);
//   };

//   const handleCategoryClick = (category) => {
//     onCategorySelect(category); // This will pass the selected category to the parent
//   };

//   useEffect(() => {
//     ListUniqueCategories(); // Call the function to get unique categories on component mount and update on category changes.
//   }, []);

//   const dispatch = useDispatch();
//   const selectCategory = useSelector((state) => state.category.category);

//   return (
//     <div className="mx-6">
//       <h3 className="text-xl font-semibold">Find the best food</h3>
//       <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
//         <button
//           onClick={() => dispatch(setCategory("All"))}
//           className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
//             selectCategory === "All" && "bg-green-500 text-white"
//           }`}
//         >
//           All
//         </button>
//         {categories.map((category, index) => {
//           return (
//             <button
//               onClick={() => dispatch(setCategory(category))}
//               key={index}
//               className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 
//               ${selectCategory === category && "bg-green-500 text-white"}`}
//             >
//               {category}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;








import React, { useEffect, useState, useRef } from "react";
import FoodData from "../data/FoodData.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice.jsx";

const CategoryMenu = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  // Generate unique categories with count
  const listUniqueCategories = () => {
    const categoryMap = new Map();
    FoodData.forEach((food) => {
      const cat = food.category;
      categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
    });
    setCategories(Array.from(categoryMap.entries())); // [ [category, count], ... ]
  };

  // Scroll to selected category smoothly
  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector(".active-category");
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }, [selectedCategory]);

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    onCategorySelect?.(category);
  };

  const handleClear = () => {
    dispatch(setCategory("All"));
    setSearchTerm("");
  };

  return (
    <div className="mx-6 sticky top-0 bg-white z-10 pb-2">
      <h3 className="text-xl font-semibold mt-2">Find the best food</h3>

      {/* Search Filter */}
      {/* <input
        type="text"
        placeholder="Search category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-3 p-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      /> */}

      {/* Category List */}
      <div
        className="my-5 flex gap-3 overflow-x-auto scroll-smooth py-2 scrollbar-hide"
        ref={scrollRef}
      >
        <button
          onClick={handleClear}
          className={`px-3 py-2 border font-bold rounded-lg transition-colors duration-200 ${
            selectedCategory === "All"
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-green-500 hover:text-white"
          }`}
        >
          All
        </button>

        {categories
          .filter(([category]) =>
            category.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(([category, count], index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`relative px-3 py-2 font-bold rounded-lg whitespace-nowrap transition duration-200 ${
                selectedCategory === category
                  ? "bg-green-500 text-white active-category"
                  : "bg-gray-200 hover:bg-green-500 hover:text-white"
              }`}
            >
              {category}
              <span className="ml-1 text-xs text-gray-700 bg-white rounded-full px-1.5 py-0.5">
                ({count})
              </span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default CategoryMenu;

