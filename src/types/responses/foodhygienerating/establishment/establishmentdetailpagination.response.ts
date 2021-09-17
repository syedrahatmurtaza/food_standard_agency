import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IEstablishmentsDetailPaginationGetResponse {
  establishments: Establishment[]
  meta: Meta
  links: Link[]
}

export interface Establishment {
  fhrsid: number
  localAuthorityBusinessId: string
  businessName: string
  businessType: string
  ratingValue: string
  ratingDate: Date
  links: Link[]
}
