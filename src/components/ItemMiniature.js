import React from "react";

const CharacterCard = (props) => {
    return (
        <div className={"card " + (props.Clicked ? "animate" : "")} onClick={() => props.handleClick( props.id)} >  
            <div className="img-container">
            </div>
            <div className="img-content"
                    style={{
                        color: "white",
                        width: "200px",
                        height: "200px",
                        textAlign: "center",
                        justifyContent: "center",
                        // backgroundColor: props.color,
                      }} >
                <img alt={props.description} src={props.image} />
                 <strong> {props.description}</strong>
            </div>
        </div >
    )
}

export default CharacterCard;   