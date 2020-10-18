<template>

  <div class="category-wrapper">

    <!--按钮-->
    <div class="execution-box">
      <el-button type="primary" size="mini" @click="dialogVisible=true,formData={}">添加</el-button>
    </div>

    <template>
      <el-table
        :data="tableData"
        :border="true"
        :stripe="true"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="分类名称"
          align="center"

          width="180">
        </el-table-column>
        <el-table-column
          prop="pname"
          align="center"
          label="上级分类">
        </el-table-column>
        <el-table-column
          prop=""
          align="center"
          label="操作">
          <template v-slot="binge">
            <el-button type="primary" icon="el-icon-edit" circle
                       @click="dialogVisible=true,findById(binge.row.id)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteById(binge.row.id)"></el-button>
          </template>
        </el-table-column>


      </el-table>

      <el-pagination
        @current-change="pageHandler"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </template>

    <!--模态框-->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="分类名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="上级分类id">
          <el-input v-model="formData.pid"></el-input>
        </el-form-item>


      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false,addOrUpdate()">确 定</el-button>
  </span>
    </el-dialog>

  </div>


</template>


<script>
  import obj from './index'

  export default obj
</script>

<style scoped lang="scss">
  @import "./index";
</style>
