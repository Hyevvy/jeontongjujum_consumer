import { Page } from "@/constants/PageResponseType";

interface ApiResponse<T> {
  code: number;
  message: string;
  detail?: string;
  data: T;
  failure?: string;
}

export type Short = {
  shortsId: number;
  shortsTitle: string;
  shortsDescription: string;
  shortsVideoUrl: string;
  shortsPreviewUrl?: string;
  shortsThumbnailImageUrl: string;
  shortsHits: number;
  targetId: string;
};

export type GetCategoriesResponseData = Category[];

type Category = { value: string; label: string };

export type GetShortDetailResponse = ApiResponse<Short>;
export type GetShortsListResponse = ApiResponse<Page<Short[]>>;
export type GetCategoriesResponse = ApiResponse<GetCategoriesResponseData>;
