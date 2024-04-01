import { useEffect, useState } from "react";
import MainModel from "../models/MainModel";
import MainView from "../views/MainView";

const MainController = () => {
  const [coins, setCoins] = useState([]);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    MainModel.getCoins(pages).then((data) => setCoins(coins.concat(data)));
  }, [pages]);
  return <MainView coins={coins} setPages={setPages} />;
};

export default MainController;
