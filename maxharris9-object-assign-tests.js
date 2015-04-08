'use strict';

Tinytest.add('should have the correct length', function (test) {
  test.equal(objectAssign.length, 2, 'expected length 2');
});

Tinytest.add('should throw when target is not an object', function (test) {
  test.throws(function () { objectAssign(null); }, TypeError);
  test.throws(function () { objectAssign(undefined); }, TypeError);
});

Tinytest.add('should assign own enumerable properties from source to target object', function (test) {
  test.equal(objectAssign( { foo: 0 }, { bar: 1 } ), { foo: 0, bar: 1 } );
  test.equal(objectAssign( { foo: 0 }, null, undefined), { foo: 0 } );
  test.equal(objectAssign( { foo: 0 }, null, undefined, { bar: 1 }, null), { foo: 0, bar: 1 } );
});
 
Tinytest.add('should throw on null/undefined target', function (test) {
  test.throws(function () {
    objectAssign(null, {});
  });

  test.throws(function () {
    objectAssign(undefined, { } );
  });

  test.throws(function () {
    objectAssign(undefined, undefined);
  });
});

Tinytest.add('should not throw on null/undefined sources', function (test) {
  test.throws(!function () {
    objectAssign( { }, null);
  });

  test.throws(!function () {
    objectAssign( { }, undefined);
  });

  test.throws(!function () {
    objectAssign( { }, undefined, null);
  });
});

Tinytest.add('should support multiple sources', function (test) {
  test.equal(objectAssign( { foo: 0 }, { bar: 1 }, { bar: 2 } ), { foo: 0, bar: 2 } );
  test.equal(objectAssign( { }, { }, { foo: 1 } ), { foo: 1 } );
});

Tinytest.add('should only iterate own keys', function (test) {
  var Unicorn = function () {};
  Unicorn.prototype.rainbows = 'many';
  var unicorn = new Unicorn();
  unicorn.bar = 1;

  test.equal(objectAssign( { foo: 1 }, unicorn), { foo: 1, bar: 1 } );
});

Tinytest.add('should return the modified target object', function (test) {
  var target = { };
  var returned = objectAssign(target, { a: 1 } );
  test.equal(returned, target);
});