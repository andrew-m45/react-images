import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import ImageCard from './components/ImageCard';
import SearchBar from './components/SearchBar';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // fetch images from API
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err));
  }, [searchTerm])

  return (
    <div className="App">
      <Navbar />
      <SearchBar searchText={(term) => setSearchTerm(term)} />
      <div className="main">
        {isLoading ? <Spinner /> : (<>
          <div className="image-grid">
            {images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </>
        )}
      </div>
    </div>
  );
}

export default App;
