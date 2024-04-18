const { Sequelize, DataTypes }=require('sequelize');

// const sequelize=new Sequelize('groundbusiness','amanmishra7ave','5pLSBBQn5LDLh4CVzOjKiF8m0kgvUkzr', {
//     host:'dpg-cod378ol5elc73fgeceg-a',
//     dialect:'postgres',
// });

const sequelize = new Sequelize('postgres://amanmishra7ave:5pLSBBQn5LDLh4CVzOjKiF8m0kgvUkzr@dpg-cod378ol5elc73fgeceg-a/groundbusiness', {
    dialect: 'postgres',
    hostname:'dpg-cod378ol5elc73fgeceg-a',
    ssl:true,
    dialectOptions: {
        ssl:{
            require:true,
        }
    }
});

const SignUp=sequelize.define('SignUp',{
    name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    phoneNumber: {
        type:DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: {
            is: /^\d{10}$/i
        },
    },
}, {
    timestamps:true,
});

module.exports=SignUp;