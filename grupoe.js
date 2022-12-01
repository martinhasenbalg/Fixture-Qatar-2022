soccer.addEquipo(['ESPAÑA', 'COSTA RICA', 'ALEMANIA', 'JAPON']);
    
soccer.updateEquipo([{
        nombre: 'ESPAÑA',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 9,
        golescontra: 3,
        puntos: 4
    },
    {
        nombre: 'COSTA RICA',
        jugados: 3,
        ganados: 1,
        empates: 0,
        perdidos: 2,
        golesfavor: 3,
        golescontra: 11,
        puntos: 3
        },
    {
        nombre: 'ALEMANIA',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 6,
        golescontra: 5,
        puntos: 4
    },
    {
        nombre: 'JAPON',
        jugados: 3,
        ganados: 2,
        empates: 0,
        perdidos: 1,
        golesfavor: 4,
        golescontra: 3,
        puntos: 6    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO E',
});



    
    