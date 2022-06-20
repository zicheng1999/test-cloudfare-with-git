import Axios from "axios";

export async function onRequest(context) {
  const { env, params } = context;
  const token = env.CLICK_UP_TOKEN;

  try {
    return new Response("Ok");
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
