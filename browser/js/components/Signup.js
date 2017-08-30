import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../redux'
import history from '../history'

/* -----------------    COMPONENT     ------------------ */

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render () {
    const {message} = this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onSignupSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
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

  onSignupSubmit (event) {
    event.preventDefault();
    const {dispatch} = this.props
    const {email, password} = this.state
    dispatch(addUser({email, password}))
      .then(newUser => {
        console.log(newUser)
        history.push(`/users/${newUser.id}`)
      })
      .catch(console.error.bind(console))
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = () => ({message: 'Sign up'});
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Signup);
