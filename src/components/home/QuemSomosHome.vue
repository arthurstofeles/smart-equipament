<template>
  <div class="quem-somos">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="mb-10">
          <h2>Quem somos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            imperdiet interdum leo non ullamcorper. Cras tempor vitae ipsum et
            facilisis.
          </p>
        </v-col>
        <div class="colunas">
          <div class="perfil">
            <img src="@/assets/cirlce.svg" alt="Fulano de Tal" />
            <div>
              <h3>
                <a href="#" target="_blank">Fulano de Tal</a>
              </h3>
              <p>Função Profissional da pessoa</p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/cirlce.svg" alt="Fulano de Tal" />
            <div>
              <h3>
                <a href="#" target="_blank">Fulano de Tal</a>
              </h3>
              <p>Função Profissional da pessoa</p>
            </div>
          </div>
          <div class="perfil">
            <img src="@/assets/cirlce.svg" alt="Fulano de Tal" />
            <div>
              <h3>
                <a href="#" target="_blank">Fulano de Tal</a>
              </h3>
              <p>Função Profissional da pessoa</p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/cirlce.svg" alt="Fulano de Tal" />
            <div>
              <h3>
                <a href="#" target="_blank">Fulano de Tal</a>
              </h3>
              <p>Função Profissional da pessoa</p>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
    <div class="copy">© Smart Equipament - Todos os direitos reservados</div>
  </div>
</template>

<script>
export default {
  name: "QuemSomosHome",
};
</script>

<style lang="scss" scoped>
.quem-somos {
  padding: 64px 0 32px 0;
  background: #fff;
  .row {
    max-width: 768px;
    margin: 0 auto;
  }
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
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .colunas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 32px;
    width: 100%;
    padding-bottom: 32px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    .perfil {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 16px;
      @media screen and (max-width: 768px) {
        flex-direction: row;
        text-align: left;
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 16px;
        @media screen and (max-width: 768px) {
          width: 80px;
          height: 80px;
        }
      }
      div {
        h3 {
          color: #000;
          font-weight: 500;
          font-size: 18px;
          line-height: 1.4;
          margin-bottom: 8px;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-bottom: 4px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
        }
        p {
          font-style: italic;
          font-weight: 300;
          font-size: 14px;
          line-height: 1.4;
          @media screen and (max-width: 768px) {
            font-size: 12px;
          }
        }
      }
    }
    .left {
      @media screen and (max-width: 768px) {
        flex-direction: row-reverse;
        text-align: right;
      }
    }
  }
  .copy {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #000;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
    padding-top: 32px;
    border-top: 1px solid #000;
  }
}
</style>
