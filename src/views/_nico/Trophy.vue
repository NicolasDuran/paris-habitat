<script src="../router.js">
</script>
<template>
    <div>
        <b-row>
            <b-col sm="3" md="3">
                <b-card header="Pro de la douche">
                    <trophy-douche-master></trophy-douche-master>
                </b-card>
            </b-col>
            <b-col sm="3" md="3">
                <b-card header="Roi de la douche">
                    <trophy-douche-king></trophy-douche-king>
                </b-card>
            </b-col>
            <b-col sm="3" md="3">
                <b-card header="Maitre bougie">
                    <trophy-elec></trophy-elec>
                </b-card>
            </b-col>
            <b-col sm="3" md="3">
                <b-card header="M. Jesaistout">
                    <trophy-quiz></trophy-quiz>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<style>
    .goodanswer {
        font-size: 60px;
        color: green;
    }

    .answertxt {
        font-size: 50px;
    }

    .badanswer {
        font-size: 60px;
        color: red;
    }
</style>

<script>
  import TrophyDoucheMaster from '../_nicoComp/TrophyDoucheMaster.vue'
  import TrophyQuiz from '../_nicoComp/TrophyQuiz.vue'
  import TrophyDoucheKing from '../_nicoComp/TrophyDoucheKing.vue'
  import TrophyElec from '../_nicoComp/TrophyElec.vue'

  export default {
    name: "PageTrophy",
    components: {
      TrophyDoucheMaster,
      TrophyDoucheKing,
      TrophyElec,
      TrophyQuiz
    },
    data() {
      return {
      };
    },
    computed: {}
  };
</script>
