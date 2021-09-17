/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthorityController } from './../controllers/authority.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BusinessTypesController } from './../controllers/businesstypes.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CountryController } from './../controllers/country.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EstablishmentController } from './../controllers/establishment.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FoodAlertController } from './../controllers/foodalert.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RatingController } from './../controllers/rating.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RatingOperatorController } from './../controllers/ratingoperator.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RegionController } from './../controllers/region.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SchemeTypesController } from './../controllers/schemetypes.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ScoreDescriptorController } from './../controllers/scoredescriptor.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SortOptionsController } from './../controllers/sortoptions.controller';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Link": {
        "dataType": "refObject",
        "properties": {
            "rel": {"dataType":"string","required":true},
            "href": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Authority": {
        "dataType": "refObject",
        "properties": {
            "localAuthorityId": {"dataType":"double","required":true},
            "localAuthorityIdCode": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "friendlyName": {"dataType":"string","required":true},
            "url": {"dataType":"string","required":true},
            "schemeURL": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "regionName": {"dataType":"string","required":true},
            "fileName": {"dataType":"string","required":true},
            "fileNameWelsh": {"dataType":"string","required":true},
            "establishmentCount": {"dataType":"double","required":true},
            "creationDate": {"dataType":"datetime","required":true},
            "lastPublishedDate": {"dataType":"datetime","required":true},
            "schemeType": {"dataType":"double","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Meta": {
        "dataType": "refObject",
        "properties": {
            "publisher": {"dataType":"string","required":true},
            "licence": {"dataType":"string","required":true},
            "documentation": {"dataType":"string","required":true},
            "version": {"dataType":"string","required":true},
            "comment": {"dataType":"string","required":true},
            "hasFormat": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "limit": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAuthorityDetailPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "authorities": {"dataType":"array","array":{"dataType":"refObject","ref":"Authority"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthorityBasic": {
        "dataType": "refObject",
        "properties": {
            "localAuthorityId": {"dataType":"double","required":true},
            "localAuthorityIdCode": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "establishmentCount": {"dataType":"double","required":true},
            "schemeType": {"dataType":"double","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAuthorityDetailBasicPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "authorities": {"dataType":"array","array":{"dataType":"refObject","ref":"AuthorityBasic"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAuthorityDetailBasicGetResponse": {
        "dataType": "refObject",
        "properties": {
            "authorities": {"dataType":"array","array":{"dataType":"refObject","ref":"AuthorityBasic"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthorityDetail": {
        "dataType": "refObject",
        "properties": {
            "localAuthorityId": {"dataType":"double","required":true},
            "localAuthorityIdCode": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "friendlyName": {"dataType":"string","required":true},
            "url": {"dataType":"string","required":true},
            "schemeURL": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "regionName": {"dataType":"string","required":true},
            "fileName": {"dataType":"string","required":true},
            "fileNameWelsh": {"dataType":"string","required":true},
            "establishmentCount": {"dataType":"double","required":true},
            "creationDate": {"dataType":"datetime","required":true},
            "lastPublishedDate": {"dataType":"datetime","required":true},
            "schemeType": {"dataType":"double","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAuthorityDetailGetResponse": {
        "dataType": "refObject",
        "properties": {
            "authorities": {"dataType":"array","array":{"dataType":"refObject","ref":"AuthorityDetail"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAuthorityDetailByIDGetResponse": {
        "dataType": "refObject",
        "properties": {
            "localAuthorityId": {"dataType":"double","required":true},
            "localAuthorityIdCode": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "friendlyName": {"dataType":"string","required":true},
            "url": {"dataType":"string","required":true},
            "schemeURL": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "regionName": {"dataType":"string","required":true},
            "fileName": {"dataType":"string","required":true},
            "fileNameWelsh": {"dataType":"string","required":true},
            "establishmentCount": {"dataType":"double","required":true},
            "creationDate": {"dataType":"datetime","required":true},
            "lastPublishedDate": {"dataType":"datetime","required":true},
            "schemeType": {"dataType":"double","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BusinessType": {
        "dataType": "refObject",
        "properties": {
            "businessTypeID": {"dataType":"double","required":true},
            "businessTypeName": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IBusinessTypesDetailPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "businessTypes": {"dataType":"array","array":{"dataType":"refObject","ref":"BusinessType"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IBusinessTypesDetailBasicPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "businessTypes": {"dataType":"array","array":{"dataType":"refObject","ref":"BusinessType"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IBusinessTypesDetailBasicGetResponse": {
        "dataType": "refObject",
        "properties": {
            "businessTypes": {"dataType":"array","array":{"dataType":"refObject","ref":"BusinessType"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IBusinessTypesDetailGetResponse": {
        "dataType": "refObject",
        "properties": {
            "businessTypes": {"dataType":"array","array":{"dataType":"refObject","ref":"BusinessType"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IBusinessTypesDetailByIdGetResponse": {
        "dataType": "refObject",
        "properties": {
            "businessTypeID": {"dataType":"double","required":true},
            "businessTypeName": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Country": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "nameKey": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICountryDetailPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "countries": {"dataType":"array","array":{"dataType":"refObject","ref":"Country"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICountryDetailBasicPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "countries": {"dataType":"array","array":{"dataType":"refObject","ref":"Country"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICountryDetailBasicGetResponse": {
        "dataType": "refObject",
        "properties": {
            "countries": {"dataType":"array","array":{"dataType":"refObject","ref":"Country"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICountryDetailGetResponse": {
        "dataType": "refObject",
        "properties": {
            "countries": {"dataType":"array","array":{"dataType":"refObject","ref":"Country"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICountryDetailByIdGetResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "nameKey": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Establishment": {
        "dataType": "refObject",
        "properties": {
            "fhrsid": {"dataType":"double","required":true},
            "localAuthorityBusinessId": {"dataType":"string","required":true},
            "businessName": {"dataType":"string","required":true},
            "businessType": {"dataType":"string","required":true},
            "ratingValue": {"dataType":"string","required":true},
            "ratingDate": {"dataType":"datetime","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEstablishmentsDetailPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "establishments": {"dataType":"array","array":{"dataType":"refObject","ref":"Establishment"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEstablishmentsDetailBasicGetResponse": {
        "dataType": "refObject",
        "properties": {
            "establishments": {"dataType":"array","array":{"dataType":"refObject","ref":"Establishment"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Scores": {
        "dataType": "refObject",
        "properties": {
            "hygiene": {"dataType":"double","required":true},
            "structural": {"dataType":"double","required":true},
            "confidenceInManagement": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Geocode": {
        "dataType": "refObject",
        "properties": {
            "longitude": {"dataType":"string","required":true},
            "latitude": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EstablishmentListDetail": {
        "dataType": "refObject",
        "properties": {
            "fhrsid": {"dataType":"double","required":true},
            "changesByServerID": {"dataType":"double","required":true},
            "localAuthorityBusinessID": {"dataType":"string","required":true},
            "businessName": {"dataType":"string","required":true},
            "businessType": {"dataType":"string","required":true},
            "businessTypeID": {"dataType":"double","required":true},
            "addressLine1": {"dataType":"string","required":true},
            "addressLine2": {"dataType":"string","required":true},
            "addressLine3": {"dataType":"string","required":true},
            "addressLine4": {"dataType":"string","required":true},
            "postCode": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "ratingValue": {"dataType":"string","required":true},
            "ratingKey": {"dataType":"string","required":true},
            "ratingDate": {"dataType":"datetime","required":true},
            "localAuthorityCode": {"dataType":"string","required":true},
            "localAuthorityName": {"dataType":"string","required":true},
            "localAuthorityWebSite": {"dataType":"string","required":true},
            "localAuthorityEmailAddress": {"dataType":"string","required":true},
            "scores": {"ref":"Scores","required":true},
            "schemeType": {"dataType":"string","required":true},
            "geocode": {"ref":"Geocode","required":true},
            "rightToReply": {"dataType":"string","required":true},
            "distance": {"dataType":"double","required":true},
            "newRatingPending": {"dataType":"boolean","required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEstablishmentsListGetResponse": {
        "dataType": "refObject",
        "properties": {
            "establishments": {"dataType":"array","array":{"dataType":"refObject","ref":"EstablishmentListDetail"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEstablishmentsByIdGetResponse": {
        "dataType": "refObject",
        "properties": {
            "fhrsid": {"dataType":"double","required":true},
            "changesByServerID": {"dataType":"double","required":true},
            "localAuthorityBusinessID": {"dataType":"string","required":true},
            "businessName": {"dataType":"string","required":true},
            "businessType": {"dataType":"string","required":true},
            "businessTypeID": {"dataType":"double","required":true},
            "addressLine1": {"dataType":"string","required":true},
            "addressLine2": {"dataType":"string","required":true},
            "addressLine3": {"dataType":"string","required":true},
            "addressLine4": {"dataType":"string","required":true},
            "postCode": {"dataType":"string","required":true},
            "phone": {"dataType":"string","required":true},
            "ratingValue": {"dataType":"string","required":true},
            "ratingKey": {"dataType":"string","required":true},
            "ratingDate": {"dataType":"datetime","required":true},
            "localAuthorityCode": {"dataType":"string","required":true},
            "localAuthorityName": {"dataType":"string","required":true},
            "localAuthorityWebSite": {"dataType":"string","required":true},
            "localAuthorityEmailAddress": {"dataType":"string","required":true},
            "scores": {"ref":"Scores","required":true},
            "schemeType": {"dataType":"string","required":true},
            "geocode": {"ref":"Geocode","required":true},
            "rightToReply": {"dataType":"string","required":true},
            "distance": {"dataType":"double","required":true},
            "newRatingPending": {"dataType":"boolean","required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEstablishmentsDetailGetResponse": {
        "dataType": "refObject",
        "properties": {
            "establishments": {"dataType":"array","array":{"dataType":"refObject","ref":"EstablishmentListDetail"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_SCHEME_TYPE_KEYS": {
        "dataType": "refEnum",
        "enums": ["FHRS","FHIS"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_RATING_OPERATOR_KEYS": {
        "dataType": "refEnum",
        "enums": ["Equal","LessThanOrEqual","GreaterThanOrEqual"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_SORT_OPTIONS_KEYS": {
        "dataType": "refEnum",
        "enums": ["rating","desc_rating","alpha","desc_alpha","distance"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_RATING_FHRS_KEYS": {
        "dataType": "refEnum",
        "enums": ["0","1","2","3","4","5"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_RATING_FHIS_KEYS": {
        "dataType": "refEnum",
        "enums": ["PASS","ImprovementRequired","AwaitingPublication","AwatingInspection","Exempt"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Allergen": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "altLabel": {"dataType":"string"},
            "label": {"dataType":"string","required":true},
            "narrower": {"dataType":"array","array":{"dataType":"string"}},
            "notation": {"dataType":"string","required":true},
            "riskStatement": {"dataType":"string","required":true},
            "broader": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Problem": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "allergen": {"dataType":"array","array":{"dataType":"refObject","ref":"Allergen"}},
            "riskStatement": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BatchDescription": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "batchCode": {"dataType":"string"},
            "bestBeforeDate": {"dataType":"datetime"},
            "bestBeforeDescription": {"dataType":"string"},
            "useByDescription": {"dataType":"string"},
            "lotNumber": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProductDetail": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "batchDescription": {"dataType":"array","array":{"dataType":"refObject","ref":"BatchDescription"},"required":true},
            "packSizeDescription": {"dataType":"string"},
            "productName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Business": {
        "dataType": "refObject",
        "properties": {
            "commonName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Label": {
        "dataType": "refEnum",
        "enums": ["Published"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Status": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "label": {"ref":"Label","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ItemFull": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "smStext": {"dataType":"string","required":true},
            "actionTaken": {"dataType":"string","required":true},
            "alertURL": {"dataType":"string","required":true},
            "consumerAdvice": {"dataType":"string","required":true},
            "created": {"dataType":"datetime","required":true},
            "description": {"dataType":"string","required":true},
            "modified": {"dataType":"datetime","required":true},
            "notation": {"dataType":"string","required":true},
            "problem": {"dataType":"array","array":{"dataType":"refObject","ref":"Problem"},"required":true},
            "productDetails": {"dataType":"array","array":{"dataType":"refObject","ref":"ProductDetail"},"required":true},
            "relatedMedia": {"dataType":"array","array":{"dataType":"string"}},
            "reportingBusiness": {"ref":"Business","required":true},
            "shortTitle": {"dataType":"string","required":true},
            "shortURL": {"dataType":"string","required":true},
            "status": {"ref":"Status","required":true},
            "title": {"dataType":"string","required":true},
            "twitterText": {"dataType":"string","required":true},
            "type": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "otherBusiness": {"dataType":"union","subSchemas":[{"dataType":"array","array":{"dataType":"refObject","ref":"Business"}},{"ref":"Business"}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IListAlertGetFullResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemFull"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReportingBusiness": {
        "dataType": "refObject",
        "properties": {
            "commonName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ItemDefault": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "alertURL": {"dataType":"string","required":true},
            "created": {"dataType":"datetime","required":true},
            "modified": {"dataType":"datetime","required":true},
            "notation": {"dataType":"string","required":true},
            "problem": {"dataType":"array","array":{"dataType":"refObject","ref":"Problem"},"required":true},
            "productDetails": {"dataType":"array","array":{"dataType":"refObject","ref":"ProductDetail"},"required":true},
            "reportingBusiness": {"ref":"ReportingBusiness","required":true},
            "shortTitle": {"dataType":"string","required":true},
            "status": {"ref":"Status","required":true},
            "title": {"dataType":"string","required":true},
            "type": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IListAlertGetDefaultResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemDefault"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "_VIEW": {
        "dataType": "refEnum",
        "enums": ["default","full"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AlertURL": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RelatedMedia": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "title": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ItemIndividual": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "smStext": {"dataType":"string","required":true},
            "actionTaken": {"dataType":"string","required":true},
            "alertURL": {"ref":"AlertURL","required":true},
            "consumerAdvice": {"dataType":"string","required":true},
            "created": {"dataType":"datetime","required":true},
            "description": {"dataType":"string","required":true},
            "modified": {"dataType":"datetime","required":true},
            "notation": {"dataType":"string","required":true},
            "problem": {"dataType":"array","array":{"dataType":"refObject","ref":"Problem"},"required":true},
            "productDetails": {"dataType":"array","array":{"dataType":"refObject","ref":"ProductDetail"},"required":true},
            "relatedMedia": {"dataType":"array","array":{"dataType":"refObject","ref":"RelatedMedia"},"required":true},
            "reportingBusiness": {"ref":"ReportingBusiness","required":true},
            "shortTitle": {"dataType":"string","required":true},
            "shortURL": {"ref":"AlertURL","required":true},
            "status": {"ref":"Status","required":true},
            "title": {"dataType":"string","required":true},
            "twitterText": {"dataType":"string","required":true},
            "type": {"dataType":"array","array":{"dataType":"refObject","ref":"AlertURL"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IFoodAlertIndividualAlertGetResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemIndividual"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ItemAllergen": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "broader": {"dataType":"string"},
            "label": {"dataType":"string","required":true},
            "notation": {"dataType":"string","required":true},
            "riskStatement": {"dataType":"string","required":true},
            "altLabel": {"dataType":"string"},
            "narrower": {"dataType":"array","array":{"dataType":"string"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IFoodAlertListCodeAllergensGetResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemAllergen"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pathogen": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "label": {"dataType":"union","subSchemas":[{"dataType":"array","array":{"dataType":"string"}},{"dataType":"string"}],"required":true},
            "notation": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ItemPathogen": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "label": {"dataType":"union","subSchemas":[{"dataType":"array","array":{"dataType":"string"}},{"dataType":"string"}],"required":true},
            "notation": {"dataType":"string","required":true},
            "pathogen": {"ref":"Pathogen","required":true},
            "riskStatement": {"dataType":"union","subSchemas":[{"dataType":"array","array":{"dataType":"string"}},{"dataType":"string"}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IFoodAlertPathogenRiskGetResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemPathogen"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ItemHazardCatagories": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "notation": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IFoodAlertHazardCatagoryGetResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemHazardCatagories"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IFoodAlertReasonAlertGetResponse": {
        "dataType": "refObject",
        "properties": {
            "meta": {"ref":"Meta","required":true},
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"ItemHazardCatagories"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Rating": {
        "dataType": "refObject",
        "properties": {
            "ratingID": {"dataType":"double","required":true},
            "ratingName": {"dataType":"string","required":true},
            "ratingKey": {"dataType":"string","required":true},
            "ratingKeyName": {"dataType":"string","required":true},
            "schemeTypeID": {"dataType":"double","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRatingGetResponse": {
        "dataType": "refObject",
        "properties": {
            "ratings": {"dataType":"array","array":{"dataType":"refObject","ref":"Rating"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RatingOperator": {
        "dataType": "refObject",
        "properties": {
            "ratingOperatorID": {"dataType":"double","required":true},
            "ratingOperatorName": {"dataType":"string","required":true},
            "ratingOperatorKey": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRatingOperatorGetResponse": {
        "dataType": "refObject",
        "properties": {
            "ratingOperator": {"dataType":"array","array":{"dataType":"refObject","ref":"RatingOperator"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Region": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "nameKey": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MetaRegion": {
        "dataType": "refObject",
        "properties": {
            "dataSource": {"dataType":"string","required":true},
            "extractDate": {"dataType":"datetime","required":true},
            "itemCount": {"dataType":"double","required":true},
            "returncode": {"dataType":"string","required":true},
            "totalCount": {"dataType":"double","required":true},
            "totalPages": {"dataType":"double","required":true},
            "pageSize": {"dataType":"double","required":true},
            "pageNumber": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRegionDetailPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "regions": {"dataType":"array","array":{"dataType":"refObject","ref":"Region"},"required":true},
            "meta": {"ref":"MetaRegion","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRegionDetailBasicPaginationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "regions": {"dataType":"array","array":{"dataType":"refObject","ref":"Region"},"required":true},
            "meta": {"ref":"MetaRegion","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRegionDetailBasicGetResponse": {
        "dataType": "refObject",
        "properties": {
            "regions": {"dataType":"array","array":{"dataType":"refObject","ref":"Region"},"required":true},
            "meta": {"ref":"MetaRegion","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRegionDetailGetResponse": {
        "dataType": "refObject",
        "properties": {
            "regions": {"dataType":"array","array":{"dataType":"refObject","ref":"Region"},"required":true},
            "meta": {"ref":"MetaRegion","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IRegionDetailByIdGetResponse": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "nameKey": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SchemeType": {
        "dataType": "refObject",
        "properties": {
            "schemeTypeid": {"dataType":"double","required":true},
            "schemeTypeName": {"dataType":"string","required":true},
            "schemeTypeKey": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISchemeTypesGetResponse": {
        "dataType": "refObject",
        "properties": {
            "schemeTypes": {"dataType":"array","array":{"dataType":"refObject","ref":"SchemeType"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ScoreDescriptor": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "scoreCategory": {"dataType":"string","required":true},
            "score": {"dataType":"double","required":true},
            "description": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IScoreDescriptorGetResponse": {
        "dataType": "refObject",
        "properties": {
            "scoreDescriptors": {"dataType":"array","array":{"dataType":"refObject","ref":"ScoreDescriptor"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SortOption": {
        "dataType": "refObject",
        "properties": {
            "sortOptionID": {"dataType":"double","required":true},
            "sortOptionName": {"dataType":"string","required":true},
            "sortOptionKey": {"dataType":"string","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISortOptionsGetResponse": {
        "dataType": "refObject",
        "properties": {
            "sortOptions": {"dataType":"array","array":{"dataType":"refObject","ref":"SortOption"},"required":true},
            "meta": {"ref":"Meta","required":true},
            "links": {"dataType":"array","array":{"dataType":"refObject","ref":"Link"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/v1/authorities/:pageNumber/:pageSize',

            function AuthorityController_getAuthorityDetailPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AuthorityController();


            const promise = controller.getAuthorityDetailPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/authorities/basic/:pageNumber/:pageSize',

            function AuthorityController_getRegionDetailBasicPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AuthorityController();


            const promise = controller.getRegionDetailBasicPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/authorities/basic',

            function AuthorityController_getAuthorityDetailBasic(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AuthorityController();


            const promise = controller.getAuthorityDetailBasic.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/authorities',

            function AuthorityController_getAuthorityDetail(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AuthorityController();


            const promise = controller.getAuthorityDetail.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/authorities/:id',

            function AuthorityController_getAuthorityDetailById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AuthorityController();


            const promise = controller.getAuthorityDetailById.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/businesstypes/:pageNumber/:pageSize',

            function BusinessTypesController_getBusinessTypesDetailPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new BusinessTypesController();


            const promise = controller.getBusinessTypesDetailPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/businesstypes/basic/:pageNumber/:pageSize',

            function BusinessTypesController_getBusinessTypesDetailBasicPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new BusinessTypesController();


            const promise = controller.getBusinessTypesDetailBasicPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/businesstypes/basic',

            function BusinessTypesController_getBusinessTypesDetailBasic(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new BusinessTypesController();


            const promise = controller.getBusinessTypesDetailBasic.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/businesstypes',

            function BusinessTypesController_getBusinessTypesDetail(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new BusinessTypesController();


            const promise = controller.getBusinessTypesDetail.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/businesstypes/:id',

            function BusinessTypesController_getBusinessTypesDetailById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new BusinessTypesController();


            const promise = controller.getBusinessTypesDetailById.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/countries/:pageNumber/:pageSize',

            function CountryController_getCountryDetailPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CountryController();


            const promise = controller.getCountryDetailPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/countries/basic/:pageNumber/:pageSize',

            function CountryController_getCountryDetailBasicPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CountryController();


            const promise = controller.getCountryDetailBasicPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/countries/basic',

            function CountryController_getCountryDetailBasic(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CountryController();


            const promise = controller.getCountryDetailBasic.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/countries',

            function CountryController_getCountryDetail(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CountryController();


            const promise = controller.getCountryDetail.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/countries/:id',

            function CountryController_getCountryDetailById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CountryController();


            const promise = controller.getCountryDetailById.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/establishments/:pageNumber/:pageSize',

            function EstablishmentController_getEstablishmentsDetailPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new EstablishmentController();


            const promise = controller.getEstablishmentsDetailPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/establishments/basic',

            function EstablishmentController_getEstablishmentsDetailBasic(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new EstablishmentController();


            const promise = controller.getEstablishmentsDetailBasic.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/establishments/list/:id',

            function EstablishmentController_getEstablishmentsListDetail(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new EstablishmentController();


            const promise = controller.getEstablishmentsListDetail.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/establishments/:id',

            function EstablishmentController_getEstablishmentsDetailById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new EstablishmentController();


            const promise = controller.getEstablishmentsDetailById.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/establishments',

            function EstablishmentController_getEstablishmentsDetail(request: any, response: any, next: any) {
            const args = {
                    schemeTypeKey: {"in":"query","name":"schemeTypeKey","required":true,"ref":"_SCHEME_TYPE_KEYS"},
                    ratingOperatorKey: {"in":"query","name":"ratingOperatorKey","required":true,"ref":"_RATING_OPERATOR_KEYS"},
                    sortOptionKey: {"in":"query","name":"sortOptionKey","required":true,"ref":"_SORT_OPTIONS_KEYS"},
                    pageNumber: {"in":"query","name":"pageNumber","required":true,"dataType":"double"},
                    pageSize: {"in":"query","name":"pageSize","required":true,"dataType":"double"},
                    ratingKey: {"in":"query","name":"ratingKey","dataType":"union","subSchemas":[{"ref":"_RATING_FHRS_KEYS"},{"ref":"_RATING_FHIS_KEYS"}]},
                    name: {"in":"query","name":"name","dataType":"string"},
                    address: {"in":"query","name":"address","dataType":"string"},
                    longitude: {"in":"query","name":"longitude","dataType":"string"},
                    latitude: {"in":"query","name":"latitude","dataType":"string"},
                    maxDistanceLimit: {"in":"query","name":"maxDistanceLimit","dataType":"string"},
                    businessTypeId: {"in":"query","name":"businessTypeId","dataType":"string"},
                    localAuthorityId: {"in":"query","name":"localAuthorityId","dataType":"string"},
                    countryId: {"in":"query","name":"countryId","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new EstablishmentController();


            const promise = controller.getEstablishmentsDetail.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/foodalerts/id',

            function FoodAlertController_getListAlerts(request: any, response: any, next: any) {
            const args = {
                    _limit: {"in":"query","name":"_limit","dataType":"string"},
                    _view: {"in":"query","name":"_view","ref":"_VIEW"},
                    since: {"in":"query","name":"since","dataType":"string"},
                    search: {"in":"query","name":"search","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new FoodAlertController();


            const promise = controller.getListAlerts.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/foodalerts/id/:id',

            function FoodAlertController_getIndividualAlert(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new FoodAlertController();


            const promise = controller.getIndividualAlert.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/foodalerts/def/allergens',

            function FoodAlertController_getListCodeAllergens(request: any, response: any, next: any) {
            const args = {
                    _sort: {"in":"query","name":"_sort","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new FoodAlertController();


            const promise = controller.getListCodeAllergens.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/foodalerts/def/pathogen-risk',

            function FoodAlertController_getListCodePathogenRisk(request: any, response: any, next: any) {
            const args = {
                    _sort: {"in":"query","name":"_sort","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new FoodAlertController();


            const promise = controller.getListCodePathogenRisk.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/foodalerts/def/hazards',

            function FoodAlertController_getListHazardsCatagories(request: any, response: any, next: any) {
            const args = {
                    _sort: {"in":"query","name":"_sort","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new FoodAlertController();


            const promise = controller.getListHazardsCatagories.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/foodalerts/def/reasons',

            function FoodAlertController_getListReasonsAlert(request: any, response: any, next: any) {
            const args = {
                    _sort: {"in":"query","name":"_sort","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new FoodAlertController();


            const promise = controller.getListReasonsAlert.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/ratings',

            function RatingController_getRating(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new RatingController();


            const promise = controller.getRating.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/ratingoperators',

            function RatingOperatorController_getRatingOperators(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new RatingOperatorController();


            const promise = controller.getRatingOperators.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/regions/:pageNumber/:pageSize',

            function RegionController_getRegionDetailPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new RegionController();


            const promise = controller.getRegionDetailPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/regions/basic/:pageNumber/:pageSize',

            function RegionController_getRegionDetailBasicPagination(request: any, response: any, next: any) {
            const args = {
                    pageNumber: {"in":"path","name":"pageNumber","required":true,"dataType":"string"},
                    pageSize: {"in":"path","name":"pageSize","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new RegionController();


            const promise = controller.getRegionDetailBasicPagination.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/regions/basic',

            function RegionController_getRegionDetailBasic(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new RegionController();


            const promise = controller.getRegionDetailBasic.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/regions',

            function RegionController_getRegionDetail(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new RegionController();


            const promise = controller.getRegionDetail.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/regions/:id',

            function RegionController_getRegionDetailById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new RegionController();


            const promise = controller.getRegionDetailById.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/schemetypes',

            function SchemeTypesController_getSchemeTypes(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new SchemeTypesController();


            const promise = controller.getSchemeTypes.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/scoredescriptors',

            function ScoreDescriptorController_getScoreDescriptor(request: any, response: any, next: any) {
            const args = {
                    establishmentId: {"in":"query","name":"establishmentId","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ScoreDescriptorController();


            const promise = controller.getScoreDescriptor.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/sortoptions',

            function SortOptionsController_getSchemeTypes(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new SortOptionsController();


            const promise = controller.getSchemeTypes.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
