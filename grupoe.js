soccer.addEquipo(['ESPAÑA', 'COSTA RICA', 'ALEMANIA', 'JAPON']);
    
soccer.updateEquipo([{
        nombre: 'ESPAÑA',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 7,
        golescontra: 0,
        puntos: 3
    },
    {
        nombre: 'COSTA RICA',
        jugados: 2,
        ganados: 1,
        empates: 0,
        perdidos: 1,
        golesfavor: 1,
        golescontra: 7,
        puntos: 3
        },
    {
        nombre: 'ALEMANIA',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 1,
        golesfavor: 1,
        golescontra: 2,
        puntos: 0
    },
    {
        nombre: 'JAPON',
        jugados: 2,
        ganados: 1,
        empates: 0,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 2,
        puntos: 3    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO E',
});



    
    