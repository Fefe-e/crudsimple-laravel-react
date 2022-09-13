import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/v1/product'
const CreateProduct = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [measurement_unit, setMeasurement_unit] = useState('')
    const [status, setStatus] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, description: description, measurement_unit: measurement_unit, status: status})
        navigate('/')

    }
  return (
    <div>
        <h2>Creat a new product</h2>
        <form onSubmit={store}>
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

            <button type='submit' className='btn btn-success'>Save</button>
        </form>
    </div>
  )
}

export default CreateProduct