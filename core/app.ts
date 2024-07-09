import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";

dotenv.config();

// import { firebaseConfig } from "../config/firebaseConfig";

initializeApp({
  credential: applicationDefault()
})


export const firebaseAuth = getAuth();
export const firestore = getFirestore();

const authMiddleWare = require("firebase-auth-express-middleware");




export const app: Express = express();

app.use(authMiddleWare.authn(firebaseAuth, { attachUserTo: "currentUser" }));

