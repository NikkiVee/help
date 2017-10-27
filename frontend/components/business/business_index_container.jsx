import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    business: Object.values(state.business),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: ()=> dispatch(logout())

  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);