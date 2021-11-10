import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointsHeader from '../AppointmentsHeader/AppointsHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';


const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointsHeader date={date} setDate={setDate}></AppointsHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointments;