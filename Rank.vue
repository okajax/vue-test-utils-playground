<template>
  <div>
    <span class="rank">Your rank is {{ rank }} !</span>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      default: 0,
      type: Number
    }
  },
  computed: {
    rank() {
      if (this.score >= 100) {
        return 3;
      }
      if (this.score >= 50) {
        return 2;
      }
      return 1;
    }
  }
};
</script>
