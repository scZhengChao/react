import * as types from './types';
import React from 'react';
import { Redirect } from 'react-router-dom';;
import queryString from 'query-string';

// import $ from 'jquery';


//返回一个函数给外部的dispatch
export let asyncAction = (type, url, options) => (dispatch, getstate,) => {
    //原生的方法配置传参get
    // if (options) {
    //     let paramsArray = [];
    //     //拼接参数
    //     Object.keys(options).forEach(key => paramsArray.push(key + '=' + options[key]))
    //     if (url.search(/\?/) === -1) {
    //         url += '?' + paramsArray.join('&')
    //     } else {
    //         url += '&' + paramsArray.join('&')
    //     }
    // }
    //插件包的形式配置get传参
    if (options) {
        url = url +"?" + queryString.stringify(options)
    }
    // dispatch({ type: types.bloadding, payload: true })
    // console.log(url + `?name=${options.name}&password=${options.password}`)


    //$.ajax请求携带跨源凭证
    // return $.ajax({
    //     url:url,
    //     data: {
    //         name: options.name,
    //         password:options.password
    //     },
    //     success(res) {
    //         if(res.err == 0){
    //             dispatch({ type: types.bloadding, payload: false });
    //             dispatch({type:type,payload:res.data})
    //             location.href="/user"
    //             // dispatch({})
    //         }
    //     },
    //     dataType: "json",
    //     xhrFields: { withCredentials: true },
    //     error(a,b,c) {
    //         console.log(c)
    //     },
    //     type:"get",
    // })

    // console.log(url)
    return fetch(
        url,
        {
            credentials:"include"
        }
            ).then((res) =>{
                return res.json()
            }).then(
                data => {
                    if (data.err == 0) {
                        dispatch({ type: type, payload: data });  
                        // console.log(data)
                    } 
                    // dispatch({ type: types.bloadding, payload: false });
                    // console.log(getstate())
                    return data
                }
            )
}