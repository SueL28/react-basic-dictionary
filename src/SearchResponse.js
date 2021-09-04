import React from "react";
import "./SearchResponse.css"
import tempImage from "./temp-image.png"

export default function SearchResponse(){

    return(
        <div className="Search-Response">
            <h3 className="word">Word Searched </h3>

            <div className="definition">
                <h4 className="search-headings">Definition</h4>

                <p className="response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="similar-words">
                <h4 className="search-headings">Similar Words</h4>

                <p className="response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="origin">
                <h4 className="search-headings">Origin</h4>

                <p className="response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="images">
                <h4 className="search-headings">Related Images to WORD</h4>

                <div className="image-grid">
                    <div className="container">
                        <br/>
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={tempImage} alt="temp-Image" className="img-fluid"></img>
                            </div>
                            <div className="col-sm-4">
                                <img src={tempImage} alt="temp-Image" className="img-fluid"></img>
                            </div>
                            <div className="col-sm-4">
                                <img src={tempImage} alt="temp-Image" className="img-fluid"></img>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-4">
                                <img src={tempImage} alt="temp-Image" className="img-fluid"></img>
                            </div>
                            <div className="col-sm-4">
                                <img src={tempImage} alt="temp-Image" className="img-fluid"></img>
                            </div>
                            <div className="col-sm-4">
                                <img src={tempImage} alt="temp-Image" className="img-fluid"></img>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}