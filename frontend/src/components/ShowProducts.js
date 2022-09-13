import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/v1'
const ShowProducts = () => {

    const [products, setProducts] = useState([])
    useEffect ( ()=> {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {

        const response = await axios.get(`${endpoint}/products`)
        console.log('Products')
        console.log(response)
        setProducts(response.data.data)
    }

    const deleteProduct = async (id) => {

       await axios.delete(`${endpoint}/product/${id}`)
       getAllProducts()
         
    }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Measurement unit</th>
                    <th>Status</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                { products.map( (product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.measurement_unit}</td>
                        <td>{product.status}</td>
                       
                        <td>
                            <Link to={`/edit/${product.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts