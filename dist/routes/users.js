"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controller/users");
const router = (0, express_1.Router)();
router.post('/', users_1.createUser);
exports.default = router;
