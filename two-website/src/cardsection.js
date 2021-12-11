import React from "react";
import Card from "./card";
import Card2 from "./card2";
import Card3 from "./card3";


const CardSection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card />
            </div>
          <div className="col-4">
            <Card2 />
          </div>
          <div className="col-4">
           <Card3 />
          </div>
        </div>
      </div>
    </section>

);

export default CardSection;