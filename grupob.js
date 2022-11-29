soccer.addEquipo(['INGLATERRA', 'IRAN', 'ESTADOS UNIDOS', 'GALES']);
    
soccer.updateEquipo([{
        nombre: 'INGLATERRA',
        jugados: 3,
        ganados: 2,
        empates: 1,
        perdidos: 0,
        golesfavor: 9,
        golescontra: 2,
        puntos: 7
    },
    {
        nombre: 'IRAN',
        jugados: 3,
        ganados: 1,
        empates: 0,
        perdidos: 2,
        golesfavor: 4,
        golescontra: 7,
        puntos: 3
        },
    {
        nombre: 'ESTADOS UNIDOS',
        jugados: 3,
        ganados: 1,
        empates: 2,
        perdidos: 0,
        golesfavor: 2,
        golescontra: 1,
        puntos: 5
    },
    {
        nombre: 'GALES',
        jugados: 3,
        ganados: 0,
        empates: 1,
        perdidos: 2,
        golesfavor: 1,
        golescontra: 6,
        puntos: 1    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO B',
});



    
    