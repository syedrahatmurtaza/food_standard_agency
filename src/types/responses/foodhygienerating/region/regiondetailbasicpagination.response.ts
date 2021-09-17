import { Link, MetaRegion, Region } from './regiondetailpagination.response'

export interface IRegionDetailBasicPaginationGetResponse {
  regions: Region[]
  meta: MetaRegion
  links: Link[]
}
