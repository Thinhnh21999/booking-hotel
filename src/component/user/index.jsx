import { Button, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import UserSvg from "../../assets/svgs/user.svg";
import * as styled from "./style.js";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <styled.ButtonCustom type="primary" onClick={showModal}>
        <img className="w-5" src={UserSvg} alt="" />
      </styled.ButtonCustom>
      <styled.ModalCustom
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="center mb-[25px] px-[30px] pb-[25px] text-gray text-center border-b border-solid border-[#dedede]">
          <Link className="mx-5" to="">
            Sign in
          </Link>
          <Link className="mx-5" to="">
            Sign up
          </Link>
        </div>
      </styled.ModalCustom>
    </>
  );
};
export default App;
