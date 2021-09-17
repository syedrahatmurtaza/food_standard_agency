import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'
import { Establishment } from './establishmentdetailpagination.response'

export interface IEstablishmentsDetailBasicGetResponse {
  establishments: Establishment[]
  meta: Meta
  links: Link[]
}
