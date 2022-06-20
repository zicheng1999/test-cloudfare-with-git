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

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const redJson = await res.json();
  const info = JSON.stringify(redJson);
  return new Response(info);

  // return new Response(env.CLICK_UP_TOKEN);
}
