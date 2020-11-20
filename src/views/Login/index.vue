<template>
  <div class="login_container">
    <div class="login_wrap">
      <ul class="menu_tab">
        <li
          :class="{ current: currentIndex === index }"
          v-for="(item, index) in menuTab"
          :key="index"
          @click="onClick(index)"
        >
          {{ item.txt }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      menuTab: [{ txt: "登录" }, { txt: "注册" }],
      currentIndex: 0
    };
  },
  methods: {
    onClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style lang="scss" scope>
.login_container {
  height: 100vh;
  background-color: $loginBg;
}
.login_wrap {
  height: 330px;
  margin: auto;
}
.menu_tab {
  text-align: center;
  li {
    display: inline-block;
    font-size: 14px;
    width: 88px;
    height: 36px;
    line-height: 36px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
