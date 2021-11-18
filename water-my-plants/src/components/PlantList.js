import axios from 'axios';
import { useState, useEffect } from 'react';
import Plant from './Plant';


const initFormVal = {
    user_id: parseInt(localStorage.getItem('uid')),
    nickname: '',
    h20Frequency: '',
    species: ''
}

const PlantList = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formVal, setFormVal] = useState(initFormVal);
    const [isNew, setIsNew] = useState(true);
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axios.get('https://water-the-plants-api.herokuapp.com/api/plants')
        .then(res => {
            setPlants(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    const handleChange = (e) => {
        setFormVal({
            ...formVal,
            [e.target.name]: e.target.value
        })
    }

    const handleAddPlant = () => {
        setFormVal(initFormVal);
        setIsNew(true);
        setIsEditing(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        
        if (isNew) {
            axios.post('https://water-the-plants-api.herokuapp.com/api/plants/', formVal)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
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

            <button onClick={handleAddPlant}>Add a Plant</button>

            {plants.map(item => <Plant key={item.id} data={item} setIsEditing={setIsEditing} isEditing={isEditing} setFormVal={setFormVal} setIsNew={setIsNew}/>)}
        </div>
    )
}

export default PlantList;