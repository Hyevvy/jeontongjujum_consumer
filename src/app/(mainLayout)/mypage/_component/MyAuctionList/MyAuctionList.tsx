"use client";
import style from "@/app/(mainLayout)/mypage/_component/MyList.module.css";
import { Page } from "@/constants/PageResponseType";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect, useState } from "react";
import auctionAPI from "@/apis/auction/auctionAPIService";
import { GetMyAuctionListResponseData } from "@/apis/auction/auctionAPIService.types";
import { useRouter } from "next/navigation";
import MyAuctionBox from "../MyAuctionBox/MyAuctionBox";

export default function MyAuctionList() {
  const router = useRouter();
  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery<
      Page<GetMyAuctionListResponseData[]>,
      Object,
      InfiniteData<Page<GetMyAuctionListResponseData[]>>,
      [_1: string, _2: string],
      number
    >({
      queryKey: ["auction", "list"],
      queryFn: ({ pageParam = 0 }) =>
        auctionAPI.GetMyAuctionList(pageParam, 10),
      initialPageParam: 0,
      getNextPageParam: (lastPage) =>
        lastPage.last === false ? lastPage.number + 1 : null,
      staleTime: 60 * 1000,
      gcTime: 300 * 1000,
    });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <div className={style.list}>
      <div className={style.listHeader}>
        <h2>나의 경매 참여 내역</h2>
        <div
          className={style.goDetail}
          onClick={() => router.push("/mypage/myauction")}
        >
          자세히 보기 {">"}
        </div>
      </div>
      <div className={style.myWishList}>
        {data?.pages[0]?.content?.length > 0 &&
          data?.pages[0].content.slice(0, 5)?.map((it, i) => (
            <Fragment key={i}>
              <MyAuctionBox key={it.auctionId} params={it} />
            </Fragment>
          ))}
        {!data?.pages[0]?.content.length && <div>나의 경매 목록이 없어요</div>}
      </div>
      <div ref={ref} style={{ height: 50 }} />
    </div>
  );
}
