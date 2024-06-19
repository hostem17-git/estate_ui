import apiRequest from "./apiRequest"

export const singlePageLoader = async ({ request, params }) => {
    const res = await apiRequest.get("/posts/" + params.id)
    console.log(res.data);
    return res.data;
}

export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1];
    const res = await apiRequest.get("/posts?" + query)
    // console.log(res.data);
    return res.data;
}