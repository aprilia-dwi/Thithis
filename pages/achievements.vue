<script setup>
definePageMeta({
  layout: "main",
});
useHead({
  title: 'Achievements',
})

const achievements = [
  {
    text: 'Pacar Aryoks',
    class: 'i-mdi:trophy dark:text-gray-200 text-gray-500 w-6 h-6',
    description: `Pacar aryoks yang sangat cantik,manis,pokoknya sangat luar biasa`
  },
]
</script>
<template>
<section class="content">
  <div class="container mx-auto">
    <div class="section__header | text-center">
      <h1 class='section__title'>My Achievements</h1>
    </div>
    <ul class="pl-0 list-none">
      <li v-for="achievement in achievements" class="achievement-item mb-5">
        <div class="achievement-name list-none flex gap-3 items-center ">
          <div :class="achievement.class"></div>
          <span class="font-bold text-lg">
            {{achievement.text}}
          </span>
        </div>
        <div class="achievement-description pl-10 py-5 leading-loose dark:opacity-80" v-html="achievement.description.replaceAll(new RegExp('\n', 'g'), '<br/>')">
        </div>
      </li>
    </ul>
  </div>
</section>
</template>