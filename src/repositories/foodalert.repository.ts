import { _SPLIT_ATTHERATE, _VIEW } from '../constants/string.constants'
import { FoodAlertService } from '../services/foolalert/foodalert.service'
import { IFoodAlertIndividualAlertGetResponse } from '../types/responses/foodalert/individualalert.response'
import { IListAlertGetDefaultResponse } from '../types/responses/foodalert/listalert.default.response'
import { IListAlertGetFullResponse } from '../types/responses/foodalert/listalert.full.response'
import { IFoodAlertListCodeAllergensGetResponse } from '../types/responses/foodalert/listcodeallergen.response'
import { IFoodAlertPathogenRiskGetResponse } from '../types/responses/foodalert/listcodepathogenrisk.response'
import { IFoodAlertHazardCatagoryGetResponse } from '../types/responses/foodalert/listhazardcatagories'
import { IFoodAlertReasonAlertGetResponse } from '../types/responses/foodalert/listreasonalert.response'
import { ResponseUtil } from '../utils/response.util'

export class FoodAlertRepository {
  constructor() {}

  async getListAlerts(
    params: any
  ): Promise<IListAlertGetFullResponse | IListAlertGetDefaultResponse> {
    let response = await new FoodAlertService().getListAlerts(params)
    if (params._view == _VIEW.FULL) {
      let decodedResponse: IListAlertGetFullResponse =
        await ResponseUtil.removeSpecialCharacters(response)
      return <IListAlertGetFullResponse | IListAlertGetDefaultResponse>(
        decodedResponse
      )
    } else if (params._view == _VIEW.DEFAULT) {
      let decodedResponse: IListAlertGetDefaultResponse =
        await ResponseUtil.removeSpecialCharacters(response)
      return <IListAlertGetFullResponse | IListAlertGetDefaultResponse>(
        decodedResponse
      )
    }

    return <IListAlertGetFullResponse | IListAlertGetDefaultResponse>(
      response.data
    )
  }

  async getIndividualAlert(
    id: string
  ): Promise<IFoodAlertIndividualAlertGetResponse> {
    let response = await new FoodAlertService().getIndividualAlerts(id)
    let decodedResponse: IFoodAlertIndividualAlertGetResponse =
      await ResponseUtil.removeSpecialCharacters(response)
    return decodedResponse
  }

  async getListCodeAllergens(params: any) {
    let response = await new FoodAlertService().getListCodeAllergens(params)
    let decodedResponse: IFoodAlertListCodeAllergensGetResponse =
      await ResponseUtil.removeSpecialCharacters(response)
    return decodedResponse
  }

  async getListCodePathogenRisk(params: any) {
    let response = await new FoodAlertService().getListCodePathogenRisk(params)
    let decodedResponse: IFoodAlertPathogenRiskGetResponse =
      await ResponseUtil.removeSpecialCharacters(response)
    return decodedResponse
  }

  async getListHazardsCatagories(params: any) {
    let response = await new FoodAlertService().getListHazardsCatagories(params)
    let decodedResponse: IFoodAlertHazardCatagoryGetResponse =
      await ResponseUtil.removeSpecialCharacters(response)
    return decodedResponse
  }

  async getListReasonsAlert(params: any) {
    let response = await new FoodAlertService().getListReasonsAlert(params)
    let decodedResponse: IFoodAlertReasonAlertGetResponse =
      await ResponseUtil.removeSpecialCharacters(response)
    return decodedResponse
  }
}
