<template>
  <div class="MenuBox">
    <Menu theme="light" :active-name="$route.name" width="100%">
      <div v-for="item in routes" :key="item.name">
        <MenuItem
          v-if="!item.meta.hidden && !item.children"
          :name="item.name"
          :to="item.path"
        >
          <svg-icon :icon-class="item.meta.icon" />
          {{ item.meta.title }}
        </MenuItem>
        <Submenu
          v-if="!item.meta.hidden && item.children && item.children.length"
          name="$route.name"
        >
          <template slot="title">
            <svg-icon :icon-class="item.meta.icon" />
            内容管理
          </template>
          <div v-for="child in item.children" :key="child.name">
            <MenuItem
              v-if="!child.meta.hidden && !child.children"
              :name="child.name"
              :to="child.path"
            >
              {{ child.meta.title }}
            </MenuItem>
          </div>
        </Submenu>
      </div>
    </Menu>
  </div>
</template>
<script>
import { constantRoutes } from '@/router/constantRoutes'
export default {
  name: 'MenuBar',
  data() {
    return {}
  },
  computed: {
    routes() {
      return constantRoutes
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "../../styles/variable.scss";
.MenuBox {
  height: 100%;
  width: $Menu-width;
}
.ivu-menu {
  height: 100%;
}
</style>
