import { configureStore} from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store=configureStore({
    reducer: {
        cart:CartSlice,
        category: CategorySlice,  // Assuming you have a separate slice for categories. If not, you can combine them into one slice.  // Replace CategorySlice with your actual slice name.  // Also, make sure to add the necessary imports and actions in your slices.  // For example, if you have a slice for categories, you would import it like this: import { createSlice } from '@reduxjs/toolkit'; import { fetchCategories } from '../api/categories'; const
        search:SearchSlice,
    }
});
export default Store;