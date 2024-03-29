import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import app_config from '../../config';

const EquipmentDetails = () => {

  const url = app_config.api_url;
  const { id } = useParams();

  const [equipmentData, setEquipmentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(url + '/equipment/getbyid/' + id);
    const data = await res.json();
    console.log(data);
    setEquipmentData(data);
    setLoading(false);
  }

  useEffect(() => {
    getDataFromBackend();
  }, [])

  const checkout = () => {
    sessionStorage.setItem('equipment', JSON.stringify(equipmentData));
    navigate('/user/checkout')
  }


  const displayData = () => {
    if (!loading && equipmentData) {
      return <div className='container-fluid'>
        <div className='row'>
          <div className="col-md-5">
            <img className='img-fluid' src={url+'/'+equipmentData.image} alt="" />
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <p className="display-4">{equipmentData.title}</p>
                <p className="mt-4 fw-bold text-primary">{equipmentData.category}</p>
                <p className="fw-900 mt-3">{equipmentData.description}</p>
                
                <p className="fw-900 h4 mt-3">Price</p>
                <p className="display-3 mt-3 fw-bold">{equipmentData.price}</p>
                <p className="fw-900 h4 mt-3">Rent Price</p>
                <p className="display-3 mt-3 fw-bold">{equipmentData.rentPrice}</p>
                <button className='btn btn-outline-primary btn-lg me-5' onClick={checkout} >Buy Now</button>
                <button className='btn btn-outline-danger btn-lg' onClick={checkout} >Rent</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  }

  return (
    <div>
      {displayData()}
    </div>
  )
}

export default EquipmentDetails;