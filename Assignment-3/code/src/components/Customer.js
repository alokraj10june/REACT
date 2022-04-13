import React from "react";
function Customer(object){
    return(
        <div class="Customer">
            <p><b>Appointment:</b>{object.Appointment}</p>
            <p><b>Email:</b>{object.Email}</p>
            <p><b>Phone:</b>{object.Phone}</p>
        </div>

    )
}
export default Customer;