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
        id: params.id,
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
