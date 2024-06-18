import apiRequest from "./apiRequest"

export const singlePageLoader = async ({ requests, params }) => {
    const res = await apiRequest.get("/posts/" + params.id)
    console.log(res.data);
    return res.data;
}

export const listPageLoader = async ({ requests, params }) => {

}