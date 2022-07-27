<template>
  <header>
    <nav class="container">
      <!-- 标题 -->
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">VillagresBlogs</router-link>
      </div>
      <!-- 导航 -->
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" :to="{ name: 'Login' }">Login/Register</router-link>
        </ul>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <!-- 移动端导航 -->
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
// 引入菜单图标
import menuIcon from '../assets/Icons/bars-regular.svg';

export default {
  name: 'Navigation',
  components: {
    menuIcon
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null
    };
  },
  created() {
    // 首次进入时触发
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    // 检测窗口尺寸
    checkScreen() {
      this.windownWidth = window.innerWidth;
      // 如果屏幕尺寸小于 750 说明进入 移动端
      if (this.windownWidth <= 750) {
        this.mobile = true;
        return;
      }
      // PC端/平板
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    // 点击菜单栏切换
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  // show navigation
  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  // vue指定transiton标签过渡类
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
