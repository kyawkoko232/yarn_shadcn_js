import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './index.css'
import {
 HomePage,
 AllProducts,
 Login,
 Register,
 AddNewProduct,
 UpdateProduct,
 DeleteProduct,
 ShowProduct
} from "./pages";
import NavComponents from "./components/Nav.components";
import FormPage from "./pages/forms/Form.page";

// import NotFound from "../not-found";


const App = () => {


  return (
    <div className="bg-secondary  h-screen">
      <div className="main container z-[1000] scrollbar-hide mx-auto w-full ">
      <NavComponents />

      <div className="pt-20 overflow-y-auto ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/form" element={<FormPage />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
        <Route path="/products/:productId" element={<ShowProduct />} />
        <Route path="/product" element={<AllProducts />}>    
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </div>
    </div>
    </div>
    
  );
};

export default App;

// custom hook
// => build in hook => useState,useEffect,useRef,useContext,useReducer,useLayoutEffect,useId,useTransition,useCallback,useMemo etc...
// => lib provide hook => useParams,useNavigate,useLocation,useSearchParams
// => useFetch
