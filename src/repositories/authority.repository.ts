import { AuthorityService } from '../services/foodhygieneratings/authority.service'
import { IAuthorityDetailGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetail.response'
import { IAuthorityDetailBasicGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbasic.response'
import { IAuthorityDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbasicpagination.response'
import { IAuthorityDetailByIDGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbyid.response'
import { IAuthorityDetailPaginationGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailpagination.response'

export class AuthorityRepository {
  constructor() {}

  async getAuthorityDetailPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<IAuthorityDetailPaginationGetResponse> {
    const response = await new AuthorityService().getAuthorityDetailPagination(
      pageNumber,
      pageSize
    )
    const decodedResponse: IAuthorityDetailPaginationGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getAuthorityDetailBasicPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<IAuthorityDetailBasicPaginationGetResponse> {
    const response =
      await new AuthorityService().getAuthorityDetailBasicPagination(
        pageNumber,
        pageSize
      )
    const decodedResponse: IAuthorityDetailBasicPaginationGetResponse =
      JSON.parse(JSON.stringify(response.data))
    return decodedResponse
  }

  async getAuthorityDetailBasic() {
    const response = await new AuthorityService().getAuthorityDetailBasic()
    const decodedResponse: IAuthorityDetailBasicGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getAuthorityDetail() {
    const response = await new AuthorityService().getAuthorityDetail()
    const decodedResponse: IAuthorityDetailGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getAuthorityDetailById(id: number) {
    const response = await new AuthorityService().getAuthorityDetailById(id)
    const decodedResponse: IAuthorityDetailByIDGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }
}
