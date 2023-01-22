import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import app_config from "../../config";

const ListEquipments = ({mainClass, setMainClass, setSearchClass, setFocused}) => {
  const [equipmentList, setEquipmentList] = useState([]);
  const url = app_config.api_url;

  const [priceRange, setPriceRange] = useState([0, 1000000]);

  const [categories, setCategories] = useState([
    { value: "camera", label: "Camera", selected: false },
    { value: "lens", label: "Lens", selected: false },
    { value: "tripod", label: "Tripod", selected: false },
    { value: "lighting", label: "Lighting", selected: false },
    { value: "audio", label: "Audio", selected: false },
    { value: "accessories", label: "Accessories", selected: false },
  ]);

  const [brand, setBrand] = useState([
    { value: "canon", label: "Canon", selected: false },
    { value: "nikon", label: "Nikon", selected: false },
    { value: "sony", label: "Sony", selected: false },
    { value: "fuji", label: "Fuji", selected: false },
    { value: "panasonic", label: "Panasonic", selected: false },
    { value: "sigma", label: "Sigma", selected: false },
    { value: "tamron", label: "Tamron", selected: false },
    { value: "tokina", label: "Tokina", selected: false },
    { value: "zeiss", label: "Zeiss", selected: false },
    { value: "other", label: "Other", selected: false },
  ]);

  const updateCategory = (cat_i, val) => {
    const newCategories = [...categories];
    newCategories[cat_i].selected = val;
    setCategories(newCategories);
  };

  const updateBrand = (brand_i, val) => {
    const newBrand = [...brand];
    newBrand[brand_i].selected = val;
    setBrand(newBrand);
  };

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
        <div className="card shadow-0 border rounded-3 mb-4 prod-card">
          {/* <div className="card-body"> */}
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
              <div
                className="prod-img"
                style={{
                  backgroundImage: `url('${url + "/" + equipment.image}')`,
                }}
              ></div>
              {/* <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img
                    // style={{height: '400px'}}
                    src={url + "/" + equipment.image}
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
                </div> */}
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="card-body">
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
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
              <div className="card-body">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">₹{equipment.price}</h4>
                  <span className="text-danger">
                    <s>₹{equipment.price}</s>
                  </span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4">
                  <Link
                    className="btn btn-primary btn-sm"
                    to={"/main/details/" + equipment._id}
                  >
                    Details
                  </Link>
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    ));
  };

  return (
    <div>
      <main className={"container-fluid py-3"}>
        <header className="">
          <div className="container"></div>
        </header>
        <button
          className="btn btn-link"
          onClick={(e) => {
            console.log("ofcourse");
            setMainClass("main-wrap--move");
            setSearchClass("search--open");
            setFocused(true);
          }}
        >
          <i class="fas fa-search fa-lg"></i>
        </button>
        <div className="row">
          <div className="col-md-3">
            <div>
              <div className="card">
                <div className="card-body">
                  <h4 className="accent-border p-2 mb-3">
                    <span>Categories</span>
                  </h4>

                  <div className="d-flex justify-content-between">
                    <div>
                      <span className="fs-6 text-muted">From</span>
                      <div className="input-group">
                        <span class="input-group-text fw-bold">₹</span>
                        <input
                          type="number"
                          className="form-control"
                          value={priceRange[0]}
                          onChange={(e) =>
                            setPriceRange([e.target.value, priceRange[1]])
                          }
                        />
                      </div>
                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <div>
                      <span className="fs-6 text-muted">To</span>
                      <div className="input-group">
                        <span class="input-group-text fw-bold">₹</span>
                        <input
                          type="number"
                          className="form-control"
                          value={priceRange[1]}
                          onChange={(e) =>
                            setPriceRange([priceRange[0], e.target.value])
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <h4 className="accent-border p-2 mb-3 mt-5">
                    <span>Categories</span>
                  </h4>

                  {categories.map((category) => (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={category.selected}
                        onChange={(e) =>
                          updateCategory(category.value, e.target.checked)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={category.value}
                      >
                        {category.label}
                      </label>
                    </div>
                  ))}

                  <h4 className="accent-border p-2 mb-3 mt-5">
                    <span>Brands</span>
                  </h4>
                  {brand.map((brand) => (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={brand.selected}
                        onChange={(e) =>
                          updateBrand(brand.value, e.target.checked)
                        }
                      />
                      <label className="form-check-label" htmlFor={brand.value}>
                        {brand.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">{displayEquipments()}</div>
        </div>
      </main>
      
    </div>
  );
};

export default ListEquipments;
