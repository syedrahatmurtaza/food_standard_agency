import { Body, Controller, Get, Path, Post, Route, Tags } from '@tsoa/runtime'
import { AuthorityRepository } from '../repositories/authority.repository'
import { IAuthorityDetailGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetail.response'
import { IAuthorityDetailBasicGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbasic.response'
import { IAuthorityDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbasicpagination.response'
import { IAuthorityDetailByIDGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailbyid.response'
import { IAuthorityDetailPaginationGetResponse } from '../types/responses/foodhygienerating/authority/authoritydetailpagination.response'

@Route('v1/authorities')
export class AuthorityController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all authorities, page parameters allow for page number and size specification.
   * @param pageNumber Must be Greater Than <b>0</b>
   * @param pageSize Must be Greater Than <b>0</b>
   * @returns IAuthorityDetailPaginationGetResponse
   */
  @Get('/{pageNumber}/{pageSize}')
  @Tags('Authorities')
  async getAuthorityDetailPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<IAuthorityDetailPaginationGetResponse> {
    const response: IAuthorityDetailPaginationGetResponse =
      await new AuthorityRepository().getAuthorityDetailPagination(
        pageNumber,
        pageSize
      )

    return response
  }

  /**
   * @summary Returns a basic list of authorities (id/name), details can be retrieved by calling authorities/{id}, page parameters allow for page number and size specification.
   * @param pageNumber Must be greater than <b>0</b>
   * @param pageSize Must be greater than <b>0</b>
   * @returns IAuthorityDetailBasicPaginationGetResponse
   */
  @Tags('Authorities')
  @Get('/basic/{pageNumber}/{pageSize}')
  async getRegionDetailBasicPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<IAuthorityDetailBasicPaginationGetResponse> {
    const response: IAuthorityDetailBasicPaginationGetResponse =
      await new AuthorityRepository().getAuthorityDetailBasicPagination(
        pageNumber,
        pageSize
      )

    return response
  }

  /**
   * @summary Returns a basic list of authorities (id/name), details can be retrieved by calling authorities/{id}, results are unbound.
   * @returns IAuthorityDetailBasicGetResponse
   */
  @Tags('Authorities')
  @Get('/basic')
  async getAuthorityDetailBasic(): Promise<IAuthorityDetailBasicGetResponse> {
    const response: IAuthorityDetailBasicGetResponse =
      await new AuthorityRepository().getAuthorityDetailBasic()

    return response
  }

  /**
   * @summary Returns details of all authorities, results are unbound.
   * @returns IAuthorityDetailGetResponse
   */
  @Tags('Authorities')
  @Get('/')
  async getAuthorityDetail(): Promise<IAuthorityDetailGetResponse> {
    const response: IAuthorityDetailGetResponse =
      await new AuthorityRepository().getAuthorityDetail()

    return response
  }

  /**
   * @summary Returns details of a single authority, selected by Id.
   * @returns IAuthorityDetailByIDGetResponse
   */
  @Tags('Authorities')
  @Get('/{id}')
  async getAuthorityDetailById(
    @Path() id: number
  ): Promise<IAuthorityDetailByIDGetResponse> {
    const response: IAuthorityDetailByIDGetResponse =
      await new AuthorityRepository().getAuthorityDetailById(id)

    return response
  }
}
