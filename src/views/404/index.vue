<template>
  <div class="notFound">
    <el-container>
      <el-main>
        <h1>404</h1>
        <el-row class="goback">
          <router-link to="/login">
            <el-button type="primary">
              回到登录页
            </el-button>
          </router-link>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
  color: red;
  font-size: 50px;
}
a{
  text-decoration: none;
}
.goback {
  text-align: center;
}
</style>