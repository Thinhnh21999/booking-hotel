import CardAbout from "../../component/cardAbout";
import { Autoplay, Navigation, Pagination } from "swiper";

import * as styled from "./style";
import { SwiperSlide } from "swiper/react";

export default function about(props) {
  return (
    <>
      <div className="px-5">
        <img
          className="w-full"
          src="https://res.cloudinary.com/ducimayyw/image/upload/v1696161232/image-1_rtonyy.png"
          alt="#video"
        />
      </div>
      <div className="pt-[50px]">
        <div className="lg:container lg:mx-auto px-5">
          <div className="pt-2.5">
            <h2 className="mb-4 text-3xl font-bold">About the company</h2>
            <p className="text-lg text-gray">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              cons, adipisci velit, sed quia non numquam eius modi ullma tempora
              incidunt ut labore et dolore magnam aliquam quaerat fruitr
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.
              Itaque earum rerum hic tea sapiente delectus, ut aut reiciendis
              voluptatibus.
            </p>
          </div>

          <div className="pt-[30px] pb-[60px]">
            <div className="flex flex-wrap">
              <div className="lg:w-1/2 w-full">
                <div className="pr-[50px] mb-[30px]">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold">Our mission</h3>
                  </div>
                  <div className="mb-5">
                    <p className="text-lg text-gray">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Quis
                      nostrud kemmith exercitation ullamco laboris nisi ut
                      aliquip.
                    </p>
                  </div>
                  <ul className="">
                    <li className="py-[5px] text-lg text-gray">
                      Excepteur sint occaecat cupidatat non proident.
                    </li>
                    <li className="py-[5px] text-lg text-gray">
                      Quis autem vel eum iure reprehende qui in ea.
                    </li>
                    <li className="py-[5px] text-lg text-gray">
                      At vero eos accusamus iusto odio dignissimos.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Our mission</h3>
                </div>
                <div className="mb-5">
                  <p className="text-lg text-gray">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum. Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium minima veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[60px] bg-[#f7f8fa]">
          <div className="lg:container lg:mx-auto px-5">
            <div className="overflow-hidden">
              <h2 className="text-[40px] font-bold mb-[50px]">
                What our clients say
              </h2>
              <styled.SwiperCustom
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  430: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1366: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
              >
                <SwiperSlide>
                  <CardAbout />
                </SwiperSlide>
                <SwiperSlide>
                  <CardAbout />
                </SwiperSlide>
                <SwiperSlide>
                  <CardAbout />
                </SwiperSlide>
                <SwiperSlide>
                  <CardAbout />
                </SwiperSlide>
                <SwiperSlide>
                  <CardAbout />
                </SwiperSlide>
                <SwiperSlide>
                  <CardAbout />
                </SwiperSlide>
              </styled.SwiperCustom>
            </div>
          </div>
        </div>

        <div className="pb-[40px]">
          <div className="pt-[50px] pb-[20px]">
            <h2 className="p-2.5 text-center text-4xl font-bold">
              Meet our team
            </h2>
          </div>

          <div className="lg:container lg:mx-auto px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 grid-rows-2">
              <div className="p-2.5">
                <img
                  src="https://res.cloudinary.com/ducimayyw/image/upload/v1696165831/team1-600x700_txgq5l.png"
                  alt="user"
                />
                <div className="mt-[30px] text-center mb-[50px]">
                  <h3 className="text-xl font-bold mb-1">Darlene Robertson</h3>
                  <span className="text-gray text-md">Marketing Manager</span>
                </div>
              </div>
              <div className="p-2.5">
                <img
                  src="https://res.cloudinary.com/ducimayyw/image/upload/v1696165850/team2-600x700_ovr3ii.png"
                  alt="user"
                />
                <div className="mt-[30px] text-center mb-[50px]">
                  <h3 className="text-xl font-bold mb-1">Darlene Robertson</h3>
                  <span className="text-gray text-md">Marketing Manager</span>
                </div>
              </div>
              <div className="p-2.5">
                <img
                  src="https://res.cloudinary.com/ducimayyw/image/upload/v1696166834/team3-600x700_a3nifm.png"
                  alt="user"
                />
                <div className="mt-[30px] text-center mb-[50px]">
                  <h3 className="text-xl font-bold mb-1">Darlene Robertson</h3>
                  <span className="text-gray text-md">Marketing Manager</span>
                </div>
              </div>
              <div className="p-2.5">
                <img
                  src="https://res.cloudinary.com/ducimayyw/image/upload/v1696166909/team4-600x700_vono5o.png"
                  alt="user"
                />
                <div className="mt-[30px] text-center mb-[50px]">
                  <h3 className="text-xl font-bold mb-1">Darlene Robertson</h3>
                  <span className="text-gray text-md">Marketing Manager</span>
                </div>
              </div>
              <div className="p-2.5">
                <img
                  src="https://res.cloudinary.com/ducimayyw/image/upload/v1696166914/team5-600x700_dnr1wr.png"
                  alt="user"
                />
                <div className="mt-[30px] text-center mb-[50px]">
                  <h3 className="text-xl font-bold mb-1">Darlene Robertson</h3>
                  <span className="text-gray text-md">Marketing Manager</span>
                </div>
              </div>
              <div className="p-2.5">
                <img
                  src="https://res.cloudinary.com/ducimayyw/image/upload/v1696166946/team6-600x700_h6uxq7.png"
                  alt="user"
                />
                <div className="mt-[30px] text-center mb-[50px]">
                  <h3 className="text-xl font-bold mb-1">Darlene Robertson</h3>
                  <span className="text-gray text-md">Marketing Manager</span>
                </div>
              </div>
              <div className="p-2.5">
                <img
                  src="https://res.cloudinary.com/ducimayyw/image/upload/v1696166963/team7-600x700_q5j56n.png"
                  alt="user"
                />
                <div className="mt-[30px] text-center mb-[50px]">
                  <h3 className="text-xl font-bold mb-1">Darlene Robertson</h3>
                  <span className="text-gray text-md">Marketing Manager</span>
                </div>
              </div>
              <div className="p-2.5">
                <img
                  src="https://res.cloudinary.com/ducimayyw/image/upload/v1696166969/team8-600x700_mya8rj.png"
                  alt="user"
                />
                <div className="mt-[30px] text-center mb-[50px]">
                  <h3 className="text-xl font-bold mb-1">Darlene Robertson</h3>
                  <span className="text-gray text-md">Marketing Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
