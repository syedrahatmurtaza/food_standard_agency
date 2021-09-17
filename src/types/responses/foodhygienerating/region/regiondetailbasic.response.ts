import { Link, MetaRegion, Region } from './regiondetailpagination.response'

export interface IRegionDetailBasicGetResponse {
  regions: Region[]
  meta: MetaRegion
  links: Link[]
}
