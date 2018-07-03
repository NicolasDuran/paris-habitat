<script src="../router.js">
</script>
<template>
    <div>
        <b-card v-if="showInfo==false">
            <div slot="header">
                <strong>Super Quiz !</strong>
            </div>
            <b-row>
                <b-col sm="6">
                    <img src="/img/tube.png">
                    <b-form-group
                            label="Un bain consome..."
                            label-for="q1Radios"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-radio-group id="q1Radios"
                                            v-model="answer1"
                                            :plain="true"
                                            :options="[
                                            { text: `2 fois plus d'eau qu'une douche`, value: 'bad1' },
                                            { text: `3 fois plus d'eau qu'une douche`, value: 'good' },
                                            { text: `5 fois plus d'eau qu'une douche`, value: 'bad2' }
                                        ]"
                                            checked="2"
                                            stacked>
                        </b-form-radio-group>
                    </b-form-group>
                </b-col>
                <b-col sm="4">
                    <div v-if="q1_state=='good'">
                        <quiz-bravo info="Une douche équivault à 20% de la consommation moyenne d'un parisien"></quiz-bravo>
                    </div>
                    <div v-if="q1_state=='bad'">
                        <quiz-rate info="Non, un bain consomme entre 3 et 6 fois plus qu'une douche"></quiz-rate>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="6">
                    <img src="/img/water_drop.png" width="30px">
                    <b-form-group
                            label="la consommation moyenne d'un parisien est..."
                            label-for="q2Radios"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-radio-group id="q2Radios"
                                            v-model="answer2"
                                            :plain="true"
                                            :options="[
                                            { text: `15 litres d'eau par jour`, value: 'bad1' },
                                            { text: `90 litres d'eau par jour`, value: 'bad2' },
                                            { text: `120 litres d'eau par jour`, value: 'good' },
                                        ]"
                                            checked="2"
                                            stacked>
                        </b-form-radio-group>
                    </b-form-group>
                </b-col>
                <b-col sm="4">
                    <div v-if="q2_state=='good'">
                        <quiz-bravo info="Ça correspond à 17 chasses d'eau"></quiz-bravo>
                    </div>
                    <div v-if="q2_state=='bad'">
                        <quiz-rate info="Indice: Ça correspond à 17 chasses d'eau"></quiz-rate>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="6">
                    <img src="/img/elec.png" width="50px">
                    <b-form-group
                            label="Avec 1kWh, je peux prendre..."
                            label-for="q3Radios"
                            :label-cols="3"
                            :horizontal="true">
                        <b-form-radio-group id="q3Radios"
                                            v-model="answer3"
                                            :plain="true"
                                            :options="[
                                            { text: `1 douche`, value: 'good' },
                                            { text: `3 douches`, value: 'bad1' },
                                            { text: `7 douches`, value: 'bad2' },
                                        ]"
                                            checked="2"
                                            stacked>
                        </b-form-radio-group>
                    </b-form-group>
                </b-col>
                <b-col sm="4">
                    <div v-if="q3_state=='good'">
                        <quiz-bravo info="C'est l'équivalent de faire 50 tasses de café, ou allumer une ampoule pendant 17h."></quiz-bravo>
                    </div>
                    <div v-if="q3_state=='bad'">
                        <quiz-rate info="Indice: C'est l'équivalent de faire 50 tasses de café, ou allumer une ampoule pendant 17h."></quiz-rate>
                    </div>
                </b-col>
            </b-row>

            <!--<div v-if="isLast">-->
                <!--Score: {{score}} / 3-->
            <!--</div>-->
            <b-row>
                <b-col sm="8">
                    <b-button variant="primary" size="sm" class="btn" @click="checkQuiz()"><span>Valider</span></b-button>
                </b-col>

                <b-col sm="4">
                    <b-button variant="success" size="sm" class="btn" @click="toggleInfo()"><span>Information</span></b-button>
                </b-col>
            </b-row>
        </b-card>


        <b-card v-if="showInfo">
            <div slot="header">
                <strong>Information !  </strong>
                <b-button variant="success" size="sm" class="btn" @click="toggleInfo()"><span>Quiz</span></b-button>
            </div>

            <div>
                <b-carousel id="carousel1"
                            style="text-shadow: 1px 1px 2px #333;"
                            controls
                            indicators
                            background="#ababab"
                            :interval="4000"
                            v-model="slide"
                >

                    <!-- Text slides with image -->
                    <b-carousel-slide img-src="/img/water_conso.png"
                                      img-width="507"
                                      img-height="181"
                    ></b-carousel-slide>

                    <!-- Slides with custom text -->
                    <b-carousel-slide img-src="/img/elec_conso.png">
                    </b-carousel-slide>

                </b-carousel>
            </div>
            <b-button variant="success" size="sm" class="btn" @click="toggleInfo()"><span>Quiz</span></b-button>

        </b-card>
    </div>
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

        slide: 0,
        sliding: null,
        score: 0,
        showInfo: false,
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
        if (this.answer3 === "good") {
          this.q3_state = 'good';
          this.score++;
        } else {
          this.q3_state = 'bad';
        }
      },
      toggleInfo() {
        this.showInfo = !this.showInfo;
      }
    }
  };
</script>
