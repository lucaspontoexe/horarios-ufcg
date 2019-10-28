<template>
  <button class="toggle" :class="{ active: isActive }" @click="toggle"> um botão </button>
</template>

<style>
.toggle {
  margin-right: 5px;

  border-radius: 20px;
  border-color: blueviolet;
  background: #fff;
  color: #444;
  font-weight: bold;
  font-size: 20px;
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