import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import styles from './_Footer.scss'
import bg from './images/bg1.png'

import ig from './images/social/instagram.png'
import fb from './images/social/facebook.png'
import uu from './images/social/youtube.png'

import {
  DO_LOGOUT,
} from '../../constants/AppConstants'

import { connect } from 'react-redux'

class Footer extends React.Component {

  constructor(props) {
    super(props)
  }

  logout = () => {
    this.props.dispatch({ type: DO_LOGOUT })
  }

  render () {
    return (
      <div className={styles.footer1} style={{ backgroundImage: `url(${bg})` }} >
        <Grid style={{ height: '200px' }} >
          <Row>
            <Col xs={4} >
              ^__^
            </Col>
            <Col xs={4}>
              <ul className={styles.socialMediaIcons}>
                <li><img src={ig} /></li>
                <li><img src={fb} /></li>
                <li><img src={uu} /></li>
              </ul>
            </Col>
            <Col xs={4}>
              2017 &copy; wasya_co
            </Col>
          </Row>
          <Row>
            <Col xs={4} >
              { /* apiUrl: {this.props.apiUrl} */ }
            </Col>
            <Col xs={4}>
              <button onClick={this.logout} >Logout</button>
            </Col>
            <Col xs={4}>
              ;
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(Footer)

      
      
