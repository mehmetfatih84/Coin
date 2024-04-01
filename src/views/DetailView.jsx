import { Line } from "react-chartjs-2";

const DetailView = ({ model }) => {
  return (
    <div>
      <h3 className="flex justify-center">
        <span className="text-3xl text-orange-400 mx-6 font-bold">
          {model.coin?.detail.symbol}
        </span>
        <span className="text-3xl text-darkred">{model.coin?.detail.name}</span>
      </h3>
      <div className="flex">
        <section className="grid place-items-center mx-10">
          {model?.info?.map((item, i) => (
            <p
              key={i}
              className="flex flex-col mb-4 items-center border-2 border-darkred rounded-xl w-[250px] p-4"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-orange-400 text-xl">{item.label}</span>
              <span
                className={`text-darkred text-xl ${
                  item.changePercent24Hr > 0 ? "up" : "down" || "notr"
                }`}
              >
                {item.value}
              </span>
            </p>
          ))}
        </section>
        <section className="w-[70%] mt-20">
          <Line data={model.graphic} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
