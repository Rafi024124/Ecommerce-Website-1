import { products } from "../../productionContents";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: products,
    filteredItems: products,
    searchTerm: "",
    selectedCategory: "All"
}



const filteredProductsSearch = (state) => {
    return state.items.filter((product) => {
      const matchSearch = product.title.toLowerCase().includes(state.searchTerm.toLowerCase());
      
      
      
      
      return matchSearch;
    });
  };
  const filteredProductsCategory = (state) => {
    return state.items.filter((product) => {
      
      const matchCategory = state.selectedCategory === "All" || product.category === state.selectedCategory;
      
      
      
      return matchCategory;
    });
  };

const productSlice = createSlice({

    name: products,
    initialState,
    reducers: {
     setSearchItem:(state,action)=>{

        state.searchTerm = action.payload,
        state.filteredItems = filteredProductsSearch(state)

     },
     setSelectedCategory:(state,action)=>{

        state.selectedCategory = action.payload,
        state.filteredItems = filteredProductsCategory(state)
       
     }

    }


})


export const {setSearchItem,setSelectedCategory} = productSlice.actions
export default productSlice.reducer


