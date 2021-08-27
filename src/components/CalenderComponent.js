import React from 'react'
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from '@syncfusion/ej2-react-schedule';

const CalenderComponent = () => {
  return (
    <div className="calender">
      <ScheduleComponent height="360px" currentView="Week">
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  )
}

export default CalenderComponent
