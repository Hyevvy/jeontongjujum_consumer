import style from "@/app/(mainLayout)/seller/[sellerId]/seller.module.css";
import ProductContainer from "../ProductContainer/ProductContainer";
import { GetPopularProductsBySellerIdResponseData } from "@/apis/search/searchAPIService.types";
export default function PopularProducts({
  popularProducts,
  popularReviewProducts,
  refetchPopularReviewProducts,
  refetchPopularProducts,
}: {
  popularProducts: GetPopularProductsBySellerIdResponseData[];
  popularReviewProducts: GetPopularProductsBySellerIdResponseData[];
  refetchPopularReviewProducts: () => void;
  refetchPopularProducts: () => void;
}) {
  return (
    <div>
      <h2>다들 구매하고 있어요! 인기 상품</h2>
      <div className={style.products}>
        {popularProducts &&
          popularProducts.map(
            (product: GetPopularProductsBySellerIdResponseData) => (
              <ProductContainer
                productName={product.productName}
                productId={product.productId}
                productImg={product.productThumbnailImageUrl}
                price={product.productPrice}
                capacityToPriceRatio={product.capacityToPriceRatio}
                key={product.productId}
                isLikes={product.isLikes}
                refetch={refetchPopularProducts}
              />
            )
          )}
        {popularProducts.length === 0 && <div>아직 인기 상품이 없어요</div>}
      </div>
      <h2>구매 후기가 팡팡! 리뷰 인기 상품</h2>
      <div className={style.products}>
        {popularReviewProducts &&
          popularReviewProducts?.map(
            (product: GetPopularProductsBySellerIdResponseData) => (
              <ProductContainer
                productName={product.productName}
                productId={product.productId}
                productImg={product.productThumbnailImageUrl}
                price={product.productPrice}
                capacityToPriceRatio={product.capacityToPriceRatio}
                key={product.productId}
                isLikes={product.isLikes}
                refetch={refetchPopularReviewProducts}
              />
            )
          )}
        {popularReviewProducts.length === 0 && (
          <div>아직 리뷰 인기 상품이 없어요</div>
        )}
      </div>
    </div>
  );
}
