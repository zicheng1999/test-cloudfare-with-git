async function fetchText() {
  const response = await fetch("https://catfact.ninja/fact");
  return await response.text();
}
export async function onRequest(context) {
  const { env, params } = context;
  const token = env.CLICK_UP_TOKEN;
  try {
    return new Response(
      JSON.stringify({
        token: token,
        other: "test data 0806",
        para: params,
        id: params.id || "no id gotten",
        myData: fetchText(),
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
