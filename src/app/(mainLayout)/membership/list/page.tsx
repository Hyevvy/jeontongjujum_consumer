"use client";
import loadingImg from "/public/loading.gif";
import Image from "next/image";
import consumerAPI from "@/apis/consumer/consumerAPIService";
import style from "@/app/(mainLayout)/membership/list/membershiplist.module.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetMyMembershipResponseData } from "@/apis/consumer/consumerAPIservice.types";
import PaidMemberShipBox from "../../_component/PaidMemberShipBox/PaidMemberShipBox";
import { useMyInfoStore } from "@/app/store/myInfo/myInfo";
import { useRouter } from "next/navigation";

export default function MemberShipList() {
  const router = useRouter();
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);
  const [memberships, setMemberships] =
    useState<GetMyMembershipResponseData[]>();
  const [mounted, setMounted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLogin] = useMyInfoStore((state) => [state.isLogin]);

  useEffect(() => {
    if (!isLogin) {
      toast("로그인한 유저만 접근할 수 있어요.");
      router.push("/init/signin");
    }
    setMounted(true);
  }, []);

  const getMyMembership = async () => {
    try {
      setIsLoading(true);
      const data = await consumerAPI.getMyMembershipList(page, size);
      setMemberships((prev) => data.data.content);
    } catch (err) {
      toast("멤버십 결제 내역을 불러오는데 실패했어요.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMyMembership();
    console.log("credit", memberships);
  }, [page, size]);

  return (
    <>
      {mounted && !isLoading ? (
        <div className={style.creditList}>
          <div className={style.creditHeader}>
            <div className={style.creditTitle}>양반 회원 결제 내역</div>
          </div>
          <div className={style.credits}>
            {memberships?.map((membership) => (
              <PaidMemberShipBox
                params={membership}
                key={membership.subscriptionId}
              />
            ))}
          </div>
        </div>
      ) : (
        <Image
          src={loadingImg}
          width={0}
          height={0}
          alt="loading"
          style={{ cursor: "pointer", width: "50%", height: "50%" }}
        />
      )}
    </>
  );
}
