<template>
  <div class="banner">
    <img src="@/assets/logo.svg" alt="" width="151" height="82" />
    <div class="text-box">
      <h1>
        Vamos aprimorar a forma como interagimos com os equipamentos de
        subestações e usinas?
      </h1>
      <h2>
        Nossa solução permite a visualização e interação de informações
        relevantes sobre os equipamentos no espaço tridimensional, através de um
        aplicativo para dispositivos móveis (Smartphones, Tablets, Óculos AR)
        que faz uso da tecnologia de realidade aumentada, fornecendo aos
        usuários uma experiência imersiva, contribuindo com a segurança e maior
        eficiência operacional.
      </h2>
    </div>
    <a
      class="white--text px-10 v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--light v-size--x-large button"
      href="#sobre"
      v-smooth-scroll="{ duration: 1000, updateHistory: false, offset: 0 }"
      >Saiba Mais</a
    >
  </div>
</template>

<script>
export default {
  name: "BannerHome",
};
</script>

<style lang="scss" scoped>
.banner {
  background: url("../../assets/padrao.png");
  background-position: bottom center;
  background-repeat: repeat-x;
  text-align: center;
  padding: 0px 16px;
  img {
    height: 100px;
    padding: 4px 16px;
    margin-bottom: 16px;
    background-color: #fff;
    border-radius: 0px 0px 4px 4px;
  }
  .text-box {
    max-width: 600px;
    margin: 0 auto;
    color: #000;
    margin-bottom: 64px;
    h1 {
      text-align: center;
      font-size: 30px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      letter-spacing: 1.25px;
      text-transform: uppercase;
      margin-bottom: 16px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    }
    h2 {
      color: #000;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.4;
      letter-spacing: 1.25px;
    }
  }
  .button {
    color: #fff;
    background: linear-gradient(0deg, #000 26.83%, #80ff80 115.08%);
    margin-bottom: 32px;
    /* Elevation 02 dp */
    box-shadow: 0px 3px 1px 2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
}
</style>
