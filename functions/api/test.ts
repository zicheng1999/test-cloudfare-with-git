import Axios from "axios";

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
        cat: (await Axios.get("https://catfact.ninja/fact")).data,
      })
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        token: token,
        para: params.id,
        error: e,
      })
    );
  }
}
