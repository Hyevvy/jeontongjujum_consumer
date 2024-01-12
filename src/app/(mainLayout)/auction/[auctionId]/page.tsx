"use client";
import UserDefaultImg from "/public/UserDefault.png";
import LiveBeforeImg from "/public/live_before.mp4";
import ConnectLive from "@connectlive/connectlive-web-sdk";
import { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";
// import { AgoraManager } from "../test/AgoraManager";
import config from "../_component/config";
import { Client } from "stompjs";
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";
import { useEffect, useState } from "react";
import style from "@/app/(mainLayout)/auction/[auctionId]/auction.module.css";
import auctionAPI from "@/apis/auction/auctionAPIService";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useMyInfoStore } from "@/app/store/myInfo/myInfo";
import SEO from "@/app/_component/SEO";
import AuctionPage from "../test/page";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import consumerAPI from "@/apis/consumer/consumerAPIService";

type Props = {
  params: { auctionId: string };
};

type ChatData = {
  memberNickname: string;
  memberProfileImage: string;
  message: string;
};

interface AuctionData {
  auctionProductList: {
    auctionProductId: string;
    auctionProductName: string;
    auctionStartingPrice: number;
    state: "ING" | "BEFORE" | "AFTER";
  }[];
  askingPrice: number;
  bidHistoryList: MemberAuction[];
}

type MemberAuction = {
  memberId: number;
  nickname: string;
  profileImage: string;
  auctionProductId: string;
  bidPrice: number;
};

const AuctionDetail = ({ params }: Props) => {
  const router = useRouter();
  const { auctionId } = params;
  const [isDisableToBid, setIsDisableToBid] = useState(false);
  const agoraEngine = useRTCClient(
    AgoraRTC.createClient({ codec: "vp8", mode: config.selectedProduct })
  );

  const { data: myInfo, isLoading } = useQuery({
    queryKey: ["consumer", "myinfo"],
    queryFn: () => consumerAPI.getMyInfoForStore(),
  });

  const [isLogin, memberId] = useMyInfoStore((state) => [
    state.isLogin,
    state.memberId,
  ]);
  const [message, setMessage] = useState<string>("");
  const [stompClient, setStompClient] = useState<null | Client>(null);
  const [auctionName, setAuctionName] = useState<string>("");
  const [status, setStatus] = useState<"ING" | "BEFORE" | "AFTER">();
  const [auctionInfo, setAuctionInfo] = useState<AuctionData>();
  const [chat, setChat] = useState<ChatData[]>([]);
  const notify = (message: string) => toast(message);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("accessToken")) {
        toast("로그인한 유저만 접근할 수 있어요.");
        router.push("/init/signin");
      }
    }
  }, []);

  useEffect(() => {
    console.log(myInfo);
    if (typeof myInfo !== "undefined" && !myInfo?.data.isAddressDefault) {
      toast("기본 주소지를 설정해야 경매에 입장할 수 있어요.");
      router.push("/mypage/myaddress");
    }
  }, [myInfo]);

  const connectChatInfo = () => {
    console.log("auction");
    const serverURL = "https://api.jeontongju.shop/auction-service";
    let socket = new SockJS(`${serverURL}/chat`);
    const stompClient = Stomp.over(socket);
    stompClient.connect(
      {},
      (frame) => {
        stompClient.subscribe(`/sub/chat/${auctionId}`, (res) => {
          console.log("[CHAT] 구독으로 받은 메시지 입니다.", res.body);
          // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
          const chatData = JSON.parse(res.body);
          setChat((prev) => [...prev, chatData]);
        });
      },
      (error) => {
        console.log("소켓 연결 실패", error);
      }
    );
  };

  const connectBidInfo = () => {
    console.log("auction");
    const serverURL = "https://api.jeontongju.shop/auction-service";
    let socket = new SockJS(`${serverURL}/chat`);
    const stompClient = Stomp.over(socket);
    stompClient.connect(
      {},
      (frame) => {
        stompClient.subscribe(`/sub/bid-info/${auctionId}`, (res) => {
          console.log("[BID] 구독으로 받은 메시지 입니다.", res.body);
          const auctionData = JSON.parse(res.body);
          setAuctionInfo((prev) => auctionData);
        });
      },
      (error) => {
        console.log("소켓 연결 실패", error);
      }
    );
    setStompClient(stompClient);
  };

  const sendMessage = () => {
    if (!message) return;
    const msg = {
      memberId,
      message,
    };
    stompClient!.send(`/pub/chat/${auctionId}`, JSON.stringify(msg));
    setMessage("");
  };

  const enterAuctionRoom = async () => {
    try {
      const data = await auctionAPI.enterAuction(auctionId);
      if (data.code === 200) {
        setAuctionName(data.data.auctionName);
        setStatus(data.data.status);
        console.log(data.data.status);
        if (data.data.status === "ING") {
          connectChatInfo();
          connectBidInfo();
        }
      }
    } catch (error) {
      notify("입장에 실패했어요");
      console.error(error);
    }
  };

  const bidAskingPrice = async () => {
    setIsDisableToBid(true);
    setTimeout(() => setIsDisableToBid(false), 3000);
    try {
      const data = await auctionAPI.bid({
        auctionId,
        bidPrice:
          Number(auctionInfo?.bidHistoryList[0].bidPrice) +
          Number(auctionInfo?.askingPrice),
      });
      if (data.code === 200) {
        console.log("입찰 성공");
      }
    } catch (error) {
      toast("입찰에 실패했어요.");
      console.error("입찰 실패");
    }
  };

  useEffect(() => {
    enterAuctionRoom();
  }, []);

  return (
    <>
      <SEO title="라이브 경매" desc={auctionName} />
      <div className={style.auctionPage}>
        {status === "ING" ? (
          <>
            <div className={style.auctionLeft}>
              {/* <AuctionPage /> */}
              <div className={style.chat}>
                {chat.map((it, idx) => (
                  <div className={style.chatBox} key={idx}>
                    <Image
                      src={it.memberProfileImage || UserDefaultImg}
                      alt="img"
                      width="20"
                      height="20"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                    <span className={style.chatName}>{it.memberNickname}</span>
                    <span className={style.chatMessage}>{it.message}</span>
                  </div>
                ))}
                {isLogin && (
                  <div className={style.bottomInput}>
                    <input
                      className={style.chatInput}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className={style.inputButton} onClick={sendMessage}>
                      입력
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={style.auctionRight}>
              <div className={style.todayAuctionBox}>
                <h3 className={style.auctionName}>{auctionName}</h3>
                <div>
                  {auctionInfo?.auctionProductList.map(
                    (auctionProduct, idx) => (
                      <div key={idx}>
                        <div>{auctionProduct.auctionProductName}</div>
                        <div>
                          시작가 | {auctionProduct.auctionStartingPrice}원
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className={style.bidInfo}>
                <h2>현재 입찰 내역</h2>
                <div>
                  {auctionInfo?.bidHistoryList.map((bidHistory, idx) => (
                    <div key={idx}>
                      <Image
                        src={bidHistory.profileImage || UserDefaultImg}
                        width="10"
                        height="10"
                        alt="bidUser"
                      />
                      <div>{bidHistory.nickname}</div>
                      <div>{bidHistory.bidPrice}</div>
                    </div>
                  ))}
                </div>
              </div>
              {isLogin && (
                <>
                  {/* <div className={style.bidInput}>
                    <input
                      className={style.chatInput}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className={style.inputButton} onClick={sendMessage}>
                      입찰
                    </button>
                  </div> */}
                  <Button
                    className={style.inputBidButton}
                    onClick={bidAskingPrice}
                    disabled={isDisableToBid}
                    loading={isDisableToBid}
                  >
                    현재가 + 호가만큼 입찰하기
                  </Button>
                </>
              )}
              <ToastContainer />
            </div>
          </>
        ) : status === "BEFORE" ? (
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            style={{ width: "100%", height: "100%" }}
            src={LiveBeforeImg}
          />
        ) : (
          <>
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
              src={LiveBeforeImg}
            />
            <span>종료된 방송이에요.</span>
          </>
        )}
      </div>
    </>
  );
};
export default AuctionDetail;
