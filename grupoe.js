soccer.addEquipo(['ESPAÑA', 'COSTA RICA', 'ALEMANIA', 'JAPON']);
    
soccer.updateEquipo([{
        nombre: 'ESPAÑA',
        jugados: 2,
        ganados: 1,
        empates: 1,
        perdidos: 0,
        golesfavor: 8,
        golescontra: 1,
        puntos: 4
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
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 3,
        puntos: 1
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



    
    