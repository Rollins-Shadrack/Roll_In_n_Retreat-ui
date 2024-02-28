import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import AddTask from "../components/AddTask";
import AssignTask from "../components/AssignTask";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Tasks = () => {
  const [allEvents, setAllEvents] = useState([]);

  function handleEventDrop({ event, start, end }) {
    const updatedEvents = allEvents.map((existingEvent) => (existingEvent === event ? { ...event, start, end } : existingEvent));
    setAllEvents(updatedEvents);
  }

  function handleEventResize(eventIdx, newSize) {
    const updatedEvents = allEvents.map((event, idx) => (idx === eventIdx ? { ...event, end: newSize } : event));
    setAllEvents(updatedEvents);
  }

  return (
    <div>
      <div className="flex justify-start space-x-2 mb-4">
        <AddTask />
        <AssignTask />
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "100%", margin: "0px" }}
        views={["month", "week", "day", "agenda"]}
        selectable
        resizable
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            borderColor: event.color,
          },
        })}
      />
    </div>
  );
};

export default Tasks;
