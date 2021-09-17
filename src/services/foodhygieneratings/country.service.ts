import axios, { AxiosInstance } from 'axios'
import { BASE_URL_FOOD_HYGIENE_RATING_SCHEME } from '../../constants/api.constants'

export class CountryService {
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

  async getCountryDetailPagination(pageNumber: string, pageSize: string) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/countries/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getCountryDetailBasicPagination(pageNumber: string, pageSize: string) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/countries/basic/${pageNumber}/${pageSize}`
    )

    return response
  }

  async getCountryDetailBasic() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/countries/basic`
    )

    return response
  }

  async getCountryDetail() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/countries`
    )

    return response
  }

  async getCountryDetailById(id: number) {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/countries/${id}`
    )

    return response
  }
}
