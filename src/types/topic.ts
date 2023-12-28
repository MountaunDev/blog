import { ITopicsFields } from "../../@types/generated/contentful";

// This is adding the id field to the ITopicsFields
export type EnhancedTopicsFields = ITopicsFields & {
  id: string;
};

export interface FetchAllTopicsResponse {
  total: number;
  items: EnhancedTopicsFields[];
}
