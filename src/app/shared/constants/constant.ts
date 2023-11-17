export const Constants = {
    development: {
        apiUrl: {
            parts: 'http://localhost:5000/api/geo/v1/parts/',
            zone: 'http://localhost:5000/api/geo/v1/zone/',
            tags: 'http://localhost:5000/api/geo/v1/tags/',
            users: 'http://localhost:5000/api/geo/v1/users/',
            groups: 'http://localhost:5000/api/geo/v1/groups/',
        }, 
    }, 
    production: {
        apiUrl: {
            parts: 'https://denso-backend.onrender.com/api/geo/v1/parts/',
            zone: 'https://denso-backend.onrender.com/api/geo/v1/zone/',
            tags: 'https://denso-backend.onrender.com/api/geo/v1/tags/',
            users: 'https://denso-backend.onrender.com/api/geo/v1/users/',
            groups: 'https://denso-backend.onrender.com/api/geo/v1/groups/',
        },
    }, 
}