soccer.addEquipo(['ARGENTINA', 'ARABIA SAUDITA', 'MEXICO', 'POLONIA']);
    
soccer.updateEquipo([{
        nombre: 'ARGENTINA',
        jugados: 3,
        ganados: 2,
        empates: 0,
        perdidos: 1,
        golesfavor: 5,
        golescontra: 2,
        puntos: 6
    },
    {
        nombre: 'ARABIA SAUDITA',
        jugados: 3,
        ganados: 1,
        empates: 0,
        perdidos: 2,
        golesfavor: 3,
        golescontra: 5,
        puntos: 3
        },
    {
        nombre: 'MEXICO',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 3,
        puntos: 4
    },
    {
        nombre: 'POLONIA',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 2,
        puntos: 4   
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO C',
});



    
    