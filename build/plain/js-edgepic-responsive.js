/*!
 * 
 *  js-edgepic-responsive v4.8.12 plain
 *  https://github.com/scaleflex/js-cloudimage-responsive
 * 
 *  Copyright (c) 2019 scaleflex
 *  Released under the MIT license
 * 
 *  Date: 2022-06-15T14:06:11.319Z
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(15);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var toObject = __webpack_require__(34);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(1);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isServer = void 0;

var isServer = function isServer() {
  return typeof window === 'undefined';
};

exports.isServer = isServer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var isCallable = __webpack_require__(1);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var shared = __webpack_require__(33);
var hasOwn = __webpack_require__(5);
var uid = __webpack_require__(35);
var NATIVE_SYMBOL = __webpack_require__(31);
var USE_SYMBOL_AS_UID = __webpack_require__(30);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(36);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(39);
var anObject = __webpack_require__(12);
var toPropertyKey = __webpack_require__(28);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(26);
var requireObjectCoercible = __webpack_require__(27);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEVICE_PIXEL_RATIO_LIST = void 0;
var DEVICE_PIXEL_RATIO_LIST = [1, 1.5, 2];
exports.DEVICE_PIXEL_RATIO_LIST = DEVICE_PIXEL_RATIO_LIST;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(15);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var defineGlobalProperty = __webpack_require__(18);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var isCallable = __webpack_require__(1);
var store = __webpack_require__(17);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParamsFromURL = void 0;

var getParamsFromURL = function getParamsFromURL(url) {
  var queryIndex = url.indexOf('?');
  if (queryIndex === -1) return;
  return processParams(url.slice(queryIndex + 1));
};

exports.getParamsFromURL = getParamsFromURL;

var processParams = function processParams(params) {
  var resultParams = undefined;

  try {
    var temp = params.replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
      return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
    });
    resultParams = JSON.parse(temp);
  } catch (e) {}

  if (!resultParams) {
    try {
      resultParams = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
    } catch (e) {}
  }

  return resultParams;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var getOwnPropertyDescriptor = __webpack_require__(24).f;
var createNonEnumerableProperty = __webpack_require__(38);
var defineBuiltIn = __webpack_require__(70);
var defineGlobalProperty = __webpack_require__(18);
var copyConstructorProperties = __webpack_require__(75);
var isForced = __webpack_require__(82);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var call = __webpack_require__(14);
var propertyIsEnumerableModule = __webpack_require__(61);
var createPropertyDescriptor = __webpack_require__(25);
var toIndexedObject = __webpack_require__(11);
var toPropertyKey = __webpack_require__(28);
var hasOwn = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(36);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var fails = __webpack_require__(3);
var classof = __webpack_require__(16);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(62);
var isSymbol = __webpack_require__(29);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(8);
var isCallable = __webpack_require__(1);
var isPrototypeOf = __webpack_require__(63);
var USE_SYMBOL_AS_UID = __webpack_require__(30);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(31);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(64);
var fails = __webpack_require__(3);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(1);
var tryToString = __webpack_require__(67);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(69);
var store = __webpack_require__(17);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(27);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var fails = __webpack_require__(3);
var createElement = __webpack_require__(37);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var isObject = __webpack_require__(6);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var definePropertyModule = __webpack_require__(10);
var createPropertyDescriptor = __webpack_require__(25);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var fails = __webpack_require__(3);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33);
var uid = __webpack_require__(35);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var hasOwn = __webpack_require__(5);
var toIndexedObject = __webpack_require__(11);
var indexOf = __webpack_require__(78).indexOf;
var hiddenKeys = __webpack_require__(20);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__(43);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(80);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCrop = void 0;

var isCrop = function isCrop(func) {
  return ['crop', 'fit', 'bound', 'cover'].indexOf(func) !== -1;
};

exports.isCrop = isCrop;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToPX = void 0;

var _isServer = __webpack_require__(7);

var convertToPX = function convertToPX() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  size = (size || '').toString();

  if (size.indexOf('px') > -1) {
    return parseInt(size);
  } else if (size.indexOf('%') > -1) {
    // todo calculate container width * %
    // todo could be the potenial problem when the plugin set 100% width and on update it can calculate wrong value
    return null;
  } else if (size.indexOf('vw') > -1) {
    return !(0, _isServer.isServer)() ? window.innerWidth * parseInt(size) / 100 : null;
  } else if (size.indexOf('vh') > -1) {
    return !(0, _isServer.isServer)() ? window.innerHeight * parseInt(size) / 100 : null;
  }

  return parseInt(size) || '';
};

exports.convertToPX = convertToPX;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParentContainerSize = void 0;

var getParentContainerSize = function getParentContainerSize(img) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'width';
  var parentNode = img;
  var size = 0;
  var maxCount = 0;

  do {
    parentNode = parentNode && parentNode.parentNode;
    size = typeof parentNode.getBoundingClientRect === 'function' ? parentNode.getBoundingClientRect()[type] : window.innerWidth;
    maxCount = maxCount + 1;
  } while (parentNode && !size && maxCount > 5);

  var leftPadding = size && parentNode && parentNode.nodeType === 1 ? parseInt(window.getComputedStyle(parentNode).paddingLeft) : 0;
  var rightPadding = size && parentNode && parentNode.nodeType === 1 ? parseInt(window.getComputedStyle(parentNode).paddingRight) : 0;

  if (!size) {
    size = window.innerWidth;
  }

  return size + (size ? -leftPadding - rightPadding : 0);
};

exports.getParentContainerSize = getParentContainerSize;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.determineContainerProps = void 0;

var _isCrop = __webpack_require__(45);

var _getWidth3 = __webpack_require__(100);

var _getHeight = __webpack_require__(101);

var _getRatio = __webpack_require__(102);

var _constants = __webpack_require__(13);

var _getSizeLimit = __webpack_require__(103);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var determineContainerProps = function determineContainerProps(props) {
  var imgNode = props.imgNode,
      _props$config = props.config,
      config = _props$config === void 0 ? {} : _props$config,
      imgNodeWidth = props.imgNodeWidth,
      imgNodeHeight = props.imgNodeHeight,
      imgNodeRatio = props.imgNodeRatio,
      params = props.params,
      size = props.size,
      doNotReplaceImageUrl = props.doNotReplaceImageUrl;
  var exactSize = config.exactSize,
      limitFactor = config.limitFactor,
      _config$params = config.params,
      configParams = _config$params === void 0 ? {} : _config$params;
  var ratio = null;
  var crop = (0, _isCrop.isCrop)(params.func || configParams.func);

  var _getWidth = (0, _getWidth3.getWidth)({
    imgNode: imgNode,
    config: config,
    exactSize: exactSize,
    imgNodeWidth: imgNodeWidth,
    params: _objectSpread(_objectSpread({}, configParams), params),
    size: size
  }),
      _getWidth2 = _slicedToArray(_getWidth, 2),
      width = _getWidth2[0],
      isLimit = _getWidth2[1];

  var height = (0, _getHeight.getHeight)({
    imgNode: imgNode,
    config: config,
    exactSize: exactSize,
    imgNodeHeight: imgNodeHeight,
    imgNodeWidth: imgNodeWidth,
    imgNodeRatio: imgNodeRatio,
    params: _objectSpread(_objectSpread({}, configParams), params),
    size: size,
    width: width
  });
  ratio = (0, _getRatio.getRatio)({
    imgNodeRatio: imgNodeRatio,
    width: width,
    height: height,
    size: size,
    config: config,
    imgNodeWidth: imgNodeWidth,
    imgNodeHeight: imgNodeHeight
  });

  var sizes = _constants.DEVICE_PIXEL_RATIO_LIST.map(function (dpr) {
    var widthWithDPR, heightWithDRP;
    widthWithDPR = width && width * dpr;
    widthWithDPR = crop ? widthWithDPR : isLimit ? (0, _getSizeLimit.getSizeLimit)(widthWithDPR, exactSize, limitFactor) : widthWithDPR;
    heightWithDRP = height && height * dpr;

    if (!heightWithDRP && widthWithDPR && ratio) {
      heightWithDRP = Math.floor(widthWithDPR / ratio);
    }

    if (!widthWithDPR && heightWithDRP && ratio) {
      widthWithDPR = Math.floor(heightWithDRP * ratio);
    }

    return {
      width: widthWithDPR,
      height: heightWithDRP,
      ratio: ratio
    };
  });

  return {
    sizes: sizes,
    ratio: ratio,
    width: width,
    height: height,
    doNotReplaceImageUrl: doNotReplaceImageUrl
  };
};

exports.determineContainerProps = determineContainerProps;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImgSRC = void 0;

var _isSvg = __webpack_require__(104);

var _isServer = __webpack_require__(7);

var getImgSRC = function getImgSRC(src) {
  var baseURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var relativeURLPath = isRelativeUrlPath(src);

  if (src.indexOf('//') === 0) {
    src = (!(0, _isServer.isServer)() ? window.location.protocol : 'https:') + src;
  }

  if (relativeURLPath) {
    src = relativeToAbsolutePath(baseURL, src);
  }

  return [src, (0, _isSvg.isSVG)(src)];
};

exports.getImgSRC = getImgSRC;

var relativeToAbsolutePath = function relativeToAbsolutePath(base, relative) {
  var root = relative[0] === '/';
  var resultBaseURL = getBaseURL(root, base);
  var stack = resultBaseURL.split('/');
  var parts = relative.split('/');
  stack.pop(); // remove current file name (or empty string)
  // (omit if 'base' is the current folder without trailing slash)

  if (root) {
    parts.shift();
  }

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === '.') continue;
    if (parts[i] === '..') stack.pop();else stack.push(parts[i]);
  }

  return stack.join('/');
};

var getBaseURL = function getBaseURL(root, base) {
  if (root) {
    return (base ? extractBaseURLFromString(base) : !(0, _isServer.isServer)() ? window.location.origin : '') + '/';
  } else {
    return base ? base : !(0, _isServer.isServer)() ? document.baseURI : 'http://localhost:3000/';
  }
};

var extractBaseURLFromString = function extractBaseURLFromString() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var pathArray = path.split('/');
  var protocol = pathArray[0];
  var host = pathArray[2];
  return protocol + '//' + host;
};

var isRelativeUrlPath = function isRelativeUrlPath(src) {
  if (!src) return false;

  if (src.indexOf('//') === 0) {
    src = (!(0, _isServer.isServer)() ? window.location.protocol : 'https:') + src;
  }

  return src.indexOf('http://') !== 0 && src.indexOf('https://') !== 0 && src.indexOf('//') !== 0;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateURL = void 0;

var _constants = __webpack_require__(13);

var _excluded = ["w", "h", "width", "height"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generateURL = function generateURL(props) {
  var src = props.src,
      params = props.params,
      _props$config = props.config,
      config = _props$config === void 0 ? {} : _props$config,
      _props$containerProps = props.containerProps,
      containerProps = _props$containerProps === void 0 ? {} : _props$containerProps,
      _props$devicePixelRat = props.devicePixelRatio,
      devicePixelRatio = _props$devicePixelRat === void 0 ? 1 : _props$devicePixelRat,
      processURL = props.processURL,
      processQueryString = props.processQueryString,
      service = props.service;
  var sizes = containerProps.sizes,
      doNotReplaceImageUrl = containerProps.doNotReplaceImageUrl;

  var size = sizes && sizes[_constants.DEVICE_PIXEL_RATIO_LIST.indexOf(devicePixelRatio)];

  var _ref = size || {},
      width = _ref.width,
      height = _ref.height;

  var token = config.token,
      domain = config.domain,
      doNotReplaceURL = config.doNotReplaceURL,
      customDomain = config.customDomain,
      apiVersion = config.apiVersion;
  var finalDomain = customDomain ? domain : token + '.' + domain;
  var finalApiVersion = apiVersion ? apiVersion + '/' : '';
  var url = [doNotReplaceURL || doNotReplaceImageUrl ? '' : "https://".concat(finalDomain, "/").concat(finalApiVersion), src, src.indexOf('?') !== -1 ? '&' : '?'].join('');
  return [processURL ? processURL({
    url: url,
    token: token,
    domain: domain,
    service: service
  }) : url, getQueryString({
    params: _objectSpread(_objectSpread({}, config.params || {}), params),
    width: width,
    height: height,
    config: config,
    processQueryString: processQueryString,
    devicePixelRatio: devicePixelRatio,
    service: service
  })].join('');
};

exports.generateURL = generateURL;

var getQueryString = function getQueryString(props) {
  var _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      width = props.width,
      height = props.height,
      _props$config2 = props.config,
      config = _props$config2 === void 0 ? {} : _props$config2,
      processQueryString = props.processQueryString,
      devicePixelRatio = props.devicePixelRatio,
      service = props.service;
  var processOnlyWidth = config.processOnlyWidth;

  var _processParamsExceptS = processParamsExceptSizeRelated(params),
      _processParamsExceptS2 = _slicedToArray(_processParamsExceptS, 3),
      restParams = _processParamsExceptS2[0],
      _processParamsExceptS3 = _processParamsExceptS2[1],
      widthFromParam = _processParamsExceptS3 === void 0 ? null : _processParamsExceptS3,
      heightFromParam = _processParamsExceptS2[2];

  var widthQ = width ? width : widthFromParam;
  var heightQ = height ? height : heightFromParam;
  var restParamsQ = Object.keys(restParams).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(restParams[key]);
  }).join('&');
  var query = [widthQ ? "w=".concat(widthQ) : '', heightQ && !processOnlyWidth ? (widthQ ? '&' : '') + "h=".concat(heightQ) : '', restParamsQ ? '&' + restParamsQ : ''].join('');
  return processQueryString ? processQueryString({
    query: query,
    widthQ: widthQ,
    heightQ: heightQ,
    restParamsQ: restParamsQ,
    processOnlyWidth: processOnlyWidth,
    devicePixelRatio: devicePixelRatio,
    service: service
  }) : query;
};

var processParamsExceptSizeRelated = function processParamsExceptSizeRelated(params) {
  var w = params.w,
      h = params.h,
      width = params.width,
      height = params.height,
      restParams = _objectWithoutProperties(params, _excluded);

  return [restParams, w || width, h || height];
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBreakpoint = void 0;

var _isServer = __webpack_require__(7);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getBreakpoint = function getBreakpoint(sizes, presets) {
  var size = !(0, _isServer.isServer)() ? getAdaptiveSize(sizes, presets) : [];
  return _toConsumableArray(size).reverse().find(function (item) {
    return window.matchMedia(item.media).matches;
  });
};

exports.getBreakpoint = getBreakpoint;

var getAdaptiveSize = function getAdaptiveSize(sizes, presets) {
  var resultSizes = [];
  Object.keys(sizes).forEach(function (key) {
    var customMedia = key.indexOf(':') > -1;
    var media = customMedia ? key : presets[key];
    resultSizes.push({
      media: media,
      params: normalizeSize(sizes[key])
    });
  });
  return resultSizes;
};

var normalizeSize = function normalizeSize() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$w = params.w,
      w = _params$w === void 0 ? params.width || '' : _params$w,
      _params$h = params.h,
      h = _params$h === void 0 ? params.height || '' : _params$h,
      _params$r = params.r,
      r = _params$r === void 0 ? params.r : _params$r,
      _params$src = params.src,
      src = _params$src === void 0 ? params.src : _params$src;

  if (w.toString().indexOf('vw') > -1) {
    var percent = parseFloat(w);
    w = window.innerWidth * percent / 100;
  } else {
    w = parseFloat(w);
  }

  if (h.toString().indexOf('vh') > -1) {
    var _percent = parseFloat(h);

    h = window.innerHeight * _percent / 100;
  } else {
    h = parseFloat(h);
  }

  return {
    w: w,
    h: h,
    r: r,
    src: src
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSupportedInBrowser = void 0;

var _isServer = __webpack_require__(7);

var isSupportedInBrowser = function isSupportedInBrowser(isBlurHash) {
  var support = true;

  if (isBlurHash && !(0, _isServer.isServer)()) {
    try {
      new window.ImageData(new Uint8ClampedArray([0, 0, 0, 0]), 1, 1);
    } catch (e) {
      support = false;
    }
  }

  return Element.prototype.hasOwnProperty('prepend') && support;
};

exports.isSupportedInBrowser = isSupportedInBrowser;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(56);

module.exports = parent;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(57);

module.exports = parent;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(58);

module.exports = parent;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
var entryUnbind = __webpack_require__(96);

module.exports = entryUnbind('Array', 'find');


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(23);
var $find = __webpack_require__(83).find;
var addToUnscopables = __webpack_require__(91);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(14);
var isObject = __webpack_require__(6);
var isSymbol = __webpack_require__(29);
var getMethod = __webpack_require__(66);
var ordinaryToPrimitive = __webpack_require__(68);
var wellKnownSymbol = __webpack_require__(9);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var userAgent = __webpack_require__(65);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(8);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(32);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(14);
var isCallable = __webpack_require__(1);
var isObject = __webpack_require__(6);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(1);
var definePropertyModule = __webpack_require__(10);
var makeBuiltIn = __webpack_require__(71);
var defineGlobalProperty = __webpack_require__(18);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    if (!options.unsafe) delete O[key];
    else if (O[key]) simple = true;
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(1);
var hasOwn = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(4);
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(72).CONFIGURABLE;
var inspectSource = __webpack_require__(19);
var InternalStateModule = __webpack_require__(73);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    defineProperty(value, 'name', { value: name, configurable: true });
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var hasOwn = __webpack_require__(5);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(74);
var global = __webpack_require__(2);
var uncurryThis = __webpack_require__(0);
var isObject = __webpack_require__(6);
var createNonEnumerableProperty = __webpack_require__(38);
var hasOwn = __webpack_require__(5);
var shared = __webpack_require__(17);
var sharedKey = __webpack_require__(40);
var hiddenKeys = __webpack_require__(20);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var isCallable = __webpack_require__(1);
var inspectSource = __webpack_require__(19);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(5);
var ownKeys = __webpack_require__(76);
var getOwnPropertyDescriptorModule = __webpack_require__(24);
var definePropertyModule = __webpack_require__(10);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(8);
var uncurryThis = __webpack_require__(0);
var getOwnPropertyNamesModule = __webpack_require__(77);
var getOwnPropertySymbolsModule = __webpack_require__(81);
var anObject = __webpack_require__(12);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(21);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(11);
var toAbsoluteIndex = __webpack_require__(79);
var lengthOfArrayLike = __webpack_require__(44);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(42);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(42);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(84);
var uncurryThis = __webpack_require__(0);
var IndexedObject = __webpack_require__(26);
var toObject = __webpack_require__(34);
var lengthOfArrayLike = __webpack_require__(44);
var arraySpeciesCreate = __webpack_require__(85);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var aCallable = __webpack_require__(32);
var NATIVE_BIND = __webpack_require__(15);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(86);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(87);
var isConstructor = __webpack_require__(88);
var isObject = __webpack_require__(6);
var wellKnownSymbol = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(16);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(0);
var fails = __webpack_require__(3);
var isCallable = __webpack_require__(1);
var classof = __webpack_require__(89);
var getBuiltIn = __webpack_require__(8);
var inspectSource = __webpack_require__(19);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(90);
var isCallable = __webpack_require__(1);
var classofRaw = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);
var create = __webpack_require__(92);
var defineProperty = __webpack_require__(10).f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(12);
var definePropertiesModule = __webpack_require__(93);
var enumBugKeys = __webpack_require__(21);
var hiddenKeys = __webpack_require__(20);
var html = __webpack_require__(95);
var documentCreateElement = __webpack_require__(37);
var sharedKey = __webpack_require__(40);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(39);
var definePropertyModule = __webpack_require__(10);
var anObject = __webpack_require__(12);
var toIndexedObject = __webpack_require__(11);
var objectKeys = __webpack_require__(94);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(21);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(8);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var uncurryThis = __webpack_require__(0);

module.exports = function (CONSTRUCTOR, METHOD) {
  return uncurryThis(global[CONSTRUCTOR].prototype[METHOD]);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(98);
var path = __webpack_require__(99);

module.exports = path.Math.trunc;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(23);
var trunc = __webpack_require__(43);

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
$({ target: 'Math', stat: true }, {
  trunc: trunc
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);

module.exports = global;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWidth = void 0;

var _convertToPx = __webpack_require__(46);

var _getParentContainerSize = __webpack_require__(47);

var _isServer = __webpack_require__(7);

/**
 * Get width for an image.
 *
 * Priority:
 * 1. image node param width
 * 2. image node image width
 * 3. image node inline styling
 * 4. parent node of image computed style width (up to body tag)
 *
 * @param {HTMLImageElement} props.imgNode - image node
 * @param {Number} props.imgNodeWidth - width of image node
 * @param {String} props.params - params of image node
 * @return {Array} [with, isLimit]
 */
var getWidth = function getWidth(props) {
  var imgNode = props.imgNode,
      _props$imgNodeWidth = props.imgNodeWidth,
      imgNodeWidth = _props$imgNodeWidth === void 0 ? null : _props$imgNodeWidth,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      size = props.size,
      _props$config = props.config,
      config = _props$config === void 0 ? {} : _props$config;
  var _ignoreNodeImgSize = config.ignoreNodeImgSize,
      ignoreStyleImgSize = config.ignoreStyleImgSize,
      imageSizeAttributes = config.imageSizeAttributes,
      detectImageNodeCSS = config.detectImageNodeCSS;
  var ignoreNodeImgSize = typeof _ignoreNodeImgSize !== 'undefined' ? _ignoreNodeImgSize : imageSizeAttributes !== 'use';
  var sizeParamsWidth = size && size.params && (size.params.w || size.params.width);
  var paramsWidth = params.width || params.w;
  var imgNodeWidthPX = !ignoreNodeImgSize && imgNodeWidth && (0, _convertToPx.convertToPX)(imgNodeWidth);
  var imageWidth = !ignoreStyleImgSize && getImageWidth(imgNode, detectImageNodeCSS);
  var imageContainerWidth = !(0, _isServer.isServer)() ? !imageWidth && parseInt((0, _getParentContainerSize.getParentContainerSize)(imgNode), 10) : null;
  var resultWidth = imageWidth || imageContainerWidth;

  if (size && size.params) {
    if (size.params.r) {
      if (params.width || params.w) {
        return [paramsWidth];
      }

      if (!ignoreNodeImgSize && imgNodeWidth) {
        return [imgNodeWidthPX];
      }

      return [resultWidth];
    }

    return [sizeParamsWidth];
  }

  if (paramsWidth) {
    return [paramsWidth];
  }

  if (!ignoreNodeImgSize && imgNodeWidth) {
    return [imgNodeWidthPX];
  }

  return [resultWidth, true];
};
/**
 * Get width for an image.
 *
 *
 * @param {HTMLImageElement} img - image node
 * @param {Boolean} detectImageNodeCSS - detect width of image node
 * @return {Number} width of image container
 */


exports.getWidth = getWidth;

var getImageWidth = function getImageWidth(img, detectImageNodeCSS) {
  var isImageStyleWidthInPX = img && img.style && img.style.width && !(img.style.width.indexOf('%') !== -1);
  var imageStyleWidth = isImageStyleWidthInPX && img.style.width;
  var imageWidth = imageStyleWidth && (0, _convertToPx.convertToPX)(imageStyleWidth);
  var imageCSSWidth = !(0, _isServer.isServer)() ? detectImageNodeCSS && getImageNodeCSS(img) : false;
  return detectImageNodeCSS && imageCSSWidth ? imageCSSWidth : imageWidth && parseInt(imageWidth, 10);
};

var getImageNodeCSS = function getImageNodeCSS(img) {
  var width;
  var preDisplayValue = img.style.display;
  img.style.display = 'inline-block';
  width = img.getBoundingClientRect().width;
  img.style.display = preDisplayValue;
  return width;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageHeight = exports.getHeight = void 0;

var _convertToPx = __webpack_require__(46);

var _getParentContainerSize = __webpack_require__(47);

var _isCrop = __webpack_require__(45);

var _isServer = __webpack_require__(7);

/**
 * Get height for an image.
 *
 * Priority:
 * 1. image node param height
 * 2. image node image height
 * 3. image node inline styling
 * 4. parent node of image computed style height (up to body tag)
 *
 * @param {HTMLImageElement} props.imgNode - image node
 * @param {Object} props.config - plugin config
 * @param {Boolean} props.exactSize - a flag to use exact width/height params
 * @param {Number} props.imgNodeHeight - height of image node
 * @param {String} props.params - params of image node
 * @return {Number} height limit
 */
var getHeight = function getHeight(props) {
  var _props$imgNode = props.imgNode,
      imgNode = _props$imgNode === void 0 ? null : _props$imgNode,
      _props$config = props.config,
      config = _props$config === void 0 ? {} : _props$config,
      _props$imgNodeHeight = props.imgNodeHeight,
      imgNodeHeight = _props$imgNodeHeight === void 0 ? null : _props$imgNodeHeight,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      size = props.size,
      width = props.width;
  var _ignoreNodeImgSize = config.ignoreNodeImgSize,
      ignoreStyleImgSize = config.ignoreStyleImgSize,
      imageSizeAttributes = config.imageSizeAttributes,
      _config$params = config.params,
      configParams = _config$params === void 0 ? {} : _config$params;
  var ignoreNodeImgSize = typeof _ignoreNodeImgSize !== 'undefined' ? _ignoreNodeImgSize : imageSizeAttributes !== 'use';
  var crop = (0, _isCrop.isCrop)(params.func || configParams.func);
  var sizeParamsHeight = size && size.params && (size.params.h || size.params.height);
  var paramsRatio = size && size.params && (size.params.ratio || size.params.r);
  var paramsHeight = params.height || params.h;
  var imgNodeHeightPX = !ignoreNodeImgSize && imgNodeHeight && (0, _convertToPx.convertToPX)(imgNodeHeight);
  var imageHeight = !ignoreStyleImgSize && getImageHeight(imgNode);
  var imageContainerHeight = !(0, _isServer.isServer)() ? !imageHeight && parseInt((0, _getParentContainerSize.getParentContainerSize)(imgNode, 'height'), 10) : null;

  if (size && size.params) {
    if (paramsRatio && width) {
      return width / paramsRatio;
    }

    return sizeParamsHeight;
  }

  if (paramsHeight) {
    return paramsHeight;
  }

  if (!ignoreNodeImgSize && imgNodeHeight) {
    return imgNodeHeightPX;
  }

  if (imageHeight) {
    return imageHeight;
  }

  if (!crop) {
    return null;
  }

  return imageContainerHeight;
};
/**
 * Get height for an image.
 *
 *
 * @param {HTMLImageElement} img - image node
 * @return {Number|null} height of image container
 */


exports.getHeight = getHeight;

var getImageHeight = function getImageHeight(img) {
  var imageHeight;
  var imageStyleHeight = img && img.style && img.style.height;
  var isImageStyleHeightInPX = imageStyleHeight && !(imageStyleHeight.indexOf('%') !== -1);
  imageStyleHeight = isImageStyleHeightInPX && imageStyleHeight || '';
  imageHeight = (0, _convertToPx.convertToPX)(imageStyleHeight);
  return imageHeight && parseInt(imageHeight, 10);
};

exports.getImageHeight = getImageHeight;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRatio = void 0;

var getRatio = function getRatio(_ref) {
  var imgNodeRatio = _ref.imgNodeRatio,
      width = _ref.width,
      height = _ref.height,
      size = _ref.size,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      imgNodeWidth = _ref.imgNodeWidth,
      imgNodeHeight = _ref.imgNodeHeight;
  var imageSizeAttributes = config.imageSizeAttributes;
  var ignoreNodeRatio = imageSizeAttributes === 'ignore';

  if (size && size.params) {
    if (size.params.r || size.params.ratio) {
      return size.params.r || size.params.ratio;
    } else if ((size.params.w || size.params.width) && (size.params.h || size.params.height)) {
      return (size.params.w || size.params.width) / (size.params.h || size.params.height);
    } else {
      return null;
    }
  }

  if (!ignoreNodeRatio && imgNodeWidth && imgNodeHeight) {
    return imgNodeWidth / imgNodeHeight;
  } else if (!ignoreNodeRatio && imgNodeRatio) {
    return imgNodeRatio;
  } else if (width && height) {
    return width / height;
  }

  return null;
};

exports.getRatio = getRatio;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSizeLimit = void 0;

/**
 * Get size limit for container/image.
 *
 * @param {Number} size - width/height of container/image
 * @param {Boolean} exactSize - a flag to use exact width/height params
 * @param {Number} limitFactor - limit factor
 * @return {Number} size limit
 */
var getSizeLimit = function getSizeLimit(size, exactSize, limitFactor) {
  if (exactSize) return Math.ceil(size);
  if (size <= 25) return 25;
  if (size <= 50) return 50;
  return Math.ceil(size / limitFactor) * limitFactor;
};

exports.getSizeLimit = getSizeLimit;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSVG = void 0;

var isSVG = function isSVG(url) {
  return url.slice(-4).toLowerCase() === '.svg';
};

exports.isSVG = isSVG;

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/features/array/find.js
var find = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/es/math/trunc.js
var trunc = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/cloudimage-responsive-utils/dist/utils/get-params-from-url.js
var get_params_from_url = __webpack_require__(22);

// CONCATENATED MODULE: ./src/common/ci.utils.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var filterImages = function filterImages(images, type) {
  var filtered = [];

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var isProcessed = image.className.indexOf(type) !== -1;

    if (!isProcessed) {
      filtered.push(image);
    }
  }

  return filtered;
};

var getCommonImageProps = function getCommonImageProps(image) {
  return {
    sizes: getSize(attr(image, "data-frz-sizes") || {}) || undefined,
    params: getParams(attr(image, "data-frz-params") || {}),
    imgNodeRatio: attr(image, "data-frz-ratio") || attr(image, "data-data-frz-ratio") || undefined,
    blurHash: attr(image, "data-frz-blur-hash") || undefined,
    isLazyCanceled: attr(image, "data-frz-not-lazy") !== null || undefined,
    preserveSize: attr(image, "data-frz-preserve-size") !== null || attr(image, "data-preserve-size") !== null || undefined,
    imgNodeWidth: attr(image, "width"),
    imgNodeHeight: attr(image, "height"),
    doNotReplaceImageUrl: isTrue(image, "data-frz-do-not-replace-url")
  };
};

var getParams = function getParams(params) {
  var resultParams = undefined;

  try {
    var temp = params.replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
      return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
    });
    resultParams = JSON.parse(temp);
  } catch (e) {}

  if (!resultParams) {
    try {
      resultParams = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
    } catch (e) {}
  }

  return resultParams;
};

var getSize = function getSize(sizes) {
  var resultSizes = null;

  try {
    // add quotes around params
    var temp = sizes.replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
      if (matchedStr === 'https:' || matchedStr === 'http:') {
        return matchedStr;
      } else {
        return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
      }
    }); // change single quotes to double quotes

    temp = temp.replace(/'/g, '"').replace(/-"width":/g, '-width:');
    resultSizes = JSON.parse(temp);
  } catch (e) {}

  if (resultSizes) {
    Object.keys(resultSizes).forEach(function (key) {
      if (typeof resultSizes[key] === 'string') {
        try {
          resultSizes[key] = JSON.parse('{"' + decodeURI(resultSizes[key].replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
        } catch (e) {}
      }
    });
  }

  return resultSizes;
};

var ci_utils_getImageProps = function getImageProps(image, imgSelector) {
  var props = _objectSpread(_objectSpread({}, getCommonImageProps(image)), {}, {
    imgNodeSRC: attr(image, imgSelector) || undefined
  });

  var params = _objectSpread(_objectSpread({}, Object(get_params_from_url["getParamsFromURL"])(props.imgNodeSRC || '')), props.params);

  return _objectSpread(_objectSpread({}, props), {}, {
    params: params,
    isAdaptive: !!props.sizes,
    imgNodeSRC: getURLWithoutQueryParams(props.imgNodeSRC)
  });
};
var ci_utils_getBackgroundImageProps = function getBackgroundImageProps(image, bgSelector) {
  var props = _objectSpread(_objectSpread({}, getCommonImageProps(image)), {}, {
    imgNodeSRC: attr(image, bgSelector) || undefined,
    minWindowWidth: attr(image, "data-frz-min-window-width") || attr(image, "data-min-window-width") || undefined
  });

  var params = _objectSpread(_objectSpread({}, Object(get_params_from_url["getParamsFromURL"])(props.imgNodeSRC || '')), props.params);

  return _objectSpread(_objectSpread({}, props), {}, {
    params: params,
    isAdaptive: !!props.sizes,
    imgNodeSRC: getURLWithoutQueryParams(props.imgNodeSRC)
  });
};

var getURLWithoutQueryParams = function getURLWithoutQueryParams() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return url.split('?')[0];
};

var attr = function attr(element, attribute) {
  return element.getAttribute(attribute);
};

var isTrue = function isTrue(element, attribute) {
  var imgProp = attr(element, attribute);
  var imgDataProp = attr(element, "data-".concat(attribute));
  return imgProp !== null && imgProp !== 'false' || imgDataProp !== null && imgDataProp !== 'false';
};

var addClass = function addClass(elem, className) {
  if (!(elem.className.indexOf(className) > -1)) {
    elem.className += ' ' + className;
  }
};
var getWrapper = function getWrapper(image) {
  if ((image.parentNode.className || "").indexOf("data-frz-image-wrapper") > -1) {
    return image.parentNode;
  } else if ((image.parentNode.parentNode.className || "").indexOf("data-frz-image-wrapper") > -1) {
    return image.parentNode.parentNode;
  }
};
var isLazy = function isLazy(lazyLoading, isLazyCanceled, isUpdate) {
  if (isLazyCanceled && lazyLoading || isUpdate) {
    lazyLoading = false;
  }

  return lazyLoading;
};
var setSrc = function setSrc(image, url, propertyName, lazy, imgSrc, isSVG, dataSrcAttr) {
  image.setAttribute(lazy ? propertyName ? propertyName : 'data-src' : dataSrcAttr ? dataSrcAttr : 'src', isSVG ? imgSrc : url);
};
var setSrcset = function setSrcset(image, urls, propertyName, lazy, imgSrc, isSVG, dataSrcAttr) {
  if (isSVG) return;
  image.setAttribute(lazy ? propertyName ? propertyName : 'data-srcset' : dataSrcAttr ? dataSrcAttr : 'srcset', urls.map(function (_ref) {
    var dpr = _ref.dpr,
        url = _ref.url;
    return "".concat(url, " ").concat(dpr, "x");
  }).join(', '));
};
var setBackgroundSrc = function setBackgroundSrc(image, url, lazy, imgSrc, isSVG, dataSrcAttr) {
  var resultLink = isSVG ? imgSrc : url;

  if (lazy) {
    image.setAttribute(dataSrcAttr ? dataSrcAttr : 'data-bg', resultLink);
  } else {
    image.style.backgroundImage = "url('".concat(resultLink, "')");
  }
};
var getFreshCIElements = function getFreshCIElements(isUpdate, rootElement, imgSelector, bgSelector) {
  var images, backgroundImages;

  if (rootElement !== document && !(rootElement instanceof HTMLElement)) {
    throw new TypeError('rootElement should be an HTMLElement');
  }

  if (isUpdate) {
    images = rootElement.querySelectorAll("img[".concat(imgSelector, "]"));
    backgroundImages = rootElement.querySelectorAll("[".concat(bgSelector, "]"));
  } else {
    images = filterImages(rootElement.querySelectorAll("img[".concat(imgSelector, "]")), "frz-image");
    backgroundImages = filterImages(rootElement.querySelectorAll("[".concat(bgSelector, "]")), "frz-bg");
  }

  return [images, backgroundImages];
};
var ci_utils_destroyNodeImgSize = function destroyNodeImgSize(imgNode) {
  imgNode.removeAttribute("height");
  imgNode.removeAttribute("width");
};
// EXTERNAL MODULE: ./node_modules/cloudimage-responsive-utils/dist/utils/determine-container-props.js
var determine_container_props = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/cloudimage-responsive-utils/dist/utils/get-img-src.js
var get_img_src = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/cloudimage-responsive-utils/dist/utils/generate-url.js
var generate_url = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/cloudimage-responsive-utils/dist/utils/get-breakpoint.js
var get_breakpoint = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/cloudimage-responsive-utils/dist/utils/is-supported-in-browser.js
var is_supported_in_browser = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/cloudimage-responsive-utils/dist/constants.js
var constants = __webpack_require__(13);

// CONCATENATED MODULE: ./src/plain/ci.config.js


var ci_config_getInitialConfigPlain = function getInitialConfigPlain(config) {
  var _config$imgSelector = config.imgSelector,
      imgSelector = _config$imgSelector === void 0 ? 'ci-src' : _config$imgSelector,
      _config$bgSelector = config.bgSelector,
      bgSelector = _config$bgSelector === void 0 ? 'ci-bg-url' : _config$bgSelector,
      _config$token = config.token,
      token = _config$token === void 0 ? '' : _config$token,
      _config$domain = config.domain,
      domain = _config$domain === void 0 ? 'cloudimg.io' : _config$domain,
      _config$lazyLoading = config.lazyLoading,
      lazyLoading = _config$lazyLoading === void 0 ? false : _config$lazyLoading,
      baseUrl = config.baseUrl,
      baseURL = config.baseURL,
      presets = config.presets,
      _config$params = config.params,
      params = _config$params === void 0 ? 'org_if_sml=1' : _config$params,
      _config$apiVersion = config.apiVersion,
      apiVersion = _config$apiVersion === void 0 ? 'v7' : _config$apiVersion,
      _config$customDomain = config.customDomain,
      customDomain = _config$customDomain === void 0 ? false : _config$customDomain,
      _config$init = config.init,
      init = _config$init === void 0 ? true : _config$init,
      _config$exactSize = config.exactSize,
      exactSize = _config$exactSize === void 0 ? false : _config$exactSize,
      _config$doNotReplaceU = config.doNotReplaceURL,
      doNotReplaceURL = _config$doNotReplaceU === void 0 ? false : _config$doNotReplaceU,
      _config$limitFactor = config.limitFactor,
      limitFactor = _config$limitFactor === void 0 ? 100 : _config$limitFactor,
      _config$imageSizeAttr = config.imageSizeAttributes,
      imageSizeAttributes = _config$imageSizeAttr === void 0 ? 'use' : _config$imageSizeAttr,
      ignoreNodeImgSize = config.ignoreNodeImgSize,
      _config$ignoreStyleIm = config.ignoreStyleImgSize,
      ignoreStyleImgSize = _config$ignoreStyleIm === void 0 ? false : _config$ignoreStyleIm,
      _config$destroyNodeIm = config.destroyNodeImgSize,
      destroyNodeImgSize = _config$destroyNodeIm === void 0 ? false : _config$destroyNodeIm,
      _config$saveNodeImgRa = config.saveNodeImgRatio,
      saveNodeImgRatio = _config$saveNodeImgRa === void 0 ? false : _config$saveNodeImgRa,
      _config$detectImageNo = config.detectImageNodeCSS,
      detectImageNodeCSS = _config$detectImageNo === void 0 ? false : _config$detectImageNo,
      _config$processOnlyWi = config.processOnlyWidth,
      processOnlyWidth = _config$processOnlyWi === void 0 ? false : _config$processOnlyWi,
      _config$devicePixelRa = config.devicePixelRatioList,
      devicePixelRatioList = _config$devicePixelRa === void 0 ? constants["DEVICE_PIXEL_RATIO_LIST"] : _config$devicePixelRa,
      _config$onImageLoad = config.onImageLoad,
      onImageLoad = _config$onImageLoad === void 0 ? null : _config$onImageLoad,
      _config$processURL = config.processURL,
      processURL = _config$processURL === void 0 ? null : _config$processURL,
      _config$processQueryS = config.processQueryString,
      processQueryString = _config$processQueryS === void 0 ? null : _config$processQueryS;
  return {
    imgSelector: imgSelector,
    bgSelector: bgSelector,
    token: token,
    domain: domain,
    lazyLoading: lazyLoading,
    baseURL: baseUrl || baseURL,
    exactSize: exactSize,
    presets: presets ? presets : {
      xs: '(max-width: 575px)',
      // to 575       PHONE
      sm: '(min-width: 576px)',
      // 576 - 767    PHABLET
      md: '(min-width: 768px)',
      // 768 - 991    TABLET
      lg: '(min-width: 992px)',
      // 992 - 1199   SMALL_LAPTOP_SCREEN
      xl: '(min-width: 1200px)' // from 1200    USUALSCREEN

    },
    params: getParams(params),
    apiVersion: apiVersion,
    customDomain: customDomain,
    innerWidth: window.innerWidth,
    init: init,
    doNotReplaceURL: doNotReplaceURL,
    devicePixelRatioList: devicePixelRatioList,
    limitFactor: limitFactor,
    imageSizeAttributes: imageSizeAttributes,
    ignoreNodeImgSize: ignoreNodeImgSize,
    ignoreStyleImgSize: ignoreStyleImgSize,
    destroyNodeImgSize: destroyNodeImgSize,
    saveNodeImgRatio: saveNodeImgRatio,
    detectImageNodeCSS: detectImageNodeCSS,
    processOnlyWidth: processOnlyWidth,
    onImageLoad: onImageLoad,
    processURL: processURL,
    processQueryString: processQueryString //isChrome: /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)

  };
};
// CONCATENATED MODULE: ./src/plain/ci.utils.js

var ci_utils_loadBackgroundImage = function loadBackgroundImage(event) {
  var bgContainer = event.target;
  var bg = bgContainer.getAttribute("data-bg");

  if (bg) {
    var optimizedImage = new Image();

    optimizedImage.onload = function () {
      addClass(bgContainer, "frz-image-loaded");
      bgContainer.removeAttribute("data-bg");
      bgContainer.removeAttribute("frz-preview");
    };

    optimizedImage.src = bg;
    bgContainer.style.backgroundImage = "url(" + bg + ")";
  }
};
var ci_utils_initImageClasses = function initImageClasses(_ref) {
  var imgNode = _ref.imgNode,
      lazy = _ref.lazy;
  addClass(imgNode, "frz-image");

  if (lazy) {
    addClass(imgNode, "lazyfrz");
  }
};
var ci_utils_initImageBackgroundClasses = function initImageBackgroundClasses(_ref2) {
  var imgNode = _ref2.imgNode,
      lazy = _ref2.lazy;
  addClass(imgNode, "frz-bg");

  if (lazy) {
    addClass(imgNode, "lazyfrz");
  }
};
// EXTERNAL MODULE: ./node_modules/throttle-debounce/index.umd.js
var index_umd = __webpack_require__(53);

// CONCATENATED MODULE: ./src/plain/ci.service.js
function ci_service_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ci_service_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ci_service_ownKeys(Object(source), !0).forEach(function (key) { ci_service_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ci_service_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ci_service_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var ci_service_CIResponsive = /*#__PURE__*/function () {
  function CIResponsive(_config) {
    var _this = this;

    _classCallCheck(this, CIResponsive);

    ci_service_defineProperty(this, "getBasicInfo", function (imgNode, isUpdate, windowScreenBecomesBigger, type) {
      var isImage = type === 'image';
      var config = _this.config;
      var baseURL = config.baseURL,
          lazyLoading = config.lazyLoading,
          presets = config.presets,
          devicePixelRatioList = config.devicePixelRatioList,
          imgSelector = config.imgSelector,
          bgSelector = config.bgSelector,
          processURL = config.processURL,
          processQueryString = config.processQueryString;
      var imgProps = isImage ? ci_utils_getImageProps(imgNode, imgSelector) : ci_utils_getBackgroundImageProps(imgNode, bgSelector);
      var params = imgProps.params,
          imgNodeSRC = imgProps.imgNodeSRC,
          isLazyCanceled = imgProps.isLazyCanceled,
          sizes = imgProps.sizes,
          isAdaptive = imgProps.isAdaptive,
          preserveSize = imgProps.preserveSize,
          minWindowWidth = imgProps.minWindowWidth;
      if (!imgNodeSRC) return;

      var _getImgSRC = Object(get_img_src["getImgSRC"])(imgNodeSRC, baseURL),
          _getImgSRC2 = _slicedToArray(_getImgSRC, 2),
          src = _getImgSRC2[0],
          isSVG = _getImgSRC2[1];

      var lazy = isLazy(lazyLoading, isLazyCanceled, isUpdate);
      var size;

      if (!Object(is_supported_in_browser["isSupportedInBrowser"])(true)) {
        if (isImage) {
          imgNode.src = src;
        } else {
          imgNode.style.backgroundImage = 'url(' + src + ')';
        }

        return;
      }

      if (window.innerWidth < minWindowWidth && !isImage) {
        imgNode.style.backgroundImage = 'none';
        return;
      }

      if (isAdaptive) {
        size = Object(get_breakpoint["getBreakpoint"])(sizes, presets);
      } else {
        if (isUpdate && !windowScreenBecomesBigger) return;
      }

      var containerProps = Object(determine_container_props["determineContainerProps"])(ci_service_objectSpread(ci_service_objectSpread({}, imgProps), {}, {
        size: size,
        imgNode: imgNode,
        config: config
      }));
      var service = {
        props: {
          imgNode: imgNode,
          imgProps: imgProps,
          config: config
        },
        methods: {}
      };

      var generateURLbyDPR = function generateURLbyDPR(devicePixelRatio) {
        return Object(generate_url["generateURL"])({
          src: src,
          params: params,
          config: config,
          containerProps: containerProps,
          devicePixelRatio: devicePixelRatio,
          processURL: processURL,
          processQueryString: processQueryString,
          service: service
        });
      };

      var cloudimageUrl = generateURLbyDPR();
      var cloudimageSrcset = devicePixelRatioList.map(function (dpr) {
        return {
          dpr: dpr.toString(),
          url: generateURLbyDPR(dpr)
        };
      });
      var props = {
        imgNode: imgNode,
        isUpdate: isUpdate,
        imgProps: imgProps,
        lazy: lazy,
        containerProps: containerProps,
        isSVG: isSVG,
        cloudimageUrl: cloudimageUrl,
        src: src,
        preserveSize: preserveSize
      };

      if (isImage) {
        _this.processImage(ci_service_objectSpread(ci_service_objectSpread({}, props), {}, {
          cloudimageUrl: generateURLbyDPR(1),
          cloudimageSrcset: cloudimageSrcset
        }));
      } else {
        _this.processBackgroundImage(props);
      }
    });

    this.config = ci_config_getInitialConfigPlain(_config);
    if (this.config.init) this.init();
    this.innerWidth = window.innerWidth;
  }

  _createClass(CIResponsive, [{
    key: "init",
    value: function init() {
      document.addEventListener('lazybeforeunveil', ci_utils_loadBackgroundImage);
      window.addEventListener('resize', Object(index_umd["debounce"])(100, this.onUpdateDimensions.bind(this)));
      this.process();
    }
  }, {
    key: "onUpdateDimensions",
    value: function onUpdateDimensions() {
      this.process(true);

      if (this.innerWidth < window.innerWidth) {
        this.innerWidth = window.innerWidth;
      }
    }
  }, {
    key: "process",
    value: function process(isUpdate) {
      var _this2 = this;

      var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      var _this$config = this.config,
          imgSelector = _this$config.imgSelector,
          bgSelector = _this$config.bgSelector;
      var windowScreenBecomesBigger = this.innerWidth < window.innerWidth;

      var _getFreshCIElements = getFreshCIElements(isUpdate, rootElement, imgSelector, bgSelector),
          _getFreshCIElements2 = _slicedToArray(_getFreshCIElements, 2),
          images = _getFreshCIElements2[0],
          backgroundImages = _getFreshCIElements2[1];

      if (images.length > -1) {
        images.forEach(function (imgNode) {
          _this2.getBasicInfo(imgNode, isUpdate, windowScreenBecomesBigger, 'image');
        });
      }

      if (backgroundImages.length > -1) {
        backgroundImages.forEach(function (imgNode) {
          _this2.getBasicInfo(imgNode, isUpdate, windowScreenBecomesBigger, 'background');
        });
      }
    }
  }, {
    key: "processImage",
    value: function processImage(props) {
      var imgNode = props.imgNode,
          isUpdate = props.isUpdate,
          lazy = props.lazy,
          isSVG = props.isSVG,
          cloudimageUrl = props.cloudimageUrl,
          src = props.src,
          cloudimageSrcset = props.cloudimageSrcset;
      var config = this.config;
      var dataSrcAttr = config.dataSrcAttr,
          onImageLoad = config.onImageLoad;

      if (!isUpdate) {
        ci_utils_initImageClasses({
          imgNode: imgNode,
          lazy: lazy
        });
      }

      if (config.destroyNodeImgSize) {
        ci_utils_destroyNodeImgSize(imgNode);
      }

      if (config.processOnlyWidth) {
        imgNode.removeAttribute("height");
      }

      imgNode.onload = function () {
        if (onImageLoad && typeof onImageLoad === 'function') {
          onImageLoad(imgNode);
        }

        addClass(imgNode, "frz-image-loaded");
      };

      setSrcset(imgNode, cloudimageSrcset, "data-frz-srcset", lazy, src, isSVG, dataSrcAttr);
      setSrc(imgNode, cloudimageUrl, "data-frz-src", lazy, src, isSVG, dataSrcAttr);
    }
  }, {
    key: "processBackgroundImage",
    value: function processBackgroundImage(props) {
      var imgNode = props.imgNode,
          isUpdate = props.isUpdate,
          lazy = props.lazy,
          isSVG = props.isSVG,
          cloudimageUrl = props.cloudimageUrl,
          src = props.src;
      var config = this.config;
      var dataSrcAttr = config.dataSrcAttr;

      if (!isUpdate) {
        imgNode.className = "".concat(imgNode.className).concat(lazy ? ' lazyload' : '');
      }

      setBackgroundSrc(imgNode, cloudimageUrl, lazy, src, isSVG, dataSrcAttr);
    }
  }]);

  return CIResponsive;
}();


// CONCATENATED MODULE: ./src/plain/index.js



window.CIResponsive = ci_service_CIResponsive;

/***/ })
/******/ ]);
//# sourceMappingURL=js-edgepic-responsive.js.map