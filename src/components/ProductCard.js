import React from "react";
import { format } from "date-fns";

const ProductCard = ({ product }) => {
  //   const { dispatch } = useGetAllLunchesQuery();

  return (
    <div className="shadow-lg rounded-3xl border  p-3 flex flex-col text-black text-start ">
      <div className="h-52 w-52 mx-auto">
        <img src={product.links.mission_patch_small} alt={product.model} />
      </div>
      <div className="bg-indigo-400 border rounded-3xl p-4">
        <h1 className="font-bold  mt-4">
          <span className="text-green-500"> Flight No :</span>{" "}
          {product.flight_number}
        </h1>
        <p className=" font-semibold mb-3">
          Launch Date:
          {format(new Date(product.launch_date_local), "dd MMMM yyyy")}
        </p>
        {/* <p className="text-center font-semibold mb-3">
        Mission  {product.mission_id}
      </p> */}
        <p className=" font-semibold mb-3">
          Mission Name : {product.mission_name}
        </p>
        <p className=" font-semibold mb-3">
          Launch Year : {product.launch_year}
        </p>
        <p className=" font-semibold mb-3">
          Rocket Name : {product.rocket.rocket_name}
        </p>
        <p className=" font-semibold mb-3">
          UpComing :{" "}
          {product.upcoming === false ? (
            <span className="text-red-500">No</span>
          ) : (
            <span className="text-green-500">Yes</span>
          )}
        </p>
        <p className=" font-semibold mb-3">
          Launch Status :
          {product.launch_success === false ? (
            <span className="text-red-700">Failure</span>
          ) : (
            <span className="text-green-500">Success</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
