import { Page } from "@/constants/PageResponseType";
import { SNACK } from "@/constants/SnackTypeEnum";

interface ApiResponse<T> {
  code: number;
  message: string;
  detail?: string;
  data: T;
  failure?: string;
}

export type GetProductDetailByProductIdResponseData = {
  productId: string;
  productName: string;
  productDescription: string;
  productThumbnailImageUrl: string;
  productAlcoholDegree: number;
  productCapacity: number;
  breweryName: string;
  breweryZonecode: number;
  breweryAddress: string;
  breweryAddressDetails: string;
  manufacturer: string;
  productPrice: number;
  capacityToPriceRatio: number;
  registeredQuantity: number;
  productDetailsImageUrl: string;
  categoryId: number;
  sellerId: number;
  storeName: string;
  storeImageUrl: string;
  taste: {
    sour: number;
    sweet: number;
    scent: number;
    carbonation: number;
    body: number;
  };
  rawMaterial: ["RICE"];
  food: (keyof typeof SNACK)[];
  concept: ["TRIP"];
  isSoldOut: boolean;
  isLikes: boolean;
  isDeleted: boolean;
  isActivate: boolean;
};

export type GetPopularProductsBySellerIdResponseData = {
  productId: string;
  productName: string;
  productDescription: string;
  productThumbnailImageUrl: string;
  productPrice: number;
  capacityToPriceRatio: number;
  isLikes: boolean;
  isSoldOut: boolean;
  reviewCount?: number;
};

export interface ProductData extends GetPopularProductsBySellerIdResponseData {
  storeName: string;
  storeImageUrl: string;
}

export type GetCropProductsResponseData = {
  sweetPotato: ProductData[];
  potato: ProductData[];
  corn: ProductData[];
};

export type GetAutoCompleteForSearchResponseData = {
  productId: string;
  productName: string;
  productThumbnailImageUrl: string;
};

export type GetProductDetailByProductIdResponse =
  ApiResponse<GetProductDetailByProductIdResponseData>;

export type GetPopularProductsBySellerIdResponse = ApiResponse<
  GetPopularProductsBySellerIdResponseData[]
>;

export type GetCropProductsResponse = ApiResponse<GetCropProductsResponseData>;
export type GetCostProductsResponse = ApiResponse<ProductData[]>;
export type GetHolidayProductsResponse = ApiResponse<ProductData[]>;
export type GetAllProductsBySellerIdResponse = ApiResponse<
  Page<GetPopularProductsBySellerIdResponseData[]>
>;

export type GetAllProductsResponse = ApiResponse<Page<ProductData[]>>;
export type GetBestReviewProducts = ApiResponse<ProductData[]>;
export type GetAutoCompleteForSearchResponse = ApiResponse<
  GetAutoCompleteForSearchResponseData[]
>;
export type GetAllProductListForCategoryIdResponse = ApiResponse<
  Page<ProductData[]>
>;
export type GetSoPTDataResponse = ApiResponse<ProductData[]>;
