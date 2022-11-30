soccer.addEquipo(['FRANCIA', 'AUSTRALIA', 'DINAMARCA', 'TUNEZ']);
    
soccer.updateEquipo([{
        nombre: 'FRANCIA',
        jugados: 3,
        ganados: 2,
        empates: 0,
        perdidos: 1,
        golesfavor: 6,
        golescontra: 1,
        puntos: 6
    },
    {
        nombre: 'AUSTRALIA',
        jugados: 3,
        ganados: 2,
        empates: 0,
        perdidos: 1,
        golesfavor: 3,
        golescontra: 4,
        puntos: 6
        },
    {
        nombre: 'DINAMARCA',
        jugados: 3,
        ganados: 0,
        empates: 1,
        perdidos: 2,
        golesfavor: 1,
        golescontra: 3,
        puntos: 1
    },
    {
        nombre: 'TUNEZ',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 1,
        golescontra: 1,
        puntos: 4    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO D',
});



    
    