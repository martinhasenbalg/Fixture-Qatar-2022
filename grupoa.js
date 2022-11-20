soccer.addEquipo(['QATAR', 'ECUADOR', 'SENEGAL', 'PAISES BAJOS']);
    
soccer.updateEquipo([{
        nombre: 'QATAR',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 1,
        golesfavor: 0,
        golescontra: 2,
        puntos: 0
    },
    {
        nombre: 'ECUADOR',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 2,
        golescontra: 0,
        puntos: 3
        },
    {
        nombre: 'SENEGAL',
        jugados: 0,
        ganados: 0,
        empates: 0,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 0
    },
    {
        nombre: 'PAISES BAJOS',
        jugados: 0,
        ganados: 0,
        empates: 0,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 0    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO A',
});



    
    