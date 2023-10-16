<template>
  <div class="contato">
    <div>
      <v-row no-gutters>
        <v-col cols="12"
          ><h2>Solicitar Contato</h2>
          <p>
            Se quiser saber mais sobre a nossa proposta, deixe seu e-mail ou
            telefone que entraremos em contato. Caso prefira, também pode nos
            contatar diretamente
          </p>
          <v-form ref="form" v-model="valid" lazy-validation class="mt-6">
            <v-text-field
              v-model="formData.name"
              label="Nome"
              required
              :rules="genericRules"
              color="black"
              placeholder="Insira seu nome aqui"
            ></v-text-field>
            <v-text-field
              v-model="formData.email"
              label="E-mail"
              required
              :rules="emailRules"
              color="black"
              placeholder="Insira seu e-mail"
            ></v-text-field>
            <v-text-field
              v-model="formData.phone"
              label="Telefone"
              required
              :rules="genericRules"
              color="black"
              placeholder="(xx) xxxxx-xxxx"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-btn
          x-large
          rounded
          class="enviar black--text mt-6 px-10"
          color="#0ad9ff"
          @click="send"
          :loading="loading"
          >Solicitar</v-btn
        >
      </v-row>
    </div>
    <div class="copy">
      <p>© Smart Equipament - Todos os direitos reservados</p>
      <div>
        <small>Uma startup da</small> <img src="@/assets/eletrobras.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContatorHome",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    sucess: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    formData: {
      name: "",
      email: "",
      phone: "",
    },
    valid: false,
    emailRules: [
      (v) => !!v || "Esse campo é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "Ensira um e-mail valido",
    ],
    genericRules: [(v) => !!v || "Esse campo é obrigatório"],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    send() {
      if (this.formValid) {
        this.$emit("contato", this.formData);
      }
    },
    reset() {
      this.formData.phone = "";
      this.formData.email = "";
      this.formData.phone = "";
      this.$refs.form.reset();
    },
  },
  computed: {
    formValid() {
      return this.$refs.form.validate();
    },
  },
  watch: {
    sucess() {
      this.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.contato {
  background: #c3f6ff;
  padding-top: 64px;
  padding-bottom: 64px;
  .row {
    position: relative;
    padding-bottom: 16px;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 16px;
  }
  h2 {
    color: #0ad9ff;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .enviar {
    display: flex;
    margin: 0 auto;
  }
  .copy {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    div {
      display: flex;
      align-items: flex-end;
      gap: 16px;
      justify-content: center;
      small {
        font-style: italic;
      }
      img {
        max-width: 150px;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
    margin-top: 32px;
    padding-top: 32px;
    border-top: 1px solid rgb(118, 118, 118);
  }
}
</style>
