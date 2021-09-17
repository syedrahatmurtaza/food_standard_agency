import { Link, MetaRegion, Region } from './regiondetailpagination.response'

export interface IRegionDetailGetResponse {
  regions: Region[]
  meta: MetaRegion
  links: Link[]
}
