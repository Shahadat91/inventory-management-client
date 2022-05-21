import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItems from "./components/AddItems/AddItems";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import InventoryDetail from "./components/InventoryDetail/InventoryDetail";
import ManageItems from "./components/ManageItems/ManageItems";
import MyItems from "./components/MyItems/MyItems";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SignIn from "./components/Sign In/SignIn";
import SignUp from "./components/Sign Up/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/inventory/:inventoryId"
            element={
              <RequireAuth>
                <InventoryDetail></InventoryDetail>
              </RequireAuth>
            }
          ></Route>
          
          <Route
            path="/additems/:inventoryId"
            element={
              <RequireAuth>
                <AddItems></AddItems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/manageitems"
            element={
              <RequireAuth>
                <ManageItems></ManageItems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/myitems"
            element={
              <RequireAuth>
                <MyItems></MyItems>
              </RequireAuth>
            }
          ></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
