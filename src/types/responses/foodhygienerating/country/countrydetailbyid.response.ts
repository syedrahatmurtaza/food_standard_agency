import { Link } from '../region/regiondetailpagination.response'

export interface ICountryDetailByIdGetResponse {
  id: number
  name: string
  nameKey: string
  code: string
  links: Link[]
}
