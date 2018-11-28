

import {NEARNAVURL} from "../commons/Data"
import {ORDERNAVURL} from "../commons/Data"

export default  {


  /**
   * 获取mylists数据
   * @param cb
   */
  getNearnavData(cb){
    fetch(NEARNAVURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  },

  /**
   * 获取ordernav的json数据
   * @param cb
   */
  getOrderNavData(cb){
    fetch(ORDERNAVURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
