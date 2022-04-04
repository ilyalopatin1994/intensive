<template>
  <div class="userInfo">
    <a :href="repo.html_url" target="_blank">
      <img
        class="repositoryPhoto icon"
        :src="repo.owner.avatar_url"
        height="40"
        width="40"
      />
    </a>
    {{ repo.owner.login }}
  </div>
  <slot>
    <div class="repository">
      <span class="repositoryTitle">{{ repo.name }}</span>
      <span class="">{{ repo.description }}</span>
      <div class="actions">
        <div class="btn" id="btnStar">
          <icons width="15px" height="15px" icon-name="star" />
          Star
        </div>
        <div class="btn" id="btnTextStar">{{ repo.stargazers_count }}</div>
        <div class="btn" id="btnFork">
          <icons width="15px" height="15px" icon-name="fork" />
          Fork
        </div>
        <div class="btn" id="btnTextFork">
          {{ repo.forks }}
        </div>
      </div>
    </div>
    <div class="issues">
      <issue-toggler
        :hide="false"
        @changeDisplay="changeDisplay($event)"
      ></issue-toggler>
      <repostiry-issues v-if="!issuesHidden" :issues="issues" />
    </div>
  </slot>
</template>

<script>
import issueToggler from "/src/components/feeds/issueToggler";
import repostiryIssues from "/src/components/feeds/repositoryIssues";
import { icons } from "/src/components/icons";
import { getRepoIssues } from "/src/api/rest/github/repoIssues";

export default {
  name: "repositoryItem",
  components: { issueToggler, repostiryIssues, icons },
  props: {
    repo: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      issuesHidden: false,
      issues: [],
    };
  },
  computed: {
    hideOrShowIssuesText() {
      return this.issuesHidden ? "Show Issues" : "Hide issues";
    },
  },
  mounted() {
    this.getRepoIssues();
  },
  methods: {
    async getRepoIssues() {
      const repository = this.repo;
      const params = {
        params: {
          state: "all",
        },
      };
      const issues = (
        await getRepoIssues(repository.owner.login, repository.name, params)
      ).data;
      this.issues = issues;
    },
    changeDisplay(status) {
      this.issuesHidden = status;
      this.$emit("onChangeDisplay");
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

.repositoryPhoto {
  margin-right: 14px;
}

.icon {
  margin-right: 4.5px;
}

.repository {
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

.repositoryTitle {
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
