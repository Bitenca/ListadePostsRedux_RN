import axios from 'axios';
// coloque os actions creators aqui

const Request_Url = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => {
    // fazer pedido hTTP para obter todos os posts
    const request = axios.get(Request_Url + '/posts/');

    //e depois despachar action com os dados dos posts 
    return{
        type: 'FETCH_POSTS',
        payload: request  //promise
    };
};

export const fetchPost = (id) => {
    //faz pedido http
    const request = axios.get(Request_Url + '/posts/' + id);

    //retorna a action
    return{
        type: 'FETCH_POST',
        payload: request //vai virar response por causa do redux promise
    };
}