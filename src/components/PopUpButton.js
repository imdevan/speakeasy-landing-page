import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as uiActions from '../actions/uiActions';

import PropTypes from 'prop-types';
import PopUp from './PopUp';
import Svg from './Svg';
// import exitButton from '../assets/svgs/exit.svg';

class PopUpButton extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
    // label: PropTypes.string,
    className: PropTypes.string,
    linkClassName: PropTypes.string,
    title: PropTypes.string,
    titleClassName: PropTypes.string,
    options: PropTypes.array,
    disabled: PropTypes.bool,
    sm: PropTypes.number,
    md: PropTypes.number,
  };

  static defaultProps = {
    open: false,
    onClick: () => { },
    label: '',
    className: 'z-max',
    disabled: false,
    linkClassName: 'link',
    title: '',
    maxWidth: '6',
    description: '',
    titleClassName: '',
    options: [],
    sm: 12,
  };

  constructor(props) {
    super(props);
    this.state = { open: this.props.open };

    this.openPopUp = this.openPopUp.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
  }

  componentWillMount() {
    const { ui_actions, id } = this.props;
    ui_actions.createPopUp(id)
  }

  componentWillUnmount() {
    const {ui_actions, id} = this.props;
    ui_actions.removePopUp(id)
  }

  handleClickOutside() {
    this.hidePopUp();
  }

  handleClick = (e) => {
    const { ui_actions, id, onClick } = this.props;
    e.preventDefault();
    // ui_actions.showPopUp(popUp.open, id)
    onClick();
  };

  openPopUp() {
    const { ui_actions, id } = this.props;
    ui_actions.showPopUp(true, id)
  }

  hidePopUp() {
    const { ui_actions, id, popUp } = this.props;
    ui_actions.showPopUp(false, id)
  }

  render() {
    const { className, linkClassName, children, label, title,
      titleClassName, description, disabled, maxWidth, ui, id, sm, md } = this.props;
    const open = ui.popUp[id] && ui.popUp[id].open;

    // if(!open) 
    // console.log(ui)
    // console.log(ui.popUp)
    // console.log(ui.popUp[id])
    // console.log(ui.popUp[id].open)

    return (
      <div className={className}>
        <span className={disabled ? `${linkClassName} disabled` : linkClassName} onClick={disabled ? null : this.openPopUp}>{label}</span>
        {(open === true) && <PopUp sm={sm} md={md} id={id}>
          <div className={`mx-auto w-90 mw${maxWidth} pa3 bg-white br3 shadow-lg`}>
            <h1 className={`mx-auto text-center ${titleClassName}`}>
              {title}
            </h1>
            <p className="text-left">
              {description}
            </p>
            <div className='container'>
              {children}
            </div>
          </div>
        </PopUp>}
        {/*
        {(open === true) && <PopUp className={className} >
          {children}
        </PopUp>} */}
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    ui: state.ui,
    uniqueId: ownProps.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ui_actions: bindActionCreators(uiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUpButton);
