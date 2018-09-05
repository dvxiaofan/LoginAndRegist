// pages/mobile/mobile.js
Page({
  data: {
    disabled: true,
    btnstate: 'default',
    mobile: ''
  },
  mobileblur: function(e) {
    var content = e.detail.value.trim();
    if (content != '') {
      this.setData({
        disabled: false,
        btnstate: 'primary',
        mobile: content
      });
    } else {
      this.setData({
        disabled: true,
        btnstate: 'default',
        mobile: ''
      });
    }
  },
  login: function(e) {
    console.log(e);
    
  }
})