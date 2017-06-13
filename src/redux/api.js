import axios from "axios";

const f = axios.create({
    baseURL: 'localhost:8080/'
});

export default {
    fetchTimeline(page) {
        // return f.get('/timeline', {
        //     params: {
        //         page
        //     }
        // });
        return Promise.resolve([
            {
                name: 'Today',
                items: [
                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive', 'dropbox'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    },
                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive', 'dropbox'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    },
                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive', 'dropbox'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    },
                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive', 'dropbox'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    }
                ]
            },
            {
                name: 'Yesterday',
                items: [
                    {
                        date: new Date(),
                        type: 'search',
                        locations: ['hdd', 'drive', 'dropbox'],
                        content: 'fisier.zip'
                    }
                ]
            },

            {
                name: 'Last month',
                items: [
                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    }
                ]
            },
            {
                name: 'Last year',
                items: [
                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    },

                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    },

                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    },

                    {
                        date: new Date(),
                        type: 'upload',
                        locations: ['drive'],
                        content: 'Nume_fisier_5.png'
                    },
                    {
                        date: new Date(),
                        type: 'download',
                        locations: ['dropbox'],
                        content: 'fisier.zip'
                    }
                ]
            },
        ]);
    },

    search(text) {
        // return f.post('/search', {
        //     text
        // });
        return Promise.resolve([{id: 'asda', fileMetadata: {name: '1312', size: '12312'}}])
    },

    getRecentSearches() {
        return f.get('/search/recent');
    },

    uploadFiles(files) {
        return f.post('/upload', {
            files
        });
    },

    downloadFile(file) {
        return f.get('/files/', {
            params: {
                file
            }
        });
    },

    googleAuth() {

    },

    dropboxAuth() {

    }
}