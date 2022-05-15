<template>
  <div class="wrapper">
    <div class="authContainer">
      <div class="leftPart">
        <p class="authHeader">Gitogram /</p>
        <br />

        <p class="description">More than just one repository.</p>
        <p class="description">This is our digital world.</p>
        <br />
        <div class="authButton" @click="authorize">
          <div class="authButtonText">Авторизоваться через github</div>
          <div class="iconContainer">
            <icons icon-name="github" />
          </div>
        </div>
      </div>
      <div class="rightPart"><img src="macbook.png" /></div>
    </div>
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
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.authHeader {
  font-size: 32px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .authHeader {
    font-size: 16px;
    font-weight: 700;
  }
}

.authButton {
  background-color: #31ae54;
  color: white;
  padding: 15px 25px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .authButton {
    padding: 7px 10px;
    border-radius: 5px;
  }
}

.authButton:hover {
  cursor: pointer;
}

.authContainer {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.iconContainer {
  margin-left: 10px;
}

.leftPart {
  padding: 100px;
}

@media (max-width: 360px) {
  .leftPart {
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .leftPart {
    padding: 15px;
  }
}

.rightPart {
}

.description {
  color: grey;
  font-size: 16px;
}

@media (max-width: 768px) {
  .description {
    font-size: 12px;
  }
}

.authButtonText {
  font-size: 14px;
}

@media (max-width: 768px) {
  .authButtonText {
    font-size: 10px;
  }
}

.rightPart > img {
  object-fit: fill;
}
</style>
