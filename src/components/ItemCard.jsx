import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";

const ItemCart = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
      {/* Delete button */}
      <MdDelete
        onClick={() =>{ dispatch(removeFromCart({ id, img, name, price, qty }))
        toast(`${name} Removed!`,{
          icon:"👋"
           
        })
      }}
        className="absolute right-2 text-gray-600 cursor-pointer"
      />

      {/* Image */}
      <img src={img} alt="Food item" className="w-[50px] h-[50px]" />

      {/* Product details */}
      <div className="leading-5 flex-1">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">₹{price}</span>

          {/* Quantity controls */}
          <div className="flex justify-center items-center gap-2">
            <AiOutlineMinus
              onClick={() => qty > 1 && dispatch(decrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
