import { Controller, Get, Route, Tags } from '@tsoa/runtime'
import { SchemeTypesRepository } from '../repositories/schemetypes.repository'
import { ISchemeTypesGetResponse } from '../types/responses/foodhygienerating/schematypes/schemetypes.response'

@Route('v1/schemetypes')
export class SchemeTypesController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all SchemeTypes, results are unbound.
   * @returns ISchemeTypesGetResponse
   */
  @Get('/')
  @Tags('SchemeTypes')
  async getSchemeTypes(): Promise<ISchemeTypesGetResponse> {
    const response: ISchemeTypesGetResponse =
      await new SchemeTypesRepository().getSchemeTypes()

    return response
  }
}
