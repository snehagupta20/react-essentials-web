import React from "react";

export default function CoreConcepts(props){
    return(
        <div className="core-concept">
            <img src={props.image} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}