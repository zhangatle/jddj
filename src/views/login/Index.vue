<template>
  <div class="user">
    <img src="../../assets/user.svg" alt="">
    <div class="input">
      <input type="text" v-model="username" placeholder="请输入手机号">
    </div>
    <div class="input">
      <input type="password" v-model="password" autocomplete="new-password" placeholder="请输入密码">
    </div>
    <div class="button" @click="handleLogin">登录</div>
    <div class="link">
      <span @click="handleRegister">立即注册</span> |
      <span>忘记密码</span>
    </div>
    <Toast v-if="show" :message="toastMessage"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast'

const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegister = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegister }
}

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        await router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('登录失败')
    }
  }
  const { username, password } = toRefs(data)
  return { handleLogin, username, password }
}

export default {
  name: 'Index',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleRegister } = useRegisterEffect()
    const { handleLogin, username, password } = useLoginEffect(showToast)
    return { handleLogin, handleRegister, username, password, show, toastMessage, showToast }
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
