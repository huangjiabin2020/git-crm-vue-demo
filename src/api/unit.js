import axios from '../http/myaxios'

let unit = {
  /**
   * 查询所有
   */
  findPage(currentPage, pageSize) {
    return axios.get(`unit/page?currentPage=${currentPage}&pageSize=${pageSize}`)
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
      return axios.put(`unit`, entity);
    } else {
      return axios.post(`unit`, entity);
    }
  },

  /**
   * 根据id查找
   */
  findById(id) {
    return axios.get(`unit/${id}`);
  },

  deleteById(id) {
    return axios.delete(`unit/${id}`);
  }
}

export default unit;
