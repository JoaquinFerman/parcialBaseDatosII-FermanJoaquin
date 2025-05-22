// Joaquin Ferman, DNI 46288575
// 1)
db.cafesEspeciales.insertMany([
    {
        tipo : 'espresso',
        ingredientes : ['vainilla'],
        peso : 190,
        intensidad : 'media',
        precios : [
            {
                efectivo : '500'
            },
            {
                tarjeta : '600'
            }
        ],
        leche : true,
        tostador : {
            localidad : 'espeleta',
            nombre : 'tostador espeleta',
            cuit : '37458634'
        }
    },
    {
        tipo : 'cold brew',
        ingredientes : ['vainilla', 'chocolate'],
        peso : 200,
        intensidad : 'baja',
        precios : [
            {
                efectivo : '500'
            },
            {
                tarjeta : '600'
            }
        ],
        leche : true,
        tostador : {
            localidad : 'quilmes',
            nombre : 'tostador mateo',
            cuit : '37458634'
        }
    },
    {
        tipo : 'espresso',
        ingredientes : ['vainilla'],
        peso : 210,
        intensidad : 'alta',
        precios : [
            {
                efectivo : '500'
            },
            {
                tarjeta : '600'
            }
        ],
        leche : true,
        tostador : {
            localidad : 'puerto rico',
            nombre : 'tostador puerto rico',
            cuit : '37458634'
        }
    },
    {
        tipo : 'espresso',
        ingredientes : ['vainilla', 'chocolate'],
        peso : 300,
        intensidad : 'baja',
        precios : [
            {
                efectivo : '500'
            },
            {
                tarjeta : '600'
            }
        ],
        leche : true,
        tostador : {
            localidad : 'san miguel',
            nombre : 'tostador san miguel',
            cuit : '37458634'
        }
    },
    {
        tipo : 'cold brew',
        ingredientes : ['caramelo'],
        peso : 290,
        intensidad : 'baja',
        precios : [
            {
                efectivo : '500'
            },
            {
                tarjeta : '600'
            }
        ],
        leche : true,
        tostador : {
            localidad : 'madero',
            nombre : 'tostador madero',
            cuit : '37458634'
        }
    },
    {
        tipo : 'espresso',
        ingredientes : ['vainilla'],
        peso : 150,
        intensidad : 'media',
        precios : [
            {
                efectivo : '500'
            },
            {
                tarjeta : '600'
            }
        ],
        leche : true,
        tostador : {
            localidad : 'san miguel',
            nombre : 'tostador san miguel',
            cuit : '37458634'
        }
    },
    {
        tipo : 'espresso',
        ingredientes : ['vainilla'],
        peso : 250,
        intensidad : 'alta',
        precios : [
            {
                efectivo : '500'
            },
            {
                tarjeta : '600'
            }
        ],
        leche : true,
        tostador : {
            localidad : 'miguel',
            nombre : 'tostador miguel',
            cuit : '37458634'
        }
    },
    {
        tipo : 'espresso',
        ingredientes : ['vainilla'],
        peso : 340,
        intensidad : 'media',
        precios : [
            {
                efectivo : '500'
            },
            {
                tarjeta : '600'
            }
        ],
        leche : true,
        tostador : {
            localidad : 'san martin',
            nombre : 'tostador san martin',
            cuit : '37458634'
        }
    }
])

// 2)
db.cafesEspeciales.find(
    {   ingredientes :
        {
            $in : ['chocolate']
        }
    }
)

// 3)
db.cafesEspeciales.find(
    {
        $and : [
            {
                tipo : 'cold brew'
            },
            {
                ingredientes : {
                    $in : ['vainilla']
                }
            }
        ]
    }
)

// 4)
db.cafesEspeciales.find(
    {
        intensidad : 'media'
    },
    {
        tipo : 1,
        peso : 1
    }
)

// 5)
db.cafesEspeciales.find(
    {
        $and : [
            {
                peso : {
                    $gte : 200
                }
            },
            {
                peso : {
                    $lte : 260
                }
            }
        ]
    },
    {
        tipo : 1,
        peso: 1,
        intensidad : 1
    }
)

// 6)
db.cafesEspeciales.find(
    {
        'tostador.localidad' : {
            $regex : 'san'
        }
    }
).sort(
    {
        peso : -1
    }
)

// 7)
db.cafesEspeciales.aggregate(
    {
        $group : {
            _id : 0,
            total : { $sum : '$peso'}
        }
    }
)

// 8)
db.cafesEspeciales.updateMany(
    {
        intensidad : 'alta'
    },
    {
        $push : {
            ingredientes : 'whisky'
        }
    }
)

// 9)
db.cafesEspeciales.updateMany(
    {
        $and : [
            {
                peso : {
                    $gte : 200
                }
            },
            {
                peso : {
                    $lte : 260
                }
            }
        ]
    },
    {
        $inc : {
            peso : -10
        }
    }
)

// 10)
db.cafesEspeciales.deleteMany(
    {
        peso : {
            $lte : 210
        }
    }
)