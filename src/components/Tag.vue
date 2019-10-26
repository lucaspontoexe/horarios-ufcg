<template>
  <button class="toggle" :class="{ active: isActive }" @click="toggle">Optativas</button>
</template>

<style>
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
  name: "tag",
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