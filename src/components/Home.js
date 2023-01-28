import React, { useState } from "react";
import { useGetAllLunchesQuery } from "../api/ApiSlice";
import ProductCard from "./ProductCard";
import { Form, Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const { data, error, isLoading } = useGetAllLunchesQuery();

  const [upcommingFilter, setUpcommingFilter] = useState(null);
  const [upcommingStatus, setUpcommingStatus] = useState(null);
  const [time, setTime] = useState("");
  let content;

  const handleUpFilterStatus = (event) => {
    setUpcommingStatus(event.target.value);
  };

  const handleUpFilterUpcoming = (event) => {
    setUpcommingFilter(event.target.value);
  };
  const handleTime = (event) => {
    setTime(event.target.value);
  };
  const filterByLaunchDate = (time) => {
    // filter by last week
    if (time === "lastWeek") {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      const lastWeekDate = lastWeek.toISOString().split("T")[0];
      const filteredData = data?.filter((item) => {
        return item?.launch_date_local.split("T")[0] >= lastWeekDate;
      });
      console.log(filteredData);
    } else if (time === "lastMonth") {
      // filter by last month
      const lastMonth = new Date();
      lastMonth.setDate(lastMonth.getDate() - 30);
      const lastMonthDate = lastMonth.toISOString().split("T")[0];
      const filteredData = data?.filter((item) => {
        return item?.launch_date_local.split("T")[0] >= lastMonthDate;
      });
      console.log(filteredData);
    } else if (time === "lastYear") {
      // filter by last year
      const lastYear = new Date();
      lastYear.setDate(lastYear.getDate() - 365);
      const lastYearDate = lastYear.toISOString().split("T")[0];
      const filteredData = data?.filter((item) => {
        return item?.launch_date_local.split("T")[0] >= lastYearDate;
      });
      console.log(filteredData);
    } else {
      console.log("Please enter valid time");
    }
  };

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

    // Searching
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

    let filterStatus = null;
    if (upcommingStatus === "true") filterStatus = true;
    else if (upcommingStatus === "false") filterStatus = false;

    // Filter Upcoming
    let filterUpcoming = null;
    if (upcommingFilter === "true") filterUpcoming = true;
    else if (upcommingFilter === "false") filterUpcoming = false;

    let filterUpcomingArr = [];
    if (filterUpcoming !== null) {
      defaultArr.filter((item) => {
        if (item.upcoming === filterUpcoming) {
          filterUpcomingArr.push(item);
        }
      });
    }
    if (filterUpcomingArr.length !== 0) {
      defaultArr = filterUpcomingArr;
    }

    let filterStatusArr = [];
    if (filterStatus !== null) {
      defaultArr.filter((item) => {
        if (item.launch_success === filterStatus) {
          filterStatusArr.push(item);
        }
      });
    }

    if (filterStatusArr.length !== 0) {
      defaultArr = filterStatusArr;
    }

    console.log(defaultArr[0]);
    let timeArr = [];
    defaultArr.filter((item) => {
      let newtime = filterByLaunchDate(time);
      if (item.launch_date_local === newtime) {
        timeArr.push(item);
      }
    });

    if (time !== "") {
      defaultArr = timeArr;
    }

    content = defaultArr.map((product) => (
      <Link to={`launches/${product.flight_number}`}>
        <ProductCard key={product.id} product={product} />
      </Link>
    ));
  }

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

      <div>
        <select onClick={handleUpFilterUpcoming}>
          <option value={null}>Upcoming</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div>
        <select onClick={handleUpFilterStatus}>
          <option value={null}>Status</option>
          <option value={true}>Successful</option>
          <option value={false}>Faliure</option>
        </select>
      </div>
      <div>
        <select onClick={handleTime}>
          <option value="">Select</option>
          <option value="lastWeek">Last Week</option>
          <option value="lastMonth">Last Month</option>
          <option value="lastYear">Last Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10  ">
        {content}
      </div>
    </div>
  );
};

export default Home;
