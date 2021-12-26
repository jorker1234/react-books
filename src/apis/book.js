import axios from 'axios';

const bookApi = axios.create({
    baseURL: 'http://localhost:8100/apis/books/',
});

export const list = async () => {
    const response = await bookApi.get();
    return response.data;
}

export const get = async (id) => {
    const response = await bookApi.get(null, {params: {id}});
    return response.data;
    
}

export const add = async (book) => {
    try {
        delete book.id;
        const response = await bookApi.post(null, {...book});
        return response.data.success;
    }catch(error) {
        return false;
    }
}

export const update = async (book) => {
    try {
        const response = await bookApi.put(null, {...book});
        return response.data.success;
    }catch(error) {
        return false;
    }
}

export const remove = async (id) => {
    try {
        const response = await bookApi.delete(null, {params: {id}});
        return response.data.success;
    }catch(error) {
        return false;
    }
}
