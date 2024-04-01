import { useState } from "react";
import { useEffect } from "react";
import DetailModel from "../models/DetailModel";
import DetailView from "../views/DetailView";
import { useParams } from "react-router-dom";

const DetailController = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();
  useEffect(() => {
    DetailModel.getCoin(id).then((data) => setCoin(data));
  }, []);
  const model = new DetailModel(coin);
  return <DetailView model={model} />;
};

export default DetailController;
