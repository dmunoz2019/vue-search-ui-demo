<template>
  <article class="search-result">
    <h2 class="search-result__heading">{{ result.name.raw }}</h2>
    <div class="search-result__body">
      <img
        class="search-result__image"
        :src="imageSrc(result.id.raw)"
        :alt="result.name.raw"
      />
      <div class="search-result__data">
        <div v-if="result.type">Tipo: {{ result.type.raw }}</div>
        <div v-if="result.race">Raza: {{ result.race.raw }}</div>
        <div v-else-if="result.card_class">
          Clase: {{ result.card_class.raw }}
        </div>
        <div>Set: {{ result.set.raw }}</div>
        <div>Rarity: {{ result.rarity.raw }}</div>
        <br />
        <div v-if="result.cost">Cost: {{ result.cost.raw }}</div>
        <div v-if="result.attack">Attack: {{ result.attack.raw }}</div>
        <div v-if="result.durability">
          Durabilidad: {{ result.durability.raw }}
        </div>
        <div v-if="result.health">Salud: {{ result.health.raw }}</div>
        <div v-if="result.armor">Defensa: {{ result.armor.raw }}</div>
        <div v-if="result.spell_damage">
          Daño de hechizo: {{ result.spell_damage.raw }}
        </div>
        <div v-if="result.overload">Sobrecarga: {{ result.overload.raw }}</div>
        <div v-if="result.artist">Artista: {{ result.artist.raw }}</div>
      </div>
    </div>
    <p class="search-result__flavor">{{ result.flavor.raw }}</p>
  </article>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  methods: {
    imageSrc(id) {
      return `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${id}.png`;
    }
  }
};
</script>

<style scoped>
.search-result {
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  align-items: center;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.search-result__heading {
  text-align: center;
  margin: 0;
}

.search-result__body {
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
}

.search-result__data {
  padding-top: 50px;
}

.search-result__flavor {
  margin: 0;
}

.search-result__image {
  flex: none;
  width: 256px;
  height: 387px;
}
</style>
