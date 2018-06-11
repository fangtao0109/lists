<template>
  <div>
      <el-tree
        :data="$store.state.menu"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps">
      </el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>
<style scoped>

</style>
