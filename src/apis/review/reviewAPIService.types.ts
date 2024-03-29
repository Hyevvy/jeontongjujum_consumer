import { Page } from "@/constants/PageResponseType";

interface ApiResponse<T> {
  code: number;
  message: string;
  detail?: string;
  data: T;
  failure?: string;
}

export interface AddReviewParams {
  productId: string;
  productOrderId: number;
  reviewContents: string;
  reviewPhotoImageUrl: string;
  concept: string[];
}

export interface Review extends GetMyReviewListResponseData {
  name: string;
  profileImageUrl: string;
  reviewContents: string;
  concept: ["TRIP"];
  reviewSympathyCount: number;
  createdAt: string;
  isSympathy: boolean;
}

export type GetMyReviewListResponseData = {
  reviewId: number;
  productId: string;
  productThumbnailImage: string;
  reviewContents: string;
  reviewPhotoImageUrl?: string;
  createdAt?: string;
};

export type AddReviewResponse = ApiResponse<string>;

export type GetReviewListByProductIdResponseData = {
  representativeReview: ["TRIP", "PARTY"];
  histories: Page<Review[]>;
};
export type GetReviewListByProductIdResponse =
  ApiResponse<GetReviewListByProductIdResponseData>;
export type LikeReviewResponse = ApiResponse<string>;

export type GetMyReviewListResponse = ApiResponse<
  Page<GetMyReviewListResponseData[]>
>;
