<template>
  <div class="userInfo">
    <img class="postPhoto" :src="post.userInfo.photo" height="40" width="40" />
    {{ post.userInfo.title }}
  </div>
  <slot>
    <div class="post">
      <span class="postTitle">{{ post.postInfo.title }}</span>
      <span class="">{{ post.postInfo.description }}</span>
      <div class="actions">
        <div class="btn" id="btnStar" @click="increment($event)">
          <img class="icon" src="star.png" />
          Star
        </div>
        <div class="btn" id="btnTextStar">{{ post.postInfo.stars }}</div>
        <div class="btn" id="btnFork" @click="increment($event)">
          <img class="icon" src="fork.png" />
          Fork
        </div>
        <div class="btn" id="btnTextFork">
          {{ post.postInfo.forks }}
        </div>
      </div>
    </div>
    <div class="issues">
      <issue-toggler @changeDisplay="issuesHidden = $event"></issue-toggler>
      <post-issues v-if="!issuesHidden" :issues="post.postInfo.issues" />
    </div>
  </slot>
</template>

<script>
import issueToggler from "@/components/feeds/issueToggler";
import postIssues from "@/components/feeds/postIssues";

export default {
  name: "postItem",
  components: { issueToggler, postIssues },
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      issuesHidden: false,
    };
  },
  computed: {
    hideOrShowIssuesText() {
      return this.issuesHidden ? "Show Issues" : "Hide issues";
    },
  },
  methods: {
    increment(e) {
      if (e.target.id == "btnStar") {
        // eslint-disable-next-line vue/no-mutating-props
        this.post.postInfo.stars++;
      } else {
        // eslint-disable-next-line vue/no-mutating-props
        this.post.postInfo.forks++;
      }
    },
  },
};
</script>

<style scoped>
.userInfo {
  height: 40px;
  display: flex;
  color: #292929;
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  margin-bottom: 16px;
}

.postPhoto {
  margin-right: 14px;
}

.icon {
  margin-right: 4.5px;
}
.post {
  width: 100%;
  height: 173px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.postTitle {
  font-weight: bold;
  font-size: 26px;
}

.btn {
  height: 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

#btnStar {
  border-radius: 6px 0px 0px 6px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  padding: 0px 13px 0px 12px;
}

#btnTextStar {
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-left: 0px;
  padding: 0px 12px 0px 11px;
}

#btnFork {
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-left: 0px;
  padding: 0px 13px 0px 12px;
}

#btnTextFork {
  border-radius: 0px 6px 6px 0px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-left: 0px;
  padding: 5px 12px 5px 13px;
}

.actions {
  display: flex;
  position: relative;
}

.issues {
  margin-top: 18px;
  padding-left: 10px;
}
</style>
