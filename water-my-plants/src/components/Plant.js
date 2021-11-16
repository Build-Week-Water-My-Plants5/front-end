

const Plant = ({ data, isEditing, setIsEditing, setFormVal }) => {

    const handleEdit = () => {
        if (!isEditing) {
            setIsEditing(true);
            setFormVal({
                nickname: data.nickname,
                image: data.image,
                h20frequency: data.h20frequency,
                species: data.species
            })
        }
    }

    const handleDelete = () => {
        // Handle Delete
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