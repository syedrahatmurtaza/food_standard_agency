import { ScoreDescriptorService } from '../services/foodhygieneratings/scoredescriptor.service'
import { IScoreDescriptorGetResponse } from '../types/responses/foodhygienerating/scoredescriptors/scoredescriptors.response'

export class ScoreDescriptorRepository {
  constructor() {}

  async getScoreDescriptor(params: any): Promise<IScoreDescriptorGetResponse> {
    const response = await new ScoreDescriptorService().getSortOptions(params)
    return <IScoreDescriptorGetResponse>response.data
  }
}
