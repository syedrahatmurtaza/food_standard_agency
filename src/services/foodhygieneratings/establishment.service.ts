import axios, { AxiosInstance } from 'axios'
import { BASE_URL_FOOD_HYGIENE_RATING_SCHEME } from '../../constants/api.constants'

export class EstablishmentService {
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

  async getEstablishmentsDetailPagination(
    pageNumber: string,
    pageSize: string
  ) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/establishments/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getEstablishmentsDetailBasic() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/establishments/basic`
    )

    return response
  }

  async getEstablishmentsListDetail(id: number) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/establishments/list/${id}`
    )

    return response
  }

  async getEstablishmentsDetailById(id: number) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/establishments/${id}`
    )

    return response
  }

  async getEstablishmentsDetail(params: any) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/establishments`,
      { params: params }
    )

    return response
  }
}
