

//引入 fly
var Fly=require("flyio/dist/npm/wx")
var fly=new Fly;

// Add interceptors
fly.interceptors.request.use((config,promise)=>{
  config.headers["X-Tag"]="flyio"
  wx.showLoading({
    title: '加载中',
    mask:true
  })
  // Add custom headers
  
  return config;
})
fly.interceptors.response.use(
  (response,promise) => {
    
    if(typeof (response.data)=='string' && response.data!=''){
      response.data=JSON.parse(response.data);
    }

    if(response.data.code=="C501"){
      
      
    }
    wx.hideLoading()

  },
  (err,promise) => {
    wx.hideLoading()
  }

)
// Set the base url
fly.config.baseURL="http://dev.shop.com/api"

export default fly;