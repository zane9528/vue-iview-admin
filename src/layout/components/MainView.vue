<template>
  <div class="MainView">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="$route.name" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MainView'
}
</script>

<style scoped lang='scss'>
@import "../../styles/variable.scss";

.MainView {
  width: calc(100vw - #{$Menu-width});
  height: calc(100vh - #{$ToolBar-height});
  overflow: hidden;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
