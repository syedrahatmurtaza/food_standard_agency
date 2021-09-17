import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'
import { EstablishmentListDetail } from './establishmentlistdetail.response'

export interface IEstablishmentsDetailGetResponse {
  establishments: EstablishmentListDetail[]
  meta: Meta
  links: Link[]
}
