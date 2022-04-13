import React from "react";
function Order(object){
    return(
        <div class="Order">
            <div className="order-info">
                <p>Status<b></b><br></br>
                <ul>
                    <li>{object.Status}</li>
                </ul>
                </p>
            </div>
            <div className="order-info">
                <p><b>Door</b><br></br>
                <ul>
                    <li>{object.Door}</li>
                </ul>
                </p>
            </div>
            <div className="order-info">
                <p><b>ReportTime</b>
                <ul>
                    <li>{object.ReportTime}</li>
                </ul>
                </p>

            </div>
        </div>
    )
}
export default Order;