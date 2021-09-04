import React, {useState} from "react";
import "./Search.css"
import axios from "axios";
import SearchResponse from "./SearchResponse";


export default function Search (){
    let [keyword, setKeyword] = useState("");
    let [definition, setDefintion] = useState("");

    function getDefinition(response){
        setDefintion(response.data[0]);
    }

    function searchedWord(submit){
        setKeyword(submit.target.value);
    }

    function searchSubmit(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(getDefinition);
    }

    return(
        <div className="Search">
            <form onSubmit={searchSubmit}>
                <input type="search" placeholder="Search to Define Word" className="search-bar" autoFocus={true} onChange={searchedWord}/>
                <input type="submit" value="🔎" className="search-button"/>
            </form>

            <SearchResponse data={definition} />

        </div>
    );
}