<template>
  <div>
    <BannerHome />
    <FuncionalidadesHome id="funcionalidade" />
    <VideoHome />
    <SobreVideoHome />
    <QuemSomosHome />
    <ContatoHome @contato="contato" :loading="loadingBtn" :sucess="sucess" />
    <AlertSuccess
      :dialog="sucess"
      :dialogMessage="message"
      dialogTextButton="OK"
      @close="sucess = false"
    />
    <AlertError :alertError="error" :messageError="message" />
  </div>
</template>

<script>
import BannerHome from "../components/home/BannerHome.vue";
import FuncionalidadesHome from "../components/home/FuncionalidadesHome.vue";
import VideoHome from "../components/home/VideoHome.vue";
import SobreVideoHome from "../components/home/SobreVideoHome.vue";
import ContatoHome from "../components/home/ContatoHome.vue";
import QuemSomosHome from "../components/home/QuemSomosHome.vue";

import AlertSuccess from "@/components/custom/AlertSuccess";
import AlertError from "@/components/custom/AlertError";

import { sendContato } from "../utils/services";

export default {
  name: "HomeView",
  components: {
    BannerHome,
    VideoHome,
    ContatoHome,
    QuemSomosHome,
    FuncionalidadesHome,
    SobreVideoHome,
    AlertSuccess,
    AlertError,
  },
  data: () => ({
    sucess: false,
    error: false,
    message: "",
    loadingBtn: false,
  }),
  methods: {
    async contato(e) {
      this.error = false;
      this.loadingBtn = true;
      try {
        await sendContato(e).then(() => {
          this.loadingBtn = false;
          this.message = "Solicitação de contato enviada!";
          this.sucess = true;
        });
      } catch (e) {
        this.loadingBtn = false;
        this.message = "Ocorreu um erro inesperado";
        this.error = true;
      }
    },
  },
};
</script>

<style></style>
