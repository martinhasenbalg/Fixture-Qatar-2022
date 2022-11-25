soccer.addEquipo(['QATAR', 'ECUADOR', 'SENEGAL', 'PAISES BAJOS']);
    
soccer.updateEquipo([{
        nombre: 'QATAR',
        jugados: 2,
        ganados: 0,
        empates: 0,
        perdidos: 2,
        golesfavor: 1,
        golescontra: 5,
        puntos: 0
    },
    {
        nombre: 'ECUADOR',
        jugados: 2,
        ganados: 1,
        empates: 1,
        perdidos: 0,
        golesfavor: 3,
        golescontra: 1,
        puntos: 4
        },
    {
        nombre: 'SENEGAL',
        jugados: 2,
        ganados: 1,
        empates: 0,
        perdidos: 1,
        golesfavor: 3,
        golescontra: 2,
        puntos: 3
    },
    {
        nombre: 'PAISES BAJOS',
        jugados: 2,
        ganados: 1,
        empates: 1,
        perdidos: 0,
        golesfavor: 3,
        golescontra: 1,
        puntos: 4    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO A',
});



    
    