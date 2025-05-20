// import React from "react";
// import FoodCard from "./FoodCard";
// import FoodData from "../data/FoodData.js";
// import toast, { Toaster } from "react-hot-toast";
// import { useSelector } from "react-redux";

// const FoodItems = () => {
//   const category = useSelector((state) => state.category.category);
//   const search = useSelector((state) => state.search.search);
//   const handleToast = (name) => {
//     toast.success(`${name} added to cart successfully!`, {
//       position: "top-center",
//       duration: 2000,
//     });
//   };

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
//         {FoodData.filter((food) => {
//           if (category === "All") {
//             return food.name.toLowerCase().includes(search.toLowerCase());
//           } 
//           else{
//             return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())

//           }
  
//         }).map((food) => (
//           <FoodCard
//             key={food.id}
//             id={food.id}
//             name={food.name}
//             price={food.price}
//             img={food.img}
//             desc={food.desc}
//             rating={food.rating}
//             handleToast={handleToast} // Pass handleToast to FoodCard
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default FoodItems;










// import React, { useState } from "react";
// import FoodCard from "./FoodCard";
// import FoodData from "../data/FoodData.js";
// import toast, { Toaster } from "react-hot-toast";
// import { useSelector } from "react-redux";

// const FoodItems = () => {
//   const category = useSelector((state) => state.category.category);
//   const search = useSelector((state) => state.search.search);
//   const [sortBy, setSortBy] = useState(""); // sorting state

//   const handleToast = (name) => {
//     toast.success(`${name} added to cart successfully!`, {
//       position: "top-center",
//       duration: 2000,
//     });
//   };

//   // Filter food items by category and search
//   let filteredFood = FoodData.filter((food) => {
//     if (category === "All") {
//       return food.name.toLowerCase().includes(search.toLowerCase());
//     } else {
//       return (
//         category === food.category &&
//         food.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }
//   });

//   // Sort filtered food based on sortBy
//   if (sortBy === "price-asc") {
//     filteredFood.sort((a, b) => a.price - b.price);
//   } else if (sortBy === "price-desc") {
//     filteredFood.sort((a, b) => b.price - a.price);
//   } else if (sortBy === "rating-desc") {
//     filteredFood.sort((a, b) => b.rating - a.rating);
//   }

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />
//       {/* Sort Dropdown */}
//       <div className="flex justify-end p-5">
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="p-2 border rounded-md"
//           aria-label="Sort food items"
//         >
//           <option value="">Sort By</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="rating-desc">Rating: High to Low</option>
//         </select>
//       </div>

//       {/* Food Items Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
//         {filteredFood.length > 0 ? (
//           filteredFood.map((food) => (
//             <FoodCard
//               key={food.id}
//               id={food.id}
//               name={food.name}
//               price={food.price}
//               img={food.img}
//               desc={food.desc}
//               rating={food.rating}
//               handleToast={handleToast} // Pass handleToast to FoodCard
//             />
//           ))
//         ) : (
//           <h2 className="col-span-full text-center text-xl font-semibold text-gray-600 mt-10">
//             No items found matching your criteria.
//           </h2>
//         )}
//       </div>
//     </>
//   );
// };

// export default FoodItems;






// import React, { useState } from "react";
// import FoodCard from "./FoodCard";
// import FoodData from "../data/FoodData.js";
// import toast, { Toaster } from "react-hot-toast";
// import { useSelector, useDispatch } from "react-redux";
// import { setCategory } from "../redux/slices/CategorySlice"; // assuming you have this slice
// import { setSearch } from "../redux/slices/SearchSlice"; // assuming you have this slice

// const FoodItems = () => {
//   const dispatch = useDispatch();
//   const category = useSelector((state) => state.category.category);
//   const search = useSelector((state) => state.search.search);
//   const [sortBy, setSortBy] = useState("");

//   const handleToast = (name) => {
//     toast.success(`${name} added to cart successfully!`, {
//       position: "top-center",
//       duration: 2000,
//     });
//   };

//   // Filter food items by category and search
//   let filteredFood = FoodData.filter((food) => {
//     if (category === "All") {
//       return food.name.toLowerCase().includes(search.toLowerCase());
//     } else {
//       return (
//         category === food.category &&
//         food.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }
//   });

//   // Sort filtered food based on sortBy
//   if (sortBy === "price-asc") {
//     filteredFood.sort((a, b) => a.price - b.price);
//   } else if (sortBy === "price-desc") {
//     filteredFood.sort((a, b) => b.price - a.price);
//   } else if (sortBy === "rating-desc") {
//     filteredFood.sort((a, b) => b.rating - a.rating);
//   }

//   // Clear filters handler
//   const clearFilters = () => {
//     dispatch(setCategory("All"));
//     dispatch(setSearch(""));
//     setSortBy("");
//   };

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />

//       {/* Controls Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-center p-5 gap-4">
//         <div>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="p-2 border rounded-md shadow-md"
//             aria-label="Sort food items"
//           >
//             <option value="">Sort By</option>
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//             <option value="rating-desc">Rating: High to Low</option>
//           </select>
//         </div>

//         <button
//           onClick={clearFilters}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors"
//           aria-label="Clear all filters"
//         >
//           Clear Filters
//         </button>
//       </div>

//       {/* Item count */}
//       <div className="px-5 text-gray-700 font-semibold mb-2">
//         Showing {filteredFood.length} item{filteredFood.length !== 1 ? "s" : ""}
//       </div>

//       {/* Food Items Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
//         {filteredFood.length > 0 ? (
//           filteredFood.map((food) => (
//             <div
//               key={food.id}
//               className="transform hover:scale-105 transition-transform duration-300"
//             >
//               <FoodCard
//                 id={food.id}
//                 name={food.name}
//                 price={food.price}
//                 img={food.img}
//                 desc={food.desc}
//                 rating={food.rating}
//                 handleToast={handleToast}
//               />
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full flex flex-col items-center justify-center mt-10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-20 w-20 text-gray-300 mb-4 animate-pulse"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 14l2-2 4 4m6-6a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h2 className="text-xl font-semibold text-gray-500">
//               No items found matching your criteria.
//             </h2>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default FoodItems;






import React, { useState, useMemo } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { setSearch } from "../redux/slices/SearchSlice";

const ITEMS_PER_PAGE = 8;

const FoodItems = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);

  // Favorites stored in local state (you can extend to redux/localStorage)
  const [favorites, setFavorites] = useState(() => {
    // Load from localStorage or start empty
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Toggle favorite handler
  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      const newFavs = isFav ? prev.filter((fid) => fid !== id) : [...prev, id];
      localStorage.setItem("favorites", JSON.stringify(newFavs)); // persist favorites
      return newFavs;
    });
  };

  const handleToast = (name) => {
    toast.success(`${name} added to cart successfully!`, {
      position: "top-center",
      duration: 2000,
    });
  };

  // useMemo to avoid recalculating on every render
  const filteredAndSortedFood = useMemo(() => {
    let filteredFood = FoodData.filter((food) => {
      if (category === "All") {
        return food.name.toLowerCase().includes(search.toLowerCase());
      } else {
        return (
          category === food.category &&
          food.name.toLowerCase().includes(search.toLowerCase())
        );
      }
    });

    if (sortBy === "price-asc") {
      filteredFood.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filteredFood.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-desc") {
      filteredFood.sort((a, b) => b.rating - a.rating);
    }

    return filteredFood;
  }, [category, search, sortBy]);

  // Pagination logic
  const pageCount = Math.ceil(filteredAndSortedFood.length / ITEMS_PER_PAGE);
  const currentPageItems = filteredAndSortedFood.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const clearFilters = () => {
    dispatch(setCategory("All"));
    dispatch(setSearch(""));
    setSortBy("");
    setPage(1);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-5 gap-4">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
          className="p-2 border rounded-md shadow-md"
          aria-label="Sort food items"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
        </select>

        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors"
          aria-label="Clear all filters"
        >
          Clear Filters
        </button>
      </div>

      {/* Item count */}
      <div className="px-5 text-gray-700 font-semibold mb-2">
        Showing {filteredAndSortedFood.length} item
        {filteredAndSortedFood.length !== 1 ? "s" : ""}
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
        {currentPageItems.length > 0 ? (
          currentPageItems.map((food) => (
            <div
              key={food.id}
              className="transform hover:scale-105 transition-transform duration-300 relative"
            >
              <FoodCard
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                desc={food.desc}
                rating={food.rating}
                handleToast={handleToast}
              />
              {/* Favorite toggle button */}
              <button
                onClick={() => toggleFavorite(food.id)}
                className={`absolute top-2 right-2 text-2xl ${
                  favorites.includes(food.id) ? "text-red-500" : "text-gray-300"
                } hover:text-red-600 transition-colors`}
                aria-label={
                  favorites.includes(food.id)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                ♥
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-300 mb-4 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 14l2-2 4 4m6-6a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-gray-500">
              No items found matching your criteria.
            </h2>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {pageCount > 1 && (
        <div className="flex justify-center gap-3 my-5">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(pageCount)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`px-3 py-1 rounded ${
                page === idx + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default FoodItems;

