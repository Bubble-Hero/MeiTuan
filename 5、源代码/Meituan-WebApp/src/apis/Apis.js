

import {NEARNAVURL} from "../commons/Data"


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
  }
}
