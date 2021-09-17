import { Controller, Get, Path, Route, Tags } from '@tsoa/runtime'
import { CountryRepository } from '../repositories/country.repository'
import { ICountryDetailGetResponse } from '../types/responses/foodhygienerating/country/countrydetail.response'
import { ICountryDetailBasicGetResponse } from '../types/responses/foodhygienerating/country/countrydetailbasic.response'
import { ICountryDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/country/countrydetailbasicpagination.response'
import { ICountryDetailByIdGetResponse } from '../types/responses/foodhygienerating/country/countrydetailbyid.response'
import { ICountryDetailPaginationGetResponse } from '../types/responses/foodhygienerating/country/countrydetailpagination.response'

@Route('v1/countries')
export class CountryController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all countries, page parameters allow for page number and size specification.
   * @param pageNumber Must be greater than <b>0</b>
   * @param pageSize Must be greater than <b>0</b>
   * @returns ICountryDetailPaginationGetResponse
   */
  @Get('/{pageNumber}/{pageSize}')
  @Tags('Countries')
  async getCountryDetailPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<ICountryDetailPaginationGetResponse> {
    const response: ICountryDetailPaginationGetResponse =
      await new CountryRepository().getCountryDetailPagination(
        pageNumber,
        pageSize
      )
    return response
  }

  /**
   * @summary Returns a basic list of countries, details can be retrieved by calling countries/{id}, page parameters allow for page number and size specification.
   * @param pageNumber Must be greater than <b>0</b>
   * @param pageSize Must be greater than <b>0</b>
   * @returns ICountryDetailBasicPaginationGetResponse
   */
  @Get('/basic/{pageNumber}/{pageSize}')
  @Tags('Countries')
  async getCountryDetailBasicPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<ICountryDetailBasicPaginationGetResponse> {
    const response: ICountryDetailBasicPaginationGetResponse =
      await new CountryRepository().getCountryDetailBasicPagination(
        pageNumber,
        pageSize
      )
    return response
  }

  /**
   * @summary Returns a basic list of countries, results are unbound.
   * @returns ICountryDetailBasicGetResponse
   */
  @Get('/basic')
  @Tags('Countries')
  async getCountryDetailBasic(): Promise<ICountryDetailBasicGetResponse> {
    const response: ICountryDetailBasicGetResponse =
      await new CountryRepository().getCountryDetailBasic()
    return response
  }

  /**
   * @summary Returns details of all countries, results are unbound.
   * @returns ICountryDetailGetResponse
   */
  @Get('/')
  @Tags('Countries')
  async getCountryDetail(): Promise<ICountryDetailGetResponse> {
    const response: ICountryDetailGetResponse =
      await new CountryRepository().getCountryDetail()
    return response
  }

  /**
   * @summary Returns details of a single country, selected by Id.
   * @param id Must be greater than <b>0</b>
   * @returns ICountryDetailByIdGetResponse
   */
  @Get('/{id}')
  @Tags('Countries')
  async getCountryDetailById(
    @Path() id: number
  ): Promise<ICountryDetailByIdGetResponse> {
    const response: ICountryDetailByIdGetResponse =
      await new CountryRepository().getCountryDetailById(id)
    return response
  }
}
