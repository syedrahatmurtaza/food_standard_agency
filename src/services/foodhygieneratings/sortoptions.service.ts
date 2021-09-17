import axios, { AxiosInstance } from 'axios'
import { BASE_URL_FOOD_HYGIENE_RATING_SCHEME } from '../../constants/api.constants'

export class SortOptionsService {
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

  async getSortOptions() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/sortoptions`
    )

    return response
  }
}
