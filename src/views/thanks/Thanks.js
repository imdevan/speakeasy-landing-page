import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';

import { Grid, Row, Col } from 'react-bootstrap';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from '../../config/lightTheme';

import ReactMarkdown from 'react-markdown';
import headerImage from '../../assets/images/logos/studio-microphone.png';

import thanksContent from './ThanksContent';
import Footer from '../../components/Footer';
import BetaOffer from '../../components/BetaOffer';
import Band from '../../components/Band';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import scrollToTop from '../../utils/scrollToTop';
import Confetti from 'react-confetti'

class AboutPage extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.displayConfetti = this.displayConfetti.bind(this);
  }
  componentDidMount() {
    scrollToTop();
  }

  displayConfetti() {
    if (true) {
      return (
        <div id="mailingConfetti" style={{
          position: 'fixed',
          top: '-10px',
          left: '0px',
          width: '100%',
          height: '100%',
          zIndex: '-1',
          border: 'none'
        }}>
          <Confetti
            numberOfPieces={100}
            gravity={.04}
            opacity={.5} />
        </div>
      )
    } else {
      return null
    }
  }
  render(){
    return <MuiThemeProvider muiTheme={getMuiTheme(lightTheme)} >
      <div>
        {this.displayConfetti()}
        
    <ReactCSSTransitionGroup
      transitionName='fade-in-from-right'
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionLeaveTimeout={300}
      transitionEnter={false}>
        <Band sm={8} md={4}>
          <div className='p-4 c-bg-fff c-shadow-lg'>
            <h1 className='font-title mb-5'>
                {thanksContent.title}
            </h1>
            <ReactMarkdown
              className='c-markdown-page mb-5'
              source={thanksContent.description} />
            <Row>
              <Col sm={12} className='text-center'>
                <h3>
                  <a className='c-cta font-title ' 
                    href={thanksContent.cta.link} 
                    target='_blank'
                    dangerouslySetInnerHTML={{ 
                      __html: thanksContent.cta.label 
                      }}
                    />
                </h3>
              </Col>
            </Row>
          </div>
          </Band>
        <Footer />
        </ReactCSSTransitionGroup>
      </div>
    </MuiThemeProvider>
  }
}

function mapStateToProps(state, ownProps){
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch){
  return{
    ui_actions: bindActionCreators(uiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
