(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8900],
  {
    40926: function (t, e, r) {
      "use strict";
      function n() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function o() {
        let t = n();
        return t.subtle || t.webkitSubtle;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowserCryptoAvailable =
          e.getSubtleCrypto =
          e.getBrowerCrypto =
            void 0),
        (e.getBrowerCrypto = n),
        (e.getSubtleCrypto = o),
        (e.isBrowserCryptoAvailable = function () {
          return !!n() && !!o();
        });
    },
    88618: function (t, e, r) {
      "use strict";
      var n = r(83454);
      function o() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function s() {
        return (
          void 0 !== n && void 0 !== n.versions && void 0 !== n.versions.node
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowser = e.isNode = e.isReactNative = void 0),
        (e.isReactNative = o),
        (e.isNode = s),
        (e.isBrowser = function () {
          return !o() && !s();
        });
    },
    1468: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      let n = r(70655);
      n.__exportStar(r(40926), e), n.__exportStar(r(88618), e);
    },
    88900: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return v;
        },
        k: function () {
          return v;
        },
      });
      var n = r(17187),
        o = r(54098),
        s = r.n(o),
        i = r(85094),
        a = r(56186),
        u = Object.defineProperty,
        c = Object.defineProperties,
        f = Object.getOwnPropertyDescriptors,
        p = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable,
        h = (t, e, r) =>
          e in t
            ? u(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        y = (t, e) => {
          for (var r in e || (e = {})) d.call(e, r) && h(t, r, e[r]);
          if (p) for (var r of p(e)) l.call(e, r) && h(t, r, e[r]);
          return t;
        },
        R = (t, e) => c(t, f(e));
      let b = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class v {
        constructor(t, e = !1) {
          if (
            ((this.url = t),
            (this.disableProviderPing = e),
            (this.events = new n.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !(0, a.isHttpUrl)(t))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${t}`
            );
          (this.url = t), (this.disableProviderPing = e);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open(t = this.url) {
          await this.register(t);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(t) {
          this.isAvailable || (await this.register());
          try {
            let e = (0, i.u)(t),
              r = await (await s()(this.url, R(y({}, b), { body: e }))).json();
            this.onPayload({ data: r });
          } catch (e) {
            this.onError(t.id, e);
          }
        }
        async register(t = this.url) {
          if (!(0, a.isHttpUrl)(t))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${t}`
            );
          if (this.registering) {
            let t = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= t ||
                this.events.listenerCount("open") >= t) &&
                this.events.setMaxListeners(t + 1),
              new Promise((t, e) => {
                this.events.once("register_error", (t) => {
                  this.resetMaxListeners(), e(t);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return e(Error("HTTP connection is missing or invalid"));
                    t();
                  });
              })
            );
          }
          (this.url = t), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let e = (0, i.u)({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await s()(t, R(y({}, b), { body: e }));
            }
            this.onOpen();
          } catch (e) {
            let t = this.parseError(e);
            throw (this.events.emit("register_error", t), this.onClose(), t);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(t) {
          if (typeof t.data > "u") return;
          let e = "string" == typeof t.data ? (0, i.D)(t.data) : t.data;
          this.events.emit("payload", e);
        }
        onError(t, e) {
          let r = this.parseError(e),
            n = r.message || r.toString(),
            o = (0, a.formatJsonRpcError)(t, n);
          this.events.emit("payload", o);
        }
        parseError(t, e = this.url) {
          return (0, a.parseConnectionError)(t, e, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
    },
    65041: function (t, e, r) {
      "use strict";
      r.d(e, {
        XR: function () {
          return o;
        },
        x0: function () {
          return i;
        },
      });
      class n {}
      class o extends n {
        constructor(t) {
          super();
        }
      }
      class s extends n {
        constructor() {
          super();
        }
      }
      class i extends s {
        constructor(t) {
          super();
        }
      }
    },
    79806: function (t, e, r) {
      "use strict";
      r.d(e, {
        CA: function () {
          return o;
        },
        JV: function () {
          return a;
        },
        O4: function () {
          return n;
        },
        dQ: function () {
          return s;
        },
        xK: function () {
          return i;
        },
      });
      let n = "INTERNAL_ERROR",
        o = "SERVER_ERROR",
        s = [-32700, -32600, -32601, -32602, -32603],
        i = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [n]: { code: -32603, message: "Internal error" },
          [o]: { code: -32e3, message: "Server error" },
        },
        a = o;
    },
    9698: function (t, e, r) {
      "use strict";
      var n = r(1468);
      r.o(n, "IJsonRpcProvider") &&
        r.d(e, {
          IJsonRpcProvider: function () {
            return n.IJsonRpcProvider;
          },
        }),
        r.o(n, "formatJsonRpcError") &&
          r.d(e, {
            formatJsonRpcError: function () {
              return n.formatJsonRpcError;
            },
          }),
        r.o(n, "formatJsonRpcRequest") &&
          r.d(e, {
            formatJsonRpcRequest: function () {
              return n.formatJsonRpcRequest;
            },
          }),
        r.o(n, "formatJsonRpcResult") &&
          r.d(e, {
            formatJsonRpcResult: function () {
              return n.formatJsonRpcResult;
            },
          }),
        r.o(n, "getBigIntRpcId") &&
          r.d(e, {
            getBigIntRpcId: function () {
              return n.getBigIntRpcId;
            },
          }),
        r.o(n, "isHttpUrl") &&
          r.d(e, {
            isHttpUrl: function () {
              return n.isHttpUrl;
            },
          }),
        r.o(n, "isJsonRpcError") &&
          r.d(e, {
            isJsonRpcError: function () {
              return n.isJsonRpcError;
            },
          }),
        r.o(n, "isJsonRpcRequest") &&
          r.d(e, {
            isJsonRpcRequest: function () {
              return n.isJsonRpcRequest;
            },
          }),
        r.o(n, "isJsonRpcResponse") &&
          r.d(e, {
            isJsonRpcResponse: function () {
              return n.isJsonRpcResponse;
            },
          }),
        r.o(n, "isJsonRpcResult") &&
          r.d(e, {
            isJsonRpcResult: function () {
              return n.isJsonRpcResult;
            },
          }),
        r.o(n, "isLocalhostUrl") &&
          r.d(e, {
            isLocalhostUrl: function () {
              return n.isLocalhostUrl;
            },
          }),
        r.o(n, "isReactNative") &&
          r.d(e, {
            isReactNative: function () {
              return n.isReactNative;
            },
          }),
        r.o(n, "isWsUrl") &&
          r.d(e, {
            isWsUrl: function () {
              return n.isWsUrl;
            },
          }),
        r.o(n, "payloadId") &&
          r.d(e, {
            payloadId: function () {
              return n.payloadId;
            },
          });
    },
    90110: function (t, e, r) {
      "use strict";
      r.d(e, {
        CX: function () {
          return a;
        },
        L2: function () {
          return i;
        },
        by: function () {
          return s;
        },
        i5: function () {
          return o;
        },
      });
      var n = r(79806);
      function o(t) {
        return n.dQ.includes(t);
      }
      function s(t) {
        return Object.keys(n.xK).includes(t) ? n.xK[t] : n.xK[n.JV];
      }
      function i(t) {
        let e = Object.values(n.xK).find((e) => e.code === t);
        return e || n.xK[n.JV];
      }
      function a(t, e, r) {
        return t.message.includes("getaddrinfo ENOTFOUND") ||
          t.message.includes("connect ECONNREFUSED")
          ? Error(`Unavailable ${r} RPC url at ${e}`)
          : t;
      }
    },
    71937: function (t, e, r) {
      "use strict";
      r.d(e, {
        CS: function () {
          return i;
        },
        RI: function () {
          return c;
        },
        o0: function () {
          return s;
        },
        sT: function () {
          return a;
        },
        tm: function () {
          return u;
        },
      });
      var n = r(90110),
        o = r(79806);
      function s(t = 3) {
        let e = Date.now() * Math.pow(10, t);
        return e + Math.floor(Math.random() * Math.pow(10, t));
      }
      function i(t = 6) {
        return BigInt(s(t));
      }
      function a(t, e, r) {
        return { id: r || s(), jsonrpc: "2.0", method: t, params: e };
      }
      function u(t, e) {
        return { id: t, jsonrpc: "2.0", result: e };
      }
      function c(t, e, r) {
        var s;
        return {
          id: t,
          jsonrpc: "2.0",
          error:
            void 0 === (s = e)
              ? (0, n.by)(o.O4)
              : ("string" == typeof s &&
                  (s = Object.assign(Object.assign({}, (0, n.by)(o.CA)), {
                    message: s,
                  })),
                void 0 !== r && (s.data = r),
                (0, n.i5)(s.code) && (s = (0, n.L2)(s.code)),
                s),
        };
      }
    },
    56186: function (t, e, r) {
      "use strict";
      r.d(e, {
        IJsonRpcProvider: function () {
          return i.x0;
        },
        formatJsonRpcError: function () {
          return s.RI;
        },
        formatJsonRpcRequest: function () {
          return s.sT;
        },
        formatJsonRpcResult: function () {
          return s.tm;
        },
        getBigIntRpcId: function () {
          return s.CS;
        },
        isHttpUrl: function () {
          return a.jK;
        },
        isJsonRpcError: function () {
          return u.jg;
        },
        isJsonRpcRequest: function () {
          return u.DW;
        },
        isJsonRpcResponse: function () {
          return u.u;
        },
        isJsonRpcResult: function () {
          return u.k4;
        },
        isLocalhostUrl: function () {
          return a.JF;
        },
        isWsUrl: function () {
          return a.UZ;
        },
        parseConnectionError: function () {
          return n.CX;
        },
        payloadId: function () {
          return s.o0;
        },
      }),
        r(79806);
      var n = r(90110),
        o = r(9698);
      r.o(o, "IJsonRpcProvider") &&
        r.d(e, {
          IJsonRpcProvider: function () {
            return o.IJsonRpcProvider;
          },
        }),
        r.o(o, "formatJsonRpcError") &&
          r.d(e, {
            formatJsonRpcError: function () {
              return o.formatJsonRpcError;
            },
          }),
        r.o(o, "formatJsonRpcRequest") &&
          r.d(e, {
            formatJsonRpcRequest: function () {
              return o.formatJsonRpcRequest;
            },
          }),
        r.o(o, "formatJsonRpcResult") &&
          r.d(e, {
            formatJsonRpcResult: function () {
              return o.formatJsonRpcResult;
            },
          }),
        r.o(o, "getBigIntRpcId") &&
          r.d(e, {
            getBigIntRpcId: function () {
              return o.getBigIntRpcId;
            },
          }),
        r.o(o, "isHttpUrl") &&
          r.d(e, {
            isHttpUrl: function () {
              return o.isHttpUrl;
            },
          }),
        r.o(o, "isJsonRpcError") &&
          r.d(e, {
            isJsonRpcError: function () {
              return o.isJsonRpcError;
            },
          }),
        r.o(o, "isJsonRpcRequest") &&
          r.d(e, {
            isJsonRpcRequest: function () {
              return o.isJsonRpcRequest;
            },
          }),
        r.o(o, "isJsonRpcResponse") &&
          r.d(e, {
            isJsonRpcResponse: function () {
              return o.isJsonRpcResponse;
            },
          }),
        r.o(o, "isJsonRpcResult") &&
          r.d(e, {
            isJsonRpcResult: function () {
              return o.isJsonRpcResult;
            },
          }),
        r.o(o, "isLocalhostUrl") &&
          r.d(e, {
            isLocalhostUrl: function () {
              return o.isLocalhostUrl;
            },
          }),
        r.o(o, "isReactNative") &&
          r.d(e, {
            isReactNative: function () {
              return o.isReactNative;
            },
          }),
        r.o(o, "isWsUrl") &&
          r.d(e, {
            isWsUrl: function () {
              return o.isWsUrl;
            },
          }),
        r.o(o, "payloadId") &&
          r.d(e, {
            payloadId: function () {
              return o.payloadId;
            },
          });
      var s = r(71937),
        i = r(26043),
        a = r(46119),
        u = r(84733);
    },
    26043: function (t, e, r) {
      "use strict";
      r.d(e, {
        x0: function () {
          return n.x0;
        },
      });
      var n = r(65041);
    },
    46119: function (t, e, r) {
      "use strict";
      function n(t, e) {
        let r = (function (t) {
          let e = t.match(RegExp(/^\w+:/, "gi"));
          if (e && e.length) return e[0];
        })(t);
        return void 0 !== r && new RegExp(e).test(r);
      }
      function o(t) {
        return n(t, "^https?:");
      }
      function s(t) {
        return n(t, "^wss?:");
      }
      function i(t) {
        return RegExp("wss?://localhost(:d{2,5})?").test(t);
      }
      r.d(e, {
        JF: function () {
          return i;
        },
        UZ: function () {
          return s;
        },
        jK: function () {
          return o;
        },
      });
    },
    84733: function (t, e, r) {
      "use strict";
      function n(t) {
        return (
          "object" == typeof t &&
          "id" in t &&
          "jsonrpc" in t &&
          "2.0" === t.jsonrpc
        );
      }
      function o(t) {
        return n(t) && "method" in t;
      }
      function s(t) {
        return n(t) && (i(t) || a(t));
      }
      function i(t) {
        return "result" in t;
      }
      function a(t) {
        return "error" in t;
      }
      r.d(e, {
        DW: function () {
          return o;
        },
        jg: function () {
          return a;
        },
        k4: function () {
          return i;
        },
        u: function () {
          return s;
        },
      });
    },
    85094: function (t, e, r) {
      "use strict";
      r.d(e, {
        D: function () {
          return s;
        },
        u: function () {
          return i;
        },
      });
      let n = (t) =>
          JSON.stringify(t, (t, e) =>
            "bigint" == typeof e ? e.toString() + "n" : e
          ),
        o = (t) => {
          let e = t.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(e, (t, e) => {
            let r = "string" == typeof e && e.match(/^\d+n$/);
            return r ? BigInt(e.substring(0, e.length - 1)) : e;
          });
        };
      function s(t) {
        if ("string" != typeof t)
          throw Error(`Cannot safe json parse value of type ${typeof t}`);
        try {
          return o(t);
        } catch (e) {
          return t;
        }
      }
      function i(t) {
        return "string" == typeof t ? t : n(t) || "";
      }
    },
    54098: function (t, e) {
      var r = "undefined" != typeof self ? self : this,
        n = (function () {
          function t() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (t.prototype = r), new t();
        })();
      (function (t) {
        var e = {
          searchParams: "URLSearchParams" in n,
          iterable: "Symbol" in n && "iterator" in Symbol,
          blob:
            "FileReader" in n &&
            "Blob" in n &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (t) {
                return !1;
              }
            })(),
          formData: "FormData" in n,
          arrayBuffer: "ArrayBuffer" in n,
        };
        if (e.arrayBuffer)
          var r = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            o =
              ArrayBuffer.isView ||
              function (t) {
                return t && r.indexOf(Object.prototype.toString.call(t)) > -1;
              };
        function s(t) {
          if (
            ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
          )
            throw TypeError("Invalid character in header field name");
          return t.toLowerCase();
        }
        function i(t) {
          return "string" != typeof t && (t = String(t)), t;
        }
        function a(t) {
          var r = {
            next: function () {
              var e = t.shift();
              return { done: void 0 === e, value: e };
            },
          };
          return (
            e.iterable &&
              (r[Symbol.iterator] = function () {
                return r;
              }),
            r
          );
        }
        function u(t) {
          (this.map = {}),
            t instanceof u
              ? t.forEach(function (t, e) {
                  this.append(e, t);
                }, this)
              : Array.isArray(t)
              ? t.forEach(function (t) {
                  this.append(t[0], t[1]);
                }, this)
              : t &&
                Object.getOwnPropertyNames(t).forEach(function (e) {
                  this.append(e, t[e]);
                }, this);
        }
        function c(t) {
          if (t.bodyUsed) return Promise.reject(TypeError("Already read"));
          t.bodyUsed = !0;
        }
        function f(t) {
          return new Promise(function (e, r) {
            (t.onload = function () {
              e(t.result);
            }),
              (t.onerror = function () {
                r(t.error);
              });
          });
        }
        function p(t) {
          var e = new FileReader(),
            r = f(e);
          return e.readAsArrayBuffer(t), r;
        }
        function d(t) {
          if (t.slice) return t.slice(0);
          var e = new Uint8Array(t.byteLength);
          return e.set(new Uint8Array(t)), e.buffer;
        }
        function l() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (t) {
              if (((this._bodyInit = t), t)) {
                if ("string" == typeof t) this._bodyText = t;
                else if (e.blob && Blob.prototype.isPrototypeOf(t))
                  this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t))
                  this._bodyFormData = t;
                else if (
                  e.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(t)
                )
                  this._bodyText = t.toString();
                else {
                  var r;
                  e.arrayBuffer &&
                  e.blob &&
                  (r = t) &&
                  DataView.prototype.isPrototypeOf(r)
                    ? ((this._bodyArrayBuffer = d(t.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : e.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(t) || o(t))
                    ? (this._bodyArrayBuffer = d(t))
                    : (this._bodyText = t = Object.prototype.toString.call(t));
                }
              } else this._bodyText = "";
              !this.headers.get("content-type") &&
                ("string" == typeof t
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : e.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(t) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            e.blob &&
              ((this.blob = function () {
                var t = c(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? c(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(p);
              })),
            (this.text = function () {
              var t,
                e,
                r,
                n = c(this);
              if (n) return n;
              if (this._bodyBlob)
                return (
                  (t = this._bodyBlob),
                  (r = f((e = new FileReader()))),
                  e.readAsText(t),
                  r
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (t) {
                    for (
                      var e = new Uint8Array(t), r = Array(e.length), n = 0;
                      n < e.length;
                      n++
                    )
                      r[n] = String.fromCharCode(e[n]);
                    return r.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            e.formData &&
              (this.formData = function () {
                return this.text().then(R);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (u.prototype.append = function (t, e) {
          (t = s(t)), (e = i(e));
          var r = this.map[t];
          this.map[t] = r ? r + ", " + e : e;
        }),
          (u.prototype.delete = function (t) {
            delete this.map[s(t)];
          }),
          (u.prototype.get = function (t) {
            return (t = s(t)), this.has(t) ? this.map[t] : null;
          }),
          (u.prototype.has = function (t) {
            return this.map.hasOwnProperty(s(t));
          }),
          (u.prototype.set = function (t, e) {
            this.map[s(t)] = i(e);
          }),
          (u.prototype.forEach = function (t, e) {
            for (var r in this.map)
              this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
          }),
          (u.prototype.keys = function () {
            var t = [];
            return (
              this.forEach(function (e, r) {
                t.push(r);
              }),
              a(t)
            );
          }),
          (u.prototype.values = function () {
            var t = [];
            return (
              this.forEach(function (e) {
                t.push(e);
              }),
              a(t)
            );
          }),
          (u.prototype.entries = function () {
            var t = [];
            return (
              this.forEach(function (e, r) {
                t.push([r, e]);
              }),
              a(t)
            );
          }),
          e.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
        var h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function y(t, e) {
          var r,
            n,
            o = (e = e || {}).body;
          if (t instanceof y) {
            if (t.bodyUsed) throw TypeError("Already read");
            (this.url = t.url),
              (this.credentials = t.credentials),
              e.headers || (this.headers = new u(t.headers)),
              (this.method = t.method),
              (this.mode = t.mode),
              (this.signal = t.signal),
              o ||
                null == t._bodyInit ||
                ((o = t._bodyInit), (t.bodyUsed = !0));
          } else this.url = String(t);
          if (
            ((this.credentials =
              e.credentials || this.credentials || "same-origin"),
            (e.headers || !this.headers) && (this.headers = new u(e.headers)),
            (this.method =
              ((n = (r = e.method || this.method || "GET").toUpperCase()),
              h.indexOf(n) > -1 ? n : r)),
            (this.mode = e.mode || this.mode || null),
            (this.signal = e.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && o)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(o);
        }
        function R(t) {
          var e = new FormData();
          return (
            t
              .trim()
              .split("&")
              .forEach(function (t) {
                if (t) {
                  var r = t.split("="),
                    n = r.shift().replace(/\+/g, " "),
                    o = r.join("=").replace(/\+/g, " ");
                  e.append(decodeURIComponent(n), decodeURIComponent(o));
                }
              }),
            e
          );
        }
        function b(t, e) {
          e || (e = {}),
            (this.type = "default"),
            (this.status = void 0 === e.status ? 200 : e.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in e ? e.statusText : "OK"),
            (this.headers = new u(e.headers)),
            (this.url = e.url || ""),
            this._initBody(t);
        }
        (y.prototype.clone = function () {
          return new y(this, { body: this._bodyInit });
        }),
          l.call(y.prototype),
          l.call(b.prototype),
          (b.prototype.clone = function () {
            return new b(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new u(this.headers),
              url: this.url,
            });
          }),
          (b.error = function () {
            var t = new b(null, { status: 0, statusText: "" });
            return (t.type = "error"), t;
          });
        var v = [301, 302, 303, 307, 308];
        (b.redirect = function (t, e) {
          if (-1 === v.indexOf(e)) throw RangeError("Invalid status code");
          return new b(null, { status: e, headers: { location: t } });
        }),
          (t.DOMException = n.DOMException);
        try {
          new t.DOMException();
        } catch (e) {
          (t.DOMException = function (t, e) {
            (this.message = t), (this.name = e);
            var r = Error(t);
            this.stack = r.stack;
          }),
            (t.DOMException.prototype = Object.create(Error.prototype)),
            (t.DOMException.prototype.constructor = t.DOMException);
        }
        function m(r, n) {
          return new Promise(function (o, s) {
            var i = new y(r, n);
            if (i.signal && i.signal.aborted)
              return s(new t.DOMException("Aborted", "AbortError"));
            var a = new XMLHttpRequest();
            function c() {
              a.abort();
            }
            (a.onload = function () {
              var t,
                e,
                r = {
                  status: a.status,
                  statusText: a.statusText,
                  headers:
                    ((t = a.getAllResponseHeaders() || ""),
                    (e = new u()),
                    t
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split(/\r?\n/)
                      .forEach(function (t) {
                        var r = t.split(":"),
                          n = r.shift().trim();
                        if (n) {
                          var o = r.join(":").trim();
                          e.append(n, o);
                        }
                      }),
                    e),
                };
              r.url =
                "responseURL" in a
                  ? a.responseURL
                  : r.headers.get("X-Request-URL");
              var n = "response" in a ? a.response : a.responseText;
              o(new b(n, r));
            }),
              (a.onerror = function () {
                s(TypeError("Network request failed"));
              }),
              (a.ontimeout = function () {
                s(TypeError("Network request failed"));
              }),
              (a.onabort = function () {
                s(new t.DOMException("Aborted", "AbortError"));
              }),
              a.open(i.method, i.url, !0),
              "include" === i.credentials
                ? (a.withCredentials = !0)
                : "omit" === i.credentials && (a.withCredentials = !1),
              "responseType" in a && e.blob && (a.responseType = "blob"),
              i.headers.forEach(function (t, e) {
                a.setRequestHeader(e, t);
              }),
              i.signal &&
                (i.signal.addEventListener("abort", c),
                (a.onreadystatechange = function () {
                  4 === a.readyState &&
                    i.signal.removeEventListener("abort", c);
                })),
              a.send(void 0 === i._bodyInit ? null : i._bodyInit);
          });
        }
        (m.polyfill = !0),
          n.fetch ||
            ((n.fetch = m), (n.Headers = u), (n.Request = y), (n.Response = b)),
          (t.Headers = u),
          (t.Request = y),
          (t.Response = b),
          (t.fetch = m),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })({}),
        (n.fetch.ponyfill = !0),
        delete n.fetch.polyfill,
        ((e = n.fetch).default = n.fetch),
        (e.fetch = n.fetch),
        (e.Headers = n.Headers),
        (e.Request = n.Request),
        (e.Response = n.Response),
        (t.exports = e);
    },
  },
]);
