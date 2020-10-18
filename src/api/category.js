import axios from '../http/myaxios'

let category = {
  /**
   * 查询所有
   */
  findPage(currentPage, pageSize) {
    return axios.get(`category/page?currentPage=${currentPage}&pageSize=${pageSize}`)
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
      return axios.put(`category`, entity);
    } else {
      return axios.post(`category`, entity);
    }
  },

  /**
   * 根据id查找
   */
  findById(id) {
    return axios.get(`category/${id}`);
  },

  deleteById(id) {
    return axios.delete(`category/${id}`);
  }
}

export default category;
