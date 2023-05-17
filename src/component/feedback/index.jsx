import star from "../../assets/svgs/star.svg";

export default function Feedback() {
  return (
    <div className="py-2">
      <div className="flex">
        <div className="mr-5">
          <img
            className="rounded-full"
            src="https://secure.gravatar.com/avatar/?s=50&d=mm&r=g"
            alt="user"
          />
        </div>
        <div>
          <h2 className="font-semibold">Customer</h2>
          <p className="text-gray">06/01/2022</p>
        </div>
      </div>
      <div className="my-5 flex">
        <img className="mr-2 w-4" src={star} alt="" />
        <img className="mr-2 w-4" src={star} alt="" />
        <img className="mr-2 w-4" src={star} alt="" />
        <img className="mr-2 w-4" src={star} alt="" />
        <img className="mr-2 w-4" src={star} alt="" />
      </div>
      <p className="text-gray">
        My favorite stay in !! The room is big, clean and so tidy. The cooking
        area and lotion provided was the favorite parts! Will come again if I
        visit.
      </p>
    </div>
  );
}
