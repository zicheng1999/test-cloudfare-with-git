<template>
  <div class="home">
    <div>Timer: {{ getTimer }}</div>
    <div>Click Up Data</div>
    <div>{{ getResp }}</div>
  </div>
</template>

<script setup lang="ts">
import Axios from "axios";
import { onBeforeMount, ref, computed } from "vue";

const timer = ref<number>(0);
const resp = ref("");

async function getTasks(id: string) {
  console.log("id", id);

  const result = await Axios.get(
    "https://test-cloudfare-with-git.pages.dev/api/test"
  );
  return result;
}

const getResp = computed(() => {
  return resp.value;
});

const getTimer = computed(() => {
  return timer.value;
});
onBeforeMount(async () => {
  startTimer();
  const res = await getTasks("testid_001");
  console.log("res.data", res.data);
  console.log("res.data.myData", JSON.parse(res.data.myData));
  resp.value = JSON.parse(res.data.myData);
});

function startTimer() {
  setTimeout(() => {
    timer.value += 1;
  }, 1000);
}
</script>
