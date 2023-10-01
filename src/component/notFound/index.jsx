import { Link } from "react-router-dom/cjs/react-router-dom";

export default function NotFound() {
  return (
    <div className="relative center w-full h-screen">
      <img
        className="w-full h-full"
        src="https://res.cloudinary.com/ducimayyw/image/upload/v1696186195/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-3-800x534_cqz5ho.jpg"
        alt="404 image"
      />
      <Link
        to="/"
        className="block absolute bottom-[40px] text-white text-xl bg-primary px-10 py-3 rounded-3xl"
      >
        Home Pages
      </Link>
    </div>
  );
}
