import axios from "axios";

const f = axios.create({
    baseURL: 'http://localhost:8080/'
});

export default {
    fetchTimeline(page) {
        return f.get('/timeline', {
            params: {
                page
            }
        })
            .then(res => res.data);
        // return Promise.resolve([
        //     {
        //         name: 'Today',
        //         items: [
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive', 'dropbox'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive', 'dropbox'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive', 'dropbox'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive', 'dropbox'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             }
        //         ]
        //     },
        //     {
        //         name: 'Yesterday',
        //         items: [
        //             {
        //                 date: new Date(),
        //                 type: 'search',
        //                 locations: ['hdd', 'drive', 'dropbox'],
        //                 content: 'fisier.zip'
        //             }
        //         ]
        //     },
        //
        //     {
        //         name: 'Last month',
        //         items: [
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             }
        //         ]
        //     },
        //     {
        //         name: 'Last year',
        //         items: [
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             },
        //
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             },
        //
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             },
        //
        //             {
        //                 date: new Date(),
        //                 type: 'upload',
        //                 locations: ['drive'],
        //                 content: 'Nume_fisier_5.png'
        //             },
        //             {
        //                 date: new Date(),
        //                 type: 'download',
        //                 locations: ['dropbox'],
        //                 content: 'fisier.zip'
        //             }
        //         ]
        //     },
        // ]);
    },

    search(text) {
        return f.post('/api/search/', {
            q: text
        }).then(res => res.data);
        // return Promise.resolve([{id: 'asda', fileMetadata: {name: '1312', size: '12312'}}])
    },

    getRecentSearches() {
        return f.get('/timeline/recentSearches')
            .then(res => res.data);
    },

    uploadFiles(files) {
        const data = new FormData();
        files.forEach((file, i) => {
            data.set(i, file);
        });
        return f.post('/api/import/', data);
    },

    downloadFile(file) {
        return f.get(`/api/export/${file.id}`, {responseType: 'blob'})
            .then(res => {
                console.log(res);
                return res.data
            });
    },

    getBackupPath() {
        return f.get('/settings/backupPath').then(r => r.data);
    },
    setBackupPath(path) {
        return f.post('/settings/backupPath', {path}).then(r => r.data);
    },
    getSyncPath() {
        return f.get('/settings/syncPath').then(r => r.data);
    },
    setSyncPath(path) {
        return f.post('/settings/syncPath', {path}).then(r => r.data);
    },

    googleAuth() {

    },

    dropboxAuth() {

    }
}