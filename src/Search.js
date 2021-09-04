import React from "react";
import "./Search.css"

export default function Search (){

    return(
        <div className="Search">
            <form>
                <input type="search" placeholder="Search to Define Word" className="search-bar"/>
                <input type="submit" value="🔎" className="search-button"/>
            </form>


        </div>
    );
}