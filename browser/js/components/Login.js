import React from 'react';
import {connect} from 'react-redux';
import {login} from '../redux'
import history from '../history'

/* -----------------    COMPONENT     ------------------ */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render () {
    const {message} = this.props;
    const {email, password} = this.state;
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={email}
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={password}
                onChange={this.onInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{message}</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  onInputChange (event) {
    const {value, name} = event.target
    this.setState({[ name ]: value})
  }

  onLoginSubmit (event) {
    event.preventDefault()
    const {dispatch} = this.props
    const {email, password} = this.state
    dispatch(login({email, password}))
      .then(user => history.push(`/users/${user.id}`))
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({message: 'Log in'});
const mapDispatch = null
//   dispatch => {
//   return {
//     onLoginSubmit: (event) => {
//       event.preventDefault()
//       dispatch(login({
//         email: event.target.email.value
//         password: event.target.password.value
//       }))
//     }
//   }
// }
export default connect(mapState, mapDispatch)(Login);
