import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface ISortOptionsGetResponse {
  sortOptions: SortOption[]
  meta: Meta
  links: Link[]
}

export interface SortOption {
  sortOptionID: number
  sortOptionName: string
  sortOptionKey: string
  links: Link[]
}
