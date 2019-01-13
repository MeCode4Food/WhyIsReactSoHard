/* global process */
import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory({ basename: process.env.BASE_URL })

const routeTo = ({ path }) => {
  browserHistory.push(path)
}

export default browserHistory
export {
  routeTo
}
