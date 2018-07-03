<script src="../router.js">
</script>
<template>
    <div class="trophybox">
        <i style="color: #ffd200" class="icon-energy bigicon"></i>
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
    props: ['tittle', 'desc'],
      data() {
          return {
              src: '/img/parking/pk_0.png',
              cpt : 0,
          };
      },
      computed: {
      },
      methods: {
          incr() {
              this.src = '/img/parking/pk_' + this.cpt++ +'.png';
          },
      }
  };
</script>
