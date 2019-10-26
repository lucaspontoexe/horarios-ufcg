<template>
  <div class="filtros">
    <!-- todo: transformar botões em componentes -->
    <button class="toggle" :class="{ active: isActive }" @click="toggle">Optativas</button>
    <button class="toggle" :class="{ active: isActive }" @click="toggle">1º P</button>
    <button class="toggle" :class="{ active: isActive }" @click="toggle">2º P</button>
  </div>
</template>

<style scoped>
.filtros {
  display: flex;
  flex-direction: row;
}


.toggle {
  margin-right: 5px;

  border-radius: 10px;
  border-color: blueviolet;
  background: #fff;
  color: #444;
  font-weight: bold;
}

.toggle.active {
  background: blueviolet;
  color: whitesmoke;
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