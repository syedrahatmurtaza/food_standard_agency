import axios, { AxiosInstance } from 'axios'
import { BASE_URL_FOOD_HYGIENE_RATING_SCHEME } from '../../constants/api.constants'

export class RatingOperatorService {
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

  async getRatingOperator() {
    const response = await this.instance.get(
      `${BASE_URL_FOOD_HYGIENE_RATING_SCHEME}/ratingoperators`
    )

    return response
  }
}
