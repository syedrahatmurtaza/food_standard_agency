import axios, { AxiosInstance } from 'axios'
import { BASE_URL_FOOD_HYGIENE_RATING_SCHEME } from '../../constants/api.constants'

export class BusinessTypesService {
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

  async getBusinessTypesDetailPagination(pageNumber: string, pageSize: string) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/businesstypes/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getBusinessTypesDetailBasicPagination(
    pageNumber: string,
    pageSize: string
  ) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/businesstypes/basic/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getBusinessTypesDetailBasic() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/businesstypes/basic`
    )

    return response
  }

  async getBusinessTypesDetail() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/businesstypes`
    )

    return response
  }

  async getBusinessTypesDetailById(id: number) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/businesstypes/${id}`
    )

    return response
  }
}
