import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 
import { connect }  from 'react-redux';

const Auth = ({component:Component,user,...rest}) => (
    <Route {...rest} render={(contents)=>(
        user.auth ?
          <Component {...contents} userdata={user.data} /> :
          <Redirect to="/login"/>
      )}/>
)

let MapStateToProps = (state,props) => ({
    user:state.user
})

let MapDispatchToProps = (dispatch, props) => ({
   
})

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(Auth);