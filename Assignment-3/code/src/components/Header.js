import React from "react";
function Header(object){
    return(
        <div className="Header">
            <p className='arrow'>{object.arrow}</p>
            <h3 className='empName'>{object.Name}<br/>{object.EmployeeID}</h3>
            <button className='btn'>Print</button>

        </div>
    )
}
export default Header;