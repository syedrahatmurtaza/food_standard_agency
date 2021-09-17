import { Controller, Get, Route, Tags } from '@tsoa/runtime'
import { RatingOperatorRepository } from '../repositories/ratingoperator.repository'
import { IRatingOperatorGetResponse } from '../types/responses/foodhygienerating/ratingoperator/ratingoperator.response'

@Route('/v1/ratingoperators')
export class RatingOperatorController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all RatingOperators, results are unbound.
   * @returns  IRatingOperatorGetResponse
   */
  @Get('/')
  @Tags('RatingOperators')
  async getRatingOperators(): Promise<IRatingOperatorGetResponse> {
    const response: IRatingOperatorGetResponse =
      await new RatingOperatorRepository().getRatingOperator()
    return response
  }
}
