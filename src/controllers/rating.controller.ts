import { Controller, Get, Route, Tags } from '@tsoa/runtime'
import { RatingRepository } from '../repositories/rating.repository'
import { IRatingGetResponse } from '../types/responses/foodhygienerating/rating/rating.response'

@Route('/v1/ratings')
export class RatingController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all ratings, results are unbound.
   * @returns IRatingGetResponse
   */
  @Get('/')
  @Tags('Ratings')
  async getRating(): Promise<IRatingGetResponse> {
    const response: IRatingGetResponse =
      await new RatingRepository().getRating()

    return response
  }
}
