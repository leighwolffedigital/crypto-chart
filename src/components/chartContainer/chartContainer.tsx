import React, { useReducer, useEffect, useState } from "react";
import "./chartContainer.css";
import Chart from "../chart/chart";
import ChartControls from "../chartControls/chartControls";
import controlReducer from "../../reducers/controlReducer";
import axios from "axios";

export interface PriceData {
  date: String;
  price: number;
  time: String;
}

function ChartContainer() {
  const initialState = { selected: 1 };

  const [state, dispatch] = useReducer(controlReducer, initialState);
  const [data, setData] = useState<PriceData[]>([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
      params: {
        vs_currency: "usd",
        days: state.selected,
      },
    }).then((response) => {
      let pricelist: Array<PriceData> = [];
      response.data.prices.map((price, index) => {
        let newPrice = {
          id: price[0],
          date: new Date(price[0]).toDateString(),
          time: new Date(price[0]).toLocaleTimeString(),
          price: price[1].toFixed(2),
        };
        pricelist.push(newPrice);
      });
      setData(pricelist);
    });
  }, [state.selected]);

  return (
    <div className="container">
      <ChartControls state={state} dispatch={dispatch} />
      <Chart data={data} />
    </div>
  );
}
export default ChartContainer;
