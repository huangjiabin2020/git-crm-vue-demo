import axios from '../http/myaxios'

let customer = {
  /**
   * 查询所有
   */
  findPage(currentPage, pageSize) {
    return axios.get(`customer/page?currentPage=${currentPage}&pageSize=${pageSize}`)
  },


  /*  /!**
     * 添加
     *!/
    add(entity){
      return axios.post(`index`,entity);
    },

    /!**
     * 修改
     *!/
    update(entity){
      return axios.put(`index`,entity);

    }*/
  /**
   * 添加或修改
   */

  addOrUpdate(entity) {
    if (entity.id) {
      return axios.put(`customer`, entity);
    } else {
      return axios.post(`customer`, entity);
    }
  },

  /**
   * 根据id查找
   */
  findById(id) {
    return axios.get(`customer/${id}`);
  },

  deleteById(id) {
    return axios.delete(`customer/${id}`);
  }
}

export default customer;
