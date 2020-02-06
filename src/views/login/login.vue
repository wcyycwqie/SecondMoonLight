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
            <el-form-item label="手机号码" prop="phone">
              <el-input
                placeholder="请输入手机号码"
                v-model="loginForm.phone"
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input
                placeholder="请输入验证码"
                style="width:210px;margin-right:15px;"
              ></el-input>
              <el-button>发送验证码</el-button>
            </el-form-item>
            <el-form-item class="form-footer">
              <el-button :class="{ 'btn-login': true }">登录</el-button>
              <el-button disabled>注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    // 自定义校验
    // 手机号码格式校验
    const phoneNumCheck = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号格式不对'))
      }
    }

    return {
      loginForm: {
        name: 'admin',
        password: '123456',
        phone: ''
      },
      loginRules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        phone: [
          { validator: phoneNumCheck, trigger: 'blur' }
        ]
      }
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
      background: #FFFFFFAA;
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