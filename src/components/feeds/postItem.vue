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
        <div class="btnLeftBorder" />
        <div class="btn">Star</div>
        <div class="btnDelimiter" />
        <div class="btnText">{{ post.postInfo.forksCount }}</div>
        <div class="btnDelimiter" />
        <div class="btn">Fork</div>
        <div class="btnDelimiter" />
        <div class="btnRightBorder" />
        <div></div>
      </div>
      <div class="issues">
        <issue-toggler @changeDisplay="issuesHidden = $event"></issue-toggler>
        <post-issues v-if="!issuesHidden" :issues="post.postInfo.issues" />
      </div>
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
};
</script>

<style scoped>
.userInfo {
  height: 40px;
  display: flex;
  color: #292929;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid black;
  align-items: center;
}

.postPhoto {
  margin-right: 14px;
}

.post {
  width: 100%;
  height: 173px;
  border: 5px solid #f1f1f1;
  border-radius: 5px;
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
  background: #fafbfc;
  box-shadow: inset 0px -1px 0px rgba(27, 31, 35, 0.12),
    inset 0px 1px 0px rgba(27, 31, 35, 0.12);
  width: 48px;
  height: 28px;
  padding: 5px;
  box-sizing: border-box;
}

.btnLeftBorder {
  background: #fafbfc;
  /* .border/btn-15% black */

  border: 1px solid rgba(27, 31, 35, 0.15);
  box-sizing: border-box;
  border-radius: 6px 0px 0px 6px;
  width: 12px;
  height: 28px;
}

.btnRightBorder {
  background: #fafbfc;
  width: 12px;
  height: 28px;

  border: 1px solid rgba(27, 31, 35, 0.15);
  box-sizing: border-box;
  border-radius: 6px 0px 0px 6px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.btnDelimiter {
  width: 11px;
  height: 28px;
  left: 11px;
  top: 0px;

  background: #ffffff;

  box-shadow: inset 0px -1px 0px rgba(27, 31, 35, 0.12),
    inset 0px 1px 0px rgba(27, 31, 35, 0.12);
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.btnText {
  padding: 5px;
  box-sizing: border-box;
  background: #ffffff;
  /* btnStroke/btn-12% black */

  box-shadow: inset 0px -1px 0px rgba(27, 31, 35, 0.12),
    inset 0px 1px 0px rgba(27, 31, 35, 0.12);
}

.actions {
  display: flex;
}
</style>
