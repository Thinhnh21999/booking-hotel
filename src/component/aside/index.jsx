import { icons } from "antd/es/image/PreviewGroup";
import Filter from "../filter/index";
import Review from "../review";

import { ArrowDownOutlined, StepForwardOutlined } from "@ant-design/icons";
import { Button, Menu, Dropdown, Space, Tooltip } from "antd";

import { AsideStyled, } from "./style";

export default function Aside() {
  return (
      <AsideStyled className=" w-1/4">
        <div className="relative ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1683879382654!5m2!1svi!2s"
            frameborder="0"
            className="w-full h-[200px] border-0 "
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="absolute bottom-2 cursor-pointer bg-white text-primary m-3 border-2 border-solid border-stone-300 mx-[28%] py-3 px-4 font-semibold rounded-3xl">
            View in a map
          </p>
        </div>

        <Space.Compact block>
          <Dropdown
            placement="bottomRight"
            overlay={<Filter />}
            trigger={["click"]}
          >
            <div className="w-full px-5 py-7 bg-filter my-5 rounded-xl flex justify-between cursor-pointer">
              <div className="border-none font-bold text-lg ">
                Filter Price{" "}
              </div>
              <ArrowDownOutlined className=""></ArrowDownOutlined>
            </div>
          </Dropdown>
        </Space.Compact>
        <Space.Compact block>
          <Dropdown
            placement="bottomRight"
            overlay={<Review />}
            trigger={["click"]}
          >
            <div className="w-full px-5 py-7 bg-filter my-5 rounded-xl flex justify-between cursor-pointer">
              <div className="border-none font-bold text-lg ">Review Score</div>
              <ArrowDownOutlined className=""></ArrowDownOutlined>
            </div>
          </Dropdown>
        </Space.Compact>
      </AsideStyled>
  );
}
