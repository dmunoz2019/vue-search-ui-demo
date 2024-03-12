<template>
  <div class="sui-paging-info">
    Mostrando
    <strong>{{ start }} - {{ Math.min(end, searchState.totalResults) }}</strong>
    de <strong>{{ searchState.totalResults }}</strong> resultados para:
    <em>"{{ searchState.searchTerm }}"</em>
  </div>
</template>

<script>
export default {
  props: {
    searchState: {
      required: true,
      type: Object
    }
  },
  computed: {
    start() {
      return this.searchState.totalResults === 0
        ? 0
        : (this.searchState.current - 1) * this.searchState.resultsPerPage + 1;
    },
    end() {
      return this.searchState.totalResults <= this.searchState.resultsPerPage
        ? this.searchState.totalResults
        : this.start + this.searchState.resultsPerPage - 1;
    }
  }
};
</script>
