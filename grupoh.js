soccer.addEquipo(['PORTUGAL', 'GHANA', 'URUGUAY', 'COREA DEL SUR']);
    
soccer.updateEquipo([{
        nombre: 'PORTUGAL',
        jugados: 3,
        ganados: 2,
        empates: 0,
        perdidos: 1,
        golesfavor: 6,
        golescontra: 4,
        puntos: 6
    },
    {
        nombre: 'GHANA',
        jugados: 3,
        ganados: 1,
        empates: 0,
        perdidos: 2,
        golesfavor: 5,
        golescontra: 7,
        puntos: 3
        },
    {
        nombre: 'URUGUAY',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 2,
        puntos: 4
    },
    {
        nombre: 'COREA DEL SUR',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 4,
        golescontra: 4,
        puntos: 4    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO H',
});



    
    