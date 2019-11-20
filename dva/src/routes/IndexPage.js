import React from 'react';
import {connect} from "dva";
import PropTypes from 'prop-types';

class IndexPage extends React.Component{
  handleSetName=()=>{
    this.props.dispatch({
      type:"indexTest/setName",
      data:{
        name:"name1"
      }
    })
  }
  handleSetNameAsync=()=>{
    this.props.dispatch({
      type:"indexTest/setNamaAsync",
      data:{
        name:"name2"
      }
    })
  }
  handleSetGet=()=>{
    this.props.dispatch({
      type:"indexTest/get",
    })
  }
  handleSetPost=()=>{
    this.props.dispatch({
      type:"indexTest/post",
    })
  }
  render(){
    // console.log(this.props.cnodeData);
    return (
      <div>
        我是首页 <br/>
        {this.props.msg}
        <div>
          name:
          {
            this.props.name
          }
        </div>
        <button onClick={this.handleSetName}>setName</button>
        <button onClick={this.handleSetNameAsync}>setNameAsync</button>
        <button onClick={this.handleSetGet}>get</button>
        <button onClick={this.handleSetPost}>post</button>
      </div>
    )
  }
}

// 类型检查：
IndexPage.propTypes = {
  // content:PropTypes.string.isRequired
} 


const mapStateToProps=state=>{
  return {
    msg:"我爱北京天安门",
    name:state.indexTest.name ,
    cnodeData:state.indexTest.cnodeData
  }
}
export default connect(mapStateToProps)(IndexPage);
