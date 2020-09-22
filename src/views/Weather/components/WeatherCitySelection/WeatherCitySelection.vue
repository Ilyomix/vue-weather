<template>
  <div class="weather-city-selection-parent">
    <div class="weather-city-input">
      <v-text-field
        v-model="city"
        dark
        label="City"
        @keypress.enter="submitCity"
      />
      <v-btn
        fab
        x-small
        v-if="city"
        @click="clearInput"
      >
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
      <v-btn
        fab
        x-small
        v-if="city"
        @click="submitCity"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </div>
    <div class="city-selection-parent">
      <button
        v-for="(savedCity, index) in savedCities"
        :key="`${savedCity}-${index + 1}`"
        dark
        :class="`city-selection-button ${savedCity === city ? 'selected' : ''}`"
        @click="submitCityFromCitiesSavedList(savedCity)"
      >
        {{ savedCity }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({})
export default class WeatherCitySelection extends Vue {
  @Prop({ type: String })
  private defaultLocation!: string;

  @Prop({ type: Array })
  private savedCities!: string[];

  private city: string = this.defaultLocation;

  private clearInput() {
    this.city = '';
  }

  private submitCity() {
    if (this.city) {
      this.$emit('submitCity', this.city);
    }
  }

  private submitCityFromCitiesSavedList(city: string) {
    if (city) {
      this.city = city;
      this.$emit('submitCity', city);
    }
  }
}
</script>

<style lang="scss">
  @import url("./styles/weather-city-selection.scss");
</style>
