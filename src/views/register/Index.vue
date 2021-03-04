<template>
  <div class="user">
    <img src="../../assets/user.svg" alt="">
    <div class="input">
      <input type="text" placeholder="请输入手机号">
    </div>
    <div class="input">
      <input type="password" placeholder="请输入密码">
    </div>
    <div class="input">
      <input type="password" placeholder="确认密码">
    </div>
    <div class="button" @click="handleRegister">注册</div>
    <div class="link">
      <span @click="handleLogin">已有账号，去登录</span>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Index',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      router.push({ name: 'Login' })
    }
    const handleRegister = () => {
      console.log('register')
    }
    return { handleLogin, handleRegister }
  }
}
</script>

<style lang="scss" scoped>
.user {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 .4rem;
  transform: translateY(-50%);
  img {
    display: block;
    width: .64rem;
    height: .64rem;
    margin: 0 auto .4rem;
  }
  .input {
    height: .48rem;
    margin-bottom: .16rem;
    background: #F9F9F9;
    border: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 6px;
    padding: 0 .16rem;
    input {
      line-height: .48rem;
      border: none;
      background: none;
      outline: none;
      width: 100%;
      font-size: .16rem;
      color: #777;
      &::placeholder {
        color: #777;
      }
    }
  }

  .button {
    background: #0091FF;
    box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
    border-radius: 4px;
    height: .48rem;
    line-height: .48rem;
    text-align: center;
    font-size: .16rem;
    color: #FFF;
    margin: .16rem auto;
  }

  .link {
    text-align: center;
    font-size: .14rem;
    color: #777;
    letter-spacing: 0;
    span {
      margin: 0 .13rem;
    }
  }
}
</style>
