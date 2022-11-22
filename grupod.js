soccer.addEquipo(['FRANCIA', 'AUSTRALIA', 'DINAMARCA', 'TUNEZ']);
    
soccer.updateEquipo([{
        nombre: 'FRANCIA',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 4,
        golescontra: 1,
        puntos: 3
    },
    {
        nombre: 'AUSTRALIA',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 1,
        golesfavor: 1,
        golescontra: 4,
        puntos: 0
        },
    {
        nombre: 'DINAMARCA',
        jugados: 1,
        ganados: 0,
        empates: 1,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 1
    },
    {
        nombre: 'TUNEZ',
        jugados: 1,
        ganados: 0,
        empates: 1,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 1    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO D',
});



    
    