"use client";
import React from "react";
// Activity Calendar Import 
import ActivityCalendar, { ThemeInput } from "react-activity-calendar";
//React Tooltip
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import 'bootstrap/dist/css/bootstrap.css'; // Add this line

// Data 
import { data } from "./data";


export default function Home() {

	// Calendar Theme
	const explicitTheme: ThemeInput = {
		light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
		dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
	};

	return (
		<main>
			<div className="container" style={{ padding: "50px" }}>
				<h1>test</h1>
				<ActivityCalendar
					data={data}
					renderBlock={(block, activity) =>
						React.cloneElement(block, {
							'data-tooltip-id': 'react-tooltip',
							'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
						})}
					showWeekdayLabels
					labels={{
						legend: {
							less: "💩",
							more: "🥇",
						},

						months: [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jun",
							"Jul",
							"Aug",
							"Sep",
							"Oct",
							"Nov",
							"Dec",
						],

						totalCount: "{{count}} contributions in {{year}}",
						weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					}}
					theme={explicitTheme}
				/>
				<ReactTooltip id="react-tooltip" />
				<div className="btn btn-classic">
				</div>
			</div>
		</main>
	);
}
