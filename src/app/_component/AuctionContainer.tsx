"use client";
import live_beforeVideo from "/public/live_before.mp4";
import auctionAPI from "@/apis/auction/auctionAPIService";
import Image from "next/image";
import style from "@/app/page.module.css";
import Link from "next/link";
import {
  AuctionProduct,
  GetAuctionDetailInfoResponseData,
} from "@/apis/auction/auctionAPIService.types";
import { Swiper, SwiperSlide } from "swiper/react";
import Script from "next/script";
import { useEffect, useState } from "react";

// async function getAuction() {
//   const data = await auctionAPI.getAuctionDetailInfo();
//   if (data.code === 200) return data.data;
// }

export default function AuctionContainer() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [data, setData] = useState<GetAuctionDetailInfoResponseData>();
  async function getAuction() {
    const data = await auctionAPI.getAuctionDetailInfo();
    if (data.code === 200) return setData(data.data);
  }

  useEffect(() => {
    getAuction();
    setMounted(true);
  }, []);

  const breakpoints = {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  };

  console.log(data);
  return (
    <>
      {mounted && (
        <div className={style.auctionContainer}>
          <div className={style.auctionHeader}>
            매주 금요일 17시! 실시간으로 만나는 전통주
          </div>
          <Link href={`/auction/${data?.auction.auctionId}`}>
            <div className={style.auctionBody}>
              <div className={style.auctionLeft}>
                <video
                  src={live_beforeVideo}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "80%",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                />
                <div className={style.auctionTitle}>{data?.auction.title}</div>
                <div className={style.auctionDesc}>
                  {data?.auction.startDate.slice(0, 10)} 오후 5시
                </div>
              </div>
              <div className={style.auctionRight}>
                <Swiper spaceBetween={50} autoplay>
                  {data?.productList?.map((product: AuctionProduct) => (
                    <SwiperSlide key={product.auctionProductId}>
                      <Image
                        src={
                          product.productImageUrl ||
                          "https://img.freepik.com/free-photo/concrete-background-cement-texture-with-blank-space_53876-129755.jpg"
                        }
                        alt={product.description}
                        width={200}
                        height={200}
                        priority
                        style={{
                          borderRadius: "12px",
                        }}
                      />
                      <div>
                        <div className={style.productName}>
                          {product.productName}
                        </div>
                        <div>{product.description}</div>
                        <div>도수 | {product.alcoholDegree}%</div>
                        <div>용량 | {product.capacity}ml</div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* <div className="swiper-container">
              <div className="swiper-wrapper">
                {data?.productList?.map((product: AuctionProduct) => (
                  <div
                    className="swiper-slide"
                    data-swiper-autoplay="1000"
                    key={product.auctionProductId}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2rem",
                    }}
                  >
                    <Image
                      src={
                        product.productImageUrl ||
                        "https://img.freepik.com/free-photo/concrete-background-cement-texture-with-blank-space_53876-129755.jpg"
                      }
                      alt={product.description}
                      width={200}
                      height={200}
                      priority
                      style={{
                        borderRadius: "12px",
                      }}
                    />
                    <div>
                      <div className={style.productName}>
                        {product.productName}
                      </div>
                      <div>{product.description}</div>
                      <div>도수 | {product.alcoholDegree}%</div>
                      <div>용량 | {product.capacity}ml</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-scrollbar"></div>
            </div> */}
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
