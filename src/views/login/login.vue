<template>
  <div class="login">
    <el-container>
      <el-main class="mainBox">
        <el-card :body-style="{ padding: '20px;' }">
          <img
            src="../../assets/logo1.png"
            class="img-logo"
            width="120"
            alt=""
          />
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            label-width="70px"
            status-icon
          >
            <el-form-item label="账号" prop="name">
              <el-input
                placeholder="请输入用户名"
                v-model="loginForm.name"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                placeholder="请输入密码"
                show-password
                v-model="loginForm.password"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="mobile">
              <el-input
                placeholder="请输入手机号码"
                v-model="loginForm.mobile"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input
                placeholder="请输入验证码"
                style="width:210px;margin-right:15px;"
                v-model="loginForm.code"
              ></el-input>
              <el-button>发送验证码</el-button>
            </el-form-item>
            <el-form-item class="form-footer">
              <el-button :class="{ 'btn-login': true }" @click="login()"
                >登录</el-button
              >
              <el-button disabled>注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable no-console */
import auth from '@/auth'

export default {
  name: 'Login',
  data () {
    // 自定义校验
    // 手机号码格式校验
    const mobileNumCheck = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号格式不对'))
      }
      callback()
    }

    return {
      loginForm: {
        name: 'admin',
        password: '123456',
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        mobile: [
          { validator: mobileNumCheck, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    login () {
      console.log('login!')
      console.log(this.$axios.defaults)
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          console.log('true')
          // this.$axios
          //   .post('authorizations', this.loginForm)
          //   .then(res => {
          //     console.log(res)
          //     auth.setUser(res.data.data)
          //     this.$router.push('/')
          //   })
          //   .catch(err => {
          //     console.log('error')
          //   })
          try {
            const res = await this.$axios.post('authorizations', this.loginForm)
            auth.setUser(res.data.data)
            this.$router.push('/')
          }
          catch (e) {
            console.log('error')
            this.$message.error('手机号或验证码错误')
          }


        }

      })

    }
  }
}
</script>

<style lang="less" scoped>
@gRate: 0.618;

.el-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../../assets/bg/bg5.png') no-repeat;
  background-size: cover;

  .mainBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    // height: 500px * @gRate;
    .el-card {
      background: #ffffffaa;
      .img-logo {
        display: block;
        margin: 0 auto 20px;
        width: 200px;
      }

      .form-footer {
        .el-button {
          width: 150px;
        }
      }
    }
  }
}

.btn-login {
  background: #de4b99;
  border-color: #de4b99;
  color: #fff;

  &:focus,
  &:hover {
    background: #e867ac;
    border-color: #e867ac;
    color: #fff;
  }
  &:active {
    background: #de4b99;
    border-color: #de4b99;
    color: #fff;
  }
}
</style>