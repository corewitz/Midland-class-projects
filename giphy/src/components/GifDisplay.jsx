import H4 from '../styled/elements/H4'

const GifDisplay = ({url, title, gif_id, addFavorite, removeFavorite, isFavorite}) => {

    return (
    <div className="margin10">
        <H4>
            {title}
        </H4>
        <div className="height25"></div>
        <img src={url} alt={title} title= {title} />
        <br></br>
        <div className="height25"></div>
        { !isFavorite && (<button className="addButton" onClick={() => addFavorite(gif_id, url, title)}>Add Favorite</button>)}
        { isFavorite && (<button className="removeButton" onClick={() => removeFavorite(gif_id)}>Remove Favorite</button>)}

    </div>
    )
}

export default GifDisplay;