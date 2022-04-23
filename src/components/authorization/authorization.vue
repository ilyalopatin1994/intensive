<template>
  <div class="authButton" @click="authorize">Авторизоваться через github</div>
</template>

<script>
import { clientId, clientSecret } from "/env";

export default {
  name: "authorizationPage",
  async created() {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      try {
        const response = await fetch(
          "https://webdev-api.loftschool.com/github",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ clientId, code, clientSecret }),
          }
        );

        const { token } = await response.json();
        localStorage.setItem("token", token);
        this.$router.replace("/");
      } catch (e) {
        console.log(e);
      }
    }
  },
  methods: {
    authorize() {
      const url = "https://github.com/login/oauth/authorize";
      const params = new URLSearchParams();
      params.append("client_id", clientId);
      params.append("scope", "repo");
      window.location.href = `${url}?${params}`;
    },
  },
};
</script>

<style scoped>
.authButton {
  background-color: #31ae54;
  color: white;
  width: 240px;
  box-sizing: border-box;
  padding: 10px 24px;
  border-radius: 5px;
  height: 44px;
}

.authButton:hover {
  cursor: pointer;
}
</style>
