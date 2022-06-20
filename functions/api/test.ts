import Axios from "axios";
export async function onRequest(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  try {
    return new Response(
      JSON.stringify({
        token: env.CLICK_UP_TOKEN,
        other: "test data",
      })
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        token: env.CLICK_UP_TOKEN,
        error: e,
      })
    );
  }
}
