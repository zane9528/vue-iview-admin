<template>
  <div class="Toolbar">
    <div class="logo">
      <img src="https://file.iviewui.com/dist/bf31433c102ed612fbe82afe000dda40.png" alt="">
    </div>
    <p class="title">
      后台管理系统
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/variable.scss";

.Toolbar {
  height: $ToolBar-height;
  width: 100%;
  background-color: $ToolBar-color;
  display: flex;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);

  .logo {
    width: $Menu-width;
    height: 100%;
    display: flex;
    img {
      margin: auto;
      width: 70%;
      height: 70%;
    }
  }
  .title {
    color: #615e5e;
    font-weight: 600;
    font-size: 28px;
    margin: auto;
  }
}
</style>
