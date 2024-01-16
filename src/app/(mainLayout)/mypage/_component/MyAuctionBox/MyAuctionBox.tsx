import { GetMyAuctionListResponseData } from "@/apis/auction/auctionAPIService.types";
import Image from "next/image";
import style from "@/app/(mainLayout)/mypage/_component/MyAuctionBox/MyAuctionBox.module.css";

export default function MyAuctionBox({
  params,
}: {
  params: GetMyAuctionListResponseData;
}) {
  return (
    <div className={style.myAuctionBox}>
      <div className={style.auctionName}>{params.auctionName}</div>
      {params.isBid && <div className={style.bid}> 🎉 낙찰 </div>}
      <div className={style.myAuctionInnerBox}>
        <div>
          <Image
            src={params.productImageUrl}
            alt="product"
            width="200"
            height="200"
          />
          <div>{params.productName}</div>
        </div>
        <div>
          <div>{params.bidDate}</div>
          <div>시작가 | {params.startingPrice}</div>
          <div>낙찰가 | {params.lastBidPrice}</div>
          <div>마지막 입찰가 | {params.myLastBidPrice}</div>
        </div>
      </div>
    </div>
  );
}
