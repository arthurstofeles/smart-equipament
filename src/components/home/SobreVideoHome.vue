<template>
  <div class="video" id="sobre">
    <div>
      <h2>Sobre a Solução</h2>
      <div class="video-container">
        <iframe
          width="768"
          height="415"
          src="https://www.youtube.com/embed/-AR02WKjZ_g?si=sixrpei0STUnzNRb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreVideoHome",
};
</script>

<style lang="scss" scoped>
.video {
  background-color: #05EC7F;
  padding: 32px 16px;
  div {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    h2 {
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      letter-spacing: 1.25px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .video-container {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 30px;
      height: 0;
      overflow: hidden;
      iframe,
      object,
      embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
