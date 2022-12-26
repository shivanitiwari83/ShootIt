import React from 'react';
import {Formik} from 'formik';
import Swal from 'sweetalert2';

const AddEquipment = () => {

    const userSubmit = async (formdata) => {
        console.log(formdata);

        //1. url  
        //2. request method 
        //3. data 
        //4. data format
        //asynchronous function - return promise 
        const response = await fetch('http://localhost:5000/user/add',{
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-type' : 'application/json'
            }
        });

        if(response.status === 200) {
            console.log('user data added!');
            Swal.fire({
                icon : 'success',
                title : 'Well Done',
                text : 'Registered Sucessfully',
            })
        }
        console.log('request send');

    }
    
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center">Register Here</h3>
                    <Formik
                        initialValues={{username: '', email: '', password: '', age: 0}}
                        onSubmit={userSubmit}
                    >
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                            <label className='mt-5'>Equipemt</label>
                            <input className='form-control' id="equipment" onChange={handleChange} value={values.equipment} />
                            
                            <label className='mt-3'>Price</label>
                            <input className='form-control' id="price" onChange={handleChange} value={values.price} />
                            
                            <label className='mt-3'>Content</label>
                            <input className='form-control' id="content" onChange={handleChange} value={values.content} />
                            
                            {/* <label className='mt-3'>Age</label>
                            <input className='form-control' id="age" onChange={handleChange} value={values.age} /> */}
    
                            <button type="submit" className='btn btn-primary mt-5'>Submit</button>
                        </form>
                        )}
                    </Formik>
                    
                </div>
            </div>
        </div>
    )

}

export default AddEquipment;
