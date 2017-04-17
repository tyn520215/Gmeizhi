/**
 * Created by Administrator on 2017/1/12.
 */
import React,{Component} from 'react';
import $ from 'jquery';

var AjaxUtils = function(page){
    $.ajax({
        url: 'http://gank.io/api/data/福利/10/'+page,
        type:'GET',
        dataType: 'json',
        success: function(data){
            if(data){
                return data

            }
        }
    });
}
module.exports= AjaxUtils;

