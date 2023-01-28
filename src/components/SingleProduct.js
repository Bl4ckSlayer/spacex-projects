import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetLaunchByIdQuery } from "../api/ApiSlice";
import Card from "./Card";
import { format } from "date-fns";

const SingleProduct = () => {
  const { id } = useParams();
  const fId = parseInt(id);
  const {
    data: dataById,
    error: errorById,
    isLoading: isLoadingById,
  } = useGetLaunchByIdQuery(fId);
  let content;
  const [filter, setFilter] = useState("all");
  if (isLoadingById) {
    content = <p>Loading</p>;
  }

  if (errorById) {
    content = <p>Something went wrong</p>;
  }
  console.log(dataById);
  return (
    <div>
      {content}
      <div className="card lg:card-side  bg-slate-700 text-white shadow-xl m-12">
        <figure>
          <img src={dataById?.links?.mission_patch} alt="Album" />
        </figure>
        <div className="card-body">
          <h1 className="font-bold text-center mt-6">
            <span className="text-red-700"> Flight No :</span>{" "}
            {dataById?.flight_number}
          </h1>
          <p className="text-center font-semibold mb-3">
            Launch Date:
            {format(new Date(dataById?.launch_date_local), "dd MMMM yyyy")}
          </p>

          <p className="text-center font-semibold mb-3">
            Details:{dataById?.details}
          </p>
          <p className="text-center font-semibold mb-3">
            Mission Name : {dataById?.mission_name}
          </p>
          <p className="text-center font-semibold mb-3">
            Launch Year : {dataById?.launch_year}
          </p>
          <p className="text-center font-semibold mb-3">
            Rocket Name : {dataById?.rocket.rocket_name}
          </p>
          <p className="text-center font-semibold mb-3">
            UpComing :{" "}
            {dataById?.upcoming === false ? (
              <span className="text-red-500">No</span>
            ) : (
              <span className="text-green-500">Yes</span>
            )}
          </p>
          <p className="text-center font-semibold mb-3">
            Launch Status :
            {dataById?.launch_success === false ? (
              <span className="text-red-700">Failure</span>
            ) : (
              <span className="text-green-500">Success</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
