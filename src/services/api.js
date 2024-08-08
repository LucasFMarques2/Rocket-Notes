import axios from 'axios';

export const api = axios.create({
    baseURL: "https://notesrocket-api-0nt8.onrender.com"
  });

