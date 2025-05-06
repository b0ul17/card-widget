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
  location: {
    country: string,
    country_code: string,
    state: string,
  }
  company: string
  published_at: string
  organization: { logo_url: string }
}

const formattedDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

const jobs = ref<Job[]>([])

onMounted(async () => {
  const res = await fetch(`https://api.jobs.hackthebox.com/api/v1/job-offers?${props.query}`)
  const data = await res.json()
  jobs.value = Array.isArray(data.data) ? data.data.slice(0, props.count) : []
})
</script>

<template>
  <div class="job-widget">
    <div class="job-card" v-for="job in jobs" :key="job.title">
      <img :src="job.organization.logo_url ?? 'https://placehold.co/600x400'" alt="Job" class="job-image" />
      <div class="job-info">
        <h3>{{ job.title }}</h3>
        <p>{{ job.location.country }}</p>
        <strong>{{ job.company }}</strong>
        <strong>{{ formattedDate(job.published_at) }}</strong>
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
