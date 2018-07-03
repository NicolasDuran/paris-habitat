<script src="../router.js">
</script>
<template>
    <div class="trophybox">
        <i class="icon-energy bigicon"></i>
        <div class="label">
            Expert bougie
            <p class="desc">Consommer le moins d'electricité du batiment</p>
        </div>
    </div>
</template>

<style scoped>
    .bigicon {
        font-size: 80px;
        margin-left: 15px;
    }

    .label {
        font-size: 15px;
        margin-top: 10px;
    }

    .desc {
        font-style: italic;
    }

    .trophybox {
        text-align: center;
    }
</style>

<script>
  export default {
    name: "TrophyWidget",
    props: ['tittle', 'desc']
  };
</script>
