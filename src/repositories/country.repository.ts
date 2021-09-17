import { CountryService } from '../services/foodhygieneratings/country.service'
import { ICountryDetailGetResponse } from '../types/responses/foodhygienerating/country/countrydetail.response'
import { ICountryDetailBasicGetResponse } from '../types/responses/foodhygienerating/country/countrydetailbasic.response'
import { ICountryDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/country/countrydetailbasicpagination.response'
import { ICountryDetailByIdGetResponse } from '../types/responses/foodhygienerating/country/countrydetailbyid.response'
import { ICountryDetailPaginationGetResponse } from '../types/responses/foodhygienerating/country/countrydetailpagination.response'

export class CountryRepository {
  constructor() {}

  async getCountryDetailPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<ICountryDetailPaginationGetResponse> {
    const response = await new CountryService().getCountryDetailPagination(
      pageNumber,
      pageSize
    )
    const decodedResponse: ICountryDetailPaginationGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getCountryDetailBasicPagination(
    pageNumber: string,
    pageSize: string
  ): Promise<ICountryDetailBasicPaginationGetResponse> {
    const response = await new CountryService().getCountryDetailBasicPagination(
      pageNumber,
      pageSize
    )
    const decodedResponse: ICountryDetailBasicPaginationGetResponse =
      JSON.parse(JSON.stringify(response.data))
    return decodedResponse
  }

  async getCountryDetailBasic() {
    const response = await new CountryService().getCountryDetailBasic()
    const decodedResponse: ICountryDetailBasicGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getCountryDetail() {
    const response = await new CountryService().getCountryDetail()
    const decodedResponse: ICountryDetailGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }

  async getCountryDetailById(id: number) {
    const response = await new CountryService().getCountryDetailById(id)
    const decodedResponse: ICountryDetailByIdGetResponse = JSON.parse(
      JSON.stringify(response.data)
    )
    return decodedResponse
  }
}
