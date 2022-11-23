soccer.addEquipo(['BELGICA', 'CANADA', 'MARRUECOS', 'CROACIA']);
    
soccer.updateEquipo([{
        nombre: 'BELGICA',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 0,
        golesfavor: 1 ,
        golescontra: 0,
        puntos: 3
    },
    {
        nombre: 'CANADA',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 1,
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



    
    