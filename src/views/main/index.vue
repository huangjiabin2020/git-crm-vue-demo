<template>
  <el-container>
    <el-aside width="200px">
      <div class="aside-title">
        <img src="../../assets/ikrs.jpg" alt="">
        <span>CRM管理系统</span>
      </div>

      <el-scrollbar>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          active-text-color="#F56C6C"
          :unique-opened="true"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>基础数据</span>
            </template>

            <el-menu-item index="/main/good">商品管理</el-menu-item>
            <el-menu-item index="/main/category">分类管理</el-menu-item>
            <el-menu-item index="/main/customer">客户管理</el-menu-item>
            <el-menu-item index="/main/supplier">运营商管理</el-menu-item>
            <el-menu-item index="/main/unit">单位管理</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>基础数据</span>
            </template>

            <el-menu-item index="2-1">商品管理</el-menu-item>
            <el-menu-item index="2-2">分类管理</el-menu-item>
            <el-menu-item index="2-3">客户管理</el-menu-item>
            <el-menu-item index="2-4">运营商管理</el-menu-item>
            <el-menu-item index="2-5">单位管理</el-menu-item>
          </el-submenu>


        </el-menu>
      </el-scrollbar>

    </el-aside>
    <el-container>
      <el-header>
        <span>夜空中最亮的星就是我彬哥</span>

      </el-header>
      <el-main>
        <div class="main-box">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="scss">
  .el-header {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
    span {
      color: white;
      font-size: 18px;
      font-weight: 700;
    }
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    /*text-align: center;*/
    .aside-title {
      height: 60px;
      background-color: red;
      width: 100%;
      line-height: 60px;
      img {
        margin-left: 10px;
        width: 60px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 6px;
      }
      span {
        color: white;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .el-scrollbar {
      height: calc(100% - 60px);

    }

  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*层叠掉默认的padding 20px*/
    padding: 10px;
    .main-box {
      width: 100%;
      /*height: 100%;*/
      background-color: white;
      padding: 20px;
      box-sizing: border-box;
    }
  }

  .el-container {
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
