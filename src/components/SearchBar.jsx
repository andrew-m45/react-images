import {useState} from 'react'

function SearchBar({ searchText }) {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        if(e.key === "Enter"){
            // pass search value to searchText function on App component
            searchText(text);
            setText('');
        }
    }

    return (
        <div>
            <div className="search-container">
                <div className="wrapper">
                    <div className="search-box">
                        <h1>Search For Images...</h1>
                        <input 
                            type="text" 
                            className="search-bar" 
                            placeholder="Type Here..."
                            value={text}
                            onChange={e => setText(e.target.value)}
                            onKeyPress={onSubmit}
                         />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SearchBar