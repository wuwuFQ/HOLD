// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
const db = cloud.database()
const _ = db.command     //获取数据库查询及更新指令
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  try {
    return await db.collection("hold_user").where({
      openid: _.eq(wxContext.OPENID)
    }).update({
      data: {
        name: event.name,
        idCard: event.idCard,
        phone: event.phone,
        provinces: event.provinces,
        city: event.city,
        areas: event.areas,
        address: event.address,
        projects: event.projects,
      }
    })
  } catch (e) {
    console.error(e)
  }
}
  
