soccer.addEquipo(['FRANCIA', 'AUSTRALIA', 'DINAMARCA', 'TUNEZ']);
    
soccer.updateEquipo([{
        nombre: 'FRANCIA',
        jugados: 2,
        ganados: 2,
        empates: 0,
        perdidos: 0,
        golesfavor: 6,
        golescontra: 2,
        puntos: 6
    },
    {
        nombre: 'AUSTRALIA',
        jugados: 2,
        ganados: 1,
        empates: 0,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 4,
        puntos: 3
        },
    {
        nombre: 'DINAMARCA',
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 1,
        golescontra: 2,
        puntos: 1
    },
    {
        nombre: 'TUNEZ',
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 0,
        golescontra: 1,
        puntos: 1    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO D',
});



    
    