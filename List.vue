<template>
  <div>
    <ul>
      <li
        v-for="(item, i) in items"
        :key="i"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        'cola',
        'apple',
        'banana'
      ]
    };
  },
  methods: {
    sort(desc) {
      this.items.sort((a, b) => {
        let exp;
        if (desc) {
          exp = a > b;
        } else {
          exp = a < b;
        }

        return exp ? -1 : 1;
      });
    }
  }
};
</script>
