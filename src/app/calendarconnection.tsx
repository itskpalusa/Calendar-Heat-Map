import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Event from "./Event.js";

function CalendarConnection() {

    const [events, setEvents] = useState([]);

    const calendarID = process.env.REACT_APP_CALENDAR_ID;
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

    const styleObj = {
        listStyleType: "none", /* Remove bullets */
        padding: 0, /* Remove padding */
        margin: 0, /* Remove margins */
    }

    const getEvents = (calendarID, apiKey) => {
        function initiate() {
            gapi.client
                .init({
                    apiKey: apiKey,
                })
                .then(function () {
                    return gapi.client.request({
                        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                        params: {
                            timeMin: (new Date()).toISOString(),
                            showDeleted: false,
                            singleEvents: true,
                            maxResults: 10,
                            orderBy: 'startTime'
                        }

                    });
                })
                .then(
                    (response) => {
                        console.log(response);
                        let events = response.result.items;

                        console.log(events[1].start.dateTime)
                        setEvents(events);
                    },
                    function (err) {
                        return [false, err];
                    }
                );
        }
        gapi.load("client", initiate);
    };

    useEffect(() => {
        const events = getEvents(calendarID, apiKey);
        setEvents(events);
    }, []);

    return (
        <div className="">
            <h1 className="">
                React App with Google Calendar API!
                <ul style={styleObj}>
                    {events?.map((event) => (
                        <li key={event.id} className="">
                            <Event description={event.summary} startDate={event.start.dateTime} />
                        </li>
                    ))}
                </ul>
            </h1>
        </div>
    );
}

export default CalendarConnection;
