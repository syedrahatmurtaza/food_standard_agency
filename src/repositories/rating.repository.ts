import { RatingService } from '../services/foodhygieneratings/rating.service'
import { IRatingGetResponse } from '../types/responses/foodhygienerating/rating/rating.response'

export class RatingRepository {
  constructor() {}

  async getRating(): Promise<IRatingGetResponse> {
    const response = await new RatingService().getRating()

    return <IRatingGetResponse>response.data
  }
}
