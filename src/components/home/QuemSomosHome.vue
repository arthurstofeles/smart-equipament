<template>
  <div class="quem-somos">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="mb-10">
          <h2>Equipe</h2>
        </v-col>
        <div class="colunas">
          <div class="perfil">
            <img src="@/assets/antonio.png" alt="Antonio Gabriel" />
            <div>
              <h3>
                <a href="#" target="_blank">Antonio Gabriel</a>
              </h3>
              <p>Gestão do Projeto</p>
              <p>Eng. Eletricista, mestre em eng. elétrica e MBA em Gestão de Projetos</p>
              <p><small>DPE.P - Departamento de Projetos Eletromecânicos de Subestações e Equipamentos -Furnas</small></p>
            </div>
          </div>
          <div class="perfil left">
            <img src="@/assets/christhian.png" alt="Christhian Fonseca" />
            <div>
              <h3>
                <a href="#" target="_blank">Christhian Fonseca</a>
              </h3>
              <p>Gestão da Tecnologia</p>
              <p>Eng. Eletricista, mestre em Eng. da Computação, Desenvolvedor A</p>
              <p><small>CTRS.O - Centro de Operações Regional São Paulo - Furnas</small></p>
            </div>
          </div>
          <div class="perfil">
            <img src="@/assets/thiago.png" alt="Thiago Jayme" />
            <div>
              <h3>
                <a href="#" target="_blank">Thiago Jayme</a>
              </h3>
              <p>Gestão do Negócio</p>
              <p>Eng. Eletricista, Software, Seg. do Trabalho, MBA Gerenciamento de Projetos</p>
              <p><small>DRB.O - Departamento de Produção Brasília - Furnas</small></p>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
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
    max-width: 900px;
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
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 32px;
    width: 100%;
    padding-bottom: 32px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
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
}
</style>
