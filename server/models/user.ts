export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty: false,
            }
        }
    }, {
        freezeTableName: true,
    });

    return User;
}