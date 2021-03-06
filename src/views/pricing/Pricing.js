import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';

import { 
  Grid, 
  Row, 
  Col
} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from '../../config/lightTheme';
import project from '../../config/project';

import ReactMarkdown from 'react-markdown';

import page from './PricingContent';
import Band from '../../components/Band';
import HalfBG from '../../components/HalfBG';
import PopUpOffer from '../../components/PopUpOffer';
import Footer from '../../components/Footer';
import PopUpButton from '../../components/PopUpButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import scrollToTop from '../../utils/scrollToTop';

import TextField from 'material-ui/TextField';
import Confetti from 'react-confetti'

// import TextInput from './form/TextInput';
class PricingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      content: {},
    };
    
    this.renderPricing = this.renderPricing.bind(this);
    this.renderIntegrations = this.renderIntegrations.bind(this);
    this.renderFeatures = this.renderFeatures.bind(this);
    this.renderMarketSell = this.renderMarketSell.bind(this);
  }

  componentDidMount() {
    scrollToTop();
  }

  
  renderPricing() {
    const {pricing, offer} = page;
    if(pricing)
      return (
        <div className='c-shadow-lg c-bg-fff'>
        <Row className='flex-column flex-md-row'>
          {pricing.map((price, i) => (
            <Col key={i} sm={12} md={12/pricing.length}>
              <div className='p-4 d-flex flex-column align-items-center justify-content-start h-100'>
                <h3 className='font-title'>
                  {price.type}
                </h3>
                <div className='d-flex flex-column  align-items-center justify-content-between h-100'>
                <p>
                  {price.price} / {price.symbol}
                </p>
                {price.upsell && (
                  <p className='text-muted'>
                    {price.upsell}
                  </p>
                )}
                {price.cta && (
                  <PopUpOffer {...offer} />
                )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
        </div>
      )
    else
      return null
  }
  renderFeatures() {
    const { features } = page;
    if (features)
      return (
        <div className=''>
          <Row className='flex-column flex-md-row'>
            {features.map((feature, i) => (
              <Col key={i} sm={12} md={6} className='text-center'>
                <div className='p-4 h-100'>
                  <h3 className='font-title font-weight-bold'>
                    {feature.value}
                  </h3>
                  <p dangerouslySetInnerHTML={{
                    __html: feature.description
                  }} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )
    else
      return null
  }
  renderIntegrations() {
    const { integrations } = page;
    if (integrations)
      return integrations.map((integration, i) => (
        <Row key={i} className={`flex-column flex-md-row ${i < integrations.length - 1 ? 'mb-5 mb-md-5' : ''}`}>
          <Col sm={3} md={3}>
            <div className='w-100 d-flex justify-md-content-center align-items-center justify-content-start mb-5 mb-md-0'>
              <img style={{width: 150}} src={integration.image} />
            </div>
          </Col>
          <Col sm={12} md={9}>
            <div className='pr-md-4 h-100'>
              <h3 className='font-weight-bold'>
                {integration.title}
              </h3>
              <p dangerouslySetInnerHTML={{
                __html: integration.description
              }} />
            </div>
          </Col>
        </Row>
      ))
    else
      return null
  }
  renderMarketSell() {
    const { market } = page;
    if (market)
      return (
        <Row className=''>
          <Col sm={12} md={3}>
            <h2 className='font-title mb-4 mb-md-0 '>
              {market.title}
            </h2>
          </Col>
          <Col sm={12} md={9}>
            <Row className='flex-column flex-md-row'>
              {market.list.map((demographic, i) => (
                <Col key={i} sm={12} md={6}>
                  <Row className='h-100'>
                    <Col sm={12} md={2}>
                      <div className='w-100 d-flex justify-md-content-center align-items-center justify-content-start'>
                        <h3>
                          {demographic.icon}
                        </h3>
                      </div>
                    </Col>
                    <Col sm={12} md={10}>
                      <h3 className='font-weight-bold'>
                        {demographic.title}
                      </h3>
                      <p dangerouslySetInnerHTML={{
                        __html: demographic.description
                      }} />
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )
    else
      return null
  }

  render(){
    const {offer} = page;
    return <MuiThemeProvider muiTheme={getMuiTheme(lightTheme)} >
      <div>
        
    <ReactCSSTransitionGroup
      transitionName='fade-in-from-right'
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionLeaveTimeout={300}
      transitionEnter={false}>
        <Band className='text-center' size={3}>
            <h3 className='font-title'
              dangerouslySetInnerHTML={{ __html: page.title }} />
        </Band>
        <HalfBG>
          <Band className='' sm={8} size={3}>
            {this.renderPricing()}
          </Band>
        </HalfBG>
        <Band className='c-bg-light-gray'>
            {this.renderFeatures()}
        </Band>
        <Band className=''>
            {this.renderIntegrations()}
        </Band>
        <Band className='c-bg-light-gray'>
          {this.renderMarketSell()}
        </Band>
        <Band className='text-center'>
          <PopUpOffer {...offer} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PricingPage);
