import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
    const [text, setText] = useState("");

    const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text) {
            setSearchTerm(text);
        }
    };

    const handleRandomMeal = () => {
        setSearchTerm(text);
        setText('')
        fetchRandomMeal()
    }

    return (
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Type favourite meal"
                    value={text}
                    onChange={handleChange}
                />
                <button className="btn" type="submit">
                    Search
                </button>
                <button className="btn btn-hipster" type="button" onClick={handleRandomMeal}>
                    Surprise Me!
                </button>
            </form>
        </header>
    );
};

export default Search;
