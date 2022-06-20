<template>
  <div class="home">
    <div>Test Cloud Function 0745 pm</div>
  </div>
</template>

<script lang="ts">
import Axios from "axios";
import { onBeforeUnmount } from "vue";

async function getTasks(id: string) {
  const result = await Axios.get("/api/test", {
    params: { id: id },
  });
  return result;
}

onBeforeUnmount(async () => {
  console.log("in onBeforeMount");
  await getTasks("test id");
});
</script>
