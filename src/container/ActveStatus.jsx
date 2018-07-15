import { connect } from 'react-redux'
import Link from '../components/Link'
import { setStatus } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.statusFilter === ownProps.filter,
    children: ownProps.children
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setStatus(ownProps.filter))
    }
  }
}

const ActveStatus = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
export default ActveStatus