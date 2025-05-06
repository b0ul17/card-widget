// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { defineCustomElement } from 'vue'
import JobCard from './JobCard.ce.vue'

// Define the custom element
const JobCardElement = defineCustomElement(JobCard)
customElements.define('job-widget', JobCardElement)

// Mount logic
function mountWidget(): void {
  const script = document.currentScript as HTMLScriptElement | null
  const query: string = script?.getAttribute('data-query') ?? 'terms=pentester'

  const countAttr = script?.getAttribute('data-count')
  const count: number = countAttr ? parseInt(countAttr, 10) : 3

  const widget = document.createElement('job-widget') as HTMLElement
  widget.setAttribute('query', query)
  widget.setAttribute('count', count.toString())

  const container = document.getElementById('job-widget-container') || document.body
  container.appendChild(widget)
}

// Ensure we wait for DOM if necessary
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountWidget)
} else {
  mountWidget()
}
