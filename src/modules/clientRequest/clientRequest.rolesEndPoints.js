import roles from "../../utils/roles.js";

const clientRequestEndPointsRoles = {
  getClientRequest: [roles.Admin],
  deleteClientRequest: [roles.Admin],
};

export default clientRequestEndPointsRoles;
