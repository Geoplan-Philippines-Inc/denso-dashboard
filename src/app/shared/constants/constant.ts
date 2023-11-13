export const Constants = {
    development: {
        apiUrl: {
            parts: 'http://localhost:5000/api/geo/v1/parts/',
            zone: 'http://localhost:5000/api/geo/v1/zone/',
            tags: 'http://localhost:5000/api/geo/v1/tags/',
        }, 
    }, 
    production: {
        apiUrl: {
            parts: 'https://denso-backend.onrender.com/api/geo/v1/parts/',
            zone: 'https://denso-backend.onrender.com/api/geo/v1/zone/',
            tags: 'https://denso-backend.onrender.com/api/geo/v1/tags/',
        },
    }, 
}