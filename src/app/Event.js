import React from "react";

function Event({startDate, description}) {
	return (
		<div className="card">
			<p className="">{startDate}</p>

			<p className="">{description}</p>
		</div>
	);
}

export default Event;
