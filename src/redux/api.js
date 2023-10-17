// Local dev environment
// export const url = 'http://localhost:5000/api/v1';
export const url = process.env.REACT_APP_ENV === 'production' ? process.env.REACT_APP_BACKEND_URL : process.env.REACT_APP_LOCAL_BACKEND_URL;


// export const url = 'https://finefinancebackendapi.onrender.com/api/v1';


// Heroku Production
// export const url = '/api/v1/';