<template>
    <q-page padding>
        <charts></charts>
        <charts></charts>
    </q-page>
</template>

<style>
</style>

<script>
import Charts from "../components/chart/chart.vue";

export default {
  name: "PageData",
  components: {
    Charts
  },
  data() {
    return {};
  }
};
</script>
