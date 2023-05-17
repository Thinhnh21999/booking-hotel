import Card from "../card/index.jsx";
import arrow_down from "../../assets/svgs/arrow_down.svg";
import list_category from "../../assets/svgs/list_category.svg";
import list_menu from "../../assets/svgs/list_menu.svg";
import filter from "../../assets/svgs/filter.svg";

import Sort from "../sort/index";

import { Pagination } from "antd";
import { Col, Row } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button, Menu, Dropdown, Space, Tooltip } from "antd";

import { ContainerStyled, Para,} from "./style.jsx";
import { FilterButton } from "../container/style.jsx";

export default function Container() {
  return (
    <ContainerStyled className=" w-3/4 ml-5">
      <div className="px-2.5 flex justify-between text-gray">
        <Para>23 hotels found</Para>
        <FilterButton>
        <div className="flex justify-between">
          <img src={filter} alt="" />
          <span className="ml-3">Filter</span>
          </div>
      </FilterButton>
        <div className="flex justify-end">
          {/* <div className="relative">
            <div className="flex border-b-[1px] border-current border-solid mx-2 cursor-pointer h-7 justify-end">
              <div className="mr-2 text-sm pt-[1px] ">Sort</div>
              <img className="inline-block w-5 h-7" src={arrow_down} alt="" />
            </div>
            <Sort></Sort>
          </div> */}
          <div>
        <Space.Compact block>
          <Dropdown
            placement="bottomRight"
            overlay={
              <Sort />
            }
            trigger={["click"]}
              >
                <Button className="border-none">Sort <ArrowDownOutlined className="pl-2"></ArrowDownOutlined> </Button>
          </Dropdown>
        </Space.Compact>
      </div>
          <img className="h-7 p-2 cursor-pointer" src={list_menu} alt="" />
          <img className="h-7 p-2 cursor-pointer" src={list_category} alt="" />
        </div>
      </div>
      <div className="mt-5">
        <Row>
          <Col xl={8} md={12} xs={24}><Card /></Col>
          <Col xl={8} md={12} xs={24}><Card /></Col>
          <Col xl={8} md={12} xs={24}><Card /></Col>
        
          <Col xl={8} md={12} xs={24}><Card /></Col>
          <Col xl={8} md={12} xs={24}><Card /></Col>
          <Col xl={8} md={12} xs={24}><Card /></Col>
        
          <Col xl={8} md={12} xs={24}><Card /></Col>
          <Col xl={8} md={12} xs={24}><Card /></Col>
          <Col xl={8} md={12} xs={24}><Card /></Col>
      
          <Col xl={8} md={12} xs={24}><Card /></Col>
          <Col xl={8} md={12} xs={24}><Card /></Col>
          <Col xl={8} md={12} xs={24}><Card /></Col>
        </Row>
      </div>
      <div className="flex justify-center">

      <Pagination defaultCurrent={1} total={23} defaultPageSize={12} />
      </div>
    </ContainerStyled>
  );
}
