import request from "../helper/request";

function createRequestToken() {
  return request.get({ path: "authentication/token/new" });
}

function createSession(request_token) {
  return request.post(
    { path: "authentication/session/new" },
    { request_token }
  );
}

const userService = {
  createRequestToken,
  createSession,
};

export default userService;
