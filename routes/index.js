const express = require("express");

// 라우터 구성
const postsRouter = require("./posts");
const usersRouter = require("./users");
const authRouter = require("./auth");
const commentsRouter = require("./comments");

module.exports = { postsRouter, usersRouter, authRouter, commentsRouter };
