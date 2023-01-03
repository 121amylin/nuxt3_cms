<template>
  <div>
    <header class="header">
      <div class="contentain">
        <nuxt-link to="./">首頁</nuxt-link>
        <nuxt-link to="./login">登入</nuxt-link>
      </div>
    </header>
    <main class="main">
      <div class="contentain">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>
<style lang="scss">
// ====================================================
// ====================== var =========================
$main_color: rgb(2, 98, 222);
// ====================================================
// ====================== reset =======================
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
html,
body {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: clamp(16px, 1vw, 18px);
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
  transition: color 0.2s;
  &:hover,
  &:focus {
    color: $main_color;
  }
}
// ====================================================
// ====================== layout ======================
.contentain {
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
  margin: auto;
}
.header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  a {
    display: inline-block;
    padding: 14px 30px;
  }
}
.main {
  padding-top: 80px;
}
</style>
