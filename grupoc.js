soccer.addEquipo(['ARGENTINA', 'ARABIA SAUDITA', 'MEXICO', 'POLONIA']);
    
soccer.updateEquipo([{
        nombre: 'ARGENTINA',
        jugados: 2,
        ganados: 1,
        empates: 0,
        perdidos: 1,
        golesfavor: 3,
        golescontra: 2,
        puntos: 3
    },
    {
        nombre: 'ARABIA SAUDITA',
        jugados: 2,
        ganados: 1,
        empates: 0,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 3,
        puntos: 3
        },
    {
        nombre: 'MEXICO',
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 0,
        golescontra: 2,
        puntos: 1
    },
    {
        nombre: 'POLONIA',
        jugados: 2,
        ganados: 1,
        empates: 1,
        perdidos: 0,
        golesfavor: 2,
        golescontra: 0,
        puntos: 4   
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO C',
});



    
    