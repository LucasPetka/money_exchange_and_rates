import fetch from 'node-fetch';

class FetchService {

    static async fetchData(url){
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default FetchService;