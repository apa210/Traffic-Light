import React, { useState } from "react";
import TrafficLight from "./trafficLight.jsx";

//create your first component
const Home = (props) => {

	const colores = ["red", "yellow", "green"];
	const [luz, setLuz] = useState("red");
	const arrayTraffic = colores.map((color, index) => {
											return (
												<TrafficLight
													key={index}
													color={color}
													luz={luz}
													setLuz={setLuz}
												/>
											);
										})

	return (
		<div className="mt-5 d-flex flex-column justify-content-center align-items-center">
			<h1>Traffic Light</h1>
			<div className="mt-3 trafficLight d-flex flex-column justify-content-around align-items-center rounded">
				{arrayTraffic}
			</div>
		</div>
	);
};

export default Home;
