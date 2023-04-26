

const GifDisplay = ({url, title, gif_id, addFavorite, removeFavorite}) => {
    return (
    <div>
        <h4>
            {title}
        </h4>
        <img src={url} alt={title} title= {title} />
        <button onClick={() => addFavorite(gif_id)}>Add Favorite</button>
        <button onClick={() => removeFavorite(gif_id)}>Remove Favorite</button>

    </div>
    )
}

export default GifDisplay;