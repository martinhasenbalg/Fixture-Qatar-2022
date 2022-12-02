soccer.addEquipo(['BRASIL', 'SERBIA', 'SUIZA', 'CAMERUN']);
    
soccer.updateEquipo([{
        nombre: 'BRASIL',
        jugados: 3,
        ganados: 2,
        empates: 0,
        perdidos: 1,
        golesfavor: 3,
        golescontra: 1,
        puntos: 6
    },
    {
        nombre: 'SERBIA',
        jugados: 3,
        ganados: 0,
        empates: 1,
        perdidos: 2,
        golesfavor: 5,
        golescontra: 8,
        puntos: 1
        },
    {
        nombre: 'SUIZA',
        jugados: 3,
        ganados: 2,
        empates: 0,
        perdidos: 1,
        golesfavor: 4,
        golescontra: 3,
        puntos: 6
    },
    {
        nombre: 'CAMERUN',
        jugados: 3,
        ganados: 1,
        empates: 1,
        perdidos: 1,
        golesfavor: 4,
        golescontra: 4,
        puntos: 4    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO G',
});



    
    