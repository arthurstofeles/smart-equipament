<template>
  <v-dialog :value="dialog" width="auto" persistent>
    <v-card>
      <v-card-title class="d-flex justify-center flex-column">
        <v-icon x-large color="#0ad9ff" class="mb-6"
          >mdi-check-circle-outline</v-icon
        >
        <span class="mb-2 text-center">{{ dialogMessage }}</span>
      </v-card-title>
      <v-card-actions class="d-flex black--text justify-center">
        <v-btn
          rounded
          class="px-8"
          color="#0ad9ff"
          @click="$emit('close')"
          >{{ dialogTextButton }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AlertSuccess",
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    dialogMessage: {
      type: String,
      default: "Ação efetuada com sucesso!",
    },
    dialogTextButton: {
      type: String,
      default: "OK",
    },
  },
};
</script>
