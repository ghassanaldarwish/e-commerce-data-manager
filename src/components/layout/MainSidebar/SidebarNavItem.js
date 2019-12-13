import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import { Button,Modal,ModalFooter,ModalHeader,ModalBody } from 'reactstrap';

class SidebarNavItem extends React.Component{

state={
  modal:false
}


renderModal=(modal,toggle)=>{
  return(
    <Modal isOpen={modal} toggle={toggle} className='test'>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
      <Button color="secondary" onClick={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
  )
}

  renderNavLink=(item)=>{
    return (
      <NavLink tag={RouteNavLink} to={item.to ?item.to : null}>
        {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
        {item.title && <span>{item.title}</span>}
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </NavLink>
    )
  }

  toggle = () => this.setState({modal:!this.state.modal});
  renderNavModelButton=(item)=>{
    const {modal} = this.state
    return (
      <div  className='nav-link' onClick={this.toggle}>
       {this.renderModal(modal,this.toggle)}
         {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
         {item.title && <span>{item.title}</span>}
         {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </div>
    )

  }

  renderNavItems=(item)=>{
    if(!item.button && !item.model){
      return this.renderNavLink(item)
     
    }else{
      return this.renderNavModelButton(item)
    }
   
    }


  render(){
    const {item}= this.props
    return(
      <NavItem>
     
          {this.renderNavItems(item)}
         
      
      </NavItem>
    );
  }




  
}
 

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
