const axios = require('axios')
const querystring = require('query-string');

console.log("Start script with VK API...")

const API_URL = 'https://api.vk.com/method/'
const method = 'messages.send'

const access_token = 'f9faf6bbe8e89fd5917137afc7419bcb2d491955cd2ee0665310530de39a17529cf1916a5ee4bd936a388'


async function getProfileInfo(access_token){

    const options = {
        access_token: access_token,
        v:5.131
    }
    
    const REQUEST_URL = querystring.stringifyUrl({
        url: API_URL + 'account.getProfileInfo',
        query: options
    });

    res = axios.get(REQUEST_URL)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}   


async function sendMessage(to, text, access_token){

    const options = {
        user_id: to, 
        message: text,
        random_id: Math.floor(Math.random()*Math.pow(2, 32)),
        access_token: access_token,
        v:5.131
    }
    const REQUEST_URL = querystring.stringifyUrl({
        url: API_URL + 'messages.send',
        query: options
    });

    res = axios.get(REQUEST_URL)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}   

getProfileInfo(access_token)
//sendMessage(196885892, 'Hi<3', access_token);



