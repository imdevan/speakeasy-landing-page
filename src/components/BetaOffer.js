import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as uiActions from '../actions/uiActions';
import project from '../config/project';
import PopUpButton from './PopUpButton';
import PropTypes from 'prop-types';

import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

class BetaOffer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: {
        value: ''
      },
      name: {
        value: ''
      }
    };
  }
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    label: 'Free during beta',
    className: '',
  };

  render() {
    const { className, label } = this.props;

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
            <form className='font-rubik'>
              <FormGroup
                controlId='formBasicText'>
                <ControlLabel>First name</ControlLabel>
                <FormControl
                  type='text'
                  value={this.state.name.value}
                  placeholder='Elon'
                  className='mb-3 font-rubik rounded-0 c-border'
                /* onChange={this.handleChange} */
                />
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type='email'
                  value={this.state.email.value}
                  placeholder='musk@tesla.com'
                  className='font-rubik rounded-0 c-border'
                /* onChange={this.handleChange} */
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup>
                <button type="submit"
                  className="c-cta font-title w-100 c-pointer">
                  Thanks, let me know 🙏
                </button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </div>
    </PopUpButton>
  }
}

export default BetaOffer;