import { useState, useEffect } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import Card from "../card/index";
import Sort from "../sort/index";
import { ContainerStyled, Para, FilterButton } from "./style.js";

import list_category from "../../assets/svgs/list_category.svg";
import list_menu from "../../assets/svgs/list_menu.svg";
import filter from "../../assets/svgs/filter.svg";
import { getProductSaga, setParams } from "../../redux/counter/productSlice";

export default function Container() {
  const [current, setCurrent] = useState(1);
  const { products, params } = useSelector((state) => state.Products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProductSaga({
        _page: 1,
        _limit: 12,
      })
    );
  }, []);

  const handleChangePage = (page) => {
    setCurrent(page);
    dispatch(
      setParams({
        ...params,
        _page: page,
      })
    );
    dispatch(
      getProductSaga({
        ...params,
        _page: page,
      })
    );
  };

  return (
    <ContainerStyled className=" w-3/4 ml-5">
      <div className="px-2.5 flex justify-between text-gray">
        <Para>{products.length} hotels found</Para>
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
        {products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center ">
        <Pagination
          current={current}
          total={params._totalRows}
          pageSize={params._limit}
          onChange={handleChangePage}
        />
      </div>
    </ContainerStyled>
  );
}
