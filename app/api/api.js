import 'dotenv/config';
import { ChatGPTAPI } from 'chatgpt';
import express from 'express';

const chatApi = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY
})

const api = express();

api.post('/', ({ body }, res) => chatApi.sendMessage(body.consult)
  .then(({ text }) => res.send(text))
);

export default api;