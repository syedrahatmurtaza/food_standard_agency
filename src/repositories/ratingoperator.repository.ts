import { RatingOperatorService } from '../services/foodhygieneratings/ratingoperator.service'
import { IRatingOperatorGetResponse } from '../types/responses/foodhygienerating/ratingoperator/ratingoperator.response'

export class RatingOperatorRepository {
  constructor() {}

  async getRatingOperator(): Promise<IRatingOperatorGetResponse> {
    const response = await new RatingOperatorService().getRatingOperator()

    return <IRatingOperatorGetResponse>response.data
  }
}
