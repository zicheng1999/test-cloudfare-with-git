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

  const res = await Axios.get(`https://rickandmortyapi.com/api/character/1`);
  const resJson = await res.data();
  const result = {
    data: resJson,
    env: env.CLICK_UP_TOKEN,
  };
  const info = JSON.stringify(result);
  return new Response(result);
}
