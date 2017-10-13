import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Svg from './Svg';
import menuIcon from '../assets/images/menu.svg'
import closeIcon from '../assets/images/close.svg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import project from '../config/project'

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false, hidden: false};

    // this.hideButton = this.hideButton.bind(this)
  }

  // hideButton(){
  //   let {hide} = this.state

  //   if(window.scrollY > this.prev && !hide) 
  //     this.setState({hide:true})
  //   else if(hide)
  //     this.setState({hide:false})

  //   this.prev = window.scrollY;
  // }
  
  // componentDidMount(){
  //   window.addEventListener('scroll',this.hideButton);
  // }

  // componentWillUnmount(){
  //   window.removeEventListener('scroll',this.hideButton);
  // }

  onClose = () => this.setState({open: false});
  onOpen = () => this.setState({open: true});

  render() {
    const {open} = this.state;
    // const classHide = hide ? 'hide' : '';
    
    const links = [{
        to: '/pricing',
        label: 'Pricing'
      }
    ];

    const Icon = open ? (
      <div
        onClick={this.onClose}
        className='c-top-nav-menu-icon p-3'>
        <Svg
          src={closeIcon}
          size={24} />
      </div>
      ) : (
        <div
          onClick={this.onOpen}
          className='c-top-nav-menu-icon p-3'>
          <Svg
            src={menuIcon}
            size={24} />
      </div>
    );
    // ${/*' fixed-top  c-bg-fff c-shadow-sm'*/ }
  return (
    <div className={` w-100`}>
      <Grid>
        <Row className='pt-4'>
          <Col className='col'>
            <Link
              to={'/'}
              onClick={this.onClose}
              className='font-title '>
              {project.title}
            </Link>
          </Col>
          <Col
            className='text-right col'>
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className={`mb-3 mb-md-0 font-title ${i ? 'ml-md-3' : ''}`}>
                {link.label}
              </Link>
             ))}
          </Col>
        </Row>
      </Grid>
    </div>
  )

    // <div className='c-top-nav-container'>
    //   <div className='py-4' />
    //   <div className={`c-top-nav-menu-icon-container w-100 fixed-top`}>
    //     <Grid>
    //       <Row className='pt-4'>
    //         <Col>
    //           <Link
    //             to={'/'}
    //             onClick={this.onClose}
    //             className='text-white c-link-border-hover'>
    //             {project.title}
    //           </Link>
    //         </Col>
    //       </Row>
    //     </Grid>
    //   </div>
    //     <ReactCSSTransitionGroup
    //       transitionName="fade-in"
    //       transitionEnterTimeout={500}
    //       transitionLeaveTimeout={300}>
    //        {this.state.open && (
    //         <div className='c-top-nav-drawer py-5'>
    //           <div className='c-top-nav-menu py-5 my-5'
    //             data-open={this.state.open}>
    //             {links.map((link, i) => (
    //               <h1
    //                 key={i}
    //                 className='c-top-nav-menu-item'>
    //                 <Link
    //                   to={link.to}
    //                   onClick={this.onClose}
    //                   className='text-white c-link-border-hover'>
    //                   {link.label}
    //                 </Link>
    //               </h1>
    //             ))}
    //         </div>
    //       </div>
    //      )}
    //   </ReactCSSTransitionGroup>
    // </div>);
  }
}
