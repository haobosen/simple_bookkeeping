Page({
  data:{
    text: "123",
    data: [
      {
        "type": 2,
        "content": "iphone",
        "date": "2018-08-08",
        "price": 66889
      },
      {
        "type": 2,
        "content": "iphoneX",
        "date": "2018-08-09",
        "price": 6688
      },
      {
        "type": 1,
        "content": "iphone9",
        "date": "2018-08-10",
        "price": 6688
      },
      {
        "type": 2,
        "content": "iphone 8 plus",
        "date": "2018-08-18",
        "price": 6688
      }
    ],
    sum_pay: 0,
    sum_income: 0,
    sum_profit: 0
  },
  getData: function(){
    //请求获取数据
    var con = this.data.data;
    for (var i = 0; i < con.length; i++) {

      if (con[i].type == 1) { //支出

        this.data.sum_pay += con[i].price;

      } else if (con[i].type == 2) { //收入

        this.data.sum_income += con[i].price;

      }

    }

    this.data.sum_profit = this.data.sum_income - this.data.sum_pay;

    this.setData({
      sum_profit: this.data.sum_profit,
      sum_income: this.data.sum_income,
      sum_pay: this.data.sum_pay
    })
  },
  getSetting: function(){
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  onLoad: function () {
    console.log('11111')
    this.getSetting();
    this.getData();

  }
})


