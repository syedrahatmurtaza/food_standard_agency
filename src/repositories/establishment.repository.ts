import { EstablishmentService } from '../services/foodhygieneratings/establishment.service'
import { IEstablishmentsDetailGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentdetail.response'
import { IEstablishmentsDetailBasicGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentdetailbasic.response'
import { IEstablishmentsByIdGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentdetailbyid.response'
import { IEstablishmentsDetailPaginationGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentdetailpagination.response'
import { IEstablishmentsListGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentlistdetail.response'

export class EstablishmentsRepository {
  constructor() {}

  async getEstablishmentsDetailPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<IEstablishmentsDetailPaginationGetResponse> {
    const response =
      await new EstablishmentService().getEstablishmentsDetailPagination(
        pageNumber,
        pageSize
      )
    const decodedResponse: IEstablishmentsDetailPaginationGetResponse =
      JSON.parse(JSON.stringify(response.data))
    return decodedResponse
  }

  async getEstablishmentsDetailBasic() {
    const response =
      await new EstablishmentService().getEstablishmentsDetailBasic()
    const decodedResponse: IEstablishmentsDetailBasicGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getEstablishmentsListDetail(id: number) {
    const response =
      await new EstablishmentService().getEstablishmentsListDetail(id)
    const decodedResponse: IEstablishmentsListGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getEstablishmentsDetailById(id: number) {
    const response =
      await new EstablishmentService().getEstablishmentsDetailById(id)
    const decodedResponse: IEstablishmentsByIdGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getEstablishmentsDetail(params: any) {
    const response = await new EstablishmentService().getEstablishmentsDetail(
      params
    )
    const decodedResponse: IEstablishmentsDetailGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }
}
