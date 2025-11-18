<script setup>
import { ref } from 'vue'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { db } from '../firebase_conf.js'

const tests = useCollection(collection(db, 'flashCards'))
</script>
<template>
  <div>
    <h1>Fun View</h1>
    <ul>
      <li v-for="test in tests" :key="test.id">
        {{ test.front }} - {{ test.back }}
      </li>
    </ul>
  </div>