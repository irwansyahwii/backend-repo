import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";


dotenv.config();

import { firebaseConfig } from "../config/firebaseConfig";

initializeApp(firebaseConfig)


const firebaseAuth = getAuth();

const authMiddleWare = require("firebase-auth-express-middleware");




export const app: Express = express();

app.use(authMiddleWare.authn(firebaseAuth));

