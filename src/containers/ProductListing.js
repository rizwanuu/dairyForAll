import React from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../redux/actions/productsActions";
// import ProductComponent from "./ProductComponent";
import '../css/ProductListing.css';
import diary from '../assest/diary.PNG';
import { RiAddBoxFill } from 'react-icons/ri'

const ProductPage = () => {
  // const products = useSelector((state) => state.allProducts.products);
  // const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // console.log("Products :", products);
  return (
    // <div className="ui grid container">
    //   <ProductComponent />
    // </div>
    <div className="addDiary">
      <img className="diaryImage" src={diary} alt="img" />
      {/* <div>
        No Diary's Create a Diary From Diary's tab or use the button button below to start.
      </div> */}
      <p>No Diary's</p>
      <p>Create a Diary From</p>
      <p>Diary's tab or use the button  </p>
      <p>button below to start.</p>
      <RiAddBoxFill className="diaryIcon" />
    </div>
  );
};

export default ProductPage;
