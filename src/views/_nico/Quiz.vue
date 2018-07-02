<script src="../router.js">
</script>
<template>
    <b-card>
        <div slot="header">
            <strong>Super Quiz !</strong>
        </div>
        <div v-if="state == 'q1'">
            <b-form-group
                    label="Un bain consome..."
                    label-for="basicRadios"
                    :label-cols="3"
                    :horizontal="true">
                <b-form-radio-group id="basicRadios"
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
        </div>
        <div v-if="state == 'q1_g'">
            <i class="cui-circle-check icons font-2xl d-block mt-4"></i>
            <span class="answertxt">Bravo !</span>
            <p>Une douche équivault à beaucoup d'eau</p>
        </div>
        <div v-if="state == 'q1_b'">
            <i class="cui-circle-x icons font-2xl d-block mt-4"></i>
            <span class="answertxt">Raté !</span>
            <p>Une douche équivault à beaucoup d'eau</p>
        </div>

        <div v-if="state == 'q2'">
            <p class="caption">Eteindre les lumières c'est </p>
            <q-option-group
                    type="radio"
                    v-model="answer"
                    :options="[
            { label: 'Bien', value: 'good' },
            { label: 'Pas Bien', value: 'bad1' },
            { label: 'Plutôt con', value: 'bad2' }
          ]"
            />
        </div>
        <div v-if="state == 'q2_g'">
            <q-icon name="done_outline" class="goodanswer" /> <span class="answertxt">Bravo !</span>
            <p>Il faut toujours éteindre les lumières !</p>
        </div>
        <div v-if="state == 'q2_b'">
            <q-icon name="highlight_off" class="badanswer" /> <span class="answertxt">Raté !</span>
            <p>Il faut toujours éteindre les lumières !</p>
        </div>

        <div v-if="state == 'q3'">
            <p class="caption">Fermer le robinet quand on se brosse les dents</p>
            <q-option-group
                    type="radio"
                    v-model="answer"
                    :options="[
            { label: 'Toujours', value: 'good' },
            { label: 'Souvent', value: 'bad1' },
            { label: 'Jamais', value: 'bad2' }
          ]"
            />
        </div>
        <div v-if="state == 'q3_g'">
            <q-icon name="done_outline" class="goodanswer" /> <span class="answertxt">Bravo !</span>
            <p>Fermer le robinet pendant qu'on se brosse les dents, c'est 22 litres d'eau potable économisés</p>
        </div>
        <div v-if="state == 'q3_b'">
            <q-icon name="highlight_off" class="badanswer" /> <span class="answertxt">Raté !</span>
            <p>Fermer le robinet pendant qu'on se brosse les dents, c'est 22 litres d'eau potable économisés</p>
        </div>
        <div v-if="isLast">
            Score: {{score}} / 3
        </div>
        <b-button v-if="isQuestionPage" variant="primary" size="sm" class="btn" @click="checkQuiz()"><span>Valider</span></b-button>
        <b-button variant="primary" size="sm" class="btn" @click="checkQuiz()"><span>Valider</span></b-button>
        <q-btn v-if="isQuestionPage" label="Valider" />
        <q-btn v-if="isAnswerPage && !isLast" label="Question suivante" @click="nextQuestion()"/>
    </b-card>
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
  export default {
    name: "PageQuiz",
    data() {
      return {
        state: "q1",
        answer: null,
        score: 0
      };
    },
    computed: {
      isAnswerPage() {
        return this.state.includes("_");
      },
      isQuestionPage() {
        return !this.isAnswerPage;
      },
      isLast() {
        return this.state === "q3_g" || this.state === "q3_b";
      }
    },
    methods: {
      checkQuiz() {
        if (this.state === "q1") {
          if (this.answer === "good") {
            this.state = "q1_g";
            this.score++;
          } else this.state = "q1_b";
        }
        if (this.state === "q2") {
          if (this.answer === "good") {
            this.state = "q2_g";
            this.score++;
          } else this.state = "q2_b";
        }
        if (this.state === "q3") {
          if (this.answer === "good") {
            this.state = "q3_g";
            this.score++;
          } else this.state = "q3_b";
        }
      },
      nextQuestion() {
        if (this.state.startsWith("q1")) {
          this.state = "q2";
        } else if (this.state.startsWith("q2")) {
          this.state = "q3";
        }
      }
    }
  };
</script>
