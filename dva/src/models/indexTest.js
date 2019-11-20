import {getData,postData} from "../services/api"
export default {
  namespace: 'indexTest',
  state: {
    name:"Msea",
    cnodeData:[],
    data:'',
  },
  reducers:{
    setName(state,payLoad){
      // console.log(payLoad.data.name);
      let _state=JSON.parse(JSON.stringify(state));
        _state.name=payLoad.data.name;
      return _state;
    },
    setCnodeDataList(state,payLoad){
      // console.log(payLoad);
      let _state=JSON.parse(JSON.stringify(state));
      _state.name=payLoad.data.name
      return  _state;
    },
    testPath(state,payLoad){
      // console.log("用户页");
      return state;
    }
  },
  effects:{
    *setNamaAsync ({payload},{put,call}){
      yield put({
        type:"setName",
        data:{
          name:"name2"
        }
      })
    },
    *get({payload},{put,call}){
      let rel= yield call(getData);
      // console.log('rel：',rel)
      if(rel){
        yield put({
          type:"setCnodeDataList",
          data:rel
        }) 

      }
    },
    *post({payload},{put,call}){
      let rel= yield call(postData,{'id':'1'});
      // console.log('rel：',rel)
      if(rel){
        yield put({
          type:"setCnodeDataList",
          data:rel
        }) 

      }
    },
  },

//   Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。
// 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。

  subscriptions:{
    haha({dispatch,history}){
      history.listen(({pathname})=>{
        if(pathname==="/user"){
          dispatch({
            type:"testPath"
          })
        }
      })
    }
  }

};
