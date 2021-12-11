import React from "react";




const Card2 = ({tittle="Calling Support",Button="View"}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <p className="card-text">
                  In this section we are also provide the customer support and also see the our partner who taking our services.
                </p>
                <a href="#" className="btn btn-success">{Button}</a>
              </div>
            </div>

    )
}; 

export default Card2