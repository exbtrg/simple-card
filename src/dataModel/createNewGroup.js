import { v4 as uuidv4 } from 'uuid'
import titleToUrl from '../utils/titleToUrl'

const createNewGroup = ({ title, description }) => ({
  id: uuidv4(),
  title: title,
  url: titleToUrl(title),
  description: description,
  complitedCount: 0,
  progressCount: 0,
})

export default createNewGroup
