import React,{ Component } from 'react';
export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component{
        constructor(props) {
            super(props);
            this.state = {
                component:null
            }
        }
        async componentDidMount() {  //async 定义了里面有异步的函数
            const { default: component } = await importComponent();
            this.setState({
                component: component
            });
            
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;        
        }
    }
    return AsyncComponent;
}