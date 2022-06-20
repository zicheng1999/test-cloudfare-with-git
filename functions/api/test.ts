async function fetchText(token: string) {
  const taskListId = "152199949";
  const apiGetTasks = `https://api.clickup.com/api/v2/list/${taskListId}/task`;

  const response = await fetch(apiGetTasks, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? token : "",
    },
    method: "GET",
  });

  return await response.text();
}
export async function onRequest(context) {
  const { request, env, params } = context;
  const token = env.CLICK_UP_TOKEN;
  try {
    return new Response(
      JSON.stringify({
        token: token,
        other: "test data 0806",
        para: params,
        id: params.id || "no id gotten",
        myData: await fetchText(token),
      })
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        token: token,
        para: params.id,
        error: e,
      })
    );
  }
}
