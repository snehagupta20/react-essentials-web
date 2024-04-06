import React from "react";

function Tab(props){

    return(
        <button className={props.isSelected ? "active" : undefined} onClick={props.onClickFunc}>{props.children}</button>
        
    );
}

export default Tab;