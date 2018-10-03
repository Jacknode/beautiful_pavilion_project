/**
 * Created by leibo on 2018/10/3.
 */
import {getNewStr} from '@/utils/public'

export const Home=(data)=>{
  return new Promise((relove,reject)=>{
    wx.request({
      url:getNewStr+'/TradeGood/GetTravelPageL',
      data:JSON.stringify(data),
      method:'POST',
      header: 'application/x-www-form-urlencoded',
      success:function (res) {
        relove(res.data)
      }
    })
  })
}
