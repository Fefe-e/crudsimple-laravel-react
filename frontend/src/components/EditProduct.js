import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/v1/product'

const EditProduct = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [measurement_unit, setMeasurement_unit] = useState('')
    const [status, setStatus] = useState('')
    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}/${id}`, {

            name: name,
            description: description,
            measurement_unit: measurement_unit,
            status: status
        })
        navigate('/')
    }

    useEffect( () =>{

        const getProductById = async () => {
            const response = await axios.get(`${endpoint}/${id}`)
            
            setName(response.data.data.name)
            setDescription(response.data.data.description)
            setMeasurement_unit(response.data.data.measurement_unit)
            setStatus(response.data.data.status)
        }
        getProductById()
        
    }, [])
  return (
    <div>
        <h2>Edit product</h2>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={name} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    value={description} 
                    onChange={ (e)=> setDescription(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Measurement unit</label>
                <input 
                    value={measurement_unit} 
                    onChange={ (e)=> setMeasurement_unit(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Status</label>
                <input 
                    value={status} 
                    onChange={ (e)=> setStatus(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default EditProduct