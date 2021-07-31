import request from "../helper/request";

function getDetails() {
  return request.get({ path: "account" });
}

const accountService = {
  getDetails,
};

export default accountService;
