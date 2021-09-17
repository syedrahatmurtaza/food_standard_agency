import axios, { AxiosInstance } from 'axios'
import { BASE_URL_FOOD_HYGIENE_RATING_SCHEME } from '../../constants/api.constants'

export class RegionService {
  instance: AxiosInstance

  constructor() {
    // Configuring Axios Before Using
    this.instance = axios.create({
      headers: {
        'x-api-version': '2',
        accept: 'application/json',
      },
    })
  }

  async getRegionDetailPagination(pageNumber: string, pageSize: string) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/regions/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getRegionDetailBasicPagination(pageNumber: string, pageSize: string) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/regions/basic/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getRegionDetailBasic() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/regions/basic`
    )

    return response
  }

  async getRegionDetail() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/regions`
    )

    return response
  }

  async getRegionDetailById(id: number) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/regions/${id}`
    )

    return response
  }
}
