import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SwiperStart from './components/swiper/SwiperStart'
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
import QuillEditor from "./pages/text_editors/Quill.page";
import CkApp from "./pages/text_editors/CkEditor";
import LottieComponent from "./components/lottie/Lottie.components";
import ResponsiveAppBar from "./components/material/AppBar.component";

// import NotFound from "../not-found";


const App = () => {


  return (
    <div className="">
       {/* <ResponsiveAppBar /> */}
      <div className="main container z-[1000] scrollbar-hide mx-auto w-full ">
      <NavComponents />
     

      <div className="pt-20 overflow-y-auto ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/lottie" element={<LottieComponent />} />

        


        <Route path="/form" element={<FormPage />} />
        <Route path="/quill" element={<CkApp />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
        <Route path="/products/:productId" element={<ShowProduct />} />
        <Route path="/product" element={<AllProducts />}>    
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

     
      </div>
    </div>

    <SwiperStart />
    </div>
    
  );
};

export default App;

// custom hook
// => build in hook => useState,useEffect,useRef,useContext,useReducer,useLayoutEffect,useId,useTransition,useCallback,useMemo etc...
// => lib provide hook => useParams,useNavigate,useLocation,useSearchParams
// => useFetch
