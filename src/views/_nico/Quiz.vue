<script src="../router.js">
</script>
<template>
    <b-card>
        <div slot="header">
            <strong>Super Quiz !</strong>
        </div>
        <b-row>
            <b-col sm="6">
                <b-form-group
                        label="Un bain consome..."
                        label-for="q1Radios"
                        :label-cols="3"
                        :horizontal="true">
                    <b-form-radio-group id="q1Radios"
                                        v-model="answer1"
                                        :plain="true"
                                        :options="[
                                            { text: `2 fois plus d'eau qu'une douche`, value: 'good' },
                                            { text: `4 fois plus d'eau qu'une douche`, value: 'bad1' },
                                            { text: `40 fois plus d'eau qu'une douche`, value: 'bad2' }
                                        ]"
                                        checked="2"
                                        stacked>
                    </b-form-radio-group>
                </b-form-group>
            </b-col>
            <b-col sm="4">
                <div v-if="q1_state=='good'">
                    <quiz-bravo info="Une douche équivault à beaucoup deau"></quiz-bravo>
                </div>
                <div v-if="q1_state=='bad'">
                    <quiz-rate info="Une douche équivault à beaucoup deau"></quiz-rate>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col sm="6">
                <b-form-group
                        label="Un bain consome..."
                        label-for="q2Radios"
                        :label-cols="3"
                        :horizontal="true">
                    <b-form-radio-group id="q2Radios"
                                        v-model="answer2"
                                        :plain="true"
                                        :options="[
                                            { text: `2 fois plus d'eau qu'une douche`, value: 'good' },
                                            { text: `4 fois plus d'eau qu'une douche`, value: 'bad1' },
                                            { text: `40 fois plus d'eau qu'une douche`, value: 'bad2' }
                                        ]"
                                        checked="2"
                                        stacked>
                    </b-form-radio-group>
                </b-form-group>
            </b-col>
            <b-col sm="4">
                <div v-if="q2_state=='good'">
                    <quiz-bravo info="Une douche équivault à beaucoup deau"></quiz-bravo>
                </div>
                <div v-if="q2_state=='bad'">
                    <quiz-rate info="Une douche équivault à beaucoup deau"></quiz-rate>
                </div>
            </b-col>
        </b-row>

        <div v-if="isLast">
            Score: {{score}} / 3
        </div>
        <b-button variant="primary" size="sm" class="btn" @click="checkQuiz()"><span>Valider</span></b-button>
    </b-card>
</template>

<script>
  import QuizBravo from '../_nicoComp/QuizBravo.vue'
  import QuizRate from '../_nicoComp/QuizRate.vue'

  export default {
    name: "PageQuiz",
    components: {
      QuizBravo,
      QuizRate
    },
    data() {
      return {
        answer1: null,
        answer2: null,
        answer3: null,

        q1_state: null,
        q2_state: null,
        q3_state: null,

        score: 0
      };
    },
    computed: {
    },
    methods: {
      checkQuiz() {
        if (this.answer1 === "good") {
          this.q1_state = 'good';
          this.score++;
        } else {
          this.q1_state = 'bad';
        }
        if (this.answer2 === "good") {
          this.q2_state = 'good';
          this.score++;
        } else {
          this.q2_state = 'bad';
        }
      }
    }
  };
</script>
