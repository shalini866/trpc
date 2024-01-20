/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { appRouter,createContext } from '@org/backend/trpc-core';
import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors'
import express from 'express';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { connectToDatabase } from '../../db/db';

const app = express();
 
connectToDatabase();

app.use(
  cors({  
    origin:['http://localhost:4201'],
    credentials: false,
  })
)

app.use((req,res,next)=>{
   //middleware
   console.log('middleware', req.method,req.path,req.body ?? req.query)
   next()
});

app.use(
  '/api',
  trpcExpress.createExpressMiddleware({
    router:appRouter,
    createContext
  })
)

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to trpc-server!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
 