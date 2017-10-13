import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Band from './Band';
import clickOutside from 'react-click-outside';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '../actions/uiActions';

class PopUp extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.popUpClicked = this.popUpClicked.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }
  closePopUp() {
    const { ui_actions, id } = this.props;

    if(!id) return
    else
      ui_actions.showPopUp(false, id)
  }
  popUpClicked(e) {
    e.stopPropagation();
  }

  render() {
    const { children, sm, md } = this.props;
    const popUpContainerClass = 'fixed-top w-100 h-100 z-2 c-bg-shadow d-flex align-items-center';
    const popUpBodyClass = 'c-bg-white p-4 z-max c-shadow-lg rounded';

    return (
      <div className={`${popUpContainerClass}`} onClick={this.closePopUp}>
        <Band sm={sm} md={md} size={0} >
          <ReactCSSTransitionGroup
            transitionName='fade-in-from-right'
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionLeaveTimeout={300}
            transitionEnter={false}>
            <div className={popUpBodyClass} onClick={this.popUpClicked}>
                {children}
            </div>
          </ReactCSSTransitionGroup>
        </Band>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ui_actions: bindActionCreators(uiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  clickOutside(PopUp)
);
