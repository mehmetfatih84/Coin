import CardView from "./CardView";
import { millify } from "millify";
import { useNavigate } from "react-router-dom";

const MainView = ({ coins, setPages }) => {
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center">
      <div className="flex justify-center gap-6 m-3">
        {coins?.slice(0, 3)?.map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Market Volume</th>
              <th className="px-4 py-2">Volume</th>
              <th className="px-4 py-2">% Change</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id} onClick={() => navigate(`/coin/${coin.id}`)}>
                <td className="border px-4 py-2">{coin.rank}</td>
                <td className="border px-4 py-2 text-darkred font-bold">
                  {coin.symbol}
                </td>
                <td className="border px-4 py-2">{coin.name}</td>
                <td className="border px-4 py-2">
                  {" "}
                  $ {millify(coin.priceUsd)}
                </td>
                <td className="border px-4 py-2 flex justify-center">
                  {millify(coin.marketCapUsd)}
                </td>
                <td className="border px-4 py-2 ">
                  {millify(coin.volumeUsd24Hr)}
                </td>
                <td
                  className={`border px-4 py-2 ${
                    coin.changePercent24Hr > 0 ? "up" : "down"
                  }`}
                >
                  % {millify(coin.changePercent24Hr)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center m-5">
          <button
            className="button2"
            onClick={() => setPages((prew) => prew + 1)}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainView;
