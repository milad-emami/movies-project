import request from "../helpers/request";

function getDetails() {
  return request.get({ path: "account" });
}

const accountService = {
  getDetails,
};

export default accountService;
