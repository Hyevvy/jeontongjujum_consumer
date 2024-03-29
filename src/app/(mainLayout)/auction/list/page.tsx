"use client";
import auctionAPI from "@/apis/auction/auctionAPIService";
import { GetAuctionDetailInfoResponseData } from "@/apis/auction/auctionAPIService.types";
import style from "@/app/(mainLayout)/auction/list/auctionList.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuctionListPage() {
  const [data, setData] = useState<GetAuctionDetailInfoResponseData>();
  async function getAuction() {
    const data = await auctionAPI.getAuctionDetailInfo();
    if (data.code === 200) return setData(data.data);
  }

  useEffect(() => {
    getAuction();
  }, []);

  return (
    <div className={style.auctionListPage}>
      <h2>경매 입장 주의 사항</h2>
      <div>경매 입장시 아래 주의사항을 꼭 읽어주세요.</div>
      <div>미숙지로 인한 결과는 전통주점이 책임지지않아요.</div>
      <div>1. 경매 낙찰시 취소할 수 없어요.</div>
      <div>2. 경매 도중에 크레딧을 추가할 수 있어요.</div>
      <div>3. 경매는 입장시 설정해둔 기본 배송지로 배송되어요.</div>
      <div>* 추후 배송지 수정은 불가해요.</div>
      <div>* 우리 자주 만나요!</div>
      <Link
        href={`/auction/${data?.auction.auctionId}`}
        className={style.button}
      >
        경매 참여하기
      </Link>
    </div>
  );
}
