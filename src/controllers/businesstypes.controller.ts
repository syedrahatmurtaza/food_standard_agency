import { Controller, Get, Path, Route, Tags } from '@tsoa/runtime'
import { AuthorityRepository } from '../repositories/authority.repository'
import { BusinessTypesRepository } from '../repositories/businesstypes.repository'
import { IAuthorityDetailGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetail.response'
import { IAuthorityDetailBasicGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbasic.response'
import { IAuthorityDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbasicpagination.response'
import { IAuthorityDetailByIDGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbyid.response'
import { IAuthorityDetailPaginationGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailpagination.response'
import { IBusinessTypesDetailGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetail.response'
import { IBusinessTypesDetailBasicGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetailbasic.response'
import { IBusinessTypesDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetailbasicpagination.response'
import { IBusinessTypesDetailByIdGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetailbyid.response'
import { IBusinessTypesDetailPaginationGetResponse } from '../types/responses/foodhygienerating/businesstypes/businesstypesdetailpagination.response'

@Route('v1/businesstypes')
export class BusinessTypesController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all business types, page parameters allow for page number and size specification.
   * @param pageNumber Must be Greater Than <b>0</b>
   * @param pageSize Must be Greater Than <b>0</b>
   * @returns IBusinessTypesDetailPaginationGetResponse
   */
  @Get('/{pageNumber}/{pageSize}')
  @Tags('BusinessTypes')
  async getBusinessTypesDetailPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<IBusinessTypesDetailPaginationGetResponse> {
    const response: IBusinessTypesDetailPaginationGetResponse =
      await new BusinessTypesRepository().getBusinessTypesDetailPagination(
        pageNumber,
        pageSize
      )

    return response
  }

  /**
   * @summary Returns a basic list of business types, details can be retrieved by calling countries/{id}, page parameters allow for page number and size specification.
   * @param pageNumber Must be greater than <b>0</b>
   * @param pageSize Must be greater than <b>0</b>
   * @returns IBusinessTypesDetailBasicPaginationGetResponse
   */
  @Tags('BusinessTypes')
  @Get('/basic/{pageNumber}/{pageSize}')
  async getBusinessTypesDetailBasicPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<IBusinessTypesDetailBasicPaginationGetResponse> {
    const response: IBusinessTypesDetailBasicPaginationGetResponse =
      await new BusinessTypesRepository().getBusinessTypesDetailBasicPagination(
        pageNumber,
        pageSize
      )

    return response
  }

  /**
   * @summary Returns a basic list of business types, results are unbound.
   * @returns IBusinessTypesDetailBasicGetResponse
   */
  @Tags('BusinessTypes')
  @Get('/basic')
  async getBusinessTypesDetailBasic(): Promise<IBusinessTypesDetailBasicGetResponse> {
    const response: IBusinessTypesDetailBasicGetResponse =
      await new BusinessTypesRepository().getBusinessTypesDetailBasic()

    return response
  }

  /**
   * @summary Returns details of all business types, results are unbound.
   * @returns IBusinessTypesDetailGetResponse
   */
  @Tags('BusinessTypes')
  @Get('/')
  async getBusinessTypesDetail(): Promise<IBusinessTypesDetailGetResponse> {
    const response: IBusinessTypesDetailGetResponse =
      await new BusinessTypesRepository().getBusinessTypesDetail()

    return response
  }

  /**
   * @summary Returns details of a single business type, selected by Id.
   * @returns IBusinessTypesDetailByIdGetResponse
   */
  @Tags('BusinessTypes')
  @Get('/{id}')
  async getBusinessTypesDetailById(
    @Path() id: number
  ): Promise<IBusinessTypesDetailByIdGetResponse> {
    const response: IBusinessTypesDetailByIdGetResponse =
      await new BusinessTypesRepository().getBusinessTypesDetailById(id)

    return response
  }
}
