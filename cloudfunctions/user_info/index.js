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
      return await db.collection("hold_user")
      .where({
        openid: _.eq(wxContext.OPENID)
      })
      .get()
  }
