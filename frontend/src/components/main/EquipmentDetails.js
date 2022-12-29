import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../../config';

const EquipmentDetails = () => {

    const url = app_config.api_url;
    const {id} = useParams();

    const [equipmentData, setEquipmentData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getDataFromBackend = async () => {
      setLoading(true);
      const res = await fetch(url+'/equipment/getbyid/'+id);
      const data = await res.json();
      console.log(data);
      setEquipmentData(data);
      setLoading(false);
    }

    useEffect(() => {
      getDataFromBackend();
    }, [])


    const displayData = () => {
      if(!loading & equipmentData){
        return <div className='container'>

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