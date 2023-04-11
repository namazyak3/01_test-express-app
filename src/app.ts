const express = require("express")
import { Express } from "express"
const mysql = require("mysql")
import { MysqlError } from "mysql"
import logger from "./functions/logger"
import config from "./config"

// expressとmysqlはrequireを使用したい...けど変えるの面倒だからやってない。

const app: Express = express()

app.listen(config.port, () => {
  logger("Node server", `Listen on port ${config.port}`, "\x1b[35m")
})

const connection =  mysql.createPool(config.db)

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/all", (req, res) => {
  connection.query("SELECT * FROM todo_list;", (error: MysqlError, result: any) => {
    if (error) logger("MySQL query", error.message, "\x1b[31m")
    else console.log(result)
  })
})

app.get("/id/:id", (req, res) => {
  const id = req.params.id
  connection.query(`SELECT * FROM todo_list WHERE ID = ${id}`, (error: MysqlError, result: any) => {
    if (error) logger("MySQL query", error.message, "\x1b[31m")
    else console.log(result)
  })
})

/*
パス名とSQL文、メソッドを因数に取った関数を作成すればいちいち長いコードを書かなくて済む。
あるいは、ルーターを作成する?
=> リスナーで取得したリクエストのパラメーターから目的のファイルまでたどりつくことができるように、
疑似的なダイナミックルーティングを作成するのも一つの手かも。
*/