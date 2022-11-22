soccer.addEquipo(['ARGENTINA', 'ARABIA SAUDITA', 'MEXICO', 'POLONIA']);
    
soccer.updateEquipo([{
        nombre: 'ARGENTINA',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 1,
        golesfavor: 1,
        golescontra: 2,
        puntos: 0
    },
    {
        nombre: 'ARABIA SAUDITA',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 2,
        golescontra: 1,
        puntos: 3
        },
    {
        nombre: 'MEXICO',
        jugados: 0,
        ganados: 0,
        empates: 0,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 0
    },
    {
        nombre: 'POLONIA',
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
    nombreGrupo: 'GRUPO C',
});



    
    