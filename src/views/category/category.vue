<template>

  <div class="category-wrapper">

    <!--按钮-->
    <div class="execution-box">
      <el-button type="primary" size="mini">添加</el-button>
    </div>

    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </template>

  </div>






</template>


<script>
  import obj from './category'

  export default obj
</script>

<style scoped lang="scss">
  @import "./category";
</style>
