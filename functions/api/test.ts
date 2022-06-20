export async function onRequest(context) {
  const { env, params } = context;
  const token = env.CLICK_UP_TOKEN;
  // const myData = await (await Axios.get("https://catfact.ninja/fact")).data;
  try {
    return new Response(
      JSON.stringify({
        token: token,
        other: "test data 0806",
        para: params,
        id: params.id || "no id gotten",
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
