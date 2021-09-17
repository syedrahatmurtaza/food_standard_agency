import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface ICountryDetailPaginationGetResponse {
  countries: Country[]
  meta: Meta
  links: Link[]
}

export interface Country {
  id: number
  name: string
  nameKey: string
  code: string
  links: Link[]
}
