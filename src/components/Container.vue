<template>
  <div>
    <div v-if="step == 0">
      <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        :class="filterValue"
        class="upload-image"
        :style="`background-image: url(${이미지})`"
      ></div>
      <div class="filters">
        <FilterBox
          :이미지="이미지"
          :필터="필터"
          v-for="(필터, i) in filters"
          :key="i"
        >
          <span>{{ 필터 }}</span>
          <!-- <template v-slot:default="작명">{{ 작명 }}</template> -->
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지. -->
    <div v-if="step == 2">
      <div
        :class="filterValue"
        class="upload-image"
        :style="`background-image: url(${이미지})`"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('write', $event.target.value)"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
export default {
  data() {
    return {
      filterValue: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  mounted() {
    this.emitter.on("박스클릭", (a) => {
      this.filterValue = a;
    });
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    게시물: Array,
    step: Number,
    이미지: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
