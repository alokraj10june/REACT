import React from "react";
function Product(object){
    return(
        <div className="Product">
            <div className="image">
                <img src={object.image} alt='img1'/>
            </div>
            <div className="txt">
                <h3>{object.description}</h3>
            </div>
            <div className="role">
                <h2>{object.role}</h2>

            </div>
        </div>
    )
}
export default Product;