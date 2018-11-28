

import {NEARNAVURL} from "../commons/Data"
import {NEARLISTURL} from "../commons/Data"

export default  {
  /**
   * 获取near页面的nav数据
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
   * 获取near页面的nearlist数据
   * @param cb
   */
  getNearlistData(cb){
    fetch(NEARLISTURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
