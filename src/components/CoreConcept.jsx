import React from "react";
import coreConcepts from "../Data";
import CoreConcepts from "./CoreConcepts";

export default function CoreConcept(){
    return (
        <div className='core-concept-main'>
            <h2>Core Concepts</h2>
            <div className='core-concept-sub'>
            {coreConcepts.map((conceptItem)=> <CoreConcepts id={conceptItem.title} {...conceptItem}/>)}
            {/* <CoreConcepts {...coreConcepts[0]}/>
            <CoreConcepts {...coreConcepts[1]}/>
            <CoreConcepts {...coreConcepts[2]}/>
            <CoreConcepts {...coreConcepts[3]}/> */}
            </div>
      </div>
    );
}