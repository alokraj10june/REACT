import React from 'react';
import './App.css';
import './index.css'
import Header from './components/Header';
import Customer from './components/Customer'
import Order from './components/Order';
var arrow="<"
var arrow2=">"
function App() {
  const emp={
    Name: "Alan Ford",
    EmployeeID:"00005152",
    Appointment:"9:00 (04-04-2022)",
    Email:"alenford@gmail.com",
    Phone:"+31123456789",
    Status:"In Progress",
    Door:"Mark",
    ReportTime:"10:30(04-04-2022)",
    profileImg:'https://www.w3schools.com/howto/img_avatar.png'
  };
  return (
    <div className="site-container">
    <Header arrow={arrow} Name={emp.Name} EmployeeID={emp.EmployeeID}></Header>
    <Customer Appointment={emp.Appointment} Email={emp.Email} Phone={emp.Phone}></Customer>
    <Order Status={emp.Status} Door={emp.Door} ReportTime={emp.ReportTime}></Order>
    <div className='section3'>
      <input type="checkbox"></input><img src={emp.profileImg} alt='img1'/>
      <h1>Boltarrt Bosbessen
      <p>Overheerlike Boltarrt uit de keuken ven de Bijenkrof.</p></h1>
      <div className='arrow'><button className='btn'>{arrow2}</button></div>
    </div>

    </div>
  );
}

export default App;
