<template>
  <div>
    <h2 class="title-vue">{{ title }}</h2>
    <p class="content-vue">{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '我是 Vue 标题',
      content: '我是 content',
    };
  },
};
</script>

<style>
.title-vue {
  color: green;
}

.content-vue {
  color: orange;
}
</style>
