import { AxiosResponse } from 'axios'
import { _SPLIT_ATTHERATE } from '../constants/string.constants'

export class ResponseUtil {
  constructor() {}

  static async removeSpecialCharacters(response: AxiosResponse): Promise<any> {
    let data = JSON.stringify(response.data)
    data = data.split(_SPLIT_ATTHERATE).join()
    return JSON.parse(data)
  }
}
