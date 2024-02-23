import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './index.css'
import {
 HomePage,
 AllProducts,
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
    <div className="main container mx-auto">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
        <Route path="/products/:productId" element={<ShowProduct />} />
        <Route path="/product" element={<AllProducts />}>    
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default App;

// custom hook
// => build in hook => useState,useEffect,useRef,useContext,useReducer,useLayoutEffect,useId,useTransition,useCallback,useMemo etc...
// => lib provide hook => useParams,useNavigate,useLocation,useSearchParams
// => useFetch
