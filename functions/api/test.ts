import Axios from "axios";
interface IFilterDealerData {
  field_id: string;
  operator: string;
  value: string;
}
export async function onRequest(context) {
  const { env, params } = context;

  try {
    const taskListId = "152199949";
    const apiGetTasks = `https://api.clickup.com/api/v2/list/${taskListId}/task`;

    const dealerId = "c89f3d59-05a1-4fc5-9875-50b3294af7b5";

    const token = env.CLICK_UP_TOKEN;
    const config = {
      headers: {
        Authorization: token ? token : "",
      },
    };

    // const tasks = (await Axios.get(apiGetTasks, config)).data;

    return new Response(
      JSON.stringify({
        token: env.CLICK_UP_TOKEN,
        other: "test data 0806",
        // tasks: tasks,
        para: params.id,
      })
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        token: env.CLICK_UP_TOKEN,
        para: params.id,
        error: e,
      })
    );
  }
}
