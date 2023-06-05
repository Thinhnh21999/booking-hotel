import { Pagination } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

import list_category from "../../assets/svgs/list_category.svg";
import list_menu from "../../assets/svgs/list_menu.svg";
import filter from "../../assets/svgs/filter.svg";

import Card from "../card/index";
import Sort from "../sort/index";
import { ContainerStyled, Para, FilterButton } from "./style.js";
import restClientData from "../../services/restClientData";
import { useState, useEffect } from "react";

export default function Container() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    restClientData("get", "/location").then((res) => setData(res));
  }, []);
  console.log(data);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 12;
  const endIndex = currentPage * 12;
  return (
    <ContainerStyled className=" w-3/4 ml-5">
      <div className="px-2.5 flex justify-between text-gray">
        <Para>{data.length} hotels found</Para>
        <FilterButton>
          <div className="flex justify-between">
            <img src={filter} alt="" />
            <span className="ml-3">Filter</span>
          </div>
        </FilterButton>
        <div className="flex justify-end">
          <div>
            <Space.Compact block>
              <Dropdown
                placement="bottomRight"
                overlay={<Sort />}
                trigger={["click"]}
              >
                <Button className="border-none">
                  Sort <ArrowDownOutlined className="pl-2"></ArrowDownOutlined>{" "}
                </Button>
              </Dropdown>
            </Space.Compact>
          </div>
          <img className="h-7 p-2 cursor-pointer" src={list_menu} alt="" />
          <img className="h-7 p-2 cursor-pointer" src={list_category} alt="" />
        </div>
      </div>
      <div className="my-5 grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">
        {data.slice(startIndex, endIndex).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center ">
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={12}
          onChange={handleChangePage}
        />
      </div>
    </ContainerStyled>
  );
}
