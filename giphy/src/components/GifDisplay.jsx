import H4 from '../styled/elements/H4'

const GifDisplay = ({url, title, gif_id, addFavorite, removeFavorite, isFavorite}) => {

    return (
    <div>
        <H4>
            {title}
        </H4>
        <img src={url} alt={title} title= {title} />
        <br></br>
        { !isFavorite && (<button className="addButton" onClick={() => addFavorite(gif_id, url, title)}>Add Favorite</button>)}
        { isFavorite && (<button className="removeButton" onClick={() => removeFavorite(gif_id)}>Remove Favorite</button>)}

    </div>
    )
}

export default GifDisplay;