soccer.addEquipo(['PORTUGAL', 'GHANA', 'URUGUAY', 'COREA DEL SUR']);
    
soccer.updateEquipo([{
        nombre: 'PORTUGAL',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 3,
        golescontra: 2,
        puntos: 3
    },
    {
        nombre: 'GHANA',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 3,
        puntos: 0
        },
    {
        nombre: 'URUGUAY',
        jugados: 1,
        ganados: 0,
        empates: 1,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 1
    },
    {
        nombre: 'COREA DEL SUR',
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
    nombreGrupo: 'GRUPO H',
});



    
    