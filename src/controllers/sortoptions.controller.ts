import { Controller, Get, Route, Tags } from '@tsoa/runtime'
import { SortOptionsRepository } from '../repositories/sortoptions.repository'
import { ISortOptionsGetResponse } from '../types/responses/foodhygienerating/sortoptions/sortoptions.response'

@Route('v1/sortoptions')
export class SortOptionsController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all SortOptions, results are unbound.
   * @returns ISortOptionsGetResponse
   */
  @Get('/')
  @Tags('SortOptions')
  async getSchemeTypes(): Promise<ISortOptionsGetResponse> {
    const response: ISortOptionsGetResponse =
      await new SortOptionsRepository().getSortOptions()

    return response
  }
}
