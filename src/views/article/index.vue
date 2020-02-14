<template>
  <div class="article">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  created () {
    this.$axios
    .get('articles')
    .then(res => (
      console.log(res)
    ))
    .catch(err => {
      console.log(err)
    })
  }

}
</script>

<style lang="less" scoped>
</style>