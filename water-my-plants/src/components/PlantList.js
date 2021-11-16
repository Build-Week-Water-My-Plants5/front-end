import { useState } from 'react';


const initFormVal = {
    nickname: '',
    image: '',
    h20frequency: '',
    species: ''
}
const PlantList = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formVal, setFormVal] = useState(initFormVal);
    const [plants, setPlants] = useState([]);

    const handleChange = (e) => {
        setFormVal({
            ...formVal,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formVal);
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
                    <input type='text' name='h20frequency' onChange={handleChange} value={formVal.h20frequency}/>

                    <label>Image</label>
                    <input type='text' name='image' onChange={handleChange} value={formVal.h20frequency}/>

                    <button onClick={handleSubmit}>Save</button>
                </form>)
            }

            {plants.map(item => <Plant data={item} setIsEditing={setIsEditing} isEditing={isEditing} setFormVal={setFormVal}/>)}
        </div>
    )
}

export default PlantList;

const EditForm = () => {



    return(
        <form>

        </form>
    )
}