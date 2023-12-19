"use client";
import KakaoShareImg from "/public/kakaotalk_sharing_btn_small_ov.png";
import LoadingImg from "/public/loading.gif";
import NotFoundImg from "/public/jeontongju_notfound.png";
import sellerAPI from "@/apis/seller/sellerAPIService";
import { GetSellerInfoResponseData } from "@/apis/seller/sellerAPIService.types";
import { useEffect, useState } from "react";
import style from "@/app/(mainLayout)/seller/[sellerId]/seller.module.css";
import Image from "next/image";

type Props = {
  params: { sellerId: string };
};

export default function Seller({ params }: Props) {
  const { sellerId } = params;
  const [sellerInfo, setSellerInfo] = useState<GetSellerInfoResponseData>(null);
  const [img, setImg] = useState<string>(LoadingImg);
  const [selectedMenu, setSelectedMenu] = useState<number>(0);

  const getSellerInfo = async (sellerId: number) => {
    try {
      const data = await sellerAPI.getSellerInfo(sellerId);
      if (data.code === 200) {
        setSellerInfo(data.data);
        setImg("");
      }
    } catch (err) {
      console.error(err);
      setImg(NotFoundImg);
    }
  };

  useEffect(() => {
    getSellerInfo(parseInt(params.sellerId));
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const { Kakao } = window;
      if (Kakao && !Kakao.isInitialized()) {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
      }
    };

    return () => {
      // Remove the script tag when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  const handleShareKakao = async () => {
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const { Kakao } = window;
        if (Kakao && !Kakao.isInitialized()) {
          Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
          window.Kakao.Share.sendDefault({
            objectType: "feed",
            content: {
              title: `전통주점, ${sellerInfo.storeName}`,
              description: `${sellerInfo.storeDescription}`,
              imageUrl: `${sellerInfo.storeImageUrl}`,
              link: {
                mobileWebUrl: `https://consumer.jeontongju-dev.shop/seller/${sellerId}`,
                webUrl: `https://developers.kakao.com/seller/${sellerId}`,
              },
            },
          });
        }
      };
    } else {
      await window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `전통주점, ${sellerInfo.storeName}`,
          description: `${sellerInfo.storeDescription}`,
          imageUrl: `${sellerInfo.storeImageUrl}`,
          link: {
            mobileWebUrl: `https://consumer.jeontongju-dev.shop/seller/${sellerId}`,
            webUrl: `https://developers.kakao.com/seller/${sellerId}`,
          },
        },
      });
    }
  };

  return (
    <>
      {sellerInfo ? (
        <div className={style.sellerPage}>
          <div className={style.sellerHeader}>
            <Image
              src={sellerInfo.storeImageUrl}
              alt="seller-thumbnail"
              width={0}
              height={0}
              style={{
                cursor: "pointer",
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
              }}
            />
            <div className={style.storeName}>{sellerInfo.storeName}</div>
            <div>{sellerInfo.storeDescription}</div>
            <div className={style.shareBtns}>
              <div onClick={handleShareKakao}>
                <Image
                  src={KakaoShareImg}
                  alt="kakaoShare"
                  width={0}
                  height={0}
                  style={{
                    cursor: "pointer",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </div>
              <Image
                src={KakaoShareImg}
                alt="kakaoShare"
                width={0}
                height={0}
                style={{
                  cursor: "pointer",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            </div>
          </div>
          <div>
            <div className={style.sellerMenu}>
              <div
                className={selectedMenu === 0 ? style.selected : ""}
                onClick={() => setSelectedMenu(0)}
              >
                인기 상품
              </div>
              <div
                className={selectedMenu === 1 ? style.selected : ""}
                onClick={() => setSelectedMenu(1)}
              >
                전체 상품
              </div>
              <div
                className={selectedMenu === 2 ? style.selected : ""}
                onClick={() => setSelectedMenu(2)}
              >
                등록된 쇼츠
              </div>
              <div
                className={selectedMenu === 3 ? style.selected : ""}
                onClick={() => setSelectedMenu(3)}
              >
                주모 정보
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Image
          src={img}
          alt="seller-notfound"
          width={0}
          height={0}
          style={{ cursor: "pointer", width: "80%", height: "80%" }}
        />
      )}
    </>
  );
}
