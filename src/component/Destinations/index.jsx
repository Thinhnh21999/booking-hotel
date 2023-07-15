export default function Destinations(props) {
  const { name, numberLocation, image } = props.item;
  return (
    <div className="cursor-pointer">
      <div className="flex w-full">
        <div className="text-center">
          <div className="relative w-full mb-4 rounded-full overflow-hidden">
            <img
              className="rounded-full w-full hover:scale-125 transition-all duration-300 ease-in-out transform"
              src={image}
              alt="..."
            />
          </div>
          <h2 className="font-bold text-lg hover-text">{name}</h2>
          <p className="text-gray hover-text">{numberLocation} Hotels</p>
        </div>
      </div>
    </div>
  );
}
