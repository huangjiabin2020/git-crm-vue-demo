// import axios from 'axios'  抽取到api中
import api from '../../api/supplier'

let index = {

  data() {
    return {
      tableData: [],

      //分页数据
      currentPage: 1,
      pageSize: 2,
      total: 0,

      //  模态框
      dialogVisible: false,
      formData: {},
    }
  },

  created() {
    this.findPage();
  },

  methods: {
    pageHandler(page) {
      this.currentPage = page;
      this.findPage();
    },
    /*    findPage(){
          /!*axios.get(`index/page?currentPage=${this.currentPage}&pageSize=${this.pageSize}`)
            .then(resp=>{
              console.log(resp);
              this.tableData=resp.records;
              this.total=resp.total;
            })*!/
         /!* 进一步优化
          api.findPage(this.currentPage,this.pageSize).then(resp=>{
            console.log(resp);
            this.tableData=resp.records;
            this.total=resp.total;
          })*!/
        },*/
    //最后的优化结果
    async findPage() {
      let result = await api.findPage(this.currentPage, this.pageSize);
      this.tableData = result.records;
      this.total = result.total;
    },
    async addOrUpdate() {
      let result = await api.addOrUpdate(this.formData);
      this.$message.success("操作成功!");
      this.findPage();

    },

    async findById(id) {
      this.formData = await api.findById(id);
    },

    async deleteById(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        api.deleteById(id);
        this.$message.success(`删除成功!`);
        this.findPage();
      }).catch(() => {
        this.$message.info(`已取消删除`);
      });

    }

  }


};

export default index;
