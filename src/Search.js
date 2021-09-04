import React, {useState} from "react";
import "./Search.css"

export default function Search (){
    let [keyword, setKeyword] = useState("");

    function searchedWord(submit){
        setKeyword(submit.target.value);
    }

    function searchSubmit(event){
        event.preventDefault();
        alert (`Searching for ${keyword}`);
    }

    return(
        <div className="Search">
            <form onSubmit={searchSubmit}>
                <input type="search" placeholder="Search to Define Word" className="search-bar" autoFocus={true} onChange={searchedWord}/>
                <input type="submit" value="🔎" className="search-button"/>
            </form>


        </div>
    );
}