

export default function Sort() {
  return (
    <div>
      <div className="z-10 absolute bg-white right-0 w-[150px] mt-4 text-black border-[1px] border-current border-solid border-slate-300 rounded-xl py-5 px-3 shadow-md shadow-slate-300">
        <input type="radio" name="new" id="new_hotel" />
        <label className="ml-2" htmlFor="new-hotel">
          New hotel
        </label>
        <p className="mt-3">Price</p>
        <input type="radio" name="price" id="low_to_hight" />
        <label className="ml-2" htmlFor="low_to_hight">
          Low to Hight
        </label>
        <br></br>
        <input type="radio" name="price" id="hight_to_low" />
        <label className="ml-2" htmlFor="hight_to_low">
          Hight to Low
        </label>
        <p className="mt-3">Name</p>
        <input type="radio" name="name" id="forward" />
        <label className="ml-2" htmlFor="forward">
          a-z
        </label>
        <br></br>
        <input type="radio" name="name" id="reverse" />
        <label className="ml-2" htmlFor="reverse">
          z-a
        </label>
      </div>
    </div>
  );
}
