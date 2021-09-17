import axios, { AxiosInstance } from 'axios'
import { BASE_URL_FOOD_HYGIENE_RATING_SCHEME } from '../../constants/api.constants'

export class AuthorityService {
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

  async getAuthorityDetailPagination(pageNumber: string, pageSize: string) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/authorities/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getAuthorityDetailBasicPagination(
    pageNumber: string,
    pageSize: string
  ) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/authorities/basic/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getAuthorityDetailBasic() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/authorities/basic`
    )

    return response
  }

  async getAuthorityDetail() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/authorities`
    )

    return response
  }

  async getAuthorityDetailById(id: number) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/authorities/${id}`
    )

    return response
  }
}
