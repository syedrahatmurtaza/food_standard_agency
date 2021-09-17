import {
  Controller,
  Example,
  Get,
  Path,
  Query,
  Response,
  Route,
  Tags,
} from '@tsoa/runtime'
import { _VIEW } from '../constants/string.constants'
import { FoodAlertRepository } from '../repositories/foodalert.repository'
import { IFoodAlertIndividualAlertGetResponse } from '../types/responses/foodalert/individualalert.response'
import { IListAlertGetDefaultResponse } from '../types/responses/foodalert/listalert.default.response'
import { IListAlertGetFullResponse } from '../types/responses/foodalert/listalert.full.response'
import { IFoodAlertListCodeAllergensGetResponse } from '../types/responses/foodalert/listcodeallergen.response'
import { IFoodAlertPathogenRiskGetResponse } from '../types/responses/foodalert/listcodepathogenrisk.response'
import { IFoodAlertHazardCatagoryGetResponse } from '../types/responses/foodalert/listhazardcatagories'
import { IFoodAlertReasonAlertGetResponse } from '../types/responses/foodalert/listreasonalert.response'

@Route('v1/foodalerts')
export class FoodAlertController extends Controller {
  constructor() {
    super()
  }

  /**
   * @param _limit Must be greater than <b>0</b>
   * @param _view Must be <b>"default"</b> or <b>"full"</b>
   * @param since List alerts changed since some point in time <b>(Example: 2018-01-29T16:25:08+00:00)</b>
   * @param search Search for alerts matching some search term <b>(Example: tesco)</b>
   * @summary List Alerts <b>|</b> List alerts changed since some point in time <b>|</b> Search for alerts matching some search term
   */
  @Example({
    meta: {
      publisher: 'string',
      licence: 'string',
      documentation: 'string',
      version: 'string',
      comment: 'string',
      hasFormat: ['string'],
      limit: 0,
    },
    items: [
      {
        id: 'string',
        smStext: 'string',
        actionTaken: 'string',
        alertURL: 'string',
        consumerAdvice: 'string',
        created: '2021-09-13T13:22:53.195Z',
        description: 'string',
        modified: '2021-09-13T13:22:53.195Z',
        notation: 'string',
        problem: [
          {
            id: 'string',
            allergen: [
              {
                id: 'string',
                altLabel: 'string',
                label: 'string',
                narrower: ['string'],
                notation: 'string',
                riskStatement: 'string',
                broader: 'string',
              },
            ],
            riskStatement: 'string',
          },
        ],
        productDetails: [
          {
            id: 'string',
            batchDescription: [
              {
                id: 'string',
                batchCode: 'string',
                bestBeforeDate: '2021-09-13T13:22:53.195Z',
                bestBeforeDescription: 'string',
                useByDescription: 'string',
                lotNumber: 'string',
              },
            ],
            packSizeDescription: 'string',
            productName: 'string',
          },
        ],
        relatedMedia: ['string'],
        reportingBusiness: {
          commonName: 'string',
        },
        shortTitle: 'string',
        shortURL: 'string',
        status: {
          id: 'string',
          label: 'Published',
        },
        title: 'string',
        twitterText: 'string',
        type: ['string'],
        otherBusiness: [
          {
            commonName: 'string',
          },
        ],
      },
    ],
  })
  @Example({
    meta: {
      publisher: 'string',
      licence: 'string',
      documentation: 'string',
      version: 'string',
      comment: 'string',
      hasFormat: ['string'],
      limit: 0,
    },
    items: [
      {
        id: 'string',
        actionTaken: 'string',
        alertURL: 'string',
        consumerAdvice: 'string',
        created: '2021-09-13T13:22:53.195Z',
        description: 'string',
        modified: '2021-09-13T13:22:53.195Z',
        notation: 'string',
        problem: [
          {
            id: 'string',
            allergen: [
              {
                id: 'string',
                altLabel: 'string',
                label: 'string',
                narrower: ['string'],
                notation: 'string',
                riskStatement: 'string',
                broader: 'string',
              },
            ],
            riskStatement: 'string',
          },
        ],
        productDetails: [
          {
            id: 'string',
            batchDescription: [
              {
                id: 'string',
                batchCode: 'string',
                bestBeforeDate: '2021-09-13T13:22:53.195Z',
                bestBeforeDescription: 'string',
                useByDescription: 'string',
                lotNumber: 'string',
              },
            ],
            packSizeDescription: 'string',
            productName: 'string',
          },
        ],
        relatedMedia: ['string'],
        reportingBusiness: {
          commonName: 'string',
        },
        shortTitle: 'string',
        shortURL: 'string',
        status: {
          id: 'string',
          label: 'Published',
        },
        title: 'string',
        twitterText: 'string',
        type: ['string'],
        otherBusiness: [
          {
            commonName: 'string',
          },
        ],
      },
    ],
  })
  @Get('/id')
  @Response<IListAlertGetFullResponse | IListAlertGetDefaultResponse>(
    '200',
    'Success'
  )
  @Tags('Food Alerts')
  async getListAlerts(
    @Query() _limit?: string,
    @Query() _view?: _VIEW,
    @Query() since?: string,
    @Query() search?: string
  ): Promise<IListAlertGetFullResponse | IListAlertGetDefaultResponse> {
    let params: { [k: string]: any } = {}
    _limit == undefined ? undefined : (params._limit = _limit)
    _view == undefined ? undefined : (params._view = _view)
    since == undefined ? undefined : (params.since = since)
    search == undefined ? undefined : (params.search = search)
    console.log(since)
    const response: IListAlertGetFullResponse | IListAlertGetDefaultResponse =
      await new FoodAlertRepository().getListAlerts(params)
    return response
  }

  /**
   * @summary An individual alert
   * @param id Example = FSA-AA-01-2018
   * @returns IFoodAlertIndividualAlertGetResponse
   */
  @Get('/id/{id}')
  @Tags('Food Alerts')
  async getIndividualAlert(
    @Path() id: string
  ): Promise<IFoodAlertIndividualAlertGetResponse> {
    const response: IFoodAlertIndividualAlertGetResponse =
      await new FoodAlertRepository().getIndividualAlert(id)
    return response
  }

  /**
   * @summary List of codes for allergens
   * @param _sort Example = label
   * @returns IFoodAlertListCodeAllergensGetResponse
   */
  @Get('def/allergens')
  @Tags('Food Alerts')
  async getListCodeAllergens(
    @Query() _sort?: string
  ): Promise<IFoodAlertListCodeAllergensGetResponse> {
    let params: { [k: string]: any } = {}
    _sort == undefined ? undefined : (params._sort = _sort)
    const response: IFoodAlertListCodeAllergensGetResponse =
      await new FoodAlertRepository().getListCodeAllergens(params)
    return response
  }

  /**
   *  @summary List of codes for pathogen risks
   * @param _sort Example = label
   * @returns IFoodAlertPathogenRiskGetResponse
   */
  @Get('def/pathogen-risk')
  @Tags('Food Alerts')
  async getListCodePathogenRisk(
    @Query() _sort?: string
  ): Promise<IFoodAlertPathogenRiskGetResponse> {
    let params: { [k: string]: any } = {}
    _sort == undefined ? undefined : (params._sort = _sort)
    const response: IFoodAlertPathogenRiskGetResponse =
      await new FoodAlertRepository().getListCodePathogenRisk(params)
    return response
  }

  /**
   * @summary List of hazard categories
   * @param _sort Example = label
   * @returns IFoodAlertHazardCatagoryGetResponse
   */
  @Get('/def/hazards')
  @Tags('Food Alerts')
  async getListHazardsCatagories(
    @Query() _sort?: string
  ): Promise<IFoodAlertHazardCatagoryGetResponse> {
    let params: { [k: string]: any } = {}
    _sort == undefined ? undefined : (params._sort = _sort)
    const response: IFoodAlertHazardCatagoryGetResponse =
      await new FoodAlertRepository().getListHazardsCatagories(params)
    return response
  }

  /**
   * @summary List of reasons for alert
   * @param _sort Example = label
   * @returns IFoodAlertReasonAlertGetResponse
   */
  @Get('/def/reasons')
  @Tags('Food Alerts')
  async getListReasonsAlert(
    @Query() _sort?: string
  ): Promise<IFoodAlertReasonAlertGetResponse> {
    let params: { [k: string]: any } = {}
    _sort == undefined ? undefined : (params._sort = _sort)
    const response: IFoodAlertHazardCatagoryGetResponse =
      await new FoodAlertRepository().getListReasonsAlert(params)
    return response
  }
}
