import { SchemeTypesService } from '../services/foodhygieneratings/schemetype.service'
import { ISchemeTypesGetResponse } from '../types/responses/foodhygienerating/schematypes/schemetypes.response'

export class SchemeTypesRepository {
  constructor() {}

  async getSchemeTypes(): Promise<ISchemeTypesGetResponse> {
    const response = await new SchemeTypesService().getSchemeTypes()

    return <ISchemeTypesGetResponse>response.data
  }
}
