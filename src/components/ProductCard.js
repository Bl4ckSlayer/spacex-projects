import React from "react";
import { format } from "date-fns";
import { useGetAllLunchesQuery } from "../api/ApiSlice";
// import { BiListPlus } from "react-icons/bi";
// import { useProducts } from "../context/ProductProvider";
// import { actionTypes } from "../state/ProductState/actionTypes";

const ProductCard = ({ product }) => {
  //   const { dispatch } = useGetAllLunchesQuery();

  return (
    <div className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-600 ">
      <div className="h-52 w-52 mx-auto">
        <img src={product.links.mission_patch_small} alt={product.model} />
      </div>
      <h1 className="font-bold text-center mt-6">
        <span className="text-red-700"> Flight No :</span>{" "}
        {product.flight_number}
      </h1>
      <p className="text-center font-semibold mb-3">
        Launch Date:
        {format(new Date(product.launch_date_local), "dd MMMM yyyy")}
      </p>
      {/* <p className="text-center font-semibold mb-3">
        Mission  {product.mission_id}
      </p> */}
      <p className="text-center font-semibold mb-3">
        Mission Name : {product.mission_name}
      </p>
      <p className="text-center font-semibold mb-3">
        Launch Year : {product.launch_year}
      </p>
      <p className="text-center font-semibold mb-3">
        Rocket Name : {product.rocket.rocket_name}
      </p>
      <p className="text-center font-semibold mb-3">
        UpComing :{" "}
        {product.upcoming === false ? (
          <span className="text-red-500">No</span>
        ) : (
          <span className="text-green-500">Yes</span>
        )}
      </p>
      <p className="text-center font-semibold mb-3">
        Launch Status :
        {product.launch_success === false ? (
          <span className="text-red-700">Failure</span>
        ) : (
          <span className="text-green-500">Success</span>
        )}
      </p>
    </div>
  );
};

export default ProductCard;
