

const Plant = ({ data, isEditing, setIsEditing, setFormVal, plants, setPlants, setPlantId }) => {

    const handleEdit = () => {
        if (!isEditing) {
            setIsEditing(true);
            setPlantId(data.id);
            setFormVal({
                nickname: data.nickname,
                image: data.image,
                h20frequency: data.h20frequency,
                species: data.species
            })
        }
    }

    const handleDelete = () => {
        setPlants(plants.filter(item => item.nickname !== data.nickname))
    }

    return(
        <div>
            <p>{data.nickname}</p>
            <p>{data.species}</p>
            <p>{data.h2ofrequency}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Plant;