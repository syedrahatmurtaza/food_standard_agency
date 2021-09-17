import { ReportingBusiness } from './listalert.default.response'
import { Meta, Problem, ProductDetail, Status } from './listalert.full.response'

export interface IFoodAlertIndividualAlertGetResponse {
  meta: Meta
  items: ItemIndividual[]
}

export interface ItemIndividual {
  id: string
  smStext: string
  actionTaken: string
  alertURL: AlertURL
  consumerAdvice: string
  created: Date
  description: string
  modified: Date
  notation: string
  problem: Problem[]
  productDetails: ProductDetail[]
  relatedMedia: RelatedMedia[]
  reportingBusiness: ReportingBusiness
  shortTitle: string
  shortURL: AlertURL
  status: Status
  title: string
  twitterText: string
  type: AlertURL[]
}

export interface AlertURL {
  id: string
}

export interface RelatedMedia {
  id: string
  title: string
}
