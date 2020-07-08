import React from 'react'
import { withRouter } from 'react-router-dom'
import GroupForm from '../../containers/GroupForm'
import CommonCard from '../CommonCard'

const GroupCard = ({
  id,
  title,
  url,
  complitedCount,
  progressCount,
  history,
  deleteGroupItem,
  setActiveGroup,
  isEditPage,
}) => {
  const itemData = { id, title }

  const pageRoutingHandler = (url) => {
    history.push(url)
    setActiveGroup({ id, url, title })
  }

  const EditDialog = (props) => (
    <GroupForm type="edit" itemData={itemData} {...props} />
  )

  return (
    <CommonCard
      type="group"
      id={id}
      title={title}
      firsCount={complitedCount}
      secondCount={progressCount}
      isEditPage={isEditPage}
      EditDialog={EditDialog}
      deleteItem={deleteGroupItem}
      onHandleClick={() => pageRoutingHandler(url)}
    />
  )
}

export default withRouter(GroupCard)
