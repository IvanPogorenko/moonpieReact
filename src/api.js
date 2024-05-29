import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8082/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const registerUser = async (userData) => {
    try {
        const response = await api.post('http://localhost:8082/api/register', {
            email: userData.email,
            name: userData.username,
            password: userData.password
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const authenticateUser = async (email, password) => {
    try {
        const response = await api.get('http://localhost:8082/api/auth', {
            params: { email, password }
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw error;
    }
};

export const getItemsByCategory = async (categoryName) => {
    try {
        const response = await api.get('http://localhost:8082/api/item', {
            itemCategory: categoryName
        });
        return response.data;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw error;
    }
};

export const getItemByName = async (itemName) => {
    try {
        const response = await api.get('http://localhost:8082/api/item-by-name', {
            params: {
                name: itemName
            }
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw error;
    }
};

export const addItemToCart = async (cartData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await api.post('/api/cart',
        {
            data: {
                itemName: cartData.itemName,
                size: cartData.size,
                color: cartData.color,
                quantity: 1
            },
            headers: {
                Authorization: `${token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
    }
};