<template>
  <div class="authContainer">
    <div class="leftPart">
      <h1>Gitogram /</h1>
      <br />
      <p class="description">More than just one repository.</p>
      <p class="description">This is our digital world.</p>
      <br />
      <div class="authButton" @click="authorize">
        <div>Авторизоваться через github</div>
        <div class="iconContainer"><icons icon-name="github" /></div>
      </div>
    </div>
    <div class="rightPart"><img src="macbook.png" /></div>
  </div>
</template>

<script>
import Icons from "@/components/icons/icons";

export default {
  name: "authorizationPage",
  components: { Icons },
  async created() {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      try {
        const clientId = process.env.VUE_APP_CLIENT_ID;
        const clientSecret = process.env.VUE_APP_CLIENT_SECRET;
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
      const clientId = process.env.VUE_APP_CLIENT_ID;
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
  padding: 15px 25px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.authButton:hover {
  cursor: pointer;
}

.authContainer {
  width: 100%;
  height: 100%;
  position: relative;
}

.iconContainer {
  margin-left: 10px;
}

.leftPart {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 100px;
}

.rightPart {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.description {
  color: grey;
}
</style>
