<template>
  <v-row justify="center">
    <v-dialog v-model="modalOpen" sm8 md6 lg6 max-width="500">
      <v-card>
        <v-img :src="imageData ? imageData.src.large : ''" height="50vh" />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["imageData", "modalOpen", "toggleModal"],
  data() {
    return {};
  },
  methods: {
    handleToggleModal() {
      console.log("handle lightbox emit");
      this.$emit("toggleModal");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>