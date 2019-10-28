<template>
  <button class="toggle" :class="{ active: isActive }" @click="toggle"> um botão </button>
</template>

<style>
.toggle {
  margin-right: 5px;

  border-radius: 20px;
  border-color: #671fa3;
  background: #fff;
  color: #444;
  font-weight: bold;
  font-size: 12pt;
}

.toggle.active {
  background: #671fa3;
  color: #fff;
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