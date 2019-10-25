<template>
  <div class="filtros">
    <button class="toggle">Optativas</button>
  </div>
</template>

<style scoped>

.toggle {
    border-radius: 10px;
    border-color: blueviolet;
    background: #fff;
}

</style>

<script>
export default {
  name: "filtros",
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  }
};
</script>