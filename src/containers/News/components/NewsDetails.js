import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import * as ROUTES from '../../../constants/routes'
import injectSheet from 'react-jss'
import {compose} from 'recompose'
import LinearProgress from '../../../components/LinearProgress'
import {Link} from 'react-router'
import {langTabValues} from 'constants/backendConstants'
import LabeledValue from 'components/Utils/LabeledValue'
import Tabs from 'components/MaterialUI/Tabs'

import {BORDER_STYLE} from '../../../constants/styleConstants'

const enhance = compose(
  injectSheet({
    // DETAILS
    loader: {
      display: 'flex',
      alignItems: 'center',
      height: '100px',
      position: 'relative',
      width: '100%'
    },
    details: {
      boxShadow: '0 0 6px rgba(0, 0, 0, 0.15)',
      width: '100%'
    },
    detailTitle: {
      alignItems: 'center',
      borderBottom: BORDER_STYLE,
      display: 'flex',
      fontSize: '16px',
      fontWeight: '600',
      height: '65px',
      justifyContent: 'space-between',
      padding: '0 30px',
      position: 'relative'
    },
    closeDetail: {
      cursor: 'pointer',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '1'
    },
    detailContent: {
      lineHeight: '1.5',
      padding: '20px 30px 30px'
    }
  })
)

const NewsDetails = enhance((props) => {
  const {
    filter,
    data,
    loading,
    classes,
    actionButtons
  } = props

  const detailId = _.get(data, 'id')
  const tab = filter.getParam('tab') || 'Ru'
  const title = _.get(data, `title${tab}`) || 'Нет контента...'
  const text = _.get(data, 'text')


  if (loading) {
    return (
      <div className={classes.loader}>
        <LinearProgress/>
      </div>
    )
  }

  return (
    <div
      key={detailId}
      className={classes.details}>
      <div className={classes.content}>
        <div className={classes.detailTitle}>
          <Link to={{
            pathname: ROUTES.ARTICLES_LIST_URL,
            query: filter.getParams()
          }} className={classes.closeDetail}/>
          <span>{_.get(data, 'title')}</span>
          {actionButtons(detailId)}
        </div>
        <div className={classes.detailContent}>
          <Tabs
              filter={filter}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              values={langTabValues}
          />
          <div style={{paddingTop: '30px'}}>
            <LabeledValue label={'Заголовок'} value={title}/>
            <div dangerouslySetInnerHTML={{__html: text}}/>
          </div>
        </div>
      </div>
    </div>
  )
})

NewsDetails.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object
}

export default NewsDetails
