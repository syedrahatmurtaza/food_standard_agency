import {
  Controller,
  Example,
  Get,
  Path,
  Post,
  Route,
  Tags,
} from '@tsoa/runtime'
import { RegionRepository } from '../repositories/region.repository'
import { IRegionDetailGetResponse } from '../types/responses/foodhygienerating/region/regiondetail.response'
import { IRegionDetailBasicGetResponse } from '../types/responses/foodhygienerating/region/regiondetailbasic.response'
import { IRegionDetailBasicPaginationGetResponse } from '../types/responses/foodhygienerating/region/regiondetailbasicpagination.response'
import { IRegionDetailByIdGetResponse } from '../types/responses/foodhygienerating/region/regiondetailid.response'
import { IRegionDetailPaginationGetResponse } from '../types/responses/foodhygienerating/region/regiondetailpagination.response'

@Route('v1/regions')
export class RegionController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns details of all regions, page parameters allow for page number and size specification.
   * @param pageNumber Must be greater than <b>0</b>
   * @param pageSize Must be greater than <b>0</b>
   * @returns IRegionDetailPaginationGetResponse
   */
  @Tags('Regions')
  @Get('/{pageNumber}/{pageSize}')
  async getRegionDetailPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<IRegionDetailPaginationGetResponse> {
    const response: IRegionDetailPaginationGetResponse =
      await new RegionRepository().getRegionDetailPagination(
        pageNumber,
        pageSize
      )

    return response
  }

  /**
   * @summary Returns a basic list of regions, details can be retrieved by calling regions{id}, page parameters allow for page number and size specification.
   * @param pageNumber Must be greater than <b>0</b>
   * @param pageSize Must be greater than <b>0</b>
   * @returns IRegionDetailBasicPaginationGetResponse
   */
  @Tags('Regions')
  @Get('/basic/{pageNumber}/{pageSize}')
  async getRegionDetailBasicPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<IRegionDetailBasicPaginationGetResponse> {
    const response: IRegionDetailBasicPaginationGetResponse =
      await new RegionRepository().getRegionDetailBasicPagination(
        pageNumber,
        pageSize
      )

    return response
  }

  /**
   * @summary Returns a basic list of regions, details can be retrieved by calling regions{id}.
   * @returns IRegionDetailBasicGetResponse
   */
  @Tags('Regions')
  @Get('/basic')
  async getRegionDetailBasic(): Promise<IRegionDetailBasicGetResponse> {
    const response: IRegionDetailBasicPaginationGetResponse =
      await new RegionRepository().getRegionDetailBasic()

    return response
  }

  /**
   * @summary Returns details of all regions, results are unbound.
   * @returns IRegionDetailGetResponse
   */
  @Tags('Regions')
  @Get('/')
  async getRegionDetail(): Promise<IRegionDetailGetResponse> {
    const response: IRegionDetailGetResponse =
      await new RegionRepository().getRegionDetail()

    return response
  }

  /**
   * @summary Returns details of a single region, selected by Id.
   * @returns IRegionDetailByIdGetResponse
   */
  @Tags('Regions')
  @Get('/{id}')
  async getRegionDetailById(
    @Path() id: number
  ): Promise<IRegionDetailByIdGetResponse> {
    const response: IRegionDetailByIdGetResponse =
      await new RegionRepository().getRegionDetailById(id)

    return response
  }
}
