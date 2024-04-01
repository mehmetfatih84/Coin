import axios from "axios";
import { BiCoin } from "react-icons/bi";
import { millify } from "millify";
import { FcPieChart } from "react-icons/fc";
import { ImPriceTag } from "react-icons/im";
import { FcCurrencyExchange } from "react-icons/fc";
import { FaChartBar } from "react-icons/fa";

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;
    this.info = [
      {
        icon: <FcPieChart />,
        label: "Market Cap",
        value: millify(coin?.detail.marketCapUsd),
      },
      {
        icon: <BiCoin />,
        label: "Crypto:",
        value: coin?.detail.name,
      },
      {
        icon: <ImPriceTag />,
        label: "Price",
        value: "$" + millify(coin?.detail.priceUsd),
      },
      {
        icon: <FaChartBar />,
        label: "24 Hr Volume",
        value: millify(coin?.detail.volumeUsd24Hr),
      },
      {
        icon: <FcCurrencyExchange />,
        label: "24 Hr Change",
        value: "%" + millify(Number(coin?.detail.changePercent24Hr).toFixed(2)),
      },
    ];
    this.graphic = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: coin?.history.name,
          fill: true,
          data: coin?.history.map((i) => i.priceUsd),
          borderColor: "#8B0000",
          backgroundColor: "orange",
        },
      ],
    };
  }

  static async getCoin(id) {
    const res = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),
      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);
    console.log(res);
    return {
      detail: res[0].data.data,
      history: res[1].data.data,
    };
  }
}
