import _ from 'lodash'
import sprintf from 'sprintf'
import axios from '../../../helpers/axios'
import * as API from '../../../constants/api'
import * as actionTypes from '../../../constants/actionTypes'
import * as serializers from './reestrSerializer'

export const articlesCreateAction = (formValues) => {
  const requestData = serializers.createSerializer(formValues)
  const payload = axios()
    .post(API.REGIONS_CREATE, requestData)
    .then((response) => {
      return _.get(response, 'data')
    })
    .catch((error) => {
      return Promise.reject(_.get(error, ['response', 'data']))
    })

  return {
    type: actionTypes.REGIONS_CREATE,
    payload
  }
}

export const articlesDeleteAction = (id) => {
  const payload = axios()
    .delete(sprintf(API.REGIONS_DELETE, id))
    .then((response) => {
      return _.get(response, 'data')
    })
    .catch((error) => {
      return Promise.reject(_.get(error, ['response', 'data']))
    })

  return {
    type: actionTypes.REGIONS_DELETE,
    payload
  }
}

export const articlesUpdateAction = (id, formValues) => {
  const requestData = serializers.createSerializer(formValues)
  const payload = axios()
    .put(sprintf(API.REGIONS_ITEM, id), requestData)
    .then((response) => {
      return _.get(response, 'data')
    })
    .catch((error) => {
      return Promise.reject(_.get(error, ['response', 'data']))
    })

  return {
    type: actionTypes.REGIONS_UPDATE,
    payload
  }
}

export const articlesListFetchAction = (filter) => {
  const params = serializers.listFilterSerializer(filter.getParams())
  const payload = axios()
    .get(API.REGIONS_LIST, {params})
    .then((response) => {
      return _.get(response, 'data')
    })
    .catch((error) => {
      return Promise.reject(_.get(error, ['response', 'data']))
    })

  return {
    type: actionTypes.REGIONS_LIST,
    payload
  }
}

export const articlesItemFetchAction = (id) => {
  const payload = axios()
    .get(sprintf(API.REGIONS_ITEM, id))
    .then((response) => {
      return _.get(response, 'data')
    })
    .catch((error) => {
      return Promise.reject(_.get(error, ['response', 'data']))
    })

  return {
    type: actionTypes.REGIONS_ITEM,
    payload
  }
}
