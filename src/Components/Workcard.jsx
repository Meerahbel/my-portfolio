const Workcard = ({ item, index }) => {
  return (
    <div className="flex flex-col gap-3 items-center my-10">
      <img
        src={item?.image}
        alt="work image"
        className="w-[400px] md:w-[550px] lg:w-[700px] h-[300px] md:h-[250px] lg:h-[300px]"
      />
      <p className="font-bold">{item?.title}</p>
    </div>
  );
};

export default Workcard;
