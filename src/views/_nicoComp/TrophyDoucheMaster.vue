<script src="../router.js">
</script>
<template>
    <div class="trophybox">
        <i class="fa fa-tachometer fa-lg mt-4 bigicon"></i>
        <div class="label">
            Pro de la douche
            <p class="desc">Prendre une douche en moins de 4 minutes</p>
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
