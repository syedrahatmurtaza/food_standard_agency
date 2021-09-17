import { Controller, Get, Path, Query, Route, Tags } from 'tsoa'
import {
  _RATING_FHIS_KEYS,
  _RATING_FHRS_KEYS,
  _RATING_OPERATOR_KEYS,
  _SCHEME_TYPE_KEYS,
  _SORT_OPTIONS_KEYS,
} from '../constants/string.constants'
import { EstablishmentsRepository } from '../repositories/establishment.repository'
import { IEstablishmentsDetailGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentdetail.response'
import { IEstablishmentsDetailBasicGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentdetailbasic.response'
import { IEstablishmentsByIdGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentdetailbyid.response'
import { IEstablishmentsDetailPaginationGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentdetailpagination.response'
import { IEstablishmentsListGetResponse } from '../types/responses/foodhygienerating/establishment/establishmentlistdetail.response'

@Route('v1/establishments')
export class EstablishmentController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns a basic list of establishments (id/name), details can be retrieved by calling establishments/{id}, page parameters allow for page number and size specification.
   * @param pageNumber Must be greater than <b>0</b>
   * @param pageSize Must be greater than <b>0</b>
   * @returns IEstablishmentsDetailPaginationGetResponse
   */
  @Get('/{pageNumber}/{pageSize}')
  @Tags('Establishments')
  async getEstablishmentsDetailPagination(
    @Path() pageNumber: string,
    @Path() pageSize: string
  ): Promise<IEstablishmentsDetailPaginationGetResponse> {
    const response =
      await new EstablishmentsRepository().getEstablishmentsDetailPagination(
        pageNumber,
        pageSize
      )
    return response
  }

  /**
   * @summary Returns a basic list of establishments, details can be retrieved by calling establishments/{id}.
   * @returns IEstablishmentsDetailBasicGetResponse
   */
  @Get('/basic')
  @Tags('Establishments')
  async getEstablishmentsDetailBasic(): Promise<IEstablishmentsDetailBasicGetResponse> {
    const response: IEstablishmentsDetailBasicGetResponse =
      await new EstablishmentsRepository().getEstablishmentsDetailBasic()
    return response
  }

  /**
   * @summary Returns a list of establishments, selected by Id.
   * @param id  Must be greater than <b>0</b>
   * @returns IEstablishmentsListGetResponse
   */
  @Get('/list/{id}')
  @Tags('Establishments')
  async getEstablishmentsListDetail(
    @Path() id: number
  ): Promise<IEstablishmentsListGetResponse> {
    const response =
      await new EstablishmentsRepository().getEstablishmentsListDetail(id)
    return response
  }

  /**
   * @summary Returns a details of a single establishment, selected by Id.
   * @param id Must be greater than <b>0</b>
   * @returns IEstablishmentsByIdGetResponse
   */
  @Get('/{id}')
  @Tags('Establishments')
  async getEstablishmentsDetailById(
    @Path() id: number
  ): Promise<IEstablishmentsByIdGetResponse> {
    const response: IEstablishmentsByIdGetResponse =
      await new EstablishmentsRepository().getEstablishmentsDetailById(id)
    return response
  }

  /**
   * @summary Returns a collection of establishment details, based on provided search parameters. All search parameters are optional.
   * @param name Terms to search for within the Business address and postcode of the establishments.
   * @param address Terms to search for within the Business name of the establishments.
   * @param longitude The longitude of the centre point of a spatial query.
   * @param latitude The latitude of the centre point of a spatial query.
   * @param maxDistanceLimit The max distance limit in miles from the centre of the spatial query. Note: This value maybe capped by the system to limit the size of the result set
   * @param businessTypeId Filter the results based on the Business Type of the establishment (See BusinessTypes for more details).
   * @param schemeTypeKey Filter the results based on the Scheme Type (FHRS or FHIS) of the establishment (See SchemeTypes for more details). Valid options are <b>'FHRS'</b> and </b>'FHIS'.
   * @param ratingKey Filter the results based on the FHIS/FHRS Rating of the establishment (See Ratings for more details). Valid options for <b>FHRS</b> are <b>'0', '1', '2', '3', '4' and '5'</b> and for <b>FHIS<b> are <b>'Pass', 'ImprovementRequired', 'AwaitingPublication', 'AwatingInspection' and 'Exempt'</b>
   * @param ratingOperatorKey Operator for increasing the flexibility of the rating search. Valid options are <b>'LessThanOrEqual', 'GreaterThanOrEqual' and 'Equal'</b>, the default for this value is 'Equal' (See RatingOperators for more details). Note: These operators only function on FHRS Ratings.
   * @param localAuthorityId Filter the results based on the Local Authority of the establishment (See Authorities for more details).
   * @param countryId Filter the results based on the Country of the establishment (See Countries for more details).
   * @param sortOptionKey Set the options for sort field and direction of the results (See SortOptions for more details). Valid options are <b>'Relevance', 'rating', 'desc_rating', 'alpha', 'desc_alpha' and 'distance'</b>
   * @param pageNumber The page number of the result set to return.
   * @param pageSize Size of the page of results to return. (Note: Maximum value is system capped, so less results maybe returned than requested)
   */
  @Get('/')
  @Tags('Establishments')
  async getEstablishmentsDetail(
    @Query() schemeTypeKey: _SCHEME_TYPE_KEYS,
    @Query() ratingOperatorKey: _RATING_OPERATOR_KEYS,
    @Query() sortOptionKey: _SORT_OPTIONS_KEYS,
    @Query() pageNumber: number,
    @Query() pageSize: number,
    @Query() ratingKey?: _RATING_FHRS_KEYS | _RATING_FHIS_KEYS,
    @Query() name?: string,
    @Query() address?: string,
    @Query() longitude?: string,
    @Query() latitude?: string,
    @Query() maxDistanceLimit?: string,
    @Query() businessTypeId?: string,
    @Query() localAuthorityId?: string,
    @Query() countryId?: string
  ) {
    /***************************      Adding Optional Parameters    *****************************************/
    let params: { [k: string]: any } = {}
    name == undefined ? undefined : (params.name = name)
    address == undefined ? undefined : (params.address = address)
    longitude == undefined ? undefined : (params.longitude = longitude)
    latitude == undefined ? undefined : (params.latitude = latitude)
    maxDistanceLimit == undefined
      ? undefined
      : (params.maxDistanceLimit = maxDistanceLimit)
    businessTypeId == undefined
      ? undefined
      : (params.businessTypeId = businessTypeId)

    localAuthorityId == undefined
      ? undefined
      : (params.localAuthorityId = localAuthorityId)
    countryId == undefined ? undefined : (params.countryId = countryId)
    sortOptionKey == undefined
      ? undefined
      : (params.sortOptionKey = sortOptionKey)
    pageNumber == undefined ? undefined : (params.pageNumber = pageNumber)
    pageSize == undefined ? undefined : (params.pageSize = pageSize)
    schemeTypeKey == undefined
      ? undefined
      : (params.schemeTypeKey = schemeTypeKey)
    ratingOperatorKey == undefined
      ? undefined
      : (params.ratingOperatorKey = ratingOperatorKey)
    ratingKey == undefined ? undefined : (params.ratingKey = ratingKey)
    /***************************      End    *****************************************/

    const response: IEstablishmentsDetailGetResponse =
      await new EstablishmentsRepository().getEstablishmentsDetail(params)
    return response
  }
}
