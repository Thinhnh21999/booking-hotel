import share from "../../assets/svgs/share.svg";
import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import youTube from "../../assets/svgs/youtube.svg";
import instagram from "../../assets/svgs/instagram.svg";

import {Dropdown, Space} from "antd";
import { Form } from "./style";

export default function ButtonShare() {
  return (
    <Form>
      <Space.Compact block>
        <Dropdown
          placement="bottomRight"
          overlay={
            <div className="mt-2">
              <img
                className="my-[1px] bg-slate-200 share w-12 h-12 p-3 border-[1px] border-solid shadow-slate-200 shadow-lg rounded-full"
                src={facebook}
                alt=""
              />
              <img
                className="my-[1px] bg-slate-200 share w-12 h-12 p-3 border-[1px] border-solid shadow-slate-200 shadow-lg rounded-full"
                src={twitter}
                alt=""
              />
              <img
                className="my-[1px] bg-slate-200 share w-12 h-12 p-3 border-[1px] border-solid shadow-slate-200 shadow-lg rounded-full"
                src={youTube}
                alt=""
              />
              <img
                className="my-[1px] bg-slate-200 share w-12 h-12 p-3 border-[1px] border-solid shadow-slate-200 shadow-lg rounded-full"
                src={instagram}
                alt=""
              />
            </div>
          }
          trigger={["click"]}
        >
          <div className="">
            <img
              className="img share w-12 h-12 p-3 border-[1px] border-solid shadow-slate-200 shadow-lg rounded-full"
              src={share}
              alt=""
            />
          </div>
        </Dropdown>
      </Space.Compact>
    </Form>
  );
}
