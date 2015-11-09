'use strict';

var modulo = require('./ServidorJuego.js');
var assert = require("assert");
/*
//Resultado de la gestión de usuarios no nula
assert.notEqual(modulo.calcular("Jugar","user1","pass1"), null);
assert.notEqual(modulo.calcular("Registrar","user2","pass2"), null);
assert.notEqual(modulo.calcular("","",""), null);
//Registro de usuario correcta
assert.equal(modulo.calcular("Registrar","user1","pass1"), "Registro realizado");
//Se inicia el juego
assert.equal(modulo.calcular("Jugar","user1","pass1"), "Logueado en el juego");
//No se permiten registros nulos
assert.equal(modulo.calcular("Registrar","",""),"No se pueden registrar esos datos");

console.log("Aserciones pasadas con éxito.")
*/

describe('Tests', function() {

  it('Resultado de la gestión de usuarios no nula', function(done) {
    assert.notEqual(modulo.calcular("Jugar","user1","pass1"), null);
    assert.notEqual(modulo.calcular("Registrar","user2","pass2"), null);
    assert.notEqual(modulo.calcular("","",""), null);
    done();
  });

  it('Registro de usuario correcta', function(done) {
    assert.equal(modulo.calcular("Registrar","user1","pass1"), "Registro realizado");
    done();
  });

  it('Se inicia el juego', function(done) {
    assert.equal(modulo.calcular("Jugar","user1","pass1"), "Logueado en el juego");
    done();
  });

  it('No se permiten registros nulos', function(done) {
    assert.equal(modulo.calcular("Registrar","",""),"No se pueden registrar esos datos");
    done();
  });
});


