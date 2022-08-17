

function ImageCard({ image }) {
    //  convert tags into array
    const tags = image.tags.split(',');

    return (
        <div className="card">
            <div className="top">
                <div className="user-details">
                    <div className="profile-img">
                        <img src={image.userImageURL} alt="" className="cover" />
                    </div>
                    <h3>{image.user}</h3>
                </div>
            </div>
            <div className="img-box">
                <img src={image.webformatURL} alt="" className="cover" />
            </div>
            <div className="icons">
                <span><i className="fa-regular fa-heart fa-lg"></i> {image.likes}</span>
                <span><i className="fa-regular fa-comment fa-lg"></i> {image.comments}</span>
                <span><i className="fa-regular fa-eye fa-lg"></i> {image.views}</span>
            </div>
            <div className="tags">
                {tags.map((tag, index) => (
                    <div className="chip" key={index}>#{tag}</div>
                ))}
            </div>
        </div>
    )
}

export default ImageCard