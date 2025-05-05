<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  query: String,
  count: {
    type: Number,
    default: 3,
  },
})

interface Job {
  title: string
  image: string
  subtitle: string
  company: string
}

const jobs = ref<Job[]>([])

onMounted(async () => {
  const res = await fetch(`https://theofficeapi.dev/api/episodes?${props.query}`)
  const data = await res.json()
  jobs.value = Array.isArray(data.results) ? data.results.slice(0, props.count) : []
})
</script>

<template>
  <div class="job-widget">
    <div class="job-card" v-for="job in jobs" :key="job.title">
      <img :src="job.image ?? 'https://placehold.co/600x400'" alt="Job Image" class="job-image" />
      <div class="job-info">
        <h3>{{ job.title }} test</h3>
        <p>{{ job.subtitle }}</p>
        <strong>{{ job.company }}</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-widget {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  background: blueviolet;
}
.job-card {
  border: 1px solid #ddd;
  padding: 1em;
  border-radius: 8px;
  display: flex;
  gap: 1em;
  background: blue;
  height: 200px;
}
.job-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
}
.job-info h3 {
  margin: 0;
  color: black;
}
</style>
