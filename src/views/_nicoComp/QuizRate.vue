<script src="../router.js">
</script>
<template>
    <div class="box">
        <span class="answertxt">
            <i class="cui-circle-x icons font-3xl mt-4 badanswer"></i>
            Raté !
        </span>
        <p>{{info}}</p>
    </div>
</template>

<style scoped>
    .box {
        padding-top: 40px;
    }

    .badanswer {
        color: red;
    }

    .answertxt {
        font-size: 30px;
    }
</style>

<script>
  export default {
    name: "QuizRate",
    props: ['info']
  };
</script>
