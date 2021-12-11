import React from "react";

const Card = ({tittle="srver-servics",Button="View"}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <p className="card-text">
                  We are providing best server site support to our client.This is our speciality to support our customer to the best servics 24*7.
                  
                </p>
                <a href="#" className="btn btn-success">{Button}</a>
              </div>
            </div>
    )
};

export default Card;