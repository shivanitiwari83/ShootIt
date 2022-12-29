import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UpdateUser from './UpdateUser';

const ManageEquipment = () => {

    const [equipmentList, setEquipmentList] = useState([]);

    const getDataFromBackend = async () => {

        // default request method : GET
        const response = await fetch('http://localhost:5000/equipment/getall');
        const data = await response.json();
        console.log(data);
        // store data in state
        setEquipmentList(data);
        console.log('request sent');
    }

    useEffect(() => {
        getDataFromBackend();
    }, [])

    const deleteUser = async (id) => {
        // console.log(id);
        const response = await fetch('http://localhost:5000/equipment/delete/' + id, {
            method: 'DELETE'
        })
        console.log(response.status);
        getDataFromBackend();
        // import toast from 'react-hot-toast';
        toast.success('User Deleted 😁');
    }


    const showUsers = () => {

        return <table className='table table-white table-striped'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rent Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    equipmentList.map((equipment) => (
                        <motion.tr
                            key={equipment._id}
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ type: "spring" }}>

                            <td>{equipment.title}</td>
                            <td>{equipment.category}</td>
                            <td>{equipment.price}</td>
                            <td>{equipment.rentPrice}</td>

                            <td>
                                <button className='btn btn-outline-danger' onClick={() => { deleteUser(equipment._id) }}>
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </motion.tr>
                    ))
                }
            </tbody>
        </table>

    }

    return (
        <AnimatePresence className='container'>
            <h1 className="text-center">User Manager</h1>
            <button onClick={getDataFromBackend}>Refresh</button>
            {showUsers()}

        </AnimatePresence>
    )
}

export default ManageEquipment;