/**
 * Created by Administrator on 2017/2/28.
 */
import React from 'react';
import { render } from 'react-dom'
import $ from 'jquery';
import '../css/imgList.css';
import {Waterfall} from 'thousanday-react'

// let images = [
//     ["http://7xi8d6.com1.z0.glb.clouddn.com/2017-04-16-17934400_1738549946443321_2924146161843437568_n.jpg", "message0"],
//     ["http://7xi8d6.com1.z0.glb.clouddn.com/2017-04-14-17881962_1329090457138411_8289893708619317248_n.jpg", "message1"],
//     ["http://7xi8d6.com1.z0.glb.clouddn.com/2017-04-16-17934400_1738549946443321_2924146161843437568_n.jpg", "message2"],
//     ["http://7xi8d6.com1.z0.glb.clouddn.com/2017-04-16-17934400_1738549946443321_2924146161843437568_n.jpg", "message3"],
//     ["http://7xi8d6.com1.z0.glb.clouddn.com/2017-04-16-17934400_1738549946443321_2924146161843437568_n.jpg", "message4"],
//     ["http://7xi8d6.com1.z0.glb.clouddn.com/2017-04-16-17934400_1738549946443321_2924146161843437568_n.jpg", "message5"],
// ];
class Body extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imglist :[],
            page:1,
            refre:false
        }
        this._addItem = this._addItem.bind(this)
    }

    _addItem(){
        this.ajaxData(true)
    }

    componentWillMount() {
        this.ajaxData(false)
    }

    componentDidMount() {
    }

    ajaxData(refreState){
        if(refreState){
            let newPage = this.state.page++;
            this.setState({
                page:newPage
            })
        }
        let _this = this;
        $.ajax({
            url: 'http://gank.io/api/data/福利/10/'+_this.state.page,
            type:'GET',
            dataType: 'json',
            success: function(data){
                if(data.results.length == 0){
                    _this.setState({
                        refre: true
                    });
                }
                if(refreState){
                    let newImgList = _this.state.imglist.concat(data.results);
                    _this.setState({
                        imglist: newImgList,
                        page:_this.state.page+1,
                    });
                }else{
                    _this.setState({imglist: data.results});
                }
            }
        });
    }


    render(){
        let images = [];
        this.state.imglist.map(function(item,index){
            images.push(item.url);
        });
        console.log(images);
        return(
            <div className="body">
                <Waterfall column="2" image={images} />
                {this.state.refre == false ? <button className="addMeizhi" onClick={this._addItem} >来更多妹纸！！</button> :<div className="addMeizhi" >妹纸跑光啦！！</div>}
            </div>
        )
    }
}

export default Body