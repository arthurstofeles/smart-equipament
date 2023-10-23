<template>
  <div class="funcionalidades">
    <div>
      <h2>Funcionalidades</h2>
      <img src="@/assets/funcionamento.jpeg" alt="" srcset="">
      <div class="func-container">
        <div>
          <v-icon x-large color="black"> mdi-check-circle-outline </v-icon>
          <p>
            Identificação de equipamentos e seus elementos, além de sua
            localização na instalação e rotas até os mesmos.
          </p>
        </div>
        <div>
          <v-icon x-large color="black"> mdi-check-circle-outline </v-icon>
          <p>
            Supervisão de grandezas elétricas e estados dos equipamentos obtidos
            dos sistemas de supervisão. Identificação de manutenção em
            equipamentos e áreas restritas.
          </p>
        </div>
        <div>
          <v-icon x-large color="black"> mdi-check-circle-outline </v-icon>
          <p>
            Chamadas de vídeo possibilitando acompanhar o que os técnicos em
            campo estão vendo e fornecer orientações precisas no espaço
            tridimensional.
          </p>
        </div>
        <div>
          <v-icon x-large color="black"> mdi-check-circle-outline </v-icon>
          <p>
            Integração com outras ferramentas possibilitando o acesso em campo
            as autorizações de serviço, checklist de inspeções e exibição de
            esquemáticos, diagramas e modelos 3D de elementos dos equipamentos.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FuncionalidadesHome",
};
</script>

<style lang="scss" scoped>
.funcionalidades {
  background-color: #80ff80;
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
    img {
      width: 100%;
      border-radius: 4px;
    }
    .func-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      padding: 32px 0px;
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      div {
        display: flex;
        align-items: flex-start;
        text-align: left;
        gap: 16px;
      }
    }
  }
}
</style>
