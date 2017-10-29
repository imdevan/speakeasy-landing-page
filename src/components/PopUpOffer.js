import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as mailchimpActions from '../actions/mailchimpActions';
import project from '../config/project';
import PopUpButton from './PopUpButton';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

class PopUpOffer extends Component {
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.object,
    reference : PropTypes.string,
    funnel: PropTypes.string
  };

  static defaultProps = {
    label: 'Free during beta',
    className: '',
    reference: 'website',
    funnel: 'unkown'
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: { value: '' },
      name: { value: '' }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(e, field) {
    console.log(e);

    this.setState({
      [field]: {
        value: e.target.value
      }
    });
  }

  handleSubmit(e) {
    const {history, mailchimp_actions, reference, funnel} = this.props;
    const {email} = this.state;

    e.preventDefault();
    mailchimp_actions.requestAddMailchimpSubscriber(email.value, name.value, reference, funnel)
    history.push('/thanks')
  }

  render() {
    const { className, label } = this.props;
    const {history, mailchimp_actions, reference, funnel} = this.props;

    return <PopUpButton
      id='pricing-page'
      label={label}
      linkClassName={`font-title c-cta c-pointer h3 ${className}`}
      sm={12} md={6}>
      <div className='text-left'>
        <Row>
          <Col sm={12}>
            <h2 className='font-title'
              dangerouslySetInnerHTML={{ __html: project.prereleaseOffer.title }} />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p>
              {project.prereleaseOffer.description}
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <form className='font-rubik' onSubmit={this.handleSubmit}>

              <FormGroup
                controlId='formBasicText' className='mb-4' >
              <ControlLabel>Name</ControlLabel> 
                < FormControl
                  type = 'text'
                  value = {
                    this.state.name.value
                  }
                  placeholder = 'Elon'
                  className = 'font-rubik rounded-0 c-border mb-3'
                  onChange = {
                    e => this.handleChange(e, 'name')
                  } />
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type='email'
                  value={this.state.email.value}
                  placeholder='musk@tesla.com'
                  className = 'font-rubik rounded-0 c-border'
                  onChange = {
                    e => this.handleChange(e, 'email')
                  } />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup>
                <button type="submit"
                  className="c-cta font-title w-100 c-pointer">
                  Let's do this
                </button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </div>
    </PopUpButton>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    mailchimp_actions: bindActionCreators(mailchimpActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(withRouter(PopUpOffer));
