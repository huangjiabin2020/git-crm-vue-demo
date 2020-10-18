import axios from '../http/myaxios'

let good = {
  /**
   * 查询所有
   */
  findPage(currentPage, pageSize) {
    return axios.get(`good/page?currentPage=${currentPage}&pageSize=${pageSize}`)
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
      return axios.put(`good`, entity);
    } else {
      return axios.post(`good`, entity);
    }
  },

  /**
   * 根据id查找
   */
  findById(id) {
    return axios.get(`good/${id}`);
  },

  deleteById(id) {
    return axios.delete(`good/${id}`);
  }
}

export default good;
