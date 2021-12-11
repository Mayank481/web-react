import React from "react";



const Card3 = ({tittle="Hardwaare-servics",Button="View"}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
        <img
          src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">
            We are also provide the hardware servics for the our client and avilable 24*7.Please meet our client in view section.
          </p>
          <a href="#" className="btn btn-success">{Button}</a>
        </div>
      </div>
    )
}

export default Card3;