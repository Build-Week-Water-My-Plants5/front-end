import axios from 'axios';
import { useState, useEffect } from 'react';
import Plant from './Plant';
import { mockPlants } from '../data';

import './PlantList.css';

const initFormVal = {
    user_id: parseInt(localStorage.getItem('uid')),
    nickname: '',
    h20Frequency: '',
    species: ''
}

const PlantList = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formVal, setFormVal] = useState(initFormVal);
    const [plantId, setPlantId] = useState();
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        setPlants(mockPlants);
    }, [])

    const handleChange = (e) => {
        setFormVal({
            ...formVal,
            [e.target.name]: e.target.value
        })
    }

    const handleAddPlant = () => {
        setFormVal(initFormVal);
        setIsEditing(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        
        if (!plantId) {
            // handle axios.post
        } else {
            // handle axios.put
        }
    }

    return(
        <div>
            {isEditing && (
                <form>
                    <label>Nickname</label>
                    <input type='text' name='nickname' onChange={handleChange} value={formVal.nickname}/>

                    <label>Species</label>
                    <input type='text' name='species' onChange={handleChange} value={formVal.species}/>

                    <label>h20frequency</label>
                    <input type='text' name='h20Frequency' onChange={handleChange} value={formVal.h20Frequency}/>

                    <button onClick={handleSubmit}>Save</button>
                </form>)
            }

            <button className='add-plant-btn' onClick={handleAddPlant}>Add a Plant</button>
            <div className='plant-list-container'>
                {plants.map(item => <Plant key={item.id} data={item} setPlants={setPlants} plants={plants} setIsEditing={setIsEditing} isEditing={isEditing} setFormVal={setFormVal} setPlantId={setPlantId}/>)}
            </div>
        </div>
    )
}

export default PlantList;