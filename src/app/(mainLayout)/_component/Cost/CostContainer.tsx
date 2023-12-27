"use client";
import { ProductData } from "@/apis/search/searchAPIService.types";
import loadingImg from "/public/loading.gif";
import Image from "next/image";
import style from "@/app/(mainLayout)/_component/Crop/CropContainer.module.css";
import ProductContainer from "../ProductContainer/ProductContainer";
import { useQuery } from "@tanstack/react-query";
import searchAPI from "@/apis/search/searchAPIService";
import { useEffect, useState } from "react";

export default function CostContainer() {
  const { data, isLoading } = useQuery({
    queryKey: ["event", "cost"],
    queryFn: () => searchAPI.getCostProducts(),
  });
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log("!!! cost data", data);
  return (
    <div className={style.cropContainer}>
      <div className={style.banner}>가성비 전통주 모아보기</div>
      {mounted && !isLoading ? (
        <div className={style.costBody}>
          {data?.data.map((crop: ProductData) => (
            <ProductContainer
              key={crop.productId}
              isLiked={crop.isLikes}
              productId={crop.productId}
              productImg={crop.productThumbnailImageUrl}
              sellerName={crop.storeName}
              sellerProfileImg={crop.storeImageUrl}
              price={crop.productPrice}
              capacityToPriceRatio={crop.capacityToPriceRatio}
              productName={crop.productName}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
