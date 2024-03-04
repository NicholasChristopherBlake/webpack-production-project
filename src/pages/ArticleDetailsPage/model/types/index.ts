import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationsSchema";

// Sub-schema for grouping reducers
export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema
}
