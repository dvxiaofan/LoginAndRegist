// pages/login/login.js
Page({
  data: {
    disabled: true,
    btnstate: 'default',
    account: '',
    password: ''
  },

  accountInput: function (event) {
    var content = event.detail.value.trim();
    if (content !== '') {
      this.setData({
        disabled: false, 
        btnstate: 'primary', 
        account: content
      });
    } else {
      this.setData({
        disabled: true,
        btnstate: 'default'
      });
    }
  },

  pwdBlur: function(e) {
    var password = e.detail.value;
    if (password != '') {
      this.setData({
        password: password
      });
    }
  }

})