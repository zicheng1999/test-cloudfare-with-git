import Axios from "axios";
interface IFilterDealerData {
  field_id: string;
  operator: string;
  value: string;
}
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
    const taskListId = "152199949";
    const apiGetTasks = `https://api.clickup.com/api/v2/list/${taskListId}/task`;
    const dealerListId = "6c299cb2-95a0-42d9-9772-04a4afd9de31";
    const operator = "=";

    const dealerId = params.id || "c89f3d59-05a1-4fc5-9875-50b3294af7b5";
    const filterDealerData: IFilterDealerData = {
      field_id: dealerListId,
      operator: operator,
      value: dealerId,
    };
    const token = env.CLICK_UP_TOKEN;
    const config = {
      headers: {
        Authorization: token ? token : "",
      },
      params: {
        custom_fields: JSON.stringify([filterDealerData]),
      },
    };

    const tasks = (await Axios.get(apiGetTasks, config)).data.tasks;

    return new Response(
      JSON.stringify({
        token: env.CLICK_UP_TOKEN,
        other: "test data",
        tasks: tasks,
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
