<template>
  <div class="filtros">
    <!-- todo: transformar botões em componentes -->
    <button class="toggle" :class="{ active: isActive }" @click="toggle">Optativas</button>
    <tag />
  </div>
</template>

<style>

.filtros {
  display: flex;
  flex-direction: row;
}

</style>

<script>
import tag from './Tag';

export default {
  name: "filtros",
  components: { tag },
};
</script>