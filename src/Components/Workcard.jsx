const Workcard = ({ item, index }) => {
  return (
    <div className="flex flex-col gap-3 items-center mt-10">
      <img src={item?.image} alt="work image" className="w-[700px] h-[300px]" />
      <p className="font-bold">{item?.title}</p>
    </div>
  );
};

export default Workcard;
