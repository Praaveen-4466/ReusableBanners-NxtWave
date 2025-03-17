import React from "react";

import "./ReusableBanner.css";

const ReusableBanner = (props) => {
  const { cardDetails } = props;
  const { headerText, description, className } = cardDetails;
  return (
    <li className={`${className} banner-card`}>
      <div>
        <h1 className="heading">{`${headerText}`}</h1>
        <p className="description">{`${description}`}</p>
        <button className="btn">Show More</button>
      </div>
    </li>
  );
};

export default ReusableBanner;
