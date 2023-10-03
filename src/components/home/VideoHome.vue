<template>
  <div class="video" id="video">
    <div>
      <h2>Como Funciona</h2>
      <div class="video-container">
        <iframe
          width="768"
          height="415"
          src="https://www.youtube.com/embed/4QJNCq75NAo?si=WVo8GqcAR54OfA8l"
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
  name: "VideoHome",
};
</script>

<style lang="scss" scoped>
.video {
  background-color: #000;
  padding: 32px 16px;
  div {
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
    h2 {
      color: #fff;
      text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
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
