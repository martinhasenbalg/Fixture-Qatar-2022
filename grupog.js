soccer.addEquipo(['BRASIL', 'SERBIA', 'SUIZA', 'CAMERUN']);
    
soccer.updateEquipo([{
        nombre: 'BRASIL',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 2,
        golescontra: 0,
        puntos: 3
    },
    {
        nombre: 'SERBIA',
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 3,
        golescontra: 5,
        puntos: 1
        },
    {
        nombre: 'SUIZA',
        jugados: 1,
        ganados: 1,
        empates: 0,
        perdidos: 0,
        golesfavor: 1,
        golescontra: 0,
        puntos: 3
    },
    {
        nombre: 'CAMERUN',
        jugados: 2,
        ganados: 0,
        empates: 1,
        perdidos: 1,
        golesfavor: 3,
        golescontra: 4,
        puntos: 1    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO G',
});



    
    