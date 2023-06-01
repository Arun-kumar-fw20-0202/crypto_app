import React from "react";
import "./pop.css";

export const Pop = ({
  name,
  image,
  symbol,
  current_price,
  total_volume,
  low_24h,
  high_24h,
  total_supply,
  max_supply,
  circulating_supply,
  last_updated,
  market_cap_rank,
  price_change_24h,
  handleClose,
}) => {
  return (
    <>
      <div className="pop">
        <div className="box">
          <div className="close" onClick={handleClose}>
            X
          </div>
          <div className="head">
            <h1>Details</h1>
          </div>
          <div className="list">
            <div className="imgBx">
              <img src={image} alt="" />
              <h3>{name}</h3>
              <p>{symbol}</p>
            </div>
            <div className="data">
              <span>Market Cap Rank</span>
              <span>{market_cap_rank ? market_cap_rank : "Null"}</span>
              <span>Current Price</span>
              <span>{current_price ? current_price : "Null"}</span>
              <span>Price Change 24 Hour</span>
              <span>{price_change_24h ? price_change_24h : "Null"}</span>
              <span>Total Volume</span>
              <span>{total_volume ? total_volume : "Null"}</span>
              <span>Low 24 hour</span>
              <span>{low_24h ? low_24h : "Null"}</span>
              <span>High 24 Hour</span>
              <span>{high_24h ? high_24h : "Null"}</span>
              <span>Total Supply</span>
              <span>{total_supply ? total_supply : "Null"}</span>
              <span>Max Supply</span>
              <span>{max_supply ? max_supply : "Null"}</span>
              <span>Circulating Supply</span>
              <span>{circulating_supply ? circulating_supply : "Null"}</span>
              {/* <span>All Time High (ath)</span>
              <span></span> */}
              <span>Last Updated Date</span>
              <span>{last_updated ? last_updated : "Null"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
