
import Alldatas from '../assets/js/Data'

export default {
  /**
   * 获取首页轮播图图片数据
   * @param calb
   */
  getSliderImg(calb) {
    let data=Alldatas.indexSlider
        calb(data)
  },
  /**
   * 获取首页菜单数据
   * @param calb
   */
  getIndexMenu(calb) {
    let data=Alldatas.indexMenuData
        calb(data)
  },
  /**
   * 获取首页navbox数据
   * @param calb
   */
  getIndexNav(calb) {
    let data=Alldatas.indexNavbox
    calb(data)
  },
  /**
   * 获取near页面的nearlist数据
   * @param cb
   */
  getNearlistData(calb) {
    let data=Alldatas.nearlist
    calb(data)
  },

  /**
   * 获取near页面的nearlist数据
   * @param cb
   */
  getNearchildData(calb) {
    let data=Alldatas.nearchild
    calb(data)
  },
  /**
   * 获取ordernav的json数据
   * @param cb
   */
  getOrderNavData(calb) {
    let data=Alldatas.orderNav
    calb(data)
  },
  /**
   * 获取find数据
   * @param cb
   */
  getFindData(calb){
    let data=Alldatas.findData
    calb(data)
  },
  /**
   * 获取find数据
   * @param cb
   */
  getMeData(calb){
    let data=Alldatas.meData
    calb(data)
  },
}



