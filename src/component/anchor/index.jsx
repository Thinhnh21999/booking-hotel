export default function Anchor() {
  return (
    <div className="flex h-[74px] bg-white fixed bottom-4 z-0 hover:right-0 hover:transition-all hover:duration-300 hover:ease-in right-[-268px] shadow-custom">
      <div className="w-[80px] text-[6px] px-2 py-3">
        <img
          className="w-full px-2"
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt=".."
        />
        Bảo mật . Điều Khiển
      </div>
      <div className="px-3 py-4 bg-[#1a73e8]">
        <p className="text-md font-semibold text-white">
          Được bảo vệ bằng reCAPTCHA
        </p>
        <div className="flex">
          <a className="text-sm text-white" href="#">
            Điều Kiện
          </a>
          <a className="text-sm text-white" href="#">
            Bảo Mật
          </a>
        </div>
      </div>
    </div>
  );
}
