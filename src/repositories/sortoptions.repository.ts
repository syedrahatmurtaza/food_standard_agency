import { SortOptionsService } from '../services/foodhygieneratings/sortoptions.service'
import { ISortOptionsGetResponse } from '../types/responses/foodhygienerating/sortoptions/sortoptions.response'

export class SortOptionsRepository {
  constructor() {}

  async getSortOptions(): Promise<ISortOptionsGetResponse> {
    const response = await new SortOptionsService().getSortOptions()
    return <ISortOptionsGetResponse>response.data
  }
}
