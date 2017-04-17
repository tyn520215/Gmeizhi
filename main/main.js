/**
 * Created by Administrator on 2017/2/27.
 */
import React, { Component } from 'react';
import { render } from 'react-dom'
import '../css/index.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from '../main/About.js'
import Body from  '../main/body.js';
import Home from  '../main/Home.js'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

render(
    <Router>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand><a href="#">Gmeizhi</a></Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1}><Link to="/" >Home</Link></NavItem>
                    <NavItem eventKey={2}><Link to="/content" >Content</Link></NavItem>
                    <NavItem eventKey={3}><Link to="/about" >About</Link></NavItem>
                </Nav>
            </Navbar.Collapse>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/content" component={Body}/>
        </Navbar>
    </Router>,
    document.getElementById('content')
)
