import React from "react";
import Search from "./Search";
import SearchResponse from "./SearchResponse";
import "./DictionaryApp.css"

export default function DictionaryApp(){

    return(
        <div className="Dictionary-App">
            <h1 className="text-center">Dictionary</h1>
            <br />
            <Search />
            <SearchResponse />

        </div>
    );
}