import { Controller, Get, Query, Route, Tags } from '@tsoa/runtime'
import { ScoreDescriptorRepository } from '../repositories/scoredescriptor.repository'
import { IScoreDescriptorGetResponse } from '../types/responses/foodhygienerating/scoredescriptors/scoredescriptors.response'

@Route('v1/scoredescriptors')
export class ScoreDescriptorController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all scoreDescriptor, results are unbound
   * @param establishmentId No documentation available.
   * @returns IScoreDescriptorGetResponse
   */
  @Get('/')
  @Tags('ScoreDescriptors')
  async getScoreDescriptor(
    @Query() establishmentId: number
  ): Promise<IScoreDescriptorGetResponse> {
    let params: { [k: string]: any } = {}
    establishmentId == undefined
      ? undefined
      : (params.establishmentId = establishmentId)
    const response: IScoreDescriptorGetResponse =
      await new ScoreDescriptorRepository().getScoreDescriptor(params)
    return response
  }
}
