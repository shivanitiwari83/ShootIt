import React, { useEffect, useState } from "react";
import app_config from "../../config";

const ListEquipments = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const url = app_config.api_url;

  const getDataFromBackend = async () => {
    // default request method : GET
    const response = await fetch("http://localhost:5000/equipment/getall");
    const data = await response.json();
    console.log(data);
    // store data in state
    setEquipmentList(data);
    console.log("request sent");
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayEquipments = () => {
    return equipmentList.map((equipment) => (
      <section style={{ backgroundColor: "#eee" }}>
        <div className="card shadow-0 border rounded-3 mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img
                    src={url+'/'+equipment.image}
                    className="w-100"
                    alt=""
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>{equipment.title}</h5>
                <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <span>310</span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                  <span>{equipment.description?.slice(0, 60)}</span>
                  
                </div>
                <div className="mb-2 text-muted small">
                  <span>Unique design</span>
                  <span className="text-primary"> • </span>
                  <span>For men</span>
                  <span className="text-primary"> • </span>
                  <span>
                    Casual
                    <br />
                  </span>
                </div>
                <p className="text-truncate mb-4 mb-md-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">₹{equipment.price}</h4>
                  <span className="text-danger">
                    <s>₹{equipment.price}</s>
                  </span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-sm" type="button">
                    Details
                  </button>
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ));
  };

  return (
    <div>
      <header className="">
        <div className="container"></div>
      </header>
      <div className="container">{displayEquipments()}</div>
    </div>
  );
};

export default ListEquipments;
