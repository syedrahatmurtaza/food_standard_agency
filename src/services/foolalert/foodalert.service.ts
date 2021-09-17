import axios, { AxiosInstance } from 'axios'
import {
  INDIVIDUAL_ALERT_URL_TARGET,
  LIST_ALERTS_URL_TARGET,
  LIST_CODE_ALLERGENS_URL_TARGET,
  LIST_CODE_PATHOGEN_RISK_URL_TARGET,
  LIST_HAZARD_CATAGORIES_URL_TARGET,
  LIST_REASON_ALERT_URL_TARGET,
} from '../../constants/api.constants'

export class FoodAlertService {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create()
  }

  async getListAlerts(param: any) {
    const response = await this.instance.get(LIST_ALERTS_URL_TARGET, {
      params: param,
    })
    return response
  }

  async getIndividualAlerts(id: string) {
    console.log(INDIVIDUAL_ALERT_URL_TARGET + id)
    const response = await this.instance.get(INDIVIDUAL_ALERT_URL_TARGET + id)
    return response
  }

  async getListCodeAllergens(params: any) {
    const response = await this.instance.get(LIST_CODE_ALLERGENS_URL_TARGET, {
      params: params,
    })
    return response
  }

  async getListCodePathogenRisk(params: any) {
    const response = await this.instance.get(
      LIST_CODE_PATHOGEN_RISK_URL_TARGET,
      {
        params: params,
      }
    )
    return response
  }

  async getListHazardsCatagories(params: any) {
    const response = await this.instance.get(
      LIST_HAZARD_CATAGORIES_URL_TARGET,
      {
        params: params,
      }
    )
    return response
  }

  async getListReasonsAlert(params: any) {
    const response = await this.instance.get(LIST_REASON_ALERT_URL_TARGET, {
      params: params,
    })
    return response
  }
}
