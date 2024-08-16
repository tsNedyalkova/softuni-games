import * as requester from './requester.js';

const BASE_URL = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => requester.get(BASE_URL);
