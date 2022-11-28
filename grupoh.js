soccer.addEquipo(['PORTUGAL', 'GHANA', 'URUGUAY', 'COREA DEL SUR']);
    
soccer.updateEquipo([{
        nombre: 'PORTUGAL',
        jugados: 2,
        ganados: 2,
        empates: 0,
        perdidos: 0,
        golesfavor: 5,
        golescontra: 2,
        puntos: 6
    },
    {
        nombre: 'GHANA',
        jugados: 2,
        ganados: 1,
        empates: 0,
        perdidos: 1,
        golesfavor: 5,
        golescontra: 5,
        puntos: 3
        },
    {
        nombre: 'URUGUAY',
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 0,
        golescontra: 2,
        puntos: 1
    },
    {
        nombre: 'COREA DEL SUR',
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 3,
        puntos: 1    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO H',
});



    
    