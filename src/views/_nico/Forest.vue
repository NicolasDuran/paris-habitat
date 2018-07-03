<script src="../router.js">
</script>
<template>
    <div>
        <b-row>
            <b-col sm="12" md="12">
                <b-card header="Ma foret">
                    <div class="forestBox">
                        <div class="label">
                            <p class="desc">Mon parking et ma foret</p>
                            <img :src="src" @click="incr()" width="90%"/>
                        </div>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<style>
    .label {
        font-size: 15px;
        margin-top: 10px;
    }

    .desc {
        font-style: italic;
    }

    .forestBox {
        text-align: center;
    }
</style>

<script>
  export default {
    name: "PageForest",
    components: {
    },
      data() {
          return {
              src: '/img/parking/pk_0.png',
              cpt : 0,
              increment:1,
          };
      },
      computed: {
      },
      methods: {
          incr() {
              if (this.cpt == 11) {
                  this.increment = -1;
              } else if (this.cpt == 0) {
                  this.increment = 1;
              }
              this.cpt += this.increment;
              this.src = '/img/parking/pk_' + this.cpt + '.png';
          },
      },
    computed: {}
  };
</script>
