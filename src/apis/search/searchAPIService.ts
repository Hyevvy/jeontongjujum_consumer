import { SORT } from "@/constants/SortEnum";
import { authAxiosInstance, unAuthAxiosInstance } from "../common";
import {
  GetCropProductsResponse,
  GetAllProductsBySellerIdResponse,
  GetPopularProductsBySellerIdResponse,
  GetProductDetailByProductIdResponse,
  GetCostProductsResponse,
  GetAllProductsResponse,
  GetBestReviewProducts,
  GetAutoCompleteForSearchResponse,
  GetHolidayProductsResponse,
  GetAllProductListForCategoryIdResponse,
  GetSoPTDataResponse,
} from "./searchAPIService.types";
import { SNACK } from "@/constants/SnackTypeEnum";
import { CONCEPT } from "@/constants/ConceptEnum";
import { RAW_MATERIAL } from "@/constants/MaterialEnum";

const searchAPI = {
  getProductDetailByProductId: async (productId: string) => {
    const { data } =
      await authAxiosInstance.get<GetProductDetailByProductIdResponse>(
        `/search-service/api/products/${productId}`
      );
    return data;
  },
  getPopularProductsBySellerId: async (
    sellerId: number,
    sort: "totalSalesCount,desc" | "reviewCount,desc" | "stockQuantity,asc"
  ) => {
    const { data } =
      await authAxiosInstance.get<GetPopularProductsBySellerIdResponse>(
        `/search-service/api/sellers/${sellerId}/products?sort=${sort}&size=5`
      );

    return data;
  },
  getCropProducts: async () => {
    const { data } = await authAxiosInstance.get<GetCropProductsResponse>(
      `/search-service/api/products/cereal-crops?sort=totalSalesCount,desc&size=10`
    );
    return data;
  },
  getHolidayProducts: async () => {
    const { data } = await authAxiosInstance.get<GetHolidayProductsResponse>(
      `/search-service/api/products/holiday`
    );
    return data;
  },
  getCostProducts: async () => {
    const { data } = await authAxiosInstance.get<GetCostProductsResponse>(
      `/search-service/api/products?sort=capacityToPriceRatio,asc&size=8`
    );
    return data;
  },
  getProductsBySort: async (sort: keyof typeof SORT) => {
    const { data } = await authAxiosInstance.get<GetBestReviewProducts>(
      `/search-service/api/products?sort=${sort}&size=5`
    );
    return data;
  },
  getAllProductsBySellerId: async (
    sellerId: number,
    sort: keyof typeof SORT,
    size: number,
    page: number
  ) => {
    const { data } =
      await authAxiosInstance.get<GetAllProductsBySellerIdResponse>(
        `/search-service/api/sellers/${sellerId}/products/all?sort=${sort}&size=${size}&page=${page}`
      );
    return data.data;
  },
  getAllProducts: async (
    page: number,
    sort: keyof typeof SORT,
    size: number,
    rawMaterial?: (keyof typeof RAW_MATERIAL)[],
    food?: (keyof typeof SNACK)[],
    minPrice?: number,
    maxPrice?: number,
    minAlcoholDegree?: number,
    maxAlcoholDegree?: number,
    concept?: (keyof typeof CONCEPT)[]
  ) => {
    const { data } = await authAxiosInstance.get<GetAllProductsResponse>(
      `/search-service/api/products/all?page=${page}&sort=${sort}&size=${size}&rawMaterial=${rawMaterial}&food=${food}&minPrice=${minPrice}&maxPrice=${maxPrice}&minAlcoholDegree=${minAlcoholDegree}&maxAlcoholDegree=${maxAlcoholDegree}&concept=${concept}`
    );
    return data.data;
  },
  getAllProductsBySearch: async (
    search: string,
    page: number,
    sort: keyof typeof SORT,
    size: number,
    rawMaterial?: (keyof typeof RAW_MATERIAL)[],
    food?: (keyof typeof SNACK)[],
    minPrice?: number,
    maxPrice?: number,
    minAlcoholDegree?: number,
    maxAlcoholDegree?: number,
    concept?: (keyof typeof CONCEPT)[]
  ) => {
    const { data } = await authAxiosInstance.get<GetAllProductsResponse>(
      `/search-service/api/products/search?query=${encodeURI(
        search
      )}&page=${page}&sort=${sort}&size=${size}&rawMaterial=${rawMaterial}&food=${food}&minPrice=${minPrice}&maxPrice=${maxPrice}&minAlcoholDegree=${minAlcoholDegree}&maxAlcoholDegree=${maxAlcoholDegree}&concept=${concept}`
    );
    return data.data;
  },
  getAutoCompleteForSearch: async (keyword: string) => {
    const { data } =
      await authAxiosInstance.get<GetAutoCompleteForSearchResponse>(
        `/search-service/api/products/search/auto?query=${keyword}`
      );
    return data;
  },
  getAllProductListForCategoryId: async (
    categoryId: number,
    page: number,
    sort: keyof typeof SORT,
    size: number,
    rawMaterial?: (keyof typeof RAW_MATERIAL)[],
    food?: (keyof typeof SNACK)[],
    minPrice?: number,
    maxPrice?: number,
    minAlcoholDegree?: number,
    maxAlcoholDegree?: number,
    concept?: (keyof typeof CONCEPT)[]
  ) => {
    const { data } =
      await authAxiosInstance.get<GetAllProductListForCategoryIdResponse>(
        `/search-service/api/products/categories?id=${categoryId}&page=${page}&sort=${sort}&size=${size}&rawMaterial=${rawMaterial}&food=${food}&minPrice=${minPrice}&maxPrice=${maxPrice}&concept=${concept}&minAlcoholDegree=${minAlcoholDegree}&maxAlcoholDegree=${maxAlcoholDegree}`
      );
    return data.data;
  },
  getSoPTData: async (question: string) => {
    const { data } = await unAuthAxiosInstance.get<GetSoPTDataResponse>(
      `search-service/api/products/recommend?query=${question}`
    );
    return data;
  },
};
export default searchAPI;
