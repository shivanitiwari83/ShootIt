import React, { useState } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";

const AddEquipment = () => {
  const url = app_config.api_url;
  const [selFile, setSelFile] = useState("");

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelFile(file.name);
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const userSubmit = async (formdata) => {
    formdata.image = selFile;
    console.log(formdata);

    //1. url
    //2. request method
    //3. data
    //4. data format
    //asynchronous function - return promise
    const response = await fetch("http://localhost:5000/equipment/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("user data added!");
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "Registered Sucessfully",
      });
    }
    console.log("request send");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Add New Equipment Data</h3>
          <Formik
            initialValues={{
              title: "",
              description: "",
              category: "",
              price: 0,
              rentPrice: 0,
              createdAt: new Date(),
            }}
            onSubmit={userSubmit}
          >
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <label className="mt-5">Title</label>
                <input
                  className="form-control"
                  id="title"
                  onChange={handleChange}
                  value={values.title}
                />

                <label className="mt-5">Description</label>
                <input
                  className="form-control"
                  id="description"
                  onChange={handleChange}
                  value={values.description}
                />

                <label className="mt-3">Category</label>
                <input
                  className="form-control"
                  id="category"
                  onChange={handleChange}
                  value={values.category}
                />
                 
                <label className="mt-3">Price</label>
                <input
                  className="form-control"
                  id="price"
                  onChange={handleChange}
                  value={values.price}
                  type="number"
                />

                <label className="mt-3">RentPrice</label>
                <input
                  className="form-control"
                  id="rentprice"
                  onChange={handleChange}
                  value={values.rentprice}
                />

                <label htmlFor="image" className="mt-3 btn btn-dark">Upload Image</label>
                <input id="image" hidden onChange={uploadFile} type="file" />
                <br></br>
                <button type="submit" className="btn btn-primary mt-5">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;
