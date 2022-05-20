<template>
  <div class="layout">
    <Toolbar />
    <div class="main">
      <MenuBar />
      <MainView />
    </div>
  </div>
</template>
<script>
import Toolbar from './components/Toolbar'
import MenuBar from './components/MenuBar'
import MainView from './components/MainView'
export default {
  name: 'Layout',
  components: {
    Toolbar,
    MenuBar,
    MainView
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variable.scss";
.layout {
  height: 100%;
  width: 100%;
  .main {
    width: 100%;
    height: calc(100vh - #{$ToolBar-height});
    display: flex;
  }
}
</style>
