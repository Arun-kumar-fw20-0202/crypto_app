import React, { useEffect, useState } from "react";
// import "home.css";
import "./home.css";
import axios from "axios";
import { Data } from "../Component/data";
import { Pop } from "../Component/Pop";

export const Home = () => {
  const [data, setData] = useState([]);
  let [sort, setSort] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [show, setShow] = useState(false);
  //
  const getData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //
  const handleHtL = () => {
    data.sort(function (a, b) {
      return b.current_price - a.current_price;
    });
    setSort(!sort);
    setData(data);
  };
  const handleLtH = () => {
    data.sort(function (a, b) {
      return a.current_price - b.current_price;
    });
    setSort(!sort);
    setData(data);
  };

  const handleClick = (id) => {
    setSingleData(id);
    setShow(true);
    console.log(singleData);
  };
  const handleClose = () => {
    setShow(false);
    setSingleData({});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {show ? <Pop handleClose={handleClose} {...singleData} /> : ""}

      <div className="main">
        <div className="sec">
          <button onClick={handleLtH}>High to Low</button>
          <button onClick={handleHtL}>Low To High</button>
        </div>
        <div className="box">
          <div className="head">
            <span>Coin</span>
            <span>Price</span>
            <span>24h Change</span>
            <span>Market Cap</span>
          </div>
          <div className="body">
            {/*  */}
            {data &&
              data.map((ele, i) => (
                <Data
                  handleClick={handleClick}
                  key={i}
                  id={ele}
                  name={ele.name}
                  current_price={ele.current_price}
                  market_cap={ele.market_cap}
                  symbol={ele.symbol}
                  price_change_24h={ele.price_change_percentage_24h}
                  image={ele.image}
                />
              ))}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};
