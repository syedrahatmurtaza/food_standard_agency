import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IRatingOperatorGetResponse {
  ratingOperator: RatingOperator[]
  meta: Meta
  links: Link[]
}

export interface RatingOperator {
  ratingOperatorID: number
  ratingOperatorName: string
  ratingOperatorKey: string
  links: Link[]
}
