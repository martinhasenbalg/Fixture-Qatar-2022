soccer.addEquipo(['QATAR', 'ECUADOR', 'SENEGAL', 'PAISES BAJOS']);
    
soccer.updateEquipo([{
        nombre: 'QATAR',
        jugados: 3,
        ganados: 0,
        empates: 0,
        perdidos: 3,
        golesfavor: 1,
        golescontra: 7,
        puntos: 0
    },
    {
        nombre: 'ECUADOR',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 4,
        golescontra: 3,
        puntos: 4
        },
    {
        nombre: 'SENEGAL',
        jugados: 3,
        ganados: 2,
        empates: 0,
        perdidos: 1,
        golesfavor: 5,
        golescontra: 3,
        puntos: 6
    },
    {
        nombre: 'PAISES BAJOS',
        jugados: 3,
        ganados: 2,
        empates: 1,
        perdidos: 0,
        golesfavor: 5,
        golescontra: 1,
        puntos: 7    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO A',
});



    
    