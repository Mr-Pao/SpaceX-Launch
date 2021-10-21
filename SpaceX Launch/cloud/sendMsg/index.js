//编程小石头微信：2501902696
const cloud = require('wx-server-sdk')
cloud.init()
exports.main = async(event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: event.openid, //要推送给那个用户
      page: 'pages/index/index', //要跳转到那个小程序页面
      data: {//推送的内容
        thing1: {
          value: '任务名称'
        },
        thing2: {
          value: '发射时间'
        }
      },
      templateId: 'Vc2Mo9xgsr-e9gBD4Nfz-0bSKSXQPUgcZnAkveYveiQ' //模板id
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}