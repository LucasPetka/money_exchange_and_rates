import NodeCache from 'node-cache';

class CacheService {
    
    constructor(ttlSeconds) {
        this.cache = new NodeCache({ stdTTL: ttlSeconds });
    }

    async cacheData(cacheName, json){
        if(this.cache.has(cacheName)){
            return this.cache.get(cacheName);
        }
        else{
            this.cache.set(cacheName, json);
            return json;
        }
    }

}

export default CacheService;