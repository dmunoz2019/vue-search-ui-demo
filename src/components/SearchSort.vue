<template>
  <div class="sui-sorting">
    <div class="sui-sorting__label">Ordenar por</div>
    <select
      name="sortBy"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option value="">Relevancia</option>
      <option value="name">Nombre</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
</script>
