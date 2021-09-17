import { RegionService } from '../services/foodhygieneratings/region.service'
import { IRegionDetailGetResponse } from '../types/responses/foodhygienerating/region/regiondetail.response'
import { IRegionDetailBasicGetResponse } from '../types/responses/foodhygienerating/region/regiondetailbasic.response'
import { IRegionDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/region/regiondetailbasicpagination.response'
import { IRegionDetailByIdGetResponse } from '../types/responses/foodhygienerating/region/regiondetailid.response'
import { IRegionDetailPaginationGetResponse } from '../types/responses/foodhygienerating/region/regiondetailpagination.response'

export class RegionRepository {
  constructor() {}

  async getRegionDetailPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<IRegionDetailPaginationGetResponse> {
    const response = await new RegionService().getRegionDetailPagination(
      pageNumber,
      pageSize
    )
    const decodedResponse: IRegionDetailPaginationGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getRegionDetailBasicPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<IRegionDetailBasicPaginationGetResponse> {
    const response = await new RegionService().getRegionDetailBasicPagination(
      pageNumber,
      pageSize
    )
    const decodedResponse: IRegionDetailBasicPaginationGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getRegionDetailBasic() {
    const response = await new RegionService().getRegionDetailBasic()
    const decodedResponse: IRegionDetailBasicGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getRegionDetail() {
    const response = await new RegionService().getRegionDetail()
    const decodedResponse: IRegionDetailGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getRegionDetailById(id: number) {
    const response = await new RegionService().getRegionDetailById(id)
    const decodedResponse: IRegionDetailByIdGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }
}
