import millify from "millify";
import { useNavigate } from "react-router-dom";

const CardView = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border-2 border-darkred flex flex-col justify-center items-center w-[200px] p-5 rounded-xl gap-5 cursor-pointer box"
      onClick={() => navigate(`/coin/${data.id}`)}
    >
      <h1 className="text-darkred text-2xl">{data.name}</h1>
      <h2 className="text-darkred">{data.symbol}</h2>
      <h2 className="text-darkred font-bold">{millify(data.priceUsd)} $</h2>
      <span>Daily Change:</span>
      <span className={data.changePercent24Hr > 0 ? "up" : "down" || "notr"}>
        % {Number(data.changePercent24Hr).toFixed(2)}
      </span>
    </div>
  );
};

export default CardView;
