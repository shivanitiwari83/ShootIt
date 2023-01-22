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
import CheckOut from "./components/user/CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRef, useState } from "react";

function App() {
  const stripe = loadStripe(
    "pk_test_51MLjhBSEMMAeLJi0Ao1Lp5rVmgdKqvCUwOR21jotcHI2clNCcMp9HKVQ7OOm7Mctx1RqoZmXTNvTTUq9HAOnJjGA004q0jPzSs"
  );

  const [mainClass, setMainClass] = useState("");
  const [searchClass, setSearchClass] = useState("");
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <main className={'main-wrap bg-white '+mainClass}>

      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/main/login" />} path="/" />
          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="browse" element={<ListEquipments setFocused={setFocused} mainClass={mainClass} setMainClass={setMainClass} setSearchClass={setSearchClass} />} />
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
            <Route
              path="checkout"
              element={
                <Elements stripe={stripe}>
                  <CheckOut />
                </Elements>
              }
            />
            <Route path="manageorder" element={<ManageOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </main>
      <div class={"search " + searchClass}>
        <button
          class="btn--search-close"
          aria-label="Close search form"
          onClick={(e) => {setSearchClass("")
        setMainClass("")}}
        >
          <svg class="icon icon--cross">
            <use xlinkHref="#icon-cross"></use>
          </svg>
        </button>
        <form class="search__form" action="">
          <input
            class="search__input"
            name="search"
            type="search"
            placeholder="Search"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            // ref={searchRef}
            autoFocus={focused}
            onKeyUp={e => {
              if( e.key === 'Escape' ) {
                setSearchClass('');
                setMainClass('');
              }
            }}
          />
          <span class="search__info">Hit enter to search or ESC to close</span>
        </form>
      </div>
    </div>
  );
}

export default App;
