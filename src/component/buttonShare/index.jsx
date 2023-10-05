import share from "../../assets/svgs/share.svg";
import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import youTube from "../../assets/svgs/youtube.svg";
import instagram from "../../assets/svgs/instagram.svg";

import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function ButtonShare() {
  return (
    <>
      <Space.Compact block>
        <Dropdown
          placement="bottomRight"
          overlay={
            <div className="mt-1">
              <Link to="/">
                <img
                  className="my-1 bg-[#f7f8fa] hover:bg-white share w-12 h-12 p-3 border-line shadow-custom rounded-full"
                  src={facebook}
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  className="my-1 bg-[#f7f8fa] hover:bg-white share w-12 h-12 p-3 border-line shadow-custom rounded-full"
                  src={twitter}
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  className="my-1 bg-[#f7f8fa] hover:bg-white share w-12 h-12 p-3 border-line shadow-custom rounded-full"
                  src={youTube}
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  className="my-1 bg-[#f7f8fa] hover:bg-white share w-12 h-12 p-3 border-line shadow-custom rounded-full"
                  src={instagram}
                  alt=""
                />
              </Link>
            </div>
          }
          trigger={["click"]}
        >
          <div className="center cursor-pointer bg-[#f7f8fa] hover:bg-white share w-12 h-12 border-line shadow-custom rounded-full">
            <img className=" w-[50%] " src={share} alt="..." />
          </div>
        </Dropdown>
      </Space.Compact>
    </>
  );
}
