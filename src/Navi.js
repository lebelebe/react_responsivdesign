import logo from './pullogo.png'
import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"
import './Navi.css'

class Navi extends Component{

    constructor(prop){
        super(prop)
        this.state = {
            naviState: false,
        }
    }

    toggle = () => {
        this.setState(
            {
                naviState: !this.state.naviState
            }
        )
    }

    render(){
        return(
            <div className='container'>
                <Navbar>
                    <NavbarBrand tag='h1'>
                        <a href='/'>
                            <img src={logo} style={{height:50}} />
                        </a>
                    </NavbarBrand>
                    <button data-state={this.state.naviState} onClick={ this.toggle } id='navToggler' className='navbar-toggler d-block d-md-none'></button>
                    <Nav data-open={ this.state.naviState} className='d-none d-md-flex' id='gnb'>
                        <NavItem>
                            <NavLink href='#homepage'>
                                홈페이지
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#event'>
                                이벤트
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#sns'>
                                SNS
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
            
        )
    }
}

export default Navi;