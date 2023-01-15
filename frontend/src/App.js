import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Admin from "./components/admin";
import User from "./components/user";
import AdminProfile from "./components/admin/Profile";
import UserProfile from "./components/user/Profile";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import ManageUser from "./components/admin/ManageUser";
import AddEquipment from "./components/admin/AddEquipment";
import ManageEquipment from "./components/admin/ManageEquipment";
import ListEquipments from "./components/main/ListEquipments";
import EquipmentDetails from "./components/main/EquipmentDetails";
import AdminAuth from "./AdminAuth";
import UserAuth from "./UserAuth";
import ManageOrders from "./components/user/ManageOrders";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/main/login" />} path="/" />
          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="browse" element={<ListEquipments />} />
            <Route path="details/:id" element={<EquipmentDetails />} />
          </Route>

          <Route
            element={
              <AdminAuth>
                <Admin />
              </AdminAuth>
            }
            path="admin"
          >
            <Route path="pofile" element={<AdminProfile />} />
            <Route path="addequipment" element={<AddEquipment />} />
            <Route path="manageequipment" element={<ManageEquipment />} />
            <Route path="manageuser" element={<ManageUser />} />
          </Route>

          <Route
            element={
              <UserAuth>
                <User />
              </UserAuth>
            }
            path="user"
          >
            <Route path="profile" element={<UserProfile />} />
            <Route path="manageorder" element={<ManageOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
