import React, { useEffect, useState } from "react";
import app_config from "../../config";

const ShowOrder = ({ formdata }) => {

  const url = app_config.apiurl;


  return (
    <div className="card">
      <div className="card-body">
        <h3>Novel Details</h3>
        <hr />
        {/* image */}
        <img  className="img-fluid w-100"
            src={url + "/" + formdata.novel.image} alt="" />
            
        <p className="fw-bold m-0">Title</p>
        <h4>{formdata.novel.title}</h4>
        <p className="fw-bold m-0">Author</p>
        <h4>{formdata.novel.author}</h4>
        <p className="fw-bold m-0">Publisher</p>
        <h4>{formdata.novel.publisher}</h4>

        <h3 className="mt-3">User Details</h3>
        <hr />
        <p className="fw-bold m-0">Username</p>
        <h4>{formdata.user.username}</h4>
        <h4>{formdata.user.email}</h4>
        <h4>{formdata.user._id}</h4>

      </div>
    </div>
  );
};

const ManageOrders = () => {
  const [orderList, setOrderList] = useState([]);
  const [selOrder, setSelOrder] = useState(null);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.apiurl;

  const getDataFromBackend = async () => {
    // send request
    const res = await fetch(url + "/order/getbyuser/" + currentUser._id);
    console.log(res.status);
    // accessing data from response
    const data = await res.json();

    console.log(data);
    setOrderList(data);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const viewOrder = (orderData) => {
    setSelOrder(orderData);
    setShowOrderDetail(true);
  };

  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container">
          <h1 className="display-3 fw-bold text-white text-center">
            Manage Order Data
          </h1>
        </div>
      </header>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>Novel Title</th>
                  <th>Novel Author</th>
                  <th>Purchased/Rented on</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((order) => (
                  <tr>
                    <td>{order.novel.title}</td>
                    <td>{order.novel.author}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => viewOrder(order)}
                      >
                        {" "}
                        <i class="fas fa-eye    "></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showOrderDetail && (
            <div className="col-md-4">
              <ShowOrder formdata={selOrder} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
