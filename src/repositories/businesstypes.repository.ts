import { BusinessTypesService } from '../services/foodhygieneratings/businesstypes.service'
import { IBusinessTypesDetailGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetail.response'
import { IBusinessTypesDetailBasicGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetailbasic.response'
import { IBusinessTypesDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetailbasicpagination.response'
import { IBusinessTypesDetailByIdGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetailbyid.response'
import { IBusinessTypesDetailPaginationGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetailpagination.response'

export class BusinessTypesRepository {
  constructor() {}

  async getBusinessTypesDetailPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<IBusinessTypesDetailPaginationGetResponse> {
    const response =
      await new BusinessTypesService().getBusinessTypesDetailPagination(
        pageNumber,
        pageSize
      )
    const decodedResponse: IBusinessTypesDetailPaginationGetResponse =
      JSON.parse(JSON.stringify(response.data))
    return decodedResponse
  }

  async getBusinessTypesDetailBasicPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<IBusinessTypesDetailBasicPaginationGetResponse> {
    const response =
      await new BusinessTypesService().getBusinessTypesDetailBasicPagination(
        pageNumber,
        pageSize
      )
    const decodedResponse: IBusinessTypesDetailBasicPaginationGetResponse =
      JSON.parse(JSON.stringify(response.data))
    return decodedResponse
  }

  async getBusinessTypesDetailBasic() {
    const response =
      await new BusinessTypesService().getBusinessTypesDetailBasic()
    const decodedResponse: IBusinessTypesDetailBasicGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getBusinessTypesDetail() {
    const response = await new BusinessTypesService().getBusinessTypesDetail()
    const decodedResponse: IBusinessTypesDetailGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getBusinessTypesDetailById(id: number) {
    const response =
      await new BusinessTypesService().getBusinessTypesDetailById(id)
    const decodedResponse: IBusinessTypesDetailByIdGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }
}
