<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <!-- :to="item.to" -->
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="loadImages(item.category)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <!-- <v-row> -->
      <v-form @submit.prevent="handleSearch" md4 class="ml-5">
        <v-text-field
          outlined
          dense
          label="search.."
          rounded
          md6
          v-model="searchBarQuery"
          hide-details
          placeholder="Search"
          prepend-icon="mdi-search"
          single-line
        ></v-text-field>
      </v-form>
      <!-- </v-row> -->
      <v-spacer />
      <v-btn color="primary" @click="changeTheme">Change Theme</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt :test="text" />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      themeColor: "dark",
      searchBarQuery: "",
      text: "hellowWor;d",
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Space",
          to: "/",
          category: "Space"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Cats",
          to: "/",
          category: "Cats"
        },
        {
          icon: "pets",
          title: "Dogs",
          to: "/",
          category: "Dogs"
        },
        {
          icon: "commute",
          title: "Cars",
          to: "/",
          category: "Cars"
        },
        {
          icon: "business",
          title: "Cities",
          to: "/",
          category: "Cities"
        },
        {
          icon: "mdi-spa",
          title: "Flowers",
          to: "/",
          category: "Flowers"
        },
        {
          icon: "where_to_vote",
          title: "Locations",
          to: "/",
          category: "Locations"
        },
        {
          icon: "beach_access",
          title: "Beaches",
          to: "/",
          category: "Beaches"
        },
        {
          icon: "settings_input_antenna",
          title: "Nasa",
          to: "/",
          category: "Nasa"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  },
  computed: {
    title() {
      return this.$store.state.search.searchQuery;
    }
  },
  methods: {
    changeTheme() {
      this.themeColor == "dark" ? this.lightTheme() : this.darkTheme();
    },
    darkTheme() {
      console.log("dark");
      this.$vuetify.theme.dark(true);
      this.themeColor = "dark";
    },
    lightTheme() {
      console.log("light");

      this.$vuetify.theme.dark = false;
      this.themeColor = "light";
    },
    loadImages(query) {
      this.$store.dispatch("search/setSearchQuery", query);
      this.$store.dispatch("search/fetchImages", query);
    },
    handleSearch() {
      let searchTerm = this.searchBarQuery;
      this.loadImages(searchTerm);
      this.searchBarQuery = "";
    }
  }
};
</script>
