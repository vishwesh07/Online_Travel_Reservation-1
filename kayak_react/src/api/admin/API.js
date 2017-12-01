const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

const headers = {
    'Accept': 'application/json'
};

export const addflightData = (payload) =>
    fetch(`${api}/admin/addFlightData`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const addHotel = (payload) =>
    fetch(`${api}/admin/addHotel`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const fetchHotels = (payload) =>
    fetch(`${api}/admin/fetchHotels`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const addRoomInHotel = (payload) =>
    fetch(`${api}/admin/addRoomInHotel`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const fetchFlights = (payload) =>
    fetch(`${api}/admin/fetchFlights`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const modifyHotelData = (payload) =>
    fetch(`${api}/admin/modifyHotel`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const modifyFlightData = (payload) =>
    fetch(`${api}/admin/modifyFlight`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const modifyFlightClassData = (payload) =>
    fetch(`${api}/admin/modifyFlightClass`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const fetchCars = (payload) =>
    fetch(`${api}/admin/fetchCars`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const addCar = (payload) =>
    fetch(`${api}/admin/addCar`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const modifyCarData = (payload) =>
    fetch(`${api}/admin/modifyCar`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const fetchHosts = (payload) =>
    fetch(`${api}/admin/fetchHosts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const addHost = (payload) =>
    fetch(`${api}/admin/addHost`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const modifyHostData = (payload) =>
    fetch(`${api}/admin/modifyHost`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const fetchUsers = (payload) =>
    fetch(`${api}/admin/fetchUsers`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const modifyUserData = (payload) =>
    fetch(`${api}/admin/modifyUsers`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:"include"
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });


