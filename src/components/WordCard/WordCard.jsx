import React from 'react'
import WordForm from '../../containers/WordForm'
import CommonCard from '../CommonCard'

const WordCard = ({
  id,
  groupId,
  word,
  translate,
  imageUrl,
  inContextOriginal,
  inContextTranslate,
  status,
  countCycle,
  countRepeat,
  dateToContinue,
  deleteWordItem,
  isEditPage,
}) => {
  const itemData = {
    id,
    groupId,
    word,
    translate,
    imageUrl,
    inContextOriginal,
    inContextTranslate,
    status,
    countCycle,
    countRepeat,
    dateToContinue,
  }

  const EditDialog = (props) => (
    <WordForm type="edit" itemData={itemData} {...props} />
  )

  return (
    <CommonCard
      type="word"
      id={id}
      title={word}
      firsCount={countCycle}
      secondCount={countRepeat}
      isEditPage={isEditPage}
      EditDialog={EditDialog}
      deleteItem={deleteWordItem}
      onHandleClick={() => {}}
    />
  )
}

export default WordCard
