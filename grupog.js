soccer.addEquipo(['BRASIL', 'SERBIA', 'SUIZA', 'CAMERUN']);
    
soccer.updateEquipo([{
        nombre: 'BRASIL',
        jugados: 0,
        ganados: 0,
        empates: 0,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 0
    },
    {
        nombre: 'SERBIA',
        jugados: 0,
        ganados: 0,
        empates: 0,
        perdidos: 0,
        golesfavor: 0,
        golescontra: 0,
        puntos: 0
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
        jugados: 1,
        ganados: 0,
        empates: 0,
        perdidos: 1,
        golesfavor: 0,
        golescontra: 1,
        puntos: 0    
    },
    ]);
        
soccer.renderLeague({
    nombreGrupo: 'GRUPO G',
});



    
    