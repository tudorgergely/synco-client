import axios from "axios";

class Api {
    constructor() {
        this.fetch = axios.create({
            baseURL: 'localhost:8080/'
        });
    }

    fetchTimeline(page) {
        return this.fetch.get('/timeline', {
            params: {
                page
            }
        });
    }

    search(text) {
        return this.fetch.post('/search', {
            text
        });
    }

    getRecentSearches() {
        return this.fetch.get('/search/recent');
    }

    uploadFiles(files) {
        return this.fetch.post('/upload', {
            files
        });
    }

    downloadFile(file) {
        return this.fetch.get('/files/', {
            params: {
                file
            }
        });
    }

    googleAuth() {

    }

    dropboxAuth() {

    }
}

export default new Api();