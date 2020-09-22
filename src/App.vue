<template>
  <v-app>
    <v-main>
      <div id="app">
        <Weather />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Weather from 'src/views/Weather/Weather.vue';
import 'src/assets/styles/global.scss';

export default Vue.extend({
  name: 'App',
  components: {
    Weather,
  },
});
</script>
