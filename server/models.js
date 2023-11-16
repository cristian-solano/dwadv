const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:test@127.0.0.1:5432/dwadv');

const User = sequelize.define('User', {
    // Model attributes are defined here
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false
      },

  }, {
    tableName: 'user'
  });


const Product = sequelize.define('Product', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    stock: {
        type: DataTypes.BIGINT,
        allowNull: false
      },

  }, {
    tableName: 'product'
  });

const Invoice = sequelize.define('Invoice', {
    // Model attributes are defined here
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'invoice'
});

const InvoiceDetail = sequelize.define('InvoiceDetail', {
    // Model attributes are defined here
    invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sequence: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    amount: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'invoice_detail'
});



User.hasMany(Invoice,
    {
        foreignKey: {
            name: 'user_id'
          }
    });

Invoice.hasMany(InvoiceDetail,
   {
        foreignKey: {
            name: 'invoice_id'
        }
   })


   InvoiceDetail.hasMany(Product, 
    {
        foreignKey: {
            name: 'product_id'
        }
    })

module.exports = {
    User,
    Invoice,
    Product,
    InvoiceDetail,
    sequelize
}