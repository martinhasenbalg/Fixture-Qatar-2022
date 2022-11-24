soccer.addEquipo(['BELGICA', 'CANADA', 'MARRUECOS', 'CROACIA']);
    
soccer.updateEquipo([{
        nombre: 'BELGICA',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 0
    },
    {
        nombre: 'CANADA',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 1,
        golesfavor: 0,
        golescontra: 0,
        puntos: 0
        },
    {
        nombre: 'MARRUECOS',
        jugados: 1,
        ganados: 0,
        empates: 1,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 1
    },
    {
        nombre: 'CROACIA',
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
    nombreGrupo: 'GRUPO F',
});



    
    