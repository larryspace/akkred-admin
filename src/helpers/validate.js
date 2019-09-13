import _ from 'lodash'
import toCamelCase from './toCamelCase'
import {SubmissionError} from 'redux-form'

const validate = (data) => {
  const errors = toCamelCase(data)
  const nonFieldErrors = _.get(errors, 'nonFieldErrors')

  throw new SubmissionError({
    ...errors,
    _error: nonFieldErrors
  })
}

export default validate
