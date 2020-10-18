//导入Axios
import axios from 'axios';

//全局的 axios 默认值
axios.defaults.baseURL = 'http://localhost:8080/';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  let {status, data} = response.data;
  console.log(status);
  if (status == 20000) {
    /*if (data.total){
      return data;
    } else{
      return data.records;
    }*/
    return data;
  } else {
    this.$message.error('错了哦，这是一条错误消息');
  }


  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default axios;
