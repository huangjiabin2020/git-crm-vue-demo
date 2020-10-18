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
          prop="goodCode"
          label="商品编码"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="goodName"
          label="商品名称"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="goodModel"
          align="center"
          label="商品型号">
        </el-table-column>
        <el-table-column
          prop="typeId"
          align="center"
          label="类型id">
        </el-table-column>
        <el-table-column
          prop="goodUnit"
          align="center"
          label="商品单位">
        </el-table-column>
        <el-table-column
          prop="purchasingPrice"
          align="center"
          label="采购价格成本价">
        </el-table-column>
        <el-table-column
          prop="lastPurchasingPrice"
          align="center"
          label="上次采购价格">
        </el-table-column>
        <el-table-column
          prop="sellPrice"
          align="center"
          label="售价">
        </el-table-column>
        <el-table-column
          prop="storeNum"
          align="center"
          label="库存数量">
        </el-table-column>
        <el-table-column
          prop="minStoreNum"
          align="center"
          label="库存下限">
        </el-table-column>
        <el-table-column
          prop="state"
          align="center"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="producer"
          align="center"
          label="生产厂商">
        </el-table-column>
        <el-table-column
          prop="remarks"
          align="center"
          label="备注">
        </el-table-column>

        <el-table-column
          prop=""
          align="center"
          label="操作">
          <template v-slot="binge">
            <el-button type="primary" icon="el-icon-edit" circle
                       @click="dialogVisible=true,findById(binge.row.goodCode)"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteById(binge.row.goodCode)"></el-button>
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

        <el-form-item label="商品名称">
          <el-input v-model="formData.goodName"></el-input>
        </el-form-item>
        <el-form-item label="商品型号">
          <el-input v-model="formData.goodModel"></el-input>
        </el-form-item>
        <el-form-item label="类型id">
          <el-input v-model="formData.typeId"></el-input>
        </el-form-item>
        <el-form-item label="商品单位">
          <el-input v-model="formData.goodUnit"></el-input>
        </el-form-item>
        <el-form-item label="采购价格成本价">
          <el-input v-model="formData.purchasingPrice"></el-input>
        </el-form-item>
        <el-form-item label="上次采购价格">
          <el-input v-model="formData.lastPurchasingPrice"></el-input>
        </el-form-item>
        <el-form-item label="售价">
          <el-input v-model="formData.sellPrice"></el-input>
        </el-form-item>
        <el-form-item label="库存数量">
          <el-input v-model="formData.storeNum"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="formData.minStoreNum"></el-input>
        </el-form-item>
        <el-form-item label="生产厂商">
          <el-input v-model="formData.producer"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="formData.remarks"></el-input>
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
