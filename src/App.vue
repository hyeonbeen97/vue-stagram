<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li v-if="step !== 0" @click="step--">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">올리기</li>
      </ul>
      <img v-if="step == 0" src="./assets/logo.png" class="logo" />
    </div>
    <!-- <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기 버튼</button> -->
    <Container
      :게시물="게시물"
      :step="step"
      :이미지="이미지"
      @write="작성한글 = $event"
    />

    <!-- 클릭시 axios를 이용해 받은 데이터를 기존 데이터 배열에 추가하는 함수가 실행됨 -->
    <button @click="more" v-if="step === 0">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input
          type="file"
          accept="image/*"
          @change="upload"
          multiple
          id="file"
          class="inputfile"
        />
        <label for="file" class="input-plus" v-if="step === 0">+</label>
      </ul>
    </div>
  </div>

  <!-- <div v-if="step === 0">내용0</div>
  <div v-if="step === 1">내용1</div>
  <div v-if="step === 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->
  <div style="margin-top: 500px"></div>
</template>

<script>
import Container from "./components/Container";
import boards from "./data/boards";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
axios.post();

export default {
  name: "App",
  data() {
    return {
      step: 0,
      작성한글: "",
      게시물: boards,
      더보기: 0,
      이미지: "",
      filterValue: "",
      카운터: 0,
    };
  },
  mounted() {
    this.emitter.on("박스클릭", (a) => {
      this.filterValue = a;
    });
  },
  components: {
    Container,
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    ...mapState([
      "name",
      "count",
      "liked",
      "likes",
      "more",
      "visit",
      "modal",
      "selectFilter",
      "content",
      "likeIcon",
      "likedIcon",
    ]),
  },
  methods: {
    ...mapMutations(["setMore", "좋아요"]),
    publish() {
      var 내게시물 = {
        name: "kim hyeon been",
        userImage: this.이미지,
        postImage: this.이미지,
        likes: 36,
        date: "11",
        liked: false,
        content: this.작성한글,
        filter: this.filterValue,
      };
      this.게시물.unshift(내게시물);
      this.step = 0;
    },
    more() {
      // axios
      //   .post("URL", {
      //     name: "been",
      //   })
      //   .then()
      //   .catch((err) => {
      //     err;
      //   });
      axios
        .get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
        .then((결과) => {
          this.게시물.push(결과.data);
          this.더보기++;
        });
    },
    upload(e) {
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      this.step++;
      console.log(url);
      this.이미지 = url;
    },
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
