import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import injectSheet from 'react-jss'
import {compose} from 'recompose'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import * as ROUTES from 'constants/routes'
import GridList from 'components/GridList'
import Container from 'components/Container'
import ApplicantCreateDialog from './PerformerCreateDialog'
import PerformerDetails from './PerformerDetails'
import ConfirmDialog from 'components/ConfirmDialog'
import ToolTip from 'components/Utils/ToolTip'
import SubMenu from 'components/SubMenu'
import sprintf from 'sprintf'
import t from 'helpers/translate'
import defaultPropTypes from 'constants/propTypes'
import dateFormat from 'helpers/dateFormat'
import {replaceUrl} from 'helpers/changeUrl'
// .import {APPLICANT_STATUS} from '../../../constants/backendConstants'
import IconButton from 'material-ui/IconButton'
import EditIcon from 'material-ui/svg-icons/content/create'
import PerformerFilterForm from './PerformerFilterForm'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import numberFormat from 'helpers/numberFormat'

const data = [
  {
    id: '1',
    fullName: 'Shokir Shomullaev',
    city: 'Tashkent',
    district: 'Yunusobod',
    balance: '100 000'
  },
  {
    id: '2',
    fullName: 'Mahmud Mulloev',
    city: 'Tashkent',
    district: 'Chilonzor',
    balance: '20 000'
  }
]
const listHeader = [
  {
    sorting: false,
    name: 'name',
    title: 'ФИО',
    xs: 3
  },
  {
    sorting: false,
    name: 'resume_num',
    title: t('Город'),
    xs: 2
  },
  {
    sorting: false,
    name: 'modified_date',
    title: t('Район'),
    xs: 3
  },
  {
    sorting: false,
    name: 'created_date',
    title: t('Дата создания'),
    xs: 2
  },
  {
    sorting: false,
    name: 'balance',
    title: t('Балансе'),
    xs: 2
  }
]

const enhance = compose(
  injectSheet({
    wrapper: {
      height: 'calc(100% + 28px)'
    },
    addButton: {
      '& svg': {
        width: '14px !important',
        height: '14px !important'
      }
    },
    rightPanel: {
      background: '#fff',
      flexBasis: '100%',
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    iconBtn: {
      display: 'flex',
      justifyContent: 'flex-end',
      transition: 'all 200ms ease-out'
    },
    listRow: {
      margin: '0 -30px !important',
      width: 'auto !important',
      padding: '0 30px',
      '& > div': {
        overflow: 'hidden',
        wordBreak: 'normal',
        textOverflow: 'ellipsis',
        '&:last-child': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }

      }
    },
    link: {
      cursor: 'pointer',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '1'
    },
    addButtonWrapper: {
      position: 'absolute',
      top: '10px',
      right: '0',
      marginBottom: '0px'
    }

  })
)

const PerformerGridList = enhance((props) => {
  const {
    filter,
    createDialog,
    updateDialog,
    confirmDialog,
    listData,
    detailData,
    filterDialog,
    classes
  } = props

  const actionButtons = (id) => {
    return (
      <div className={classes.actionButtons}>
        <ToolTip position="bottom" text={t('Изменить')}>
          <IconButton
            disableTouchRipple={true}
            touch={true}
            onClick={() => { updateDialog.handleOpenUpdateDialog(id) }}>
            <EditIcon />
          </IconButton>
        </ToolTip>
        <ToolTip position="bottom" text={t('Удалить')}>
          <IconButton
            disableTouchRipple={true}
            onClick={() => { confirmDialog.handleOpenConfirmDialog(id) }}
            touch={true}>
            <EditIcon />
          </IconButton>
        </ToolTip>
      </div>
    )
  }

  const detail = (
    <PerformerDetails
      initialValues={updateDialog.initialValues}
      filter={filter}
      onUpdateOpen={updateDialog.onOpen}
      onDeleteOpen={confirmDialog.onOpen}
      key={_.get(detailData, 'id')}
      updateLoading={_.get(updateDialog, 'loading')}
      handleSubmitUpdateDialog={updateDialog.onSubmit}
      data={_.get(detailData, 'data') || _.get(data, '0')}
      loading={_.get(detailData, 'detailLoading')}
      actionButtons={actionButtons}
    />
  )

  const applicantFilterDialog = (
    <PerformerFilterForm
      filter={filter}
      filterDialog={filterDialog}
      initialValues={filterDialog.initialValues}
    />
  )

  const applicantList = _.map(listData.data, (item, index) => {
    const id = _.toNumber(_.get(item, 'id'))
    //    Const status = fp.flow(findItem, fp.get('name'))
    const fullName = _.get(item, 'fullName')
    const city = _.get(item, 'city')
    const district = _.get(item, 'livingPlace.name')
    const createdDate = dateFormat(_.get(item, 'createdDate'))
    const balance = numberFormat(_.get(item, 'balance'))
    return (
      <Row key={id} className={classes.listRow}>
        <div
          onClick={() => replaceUrl(filter, sprintf(ROUTES.APPLICANT_ITEM_PATH, id), {})}
          className={classes.link}/>
        <Col xs={3}>{fullName}</Col>
        <Col xs={2}>{city}</Col>
        <Col xs={3}>{district}</Col>
        <Col xs={2}>{createdDate}</Col>
        <Col xs={2}>{balance}</Col>
      </Row>
    )
  })

  const list = {
    header: listHeader,
    list: applicantList,
    loading: listData.listLoading
  }

  const addButton = (
    <div className={classes.addButtonWrapper}>
      <FlatButton
        backgroundColor="#fff"
        labelStyle={{textTransform: 'none', paddingLeft: '2px', color: '#12aaeb'}}
        className={classes.addButton}
        label={t('добавить соискателя')}
        onClick={createDialog.onOpen}
        icon={<ContentAdd color="#12aaeb"/>}>
      </FlatButton>
    </div>
  )

  const currentDetail = _.find(_.get(listData, 'data'), {'id': _.toInteger(_.get(detailData, 'id'))})
  const currentName = `${_.get(currentDetail, 'firstName')} ${_.get(currentDetail, 'lastName')}`
  return (
    <Container>
      <div className={classes.wrapper}>
        <SubMenu url={ROUTES.APPLICANT_LIST_URL}/>
        <div className={classes.addButtonWrapper}>
          <ToolTip position="left" text={'добавить соискателя'}>
            <FloatingActionButton
              mini={true}
              zDepth={1}
              backgroundColor="#12aaeb"
              onClick={createDialog.onOpen}>
              <ContentAdd/>
            </FloatingActionButton>
          </ToolTip>
        </div>
        <GridList
          filter={filter}
          filterDialog={applicantFilterDialog}
          list={list}
          detail={detail}
          addButton={addButton}
        />
      </div>

      {createDialog.open &&
      <ApplicantCreateDialog
        onOpenMailDialog={confirmDialog.handleOpenConfirmDialog}
        detailData={_.get(detailData, 'data')}
        initialValues={{...updateDialog.initialValues, phoneNumber: '+998'}}
        open={createDialog.open}
        loading={createDialog.loading}
        onClose={createDialog.onClose}
        onSubmit={createDialog.onSubmit}
        errorData={createDialog.errorData}
      />}

      {updateDialog.open &&
      <ApplicantCreateDialog
        detailData={_.get(detailData, 'data')}
        initialValues={updateDialog.initialValues}
        isUpdate={true}
        open={updateDialog.open}
        loading={updateDialog.loading}
        onClose={updateDialog.onClose}
        onSubmit={updateDialog.onSubmit}
        errorData={updateDialog.errorData}
      />}

      {detailData.data && <ConfirmDialog
        type="delete"
        message={currentName}
        loading={confirmDialog.confirmLoading}
        onClose={confirmDialog.onClose}
        onSubmit={confirmDialog.onSubmit}
        open={confirmDialog.open}
      />}
    </Container>
  )
})

PerformerGridList.propTypes = {
  filter: PropTypes.object.isRequired,
  listData: PropTypes.object,
  detailData: PropTypes.object,
  createDialog: PropTypes.shape({
    ...defaultPropTypes
  }).isRequired,
  confirmDialog: PropTypes.shape({
    ...defaultPropTypes
  }).isRequired,
  updateDialog: PropTypes.shape({
    updateLoading: PropTypes.bool.isRequired,
    ...defaultPropTypes
  }).isRequired,
  filterDialog: PropTypes.shape({
    initialValues: PropTypes.object,
    ...defaultPropTypes
  }).isRequired
}

export default PerformerGridList
