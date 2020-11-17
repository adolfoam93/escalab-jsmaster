var tarea2 = {
    "mascotas": ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],

    esSegura: false,

    llamarAlerta: function(x) {return x;},

    esHttps: function(){
        if (location.protocol === "Https") {
            tarea2.esSegura = true;
        } else {
            tarea2.esSegura = false;
        }
    },

    eliminarMascota: function(mascota) {
        tarea2.mascotas = tarea2.mascotas.filter(e => e !== mascota);
        return tarea2.mascotas;
    },

    eliminarUltimaMascota: function() {
        tarea2.mascotas.pop();
        return tarea2.mascotas;
    },

    agregarMascota: function(mascota) {
        tarea2.mascotas.push(mascota);
        return tarea2.mascotas;
    },

    contadorMascotas: function() {
        var counter = 0;

        for (i=0;i < tarea2.mascotas.length; i++) {

            if (tarea2.mascotas[i].slice(-2) === "os") {
                counter+=1;
            } else {
                continue;
            }
        }

        return "En el arreglo hay "+counter+ " mascotas que terminan con 'os'";
    } 
};