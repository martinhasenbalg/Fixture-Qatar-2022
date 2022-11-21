soccer.addEquipo(['INGLATERRA', 'IRAN', 'ESTADOS UNIDOS', 'GALES']);
    
soccer.updateEquipo([{
        nombre: 'INGLATERRA',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 6,
        golescontra: 2,
        puntos: 3
    },
    {
        nombre: 'IRAN',
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 1,
        golesfavor: 2,
        golescontra: 6,
        puntos: 0
        },
    {
        nombre: 'ESTADOS UNIDOS',
        jugados: 0,
        ganados: 0,
        empates: 0,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 0
    },
    {
        nombre: 'GALES',
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
    nombreGrupo: 'GRUPO B',
});



    
    