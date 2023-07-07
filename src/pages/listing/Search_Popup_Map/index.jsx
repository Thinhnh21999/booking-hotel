import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductSaga, setParams } from "../../../redux/counter/productSlice";
import {
  Slider,
  InputNumber,
  Checkbox,
  Rate,
  Form,
  Pagination,
  Button,
  Dropdown,
  Space,
  Radio,
} from "antd";
import Search from "../../../component/search";
import Card from "../../../component/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ArrowDownOutlined } from "@ant-design/icons";
import DropDownSvg from "../../../assets/svgs/dropdown.svg";
import list_category from "../../../assets/svgs/list_category.svg";
import list_menu from "../../../assets/svgs/list_menu.svg";
import filter from "../../../assets/svgs/filter.svg";
import * as styled from "./style.js";

export default function Listing() {
  const [current, setCurrent] = useState(1);
  const [isPrice, setIsPrice] = useState(254);
  const [isReview, setIsReview] = useState();
  const [isStar, setIsStar] = useState();
  const [isPage, setIsPage] = useState();
  const [isFacilitiesItem, setIsFacilitiesItem] = useState(4);
  const [isHotelThemeItem, setIsHotelThemeItem] = useState(4);
  const [isValueRadio, setIsValueRadio] = useState(1);
  const [isValueName, setIsValueName] = useState();
  const [isValueOrder, setIsValueOrder] = useState();

  const reviewOptions = [
    "Excellent",
    "Very Good",
    "Average",
    "Poor",
    "Terrible",
  ];
  const [isReviewOptions, setIsReviewOption] = useState(reviewOptions);

  const [isOpen, setIsOpen] = useState({
    isFilter: true,
    isReviewScore: true,
    isHotelStar: true,
    isFacilities: true,
    isHotelTheme: true,
  });
  const [formPrice] = Form.useForm();
  const [formReview] = Form.useForm();
  const [formStar] = Form.useForm();
  const [formFacilities] = Form.useForm();
  const [formHotelTheme] = Form.useForm();

  const { products, params } = useSelector((state) => state.Products);
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
    setIsPage(page);
    setCurrent(page);
    dispatch(
      setParams({
        ...params,
        _page: page,
        price_gte: 100,
        price_lte: isPrice,
        review: isReview,
        star: isStar,
        _sort: isValueName,
        _order: isValueOrder,
      })
    );
    dispatch(
      getProductSaga({
        ...params,
        _page: page,
        price_gte: 100,
        price_lte: isPrice,
        review: isReview,
        star: isStar,
        _sort: isValueName,
        _order: isValueOrder,
      })
    );
  };

  const onFinishPrice = (Prices) => {
    const price = Prices?.priceRange?.slice(1);
    setIsPrice(price);
    dispatch(
      setParams({
        ...params,
        _page: isPage,
        price_gte: 100,
        price_lte: price,
        review: isReview,
        star: isStar,
        _sort: isValueName,
        _order: isValueOrder,
      })
    );

    dispatch(
      getProductSaga({
        ...params,
        _page: isPage,
        price_gte: 100,
        price_lte: price,
        review: isReview,
        star: isStar,
        _sort: isValueName,
        _order: isValueOrder,
      })
    );
  };

  const handleChangePrice = (price) => {
    setIsPrice(price.slice(1));
  };

  const onChangeReview = (value) => {
    setIsReview(value);
    dispatch(
      setParams({
        ...params,
        _page: isPage,
        review: value,
        price_gte: 100,
        price_lte: isPrice,
        star: isStar,
        _sort: isValueName,
        _order: isValueOrder,
      })
    );

    dispatch(
      getProductSaga({
        ...params,
        _page: isPage,
        review: value,
        price_gte: 100,
        price_lte: isPrice,
        star: isStar,
        _sort: isValueName,
        _order: isValueOrder,
      })
    );
  };

  const onChangeStar = (value) => {
    setIsStar(value);
    dispatch(
      setParams({
        ...params,
        _page: isPage,
        star: value,
        price_gte: 100,
        price_lte: isPrice,
        review: isReview,
        _sort: isValueName,
        _order: isValueOrder,
      })
    );

    dispatch(
      getProductSaga({
        ...params,
        _page: isPage,
        star: value,
        price_gte: 100,
        price_lte: isPrice,
        review: isReview,
        _sort: isValueName,
        _order: isValueOrder,
      })
    );
  };

  const onChangeFacilities = (value) => {
    console.log(value);
  };

  const onChangeHotelTheme = (value) => {
    console.log(value);
  };

  const onChangeRadioSort = (e) => {
    const value = e.target.value;
    setIsValueRadio(value);
    setIsValueName("price");
    setIsValueOrder(value);

    let valueName = "price";
    let valueOrder = value;

    if (value === "a-z") {
      setIsValueName("nameHotel");
      setIsValueOrder("asc");
      valueName = "nameHotel";
      valueOrder = "asc";
    } else if (value === "z-a") {
      setIsValueName("nameHotel");
      setIsValueOrder("desc");
      valueName = "nameHotel";
      valueOrder = "desc";
    } else if (value === "new hotel") {
      setIsValueName("newHotel");
      setIsValueOrder("asc");
      valueName = "newHotel";
      valueOrder = "asc";
    }

    dispatch(
      setParams({
        ...params,
        _sort: valueName,
        _order: valueOrder,
        _page: isPage,
        price_gte: 100,
        price_lte: isPrice,
        review: isReview,
        star: isStar,
      })
    );

    dispatch(
      getProductSaga({
        ...params,
        _sort: valueName,
        _order: valueOrder,
        _page: isPage,
        price_gte: 100,
        price_lte: isPrice,
        review: isReview,
        star: isStar,
      })
    );
  };

  const handleDropdown = (item) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const starOptions = [
    {
      label: <styled.RateCustom defaultValue={5} count={5} disabled />,
      value: 5,
    },
    {
      label: <styled.RateCustom defaultValue={4} count={4} disabled />,
      value: 4,
    },
    {
      label: <styled.RateCustom defaultValue={3} count={3} disabled />,
      value: 3,
    },
    {
      label: <styled.RateCustom defaultValue={2} count={2} disabled />,
      value: 2,
    },
    {
      label: <styled.RateCustom defaultValue={1} count={1} disabled />,
      value: 1,
    },
  ];

  const facilitiesOption = [
    "Air Conditioning",
    "AirPort Transport",
    "Fitness Center",
    "Flat Tv",
    "Heater",
    "Internet - Wifi",
    "Parking",
    "Pool",
    "Restaurant",
    "Smoking Room",
    "Spa & Sauna",
    "Washer & Dryer",
  ];

  const hotelThemeOption = [
    "Best value",
    "Boutique",
    "Budget",
    "Business",
    "Charming",
    "Classic",
    "Green",
    "Luxury",
    "Mid-range",
    "Party",
    "Quaint",
    "Quite",
    "Romantic",
    "Standard",
    "Trendy",
  ];

  const handleReset = () => {
    dispatch(
      getProductSaga({
        _page: 1,
        _limit: 12,
      })
    );
    formPrice.resetFields(setIsPrice(254));
    formReview.resetFields(setIsReviewOption(reviewOptions));
  };

  return (
    <div className="overflow-hidden">
      <div className="bg-home_tour h-[460px] lg:h-full  bg-no-repeat bg-cover">
        <div className="py-[130px] text-center">
          <h2 className="lg:text-[64px] lg:leading-[74px] text-[42px] leading-[52px] mb-3.5 font-bold text-white">
            Find your next stay
          </h2>
          <p className="text-lg font-normal text-white leading-[30px]">
            Get the best prices on 2,000,000+ properties, worldwide
          </p>
        </div>
      </div>
      <div className="lg:container lg:mx-auto px-5 relative top-[-150px] lg:top-[-40px]">
        <Search />
      </div>
      <styled.Wrapper className="px-[8%] mb-20 mt-10">
        <div className="flex justify-center">
          <styled.Aside className=" w-1/4">
            <div className="relative rounded-[20px] mb-[30px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1683879382654!5m2!1svi!2s"
                frameborder="0"
                className="w-full h-[200px] border-0 rounded-[30px]"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="absolute bottom-2 right-[18%] cursor-pointer bg-white text-primary border-2 border-solid border-stone-300 mx-[10%] py-3 px-4 font-semibold rounded-3xl">
                View in a map
              </p>
            </div>

            <div className="py-7 bg-filter mb-[30px] rounded-[20px]">
              <div
                className="flex px-5 justify-between"
                onClick={() => handleDropdown("isFilter")}
              >
                <div className="border-none font-bold text-lg">
                  Filter Price
                </div>
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    icon={isOpen.isFilter ? faChevronUp : faChevronDown}
                  />
                </div>
              </div>
              <div
                className={`max-h-0 px-5 overflow-hidden transition-all duration-700 ${
                  isOpen.isFilter ? "max-h-screen" : ""
                }`}
              >
                <Form
                  form={formPrice}
                  onFinish={onFinishPrice}
                  className="bg-filter mt-5 rounded-xl"
                >
                  <Form.Item name="priceRange">
                    <Slider
                      range={{
                        draggableTrack: true,
                      }}
                      count={[100, isPrice]}
                      defaultValue={[100, isPrice]}
                      min={100}
                      max={254}
                      onChange={(value) => handleChangePrice(value)}
                    />
                  </Form.Item>
                  <div className="flex justify-between mb-5">
                    <div className="mr-7 w-1/2 py-2 px-3 bg-white border-[#dedede] border-solid border rounded-2xl">
                      <h2 className="text-gray">Min price</h2>
                      <p>
                        $<span>100</span>
                      </p>
                    </div>
                    <div className="w-1/2 p-2 py-2 px-3 bg-white border-[#dedede] border-solid border rounded-2xl">
                      <h2 className="text-gray">Max price</h2>
                      <p>
                        $<span>{isPrice}</span>
                      </p>
                    </div>
                  </div>
                  <hr className="text-slate-300"></hr>
                  <div className="flex justify-between mt-5">
                    <p
                      onClick={() => {
                        formPrice.resetFields(setIsPrice(254));
                      }}
                      className="text-primary border-b-[1px] border-solid font-medium pt-2 cursor-pointer"
                    >
                      Clear
                    </p>
                    <Form.Item className="mb-0">
                      <styled.ButtonCustom type="primary" htmlType="submit">
                        Apply
                      </styled.ButtonCustom>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>

            <div className="px-5 py-7 bg-filter mb-[30px] rounded-[20px]">
              <div
                className="flex justify-between"
                onClick={() => handleDropdown("isReviewScore")}
              >
                <div className="border-none font-bold text-lg">
                  Review Score
                </div>
                <div className=" cursor-pointer">
                  <FontAwesomeIcon
                    icon={isOpen.isReviewScore ? faChevronUp : faChevronDown}
                  />
                </div>
              </div>
              <div
                className={`max-h-0 overflow-hidden transition-all duration-700 ${
                  isOpen.isReviewScore ? "max-h-screen" : ""
                }`}
              >
                <Form form={formReview} className="mt-5">
                  <styled.CheckboxGroup
                    options={isReviewOptions}
                    onChange={onChangeReview}
                  />
                </Form>
              </div>
            </div>

            <div className="px-5 py-7 bg-filter mb-[30px] rounded-[20px]">
              <div
                className="flex justify-between"
                onClick={() => handleDropdown("isHotelStar")}
              >
                <div className="border-none font-bold text-lg">Hotel Star</div>
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    icon={isOpen.isHotelStar ? faChevronUp : faChevronDown}
                  />
                </div>
              </div>
              <div
                className={`max-h-0 overflow-hidden transition-all duration-700 ${
                  isOpen.isHotelStar ? "max-h-screen" : ""
                }`}
              >
                <Form form={formStar} className="mt-5">
                  <styled.CheckboxGroup
                    options={starOptions}
                    onChange={onChangeStar}
                  />
                </Form>
              </div>
            </div>

            <div className="px-5 py-7 bg-filter mb-[30px] rounded-[20px]">
              <div
                className="flex justify-between"
                onClick={() => handleDropdown("isFacilities")}
              >
                <div className="border-none font-bold text-lg">Facilities</div>
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    icon={isOpen.isFacilities ? faChevronUp : faChevronDown}
                  />
                </div>
              </div>
              <div
                className={`max-h-0 overflow-hidden transition-all duration-700 ${
                  isOpen.isFacilities ? "max-h-screen" : ""
                }`}
              >
                <Form form={formFacilities} className="mt-5">
                  <styled.CheckboxGroup
                    options={facilitiesOption.slice(0, isFacilitiesItem)}
                    onChange={onChangeFacilities}
                  />
                  {isFacilitiesItem < facilitiesOption.length && (
                    <div
                      onClick={() => setIsFacilitiesItem(isFacilitiesItem + 3)}
                      className="text-primary cursor-pointer inline-flex justify-start border-b-[1px] border-b-primary border-solid "
                    >
                      <span>See more</span>
                      <img src={DropDownSvg} alt="" className="w-4 ml-2" />
                    </div>
                  )}
                </Form>
              </div>
            </div>

            <div className="px-5 py-7 bg-filter mb-[30px] rounded-[20px]">
              <div
                className="flex justify-between"
                onClick={() => handleDropdown("isHotelTheme")}
              >
                <div className="border-none font-bold text-lg">Hotel Theme</div>
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    icon={isOpen.isHotelTheme ? faChevronUp : faChevronDown}
                  />
                </div>
              </div>
              <div
                className={`max-h-0 overflow-hidden transition-all duration-700 ${
                  isOpen.isHotelTheme ? "max-h-screen" : ""
                }`}
              >
                <Form form={formHotelTheme} className="mt-5">
                  <styled.CheckboxGroup
                    options={hotelThemeOption.slice(0, isHotelThemeItem)}
                    onChange={onChangeHotelTheme}
                  />
                  {isHotelThemeItem < hotelThemeOption.length && (
                    <div
                      onClick={() => setIsHotelThemeItem(isHotelThemeItem + 3)}
                      className="text-primary cursor-pointer inline-flex justify-start border-b-[1px] border-b-primary border-solid "
                    >
                      <span>See more</span>
                      <img src={DropDownSvg} alt="" className="w-4 ml-2" />
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </styled.Aside>
          <styled.Container className=" w-3/4 ml-6">
            <div className="flex justify-between items-center text-gray mb-10">
              <styled.Para>
                {products.length} hotels found
                <span
                  onClick={() => handleReset()}
                  className="text-primary ml-3 cursor-pointer"
                >
                  Clear filter
                </span>
              </styled.Para>
              <styled.FilterButton>
                <div className="flex justify-between">
                  <img src={filter} alt="" />
                  <span className="ml-3">Filter</span>
                </div>
              </styled.FilterButton>
              <div className="flex justify-end">
                <styled.SpaceCompact block>
                  <Dropdown
                    placement="bottomRight"
                    overlay={
                      <Radio.Group
                        onChange={onChangeRadioSort}
                        value={isValueRadio}
                        className="z-10 absolute bg-white right-0 w-[150px] mt-4 text-black border-[1px] border-current border-solid border-slate-300 rounded-xl py-5 px-3 shadow-md shadow-slate-300"
                      >
                        <Radio value={"new hotel"}>New hotel</Radio>
                        <p className="mt-3">Price</p>
                        <Radio value={"asc"}> Low to Hight</Radio>
                        <br></br>
                        <Radio value={"desc"}> Hight to Low</Radio>
                        <p className="mt-3">Name</p>
                        <Radio value={"a-z"}> a-z</Radio>
                        <br></br>
                        <Radio value={"z-a"}> z-a</Radio>
                      </Radio.Group>
                    }
                    trigger={["click"]}
                  >
                    <div className="flex border-b border-solid border-[#232323] text-[#232323]">
                      Sort
                      <img src={DropDownSvg} alt="..." className="w-5" />
                    </div>
                  </Dropdown>
                </styled.SpaceCompact>
                <div className="flex ml-5">
                  <img
                    className="h-8 p-2 cursor-pointer"
                    src={list_menu}
                    alt=""
                  />
                  <img
                    className="h-8 p-2 cursor-pointer"
                    src={list_category}
                    alt=""
                  />
                </div>
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
          </styled.Container>
        </div>
      </styled.Wrapper>
    </div>
  );
}
