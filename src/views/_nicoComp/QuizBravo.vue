<script src="../router.js">
</script>
<template>
    <div class="box">
        <span class="answertxt">
            <i class="cui-circle-check icons font-3xl mt-4 goodanswer"></i>
            Bravo !
        </span>
        <p>{{info}}</p>
    </div>
</template>

<style scoped>
    .box {
        padding-top: 40px;
    }

    .goodanswer {
        color: green;
    }

    .answertxt {
        font-size: 30px;
    }
</style>

<script>
  export default {
    name: "QuizBravo",
    props: ['info']
  };
</script>
