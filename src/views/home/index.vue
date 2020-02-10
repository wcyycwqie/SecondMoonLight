<template>
  <div class="home">
    <el-container class="container-home">
      <!-- 侧边栏 -->
      <el-aside class="my-aside" width="200px">
        <div class="logo"></div>
        <el-menu
          default-active="this.$route"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span> </el-menu-item
          ><el-menu-item index="/article">
            <i class="el-icon-document"></i>
            <span slot="title">内容管理</span> </el-menu-item
          ><el-menu-item index="3">
            <i class="el-icon-picture"></i>
            <span slot="title">素材管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="my-header">
          <i class="el-icon-s-fold icon"></i>
          <span class="text">Lucky day</span>
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/login">退出登录</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main class="my-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  created () {
    console.log(this.$route)
    console.log(this.$router)

  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }

}
</script>

<style lang="less" scoped>
@mainColor: #de4b99;

a {
  text-decoration: none;
  color: @mainColor;
}

.container-home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .my-aside {
    background: linear-gradient(-120deg, transparent, #de4b99);

    .logo {
      height: 60px;
      background: #ea91c1 url('../../assets/logo2.png') no-repeat center/140px
        auto;
      // background-size: contain;
    }
    .el-menu {
      background: transparent;
      .el-menu-item {
        background: transparent;
        color: #d01e1e;
        &:focus,
        &:hover {
          background: #de4b9938;
          color: #008bd2;
        }
        &.is-active {
          color: #008bd2;
        }
      }
    }
  }
  .my-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;

    .icon {
      font-size: 24px;
      vertical-align: middle;
      color: @mainColor;
    }
    .text {
      padding-left: 10px;
      font-size: 20px;
      vertical-align: middle;
      color: @mainColor;
    }

    .el-dropdown {
      float: right;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: @mainColor;
    }
    .el-icon-arrow-down {
      font-size: 20px;
    }
  }
  .my-main {
    padding: 0;
    margin: 0;
  }
}
</style>