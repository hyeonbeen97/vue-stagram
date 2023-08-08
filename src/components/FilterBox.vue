<template>
  <div
    :class="`${필터} + filter-item`"
    :style="`background-image: url(${이미지})`"
    @click="fire"
  >
    <slot class="slot"></slot>
  </div>
</template>

<script>
export default {
  name: "filterbox",
  methods: {
    fire() {
      this.emitter.emit("박스클릭", this.필터);
    },
  },
  props: {
    이미지: String,
    필터: String,
  },
  data() {
    return {};
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
