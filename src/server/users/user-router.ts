import { Router } from "express";
import { userDao } from "./user-dao";
import * as fs from "fs";
import * as builder from 'xmlbuilder' 
import * as path from "path"

export const userRouterFactory = (userDao) => {
  const router = Router();

  router.get("/", (req, res) => {
    userDao.select({})
      .then((users) => res.send(users))
      .catch((err) => res.status(500).send({ detail: err.detail }));
  });
  router.post("/", (req, res)=>{
    var dirPath = path.resolve(__dirname + './../../../public/xmlfiles/xmldoc.xml') 
    console.log("some text")
    console.log(req.body)
    var doc = req.body;
    var xml = builder.create('ismail')
    .ele('object')
      .ele('first', doc.first)
      .up()
      .ele('second', doc.second)
      .up()
      .ele('third', doc.third)
      .up()
      .end({pretty : true});
      console.log(xml)
      fs.writeFile(dirPath, xml, err => {
        if (err) { return console.log(err) }
        console.log('The file was saved!')
    })
      /* userDao.insert(req.body).then(
      
    ) */
  })
  return router;
};

export const userRouter = userRouterFactory(userDao);
