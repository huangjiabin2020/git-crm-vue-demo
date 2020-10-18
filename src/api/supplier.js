import axios from '../http/myaxios'

let supplier = {
  /**
   * 查询所有
   */
  findPage(currentPage, pageSize) {
    return axios.get(`supplier/page?currentPage=${currentPage}&pageSize=${pageSize}`)
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
      return axios.put(`supplier`, entity);
    } else {
      return axios.post(`supplier`, entity);
    }
  },

  /**
   * 根据id查找
   */
  findById(id) {
    return axios.get(`supplier/${id}`);
  },

  deleteById(id) {
    return axios.delete(`supplier/${id}`);
  }
}

export default supplier;
