const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const jwt = require('jsonwebtoken');
const SECRET = 'someSecretStringForJWT';  



// Load data from JSON files
const loadData = (filename) => {
    try {
        return JSON.parse(fs.readFileSync(filename, 'utf8'));
    } catch (err) {
        console.error(`Error reading the ${filename} file!`);
        return [];
    }
};

let restaurants = loadData('./data/restaurants.json');
let menus = loadData('./data/menus.json');
let reservations = loadData('./data/reservations.json');
let reviews = loadData('./data/reviews.json');
let orders = loadData('./data/orders.json');
let users = loadData('./data/users.json');
// Define the services
const services = [
    {

        name: 'Management Service',
        port: 5000,
        app: express(),
        endPoints: [
            {
                path: '/reset-db',
                method: 'POST',
                description: 'Reset the database',
                params: [],
                body: [],
                service: (req, res) => {
                    restaurants = loadData('./data/restaurants.json');
                    menus = loadData('./data/menus.json');
                    reservations = loadData('./data/reservations.json');
                    reviews = loadData('./data/reviews.json');
                    orders = loadData('./data/orders.json');
                    users = loadData('./data/users.json');
                    res.json({ message: 'Database reset' });
                }
            },
        ]
    },
    {
        name: 'Restaurant Service',
        port: 5001,
        app: express(),
        endPoints: [
            {
                path: '/restaurants',
                method: 'GET',
                description: 'Get restaurant info by ID',
                params: [
                    {
                        name: 'restaurant_id',
                        type: 'number',
                        description: 'Restaurant ID'
                    }
                ],
                body: [],
                service: (req, res) => {
                    const restaurantId = Number(req.query.restaurant_id);
                    if (!restaurantId) {
                        return res.json(restaurants);
                    }
                    const restaurant = restaurants.find(r => r.restaurant_id === restaurantId);
                    if (!restaurant) {
                        return res.status(404).json({ error: 'Restaurant not found' });
                    }
                    res.json(restaurant);
                }
            },
        ]
    },
    {
        name: 'Menu Service',
        port: 5002,
        app: express(),
        endPoints: [
            {
                path: '/menu-items',
                method: 'GET',
                description: 'Get menu items by restaurant ID',
                params: [
                    {
                        name: 'restaurant_id',
                        type: 'number',
                        description: 'Restaurant ID'
                    }
                ],
                body: [],
                service: (req, res) => {
                    const restaurantId = Number(req.query.restaurant_id);
                    const items = menus.filter(item => item.restaurant_id === restaurantId);
                    res.json(items);
                }
            },
        ]
    },
    {
        name: 'Reservation Service',
        port: 5003,
        app: express(),
        endPoints: [
            {
                path: '/reservation-details',
                method: 'GET',
                description: 'Get reservation details by restaurant ID',
                params: [
                    {
                        name: 'restaurant_id',
                        type: 'number',
                        description: 'Restaurant ID'
                    }
                ],
                body: [],
                service: (req, res) => {
                    const restaurantId = Number(req.query.restaurant_id);
                    const reservationDetails = reservations.filter(reservation => reservation.restaurant_id === restaurantId);
                    res.json(reservationDetails);
                }
            },
            {
                path: '/reservation-details',
                method: 'POST',
                description: 'Create a new reservation',
                params: [],
                body: [
                    {
                        name: 'restaurant_id',
                        type: 'number',
                        description: 'Restaurant ID'
                    },
                    {
                        name: 'name',
                        type: 'string',
                        description: 'Name'
                    },
                    {
                        name: 'date',
                        type: 'string',
                        description: 'Date'
                    },
                    {
                        name: 'time',
                        type: 'string',
                        description: 'Time'
                    },
                    {
                        name: 'people',
                        type: 'number',
                        description: 'Number of people'
                    },
                    {
                        name: 'phone',
                        type: 'string',
                        description: 'Phone number'
                    },
                    {
                        name: 'email',
                        type: 'string',
                        description: 'Email'
                    }
                ],
                service: (req, res) => {
                    const reservation = req.body;
                    reservations.push(reservation);
                    res.json(reservation);
                }  
            }
        ]
    },
    {
        name: 'Review Service',
        port: 5004,
        app: express(),
        endPoints: [
            {
                path: '/reviews',
                method: 'GET',
                description: 'Get reviews by restaurant ID',
                params: [
                    {
                        name: 'restaurant_id',
                        type: 'number',
                        description: 'Restaurant ID'
                    }
                ],
                body: [],
                service: (req, res) => {
                    const restaurantId = Number(req.query.restaurant_id);
                    const reviewsForRestaurant = reviews.filter(review => review.restaurant_id === restaurantId);
                    res.json(reviewsForRestaurant);
                }
            },
            {
                path: '/reviews',
                method: 'POST',
                description: 'Create a new review',
                params: [],
                body: [
                    {
                        name: 'restaurant_id',
                        type: 'number',
                        description: 'Restaurant ID'
                    },
                    {
                        name: 'name',
                        type: 'string',
                        description: 'Name'
                    },
                    {
                        name: 'date',
                        type: 'string',
                        description: 'Date'
                    },
                    {
                        name: 'rating',
                        type: 'number',
                        description: 'Rating'
                    },
                    {
                        name: 'comments',
                        type: 'string',
                        description: 'Comments'
                    }
                ],
                service: (req, res) => {
                    const review = req.body;
                    reviews.push(review);
                    res.json(review);
                }
            }
        ]
    },
    {
        name: 'Order Service',
        port: 5005,
        app: express(),
        endPoints: [
            {
                path: '/orders',
                method: 'GET',
                description: 'Get orders by restaurant ID',
                params: [
                    {
                        name: 'restaurant_id',
                        type: 'number',
                        description: 'Restaurant ID'
                    }
                ],
                body: [],
                service: (req, res) => {
                    const restaurantId = Number(req.query.restaurant_id);
                    const ordersForRestaurant = orders.filter(order => order.restaurant_id === restaurantId);
                    res.json(ordersForRestaurant);
                }
            },
            {
                path: '/orders',
                method: 'POST',
                description: 'Create a new order',
                params: [],
                body: [
                    {
                        name: 'restaurant_id',
                        type: 'number',
                        description: 'Restaurant ID'
                    },
                    {
                        name: 'user_id',
                        type: 'number',
                        description: 'User ID'
                    },
                    {
                        date: 'date',
                        type: 'string',
                        description: 'Date'
                    },
                    {
                        name: 'order_items',
                        type: 'array',
                        description: 'Order items'
                    }
                ],
                service: (req, res) => {
                    const order = req.body;
                    orders.push(order);
                    console.log("orders", orders)
                    //HTMLFormControlsCollection.log(orders)
                    res.json(order);
                }
            }
        ]
    },
    {
        name: 'User Service',
        port: 5006,
        app: express(),
        endPoints: [
            {
                path: '/authenticate',
                method: 'POST',
                description: 'Authenticate a user and return JWT',
                params: [],
                body: [
                    {
                        name: 'email',
                        type: 'string',
                        description: 'User Email'
                    },
                    {
                        name: 'password',
                        type: 'string',
                        description: 'User Password'
                    },
                    {
                        name: 'token',
                        type: 'string',
                        description: 'User Token'
                    }
                ],
                service: (req, res) => {
                    const { email, password, token: receivedToken } = req.body;
                    let user
                    if (receivedToken) {
                        try {
                            const decoded = jwt.verify(receivedToken, SECRET);
                            user = users.find(u => u.user_id === decoded.user_id);
                            if (!user) {
                                return res.status(401).json({ error: 'Invalid token' });
                            }
                            return res.json({
                                user_id: user.user_id,
                                name: user.name,
                                email: user.email,
                                token: receivedToken
                            });
                        } catch (err) {
                            return res.status(401).json({ error: 'Invalid token' });
                        }
                    } 
    
                    user = users.find(u => u.email === email && u.password === password);
                    if (!user) {
                        return res.status(401).json({ error: 'Invalid email or password' });
                    }
    
                    const token = jwt.sign(
                        { user_id: user.user_id, name: user.name, email: user.email },
                        SECRET,
                        { expiresIn: '8h' }  
                    );
                    user.token = token;
    
                    res.json({
                        user_id: user.user_id,
                        name: user.name,
                        email: user.email,
                        token: token
                    });
                }
            },
             {
            path: '/register',
            method: 'POST',
            description: 'Create a new user',
            params: [],
            body: [
                {
                    name: 'name',
                    type: 'string',
                    description: 'User name'
                },
                {
                    name: 'email',
                    type: 'string',
                    description: 'User Email'
                },
                {
                    name: 'password',
                    type: 'string',
                    description: 'User Password'
                }
            ],
            service: (req, res) => {
                const { name, email, password } = req.body;

                // Validation
                if (users.some(u => u.email === email)) {
                    return res.status(400).json({ error: 'Email already exists' });
                }
                
                const newUser = {
                    user_id: Math.max(...users.map(u => u.user_id)) + 1,  
                    name,
                    email,
                    password
                };
                users.push(newUser);
                
                // fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
                const newUserWithoutPassword = {
                     user_id: newUser.user_id,
                     name: newUser.name,    
                     email: newUser.email
                 };

                res.status(201).json(newUserWithoutPassword);
            }
        }
        ]
    }
            
]

services.forEach(service => {
    const app = service.app
    const port = service.port;
    app.use(bodyParser.json());
    endPoints = service.endPoints;
    endPoints.forEach(endPoint => {
       app[endPoint.method.toLowerCase()](endPoint.path, endPoint.service);
    });
       
    app.listen(port, () => {
        console.log(`${service.name} started on http://localhost:${port}`);
    });
});



