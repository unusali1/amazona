import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Unus',
            email: 'yali71507@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin : true

        },
        {
            name: 'Adnan',
            email: 'adnan123@gmail.com',
            password: bcrypt.hashSync('654321'),
            isAdmin :false

        }

    ],
    products:[
        {
            _id:"62ac0d05230306d71f5e58f5",
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category:'Shirts',
            images:require('./images/p1.jpg'),
            price: 120,
            countInStock: 10,
            brand :'Nike',
            rating:4.5,
            numReviews: 10,
            description:'high quality shirt',
        },
        { 
            _id:"62ac0d05230306d71f5e58f6",
            name: 'Adidas Fit Shirt',
            slug: 'adidas-slim-shirt',
            category:'Shirts',
            images:require('./images/p2.jpg'),
            price: 250,
            countInStock:10,
            brand :'adidas',
            rating:4.0,
            numReviews: 10,
            description:'high quality products',
        },
        {
            _id:"62ac0d05230306d71f5e58f7",
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category:'Pants',
            images:require('./images/p3.jpg'), //679px * 829px
            price: 25,
            countInStock:15,
            brand :'Nike',
            rating:4.5,
            numReviews: 14,
            description:'high quality shirt',
        },
        {
            _id:"62ac0d05230306d71f5e58f8",
            name: 'Adidas Fit Pants',
            slug: 'adidas-slim-pant',
            category:'Pants',
            images:require('./images/p4.jpg'),
            price: 250,
            countInStock:10,
            brand :'Puma',
            rating:4.0,
            numReviews: 10,
            description:'high quality products',
        },
        
        
    ],
};

export default data;