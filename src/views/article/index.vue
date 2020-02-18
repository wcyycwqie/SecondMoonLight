<template>
  <div class="article">
    <!-- 筛选区域 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <my-bread>内容管理</my-bread>
      </div>
      <div>
        <el-form label-width="80px" size="small">
          <el-form-item label="状态: ">
            <el-radio-group v-model="articleData.status">
              <el-radio :label="null">全部</el-radio>
              <el-radio :label="0">草稿</el-radio>
              <el-radio :label="1">待审核</el-radio>
              <el-radio :label="2">审核通过</el-radio>
              <el-radio :label="3">审核失败</el-radio>
              <el-radio :label="4">已删除</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="频道">
            <el-select v-model="articleData.channel_id" placeholder="请选择">
              <el-option
                v-for="item in channelOptions"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期">
            <el-date-picker
              v-model="timeArea"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">筛选</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- 筛选结果 -->

    <el-card>
      <div slot="header" class="clearfix">
        <span>根据筛选条件共查询到 1 条结果：</span>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="封面" width="180">
          </el-table-column>
          <el-table-column prop="name" label="标题" width="180">
          </el-table-column>
          <el-table-column prop="" label="状态"> </el-table-column>
          <el-table-column prop="" label="发布时间"> </el-table-column>
          <el-table-column prop="" label="操作"> </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      articleData: {
        status: 1,
        channel_id: null,
        begin_pubdate: 'null',
        end_pubdate: 'null'

      },
      channelOptions: [

      ],
      timeArea: ['2019-01-01', '2019-02-14'],
      tableData: [{
        name: 'hoho'
      }]


    }
  },

  created () {
    this.getArticles()

  },
  methods: {
    async getArticles () {
      console.log('**********')
      const {
        data: { data, message }
      } = await this.$axios.get('channels')
      this.channelOptions = data.channels


    }
  }

}
</script>

<style lang="less" scoped>
.article {
  .el-card {
    margin-bottom: 20px;
  }
}
</style>