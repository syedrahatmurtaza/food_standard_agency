import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'
import { Country } from './countrydetailpagination.response'

export interface ICountryDetailBasicPaginationGetResponse {
  countries: Country[]
  meta: Meta
  links: Link[]
}
