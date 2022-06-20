<template>
  <div class="home">
    <div>Test Cloud Function</div>
    <div>{{ getCurrent }}</div>
    <div>Timer: {{ timer }}</div>
    <div>Click Up Data</div>
    <div>{{ getResp }}</div>
  </div>
</template>

<script setup lang="ts">
import Axios from "axios";
import { onBeforeMount, ref, computed } from "vue";

const timer = ref<number>(0);
const resp = ref("");
const now = ref(new Date());
async function getTasks(id: string) {
  console.log("id", id);

  const result = await Axios.get(
    "https://test-cloudfare-with-git.pages.dev/api/test"
  );
  return result;
}
const getCurrent = computed(() => {
  return now.value;
});

const getResp = computed(() => {
  return resp.value;
});

onBeforeMount(async () => {
  const res = await getTasks("testid_001");
  console.log("res.data", res.data);
  console.log("res.data.myData", JSON.parse(res.data.myData));
  resp.value = res.data;
  startTimer();
});

function startTimer() {
  setTimeout(() => {
    timer.value += 1;
  }, 1000);
}
</script>
