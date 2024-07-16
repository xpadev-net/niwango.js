/*!
  niwango.js v0.0.1-canary.20231002-1
  (c) 2023 xpadev-net https://xpadev.net
  Released under the MIT License.
  
  build at: 1721096148769
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Niwango = factory());
})(this, (function () { 'use strict';

  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol */

  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return _assign.apply(this, arguments);
  };
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var niwangoCore = {exports: {}};

  (function (module, exports) {
    (function (global, factory) {
      module.exports = factory() ;
    })(commonjsGlobal, function () {

      var _class5;
      var execute$1;
      var setExecute = function setExecute(val) {
        execute$1 = val;
      };
      var argumentParser$1;
      var setArgumentParser = function setArgumentParser(val) {
        argumentParser$1 = val;
      };
      var getName$1;
      var setGetName = function setGetName(val) {
        getName$1 = val;
      };
      var assign$1;
      var setAssign = function setAssign(val) {
        assign$1 = val;
      };
      var resolvePrototype$1;
      var setResolvePrototype = function setResolvePrototype(val) {
        resolvePrototype$1 = val;
      };
      var prototypeScope = {
        Array: {},
        Bool: {},
        Number: {},
        Object: {},
        String: {},
        Value: {}
      };
      var initPrototypeScope = function initPrototypeScope() {
        prototypeScope = {
          Array: {},
          Bool: {},
          Number: {},
          Object: {},
          String: {},
          Value: {}
        };
      };
      var definedFunctions = {};
      var initDefinedFunctions = function initDefinedFunctions() {
        definedFunctions = {};
      };
      var appendDefinedFunctions = function appendDefinedFunctions(name, func) {
        definedFunctions[name] = func;
      };
      var isWide = false;
      var setIsWide = function setIsWide(val) {
        isWide = val;
      };
      var resultHook = [];
      var appendResultHook = function appendResultHook(func) {
        resultHook.push(func);
      };
      var initResultHook = function initResultHook() {
        resultHook = [];
      };
      var InvalidTypeError = /*#__PURE__*/function (_Error) {
        _inherits(InvalidTypeError, _Error);
        var _super = _createSuper(InvalidTypeError);
        function InvalidTypeError(message, ast, scopes) {
          var _this;
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          _classCallCheck(this, InvalidTypeError);
          _this = _super.call(this, "InvalidTypeError", options);
          _defineProperty(_assertThisInitialized(_this), "ASTName", void 0);
          _defineProperty(_assertThisInitialized(_this), "ast", void 0);
          _defineProperty(_assertThisInitialized(_this), "scopes", void 0);
          _this.message = message;
          _this.ASTName = ast.type;
          _this.ast = ast;
          _this.scopes = scopes;
          return _this;
        }
        return _createClass(InvalidTypeError);
      }( /*#__PURE__*/_wrapNativeSuper(Error));
      InvalidTypeError.prototype.name = "InvalidTypeError";
      var NotImplementedError = /*#__PURE__*/function (_Error2) {
        _inherits(NotImplementedError, _Error2);
        var _super2 = _createSuper(NotImplementedError);
        function NotImplementedError(ast, scopes) {
          var _this2;
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          _classCallCheck(this, NotImplementedError);
          _this2 = _super2.call(this, "NotImplementedError", options);
          _defineProperty(_assertThisInitialized(_this2), "ASTName", void 0);
          _defineProperty(_assertThisInitialized(_this2), "ast", void 0);
          _defineProperty(_assertThisInitialized(_this2), "scopes", void 0);
          _this2.ASTName = ast.type;
          _this2.ast = ast;
          _this2.scopes = scopes;
          return _this2;
        }
        return _createClass(NotImplementedError);
      }( /*#__PURE__*/_wrapNativeSuper(Error));
      NotImplementedError.prototype.name = "NotImplementedError";
      var Errors = /*#__PURE__*/Object.freeze({
        __proto__: null,
        InvalidTypeError: InvalidTypeError,
        NotImplementedError: NotImplementedError
      });
      var config;
      var initConfig = function initConfig() {
        config = {
          stageWidth: {
            "default": 512,
            full: 672
          },
          stageHeight: 384,
          canvasWidth: 672,
          canvasHeight: 384
        };
      };
      var processArrayExpression = function processArrayExpression(script, scopes, trace) {
        return script.elements.reduce(function (result, element) {
          return [].concat(_toConsumableArray(result), [execute$1(element, scopes, trace)]);
        }, []);
      };
      var processArrowFunctionExpression = function processArrowFunctionExpression(script, scopes, trace) {
        return execute$1(script.body, scopes, trace);
      };
      var getType = function getType(i) {
        var type = _typeof(i);
        if (type === "object") {
          if (i === null) return "null";
          if (Array.isArray(i)) return "array";
          return "object";
        }
        return type;
      };
      var funcMap = {
        "boolean": "toASBoolean",
        number: "toASNumber",
        string: "toASString"
      };
      var format = function format(value, to) {
        var formatFunc = resolvePrototype$1(getType(value), funcMap[to]);
        if (!formatFunc) throw new Error();
        return formatFunc({}, [], value, []);
      };
      var Multiplication = function Multiplication(left, right) {
        if (typeof left === "string") {
          return left.repeat(format(right, "number"));
        }
        return format(left, "number") * format(right, "number");
      };
      var Subtraction = function Subtraction(left, right) {
        var rightNum = format(right, "number");
        if (rightNum === 0 && typeof left === "string" && left.match(/^(0|0x)?[0-9]+(\.[0-9]+)?$/)) {
          return Number(left);
        }
        return format(left, "number") - rightNum;
      };
      var Addition = function Addition(left, right) {
        if (typeof left === "string" || typeof right === "string") {
          return "".concat(format(left, "string")).concat(format(right, "string"));
        }
        return format(left, "number") + format(right, "number");
      };
      var LessThan = function LessThan(left, right) {
        if (typeof left === "string" && typeof right === "string") {
          return left < right;
        }
        return format(left, "number") < format(right, "number");
      };
      var GreaterThan = function GreaterThan(left, right) {
        if (typeof left === "string" && typeof right === "string") {
          return left > right;
        }
        return format(left, "number") > format(right, "number");
      };
      var LessThanOrEqual = function LessThanOrEqual(left, right) {
        if (typeof left === "string" && typeof right === "string") {
          return left <= right;
        }
        return format(left, "number") <= format(right, "number");
      };
      var GreaterThanOrEqual = function GreaterThanOrEqual(left, right) {
        if (typeof left === "string" && typeof right === "string") {
          return left >= right;
        }
        return format(left, "number") >= format(right, "number");
      };
      var Division = function Division(left, right) {
        return format(left, "number") / format(right, "number");
      };
      var Remainder = function Remainder(left, right) {
        return format(left, "number") % format(right, "number");
      };
      var Exponentiation = function Exponentiation(left, right) {
        return Math.pow(format(left, "number"), format(right, "number"));
      };
      var BitwiseAND = function BitwiseAND(left, right) {
        return format(left, "number") & format(right, "number");
      };
      var BitwiseOR = function BitwiseOR(left, right) {
        return format(left, "number") | format(right, "number");
      };
      var BitwiseXOR = function BitwiseXOR(left, right) {
        return format(left, "number") ^ format(right, "number");
      };
      var BitwiseNOT = function BitwiseNOT(value) {
        return ~format(value, "number");
      };
      var LeftShift = function LeftShift(left, right) {
        return format(left, "number") << format(right, "number");
      };
      var RightShift = function RightShift(left, right) {
        return format(left, "number") >> format(right, "number");
      };
      var UnsignedRightShift = function UnsignedRightShift(left, right) {
        return format(left, "number") >>> format(right, "number");
      };
      var UnaryNegation = function UnaryNegation(value) {
        return -format(value, "number");
      };
      var UnaryPlus = function UnaryPlus(value) {
        return format(value, "number");
      };
      var LogicalNot = function LogicalNot(value) {
        return !value;
      };
      var Compare = function Compare(left, right) {
        if (typeof left === "string" && typeof right === "string") {
          if (left < right) return -1;
          if (left > right) return 1;
          return 0;
        }
        var leftNumber = format(left, "number");
        var rightNumber = format(right, "number");
        if (leftNumber < rightNumber) return -1;
        if (leftNumber > rightNumber) return 1;
        return 0;
      };
      var Equality = function Equality(left, right) {
        return left == right;
      };
      var processors$2 = {
        "=": function _(_2, right) {
          return right;
        },
        "+=": Addition,
        "-=": Subtraction,
        "*=": Multiplication,
        "/=": Division,
        "%=": Remainder,
        "**=": Exponentiation,
        "<<=": LeftShift,
        ">>=": RightShift,
        ">>>=": UnsignedRightShift,
        "&=": BitwiseAND,
        "^=": BitwiseXOR,
        "|=": BitwiseOR,
        "&&=": function _(left, right) {
          return left && right;
        },
        "||=": function _(left, right) {
          return left || right;
        },
        "??=": function _(left, right) {
          return left !== null && left !== void 0 ? left : right;
        }
      };
      var processAssignmentExpression = function processAssignmentExpression(script, scopes, trace) {
        var left = execute$1(script.left, scopes, trace);
        var right = execute$1(script.right, scopes, trace);
        var processor = processors$2[script.operator];
        if (!processor) throw new NotImplementedError(script, scopes);
        var result = processor(left, right);
        assign$1(script.left, result, scopes, trace);
        return result;
      };
      var processors$1 = {
        ">=": GreaterThanOrEqual,
        "<=": LessThanOrEqual,
        ">": GreaterThan,
        "<": LessThan,
        "!=": function _(left, right) {
          return left !== right;
        },
        "!==": function _(left, right) {
          return left !== right;
        },
        "<>": Compare,
        "==": function _(left, right) {
          return left === right;
        },
        "===": function _(left, right) {
          return left === right;
        },
        "+": Addition,
        "-": Subtraction,
        "*": Multiplication,
        "/": Division,
        "%": Remainder,
        "**": Exponentiation,
        "&": BitwiseAND,
        "|": BitwiseOR,
        "^": BitwiseXOR,
        "<<": LeftShift,
        ">>": RightShift,
        ">>>": UnsignedRightShift
      };
      var processBinaryExpression = function processBinaryExpression(script, scopes, trace) {
        var left = execute$1(script.left, scopes, trace);
        var right = execute$1(script.right, scopes, trace);
        var processor = processors$1[script.operator];
        if (!processor) throw new NotImplementedError(script, scopes);
        return processor(left, right);
      };
      var processBlockStatement = function processBlockStatement(script, scopes, trace) {
        return script.body.reduce(function (_, item) {
          return execute$1(item, scopes, trace);
        }, undefined);
      };
      var argumentParser = function argumentParser(inputs, scopes, keys, trace) {
        var compute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var result = {};
        var nonKeyValues = [];
        var _iterator = _createForOfIteratorHelper(inputs),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            if (item.NIWANGO_Identifier) {
              var key = getName$1(item.NIWANGO_Identifier, scopes, trace);
              if (keys.includes(key)) {
                result[key] = compute ? execute$1(item, scopes, trace) : item;
                continue;
              }
            }
            nonKeyValues.push(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var i = 0;
        var _iterator2 = _createForOfIteratorHelper(keys),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _key = _step2.value;
            var value = nonKeyValues[i];
            if (!result[_key] && value) {
              result[_key] = compute ? execute$1(value, scopes, trace) : value;
              i++;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return result;
      };
      var initArgumentParser = function initArgumentParser() {
        setArgumentParser(argumentParser);
      };
      var typeGuard = {
        AST: function AST(i) {
          return !!i && _typeof(i) === "object" && typeof i.type === "string";
        },
        Literal: function Literal(i) {
          return !!i && _typeof(i) === "object" && i.type === "Literal";
        },
        Identifier: function Identifier(i) {
          return !!i && _typeof(i) === "object" && i.type === "Identifier";
        },
        ExpressionStatement: function ExpressionStatement(i) {
          return !!i && _typeof(i) === "object" && i.type === "ExpressionStatement";
        },
        AssignmentExpression: function AssignmentExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "AssignmentExpression";
        },
        ArrayExpression: function ArrayExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "ArrayExpression";
        },
        ArrowFunctionExpression: function ArrowFunctionExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "ArrowFunctionExpression";
        },
        BinaryExpression: function BinaryExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "BinaryExpression";
        },
        BlockStatement: function BlockStatement(i) {
          return !!i && _typeof(i) === "object" && i.type === "BlockStatement";
        },
        CallExpression: function CallExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "CallExpression";
        },
        EmptyStatement: function EmptyStatement(i) {
          return !!i && _typeof(i) === "object" && i.type === "EmptyStatement";
        },
        IfStatement: function IfStatement(i) {
          return !!i && _typeof(i) === "object" && i.type === "IfStatement";
        },
        LogicalExpression: function LogicalExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "LogicalExpression";
        },
        LambdaExpression: function LambdaExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "LambdaExpression";
        },
        MemberExpression: function MemberExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "MemberExpression";
        },
        ObjectExpression: function ObjectExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "ObjectExpression";
        },
        Program: function Program(i) {
          return !!i && _typeof(i) === "object" && i.type === "Program";
        },
        SequenceExpression: function SequenceExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "SequenceExpression";
        },
        UnaryExpression: function UnaryExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "UnaryExpression";
        },
        UpdateExpression: function UpdateExpression(i) {
          return !!i && _typeof(i) === "object" && i.type === "UpdateExpression";
        },
        VariableDeclaration: function VariableDeclaration(i) {
          return !!i && _typeof(i) === "object" && i.type === "VariableDeclaration";
        },
        definedFunction: function definedFunction(i) {
          return !!i && _typeof(i) === "object" && i.type === "definedFunction";
        },
        object: function object(i) {
          return !!i && _typeof(i) === "object";
        },
        array: function array(i) {
          return Array.isArray(i);
        }
      };
      var assign = function assign(target, value, scopes, trace) {
        if (scopes.length < 1) {
          return;
        }
        try {
          if (typeGuard.Identifier(target)) {
            var _iterator3 = _createForOfIteratorHelper(scopes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var scope = _step3.value;
                if (scope[target.name] !== undefined) {
                  scope[target.name] = value;
                  return;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            if (scopes[0]) {
              scopes[0][target.name] = value;
            }
          } else if (typeGuard.MemberExpression(target)) {
            var left = execute$1(target.object, scopes, trace);
            if (!typeGuard.object(left)) {
              console.error("[assign] left is not object", target, value, scopes, trace);
              return;
            }
            var key = target.computed ? execute$1(target.property, scopes, trace) : getName$1(target.property, scopes, trace);
            left[key] = value;
          }
        } catch (e) {
          if (e instanceof Error) {
            console.error("[assign] ".concat(e.name, ": ").concat(e.message), target, value, scopes, trace);
          }
        }
      };
      var initAssign = function initAssign() {
        setAssign(assign);
      };
      var getGlobalScope = function getGlobalScope(scopes) {
        if (scopes.length < 3) {
          return undefined;
        } else {
          return scopes[scopes.length - 3];
        }
      };
      var getName = function getName(target, scopes, trace) {
        if (typeGuard.Identifier(target)) {
          return target.name;
        } else {
          return execute$1(target, scopes, trace);
        }
      };
      var initGetName = function initGetName() {
        setGetName(getName);
      };
      var resolve = function resolve(script, scopes, trace) {
        try {
          if (typeGuard.Identifier(script)) {
            var _iterator4 = _createForOfIteratorHelper(scopes),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var scope = _step4.value;
                if (scope[script.name] !== undefined) {
                  return processResolveHook(scope, script.name);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } catch (e) {
          if (e instanceof Error) {
            console.error("[resolve] ".concat(e.name, ": ").concat(e.message), script, scopes, trace);
          }
        }
        return undefined;
      };
      var processResolveHook = function processResolveHook(scope, name) {
        var value = scope[name];
        for (var _i = 0, _resultHook = resultHook; _i < _resultHook.length; _i++) {
          var hook = _resultHook[_i];
          value = hook(value);
        }
        scope[name] = value;
        return value;
      };
      var processAt = function processAt(script, scopes, _, trace) {
        if (!script.arguments[0]) {
          console.error("[call expression] @: at least 1 argument required", trace);
          return;
        }
        assign$1(script.arguments[0], resolve({
          type: "Identifier",
          name: "@0"
        }, scopes, trace), scopes, trace);
      };
      var processDistance = function processDistance(script, scopes, _, trace) {
        var args = argumentParser$1(script.arguments, scopes, ["x1", "y1", "x2", "y2"], trace);
        return Math.sqrt(Math.pow(format(args.x2, "number") - format(args.x1, "number"), 2) + Math.pow(format(args.y2, "number") - format(args.y1, "number"), 2));
      };
      var processDump = function processDump(script, scopes, _object, trace) {
        var _console;
        var arr = [];
        var _iterator5 = _createForOfIteratorHelper(script.arguments),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var argument = _step5.value;
            arr.push(structuredClone(execute$1(argument, scopes, trace)));
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        (_console = console).debug.apply(_console, ["%cdump", "background:green;"].concat(arr, [trace]));
      };
      var processIf = function processIf(script, scopes, _, trace) {
        var args = argumentParser$1(script.arguments, scopes, ["when", "then", "else"], trace, false);
        var condition = execute$1(args.when, scopes, trace);
        if (condition) {
          return execute$1(args.then, scopes, trace);
        } else {
          return execute$1(args["else"], scopes, trace);
        }
      };
      var time = new Date().getTime();
      var processPlayStartTime = function processPlayStartTime() {
        return time;
      };
      var processReturn = function processReturn(script, scopes, _, trace) {
        return execute$1(script.arguments[0], scopes, trace);
      };
      var processScreenWidth = function processScreenWidth() {
        return config.stageWidth[isWide ? "full" : "default"];
      };
      var processScreenHeight = function processScreenHeight() {
        return config.stageHeight;
      };
      var processTimethis = function processTimethis(script, scopes, _, trace) {
        console.time("timethis");
        var result = execute$1(script.arguments[0], scopes, trace);
        console.timeEnd("timethis");
        return result;
      };
      var processWhileKari$1 = function processWhileKari$1(script, scopes, _, trace) {
        if (!(script.arguments[0] && script.arguments[1])) {
          return;
        }
        var loopCount = 0;
        while (execute$1(script.arguments[0], scopes, trace) && loopCount++ <= 10000) {
          execute$1(script.arguments[1], scopes, trace);
        }
      };
      var functions = {
        dump: processDump,
        while_kari: processWhileKari$1,
        "if": processIf,
        distance: processDistance,
        screenWidth: processScreenWidth,
        screenHeight: processScreenHeight,
        playStartTime: processPlayStartTime,
        timethis: processTimethis,
        "@": processAt,
        "return": processReturn
      };
      var processCallExpression = function processCallExpression(script, scopes, trace) {
        var _object$callee, _self$callee;
        var isMemberExpression = typeGuard.MemberExpression(script.callee);
        var callee = getName$1(isMemberExpression ? script.callee.property : script.callee, scopes, trace);
        var object = getThis(script, scopes, trace);
        var objectRef = object === null || object === void 0 ? void 0 : object[callee];
        if (typeGuard.definedFunction(objectRef)) {
          return processDefinedFunction(script, scopes, trace, objectRef, object);
        }
        var objectCallRef = object === null || object === void 0 || (_object$callee = object[callee]) === null || _object$callee === void 0 ? void 0 : _object$callee.call;
        if (typeGuard.definedFunction(objectCallRef)) {
          return processDefinedFunction(script, scopes, trace, objectCallRef, object);
        }
        var self = resolve({
          type: "Identifier",
          name: "self"
        }, scopes, trace);
        var selfRef = self === null || self === void 0 ? void 0 : self[callee];
        if (typeGuard.definedFunction(selfRef)) {
          return processDefinedFunction(script, scopes, trace, selfRef);
        }
        var selfCallRef = self === null || self === void 0 || (_self$callee = self[callee]) === null || _self$callee === void 0 ? void 0 : _self$callee.call;
        if (typeGuard.definedFunction(selfCallRef)) {
          return processDefinedFunction(script, scopes, trace, selfCallRef);
        }
        var prototype = resolvePrototype$1(getType(object), callee);
        if (prototype) {
          return prototype(script, scopes, object, trace);
        }
        var func = functions[callee];
        if (func) {
          return func(script, scopes, object, trace);
        }
        var definedFunc = definedFunctions[callee];
        if (definedFunc) {
          return definedFunc(script, scopes, object, trace);
        }
        throw new NotImplementedError(script, scopes);
      };
      var processDefinedFunction = function processDefinedFunction(script, scopes, trace, func, object) {
        if (func.isKari) {
          return processDefinedKariFunction(script, scopes, trace, func);
        } else {
          return processDefinedNormalFunction(script, scopes, trace, func, object);
        }
      };
      var processDefinedKariFunction = function processDefinedKariFunction(script, scopes, trace, func) {
        var args = {};
        var count = 1;
        script.arguments.forEach(function (val) {
          if (val !== null && val !== void 0 && val.NIWANGO_Identifier) {
            args[getName$1(val.NIWANGO_Identifier, scopes, trace)] = execute$1(val, scopes, trace);
          } else {
            args["$".concat(count++)] = execute$1(val, scopes, trace);
          }
        });
        return execute$1(func.script.arguments[1], [args].concat(_toConsumableArray(scopes)), trace);
      };
      var processDefinedNormalFunction = function processDefinedNormalFunction(script, scopes, trace, func, object) {
        var argNames = func.script.arguments[0].arguments.map(function (arg) {
          return getName$1(arg, scopes, trace);
        });
        var args = argumentParser$1(script.arguments, scopes, argNames, trace);
        var scope = object ? [_objectSpread2(_objectSpread2({}, args), {}, {
          self: object
        }), object].concat(_toConsumableArray(scopes)) : [_objectSpread2({}, args)].concat(_toConsumableArray(scopes));
        return execute$1(func.script.arguments[1], scope, trace);
      };
      var getThis = function getThis(script, scopes, trace) {
        if (typeGuard.MemberExpression(script.callee)) return execute$1(script.callee.object, scopes, trace);
        return getGlobalScope(scopes);
      };
      var processExpressionStatement = function processExpressionStatement(script, scopes, trace) {
        return execute$1(script.expression, scopes, trace);
      };
      var processIdentifier = function processIdentifier(script, scopes, trace) {
        var value = resolve(script, scopes, trace);
        if (typeGuard.definedFunction(value)) {
          return execute$1(value.script.arguments[1], [{}].concat(_toConsumableArray(scopes)), trace);
        }
        if (value === undefined) {
          try {
            return processCallExpression({
              type: "CallExpression",
              callee: script,
              arguments: []
            }, scopes, trace);
          } catch (_) {}
        }
        return value;
      };
      var processLambdaExpression = function processLambdaExpression(script, scopes) {
        return _objectSpread2(_objectSpread2({}, script), {}, {
          scopes: scopes
        });
      };
      var processLiteral = function processLiteral(script) {
        return script.value;
      };
      var processLogicalExpression = function processLogicalExpression(script, scopes, trace) {
        var left = execute$1(script.left, scopes, trace);
        var right = execute$1(script.right, scopes, trace);
        if (script.operator === "&&") {
          return left && right;
        } else if (script.operator === "||") {
          return left || right;
        }
        throw new NotImplementedError(script, scopes);
      };
      var processMemberExpression = function processMemberExpression(script, scopes, trace) {
        var left = execute$1(script.object, scopes, trace);
        if (left === undefined) {
          console.error("[member expression] left is undefined", script, scopes, trace);
          return;
        }
        var right = script.computed ? execute$1(script.property, scopes, trace) : getName$1(script.property, scopes, trace);
        if (typeGuard.object(left) && typeGuard.definedFunction(left[right])) {
          var func = left[right];
          return execute$1(func.script.arguments[1], [{
            self: left
          }].concat(_toConsumableArray(scopes)), trace);
        }
        if (typeGuard.LambdaExpression(left)) {
          if (typeGuard.SequenceExpression(script.property)) {
            var args = {};
            var index = 0;
            var _iterator6 = _createForOfIteratorHelper(script.property.expressions),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var arg = _step6.value;
                args["@".concat(index++)] = execute$1(arg, scopes, trace);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            return execute$1(left.body, [args].concat(_toConsumableArray(left.scopes)), trace);
          }
          return execute$1(left.body, [{
            "@0": right
          }].concat(_toConsumableArray(left.scopes)), trace);
        }
        try {
          return processCallExpression({
            type: "CallExpression",
            callee: {
              type: "MemberExpression",
              object: {
                type: "Raw",
                value: left
              },
              property: {
                type: "Raw",
                value: right
              },
              computed: false
            },
            arguments: []
          }, [{
            self: left
          }].concat(_toConsumableArray(scopes)), trace);
        } catch (e) {
          return left[right];
        }
      };
      var processObjectExpression = function processObjectExpression(script, scopes, trace) {
        var object = {};
        var _iterator7 = _createForOfIteratorHelper(script.properties),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var item = _step7.value;
            object[getName$1(item.key, scopes, trace)] = execute$1(item.value, scopes, trace);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        return object;
      };
      var processProgram = function processProgram(script, scopes, trace) {
        return script.body.reduce(function (_, item) {
          return execute$1(item, scopes, trace);
        }, undefined);
      };
      var processRaw$4 = function processRaw$4(script) {
        return script.value;
      };
      var processSequenceExpression = function processSequenceExpression(script, scopes, trace) {
        return script.expressions.reduce(function (_, arg) {
          return execute$1(arg, scopes, trace);
        }, undefined);
      };
      var processUnaryExpression = function processUnaryExpression(script, scopes, trace) {
        var value = execute$1(script.argument, scopes, trace);
        if (script.operator === "-") {
          return UnaryNegation(value);
        } else if (script.operator === "+") {
          return UnaryPlus(value);
        } else if (script.operator === "~") {
          return BitwiseNOT(value);
        } else if (script.operator === "!") {
          return LogicalNot(value);
        }
        throw new NotImplementedError(script, scopes);
      };
      var processUpdateExpression = function processUpdateExpression(script, scopes, trace) {
        var value = execute$1(script.argument, scopes, trace);
        if (script.operator === "--") {
          var result = Subtraction(value, 1);
          assign$1(script.argument, result, scopes, trace);
          if (script.prefix) {
            return result;
          } else {
            return value;
          }
        } else if (script.operator === "++") {
          var _result = Addition(value, 1);
          assign$1(script.argument, _result, scopes, trace);
          if (script.prefix) {
            return _result;
          } else {
            return value;
          }
        }
        throw new NotImplementedError(script, scopes);
      };
      var processVariableDeclaration = function processVariableDeclaration(script, scopes, trace) {
        var lastItem;
        var _iterator8 = _createForOfIteratorHelper(script.declarations),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var item = _step8.value;
            if (item.init === null) {
              return execute$1(item.id, scopes, trace);
            } else {
              if (scopes[0]) {
                lastItem = scopes[0][getName$1(item.id, scopes, trace)] = execute$1(item.init, scopes, trace);
              }
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        return lastItem;
      };
      var processors = {
        AssignmentExpression: processAssignmentExpression,
        ArrayExpression: processArrayExpression,
        ArrowFunctionExpression: processArrowFunctionExpression,
        BinaryExpression: processBinaryExpression,
        BlockStatement: processBlockStatement,
        CallExpression: processCallExpression,
        EmptyStatement: function EmptyStatement() {
          return undefined;
        },
        ExpressionStatement: processExpressionStatement,
        Identifier: processIdentifier,
        LambdaExpression: processLambdaExpression,
        Literal: processLiteral,
        LogicalExpression: processLogicalExpression,
        MemberExpression: processMemberExpression,
        ObjectExpression: processObjectExpression,
        Program: processProgram,
        SequenceExpression: processSequenceExpression,
        UnaryExpression: processUnaryExpression,
        UpdateExpression: processUpdateExpression,
        VariableDeclaration: processVariableDeclaration,
        Raw: processRaw$4
      };
      var TooMuchRecursionError = /*#__PURE__*/function (_Error3) {
        _inherits(TooMuchRecursionError, _Error3);
        var _super3 = _createSuper(TooMuchRecursionError);
        function TooMuchRecursionError(ast, scopes) {
          var _this3;
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          _classCallCheck(this, TooMuchRecursionError);
          _this3 = _super3.call(this, "TooMuchRecursionError", options);
          _defineProperty(_assertThisInitialized(_this3), "ASTName", void 0);
          _defineProperty(_assertThisInitialized(_this3), "ast", void 0);
          _defineProperty(_assertThisInitialized(_this3), "scopes", void 0);
          _this3.ASTName = ast.type;
          _this3.ast = ast;
          _this3.scopes = scopes;
          return _this3;
        }
        return _createClass(TooMuchRecursionError);
      }( /*#__PURE__*/_wrapNativeSuper(Error));
      TooMuchRecursionError.prototype.name = "TooMuchRecursionError";
      var execute = function execute(script, scopes, trace) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
          "catch": true
        };
        if (!script || !typeGuard.AST(script)) return;
        if (config.recursionLimit && trace.length > config.recursionLimit) {
          throw new TooMuchRecursionError(script, scopes);
        }
        var result = undefined;
        trace = [].concat(_toConsumableArray(trace), [script]);
        try {
          var processor = processors[script.type];
          if (processor) {
            result = processor(script, scopes, trace);
          }
        } catch (e) {
          if (!options["catch"]) throw e;
          var n = e;
          console.log(n, n.ast, n.scopes);
          console.log("trace", trace);
        }
        for (var _i2 = 0, _resultHook2 = resultHook; _i2 < _resultHook2.length; _i2++) {
          var hook = _resultHook2[_i2];
          result = hook(result);
        }
        return result;
      };
      var initExecute = function initExecute() {
        setExecute(execute);
      };
      var processToASString$4 = function processToASString$4(_script, _scopes, object) {
        return "<[" + object.map(function (val) {
          return format(val, "string");
        }).join(",") + "]>";
      };
      var processIndex$2 = function processIndex$2(script, scopes, object, trace) {
        var index = execute$1(script.arguments[0], scopes, trace);
        if (typeof index === "number") {
          return object[index];
        }
        return object[format(index, "number")];
      };
      var processJoin = function processJoin(script, scopes, object, trace) {
        var separator = execute$1(script.arguments[0], scopes, trace);
        if (typeof separator !== "undefined") {
          return object.join(format(separator, "string"));
        }
        return object.join("");
      };
      var processPop = function processPop(_script, _scopes, object) {
        return object.pop();
      };
      var processProduct = function processProduct(_script, _scopes, object) {
        return object.reduce(function (pv, val) {
          return pv * format(val, "number");
        }, 1);
      };
      var processPush = function processPush(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        return object.push(value);
      };
      var processShift = function processShift(_script, _scopes, object) {
        return object.shift();
      };
      var processSize$1 = function processSize$1(_script, _scopes, object) {
        return object.length;
      };
      var processSort = function processSort(_script, _scopes, object) {
        return object.sort();
      };
      var processSum = function processSum(_script, _scopes, object) {
        return object.reduce(function (pv, val) {
          return pv + format(val, "number");
        }, 0);
      };
      var processUnshift = function processUnshift(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        return object.unshift(value);
      };
      var processWalk = function processWalk(script, scopes, object, trace) {
        var processor = script.arguments[0];
        var result;
        if (typeGuard.LambdaExpression(processor)) {
          var _iterator9 = _createForOfIteratorHelper(object),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var item = _step9.value;
              result = execute$1(processor.body, [{
                "@0": item
              }].concat(_toConsumableArray(scopes)), trace);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
        return result;
      };
      var prototypeArrayFunctions = {
        index: processIndex$2,
        size: processSize$1,
        unshift: processUnshift,
        join: processJoin,
        push: processPush,
        shift: processShift,
        pop: processPop,
        sort: processSort,
        sum: processSum,
        product: processProduct,
        walk: processWalk,
        toASString: processToASString$4
      };
      var processRaw$3 = function processRaw$3(_script, _scopes, object) {
        return object;
      };
      var processToASNumber$2 = function processToASNumber$2(_script, _scopes, object) {
        return object ? 1 : 0;
      };
      var processToASString$3 = function processToASString$3(_script, _scopes, object) {
        return object ? "true" : "false";
      };
      var prototypeBoolFunctions = {
        toASNumber: processToASNumber$2,
        toASString: processToASString$3,
        toASBoolean: processRaw$3,
        raw: processRaw$3
      };
      var processAbs = function processAbs(_script, _scopes, object) {
        return Math.abs(object);
      };
      var processCos = function processCos(_script, _scopes, object) {
        return Math.cos(object);
      };
      var processDecrease = function processDecrease(_script, _scopes, object) {
        return object - 1;
      };
      var processFloor = function processFloor(_script, _scopes, object) {
        return Math.floor(object);
      };
      var processIncrease = function processIncrease(_script, _scopes, object) {
        return object + 1;
      };
      var processPow = function processPow(script, scopes, object, trace) {
        var exponent = execute$1(script.arguments[0], scopes, trace);
        return Math.pow(object, format(exponent, "number"));
      };
      var processRaw$2 = function processRaw$2(_script, _scopes, object) {
        return object;
      };
      var processSin = function processSin(_script, _scopes, object) {
        return Math.sin(object);
      };
      var processTimes = function processTimes(script, scopes, object, trace) {
        var body = script.arguments[0];
        var lastResult;
        for (var i = 0; i < format(object, "number"); i++) {
          if (body.type === "LambdaExpression") {
            lastResult = execute$1(body.body, [{
              "@0": i
            }].concat(_toConsumableArray(scopes)), trace);
            continue;
          }
          lastResult = execute$1(body, [{
            "@0": i
          }].concat(_toConsumableArray(scopes)), trace);
        }
        return lastResult;
      };
      var processToASString$2 = function processToASString$2(_script, _scopes, object) {
        return "".concat(object);
      };
      var prototypeNumberFunctions = {
        floor: processFloor,
        sin: processSin,
        cos: processCos,
        pow: processPow,
        abs: processAbs,
        times: processTimes,
        raw: processRaw$2,
        hashCode: processRaw$2,
        toASNumber: processRaw$2,
        toASString: processToASString$2,
        increase: processIncrease,
        decrease: processDecrease
      };
      var processDefKari = function processDefKari(script, scopes, object, trace) {
        if (!script.arguments[0]) {
          return;
        }
        var functionName = execute$1(script.arguments[0], scopes, trace);
        if (typeof functionName !== "string") {
          return;
        }
        object[functionName] = {
          type: "definedFunction",
          isKari: true,
          script: script
        };
      };
      var processRaw$1 = function processRaw$1(_script, _scopes, object) {
        return object;
      };
      var processClone = function processClone(_script, _scope, object) {
        return structuredClone(object);
      };
      var processDef = function processDef(script, scopes, object, trace) {
        var functionName = function () {
          if (typeGuard.Identifier(script.arguments[0])) {
            return getName$1(script.arguments[0], scopes, trace);
          }
          if (typeGuard.CallExpression(script.arguments[0])) {
            return getName$1(script.arguments[0].callee, scopes, trace);
          }
          throw new InvalidTypeError("function name must be CallExpression or Identifier", script, scopes);
        }();
        if (typeof functionName !== "string") {
          throw new InvalidTypeError("function name must be string", script, scopes);
        }
        object[functionName] = {
          type: "definedFunction",
          isKari: false,
          script: script
        };
      };
      var processGetSlot = function processGetSlot(script, scopes, object, trace) {
        var key = execute$1(script.arguments[0], scopes, trace);
        if (typeof key !== "string" && typeof key !== "number") {
          throw new InvalidTypeError("[call expression] Object.getSlot: id must be string or number", script, scopes);
        }
        return object[key];
      };
      var processSetSlot = function processSetSlot(script, scopes, object, trace) {
        var key = execute$1(script.arguments[0], scopes, trace);
        if (typeof key !== "string" && typeof key !== "number") {
          throw new InvalidTypeError("[call expression] Object.setSlot: id must be string or number", script, scopes);
        }
        var value = execute$1(script.arguments[1], scopes, trace);
        object[key] = value;
        return value;
      };
      var prototypeObjectFunctions = {
        def: processDef,
        def_kari: processDefKari,
        getSlot: processGetSlot,
        setSlot: processSetSlot,
        clone: processClone,
        raw: processRaw$1
      };
      var processIndex$1 = function processIndex$1(script, scopes, object, trace) {
        var index = execute$1(script.arguments[0], scopes, trace);
        return object[format(index, "number")];
      };
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })), t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2$1(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
            _defineProperty$1(e, r, t[r]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
        }
        return e;
      }
      function _defineProperty$1(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toPrimitive(input, hint) {
        if (_typeof(input) !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (_typeof(res) !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return _typeof(key) === "symbol" ? key : String(key);
      }
      var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : {};
      var parser = {
        exports: {}
      };
      (function (module) {
        // Generated by Peggy 3.0.2.
        //
        // https://peggyjs.org/
        (function (root, factory) {
          if (module.exports) {
            module.exports = factory();
          } else {
            root.parser = factory();
          }
        })(commonjsGlobal$1, function () {
          function peg$subclass(child, parent) {
            function C() {
              this.constructor = child;
            }
            C.prototype = parent.prototype;
            child.prototype = new C();
          }
          function peg$SyntaxError(message, expected, found, location) {
            var self = Error.call(this, message);
            // istanbul ignore next Check is a necessary evil to support older environments
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(self, peg$SyntaxError.prototype);
            }
            self.expected = expected;
            self.found = found;
            self.location = location;
            self.name = "SyntaxError";
            return self;
          }
          peg$subclass(peg$SyntaxError, Error);
          function peg$padEnd(str, targetLength, padString) {
            padString = padString || " ";
            if (str.length > targetLength) {
              return str;
            }
            targetLength -= str.length;
            padString += padString.repeat(targetLength);
            return str + padString.slice(0, targetLength);
          }
          peg$SyntaxError.prototype.format = function (sources) {
            var str = "Error: " + this.message;
            if (this.location) {
              var src = null;
              var k;
              for (k = 0; k < sources.length; k++) {
                if (sources[k].source === this.location.source) {
                  src = sources[k].text.split(/\r\n|\n|\r/g);
                  break;
                }
              }
              var s = this.location.start;
              var offset_s = this.location.source && typeof this.location.source.offset === "function" ? this.location.source.offset(s) : s;
              var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
              if (src) {
                var e = this.location.end;
                var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
                var line = src[s.line - 1];
                var last = s.line === e.line ? e.column : line.length + 1;
                var hatLen = last - s.column || 1;
                str += "\n --> " + loc + "\n" + filler + " |\n" + offset_s.line + " | " + line + "\n" + filler + " | " + peg$padEnd("", s.column - 1, ' ') + peg$padEnd("", hatLen, "^");
              } else {
                str += "\n at " + loc;
              }
            }
            return str;
          };
          peg$SyntaxError.buildMessage = function (expected, found) {
            var DESCRIBE_EXPECTATION_FNS = {
              literal: function literal(expectation) {
                return "\"" + literalEscape(expectation.text) + "\"";
              },
              "class": function _class(expectation) {
                var escapedParts = expectation.parts.map(function (part) {
                  return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
                });
                return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
              },
              any: function any() {
                return "any character";
              },
              end: function end() {
                return "end of input";
              },
              other: function other(expectation) {
                return expectation.description;
              }
            };
            function hex(ch) {
              return ch.charCodeAt(0).toString(16).toUpperCase();
            }
            function literalEscape(s) {
              return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
                return "\\x0" + hex(ch);
              }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
                return "\\x" + hex(ch);
              });
            }
            function classEscape(s) {
              return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
                return "\\x0" + hex(ch);
              }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
                return "\\x" + hex(ch);
              });
            }
            function describeExpectation(expectation) {
              return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
            }
            function describeExpected(expected) {
              var descriptions = expected.map(describeExpectation);
              var i, j;
              descriptions.sort();
              if (descriptions.length > 0) {
                for (i = 1, j = 1; i < descriptions.length; i++) {
                  if (descriptions[i - 1] !== descriptions[i]) {
                    descriptions[j] = descriptions[i];
                    j++;
                  }
                }
                descriptions.length = j;
              }
              switch (descriptions.length) {
                case 1:
                  return descriptions[0];
                case 2:
                  return descriptions[0] + " or " + descriptions[1];
                default:
                  return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
              }
            }
            function describeFound(found) {
              return found ? "\"" + literalEscape(found) + "\"" : "end of input";
            }
            return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
          };
          function peg$parse(input, options) {
            options = options !== undefined ? options : {};
            var peg$FAILED = {};
            var peg$source = options.grammarSource;
            var peg$startRuleFunctions = {
              Start: peg$parseStart
            };
            var peg$startRuleFunction = peg$parseStart;
            var peg$c0 = "\t";
            var peg$c1 = "\v";
            var peg$c2 = "\f";
            var peg$c3 = " ";
            var peg$c4 = "\xA0";
            var peg$c5 = "\uFEFF";
            var peg$c6 = "\n";
            var peg$c7 = "\r\n";
            var peg$c8 = "\r";
            var peg$c9 = "\u2028";
            var peg$c10 = "\u2029";
            var peg$c11 = "#";
            var peg$c12 = "/";
            var peg$c13 = "$";
            var peg$c14 = "_";
            var peg$c15 = "@";
            var peg$c16 = "\\";
            var peg$c17 = "\u200C";
            var peg$c18 = "\u200D";
            var peg$c19 = ".";
            var peg$c20 = "0";
            var peg$c21 = "e";
            var peg$c22 = "0x";
            var peg$c23 = "\"";
            var peg$c24 = "'";
            var peg$c25 = "b";
            var peg$c26 = "f";
            var peg$c27 = "n";
            var peg$c28 = "r";
            var peg$c29 = "t";
            var peg$c30 = "v";
            var peg$c31 = "x";
            var peg$c32 = "u";
            var peg$c33 = "[";
            var peg$c34 = "]";
            var peg$c35 = "false";
            var peg$c36 = "lambda";
            var peg$c37 = "null";
            var peg$c38 = "nil";
            var peg$c39 = "true";
            var peg$c40 = ";";
            var peg$c41 = "}";
            var peg$c42 = ")";
            var peg$c43 = "(";
            var peg$c44 = ",";
            var peg$c45 = "{";
            var peg$c46 = ":";
            var peg$c47 = "=";
            var peg$c48 = "++";
            var peg$c49 = "--";
            var peg$c50 = "+";
            var peg$c51 = "-";
            var peg$c52 = "~";
            var peg$c53 = "!";
            var peg$c54 = "*";
            var peg$c55 = "%";
            var peg$c56 = "<<";
            var peg$c57 = ">>>";
            var peg$c58 = ">>";
            var peg$c59 = "<=";
            var peg$c60 = ">=";
            var peg$c61 = "<";
            var peg$c62 = ">";
            var peg$c63 = "===";
            var peg$c64 = "!==";
            var peg$c65 = "==";
            var peg$c66 = "!=";
            var peg$c67 = "<>";
            var peg$c68 = "&";
            var peg$c69 = "^";
            var peg$c70 = "**";
            var peg$c71 = "|";
            var peg$c72 = "&&";
            var peg$c73 = "||";
            var peg$c74 = "?";
            var peg$c75 = ":=";
            var peg$c76 = "*=";
            var peg$c77 = "/=";
            var peg$c78 = "%=";
            var peg$c79 = "+=";
            var peg$c80 = "-=";
            var peg$c81 = "<<=";
            var peg$c82 = ">>=";
            var peg$c83 = ">>>=";
            var peg$c84 = "&=";
            var peg$c85 = "^=";
            var peg$c86 = "|=";
            var peg$r0 = /^[\n\r\u2028\u2029]/;
            var peg$r1 = /^[^ -~\uFF61-\uFF9F\n]/;
            var peg$r2 = /^[0-9]/;
            var peg$r3 = /^[1-9]/;
            var peg$r4 = /^[+\-]/;
            var peg$r5 = /^[0-9a-f]/i;
            var peg$r6 = /^[0-7]/i;
            var peg$r7 = /^[*\\\/[]/;
            var peg$r8 = /^[\\\/[]/;
            var peg$r9 = /^[\]\\]/;
            var peg$r10 = /^[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137-\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148-\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C-\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA-\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9-\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC-\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF-\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F-\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0-\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB-\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE-\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6-\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FC7\u1FD0-\u1FD3\u1FD6-\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6-\u1FF7\u210A\u210E-\u210F\u2113\u212F\u2134\u2139\u213C-\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65-\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73-\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3-\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]/;
            var peg$r11 = /^[\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5-\u06E6\u07F4-\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C-\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D-\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C-\uA69D\uA717-\uA71F\uA770\uA788\uA7F8-\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3-\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E-\uFF9F]/;
            var peg$r12 = /^[\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05EF-\u05F2\u0620-\u063F\u0641-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u09FC\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0-\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60-\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0-\u0CE1\u0CF1-\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E45\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065-\u1066\u106E-\u1070\u1075-\u1081\u108E\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE-\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5-\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A-\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD-\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/;
            var peg$r13 = /^[\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC]/;
            var peg$r14 = /^[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178-\u0179\u017B\u017D\u0181-\u0182\u0184\u0186-\u0187\u0189-\u018B\u018E-\u0191\u0193-\u0194\u0196-\u0198\u019C-\u019D\u019F-\u01A0\u01A2\u01A4\u01A6-\u01A7\u01A9\u01AC\u01AE-\u01AF\u01B1-\u01B3\u01B5\u01B7-\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A-\u023B\u023D-\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E-\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9-\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0-\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E-\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D-\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uFF21-\uFF3A]/;
            var peg$r15 = /^[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E-\u094F\u0982-\u0983\u09BE-\u09C0\u09C7-\u09C8\u09CB-\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB-\u0ACC\u0B02-\u0B03\u0B3E\u0B40\u0B47-\u0B48\u0B4B-\u0B4C\u0B57\u0BBE-\u0BBF\u0BC1-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82-\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7-\u0CC8\u0CCA-\u0CCB\u0CD5-\u0CD6\u0D02-\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82-\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2-\u0DF3\u0F3E-\u0F3F\u0F7F\u102B-\u102C\u1031\u1038\u103B-\u103C\u1056-\u1057\u1062-\u1064\u1067-\u106D\u1083-\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7-\u17C8\u1923-\u1926\u1929-\u192B\u1930-\u1931\u1933-\u1938\u1A19-\u1A1A\u1A55\u1A57\u1A61\u1A63-\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B44\u1B82\u1BA1\u1BA6-\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2-\u1BF3\u1C24-\u1C2B\u1C34-\u1C35\u1CE1\u1CF2-\u1CF3\u1CF7\u302E-\u302F\uA823-\uA824\uA827\uA880-\uA881\uA8B4-\uA8C3\uA952-\uA953\uA983\uA9B4-\uA9B5\uA9BA-\uA9BB\uA9BD-\uA9C0\uAA2F-\uAA30\uAA33-\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE-\uAAEF\uAAF5\uABE3-\uABE4\uABE6-\uABE7\uABE9-\uABEA\uABEC]/;
            var peg$r16 = /^[\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962-\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2-\u09E3\u09FE\u0A01-\u0A02\u0A3C\u0A41-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A51\u0A70-\u0A71\u0A75\u0A81-\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7-\u0AC8\u0ACD\u0AE2-\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62-\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C62-\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC-\u0CCD\u0CE2-\u0CE3\u0D00-\u0D01\u0D3B-\u0D3C\u0D41-\u0D44\u0D4D\u0D62-\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039-\u103A\u103D-\u103E\u1058-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B4-\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885-\u1886\u18A9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193B\u1A17-\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80-\u1B81\u1BA2-\u1BA5\u1BA8-\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8-\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099-\u309A\uA66F\uA674-\uA67D\uA69E-\uA69F\uA6F0-\uA6F1\uA802\uA806\uA80B\uA825-\uA826\uA8C4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31-\uAA32\uAA35-\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7-\uAAB8\uAABE-\uAABF\uAAC1\uAAEC-\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/;
            var peg$r17 = /^[0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]/;
            var peg$r18 = /^[\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF]/;
            var peg$r19 = /^[_\u203F-\u2040\u2054\uFE33-\uFE34\uFE4D-\uFE4F\uFF3F]/;
            var peg$r20 = /^[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
            var peg$r21 = /^[+=]/;
            var peg$r22 = /^[\-=]/;
            var peg$r23 = /^[&=]/;
            var peg$r24 = /^[|=]/;
            var peg$e0 = peg$anyExpectation();
            var peg$e1 = peg$otherExpectation("whitespace");
            var peg$e2 = peg$literalExpectation("\t", false);
            var peg$e3 = peg$literalExpectation("\v", false);
            var peg$e4 = peg$literalExpectation("\f", false);
            var peg$e5 = peg$literalExpectation(" ", false);
            var peg$e6 = peg$literalExpectation("\xA0", false);
            var peg$e7 = peg$literalExpectation("\uFEFF", false);
            var peg$e8 = peg$classExpectation(["\n", "\r", "\u2028", "\u2029"], false, false);
            var peg$e9 = peg$otherExpectation("end of line");
            var peg$e10 = peg$literalExpectation("\n", false);
            var peg$e11 = peg$literalExpectation("\r\n", false);
            var peg$e12 = peg$literalExpectation("\r", false);
            var peg$e13 = peg$literalExpectation("\u2028", false);
            var peg$e14 = peg$literalExpectation("\u2029", false);
            var peg$e15 = peg$otherExpectation("comment");
            var peg$e16 = peg$literalExpectation("#", false);
            var peg$e17 = peg$otherExpectation("identifier");
            var peg$e18 = peg$literalExpectation("/", false);
            var peg$e19 = peg$literalExpectation("$", false);
            var peg$e20 = peg$literalExpectation("_", false);
            var peg$e21 = peg$literalExpectation("@", false);
            var peg$e22 = peg$literalExpectation("\\", false);
            var peg$e23 = peg$literalExpectation("\u200C", false);
            var peg$e24 = peg$literalExpectation("\u200D", false);
            var peg$e25 = peg$classExpectation([[" ", "~"], ["\uFF61", "\uFF9F"], "\n"], true, false);
            var peg$e26 = peg$otherExpectation("number");
            var peg$e27 = peg$literalExpectation(".", false);
            var peg$e28 = peg$literalExpectation("0", false);
            var peg$e29 = peg$classExpectation([["0", "9"]], false, false);
            var peg$e30 = peg$classExpectation([["1", "9"]], false, false);
            var peg$e31 = peg$literalExpectation("e", true);
            var peg$e32 = peg$classExpectation(["+", "-"], false, false);
            var peg$e33 = peg$literalExpectation("0x", true);
            var peg$e34 = peg$literalExpectation("0", true);
            var peg$e35 = peg$classExpectation([["0", "9"], ["a", "f"]], false, true);
            var peg$e36 = peg$classExpectation([["0", "7"]], false, true);
            var peg$e37 = peg$otherExpectation("string");
            var peg$e38 = peg$literalExpectation("\"", false);
            var peg$e39 = peg$literalExpectation("'", false);
            var peg$e40 = peg$literalExpectation("b", false);
            var peg$e41 = peg$literalExpectation("f", false);
            var peg$e42 = peg$literalExpectation("n", false);
            var peg$e43 = peg$literalExpectation("r", false);
            var peg$e44 = peg$literalExpectation("t", false);
            var peg$e45 = peg$literalExpectation("v", false);
            var peg$e46 = peg$literalExpectation("x", false);
            var peg$e47 = peg$literalExpectation("u", false);
            var peg$e48 = peg$otherExpectation("regular expression");
            var peg$e49 = peg$classExpectation(["*", "\\", "/", "["], false, false);
            var peg$e50 = peg$classExpectation(["\\", "/", "["], false, false);
            var peg$e51 = peg$literalExpectation("[", false);
            var peg$e52 = peg$literalExpectation("]", false);
            var peg$e53 = peg$classExpectation(["]", "\\"], false, false);
            var peg$e54 = peg$classExpectation([["a", "z"], "\xB5", ["\xDF", "\xF6"], ["\xF8", "\xFF"], "\u0101", "\u0103", "\u0105", "\u0107", "\u0109", "\u010B", "\u010D", "\u010F", "\u0111", "\u0113", "\u0115", "\u0117", "\u0119", "\u011B", "\u011D", "\u011F", "\u0121", "\u0123", "\u0125", "\u0127", "\u0129", "\u012B", "\u012D", "\u012F", "\u0131", "\u0133", "\u0135", ["\u0137", "\u0138"], "\u013A", "\u013C", "\u013E", "\u0140", "\u0142", "\u0144", "\u0146", ["\u0148", "\u0149"], "\u014B", "\u014D", "\u014F", "\u0151", "\u0153", "\u0155", "\u0157", "\u0159", "\u015B", "\u015D", "\u015F", "\u0161", "\u0163", "\u0165", "\u0167", "\u0169", "\u016B", "\u016D", "\u016F", "\u0171", "\u0173", "\u0175", "\u0177", "\u017A", "\u017C", ["\u017E", "\u0180"], "\u0183", "\u0185", "\u0188", ["\u018C", "\u018D"], "\u0192", "\u0195", ["\u0199", "\u019B"], "\u019E", "\u01A1", "\u01A3", "\u01A5", "\u01A8", ["\u01AA", "\u01AB"], "\u01AD", "\u01B0", "\u01B4", "\u01B6", ["\u01B9", "\u01BA"], ["\u01BD", "\u01BF"], "\u01C6", "\u01C9", "\u01CC", "\u01CE", "\u01D0", "\u01D2", "\u01D4", "\u01D6", "\u01D8", "\u01DA", ["\u01DC", "\u01DD"], "\u01DF", "\u01E1", "\u01E3", "\u01E5", "\u01E7", "\u01E9", "\u01EB", "\u01ED", ["\u01EF", "\u01F0"], "\u01F3", "\u01F5", "\u01F9", "\u01FB", "\u01FD", "\u01FF", "\u0201", "\u0203", "\u0205", "\u0207", "\u0209", "\u020B", "\u020D", "\u020F", "\u0211", "\u0213", "\u0215", "\u0217", "\u0219", "\u021B", "\u021D", "\u021F", "\u0221", "\u0223", "\u0225", "\u0227", "\u0229", "\u022B", "\u022D", "\u022F", "\u0231", ["\u0233", "\u0239"], "\u023C", ["\u023F", "\u0240"], "\u0242", "\u0247", "\u0249", "\u024B", "\u024D", ["\u024F", "\u0293"], ["\u0295", "\u02AF"], "\u0371", "\u0373", "\u0377", ["\u037B", "\u037D"], "\u0390", ["\u03AC", "\u03CE"], ["\u03D0", "\u03D1"], ["\u03D5", "\u03D7"], "\u03D9", "\u03DB", "\u03DD", "\u03DF", "\u03E1", "\u03E3", "\u03E5", "\u03E7", "\u03E9", "\u03EB", "\u03ED", ["\u03EF", "\u03F3"], "\u03F5", "\u03F8", ["\u03FB", "\u03FC"], ["\u0430", "\u045F"], "\u0461", "\u0463", "\u0465", "\u0467", "\u0469", "\u046B", "\u046D", "\u046F", "\u0471", "\u0473", "\u0475", "\u0477", "\u0479", "\u047B", "\u047D", "\u047F", "\u0481", "\u048B", "\u048D", "\u048F", "\u0491", "\u0493", "\u0495", "\u0497", "\u0499", "\u049B", "\u049D", "\u049F", "\u04A1", "\u04A3", "\u04A5", "\u04A7", "\u04A9", "\u04AB", "\u04AD", "\u04AF", "\u04B1", "\u04B3", "\u04B5", "\u04B7", "\u04B9", "\u04BB", "\u04BD", "\u04BF", "\u04C2", "\u04C4", "\u04C6", "\u04C8", "\u04CA", "\u04CC", ["\u04CE", "\u04CF"], "\u04D1", "\u04D3", "\u04D5", "\u04D7", "\u04D9", "\u04DB", "\u04DD", "\u04DF", "\u04E1", "\u04E3", "\u04E5", "\u04E7", "\u04E9", "\u04EB", "\u04ED", "\u04EF", "\u04F1", "\u04F3", "\u04F5", "\u04F7", "\u04F9", "\u04FB", "\u04FD", "\u04FF", "\u0501", "\u0503", "\u0505", "\u0507", "\u0509", "\u050B", "\u050D", "\u050F", "\u0511", "\u0513", "\u0515", "\u0517", "\u0519", "\u051B", "\u051D", "\u051F", "\u0521", "\u0523", "\u0525", "\u0527", "\u0529", "\u052B", "\u052D", "\u052F", ["\u0560", "\u0588"], ["\u10D0", "\u10FA"], ["\u10FD", "\u10FF"], ["\u13F8", "\u13FD"], ["\u1C80", "\u1C88"], ["\u1D00", "\u1D2B"], ["\u1D6B", "\u1D77"], ["\u1D79", "\u1D9A"], "\u1E01", "\u1E03", "\u1E05", "\u1E07", "\u1E09", "\u1E0B", "\u1E0D", "\u1E0F", "\u1E11", "\u1E13", "\u1E15", "\u1E17", "\u1E19", "\u1E1B", "\u1E1D", "\u1E1F", "\u1E21", "\u1E23", "\u1E25", "\u1E27", "\u1E29", "\u1E2B", "\u1E2D", "\u1E2F", "\u1E31", "\u1E33", "\u1E35", "\u1E37", "\u1E39", "\u1E3B", "\u1E3D", "\u1E3F", "\u1E41", "\u1E43", "\u1E45", "\u1E47", "\u1E49", "\u1E4B", "\u1E4D", "\u1E4F", "\u1E51", "\u1E53", "\u1E55", "\u1E57", "\u1E59", "\u1E5B", "\u1E5D", "\u1E5F", "\u1E61", "\u1E63", "\u1E65", "\u1E67", "\u1E69", "\u1E6B", "\u1E6D", "\u1E6F", "\u1E71", "\u1E73", "\u1E75", "\u1E77", "\u1E79", "\u1E7B", "\u1E7D", "\u1E7F", "\u1E81", "\u1E83", "\u1E85", "\u1E87", "\u1E89", "\u1E8B", "\u1E8D", "\u1E8F", "\u1E91", "\u1E93", ["\u1E95", "\u1E9D"], "\u1E9F", "\u1EA1", "\u1EA3", "\u1EA5", "\u1EA7", "\u1EA9", "\u1EAB", "\u1EAD", "\u1EAF", "\u1EB1", "\u1EB3", "\u1EB5", "\u1EB7", "\u1EB9", "\u1EBB", "\u1EBD", "\u1EBF", "\u1EC1", "\u1EC3", "\u1EC5", "\u1EC7", "\u1EC9", "\u1ECB", "\u1ECD", "\u1ECF", "\u1ED1", "\u1ED3", "\u1ED5", "\u1ED7", "\u1ED9", "\u1EDB", "\u1EDD", "\u1EDF", "\u1EE1", "\u1EE3", "\u1EE5", "\u1EE7", "\u1EE9", "\u1EEB", "\u1EED", "\u1EEF", "\u1EF1", "\u1EF3", "\u1EF5", "\u1EF7", "\u1EF9", "\u1EFB", "\u1EFD", ["\u1EFF", "\u1F07"], ["\u1F10", "\u1F15"], ["\u1F20", "\u1F27"], ["\u1F30", "\u1F37"], ["\u1F40", "\u1F45"], ["\u1F50", "\u1F57"], ["\u1F60", "\u1F67"], ["\u1F70", "\u1F7D"], ["\u1F80", "\u1F87"], ["\u1F90", "\u1F97"], ["\u1FA0", "\u1FA7"], ["\u1FB0", "\u1FB4"], ["\u1FB6", "\u1FB7"], "\u1FBE", ["\u1FC2", "\u1FC4"], ["\u1FC6", "\u1FC7"], ["\u1FD0", "\u1FD3"], ["\u1FD6", "\u1FD7"], ["\u1FE0", "\u1FE7"], ["\u1FF2", "\u1FF4"], ["\u1FF6", "\u1FF7"], "\u210A", ["\u210E", "\u210F"], "\u2113", "\u212F", "\u2134", "\u2139", ["\u213C", "\u213D"], ["\u2146", "\u2149"], "\u214E", "\u2184", ["\u2C30", "\u2C5E"], "\u2C61", ["\u2C65", "\u2C66"], "\u2C68", "\u2C6A", "\u2C6C", "\u2C71", ["\u2C73", "\u2C74"], ["\u2C76", "\u2C7B"], "\u2C81", "\u2C83", "\u2C85", "\u2C87", "\u2C89", "\u2C8B", "\u2C8D", "\u2C8F", "\u2C91", "\u2C93", "\u2C95", "\u2C97", "\u2C99", "\u2C9B", "\u2C9D", "\u2C9F", "\u2CA1", "\u2CA3", "\u2CA5", "\u2CA7", "\u2CA9", "\u2CAB", "\u2CAD", "\u2CAF", "\u2CB1", "\u2CB3", "\u2CB5", "\u2CB7", "\u2CB9", "\u2CBB", "\u2CBD", "\u2CBF", "\u2CC1", "\u2CC3", "\u2CC5", "\u2CC7", "\u2CC9", "\u2CCB", "\u2CCD", "\u2CCF", "\u2CD1", "\u2CD3", "\u2CD5", "\u2CD7", "\u2CD9", "\u2CDB", "\u2CDD", "\u2CDF", "\u2CE1", ["\u2CE3", "\u2CE4"], "\u2CEC", "\u2CEE", "\u2CF3", ["\u2D00", "\u2D25"], "\u2D27", "\u2D2D", "\uA641", "\uA643", "\uA645", "\uA647", "\uA649", "\uA64B", "\uA64D", "\uA64F", "\uA651", "\uA653", "\uA655", "\uA657", "\uA659", "\uA65B", "\uA65D", "\uA65F", "\uA661", "\uA663", "\uA665", "\uA667", "\uA669", "\uA66B", "\uA66D", "\uA681", "\uA683", "\uA685", "\uA687", "\uA689", "\uA68B", "\uA68D", "\uA68F", "\uA691", "\uA693", "\uA695", "\uA697", "\uA699", "\uA69B", "\uA723", "\uA725", "\uA727", "\uA729", "\uA72B", "\uA72D", ["\uA72F", "\uA731"], "\uA733", "\uA735", "\uA737", "\uA739", "\uA73B", "\uA73D", "\uA73F", "\uA741", "\uA743", "\uA745", "\uA747", "\uA749", "\uA74B", "\uA74D", "\uA74F", "\uA751", "\uA753", "\uA755", "\uA757", "\uA759", "\uA75B", "\uA75D", "\uA75F", "\uA761", "\uA763", "\uA765", "\uA767", "\uA769", "\uA76B", "\uA76D", "\uA76F", ["\uA771", "\uA778"], "\uA77A", "\uA77C", "\uA77F", "\uA781", "\uA783", "\uA785", "\uA787", "\uA78C", "\uA78E", "\uA791", ["\uA793", "\uA795"], "\uA797", "\uA799", "\uA79B", "\uA79D", "\uA79F", "\uA7A1", "\uA7A3", "\uA7A5", "\uA7A7", "\uA7A9", "\uA7AF", "\uA7B5", "\uA7B7", "\uA7B9", "\uA7FA", ["\uAB30", "\uAB5A"], ["\uAB60", "\uAB65"], ["\uAB70", "\uABBF"], ["\uFB00", "\uFB06"], ["\uFB13", "\uFB17"], ["\uFF41", "\uFF5A"]], false, false);
            var peg$e55 = peg$classExpectation([["\u02B0", "\u02C1"], ["\u02C6", "\u02D1"], ["\u02E0", "\u02E4"], "\u02EC", "\u02EE", "\u0374", "\u037A", "\u0559", "\u0640", ["\u06E5", "\u06E6"], ["\u07F4", "\u07F5"], "\u07FA", "\u081A", "\u0824", "\u0828", "\u0971", "\u0E46", "\u0EC6", "\u10FC", "\u17D7", "\u1843", "\u1AA7", ["\u1C78", "\u1C7D"], ["\u1D2C", "\u1D6A"], "\u1D78", ["\u1D9B", "\u1DBF"], "\u2071", "\u207F", ["\u2090", "\u209C"], ["\u2C7C", "\u2C7D"], "\u2D6F", "\u2E2F", "\u3005", ["\u3031", "\u3035"], "\u303B", ["\u309D", "\u309E"], ["\u30FC", "\u30FE"], "\uA015", ["\uA4F8", "\uA4FD"], "\uA60C", "\uA67F", ["\uA69C", "\uA69D"], ["\uA717", "\uA71F"], "\uA770", "\uA788", ["\uA7F8", "\uA7F9"], "\uA9CF", "\uA9E6", "\uAA70", "\uAADD", ["\uAAF3", "\uAAF4"], ["\uAB5C", "\uAB5F"], "\uFF70", ["\uFF9E", "\uFF9F"]], false, false);
            var peg$e56 = peg$classExpectation(["\xAA", "\xBA", "\u01BB", ["\u01C0", "\u01C3"], "\u0294", ["\u05D0", "\u05EA"], ["\u05EF", "\u05F2"], ["\u0620", "\u063F"], ["\u0641", "\u064A"], ["\u066E", "\u066F"], ["\u0671", "\u06D3"], "\u06D5", ["\u06EE", "\u06EF"], ["\u06FA", "\u06FC"], "\u06FF", "\u0710", ["\u0712", "\u072F"], ["\u074D", "\u07A5"], "\u07B1", ["\u07CA", "\u07EA"], ["\u0800", "\u0815"], ["\u0840", "\u0858"], ["\u0860", "\u086A"], ["\u08A0", "\u08B4"], ["\u08B6", "\u08BD"], ["\u0904", "\u0939"], "\u093D", "\u0950", ["\u0958", "\u0961"], ["\u0972", "\u0980"], ["\u0985", "\u098C"], ["\u098F", "\u0990"], ["\u0993", "\u09A8"], ["\u09AA", "\u09B0"], "\u09B2", ["\u09B6", "\u09B9"], "\u09BD", "\u09CE", ["\u09DC", "\u09DD"], ["\u09DF", "\u09E1"], ["\u09F0", "\u09F1"], "\u09FC", ["\u0A05", "\u0A0A"], ["\u0A0F", "\u0A10"], ["\u0A13", "\u0A28"], ["\u0A2A", "\u0A30"], ["\u0A32", "\u0A33"], ["\u0A35", "\u0A36"], ["\u0A38", "\u0A39"], ["\u0A59", "\u0A5C"], "\u0A5E", ["\u0A72", "\u0A74"], ["\u0A85", "\u0A8D"], ["\u0A8F", "\u0A91"], ["\u0A93", "\u0AA8"], ["\u0AAA", "\u0AB0"], ["\u0AB2", "\u0AB3"], ["\u0AB5", "\u0AB9"], "\u0ABD", "\u0AD0", ["\u0AE0", "\u0AE1"], "\u0AF9", ["\u0B05", "\u0B0C"], ["\u0B0F", "\u0B10"], ["\u0B13", "\u0B28"], ["\u0B2A", "\u0B30"], ["\u0B32", "\u0B33"], ["\u0B35", "\u0B39"], "\u0B3D", ["\u0B5C", "\u0B5D"], ["\u0B5F", "\u0B61"], "\u0B71", "\u0B83", ["\u0B85", "\u0B8A"], ["\u0B8E", "\u0B90"], ["\u0B92", "\u0B95"], ["\u0B99", "\u0B9A"], "\u0B9C", ["\u0B9E", "\u0B9F"], ["\u0BA3", "\u0BA4"], ["\u0BA8", "\u0BAA"], ["\u0BAE", "\u0BB9"], "\u0BD0", ["\u0C05", "\u0C0C"], ["\u0C0E", "\u0C10"], ["\u0C12", "\u0C28"], ["\u0C2A", "\u0C39"], "\u0C3D", ["\u0C58", "\u0C5A"], ["\u0C60", "\u0C61"], "\u0C80", ["\u0C85", "\u0C8C"], ["\u0C8E", "\u0C90"], ["\u0C92", "\u0CA8"], ["\u0CAA", "\u0CB3"], ["\u0CB5", "\u0CB9"], "\u0CBD", "\u0CDE", ["\u0CE0", "\u0CE1"], ["\u0CF1", "\u0CF2"], ["\u0D05", "\u0D0C"], ["\u0D0E", "\u0D10"], ["\u0D12", "\u0D3A"], "\u0D3D", "\u0D4E", ["\u0D54", "\u0D56"], ["\u0D5F", "\u0D61"], ["\u0D7A", "\u0D7F"], ["\u0D85", "\u0D96"], ["\u0D9A", "\u0DB1"], ["\u0DB3", "\u0DBB"], "\u0DBD", ["\u0DC0", "\u0DC6"], ["\u0E01", "\u0E30"], ["\u0E32", "\u0E33"], ["\u0E40", "\u0E45"], ["\u0E81", "\u0E82"], "\u0E84", ["\u0E87", "\u0E88"], "\u0E8A", "\u0E8D", ["\u0E94", "\u0E97"], ["\u0E99", "\u0E9F"], ["\u0EA1", "\u0EA3"], "\u0EA5", "\u0EA7", ["\u0EAA", "\u0EAB"], ["\u0EAD", "\u0EB0"], ["\u0EB2", "\u0EB3"], "\u0EBD", ["\u0EC0", "\u0EC4"], ["\u0EDC", "\u0EDF"], "\u0F00", ["\u0F40", "\u0F47"], ["\u0F49", "\u0F6C"], ["\u0F88", "\u0F8C"], ["\u1000", "\u102A"], "\u103F", ["\u1050", "\u1055"], ["\u105A", "\u105D"], "\u1061", ["\u1065", "\u1066"], ["\u106E", "\u1070"], ["\u1075", "\u1081"], "\u108E", ["\u1100", "\u1248"], ["\u124A", "\u124D"], ["\u1250", "\u1256"], "\u1258", ["\u125A", "\u125D"], ["\u1260", "\u1288"], ["\u128A", "\u128D"], ["\u1290", "\u12B0"], ["\u12B2", "\u12B5"], ["\u12B8", "\u12BE"], "\u12C0", ["\u12C2", "\u12C5"], ["\u12C8", "\u12D6"], ["\u12D8", "\u1310"], ["\u1312", "\u1315"], ["\u1318", "\u135A"], ["\u1380", "\u138F"], ["\u1401", "\u166C"], ["\u166F", "\u167F"], ["\u1681", "\u169A"], ["\u16A0", "\u16EA"], ["\u16F1", "\u16F8"], ["\u1700", "\u170C"], ["\u170E", "\u1711"], ["\u1720", "\u1731"], ["\u1740", "\u1751"], ["\u1760", "\u176C"], ["\u176E", "\u1770"], ["\u1780", "\u17B3"], "\u17DC", ["\u1820", "\u1842"], ["\u1844", "\u1878"], ["\u1880", "\u1884"], ["\u1887", "\u18A8"], "\u18AA", ["\u18B0", "\u18F5"], ["\u1900", "\u191E"], ["\u1950", "\u196D"], ["\u1970", "\u1974"], ["\u1980", "\u19AB"], ["\u19B0", "\u19C9"], ["\u1A00", "\u1A16"], ["\u1A20", "\u1A54"], ["\u1B05", "\u1B33"], ["\u1B45", "\u1B4B"], ["\u1B83", "\u1BA0"], ["\u1BAE", "\u1BAF"], ["\u1BBA", "\u1BE5"], ["\u1C00", "\u1C23"], ["\u1C4D", "\u1C4F"], ["\u1C5A", "\u1C77"], ["\u1CE9", "\u1CEC"], ["\u1CEE", "\u1CF1"], ["\u1CF5", "\u1CF6"], ["\u2135", "\u2138"], ["\u2D30", "\u2D67"], ["\u2D80", "\u2D96"], ["\u2DA0", "\u2DA6"], ["\u2DA8", "\u2DAE"], ["\u2DB0", "\u2DB6"], ["\u2DB8", "\u2DBE"], ["\u2DC0", "\u2DC6"], ["\u2DC8", "\u2DCE"], ["\u2DD0", "\u2DD6"], ["\u2DD8", "\u2DDE"], "\u3006", "\u303C", ["\u3041", "\u3096"], "\u309F", ["\u30A1", "\u30FA"], "\u30FF", ["\u3105", "\u312F"], ["\u3131", "\u318E"], ["\u31A0", "\u31BA"], ["\u31F0", "\u31FF"], ["\u3400", "\u4DB5"], ["\u4E00", "\u9FEF"], ["\uA000", "\uA014"], ["\uA016", "\uA48C"], ["\uA4D0", "\uA4F7"], ["\uA500", "\uA60B"], ["\uA610", "\uA61F"], ["\uA62A", "\uA62B"], "\uA66E", ["\uA6A0", "\uA6E5"], "\uA78F", "\uA7F7", ["\uA7FB", "\uA801"], ["\uA803", "\uA805"], ["\uA807", "\uA80A"], ["\uA80C", "\uA822"], ["\uA840", "\uA873"], ["\uA882", "\uA8B3"], ["\uA8F2", "\uA8F7"], "\uA8FB", ["\uA8FD", "\uA8FE"], ["\uA90A", "\uA925"], ["\uA930", "\uA946"], ["\uA960", "\uA97C"], ["\uA984", "\uA9B2"], ["\uA9E0", "\uA9E4"], ["\uA9E7", "\uA9EF"], ["\uA9FA", "\uA9FE"], ["\uAA00", "\uAA28"], ["\uAA40", "\uAA42"], ["\uAA44", "\uAA4B"], ["\uAA60", "\uAA6F"], ["\uAA71", "\uAA76"], "\uAA7A", ["\uAA7E", "\uAAAF"], "\uAAB1", ["\uAAB5", "\uAAB6"], ["\uAAB9", "\uAABD"], "\uAAC0", "\uAAC2", ["\uAADB", "\uAADC"], ["\uAAE0", "\uAAEA"], "\uAAF2", ["\uAB01", "\uAB06"], ["\uAB09", "\uAB0E"], ["\uAB11", "\uAB16"], ["\uAB20", "\uAB26"], ["\uAB28", "\uAB2E"], ["\uABC0", "\uABE2"], ["\uAC00", "\uD7A3"], ["\uD7B0", "\uD7C6"], ["\uD7CB", "\uD7FB"], ["\uF900", "\uFA6D"], ["\uFA70", "\uFAD9"], "\uFB1D", ["\uFB1F", "\uFB28"], ["\uFB2A", "\uFB36"], ["\uFB38", "\uFB3C"], "\uFB3E", ["\uFB40", "\uFB41"], ["\uFB43", "\uFB44"], ["\uFB46", "\uFBB1"], ["\uFBD3", "\uFD3D"], ["\uFD50", "\uFD8F"], ["\uFD92", "\uFDC7"], ["\uFDF0", "\uFDFB"], ["\uFE70", "\uFE74"], ["\uFE76", "\uFEFC"], ["\uFF66", "\uFF6F"], ["\uFF71", "\uFF9D"], ["\uFFA0", "\uFFBE"], ["\uFFC2", "\uFFC7"], ["\uFFCA", "\uFFCF"], ["\uFFD2", "\uFFD7"], ["\uFFDA", "\uFFDC"]], false, false);
            var peg$e57 = peg$classExpectation(["\u01C5", "\u01C8", "\u01CB", "\u01F2", ["\u1F88", "\u1F8F"], ["\u1F98", "\u1F9F"], ["\u1FA8", "\u1FAF"], "\u1FBC", "\u1FCC", "\u1FFC"], false, false);
            var peg$e58 = peg$classExpectation([["A", "Z"], ["\xC0", "\xD6"], ["\xD8", "\xDE"], "\u0100", "\u0102", "\u0104", "\u0106", "\u0108", "\u010A", "\u010C", "\u010E", "\u0110", "\u0112", "\u0114", "\u0116", "\u0118", "\u011A", "\u011C", "\u011E", "\u0120", "\u0122", "\u0124", "\u0126", "\u0128", "\u012A", "\u012C", "\u012E", "\u0130", "\u0132", "\u0134", "\u0136", "\u0139", "\u013B", "\u013D", "\u013F", "\u0141", "\u0143", "\u0145", "\u0147", "\u014A", "\u014C", "\u014E", "\u0150", "\u0152", "\u0154", "\u0156", "\u0158", "\u015A", "\u015C", "\u015E", "\u0160", "\u0162", "\u0164", "\u0166", "\u0168", "\u016A", "\u016C", "\u016E", "\u0170", "\u0172", "\u0174", "\u0176", ["\u0178", "\u0179"], "\u017B", "\u017D", ["\u0181", "\u0182"], "\u0184", ["\u0186", "\u0187"], ["\u0189", "\u018B"], ["\u018E", "\u0191"], ["\u0193", "\u0194"], ["\u0196", "\u0198"], ["\u019C", "\u019D"], ["\u019F", "\u01A0"], "\u01A2", "\u01A4", ["\u01A6", "\u01A7"], "\u01A9", "\u01AC", ["\u01AE", "\u01AF"], ["\u01B1", "\u01B3"], "\u01B5", ["\u01B7", "\u01B8"], "\u01BC", "\u01C4", "\u01C7", "\u01CA", "\u01CD", "\u01CF", "\u01D1", "\u01D3", "\u01D5", "\u01D7", "\u01D9", "\u01DB", "\u01DE", "\u01E0", "\u01E2", "\u01E4", "\u01E6", "\u01E8", "\u01EA", "\u01EC", "\u01EE", "\u01F1", "\u01F4", ["\u01F6", "\u01F8"], "\u01FA", "\u01FC", "\u01FE", "\u0200", "\u0202", "\u0204", "\u0206", "\u0208", "\u020A", "\u020C", "\u020E", "\u0210", "\u0212", "\u0214", "\u0216", "\u0218", "\u021A", "\u021C", "\u021E", "\u0220", "\u0222", "\u0224", "\u0226", "\u0228", "\u022A", "\u022C", "\u022E", "\u0230", "\u0232", ["\u023A", "\u023B"], ["\u023D", "\u023E"], "\u0241", ["\u0243", "\u0246"], "\u0248", "\u024A", "\u024C", "\u024E", "\u0370", "\u0372", "\u0376", "\u037F", "\u0386", ["\u0388", "\u038A"], "\u038C", ["\u038E", "\u038F"], ["\u0391", "\u03A1"], ["\u03A3", "\u03AB"], "\u03CF", ["\u03D2", "\u03D4"], "\u03D8", "\u03DA", "\u03DC", "\u03DE", "\u03E0", "\u03E2", "\u03E4", "\u03E6", "\u03E8", "\u03EA", "\u03EC", "\u03EE", "\u03F4", "\u03F7", ["\u03F9", "\u03FA"], ["\u03FD", "\u042F"], "\u0460", "\u0462", "\u0464", "\u0466", "\u0468", "\u046A", "\u046C", "\u046E", "\u0470", "\u0472", "\u0474", "\u0476", "\u0478", "\u047A", "\u047C", "\u047E", "\u0480", "\u048A", "\u048C", "\u048E", "\u0490", "\u0492", "\u0494", "\u0496", "\u0498", "\u049A", "\u049C", "\u049E", "\u04A0", "\u04A2", "\u04A4", "\u04A6", "\u04A8", "\u04AA", "\u04AC", "\u04AE", "\u04B0", "\u04B2", "\u04B4", "\u04B6", "\u04B8", "\u04BA", "\u04BC", "\u04BE", ["\u04C0", "\u04C1"], "\u04C3", "\u04C5", "\u04C7", "\u04C9", "\u04CB", "\u04CD", "\u04D0", "\u04D2", "\u04D4", "\u04D6", "\u04D8", "\u04DA", "\u04DC", "\u04DE", "\u04E0", "\u04E2", "\u04E4", "\u04E6", "\u04E8", "\u04EA", "\u04EC", "\u04EE", "\u04F0", "\u04F2", "\u04F4", "\u04F6", "\u04F8", "\u04FA", "\u04FC", "\u04FE", "\u0500", "\u0502", "\u0504", "\u0506", "\u0508", "\u050A", "\u050C", "\u050E", "\u0510", "\u0512", "\u0514", "\u0516", "\u0518", "\u051A", "\u051C", "\u051E", "\u0520", "\u0522", "\u0524", "\u0526", "\u0528", "\u052A", "\u052C", "\u052E", ["\u0531", "\u0556"], ["\u10A0", "\u10C5"], "\u10C7", "\u10CD", ["\u13A0", "\u13F5"], ["\u1C90", "\u1CBA"], ["\u1CBD", "\u1CBF"], "\u1E00", "\u1E02", "\u1E04", "\u1E06", "\u1E08", "\u1E0A", "\u1E0C", "\u1E0E", "\u1E10", "\u1E12", "\u1E14", "\u1E16", "\u1E18", "\u1E1A", "\u1E1C", "\u1E1E", "\u1E20", "\u1E22", "\u1E24", "\u1E26", "\u1E28", "\u1E2A", "\u1E2C", "\u1E2E", "\u1E30", "\u1E32", "\u1E34", "\u1E36", "\u1E38", "\u1E3A", "\u1E3C", "\u1E3E", "\u1E40", "\u1E42", "\u1E44", "\u1E46", "\u1E48", "\u1E4A", "\u1E4C", "\u1E4E", "\u1E50", "\u1E52", "\u1E54", "\u1E56", "\u1E58", "\u1E5A", "\u1E5C", "\u1E5E", "\u1E60", "\u1E62", "\u1E64", "\u1E66", "\u1E68", "\u1E6A", "\u1E6C", "\u1E6E", "\u1E70", "\u1E72", "\u1E74", "\u1E76", "\u1E78", "\u1E7A", "\u1E7C", "\u1E7E", "\u1E80", "\u1E82", "\u1E84", "\u1E86", "\u1E88", "\u1E8A", "\u1E8C", "\u1E8E", "\u1E90", "\u1E92", "\u1E94", "\u1E9E", "\u1EA0", "\u1EA2", "\u1EA4", "\u1EA6", "\u1EA8", "\u1EAA", "\u1EAC", "\u1EAE", "\u1EB0", "\u1EB2", "\u1EB4", "\u1EB6", "\u1EB8", "\u1EBA", "\u1EBC", "\u1EBE", "\u1EC0", "\u1EC2", "\u1EC4", "\u1EC6", "\u1EC8", "\u1ECA", "\u1ECC", "\u1ECE", "\u1ED0", "\u1ED2", "\u1ED4", "\u1ED6", "\u1ED8", "\u1EDA", "\u1EDC", "\u1EDE", "\u1EE0", "\u1EE2", "\u1EE4", "\u1EE6", "\u1EE8", "\u1EEA", "\u1EEC", "\u1EEE", "\u1EF0", "\u1EF2", "\u1EF4", "\u1EF6", "\u1EF8", "\u1EFA", "\u1EFC", "\u1EFE", ["\u1F08", "\u1F0F"], ["\u1F18", "\u1F1D"], ["\u1F28", "\u1F2F"], ["\u1F38", "\u1F3F"], ["\u1F48", "\u1F4D"], "\u1F59", "\u1F5B", "\u1F5D", "\u1F5F", ["\u1F68", "\u1F6F"], ["\u1FB8", "\u1FBB"], ["\u1FC8", "\u1FCB"], ["\u1FD8", "\u1FDB"], ["\u1FE8", "\u1FEC"], ["\u1FF8", "\u1FFB"], "\u2102", "\u2107", ["\u210B", "\u210D"], ["\u2110", "\u2112"], "\u2115", ["\u2119", "\u211D"], "\u2124", "\u2126", "\u2128", ["\u212A", "\u212D"], ["\u2130", "\u2133"], ["\u213E", "\u213F"], "\u2145", "\u2183", ["\u2C00", "\u2C2E"], "\u2C60", ["\u2C62", "\u2C64"], "\u2C67", "\u2C69", "\u2C6B", ["\u2C6D", "\u2C70"], "\u2C72", "\u2C75", ["\u2C7E", "\u2C80"], "\u2C82", "\u2C84", "\u2C86", "\u2C88", "\u2C8A", "\u2C8C", "\u2C8E", "\u2C90", "\u2C92", "\u2C94", "\u2C96", "\u2C98", "\u2C9A", "\u2C9C", "\u2C9E", "\u2CA0", "\u2CA2", "\u2CA4", "\u2CA6", "\u2CA8", "\u2CAA", "\u2CAC", "\u2CAE", "\u2CB0", "\u2CB2", "\u2CB4", "\u2CB6", "\u2CB8", "\u2CBA", "\u2CBC", "\u2CBE", "\u2CC0", "\u2CC2", "\u2CC4", "\u2CC6", "\u2CC8", "\u2CCA", "\u2CCC", "\u2CCE", "\u2CD0", "\u2CD2", "\u2CD4", "\u2CD6", "\u2CD8", "\u2CDA", "\u2CDC", "\u2CDE", "\u2CE0", "\u2CE2", "\u2CEB", "\u2CED", "\u2CF2", "\uA640", "\uA642", "\uA644", "\uA646", "\uA648", "\uA64A", "\uA64C", "\uA64E", "\uA650", "\uA652", "\uA654", "\uA656", "\uA658", "\uA65A", "\uA65C", "\uA65E", "\uA660", "\uA662", "\uA664", "\uA666", "\uA668", "\uA66A", "\uA66C", "\uA680", "\uA682", "\uA684", "\uA686", "\uA688", "\uA68A", "\uA68C", "\uA68E", "\uA690", "\uA692", "\uA694", "\uA696", "\uA698", "\uA69A", "\uA722", "\uA724", "\uA726", "\uA728", "\uA72A", "\uA72C", "\uA72E", "\uA732", "\uA734", "\uA736", "\uA738", "\uA73A", "\uA73C", "\uA73E", "\uA740", "\uA742", "\uA744", "\uA746", "\uA748", "\uA74A", "\uA74C", "\uA74E", "\uA750", "\uA752", "\uA754", "\uA756", "\uA758", "\uA75A", "\uA75C", "\uA75E", "\uA760", "\uA762", "\uA764", "\uA766", "\uA768", "\uA76A", "\uA76C", "\uA76E", "\uA779", "\uA77B", ["\uA77D", "\uA77E"], "\uA780", "\uA782", "\uA784", "\uA786", "\uA78B", "\uA78D", "\uA790", "\uA792", "\uA796", "\uA798", "\uA79A", "\uA79C", "\uA79E", "\uA7A0", "\uA7A2", "\uA7A4", "\uA7A6", "\uA7A8", ["\uA7AA", "\uA7AE"], ["\uA7B0", "\uA7B4"], "\uA7B6", "\uA7B8", ["\uFF21", "\uFF3A"]], false, false);
            var peg$e59 = peg$classExpectation(["\u0903", "\u093B", ["\u093E", "\u0940"], ["\u0949", "\u094C"], ["\u094E", "\u094F"], ["\u0982", "\u0983"], ["\u09BE", "\u09C0"], ["\u09C7", "\u09C8"], ["\u09CB", "\u09CC"], "\u09D7", "\u0A03", ["\u0A3E", "\u0A40"], "\u0A83", ["\u0ABE", "\u0AC0"], "\u0AC9", ["\u0ACB", "\u0ACC"], ["\u0B02", "\u0B03"], "\u0B3E", "\u0B40", ["\u0B47", "\u0B48"], ["\u0B4B", "\u0B4C"], "\u0B57", ["\u0BBE", "\u0BBF"], ["\u0BC1", "\u0BC2"], ["\u0BC6", "\u0BC8"], ["\u0BCA", "\u0BCC"], "\u0BD7", ["\u0C01", "\u0C03"], ["\u0C41", "\u0C44"], ["\u0C82", "\u0C83"], "\u0CBE", ["\u0CC0", "\u0CC4"], ["\u0CC7", "\u0CC8"], ["\u0CCA", "\u0CCB"], ["\u0CD5", "\u0CD6"], ["\u0D02", "\u0D03"], ["\u0D3E", "\u0D40"], ["\u0D46", "\u0D48"], ["\u0D4A", "\u0D4C"], "\u0D57", ["\u0D82", "\u0D83"], ["\u0DCF", "\u0DD1"], ["\u0DD8", "\u0DDF"], ["\u0DF2", "\u0DF3"], ["\u0F3E", "\u0F3F"], "\u0F7F", ["\u102B", "\u102C"], "\u1031", "\u1038", ["\u103B", "\u103C"], ["\u1056", "\u1057"], ["\u1062", "\u1064"], ["\u1067", "\u106D"], ["\u1083", "\u1084"], ["\u1087", "\u108C"], "\u108F", ["\u109A", "\u109C"], "\u17B6", ["\u17BE", "\u17C5"], ["\u17C7", "\u17C8"], ["\u1923", "\u1926"], ["\u1929", "\u192B"], ["\u1930", "\u1931"], ["\u1933", "\u1938"], ["\u1A19", "\u1A1A"], "\u1A55", "\u1A57", "\u1A61", ["\u1A63", "\u1A64"], ["\u1A6D", "\u1A72"], "\u1B04", "\u1B35", "\u1B3B", ["\u1B3D", "\u1B41"], ["\u1B43", "\u1B44"], "\u1B82", "\u1BA1", ["\u1BA6", "\u1BA7"], "\u1BAA", "\u1BE7", ["\u1BEA", "\u1BEC"], "\u1BEE", ["\u1BF2", "\u1BF3"], ["\u1C24", "\u1C2B"], ["\u1C34", "\u1C35"], "\u1CE1", ["\u1CF2", "\u1CF3"], "\u1CF7", ["\u302E", "\u302F"], ["\uA823", "\uA824"], "\uA827", ["\uA880", "\uA881"], ["\uA8B4", "\uA8C3"], ["\uA952", "\uA953"], "\uA983", ["\uA9B4", "\uA9B5"], ["\uA9BA", "\uA9BB"], ["\uA9BD", "\uA9C0"], ["\uAA2F", "\uAA30"], ["\uAA33", "\uAA34"], "\uAA4D", "\uAA7B", "\uAA7D", "\uAAEB", ["\uAAEE", "\uAAEF"], "\uAAF5", ["\uABE3", "\uABE4"], ["\uABE6", "\uABE7"], ["\uABE9", "\uABEA"], "\uABEC"], false, false);
            var peg$e60 = peg$classExpectation([["\u0300", "\u036F"], ["\u0483", "\u0487"], ["\u0591", "\u05BD"], "\u05BF", ["\u05C1", "\u05C2"], ["\u05C4", "\u05C5"], "\u05C7", ["\u0610", "\u061A"], ["\u064B", "\u065F"], "\u0670", ["\u06D6", "\u06DC"], ["\u06DF", "\u06E4"], ["\u06E7", "\u06E8"], ["\u06EA", "\u06ED"], "\u0711", ["\u0730", "\u074A"], ["\u07A6", "\u07B0"], ["\u07EB", "\u07F3"], "\u07FD", ["\u0816", "\u0819"], ["\u081B", "\u0823"], ["\u0825", "\u0827"], ["\u0829", "\u082D"], ["\u0859", "\u085B"], ["\u08D3", "\u08E1"], ["\u08E3", "\u0902"], "\u093A", "\u093C", ["\u0941", "\u0948"], "\u094D", ["\u0951", "\u0957"], ["\u0962", "\u0963"], "\u0981", "\u09BC", ["\u09C1", "\u09C4"], "\u09CD", ["\u09E2", "\u09E3"], "\u09FE", ["\u0A01", "\u0A02"], "\u0A3C", ["\u0A41", "\u0A42"], ["\u0A47", "\u0A48"], ["\u0A4B", "\u0A4D"], "\u0A51", ["\u0A70", "\u0A71"], "\u0A75", ["\u0A81", "\u0A82"], "\u0ABC", ["\u0AC1", "\u0AC5"], ["\u0AC7", "\u0AC8"], "\u0ACD", ["\u0AE2", "\u0AE3"], ["\u0AFA", "\u0AFF"], "\u0B01", "\u0B3C", "\u0B3F", ["\u0B41", "\u0B44"], "\u0B4D", "\u0B56", ["\u0B62", "\u0B63"], "\u0B82", "\u0BC0", "\u0BCD", "\u0C00", "\u0C04", ["\u0C3E", "\u0C40"], ["\u0C46", "\u0C48"], ["\u0C4A", "\u0C4D"], ["\u0C55", "\u0C56"], ["\u0C62", "\u0C63"], "\u0C81", "\u0CBC", "\u0CBF", "\u0CC6", ["\u0CCC", "\u0CCD"], ["\u0CE2", "\u0CE3"], ["\u0D00", "\u0D01"], ["\u0D3B", "\u0D3C"], ["\u0D41", "\u0D44"], "\u0D4D", ["\u0D62", "\u0D63"], "\u0DCA", ["\u0DD2", "\u0DD4"], "\u0DD6", "\u0E31", ["\u0E34", "\u0E3A"], ["\u0E47", "\u0E4E"], "\u0EB1", ["\u0EB4", "\u0EB9"], ["\u0EBB", "\u0EBC"], ["\u0EC8", "\u0ECD"], ["\u0F18", "\u0F19"], "\u0F35", "\u0F37", "\u0F39", ["\u0F71", "\u0F7E"], ["\u0F80", "\u0F84"], ["\u0F86", "\u0F87"], ["\u0F8D", "\u0F97"], ["\u0F99", "\u0FBC"], "\u0FC6", ["\u102D", "\u1030"], ["\u1032", "\u1037"], ["\u1039", "\u103A"], ["\u103D", "\u103E"], ["\u1058", "\u1059"], ["\u105E", "\u1060"], ["\u1071", "\u1074"], "\u1082", ["\u1085", "\u1086"], "\u108D", "\u109D", ["\u135D", "\u135F"], ["\u1712", "\u1714"], ["\u1732", "\u1734"], ["\u1752", "\u1753"], ["\u1772", "\u1773"], ["\u17B4", "\u17B5"], ["\u17B7", "\u17BD"], "\u17C6", ["\u17C9", "\u17D3"], "\u17DD", ["\u180B", "\u180D"], ["\u1885", "\u1886"], "\u18A9", ["\u1920", "\u1922"], ["\u1927", "\u1928"], "\u1932", ["\u1939", "\u193B"], ["\u1A17", "\u1A18"], "\u1A1B", "\u1A56", ["\u1A58", "\u1A5E"], "\u1A60", "\u1A62", ["\u1A65", "\u1A6C"], ["\u1A73", "\u1A7C"], "\u1A7F", ["\u1AB0", "\u1ABD"], ["\u1B00", "\u1B03"], "\u1B34", ["\u1B36", "\u1B3A"], "\u1B3C", "\u1B42", ["\u1B6B", "\u1B73"], ["\u1B80", "\u1B81"], ["\u1BA2", "\u1BA5"], ["\u1BA8", "\u1BA9"], ["\u1BAB", "\u1BAD"], "\u1BE6", ["\u1BE8", "\u1BE9"], "\u1BED", ["\u1BEF", "\u1BF1"], ["\u1C2C", "\u1C33"], ["\u1C36", "\u1C37"], ["\u1CD0", "\u1CD2"], ["\u1CD4", "\u1CE0"], ["\u1CE2", "\u1CE8"], "\u1CED", "\u1CF4", ["\u1CF8", "\u1CF9"], ["\u1DC0", "\u1DF9"], ["\u1DFB", "\u1DFF"], ["\u20D0", "\u20DC"], "\u20E1", ["\u20E5", "\u20F0"], ["\u2CEF", "\u2CF1"], "\u2D7F", ["\u2DE0", "\u2DFF"], ["\u302A", "\u302D"], ["\u3099", "\u309A"], "\uA66F", ["\uA674", "\uA67D"], ["\uA69E", "\uA69F"], ["\uA6F0", "\uA6F1"], "\uA802", "\uA806", "\uA80B", ["\uA825", "\uA826"], ["\uA8C4", "\uA8C5"], ["\uA8E0", "\uA8F1"], "\uA8FF", ["\uA926", "\uA92D"], ["\uA947", "\uA951"], ["\uA980", "\uA982"], "\uA9B3", ["\uA9B6", "\uA9B9"], "\uA9BC", "\uA9E5", ["\uAA29", "\uAA2E"], ["\uAA31", "\uAA32"], ["\uAA35", "\uAA36"], "\uAA43", "\uAA4C", "\uAA7C", "\uAAB0", ["\uAAB2", "\uAAB4"], ["\uAAB7", "\uAAB8"], ["\uAABE", "\uAABF"], "\uAAC1", ["\uAAEC", "\uAAED"], "\uAAF6", "\uABE5", "\uABE8", "\uABED", "\uFB1E", ["\uFE00", "\uFE0F"], ["\uFE20", "\uFE2F"]], false, false);
            var peg$e61 = peg$classExpectation([["0", "9"], ["\u0660", "\u0669"], ["\u06F0", "\u06F9"], ["\u07C0", "\u07C9"], ["\u0966", "\u096F"], ["\u09E6", "\u09EF"], ["\u0A66", "\u0A6F"], ["\u0AE6", "\u0AEF"], ["\u0B66", "\u0B6F"], ["\u0BE6", "\u0BEF"], ["\u0C66", "\u0C6F"], ["\u0CE6", "\u0CEF"], ["\u0D66", "\u0D6F"], ["\u0DE6", "\u0DEF"], ["\u0E50", "\u0E59"], ["\u0ED0", "\u0ED9"], ["\u0F20", "\u0F29"], ["\u1040", "\u1049"], ["\u1090", "\u1099"], ["\u17E0", "\u17E9"], ["\u1810", "\u1819"], ["\u1946", "\u194F"], ["\u19D0", "\u19D9"], ["\u1A80", "\u1A89"], ["\u1A90", "\u1A99"], ["\u1B50", "\u1B59"], ["\u1BB0", "\u1BB9"], ["\u1C40", "\u1C49"], ["\u1C50", "\u1C59"], ["\uA620", "\uA629"], ["\uA8D0", "\uA8D9"], ["\uA900", "\uA909"], ["\uA9D0", "\uA9D9"], ["\uA9F0", "\uA9F9"], ["\uAA50", "\uAA59"], ["\uABF0", "\uABF9"], ["\uFF10", "\uFF19"]], false, false);
            var peg$e62 = peg$classExpectation([["\u16EE", "\u16F0"], ["\u2160", "\u2182"], ["\u2185", "\u2188"], "\u3007", ["\u3021", "\u3029"], ["\u3038", "\u303A"], ["\uA6E6", "\uA6EF"]], false, false);
            var peg$e63 = peg$classExpectation(["_", ["\u203F", "\u2040"], "\u2054", ["\uFE33", "\uFE34"], ["\uFE4D", "\uFE4F"], "\uFF3F"], false, false);
            var peg$e64 = peg$classExpectation([" ", "\xA0", "\u1680", ["\u2000", "\u200A"], "\u202F", "\u205F", "\u3000"], false, false);
            var peg$e65 = peg$literalExpectation("false", false);
            var peg$e66 = peg$literalExpectation("lambda", false);
            var peg$e67 = peg$literalExpectation("null", false);
            var peg$e68 = peg$literalExpectation("nil", false);
            var peg$e69 = peg$literalExpectation("true", false);
            var peg$e70 = peg$literalExpectation(";", false);
            var peg$e71 = peg$literalExpectation("}", false);
            var peg$e72 = peg$literalExpectation(")", false);
            var peg$e73 = peg$literalExpectation("(", false);
            var peg$e74 = peg$literalExpectation(",", false);
            var peg$e75 = peg$literalExpectation("{", false);
            var peg$e76 = peg$literalExpectation(":", false);
            var peg$e77 = peg$literalExpectation("=", false);
            var peg$e78 = peg$literalExpectation("++", false);
            var peg$e79 = peg$literalExpectation("--", false);
            var peg$e80 = peg$literalExpectation("+", false);
            var peg$e81 = peg$literalExpectation("-", false);
            var peg$e82 = peg$literalExpectation("~", false);
            var peg$e83 = peg$literalExpectation("!", false);
            var peg$e84 = peg$literalExpectation("*", false);
            var peg$e85 = peg$literalExpectation("%", false);
            var peg$e86 = peg$classExpectation(["+", "="], false, false);
            var peg$e87 = peg$classExpectation(["-", "="], false, false);
            var peg$e88 = peg$literalExpectation("<<", false);
            var peg$e89 = peg$literalExpectation(">>>", false);
            var peg$e90 = peg$literalExpectation(">>", false);
            var peg$e91 = peg$literalExpectation("<=", false);
            var peg$e92 = peg$literalExpectation(">=", false);
            var peg$e93 = peg$literalExpectation("<", false);
            var peg$e94 = peg$literalExpectation(">", false);
            var peg$e95 = peg$literalExpectation("===", false);
            var peg$e96 = peg$literalExpectation("!==", false);
            var peg$e97 = peg$literalExpectation("==", false);
            var peg$e98 = peg$literalExpectation("!=", false);
            var peg$e99 = peg$literalExpectation("<>", false);
            var peg$e100 = peg$literalExpectation("&", false);
            var peg$e101 = peg$classExpectation(["&", "="], false, false);
            var peg$e102 = peg$literalExpectation("^", false);
            var peg$e103 = peg$literalExpectation("**", false);
            var peg$e104 = peg$literalExpectation("|", false);
            var peg$e105 = peg$classExpectation(["|", "="], false, false);
            var peg$e106 = peg$literalExpectation("&&", false);
            var peg$e107 = peg$literalExpectation("||", false);
            var peg$e108 = peg$literalExpectation("?", false);
            var peg$e109 = peg$literalExpectation(":=", false);
            var peg$e110 = peg$literalExpectation("*=", false);
            var peg$e111 = peg$literalExpectation("/=", false);
            var peg$e112 = peg$literalExpectation("%=", false);
            var peg$e113 = peg$literalExpectation("+=", false);
            var peg$e114 = peg$literalExpectation("-=", false);
            var peg$e115 = peg$literalExpectation("<<=", false);
            var peg$e116 = peg$literalExpectation(">>=", false);
            var peg$e117 = peg$literalExpectation(">>>=", false);
            var peg$e118 = peg$literalExpectation("&=", false);
            var peg$e119 = peg$literalExpectation("^=", false);
            var peg$e120 = peg$literalExpectation("|=", false);
            var peg$f0 = function peg$f0(program) {
              return program;
            };
            var peg$f1 = function peg$f1(name) {
              return name;
            };
            var peg$f2 = function peg$f2(head, tail) {
              return {
                type: "Identifier",
                name: head + tail.join(""),
                location: location()
              };
            };
            var peg$f3 = function peg$f3(sequence) {
              return sequence;
            };
            var peg$f4 = function peg$f4() {
              return {
                type: "Literal",
                value: null,
                location: location()
              };
            };
            var peg$f5 = function peg$f5() {
              return {
                type: "Literal",
                value: undefined,
                location: location()
              };
            };
            var peg$f6 = function peg$f6() {
              return {
                type: "Literal",
                value: true,
                location: location()
              };
            };
            var peg$f7 = function peg$f7() {
              return {
                type: "Literal",
                value: false,
                location: location()
              };
            };
            var peg$f8 = function peg$f8(literal) {
              return literal;
            };
            var peg$f9 = function peg$f9(literal) {
              return literal;
            };
            var peg$f10 = function peg$f10(literal) {
              return literal;
            };
            var peg$f11 = function peg$f11() {
              return {
                type: "Literal",
                value: parseFloat(text()),
                location: location()
              };
            };
            var peg$f12 = function peg$f12() {
              return {
                type: "Literal",
                value: parseFloat(text()),
                location: location()
              };
            };
            var peg$f13 = function peg$f13() {
              return {
                type: "Literal",
                value: parseFloat(text()),
                location: location()
              };
            };
            var peg$f14 = function peg$f14(digits) {
              return {
                type: "Literal",
                value: parseInt(digits, 16),
                location: location()
              };
            };
            var peg$f15 = function peg$f15(digits) {
              return {
                type: "Literal",
                value: parseInt(digits, 8),
                location: location()
              };
            };
            var peg$f16 = function peg$f16(chars) {
              return {
                type: "Literal",
                value: chars.join(""),
                location: location()
              };
            };
            var peg$f17 = function peg$f17(chars) {
              return {
                type: "Literal",
                value: chars.join(""),
                location: location()
              };
            };
            var peg$f18 = function peg$f18() {
              return text();
            };
            var peg$f19 = function peg$f19(sequence) {
              return sequence;
            };
            var peg$f20 = function peg$f20() {
              return text();
            };
            var peg$f21 = function peg$f21(sequence) {
              return sequence;
            };
            var peg$f22 = function peg$f22() {
              return "";
            };
            var peg$f23 = function peg$f23() {
              return "\0";
            };
            var peg$f24 = function peg$f24() {
              return "\b";
            };
            var peg$f25 = function peg$f25() {
              return "\f";
            };
            var peg$f26 = function peg$f26() {
              return "\n";
            };
            var peg$f27 = function peg$f27() {
              return "\r";
            };
            var peg$f28 = function peg$f28() {
              return "\t";
            };
            var peg$f29 = function peg$f29() {
              return "\v";
            };
            var peg$f30 = function peg$f30() {
              return text();
            };
            var peg$f31 = function peg$f31(digits) {
              return String.fromCharCode(parseInt(digits, 16));
            };
            var peg$f32 = function peg$f32(digits) {
              return String.fromCharCode(parseInt(digits, 16));
            };
            var peg$f33 = function peg$f33(pattern, flags) {
              var value;
              try {
                value = new RegExp(pattern, flags);
              } catch (e) {
                error(e.message);
              }
              return {
                type: "Literal",
                value: value,
                location: location()
              };
            };
            var peg$f34 = function peg$f34(expression) {
              return expression;
            };
            var peg$f35 = function peg$f35(elision) {
              return {
                type: "ArrayExpression",
                elements: optionalList(extractOptional(elision, 0)),
                location: location()
              };
            };
            var peg$f36 = function peg$f36(elements) {
              return {
                type: "ArrayExpression",
                elements: elements,
                location: location()
              };
            };
            var peg$f37 = function peg$f37(elements, elision) {
              return {
                type: "ArrayExpression",
                elements: elements.concat(optionalList(extractOptional(elision, 0))),
                location: location()
              };
            };
            var peg$f38 = function peg$f38(elision, element) {
              return optionalList(extractOptional(elision, 0)).concat(element);
            };
            var peg$f39 = function peg$f39(head, elision, element) {
              return optionalList(extractOptional(elision, 0)).concat(element);
            };
            var peg$f40 = function peg$f40(head, tail) {
              return Array.prototype.concat.apply(head, tail);
            };
            var peg$f41 = function peg$f41(commas) {
              return filledArray(commas.length + 1, null);
            };
            var peg$f42 = function peg$f42() {
              return {
                type: "ObjectExpression",
                properties: [],
                location: location()
              };
            };
            var peg$f43 = function peg$f43(properties) {
              return {
                type: "ObjectExpression",
                properties: properties,
                location: location()
              };
            };
            var peg$f44 = function peg$f44(properties) {
              return {
                type: "ObjectExpression",
                properties: properties,
                location: location()
              };
            };
            var peg$f45 = function peg$f45(head, tail) {
              return buildList(head, tail, 3);
            };
            var peg$f46 = function peg$f46(key, value) {
              return {
                type: "Property",
                key: key,
                value: value,
                kind: "init",
                location: location()
              };
            };
            var peg$f48 = function peg$f48(value) {
              return {
                "type": "Literal",
                "value": Number(value),
                location: location()
              };
            };
            var peg$f49 = function peg$f49(head, property) {
              return {
                property: property,
                computed: true,
                location: location()
              };
            };
            var peg$f50 = function peg$f50(head, property) {
              return {
                property: property,
                computed: false,
                location: location()
              };
            };
            var peg$f51 = function peg$f51(head, tail) {
              return tail.reduce(function (result, element) {
                return {
                  type: "MemberExpression",
                  object: result,
                  property: element.property,
                  computed: element.computed,
                  location: location()
                };
              }, head);
            };
            var peg$f52 = function peg$f52(callee, args) {
              return {
                type: "CallExpression",
                callee: callee,
                arguments: args,
                location: location()
              };
            };
            var peg$f53 = function peg$f53(head, args) {
              return {
                type: "CallExpression",
                arguments: args,
                location: location()
              };
            };
            var peg$f54 = function peg$f54(head, property) {
              return {
                type: "MemberExpression",
                property: property,
                computed: true,
                location: location()
              };
            };
            var peg$f55 = function peg$f55(head, property) {
              return {
                type: "MemberExpression",
                property: property,
                computed: false,
                location: location()
              };
            };
            var peg$f56 = function peg$f56(head, tail) {
              return tail.reduce(function (result, element) {
                element[TYPES_TO_PROPERTY_NAMES[element.type]] = result;
                return element;
              }, head);
            };
            var peg$f57 = function peg$f57(args) {
              return optionalList(extractOptional(args, 0));
            };
            var peg$f58 = function peg$f58(head, tail) {
              return buildList(head, tail, 3);
            };
            var peg$f59 = function peg$f59(identifier, argument) {
              return _objectSpread2$1(_objectSpread2$1({}, argument), {}, {
                NIWANGO_Identifier: identifier || undefined,
                location: location()
              });
            };
            var peg$f60 = function peg$f60(head, tail) {
              var list = buildList(head, tail, 3);
              if (list.length > 1) {
                return {
                  type: "BlockStatement",
                  __type: "AssignmentExpressions",
                  body: list,
                  location: location()
                };
              }
              return _objectSpread2$1({}, list[0]);
            };
            var peg$f61 = function peg$f61(identifier) {
              return identifier;
            };
            var peg$f62 = function peg$f62(argument, operator) {
              return {
                type: "UpdateExpression",
                operator: operator,
                argument: argument,
                prefix: false,
                location: location()
              };
            };
            var peg$f63 = function peg$f63(operator, argument) {
              var type = operator === "++" || operator === "--" ? "UpdateExpression" : "UnaryExpression";
              return {
                type: type,
                operator: operator,
                argument: argument,
                prefix: true,
                location: location()
              };
            };
            var peg$f64 = function peg$f64(head, tail) {
              return buildBinaryExpression(head, tail);
            };
            var peg$f65 = function peg$f65(head, tail) {
              return buildBinaryExpression(head, tail);
            };
            var peg$f66 = function peg$f66(head, tail) {
              return buildBinaryExpression(head, tail);
            };
            var peg$f67 = function peg$f67(head, tail) {
              return buildBinaryExpression(head, tail);
            };
            var peg$f69 = function peg$f69(head, tail) {
              return buildBinaryExpression(head, tail);
            };
            var peg$f71 = function peg$f71(head, tail) {
              return buildBinaryExpression(head, tail);
            };
            var peg$f73 = function peg$f73(head, tail) {
              return buildBinaryExpression(head, tail);
            };
            var peg$f75 = function peg$f75(head, tail) {
              return buildBinaryExpression(head, tail);
            };
            var peg$f77 = function peg$f77(head, tail) {
              return buildLogicalExpression(head, tail);
            };
            var peg$f79 = function peg$f79(head, tail) {
              return buildLogicalExpression(head, tail);
            };
            var peg$f81 = function peg$f81(test, consequent, alternate) {
              return {
                type: "ConditionalExpression",
                test: test,
                consequent: consequent,
                alternate: alternate,
                location: location()
              };
            };
            var peg$f83 = function peg$f83(left, right) {
              return {
                type: "AssignmentExpression",
                operator: "=",
                left: left,
                right: right,
                location: location()
              };
            };
            var peg$f84 = function peg$f84(left, right) {
              return {
                type: "VariableDeclaration",
                declarations: [{
                  type: "VariableDeclarator",
                  id: left,
                  init: right
                }],
                kind: "var",
                location: location()
              };
            };
            var peg$f85 = function peg$f85(left, operator, right) {
              return {
                type: "AssignmentExpression",
                operator: operator,
                left: left,
                right: right,
                location: location()
              };
            };
            var peg$f88 = function peg$f88(head, tail) {
              return tail.length > 0 ? {
                type: "SequenceExpression",
                expressions: buildList(head, tail, 3)
              } : head;
            };
            var peg$f90 = function peg$f90(body) {
              return {
                type: "BlockStatement",
                __type: "Block1",
                body: optionalList(extractOptional(body, 0)),
                location: location()
              };
            };
            var peg$f91 = function peg$f91(body) {
              return {
                type: "BlockStatement",
                __type: "Block2",
                body: optionalList(extractOptional(body, 0)),
                location: location()
              };
            };
            var peg$f92 = function peg$f92(head, tail) {
              return buildList(head, tail, 1);
            };
            var peg$f93 = function peg$f93(declarations) {
              return {
                type: "VariableDeclaration",
                declarations: declarations,
                kind: "var",
                location: location()
              };
            };
            var peg$f94 = function peg$f94(head, tail) {
              return buildList(head, tail, 3);
            };
            var peg$f96 = function peg$f96(id, init) {
              return {
                type: "VariableDeclarator",
                id: id,
                init: extractOptional(init, 1),
                location: location()
              };
            };
            var peg$f98 = function peg$f98(expression) {
              return expression;
            };
            var peg$f100 = function peg$f100() {
              return {
                type: "EmptyStatement",
                location: location()
              };
            };
            var peg$f101 = function peg$f101(expression) {
              return {
                type: "ExpressionStatement",
                expression: expression,
                location: location()
              };
            };
            var peg$f102 = function peg$f102(body) {
              return {
                type: "LambdaExpression",
                body: body,
                location: location()
              };
            };
            var peg$f103 = function peg$f103(body) {
              return {
                type: "LambdaExpression",
                body: body,
                location: location()
              };
            };
            var peg$f104 = function peg$f104(body) {
              return {
                type: "LambdaExpression",
                body: body,
                location: location()
              };
            };
            var peg$f106 = function peg$f106(body) {
              return {
                type: "BlockStatement",
                __type: "FunctionBody",
                body: optionalList(body),
                location: location()
              };
            };
            var peg$f107 = function peg$f107(body) {
              return {
                type: "Program",
                body: optionalList(body),
                location: location()
              };
            };
            var peg$f108 = function peg$f108(head, tail) {
              return buildList(head, tail, 1);
            };
            var peg$currPos = 0;
            var peg$savedPos = 0;
            var peg$posDetailsCache = [{
              line: 1,
              column: 1
            }];
            var peg$maxFailPos = 0;
            var peg$maxFailExpected = [];
            var peg$silentFails = 0;
            var peg$resultsCache = {};
            var peg$result;
            if ("startRule" in options) {
              if (!(options.startRule in peg$startRuleFunctions)) {
                throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
              }
              peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
            }
            function text() {
              return input.substring(peg$savedPos, peg$currPos);
            }
            function location() {
              return peg$computeLocation(peg$savedPos, peg$currPos);
            }
            function error(message, location) {
              location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
              throw peg$buildSimpleError(message, location);
            }
            function peg$literalExpectation(text, ignoreCase) {
              return {
                type: "literal",
                text: text,
                ignoreCase: ignoreCase
              };
            }
            function peg$classExpectation(parts, inverted, ignoreCase) {
              return {
                type: "class",
                parts: parts,
                inverted: inverted,
                ignoreCase: ignoreCase
              };
            }
            function peg$anyExpectation() {
              return {
                type: "any"
              };
            }
            function peg$endExpectation() {
              return {
                type: "end"
              };
            }
            function peg$otherExpectation(description) {
              return {
                type: "other",
                description: description
              };
            }
            function peg$computePosDetails(pos) {
              var details = peg$posDetailsCache[pos];
              var p;
              if (details) {
                return details;
              } else {
                p = pos - 1;
                while (!peg$posDetailsCache[p]) {
                  p--;
                }
                details = peg$posDetailsCache[p];
                details = {
                  line: details.line,
                  column: details.column
                };
                while (p < pos) {
                  if (input.charCodeAt(p) === 10) {
                    details.line++;
                    details.column = 1;
                  } else {
                    details.column++;
                  }
                  p++;
                }
                peg$posDetailsCache[pos] = details;
                return details;
              }
            }
            function peg$computeLocation(startPos, endPos, offset) {
              var startPosDetails = peg$computePosDetails(startPos);
              var endPosDetails = peg$computePosDetails(endPos);
              var res = {
                source: peg$source,
                start: {
                  offset: startPos,
                  line: startPosDetails.line,
                  column: startPosDetails.column
                },
                end: {
                  offset: endPos,
                  line: endPosDetails.line,
                  column: endPosDetails.column
                }
              };
              if (offset && peg$source && typeof peg$source.offset === "function") {
                res.start = peg$source.offset(res.start);
                res.end = peg$source.offset(res.end);
              }
              return res;
            }
            function peg$fail(expected) {
              if (peg$currPos < peg$maxFailPos) {
                return;
              }
              if (peg$currPos > peg$maxFailPos) {
                peg$maxFailPos = peg$currPos;
                peg$maxFailExpected = [];
              }
              peg$maxFailExpected.push(expected);
            }
            function peg$buildSimpleError(message, location) {
              return new peg$SyntaxError(message, null, null, location);
            }
            function peg$buildStructuredError(expected, found, location) {
              return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
            }
            function peg$parseStart() {
              var s0, s2;
              var key = peg$currPos * 149 + 0;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              peg$parse__();
              s2 = peg$parseProgram();
              peg$parse__();
              peg$savedPos = s0;
              s0 = peg$f0(s2);
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseSourceCharacter() {
              var s0;
              var key = peg$currPos * 149 + 1;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.length > peg$currPos) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e0);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseWhiteSpace() {
              var s0;
              var key = peg$currPos * 149 + 2;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 9) {
                s0 = peg$c0;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e2);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 11) {
                  s0 = peg$c1;
                  peg$currPos++;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e3);
                  }
                }
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 12) {
                    s0 = peg$c2;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e4);
                    }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 32) {
                      s0 = peg$c3;
                      peg$currPos++;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e5);
                      }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 160) {
                        s0 = peg$c4;
                        peg$currPos++;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e6);
                        }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 65279) {
                          s0 = peg$c5;
                          peg$currPos++;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e7);
                          }
                        }
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseZs();
                        }
                      }
                    }
                  }
                }
              }
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                if (peg$silentFails === 0) {
                  peg$fail(peg$e1);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLineTerminator() {
              var s0;
              var key = peg$currPos * 149 + 3;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r0.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e8);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLineTerminatorSequence() {
              var s0;
              var key = peg$currPos * 149 + 4;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 10) {
                s0 = peg$c6;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e10);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c7) {
                  s0 = peg$c7;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e11);
                  }
                }
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 13) {
                    s0 = peg$c8;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e12);
                    }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 8232) {
                      s0 = peg$c9;
                      peg$currPos++;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e13);
                      }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 8233) {
                        s0 = peg$c10;
                        peg$currPos++;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e14);
                        }
                      }
                    }
                  }
                }
              }
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                if (peg$silentFails === 0) {
                  peg$fail(peg$e9);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseComment() {
              var s0;
              var key = peg$currPos * 149 + 5;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              s0 = peg$parseSingleLineComment();
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                if (peg$silentFails === 0) {
                  peg$fail(peg$e15);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseSingleLineComment() {
              var s0, s1, s2, s3, s4, s5;
              var key = peg$currPos * 149 + 6;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 35) {
                s1 = peg$c11;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e16);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$currPos;
                peg$silentFails++;
                s5 = peg$parseLineTerminator();
                peg$silentFails--;
                if (s5 === peg$FAILED) {
                  s4 = undefined;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseSourceCharacter();
                  if (s5 !== peg$FAILED) {
                    s4 = [s4, s5];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$currPos;
                  peg$silentFails++;
                  s5 = peg$parseLineTerminator();
                  peg$silentFails--;
                  if (s5 === peg$FAILED) {
                    s4 = undefined;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parseSourceCharacter();
                    if (s5 !== peg$FAILED) {
                      s4 = [s4, s5];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseIdentifier() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 7;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              s2 = peg$parseReservedWord();
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseIdentifierName();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f1(s2);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e17);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseIdentifierName() {
              var s0, s4, s5, s6;
              var key = peg$currPos * 149 + 8;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              s0 = peg$currPos;
              peg$parse__();
              if (input.charCodeAt(peg$currPos) === 47) {
                peg$currPos++;
              } else {
                if (peg$silentFails === 0) {
                  peg$fail(peg$e18);
                }
              }
              peg$parse__();
              s4 = peg$parseIdentifierStart();
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseIdentifierPart();
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseIdentifierPart();
                }
                peg$savedPos = s0;
                s0 = peg$f2(s4, s5);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                if (peg$silentFails === 0) {
                  peg$fail(peg$e17);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseIdentifierStart() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 9;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseUnicodeLetter();
              if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 36) {
                  s0 = peg$c13;
                  peg$currPos++;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e19);
                  }
                }
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 95) {
                    s0 = peg$c14;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e20);
                    }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 64) {
                      s0 = peg$c15;
                      peg$currPos++;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e21);
                      }
                    }
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      if (input.charCodeAt(peg$currPos) === 92) {
                        s1 = peg$c16;
                        peg$currPos++;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e22);
                        }
                      }
                      if (s1 !== peg$FAILED) {
                        s2 = peg$parseUnicodeEscapeSequence();
                        if (s2 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s0 = peg$f3(s2);
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseIdentifierPart() {
              var s0;
              var key = peg$currPos * 149 + 10;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseIdentifierStart();
              if (s0 === peg$FAILED) {
                s0 = peg$parseUnicodeCombiningMark();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseUnicodeDigit();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parsePc();
                    if (s0 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 8204) {
                        s0 = peg$c17;
                        peg$currPos++;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e23);
                        }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 8205) {
                          s0 = peg$c18;
                          peg$currPos++;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e24);
                          }
                        }
                        if (s0 === peg$FAILED) {
                          if (peg$r1.test(input.charAt(peg$currPos))) {
                            s0 = input.charAt(peg$currPos);
                            peg$currPos++;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$e25);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseUnicodeLetter() {
              var s0;
              var key = peg$currPos * 149 + 11;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseLu();
              if (s0 === peg$FAILED) {
                s0 = peg$parseLl();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseLt();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseLm();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseLo();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseNl();
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseUnicodeCombiningMark() {
              var s0;
              var key = peg$currPos * 149 + 12;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseMn();
              if (s0 === peg$FAILED) {
                s0 = peg$parseMc();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseUnicodeDigit() {
              var s0;
              var key = peg$currPos * 149 + 13;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              s0 = peg$parseNd();
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                if (peg$silentFails === 0) {
                  peg$fail(peg$e26);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseReservedWord() {
              var s0;
              var key = peg$currPos * 149 + 14;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseNullLiteral();
              if (s0 === peg$FAILED) {
                s0 = peg$parseBooleanLiteral();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLiteral() {
              var s0;
              var key = peg$currPos * 149 + 15;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseNullLiteral();
              if (s0 === peg$FAILED) {
                s0 = peg$parseNilLiteral();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseBooleanLiteral();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseNumericLiteral();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseStringLiteral();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseRegularExpressionLiteral();
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNullLiteral() {
              var s0, s1;
              var key = peg$currPos * 149 + 16;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseNullToken();
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$f4();
              }
              s0 = s1;
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNilLiteral() {
              var s0, s1;
              var key = peg$currPos * 149 + 17;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseNilToken();
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$f5();
              }
              s0 = s1;
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseBooleanLiteral() {
              var s0, s1;
              var key = peg$currPos * 149 + 18;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseTrueToken();
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$f6();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseFalseToken();
                if (s1 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$f7();
                }
                s0 = s1;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNumericLiteral() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 19;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              s0 = peg$currPos;
              s1 = peg$parseHexIntegerLiteral();
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                peg$silentFails++;
                s3 = peg$parseIdentifierStart();
                if (s3 === peg$FAILED) {
                  s3 = peg$parseDecimalDigit();
                }
                peg$silentFails--;
                if (s3 === peg$FAILED) {
                  s2 = undefined;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f8(s1);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseOctalIntegerLiteral();
                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  peg$silentFails++;
                  s3 = peg$parseIdentifierStart();
                  if (s3 === peg$FAILED) {
                    s3 = peg$parseDecimalDigit();
                  }
                  peg$silentFails--;
                  if (s3 === peg$FAILED) {
                    s2 = undefined;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f9(s1);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseDecimalLiteral();
                  if (s1 !== peg$FAILED) {
                    s2 = peg$currPos;
                    peg$silentFails++;
                    s3 = peg$parseIdentifierStart();
                    if (s3 === peg$FAILED) {
                      s3 = peg$parseDecimalDigit();
                    }
                    peg$silentFails--;
                    if (s3 === peg$FAILED) {
                      s2 = undefined;
                    } else {
                      peg$currPos = s2;
                      s2 = peg$FAILED;
                    }
                    if (s2 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s0 = peg$f10(s1);
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                }
              }
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e26);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseDecimalLiteral() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 20;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseDecimalIntegerLiteral();
              if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s2 = peg$c19;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e27);
                  }
                }
                if (s2 !== peg$FAILED) {
                  s3 = [];
                  s4 = peg$parseDecimalDigit();
                  while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parseDecimalDigit();
                  }
                  s4 = peg$parseExponentPart();
                  if (s4 === peg$FAILED) {
                    s4 = null;
                  }
                  peg$savedPos = s0;
                  s0 = peg$f11();
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 46) {
                  s1 = peg$c19;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e27);
                  }
                }
                if (s1 !== peg$FAILED) {
                  s2 = [];
                  s3 = peg$parseDecimalDigit();
                  if (s3 !== peg$FAILED) {
                    while (s3 !== peg$FAILED) {
                      s2.push(s3);
                      s3 = peg$parseDecimalDigit();
                    }
                  } else {
                    s2 = peg$FAILED;
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parseExponentPart();
                    if (s3 === peg$FAILED) {
                      s3 = null;
                    }
                    peg$savedPos = s0;
                    s0 = peg$f12();
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseDecimalIntegerLiteral();
                  if (s1 !== peg$FAILED) {
                    s2 = peg$parseExponentPart();
                    if (s2 === peg$FAILED) {
                      s2 = null;
                    }
                    peg$savedPos = s0;
                    s0 = peg$f13();
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseDecimalIntegerLiteral() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 21;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.charCodeAt(peg$currPos) === 48) {
                s0 = peg$c20;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e28);
                }
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseNonZeroDigit();
                if (s1 !== peg$FAILED) {
                  s2 = [];
                  s3 = peg$parseDecimalDigit();
                  while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    s3 = peg$parseDecimalDigit();
                  }
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseDecimalDigit() {
              var s0;
              var key = peg$currPos * 149 + 22;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r2.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e29);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNonZeroDigit() {
              var s0;
              var key = peg$currPos * 149 + 23;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r3.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e30);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseExponentPart() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 24;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseExponentIndicator();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseSignedInteger();
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseExponentIndicator() {
              var s0;
              var key = peg$currPos * 149 + 25;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.substr(peg$currPos, 1).toLowerCase() === peg$c21) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e31);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseSignedInteger() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 26;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (peg$r4.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e32);
                }
              }
              if (s1 === peg$FAILED) {
                s1 = null;
              }
              s2 = [];
              s3 = peg$parseDecimalDigit();
              if (s3 !== peg$FAILED) {
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$parseDecimalDigit();
                }
              } else {
                s2 = peg$FAILED;
              }
              if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseHexIntegerLiteral() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 27;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2).toLowerCase() === peg$c22) {
                s1 = input.substr(peg$currPos, 2);
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e33);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = [];
                s4 = peg$parseHexDigit();
                if (s4 !== peg$FAILED) {
                  while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parseHexDigit();
                  }
                } else {
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = input.substring(s2, peg$currPos);
                } else {
                  s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f14(s2);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseOctalIntegerLiteral() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 28;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 1).toLowerCase() === peg$c20) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e34);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = [];
                s4 = peg$parseOctalDigit();
                if (s4 !== peg$FAILED) {
                  while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parseOctalDigit();
                  }
                } else {
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = input.substring(s2, peg$currPos);
                } else {
                  s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f15(s2);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseHexDigit() {
              var s0;
              var key = peg$currPos * 149 + 29;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r5.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e35);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseOctalDigit() {
              var s0;
              var key = peg$currPos * 149 + 30;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r6.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e36);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseStringLiteral() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 31;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 34) {
                s1 = peg$c23;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e38);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$parseDoubleStringCharacter();
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$parseDoubleStringCharacter();
                }
                if (input.charCodeAt(peg$currPos) === 34) {
                  s3 = peg$c23;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e38);
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f16(s2);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 39) {
                  s1 = peg$c24;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e39);
                  }
                }
                if (s1 !== peg$FAILED) {
                  s2 = [];
                  s3 = peg$parseSingleStringCharacter();
                  while (s3 !== peg$FAILED) {
                    s2.push(s3);
                    s3 = peg$parseSingleStringCharacter();
                  }
                  if (input.charCodeAt(peg$currPos) === 39) {
                    s3 = peg$c24;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e39);
                    }
                  }
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f17(s2);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e37);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseDoubleStringCharacter() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 32;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 34) {
                s2 = peg$c23;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e38);
                }
              }
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 92) {
                  s2 = peg$c16;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e22);
                  }
                }
                if (s2 === peg$FAILED) {
                  s2 = peg$parseLineTerminator();
                }
              }
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseSourceCharacter();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f18();
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                  s1 = peg$c16;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e22);
                  }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$parseEscapeSequence();
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f19(s2);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$parseLineContinuation();
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseSingleStringCharacter() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 33;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 39) {
                s2 = peg$c24;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e39);
                }
              }
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 92) {
                  s2 = peg$c16;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e22);
                  }
                }
                if (s2 === peg$FAILED) {
                  s2 = peg$parseLineTerminator();
                }
              }
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseSourceCharacter();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f20();
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                  s1 = peg$c16;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e22);
                  }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$parseEscapeSequence();
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f21(s2);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$parseLineContinuation();
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLineContinuation() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 34;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 92) {
                s1 = peg$c16;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e22);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseLineTerminatorSequence();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f22();
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseEscapeSequence() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 35;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseCharacterEscapeSequence();
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 48) {
                  s1 = peg$c20;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e28);
                  }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  peg$silentFails++;
                  s3 = peg$parseDecimalDigit();
                  peg$silentFails--;
                  if (s3 === peg$FAILED) {
                    s2 = undefined;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f23();
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$parseHexEscapeSequence();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseUnicodeEscapeSequence();
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseCharacterEscapeSequence() {
              var s0;
              var key = peg$currPos * 149 + 36;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseSingleEscapeCharacter();
              if (s0 === peg$FAILED) {
                s0 = peg$parseNonEscapeCharacter();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseSingleEscapeCharacter() {
              var s0, s1;
              var key = peg$currPos * 149 + 37;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.charCodeAt(peg$currPos) === 39) {
                s0 = peg$c24;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e39);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 34) {
                  s0 = peg$c23;
                  peg$currPos++;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e38);
                  }
                }
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 92) {
                    s0 = peg$c16;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e22);
                    }
                  }
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 98) {
                      s1 = peg$c25;
                      peg$currPos++;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e40);
                      }
                    }
                    if (s1 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$f24();
                    }
                    s0 = s1;
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      if (input.charCodeAt(peg$currPos) === 102) {
                        s1 = peg$c26;
                        peg$currPos++;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e41);
                        }
                      }
                      if (s1 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$f25();
                      }
                      s0 = s1;
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.charCodeAt(peg$currPos) === 110) {
                          s1 = peg$c27;
                          peg$currPos++;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e42);
                          }
                        }
                        if (s1 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$f26();
                        }
                        s0 = s1;
                        if (s0 === peg$FAILED) {
                          s0 = peg$currPos;
                          if (input.charCodeAt(peg$currPos) === 114) {
                            s1 = peg$c28;
                            peg$currPos++;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$e43);
                            }
                          }
                          if (s1 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$f27();
                          }
                          s0 = s1;
                          if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            if (input.charCodeAt(peg$currPos) === 116) {
                              s1 = peg$c29;
                              peg$currPos++;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$e44);
                              }
                            }
                            if (s1 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$f28();
                            }
                            s0 = s1;
                            if (s0 === peg$FAILED) {
                              s0 = peg$currPos;
                              if (input.charCodeAt(peg$currPos) === 118) {
                                s1 = peg$c30;
                                peg$currPos++;
                              } else {
                                s1 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$e45);
                                }
                              }
                              if (s1 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$f29();
                              }
                              s0 = s1;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNonEscapeCharacter() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 38;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              s2 = peg$parseEscapeCharacter();
              if (s2 === peg$FAILED) {
                s2 = peg$parseLineTerminator();
              }
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseSourceCharacter();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f30();
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseEscapeCharacter() {
              var s0;
              var key = peg$currPos * 149 + 39;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseSingleEscapeCharacter();
              if (s0 === peg$FAILED) {
                s0 = peg$parseDecimalDigit();
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 120) {
                    s0 = peg$c31;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e46);
                    }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 117) {
                      s0 = peg$c32;
                      peg$currPos++;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e47);
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseHexEscapeSequence() {
              var s0, s1, s2, s3, s4, s5;
              var key = peg$currPos * 149 + 40;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 120) {
                s1 = peg$c31;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e46);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = peg$currPos;
                s4 = peg$parseHexDigit();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseHexDigit();
                  if (s5 !== peg$FAILED) {
                    s4 = [s4, s5];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = input.substring(s2, peg$currPos);
                } else {
                  s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f31(s2);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseUnicodeEscapeSequence() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 41;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 117) {
                s1 = peg$c32;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e47);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = peg$currPos;
                s4 = peg$parseHexDigit();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseHexDigit();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseHexDigit();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parseHexDigit();
                      if (s7 !== peg$FAILED) {
                        s4 = [s4, s5, s6, s7];
                        s3 = s4;
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = input.substring(s2, peg$currPos);
                } else {
                  s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f32(s2);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionLiteral() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 42;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              peg$silentFails++;
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 47) {
                s1 = peg$c12;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e18);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = peg$parseRegularExpressionBody();
                if (s3 !== peg$FAILED) {
                  s2 = input.substring(s2, peg$currPos);
                } else {
                  s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 47) {
                    s3 = peg$c12;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e18);
                    }
                  }
                  if (s3 !== peg$FAILED) {
                    s4 = peg$currPos;
                    peg$parseRegularExpressionFlags();
                    s4 = input.substring(s4, peg$currPos);
                    peg$savedPos = s0;
                    s0 = peg$f33(s2, s4);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$silentFails--;
              if (s0 === peg$FAILED) {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e48);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionBody() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 43;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseRegularExpressionFirstChar();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$parseRegularExpressionChar();
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$parseRegularExpressionChar();
                }
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionFirstChar() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 44;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              if (peg$r7.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e49);
                }
              }
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseRegularExpressionNonTerminator();
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseRegularExpressionBackslashSequence();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseRegularExpressionClass();
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionChar() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 45;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              if (peg$r8.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e50);
                }
              }
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseRegularExpressionNonTerminator();
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseRegularExpressionBackslashSequence();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseRegularExpressionClass();
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionBackslashSequence() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 46;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 92) {
                s1 = peg$c16;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e22);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseRegularExpressionNonTerminator();
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionNonTerminator() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 47;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              s2 = peg$parseLineTerminator();
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseSourceCharacter();
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionClass() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 48;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 91) {
                s1 = peg$c33;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e51);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$parseRegularExpressionClassChar();
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$parseRegularExpressionClassChar();
                }
                if (input.charCodeAt(peg$currPos) === 93) {
                  s3 = peg$c34;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e52);
                  }
                }
                if (s3 !== peg$FAILED) {
                  s1 = [s1, s2, s3];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionClassChar() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 49;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              if (peg$r9.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e53);
                }
              }
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseRegularExpressionNonTerminator();
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseRegularExpressionBackslashSequence();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRegularExpressionFlags() {
              var s0, s1;
              var key = peg$currPos * 149 + 50;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = [];
              s1 = peg$parseIdentifierPart();
              while (s1 !== peg$FAILED) {
                s0.push(s1);
                s1 = peg$parseIdentifierPart();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLl() {
              var s0;
              var key = peg$currPos * 149 + 51;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r10.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e54);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLm() {
              var s0;
              var key = peg$currPos * 149 + 52;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r11.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e55);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLo() {
              var s0;
              var key = peg$currPos * 149 + 53;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r12.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e56);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLt() {
              var s0;
              var key = peg$currPos * 149 + 54;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r13.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e57);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLu() {
              var s0;
              var key = peg$currPos * 149 + 55;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r14.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e58);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseMc() {
              var s0;
              var key = peg$currPos * 149 + 56;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r15.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e59);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseMn() {
              var s0;
              var key = peg$currPos * 149 + 57;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r16.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e60);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNd() {
              var s0;
              var key = peg$currPos * 149 + 58;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r17.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e61);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNl() {
              var s0;
              var key = peg$currPos * 149 + 59;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r18.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e62);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parsePc() {
              var s0;
              var key = peg$currPos * 149 + 60;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r19.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e63);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseZs() {
              var s0;
              var key = peg$currPos * 149 + 61;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (peg$r20.test(input.charAt(peg$currPos))) {
                s0 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e64);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseFalseToken() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 62;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 5) === peg$c35) {
                s1 = peg$c35;
                peg$currPos += 5;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e65);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                peg$silentFails++;
                s3 = peg$parseIdentifierPart();
                peg$silentFails--;
                if (s3 === peg$FAILED) {
                  s2 = undefined;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLambdaToken1() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 63;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 6) === peg$c36) {
                s1 = peg$c36;
                peg$currPos += 6;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e66);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                peg$silentFails++;
                s3 = peg$parseIdentifierPart();
                peg$silentFails--;
                if (s3 === peg$FAILED) {
                  s2 = undefined;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLambdaToken2() {
              var s0;
              var key = peg$currPos * 149 + 64;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.charCodeAt(peg$currPos) === 92) {
                s0 = peg$c16;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e22);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNullToken() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 65;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 4) === peg$c37) {
                s1 = peg$c37;
                peg$currPos += 4;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e67);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                peg$silentFails++;
                s3 = peg$parseIdentifierPart();
                peg$silentFails--;
                if (s3 === peg$FAILED) {
                  s2 = undefined;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseNilToken() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 66;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 3) === peg$c38) {
                s1 = peg$c38;
                peg$currPos += 3;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e68);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                peg$silentFails++;
                s3 = peg$parseIdentifierPart();
                peg$silentFails--;
                if (s3 === peg$FAILED) {
                  s2 = undefined;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseTrueToken() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 67;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 4) === peg$c39) {
                s1 = peg$c39;
                peg$currPos += 4;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e69);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                peg$silentFails++;
                s3 = peg$parseIdentifierPart();
                peg$silentFails--;
                if (s3 === peg$FAILED) {
                  s2 = undefined;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parse__() {
              var s0, s1;
              var key = peg$currPos * 149 + 68;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = [];
              s1 = peg$parseWhiteSpace();
              if (s1 === peg$FAILED) {
                s1 = peg$parseLineTerminatorSequence();
                if (s1 === peg$FAILED) {
                  s1 = peg$parseComment();
                }
              }
              while (s1 !== peg$FAILED) {
                s0.push(s1);
                s1 = peg$parseWhiteSpace();
                if (s1 === peg$FAILED) {
                  s1 = peg$parseLineTerminatorSequence();
                  if (s1 === peg$FAILED) {
                    s1 = peg$parseComment();
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parse_() {
              var s0, s1;
              var key = peg$currPos * 149 + 69;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = [];
              s1 = peg$parseWhiteSpace();
              while (s1 !== peg$FAILED) {
                s0.push(s1);
                s1 = peg$parseWhiteSpace();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseEOS() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 70;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parse__();
              if (input.charCodeAt(peg$currPos) === 59) {
                s2 = peg$c40;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e70);
                }
              }
              if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parse_();
                s2 = peg$parseSingleLineComment();
                if (s2 === peg$FAILED) {
                  s2 = null;
                }
                s3 = peg$currPos;
                peg$silentFails++;
                s4 = peg$parseLineTerminatorSequence();
                peg$silentFails--;
                if (s4 !== peg$FAILED) {
                  peg$currPos = s3;
                  s3 = undefined;
                } else {
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s1 = [s1, s2, s3];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parse_();
                  s2 = peg$currPos;
                  peg$silentFails++;
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s3 = peg$c41;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e71);
                    }
                  }
                  peg$silentFails--;
                  if (s3 !== peg$FAILED) {
                    peg$currPos = s2;
                    s2 = undefined;
                  } else {
                    s2 = peg$FAILED;
                  }
                  if (s2 !== peg$FAILED) {
                    s1 = [s1, s2];
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parse__();
                    s2 = peg$parseEOF();
                    if (s2 !== peg$FAILED) {
                      s1 = [s1, s2];
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      s1 = peg$parse_();
                      s2 = peg$currPos;
                      peg$silentFails++;
                      if (input.charCodeAt(peg$currPos) === 41) {
                        s3 = peg$c42;
                        peg$currPos++;
                      } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e72);
                        }
                      }
                      peg$silentFails--;
                      if (s3 !== peg$FAILED) {
                        peg$currPos = s2;
                        s2 = undefined;
                      } else {
                        s2 = peg$FAILED;
                      }
                      if (s2 !== peg$FAILED) {
                        s1 = [s1, s2];
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseEOF() {
              var s0, s1;
              var key = peg$currPos * 149 + 71;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              peg$silentFails++;
              if (input.length > peg$currPos) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e0);
                }
              }
              peg$silentFails--;
              if (s1 === peg$FAILED) {
                s0 = undefined;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parsePrimaryExpression() {
              var s0, s1, s3, s5;
              var key = peg$currPos * 149 + 72;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 40) {
                s1 = peg$c43;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e73);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$parse__();
                s3 = peg$parseExpression();
                if (s3 !== peg$FAILED) {
                  peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s5 = peg$c42;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e72);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f34(s3);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseIdentifier();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseLiteral();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseArrayLiteral();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseObjectLiteral();
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseArrayLiteral() {
              var s0, s1, s3, s4, s5, s7, s8, s9;
              var key = peg$currPos * 149 + 73;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 91) {
                s1 = peg$c33;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e51);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$parse__();
                s3 = peg$currPos;
                s4 = peg$parseElision();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse__();
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 === peg$FAILED) {
                  s3 = null;
                }
                if (input.charCodeAt(peg$currPos) === 93) {
                  s4 = peg$c34;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e52);
                  }
                }
                if (s4 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f35(s3);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 91) {
                  s1 = peg$c33;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e51);
                  }
                }
                if (s1 !== peg$FAILED) {
                  peg$parse__();
                  s3 = peg$parseElementList();
                  if (s3 !== peg$FAILED) {
                    s4 = peg$parse__();
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s5 = peg$c34;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e52);
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s0 = peg$f36(s3);
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 91) {
                    s1 = peg$c33;
                    peg$currPos++;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e51);
                    }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$parse__();
                    s3 = peg$parseElementList();
                    if (s3 !== peg$FAILED) {
                      s4 = peg$parse__();
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s5 = peg$c44;
                        peg$currPos++;
                      } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e74);
                        }
                      }
                      if (s5 !== peg$FAILED) {
                        peg$parse__();
                        s7 = peg$currPos;
                        s8 = peg$parseElision();
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parse__();
                          s8 = [s8, s9];
                          s7 = s8;
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                        if (s7 === peg$FAILED) {
                          s7 = null;
                        }
                        if (input.charCodeAt(peg$currPos) === 93) {
                          s8 = peg$c34;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e52);
                          }
                        }
                        if (s8 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s0 = peg$f37(s3, s7);
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseElementList() {
              var s0, s1, s2, s3, s4, s5, s7, s8, s9;
              var key = peg$currPos * 149 + 74;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              s2 = peg$currPos;
              s3 = peg$parseElision();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse__();
                s3 = [s3, s4];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
              if (s2 === peg$FAILED) {
                s2 = null;
              }
              s3 = peg$parseAssignmentExpression();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s1;
                s1 = peg$f38(s2, s3);
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c44;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e74);
                  }
                }
                if (s5 !== peg$FAILED) {
                  peg$parse__();
                  s7 = peg$currPos;
                  s8 = peg$parseElision();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parse__();
                    s8 = [s8, s9];
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  s8 = peg$parseAssignmentExpression();
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s3;
                    s3 = peg$f39(s1, s7, s8);
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s5 = peg$c44;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e74);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    peg$parse__();
                    s7 = peg$currPos;
                    s8 = peg$parseElision();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parse__();
                      s8 = [s8, s9];
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                    if (s7 === peg$FAILED) {
                      s7 = null;
                    }
                    s8 = peg$parseAssignmentExpression();
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s3;
                      s3 = peg$f39(s1, s7, s8);
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f40(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseElision() {
              var s0, s1, s2, s3, s4, s5;
              var key = peg$currPos * 149 + 75;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s1 = peg$c44;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e74);
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c44;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e74);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s5 = peg$c44;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e74);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s4 = [s4, s5];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f41(s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseObjectLiteral() {
              var s0, s1, s3, s5, s7;
              var key = peg$currPos * 149 + 76;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 123) {
                s1 = peg$c45;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e75);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$parse__();
                if (input.charCodeAt(peg$currPos) === 125) {
                  s3 = peg$c41;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e71);
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f42();
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 123) {
                  s1 = peg$c45;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e75);
                  }
                }
                if (s1 !== peg$FAILED) {
                  peg$parse__();
                  s3 = peg$parsePropertyNameAndValueList();
                  if (s3 !== peg$FAILED) {
                    peg$parse__();
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s5 = peg$c41;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e71);
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s0 = peg$f43(s3);
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 123) {
                    s1 = peg$c45;
                    peg$currPos++;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e75);
                    }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$parse__();
                    s3 = peg$parsePropertyNameAndValueList();
                    if (s3 !== peg$FAILED) {
                      peg$parse__();
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s5 = peg$c44;
                        peg$currPos++;
                      } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e74);
                        }
                      }
                      if (s5 !== peg$FAILED) {
                        peg$parse__();
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s7 = peg$c41;
                          peg$currPos++;
                        } else {
                          s7 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e71);
                          }
                        }
                        if (s7 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s0 = peg$f44(s3);
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parsePropertyNameAndValueList() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 77;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parsePropertyAssignment();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c44;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e74);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parsePropertyAssignment();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s5 = peg$c44;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e74);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parsePropertyAssignment();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f45(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parsePropertyAssignment() {
              var s0, s1, s3, s5;
              var key = peg$currPos * 149 + 78;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parsePropertyName();
              if (s1 !== peg$FAILED) {
                peg$parse__();
                if (input.charCodeAt(peg$currPos) === 58) {
                  s3 = peg$c46;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e76);
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$parse__();
                  s5 = peg$parseAssignmentExpression();
                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f46(s1, s5);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parsePropertyName() {
              var s0;
              var key = peg$currPos * 149 + 79;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseIdentifierName();
              if (s0 === peg$FAILED) {
                s0 = peg$parseStringLiteral();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseNumericLiteral();
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseMemberExpression() {
              var s0, s1, s2, s3, s4, s5, s7, s9;
              var key = peg$currPos * 149 + 81;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parsePrimaryExpression();
              if (s1 === peg$FAILED) {
                s1 = peg$currPos;
                s2 = peg$currPos;
                s3 = [];
                s4 = peg$parseUnicodeDigit();
                if (s4 !== peg$FAILED) {
                  while (s4 !== peg$FAILED) {
                    s3.push(s4);
                    s4 = peg$parseUnicodeDigit();
                  }
                } else {
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = input.substring(s2, peg$currPos);
                } else {
                  s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s1;
                  s2 = peg$f48(s2);
                }
                s1 = s2;
              }
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                if (input.charCodeAt(peg$currPos) === 91) {
                  s5 = peg$c33;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e51);
                  }
                }
                if (s5 !== peg$FAILED) {
                  peg$parse__();
                  s7 = peg$parseExpression();
                  if (s7 !== peg$FAILED) {
                    peg$parse__();
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s9 = peg$c34;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e52);
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s3;
                      s3 = peg$f49(s1, s7);
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 === peg$FAILED) {
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 46) {
                    s5 = peg$c19;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e27);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    peg$parse__();
                    s7 = peg$parseIdentifierName();
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s3;
                      s3 = peg$f50(s1, s7);
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 91) {
                    s5 = peg$c33;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e51);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    peg$parse__();
                    s7 = peg$parseExpression();
                    if (s7 !== peg$FAILED) {
                      peg$parse__();
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s9 = peg$c34;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e52);
                        }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s3;
                        s3 = peg$f49(s1, s7);
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 === peg$FAILED) {
                    s3 = peg$currPos;
                    s4 = peg$parse__();
                    if (input.charCodeAt(peg$currPos) === 46) {
                      s5 = peg$c19;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e27);
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$parse__();
                      s7 = peg$parseIdentifierName();
                      if (s7 !== peg$FAILED) {
                        peg$savedPos = s3;
                        s3 = peg$f50(s1, s7);
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f51(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseCallExpression() {
              var s0, s1, s2, s3, s4, s5, s7, s9;
              var key = peg$currPos * 149 + 82;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              s2 = peg$parseMemberExpression();
              if (s2 !== peg$FAILED) {
                s3 = peg$parse__();
                s4 = peg$parseArguments();
                if (s4 !== peg$FAILED) {
                  peg$savedPos = s1;
                  s1 = peg$f52(s2, s4);
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseArguments();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s3;
                  s3 = peg$f53(s1, s5);
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 === peg$FAILED) {
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 91) {
                    s5 = peg$c33;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e51);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    peg$parse__();
                    s7 = peg$parseExpression();
                    if (s7 !== peg$FAILED) {
                      peg$parse__();
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s9 = peg$c34;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e52);
                        }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s3;
                        s3 = peg$f54(s1, s7);
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 === peg$FAILED) {
                    s3 = peg$currPos;
                    s4 = peg$parse__();
                    if (input.charCodeAt(peg$currPos) === 46) {
                      s5 = peg$c19;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e27);
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$parse__();
                      s7 = peg$parseIdentifierName();
                      if (s7 !== peg$FAILED) {
                        peg$savedPos = s3;
                        s3 = peg$f55(s1, s7);
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  }
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseArguments();
                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s3;
                    s3 = peg$f53(s1, s5);
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 === peg$FAILED) {
                    s3 = peg$currPos;
                    s4 = peg$parse__();
                    if (input.charCodeAt(peg$currPos) === 91) {
                      s5 = peg$c33;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e51);
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$parse__();
                      s7 = peg$parseExpression();
                      if (s7 !== peg$FAILED) {
                        peg$parse__();
                        if (input.charCodeAt(peg$currPos) === 93) {
                          s9 = peg$c34;
                          peg$currPos++;
                        } else {
                          s9 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e52);
                          }
                        }
                        if (s9 !== peg$FAILED) {
                          peg$savedPos = s3;
                          s3 = peg$f54(s1, s7);
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                    if (s3 === peg$FAILED) {
                      s3 = peg$currPos;
                      s4 = peg$parse__();
                      if (input.charCodeAt(peg$currPos) === 46) {
                        s5 = peg$c19;
                        peg$currPos++;
                      } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e27);
                        }
                      }
                      if (s5 !== peg$FAILED) {
                        peg$parse__();
                        s7 = peg$parseIdentifierName();
                        if (s7 !== peg$FAILED) {
                          peg$savedPos = s3;
                          s3 = peg$f55(s1, s7);
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    }
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f56(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseArguments() {
              var s0, s1, s3, s4, s5;
              var key = peg$currPos * 149 + 83;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 40) {
                s1 = peg$c43;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e73);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$parse__();
                s3 = peg$currPos;
                s4 = peg$parseArgumentList();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse__();
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 === peg$FAILED) {
                  s3 = null;
                }
                if (input.charCodeAt(peg$currPos) === 41) {
                  s4 = peg$c42;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e72);
                  }
                }
                if (s4 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f57(s3);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseArgumentList() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 84;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseArgumentWithName();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c44;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e74);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseArgumentWithName();
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s5 = peg$c44;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e74);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseArgumentWithName();
                    if (s7 === peg$FAILED) {
                      s7 = null;
                    }
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f58(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseArgumentWithName() {
              var s0, s1, s3;
              var key = peg$currPos * 149 + 85;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseArgumentName();
              if (s1 === peg$FAILED) {
                s1 = null;
              }
              peg$parse__();
              s3 = peg$parseAssignmentExpressions();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f59(s1, s3);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseAssignmentExpressions() {
              var s0, s3, s4, s5, s6, s7, s8, s9;
              var key = peg$currPos * 149 + 86;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 59) {
                peg$currPos++;
              } else {
                if (peg$silentFails === 0) {
                  peg$fail(peg$e70);
                }
              }
              peg$parse__();
              s3 = peg$parseAssignmentExpression();
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$currPos;
                s6 = peg$parse__();
                if (input.charCodeAt(peg$currPos) === 59) {
                  s7 = peg$c40;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e70);
                  }
                }
                if (s7 === peg$FAILED) {
                  s7 = null;
                }
                s8 = peg$parse__();
                s9 = peg$parseAssignmentExpression();
                if (s9 !== peg$FAILED) {
                  s6 = [s6, s7, s8, s9];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$currPos;
                  s6 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 59) {
                    s7 = peg$c40;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e70);
                    }
                  }
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  s8 = peg$parse__();
                  s9 = peg$parseAssignmentExpression();
                  if (s9 !== peg$FAILED) {
                    s6 = [s6, s7, s8, s9];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                }
                if (input.charCodeAt(peg$currPos) === 59) {
                  s5 = peg$c40;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e70);
                  }
                }
                if (s5 === peg$FAILED) {
                  s5 = null;
                }
                peg$savedPos = s0;
                s0 = peg$f60(s3, s4);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseArgumentName() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 87;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseIdentifier();
              if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 58) {
                  s2 = peg$c46;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e76);
                  }
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$currPos;
                  peg$silentFails++;
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s4 = peg$c47;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e77);
                    }
                  }
                  peg$silentFails--;
                  if (s4 === peg$FAILED) {
                    s3 = undefined;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f61(s1);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLeftHandSideExpression() {
              var s0;
              var key = peg$currPos * 149 + 88;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseLambdaExpression();
              if (s0 === peg$FAILED) {
                s0 = peg$parseCallExpression();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseMemberExpression();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseEmptyStatement();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseVariableStatement();
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parsePostfixExpression() {
              var s0, s1, s3;
              var key = peg$currPos * 149 + 89;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseLeftHandSideExpression();
              if (s1 !== peg$FAILED) {
                peg$parse_();
                s3 = peg$parsePostfixOperator();
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f62(s1, s3);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseLeftHandSideExpression();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parsePostfixOperator() {
              var s0;
              var key = peg$currPos * 149 + 90;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.substr(peg$currPos, 2) === peg$c48) {
                s0 = peg$c48;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e78);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c49) {
                  s0 = peg$c49;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e79);
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseUnaryExpression() {
              var s0, s1, s3;
              var key = peg$currPos * 149 + 91;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parsePostfixExpression();
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseUnaryOperator();
                if (s1 !== peg$FAILED) {
                  peg$parse__();
                  s3 = peg$parseUnaryExpression();
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f63(s1, s3);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseUnaryOperator() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 92;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.substr(peg$currPos, 2) === peg$c48) {
                s0 = peg$c48;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e78);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c49) {
                  s0 = peg$c49;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e79);
                  }
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 43) {
                    s2 = peg$c50;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e80);
                    }
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 61) {
                      s4 = peg$c47;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e77);
                      }
                    }
                    peg$silentFails--;
                    if (s4 === peg$FAILED) {
                      s3 = undefined;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                      s2 = [s2, s3];
                      s1 = s2;
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                  if (s1 !== peg$FAILED) {
                    s0 = input.substring(s0, peg$currPos);
                  } else {
                    s0 = s1;
                  }
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 45) {
                      s2 = peg$c51;
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e81);
                      }
                    }
                    if (s2 !== peg$FAILED) {
                      s3 = peg$currPos;
                      peg$silentFails++;
                      if (input.charCodeAt(peg$currPos) === 61) {
                        s4 = peg$c47;
                        peg$currPos++;
                      } else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e77);
                        }
                      }
                      peg$silentFails--;
                      if (s4 === peg$FAILED) {
                        s3 = undefined;
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                      if (s3 !== peg$FAILED) {
                        s2 = [s2, s3];
                        s1 = s2;
                      } else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                    if (s1 !== peg$FAILED) {
                      s0 = input.substring(s0, peg$currPos);
                    } else {
                      s0 = s1;
                    }
                    if (s0 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 126) {
                        s0 = peg$c52;
                        peg$currPos++;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e82);
                        }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 33) {
                          s0 = peg$c53;
                          peg$currPos++;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e83);
                          }
                        }
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseMultiplicativeExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 93;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseUnaryExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseMultiplicativeOperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseUnaryExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseMultiplicativeOperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseUnaryExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f64(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseMultiplicativeOperator() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 94;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 42) {
                s2 = peg$c54;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e84);
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                peg$silentFails++;
                if (input.charCodeAt(peg$currPos) === 61) {
                  s4 = peg$c47;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e77);
                  }
                }
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                  s3 = undefined;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = [s2, s3];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s0 = input.substring(s0, peg$currPos);
              } else {
                s0 = s1;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 47) {
                  s2 = peg$c12;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e18);
                  }
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$currPos;
                  peg$silentFails++;
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s4 = peg$c47;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e77);
                    }
                  }
                  peg$silentFails--;
                  if (s4 === peg$FAILED) {
                    s3 = undefined;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    s2 = [s2, s3];
                    s1 = s2;
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                  s0 = input.substring(s0, peg$currPos);
                } else {
                  s0 = s1;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 37) {
                    s2 = peg$c55;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e85);
                    }
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 61) {
                      s4 = peg$c47;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e77);
                      }
                    }
                    peg$silentFails--;
                    if (s4 === peg$FAILED) {
                      s3 = undefined;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                      s2 = [s2, s3];
                      s1 = s2;
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                  if (s1 !== peg$FAILED) {
                    s0 = input.substring(s0, peg$currPos);
                  } else {
                    s0 = s1;
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseAdditiveExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 95;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseMultiplicativeExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseAdditiveOperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseMultiplicativeExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseAdditiveOperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseMultiplicativeExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f65(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseAdditiveOperator() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 96;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 43) {
                s2 = peg$c50;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e80);
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                peg$silentFails++;
                if (peg$r21.test(input.charAt(peg$currPos))) {
                  s4 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e86);
                  }
                }
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                  s3 = undefined;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = [s2, s3];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s0 = input.substring(s0, peg$currPos);
              } else {
                s0 = s1;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 45) {
                  s2 = peg$c51;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e81);
                  }
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$currPos;
                  peg$silentFails++;
                  if (peg$r22.test(input.charAt(peg$currPos))) {
                    s4 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e87);
                    }
                  }
                  peg$silentFails--;
                  if (s4 === peg$FAILED) {
                    s3 = undefined;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    s2 = [s2, s3];
                    s1 = s2;
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                  s0 = input.substring(s0, peg$currPos);
                } else {
                  s0 = s1;
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseShiftExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 97;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseAdditiveExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseShiftOperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseAdditiveExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseShiftOperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseAdditiveExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f66(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseShiftOperator() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 98;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c56) {
                s2 = peg$c56;
                peg$currPos += 2;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e88);
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                peg$silentFails++;
                if (input.charCodeAt(peg$currPos) === 61) {
                  s4 = peg$c47;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e77);
                  }
                }
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                  s3 = undefined;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = [s2, s3];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s0 = input.substring(s0, peg$currPos);
              } else {
                s0 = s1;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$currPos;
                if (input.substr(peg$currPos, 3) === peg$c57) {
                  s2 = peg$c57;
                  peg$currPos += 3;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e89);
                  }
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$currPos;
                  peg$silentFails++;
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s4 = peg$c47;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e77);
                    }
                  }
                  peg$silentFails--;
                  if (s4 === peg$FAILED) {
                    s3 = undefined;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    s2 = [s2, s3];
                    s1 = s2;
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                  s0 = input.substring(s0, peg$currPos);
                } else {
                  s0 = s1;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c58) {
                    s2 = peg$c58;
                    peg$currPos += 2;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e90);
                    }
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 61) {
                      s4 = peg$c47;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e77);
                      }
                    }
                    peg$silentFails--;
                    if (s4 === peg$FAILED) {
                      s3 = undefined;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                      s2 = [s2, s3];
                      s1 = s2;
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                  if (s1 !== peg$FAILED) {
                    s0 = input.substring(s0, peg$currPos);
                  } else {
                    s0 = s1;
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRelationalExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 99;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseShiftExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseRelationalOperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseShiftExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseRelationalOperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseShiftExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f67(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseRelationalOperator() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 100;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.substr(peg$currPos, 2) === peg$c59) {
                s0 = peg$c59;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e91);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c60) {
                  s0 = peg$c60;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e92);
                  }
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 60) {
                    s2 = peg$c61;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e93);
                    }
                  }
                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 60) {
                      s4 = peg$c61;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e93);
                      }
                    }
                    peg$silentFails--;
                    if (s4 === peg$FAILED) {
                      s3 = undefined;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                      s2 = [s2, s3];
                      s1 = s2;
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                  if (s1 !== peg$FAILED) {
                    s0 = input.substring(s0, peg$currPos);
                  } else {
                    s0 = s1;
                  }
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 62) {
                      s2 = peg$c62;
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e94);
                      }
                    }
                    if (s2 !== peg$FAILED) {
                      s3 = peg$currPos;
                      peg$silentFails++;
                      if (input.charCodeAt(peg$currPos) === 62) {
                        s4 = peg$c62;
                        peg$currPos++;
                      } else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e94);
                        }
                      }
                      peg$silentFails--;
                      if (s4 === peg$FAILED) {
                        s3 = undefined;
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                      if (s3 !== peg$FAILED) {
                        s2 = [s2, s3];
                        s1 = s2;
                      } else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                    if (s1 !== peg$FAILED) {
                      s0 = input.substring(s0, peg$currPos);
                    } else {
                      s0 = s1;
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseEqualityExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 103;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseRelationalExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseEqualityOperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseRelationalExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseEqualityOperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseRelationalExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f69(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseEqualityOperator() {
              var s0;
              var key = peg$currPos * 149 + 105;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.substr(peg$currPos, 3) === peg$c63) {
                s0 = peg$c63;
                peg$currPos += 3;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e95);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 3) === peg$c64) {
                  s0 = peg$c64;
                  peg$currPos += 3;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e96);
                  }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c65) {
                    s0 = peg$c65;
                    peg$currPos += 2;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e97);
                    }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c66) {
                      s0 = peg$c66;
                      peg$currPos += 2;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e98);
                      }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c67) {
                        s0 = peg$c67;
                        peg$currPos += 2;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e99);
                        }
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseBitwiseANDExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 106;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseEqualityExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseBitwiseANDOperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseEqualityExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseBitwiseANDOperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseEqualityExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f71(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseBitwiseANDOperator() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 108;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 38) {
                s2 = peg$c68;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e100);
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                peg$silentFails++;
                if (peg$r23.test(input.charAt(peg$currPos))) {
                  s4 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e101);
                  }
                }
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                  s3 = undefined;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = [s2, s3];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s0 = input.substring(s0, peg$currPos);
              } else {
                s0 = s1;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseBitwiseXORExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 109;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseBitwiseANDExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseBitwiseXOROperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseBitwiseANDExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseBitwiseXOROperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseBitwiseANDExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f73(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseBitwiseXOROperator() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 111;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 94) {
                s2 = peg$c69;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e102);
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                peg$silentFails++;
                if (input.charCodeAt(peg$currPos) === 61) {
                  s4 = peg$c47;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e77);
                  }
                }
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                  s3 = undefined;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = [s2, s3];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s0 = input.substring(s0, peg$currPos);
              } else {
                s0 = s1;
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c70) {
                  s0 = peg$c70;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e103);
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseBitwiseORExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 112;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseBitwiseXORExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseBitwiseOROperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseBitwiseXORExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseBitwiseOROperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseBitwiseXORExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f75(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseBitwiseOROperator() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 114;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 124) {
                s2 = peg$c71;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e104);
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                peg$silentFails++;
                if (peg$r24.test(input.charAt(peg$currPos))) {
                  s4 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e105);
                  }
                }
                peg$silentFails--;
                if (s4 === peg$FAILED) {
                  s3 = undefined;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                  s2 = [s2, s3];
                  s1 = s2;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s0 = input.substring(s0, peg$currPos);
              } else {
                s0 = s1;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLogicalANDExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 115;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseBitwiseORExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseLogicalANDOperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseBitwiseORExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseLogicalANDOperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseBitwiseORExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f77(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLogicalANDOperator() {
              var s0;
              var key = peg$currPos * 149 + 117;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.substr(peg$currPos, 2) === peg$c72) {
                s0 = peg$c72;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e106);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLogicalORExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 118;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseLogicalANDExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseLogicalOROperator();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseLogicalANDExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseLogicalOROperator();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseLogicalANDExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f79(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLogicalOROperator() {
              var s0;
              var key = peg$currPos * 149 + 120;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.substr(peg$currPos, 2) === peg$c73) {
                s0 = peg$c73;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e107);
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseConditionalExpression() {
              var s0, s1, s3, s5, s7, s9;
              var key = peg$currPos * 149 + 121;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseLogicalORExpression();
              if (s1 !== peg$FAILED) {
                peg$parse__();
                if (input.charCodeAt(peg$currPos) === 63) {
                  s3 = peg$c74;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e108);
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$parse__();
                  s5 = peg$parseAssignmentExpression();
                  if (s5 !== peg$FAILED) {
                    peg$parse__();
                    if (input.charCodeAt(peg$currPos) === 58) {
                      s7 = peg$c46;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e76);
                      }
                    }
                    if (s7 !== peg$FAILED) {
                      peg$parse__();
                      s9 = peg$parseAssignmentExpression();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f81(s1, s5, s9);
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseLogicalORExpression();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseAssignmentExpression() {
              var s0, s1, s3, s4, s5, s6;
              var key = peg$currPos * 149 + 123;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseLeftHandSideExpression();
              if (s1 !== peg$FAILED) {
                peg$parse__();
                if (input.charCodeAt(peg$currPos) === 61) {
                  s3 = peg$c47;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e77);
                  }
                }
                if (s3 !== peg$FAILED) {
                  s4 = peg$currPos;
                  peg$silentFails++;
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s5 = peg$c47;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e77);
                    }
                  }
                  peg$silentFails--;
                  if (s5 === peg$FAILED) {
                    s4 = undefined;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parse__();
                    s6 = peg$parseAssignmentExpression();
                    if (s6 === peg$FAILED) {
                      s6 = null;
                    }
                    peg$savedPos = s0;
                    s0 = peg$f83(s1, s6);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseLeftHandSideExpression();
                if (s1 !== peg$FAILED) {
                  peg$parse__();
                  if (input.substr(peg$currPos, 2) === peg$c75) {
                    s3 = peg$c75;
                    peg$currPos += 2;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e109);
                    }
                  }
                  if (s3 !== peg$FAILED) {
                    s4 = peg$currPos;
                    peg$silentFails++;
                    if (input.charCodeAt(peg$currPos) === 61) {
                      s5 = peg$c47;
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e77);
                      }
                    }
                    peg$silentFails--;
                    if (s5 === peg$FAILED) {
                      s4 = undefined;
                    } else {
                      peg$currPos = s4;
                      s4 = peg$FAILED;
                    }
                    if (s4 !== peg$FAILED) {
                      s5 = peg$parse__();
                      s6 = peg$parseAssignmentExpression();
                      if (s6 === peg$FAILED) {
                        s6 = null;
                      }
                      peg$savedPos = s0;
                      s0 = peg$f84(s1, s6);
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseLeftHandSideExpression();
                  if (s1 !== peg$FAILED) {
                    peg$parse__();
                    s3 = peg$parseAssignmentOperator();
                    if (s3 !== peg$FAILED) {
                      s4 = peg$parse__();
                      s5 = peg$parseAssignmentExpression();
                      if (s5 === peg$FAILED) {
                        s5 = null;
                      }
                      peg$savedPos = s0;
                      s0 = peg$f85(s1, s3, s5);
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseConditionalExpression();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseBlock();
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseAssignmentOperator() {
              var s0;
              var key = peg$currPos * 149 + 125;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              if (input.substr(peg$currPos, 2) === peg$c76) {
                s0 = peg$c76;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e110);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c77) {
                  s0 = peg$c77;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e111);
                  }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c78) {
                    s0 = peg$c78;
                    peg$currPos += 2;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e112);
                    }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c79) {
                      s0 = peg$c79;
                      peg$currPos += 2;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e113);
                      }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c80) {
                        s0 = peg$c80;
                        peg$currPos += 2;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e114);
                        }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.substr(peg$currPos, 3) === peg$c81) {
                          s0 = peg$c81;
                          peg$currPos += 3;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e115);
                          }
                        }
                        if (s0 === peg$FAILED) {
                          if (input.substr(peg$currPos, 3) === peg$c82) {
                            s0 = peg$c82;
                            peg$currPos += 3;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$e116);
                            }
                          }
                          if (s0 === peg$FAILED) {
                            if (input.substr(peg$currPos, 4) === peg$c83) {
                              s0 = peg$c83;
                              peg$currPos += 4;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$e117);
                              }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.substr(peg$currPos, 2) === peg$c84) {
                                s0 = peg$c84;
                                peg$currPos += 2;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$e118);
                                }
                              }
                              if (s0 === peg$FAILED) {
                                if (input.substr(peg$currPos, 2) === peg$c85) {
                                  s0 = peg$c85;
                                  peg$currPos += 2;
                                } else {
                                  s0 = peg$FAILED;
                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$e119);
                                  }
                                }
                                if (s0 === peg$FAILED) {
                                  if (input.substr(peg$currPos, 2) === peg$c86) {
                                    s0 = peg$c86;
                                    peg$currPos += 2;
                                  } else {
                                    s0 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                      peg$fail(peg$e120);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseExpression() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 126;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseAssignmentExpression();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c44;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e74);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseAssignmentExpression();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s5 = peg$c44;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e74);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseAssignmentExpression();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f88(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseStatement() {
              var s0;
              var key = peg$currPos * 149 + 128;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseVariableStatement();
              if (s0 === peg$FAILED) {
                s0 = peg$parseEmptyStatement();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseExpressionStatement();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseBlock();
                  }
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseBlock() {
              var s0, s1, s3, s4, s5;
              var key = peg$currPos * 149 + 129;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 40) {
                s1 = peg$c43;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e73);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$parse__();
                s3 = peg$currPos;
                s4 = peg$parseStatementList();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse__();
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                if (s3 === peg$FAILED) {
                  s3 = null;
                }
                if (input.charCodeAt(peg$currPos) === 41) {
                  s4 = peg$c42;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e72);
                  }
                }
                if (s4 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f90(s3);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 123) {
                  s1 = peg$c45;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e75);
                  }
                }
                if (s1 !== peg$FAILED) {
                  peg$parse__();
                  s3 = peg$currPos;
                  s4 = peg$parseStatementList();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parse__();
                    s4 = [s4, s5];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 === peg$FAILED) {
                    s3 = null;
                  }
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s4 = peg$c41;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e71);
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f91(s3);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseStatementList() {
              var s0, s1, s2, s3, s4, s5;
              var key = peg$currPos * 149 + 130;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseStatement();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseStatement();
                if (s5 !== peg$FAILED) {
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseStatement();
                  if (s5 !== peg$FAILED) {
                    s4 = [s4, s5];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f92(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseVariableStatement() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 131;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseVariableDeclarationList();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseEOS();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f93(s1);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseVariableDeclarationList() {
              var s0, s1, s2, s3, s4, s5, s6, s7;
              var key = peg$currPos * 149 + 132;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseVariableDeclaration();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c44;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e74);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse__();
                  s7 = peg$parseVariableDeclaration();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s5 = peg$c44;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e74);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parse__();
                    s7 = peg$parseVariableDeclaration();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f94(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseVariableDeclaration() {
              var s0, s1, s2, s3, s4;
              var key = peg$currPos * 149 + 134;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseIdentifier();
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                s3 = peg$parse__();
                s4 = peg$parseinitializer();
                if (s4 !== peg$FAILED) {
                  s3 = [s3, s4];
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
                if (s2 === peg$FAILED) {
                  s2 = null;
                }
                peg$savedPos = s0;
                s0 = peg$f96(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseinitializer() {
              var s0, s1, s3;
              var key = peg$currPos * 149 + 136;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c75) {
                s1 = peg$c75;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e109);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$parse__();
                s3 = peg$parseAssignmentExpression();
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f98(s3);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseEmptyStatement() {
              var s0, s1;
              var key = peg$currPos * 149 + 138;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 59) {
                s1 = peg$c40;
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e70);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$f100();
              }
              s0 = s1;
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseExpressionStatement() {
              var s0, s1, s2, s3;
              var key = peg$currPos * 149 + 139;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$currPos;
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 123) {
                s2 = peg$c45;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e75);
                }
              }
              peg$silentFails--;
              if (s2 === peg$FAILED) {
                s1 = undefined;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parseExpression();
                if (s2 !== peg$FAILED) {
                  s3 = peg$parseEOS();
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f101(s2);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLambdaExpression() {
              var s0;
              var key = peg$currPos * 149 + 140;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseLambdaExpression1();
              if (s0 === peg$FAILED) {
                s0 = peg$parseLambdaExpression2();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseLambdaExpression3();
                }
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLambdaExpression1() {
              var s0, s1, s3, s5, s7;
              var key = peg$currPos * 149 + 141;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseLambdaToken2();
              if (s1 !== peg$FAILED) {
                peg$parse__();
                if (input.charCodeAt(peg$currPos) === 40) {
                  s3 = peg$c43;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e73);
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$parse__();
                  s5 = peg$parseFunctionBody();
                  peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c42;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e72);
                    }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f102(s5);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLambdaExpression2() {
              var s0, s1, s3, s5, s7;
              var key = peg$currPos * 149 + 142;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseLambdaToken1();
              if (s1 !== peg$FAILED) {
                peg$parse__();
                if (input.charCodeAt(peg$currPos) === 40) {
                  s3 = peg$c43;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e73);
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$parse__();
                  s5 = peg$parseFunctionBody();
                  peg$parse__();
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c42;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e72);
                    }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f103(s5);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseLambdaExpression3() {
              var s0, s1, s2;
              var key = peg$currPos * 149 + 143;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseLambdaToken2();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseSourceElement();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f104(s2);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseFunctionBody() {
              var s0, s1;
              var key = peg$currPos * 149 + 145;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseSourceElements();
              if (s1 === peg$FAILED) {
                s1 = null;
              }
              peg$savedPos = s0;
              s1 = peg$f106(s1);
              s0 = s1;
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseProgram() {
              var s0, s1;
              var key = peg$currPos * 149 + 146;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseSourceElements();
              if (s1 === peg$FAILED) {
                s1 = null;
              }
              peg$savedPos = s0;
              s1 = peg$f107(s1);
              s0 = s1;
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseSourceElements() {
              var s0, s1, s2, s3, s4, s5;
              var key = peg$currPos * 149 + 147;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$currPos;
              s1 = peg$parseSourceElement();
              if (s1 !== peg$FAILED) {
                s2 = [];
                s3 = peg$currPos;
                s4 = peg$parse__();
                s5 = peg$parseSourceElement();
                if (s5 !== peg$FAILED) {
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
                while (s3 !== peg$FAILED) {
                  s2.push(s3);
                  s3 = peg$currPos;
                  s4 = peg$parse__();
                  s5 = peg$parseSourceElement();
                  if (s5 !== peg$FAILED) {
                    s4 = [s4, s5];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
                peg$savedPos = s0;
                s0 = peg$f108(s1, s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            function peg$parseSourceElement() {
              var s0;
              var key = peg$currPos * 149 + 148;
              var cached = peg$resultsCache[key];
              if (cached) {
                peg$currPos = cached.nextPos;
                return cached.result;
              }
              s0 = peg$parseStatement();
              if (s0 === peg$FAILED) {
                s0 = peg$parseLambdaExpression();
              }
              peg$resultsCache[key] = {
                nextPos: peg$currPos,
                result: s0
              };
              return s0;
            }
            var TYPES_TO_PROPERTY_NAMES = {
              CallExpression: "callee",
              MemberExpression: "object"
            };
            function filledArray(count, value) {
              return Array.apply(null, new Array(count)).map(function () {
                return value;
              });
            }
            function extractOptional(optional, index) {
              return optional ? optional[index] : null;
            }
            function extractList(list, index) {
              return list.map(function (element) {
                return element[index];
              });
            }
            function buildList(head, tail, index) {
              return [head].concat(extractList(tail, index));
            }
            function buildBinaryExpression(head, tail) {
              return tail.reduce(function (result, element) {
                return {
                  type: "BinaryExpression",
                  operator: element[1],
                  left: result,
                  right: element[3]
                };
              }, head);
            }
            function buildLogicalExpression(head, tail) {
              return tail.reduce(function (result, element) {
                return {
                  type: "LogicalExpression",
                  operator: element[1],
                  left: result,
                  right: element[3]
                };
              }, head);
            }
            function optionalList(value) {
              return value !== null ? value : [];
            }
            peg$result = peg$startRuleFunction();
            if (peg$result !== peg$FAILED && peg$currPos === input.length) {
              return peg$result;
            } else {
              if (peg$result !== peg$FAILED && peg$currPos < input.length) {
                peg$fail(peg$endExpectation());
              }
              throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
            }
          }
          return {
            SyntaxError: peg$SyntaxError,
            parse: peg$parse
          };
        });
      })(parser);
      var parserExports = parser.exports;
      var parseScript = function parseScript(content, name) {
        var script = content;
        if (script.startsWith("/")) {
          script = script.slice(1);
        }
        var firstError = undefined;
        for (var i = 0; i < 1000; i++) {
          try {
            return parserExports.parse(script, {
              grammarSource: name
            });
          } catch (e) {
            var _firstError;
            (_firstError = firstError) !== null && _firstError !== void 0 ? _firstError : firstError = e;
            if (!(e instanceof parserExports.SyntaxError)) {
              throw e;
            }
            console.info(e.format([{
              source: name,
              text: script
            }]));
            var removed = script.slice(0, e.location.start.offset) + script.slice(e.location.start.offset + 1);
            if (script === removed) throw firstError;
            script = removed;
          }
        }
        throw firstError;
      };
      var processEval = function processEval(_script, scopes, object, trace) {
        try {
          var script = parseScript(object, "[eval]");
          return execute$1(script, scopes, trace);
        } catch (e) {
          return undefined;
        }
      };
      var processHashCode$1 = function processHashCode$1(_script, _scopes, object) {
        var seed = 0;
        for (var i = 0; i < object.length; i++) {
          seed = seed * 31 + object.charCodeAt(i);
        }
        return seed;
      };
      var processIndexOf = function processIndexOf(script, scopes, object, trace) {
        var searchValue = execute$1(script.arguments[0], scopes, trace);
        var fromIndex = execute$1(script.arguments[1], scopes, trace);
        if (_typeof(fromIndex) !== undefined) {
          return object.indexOf("".concat(searchValue), format(fromIndex, "number"));
        }
        return object.indexOf("".concat(searchValue));
      };
      var processMultiply$1 = function processMultiply$1(script, scopes, object, trace) {
        var repeatCount = execute$1(script.arguments[0], scopes, trace);
        return Multiplication(object, repeatCount);
      };
      var processSize = function processSize(_script, _scopes, object) {
        return object.length;
      };
      var processSlice = function processSlice(script, scopes, object, trace) {
        var startIndex = execute$1(script.arguments[0], scopes, trace);
        var length = execute$1(script.arguments[1], scopes, trace);
        if (typeof length !== "undefined") {
          return object.slice(format(startIndex, "number"), format(startIndex, "number") + format(length, "number"));
        }
        return object.slice(format(startIndex, "number"));
      };
      var processToASNumber$1 = function processToASNumber$1() {
        return 0;
      };
      var processToASString$1 = function processToASString$1(_script, _scopes, object) {
        return object;
      };
      var processToFloat = function processToFloat(_script, _scopes, object) {
        return parseFloat(object);
      };
      var processToInteger = function processToInteger(_script, _scopes, object) {
        if (object.match(/^0[1-7]+/)) {
          return parseInt(object, 8);
        }
        return parseInt(object);
      };
      var prototypeStringFunctions = {
        index: processIndex$1,
        size: processSize,
        indexOf: processIndexOf,
        slice: processSlice,
        toInteger: processToInteger,
        toFloat: processToFloat,
        eval: processEval,
        toASNumber: processToASNumber$1,
        toASString: processToASString$1,
        raw: processToASString$1,
        multiply: processMultiply$1,
        hashCode: processHashCode$1
      };
      var processIndex = function processIndex() {
        return null;
      };
      var processAdd = function processAdd(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return Addition(object, value);
      };
      var processAlternative = function processAlternative(script, scopes, object, trace) {
        var args = argumentParser$1(script.arguments, scopes, ["then", "else"], trace, false);
        if (object && args.then) {
          return execute$1(args.then, scopes, trace);
        } else if (!object && args["else"]) {
          return execute$1(args["else"], scopes, trace);
        }
        return;
      };
      var processAnd = function processAnd(script, scopes, object, trace) {
        if (!format(object, "boolean")) {
          return object;
        }
        return execute$1(script.arguments[0], scopes, trace);
      };
      var processCall = function processCall(script, scopes, _, trace) {
        var functionNameAst = script.arguments[0];
        if (!functionNameAst) throw new InvalidTypeError("function name must be exist", script, scopes);
        var functionName = execute$1(script.arguments[0], scopes, trace);
        if (typeof functionName !== "string") throw new InvalidTypeError("typeof function name must be string", script, scopes);
        var newScript = {
          type: "CallExpression",
          callee: {
            type: "Raw",
            value: functionName
          },
          arguments: script.arguments[1] ? [script.arguments[1]] : []
        };
        return execute$1(newScript, scopes, trace);
      };
      var processComma = function processComma(script, scopes, _, trace) {
        return execute$1(script.arguments[0], scopes, trace);
      };
      var processCompare = function processCompare(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (object == value) return 0;
        if (LessThan(object, value)) return -1;
        return 1;
      };
      var processDivide = function processDivide(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return Division(object, value);
      };
      var processEquals = function processEquals(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        return Equality(object, value);
      };
      var processForEachSlot = function processForEachSlot(script, scopes) {
        throw new NotImplementedError(script, scopes);
      };
      var processGreaterThan = function processGreaterThan(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return GreaterThan(object, value);
      };
      var processHashCode = function processHashCode() {
        return 0;
      };
      var processHasSlot = function processHasSlot() {
        return false;
      };
      var processLessThan = function processLessThan(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return LessThan(object, value);
      };
      var processMax = function processMax(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        return object == value || GreaterThan(object, value) ? object : value;
      };
      var processMin = function processMin(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        return object == value || LessThan(object, value) ? object : value;
      };
      var processMinus = function processMinus(_script, _scopes, object) {
        return UnaryNegation(format(object, "number"));
      };
      var processModulo = function processModulo(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return Remainder(object, value);
      };
      var processMultiply = function processMultiply(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return Multiplication(object, value);
      };
      var processNot = function processNot(_script, _scopes, object) {
        return !format(object, "boolean");
      };
      var processNotGreaterThan = function processNotGreaterThan(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return !GreaterThan(object, value);
      };
      var processNotLessThan = function processNotLessThan(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return !LessThan(object, value);
      };
      var processOr = function processOr(script, scopes, object, trace) {
        if (format(object, "boolean")) {
          return object;
        }
        return execute$1(script.arguments[0], scopes, trace);
      };
      var processPlus = function processPlus(_script, _scopes, object) {
        return UnaryPlus(format(object, "number"));
      };
      var processRaw = function processRaw() {
        return undefined;
      };
      var processSubtract = function processSubtract(script, scopes, object, trace) {
        var value = execute$1(script.arguments[0], scopes, trace);
        if (value === undefined) throw new InvalidTypeError("undefined", script, scopes);
        return Subtraction(object, value);
      };
      var processToASBoolean = function processToASBoolean() {
        return true;
      };
      var processToASNumber = function processToASNumber() {
        return 0;
      };
      var processToASString = function processToASString() {
        return "<value>";
      };
      var processWhileKari = function processWhileKari(script, scopes, _, trace) {
        var result;
        while (execute$1(script.arguments[0], scopes, trace)) {
          result = execute$1(script.arguments[1], scopes, trace);
        }
        return result;
      };
      var prototypeValueFunctions = {
        hasSlot: processHasSlot,
        equals: processEquals,
        compare: processCompare,
        hashCore: processHashCode,
        forEachSlot: processForEachSlot,
        call: processCall,
        sendMessage: processCall,
        raw: processRaw,
        increase: processRaw,
        decrease: processRaw,
        toASNumber: processToASNumber,
        toASString: processToASString,
        toASBoolean: processToASBoolean,
        index: processIndex,
        plus: processPlus,
        minus: processMinus,
        multiply: processMultiply,
        divide: processDivide,
        modulo: processModulo,
        add: processAdd,
        subtract: processSubtract,
        alt: processAlternative,
        alternative: processAlternative,
        lessThan: processLessThan,
        notLessThan: processNotLessThan,
        greaterThan: processGreaterThan,
        notGreaterThan: processNotGreaterThan,
        not: processNot,
        and: processAnd,
        or: processOr,
        comma: processComma,
        min: processMin,
        max: processMax,
        while_kari: processWhileKari
      };
      var resolvePrototype = function resolvePrototype(type, name) {
        if ((type === "object" || type === "array") && prototypeObjectFunctions[name]) {
          return prototypeObjectFunctions[name];
        } else if (type === "array" && prototypeArrayFunctions[name]) {
          return prototypeArrayFunctions[name];
        } else if (type === "string" && prototypeStringFunctions[name]) {
          return prototypeStringFunctions[name];
        } else if (type === "boolean" && prototypeBoolFunctions[name]) {
          return prototypeBoolFunctions[name];
        } else if (type === "number" && prototypeNumberFunctions[name]) {
          return prototypeNumberFunctions[name];
        } else if (prototypeValueFunctions[name]) {
          return prototypeValueFunctions[name];
        }
        if (type === "array" && prototypeScope.Array[name]) {
          return prototypeScope.Array[name];
        } else if (type === "string" && prototypeScope.String[name]) {
          return prototypeScope.String[name];
        } else if (type === "boolean" && prototypeScope.Bool[name]) {
          return prototypeScope.Bool[name];
        } else if (type === "number" && prototypeScope.Number[name]) {
          return prototypeScope.Number[name];
        } else if (type === "object" && prototypeScope.Object[name]) {
          return prototypeScope.Object[name];
        }
        return undefined;
      };
      var initResolvePrototype = function initResolvePrototype() {
        setResolvePrototype(resolvePrototype);
      };
      var initCore = function initCore() {
        initResolvePrototype();
        initGetName();
        initArgumentParser();
        initAssign();
        initConfig();
        initExecute();
      };
      var resetCore = function resetCore() {
        initDefinedFunctions();
        initPrototypeScope();
        initResultHook();
      };
      initCore();
      var utils = {
        argumentParser: argumentParser$1,
        getName: getName$1,
        assign: assign$1,
        resolvePrototype: resolvePrototype$1
      };
      var NiwangoCore = /*#__PURE__*/_createClass(function NiwangoCore() {
        _classCallCheck(this, NiwangoCore);
      });
      _class5 = NiwangoCore;
      _defineProperty(NiwangoCore, "execute", execute$1);
      _defineProperty(NiwangoCore, "utils", utils);
      _defineProperty(NiwangoCore, "resetCore", resetCore);
      _defineProperty(NiwangoCore, "parseScript", parseScript);
      _defineProperty(NiwangoCore, "parse", parserExports.parse);
      _defineProperty(NiwangoCore, "PeggySyntaxError", parserExports.SyntaxError);
      _defineProperty(NiwangoCore, "appendDefinedFunctions", appendDefinedFunctions);
      _defineProperty(NiwangoCore, "appendResultHook", appendResultHook);
      _defineProperty(NiwangoCore, "setIsWide", setIsWide);
      _defineProperty(NiwangoCore, "format", format);
      _defineProperty(NiwangoCore, "errors", Errors);
      _defineProperty(NiwangoCore, "prototypeScope", prototypeScope);
      _defineProperty(NiwangoCore, "default", _class5);
      return NiwangoCore;
    });
  })(niwangoCore);
  var niwangoCoreExports = niwangoCore.exports;
  var Core = /*@__PURE__*/getDefaultExportFromCjs(niwangoCoreExports);

  var render;
  var currentTime = 0;
  var comments = [];
  var isWide = false;
  var setRender = function (val) {
      render = val;
  };
  var setCurrentTime = function (time) {
      currentTime = time;
  };
  var setComments = function (val) {
      comments = val;
  };
  var setIsWide = function (val) { return (isWide = val); };

  var colors = {
      white: "#FFFFFF",
      red: "#FF0000",
      pink: "#FF8080",
      orange: "#FFC000",
      yellow: "#FFFF00",
      green: "#00FF00",
      cyan: "#00FFFF",
      blue: "#0000FF",
      purple: "#C000FF",
      black: "#000000",
      white2: "#CCCC99",
      niconicowhite: "#CCCC99",
      red2: "#CC0033",
      truered: "#CC0033",
      pink2: "#FF33CC",
      orange2: "#FF6600",
      passionorange: "#FF6600",
      yellow2: "#999900",
      madyellow: "#999900",
      green2: "#00CC66",
      elementalgreen: "#00CC66",
      cyan2: "#00CCCC",
      blue2: "#3399FF",
      marinblue: "#3399FF",
      purple2: "#6633CC",
      nobleviolet: "#6633CC",
      black2: "#666666",
  };

  var build = function (fonts) {
      return fonts.reduce(function (pv, val, index) {
          if (index === 0) {
              return _assign({}, val);
          }
          pv.font += ", ".concat(val.font);
          return pv;
      }, { font: "", offset: 0, weight: 600 });
  };
  var fontTemplates = {
      arial: {
          font: 'Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic',
          offset: 0.01,
          weight: 600,
      },
      macGothicPro6: {
          font: '"ヒラギノ角ゴ ProN W6", HiraKakuProN-W6, "ヒラギノ角ゴ ProN", HiraKakuProN, "Hiragino Kaku Gothic ProN"',
          offset: -0.05,
          weight: 600,
      },
      macGothic1: {
          font: '"ヒラギノ角ゴシック", "Hiragino Sans", HiraginoSans',
          offset: -0.05,
          weight: 600,
      },
      sansSerif600: {
          font: "sans-serif",
          offset: 0,
          weight: 600,
      },
  };
  var fonts = {
      win7: {
          defont: build([fontTemplates.arial]),
      },
      win8_1: {
          defont: build([fontTemplates.arial]),
      },
      win: {
          defont: build([fontTemplates.arial]),
      },
      mac10_9: {
          defont: build([fontTemplates.macGothicPro6]),
      },
      mac10_11: {
          defont: build([fontTemplates.macGothic1]),
      },
      mac: {
          defont: build([fontTemplates.macGothicPro6]),
      },
      other: {
          defont: build([fontTemplates.sansSerif600]),
      },
  };

  var config;
  var initConfig = function () {
      var platform = (function (ua) {
          if (ua.match(/windows nt 6\.[12]/i)) {
              return "win7";
          }
          else if (ua.match(/windows nt (6\.3|10\.\d+)/i)) {
              return "win8_1";
          }
          else if (ua.match(/windows nt/i)) {
              return "win";
          }
          else if (ua.match(/mac os x 10(.|_)(9|10)/i)) {
              return "mac10_9";
          }
          else if (ua.match(/mac os x 10(.|_)\d{2}/i)) {
              return "mac10_11";
          }
          else if (ua.match(/mac os x/i)) {
              return "mac";
          }
          return "other";
      })(navigator.userAgent);
      config = {
          stageWidth: {
              default: 512,
              full: 672,
          },
          stageHeight: 384,
          canvasWidth: 672,
          canvasHeight: 384,
          flashChar: {
              gulim: "[\u0126\u0127\u0132\u0133\u0138\u013f\u0140\u0149-\u014b\u0166\u0167\u02d0\u02da\u2074\u207f\u2081-\u2084\u2113\u2153\u2154\u215c-\u215e\u2194\u2195\u223c\u249c-\u24b5\u24d0-\u24e9\u25a3-\u25a9\u25b6\u25b7\u25c0\u25c1\u25c8\u25d0\u25d1\u260e\u260f\u261c\u261e\u2660\u2661\u2663-\u2665\u2667-\u2669\u266c\u3131-\u316e\u3200-\u321c\u3260-\u327b\u3380-\u3384\u3388-\u338d\u3390-\u339b\u339f\u33a0\u33a2-\u33ca\u33cf\u33d0\u33d3\u33d6\u33d8\u33db-\u33dd\uf900-\uf928\uf92a-\uf994\uf996\ufa0b\uffe6]",
              simsunStrong: "[\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u0251\u0261\u02ca\u02cb\u2016\u2035\u216a\u216b\u2223\u2236\u2237\u224c\u226e\u226f\u2295\u2483-\u249b\u2504-\u250b\u256d-\u2573\u2581-\u2583\u2585-\u2587\u2589-\u258b\u258d-\u258f\u2594\u2595\u25e2-\u25e5\u2609\u3016\u3017\u301e\u3021-\u3029\u3105-\u3129\u3220-\u3229\u32a3\u33ce\u33d1\u33d2\u33d5\ue758-\ue864\ufa0c\ufa0d\ufe30\ufe31\ufe33-\ufe44\ufe49-\ufe52\ufe54-\ufe57\ufe59-\ufe66\ufe68-\ufe6b]",
              simsunWeak: "[\u02c9\u2105\u2109\u2196-\u2199\u220f\u2215\u2248\u2264\u2265\u2299\u2474-\u2482\u250d\u250e\u2511\u2512\u2515\u2516\u2519\u251a\u251e\u251f\u2521\u2522\u2526\u2527\u2529\u252a\u252d\u252e\u2531\u2532\u2535\u2536\u2539\u253a\u253d\u253e\u2540\u2541\u2543-\u254a\u2550-\u256c\u2584\u2588\u258c\u2593]",
              gothic: "[\u03fb\uff9f]",
          },
          flashMode: "vista",
          flashScriptChar: {
              super: "[\u00aa\u00b2\u00b3\u00b9\u00ba\u02b0\u02b2\u02b3\u02b7\u02b8\u02e1-\u02e3\u0304\u1d2c-\u1d43\u1d45-\u1d61\u1d9b-\u1da1\u1da3-\u1dbf\u2070\u2071\u2074-\u207f\u2c7d]",
              sub: "[\u0320\u1d62-\u1d6a\u2080-\u208e\u2090-\u209c\u2c7c]",
          },
          font: {
              gulim: 'normal 600 [size]px gulim, "Microsoft JhengHei UI", Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic',
              simsun: 'normal 400 [size]px simsun, "游明朝体", "游明朝", "Yu Mincho", YuMincho, yumincho, YuMin-Medium',
          },
          fonts: fonts[platform],
          scriptCharOffset: 0.12,
          lineHeight: 1,
          commentYPaddingTop: 4,
          commentYOffset: -0.2,
          letterSpacing: 0,
          compatWidth: {
              aa: 1,
              ww: 1,
              "0020": 0.5,
              "3000": 0.5,
          },
          colors: colors,
          snapshotIntervalVpos: 1000,
      };
  };

  var getGlobalScope = function (scopes) {
      if (scopes.length < 3) {
          return undefined;
      }
      else {
          return scopes[scopes.length - 3];
      }
  };
  var parseFont = function (font, size) {
      switch (font) {
          case "gulim":
          case "simsun":
              return config.font[font].replace("[size]", "".concat(size));
          default:
              return "".concat(config.fonts.defont.weight, " ").concat(size, "px ").concat(config.fonts.defont.font);
      }
  };
  var getValue = function (value, fallback) {
      return value !== null && value !== void 0 ? value : fallback;
  };
  var format = function (options, types) {
      for (var _i = 0, _a = Object.keys(options); _i < _a.length; _i++) {
          var key = _a[_i];
          var value = options[key];
          var type = types[key];
          if (value !== undefined && type !== "any" && typeof value !== type) {
              if (type === "string") {
                  options[key] = Core.format(value, "string");
              }
              else if (type === "number") {
                  options[key] = Core.format(value, "number");
              }
              else if (type === "boolean") {
                  options[key] = Core.format(value, "boolean");
              }
          }
      }
      return options;
  };

  var handlers = [];
  var resetHandlers = function () {
      handlers = [];
  };
  var addHandler = function (script, scopes, trace, time, duration) {
      handlers.push({
          script: script,
          scopes: scopes,
          time: time,
          duration: duration,
          type: "commentHandler",
          trace: trace,
      });
  };
  var setHandlers = function (newHandlers) {
      handlers = newHandlers;
  };
  var triggerHandlers = function (comment) {
      if (comment.message.startsWith("/"))
          return;
      for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
          var handler = handlers_1[_i];
          var globalScope = getGlobalScope(handler.scopes);
          if (!globalScope)
              continue;
          globalScope.chat = comment;
          Core.execute(handler.script, handler.scopes, [handler.script]);
      }
  };
  var getComments = function (vpos) {
      return comments
          .filter(function (comment) { return comment._vpos <= vpos && comment._vpos > currentTime; })
          .map(function (comment) { return ({
          time: comment._vpos,
          comment: comment,
          type: "comment",
      }); });
  };

  var drawObjects = [];
  var draw = function () {
      drawObjects.sort(function (a, b) {
          if (a.z < b.z) {
              return -1;
          }
          else if (a.z > b.z) {
              return 1;
          }
          return 0;
      });
      for (var _i = 0, drawObjects_1 = drawObjects; _i < drawObjects_1.length; _i++) {
          var object = drawObjects_1[_i];
          if (object.visible) {
              object.draw();
          }
      }
  };
  var register = function (item) {
      drawObjects.push(item);
  };
  var resetObjects = function () {
      drawObjects = [];
  };

  var queue = [];
  var resetQueue = function () {
      queue = [];
  };
  var addQueue = function (script, offset, scopes, trace) {
      queue.push({
          script: script,
          time: currentTime + offset * 100,
          scopes: scopes,
          type: "queue",
          trace: trace,
      });
  };
  var getQueue = function (time) {
      var result = [];
      var newQueue = [];
      for (var _i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
          var item = queue_1[_i];
          if (item.time <= time) {
              result.push(item);
          }
          else {
              newQueue.push(item);
          }
      }
      queue = newQueue;
      return result;
  };
  var setQueue = function (newQueue) {
      queue = newQueue;
  };

  var globalScope;
  var environmentScope;
  var setGlobalScope = function (scope) {
      globalScope = scope;
  };
  var setEnvironmentScope = function (scope) {
      environmentScope = scope;
  };

  var scripts = [];
  var addScript = function (script, time) {
      scripts.push({ type: "script", script: script, time: time });
  };
  var getScripts = function (time) {
      var result = [];
      var newScripts = [];
      for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
          var item = scripts_1[_i];
          if (item.time <= time) {
              result.push(item);
          }
          else {
              newScripts.push(item);
          }
      }
      scripts = newScripts;
      return result;
  };
  var resetScripts = function () {
      scripts = [];
  };
  var setScripts = function (newScripts) {
      scripts = newScripts;
  };

  var internalCanvas = {};
  var createCanvas = function (id) {
      var canvas = document.createElement("canvas");
      canvas.width = config.canvasWidth;
      canvas.height = config.canvasHeight;
      canvas.id = id;
      var context = canvas.getContext("2d");
      if (!context) {
          throw new Error("Fail to get CanvasRenderingContext2D");
      }
      context.textAlign = "start";
      context.textBaseline = "alphabetic";
      context.lineWidth = 4;
      context.lineJoin = "round";
      context.strokeStyle = "#000000";
      var value = { canvas: canvas, context: context };
      internalCanvas[id] = value;
      return value;
  };
  var getCanvas = function (id) {
      var _a;
      return (_a = internalCanvas[id]) !== null && _a !== void 0 ? _a : createCanvas(id);
  };
  var resetCanvas = function () {
      internalCanvas = {};
  };

  var getSmoothDuration = function (distance) {
      var step = 0;
      while (distance > 0) {
          distance -= distance / 14 + 1;
          step++;
      }
      return step * 5;
  };
  var getDistance = function (pos1, pos2) {
      return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
  };
  var getOptions = function (defaultOptions, options) {
      var _a;
      var result = _assign({}, defaultOptions);
      for (var _i = 0, _b = Object.keys(defaultOptions); _i < _b.length; _i++) {
          var _key = _b[_i];
          var key = _key;
          var value = options[key];
          if (value === undefined) {
              continue;
          }
          result = _assign(_assign({}, result), (_a = {}, _a[_key] = value, _a));
      }
      return result;
  };

  var uuid = function () {
      var chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
      for (var i = 0, len = chars.length; i < len; i++) {
          switch (chars[i]) {
              case "x":
                  chars[i] = Math.floor(Math.random() * 16).toString(16);
                  break;
              case "y":
                  chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                  break;
          }
      }
      return chars.join("");
  };

  var defaultOptions$2 = {
      x: 0,
      y: 0,
      z: 0,
      pos: "naka",
      posX: "naka",
      posY: "naka",
      color: 0,
      visible: true,
      alpha: 0,
      scale: 1,
      mover: "",
  };
  var IrObject = (function () {
      function IrObject(options) {
          var _a, _b;
          this.__type = "IrObject";
          this.__NIWANGO_LITERAL = "IrObject";
          (_a = options.__id) !== null && _a !== void 0 ? _a : (options.__id = uuid());
          this.moverQueue = [];
          this.options = getOptions(defaultOptions$2, options);
          this.__id = (_b = this.options.__id) !== null && _b !== void 0 ? _b : uuid();
          this.__width = this.__height = 0;
          this.__modified = false;
          this.__updateColor();
          this.__parsePos();
          register(this);
      }
      Object.defineProperty(IrObject.prototype, "width", {
          get: function () {
              return this.__width;
          },
          set: function (val) {
              this.__width = val;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "height", {
          get: function () {
              return this.__height;
          },
          set: function (val) {
              this.__height = val;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "scale", {
          get: function () {
              this.__filterMoverQueue();
              var currentQueue = this.moverQueue[0];
              if (this.mover === "hopping" && currentQueue) {
                  return (this.options.scale *
                      this.calcMover(currentQueue, this.options.x, "scale"));
              }
              return this.options.scale;
          },
          set: function (val) {
              this.options.scale = val;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "x", {
          get: function () {
              return this.options.x;
          },
          set: function (val) {
              var input = Number(val) || 0;
              var lastVal = this.options.x;
              this.options.x = input;
              if (this.mover === "")
                  return;
              var lastQueue = this.moverQueue.filter(function (queue) { return queue.vpos === currentTime; })[0];
              var currentPos, targetPos;
              if (!lastQueue) {
                  currentPos = { x: lastVal, y: this.options.y };
                  targetPos = { x: input, y: this.options.y };
              }
              else {
                  currentPos = { x: lastVal, y: lastQueue.current.y };
                  targetPos = { x: input, y: lastQueue.target.y };
              }
              console.log("mover-x: ".concat(JSON.stringify(currentPos), " to ").concat(JSON.stringify(targetPos)), this.mover);
              this.__updateMoverQueue(lastQueue, currentPos, targetPos);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "__x", {
          get: function () {
              this.__filterMoverQueue();
              var currentQueue = this.moverQueue[0];
              var posX = this.calcMover(currentQueue, this.options.x, "x");
              var paddingLeft = isWide
                  ? 0
                  : (config.stageWidth.full - config.stageWidth.default) / 2;
              if (this.options.posX === "migi") {
                  return (config.stageWidth[isWide ? "full" : "default"] +
                      posX -
                      this.width +
                      paddingLeft);
              }
              else if (this.options.posX === "hidari") {
                  return posX + paddingLeft;
              }
              return (config.stageWidth[isWide ? "full" : "default"] / 2 +
                  posX -
                  this.width / 2 +
                  paddingLeft);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "y", {
          get: function () {
              return this.options.y;
          },
          set: function (val) {
              var input = Number(val) || 0;
              var lastVal = this.options.y;
              this.options.y = input;
              if (this.mover === "")
                  return;
              var lastQueue = this.moverQueue.filter(function (queue) { return queue.vpos === currentTime; })[0];
              var currentPos, targetPos;
              if (!lastQueue) {
                  currentPos = { x: this.options.x, y: lastVal };
                  targetPos = { x: this.options.x, y: input };
              }
              else {
                  currentPos = { x: lastQueue.current.x, y: lastVal };
                  targetPos = { x: lastQueue.target.x, y: input };
              }
              console.log("mover-y: ".concat(JSON.stringify(currentPos), " to ").concat(JSON.stringify(targetPos)), this.mover);
              this.__updateMoverQueue(lastQueue, currentPos, targetPos);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "__y", {
          get: function () {
              this.__filterMoverQueue();
              var currentQueue = this.moverQueue[0];
              var posY = this.calcMover(currentQueue, this.options.y, "y");
              if (this.options.posY === "ue") {
                  return posY;
              }
              else if (this.options.posY === "shita") {
                  return config.canvasHeight + posY - this.height;
              }
              return config.canvasHeight / 2 + posY - this.height / 2;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "z", {
          get: function () {
              return this.options.z;
          },
          set: function (val) {
              this.options.z = val;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "pos", {
          get: function () {
              return this.options.pos;
          },
          set: function (val) {
              this.options.pos = val;
              this.__parsePos();
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "color", {
          get: function () {
              return this.options.color;
          },
          set: function (val) {
              this.options.color = val;
              this.__updateColor();
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "visible", {
          get: function () {
              return this.options.visible;
          },
          set: function (val) {
              this.options.visible = val;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "alpha", {
          get: function () {
              return this.options.alpha;
          },
          set: function (val) {
              var value;
              if (typeof val !== "number") {
                  value = Number(val) || 0;
              }
              else if (val > 100) {
                  value = 100;
              }
              else if (val < 0) {
                  value = 0;
              }
              else {
                  value = val;
              }
              this.options.alpha = value;
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrObject.prototype, "mover", {
          get: function () {
              return this.options.mover;
          },
          set: function (val) {
              this.options.mover = val;
              this.moverQueue = [];
          },
          enumerable: false,
          configurable: true
      });
      IrObject.prototype.__updateMoverQueue = function (lastQueue, currentPos, targetPos) {
          var diff = {
              x: targetPos.x - currentPos.x,
              y: targetPos.y - currentPos.y,
          };
          if (this.mover === "smooth") {
              var distance = getDistance(currentPos, targetPos);
              this.moverQueue = [
                  {
                      current: currentPos,
                      target: targetPos,
                      diff: diff,
                      vpos: currentTime,
                      duration: getSmoothDuration(distance),
                  },
              ];
          }
          else {
              if (lastQueue) {
                  lastQueue.current = currentPos;
                  lastQueue.target = targetPos;
                  lastQueue.diff = diff;
                  return;
              }
              this.moverQueue.push({
                  current: currentPos,
                  target: targetPos,
                  diff: diff,
                  vpos: currentTime,
                  duration: this.mover === "simple" ? 50 : 100,
              });
          }
          this.__filterMoverQueue();
      };
      IrObject.prototype.__filterMoverQueue = function () {
          if (this.mover === "")
              return;
          var lastLength = this.moverQueue.length;
          this.moverQueue = this.moverQueue.filter(function (item) { return item.vpos + item.duration > currentTime; });
          if (lastLength !== this.moverQueue.length) {
              this.__modified = true;
          }
          var currentItem = this.moverQueue[0];
          if (this.mover !== "hopping" && this.moverQueue.length > 4 && currentItem) {
              this.moverQueue = __spreadArray([currentItem], this.moverQueue.slice(-3), true);
          }
      };
      IrObject.prototype.__parsePos = function () {
          var pos = this.options.pos;
          if (pos.includes("hidari")) {
              this.options.posX = "hidari";
          }
          else if (pos.includes("migi")) {
              this.options.posX = "migi";
          }
          else {
              this.options.posX = "naka";
          }
          if (pos.includes("ue")) {
              this.options.posY = "ue";
          }
          else if (pos.includes("shita")) {
              this.options.posY = "shita";
          }
          else {
              this.options.posY = "naka";
          }
      };
      IrObject.prototype.__updateColor = function () {
          console.debug("please override this method");
      };
      IrObject.prototype.__draw = function () {
          console.debug("please override this method");
      };
      Object.defineProperty(IrObject.prototype, "__isModified", {
          get: function () {
              return (this.__modified ||
                  (this.mover === "hopping" && this.moverQueue.length > 0));
          },
          enumerable: false,
          configurable: true
      });
      IrObject.prototype.draw = function () {
          console.debug("please override this method");
      };
      IrObject.prototype.calcMover = function (queue, basePos, axis) {
          if (axis === "scale") {
              if (queue && this.mover === "hopping") {
                  var _steps = 10;
                  var _step = Math.floor((currentTime - queue.vpos) / 10);
                  return 1 + (_step * _step - (_steps + 1) * _step + _steps) / -50;
              }
              return 1;
          }
          if (!queue || this.mover === "")
              return basePos;
          if (this.mover === "simple") {
              return (queue.current[axis] +
                  (queue.diff[axis] * (currentTime - queue.vpos)) / 50);
          }
          else if (this.mover === "hopping") {
              return (queue.current[axis] +
                  (queue.diff[axis] * (currentTime - queue.vpos)) / 100);
          }
          else if (this.mover === "rolling") {
              var _steps = 20;
              var _step = Math.floor((currentTime - queue.vpos) / 2.5);
              var val1 = ((2 * Math.PI) / _steps) * (_step - 1);
              var val2 = (_step * _step - (_steps + 1) * _step + _steps) / -5;
              var posY = queue.current[axis] +
                  (queue.diff[axis] * (currentTime - queue.vpos)) / 100;
              return posY + val2 * (axis === "x" ? Math.cos(val1) : Math.sin(val1));
          }
          else if (this.mover === "smooth") {
              var stepCount = Math.floor((currentTime - queue.vpos) / 5);
              var pos = queue.diff[axis];
              for (var i = 0; i < stepCount; i++) {
                  pos -= pos / 14 + 1;
              }
              return queue.target[axis] - pos;
          }
          return queue.target[axis];
      };
      return IrObject;
  }());

  var number2color = function (input) {
      var hex = "000000".concat(input.toString(16)).slice(-6);
      return "#".concat(hex);
  };

  var optionTypes$1 = {
      x: "number",
      y: "number",
      z: "number",
      shape: "string",
      width: "number",
      height: "number",
      pos: "string",
      posX: "string",
      posY: "string",
      color: "number",
      visible: "boolean",
      mask: "boolean",
      commentmask: "boolean",
      scale: "number",
      alpha: "number",
      rotation: "number",
      mover: "string",
  };
  var defaultOptions$1 = {
      x: 0,
      y: 0,
      z: 0,
      shape: "circle",
      width: 30,
      height: 30,
      pos: "naka",
      posX: "naka",
      posY: "naka",
      color: 16777215,
      visible: true,
      mask: false,
      commentmask: false,
      scale: 1,
      alpha: 0,
      rotation: 0,
      mover: "",
  };
  var IrShape = (function (_super) {
      __extends(IrShape, _super);
      function IrShape(_options) {
          var _this = this;
          var options = format(_options, optionTypes$1);
          _this = _super.call(this, options) || this;
          _this.__type = "IrShape";
          _this.options = getOptions(defaultOptions$1, options);
          _this.__width = _this.options.width * _this.options.scale;
          _this.__height = _this.options.height * _this.options.scale;
          _this.__parsePos();
          _this.__draw();
          return _this;
      }
      Object.defineProperty(IrShape.prototype, "shape", {
          get: function () {
              return this.options.shape;
          },
          set: function (val) {
              this.options.shape = val;
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrShape.prototype, "width", {
          get: function () {
              return this.options.width;
          },
          set: function (val) {
              this.options.width = val;
              this.__width = val * this.options.scale;
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrShape.prototype, "height", {
          get: function () {
              return this.options.height;
          },
          set: function (val) {
              this.options.height = val;
              this.__height = val * this.options.scale;
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrShape.prototype, "mask", {
          get: function () {
              return this.options.mask;
          },
          set: function (val) {
              this.options.mask = val;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrShape.prototype, "commentmask", {
          get: function () {
              return this.options.commentmask;
          },
          set: function (val) {
              this.options.commentmask = val;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrShape.prototype, "rotation", {
          get: function () {
              return this.options.rotation;
          },
          set: function (val) {
              this.options.rotation = val;
          },
          enumerable: false,
          configurable: true
      });
      IrShape.prototype.__updateColor = function () {
          getCanvas(this.__id).context.fillStyle = number2color(this.color);
      };
      IrShape.prototype.__draw = function () {
          this.__width = this.options.width * this.scale;
          this.__height = this.options.height * this.scale;
          this.__modified = false;
          var _a = getCanvas(this.__id), canvas = _a.canvas, context = _a.context;
          canvas.width = this.__width;
          canvas.height = this.__height;
          this.__updateColor();
          context.globalAlpha = (100 - this.options.alpha) / 100;
          context.clearRect(0, 0, canvas.width, canvas.height);
          if (this.shape === "rect") {
              context.fillRect(0, 0, this.__width, this.__height);
          }
          else {
              context.beginPath();
              context.ellipse(this.__width / 2, this.__height / 2, this.__width / 2, this.__height / 2, 0, 0, 360);
              context.fill();
          }
      };
      IrShape.prototype.draw = function () {
          if (!(Math.floor(this.width) > 0 && Math.floor(this.height) > 0)) {
              return;
          }
          if (this.__isModified)
              this.__draw();
          if (this.rotation % 360 !== 0) {
              render.drawImage(this, {
                  targetX: this.__x,
                  targetY: this.__y,
                  rotate: this.rotation,
              });
          }
          else {
              render.drawImage(this, {
                  targetX: this.__x,
                  targetY: this.__y,
              });
          }
      };
      return IrShape;
  }(IrObject));

  var nativeSort = function (key) {
      return function (a, b) {
          var left = a[key] || 0;
          var right = b[key] || 0;
          if (left > right) {
              return 1;
          }
          else if (left < right) {
              return -1;
          }
          else {
              return 0;
          }
      };
  };

  var getFontName = function (font) {
      if (font.match(/^simsun/)) {
          return "simsun";
      }
      if (font === "gothic") {
          return "defont";
      }
      return "gulim";
  };
  var splitContents = function (string) {
      return Array.from(string.match(/[\n\r]|[^\n\r]+/g) || []).map(function (val) {
          return Array.from(val.match(/[ -~｡-ﾟ]+|[^ -~｡-ﾟ]+/g) || []);
      });
  };
  var getFontIndex = function (string) {
      var regex = {
          simsunStrong: new RegExp(config.flashChar.simsunStrong),
          simsunWeak: new RegExp(config.flashChar.simsunWeak),
          gulim: new RegExp(config.flashChar.gulim),
          gothic: new RegExp(config.flashChar.gothic),
      };
      var index = [];
      var match;
      if ((match = regex.simsunStrong.exec(string)) !== null) {
          index.push({ font: "simsunStrong", index: match.index });
      }
      if ((match = regex.simsunWeak.exec(string)) !== null) {
          index.push({ font: "simsunWeak", index: match.index });
      }
      if ((match = regex.gulim.exec(string)) !== null) {
          index.push({ font: "gulim", index: match.index });
      }
      if ((match = regex.gothic.exec(string)) !== null) {
          index.push({ font: "gothic", index: match.index });
      }
      return index;
  };
  var parse = function (string, compat) {
      var _a, _b, _c;
      if (compat === void 0) { compat = false; }
      var content = [];
      var lines = splitContents(string);
      var _loop_1 = function (line) {
          var lineContent = [];
          for (var _d = 0, line_1 = line; _d < line_1.length; _d++) {
              var part = line_1[_d];
              if (part.match(/[ -~｡-ﾟ]+/g) !== null) {
                  lineContent.push(parseHalfStr(part, compat));
                  continue;
              }
              lineContent.push.apply(lineContent, parseFullStr(part));
          }
          var firstContent = lineContent[0];
          if (firstContent === null || firstContent === void 0 ? void 0 : firstContent.font) {
              content.push.apply(content, lineContent.map(function (val) {
                  val.font || (val.font = firstContent.font);
                  return val;
              }));
          }
          else {
              content.push.apply(content, lineContent);
          }
      };
      for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
          var line = lines_1[_i];
          _loop_1(line);
      }
      var lineCount = Array.from(string.match(/[\n\r]/g) || []).length + 1;
      var font = ((_a = content[0]) === null || _a === void 0 ? void 0 : _a.font) || "defont";
      var lineOffset = (((_b = string.match(new RegExp(config.flashScriptChar.super, "g"))) === null || _b === void 0 ? void 0 : _b.length) || 0) *
          -1 *
          config.scriptCharOffset +
          (((_c = string.match(new RegExp(config.flashScriptChar.sub, "g"))) === null || _c === void 0 ? void 0 : _c.length) || 0) *
              config.scriptCharOffset;
      return { content: content, font: font, lineCount: lineCount, lineOffset: lineOffset };
  };
  var parseHalfStr = function (string, compat) {
      if (!compat) {
          return {
              type: "normal",
              content: string,
          };
      }
      var result = [];
      var lastItem;
      var buffer = "";
      var lastChar = "";
      for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
          var char = string_1[_i];
          if (char === "a" && lastChar === "a") {
              if (buffer) {
                  lastItem = { type: "text", text: buffer };
                  result.push(lastItem);
                  buffer = "";
              }
              lastChar = "";
              if ((lastItem === null || lastItem === void 0 ? void 0 : lastItem.type) === "fill" && lastItem.char === "a") {
                  lastItem.width += config.compatWidth.aa;
                  continue;
              }
              lastItem = { type: "fill", char: "a", width: config.compatWidth.aa };
              result.push(lastItem);
              continue;
          }
          if (char === "w" && lastChar === "w") {
              if (buffer) {
                  lastItem = { type: "text", text: buffer };
                  result.push(lastItem);
                  buffer = "";
              }
              lastChar = "";
              if ((lastItem === null || lastItem === void 0 ? void 0 : lastItem.type) === "fill" && lastItem.char === "w") {
                  lastItem.width += config.compatWidth.ww;
                  continue;
              }
              lastItem = { type: "fill", char: "w", width: config.compatWidth.ww };
              result.push(lastItem);
              continue;
          }
          if (char === "\u0020") {
              if (lastChar) {
                  lastItem = { type: "text", text: buffer + lastChar };
                  result.push(lastItem);
                  buffer = lastChar = "";
              }
              if ((lastItem === null || lastItem === void 0 ? void 0 : lastItem.type) === "space" && lastItem.char === "\u0020") {
                  lastItem.width += config.compatWidth["0020"];
                  continue;
              }
              lastItem = {
                  type: "space",
                  char: "\u0020",
                  width: config.compatWidth["0020"],
              };
              result.push(lastItem);
              continue;
          }
          buffer += lastChar;
          lastChar = char;
      }
      if (buffer || lastChar) {
          result.push({ type: "text", text: buffer + lastChar });
      }
      return { type: "compat", content: result };
  };
  var parseFullStr = function (string) {
      var index = getFontIndex(string);
      if (index.length === 0) {
          return [{ type: "normal", content: string }];
      }
      if (index.length === 1 && index[0]) {
          return [
              { type: "normal", content: string, font: getFontName(index[0].font) },
          ];
      }
      index.sort(nativeSort("index"));
      if (config.flashMode === "xp") {
          var result = [];
          var offset = 0;
          for (var i = 1; i < index.length; i++) {
              var currentVal = index[i];
              var lastVal = index[i - 1];
              if (currentVal === undefined || lastVal === undefined) {
                  continue;
              }
              result.push({
                  type: "normal",
                  content: string.slice(offset, currentVal.index),
                  font: getFontName(lastVal.font),
              });
              offset = currentVal.index;
          }
          var val = index[index.length - 1];
          if (val) {
              result.push({
                  type: "normal",
                  content: string.slice(offset),
                  font: getFontName(val.font),
              });
          }
          return result;
      }
      var firstVal = index[0];
      var secondVal = index[1];
      if (!(firstVal && secondVal)) {
          return [{ type: "normal", content: string }];
      }
      if (firstVal.font !== "gothic") {
          return [
              { type: "normal", content: string, font: getFontName(firstVal.font) },
          ];
      }
      return [
          {
              type: "normal",
              content: string.slice(0, secondVal.index),
              font: getFontName(firstVal.font),
          },
          {
              type: "normal",
              content: string.slice(secondVal.index),
              font: getFontName(secondVal.font),
          },
      ];
  };
  var measure = function (context, comment) {
      var width_arr = [];
      var currentWidth = 0;
      for (var _i = 0, _a = comment.content; _i < _a.length; _i++) {
          var item = _a[_i];
          var widths = [];
          context.font = parseFont(getValue(item.font, comment.font), comment.size);
          if (item.type === "normal") {
              var lines = item.content.replace(/\r\n?/g, "\n").split(/\n/);
              var count = 0;
              for (var _b = 0, lines_2 = lines; _b < lines_2.length; _b++) {
                  var value = lines_2[_b];
                  var measure_1 = context.measureText(value);
                  currentWidth += measure_1.width;
                  widths.push(measure_1.width);
                  if (count++ < lines.length - 1) {
                      width_arr.push(currentWidth);
                      currentWidth = 0;
                  }
              }
          }
          else {
              for (var _c = 0, _d = item.content; _c < _d.length; _c++) {
                  var value = _d[_c];
                  if (value.type === "fill" || value.type === "space") {
                      currentWidth += value.width * comment.size;
                      widths.push(value.width * comment.size);
                  }
                  else {
                      var measure_2 = context.measureText(value.text);
                      currentWidth += measure_2.width;
                      widths.push(measure_2.width);
                  }
              }
          }
          item.width = widths;
      }
      width_arr.push(currentWidth);
      var height = comment.size * config.lineHeight * comment.lineCount +
          config.commentYPaddingTop;
      return { width: Math.max.apply(Math, __spreadArray(__spreadArray([], width_arr, false), [0], false)), height: height };
  };

  var optionTypes = {
      text: "string",
      x: "number",
      y: "number",
      z: "number",
      size: "number",
      pos: "string",
      posX: "string",
      posY: "string",
      color: "number",
      bold: "boolean",
      visible: "boolean",
      scale: "number",
      filter: "string",
      alpha: "number",
      mover: "string",
  };
  var defaultOptions = {
      text: "",
      x: 0,
      y: 0,
      z: 0,
      size: 14,
      pos: "naka",
      posX: "naka",
      posY: "naka",
      color: 0,
      bold: false,
      visible: true,
      scale: 1,
      filter: "",
      alpha: 0,
      mover: "",
  };
  var IrText = (function (_super) {
      __extends(IrText, _super);
      function IrText(_options) {
          var _this = this;
          var options = format(_options, optionTypes);
          _this = _super.call(this, options) || this;
          _this.__type = "IrText";
          _this.options = getOptions(defaultOptions, options);
          _this.__actualHeight = _this.__actualWidth = 0;
          var size = _this.options.size * _this.options.scale;
          _this.__reverse = size < 0;
          if (Math.abs(size) < 10) {
              _this.__scale = Math.max(Math.abs(size / 10), 0.16);
              _this.__size = 10;
          }
          else {
              _this.__scale = 1;
              _this.__size = Math.abs(size);
          }
          _this.parsedComment = parse(_this.text, _this.options.size < 3);
          _this.__updateColor();
          _this.__updateFont();
          _this.__parsePos();
          _this.__measure();
          _this.__draw();
          return _this;
      }
      Object.defineProperty(IrText.prototype, "size", {
          get: function () {
              return this.options.size;
          },
          set: function (val) {
              if (this.options.size < 3 !== val < 3) {
                  this.parsedComment = parse(this.text, val < 3);
              }
              var size = Math.abs(val * this.options.scale);
              if (size < 10) {
                  this.__scale = Math.max(size / 10, 0.16);
                  this.__size = 10;
              }
              else if (size > 100 && val >= 3) {
                  this.__scale = size / 100;
                  this.__size = 100;
              }
              else {
                  this.__scale = 1;
                  this.__size = size;
              }
              this.options.size = val;
              this.__updateFont();
              this.parsedComment = parse(this.text, val < 3);
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrText.prototype, "text", {
          get: function () {
              return this.options.text;
          },
          set: function (string) {
              this.options.text = "".concat(string);
              this.parsedComment = parse(this.text, this.options.size < 3);
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrText.prototype, "scale", {
          get: function () {
              this.__filterMoverQueue();
              var currentQueue = this.moverQueue[0];
              if (this.mover === "hopping" && currentQueue) {
                  return (this.options.scale *
                      this.calcMover(currentQueue, this.options.x, "scale"));
              }
              return this.options.scale;
          },
          set: function (val) {
              var size = Math.abs(val * this.options.size);
              this.__reverse = val < 0;
              if (size < 10) {
                  this.__scale = Math.max(size / 10, 0.16);
                  this.__size = 10;
              }
              else if (size > 100 && this.options.size >= 3) {
                  this.__scale = size / 100;
                  this.__size = 100;
              }
              else {
                  this.__scale = 1;
                  this.__size = size;
              }
              this.options.scale = val;
              this.__updateFont();
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrText.prototype, "bold", {
          get: function () {
              return this.options.bold;
          },
          set: function (val) {
              this.options.bold = val;
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(IrText.prototype, "filter", {
          get: function () {
              return this.options.filter;
          },
          set: function (val) {
              this.options.filter = val;
              this.__modified = true;
          },
          enumerable: false,
          configurable: true
      });
      IrText.prototype.__updateFont = function () {
          getCanvas(this.__id).context.font = "normal 600 ".concat(this.__size, "px Arial, \"\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF\", \"MS PGothic\", MSPGothic, MS-PGothic");
      };
      IrText.prototype.__updateColor = function () {
          getCanvas(this.__id).context.fillStyle = number2color(this.color);
      };
      IrText.prototype.__measure = function () {
          var size = Math.abs(this.size * this.scale);
          if (size < 10) {
              this.__scale = Math.max(size / 10, 0.16);
              this.__size = 10;
          }
          else if (size > 100 && this.size >= 3) {
              this.__scale = size / 100;
              this.__size = 100;
          }
          else {
              this.__scale = 1;
              this.__size = size;
          }
          this.__updateFont();
          var result = measure(getCanvas(this.__id).context, _assign(_assign({}, this.parsedComment), { size: this.__size }));
          this.__actualWidth = result.width;
          this.__actualHeight = result.height;
          this.__width = this.__actualWidth * this.__scale;
          this.__height = this.__actualHeight * this.__scale;
          var canvas = getCanvas(this.__id).canvas;
          canvas.width = this.__actualWidth;
          canvas.height = this.__actualHeight;
      };
      IrText.prototype.__draw = function () {
          var _this = this;
          this.__modified = false;
          this.__updateColor();
          var _a = getCanvas(this.__id), canvas = _a.canvas, context = _a.context;
          context.clearRect(0, 0, canvas.width, canvas.height);
          if (this.__reverse) {
              context.scale(-1, -1);
          }
          else {
              context.scale(1, 1);
          }
          var lineOffset = this.parsedComment.lineOffset;
          context.font = parseFont(this.parsedComment.font, this.__size);
          context.globalAlpha = (100 - this.options.alpha) / 100;
          var lastFont = this.parsedComment.font;
          var leftOffset = 0;
          var lineCount = 0;
          var reverseOffset = this.__reverse ? this.__actualWidth : 0;
          var _loop_1 = function (item) {
              if (lastFont !== getValue(item.font, this_1.parsedComment.font)) {
                  lastFont = getValue(item.font, this_1.parsedComment.font);
                  context.font = parseFont(lastFont, this_1.__size);
              }
              if (item.type === "normal") {
                  var lines_1 = item.content.split(/[\n\r]/g);
                  lines_1.forEach(function (line, index) {
                      var _a;
                      var posX = leftOffset - reverseOffset;
                      var posY = (lineOffset + lineCount + 1) * (_this.__size * config.lineHeight) +
                          config.commentYPaddingTop +
                          _this.__size * config.lineHeight * config.commentYOffset -
                          reverseOffset;
                      if (_this.filter === "fuchi") {
                          context.lineWidth = 4;
                          context.strokeText(line, posX, posY);
                      }
                      context.fillText(line, posX, posY);
                      if (index === lines_1.length - 1) {
                          leftOffset += getValue((_a = item.width) === null || _a === void 0 ? void 0 : _a[index], 0);
                          return;
                      }
                      leftOffset = 0;
                      lineCount += 1;
                  });
                  return "continue";
              }
              item.content.forEach(function (part, index) {
                  var _a;
                  var posX = leftOffset - reverseOffset;
                  var posY = (lineOffset + lineCount + 1) * (_this.__size * config.lineHeight) +
                      config.commentYPaddingTop +
                      _this.__size * config.lineHeight * config.commentYOffset -
                      reverseOffset;
                  switch (part.type) {
                      case "fill": {
                          if (_this.filter === "fuchi") {
                              context.strokeRect(posX, posY, part.width * _this.__size, _this.__size * config.lineHeight);
                          }
                          context.fillRect(posX, posY, part.width * _this.__size, _this.__size * config.lineHeight);
                          break;
                      }
                      case "text":
                          if (_this.filter === "fuchi") {
                              context.strokeText(part.text, posX, posY);
                          }
                          context.fillText(part.text, posX, posY);
                  }
                  leftOffset += getValue((_a = item.width) === null || _a === void 0 ? void 0 : _a[index], 0);
              });
          };
          var this_1 = this;
          for (var _i = 0, _b = this.parsedComment.content; _i < _b.length; _i++) {
              var item = _b[_i];
              _loop_1(item);
          }
          if (this.filter === "kasumi") {
              this.kasumi();
          }
      };
      IrText.prototype.draw = function () {
          if (this.__isModified)
              this.__measure();
          if (!(this.width > 0 && this.height > 0)) {
              return;
          }
          if (this.__isModified)
              this.__draw();
          render.drawImage(this, {
              baseX: 0,
              baseY: 0,
              baseWidth: this.__actualWidth,
              baseHeight: this.__actualHeight,
              targetX: this.__x,
              targetY: this.__y + this.__size / 16,
              targetWidth: this.__width,
              targetHeight: this.__height,
          });
      };
      IrText.prototype.kasumi = function () {
          var _a, _b;
          var _c = getCanvas(this.__id), canvas = _c.canvas, context = _c.context;
          var canvasBlur050 = document.createElement("canvas");
          canvasBlur050.width = canvas.width * 0.5;
          canvasBlur050.height = canvas.height * 0.5;
          var canvasBlur025 = document.createElement("canvas");
          canvasBlur025.width = canvas.width * 0.25;
          canvasBlur025.height = canvas.height * 0.25;
          (_a = canvasBlur025
              .getContext("2d")) === null || _a === void 0 ? void 0 : _a.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvasBlur025.width, canvasBlur025.height);
          (_b = canvasBlur050
              .getContext("2d")) === null || _b === void 0 ? void 0 : _b.drawImage(canvasBlur025, 0, 0, canvasBlur025.width, canvasBlur025.height, 0, 0, canvasBlur050.width, canvasBlur050.height);
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(canvasBlur050, 0, 0, canvasBlur050.width, canvasBlur050.height, 0, 0, canvas.width, canvas.height);
      };
      return IrText;
  }(IrObject));

  var typeGuard = {
      comment: function (i) {
          return objectVerify(i, [
              "message",
              "vpos",
              "isYourPost",
              "mail",
              "fromButton",
              "isPremium",
              "color",
              "size",
              "no",
              "_vpos",
              "_owner",
          ]);
      },
      IrTextLiteral: function (i) {
          return typeof i === "object" &&
              !!i &&
              i.__NIWANGO_LITERAL === "IrObject" &&
              i.__type === "IrText" &&
              !(i instanceof IrObject);
      },
      IrShapeLiteral: function (i) {
          return typeof i === "object" &&
              !!i &&
              i.__NIWANGO_LITERAL === "IrObject" &&
              i.__type === "IrShape" &&
              !(i instanceof IrObject);
      },
  };
  var objectVerify = function (item, keys) {
      if (typeof item !== "object" || !item) {
          return false;
      }
      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
          var key = keys_1[_i];
          if (!Object.prototype.hasOwnProperty.call(item, key)) {
              return false;
          }
      }
      return true;
  };

  var snapshots = [];
  var saveSnapshot = function (vpos) {
      console.log("save snapshot", vpos);
      snapshots.push({
          vpos: vpos,
          queue: structuredClone(queue),
          scripts: structuredClone(scripts),
          handlers: structuredClone(handlers),
          globalScope: structuredClone(globalScope),
          environmentScope: structuredClone(environmentScope),
          drawObjects: structuredClone(drawObjects),
      });
  };
  var restoreSnapshot = function (vpos) {
      console.log("restore snapshot", vpos);
      var snapshot = getLatestSnapshot(vpos);
      if (!snapshot)
          throw new Error("snapshot not found");
      snapshots = snapshots.filter(function (s) { return s.vpos <= snapshot.vpos; });
      resetObjects();
      for (var _i = 0, _a = structuredClone(snapshot.drawObjects); _i < _a.length; _i++) {
          var obj = _a[_i];
          console.log(obj);
          resultHook(obj);
      }
      setQueue(structuredClone(snapshot.queue));
      setScripts(structuredClone(snapshot.scripts));
      setHandlers(structuredClone(snapshot.handlers));
      setGlobalScope(structuredClone(snapshot.globalScope));
      setEnvironmentScope(structuredClone(snapshot.environmentScope));
      return snapshot.vpos;
  };
  var getLatestSnapshot = function (vpos) {
      var maxVpos = -1;
      var lastSnapshot;
      for (var _i = 0, snapshots_1 = snapshots; _i < snapshots_1.length; _i++) {
          var snapshot = snapshots_1[_i];
          if (snapshot.vpos <= vpos && maxVpos < snapshot.vpos) {
              maxVpos = snapshot.vpos;
              lastSnapshot = snapshot;
          }
      }
      return lastSnapshot;
  };
  var getLatestSnapshotVpos = function (vpos) {
      var snapshot = getLatestSnapshot(vpos);
      if (!snapshot)
          return config.snapshotIntervalVpos * -1;
      return snapshot.vpos;
  };
  var resultHook = function (input) {
      if (typeof input === "object") {
          if (typeGuard.IrShapeLiteral(input)) {
              console.log("restore shape", input.options.__id);
              var shape = drawObjects.find(function (obj) { return obj.__id === input.options.__id; });
              return shape !== null && shape !== void 0 ? shape : new IrShape(input.options);
          }
          else if (typeGuard.IrTextLiteral(input)) {
              console.log("restore text", input.options.__id);
              var text = drawObjects.find(function (obj) { return obj.__id === input.options.__id; });
              return text !== null && text !== void 0 ? text : new IrText(input.options);
          }
      }
      return input;
  };
  var resetSnapshot = function () {
      snapshots = [];
  };
  var initResultHook = function () {
      Core.appendResultHook(resultHook);
  };

  var isDrawOptionA$1 = function (i) {
      return i.baseX !== undefined;
  };
  var TO_RADIANS = Math.PI / 180;
  var CanvasRender = (function () {
      function CanvasRender(targetCanvas) {
          this.targetCanvas = targetCanvas;
          this.renderCanvas = document.createElement("canvas");
          this.renderCanvas.width = 1920;
          this.renderCanvas.height = 1080;
          var targetContext = this.targetCanvas.getContext("2d");
          var renderContext = this.renderCanvas.getContext("2d");
          if (!targetContext || !renderContext)
              throw new Error("failed to get context");
          this.targetContext = targetContext;
          this.renderContext = renderContext;
          this.renderContext.scale(1920 / config.canvasWidth, 1080 / config.canvasHeight);
      }
      CanvasRender.prototype.drawImage = function (item, options) {
          var canvas = getCanvas(item.__id).canvas;
          if (!item.visible)
              return;
          if (options.rotate !== undefined && options.rotate % 360 !== 0) {
              this.renderContext.save();
              this.renderContext.translate(options.targetX, options.targetY);
              this.renderContext.rotate(options.rotate * TO_RADIANS);
              this._drawImage(canvas, _assign(_assign({}, options), { targetX: 0, targetY: 0 }));
              this.renderContext.restore();
          }
          else {
              this._drawImage(canvas, options);
          }
      };
      CanvasRender.prototype._drawImage = function (image, options) {
          if (isDrawOptionA$1(options)) {
              this.renderContext.drawImage(image, options.baseX, options.baseY, options.baseWidth, options.baseHeight, options.targetX, options.targetY, options.targetWidth, options.targetHeight);
          }
          else {
              this.renderContext.drawImage(image, options.targetX, options.targetY);
          }
      };
      CanvasRender.prototype.apply = function (clear) {
          clear &&
              this.targetContext.clearRect(0, 0, this.targetCanvas.width, this.targetCanvas.height);
          if (!isWide)
              this.drawLetterBox();
          this.targetContext.drawImage(this.renderCanvas, 0, 0, this.renderCanvas.width, this.renderCanvas.height, 0, 0, this.targetCanvas.width, this.targetCanvas.height);
      };
      CanvasRender.prototype.drawLetterBox = function () {
          var letterBoxWidth = (config.stageWidth.full - config.stageWidth.default) / 2;
          this.renderContext.clearRect(0, 0, letterBoxWidth, config.stageHeight);
          this.renderContext.clearRect(config.canvasWidth - letterBoxWidth, 0, letterBoxWidth, config.stageHeight);
      };
      CanvasRender.prototype.clear = function () {
          this.renderContext.clearRect(0, 0, this.renderCanvas.width, this.renderCanvas.height);
      };
      return CanvasRender;
  }());

  var isDrawOptionA = function (i) {
      return i.baseX !== undefined;
  };
  var ids = [];
  var DomRender = (function () {
      function DomRender(targetElement) {
          this.targetElement = targetElement;
          targetElement.innerHTML = "";
          var wrapperElement = document.createElement("div");
          wrapperElement.style.width = "".concat(config.canvasWidth, "px");
          wrapperElement.style.height = "".concat(config.canvasHeight, "px");
          wrapperElement.style.transform = "scale(".concat(1920 / config.canvasWidth, ", ").concat(1080 / config.canvasHeight, ")");
          wrapperElement.style.transformOrigin = "0 0";
          var innerElement = document.createElement("div");
          innerElement.style.width = "".concat(config.canvasWidth, "px");
          innerElement.style.height = "".concat(config.canvasHeight, "px");
          innerElement.style.position = "relative";
          innerElement.style.margin = "0 auto";
          innerElement.style.overflow = "hidden";
          var renderElement = document.createElement("div");
          renderElement.style.width = "".concat(config.canvasWidth, "px");
          renderElement.style.height = "".concat(config.canvasHeight, "px");
          renderElement.style.position = "relative";
          this.renderElement = renderElement;
          this.innerElement = innerElement;
          this.targetElement.appendChild(wrapperElement);
          wrapperElement.appendChild(innerElement);
          innerElement.appendChild(renderElement);
      }
      DomRender.prototype.drawImage = function (item, options) {
          var canvas = getCanvas(item.__id).canvas;
          if (!ids.includes(item.__id)) {
              this.renderElement.appendChild(canvas);
              canvas.style.position = "absolute";
              ids.push(item.__id);
          }
          canvas.style.display = item.visible ? "block" : "none";
          canvas.setAttribute("options", JSON.stringify(item));
          canvas.style.zIndex = "".concat(item.z);
          this._drawImage(canvas, options);
      };
      DomRender.prototype._drawImage = function (image, options) {
          var _a;
          image.style.left = "".concat(options.targetX, "px");
          image.style.top = "".concat(options.targetY, "px");
          image.style.transform = "rotate(".concat((_a = options.rotate) !== null && _a !== void 0 ? _a : 0, "deg)");
          image.style.transformOrigin = "0 0";
          if (isDrawOptionA(options)) {
              image.style.width = "".concat(options.targetWidth, "px");
              image.style.height = "".concat(options.targetHeight, "px");
          }
          else {
              image.style.width = "unset";
              image.style.height = "unset";
          }
      };
      DomRender.prototype.apply = function () {
          if (isWide) {
              this.innerElement.style.width = "".concat(config.stageWidth.full, "px");
              this.renderElement.style.left = "0";
          }
          else {
              this.innerElement.style.width = "".concat(config.stageWidth.default, "px");
              this.renderElement.style.left = "".concat((config.canvasWidth - config.stageWidth.default) / -2, "px");
          }
      };
      DomRender.prototype.clear = function () {
          for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
              var id = ids_1[_i];
              var element = document.getElementById(id);
              element && (element.style.display = "none");
          }
          ids = [];
      };
      return DomRender;
  }());

  var processCommentTrigger = function (script, scopes, _, trace) {
      var args = Core.utils.argumentParser(script.arguments, scopes, ["then", "timer"], trace, false);
      addHandler(args.then, scopes, trace, currentTime, args.timer ? Number(Core.execute(args.timer, scopes, trace)) : undefined);
  };

  var processDrawShape = function (script, scopes, _, trace) {
      var args = Core.utils.argumentParser(script.arguments, scopes, [
          "x",
          "y",
          "z",
          "shape",
          "width",
          "height",
          "color",
          "visible",
          "pos",
          "mask",
          "commentmask",
          "alpha",
          "rotation",
          "mover",
      ], trace);
      return new IrShape(args);
  };

  var processDrawText = function (script, scopes, _, trace) {
      var args = Core.utils.argumentParser(script.arguments, scopes, [
          "text",
          "x",
          "y",
          "z",
          "size",
          "pos",
          "color",
          "bold",
          "visible",
          "filter",
          "alpha",
          "mover",
          "scale",
      ], trace);
      return new IrText(args);
  };

  var N = 624;
  var M = 397;
  var MATRIX_A = 0x9908b0df;
  var UPPER_MASK = 0x80000000;
  var LOWER_MASK = 0x7fffffff;
  var mti = N + 1;
  var mt = [];
  var __init_genrand = function (seed) {
      mt[0] = seed & 0xffffffff;
      mti = 1;
      while (mti < N) {
          mt[mti] =
              0x6c078965 * ((mt[mti - 1] || 0) ^ ((mt[mti - 1] || 0) >>> 30)) + mti;
          mt[mti] &= 0xffffffff;
          mti++;
      }
  };
  var __init_by_array = function (seed, length) {
      var key1 = 0;
      var key2 = 1;
      var range = Math.max(N, length);
      __init_genrand(0x012bd6aa);
      for (var i = 0; i < range; i++) {
          var value = getNumber(mt[key1]);
          var lastValue = getNumber(mt[key1 - 1]);
          mt[key1] =
              (value ^ ((lastValue ^ (lastValue >>> 30)) * 0x0019660d)) +
                  (seed[key2] || 0) +
                  key2;
          mt[key1] &= 0xffffffff;
          key1++;
          key2++;
          if (key1 >= N) {
              mt[0] = mt[N - 1] || 0;
              key1 = 1;
          }
          if (key2 >= length) {
              key2 = 0;
          }
      }
      range = N - 1;
      for (var i = 0; i < range; i++) {
          var value = getNumber(mt[key1]);
          var lastValue = getNumber(mt[key1 - 1]);
          mt[key1] = (value ^ ((lastValue ^ (lastValue >>> 30)) * 0x5d588b65)) - key1;
          mt[key1] &= 0xffffffff;
          key1++;
          if (key1 >= N) {
              mt[0] = mt[N - 1] || 0;
              key1 = 1;
          }
      }
      mt[0] = 0x80000000;
  };
  var __genrand_int32 = function () {
      var result;
      if (mti >= N) {
          if (mti === N + 1) {
              __init_genrand(5489);
          }
          var key = 0;
          var index = [0, MATRIX_A];
          while (key < N - M) {
              result =
                  (getNumber(mt[key]) & UPPER_MASK) |
                      (getNumber(mt[key + 1]) & LOWER_MASK);
              mt[key] =
                  getNumber(mt[key + M]) ^ (result >>> 1) ^ getNumber(index[result & 1]);
              key++;
          }
          while (key < N - 1) {
              result =
                  (getNumber(mt[key]) & UPPER_MASK) |
                      (getNumber(mt[key + 1]) & LOWER_MASK);
              mt[key] =
                  getNumber(mt[key + M - N]) ^
                      (result >>> 1) ^
                      getNumber(index[result & 1]);
              key++;
          }
          result =
              (getNumber(mt[N - 1]) & UPPER_MASK) | (getNumber(mt[0]) & LOWER_MASK);
          mt[N - 1] =
              getNumber(mt[M - 1]) ^ (result >>> 1) ^ getNumber(index[result & 1]);
          mti = 0;
      }
      result = getNumber(mt[mti++]);
      result ^= result >>> 11;
      result ^= (result << 7) & 0x9d2c5680;
      result ^= (result << 15) & 0xefc60000;
      result ^= result >>> 18;
      return result;
  };
  var getNumber = function (input) {
      return getValue(input, 0);
  };
  var mt19937 = function (seed) {
      __init_by_array([seed], 1);
      return __genrand_int32();
  };

  var randCalledCount = 0;
  var onload = new Date().getTime();
  var rand = function (value) {
      var seed = 0;
      if (typeof value === "undefined") {
          seed = onload + randCalledCount++;
      }
      else if (typeof value === "number") {
          seed = value;
      }
      else if (typeof value === "string") {
          for (var i = 0; i < value.length; i++) {
              seed = seed * 31 + value.charCodeAt(i);
          }
      }
      else if (typeGuard.comment(value)) {
          seed = (value._vpos * 100 + 1) * value.no;
      }
      var result = mt19937(seed);
      return result < 0 ? -(result + 1) : result;
  };
  var processRand = function (script, scopes, _, trace) {
      if (script.arguments[0]) {
          return rand(Core.execute(script.arguments[0], scopes, trace));
      }
      return rand();
  };

  var processTimer = function (script, scopes, _, trace) {
      var args = Core.utils.argumentParser(script.arguments, scopes, ["timer", "then"], trace, false);
      typeof args.then === "object" &&
          addQueue(args.then, Number(Core.execute(args.timer, scopes, trace)), scopes, __spreadArray([], trace, true));
  };

  var initDefinedFunctions = function () {
      Core.appendDefinedFunctions("commentTrigger", processCommentTrigger);
      Core.appendDefinedFunctions("ctrig", processCommentTrigger);
      Core.appendDefinedFunctions("drawShape", processDrawShape);
      Core.appendDefinedFunctions("drawText", processDrawText);
      Core.appendDefinedFunctions("dt", processDrawText);
      Core.appendDefinedFunctions("rand", processRand);
      Core.appendDefinedFunctions("timer", processTimer);
  };

  var setup = function () {
      Core.resetCore();
      initDefinedFunctions();
      initResultHook();
      resetQueue();
      resetObjects();
      resetHandlers();
      resetScripts();
      resetCanvas();
      resetSnapshot();
  };

  var Niwango = (function () {
      function Niwango(targetElement, comments) {
          setup();
          initConfig();
          if (targetElement.nodeName === "DIV") {
              this.render = new DomRender(targetElement);
          }
          else {
              this.render = new CanvasRender(targetElement);
          }
          this.lastVpos = -1;
          comments.forEach(function (comment) {
              if (comment.message.match(/^\//) && comment._owner) {
                  try {
                      var ast = _assign(_assign({}, Core.parseScript(comment.message, "".concat(comment.no, ".niwascript"))), { __name: "".concat(comment.no, ".niwascript") });
                      addScript(ast, comment._vpos);
                  }
                  catch (e) {
                      console.error(e);
                  }
              }
          });
          setComments(comments);
          setCurrentTime(-1);
          setRender(this.render);
          setGlobalScope({});
          setEnvironmentScope({
              chat: undefined,
              commentColor: null,
              commentPlace: null,
              commentSize: null,
              commentInvisible: null,
              commentReverse: null,
              defaultSage: false,
              postDisabled: null,
              seekDisabled: null,
              isLoaded: true,
              isWide: null,
              lastVideo: "sm1",
              screenWidth: config.stageWidth.default,
              screenHeight: config.stageHeight,
          });
      }
      Niwango.prototype.execute = function (vpos) {
          if (vpos < this.lastVpos) {
              if (vpos > this.lastVpos - 100) {
                  return;
              }
              try {
                  this.lastVpos = restoreSnapshot(vpos);
              }
              catch (e) {
                  this.lastVpos = vpos;
              }
          }
          var lastSnapshotVpos = getLatestSnapshotVpos(vpos);
          for (var i = this.lastVpos; i <= vpos; i++) {
              if (lastSnapshotVpos + config.snapshotIntervalVpos <= i) {
                  lastSnapshotVpos = lastSnapshotVpos + config.snapshotIntervalVpos;
                  try {
                      saveSnapshot(lastSnapshotVpos);
                  }
                  catch (e) {
                      console.error(e);
                  }
              }
              var tasks = __spreadArray(__spreadArray(__spreadArray([], getQueue(i), true), getScripts(i), true), getComments(i), true).sort(nativeSort("time"));
              while (tasks.length > 0) {
                  var queue = tasks.shift();
                  if (!queue)
                      break;
                  setCurrentTime(queue.time);
                  if (i === 0) {
                      setIsWide(!!environmentScope.isWide);
                      environmentScope.screenWidth =
                          config.stageWidth[environmentScope.isWide ? "full" : "default"];
                  }
                  if (queue.type === "comment") {
                      triggerHandlers(queue.comment);
                      continue;
                  }
                  try {
                      var trace = queue.type === "script"
                          ? [queue.script]
                          : __spreadArray(__spreadArray([], queue.trace, true), [_assign({ __queue: queue.type }, queue.script)], false);
                      Core.execute(queue.script, queue.type === "queue"
                          ? queue.scopes
                          : [globalScope, environmentScope, Core.prototypeScope], trace);
                  }
                  catch (e) {
                      console.error(e);
                  }
                  tasks.sort(nativeSort("time"));
              }
          }
          this.lastVpos = vpos;
      };
      Niwango.prototype.draw = function (vpos, clear) {
          if (clear === void 0) { clear = true; }
          if (this.lastVpos === vpos)
              return false;
          this.execute(vpos);
          this._draw(clear);
          return true;
      };
      Niwango.prototype._draw = function (clear) {
          this.render.clear();
          draw();
          this.render.apply(clear);
      };
      Niwango.prototype.addComments = function () {
          var newComments = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              newComments[_i] = arguments[_i];
          }
          newComments.forEach(function (comment) {
              if (comment.message.match(/^\//) && comment._owner) {
                  try {
                      var ast = _assign(_assign({}, Core.parseScript(comment.message, "".concat(comment.no, ".niwascript"))), { __name: "".concat(comment.no, ".niwascript") });
                      addScript(ast, comment._vpos);
                  }
                  catch (e) {
                      console.error(e);
                  }
              }
          });
          setComments(__spreadArray(__spreadArray([], comments, true), newComments, true));
      };
      Niwango.default = Niwango;
      return Niwango;
  }());

  return Niwango;

}));
