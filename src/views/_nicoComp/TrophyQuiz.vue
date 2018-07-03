<script src="../router.js">
</script>
<template>
    <div class="trophybox">
        <i style="color: #ff0000" class="icon-badge bigicon"></i>
        <div class="label">
            M. Jesaistout
            <p class="desc">Réussir le quiz !</p>
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
