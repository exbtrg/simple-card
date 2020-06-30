import { v4 as uuidv4 } from 'uuid'

const createNewWord = (
  groupId,
  { word, translate, imageUrl, inContextOriginal, inContextTranslate }
) => ({
  id: uuidv4(),
  groupId: groupId,
  word: word,
  translate: translate,
  imageUrl: imageUrl,
  inContextOriginal: inContextOriginal,
  inContextTranslate: inContextTranslate,
  status: 'progress',
  countCycle: 0,
  countRepeat: 0,
  dateToContinue: null,
})

export default createNewWord
