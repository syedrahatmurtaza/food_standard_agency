import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IRatingGetResponse {
  ratings: Rating[]
  meta: Meta
  links: Link[]
}
export interface Rating {
  ratingID: number
  ratingName: string
  ratingKey: string
  ratingKeyName: string
  schemeTypeID: number
  links: Link[]
}
