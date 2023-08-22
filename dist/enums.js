"use strict";
// Enums
var ROLES;
(function (ROLES) {
    ROLES["manager"] = "manager";
    ROLES["ceo"] = "ceo";
})(ROLES || (ROLES = {}));
function printar(role) {
    console.log("🤬 ~ file: enums.ts:8 ~ printar ~ role:", role);
}
printar(ROLES.ceo);
