import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IScoreDescriptorGetResponse {
  scoreDescriptors: ScoreDescriptor[]
  meta: Meta
  links: Link[]
}

export interface ScoreDescriptor {
  id: number
  scoreCategory: string
  score: number
  description: string
  links: Link[]
}
