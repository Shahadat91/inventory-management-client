import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import History from "../History/History";
import Inventories from "../Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <History></History>
      <Inventories></Inventories>
      <Link className=" text-decoration-none" to={"/manageitems"}>
        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-outline-info fs-4">
            Manage Item
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
