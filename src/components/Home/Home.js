import React from "react";
import { Link } from "react-router-dom";
import UseInventory from "../../hooks/useInventory";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import History from "../History/History";
import Inventories from "../Inventories/Inventories";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  const [inventories, setInventories] = UseInventory([]);
  return (
    <div>
      <Banner></Banner>
      <History></History>
      <AboutUs></AboutUs>
      {/* <Inventories></Inventories> */}
      <div>
      <h2 className="text-center">Items In Stock</h2>
      <div className="inventories-container container mt-5">
      {
        inventories.slice(0,6).map(inventory =><Inventory key={inventory._id} inventory={inventory}></Inventory>)
      }

      </div>

      </div>
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
