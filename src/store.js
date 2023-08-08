import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      /** vuestagram */
      name: "hyeon",
      count: 0,
      liked: false,
      likes: 0,
      more: {},
      visit: true,
      modal: false,
      selectFilter: "",
      content: "",
      likeIcon: "../assets/likes.png",
      likedIcon: "../assets/liked.png",
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    좋아요(state) {
      if (state.liked == false) {
        state.likes++;
        state.liked = true;
      } else {
        state.likes--;
        state.liked = false;
      }
    },
    //...
    이름변경(state) {
      state.name = "park";
    },
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {
        a.axios;
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
