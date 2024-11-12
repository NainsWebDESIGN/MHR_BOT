// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./routes/index.js";
import equipmentRouter from "./routes/equipment.js";
import rockRouter from "./routes/rock.js";
import usersRouter from "./routes/users.js";

const app = express();

import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());

// 设置EJS作为模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // 指定视图文件夹

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/equi", equipmentRouter);
app.use("/rock", rockRouter);

// module.exports = app;
export default app;
