import React, { useState } from "react";
import { useGetAllLunchesQuery, useGetLaunchByIdQuery } from "../api/ApiSlice";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const { data, error, isLoading } = useGetAllLunchesQuery();
  const {
    data: dataById,
    error: errorById,
    isLoading: isLoadingById,
  } = useGetLaunchByIdQuery(1);
  let content;

  if (isLoading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!isLoading && !error && data.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!isLoading && !error && data.length) {
    let newArr = [];
    if (search !== "") {
      data.filter((item) => {
        if (
          item.rocket?.rocket_name.toLowerCase().includes(search.toLowerCase())
        ) {
          newArr.push(item);
        }
      });
    }

    let defaultArr = data;
    if (search !== "") {
      defaultArr = newArr;
    }

    content = defaultArr.map((product) => (
      <Link to={`launches/${product.flight_number}`}>
        <ProductCard key={product.id} product={product} />
      </Link>
    ));
  }

  // console.log(data, error, isLoading, search);
  // console.log(dataById, errorById, isLoadingById);
  return (
    <div>
      <div className="flex-none gap-2 text-center">
        <h1 className="text-xl mb-6 ">
          <span className="border border-slate-600 rounded-2xl p-2 bg-primary text-white shadow-2xl">
            Search By Rocket Name
          </span>
        </h1>
        <div>
          <input
            className="input input-bordered border-accent"
            type="text"
            placeholder="Input Here..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>
      <div>filter</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10  ">
        {content}
      </div>
    </div>
  );
};

export default Home;
