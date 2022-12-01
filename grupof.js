soccer.addEquipo(['BELGICA', 'CANADA', 'MARRUECOS', 'CROACIA']);
    
soccer.updateEquipo([{
        nombre: 'BELGICA',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 1,
        golescontra: 2,
        puntos: 4
    },
    {
        nombre: 'CANADA',
        jugados: 3,
        ganados: 0,
        empates: 0,
        perdidos: 3,
        golesfavor: 2,
        golescontra: 7,
        puntos: 0
        },
    {
        nombre: 'MARRUECOS',
        jugados: 3,
        ganados: 2,
        empates: 1,
        perdidos: 0,
        golesfavor: 4,
        golescontra: 1,
        puntos: 7
    },
    {
        nombre: 'CROACIA',
        jugados: 3,
        ganados: 1,
        empates: 2,
        perdidos: 0,
        golesfavor: 4,
        golescontra: 1,
        puntos: 5    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO F',
});



    
    