import React from "react";

const TrafficLight = (props) => {
    return (
        <button className={"rounded-circle w-100 h-100"} 
		        style={{backgroundColor: props.color === props.luz ? props.color : "grey"}}
			    onClick={() => props.setLuz(props.color)}
		/>
    );
};

export default TrafficLight;