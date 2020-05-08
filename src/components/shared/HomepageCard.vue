<template>
  <v-col xs10 sm4 md3 lg3>
    <v-card outlined class="mx-auto homepage-card" max-width="400">
      <!-- Removed V-img as it was extending card size -->
      <div class="card-img-container">
        <img class="white--text align-end card-main-image" height="200px" :src="item.src.large" />
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </div>

      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn outlined raised color="primary" text>Share</v-btn>

        <v-btn raised color="secondary" text>Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "HomepageCard",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.card-main-image {
  width: 100%;
}
div.card-img-container {
  position: relative;
  overflow: hidden;
  .v-card__title {
    position: absolute;
    top: 70%;
    left: 0px;
    color: white;
  }
}
</style>