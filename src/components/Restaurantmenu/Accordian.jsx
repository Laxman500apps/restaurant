import ItemCard from "./ItemCard";

const Accordian = ({ data, showIndex, setShowIndex }) => {
  const setAccordian = () => {
    setShowIndex();
  };
  return (
    <div className="p-2 mx-auto my-2 w-6/12">
      <div
        className="flex justify-between cursor-pointer"
        onClick={setAccordian}
      >
        <span className="font-bold text-xl">{data.title}</span>
        <span>🔽</span>
      </div>
      {showIndex && <ItemCard data={data} />}
    </div>
  );
};

export default Accordian;
