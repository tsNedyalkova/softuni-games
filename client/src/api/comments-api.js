import requester from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/games/';

const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`;

const create = async (gameId, username, text) => {
   const result = await requester.post(buildUrl(gameId), { username, text });  

   return result;
};

const getAll = async (gameId) => {
    const result = await requester.get(buildUrl);

    const comments = Object.values(result);

    return comments;
};

const commentsAPI = {
    create,
    getAll
};

export default commentsAPI;