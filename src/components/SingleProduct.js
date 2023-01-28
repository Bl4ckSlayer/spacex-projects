import React from "react";
import { useParams } from "react-router-dom";
import { useGetLaunchByIdQuery } from "../api/ApiSlice";

import Loading from "./Loading";

const SingleProduct = () => {
  const { id } = useParams();
  const fId = parseInt(id);
  const {
    data: dataById,
    error: errorById,
    isLoading: isLoadingById,
  } = useGetLaunchByIdQuery(fId);
  let content;

  if (isLoadingById) {
    content = <Loading></Loading>;
  }

  if (errorById) {
    content = <p>Something went wrong</p>;
  }

  console.log(dataById);
  return (
    <div>
      {content}
      <div className="card lg:card-side  bg-slate-500 text-white shadow-xl m-12">
        <figure>
          <img src={dataById?.links?.mission_patch} alt="Album" />
        </figure>
        <div className="card-body align-center text-center justify-center items-center">
          <h1 className="font-bold  text-center mt-6">
            <span className="text-red-700"> Flight No :</span>{" "}
            {dataById?.flight_number}
          </h1>
          <h1 className="text-center font-semibold ">
            Details:{dataById?.details}
          </h1>
          <h1 className="text-center font-semibold ">
            Mission Name : {dataById?.mission_name}
          </h1>
          <h1 className="text-center font-semibold ">
            Launch Year : {dataById?.launch_year}
          </h1>
          <h1 className="text-center font-semibold ">
            Rocket Name : {dataById?.rocket.rocket_name}
          </h1>
          <h1 className="text-center font-semibold ">
            UpComing :{" "}
            {dataById?.upcoming === false ? (
              <span className="text-red-500">No</span>
            ) : (
              <span className="text-green-500">Yes</span>
            )}
          </h1>
          <h1 className="text-center font-semibold mb-3">
            Launch Status :
            {dataById?.launch_success === false ? (
              <span className="text-red-700">Failure</span>
            ) : (
              <span className="text-green-500">Success</span>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
