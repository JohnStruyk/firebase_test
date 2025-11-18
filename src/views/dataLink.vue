<script setup>
import { computed, ref, watch } from 'vue'
import { useCollection, useDocument } from 'vuefire'
import { collection, doc } from 'firebase/firestore'
import {db} from '../firebase_conf'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const test_source = computed(() =>
  doc(db, 'flashCards', route.params.id)
)

const test = useDocument(test_source)

watch(test, (new_data, old_data)=>{
  if (! new_data) {
    router.push("/")
  }
})

</script>

<template>
      <RouterLink :to="{ name: 'test_w_id', params: { id: 'YbVedD84Io6ay73ZIuLl' } }">test</RouterLink>
      <RouterLink :to="{ name: 'test_w_id', params: { id: 'g8hNwft4OaRhnbU0TcRj' } }">other test</RouterLink>
      <RouterLink :to="{ name: 'test_w_id', params: { id: 'r8V3VLmCkLAnPlOutlWe' } }">third test</RouterLink>
    {{test}}
</template>

<style scoped></style>