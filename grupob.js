soccer.addEquipo(['INGLATERRA', 'IRAN', 'ESTADOS UNIDOS', 'GALES']);
    
soccer.updateEquipo([{
        nombre: 'INGLATERRA',
        jugados: 2,
        ganados: 1,
        empates: 1,
        perdidos: 0,
        golesfavor: 6,
        golescontra: 2,
        puntos: 4
    },
    {
        nombre: 'IRAN',
        jugados: 2,
        ganados: 1,
        empates: 0,
        perdidos: 1,
        golesfavor: 4,
        golescontra: 6,
        puntos: 3
        },
    {
        nombre: 'ESTADOS UNIDOS',
        jugados: 2,
        ganados: 0,
        empates: 2,
        perdidos: 0,
        golesfavor: 1,
        golescontra: 1,
        puntos: 2
    },
    {
        nombre: 'GALES',
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 1,
        golescontra: 3,
        puntos: 1    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO B',
});



    
    