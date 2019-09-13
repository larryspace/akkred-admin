import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'
import createThunkReducer from '../helpers/createThunkReducer'
import createStandardReducer from '../helpers/createStandardReducer'
import * as actionTypes from '../constants/actionTypes'
import snackbarReducer from './snackbarReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
  signIn: createThunkReducer(actionTypes.SIGN_IN),
  authConfirm: createThunkReducer(actionTypes.AUTH_CONFIRM),
  spheres: createThunkReducer(actionTypes.SPHERES_LIST),
  config: combineReducers({
    primaryCurrency: createThunkReducer(actionTypes.CONFIG)
  }),
  notifications: combineReducers({
    list: createThunkReducer(actionTypes.NOTIFICATIONS_LIST),
    item: createThunkReducer(actionTypes.NOTIFICATIONS_ITEM),
    update: createThunkReducer(actionTypes.NOTIFICATIONS_UPDATE),
    count: createThunkReducer(actionTypes.NOTIFICATIONS_GET_COUNT)
  }),
  users: combineReducers({
    create: createThunkReducer(actionTypes.USERS_CREATE),
    list: createThunkReducer(actionTypes.USERS_LIST),
    update: createThunkReducer(actionTypes.USERS_UPDATE),
    item: createThunkReducer(actionTypes.USERS_ITEM),
    groupList: createThunkReducer(actionTypes.USERS_GROUP)
  }),
  client: combineReducers({
    create: createThunkReducer(actionTypes.CLIENT_CREATE),
    list: createThunkReducer(actionTypes.CLIENT_LIST),
    listRepetition: createThunkReducer(actionTypes.CLIENT_LIST_REPETITION),
    update: createThunkReducer(actionTypes.CLIENT_UPDATE),
    item: createThunkReducer(actionTypes.CLIENT_ITEM),
    itemRepetition: createThunkReducer(actionTypes.CLIENT_ITEM_REPETITION),
    contacts: createStandardReducer(actionTypes.CLIENT_CONTACTS)
  }),
  role: combineReducers({
    create: createThunkReducer(actionTypes.ROLE_CREATE),
    list: createThunkReducer(actionTypes.ROLE_LIST),
    update: createThunkReducer(actionTypes.ROLE_UPDATE),
    item: createThunkReducer(actionTypes.ROLE_ITEM),
    primary: createThunkReducer(actionTypes.ROLE_PRIMARY),
    primaryUpdate: createThunkReducer(actionTypes.ROLE_PRIMARY_UPDATE),
    permission: createThunkReducer(actionTypes.ROLE_PERMISSION)
  }),
  // HR
  application: combineReducers({
    create: createThunkReducer(actionTypes.HR_APPLICATION_CREATE),
    list: createThunkReducer(actionTypes.HR_APPLICATION_LIST),
    update: createThunkReducer(actionTypes.HR_APPLICATION_UPDATE),
    item: createThunkReducer(actionTypes.HR_APPLICATION_ITEM),
    privilege: createThunkReducer(actionTypes.HR_PRIVILEGE_LIST),
    logs: createThunkReducer(actionTypes.HR_APP_LOGS_LIST),
    calendar: createThunkReducer(actionTypes.HR_CALENDAR_LIST),
    meetingList: createThunkReducer(actionTypes.HR_APP_GET_MEETING_LIST)
  }),
  resume: combineReducers({
    create: createThunkReducer(actionTypes.HR_RESUME_CREATE),
    list: createThunkReducer(actionTypes.HR_RESUME_LIST),
    update: createThunkReducer(actionTypes.HR_RESUME_UPDATE),
    item: createThunkReducer(actionTypes.HR_RESUME_ITEM)
  }),
  longList: combineReducers({
    resumePreview: createThunkReducer(actionTypes.HR_RESUME_PREVIEW_LIST),
    longList: createThunkReducer(actionTypes.HR_LONG_LIST),
    interviewList: createThunkReducer(actionTypes.HR_INTERVIEW_LIST),
    shortList: createThunkReducer(actionTypes.HR_SHORT_LIST),
    reportList: createThunkReducer(actionTypes.HR_REPORT_LIST),
    createComment: createThunkReducer(actionTypes.HR_RESUME_COMMENT_CREATE),
    resumeComments: createThunkReducer(actionTypes.HR_RESUME_COMMENT_LIST),
    questionsList: createThunkReducer(actionTypes.HR_APPLICATION_QUESTIONS_LIST),
    answersList: createThunkReducer(actionTypes.HR_RESUME_ANSWERS_LIST),
    resumeLogs: createThunkReducer(actionTypes.HR_RESUME_ITEM_LOGS),
    appCount: createThunkReducer(actionTypes.HR_APPLICATION_ITEM_STAT),
    feedbackList: createThunkReducer(actionTypes.HR_FEEDBACK_LIST)
  }),
  // HR!

  articles: combineReducers({
    create: createThunkReducer(actionTypes.ARTICLES_CREATE),
    list: createThunkReducer(actionTypes.ARTICLES_LIST),
    update: createThunkReducer(actionTypes.ARTICLES_UPDATE),
    item: createThunkReducer(actionTypes.ARTICLES_ITEM)
  }),
  reestr: combineReducers({
    create: createThunkReducer(actionTypes.REESTR_CREATE),
    list: createThunkReducer(actionTypes.REESTR_LIST),
    update: createThunkReducer(actionTypes.REESTR_UPDATE),
    item: createThunkReducer(actionTypes.REESTR_ITEM)
  }),
  companies: combineReducers({
    create: createThunkReducer(actionTypes.COMPANIES_CREATE),
    list: createThunkReducer(actionTypes.COMPANIES_LIST),
    update: createThunkReducer(actionTypes.COMPANIES_UPDATE),
    item: createThunkReducer(actionTypes.COMPANIES_ITEM)
  }),
  post: combineReducers({
    create: createThunkReducer(actionTypes.POST_CREATE),
    list: createThunkReducer(actionTypes.POST_LIST),
    update: createThunkReducer(actionTypes.POST_UPDATE),
    item: createThunkReducer(actionTypes.POST_ITEM)
  }),
  skills: combineReducers({
    create: createThunkReducer(actionTypes.SKILLS_CREATE),
    list: createThunkReducer(actionTypes.SKILLS_LIST),
    update: createThunkReducer(actionTypes.SKILLS_UPDATE),
    item: createThunkReducer(actionTypes.SKILLS_ITEM)
  }),
  applicant: combineReducers({
    create: createThunkReducer(actionTypes.APPLICANT_CREATE),
    list: createThunkReducer(actionTypes.APPLICANT_LIST),
    update: createThunkReducer(actionTypes.APPLICANT_UPDATE),
    item: createThunkReducer(actionTypes.APPLICANT_ITEM)
  }),
  customer: combineReducers({
    create: createThunkReducer(actionTypes.CUSTOMER_CREATE),
    list: createThunkReducer(actionTypes.CUSTOMER_LIST),
    update: createThunkReducer(actionTypes.CUSTOMER_UPDATE),
    item: createThunkReducer(actionTypes.CUSTOMER_ITEM)
  }),
  order: combineReducers({
    create: createThunkReducer(actionTypes.ORDER_CREATE),
    list: createThunkReducer(actionTypes.ORDER_LIST),
    update: createThunkReducer(actionTypes.ORDER_UPDATE),
    item: createThunkReducer(actionTypes.ORDER_ITEM)
  }),
  plan: combineReducers({
    create: createThunkReducer(actionTypes.PLAN_CREATE),
    list: createThunkReducer(actionTypes.PLAN_LIST),
    update: createThunkReducer(actionTypes.PLAN_UPDATE),
    item: createThunkReducer(actionTypes.PLAN_ITEM)
  }),
  jobSearch: combineReducers({
    create: createThunkReducer(actionTypes.JOB_SEARCH_CREATE),
    list: createThunkReducer(actionTypes.JOB_SEARCH_LIST),
    update: createThunkReducer(actionTypes.JOB_SEARCH_UPDATE),
    item: createThunkReducer(actionTypes.JOB_SEARCH_ITEM)
  }),
  project: combineReducers({
    create: createThunkReducer(actionTypes.PROJECT_CREATE),
    list: createThunkReducer(actionTypes.PROJECT_LIST),
    update: createThunkReducer(actionTypes.PROJECT_UPDATE),
    item: createThunkReducer(actionTypes.PROJECT_ITEM)
  }),
  service: combineReducers({
    create: createThunkReducer(actionTypes.SERVICE_CREATE),
    list: createThunkReducer(actionTypes.SERVICE_LIST),
    update: createThunkReducer(actionTypes.SERVICE_UPDATE),
    item: createThunkReducer(actionTypes.SERVICE_ITEM)
  }),
  task: combineReducers({
    create: createThunkReducer(actionTypes.TASK_CREATE),
    list: createThunkReducer(actionTypes.TASK_LIST),
    update: createThunkReducer(actionTypes.TASK_UPDATE),
    item: createThunkReducer(actionTypes.TASK_ITEM)
  }),
  comment: combineReducers({
    create: createThunkReducer(actionTypes.COMMENT_CREATE),
    list: createThunkReducer(actionTypes.COMMENT_LIST),
    update: createThunkReducer(actionTypes.COMMENT_UPDATE),
    item: createThunkReducer(actionTypes.COMMENT_ITEM)
  }),
  snackbar: snackbarReducer(),
  error: errorReducer(),
  form: formReducer,
  routing: routerReducer
})

export default rootReducer
