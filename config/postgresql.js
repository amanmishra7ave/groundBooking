const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://amanmishra7ave:5pLSBBQn5LDLh4CVzOjKiF8m0kgvUkzr@dpg-cod378ol5elc73fgeceg-a.singapore-postgres.render.com/groundbusiness', {
    dialect: 'postgres',
    ssl:true,
    dialectOptions: {
        ssl:{
            require:true,
        }
    }
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectDb;


// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres://amanmishra7ave:5pLSBBQn5LDLh4CVzOjKiF8m0kgvUkzr@dpg-cod378ol5elc73fgeceg-a.singapore-postgres.render.com/groundbusiness', {
//   dialect: 'postgres',
// });

// // Test the connection
// sequelize.authenticate()
//   .then(() => {
//     console.log('Database connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

// module.exports = sequelize;


// const { Sequelize }=require('sequelize');

// const sequelize=new Sequelize(process.env.DATABASE_URL,{
//     dialect:'postgres',
// });


// const connectDB=async()=>{
//     try {
//         await sequelize.authenticate();
//         console.log('Database connected:', process.env.DATABASE_URL);
//     } catch(err){
//         console.error('Unable to connect to the database:',err)
//     }
// };

// module.exports=connectDB;