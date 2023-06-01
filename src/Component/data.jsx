import React, { useState } from "react";

export const Data = ({
  image,
  name,
  current_price,
  market_cap,
  symbol,
  price_change_24h,
  id,
  handleClick,
}) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div onClick={() => handleClick(id)} className="list">
        <span>
          <img src={image} alt="" />
          <span>
            <h3>{name}</h3>
            <p>{symbol}</p>
          </span>
        </span>
        <span>₹ {current_price}</span>
        <span style={{ color: "green" }}>{price_change_24h} %</span>
        <span>₹ {market_cap}</span>
      </div>
    </>
  );
};
