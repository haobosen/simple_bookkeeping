Page({
  data: {
    orderType: 1,
    pay: 0,
    content: ''
  },
  onload: function () {
    console.log('2222')
  },
  changeType: function(e){
    if (e.target.id == "type_pay"){
      
      this.setData({
        orderType: 1
      })

    } else if (e.target.id == "type_income"){
      
      this.setData({
        orderType: 2
      })

    }
  },
  getInput: function(e){
    this.setData({
      pay: e.detail.value
    })
  },
  getTextarea: function(e){
    console.log(e)
    this.setData({
      content: e.detail.value
    })

  },
  saveInfo: function(e){

    var data = {
      type: this.data.orderType,
      num: this.data.pay,
      con: this.data.content
    }

    //提交到数据库
    console.log(data);

  }
})