!function t(e, n) {
  'object' == typeof exports && 'object' == typeof module ? module.exports = n()  : 'function' == typeof define && define.amd ? define([], n)  : 'object' == typeof exports ? exports.KerasJS = n()  : e.KerasJS = n()
}('undefined' != typeof self ? self : this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        i: r,
        l: !1,
        exports: {
        }
      };
      return t[r].call(o.exports, o, o.exports, e),
      o.l = !0,
      o.exports
    }
    var n = {
    };
    return e.m = t,
    e.c = n,
    e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    },
    e.n = function (t) {
      var n = t && t.__esModule ? function e() {
        return t.default
      }
      : function e() {
        return t
      };
      return e.d(n, 'a', n),
      n
    },
    e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    },
    e.p = '',
    e(e.s = 169)
  }([function (t, e, n) {
    var r = n(3),
    o = n(34),
    i = n(13),
    a = n(22),
    s = n(19),
    u = 'prototype',
    c = function (t, e, n) {
      var l = t & c.F,
      p = t & c.G,
      h = t & c.S,
      f = t & c.P,
      d = t & c.B,
      m = p ? r : h ? r[e] || (r[e] = {
      })  : (r[e] || {
      }) [u],
      y = p ? o : o[e] || (o[e] = {
      }),
      v = y[u] || (y[u] = {
      }),
      g,
      _,
      b,
      x;
      p && (n = e);
      for (g in n) _ = !l && m && void 0 !== m[g],
      b = (_ ? m : n) [g],
      x = d && _ ? s(b, r)  : f && 'function' == typeof b ? s(Function.call, b)  : b,
      m && a(m, g, b, t & c.U),
      y[g] != b && i(y, g, x),
      f && v[g] != b && (v[g] = b)
    };
    r.core = o,
    c.F = 1,
    c.G = 2,
    c.S = 4,
    c.P = 8,
    c.B = 16,
    c.W = 32,
    c.U = 64,
    c.R = 128,
    t.exports = c
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      if (!t) return s;
      for (var e = 0; e < t.args.length; ++e) {
        var n = t.args[e];
        t.args[e] = 0 === e ? {
          name: n,
          lvalue: !0,
          rvalue: !!t.rvalue,
          count: t.count || 1
        }
         : {
          name: n,
          lvalue: !1,
          rvalue: !0,
          count: 1
        }
      }
      return t.thisVars || (t.thisVars = [
      ]),
      t.localVars || (t.localVars = [
      ]),
      t
    }
    function o(t) {
      return a({
        args: t.args,
        pre: r(t.pre),
        body: r(t.body),
        post: r(t.proc),
        funcName: t.funcName
      })
    }
    function i(t) {
      for (var e = [
      ], n = 0; n < t.args.length; ++n) e.push('a' + n);
      return new Function('P', [
        'return function ',
        t.funcName,
        '_ndarrayops(',
        e.join(','),
        ') {P(',
        e.join(','),
        ');return a0}'
      ].join('')) (o(t))
    }
    var a = n(159),
    s = {
      body: '',
      args: [
      ],
      thisVars: [
      ],
      localVars: [
      ]
    },
    u = {
      add: '+',
      sub: '-',
      mul: '*',
      div: '/',
      mod: '%',
      band: '&',
      bor: '|',
      bxor: '^',
      lshift: '<<',
      rshift: '>>',
      rrshift: '>>>'
    };
    !function () {
      for (var t in u) {
        var n = u[t];
        e[t] = i({
          args: [
            'array',
            'array',
            'array'
          ],
          body: {
            args: [
              'a',
              'b',
              'c'
            ],
            body: 'a=b' + n + 'c'
          },
          funcName: t
        }),
        e[t + 'eq'] = i({
          args: [
            'array',
            'array'
          ],
          body: {
            args: [
              'a',
              'b'
            ],
            body: 'a' + n + '=b'
          },
          rvalue: !0,
          funcName: t + 'eq'
        }),
        e[t + 's'] = i({
          args: [
            'array',
            'array',
            'scalar'
          ],
          body: {
            args: [
              'a',
              'b',
              's'
            ],
            body: 'a=b' + n + 's'
          },
          funcName: t + 's'
        }),
        e[t + 'seq'] = i({
          args: [
            'array',
            'scalar'
          ],
          body: {
            args: [
              'a',
              's'
            ],
            body: 'a' + n + '=s'
          },
          rvalue: !0,
          funcName: t + 'seq'
        })
      }
    }();
    var c = {
      not: '!',
      bnot: '~',
      neg: '-',
      recip: '1.0/'
    };
    !function () {
      for (var t in c) {
        var n = c[t];
        e[t] = i({
          args: [
            'array',
            'array'
          ],
          body: {
            args: [
              'a',
              'b'
            ],
            body: 'a=' + n + 'b'
          },
          funcName: t
        }),
        e[t + 'eq'] = i({
          args: [
            'array'
          ],
          body: {
            args: [
              'a'
            ],
            body: 'a=' + n + 'a'
          },
          rvalue: !0,
          count: 2,
          funcName: t + 'eq'
        })
      }
    }();
    var l = {
      and: '&&',
      or: '||',
      eq: '===',
      neq: '!==',
      lt: '<',
      gt: '>',
      leq: '<=',
      geq: '>='
    };
    !function () {
      for (var t in l) {
        var n = l[t];
        e[t] = i({
          args: [
            'array',
            'array',
            'array'
          ],
          body: {
            args: [
              'a',
              'b',
              'c'
            ],
            body: 'a=b' + n + 'c'
          },
          funcName: t
        }),
        e[t + 's'] = i({
          args: [
            'array',
            'array',
            'scalar'
          ],
          body: {
            args: [
              'a',
              'b',
              's'
            ],
            body: 'a=b' + n + 's'
          },
          funcName: t + 's'
        }),
        e[t + 'eq'] = i({
          args: [
            'array',
            'array'
          ],
          body: {
            args: [
              'a',
              'b'
            ],
            body: 'a=a' + n + 'b'
          },
          rvalue: !0,
          count: 2,
          funcName: t + 'eq'
        }),
        e[t + 'seq'] = i({
          args: [
            'array',
            'scalar'
          ],
          body: {
            args: [
              'a',
              's'
            ],
            body: 'a=a' + n + 's'
          },
          rvalue: !0,
          count: 2,
          funcName: t + 'seq'
        })
      }
    }();
    var p = [
      'abs',
      'acos',
      'asin',
      'atan',
      'ceil',
      'cos',
      'exp',
      'floor',
      'log',
      'round',
      'sin',
      'sqrt',
      'tan'
    ];
    !function () {
      for (var t = 0; t < p.length; ++t) {
        var n = p[t];
        e[n] = i({
          args: [
            'array',
            'array'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b'
            ],
            body: 'a=this_f(b)',
            thisVars: [
              'this_f'
            ]
          },
          funcName: n
        }),
        e[n + 'eq'] = i({
          args: [
            'array'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a'
            ],
            body: 'a=this_f(a)',
            thisVars: [
              'this_f'
            ]
          },
          rvalue: !0,
          count: 2,
          funcName: n + 'eq'
        })
      }
    }();
    var h = [
      'max',
      'min',
      'atan2',
      'pow'
    ];
    !function () {
      for (var t = 0; t < h.length; ++t) {
        var n = h[t];
        e[n] = i({
          args: [
            'array',
            'array',
            'array'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b',
              'c'
            ],
            body: 'a=this_f(b,c)',
            thisVars: [
              'this_f'
            ]
          },
          funcName: n
        }),
        e[n + 's'] = i({
          args: [
            'array',
            'array',
            'scalar'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b',
              'c'
            ],
            body: 'a=this_f(b,c)',
            thisVars: [
              'this_f'
            ]
          },
          funcName: n + 's'
        }),
        e[n + 'eq'] = i({
          args: [
            'array',
            'array'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b'
            ],
            body: 'a=this_f(a,b)',
            thisVars: [
              'this_f'
            ]
          },
          rvalue: !0,
          count: 2,
          funcName: n + 'eq'
        }),
        e[n + 'seq'] = i({
          args: [
            'array',
            'scalar'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b'
            ],
            body: 'a=this_f(a,b)',
            thisVars: [
              'this_f'
            ]
          },
          rvalue: !0,
          count: 2,
          funcName: n + 'seq'
        })
      }
    }();
    var f = [
      'atan2',
      'pow'
    ];
    !function () {
      for (var t = 0; t < f.length; ++t) {
        var n = f[t];
        e[n + 'op'] = i({
          args: [
            'array',
            'array',
            'array'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b',
              'c'
            ],
            body: 'a=this_f(c,b)',
            thisVars: [
              'this_f'
            ]
          },
          funcName: n + 'op'
        }),
        e[n + 'ops'] = i({
          args: [
            'array',
            'array',
            'scalar'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b',
              'c'
            ],
            body: 'a=this_f(c,b)',
            thisVars: [
              'this_f'
            ]
          },
          funcName: n + 'ops'
        }),
        e[n + 'opeq'] = i({
          args: [
            'array',
            'array'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b'
            ],
            body: 'a=this_f(b,a)',
            thisVars: [
              'this_f'
            ]
          },
          rvalue: !0,
          count: 2,
          funcName: n + 'opeq'
        }),
        e[n + 'opseq'] = i({
          args: [
            'array',
            'scalar'
          ],
          pre: {
            args: [
            ],
            body: 'this_f=Math.' + n,
            thisVars: [
              'this_f'
            ]
          },
          body: {
            args: [
              'a',
              'b'
            ],
            body: 'a=this_f(b,a)',
            thisVars: [
              'this_f'
            ]
          },
          rvalue: !0,
          count: 2,
          funcName: n + 'opseq'
        })
      }
    }(),
    e.any = a({
      args: [
        'array'
      ],
      pre: s,
      body: {
        args: [
          {
            name: 'a',
            lvalue: !1,
            rvalue: !0,
            count: 1
          }
        ],
        body: 'if(a){return true}',
        localVars: [
        ],
        thisVars: [
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
        ],
        body: 'return false'
      },
      funcName: 'any'
    }),
    e.all = a({
      args: [
        'array'
      ],
      pre: s,
      body: {
        args: [
          {
            name: 'x',
            lvalue: !1,
            rvalue: !0,
            count: 1
          }
        ],
        body: 'if(!x){return false}',
        localVars: [
        ],
        thisVars: [
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
        ],
        body: 'return true'
      },
      funcName: 'all'
    }),
    e.sum = a({
      args: [
        'array'
      ],
      pre: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'this_s=0'
      },
      body: {
        args: [
          {
            name: 'a',
            lvalue: !1,
            rvalue: !0,
            count: 1
          }
        ],
        body: 'this_s+=a',
        localVars: [
        ],
        thisVars: [
          'this_s'
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'return this_s'
      },
      funcName: 'sum'
    }),
    e.prod = a({
      args: [
        'array'
      ],
      pre: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'this_s=1'
      },
      body: {
        args: [
          {
            name: 'a',
            lvalue: !1,
            rvalue: !0,
            count: 1
          }
        ],
        body: 'this_s*=a',
        localVars: [
        ],
        thisVars: [
          'this_s'
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'return this_s'
      },
      funcName: 'prod'
    }),
    e.norm2squared = a({
      args: [
        'array'
      ],
      pre: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'this_s=0'
      },
      body: {
        args: [
          {
            name: 'a',
            lvalue: !1,
            rvalue: !0,
            count: 2
          }
        ],
        body: 'this_s+=a*a',
        localVars: [
        ],
        thisVars: [
          'this_s'
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'return this_s'
      },
      funcName: 'norm2squared'
    }),
    e.norm2 = a({
      args: [
        'array'
      ],
      pre: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'this_s=0'
      },
      body: {
        args: [
          {
            name: 'a',
            lvalue: !1,
            rvalue: !0,
            count: 2
          }
        ],
        body: 'this_s+=a*a',
        localVars: [
        ],
        thisVars: [
          'this_s'
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'return Math.sqrt(this_s)'
      },
      funcName: 'norm2'
    }),
    e.norminf = a({
      args: [
        'array'
      ],
      pre: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'this_s=0'
      },
      body: {
        args: [
          {
            name: 'a',
            lvalue: !1,
            rvalue: !0,
            count: 4
          }
        ],
        body: 'if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}',
        localVars: [
        ],
        thisVars: [
          'this_s'
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'return this_s'
      },
      funcName: 'norminf'
    }),
    e.norm1 = a({
      args: [
        'array'
      ],
      pre: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'this_s=0'
      },
      body: {
        args: [
          {
            name: 'a',
            lvalue: !1,
            rvalue: !0,
            count: 3
          }
        ],
        body: 'this_s+=a<0?-a:a',
        localVars: [
        ],
        thisVars: [
          'this_s'
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
          'this_s'
        ],
        body: 'return this_s'
      },
      funcName: 'norm1'
    }),
    e.sup = a({
      args: [
        'array'
      ],
      pre: {
        body: 'this_h=-Infinity',
        args: [
        ],
        thisVars: [
          'this_h'
        ],
        localVars: [
        ]
      },
      body: {
        body: 'if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_',
        args: [
          {
            name: '_inline_1_arg0_',
            lvalue: !1,
            rvalue: !0,
            count: 2
          }
        ],
        thisVars: [
          'this_h'
        ],
        localVars: [
        ]
      },
      post: {
        body: 'return this_h',
        args: [
        ],
        thisVars: [
          'this_h'
        ],
        localVars: [
        ]
      }
    }),
    e.inf = a({
      args: [
        'array'
      ],
      pre: {
        body: 'this_h=Infinity',
        args: [
        ],
        thisVars: [
          'this_h'
        ],
        localVars: [
        ]
      },
      body: {
        body: 'if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_',
        args: [
          {
            name: '_inline_1_arg0_',
            lvalue: !1,
            rvalue: !0,
            count: 2
          }
        ],
        thisVars: [
          'this_h'
        ],
        localVars: [
        ]
      },
      post: {
        body: 'return this_h',
        args: [
        ],
        thisVars: [
          'this_h'
        ],
        localVars: [
        ]
      }
    }),
    e.argmin = a({
      args: [
        'index',
        'array',
        'shape'
      ],
      pre: {
        body: '{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}',
        args: [
          {
            name: '_inline_0_arg0_',
            lvalue: !1,
            rvalue: !1,
            count: 0
          },
          {
            name: '_inline_0_arg1_',
            lvalue: !1,
            rvalue: !1,
            count: 0
          },
          {
            name: '_inline_0_arg2_',
            lvalue: !1,
            rvalue: !0,
            count: 1
          }
        ],
        thisVars: [
          'this_i',
          'this_v'
        ],
        localVars: [
        ]
      },
      body: {
        body: '{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}',
        args: [
          {
            name: '_inline_1_arg0_',
            lvalue: !1,
            rvalue: !0,
            count: 2
          },
          {
            name: '_inline_1_arg1_',
            lvalue: !1,
            rvalue: !0,
            count: 2
          }
        ],
        thisVars: [
          'this_i',
          'this_v'
        ],
        localVars: [
          '_inline_1_k'
        ]
      },
      post: {
        body: '{return this_i}',
        args: [
        ],
        thisVars: [
          'this_i'
        ],
        localVars: [
        ]
      }
    }),
    e.argmax = a({
      args: [
        'index',
        'array',
        'shape'
      ],
      pre: {
        body: '{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}',
        args: [
          {
            name: '_inline_0_arg0_',
            lvalue: !1,
            rvalue: !1,
            count: 0
          },
          {
            name: '_inline_0_arg1_',
            lvalue: !1,
            rvalue: !1,
            count: 0
          },
          {
            name: '_inline_0_arg2_',
            lvalue: !1,
            rvalue: !0,
            count: 1
          }
        ],
        thisVars: [
          'this_i',
          'this_v'
        ],
        localVars: [
        ]
      },
      body: {
        body: '{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}',
        args: [
          {
            name: '_inline_1_arg0_',
            lvalue: !1,
            rvalue: !0,
            count: 2
          },
          {
            name: '_inline_1_arg1_',
            lvalue: !1,
            rvalue: !0,
            count: 2
          }
        ],
        thisVars: [
          'this_i',
          'this_v'
        ],
        localVars: [
          '_inline_1_k'
        ]
      },
      post: {
        body: '{return this_i}',
        args: [
        ],
        thisVars: [
          'this_i'
        ],
        localVars: [
        ]
      }
    }),
    e.random = i({
      args: [
        'array'
      ],
      pre: {
        args: [
        ],
        body: 'this_f=Math.random',
        thisVars: [
          'this_f'
        ]
      },
      body: {
        args: [
          'a'
        ],
        body: 'a=this_f()',
        thisVars: [
          'this_f'
        ]
      },
      funcName: 'random'
    }),
    e.assign = i({
      args: [
        'array',
        'array'
      ],
      body: {
        args: [
          'a',
          'b'
        ],
        body: 'a=b'
      },
      funcName: 'assign'
    }),
    e.assigns = i({
      args: [
        'array',
        'scalar'
      ],
      body: {
        args: [
          'a',
          'b'
        ],
        body: 'a=b'
      },
      funcName: 'assigns'
    }),
    e.equals = a({
      args: [
        'array',
        'array'
      ],
      pre: s,
      body: {
        args: [
          {
            name: 'x',
            lvalue: !1,
            rvalue: !0,
            count: 1
          },
          {
            name: 'y',
            lvalue: !1,
            rvalue: !0,
            count: 1
          }
        ],
        body: 'if(x!==y){return false}',
        localVars: [
        ],
        thisVars: [
        ]
      },
      post: {
        args: [
        ],
        localVars: [
        ],
        thisVars: [
        ],
        body: 'return true'
      },
      funcName: 'equals'
    })
  },
  function (t, e) {
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t
    }
  },
  function (t, e) {
    var n = t.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this') ();
    'number' == typeof __g && (__g = n)
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = function (t) {
      if (!r(t)) throw TypeError(t + ' is not an object!');
      return t
    }
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  },
  function (t, e, n) {
    var r = n(84) ('wks'),
    o = n(27),
    i = n(3).Symbol,
    a = 'function' == typeof i;
    (t.exports = function (t) {
      return r[t] || (r[t] = a && i[t] || (a ? i : o) ('Symbol.' + t))
    }).store = r
  },
  function (t, e, n) {
    var r = n(4),
    o = n(110),
    i = n(47),
    a = Object.defineProperty;
    e.f = n(10) ? Object.defineProperty : function t(e, n, s) {
      if (r(e), n = i(n, !0), r(s), o) try {
        return a(e, n, s)
      } catch (t) {
      }
      if ('get' in s || 'set' in s) throw TypeError('Accessors not supported!');
      return 'value' in s && (e[n] = s.value),
      e
    }
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      for (var e in t) a.indexOf(e) < 0 && s.indexOf(e) < 0 && console.warn('cwise: Unknown argument \'' + e + '\' passed to expression compiler');
      for (var n = 0; n < a.length; ++n) if (!t[a[n]]) throw new Error('cwise: Missing argument: ' + a[n]);
      return i({
        args: t.args,
        pre: o(t.pre || function () {
        }),
        body: o(t.body),
        post: o(t.post || function () {
        }),
        debug: !!t.printCode,
        funcName: t.funcName || t.body.name || 'cwise',
        blockSize: t.blockSize || 64
      })
    }
    var o = n(418),
    i = n(159),
    a = [
      'args',
      'body'
    ],
    s = [
      'pre',
      'post',
      'printCode',
      'funcName',
      'blockSize'
    ];
    t.exports = r
  },
  function (t, e, n) {
    var r = n(28),
    o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991)  : 0
    }
  },
  function (t, e, n) {
    t.exports = !n(5) (function () {
      return 7 != Object.defineProperty({
      }, 'a', {
        get: function () {
          return 7
        }
      }).a
    })
  },
  function (t, e) {
    var n = {
    }.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e)
    }
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      return '[object Array]' === T.call(t)
    }
    function o(t) {
      return '[object ArrayBuffer]' === T.call(t)
    }
    function i(t) {
      return 'undefined' != typeof FormData && t instanceof FormData
    }
    function a(t) {
      var e;
      return e = 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t)  : t && t.buffer && t.buffer instanceof ArrayBuffer
    }
    function s(t) {
      return 'string' == typeof t
    }
    function u(t) {
      return 'number' == typeof t
    }
    function c(t) {
      return void 0 === t
    }
    function l(t) {
      return null !== t && 'object' == typeof t
    }
    function p(t) {
      return '[object Date]' === T.call(t)
    }
    function h(t) {
      return '[object File]' === T.call(t)
    }
    function f(t) {
      return '[object Blob]' === T.call(t)
    }
    function d(t) {
      return '[object Function]' === T.call(t)
    }
    function m(t) {
      return l(t) && d(t.pipe)
    }
    function y(t) {
      return 'undefined' != typeof URLSearchParams && t instanceof URLSearchParams
    }
    function v(t) {
      return t.replace(/^\s*/, '').replace(/\s*$/, '')
    }
    function g() {
      return ('undefined' == typeof navigator || 'ReactNative' !== navigator.product) && ('undefined' != typeof window && 'undefined' != typeof document)
    }
    function _(t, e) {
      if (null !== t && void 0 !== t) if ('object' != typeof t && (t = [
        t
      ]), r(t)) for (var n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
       else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
    }
    function b() {
      function t(t, n) {
        'object' == typeof e[n] && 'object' == typeof t ? e[n] = b(e[n], t)  : e[n] = t
      }
      for (var e = {
      }, n = 0, r = arguments.length; n < r; n++) _(arguments[n], t);
      return e
    }
    function x(t, e, n) {
      return _(e, function e(r, o) {
        t[o] = n && 'function' == typeof r ? w(r, n)  : r
      }),
      t
    }
    var w = n(153),
    S = n(154),
    T = Object.prototype.toString;
    t.exports = {
      isArray: r,
      isArrayBuffer: o,
      isBuffer: S,
      isFormData: i,
      isArrayBufferView: a,
      isString: s,
      isNumber: u,
      isObject: l,
      isUndefined: c,
      isDate: p,
      isFile: h,
      isBlob: f,
      isFunction: d,
      isStream: m,
      isURLSearchParams: y,
      isStandardBrowserEnv: g,
      forEach: _,
      merge: b,
      extend: x,
      trim: v
    }
  },
  function (t, e, n) {
    var r = n(7),
    o = n(26);
    t.exports = n(10) ? function (t, e, n) {
      return r.f(t, e, o(1, n))
    }
     : function (t, e, n) {
      return t[e] = n,
      t
    }
  },
  function (t, e) {
    var n = Array.isArray;
    t.exports = n
  },
  function (t, e, n) {
    var r = n(24);
    t.exports = function (t) {
      return Object(r(t))
    }
  },
  function (t, e, n) {
    var r = n(81),
    o = n(24);
    t.exports = function (t) {
      return r(o(t))
    }
  },
  function (t, e, n) {
    var r = n(0),
    o = n(34),
    i = n(5);
    t.exports = function (t, e) {
      var n = (o.Object || {
      }) [t] || Object[t],
      a = {
      };
      a[t] = e(n),
      r(r.S + r.F * i(function () {
        n(1)
      }), 'Object', a)
    }
  },
  function (t, e, n) {
    var r = n(135),
    o = 'object' == typeof self && self && self.Object === Object && self,
    i = r || o || Function('return this') ();
    t.exports = i
  },
  function (t, e, n) {
    var r = n(23);
    t.exports = function (t, e, n) {
      if (r(t), void 0 === e) return t;
      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n)
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r)
          };
        case 3:
          return function (n, r, o) {
            return t.call(e, n, r, o)
          }
      }
      return function () {
        return t.apply(e, arguments)
    }
  }
},
function (t, e, n) {
  'use strict';
  if (n(10)) {
    var r = n(35),
    o = n(3),
    i = n(5),
    a = n(0),
    s = n(80),
    u = n(111),
    c = n(19),
    l = n(37),
    p = n(26),
    h = n(13),
    f = n(36),
    d = n(28),
    m = n(9),
    y = n(112),
    v = n(39),
    g = n(47),
    _ = n(11),
    b = n(88),
    x = n(2),
    w = n(15),
    S = n(89),
    T = n(49),
    P = n(42),
    C = n(48).f,
    k = n(90),
    O = n(27),
    E = n(6),
    j = n(50),
    A = n(82),
    F = n(87),
    M = n(91),
    R = n(41),
    D = n(61),
    I = n(60),
    L = n(86),
    z = n(118),
    U = n(7),
    G = n(21),
    N = U.f,
    B = G.f,
    q = o.RangeError,
    V = o.TypeError,
    H = o.Uint8Array,
    W = 'ArrayBuffer',
    X = 'SharedArrayBuffer',
    Y = 'BYTES_PER_ELEMENT',
    $ = 'prototype',
    K = Array[$],
    J = u.ArrayBuffer,
    Q = u.DataView,
    Z = j(0),
    tt = j(2),
    et = j(3),
    nt = j(4),
    rt = j(5),
    ot = j(6),
    it = A(!0),
    at = A(!1),
    st = M.values,
    ut = M.keys,
    ct = M.entries,
    lt = K.lastIndexOf,
    pt = K.reduce,
    ht = K.reduceRight,
    ft = K.join,
    dt = K.sort,
    mt = K.slice,
    yt = K.toString,
    vt = K.toLocaleString,
    gt = E('iterator'),
    _t = E('toStringTag'),
    bt = O('typed_constructor'),
    xt = O('def_constructor'),
    wt = s.CONSTR,
    St = s.TYPED,
    Tt = s.VIEW,
    Pt = 'Wrong length!',
    Ct = j(1, function (t, e) {
      return At(F(t, t[xt]), e)
    }),
    kt = i(function () {
      return 1 === new H(new Uint16Array([1]).buffer) [0]
    }),
    Ot = !!H && !!H[$].set && i(function () {
      new H(1).set({
      })
    }),
    Et = function (t, e) {
      var n = d(t);
      if (n < 0 || n % e) throw q('Wrong offset!');
      return n
    },
    jt = function (t) {
      if (x(t) && St in t) return t;
      throw V(t + ' is not a typed array!')
    },
    At = function (t, e) {
      if (!(x(t) && bt in t)) throw V('It is not a typed array constructor!');
      return new t(e)
    },
    Ft = function (t, e) {
      return Mt(F(t, t[xt]), e)
    },
    Mt = function (t, e) {
      for (var n = 0, r = e.length, o = At(t, r); r > n; ) o[n] = e[n++];
      return o
    },
    Rt = function (t, e, n) {
      N(t, e, {
        get: function () {
          return this._d[n]
        }
      })
    },
    Dt = function t(e) {
      var n = w(e),
      r = arguments.length,
      o = r > 1 ? arguments[1] : void 0,
      i = void 0 !== o,
      a = k(n),
      s,
      u,
      l,
      p,
      h,
      f;
      if (void 0 != a && !S(a)) {
        for (f = a.call(n), l = [
        ], s = 0; !(h = f.next()).done; s++) l.push(h.value);
        n = l
      }
      for (i && r > 2 && (o = c(o, arguments[2], 2)), s = 0, u = m(n.length), p = At(this, u); u > s; s++) p[s] = i ? o(n[s], s)  : n[s];
      return p
    },
    It = function t() {
      for (var e = 0, n = arguments.length, r = At(this, n); n > e; ) r[e] = arguments[e++];
      return r
    },
    Lt = !!H && i(function () {
      vt.call(new H(1))
    }),
    zt = function t() {
      return vt.apply(Lt ? mt.call(jt(this))  : jt(this), arguments)
    },
    Ut = {
      copyWithin: function t(e, n) {
        return z.call(jt(this), e, n, arguments.length > 2 ? arguments[2] : void 0)
      },
      every: function t(e) {
        return nt(jt(this), e, arguments.length > 1 ? arguments[1] : void 0)
      },
      fill: function t(e) {
        return L.apply(jt(this), arguments)
      },
      filter: function t(e) {
        return Ft(this, tt(jt(this), e, arguments.length > 1 ? arguments[1] : void 0))
      },
      find: function t(e) {
        return rt(jt(this), e, arguments.length > 1 ? arguments[1] : void 0)
      },
      findIndex: function t(e) {
        return ot(jt(this), e, arguments.length > 1 ? arguments[1] : void 0)
      },
      forEach: function t(e) {
        Z(jt(this), e, arguments.length > 1 ? arguments[1] : void 0)
      },
      indexOf: function t(e) {
        return at(jt(this), e, arguments.length > 1 ? arguments[1] : void 0)
      },
      includes: function t(e) {
        return it(jt(this), e, arguments.length > 1 ? arguments[1] : void 0)
      },
      join: function t(e) {
        return ft.apply(jt(this), arguments)
      },
      lastIndexOf: function t(e) {
        return lt.apply(jt(this), arguments)
      },
      map: function t(e) {
        return Ct(jt(this), e, arguments.length > 1 ? arguments[1] : void 0)
      },
      reduce: function t(e) {
        return pt.apply(jt(this), arguments)
      },
      reduceRight: function t(e) {
        return ht.apply(jt(this), arguments)
      },
      reverse: function t() {
        for (var e = this, n = jt(e).length, r = Math.floor(n / 2), o = 0, i; o < r; ) i = e[o],
        e[o++] = e[--n],
        e[n] = i;
        return e
      },
      some: function t(e) {
        return et(jt(this), e, arguments.length > 1 ? arguments[1] : void 0)
      },
      sort: function t(e) {
        return dt.call(jt(this), e)
      },
      subarray: function t(e, n) {
        var r = jt(this),
        o = r.length,
        i = v(e, o);
        return new (F(r, r[xt])) (r.buffer, r.byteOffset + i * r.BYTES_PER_ELEMENT, m((void 0 === n ? o : v(n, o)) - i))
      }
    },
    Gt = function t(e, n) {
      return Ft(this, mt.call(jt(this), e, n))
    },
    Nt = function t(e) {
      jt(this);
      var n = Et(arguments[1], 1),
      r = this.length,
      o = w(e),
      i = m(o.length),
      a = 0;
      if (i + n > r) throw q(Pt);
      for (; a < i; ) this[n + a] = o[a++]
    },
    Bt = {
      entries: function t() {
        return ct.call(jt(this))
      },
      keys: function t() {
        return ut.call(jt(this))
      },
      values: function t() {
        return st.call(jt(this))
      }
    },
    qt = function (t, e) {
      return x(t) && t[St] && 'symbol' != typeof e && e in t && String( + e) == String(e)
    },
    Vt = function t(e, n) {
      return qt(e, n = g(n, !0)) ? p(2, e[n])  : B(e, n)
    },
    Ht = function t(e, n, r) {
      return !(qt(e, n = g(n, !0)) && x(r) && _(r, 'value')) || _(r, 'get') || _(r, 'set') || r.configurable || _(r, 'writable') && !r.writable || _(r, 'enumerable') && !r.enumerable ? N(e, n, r)  : (e[n] = r.value, e)
    };
    wt || (G.f = Vt, U.f = Ht),
    a(a.S + a.F * !wt, 'Object', {
      getOwnPropertyDescriptor: Vt,
      defineProperty: Ht
    }),
    i(function () {
      yt.call({
      })
    }) && (yt = vt = function t() {
      return ft.call(this)
    });
    var Wt = f({
    }, Ut);
    f(Wt, Bt),
    h(Wt, gt, Bt.values),
    f(Wt, {
      slice: Gt,
      set: Nt,
      constructor: function () {
      },
      toString: yt,
      toLocaleString: zt
    }),
    Rt(Wt, 'buffer', 'b'),
    Rt(Wt, 'byteOffset', 'o'),
    Rt(Wt, 'byteLength', 'l'),
    Rt(Wt, 'length', 'e'),
    N(Wt, _t, {
      get: function () {
        return this[St]
      }
    }),
    t.exports = function (t, e, n, u) {
      u = !!u;
      var c = t + (u ? 'Clamped' : '') + 'Array',
      p = 'get' + t,
      f = 'set' + t,
      d = o[c],
      v = d || {
      },
      g = d && P(d),
      _ = !d || !s.ABV,
      w = {
      },
      S = d && d[$],
      k = function (t, n) {
        var r = t._d;
        return r.v[p](n * e + r.o, kt)
      },
      O = function (t, n, r) {
        var o = t._d;
        u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
        o.v[f](n * e + o.o, r, kt)
      },
      E = function (t, e) {
        N(t, e, {
          get: function () {
            return k(this, e)
          },
          set: function (t) {
            return O(this, e, t)
          },
          enumerable: !0
        })
      };
      _ ? (d = n(function (t, n, r, o) {
        l(t, d, c, '_d');
        var i = 0,
        a = 0,
        s,
        u,
        p,
        f;
        if (x(n)) {
          if (!(n instanceof J || (f = b(n)) == W || f == X)) return St in n ? Mt(d, n)  : Dt.call(d, n);
          s = n,
          a = Et(r, e);
          var v = n.byteLength;
          if (void 0 === o) {
            if (v % e) throw q(Pt);
            if ((u = v - a) < 0) throw q(Pt)
          } else if ((u = m(o) * e) + a > v) throw q(Pt);
          p = u / e
        } else p = y(n),
        u = p * e,
        s = new J(u);
        for (h(t, '_d', {
          b: s,
          o: a,
          l: u,
          e: p,
          v: new Q(s)
        }); i < p; ) E(t, i++)
      }), S = d[$] = T(Wt), h(S, 'constructor', d))  : i(function () {
        d(1)
      }) && i(function () {
        new d( - 1)
      }) && D(function (t) {
        new d,
        new d(null),
        new d(1.5),
        new d(t)
      }, !0) || (d = n(function (t, n, r, o) {
        l(t, d, c);
        var i;
        return x(n) ? n instanceof J || (i = b(n)) == W || i == X ? void 0 !== o ? new v(n, Et(r, e), o)  : void 0 !== r ? new v(n, Et(r, e))  : new v(n)  : St in n ? Mt(d, n)  : Dt.call(d, n)  : new v(y(n))
      }), Z(g !== Function.prototype ? C(v).concat(C(g))  : C(v), function (t) {
        t in d || h(d, t, v[t])
      }), d[$] = S, r || (S.constructor = d));
      var j = S[gt],
      A = !!j && ('values' == j.name || void 0 == j.name),
      F = Bt.values;
      h(d, bt, !0),
      h(S, St, c),
      h(S, Tt, !0),
      h(S, xt, d),
      (u ? new d(1) [_t] == c : _t in S) || N(S, _t, {
        get: function () {
          return c
        }
      }),
      w[c] = d,
      a(a.G + a.W + a.F * (d != v), w),
      a(a.S, c, {
        BYTES_PER_ELEMENT: e
      }),
      a(a.S + a.F * i(function () {
        v.of.call(d, 1)
      }), c, {
        from: Dt,
        of: It
      }),
      Y in S || h(S, Y, e),
      a(a.P, c, Ut),
      I(c),
      a(a.P + a.F * Ot, c, {
        set: Nt
      }),
      a(a.P + a.F * !A, c, Bt),
      r || S.toString == yt || (S.toString = yt),
      a(a.P + a.F * i(function () {
        new d(1).slice()
      }), c, {
        slice: Gt
      }),
      a(a.P + a.F * (i(function () {
        return [1,
        2].toLocaleString() != new d([1,
        2]).toLocaleString()
      }) || !i(function () {
        S.toLocaleString.call([1,
        2])
      })), c, {
        toLocaleString: zt
      }),
      R[c] = A ? j : F,
      r || A || h(S, gt, F)
    }
  } else t.exports = function () {
  }
},
function (t, e, n) {
  var r = n(51),
  o = n(26),
  i = n(16),
  a = n(47),
  s = n(11),
  u = n(110),
  c = Object.getOwnPropertyDescriptor;
  e.f = n(10) ? c : function t(e, n) {
    if (e = i(e), n = a(n, !0), u) try {
      return c(e, n)
    } catch (t) {
    }
    if (s(e, n)) return o(!r.f.call(e, n), e[n])
  }
},
function (t, e, n) {
  var r = n(3),
  o = n(13),
  i = n(11),
  a = n(27) ('src'),
  s = 'toString',
  u = Function[s],
  c = ('' + u).split(s);
  n(34).inspectSource = function (t) {
    return u.call(t)
  },
  (t.exports = function (t, e, n, s) {
    var u = 'function' == typeof n;
    u && (i(n, 'name') || o(n, 'name', e)),
    t[e] !== n && (u && (i(n, a) || o(n, a, t[e] ? '' + t[e] : c.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : o(t, e, n)  : (delete t[e], o(t, e, n)))
  }) (Function.prototype, s, function t() {
    return 'function' == typeof this && this[a] || u.call(this)
  })
},
function (t, e) {
  t.exports = function (t) {
    if ('function' != typeof t) throw TypeError(t + ' is not a function!');
    return t
  }
},
function (t, e) {
  t.exports = function (t) {
    if (void 0 == t) throw TypeError('Can\'t call method on  ' + t);
    return t
  }
},
function (t, e, n) {
  var r = n(27) ('meta'),
  o = n(2),
  i = n(11),
  a = n(7).f,
  s = 0,
  u = Object.isExtensible || function () {
    return !0
  },
  c = !n(5) (function () {
    return u(Object.preventExtensions({
    }))
  }),
  l = function (t) {
    a(t, r, {
      value: {
        i: 'O' + ++s,
        w: {
        }
      }
    })
  },
  p = function (t, e) {
    if (!o(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
    if (!i(t, r)) {
      if (!u(t)) return 'F';
      if (!e) return 'E';
      l(t)
    }
    return t[r].i
  },
  h = function (t, e) {
    if (!i(t, r)) {
      if (!u(t)) return !0;
      if (!e) return !1;
      l(t)
    }
    return t[r].w
  },
  f = function (t) {
    return c && d.NEED && u(t) && !i(t, r) && l(t),
    t
  },
  d = t.exports = {
    KEY: r,
    NEED: !1,
    fastKey: p,
    getWeak: h,
    onFreeze: f
  }
},
function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
},
function (t, e) {
  var n = 0,
  r = Math.random();
  t.exports = function (t) {
    return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + r).toString(36))
  }
},
function (t, e) {
  var n = Math.ceil,
  r = Math.floor;
  t.exports = function (t) {
    return isNaN(t = + t) ? 0 : (t > 0 ? r : n) (t)
  }
},
function (t, e, n) {
  var r = n(113),
  o = n(85);
  t.exports = Object.keys || function t(e) {
    return r(e, o)
  }
},
function (t, e) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || Function('return this') () || (0, eval) ('this')
  } catch (t) {
    'object' == typeof window && (n = window)
  }
  t.exports = n
},
function (t, e, n) {
  function r(t, e) {
    var n = i(t, e);
    return o(n) ? n : void 0
  }
  var o = n(310),
  i = n(313);
  t.exports = r
},
function (t, e, n) {
  var r = n(413),
  o = r();
  t.exports = o
},
function (t, e, n) {
  'use strict';
  (function (t) {
    function r(t, e, n) {
      for (var r = Object.keys(e), o = 0; o < r.length; ++o) void 0 !== t[r[o]] && n || (t[r[o]] = e[r[o]]);
      return t
    }
    function o(t) {
      function e(t, n) {
        if (!(this instanceof e)) return new e(t, n);
        Object.defineProperty(this, 'message', {
          get: function () {
            return t
          }
        }),
        Error.captureStackTrace ? Error.captureStackTrace(this, e)  : Object.defineProperty(this, 'stack', {
          value: (new Error).stack || ''
        }),
        n && r(this, n)
      }
      return (e.prototype = Object.create(Error.prototype)).constructor = e,
      Object.defineProperty(e.prototype, 'name', {
        get: function () {
          return t
        }
      }),
      e.prototype.toString = function t() {
        return this.name + ': ' + this.message
      },
      e
    }
    var i = e;
    i.asPromise = n(460),
    i.base64 = n(461),
    i.EventEmitter = n(462),
    i.float = n(463),
    i.inquire = n(464),
    i.utf8 = n(465),
    i.pool = n(466),
    i.LongBits = n(467),
    i.emptyArray = Object.freeze ? Object.freeze([])  : [
    ],
    i.emptyObject = Object.freeze ? Object.freeze({
    })  : {
    },
    i.isNode = Boolean(t.process && t.process.versions && t.process.versions.node),
    i.isInteger = Number.isInteger || function t(e) {
      return 'number' == typeof e && isFinite(e) && Math.floor(e) === e
    },
    i.isString = function t(e) {
      return 'string' == typeof e || e instanceof String
    },
    i.isObject = function t(e) {
      return e && 'object' == typeof e
    },
    i.isset = i.isSet = function t(e, n) {
      var r = e[n];
      return !(null == r || !e.hasOwnProperty(n)) && ('object' != typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
    },
    i.Buffer = function () {
      try {
        var t = i.inquire('buffer').Buffer;
        return t.prototype.utf8Write ? t : null
      } catch (t) {
        return null
      }
    }(),
    i._Buffer_from = null,
    i._Buffer_allocUnsafe = null,
    i.newBuffer = function t(e) {
      return 'number' == typeof e ? i.Buffer ? i._Buffer_allocUnsafe(e)  : new i.Array(e)  : i.Buffer ? i._Buffer_from(e)  : 'undefined' == typeof Uint8Array ? e : new Uint8Array(e)
    },
    i.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
    i.Long = t.dcodeIO && t.dcodeIO.Long || i.inquire('long'),
    i.key2Re = /^true|false|0|1$/,
    i.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
    i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
    i.longToHash = function t(e) {
      return e ? i.LongBits.from(e).toHash()  : i.LongBits.zeroHash
    },
    i.longFromHash = function t(e, n) {
      var r = i.LongBits.fromHash(e);
      return i.Long ? i.Long.fromBits(r.lo, r.hi, n)  : r.toNumber(Boolean(n))
    },
    i.merge = r,
    i.lcFirst = function t(e) {
      return e.charAt(0).toLowerCase() + e.substring(1)
    },
    i.newError = o,
    i.ProtocolError = o('ProtocolError'),
    i.oneOfGetter = function t(e) {
      for (var n = {
      }, r = 0; r < e.length; ++r) n[e[r]] = 1;
      return function () {
        for (var t = Object.keys(this), e = t.length - 1; e > - 1; --e) if (1 === n[t[e]] && void 0 !== this[t[e]] && null !== this[t[e]]) return t[e]
      }
    },
    i.oneOfSetter = function t(e) {
      return function (t) {
        for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]]
      }
    },
    i.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    },
    i._configure = function () {
      var t = i.Buffer;
      if (!t) return void (i._Buffer_from = i._Buffer_allocUnsafe = null);
      i._Buffer_from = t.from !== Uint8Array.from && t.from || function e(n, r) {
        return new t(n, r)
      },
      i._Buffer_allocUnsafe = t.allocUnsafe || function e(n) {
        return new t(n)
      }
    }
  }).call(e, n(30))
},
function (t, e) {
  var n = t.exports = {
    version: '2.5.3'
  };
  'number' == typeof __e && (__e = n)
},
function (t, e) {
  t.exports = !1
},
function (t, e, n) {
  var r = n(22);
  t.exports = function (t, e, n) {
    for (var o in e) r(t, o, e[o], n);
    return t
  }
},
function (t, e) {
  t.exports = function (t, e, n, r) {
    if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ': incorrect invocation!');
    return t
  }
},
function (t, e) {
  var n = {
  }.toString;
  t.exports = function (t) {
    return n.call(t).slice(8, - 1)
  }
},
function (t, e, n) {
  var r = n(28),
  o = Math.max,
  i = Math.min;
  t.exports = function (t, e) {
    return t = r(t),
    t < 0 ? o(t + e, 0)  : i(t, e)
  }
},
function (t, e, n) {
  var r = n(7).f,
  o = n(11),
  i = n(6) ('toStringTag');
  t.exports = function (t, e, n) {
    t && !o(t = n ? t : t.prototype, i) && r(t, i, {
      configurable: !0,
      value: e
    })
  }
},
function (t, e) {
  t.exports = {
  }
},
function (t, e, n) {
  var r = n(11),
  o = n(15),
  i = n(83) ('IE_PROTO'),
  a = Object.prototype;
  t.exports = Object.getPrototypeOf || function (t) {
    return t = o(t),
    r(t, i) ? t[i] : 'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
  }
},
function (t, e, n) {
  var r = n(6) ('unscopables'),
  o = Array.prototype;
  void 0 == o[r] && n(13) (o, r, {
  }),
  t.exports = function (t) {
    o[r][t] = !0
  }
},
function (t, e, n) {
  var r = n(2);
  t.exports = function (t, e) {
    if (!r(t) || t._t !== e) throw TypeError('Incompatible receiver, ' + e + ' required!');
    return t
  }
},
function (t, e) {
  function n(t) {
    var e = typeof t;
    return null != t && ('object' == e || 'function' == e)
  }
  t.exports = n
},
function (t, e, n) {
  'use strict';
  function r(t) {
    return Array.isArray(t) ? [
      t.length,
      t[0].length
    ] : t.shape
  }
  function o(t, e, n) {
    var o = r(t),
    i = r(e),
    a = r(n);
    if (o[0] !== i[0] || o[1] !== a[1] || i[1] !== a[0]) throw new Error('Mismatched array shapes for matrix product')
  }
  function i(t) {
    if (Array.isArray(t)) {
      if (Array.isArray(t)) return ['r',
      'native']
    } else if (t.shape && 2 === t.shape.length) return t.order[0] ? [
      'r',
      t.dtype
    ] : [
      'c',
      t.dtype
    ];
    throw new Error('Unrecognized data type')
  }
  function a(t, e, n, r, a) {
    void 0 === r && (r = 1),
    void 0 === a && (a = 0);
    var c = 1 !== r,
    l = 0 !== a,
    p = i(t),
    h = i(e),
    f = i(n);
    o(t, e, n);
    var d = [
      p,
      h,
      f,
      c,
      l
    ].join(':'),
    m = u[d];
    return m || (m = u[d] = s(p, h, f, c, l)),
    m(t, e, n, r, a)
  }
  t.exports = a;
  var s = n(423),
  u = {
  }
},
function (t, e, n) {
  var r = n(2);
  t.exports = function (t, e) {
    if (!r(t)) return t;
    var n,
    o;
    if (e && 'function' == typeof (n = t.toString) && !r(o = n.call(t))) return o;
    if ('function' == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
    if (!e && 'function' == typeof (n = t.toString) && !r(o = n.call(t))) return o;
    throw TypeError('Can\'t convert object to primitive value')
  }
},
function (t, e, n) {
  var r = n(113),
  o = n(85).concat('length', 'prototype');
  e.f = Object.getOwnPropertyNames || function t(e) {
    return r(e, o)
  }
},
function (t, e, n) {
  var r = n(4),
  o = n(174),
  i = n(85),
  a = n(83) ('IE_PROTO'),
  s = function () {
  },
  u = 'prototype',
  c = function () {
    var t = n(79) ('iframe'),
    e = i.length,
    r = '<',
    o = '>',
    a;
    for (t.style.display = 'none', n(114).appendChild(t), t.src = 'javascript:', a = t.contentWindow.document, a.open(), a.write('<script>document.F=Object</script>'), a.close(), c = a.F; e--; ) delete c[u][i[e]];
    return c()
  };
  t.exports = Object.create || function t(e, n) {
    var i;
    return null !== e ? (s[u] = r(e), i = new s, s[u] = null, i[a] = e)  : i = c(),
    void 0 === n ? i : o(i, n)
  }
},
function (t, e, n) {
  var r = n(19),
  o = n(81),
  i = n(15),
  a = n(9),
  s = n(175);
  t.exports = function (t, e) {
    var n = 1 == t,
    u = 2 == t,
    c = 3 == t,
    l = 4 == t,
    p = 6 == t,
    h = 5 == t || p,
    f = e || s;
    return function (e, s, d) {
      for (var m = i(e), y = o(m), v = r(s, d, 3), g = a(y.length), _ = 0, b = n ? f(e, g)  : u ? f(e, 0)  : void 0, x, w; g > _; _++) if ((h || _ in y) && (x = y[_], w = v(x, _, m), t)) if (n) b[_] = w;
       else if (w) switch (t) {
        case 3:
          return !0;
        case 5:
          return x;
        case 6:
          return _;
        case 2:
          b.push(x)
      } else if (l) return !1;
      return p ? - 1 : c || l ? l : b
    }
  }
},
function (t, e) {
  e.f = {
  }.propertyIsEnumerable
},
function (t, e, n) {
  function r(t) {
    return a(t) ? o(t)  : i(t)
  }
  var o = n(286),
  i = n(295),
  a = n(56);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return null == t ? void 0 === t ? u : s : c && c in Object(t) ? i(t)  : a(t)
  }
  var o = n(54),
  i = n(289),
  a = n(290),
  s = '[object Null]',
  u = '[object Undefined]',
  c = o ? o.toStringTag : void 0;
  t.exports = r
},
function (t, e, n) {
  var r = n(18),
  o = r.Symbol;
  t.exports = o
},
function (t, e) {
  function n(t) {
    return null != t && 'object' == typeof t
  }
  t.exports = n
},
function (t, e, n) {
  function r(t) {
    return null != t && i(t.length) && !o(t)
  }
  var o = n(138),
  i = n(102);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    if ('string' == typeof t || o(t)) return t;
    var e = t + '';
    return '0' == e && 1 / t == - i ? '-0' : e
  }
  var o = n(76),
  i = 1 / 0;
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    return t[0] - e[0]
  }
  function o() {
    var t = this.stride,
    e = new Array(t.length),
    n;
    for (n = 0; n < e.length; ++n) e[n] = [
      Math.abs(t[n]),
      n
    ];
    e.sort(r);
    var o = new Array(e.length);
    for (n = 0; n < o.length; ++n) o[n] = e[n][1];
    return o
  }
  function i(t, e) {
    var n = [
      'View',
      e,
      'd',
      t
    ].join('');
    e < 0 && (n = 'View_Nil' + t);
    var r = 'generic' === t;
    if ( - 1 === e) {
      var i = 'function ' + n + '(a){this.data=a;};var proto=' + n + '.prototype;proto.dtype=\'' + t + '\';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new ' + n + '(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_' + n + '(a){return new ' + n + '(a);}',
      a = new Function(i);
      return a()
    }
    if (0 === e) {
      var i = 'function ' + n + '(a,d) {this.data = a;this.offset = d};var proto=' + n + '.prototype;proto.dtype=\'' + t + '\';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function ' + n + '_copy() {return new ' + n + '(this.data,this.offset)};proto.pick=function ' + n + '_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function ' + n + '_get(){return ' + (r ? 'this.data.get(this.offset)' : 'this.data[this.offset]') + '};proto.set=function ' + n + '_set(v){return ' + (r ? 'this.data.set(this.offset,v)' : 'this.data[this.offset]=v') + '};return function construct_' + n + '(a,b,c,d){return new ' + n + '(a,d)}',
      a = new Function('TrivialArray', i);
      return a(p[t][0])
    }
    var i = [
      '\'use strict\''
    ],
    s = u(e),
    c = s.map(function (t) {
      return 'i' + t
    }),
    l = 'this.offset+' + s.map(function (t) {
      return 'this.stride[' + t + ']*i' + t
    }).join('+'),
    h = s.map(function (t) {
      return 'b' + t
    }).join(','),
    f = s.map(function (t) {
      return 'c' + t
    }).join(',');
    i.push('function ' + n + '(a,' + h + ',' + f + ',d){this.data=a', 'this.shape=[' + h + ']', 'this.stride=[' + f + ']', 'this.offset=d|0}', 'var proto=' + n + '.prototype', 'proto.dtype=\'' + t + '\'', 'proto.dimension=' + e),
    i.push('Object.defineProperty(proto,\'size\',{get:function ' + n + '_size(){return ' + s.map(function (t) {
      return 'this.shape[' + t + ']'
    }).join('*'), '}})'),
    1 === e ? i.push('proto.order=[0]')  : (i.push('Object.defineProperty(proto,\'order\',{get:'), e < 4 ? (i.push('function ' + n + '_order(){'), 2 === e ? i.push('return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})')  : 3 === e && i.push('var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})'))  : i.push('ORDER})')),
    i.push('proto.set=function ' + n + '_set(' + c.join(',') + ',v){'),
    r ? i.push('return this.data.set(' + l + ',v)}')  : i.push('return this.data[' + l + ']=v}'),
    i.push('proto.get=function ' + n + '_get(' + c.join(',') + '){'),
    r ? i.push('return this.data.get(' + l + ')}')  : i.push('return this.data[' + l + ']}'),
    i.push('proto.index=function ' + n + '_index(', c.join(), '){return ' + l + '}'),
    i.push('proto.hi=function ' + n + '_hi(' + c.join(',') + '){return new ' + n + '(this.data,' + s.map(function (t) {
      return ['(typeof i',
      t,
      '!==\'number\'||i',
      t,
      '<0)?this.shape[',
      t,
      ']:i',
      t,
      '|0'].join('')
    }).join(',') + ',' + s.map(function (t) {
      return 'this.stride[' + t + ']'
    }).join(',') + ',this.offset)}');
    var d = s.map(function (t) {
      return 'a' + t + '=this.shape[' + t + ']'
    }),
    m = s.map(function (t) {
      return 'c' + t + '=this.stride[' + t + ']'
    });
    i.push('proto.lo=function ' + n + '_lo(' + c.join(',') + '){var b=this.offset,d=0,' + d.join(',') + ',' + m.join(','));
    for (var y = 0; y < e; ++y) i.push('if(typeof i' + y + '===\'number\'&&i' + y + '>=0){d=i' + y + '|0;b+=c' + y + '*d;a' + y + '-=d}');
    i.push('return new ' + n + '(this.data,' + s.map(function (t) {
      return 'a' + t
    }).join(',') + ',' + s.map(function (t) {
      return 'c' + t
    }).join(',') + ',b)}'),
    i.push('proto.step=function ' + n + '_step(' + c.join(',') + '){var ' + s.map(function (t) {
      return 'a' + t + '=this.shape[' + t + ']'
    }).join(',') + ',' + s.map(function (t) {
      return 'b' + t + '=this.stride[' + t + ']'
    }).join(',') + ',c=this.offset,d=0,ceil=Math.ceil');
    for (var y = 0; y < e; ++y) i.push('if(typeof i' + y + '===\'number\'){d=i' + y + '|0;if(d<0){c+=b' + y + '*(a' + y + '-1);a' + y + '=ceil(-a' + y + '/d)}else{a' + y + '=ceil(a' + y + '/d)}b' + y + '*=d}');
    i.push('return new ' + n + '(this.data,' + s.map(function (t) {
      return 'a' + t
    }).join(',') + ',' + s.map(function (t) {
      return 'b' + t
    }).join(',') + ',c)}');
    for (var v = new Array(e), g = new Array(e), y = 0; y < e; ++y) v[y] = 'a[i' + y + ']',
    g[y] = 'b[i' + y + ']';
    i.push('proto.transpose=function ' + n + '_transpose(' + c + '){' + c.map(function (t, e) {
      return t + '=(' + t + '===undefined?' + e + ':' + t + '|0)'
    }).join(';'), 'var a=this.shape,b=this.stride;return new ' + n + '(this.data,' + v.join(',') + ',' + g.join(',') + ',this.offset)}'),
    i.push('proto.pick=function ' + n + '_pick(' + c + '){var a=[],b=[],c=this.offset');
    for (var y = 0; y < e; ++y) i.push('if(typeof i' + y + '===\'number\'&&i' + y + '>=0){c=(c+this.stride[' + y + ']*i' + y + ')|0}else{a.push(this.shape[' + y + ']);b.push(this.stride[' + y + '])}');
    i.push('var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}'),
    i.push('return function construct_' + n + '(data,shape,stride,offset){return new ' + n + '(data,' + s.map(function (t) {
      return 'shape[' + t + ']'
    }).join(',') + ',' + s.map(function (t) {
      return 'stride[' + t + ']'
    }).join(',') + ',offset)}');
    var a = new Function('CTOR_LIST', 'ORDER', i.join('\n'));
    return a(p[t], o)
  }
  function a(t) {
    if (c(t)) return 'buffer';
    if (l) switch (Object.prototype.toString.call(t)) {
      case '[object Float64Array]':
        return 'float64';
      case '[object Float32Array]':
        return 'float32';
      case '[object Int8Array]':
        return 'int8';
      case '[object Int16Array]':
        return 'int16';
      case '[object Int32Array]':
        return 'int32';
      case '[object Uint8Array]':
        return 'uint8';
      case '[object Uint16Array]':
        return 'uint16';
      case '[object Uint32Array]':
        return 'uint32';
      case '[object Uint8ClampedArray]':
        return 'uint8_clamped'
    }
    return Array.isArray(t) ? 'array' : 'generic'
  }
  function s(t, e, n, r) {
    if (void 0 === t) {
      var o = p.array[0];
      return o([])
    }
    'number' == typeof t && (t = [
      t
    ]),
    void 0 === e && (e = [
      t.length
    ]);
    var s = e.length;
    if (void 0 === n) {
      n = new Array(s);
      for (var u = s - 1, c = 1; u >= 0; --u) n[u] = c,
      c *= e[u]
    }
    if (void 0 === r) {
      r = 0;
      for (var u = 0; u < s; ++u) n[u] < 0 && (r -= (e[u] - 1) * n[u])
    }
    for (var l = a(t), h = p[l]; h.length <= s + 1; ) h.push(i(l, h.length - 1));
    var o = h[s + 1];
    return o(t, e, n, r)
  }
  var u = n(415),
  c = n(154),
  l = 'undefined' != typeof Float64Array,
  p = {
    float32: [
    ],
    float64: [
    ],
    int8: [
    ],
    int16: [
    ],
    int32: [
    ],
    uint8: [
    ],
    uint16: [
    ],
    uint32: [
    ],
    array: [
    ],
    uint8_clamped: [
    ],
    buffer: [
    ],
    generic: [
    ]
  };
  t.exports = s
},
function (t, e, n) {
  'use strict';
  t.exports.gemv = n(424),
  t.exports.gbmv = n(435),
  t.exports.symv = n(436),
  t.exports.sbmv = n(437),
  t.exports.spmv = n(438),
  t.exports.trmv = n(439),
  t.exports.tbmv = n(440),
  t.exports.trsv = n(441),
  t.exports.tbsv = n(442),
  t.exports.tpsv = n(443),
  t.exports.ger = n(444),
  t.exports.syr = n(445),
  t.exports.spr = n(446),
  t.exports.syr2 = n(447),
  t.exports.spr2 = n(448),
  t.exports.trmv_lower = function (e, n) {
    return console.warn('trmv_lower is deprecated. Please use the \'isLower\' flag with trmv.'),
    t.exports.trmv(e, n, !0)
  },
  t.exports.trsv_lower = function (e, n) {
    return console.warn('trsv_lower is deprecated. Please use the \'isLower\' flag with trsv.'),
    t.exports.trsv(e, n, !0)
  }
},
function (t, e, n) {
  'use strict';
  var r = n(3),
  o = n(7),
  i = n(10),
  a = n(6) ('species');
  t.exports = function (t) {
    var e = r[t];
    i && e && !e[a] && o.f(e, a, {
      configurable: !0,
      get: function () {
        return this
      }
    })
  }
},
function (t, e, n) {
  var r = n(6) ('iterator'),
  o = !1;
  try {
    var i = [
      7
    ][r]();
    i.return = function () {
      o = !0
    },
    Array.from(i, function () {
      throw 2
    })
  } catch (t) {
  }
  t.exports = function (t, e) {
    if (!e && !o) return !1;
    var n = !1;
    try {
      var i = [
        7
      ],
      a = i[r]();
      a.next = function () {
        return {
          done: n = !0
        }
      },
      i[r] = function () {
        return a
      },
      t(i)
    } catch (t) {
    }
    return n
  }
},
function (t, e, n) {
  var r = n(19),
  o = n(120),
  i = n(89),
  a = n(4),
  s = n(9),
  u = n(90),
  c = {
  },
  l = {
  },
  e = t.exports = function (t, e, n, p, h) {
    var f = h ? function () {
      return t
    }
     : u(t),
    d = r(n, p, e ? 2 : 1),
    m = 0,
    y,
    v,
    g,
    _;
    if ('function' != typeof f) throw TypeError(t + ' is not iterable!');
    if (i(f)) {
      for (y = s(t.length); y > m; m++) if ((_ = e ? d(a(v = t[m]) [0], v[1])  : d(t[m])) === c || _ === l) return _
    } else for (g = f.call(t); !(v = g.next()).done; ) if ((_ = o(g, d, v.value, e)) === c || _ === l) return _
  };
  e.BREAK = c,
  e.RETURN = l
},
function (t, e, n) {
  'use strict';
  var r = n(3),
  o = n(0),
  i = n(22),
  a = n(36),
  s = n(25),
  u = n(62),
  c = n(37),
  l = n(2),
  p = n(5),
  h = n(61),
  f = n(40),
  d = n(187);
  t.exports = function (t, e, n, m, y, v) {
    var g = r[t],
    _ = g,
    b = y ? 'set' : 'add',
    x = _ && _.prototype,
    w = {
    },
    S = function (t) {
      var e = x[t];
      i(x, t, 'delete' == t ? function (t) {
        return !(v && !l(t)) && e.call(this, 0 === t ? 0 : t)
      }
       : 'has' == t ? function t(n) {
        return !(v && !l(n)) && e.call(this, 0 === n ? 0 : n)
      }
       : 'get' == t ? function t(n) {
        return v && !l(n) ? void 0 : e.call(this, 0 === n ? 0 : n)
      }
       : 'add' == t ? function t(n) {
        return e.call(this, 0 === n ? 0 : n),
        this
      }
       : function t(n, r) {
        return e.call(this, 0 === n ? 0 : n, r),
        this
      })
    };
    if ('function' == typeof _ && (v || x.forEach && !p(function () {
      (new _).entries().next()
    }))) {
      var T = new _,
      P = T[b](v ? {
      }
       : - 0, 1) != T,
      C = p(function () {
        T.has(1)
      }),
      k = h(function (t) {
        new _(t)
      }),
      O = !v && p(function () {
        for (var t = new _, e = 5; e--; ) t[b](e, e);
        return !t.has( - 0)
      });
      k || (_ = e(function (e, n) {
        c(e, _, t);
        var r = d(new g, e, _);
        return void 0 != n && u(n, y, r[b], r),
        r
      }), _.prototype = x, x.constructor = _),
      (C || O) && (S('delete'), S('has'), y && S('get')),
      (O || P) && S(b),
      v && x.clear && delete x.clear
    } else _ = m.getConstructor(e, t, y, b),
    a(_.prototype, n),
    s.NEED = !0;
    return f(_, t),
    w[t] = _,
    o(o.G + o.W + o.F * (_ != g), w),
    v || m.setStrong(_, t, y),
    _
  }
},
function (t, e) {
  e.f = Object.getOwnPropertySymbols
},
function (t, e, n) {
  'use strict';
  var r = n(13),
  o = n(22),
  i = n(5),
  a = n(24),
  s = n(6);
  t.exports = function (t, e, n) {
    var u = s(t),
    c = n(a, u, ''[t]),
    l = c[0],
    p = c[1];
    i(function () {
      var e = {
      };
      return e[u] = function () {
        return 7
      },
      7 != ''[t](e)
    }) && (o(String.prototype, t, l), r(RegExp.prototype, u, 2 == e ? function (t, e) {
      return p.call(t, this, e)
    }
     : function (t) {
      return p.call(t, this)
    }))
  }
},
function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {
    }, t.paths = [
    ], t.children || (t.children = [
    ]), Object.defineProperty(t, 'loaded', {
      enumerable: !0,
      get: function () {
        return t.l
      }
    }), Object.defineProperty(t, 'id', {
      enumerable: !0,
      get: function () {
        return t.i
      }
    }), t.webpackPolyfill = 1),
    t
  }
},
function (t, e) {
  function n(t, e) {
    var n = typeof t;
    return !!(e = null == e ? r : e) && ('number' == n || 'symbol' != n && o.test(t)) && t > - 1 && t % 1 == 0 && t < e
  }
  var r = 9007199254740991,
  o = /^(?:0|[1-9]\d*)$/;
  t.exports = n
},
function (t, e, n) {
  function r(t, e) {
    return o(t, e)
  }
  var o = n(103);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    var e = - 1,
    n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  var o = n(300),
  i = n(301),
  a = n(302),
  s = n(303),
  u = n(304);
  r.prototype.clear = o,
  r.prototype.delete = i,
  r.prototype.get = a,
  r.prototype.has = s,
  r.prototype.set = u,
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    for (var n = t.length; n--; ) if (o(t[n][0], e)) return n;
    return - 1
  }
  var o = n(71);
  t.exports = r
},
function (t, e) {
  function n(t, e) {
    return t === e || t !== t && e !== e
  }
  t.exports = n
},
function (t, e, n) {
  var r = n(31),
  o = r(Object, 'create');
  t.exports = o
},
function (t, e, n) {
  function r(t, e) {
    var n = t.__data__;
    return o(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map
  }
  var o = n(322);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return 'function' == typeof t ? t : null == t ? a : 'object' == typeof t ? s(t) ? i(t[0], t[1])  : o(t)  : u(t)
  }
  var o = n(347),
  i = n(350),
  a = n(108),
  s = n(14),
  u = n(359);
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    return o(t) ? t : i(t, e) ? [
      t
    ] : a(s(t))
  }
  var o = n(14),
  i = n(107),
  a = n(352),
  s = n(355);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return 'symbol' == typeof t || i(t) && o(t) == a
  }
  var o = n(53),
  i = n(55),
  a = '[object Symbol]';
  t.exports = r
},
function (t, e) {
  function n() {
    throw new Error('setTimeout has not been defined')
  }
  function r() {
    throw new Error('clearTimeout has not been defined')
  }
  function o(t) {
    if (p === setTimeout) return setTimeout(t, 0);
    if ((p === n || !p) && setTimeout) return p = setTimeout,
    setTimeout(t, 0);
    try {
      return p(t, 0)
    } catch (e) {
      try {
        return p.call(null, t, 0)
      } catch (e) {
        return p.call(this, t, 0)
      }
    }
  }
  function i(t) {
    if (h === clearTimeout) return clearTimeout(t);
    if ((h === r || !h) && clearTimeout) return h = clearTimeout,
    clearTimeout(t);
    try {
      return h(t)
    } catch (e) {
      try {
        return h.call(null, t)
      } catch (e) {
        return h.call(this, t)
      }
    }
  }
  function a() {
    d && m && (d = !1, m.length ? f = m.concat(f)  : y = - 1, f.length && s())
  }
  function s() {
    if (!d) {
      var t = o(a);
      d = !0;
      for (var e = f.length; e; ) {
        for (m = f, f = [
        ]; ++y < e; ) m && m[y].run();
        y = - 1,
        e = f.length
      }
      m = null,
      d = !1,
      i(t)
    }
  }
  function u(t, e) {
    this.fun = t,
    this.array = e
  }
  function c() {
  }
  var l = t.exports = {
  },
  p,
  h;
  !function () {
    try {
      p = 'function' == typeof setTimeout ? setTimeout : n
    } catch (t) {
      p = n
    }
    try {
      h = 'function' == typeof clearTimeout ? clearTimeout : r
    } catch (t) {
      h = r
    }
  }();
  var f = [
  ],
  d = !1,
  m,
  y = - 1;
  l.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    f.push(new u(t, e)),
    1 !== f.length || d || o(s)
  },
  u.prototype.run = function () {
    this.fun.apply(null, this.array)
  },
  l.title = 'browser',
  l.browser = !0,
  l.env = {
  },
  l.argv = [
  ],
  l.version = '',
  l.versions = {
  },
  l.on = c,
  l.addListener = c,
  l.once = c,
  l.off = c,
  l.removeListener = c,
  l.removeAllListeners = c,
  l.emit = c,
  l.prependListener = c,
  l.prependOnceListener = c,
  l.listeners = function (t) {
    return []
  },
  l.binding = function (t) {
    throw new Error('process.binding is not supported')
  },
  l.cwd = function () {
    return '/'
  },
  l.chdir = function (t) {
    throw new Error('process.chdir is not supported')
  },
  l.umask = function () {
    return 0
  }
},
function (t, e, n) {
  'use strict';
  t.exports.swap = n(425),
  t.exports.scal = n(426),
  t.exports.copy = n(427),
  t.exports.axpy = n(428),
  t.exports.dot = n(429),
  t.exports.cpsc = n(430),
  t.exports.nrm2 = n(431),
  t.exports.asum = n(432),
  t.exports.iamax = n(433),
  t.exports.rotg = n(434)
},
function (t, e, n) {
  var r = n(2),
  o = n(3).document,
  i = r(o) && r(o.createElement);
  t.exports = function (t) {
    return i ? o.createElement(t)  : {
    }
  }
},
function (t, e, n) {
  for (var r = n(3), o = n(13), i = n(27), a = i('typed_array'), s = i('view'), u = !(!r.ArrayBuffer || !r.DataView), c = u, l = 0, p = 9, h, f = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(','); l < 9; ) (h = r[f[l++]]) ? (o(h.prototype, a, !0), o(h.prototype, s, !0))  : c = !1;
  t.exports = {
    ABV: u,
    CONSTR: c,
    TYPED: a,
    VIEW: s
  }
},
function (t, e, n) {
  var r = n(38);
  t.exports = Object('z').propertyIsEnumerable(0) ? Object : function (t) {
    return 'String' == r(t) ? t.split('')  : Object(t)
  }
},
function (t, e, n) {
  var r = n(16),
  o = n(9),
  i = n(39);
  t.exports = function (t) {
    return function (e, n, a) {
      var s = r(e),
      u = o(s.length),
      c = i(a, u),
      l;
      if (t && n != n) {
        for (; u > c; ) if ((l = s[c++]) != l) return !0
      } else for (; u > c; c++) if ((t || c in s) && s[c] === n) return t || c || 0;
      return !t && - 1
    }
  }
},
function (t, e, n) {
  var r = n(84) ('keys'),
  o = n(27);
  t.exports = function (t) {
    return r[t] || (r[t] = o(t))
  }
},
function (t, e, n) {
  var r = n(3),
  o = '__core-js_shared__',
  i = r[o] || (r[o] = {
  });
  t.exports = function (t) {
    return i[t] || (i[t] = {
    })
  }
},
function (t, e) {
  t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',')
},
function (t, e, n) {
  'use strict';
  var r = n(15),
  o = n(39),
  i = n(9);
  t.exports = function t(e) {
    for (var n = r(this), a = i(n.length), s = arguments.length, u = o(s > 1 ? arguments[1] : void 0, a), c = s > 2 ? arguments[2] : void 0, l = void 0 === c ? a : o(c, a); l > u; ) n[u++] = e;
    return n
  }
},
function (t, e, n) {
  var r = n(4),
  o = n(23),
  i = n(6) ('species');
  t.exports = function (t, e) {
    var n = r(t).constructor,
    a;
    return void 0 === n || void 0 == (a = r(n) [i]) ? e : o(a)
  }
},
function (t, e, n) {
  var r = n(38),
  o = n(6) ('toStringTag'),
  i = 'Arguments' == r(function () {
    return arguments
  }()),
  a = function (t, e) {
    try {
      return t[e]
    } catch (t) {
    }
  };
  t.exports = function (t) {
    var e,
    n,
    s;
    return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (n = a(e = Object(t), o)) ? n : i ? r(e)  : 'Object' == (s = r(e)) && 'function' == typeof e.callee ? 'Arguments' : s
  }
},
function (t, e, n) {
  var r = n(41),
  o = n(6) ('iterator'),
  i = Array.prototype;
  t.exports = function (t) {
    return void 0 !== t && (r.Array === t || i[o] === t)
  }
},
function (t, e, n) {
  var r = n(88),
  o = n(6) ('iterator'),
  i = n(41);
  t.exports = n(34).getIteratorMethod = function (t) {
    if (void 0 != t) return t[o] || t['@@iterator'] || i[r(t)]
  }
},
function (t, e, n) {
  'use strict';
  var r = n(43),
  o = n(116),
  i = n(41),
  a = n(16);
  t.exports = n(117) (Array, 'Array', function (t, e) {
    this._t = a(t),
    this._i = 0,
    this._k = e
  }, function () {
    var t = this._t,
    e = this._k,
    n = this._i++;
    return !t || n >= t.length ? (this._t = void 0, o(1))  : 'keys' == e ? o(0, n)  : 'values' == e ? o(0, t[n])  : o(0, [
      n,
      t[n]
    ])
  }, 'values'),
  i.Arguments = i.Array,
  r('keys'),
  r('values'),
  r('entries')
},
function (t, e, n) {
  var r = n(2),
  o = n(4),
  i = function (t, e) {
    if (o(t), !r(e) && null !== e) throw TypeError(e + ': can\'t set as prototype!')
  };
  t.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {
    }
    ? function (t, e, r) {
      try {
        r = n(19) (Function.call, n(21).f(Object.prototype, '__proto__').set, 2),
        r(t, [
        ]),
        e = !(t instanceof Array)
      } catch (t) {
        e = !0
      }
      return function t(n, o) {
        return i(n, o),
        e ? n.__proto__ = o : r(n, o),
        n
      }
    }({
    }, !1)  : void 0),
    check: i
  }
},
function (t, e, n) {
  var r = n(19),
  o = n(123),
  i = n(114),
  a = n(79),
  s = n(3),
  u = s.process,
  c = s.setImmediate,
  l = s.clearImmediate,
  p = s.MessageChannel,
  h = s.Dispatch,
  f = 0,
  d = {
  },
  m = 'onreadystatechange',
  y,
  v,
  g,
  _ = function () {
    var t = + this;
    if (d.hasOwnProperty(t)) {
      var e = d[t];
      delete d[t],
      e()
    }
  },
  b = function (t) {
    _.call(t.data)
  };
  c && l || (c = function t(e) {
    for (var n = [
    ], r = 1; arguments.length > r; ) n.push(arguments[r++]);
    return d[++f] = function () {
      o('function' == typeof e ? e : Function(e), n)
    },
    y(f),
    f
  }, l = function t(e) {
    delete d[e]
  }, 'process' == n(38) (u) ? y = function (t) {
    u.nextTick(r(_, t, 1))
  }
   : h && h.now ? y = function (t) {
    h.now(r(_, t, 1))
  }
   : p ? (v = new p, g = v.port2, v.port1.onmessage = b, y = r(g.postMessage, g, 1))  : s.addEventListener && 'function' == typeof postMessage && !s.importScripts ? (y = function (t) {
    s.postMessage(t + '', '*')
  }, s.addEventListener('message', b, !1))  : y = m in a('script') ? function (t) {
    i.appendChild(a('script')) [m] = function () {
      i.removeChild(this),
      _.call(t)
    }
  }
   : function (t) {
    setTimeout(r(_, t, 1), 0)
  }),
  t.exports = {
    set: c,
    clear: l
  }
},
function (t, e, n) {
  var r = n(129),
  o = n(24);
  t.exports = function (t, e, n) {
    if (r(e)) throw TypeError('String#' + n + ' doesn\'t accept regex!');
    return String(o(t))
  }
},
function (t, e, n) {
  var r = n(6) ('match');
  t.exports = function (t) {
    var e = /./;
    try {
      '/./'[t](e)
    } catch (n) {
      try {
        return e[r] = !1,
        !'/./'[t](e)
      } catch (t) {
      }
    }
    return !0
  }
},
function (t, e, n) {
  'use strict';
  var r = n(7),
  o = n(26);
  t.exports = function (t, e, n) {
    e in t ? r.f(t, e, o(0, n))  : t[e] = n
  }
},
function (t, e) {
  t.exports = '\t\n\v\f\r   ᠎             　  ﻿'
},
function (t, e) {
  t.exports = Math.sign || function t(e) {
    return 0 == (e = + e) || e != e ? e : e < 0 ? - 1 : 1
  }
},
function (t, e) {
  var n = Math.expm1;
  t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || - 2e-17 != n( - 2e-17) ? function t(e) {
    return 0 == (e = + e) ? e : e > - 0.000001 && e < 0.000001 ? e + e * e / 2 : Math.exp(e) - 1
  }
   : n
},
function (t, e, n) {
  var r = n(3),
  o = r.navigator;
  t.exports = o && o.userAgent || ''
},
function (t, e, n) {
  var r = n(288),
  o = n(55),
  i = Object.prototype,
  a = i.hasOwnProperty,
  s = i.propertyIsEnumerable,
  u = r(function () {
    return arguments
  }()) ? r : function (t) {
    return o(t) && a.call(t, 'callee') && !s.call(t, 'callee')
  };
  t.exports = u
},
function (t, e) {
  function n(t) {
    return 'number' == typeof t && t > - 1 && t % 1 == 0 && t <= r
  }
  var r = 9007199254740991;
  t.exports = n
},
function (t, e, n) {
  function r(t, e, n, a, s) {
    return t === e || (null == t || null == e || !i(t) && !i(e) ? t !== t && e !== e : o(t, e, n, a, r, s))
  }
  var o = n(299),
  i = n(55);
  t.exports = r
},
function (t, e, n) {
  var r = n(31),
  o = n(18),
  i = r(o, 'Map');
  t.exports = i
},
function (t, e, n) {
  function r(t) {
    var e = - 1,
    n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  var o = n(314),
  i = n(321),
  a = n(323),
  s = n(324),
  u = n(325);
  r.prototype.clear = o,
  r.prototype.delete = i,
  r.prototype.get = a,
  r.prototype.has = s,
  r.prototype.set = u,
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    e = o(e, t);
    for (var n = 0, r = e.length; null != t && n < r; ) t = t[i(e[n++])];
    return n && n == r ? t : void 0
  }
  var o = n(75),
  i = n(57);
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    if (o(t)) return !1;
    var n = typeof t;
    return !('number' != n && 'symbol' != n && 'boolean' != n && null != t && !i(t)) || (s.test(t) || !a.test(t) || null != e && t in Object(e))
  }
  var o = n(14),
  i = n(76),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  s = /^\w*$/;
  t.exports = r
},
function (t, e) {
  function n(t) {
    return t
  }
  t.exports = n
},
function (t, e, n) {
  'use strict';
  (function (e) {
    function r(t, e) {
      !i.isUndefined(t) && i.isUndefined(t['Content-Type']) && (t['Content-Type'] = e)
    }
    function o() {
      var t;
      return 'undefined' != typeof XMLHttpRequest ? t = n(155)  : void 0 !== e && (t = n(155)),
      t
    }
    var i = n(12),
    a = n(396),
    s = {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    u = {
      adapter: o(),
      transformRequest: [
        function t(e, n) {
          return a(n, 'Content-Type'),
          i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(n, 'application/x-www-form-urlencoded;charset=utf-8'), e.toString())  : i.isObject(e) ? (r(n, 'application/json;charset=utf-8'), JSON.stringify(e))  : e
        }
      ],
      transformResponse: [
        function t(e) {
          if ('string' == typeof e) try {
            e = JSON.parse(e)
          } catch (t) {
          }
          return e
        }
      ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: - 1,
      validateStatus: function t(e) {
        return e >= 200 && e < 300
      }
    };
    u.headers = {
      common: {
        Accept: 'application/json, text/plain, */*'
      }
    },
    i.forEach(['delete',
    'get',
    'head'], function t(e) {
      u.headers[e] = {
      }
    }),
    i.forEach(['post',
    'put',
    'patch'], function t(e) {
      u.headers[e] = i.merge(s)
    }),
    t.exports = u
  }).call(e, n(77))
},
function (t, e, n) {
  t.exports = !n(10) && !n(5) (function () {
    return 7 != Object.defineProperty(n(79) ('div'), 'a', {
      get: function () {
        return 7
      }
    }).a
  })
},
function (t, e, n) {
  'use strict';
  function r(t, e, n) {
    var r = new Array(n),
    o = 8 * n - e - 1,
    i = (1 << o) - 1,
    a = i >> 1,
    s = 23 === e ? G(2, - 24) - G(2, - 77)  : 0,
    u = 0,
    c = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
    l,
    p,
    h;
    for (t = U(t), t != t || t === L ? (p = t != t ? 1 : 0, l = i)  : (l = N(B(t) / q), t * (h = G(2, - l)) < 1 && (l--, h *= 2), t += l + a >= 1 ? s / h : s * G(2, 1 - a), t * h >= 2 && (l++, h /= 2), l + a >= i ? (p = 0, l = i)  : l + a >= 1 ? (p = (t * h - 1) * G(2, e), l += a)  : (p = t * G(2, a - 1) * G(2, e), l = 0)); e >= 8; r[u++] = 255 & p, p /= 256, e -= 8);
    for (l = l << e | p, o += e; o > 0; r[u++] = 255 & l, l /= 256, o -= 8);
    return r[--u] |= 128 * c,
    r
  }
  function o(t, e, n) {
    var r = 8 * n - e - 1,
    o = (1 << r) - 1,
    i = o >> 1,
    a = r - 7,
    s = n - 1,
    u = t[s--],
    c = 127 & u,
    l;
    for (u >>= 7; a > 0; c = 256 * c + t[s], s--, a -= 8);
    for (l = c & (1 << - a) - 1, c >>= - a, a += e; a > 0; l = 256 * l + t[s], s--, a -= 8);
    if (0 === c) c = 1 - i;
     else {
      if (c === o) return l ? NaN : u ? - L : L;
      l += G(2, e),
      c -= i
    }
    return (u ? - 1 : 1) * l * G(2, c - e)
  }
  function i(t) {
    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
  }
  function a(t) {
    return [255 & t]
  }
  function s(t) {
    return [255 & t,
    t >> 8 & 255]
  }
  function u(t) {
    return [255 & t,
    t >> 8 & 255,
    t >> 16 & 255,
    t >> 24 & 255]
  }
  function c(t) {
    return r(t, 52, 8)
  }
  function l(t) {
    return r(t, 23, 4)
  }
  function p(t, e, n) {
    C(t[A], e, {
      get: function () {
        return this[n]
      }
    })
  }
  function h(t, e, n, r) {
    var o = + n,
    i = T(o);
    if (i + e > t[Y]) throw I(F);
    var a = t[X]._b,
    s = i + t[$],
    u = a.slice(s, s + e);
    return r ? u : u.reverse()
  }
  function f(t, e, n, r, o, i) {
    var a = + n,
    s = T(a);
    if (s + e > t[Y]) throw I(F);
    for (var u = t[X]._b, c = s + t[$], l = r( + o), p = 0; p < e; p++) u[c + p] = l[i ? p : e - p - 1]
  }
  var d = n(3),
  m = n(10),
  y = n(35),
  v = n(80),
  g = n(13),
  _ = n(36),
  b = n(5),
  x = n(37),
  w = n(28),
  S = n(9),
  T = n(112),
  P = n(48).f,
  C = n(7).f,
  k = n(86),
  O = n(40),
  E = 'ArrayBuffer',
  j = 'DataView',
  A = 'prototype',
  F = 'Wrong index!',
  M = d[E],
  R = d[j],
  D = d.Math,
  I = d.RangeError,
  L = d.Infinity,
  z = M,
  U = D.abs,
  G = D.pow,
  N = D.floor,
  B = D.log,
  q = D.LN2,
  V = 'buffer',
  H = 'byteLength',
  W = 'byteOffset',
  X = m ? '_b' : V,
  Y = m ? '_l' : H,
  $ = m ? '_o' : W;
  if (v.ABV) {
    if (!b(function () {
      M(1)
    }) || !b(function () {
      new M( - 1)
    }) || b(function () {
      return new M,
      new M(1.5),
      new M(NaN),
      M.name != E
    })) {
      M = function t(e) {
        return x(this, M),
        new z(T(e))
      };
      for (var K = M[A] = z[A], J = P(z), Q = 0, Z; J.length > Q; ) (Z = J[Q++]) in M || g(M, Z, z[Z]);
      y || (K.constructor = M)
    }
    var tt = new R(new M(2)),
    et = R[A].setInt8;
    tt.setInt8(0, 2147483648),
    tt.setInt8(1, 2147483649),
    !tt.getInt8(0) && tt.getInt8(1) || _(R[A], {
      setInt8: function t(e, n) {
        et.call(this, e, n << 24 >> 24)
      },
      setUint8: function t(e, n) {
        et.call(this, e, n << 24 >> 24)
      }
    }, !0)
  } else M = function t(e) {
    x(this, M, E);
    var n = T(e);
    this._b = k.call(new Array(n), 0),
    this[Y] = n
  },
  R = function t(e, n, r) {
    x(this, R, j),
    x(e, M, j);
    var o = e[Y],
    i = w(n);
    if (i < 0 || i > o) throw I('Wrong offset!');
    if (r = void 0 === r ? o - i : S(r), i + r > o) throw I('Wrong length!');
    this[X] = e,
    this[$] = i,
    this[Y] = r
  },
  m && (p(M, H, '_l'), p(R, V, '_b'), p(R, H, '_l'), p(R, W, '_o')),
  _(R[A], {
    getInt8: function t(e) {
      return h(this, 1, e) [0] << 24 >> 24
    },
    getUint8: function t(e) {
      return h(this, 1, e) [0]
    },
    getInt16: function t(e) {
      var n = h(this, 2, e, arguments[1]);
      return (n[1] << 8 | n[0]) << 16 >> 16
    },
    getUint16: function t(e) {
      var n = h(this, 2, e, arguments[1]);
      return n[1] << 8 | n[0]
    },
    getInt32: function t(e) {
      return i(h(this, 4, e, arguments[1]))
    },
    getUint32: function t(e) {
      return i(h(this, 4, e, arguments[1])) >>> 0
    },
    getFloat32: function t(e) {
      return o(h(this, 4, e, arguments[1]), 23, 4)
    },
    getFloat64: function t(e) {
      return o(h(this, 8, e, arguments[1]), 52, 8)
    },
    setInt8: function t(e, n) {
      f(this, 1, e, a, n)
    },
    setUint8: function t(e, n) {
      f(this, 1, e, a, n)
    },
    setInt16: function t(e, n) {
      f(this, 2, e, s, n, arguments[2])
    },
    setUint16: function t(e, n) {
      f(this, 2, e, s, n, arguments[2])
    },
    setInt32: function t(e, n) {
      f(this, 4, e, u, n, arguments[2])
    },
    setUint32: function t(e, n) {
      f(this, 4, e, u, n, arguments[2])
    },
    setFloat32: function t(e, n) {
      f(this, 4, e, l, n, arguments[2])
    },
    setFloat64: function t(e, n) {
      f(this, 8, e, c, n, arguments[2])
    }
  });
  O(M, E),
  O(R, j),
  g(R[A], v.VIEW, !0),
  e[E] = M,
  e[j] = R
},
function (t, e, n) {
  var r = n(28),
  o = n(9);
  t.exports = function (t) {
    if (void 0 === t) return 0;
    var e = r(t),
    n = o(e);
    if (e !== n) throw RangeError('Wrong length!');
    return n
  }
},
function (t, e, n) {
  var r = n(11),
  o = n(16),
  i = n(82) (!1),
  a = n(83) ('IE_PROTO');
  t.exports = function (t, e) {
    var n = o(t),
    s = 0,
    u = [
    ],
    c;
    for (c in n) c != a && r(n, c) && u.push(c);
    for (; e.length > s; ) r(n, c = e[s++]) && (~i(u, c) || u.push(c));
    return u
  }
},
function (t, e, n) {
  var r = n(3).document;
  t.exports = r && r.documentElement
},
function (t, e, n) {
  var r = n(38);
  t.exports = Array.isArray || function t(e) {
    return 'Array' == r(e)
  }
},
function (t, e) {
  t.exports = function (t, e) {
    return {
      value: e,
      done: !!t
    }
  }
},
function (t, e, n) {
  'use strict';
  var r = n(35),
  o = n(0),
  i = n(22),
  a = n(13),
  s = n(11),
  u = n(41),
  c = n(177),
  l = n(40),
  p = n(42),
  h = n(6) ('iterator'),
  f = !([].keys && 'next' in [
  ].keys()),
  d = 'keys',
  m = 'values',
  y = function () {
    return this
  };
  t.exports = function (t, e, n, v, g, _, b) {
    c(n, e, v);
    var x = function (t) {
      if (!f && t in P) return P[t];
      switch (t) {
        case d:
          return function e() {
            return new n(this, t)
          };
        case m:
          return function e() {
            return new n(this, t)
          }
      }
      return function e() {
        return new n(this, t)
    }
  },
  w = e + ' Iterator',
  S = g == m,
  T = !1,
  P = t.prototype,
  C = P[h] || P['@@iterator'] || g && P[g],
  k = !f && C || x(g),
  O = g ? S ? x('entries')  : k : void 0,
  E = 'Array' == e ? P.entries || C : C,
  j,
  A,
  F;
  if (E && (F = p(E.call(new t))) !== Object.prototype && F.next && (l(F, w, !0), r || s(F, h) || a(F, h, y)), S && C && C.name !== m && (T = !0, k = function t() {
    return C.call(this)
  }), r && !b || !f && !T && P[h] || a(P, h, k), u[e] = k, u[w] = y, g) if (j = {
    values: S ? k : x(m),
    keys: _ ? k : x(d),
    entries: O
  }, b) for (A in j) A in P || i(P, A, j[A]);
   else o(o.P + o.F * (f || T), e, j);
  return j
}
},
function (t, e, n) {
'use strict';
var r = n(15),
o = n(39),
i = n(9);
t.exports = [
].copyWithin || function t(e, n) {
  var a = r(this),
  s = i(a.length),
  u = o(e, s),
  c = o(n, s),
  l = arguments.length > 2 ? arguments[2] : void 0,
  p = Math.min((void 0 === l ? s : o(l, s)) - c, s - u),
  h = 1;
  for (c < u && u < c + p && (h = - 1, c += p - 1, u += p - 1); p-- > 0; ) c in a ? a[u] = a[c] : delete a[u],
  u += h,
  c += h;
  return a
}
},
function (t, e, n) {
'use strict';
var r = n(7).f,
o = n(49),
i = n(36),
a = n(19),
s = n(37),
u = n(62),
c = n(117),
l = n(116),
p = n(60),
h = n(10),
f = n(25).fastKey,
d = n(44),
m = h ? '_s' : 'size',
y = function (t, e) {
  var n = f(e),
  r;
  if ('F' !== n) return t._i[n];
  for (r = t._f; r; r = r.n) if (r.k == e) return r
};
t.exports = {
  getConstructor: function (t, e, n, c) {
    var l = t(function (t, r) {
      s(t, l, e, '_i'),
      t._t = e,
      t._i = o(null),
      t._f = void 0,
      t._l = void 0,
      t[m] = 0,
      void 0 != r && u(r, n, t[c], t)
    });
    return i(l.prototype, {
      clear: function t() {
        for (var n = d(this, e), r = n._i, o = n._f; o; o = o.n) o.r = !0,
        o.p && (o.p = o.p.n = void 0),
        delete r[o.i];
        n._f = n._l = void 0,
        n[m] = 0
      },
      delete : function (t) {
        var n = d(this, e),
        r = y(n, t);
        if (r) {
          var o = r.n,
          i = r.p;
          delete n._i[r.i],
          r.r = !0,
          i && (i.n = o),
          o && (o.p = i),
          n._f == r && (n._f = o),
          n._l == r && (n._l = i),
          n[m]--
        }
        return !!r
      },
      forEach: function t(n) {
        d(this, e);
        for (var r = a(n, arguments.length > 1 ? arguments[1] : void 0, 3), o; o = o ? o.n : this._f; ) for (r(o.v, o.k, this); o && o.r; ) o = o.p
      },
      has: function t(n) {
        return !!y(d(this, e), n)
      }
    }),
    h && r(l.prototype, 'size', {
      get: function () {
        return d(this, e) [m]
      }
    }),
    l
  },
  def: function (t, e, n) {
    var r = y(t, e),
    o,
    i;
    return r ? r.v = n : (t._l = r = {
      i: i = f(e, !0),
      k: e,
      v: n,
      p: o = t._l,
      n: void 0,
      r: !1
    }, t._f || (t._f = r), o && (o.n = r), t[m]++, 'F' !== i && (t._i[i] = r)),
    t
  },
  getEntry: y,
  setStrong: function (t, e, n) {
    c(t, e, function (t, n) {
      this._t = d(t, e),
      this._k = n,
      this._l = void 0
    }, function () {
      for (var t = this, e = t._k, n = t._l; n && n.r; ) n = n.p;
      return t._t && (t._l = n = n ? n.n : t._t._f) ? 'keys' == e ? l(0, n.k)  : 'values' == e ? l(0, n.v)  : l(0, [
        n.k,
        n.v
      ])  : (t._t = void 0, l(1))
    }, n ? 'entries' : 'values', !n, !0),
    p(e)
  }
}
},
function (t, e, n) {
var r = n(4);
t.exports = function (t, e, n, o) {
  try {
    return o ? e(r(n) [0], n[1])  : e(n)
  } catch (e) {
    var i = t.return;
    throw void 0 !== i && r(i.call(t)),
    e
  }
}
},
function (t, e, n) {
'use strict';
var r = n(29),
o = n(64),
i = n(51),
a = n(15),
s = n(81),
u = Object.assign;
t.exports = !u || n(5) (function () {
  var t = {
  },
  e = {
  },
  n = Symbol(),
  r = 'abcdefghijklmnopqrst';
  return t[n] = 7,
  r.split('').forEach(function (t) {
    e[t] = t
  }),
  7 != u({
  }, t) [n] || Object.keys(u({
  }, e)).join('') != r
}) ? function t(e, n) {
  for (var u = a(e), c = arguments.length, l = 1, p = o.f, h = i.f; c > l; ) for (var f = s(arguments[l++]), d = p ? r(f).concat(p(f))  : r(f), m = d.length, y = 0, v; m > y; ) h.call(f, v = d[y++]) && (u[v] = f[v]);
  return u
}
 : u
},
function (t, e, n) {
'use strict';
var r = n(36),
o = n(25).getWeak,
i = n(4),
a = n(2),
s = n(37),
u = n(62),
c = n(50),
l = n(11),
p = n(44),
h = c(5),
f = c(6),
d = 0,
m = function (t) {
  return t._l || (t._l = new y)
},
y = function () {
  this.a = [
  ]
},
v = function (t, e) {
  return h(t.a, function (t) {
    return t[0] === e
  })
};
y.prototype = {
  get: function (t) {
    var e = v(this, t);
    if (e) return e[1]
  },
  has: function (t) {
    return !!v(this, t)
  },
  set: function (t, e) {
    var n = v(this, t);
    n ? n[1] = e : this.a.push([t,
    e])
  },
  delete : function (t) {
    var e = f(this.a, function (e) {
      return e[0] === t
    });
    return ~e && this.a.splice(e, 1),
    !!~e
  }
},
t.exports = {
  getConstructor: function (t, e, n, i) {
    var c = t(function (t, r) {
      s(t, c, e, '_i'),
      t._t = e,
      t._i = d++,
      t._l = void 0,
      void 0 != r && u(r, n, t[i], t)
    });
    return r(c.prototype, {
      delete : function (t) {
        if (!a(t)) return !1;
        var n = o(t);
        return !0 === n ? m(p(this, e)).delete (t)  : n && l(n, this._i) && delete n[this._i]
      },
      has: function t(n) {
        if (!a(n)) return !1;
        var r = o(n);
        return !0 === r ? m(p(this, e)).has(n)  : r && l(r, this._i)
      }
    }),
    c
  },
  def: function (t, e, n) {
    var r = o(i(e), !0);
    return !0 === r ? m(t).set(e, n)  : r[t._i] = n,
    t
  },
  ufstore: m
}
},
function (t, e) {
t.exports = function (t, e, n) {
  var r = void 0 === n;
  switch (e.length) {
    case 0:
      return r ? t()  : t.call(n);
    case 1:
      return r ? t(e[0])  : t.call(n, e[0]);
    case 2:
      return r ? t(e[0], e[1])  : t.call(n, e[0], e[1]);
    case 3:
      return r ? t(e[0], e[1], e[2])  : t.call(n, e[0], e[1], e[2]);
    case 4:
      return r ? t(e[0], e[1], e[2], e[3])  : t.call(n, e[0], e[1], e[2], e[3])
  }
  return t.apply(n, e)
}
},
function (t, e, n) {
var r = n(48),
o = n(64),
i = n(4),
a = n(3).Reflect;
t.exports = a && a.ownKeys || function t(e) {
  var n = r.f(i(e)),
  a = o.f;
  return a ? n.concat(a(e))  : n
}
},
function (t, e, n) {
'use strict';
function r(t) {
  var e,
  n;
  this.promise = new t(function (t, r) {
    if (void 0 !== e || void 0 !== n) throw TypeError('Bad Promise constructor');
    e = t,
    n = r
  }),
  this.resolve = o(e),
  this.reject = o(n)
}
var o = n(23);
t.exports.f = function (t) {
  return new r(t)
}
},
function (t, e, n) {
e.f = n(6)
},
function (t, e, n) {
var r = n(16),
o = n(48).f,
i = {
}.toString,
a = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window)  : [
],
s = function (t) {
  try {
    return o(t)
  } catch (t) {
    return a.slice()
  }
};
t.exports.f = function t(e) {
  return a && '[object Window]' == i.call(e) ? s(e)  : o(r(e))
}
},
function (t, e, n) {
'use strict';
var r = n(28),
o = n(24);
t.exports = function t(e) {
  var n = String(o(this)),
  i = '',
  a = r(e);
  if (a < 0 || a == 1 / 0) throw RangeError('Count can\'t be negative');
  for (; a > 0; (a >>>= 1) && (n += n)) 1 & a && (i += n);
  return i
}
},
function (t, e, n) {
var r = n(2),
o = n(38),
i = n(6) ('match');
t.exports = function (t) {
  var e;
  return r(t) && (void 0 !== (e = t[i]) ? !!e : 'RegExp' == o(t))
}
},
function (t, e, n) {
var r = n(2),
o = Math.floor;
t.exports = function t(e) {
  return !r(e) && isFinite(e) && o(e) === e
}
},
function (t, e, n) {
var r = n(0),
o = n(24),
i = n(5),
a = n(97),
s = '[' + a + ']',
u = '​',
c = RegExp('^' + s + s + '*'),
l = RegExp(s + s + '*$'),
p = function (t, e, n) {
  var o = {
  },
  s = i(function () {
    return !!a[t]() || u[t]() != u
  }),
  c = o[t] = s ? e(h)  : a[t];
  n && (o[n] = c),
  r(r.P + r.F * s, 'String', o)
},
h = p.trim = function (t, e) {
  return t = String(o(t)),
  1 & e && (t = t.replace(c, '')),
  2 & e && (t = t.replace(l, '')),
  t
};
t.exports = p
},
function (t, e) {
t.exports = Math.log1p || function t(e) {
  return (e = + e) > - 1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
}
},
function (t, e, n) {
var r = n(29),
o = n(16),
i = n(51).f;
t.exports = function (t) {
  return function (e) {
    for (var n = o(e), a = r(n), s = a.length, u = 0, c = [
    ], l; s > u; ) i.call(n, l = a[u++]) && c.push(t ? [
      l,
      n[l]
    ] : n[l]);
    return c
  }
}
},
function (t, e, n) {
var r = n(9),
o = n(128),
i = n(24);
t.exports = function (t, e, n, a) {
  var s = String(i(t)),
  u = s.length,
  c = void 0 === n ? ' ' : String(n),
  l = r(e);
  if (l <= u || '' == c) return s;
  var p = l - u,
  h = o.call(c, Math.ceil(p / c.length));
  return h.length > p && (h = h.slice(0, p)),
  a ? h + s : s + h
}
},
function (t, e, n) {
(function (e) {
  var n = 'object' == typeof e && e && e.Object === Object && e;
  t.exports = n
}).call(e, n(30))
},
function (t, e, n) {
(function (t) {
  var r = n(18),
  o = n(291),
  i = 'object' == typeof e && e && !e.nodeType && e,
  a = i && 'object' == typeof t && t && !t.nodeType && t,
  s = a && a.exports === i,
  u = s ? r.Buffer : void 0,
  c = u ? u.isBuffer : void 0,
  l = c || o;
  t.exports = l
}).call(e, n(66) (t))
},
function (t, e, n) {
var r = n(292),
o = n(293),
i = n(294),
a = i && i.isTypedArray,
s = a ? o(a)  : r;
t.exports = s
},
function (t, e, n) {
function r(t) {
  if (!i(t)) return !1;
  var e = o(t);
  return e == s || e == u || e == a || e == c
}
var o = n(53),
i = n(45),
a = '[object AsyncFunction]',
s = '[object Function]',
u = '[object GeneratorFunction]',
c = '[object Proxy]';
t.exports = r
},
function (t, e, n) {
function r(t) {
  var e = this.__data__ = new o(t);
  this.size = e.size
}
var o = n(69),
i = n(305),
a = n(306),
s = n(307),
u = n(308),
c = n(309);
r.prototype.clear = i,
r.prototype.delete = a,
r.prototype.get = s,
r.prototype.has = u,
r.prototype.set = c,
t.exports = r
},
function (t, e) {
function n(t) {
  if (null != t) {
    try {
      return o.call(t)
    } catch (t) {
    }
    try {
      return t + ''
    } catch (t) {
    }
  }
  return ''
}
var r = Function.prototype,
o = r.toString;
t.exports = n
},
function (t, e, n) {
function r(t, e, n, r, c, l) {
  var p = n & s,
  h = t.length,
  f = e.length;
  if (h != f && !(p && f > h)) return !1;
  var d = l.get(t);
  if (d && l.get(e)) return d == e;
  var m = - 1,
  y = !0,
  v = n & u ? new o : void 0;
  for (l.set(t, e), l.set(e, t); ++m < h; ) {
    var g = t[m],
    _ = e[m];
    if (r) var b = p ? r(_, g, m, e, t, l)  : r(g, _, m, t, e, l);
    if (void 0 !== b) {
      if (b) continue;
      y = !1;
      break
    }
    if (v) {
      if (!i(e, function (t, e) {
        if (!a(v, e) && (g === t || c(g, t, n, r, l))) return v.push(e)
      })) {
        y = !1;
        break
      }
    } else if (g !== _ && !c(g, _, n, r, l)) {
      y = !1;
      break
    }
  }
  return l.delete (t),
  l.delete (e),
  y
}
var o = n(326),
i = n(329),
a = n(330),
s = 1,
u = 2;
t.exports = r
},
function (t, e) {
function n(t, e) {
  for (var n = - 1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
  return t
}
t.exports = n
},
function (t, e) {
function n(t, e) {
  for (var n = - 1, r = null == t ? 0 : t.length, o = Array(r); ++n < r; ) o[n] = e(t[n], n, t);
  return o
}
t.exports = n
},
function (t, e, n) {
function r(t) {
  return t === t && !o(t)
}
var o = n(45);
t.exports = r
},
function (t, e) {
function n(t, e) {
  return function (n) {
    return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
  }
}
t.exports = n
},
function (t, e, n) {
function r(t, e) {
  return null != t && i(t, e, o)
}
var o = n(357),
i = n(358);
t.exports = r
},
function (t, e, n) {
var r = n(363),
o = n(366),
i = o(r);
t.exports = i
},
function (t, e, n) {
function r(t, e, n) {
  if (!s(n)) return !1;
  var r = typeof e;
  return !!('number' == r ? i(n) && a(e, n.length)  : 'string' == r && e in n) && o(n[e], t)
}
var o = n(71),
i = n(56),
a = n(67),
s = n(45);
t.exports = r
},
function (t, e, n) {
function r(t) {
  var e = o(t),
  n = e % 1;
  return e === e ? n ? e - n : e : 0
}
var o = n(150);
t.exports = r
},
function (t, e, n) {
function r(t) {
  if (!t) return 0 === t ? t : 0;
  if ((t = o(t)) === i || t === - i) {
    return (t < 0 ? - 1 : 1) * a
  }
  return t === t ? t : 0
}
var o = n(374),
i = 1 / 0,
a = 1.7976931348623157e+308;
t.exports = r
},
function (t, e, n) {
var r = n(31),
o = function () {
  try {
    var t = r(Object, 'defineProperty');
    return t({
    }, '', {
    }),
    t
  } catch (t) {
  }
}();
t.exports = o
},
function (t, e, n) {
function r(t, e, n, a, s) {
  var u = - 1,
  c = t.length;
  for (n || (n = i), s || (s = [
  ]); ++u < c; ) {
    var l = t[u];
    e > 0 && n(l) ? e > 1 ? r(l, e - 1, n, a, s)  : o(s, l)  : a || (s[s.length] = l)
  }
  return s
}
var o = n(142),
i = n(383);
t.exports = r
},
function (t, e, n) {
'use strict';
t.exports = function t(e, n) {
  return function t() {
    for (var r = new Array(arguments.length), o = 0; o < r.length; o++) r[o] = arguments[o];
    return e.apply(n, r)
  }
}
},
function (t, e) {
function n(t) {
  return !!t.constructor && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
}
function r(t) {
  return 'function' == typeof t.readFloatLE && 'function' == typeof t.slice && n(t.slice(0, 0))
}
t.exports = function (t) {
  return null != t && (n(t) || r(t) || !!t._isBuffer)
}
},
function (t, e, n) {
'use strict';
var r = n(12),
o = n(397),
i = n(399),
a = n(400),
s = n(401),
u = n(156),
c = 'undefined' != typeof window && window.btoa && window.btoa.bind(window) || n(402);
t.exports = function t(e) {
  return new Promise(function t(l, p) {
    var h = e.data,
    f = e.headers;
    r.isFormData(h) && delete f['Content-Type'];
    var d = new XMLHttpRequest,
    m = 'onreadystatechange',
    y = !1;
    if ('undefined' == typeof window || !window.XDomainRequest || 'withCredentials' in d || s(e.url) || (d = new window.XDomainRequest, m = 'onload', y = !0, d.onprogress = function t() {
    }, d.ontimeout = function t() {
    }), e.auth) {
      var v = e.auth.username || '',
      g = e.auth.password || '';
      f.Authorization = 'Basic ' + c(v + ':' + g)
    }
    if (d.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d[m] = function t() {
      if (d && (4 === d.readyState || y) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf('file:'))) {
        var n = 'getAllResponseHeaders' in d ? a(d.getAllResponseHeaders())  : null,
        r = e.responseType && 'text' !== e.responseType ? d.response : d.responseText,
        i = {
          data: r,
          status: 1223 === d.status ? 204 : d.status,
          statusText: 1223 === d.status ? 'No Content' : d.statusText,
          headers: n,
          config: e,
          request: d
        };
        o(l, p, i),
        d = null
      }
    }, d.onerror = function t() {
      p(u('Network Error', e, null, d)),
      d = null
    }, d.ontimeout = function t() {
      p(u('timeout of ' + e.timeout + 'ms exceeded', e, 'ECONNABORTED', d)),
      d = null
    }, r.isStandardBrowserEnv()) {
      var _ = n(403),
      b = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName)  : void 0;
      b && (f[e.xsrfHeaderName] = b)
    }
    if ('setRequestHeader' in d && r.forEach(f, function t(e, n) {
      void 0 === h && 'content-type' === n.toLowerCase() ? delete f[n] : d.setRequestHeader(n, e)
    }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
      d.responseType = e.responseType
    } catch (t) {
      if ('json' !== e.responseType) throw t
    }
    'function' == typeof e.onDownloadProgress && d.addEventListener('progress', e.onDownloadProgress),
    'function' == typeof e.onUploadProgress && d.upload && d.upload.addEventListener('progress', e.onUploadProgress),
    e.cancelToken && e.cancelToken.promise.then(function t(e) {
      d && (d.abort(), p(e), d = null)
    }),
    void 0 === h && (h = null),
    d.send(h)
  })
}
},
function (t, e, n) {
'use strict';
var r = n(398);
t.exports = function t(e, n, o, i, a) {
  var s = new Error(e);
  return r(s, n, o, i, a)
}
},
function (t, e, n) {
'use strict';
t.exports = function t(e) {
  return !(!e || !e.__CANCEL__)
}
},
function (t, e, n) {
'use strict';
function r(t) {
  this.message = t
}
r.prototype.toString = function t() {
  return 'Cancel' + (this.message ? ': ' + this.message : '')
},
r.prototype.__CANCEL__ = !0,
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
  this.argTypes = [
  ],
  this.shimArgs = [
  ],
  this.arrayArgs = [
  ],
  this.arrayBlockIndices = [
  ],
  this.scalarArgs = [
  ],
  this.offsetArgs = [
  ],
  this.offsetArgIndex = [
  ],
  this.indexArgs = [
  ],
  this.shapeArgs = [
  ],
  this.funcName = '',
  this.pre = null,
  this.body = null,
  this.post = null,
  this.debug = !1
}
function o(t) {
  var e = new r;
  e.pre = t.pre,
  e.body = t.body,
  e.post = t.post;
  var n = t.args.slice(0);
  e.argTypes = n;
  for (var o = 0; o < n.length; ++o) {
    var a = n[o];
    if ('array' === a || 'object' == typeof a && a.blockIndices) {
      if (e.argTypes[o] = 'array', e.arrayArgs.push(o), e.arrayBlockIndices.push(a.blockIndices ? a.blockIndices : 0), e.shimArgs.push('array' + o), o < e.pre.args.length && e.pre.args[o].count > 0) throw new Error('cwise: pre() block may not reference array args');
      if (o < e.post.args.length && e.post.args[o].count > 0) throw new Error('cwise: post() block may not reference array args')
    } else if ('scalar' === a) e.scalarArgs.push(o),
    e.shimArgs.push('scalar' + o);
     else if ('index' === a) {
      if (e.indexArgs.push(o), o < e.pre.args.length && e.pre.args[o].count > 0) throw new Error('cwise: pre() block may not reference array index');
      if (o < e.body.args.length && e.body.args[o].lvalue) throw new Error('cwise: body() block may not write to array index');
      if (o < e.post.args.length && e.post.args[o].count > 0) throw new Error('cwise: post() block may not reference array index')
    } else if ('shape' === a) {
      if (e.shapeArgs.push(o), o < e.pre.args.length && e.pre.args[o].lvalue) throw new Error('cwise: pre() block may not write to array shape');
      if (o < e.body.args.length && e.body.args[o].lvalue) throw new Error('cwise: body() block may not write to array shape');
      if (o < e.post.args.length && e.post.args[o].lvalue) throw new Error('cwise: post() block may not write to array shape')
    } else {
      if ('object' != typeof a || !a.offset) throw new Error('cwise: Unknown argument type ' + n[o]);
      e.argTypes[o] = 'offset',
      e.offsetArgs.push({
        array: a.array,
        offset: a.offset
      }),
      e.offsetArgIndex.push(o)
    }
  }
  if (e.arrayArgs.length <= 0) throw new Error('cwise: No array arguments specified');
  if (e.pre.args.length > n.length) throw new Error('cwise: Too many arguments in pre() block');
  if (e.body.args.length > n.length) throw new Error('cwise: Too many arguments in body() block');
  if (e.post.args.length > n.length) throw new Error('cwise: Too many arguments in post() block');
  return e.debug = !!t.printCode || !!t.debug,
  e.funcName = t.funcName || 'cwise',
  e.blockSize = t.blockSize || 64,
  i(e)
}
var i = n(416);
t.exports = o
},
function (t, e, n) {
'use strict';
function r(t, e) {
  for (var n = 1, r = t.length, o = t[0], i = t[0], a = 1; a < r; ++a) if (i = o, o = t[a], e(o, i)) {
    if (a === n) {
      n++;
      continue
    }
    t[n++] = o
  }
  return t.length = n,
  t
}
function o(t) {
  for (var e = 1, n = t.length, r = t[0], o = t[0], i = 1; i < n; ++i, o = r) if (o = r, (r = t[i]) !== o) {
    if (i === e) {
      e++;
      continue
    }
    t[e++] = r
  }
  return t.length = e,
  t
}
function i(t, e, n) {
  return 0 === t.length ? t : e ? (n || t.sort(e), r(t, e))  : (n || t.sort(), o(t))
}
t.exports = i
},
function (t, e, n) {
'use strict';
function r(t, e) {
  var n,
  r = [
  ],
  i = [
  ];
  if (void 0 !== e && !Array.isArray(e)) throw new Error('axes must be an Array list of dimensions to squeeze');
  for (n = 0; n < t.shape.length; n++) (1 !== t.shape[n] || void 0 !== e && - 1 === e.indexOf(n)) && (r.push(t.shape[n]), i.push(t.stride[n]));
  return o(t.data, r, i, t.offset)
}
var o = n(58);
t.exports = r
},
function (t, e, n) {
function r(t) {
  return t && t.length ? o(t, i)  : 0
}
var o = n(422),
i = n(108);
t.exports = r
},
function (t, e, n) {
'use strict';
function r(t, e) {
  var n,
  r;
  if (void 0 !== e && (!Number.isFinite(e) || e % 1 !== e)) throw new Error('axis of dimension to unsqueeze must be an integer');
  return e = void 0 === e ? t.shape.length : e,
  n = t.shape.slice(0),
  r = t.stride.slice(0),
  n.splice(e || 0, 0, 1),
  r.splice(e || 0, 0, (r[e] || 1) * (n[e + 1] || 1)),
  o(t.data, n, r, t.offset)
}
var o = n(58);
t.exports = r
},
function (t, e) {
function n(t) {
  var e = null == t ? 0 : t.length;
  return e ? t[e - 1] : void 0
}
t.exports = n
},
function (t, e, n) {
'use strict';
function r(t) {
  var e = t.dtype;
  'generic' !== e && 'array' !== e || (e = 'double');
  var n = p.malloc(t.size, e),
  r = c(n, t.shape);
  return l.assign(r, t),
  r
}
function o(t, e) {
  e || (e = 'double');
  for (var n = 1, r = new Array(t.length), o = t.length - 1; o >= 0; --o) r[o] = n,
  n *= t[o];
  return c(p.malloc(n, e), t, r, 0)
}
function i(t) {
  'generic' !== t.dtype && 'array' !== t.dtype && p.free(t.data)
}
function a(t, e) {
  e || (e = 'double');
  for (var n = 1, r = new Array(t.length), o = t.length - 1; o >= 0; --o) r[o] = n,
  n *= t[o];
  for (var i = p.malloc(n, e), o = 0; o < n; ++o) i[o] = 0;
  return c(i, t, r, 0)
}
function s(t, e) {
  e || (e = 'double');
  for (var n = 1, r = new Array(t.length), o = t.length - 1; o >= 0; --o) r[o] = n,
  n *= t[o];
  for (var i = p.malloc(n, e), o = 0; o < n; ++o) i[o] = 1;
  return c(i, t, r, 0)
}
function u(t, e) {
  var n,
  r;
  e || (e = 'double');
  var o = 1,
  i = new Array(t.length);
  for (n = t.length - 1; n >= 0; --n) i[n] = o,
  o *= t[n];
  var a = p.malloc(o, e);
  for (n = 0; n < o; ++n) a[n] = 0;
  var s = 1 / 0,
  u = 0;
  for (n = t.length - 1; n >= 0; n--) u += i[n],
  s = Math.min(s, t[n]);
  for (n = 0, r = 0; n < s; n++, r += u) a[r] = 1;
  return c(a, t, i, 0)
}
var c = n(58),
l = n(1),
p = n(450);
e.clone = r,
e.malloc = o,
e.free = i,
e.zeros = a,
e.ones = s,
e.eye = u
},
function (t, e, n) {
'use strict';
function r(t, e, n) {
  var o = 0 | t[n];
  if (o <= 0) return [];
  var i = new Array(o),
  a;
  if (n === t.length - 1) for (a = 0; a < o; ++a) i[a] = e;
   else for (a = 0; a < o; ++a) i[a] = r(t, e, n + 1);
  return i
}
function o(t, e) {
  var n,
  r;
  for (n = new Array(t), r = 0; r < t; ++r) n[r] = e;
  return n
}
function i(t, e) {
  switch (void 0 === e && (e = 0), typeof t) {
    case 'number':
      if (t > 0) return o(0 | t, e);
      break;
    case 'object':
      if ('number' == typeof t.length) return r(t, e, 0)
  }
  return []
}
t.exports = i
},
function (t, e, n) {
'use strict';
function r(t, e, n) {
  this.fn = t,
  this.len = e,
  this.next = void 0,
  this.val = n
}
function o() {
}
function i(t) {
  this.head = t.head,
  this.tail = t.tail,
  this.len = t.len,
  this.next = t.states
}
function a() {
  this.len = 0,
  this.head = new r(o, 0, 0),
  this.tail = this.head,
  this.states = null
}
function s(t, e, n) {
  e[n] = 255 & t
}
function u(t, e, n) {
  for (; t > 127; ) e[n++] = 127 & t | 128,
  t >>>= 7;
  e[n] = t
}
function c(t, e) {
  this.len = t,
  this.next = void 0,
  this.val = e
}
function l(t, e, n) {
  for (; t.hi; ) e[n++] = 127 & t.lo | 128,
  t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0,
  t.hi >>>= 7;
  for (; t.lo > 127; ) e[n++] = 127 & t.lo | 128,
  t.lo = t.lo >>> 7;
  e[n++] = t.lo
}
function p(t, e, n) {
  e[n] = 255 & t,
  e[n + 1] = t >>> 8 & 255,
  e[n + 2] = t >>> 16 & 255,
  e[n + 3] = t >>> 24
}
t.exports = a;
var h = n(33),
f,
d = h.LongBits,
m = h.base64,
y = h.utf8;
a.create = h.Buffer ? function t() {
  return (a.create = function t() {
    return new f
  }) ()
}
 : function t() {
  return new a
},
a.alloc = function t(e) {
  return new h.Array(e)
},
h.Array !== Array && (a.alloc = h.pool(a.alloc, h.Array.prototype.subarray)),
a.prototype._push = function t(e, n, o) {
  return this.tail = this.tail.next = new r(e, n, o),
  this.len += n,
  this
},
c.prototype = Object.create(r.prototype),
c.prototype.fn = u,
a.prototype.uint32 = function t(e) {
  return this.len += (this.tail = this.tail.next = new c((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len,
  this
},
a.prototype.int32 = function t(e) {
  return e < 0 ? this._push(l, 10, d.fromNumber(e))  : this.uint32(e)
},
a.prototype.sint32 = function t(e) {
  return this.uint32((e << 1 ^ e >> 31) >>> 0)
},
a.prototype.uint64 = function t(e) {
  var n = d.from(e);
  return this._push(l, n.length(), n)
},
a.prototype.int64 = a.prototype.uint64,
a.prototype.sint64 = function t(e) {
  var n = d.from(e).zzEncode();
  return this._push(l, n.length(), n)
},
a.prototype.bool = function t(e) {
  return this._push(s, 1, e ? 1 : 0)
},
a.prototype.fixed32 = function t(e) {
  return this._push(p, 4, e >>> 0)
},
a.prototype.sfixed32 = a.prototype.fixed32,
a.prototype.fixed64 = function t(e) {
  var n = d.from(e);
  return this._push(p, 4, n.lo)._push(p, 4, n.hi)
},
a.prototype.sfixed64 = a.prototype.fixed64,
a.prototype.float = function t(e) {
  return this._push(h.float.writeFloatLE, 4, e)
},
a.prototype.double = function t(e) {
  return this._push(h.float.writeDoubleLE, 8, e)
};
var v = h.Array.prototype.set ? function t(e, n, r) {
  n.set(e, r)
}
 : function t(e, n, r) {
  for (var o = 0; o < e.length; ++o) n[r + o] = e[o]
};
a.prototype.bytes = function t(e) {
  var n = e.length >>> 0;
  if (!n) return this._push(s, 1, 0);
  if (h.isString(e)) {
    var r = a.alloc(n = m.length(e));
    m.decode(e, r, 0),
    e = r
  }
  return this.uint32(n)._push(v, n, e)
},
a.prototype.string = function t(e) {
  var n = y.length(e);
  return n ? this.uint32(n)._push(y.write, n, e)  : this._push(s, 1, 0)
},
a.prototype.fork = function t() {
  return this.states = new i(this),
  this.head = this.tail = new r(o, 0, 0),
  this.len = 0,
  this
},
a.prototype.reset = function t() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next)  : (this.head = this.tail = new r(o, 0, 0), this.len = 0),
  this
},
a.prototype.ldelim = function t() {
  var e = this.head,
  n = this.tail,
  r = this.len;
  return this.reset().uint32(r),
  r && (this.tail.next = e.next, this.tail = n, this.len += r),
  this
},
a.prototype.finish = function t() {
  for (var e = this.head.next, n = this.constructor.alloc(this.len), r = 0; e; ) e.fn(e.val, n, r),
  r += e.len,
  e = e.next;
  return n
},
a._configure = function (t) {
  f = t
}
},
function (t, e, n) {
'use strict';
function r(t, e) {
  return RangeError('index out of range: ' + t.pos + ' + ' + (e || 1) + ' > ' + t.len)
}
function o(t) {
  this.buf = t,
  this.pos = 0,
  this.len = t.length
}
function i() {
  var t = new l(0, 0),
  e = 0;
  if (!(this.len - this.pos > 4)) {
    for (; e < 3; ++e) {
      if (this.pos >= this.len) throw r(this);
      if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
    }
    return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0,
    t
  }
  for (; e < 4; ++e) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
  if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
  if (e = 0, this.len - this.pos > 4) {
    for (; e < 5; ++e) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
  } else for (; e < 5; ++e) {
    if (this.pos >= this.len) throw r(this);
    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
  }
  throw Error('invalid varint encoding')
}
function a(t, e) {
  return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
}
function s() {
  if (this.pos + 8 > this.len) throw r(this, 8);
  return new l(a(this.buf, this.pos += 4), a(this.buf, this.pos += 4))
}
t.exports = o;
var u = n(33),
c,
l = u.LongBits,
p = u.utf8,
h = 'undefined' != typeof Uint8Array ? function t(e) {
  if (e instanceof Uint8Array || Array.isArray(e)) return new o(e);
  throw Error('illegal buffer')
}
 : function t(e) {
  if (Array.isArray(e)) return new o(e);
  throw Error('illegal buffer')
};
o.create = u.Buffer ? function t(e) {
  return (o.create = function t(e) {
    return u.Buffer.isBuffer(e) ? new c(e)  : h(e)
  }) (e)
}
 : h,
o.prototype._slice = u.Array.prototype.subarray || u.Array.prototype.slice,
o.prototype.uint32 = function t() {
  var e = 4294967295;
  return function t() {
    if (e = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return e;
    if (e = (e | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return e;
    if (e = (e | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return e;
    if (e = (e | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return e;
    if (e = (e | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return e;
    if ((this.pos += 5) > this.len) throw this.pos = this.len,
    r(this, 10);
    return e
  }
}(),
o.prototype.int32 = function t() {
  return 0 | this.uint32()
},
o.prototype.sint32 = function t() {
  var e = this.uint32();
  return e >>> 1 ^ - (1 & e) | 0
},
o.prototype.bool = function t() {
  return 0 !== this.uint32()
},
o.prototype.fixed32 = function t() {
  if (this.pos + 4 > this.len) throw r(this, 4);
  return a(this.buf, this.pos += 4)
},
o.prototype.sfixed32 = function t() {
  if (this.pos + 4 > this.len) throw r(this, 4);
  return 0 | a(this.buf, this.pos += 4)
},
o.prototype.float = function t() {
  if (this.pos + 4 > this.len) throw r(this, 4);
  var e = u.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4,
  e
},
o.prototype.double = function t() {
  if (this.pos + 8 > this.len) throw r(this, 4);
  var e = u.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8,
  e
},
o.prototype.bytes = function t() {
  var e = this.uint32(),
  n = this.pos,
  o = this.pos + e;
  if (o > this.len) throw r(this, e);
  return this.pos += e,
  Array.isArray(this.buf) ? this.buf.slice(n, o)  : n === o ? new this.buf.constructor(0)  : this._slice.call(this.buf, n, o)
},
o.prototype.string = function t() {
  var e = this.bytes();
  return p.read(e, 0, e.length)
},
o.prototype.skip = function t(e) {
  if ('number' == typeof e) {
    if (this.pos + e > this.len) throw r(this, e);
    this.pos += e
  } else do {
    if (this.pos >= this.len) throw r(this)
  } while (128 & this.buf[this.pos++]);
  return this
},
o.prototype.skipType = function (t) {
  switch (t) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      for (; ; ) {
        if (4 == (t = 7 & this.uint32())) break;
        this.skipType(t)
      }
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error('invalid wire type ' + t + ' at offset ' + this.pos)
  }
  return this
},
o._configure = function (t) {
  c = t;
  var e = u.Long ? 'toLong' : 'toNumber';
  u.merge(o.prototype, {
    int64: function t() {
      return i.call(this) [e](!1)
    },
    uint64: function t() {
      return i.call(this) [e](!0)
    },
    sint64: function t() {
      return i.call(this).zzDecode() [e](!1)
    },
    fixed64: function t() {
      return s.call(this) [e](!0)
    },
    sfixed64: function t() {
      return s.call(this) [e](!1)
    }
  })
}
},
function (t, e, n) {
'use strict';
function r(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function o(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function i(t, e, n) {
  return e && o(t.prototype, e),
  n && o(t, n),
  t
}
function a(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function s(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function u(t, e, n) {
  return e && s(t.prototype, e),
  n && s(t, n),
  t
}
function c(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function l(t, e) {
  if (t.length && e.length && t.length !== e.reduce(function (t, e) {
    return t * e
  }, 1)) throw new Error('[Tensor] specified shape incompatible with data.')
}
function p(t, e, n) {
  for (var r = new t(e.data.length), o = Wp() (new t(n[0] * n[1]), [
    n[0],
    n[1]
  ]), i = 0, a = 0; a < n[2]; a++) Yp.a.assign(o, e.pick(null, null, a)),
  r.set(o.data, i),
  i += n[0] * n[1];
  return r
}
function h(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : - 1,
  r = t.reduce(function (t, e) {
    return t * e
  }, 1),
  o = Wp() (new Int32Array(r), t);
  if (e) {
    for (var i = Math.ceil(Math.sqrt(r)), a = Wp() (new Int32Array(Math.pow(i, 2)), [
      i,
      i
    ]), s = Wp() (new Int32Array(Math.pow(i, 2)), [
      i,
      i
    ]), u = Wp() (new Int32Array(Math.pow(i, 2)), [
      i,
      i
    ]), l = 0; l < i; l++) Yp.a.assigns(a.pick(l, null), l);
    for (var p = 0; p < i; p++) Yp.a.assigns(s.pick(null, p), p);
    Yp.a.muls(u, a, i),
    Yp.a.addeq(u, s),
    o.data.set(u.data.subarray(0, o.size))
  } else {
    n < 0 && (n = t.length + n);
    for (var h = t[n], f = Wp() (new Int32Array(r), t), d = Wp() (new Int32Array(r), t), m = c(t.slice(0, n)).concat(c(t.slice(n + 1))), y = m.reduce(function (t, e) {
      return t * e
    }, 1), v = Wp() (new Int32Array(Vp() (y)), m), g = Array(t.length).fill(null), _ = 0; _ < h; _++) g[n] = _,
    Yp.a.assign(f.pick.apply(f, c(g)), v),
    Yp.a.assigns(d.pick.apply(d, c(g)), _);
    Yp.a.muls(o, f, h),
    Yp.a.addeq(o, d)
  }
  return o
}
function f(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function d(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function m(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function y(t, e, n) {
  return e && m(t.prototype, e),
  n && m(t, n),
  t
}
function v(t) {
  return (v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function g(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function _(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function b(t, e, n) {
  return e && _(t.prototype, e),
  n && _(t, n),
  t
}
function x(t, e) {
  if (e && ('object' === v(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function w(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function S(t) {
  if (1 === t.tensor.shape.length) {
    var e = Yp.a.sup(t.tensor);
    Yp.a.subseq(t.tensor, e),
    Yp.a.expeq(t.tensor);
    var n = Yp.a.sum(t.tensor);
    Yp.a.divseq(t.tensor, n)
  } else {
    if (2 !== t.tensor.shape.length) throw new Error('[activations.softmax] tensor shape '.concat(t.tensor.shape, ' not supported.'));
    for (var r = 0; r < t.tensor.shape[0]; r++) {
      var o = Yp.a.sup(t.tensor.pick(r, null));
      Yp.a.subseq(t.tensor.pick(r, null), o),
      Yp.a.expeq(t.tensor.pick(r, null));
      var i = Yp.a.sum(t.tensor.pick(r, null));
      Yp.a.divseq(t.tensor.pick(r, null), i)
    }
  }
}
function T(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
  },
  n = e.alpha,
  r = void 0 === n ? 1 : n;
  eh(t.tensor, r)
}
function P(t) {
  nh(t.tensor)
}
function C(t) {
  rh(t.tensor)
}
function k(t) {
  oh(t.tensor)
}
function O(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
  },
  n = e.alpha,
  r = void 0 === n ? 0 : n,
  o = e.maxValue,
  i = void 0 === o ? null : o,
  a;
  0 !== r && (a = new Jp([], t.tensor.shape), Yp.a.mins(a.tensor, t.tensor, 0), Yp.a.mulseq(a.tensor, r)),
  Yp.a.maxseq(t.tensor, 0),
  i && Yp.a.minseq(t.tensor, i),
  a && Yp.a.addeq(t.tensor, a.tensor)
}
function E(t) {
  ih(t.tensor)
}
function j(t) {
  ah(t.tensor)
}
function A(t) {
  sh(t.tensor)
}
function F(t) {
  return t
}
function M(t) {
  return (M = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function R(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function D(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function I(t, e, n) {
  return e && D(t.prototype, e),
  n && D(t, n),
  t
}
function L(t, e) {
  if (e && ('object' === M(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function z(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function U(t) {
  return (U = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function G(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function N(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function B(t, e, n) {
  return e && N(t.prototype, e),
  n && N(t, n),
  t
}
function q(t, e) {
  if (e && ('object' === U(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function V(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function H(t) {
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function W(t) {
  return (W = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function X(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Y(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function $(t, e, n) {
  return e && Y(t.prototype, e),
  n && Y(t, n),
  t
}
function K(t, e) {
  if (e && ('object' === W(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function J(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Q(t) {
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Z(t) {
  return (Z = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function tt(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function et(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function nt(t, e, n) {
  return e && et(t.prototype, e),
  n && et(t, n),
  t
}
function rt(t, e) {
  if (e && ('object' === Z(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function ot(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function it(t) {
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function at(t, e) {
  return '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D inputs['.concat(t, '];\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float(').concat(e[0], ') * outTex.y);\n  int out_x = int(float(').concat(e[1], ') * outTex.x);\n  \n  outColor = vec4(').concat(Vp() (t).map(function (t) {
    return 'texelFetch(inputs['.concat(t, '], ivec2(out_x, out_y), 0).r')
  }).join(' + '), ');\n}\n')
}
function st(t, e) {
  return '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D inputs['.concat(t, '];\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float(').concat(e[0], ') * outTex.y);\n  int out_x = int(float(').concat(e[1], ') * outTex.x);\n  \n  outColor = vec4((').concat(Vp() (t).map(function (t) {
    return 'texelFetch(inputs['.concat(t, '], ivec2(out_x, out_y), 0).r')
  }).join(' + '), ') / float(').concat(t, '));\n}\n')
}
function ut(t, e, n, r) {
  var o = e.map(function (t) {
    return t[r]
  }),
  i = Vp() (t + 1).map(function (t) {
    return xh() (_h() (o, t))
  }),
  a = 0 === r ? 'out_y' : 'out_x',
  s = '\n  int n = 0;\n  int offset = 0;\n  if ('.concat(a, ' >= ').concat(i[1], ' && ').concat(a, ' < ').concat(i[2], ') {\n    n = 1;\n    offset = ').concat(i[1], ';\n  }');
  t > 2 && (s += ''.concat(Vp() (2, t).map(function (t) {
    return ' else if ('.concat(a, ' >= ').concat(i[t], ' && ').concat(a, ' < ').concat(i[t + 1], ') {\n    n = ').concat(t, ';\n    offset = ').concat(i[t], ';\n  }')
  }).join(''), '\n'));
  var u = 'outColor = vec4(0.0);';
  if (0 === r || 1 === r) {
    var c = function t(e) {
      return 'out_x'.concat(1 === r ? ' - '.concat(i[e])  : '')
    },
    l = function t(e) {
      return 'out_y'.concat(0 === r ? ' - '.concat(i[e])  : '')
    };
    u = '\n  if (n == 0) {\n    outColor = vec4(texelFetch(inputs[0], ivec2(out_x, out_y), 0).r);\n  }'.concat(Vp() (1, t).map(function (t) {
      return ' else if (n == '.concat(t, ') {\n    outColor = vec4(texelFetch(inputs[').concat(t, '], ivec2(').concat(c(t), ', ').concat(l(t), '), 0).r);\n  }')
    }).join(''), '\n')
  }
  return '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D inputs['.concat(t, '];\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float(').concat(n[0], ') * outTex.y);\n  int out_x = int(float(').concat(n[1], ') * outTex.x);\n').concat(s, '\n').concat(u, '\n}\n')
}
function ct(t, e) {
  return '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D inputs['.concat(t, '];\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float(').concat(e[0], ') * outTex.y);\n  int out_x = int(float(').concat(e[1], ') * outTex.x);\n\n  float val = texelFetch(inputs[0], ivec2(out_x, out_y), 0).r;\n  for (int i = 1; i < ').concat(t, '; i++) {\n    val = max(val, texelFetch(inputs[i], ivec2(out_x, out_y), 0).r);\n  }\n\n  outColor = vec4(val);\n}\n')
}
function lt(t, e) {
  return '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D inputs['.concat(t, '];\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float(').concat(e[0], ') * outTex.y);\n  int out_x = int(float(').concat(e[1], ') * outTex.x);\n\n  float val = texelFetch(inputs[0], ivec2(out_x, out_y), 0).r;\n  for (int i = 1; i < ').concat(t, '; i++) {\n    val = min(val, texelFetch(inputs[i], ivec2(out_x, out_y), 0).r);\n  }\n\n  outColor = vec4(val);\n}\n')
}
function pt(t, e) {
  return '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D inputs['.concat(t, '];\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float(').concat(e[0], ') * outTex.y);\n  int out_x = int(float(').concat(e[1], ') * outTex.x);\n\n  outColor = vec4(').concat(Vp() (t).map(function (t) {
    return 'texelFetch(inputs['.concat(t, '], ivec2(out_x, out_y), 0).r')
  }).join(' * '), ');\n}\n')
}
function ht(t, e) {
  return '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D inputs[2];\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float('.concat(e[0], ') * outTex.y);\n  int out_x = int(float(').concat(e[1], ') * outTex.x);\n  \n  outColor = vec4(texelFetch(inputs[0], ivec2(out_x, out_y), 0).r - texelFetch(inputs[1], ivec2(out_x, out_y), 0).r);\n}\n')
}
function ft(t, e, n, r, o) {
  var i = r ? 'sum += texelFetch(bias, ivec2(out_x, 0), 0).r;' : '',
  a = o ? 'int fragmentIndex = int(floor(float(rowIndex) / float('.concat(e[0], ')));\n      rowIndex = int(mod(float(rowIndex), float(').concat(e[0], ')));\n      colIndex += fragmentIndex * ').concat(e[1], ';')  : '';
  return '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform sampler2D kernel;\nuniform sampler2D bias;\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float('.concat(t[0], ') * outTex.y);\n  int out_x = int(float(').concat(t[1], ') * outTex.x);\n\n  float sum = 0.;\n  for (int i = 0; i < ').concat(n[1], '; ++i) {\n    int index = texelFetch(indexMap, ivec2(i, out_y), 0).r;    \n    if (index != -1) {\n      int rowIndex = int(floor(float(index) / float(').concat(e[1], ')));\n      int colIndex = int(mod(float(index), float(').concat(e[1], ')));\n      ').concat(a, '\n      sum += texelFetch(x, ivec2(colIndex, rowIndex), 0).r * texelFetch(kernel, ivec2(out_x, i), 0).r;\n    }\n  }\n\n  ').concat(i, '\n  outColor = vec4(sum);\n}   \n')
}
function dt(t, e, n, r, o) {
  var i = r ? 'sum += texelFetch(bias, ivec2(out_x, 0), 0).r;' : '',
  a = o ? 'int fragmentIndex = int(floor(float(rowIndex) / float('.concat(e[0], ')));\n      rowIndex = int(mod(float(rowIndex), float(').concat(e[0], ')));\n      colIndex += fragmentIndex * ').concat(e[1], ';')  : '';
  return '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D matMulResult;\nuniform isampler2D indexMap;\nuniform sampler2D bias;\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float('.concat(t[0], ') * outTex.y);\n  int out_x = int(float(').concat(t[1], ') * outTex.x);\n\n  float sum = 0.;\n  for (int n = 0; n < ').concat(n[1], '; ++n) {\n    int index = texelFetch(indexMap, ivec2(n, out_y), 0).r;\n    if (index != -1) {\n      int rowIndex = int(floor(float(index) / float(').concat(e[1], ')));\n      int colIndex = int(mod(float(index), float(').concat(e[1], ')));\n      ').concat(a, '\n      sum += texelFetch(matMulResult, ivec2(colIndex + out_x, rowIndex), 0).r;\n    }\n  }\n\n  ').concat(i, '\n  outColor = vec4(sum);\n}  \n')
}
function mt(t, e, n) {
  var r;
  return r = n ? '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D featureMaps;\nuniform sampler2D weights;\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float('.concat(t[0], ') * outTex.y);\n  int out_x = int(float(').concat(t[1], ') * outTex.x);\n\n  int featureMapsRow = out_x + ').concat(t[0], ' * out_y;\n\n  float sum = 0.;\n  for (int k = 0; k < ').concat(e, '; ++k) {\n    float f = texelFetch(featureMaps, ivec2(k, featureMapsRow), 0).r;\n    float w = texelFetch(weights, ivec2(k, 0), 0).r;\n    sum += f * w;\n  }\n\n  outColor = vec4(max(sum, 0.0));\n}  \n')  : '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D featureMaps;\nuniform sampler2D weights;\nout vec4 outColor;\n\nvoid main() {\n  int out_y = int(float('.concat(t[0], ') * outTex.y);\n  int out_x = int(float(').concat(t[1], ') * outTex.x);\n\n  float sum = 0.;\n  for (int k = 0; k < ').concat(e, '; ++k) {\n    float f = texelFetch(featureMaps, ivec2(k, out_y), 0).r;\n    float w = texelFetch(weights, ivec2(out_x, k), 0).r;\n    sum += f * w;\n  }\n\n  outColor = vec4(max(sum, 0.0));\n}  \n')
}
function yt(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
  switch (t) {
    case 'add':
      return at.apply(void 0, n);
    case 'average':
      return st.apply(void 0, n);
    case 'concatenate':
      return ut.apply(void 0, n);
    case 'maximum':
      return ct.apply(void 0, n);
    case 'minimum':
      return lt.apply(void 0, n);
    case 'multiply':
      return pt.apply(void 0, n);
    case 'subtract':
      return ht.apply(void 0, n);
    case 'conv2d':
      return ft.apply(void 0, n);
    case 'conv2dTranspose':
      return dt.apply(void 0, n);
    case 'cam':
      return mt.apply(void 0, n);
    default:
      throw new Error('GLSL program not found')
  }
}
function vt(t) {
  return (vt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function gt(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function _t(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return gt(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function bt(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function xt(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function wt(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function St(t, e, n) {
  return e && wt(t.prototype, e),
  n && wt(t, n),
  t
}
function Tt(t, e) {
  if (e && ('object' === vt(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Pt(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : Pt(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function Ct(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function kt(t) {
  return (kt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ot(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Et(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function jt(t, e, n) {
  return e && Et(t.prototype, e),
  n && Et(t, n),
  t
}
function At(t, e) {
  if (e && ('object' === kt(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Ft(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Mt(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function Rt(t) {
  return (Rt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Dt(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function It(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return Dt(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function Lt(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function zt(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Ut(t, e, n) {
  return e && zt(t.prototype, e),
  n && zt(t, n),
  t
}
function Gt(t, e) {
  if (e && ('object' === Rt(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Nt(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : Nt(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function Bt(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function qt(t) {
  return (qt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Vt(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function Ht(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return Vt(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function Wt(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function Xt(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Yt(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function $t(t, e, n) {
  return e && Yt(t.prototype, e),
  n && Yt(t, n),
  t
}
function Kt(t, e) {
  if (e && ('object' === qt(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Jt(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : Jt(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function Qt(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Zt(t) {
  return (Zt = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function te(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function ee(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return te(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function ne(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function re(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function oe(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function ie(t, e, n) {
  return e && oe(t.prototype, e),
  n && oe(t, n),
  t
}
function ae(t, e) {
  if (e && ('object' === Zt(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function se(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : se(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function ue(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ce(t) {
  return (ce = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function le(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function pe(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function he(t, e, n) {
  return e && pe(t.prototype, e),
  n && pe(t, n),
  t
}
function fe(t, e) {
  if (e && ('object' === ce(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function de(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function me(t) {
  return (me = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ye(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function ve(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function ge(t, e, n) {
  return e && ve(t.prototype, e),
  n && ve(t, n),
  t
}
function _e(t, e) {
  if (e && ('object' === me(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function be(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function xe(t) {
  return (xe = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function we(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Se(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Te(t, e, n) {
  return e && Se(t.prototype, e),
  n && Se(t, n),
  t
}
function Pe(t, e) {
  if (e && ('object' === xe(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Ce(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ke(t) {
  return (ke = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Oe(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Ee(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function je(t, e, n) {
  return e && Ee(t.prototype, e),
  n && Ee(t, n),
  t
}
function Ae(t, e) {
  if (e && ('object' === ke(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Fe(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Me(t) {
  return (Me = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Re(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function De(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Ie(t, e, n) {
  return e && De(t.prototype, e),
  n && De(t, n),
  t
}
function Le(t, e) {
  if (e && ('object' === Me(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function ze(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ue(t) {
  return (Ue = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ge(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Ne(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Be(t, e, n) {
  return e && Ne(t.prototype, e),
  n && Ne(t, n),
  t
}
function qe(t, e) {
  if (e && ('object' === Ue(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Ve(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function He(t) {
  return (He = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function We(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Xe(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Ye(t, e, n) {
  return e && Xe(t.prototype, e),
  n && Xe(t, n),
  t
}
function $e(t, e) {
  if (e && ('object' === He(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Ke(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Je(t) {
  return (Je = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Qe(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Ze(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function tn(t, e, n) {
  return e && Ze(t.prototype, e),
  n && Ze(t, n),
  t
}
function en(t, e) {
  if (e && ('object' === Je(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function nn(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function rn(t) {
  return (rn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function on(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function an(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function sn(t, e, n) {
  return e && an(t.prototype, e),
  n && an(t, n),
  t
}
function un(t, e) {
  if (e && ('object' === rn(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function cn(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ln(t) {
  return (ln = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function pn(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function hn(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function fn(t, e, n) {
  return e && hn(t.prototype, e),
  n && hn(t, n),
  t
}
function dn(t, e) {
  if (e && ('object' === ln(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function mn(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function yn(t) {
  return (yn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function vn(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function gn(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function _n(t, e, n) {
  return e && gn(t.prototype, e),
  n && gn(t, n),
  t
}
function bn(t, e) {
  if (e && ('object' === yn(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function xn(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function wn(t) {
  return (wn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Sn(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Tn(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Pn(t, e, n) {
  return e && Tn(t.prototype, e),
  n && Tn(t, n),
  t
}
function Cn(t, e) {
  if (e && ('object' === wn(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function kn(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function On(t) {
  return (On = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function En(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function jn(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function An(t, e, n) {
  return e && jn(t.prototype, e),
  n && jn(t, n),
  t
}
function Fn(t, e) {
  if (e && ('object' === On(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Mn(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Rn(t) {
  return (Rn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Dn(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function In(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Ln(t, e, n) {
  return e && In(t.prototype, e),
  n && In(t, n),
  t
}
function zn(t, e) {
  if (e && ('object' === Rn(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Un(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Gn(t) {
  return (Gn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Nn(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Bn(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function qn(t, e, n) {
  return e && Bn(t.prototype, e),
  n && Bn(t, n),
  t
}
function Vn(t, e) {
  if (e && ('object' === Gn(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Hn(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Wn(t) {
  return (Wn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Xn(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Yn(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function $n(t, e, n) {
  return e && Yn(t.prototype, e),
  n && Yn(t, n),
  t
}
function Kn(t, e) {
  if (e && ('object' === Wn(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Jn(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Qn(t) {
  return (Qn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Zn(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function tr(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function er(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function nr(t, e, n) {
  return e && er(t.prototype, e),
  n && er(t, n),
  t
}
function rr(t, e) {
  if (e && ('object' === Qn(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function or(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ir(t) {
  return (ir = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ar(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function sr(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function ur(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function cr(t, e, n) {
  return e && ur(t.prototype, e),
  n && ur(t, n),
  t
}
function lr(t, e) {
  if (e && ('object' === ir(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function pr(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function hr(t) {
  return (hr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function fr(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function dr(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function mr(t, e, n) {
  return e && dr(t.prototype, e),
  n && dr(t, n),
  t
}
function yr(t, e) {
  if (e && ('object' === hr(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function vr(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function gr(t) {
  return (gr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function _r(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function br(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function xr(t, e, n) {
  return e && br(t.prototype, e),
  n && br(t, n),
  t
}
function wr(t, e) {
  if (e && ('object' === gr(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Sr(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Tr(t) {
  return (Tr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Pr(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Cr(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function kr(t, e, n) {
  return e && Cr(t.prototype, e),
  n && Cr(t, n),
  t
}
function Or(t, e) {
  if (e && ('object' === Tr(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Er(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function jr(t) {
  return (jr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ar(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Fr(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Mr(t, e, n) {
  return e && Fr(t.prototype, e),
  n && Fr(t, n),
  t
}
function Rr(t, e) {
  if (e && ('object' === jr(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Dr(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : Dr(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function Ir(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Lr(t) {
  return (Lr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function zr(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Ur(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Gr(t, e, n) {
  return e && Ur(t.prototype, e),
  n && Ur(t, n),
  t
}
function Nr(t, e) {
  if (e && ('object' === Lr(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Br(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : Br(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function qr(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Vr(t) {
  return (Vr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Hr(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Wr(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Xr(t, e, n) {
  return e && Wr(t.prototype, e),
  n && Wr(t, n),
  t
}
function Yr(t, e) {
  if (e && ('object' === Vr(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function $r(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : $r(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function Kr(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Jr(t) {
  return (Jr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Qr(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Zr(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function to(t, e, n) {
  return e && Zr(t.prototype, e),
  n && Zr(t, n),
  t
}
function eo(t, e) {
  if (e && ('object' === Jr(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function no(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : no(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function ro(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function oo(t) {
  return (oo = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function io(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function ao(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function so(t, e, n) {
  return e && ao(t.prototype, e),
  n && ao(t, n),
  t
}
function uo(t, e) {
  if (e && ('object' === oo(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function co(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : co(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function lo(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function po(t) {
  return (po = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ho(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function fo(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function mo(t, e, n) {
  return e && fo(t.prototype, e),
  n && fo(t, n),
  t
}
function yo(t, e) {
  if (e && ('object' === po(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function vo(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : vo(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function go(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function _o(t) {
  return (_o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function bo(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function xo(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function wo(t, e, n) {
  return e && xo(t.prototype, e),
  n && xo(t, n),
  t
}
function So(t, e) {
  if (e && ('object' === _o(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function To(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Po(t) {
  return (Po = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Co(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function ko(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Oo(t, e, n) {
  return e && ko(t.prototype, e),
  n && ko(t, n),
  t
}
function Eo(t, e) {
  if (e && ('object' === Po(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function jo(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ao(t) {
  return (Ao = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Fo(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Mo(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Ro(t, e, n) {
  return e && Mo(t.prototype, e),
  n && Mo(t, n),
  t
}
function Do(t, e) {
  if (e && ('object' === Ao(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Io(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Lo(t) {
  return (Lo = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function zo(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Uo(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Go(t, e, n) {
  return e && Uo(t.prototype, e),
  n && Uo(t, n),
  t
}
function No(t, e) {
  if (e && ('object' === Lo(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Bo(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function qo(t) {
  return (qo = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Vo(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function Ho(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Wo(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Xo(t, e, n) {
  return e && Wo(t.prototype, e),
  n && Wo(t, n),
  t
}
function Yo(t, e) {
  if (e && ('object' === qo(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function $o(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ko(t) {
  return (Ko = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Jo(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Qo(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Zo(t, e, n) {
  return e && Qo(t.prototype, e),
  n && Qo(t, n),
  t
}
function ti(t, e) {
  if (e && ('object' === Ko(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function ei(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ni(t) {
  return (ni = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ri(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function oi(t, e) {
  if (e && ('object' === ni(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function ii(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ai(t) {
  return (ai = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function si(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function ui(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return si(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function ci(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function li(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function pi(t, e, n) {
  return e && li(t.prototype, e),
  n && li(t, n),
  t
}
function hi(t, e) {
  if (e && ('object' === ai(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function fi(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function di(t) {
  return (di = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function mi(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function yi(t, e) {
  if (e && ('object' === di(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function vi(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function gi(t) {
  return (gi = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function _i(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function bi(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return _i(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function xi(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function wi(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Si(t, e, n) {
  return e && wi(t.prototype, e),
  n && wi(t, n),
  t
}
function Ti(t, e) {
  if (e && ('object' === gi(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Pi(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ci(t) {
  return (Ci = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ki(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Oi(t, e) {
  if (e && ('object' === Ci(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Ei(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ji(t) {
  return (ji = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ai(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Fi(t, e) {
  if (e && ('object' === ji(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Mi(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ri(t) {
  return (Ri = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Di(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Ii(t, e) {
  if (e && ('object' === Ri(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Li(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function zi(t) {
  return (zi = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ui(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Gi(t, e) {
  if (e && ('object' === zi(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Ni(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Bi(t) {
  return (Bi = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function qi(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function Vi(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return qi(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function Hi(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Wi(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Xi(t, e, n) {
  return e && Wi(t.prototype, e),
  n && Wi(t, n),
  t
}
function Yi(t, e) {
  if (e && ('object' === Bi(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function $i(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ki(t) {
  return (Ki = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ji(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Qi(t, e) {
  if (e && ('object' === Ki(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Zi(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ta(t) {
  return (ta = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ea(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function na(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return ea(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function ra(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function oa(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function ia(t, e, n) {
  return e && oa(t.prototype, e),
  n && oa(t, n),
  t
}
function aa(t, e) {
  if (e && ('object' === ta(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function sa(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ua(t) {
  return (ua = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ca(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function la(t, e) {
  if (e && ('object' === ua(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function pa(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ha(t) {
  return (ha = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function fa(t, e) {
  var n = [
  ],
  r = !0,
  o = !1,
  i = void 0;
  try {
    for (var a = t[Symbol.iterator](), s; !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
  } catch (t) {
    o = !0,
    i = t
  } finally {
    try {
      r || null == a.return || a.return ()
    } finally {
      if (o) throw i
    }
  }
  return n
}
function da(t, e) {
  if (Array.isArray(t)) return t;
  if (Symbol.iterator in Object(t)) return fa(t, e);
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function ma(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function ya(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function va(t, e, n) {
  return e && ya(t.prototype, e),
  n && ya(t, n),
  t
}
function ga(t, e) {
  if (e && ('object' === ha(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function _a(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function ba(t) {
  return (ba = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function xa(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function wa(t, e) {
  if (e && ('object' === ba(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Sa(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ta(t) {
  return (Ta = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Pa(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Ca(t, e) {
  if (e && ('object' === Ta(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function ka(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Oa(t) {
  return (Oa = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ea(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function ja(t, e) {
  if (e && ('object' === Oa(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Aa(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Fa(t) {
  return (Fa = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ma(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Ra(t, e) {
  if (e && ('object' === Fa(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Da(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ia(t) {
  return (Ia = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function La(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function za(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Ua(t, e, n) {
  return e && za(t.prototype, e),
  n && za(t, n),
  t
}
function Ga(t, e) {
  if (e && ('object' === Ia(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Na(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : Na(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function Ba(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function qa(t) {
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Va(t) {
  return (Va = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ha(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Wa(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function Xa(t, e, n) {
  return e && Wa(t.prototype, e),
  n && Wa(t, n),
  t
}
function Ya(t, e) {
  if (e && ('object' === Va(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function $a(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : $a(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function Ka(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function Ja(t) {
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function Qa(t) {
  return (Qa = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Za(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function ts(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function es(t, e, n) {
  return e && ts(t.prototype, e),
  n && ts(t, n),
  t
}
function ns(t, e) {
  if (e && ('object' === Qa(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function rs(t, e, n) {
  null === t && (t = Function.prototype);
  var r = Object.getOwnPropertyDescriptor(t, e);
  if (void 0 === r) {
    var o = Object.getPrototypeOf(t);
    return null === o ? void 0 : rs(o, e, n)
  }
  if ('value' in r) return r.value;
  var i = r.get;
  if (void 0 !== i) return i.call(n)
}
function os(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function is(t) {
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function as(t) {
  return (as = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ss(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function us(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function cs(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function ls(t, e, n) {
  return e && cs(t.prototype, e),
  n && cs(t, n),
  t
}
function ps(t, e) {
  if (e && ('object' === as(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function hs(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function fs(t) {
  return (fs = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function ds(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function ms(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function ys(t, e, n) {
  return e && ms(t.prototype, e),
  n && ms(t, n),
  t
}
function vs(t, e) {
  if (e && ('object' === fs(e) || 'function' == typeof e)) return e;
  if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  return t
}
function gs(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }),
  e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e)  : t.__proto__ = e)
}
function _s(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n
  }
  return Array.from(t)
}
function bs(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function xs(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function ws(t, e, n) {
  return e && xs(t.prototype, e),
  n && xs(t, n),
  t
}
function Ss(t) {
  return (Ss = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
    return typeof e
  }
   : function t(e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
  }) (t)
}
function Ts(t) {
  return function () {
    var e = this,
    n = arguments;
    return new Promise(function (r, o) {
      function i(t, e) {
        try {
          var n = u[t](e),
          i = n.value
        } catch (t) {
          return void o(t)
        }
        n.done ? r(i)  : Promise.resolve(i).then(a, s)
      }
      function a(t) {
        i('next', t)
      }
      function s(t) {
        i('throw', t)
      }
      var u = t.apply(e, n);
      a()
    })
  }
}
function Ps(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
}
function Cs(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1,
    r.configurable = !0,
    'value' in r && (r.writable = !0),
    Object.defineProperty(t, r.key, r)
  }
}
function ks(t, e, n) {
  return e && Cs(t.prototype, e),
  n && Cs(t, n),
  t
}
function Os(t, e) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.0001,
  r = Sm() (Pm() (t)),
  o = e;
  if (r.length !== o.length) return !1;
  for (var i = 0; i < r.length; i++) {
    if (!xm() (r[i])) return !1;
    if (r[i] < o[i] - n || r[i] > o[i] + n) return !1
  }
  return !0
}
Object.defineProperty(e, '__esModule', {
  value: !0
});
var Es = {
};
n.d(Es, 'softmax', function () {
  return S
}),
n.d(Es, 'elu', function () {
  return T
}),
n.d(Es, 'selu', function () {
  return P
}),
n.d(Es, 'softplus', function () {
  return C
}),
n.d(Es, 'softsign', function () {
  return k
}),
n.d(Es, 'relu', function () {
  return O
}),
n.d(Es, 'tanh', function () {
  return E
}),
n.d(Es, 'sigmoid', function () {
  return j
}),
n.d(Es, 'hard_sigmoid', function () {
  return A
}),
n.d(Es, 'linear', function () {
  return F
});
var js = {
};
n.d(js, 'softmax', function () {
  return Th
}),
n.d(js, 'elu', function () {
  return Ph
}),
n.d(js, 'selu', function () {
  return Ch
}),
n.d(js, 'softplus', function () {
  return kh
}),
n.d(js, 'softsign', function () {
  return Oh
}),
n.d(js, 'relu', function () {
  return Eh
}),
n.d(js, 'tanh', function () {
  return jh
}),
n.d(js, 'sigmoid', function () {
  return Ah
}),
n.d(js, 'hard_sigmoid', function () {
  return Fh
}),
n.d(js, 'linear', function () {
  return Mh
});
var As = {
};
n.d(As, 'SimpleRNN', function () {
  return Rd
}),
n.d(As, 'LSTM', function () {
  return Bd
}),
n.d(As, 'GRU', function () {
  return Kd
});
var Fs = {
};
n.d(Fs, 'InputLayer', function () {
  return Qp
}),
n.d(Fs, 'LeakyReLU', function () {
  return ch
}),
n.d(Fs, 'PReLU', function () {
  return ph
}),
n.d(Fs, 'ELU', function () {
  return fh
}),
n.d(Fs, 'ThresholdedReLU', function () {
  return yh
}),
n.d(Fs, 'Conv1D', function () {
  return Gh
}),
n.d(Fs, 'Conv2D', function () {
  return Lh
}),
n.d(Fs, 'SeparableConv2D', function () {
  return Bh
}),
n.d(Fs, 'Conv2DTranspose', function () {
  return Wh
}),
n.d(Fs, 'Conv3D', function () {
  return Kh
}),
n.d(Fs, 'Cropping1D', function () {
  return Qh
}),
n.d(Fs, 'Cropping2D', function () {
  return tf
}),
n.d(Fs, 'Cropping3D', function () {
  return nf
}),
n.d(Fs, 'UpSampling1D', function () {
  return of
}),
n.d(Fs, 'UpSampling2D', function () {
  return sf
}),
n.d(Fs, 'UpSampling3D', function () {
  return cf
}),
n.d(Fs, 'ZeroPadding1D', function () {
  return pf
}),
n.d(Fs, 'ZeroPadding2D', function () {
  return ff
}),
n.d(Fs, 'ZeroPadding3D', function () {
  return mf
}),
n.d(Fs, 'Dense', function () {
  return _f
}),
n.d(Fs, 'Activation', function () {
  return bf
}),
n.d(Fs, 'Dropout', function () {
  return xf
}),
n.d(Fs, 'SpatialDropout1D', function () {
  return wf
}),
n.d(Fs, 'SpatialDropout2D', function () {
  return Sf
}),
n.d(Fs, 'SpatialDropout3D', function () {
  return Tf
}),
n.d(Fs, 'Flatten', function () {
  return kf
}),
n.d(Fs, 'Reshape', function () {
  return Af
}),
n.d(Fs, 'Permute', function () {
  return Mf
}),
n.d(Fs, 'RepeatVector', function () {
  return Lf
}),
n.d(Fs, 'Embedding', function () {
  return Uf
}),
n.d(Fs, 'Add', function () {
  return Nf
}),
n.d(Fs, 'Subtract', function () {
  return Bf
}),
n.d(Fs, 'Multiply', function () {
  return qf
}),
n.d(Fs, 'Average', function () {
  return Vf
}),
n.d(Fs, 'Maximum', function () {
  return Hf
}),
n.d(Fs, 'Minimum', function () {
  return Wf
}),
n.d(Fs, 'Concatenate', function () {
  return $f
}),
n.d(Fs, 'Dot', function () {
  return Jf
}),
n.d(Fs, 'GaussianDropout', function () {
  return Qf
}),
n.d(Fs, 'GaussianNoise', function () {
  return Zf
}),
n.d(Fs, 'BatchNormalization', function () {
  return ed
}),
n.d(Fs, 'MaxPooling1D', function () {
  return id
}),
n.d(Fs, 'MaxPooling2D', function () {
  return cd
}),
n.d(Fs, 'MaxPooling3D', function () {
  return fd
}),
n.d(Fs, 'AveragePooling1D', function () {
  return dd
}),
n.d(Fs, 'AveragePooling2D', function () {
  return md
}),
n.d(Fs, 'AveragePooling3D', function () {
  return yd
}),
n.d(Fs, 'GlobalMaxPooling1D', function () {
  return _d
}),
n.d(Fs, 'GlobalMaxPooling2D', function () {
  return wd
}),
n.d(Fs, 'GlobalMaxPooling3D', function () {
  return Pd
}),
n.d(Fs, 'GlobalAveragePooling1D', function () {
  return Cd
}),
n.d(Fs, 'GlobalAveragePooling2D', function () {
  return kd
}),
n.d(Fs, 'GlobalAveragePooling3D', function () {
  return Od
}),
n.d(Fs, 'SimpleRNN', function () {
  return Rd
}),
n.d(Fs, 'LSTM', function () {
  return Bd
}),
n.d(Fs, 'GRU', function () {
  return Kd
}),
n.d(Fs, 'TimeDistributed', function () {
  return nm
}),
n.d(Fs, 'Bidirectional', function () {
  return um
});
var Ms = {
};
n.d(Ms, 'CAM', function () {
  return cm
});
var Rs = {
};
n.d(Rs, 'approxEquals', function () {
  return Os
});
var Ds = n(170),
Is = n.n(Ds),
Ls = n(172),
zs = n.n(Ls),
Us = n(173),
Gs = n.n(Us),
Ns = n(178),
Bs = n.n(Ns),
qs = n(179),
Vs = n.n(qs),
Hs = n(180),
Ws = n.n(Hs),
Xs = n(181),
Ys = n.n(Xs),
$s = n(182),
Ks = n.n($s),
Js = n(183),
Qs = n.n(Js),
Zs = n(184),
tu = n.n(Zs),
eu = n(185),
nu = n.n(eu),
ru = n(186),
ou = n.n(ru),
iu = n(188),
au = n.n(iu),
su = n(189),
uu = n.n(su),
cu = n(190),
lu = n.n(cu),
pu = n(191),
hu = n.n(pu),
fu = n(192),
du = n.n(fu),
mu = n(194),
yu = n.n(mu),
vu = n(195),
gu = n.n(vu),
_u = n(196),
bu = n.n(_u),
xu = n(197),
wu = n.n(xu),
Su = n(198),
Tu = n.n(Su),
Pu = n(199),
Cu = n.n(Pu),
ku = n(200),
Ou = n.n(ku),
Eu = n(201),
ju = n.n(Eu),
Au = n(202),
Fu = n.n(Au),
Mu = n(203),
Ru = n.n(Mu),
Du = n(204),
Iu = n.n(Du),
Lu = n(205),
zu = n.n(Lu),
Uu = n(209),
Gu = n.n(Uu),
Nu = n(212),
Bu = n.n(Nu),
qu = n(213),
Vu = n.n(qu),
Hu = n(214),
Wu = n.n(Hu),
Xu = n(215),
Yu = n.n(Xu),
$u = n(216),
Ku = n.n($u),
Ju = n(217),
Qu = n.n(Ju),
Zu = n(218),
tc = n.n(Zu),
ec = n(219),
nc = n.n(ec),
rc = n(220),
oc = n.n(rc),
ic = n(221),
ac = n.n(ic),
sc = n(222),
uc = n.n(sc),
cc = n(223),
lc = n.n(cc),
pc = n(225),
hc = n.n(pc),
fc = n(226),
dc = n.n(fc),
mc = n(227),
yc = n.n(mc),
vc = n(228),
gc = n.n(vc),
_c = n(229),
bc = n.n(_c),
xc = n(231),
wc = n.n(xc),
Sc = n(232),
Tc = n.n(Sc),
Pc = n(233),
Cc = n.n(Pc),
kc = n(234),
Oc = n.n(kc),
Ec = n(235),
jc = n.n(Ec),
Ac = n(237),
Fc = n.n(Ac),
Mc = n(238),
Rc = n.n(Mc),
Dc = n(239),
Ic = n.n(Dc),
Lc = n(240),
zc = n.n(Lc),
Uc = n(241),
Gc = n.n(Uc),
Nc = n(242),
Bc = n.n(Nc),
qc = n(243),
Vc = n.n(qc),
Hc = n(244),
Wc = n.n(Hc),
Xc = n(245),
Yc = n.n(Xc),
$c = n(246),
Kc = n.n($c),
Jc = n(91),
Qc = n.n(Jc),
Zc = n(247),
tl = n.n(Zc),
el = n(248),
nl = n.n(el),
rl = n(249),
ol = n.n(rl),
il = n(250),
al = n.n(il),
sl = n(251),
ul = n.n(sl),
cl = n(252),
ll = n.n(cl),
pl = n(253),
hl = n.n(pl),
fl = n(254),
dl = n.n(fl),
ml = n(256),
yl = n.n(ml),
vl = n(258),
gl = n.n(vl),
_l = n(259),
bl = n.n(_l),
xl = n(260),
wl = n.n(xl),
Sl = n(261),
Tl = n.n(Sl),
Pl = n(262),
Cl = n.n(Pl),
kl = n(263),
Ol = n.n(kl),
El = n(264),
jl = n.n(El),
Al = n(265),
Fl = n.n(Al),
Ml = n(267),
Rl = n.n(Ml),
Dl = n(268),
Il = n.n(Dl),
Ll = n(269),
zl = n.n(Ll),
Ul = n(270),
Gl = n.n(Ul),
Nl = n(271),
Bl = n.n(Nl),
ql = n(272),
Vl = n.n(ql),
Hl = n(273),
Wl = n.n(Hl),
Xl = n(274),
Yl = n.n(Xl),
$l = n(275),
Kl = n.n($l),
Jl = n(276),
Ql = n.n(Jl),
Zl = n(277),
tp = n.n(Zl),
ep = n(278),
np = n.n(ep),
rp = n(279),
op = n.n(rp),
ip = n(280),
ap = n.n(ip),
sp = n(281),
up = n.n(sp),
cp = n(282),
lp = n.n(cp),
pp = n(283),
hp = n.n(pp),
fp = n(284),
dp = n.n(fp),
mp = n(285),
yp = n.n(mp),
vp = n(52),
gp = n.n(vp),
_p = n(68),
bp = n.n(_p),
xp = n(346),
wp = n.n(xp),
Sp = n(367),
Tp = n.n(Sp),
Pp = n(370),
Cp = n.n(Pp),
kp = n(375),
Op = n.n(kp),
Ep = n(390),
jp = n.n(Ep),
Ap = n(393),
Fp = n.n(Ap),
Mp = n(411),
Rp = n.n(Mp),
Dp = n(412),
Ip = n.n(Dp),
Lp = '#version 300 es\nprecision highp float;\n\nin vec3 position;\nin vec2 texcoord;\nout vec2 outTex;\n\nvoid main () {\n  gl_Position = vec4(position, 1.0);\n\toutTex = texcoord;\n}\n',
zp = function () {
  function t() {
    if (r(this, t), this.isSupported = !1, this.vertexShader = null, 'undefined' != typeof window) {
      this.canvas = document.createElement('canvas'),
      this.context = this.canvas.getContext('webgl2');
      var e = this.context;
      e ? (this.isSupported = !0, e.getExtension('EXT_color_buffer_float'), this.MAX_TEXTURE_SIZE = e.getParameter(e.MAX_TEXTURE_SIZE), this.MAX_TEXTURE_IMAGE_UNITS = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.init())  : console.log('Unable to initialize WebGL2 -- your browser may not support it.')
    }
    this._refs = {
      textures: [
      ],
      buffers: [
      ]
    }
  }
  return i(t, [
    {
      key: 'init',
      value: function t() {
        this.createCommonVertexShader()
      }
    },
    {
      key: 'createCommonVertexShader',
      value: function t() {
        var e = this.context,
        n = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(n, Lp),
        e.compileShader(n),
        e.getShaderParameter(n, e.COMPILE_STATUS) || (console.error(e.getShaderInfoLog(n)), e.deleteShader(n), this.isSupported = !1),
        this.vertexShader = n
      }
    },
    {
      key: 'compileProgram',
      value: function t(e) {
        var n = this.context,
        r = n.createShader(n.FRAGMENT_SHADER);
        n.shaderSource(r, e),
        n.compileShader(r);
        var o = n.getShaderParameter(r, n.COMPILE_STATUS);
        o || (console.error(n.getShaderInfoLog(r)), n.deleteShader(r), this.isSupported = !1);
        var i = n.createProgram();
        return n.attachShader(i, this.vertexShader),
        n.attachShader(i, r),
        n.linkProgram(i),
        o = n.getProgramParameter(i, n.LINK_STATUS),
        o || (console.error(n.getProgramInfoLog(i)), this.isSupported = !1),
        this.setupVertices(i),
        i
      }
    },
    {
      key: 'setupVertices',
      value: function t(e) {
        var n = this.context,
        r = n.getAttribLocation(e, 'position'),
        o = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, o),
        this.storeRef('buffer', o),
        n.bufferData(n.ARRAY_BUFFER, new Float32Array([ - 1,
        - 1,
        0,
        1,
        - 1,
        0,
        1,
        1,
        0,
        - 1,
        1,
        0]), n.STATIC_DRAW),
        n.vertexAttribPointer(r, 3, n.FLOAT, !1, 0, 0),
        n.enableVertexAttribArray(r);
        var i = n.getAttribLocation(e, 'texcoord'),
        a = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, a),
        n.bufferData(n.ARRAY_BUFFER, new Float32Array([0,
        0,
        1,
        0,
        1,
        1,
        0,
        1]), n.STATIC_DRAW),
        n.vertexAttribPointer(i, 2, n.FLOAT, !1, 0, 0),
        n.enableVertexAttribArray(i),
        this.storeRef('buffer', a);
        var s = n.createBuffer();
        n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, s),
        n.bufferData(n.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,
        1,
        2,
        0,
        2,
        3]), n.STATIC_DRAW),
        this.storeRef('buffer', s)
      }
    },
    {
      key: 'selectProgram',
      value: function t(e) {
        this.context.useProgram(e)
      }
    },
    {
      key: 'bindUniforms',
      value: function t(e, n) {
        var r = this.context;
        n.forEach(function (t) {
          var n = t.value,
          o = t.type,
          i = t.name,
          a = r.getUniformLocation(e, i);
          'float' === o ? r.uniform1f(a, n)  : 'int' !== o && 'bool' !== o || r.uniform1i(a, n)
        })
      }
    },
    {
      key: 'bindInputTextures',
      value: function t(e, n, r) {
        var o = this,
        i = this.context;
        n.forEach(function (t, n) {
          var a = t.input,
          s = t.name;
          if (i.activeTexture(i.TEXTURE0 + n), a.glTextureFragments) if (a.glTextureFragmentsAsColStack) {
            var u = o.getWebGLTextureOptions(a.glTextureType, a.glTextureFormat),
            c = u.textureTarget;
            i.bindTexture(c, a.glTextureFragmentsAsColStack)
          } else {
            var l = o.getWebGLTextureOptions(a.glTextureType, a.glTextureFormat),
            p = l.textureTarget;
            i.bindTexture(p, a.glTextureFragments[r])
          } else {
            var h = o.getWebGLTextureOptions(a.glTextureType, a.glTextureFormat),
            f = h.textureTarget;
            i.bindTexture(f, a.glTexture)
          }
          i.uniform1i(i.getUniformLocation(e, s), n)
        })
      }
    },
    {
      key: 'bindOutputTexture',
      value: function t(e, n) {
        var r = this.context;
        r.viewport(0, 0, n[1], n[0]),
        this.framebuffer = this.framebuffer || r.createFramebuffer(),
        r.bindFramebuffer(r.FRAMEBUFFER, this.framebuffer),
        r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, e, 0)
      }
    },
    {
      key: 'runProgram',
      value: function t(e) {
        var n = e.program,
        r = e.output,
        o = e.inputs,
        i = e.uniforms,
        a = e.supportsTextureFragments,
        s = void 0 !== a && a;
        if (!n) throw new Error('[WebGL2] missing program');
        if (!r) throw new Error('[WebGL2] missing output');
        if (!o) throw new Error('[WebGL2] missing inputs');
        var u = this.context;
        if (this.selectProgram(n), i && Array.isArray(i) && this.bindUniforms(n, i), r.glTextureFragments) {
          if (!s) throw new Error('[WebGL2] program does not support texture fragments');
          var c = o.filter(function (t) {
            return t.input.glTextureFragments && !t.input.glTextureFragmentsAsColStack
          }),
          l = r.glTextureFragments.length;
          if (c.some(function (t) {
            return t.input.glTextureFragments.length !== l
          })) throw new Error('[WebGL2] number of texture fragments in inputs and output do not match');
          for (var p = 0; p < l; p++) this.bindOutputTexture(r.glTextureFragments[p], r.glTextureFragmentShape),
          this.bindInputTextures(n, o, p),
          u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0)
        } else this.bindOutputTexture(r.glTexture, r.glTextureShape),
        this.bindInputTextures(n, o),
        u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0)
      }
    },
    {
      key: 'readData',
      value: function t(e) {
        var n = this.context,
        r = new ArrayBuffer(e[0] * e[1] * 4 * 4),
        o = new Float32Array(r);
        n.readPixels(0, 0, e[1], e[0], n.RGBA, n.FLOAT, o);
        for (var i = [
        ], a = 0; a < o.length; a += 4) i.push(o[a]);
        return new Float32Array(i)
      }
    },
    {
      key: 'getWebGLTextureOptions',
      value: function t(e, n) {
        var r = this.context;
        return {
          textureTarget: {
            '2d': r.TEXTURE_2D,
            '2d_array': r.TEXTURE_2D_ARRAY,
            '3d': r.TEXTURE_3D
          }
          [
            e
          ],
          textureInternalFormat: {
            float: r.R32F,
            int: r.R32I
          }
          [
            n
          ],
          textureFormat: {
            float: r.RED,
            int: r.RED_INTEGER
          }
          [
            n
          ],
          textureType: {
            float: r.FLOAT,
            int: r.INT
          }
          [
            n
          ]
        }
      }
    },
    {
      key: 'storeRef',
      value: function t(e, n) {
        'texture' === e ? this._refs.textures.push(n)  : 'buffer' === e && this._refs.buffers.push(n)
      }
    },
    {
      key: 'clearRefs',
      value: function t() {
        var e = this.context;
        this._refs.textures.forEach(function (t) {
          return e.deleteTexture(t)
        }),
        this._refs.buffers.forEach(function (t) {
          return e.deleteBuffer(t)
        }),
        this._refs = {
          textures: [
          ],
          buffers: [
          ]
        }
      }
    }
  ]),
  t
}(),
Up = new zp,
Gp = Up.MAX_TEXTURE_SIZE,
Np = Up.MAX_TEXTURE_IMAGE_UNITS,
Bp = function () {
  function t() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    a(this, t),
    this.layerClass = 'Layer',
    this.name = e.name,
    this.description = '',
    this.gpu = Up.isSupported && e.gpu,
    this.params = [
    ],
    this.weights = {
    },
    this.inbound = [
    ],
    this.outbound = [
    ]
  }
  return u(t, [
    {
      key: 'throwError',
      value: function t(e) {
        throw new Error('['.concat(this.layerClass, ' layer: ').concat(this.name || '', '] ').concat(e))
      }
    },
    {
      key: 'toggleGPU',
      value: function t(e) {
        var n = void 0 === e ? !this.gpu : e;
        Up.isSupported && n ? this.gpu = !0 : this.gpu = !1
      }
    },
    {
      key: 'setWeights',
      value: function t(e) {
        var n = this,
        r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.params.forEach(function (t, o) {
          n.weights[t] = e[o],
          n.gpu && r && n.weights[t].createGLTexture({
            type: '2d',
            format: 'float'
          })
        })
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.output = e,
        this.output
      }
    }
  ]),
  t
}(),
qp = n(32),
Vp = n.n(qp),
Hp = n(58),
Wp = n.n(Hp),
Xp = n(1),
Yp = n.n(Xp),
$p = n(161),
Kp = n.n($p),
Jp = function () {
  function t(e, n) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    };
    d(this, t),
    this.arrayType = r.type || Float32Array,
    e && e.length && (e instanceof this.arrayType || e instanceof Array) ? (l(e, n), e instanceof this.arrayType ? this.tensor = Wp() (e, n)  : e instanceof Array && (this.tensor = Wp() (new this.arrayType(e), n)))  : !e.length && n.length ? this.tensor = Wp() (new this.arrayType(n.reduce(function (t, e) {
      return t * e
    }, 1)), n)  : this.tensor = Wp() (new this.arrayType([]), [
    ])
  }
  return y(t, [
    {
      key: 'createGLTexture',
      value: function t(e) {
        var n = e.type,
        r = void 0 === n ? '2d' : n,
        o = e.format,
        i = void 0 === o ? 'float' : o,
        a = e.supportsTextureFragments,
        s = void 0 !== a && a,
        u = [
        ];
        if (1 === this.tensor.shape.length) u = [
          1,
          this.tensor.shape[0]
        ],
        this.is1D = !0;
         else if (2 === this.tensor.shape.length) u = this.tensor.shape;
         else {
          if (3 !== this.tensor.shape.length || '2d_array' !== r && '3d' !== r) throw new Error('[Tensor] cannot create WebGL2 texture.');
          u = this.tensor.shape
        }
        if (this.glTextureShape = u, this.glTextureType = r, this.glTextureFormat = i, '2d' === r) this.glTextureShape[0] > Gp && s ? this._create2DRowFragmentedGLTexture()  : this._create2DGLTexture();
         else {
          if ('2d_array' !== r && '3d' !== r) throw new Error('[Tensor] invalid type '.concat(r, '.'));
          this._create3DGLTexture()
        }
      }
    },
    {
      key: '_create2DGLTexture',
      value: function t() {
        var e = Up.context,
        n = Up.getWebGLTextureOptions(this.glTextureType, this.glTextureFormat),
        r = n.textureTarget,
        o = n.textureInternalFormat,
        i = n.textureFormat,
        a = n.textureType;
        this.glTexture = e.createTexture(),
        Up.storeRef('texture', this.glTexture),
        e.bindTexture(r, this.glTexture);
        var s = this.glTextureShape,
        u = this.tensor.data;
        e.texImage2D(r, 0, o, s[1], s[0], 0, i, a, u),
        e.texParameteri(r, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(r, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        e.texParameteri(r, e.TEXTURE_MAG_FILTER, e.NEAREST),
        e.texParameteri(r, e.TEXTURE_MIN_FILTER, e.NEAREST)
      }
    },
    {
      key: '_create2DRowFragmentedGLTexture',
      value: function t() {
        var e = Up.context,
        n = Up.getWebGLTextureOptions(this.glTextureType, this.glTextureFormat),
        r = n.textureTarget,
        o = n.textureInternalFormat,
        i = n.textureFormat,
        a = n.textureType;
        this.glTextureFragments = [
        ],
        this.glTextureFragmentShape = [
          Gp,
          this.glTextureShape[1]
        ];
        for (var s = this.glTextureFragmentShape, u = Math.ceil(this.glTextureShape[0] / Gp), c = 0, l = 0; l < u; l++) {
          var p = e.createTexture();
          Up.storeRef('texture', p),
          e.bindTexture(r, p);
          var h = void 0;
          l === u - 1 ? (h = new this.arrayType(s[0] * s[1]), h.set(this.tensor.data.slice(c, c + s[0] * s[1]), 0))  : h = this.tensor.data.slice(c, c + s[0] * s[1]),
          e.texImage2D(r, 0, o, s[1], s[0], 0, i, a, h),
          e.texParameteri(r, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
          e.texParameteri(r, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
          e.texParameteri(r, e.TEXTURE_MAG_FILTER, e.NEAREST),
          e.texParameteri(r, e.TEXTURE_MIN_FILTER, e.NEAREST),
          this.glTextureFragments.push(p),
          c += s[0] * s[1]
        }
      }
    },
    {
      key: '_create3DGLTexture',
      value: function t() {
        var e = Up.context,
        n = Up.getWebGLTextureOptions(this.glTextureType, this.glTextureFormat),
        r = n.textureTarget,
        o = n.textureInternalFormat,
        i = n.textureFormat,
        a = n.textureType;
        this.glTexture = e.createTexture(),
        Up.storeRef('texture', this.glTexture),
        e.bindTexture(r, this.glTexture);
        var s = this.glTextureShape,
        u = p(this.arrayType, this.tensor, this.glTextureShape);
        e.texImage3D(r, 0, o, s[1], s[0], s[2], 0, i, a, u),
        e.texParameteri(r, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(r, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        e.texParameteri(r, e.TEXTURE_MAG_FILTER, e.NEAREST),
        e.texParameteri(r, e.TEXTURE_MIN_FILTER, e.NEAREST)
      }
    },
    {
      key: 'convert2DRowFragmentedGLTextureToColStack',
      value: function t() {
        var e = this;
        if (!this.glTextureFragments || !this.glTextureFragmentShape) throw new Error('[Tensor] no glTextureFragments available.');
        var n = Up.context,
        r = Up.getWebGLTextureOptions(this.glTextureType, this.glTextureFormat),
        o = r.textureTarget,
        i = r.textureInternalFormat,
        a = r.textureFormat,
        s = r.textureType;
        if (this.glTextureFragmentsAsColStack) n.bindTexture(o, this.glTextureFragmentsAsColStack);
         else {
          this.glTextureFragmentsAsColStack = n.createTexture(),
          Up.storeRef('texture', this.glTextureFragmentsAsColStack),
          n.bindTexture(o, this.glTextureFragmentsAsColStack);
          var u = this.glTextureFragments.length;
          this.glTextureFragmentsAsColStackShape = [
            this.glTextureFragmentShape[0],
            this.glTextureFragmentShape[1] * u
          ];
          var c = this.glTextureFragmentsAsColStackShape,
          l = new this.arrayType(c.reduce(function (t, e) {
            return t * e
          }, 1));
          n.texImage2D(o, 0, i, c[1], c[0], 0, a, s, l),
          n.texParameteri(o, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE),
          n.texParameteri(o, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE),
          n.texParameteri(o, n.TEXTURE_MAG_FILTER, n.NEAREST),
          n.texParameteri(o, n.TEXTURE_MIN_FILTER, n.NEAREST)
        }
        var p = n.createFramebuffer();
        n.bindFramebuffer(n.READ_FRAMEBUFFER, p),
        this.glTextureFragments.forEach(function (t, r) {
          n.framebufferTexture2D(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, t, 0),
          n.copyTexSubImage2D(o, 0, r * e.glTextureFragmentShape[1], 0, 0, 0, e.glTextureFragmentShape[1], e.glTextureFragmentShape[0])
        }),
        n.deleteFramebuffer(p)
      }
    },
    {
      key: 'removeGLTextureFragmentsAsColStack',
      value: function t() {
        if (this.glTextureFragmentsAsColStack) {
          Up.context.deleteTexture(this.glTextureFragmentsAsColStack),
          delete this.glTextureFragmentsAsColStack,
          delete this.glTextureFragmentsAsColStackShape
        }
      }
    },
    {
      key: 'deleteGLTexture',
      value: function t() {
        var e = Up.context;
        this.glTexture && (e.deleteTexture(this.glTexture), delete this.glTexture),
        this.glTextureFragments && (this.glTextureFragments.forEach(function (t) {
          e.deleteTexture(t)
        }), delete this.glTextureFragments)
      }
    },
    {
      key: 'replaceTensorData',
      value: function t(e) {
        if (e && e.length && e instanceof this.arrayType) this.tensor.data.set(e);
         else {
          if (!(e && e.length && e instanceof Array)) throw new Error('[Tensor] invalid input for replaceTensorData method.');
          this.tensor.data.set(new this.arrayType(e))
        }
        if (this.glTexture) {
          var n = Up.context,
          r = Up.getWebGLTextureOptions(this.glTextureType, this.glTextureFormat),
          o = r.textureTarget,
          i = r.textureFormat,
          a = r.textureType;
          n.bindTexture(o, this.glTexture);
          var s = this.glTextureShape;
          if ('2d' === this.glTextureType) {
            var u = this.tensor.data;
            n.texSubImage2D(o, 0, 0, 0, s[1], s[0], i, a, u, 0)
          } else if ('2d_array' === this.glTextureType || '3d' === this.glTextureType) {
            var c = p(this.arrayType, this.tensor, s);
            n.texSubImage3D(o, 0, 0, 0, 0, s[1], s[0], s[2], i, a, c, 0)
          }
        }
      }
    },
    {
      key: 'transferFromGLTexture',
      value: function t() {
        if (this.glTextureFragments) {
          this.tensor = Wp() (new this.arrayType(this.glTextureShape[0] * this.glTextureShape[1]), this.glTextureShape);
          for (var e = 0, n = 0; n < this.glTextureFragments.length; n++) {
            Up.bindOutputTexture(this.glTextureFragments[n], this.glTextureFragmentShape);
            var r = Up.readData(this.glTextureFragmentShape);
            if (n === this.glTextureFragments.length - 1) {
              var o = this.tensor.data.length - e;
              this.tensor.data.set(r.subarray(0, o), e)
            } else this.tensor.data.set(r, e);
            e += r.length
          }
        } else Up.bindOutputTexture(this.glTexture, this.glTextureShape),
        this.tensor = Wp() (new this.arrayType([]), this.glTextureShape),
        this.tensor.data = Up.readData(this.glTextureShape);
        this.is1D && 1 === this.glTextureShape[0] && (this.tensor = Kp() (this.tensor, [
          0
        ]))
      }
    },
    {
      key: 'reshapeTo2D',
      value: function t() {
        for (var e = this.tensor.shape.length - 1, n = this.tensor.shape[e], r = this.tensor.shape.slice(0, e), o = r.reduce(function (t, e) {
          return t * e
        }, 1), i = Wp() (new this.arrayType(o * n), [
          o,
          n
        ]), a = Wp() (new this.arrayType(o), r), s = Wp() (new this.arrayType(o), [
          o
        ]), u = Array(this.tensor.shape.length).fill(null), c = 0; c < n; c++) {
          var l;
          u[e] = c,
          Yp.a.assign(a, (l = this.tensor).pick.apply(l, f(u))),
          s.data = a.data,
          Yp.a.assign(i.pick(null, c), s)
        }
        this.originalShape = this.tensor.shape,
        this.indicesForReshaped = h(this.tensor.shape, !1, e),
        this.tensor = i,
        this.is2DReshaped = !0
      }
    },
    {
      key: 'reshapeFrom2D',
      value: function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : - 1;
        if (!this.is2DReshaped) throw new Error('[Tensor] not in reshaped 2D representation.');
        if (!this.originalShape) throw new Error('[Tensor] does not contain originalShape.');
        e < 0 && (e = this.originalShape.length + e);
        for (var n = this.tensor.shape[0], r = this.tensor.shape[1], o = Wp() (new this.arrayType(this.originalShape.reduce(function (t, e) {
          return t * e
        }, 1)), this.originalShape), i = Wp() (new this.arrayType(n), [
          n
        ]), a = f(this.originalShape.slice(0, e)).concat(f(this.originalShape.slice(e + 1))), s = Wp() (new this.arrayType(a.reduce(function (t, e) {
          return t * e
        }, 1)), a), u = Array(this.originalShape.length).fill(null), c = 0; c < r; c++) Yp.a.assign(i, this.tensor.pick(null, c)),
        s.data = i.data,
        u[e] = c,
        Yp.a.assign(o.pick.apply(o, f(u)), s);
        this.tensor = o
      }
    },
    {
      key: 'reshapeTo2DSquare',
      value: function t() {
        var e = Math.ceil(Math.sqrt(this.tensor.size)),
        n = Wp() (new this.arrayType(Math.pow(e, 2)), [
          e,
          e
        ]);
        n.data.set(this.tensor.data),
        this.originalShape = this.tensor.shape,
        this.indicesForReshaped = h(this.tensor.shape, !0),
        this.tensor = n,
        this.is2DSquareReshaped = !0
      }
    },
    {
      key: 'reshapeFrom2DSquare',
      value: function t() {
        if (!this.is2DSquareReshaped) throw new Error('[Tensor] not in reshaped 2D square representation.');
        if (!this.originalShape) throw new Error('[Tensor] does not contain originalShape.');
        var e = this.originalShape.reduce(function (t, e) {
          return t * e
        }, 1),
        n = Wp() (new this.arrayType(e), this.originalShape);
        n.data.set(this.tensor.data.subarray(0, e)),
        this.tensor = n
      }
    }
  ]),
  t
}(),
Qp = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    g(this, e),
    t = x(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'InputLayer';
    var r = n.shape,
    o = void 0 === r ? [
    ] : r;
    return t.shape = n.batch_input_shape && n.batch_input_shape.length ? n.batch_input_shape.slice(1)  : o,
    t.description = 'shape: '.concat(JSON.stringify(t.shape)),
    t
  }
  return w(e, t),
  b(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.inputShape = e.tensor.shape,
        bp() (this.inputShape, this.shape) || this.throwError('input tensor shape '.concat(e.tensor.shape, ' does not match specified shape ').concat(this.shape, '.')),
        this.output = new Jp(e.tensor.data, e.tensor.shape)
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        (e.glTexture || e.glTextureFragments) && (e.is2DReshaped || e.is2DSquareReshaped) ? this.inputShape = e.originalShape : this.inputShape = e.tensor.shape,
        bp() (this.inputShape, this.shape) || this.throwError('input tensor shape '.concat(e.tensor.shape, ' does not match specified shape ').concat(this.shape, '.')),
        e.glTexture || (e.tensor.shape.length <= 2 ? e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        })  : e.tensor.shape.length > 2 && (e.reshapeTo2D(), e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }))),
        this.output = e
      }
    }
  ]),
  e
}(Bp),
Zp = n(8),
th = n.n(Zp),
eh = th() ({
  args: [
    'array',
    'scalar'
  ],
  body: function t(e, n) {
    e = Math.max(e, 0) + n * (Math.exp(Math.min(e, 0)) - 1)
  }
}),
nh = th() ({
  args: [
    'array',
    'scalar'
  ],
  body: function t(e) {
    e = 1.0507009873554805 * (Math.max(e, 0) + 1.6732632423543772 * (Math.exp(Math.min(e, 0)) - 1))
  }
}),
rh = th() ({
  args: [
    'array'
  ],
  body: function t(e) {
    e = Math.log(Math.exp(e) + 1)
  }
}),
oh = th() ({
  args: [
    'array'
  ],
  body: function t(e) {
    e /= 1 + Math.abs(e)
  }
}),
ih = th() ({
  args: [
    'array'
  ],
  body: function t(e) {
    e = Math.tanh(e)
  }
}),
ah = th() ({
  args: [
    'array'
  ],
  body: function t(e) {
    e = 1 / (1 + Math.exp( - e))
  }
}),
sh = th() ({
  args: [
    'array'
  ],
  body: function t(e) {
    e = 0.2 * e + 0.5,
    e <= 0 ? e = 0 : e >= 1 && (e = 1)
  }
}),
uh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform float alpha;\nout vec4 outColor;\n\nvoid main() {\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  outColor = max(v, 0.0) + alpha * min(v, 0.0);\n}\n',
ch = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    R(this, e),
    t = L(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'LeakyReLU';
    var r = n.alpha,
    o = void 0 === r ? 0.3 : r;
    return t.description = 'alpha: '.concat(o),
    t.alpha = o,
    t.gpu && (t.program = Up.compileProgram(uh)),
    t
  }
  return z(e, t),
  I(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.output = e,
        O(this.output, {
          alpha: this.alpha
        })
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.glTextureFragments || e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }),
        this.output || (this.output = new Jp([], e.glTextureShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), e.is1D ? this.output.is1D = e.is1D : (e.is2DReshaped || e.is2DSquareReshaped) && (e.is2DReshaped ? this.output.is2DReshaped = e.is2DReshaped : e.is2DSquareReshaped && (this.output.is2DSquareReshaped = e.is2DSquareReshaped), this.output.originalShape = e.originalShape, this.output.indicesForReshaped = e.indicesForReshaped)),
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: this.alpha,
              type: 'float',
              name: 'alpha'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
lh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform sampler2D alpha;\nout vec4 outColor;\n\nvoid main() {\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  vec4 a = texture(alpha, vec2(outTex.x, outTex.y));\n  outColor = max(v, 0.0) + a * min(v, 0.0);\n}\n',
ph = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return G(this, e),
    t = q(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    Object.defineProperty(H(t), '_compute', {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: th() ({
        args: [
          'array',
          'array'
        ],
        body: function t(e, n) {
          e = Math.max(e, 0) + n * Math.min(e, 0)
        }
      })
    }),
    t.layerClass = 'PReLU',
    t.params = [
      'alpha'
    ],
    t.gpu && (t.program = Up.compileProgram(lh)),
    t
  }
  return V(e, t),
  B(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.output = e,
        this._compute(this.output.tensor, this.weights.alpha.tensor)
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.glTextureFragments || e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }),
        this.output || (this.output = new Jp([], e.glTextureShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), e.is1D ? this.output.is1D = e.is1D : (e.is2DReshaped || e.is2DSquareReshaped) && (e.is2DReshaped ? this.output.is2DReshaped = e.is2DReshaped : e.is2DSquareReshaped && (this.output.is2DSquareReshaped = e.is2DSquareReshaped), this.output.originalShape = e.originalShape, this.output.indicesForReshaped = e.indicesForReshaped)),
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.weights.alpha,
              name: 'alpha'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
hh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform float alpha;\nout vec4 outColor;\n\nvoid main() {\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  outColor = max(v, 0.0) + alpha * (exp(min(v, 0.0)) - 1.0);\n}\n',
fh = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    X(this, e),
    t = K(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    dh.call(Q(t)),
    t.layerClass = 'ELU';
    var r = n.alpha,
    o = void 0 === r ? 1 : r;
    return t.description = 'alpha: '.concat(o),
    t.alpha = o,
    t.gpu && (t.program = Up.compileProgram(hh)),
    t
  }
  return J(e, t),
  $(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.output = e,
        this._compute(this.output.tensor, this.alpha)
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.glTextureFragments || e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }),
        this.output || (this.output = new Jp([], e.glTextureShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), e.is1D ? this.output.is1D = e.is1D : (e.is2DReshaped || e.is2DSquareReshaped) && (e.is2DReshaped ? this.output.is2DReshaped = e.is2DReshaped : e.is2DSquareReshaped && (this.output.is2DSquareReshaped = e.is2DSquareReshaped), this.output.originalShape = e.originalShape, this.output.indicesForReshaped = e.indicesForReshaped)),
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: this.alpha,
              type: 'float',
              name: 'alpha'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
dh = function t() {
  Object.defineProperty(this, '_compute', {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: th() ({
      args: [
        'array',
        'scalar'
      ],
      body: function t(e, n) {
        e = Math.max(e, 0) + n * (Math.exp(Math.min(e, 0)) - 1)
      }
    })
  })
},
mh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform float theta;\nout vec4 outColor;\n\nvoid main() {\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  outColor = v * float(greaterThan(v, vec4(theta)));\n}\n',
yh = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    tt(this, e),
    t = rt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    vh.call(it(t)),
    t.layerClass = 'ThresholdedReLU';
    var r = n.theta,
    o = void 0 === r ? 1 : r;
    return t.description = 'theta: '.concat(o),
    t.theta = o,
    t.gpu && (t.program = Up.compileProgram(mh)),
    t
  }
  return ot(e, t),
  nt(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.output = e,
        this._compute(this.output.tensor, this.theta)
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.glTextureFragments || e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }),
        this.output || (this.output = new Jp([], e.glTextureShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), e.is1D ? this.output.is1D = e.is1D : (e.is2DReshaped || e.is2DSquareReshaped) && (e.is2DReshaped ? this.output.is2DReshaped = e.is2DReshaped : e.is2DSquareReshaped && (this.output.is2DSquareReshaped = e.is2DSquareReshaped), this.output.originalShape = e.originalShape, this.output.indicesForReshaped = e.indicesForReshaped)),
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: this.theta,
              type: 'float',
              name: 'theta'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
vh = function t() {
  Object.defineProperty(this, '_compute', {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: th() ({
      args: [
        'array',
        'scalar'
      ],
      body: function t(e, n) {
        e *= Number(e > n)
      }
    })
  })
},
gh = n(420),
_h = n.n(gh),
bh = n(162),
xh = n.n(bh),
wh = n(46),
Sh = n.n(wh),
Th = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(x, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float maxval = 0.0;\n  for (int i = 0; i < int(size[0]); ++i) {\n    float val = texelFetch(x, ivec2(i, out_y), 0).r;\n    if (i == 0 || val > maxval) {\n      maxval = val;\n    }\n  }\n\n  float sum = 0.0;\n  for (int i = 0; i < int(size[0]); ++i) {\n    float val = texelFetch(x, ivec2(i, out_y), 0).r;\n    sum += exp(val - maxval);\n  }\n\n  outColor = exp(texture(x, vec2(outTex.x, outTex.y)) - maxval) / sum;\n}\n',
Ph = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  float alpha = 1.0;\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  outColor = max(v, 0.0) + alpha * (exp(min(v, 0.0)) - 1.0);\n}\n',
Ch = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  float alpha = 1.6732632423543772848170429916717;\n  float scale = 1.0507009873554804934193349852946;\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  outColor = scale * (max(v, 0.0) + alpha * (exp(min(v, 0.0)) - 1.0));\n}\n',
kh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  outColor = log(1.0 + exp(texture(x, vec2(outTex.x, outTex.y))));\n}\n',
Oh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  v /= 1.0 + abs(v);\n  outColor = v;\n}\n',
Eh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  outColor = max(v, 0.0);\n}\n',
jh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  outColor = tanh(v);\n}\n',
Ah = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  outColor = 1.0 / (1.0 + exp(-1.0 * texture(x, vec2(outTex.x, outTex.y))));\n}\n',
Fh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  vec4 v = texture(x, vec2(outTex.x, outTex.y));\n  v = v * 0.2 + 0.5;\n  v = max(v, 0.0);\n  v = min(v, 1.0);\n  outColor = v;\n}\n',
Mh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  outColor = texture(x, vec2(outTex.x, outTex.y));\n}\n',
Rh = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
Dh = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 inputSize = textureSize(x, 0);\n  ivec2 outputSize = textureSize(indexMap, 0);\n  int out_x = int(float(outputSize[0]) * outTex.x);\n  int out_y = int(float(outputSize[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    int fragmentIndex = int(floor(float(rowIndex) / float(inputSize[1])));\n    rowIndex = int(mod(float(rowIndex), float(inputSize[1])));\n    colIndex = fragmentIndex * inputCols + colIndex;\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
Ih = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D A;\nuniform sampler2D B;\nuniform sampler2D C;\nuniform bool addC;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 A_size = textureSize(A, 0);\n  ivec2 B_size = textureSize(B, 0);\n  int out_x = int(float(B_size[0]) * outTex.x);\n  int out_y = int(float(A_size[1]) * outTex.y);\n  int commonDim = A_size[0];\n\n  float sum = 0.;\n  for (int i = 0; i < commonDim; ++i) {\n    float a = texelFetch(A, ivec2(i, out_y), 0).r;\n    float b = texelFetch(B, ivec2(out_x, i), 0).r;\n    sum += a * b;\n  }\n\n  if (addC) {\n    sum += texelFetch(C, ivec2(out_x, 0), 0).r;\n  }\n\n  outColor = vec4(sum);\n}\n',
Lh = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    xt(this, e),
    t = Tt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Conv2D';
    var r = n.filters,
    o = void 0 === r ? 1 : r,
    i = n.kernel_size,
    a = void 0 === i ? [
      3,
      3
    ] : i,
    s = n.strides,
    u = void 0 === s ? [
      1,
      1
    ] : s,
    c = n.padding,
    l = void 0 === c ? 'valid' : c,
    p = n.data_format,
    h = void 0 === p ? 'channels_last' : p,
    f = n.dilation_rate,
    d = void 0 === f ? [
      1,
      1
    ] : f,
    m = n.activation,
    y = void 0 === m ? 'linear' : m,
    v = n.use_bias,
    g = void 0 === v || v;
    return Array.isArray(a) ? t.kernelShape = [
      o
    ].concat(bt(a))  : t.kernelShape = [
      o,
      a,
      a
    ],
    Array.isArray(u) ? t.strides = u : t.strides = [
      u,
      u
    ],
    'valid' === l || 'same' === l ? t.padding = l : t.throwError('Invalid padding.'),
    'channels_last' === h || 'channels_first' === h ? t.dataFormat = h : t.throwError('Only channels_last and channels_first data formats are allowed.'),
    Array.isArray(d) ? t.dilationRate = d : t.dilationRate = [
      d,
      d
    ],
    1 === t.dilationRate[0] && 1 === t.dilationRate[1] || 1 === t.strides[0] && 1 === t.strides[1] || t.throwError('Incompatible combination of dilation_rate with strides.'),
    t.activation = y,
    t.activationFunc = Es[y],
    t.useBias = g,
    t.params = t.useBias ? [
      'kernel',
      'bias'
    ] : [
      'kernel'
    ],
    t.description = ''.concat(t.kernelShape[0], ' ').concat(t.kernelShape.slice(1).join('x'), ' filters'),
    t.description += t.strides.some(function (t) {
      return t > 1
    }) ? ', '.concat(t.strides.join('x'), ' striding')  : '',
    t.description += 'valid' === t.padding ? ', no border padding' : ', pad to same borders',
    t.description += t.dilationRate.some(function (t) {
      return t > 1
    }) ? ', '.concat(t.dilationRate.join('x'), ' dilation')  : '',
    t.description += 'linear' !== t.activation ? ', '.concat(t.activation, ' activation')  : '',
    t.gpu && (t.mapInputProgram = Up.compileProgram(Rh), t.mapInputFragmentsProgram = Up.compileProgram(Dh), t.matMulProgram = Up.compileProgram(Ih), t.activationProgram = Up.compileProgram(js[t.activation])),
    t
  }
  return Ct(e, t),
  St(e, [
    {
      key: 'setWeights',
      value: function t(n) {
        'channels_first' === this.dataFormat && (n[0].tensor = n[0].tensor.transpose(2, 3, 1, 0)),
        Pt(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'setWeights', this).call(this, n, !1),
        this._w2row(),
        this.gpu && (this.weights.kernel = this.wRowsMat, this.weights.kernel.createGLTexture({
          type: '2d',
          format: 'float'
        }), this.useBias && this.weights.bias.createGLTexture({
          type: '2d',
          format: 'float'
        }))
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_calcOutputShape',
      value: function t(e) {
        if (!this.outputShape || !this.inputPadding) {
          var n = e[0],
          r = e[1],
          o = _t(this.kernelShape, 3),
          i = o[0],
          a = o[1],
          s = o[2],
          u = a + (a - 1) * (this.dilationRate[0] - 1),
          c = s + (s - 1) * (this.dilationRate[1] - 1),
          l = 'same' === this.padding ? Math.floor((n + this.strides[0] - 1) / this.strides[0])  : Math.floor((n - u + this.strides[0]) / this.strides[0]),
          p = 'same' === this.padding ? Math.floor((r + this.strides[1] - 1) / this.strides[1])  : Math.floor((r - c + this.strides[1]) / this.strides[1]),
          h = i,
          f = 'same' === this.padding ? Math.max(0, Math.floor((l - 1) * this.strides[0] + u - n))  : 0,
          d = 'same' === this.padding ? Math.max(0, Math.floor((p - 1) * this.strides[1] + c - r))  : 0,
          m = Math.floor(f / 2),
          y = f - m,
          v = Math.floor(d / 2),
          g = d - v;
          this.outputShape = [
            l,
            p,
            h
          ],
          this.inputPadding = [
            m,
            y,
            v,
            g
          ]
        }
      }
    },
    {
      key: '_padInput',
      value: function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ('same' === this.padding) {
          var r = _t(e.tensor.shape, 3),
          o = r[0],
          i = r[1],
          a = r[2],
          s = _t(this.inputPadding, 4),
          u = s[0],
          c = s[1],
          l = s[2],
          p = s[3],
          h = o + u + c,
          f = i + l + p,
          d = new Jp([], [
            h,
            f,
            a
          ]);
          return 0 !== n && Yp.a.assigns(d.tensor, n),
          Yp.a.assign(d.tensor.hi(o + u, i + l, a).lo(u, l, 0), e.tensor),
          d
        }
        return e
      }
    },
    {
      key: '_im2col',
      value: function t(e) {
        var n = _t(e.tensor.shape, 3),
        r = n[0],
        o = n[1],
        i = n[2],
        a = this.kernelShape[1],
        s = this.kernelShape[2],
        u = this.outputShape[0],
        c = this.outputShape[1],
        l = u * c,
        p = a * s * i,
        h = a + (a - 1) * (this.dilationRate[0] - 1),
        f = s + (s - 1) * (this.dilationRate[1] - 1);
        if (this.imColsMat || (this.imColsMat = new Jp([], [
          l,
          p
        ])), 1 === h && 1 === f && 1 === this.strides[0] && 1 === this.strides[1]) return this.imColsMat.replaceTensorData(e.tensor.data),
        this.imColsMat;
        for (var d = new Jp([], [
          a,
          s,
          i
        ]), m = 0, y = 0, v = r - h; y <= v; y += this.strides[0]) for (var g = 0, _ = o - f; g <= _; g += this.strides[1]) Yp.a.assign(d.tensor, e.tensor.hi(y + h, g + f, i).lo(y, g, 0).step(this.dilationRate[0], this.dilationRate[1], 1)),
        this.imColsMat.tensor.data.set(d.tensor.data, m),
        m += p;
        return this.imColsMat
      }
    },
    {
      key: '_w2row',
      value: function t() {
        var e = this.weights.kernel.tensor.shape[2],
        n = _t(this.kernelShape, 3),
        r = n[0],
        o = n[1],
        i = n[2],
        a = o * i * e;
        this.wRowsMat = new Jp([], [
          a,
          r
        ]);
        for (var s = new Jp([], [
          o,
          i,
          e
        ]), u = new Jp([], [
          a
        ]), c = 0; c < r; c++) Yp.a.assign(s.tensor, this.weights.kernel.tensor.pick(null, null, null, c)),
        u.replaceTensorData(s.tensor.data),
        Yp.a.assign(this.wRowsMat.tensor.pick(null, c), u.tensor);
        return this.wRowsMat
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.inputShape = e.tensor.shape,
        this._calcOutputShape(this.inputShape),
        e = this._padInput(e),
        this._im2col(e);
        var n = this.kernelShape[0],
        r = this.outputShape[0],
        o = this.outputShape[1],
        i = r * o,
        a = new Jp([], [
          i,
          n
        ]);
        if (this.useBias) for (var s = 0; s < n; s++) Yp.a.assigns(a.tensor.pick(null, s), this.weights.bias.tensor.get(s));
        Sh() (a.tensor, this.imColsMat.tensor, this.wRowsMat.tensor, 1, 1),
        this.output = new Jp([], this.outputShape);
        for (var u = new Jp([], [
          r * o
        ]), c = new Jp([], [
          r,
          o
        ]), l = 0; l < n; l++) Yp.a.assign(u.tensor, a.tensor.pick(null, l)),
        c.replaceTensorData(u.tensor.data),
        Yp.a.assign(this.output.tensor.pick(null, null, l), c.tensor);
        this.activationFunc(this.output),
        'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(2, 0, 1))
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e) {
        if (!this.indexMap) {
          var n = _t(this.inputShape, 3),
          r = n[0],
          o = n[1],
          i = n[2],
          a = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          if ('same' === this.padding) {
            var s = _t(this.inputPadding, 4),
            u = s[0],
            c = s[1],
            l = s[2],
            p = s[3];
            r = r + u + c,
            o = o + l + p;
            var h = - 1;
            a = this._padInput(a, - 1)
          }
          var f = this.kernelShape[1],
          d = this.kernelShape[2],
          m = this.outputShape[0],
          y = this.outputShape[1],
          v = m * y,
          g = f * d * i,
          _ = f + (f - 1) * (this.dilationRate[0] - 1),
          b = d + (d - 1) * (this.dilationRate[1] - 1);
          this.indexMap = new Jp([], [
            v,
            g
          ], {
            type: Int32Array
          });
          for (var x = new Jp([], [
            f,
            d,
            i
          ]), w = 0, S = 0, T = r - _; S <= T; S += this.strides[0]) for (var P = 0, C = o - b; P <= C; P += this.strides[1]) Yp.a.assign(x.tensor, a.tensor.hi(S + _, P + b, i).lo(S, P, 0).step(this.dilationRate[0], this.dilationRate[1], 1)),
          this.indexMap.tensor.data.set(x.tensor.data, w),
          w += g;
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        var n;
        if (e.is2DReshaped || e.is2DSquareReshaped ? (this.inputShape = e.originalShape, this._calcOutputShape(this.inputShape), this._createIndexMap(e.indicesForReshaped), n = [
          this.indexMap.glTextureShape[0],
          this.weights.kernel.glTextureShape[1]
        ])  : (this.inputShape = e.tensor.shape, this._calcOutputShape(this.inputShape), e = this._padInput(e), this._im2col(e), this.imColsMat.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), n = [
          this.imColsMat.glTextureShape[0],
          this.weights.kernel.glTextureShape[1]
        ]), 'linear' === this.activation || this.outputPreactiv || (this.outputPreactiv = new Jp([], n), this.outputPreactiv.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), this.outputPreactiv.is2DReshaped = !0, this.outputPreactiv.originalShape = this.outputShape, this.outputPreactiv.indicesForReshaped = h(this.outputShape, !1, - 1)), this.output || (this.output = new Jp([], n), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), this.output.is2DReshaped = !0, this.output.originalShape = this.outputShape, this.output.indicesForReshaped = h(this.outputShape, !1, - 1)), e.is2DReshaped || e.is2DSquareReshaped) {
          var r = Boolean(e.glTextureFragments);
          if (r && e.convert2DRowFragmentedGLTextureToColStack(), !this.convProgram) {
            var o = yt('conv2d', this.output.glTextureFragmentShape ? this.output.glTextureFragmentShape : this.output.glTextureShape, e.glTextureFragmentShape ? e.glTextureFragmentShape : e.glTextureShape, this.indexMap.glTextureFragmentShape ? this.indexMap.glTextureFragmentShape : this.indexMap.glTextureShape, this.useBias, r);
            this.convProgram = Up.compileProgram(o)
          }
          Up.runProgram({
            program: this.convProgram,
            output: 'linear' === this.activation ? this.output : this.outputPreactiv,
            inputs: [
              {
                input: e,
                name: 'x'
              },
              {
                input: this.indexMap,
                name: 'indexMap'
              },
              {
                input: this.weights.kernel,
                name: 'kernel'
              }
            ].concat(bt(this.useBias ? [
              {
                input: this.weights.bias,
                name: 'bias'
              }
            ] : [
            ])),
            supportsTextureFragments: !0
          }),
          r && e.removeGLTextureFragmentsAsColStack()
        } else {
          var i = [
            {
              input: this.imColsMat,
              name: 'A'
            },
            {
              input: this.weights.kernel,
              name: 'B'
            }
          ];
          this.useBias && i.push({
            input: this.weights.bias,
            name: 'C'
          }),
          Up.runProgram({
            program: this.matMulProgram,
            output: 'linear' === this.activation ? this.output : this.outputPreactiv,
            inputs: i,
            uniforms: [
              {
                value: this.useBias ? 1 : 0,
                type: 'bool',
                name: 'addC'
              }
            ],
            supportsTextureFragments: !0
          })
        }
        'linear' !== this.activation && Up.runProgram({
          program: this.activationProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputPreactiv,
              name: 'x'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.reshapeFrom2D(), 'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(2, 0, 1)))
      }
    }
  ]),
  e
}(Bp),
zh = n(163),
Uh = n.n(zh),
Gh = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Ot(this, e),
    t = At(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Conv1D';
    var r = n.filters,
    o = void 0 === r ? 1 : r,
    i = n.kernel_size,
    a = void 0 === i ? 1 : i,
    s = n.strides,
    u = void 0 === s ? 1 : s,
    c = n.padding,
    l = void 0 === c ? 'valid' : c,
    p = n.dilation_rate,
    h = void 0 === p ? 1 : p,
    f = n.activation,
    d = void 0 === f ? 'linear' : f,
    m = n.use_bias,
    y = void 0 === m || m;
    t.description = ''.concat(o, ' filters of size ').concat(a, ', striding ').concat(u),
    t.description += 'valid' === l ? ', no border padding' : ', pad to same borders',
    t.description += h > 1 ? ', dilation rate '.concat(h)  : '',
    t.description += 'linear' !== d ? ', '.concat(d, ' activation')  : '',
    'valid' !== l && 'same' !== l && t.throwError('Invalid padding.'),
    1 !== h && 1 !== u && t.throwError('Incompatible combination of dilation_rate with strides.'),
    t.use_bias = y,
    t.params = t.use_bias ? [
      'kernel',
      'bias'
    ] : [
      'kernel'
    ];
    var v = {
      filters: o,
      kernel_size: [
        a,
        1
      ],
      strides: [
        u,
        1
      ],
      padding: l,
      data_format: 'channels_first',
      dilation_rate: h,
      activation: d,
      use_bias: y
    };
    return t._conv2dAttrs = v,
    t._conv2d = new Lh(Object.assign(v, {
      gpu: n.gpu
    })),
    t
  }
  return Ft(e, t),
  jt(e, [
    {
      key: 'setWeights',
      value: function t(e) {
        e[0].tensor = Uh() (e[0].tensor).transpose(2, 1, 0, 3),
        this._conv2d.setWeights(e)
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        var n = this,
        r = new Jp(e.tensor.data, e.tensor.shape);
        r.tensor = Uh() (r.tensor).transpose(0, 2, 1);
        var o = this._conv2d.call(r);
        this.outputShape = [
          0,
          2
        ].map(function (t) {
          return n._conv2d.outputShape[t]
        }),
        this.output = new Jp([], this.outputShape),
        Yp.a.assign(this.output.tensor, Kp() (o.tensor).transpose(1, 0, 2))
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        });
        var n = e.tensor.shape,
        r = new Jp([], n);
        Object.assign(r, e),
        r.glTextureShape = n,
        r.is2DReshaped = !0,
        r.originalShape = [
          n[0],
          1,
          n[1]
        ],
        r.indicesForReshaped = h(r.originalShape, !1, - 1),
        this.output = this._conv2d.call(r),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
Nh = function (t) {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Lt(this, e),
    Gt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))
  }
  return Bt(e, t),
  Ut(e, [
    {
      key: '_calcOutputShape',
      value: function t(n) {
        Nt(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), '_calcOutputShape', this).call(this, n);
        var r = this.kernelShape[0],
        o = n[2];
        this.outputShape[2] = r * o
      }
    },
    {
      key: '_im2col',
      value: function t(e) {
        var n = It(e.tensor.shape, 3),
        r = n[0],
        o = n[1],
        i = n[2],
        a = this.kernelShape[1],
        s = this.kernelShape[2],
        u = this.outputShape[0],
        c = this.outputShape[1],
        l = u * c,
        p = a * s;
        this.imColsMat || (this.imColsMat = new Jp([], [
          l * i,
          p
        ]));
        for (var h = new Jp([], [
          a,
          s,
          1
        ]), f = 0, d = 0; d < i; d++) for (var m = 0, y = r - a; m <= y; m += this.strides[0]) for (var v = 0, g = o - s; v <= g; v += this.strides[1]) Yp.a.assign(h.tensor, e.tensor.hi(m + a, v + s, d + 1).lo(m, v, d)),
        this.imColsMat.tensor.data.set(h.tensor.data, f),
        f += p;
        return this.imColsMat
      }
    },
    {
      key: '_w2row',
      value: function t() {
        var e = this.weights.kernel.tensor.shape[2],
        n = It(this.kernelShape, 3),
        r = n[0],
        o = n[1],
        i = n[2],
        a = o * i;
        this.wRowsMat = new Jp([], [
          a,
          r * e
        ]);
        for (var s = new Jp([], [
          o,
          i
        ]), u = new Jp([], [
          a
        ]), c = 0, l = 0; l < e; l++) for (var p = 0; p < r; p++) Yp.a.assign(s.tensor, this.weights.kernel.tensor.pick(null, null, l, p)),
        u.replaceTensorData(s.tensor.data),
        Yp.a.assign(this.wRowsMat.tensor.pick(null, c), u.tensor),
        c += 1;
        return this.wRowsMat
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.inputShape = e.tensor.shape,
        this._calcOutputShape(this.inputShape),
        e = this._padInput(e),
        this._im2col(e);
        var n = this.kernelShape[0],
        r = this.outputShape[0],
        o = this.outputShape[1],
        i = r * o,
        a = this.inputShape[2],
        s = new Jp([], [
          i * a,
          n * a
        ]);
        Sh() (s.tensor, this.imColsMat.tensor, this.wRowsMat.tensor, 1, 1),
        this.output = new Jp([], this.outputShape);
        for (var u = r * o * n * a, c = new Float32Array(u), l = 0; l < a; l++) for (var p = l * u + l * n; p < (l + 1) * u; p += n * a) for (var h = 0; h < n; h++) c[p + h - l * u] = s.tensor.data[p + h];
        this.output.replaceTensorData(c)
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e) {
        if (!this.indexMap) {
          var n = It(this.inputShape, 3),
          r = n[0],
          o = n[1],
          i = n[2],
          a = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          if ('same' === this.padding) {
            var s = It(this.inputPadding, 4),
            u = s[0],
            c = s[1],
            l = s[2],
            p = s[3];
            r = r + u + c,
            o = o + l + p;
            var h = - 1;
            a = this._padInput(a, - 1)
          }
          var f = this.kernelShape[1],
          d = this.kernelShape[2],
          m = this.outputShape[0],
          y = this.outputShape[1],
          v = m * y,
          g = f * d;
          this.indexMap = new Jp([], [
            v * i,
            g
          ], {
            type: Int32Array
          });
          for (var _ = new Jp([], [
            f,
            d,
            1
          ]), b = 0, x = 0; x < i; x++) for (var w = 0, S = r - f; w <= S; w += this.strides[0]) for (var T = 0, P = o - d; T <= P; T += this.strides[1]) Yp.a.assign(_.tensor, a.tensor.hi(w + f, T + d, x + 1).lo(w, T, x)),
          this.indexMap.tensor.data.set(_.tensor.data, b),
          b += g;
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_createOutputReshapeIndexMap',
      value: function t() {
        if (!this.reshapeIndexMap) {
          var e = this.kernelShape[0],
          n = [
            this.outputShape[0] * this.outputShape[1],
            this.outputShape[2]
          ],
          r = new Jp([], n, {
            type: Int32Array
          }),
          o = new Jp([], n, {
            type: Int32Array
          });
          this.reshapeIndexMap = new Jp([], n, {
            type: Int32Array
          });
          for (var i = 0; i < n[1]; i++) for (var a = 0; a < n[0]; a++) Yp.a.assigns(r.tensor.pick(a, i), a + Math.floor(i / e) * n[0]);
          for (var s = 0; s < n[1]; s++) Yp.a.assigns(o.tensor.pick(null, s), s);
          Yp.a.muls(this.reshapeIndexMap.tensor, r.tensor, n[1]),
          Yp.a.addeq(this.reshapeIndexMap.tensor, o.tensor),
          this.reshapeIndexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(n) {
        if (Nt(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), '_callGPU', this).call(this, n), this._createOutputReshapeIndexMap(), !this.outputReshaped) {
          var r = [
            this.outputShape[0] * this.outputShape[1],
            this.outputShape[2]
          ];
          this.outputReshaped = new Jp([], r),
          this.outputReshaped.createGLTexture({
            type: '2d',
            format: 'float',
            supportsTextureFragments: !0
          }),
          this.outputReshaped.is2DReshaped = !0,
          this.outputReshaped.originalShape = this.outputShape,
          this.outputReshaped.indicesForReshaped = h(this.outputShape, !1, - 1)
        }
        this.output.glTextureFragments && this.output.convert2DRowFragmentedGLTextureToColStack(),
        Up.runProgram({
          program: this.output.glTextureFragments ? this.mapInputFragmentsProgram : this.mapInputProgram,
          output: this.outputReshaped,
          inputs: [
            {
              input: this.output,
              name: 'x'
            },
            {
              input: this.reshapeIndexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: this.output.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ],
          supportsTextureFragments: !0
        }),
        this.output.glTextureFragments && this.output.removeGLTextureFragmentsAsColStack()
      }
    }
  ]),
  e
}(Lh),
Bh = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Lt(this, e),
    t = Gt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'SeparableConv2D';
    var r = n.filters,
    o = void 0 === r ? 1 : r,
    i = n.kernel_size,
    a = void 0 === i ? [
      1,
      1
    ] : i,
    s = n.strides,
    u = void 0 === s ? [
      1,
      1
    ] : s,
    c = n.padding,
    l = void 0 === c ? 'valid' : c,
    p = n.data_format,
    h = void 0 === p ? 'channels_last' : p,
    f = n.depth_multiplier,
    d = void 0 === f ? 1 : f,
    m = n.activation,
    y = void 0 === m ? 'linear' : m,
    v = n.use_bias,
    g = void 0 === v || v;
    return Array.isArray(a) ? t.kernelShape = [
      o
    ].concat(Mt(a))  : t.kernelShape = [
      o,
      a,
      a
    ],
    Array.isArray(u) ? t.strides = u : t.strides = [
      u,
      u
    ],
    'valid' === l || 'same' === l ? t.padding = l : t.throwError('Invalid padding.'),
    'channels_last' === h || 'channels_first' === h ? t.dataFormat = h : t.throwError('Only channels_last and channels_first data formats are allowed.'),
    t.activation = y,
    t.activationFunc = Es[y],
    'valid' === l || 'same' === l ? t.padding = l : t.throwError('Invalid padding.'),
    t.useBias = g,
    t.params = t.useBias ? [
      'depthwise_kernel',
      'pointwise_kernel',
      'bias'
    ] : [
      'depthwise_kernel',
      'pointwise_kernel'
    ],
    t.depthwiseConvAttrs = {
      filters: d,
      kernel_size: [
        t.kernelShape[1],
        t.kernelShape[2]
      ],
      strides: t.strides,
      padding: l,
      data_format: h,
      activation: 'linear',
      use_bias: !1,
      gpu: n.gpu
    },
    t.pointwiseConvAttrs = {
      filters: o,
      kernel_size: [
        1,
        1
      ],
      strides: [
        1,
        1
      ],
      padding: l,
      data_format: h,
      activation: 'linear',
      use_bias: g,
      gpu: n.gpu
    },
    t.description = ''.concat(t.kernelShape[0], ' ').concat(t.kernelShape.slice(1).join('x'), ' filters'),
    t.description += t.strides.some(function (t) {
      return t > 1
    }) ? ', '.concat(t.strides.join('x'), ' striding')  : '',
    t.description += 'valid' === t.padding ? ', no border padding' : ', pad to same borders',
    t.description += d > 1 ? ', depth multiplier: '.concat(d)  : '',
    t.description += 'linear' !== t.activation ? ', '.concat(t.activation, ' activation')  : '',
    t.gpu && (t.activationProgram = Up.compileProgram(js[t.activation])),
    t
  }
  return Bt(e, t),
  Ut(e, [
    {
      key: 'setWeights',
      value: function t(e) {
        this._depthwiseConv = new Nh(this.depthwiseConvAttrs),
        this._depthwiseConv.setWeights(e.slice(0, 1)),
        this._pointwiseConv = new Lh(this.pointwiseConvAttrs),
        this._pointwiseConv.setWeights(e.slice(1, 3))
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this._depthwiseConv._callCPU(e),
        this._pointwiseConv._callCPU(this._depthwiseConv.output),
        this.output = this._pointwiseConv.output,
        this.activationFunc(this.output)
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        this._depthwiseConv.outbound = [
          null
        ],
        this._pointwiseConv.outbound = [
          null
        ],
        this._depthwiseConv._callGPU(e),
        this._pointwiseConv._callGPU(this._depthwiseConv.outputReshaped),
        'linear' === this.activation ? this.output = this._pointwiseConv.output : (this.output || (this.output = new Jp([], this._pointwiseConv.output.glTextureShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), this.output.is2DReshaped = !0, this.output.originalShape = this._pointwiseConv.output.originalShape, this.output.indicesForReshaped = h(this._pointwiseConv.output.originalShape, !1, - 1)), this.outputPreactiv = this._pointwiseConv.output, Up.runProgram({
          program: this.activationProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputPreactiv,
              name: 'x'
            }
          ],
          supportsTextureFragments: !0
        })),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.reshapeFrom2D(), 'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(2, 0, 1)))
      }
    }
  ]),
  e
}(Bp),
qh = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D A;\nuniform sampler2D B;\nuniform sampler2D C;\nuniform bool addC;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 A_size = textureSize(A, 0);\n  ivec2 B_size = textureSize(B, 0);\n  int out_x = int(float(B_size[0]) * outTex.x);\n  int out_y = int(float(A_size[1]) * outTex.y);\n  int commonDim = A_size[0];\n\n  float sum = 0.;\n  for (int i = 0; i < commonDim; ++i) {\n    float a = texelFetch(A, ivec2(i, out_y), 0).r;\n    float b = texelFetch(B, ivec2(out_x, i), 0).r;\n    sum += a * b;\n  }\n\n  if (addC) {\n    sum += texelFetch(C, ivec2(out_x, 0), 0).r;\n  }\n\n  outColor = vec4(sum);\n}\n',
Vh = th() ({
  args: [
    {
      blockIndices: - 1
    },
    'scalar',
    'scalar'
  ],
  body: function t(e, n, r) {
    for (var o = 0; o < r; o++) if ( - 1 === e[o]) {
      e[o] = n;
      break
    }
  }
}),
Hh = th() ({
  args: [
    {
      blockIndices: - 1
    },
    'array',
    'scalar'
  ],
  body: function t(e, n, r) {
    for (var o = 0; o < r; o++) if ( - 1 === e[o]) {
      e[o] = n;
      break
    }
  }
}),
Wh = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Xt(this, e),
    t = Kt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Conv2DTranspose';
    var r = n.filters,
    o = void 0 === r ? 1 : r,
    i = n.kernel_size,
    a = void 0 === i ? [
      3,
      3
    ] : i,
    s = n.strides,
    u = void 0 === s ? [
      1,
      1
    ] : s,
    c = n.padding,
    l = void 0 === c ? 'valid' : c,
    p = n.data_format,
    h = void 0 === p ? 'channels_last' : p,
    f = n.activation,
    d = void 0 === f ? 'linear' : f,
    m = n.use_bias,
    y = void 0 === m || m;
    return Array.isArray(a) ? t.kernelShape = [
      o
    ].concat(Wt(a))  : t.kernelShape = [
      o,
      a,
      a
    ],
    Array.isArray(u) ? t.strides = u : t.strides = [
      u,
      u
    ],
    'valid' === l || 'same' === l ? t.padding = l : t.throwError('Invalid padding.'),
    'channels_last' === h || 'channels_first' === h ? t.dataFormat = h : t.throwError('Only channels_last and channels_first data formats are allowed.'),
    t.activation = d,
    t.activationFunc = Es[d],
    t.useBias = y,
    t.params = t.useBias ? [
      'kernel',
      'bias'
    ] : [
      'kernel'
    ],
    t.description = ''.concat(t.kernelShape[0], ' ').concat(t.kernelShape.slice(1).join('x'), ' filters'),
    t.description += t.strides.some(function (t) {
      return t > 1
    }) ? ', '.concat(t.strides.join('x'), ' striding')  : '',
    t.description += 'valid' === t.padding ? ', no border padding' : ', pad to same borders',
    t.description += 'linear' !== t.activation ? ', '.concat(t.activation, ' activation')  : '',
    t.gpu && (t.matMulProgram = Up.compileProgram(qh), t.activationProgram = Up.compileProgram(js[t.activation])),
    t
  }
  return Qt(e, t),
  $t(e, [
    {
      key: 'setWeights',
      value: function t(n) {
        'channels_first' === this.dataFormat && (n[0].tensor = n[0].tensor.transpose(2, 3, 1, 0)),
        Jt(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'setWeights', this).call(this, n, !1),
        this._w2row(),
        this.gpu && (this.weights.kernel = this.wRowsMat, this.weights.kernel.createGLTexture({
          type: '2d',
          format: 'float'
        }), this.useBias && this.weights.bias.createGLTexture({
          type: '2d',
          format: 'float'
        }))
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_calcOutputShape',
      value: function t(e) {
        if (!this.outputShape || !this.outputPadding) {
          var n = e[0],
          r = e[1],
          o = Ht(this.kernelShape, 3),
          i = o[0],
          a = o[1],
          s = o[2],
          u = 'same' === this.padding ? n * this.strides[0] : n * this.strides[0] + Math.max(a - this.strides[0], 0),
          c = 'same' === this.padding ? r * this.strides[1] : r * this.strides[1] + Math.max(s - this.strides[1], 0),
          l = i,
          p = 'same' === this.padding ? Math.max(0, Math.floor((n - 1) * this.strides[0] + a - u))  : 0,
          h = 'same' === this.padding ? Math.max(0, Math.floor((r - 1) * this.strides[1] + s - c))  : 0,
          f = Math.floor(p / 2),
          d = p - f,
          m = Math.floor(h / 2),
          y = h - m;
          this.outputShape = [
            u,
            c,
            l
          ],
          this.outputPadding = [
            f,
            d,
            m,
            y
          ]
        }
      }
    },
    {
      key: '_im2col',
      value: function t(e) {
        var n = Ht(e.tensor.shape, 3),
        r = n[0],
        o = n[1],
        i = n[2];
        this.imColsMat || (this.imColsMat = new Jp([], [
          r * o,
          i
        ]));
        for (var a = new Jp([], [
          r * o
        ]), s = new Jp([], [
          r,
          o
        ]), u = 0; u < i; u++) Yp.a.assign(s.tensor, e.tensor.pick(null, null, u)),
        a.replaceTensorData(s.tensor.data),
        Yp.a.assign(this.imColsMat.tensor.pick(null, u), a.tensor);
        return this.imColsMat
      }
    },
    {
      key: '_w2row',
      value: function t() {
        var e = Ht(this.weights.kernel.tensor.shape, 4),
        n = e[0],
        r = e[1],
        o = e[2],
        i = e[3];
        this.wRowsMat = new Jp([], [
          i,
          n * r * o
        ]);
        for (var a = new Jp([], [
          n * r * o
        ]), s = new Jp([], [
          n,
          r,
          o
        ]), u = 0; u < i; u++) Yp.a.assign(s.tensor, this.weights.kernel.tensor.pick(null, null, null, u)),
        a.replaceTensorData(s.tensor.data),
        Yp.a.assign(this.wRowsMat.tensor.pick(u, null), a.tensor);
        return this.wRowsMat
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.inputShape = e.tensor.shape,
        this._calcOutputShape(this.inputShape),
        this._im2col(e);
        var n = e.tensor.shape[0],
        r = e.tensor.shape[1],
        o = Ht(this.kernelShape, 3),
        i = o[0],
        a = o[1],
        s = o[2],
        u = new Jp([], [
          n * r,
          a * s * i
        ]);
        Sh() (u.tensor, this.imColsMat.tensor, this.wRowsMat.tensor, 1, 1);
        var c = Ht(this.outputPadding, 4),
        l = c[0],
        p = c[1],
        h = c[2],
        f = c[3];
        this.output = new Jp([], this.outputShape);
        for (var d = new Jp([], [
          this.outputShape[0] + l + p,
          this.outputShape[1] + h + f,
          this.outputShape[2]
        ]), m = [
          a,
          s,
          i
        ], y = new Jp([], m), v = new Jp([], [
          a * s * i
        ]), g = 0, _ = 0; _ < n; _++) for (var b = 0; b < r; b++) {
          Yp.a.assign(v.tensor, u.tensor.pick(g, null)),
          y.replaceTensorData(v.tensor.data);
          var x = _ * this.strides[0],
          w = b * this.strides[1];
          Yp.a.addeq(d.tensor.hi(x + a, w + s, this.outputShape[2]).lo(x, w, 0), y.tensor),
          g += 1
        }
        if (Yp.a.assign(this.output.tensor, d.tensor.hi(this.outputShape[0] + l, this.outputShape[1] + h, this.outputShape[2]).lo(l, h, 0)), this.useBias) for (var S = 0; S < i; S++) Yp.a.addseq(this.output.tensor.pick(null, null, S), this.weights.bias.tensor.get(S));
        this.activationFunc(this.output),
        'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(2, 0, 1))
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        if (!this.indexMap) {
          var e = this.inputShape[0],
          n = this.inputShape[1],
          r = Ht(this.kernelShape, 3),
          o = r[0],
          i = r[1],
          a = r[2],
          s = Ht(this.outputPadding, 4),
          u = s[0],
          c = s[1],
          l = s[2],
          p = s[3],
          h = (i - this.strides[0] + 1) * (a - this.strides[1] + 1),
          f = [
            this.outputShape[0],
            this.outputShape[1],
            h
          ],
          d = [
            this.outputShape[0] + u + c,
            this.outputShape[1] + l + p,
            h
          ],
          m = new Jp([], f, {
            type: Int32Array
          }),
          y = new Jp([], f, {
            type: Int32Array
          }),
          v = new Jp([], d, {
            type: Int32Array
          }),
          g = new Jp([], d, {
            type: Int32Array
          });
          Yp.a.assigns(m.tensor, - 1),
          Yp.a.assigns(y.tensor, - 1),
          Yp.a.assigns(v.tensor, - 1),
          Yp.a.assigns(g.tensor, - 1);
          for (var _ = new Jp([], [
            i,
            a,
            o
          ], {
            type: Int32Array
          }), b = 0; b < i * a * o; b++) _.tensor.data[b] = b;
          for (var x = 0; x < e; x++) for (var w = 0; w < n; w++) {
            var S = x * n + w,
            T = x * this.strides[0],
            P = w * this.strides[1];
            Vh(v.tensor.hi(T + i, P + a, h).lo(T, P, 0), S, h),
            Hh(g.tensor.hi(T + i, P + a, h).lo(T, P, 0), _.tensor.pick(null, null, 0), h)
          }
          Yp.a.assign(m.tensor, v.tensor.hi(this.outputShape[0] + u, this.outputShape[1] + l, h).lo(u, l, 0)),
          Yp.a.assign(y.tensor, g.tensor.hi(this.outputShape[0] + u, this.outputShape[1] + l, h).lo(u, l, 0));
          var C = [
            this.outputShape[0] * this.outputShape[1],
            h
          ];
          this.indexMap = new Jp([], C, {
            type: Int32Array
          });
          for (var k = new Jp([], [
            h
          ], {
            type: Int32Array
          }), O = 0; O < this.outputShape[0]; O++) for (var E = 0; E < this.outputShape[1]; E++) {
            for (var j = 0; j < h; j++) {
              var A = m.tensor.get(O, E, j),
              F = y.tensor.get(O, E, j);
              - 1 !== A && - 1 !== F ? k.tensor.set(j, A * this.weights.kernel.glTextureShape[1] + F)  : k.tensor.set(j, - 1)
            }
            Yp.a.assign(this.indexMap.tensor.pick(O * this.outputShape[1] + E, null), k.tensor)
          }
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.is2DReshaped || e.is2DSquareReshaped ? (this.inputShape = e.originalShape, this._calcOutputShape(this.inputShape))  : (this.inputShape = e.tensor.shape, this._calcOutputShape(this.inputShape), this._im2col(e), this.imColsMat.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }));
        var n = e.is2DReshaped || e.is2DSquareReshaped ? e : this.imColsMat;
        if (!this.matMulResult) {
          var r = [
            n.glTextureShape[0],
            this.weights.kernel.glTextureShape[1]
          ];
          this.matMulResult = new Jp([], r),
          this.matMulResult.createGLTexture({
            type: '2d',
            format: 'float',
            supportsTextureFragments: !0
          })
        }
        if ('linear' !== this.activation && !this.outputPreactiv) {
          var o = [
            this.outputShape[0] * this.outputShape[1],
            this.outputShape[2]
          ];
          this.outputPreactiv = new Jp([], o),
          this.outputPreactiv.createGLTexture({
            type: '2d',
            format: 'float',
            supportsTextureFragments: !0
          }),
          this.outputPreactiv.is2DReshaped = !0,
          this.outputPreactiv.originalShape = this.outputShape,
          this.outputPreactiv.indicesForReshaped = h(this.outputShape, !1, - 1)
        }
        if (!this.output) {
          var i = [
            this.outputShape[0] * this.outputShape[1],
            this.outputShape[2]
          ];
          this.output = new Jp([], i),
          this.output.createGLTexture({
            type: '2d',
            format: 'float',
            supportsTextureFragments: !0
          }),
          this.output.is2DReshaped = !0,
          this.output.originalShape = this.outputShape,
          this.output.indicesForReshaped = h(this.outputShape, !1, - 1)
        }
        Up.runProgram({
          program: this.matMulProgram,
          output: this.matMulResult,
          inputs: [
            {
              input: n,
              name: 'A'
            },
            {
              input: this.weights.kernel,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ],
          supportsTextureFragments: !0
        }),
        this._createIndexMap();
        var a = Boolean(this.matMulResult.glTextureFragments);
        if (a && this.matMulResult.convert2DRowFragmentedGLTextureToColStack(), !this.convTransposeProgram) {
          var s = yt('conv2dTranspose', this.output.glTextureFragmentShape ? this.output.glTextureFragmentShape : this.output.glTextureShape, this.matMulResult.glTextureFragmentShape ? this.matMulResult.glTextureFragmentShape : this.matMulResult.glTextureShape, this.indexMap.glTextureFragmentShape ? this.indexMap.glTextureFragmentShape : this.indexMap.glTextureShape, this.useBias, a);
          this.convTransposeProgram = Up.compileProgram(s)
        }
        Up.runProgram({
          program: this.convTransposeProgram,
          output: 'linear' === this.activation ? this.output : this.outputPreactiv,
          inputs: [
            {
              input: this.matMulResult,
              name: 'matMulResult'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ].concat(Wt(this.useBias ? [
            {
              input: this.weights.bias,
              name: 'bias'
            }
          ] : [
          ])),
          supportsTextureFragments: !0
        }),
        a && this.matMulResult.removeGLTextureFragmentsAsColStack(),
        'linear' !== this.activation && Up.runProgram({
          program: this.activationProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputPreactiv,
              name: 'x'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.reshapeFrom2D(), 'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(2, 0, 1)))
      }
    }
  ]),
  e
}(Bp),
Xh = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
Yh = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 inputSize = textureSize(x, 0);\n  ivec2 outputSize = textureSize(indexMap, 0);\n  int out_x = int(float(outputSize[0]) * outTex.x);\n  int out_y = int(float(outputSize[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    int fragmentIndex = int(floor(float(rowIndex) / float(inputSize[1])));\n    rowIndex = int(mod(float(rowIndex), float(inputSize[1])));\n    colIndex = fragmentIndex * inputCols + colIndex;\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
$h = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D A;\nuniform sampler2D B;\nuniform sampler2D C;\nuniform bool addC;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 A_size = textureSize(A, 0);\n  ivec2 B_size = textureSize(B, 0);\n  int out_x = int(float(B_size[0]) * outTex.x);\n  int out_y = int(float(A_size[1]) * outTex.y);\n  int commonDim = A_size[0];\n\n  float sum = 0.;\n  for (int i = 0; i < commonDim; ++i) {\n    float a = texelFetch(A, ivec2(i, out_y), 0).r;\n    float b = texelFetch(B, ivec2(out_x, i), 0).r;\n    sum += a * b;\n  }\n\n  if (addC) {\n    sum += texelFetch(C, ivec2(out_x, 0), 0).r;\n  }\n\n  outColor = vec4(sum);\n}\n',
Kh = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    re(this, e),
    t = ae(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Conv3D';
    var r = n.filters,
    o = void 0 === r ? 1 : r,
    i = n.kernel_size,
    a = void 0 === i ? [
      1,
      1,
      1
    ] : i,
    s = n.strides,
    u = void 0 === s ? [
      1,
      1,
      1
    ] : s,
    c = n.padding,
    l = void 0 === c ? 'valid' : c,
    p = n.data_format,
    h = void 0 === p ? 'channels_last' : p,
    f = n.dilation_rate,
    d = void 0 === f ? [
      1,
      1,
      1
    ] : f,
    m = n.activation,
    y = void 0 === m ? 'linear' : m,
    v = n.use_bias,
    g = void 0 === v || v;
    return Array.isArray(a) ? t.kernelShape = [
      o
    ].concat(ne(a))  : t.kernelShape = [
      o,
      a,
      a,
      a
    ],
    Array.isArray(u) ? t.strides = u : t.strides = [
      u,
      u,
      u
    ],
    'valid' === l || 'same' === l ? t.padding = l : t.throwError('Invalid padding.'),
    'channels_last' === h || 'channels_first' === h ? t.dataFormat = h : t.throwError('Only channels_last and channels_first data formats are allowed.'),
    Array.isArray(d) ? t.dilationRate = d : t.dilationRate = [
      d,
      d,
      d
    ],
    1 === t.dilationRate[0] && 1 === t.dilationRate[1] && 1 === t.dilationRate[2] || 1 === t.strides[0] && 1 === t.strides[1] && 1 === t.strides[2] || t.throwError('Incompatible combination of dilation_rate with strides.'),
    t.activation = y,
    t.activationFunc = Es[y],
    t.useBias = g,
    t.params = t.useBias ? [
      'kernel',
      'bias'
    ] : [
      'kernel'
    ],
    t.description = ''.concat(t.kernelShape[0], ' ').concat(t.kernelShape.slice(1).join('x'), ' filters'),
    t.description += t.strides.some(function (t) {
      return t > 1
    }) ? ', '.concat(t.strides.join('x'), ' striding')  : '',
    t.description += 'valid' === t.padding ? ', no border padding' : ', pad to same borders',
    t.description += t.dilationRate.some(function (t) {
      return t > 1
    }) ? ', '.concat(t.dilationRate.join('x'), ' dilation')  : '',
    t.description += 'linear' !== t.activation ? ', '.concat(t.activation, ' activation')  : '',
    t.gpu && (t.mapInputProgram = Up.compileProgram(Xh), t.mapInputFragmentsProgram = Up.compileProgram(Yh), t.matMulProgram = Up.compileProgram($h), t.activationProgram = Up.compileProgram(js[t.activation])),
    t
  }
  return ue(e, t),
  ie(e, [
    {
      key: 'setWeights',
      value: function t(n) {
        'channels_first' === this.dataFormat && (n[0].tensor = n[0].tensor.transpose(2, 3, 4, 1, 0)),
        se(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'setWeights', this).call(this, n, !1),
        this._w2row(),
        this.gpu && (this.weights.kernel = this.wRowsMat, this.weights.kernel.createGLTexture({
          type: '2d',
          format: 'float'
        }), this.useBias && this.weights.bias.createGLTexture({
          type: '2d',
          format: 'float'
        }))
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_calcOutputShape',
      value: function t(e) {
        if (!this.outputShape || !this.inputPadding) {
          var n = e[0],
          r = e[1],
          o = e[2],
          i = ee(this.kernelShape, 4),
          a = i[0],
          s = i[1],
          u = i[2],
          c = i[3],
          l = s + (s - 1) * (this.dilationRate[0] - 1),
          p = u + (u - 1) * (this.dilationRate[1] - 1),
          h = c + (c - 1) * (this.dilationRate[2] - 1),
          f = 'same' === this.padding ? Math.floor((n + this.strides[0] - 1) / this.strides[0])  : Math.floor((n - l + this.strides[0]) / this.strides[0]),
          d = 'same' === this.padding ? Math.floor((r + this.strides[1] - 1) / this.strides[1])  : Math.floor((r - p + this.strides[1]) / this.strides[1]),
          m = 'same' === this.padding ? Math.floor((o + this.strides[2] - 1) / this.strides[2])  : Math.floor((o - h + this.strides[2]) / this.strides[2]),
          y = a,
          v = 'same' === this.padding ? Math.max(0, Math.floor((f - 1) * this.strides[0] + l - n))  : 0,
          g = 'same' === this.padding ? Math.max(0, Math.floor((d - 1) * this.strides[1] + p - r))  : 0,
          _ = 'same' === this.padding ? Math.max(0, Math.floor((m - 1) * this.strides[2] + h - o))  : 0,
          b = Math.floor(v / 2),
          x = v - b,
          w = Math.floor(g / 2),
          S = g - w,
          T = Math.floor(_ / 2),
          P = _ - T;
          this.outputShape = [
            f,
            d,
            m,
            y
          ],
          this.inputPadding = [
            b,
            x,
            w,
            S,
            T,
            P
          ]
        }
      }
    },
    {
      key: '_padInput',
      value: function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ('same' === this.padding) {
          var r = ee(e.tensor.shape, 4),
          o = r[0],
          i = r[1],
          a = r[2],
          s = r[3],
          u = ee(this.inputPadding, 6),
          c = u[0],
          l = u[1],
          p = u[2],
          h = u[3],
          f = u[4],
          d = u[5],
          m = o + c + l,
          y = i + p + h,
          v = a + f + d,
          g = new Jp([], [
            m,
            y,
            v,
            s
          ]);
          return 0 !== n && Yp.a.assigns(g.tensor, n),
          Yp.a.assign(g.tensor.hi(o + c, i + p, a + f, s).lo(c, p, f, 0), e.tensor),
          g
        }
        return e
      }
    },
    {
      key: '_vol2col',
      value: function t(e) {
        var n = ee(e.tensor.shape, 4),
        r = n[0],
        o = n[1],
        i = n[2],
        a = n[3],
        s = this.kernelShape[1],
        u = this.kernelShape[2],
        c = this.kernelShape[3],
        l = this.outputShape[0],
        p = this.outputShape[1],
        h = this.outputShape[2],
        f = l * p * h,
        d = s * u * c * a,
        m = s + (s - 1) * (this.dilationRate[0] - 1),
        y = u + (u - 1) * (this.dilationRate[1] - 1),
        v = c + (c - 1) * (this.dilationRate[2] - 1);
        if (this.volColsMat || (this.volColsMat = new Jp([], [
          f,
          d
        ])), 1 === m && 1 === y && 1 === v && 1 === this.strides[0] && 1 === this.strides[1] && 1 === this.strides[2]) return this.volColsMat.replaceTensorData(e.tensor.data),
        this.volColsMat;
        for (var g = new Jp([], [
          s,
          u,
          c,
          a
        ]), _ = 0, b = 0, x = r - m; b <= x; b += this.strides[0]) for (var w = 0, S = o - y; w <= S; w += this.strides[1]) for (var T = 0, P = i - v; T <= P; T += this.strides[2]) Yp.a.assign(g.tensor, e.tensor.hi(b + m, w + y, T + v, a).lo(b, w, T, 0).step(this.dilationRate[0], this.dilationRate[1], this.dilationRate[2], 1)),
        this.volColsMat.tensor.data.set(g.tensor.data, _),
        _ += d;
        return this.volColsMat
      }
    },
    {
      key: '_w2row',
      value: function t() {
        var e = this.weights.kernel.tensor.shape[3],
        n = ee(this.kernelShape, 4),
        r = n[0],
        o = n[1],
        i = n[2],
        a = n[3],
        s = o * i * a * e;
        this.wRowsMat = new Jp([], [
          s,
          r
        ]);
        for (var u = new Jp([], [
          o,
          i,
          a,
          e
        ]), c = new Jp([], [
          s
        ]), l = 0; l < r; l++) Yp.a.assign(u.tensor, this.weights.kernel.tensor.pick(null, null, null, null, l)),
        c.replaceTensorData(u.tensor.data),
        Yp.a.assign(this.wRowsMat.tensor.pick(null, l), c.tensor);
        return this.wRowsMat
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.inputShape = e.tensor.shape,
        this._calcOutputShape(this.inputShape),
        e = this._padInput(e),
        this._vol2col(e);
        var n = this.kernelShape[0],
        r = this.outputShape[0],
        o = this.outputShape[1],
        i = this.outputShape[2],
        a = r * o * i,
        s = new Jp([], [
          a,
          n
        ]);
        if (this.useBias) for (var u = 0; u < n; u++) Yp.a.assigns(s.tensor.pick(null, u), this.weights.bias.tensor.get(u));
        Sh() (s.tensor, this.volColsMat.tensor, this.wRowsMat.tensor, 1, 1),
        this.output = new Jp([], this.outputShape);
        for (var c = new Jp([], [
          r * o * i
        ]), l = new Jp([], [
          r,
          o,
          i
        ]), p = 0; p < n; p++) Yp.a.assign(c.tensor, s.tensor.pick(null, p)),
        l.replaceTensorData(c.tensor.data),
        Yp.a.assign(this.output.tensor.pick(null, null, null, p), l.tensor);
        this.activationFunc(this.output),
        'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(3, 0, 1, 2))
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e) {
        if (!this.indexMap) {
          var n = ee(this.inputShape, 4),
          r = n[0],
          o = n[1],
          i = n[2],
          a = n[3],
          s = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          if ('same' === this.padding) {
            var u = ee(this.inputPadding, 6),
            c = u[0],
            l = u[1],
            p = u[2],
            h = u[3],
            f = u[4],
            d = u[5];
            r = r + c + l,
            o = o + p + h,
            i = i + f + d;
            var m = - 1;
            s = this._padInput(s, - 1)
          }
          var y = this.kernelShape[1],
          v = this.kernelShape[2],
          g = this.kernelShape[3],
          _ = this.outputShape[0],
          b = this.outputShape[1],
          x = this.outputShape[2],
          w = _ * b * x,
          S = y * v * g * a,
          T = y + (y - 1) * (this.dilationRate[0] - 1),
          P = v + (v - 1) * (this.dilationRate[1] - 1),
          C = g + (g - 1) * (this.dilationRate[2] - 1);
          this.indexMap = new Jp([], [
            w,
            S
          ], {
            type: Int32Array
          });
          for (var k = new Jp([], [
            y,
            v,
            g,
            a
          ]), O = 0, E = 0, j = r - T; E <= j; E += this.strides[0]) for (var A = 0, F = o - P; A <= F; A += this.strides[1]) for (var M = 0, R = i - C; M <= R; M += this.strides[2]) Yp.a.assign(k.tensor, s.tensor.hi(E + T, A + P, M + C, a).lo(E, A, M, 0).step(this.dilationRate[0], this.dilationRate[1], this.dilationRate[2], 1)),
          this.indexMap.tensor.data.set(k.tensor.data, O),
          O += S;
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        var n;
        if (e.is2DReshaped || e.is2DSquareReshaped ? (this.inputShape = e.originalShape, this._calcOutputShape(this.inputShape), this._createIndexMap(e.indicesForReshaped), n = [
          this.indexMap.glTextureShape[0],
          this.weights.kernel.glTextureShape[1]
        ])  : (this.inputShape = e.tensor.shape, this._calcOutputShape(this.inputShape), e = this._padInput(e), this._vol2col(e), this.volColsMat.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), n = [
          this.volColsMat.glTextureShape[0],
          this.weights.kernel.glTextureShape[1]
        ]), 'linear' === this.activation || this.outputPreactiv || (this.outputPreactiv = new Jp([], n), this.outputPreactiv.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), this.outputPreactiv.is2DReshaped = !0, this.outputPreactiv.originalShape = this.outputShape, this.outputPreactiv.indicesForReshaped = h(this.outputShape, !1, - 1)), this.output || (this.output = new Jp([], n), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), this.output.is2DReshaped = !0, this.output.originalShape = this.outputShape, this.output.indicesForReshaped = h(this.outputShape, !1, - 1)), e.is2DReshaped || e.is2DSquareReshaped) {
          var r = Boolean(e.glTextureFragments);
          if (r && e.convert2DRowFragmentedGLTextureToColStack(), !this.convProgram) {
            var o = yt('conv2d', this.output.glTextureFragmentShape ? this.output.glTextureFragmentShape : this.output.glTextureShape, e.glTextureFragmentShape ? e.glTextureFragmentShape : e.glTextureShape, this.indexMap.glTextureFragmentShape ? this.indexMap.glTextureFragmentShape : this.indexMap.glTextureShape, this.useBias, r);
            this.convProgram = Up.compileProgram(o)
          }
          Up.runProgram({
            program: this.convProgram,
            output: 'linear' === this.activation ? this.output : this.outputPreactiv,
            inputs: [
              {
                input: e,
                name: 'x'
              },
              {
                input: this.indexMap,
                name: 'indexMap'
              },
              {
                input: this.weights.kernel,
                name: 'kernel'
              }
            ].concat(ne(this.useBias ? [
              {
                input: this.weights.bias,
                name: 'bias'
              }
            ] : [
            ])),
            supportsTextureFragments: !0
          }),
          r && e.removeGLTextureFragmentsAsColStack()
        } else {
          var i = [
            {
              input: this.volColsMat,
              name: 'A'
            },
            {
              input: this.weights.kernel,
              name: 'B'
            }
          ];
          this.useBias && i.push({
            input: this.weights.bias,
            name: 'C'
          }),
          Up.runProgram({
            program: this.matMulProgram,
            output: 'linear' === this.activation ? this.output : this.outputPreactiv,
            inputs: i,
            uniforms: [
              {
                value: this.useBias ? 1 : 0,
                type: 'bool',
                name: 'addC'
              }
            ],
            supportsTextureFragments: !0
          })
        }
        'linear' !== this.activation && Up.runProgram({
          program: this.activationProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputPreactiv,
              name: 'x'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.reshapeFrom2D(), 'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(3, 0, 1, 2)))
      }
    }
  ]),
  e
}(Bp),
Jh = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
Qh = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    le(this, e),
    t = fe(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Cropping1D';
    var r = n.cropping,
    o = void 0 === r ? [
      0,
      0
    ] : r;
    return Array.isArray(o) ? t.cropping = o : t.cropping = [
      o,
      o
    ],
    t.description = ''.concat(JSON.stringify(t.cropping)),
    t.gpu && (t.mapInputProgram = Up.compileProgram(Jh)),
    t
  }
  return de(e, t),
  he(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] - this.cropping[0] - this.cropping[1],
          this.inputShape[1]
        ],
        this.output = new Jp([], this.outputShape),
        Yp.a.assign(this.output.tensor, e.tensor.hi(this.inputShape[0] - this.cropping[1], this.inputShape[2]).lo(this.cropping[0], 0))
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        var e,
        n;
        if (!this.indexMap) {
          for (var r = new Jp([], this.inputShape, {
            type: Int32Array
          }), o = new Jp([], this.inputShape, {
            type: Int32Array
          }), i = new Jp([], this.inputShape, {
            type: Int32Array
          }), a = 0; a < this.inputShape[0]; a++) Yp.a.assigns(o.tensor.pick(a, null), a);
          for (var s = 0; s < this.inputShape[1]; s++) Yp.a.assigns(i.tensor.pick(null, s), s);
          Yp.a.muls(r.tensor, o.tensor, this.inputShape[1]),
          Yp.a.addeq(r.tensor, i.tensor),
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          var u = [
            this.cropping[0],
            0
          ],
          c = [
            this.inputShape[0] - this.cropping[1],
            this.inputShape[2]
          ];
          Yp.a.assign(this.indexMap.tensor, (e = (n = r.tensor).hi.apply(n, c)).lo.apply(e, u)),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        }),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] - this.cropping[0] - this.cropping[1],
          this.inputShape[1]
        ],
        this._createIndexMap(),
        this.output || (this.output = new Jp([], this.outputShape), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
Zh = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
tf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    ye(this, e),
    t = _e(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Cropping2D';
    var r = n.cropping,
    o = void 0 === r ? [
      [0,
      0],
      [
        0,
        0
      ]
    ] : r,
    i = n.data_format,
    a = void 0 === i ? 'channels_last' : i;
    return Array.isArray(o) ? Array.isArray(o[0]) ? t.cropping = o : t.cropping = [
      [o[0],
      o[0]],
      [
        o[1],
        o[1]
      ]
    ] : t.cropping = [
      [o,
      o],
      [
        o,
        o
      ]
    ],
    t.dataFormat = a,
    t.description = ''.concat(JSON.stringify(t.cropping)),
    t.gpu && (t.mapInputProgram = Up.compileProgram(Zh)),
    t
  }
  return be(e, t),
  ge(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 0)),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] - this.cropping[0][0] - this.cropping[0][1],
          this.inputShape[1] - this.cropping[1][0] - this.cropping[1][1],
          this.inputShape[2]
        ],
        this.output = new Jp([], this.outputShape),
        Yp.a.assign(this.output.tensor, e.tensor.hi(this.inputShape[0] - this.cropping[0][1], this.inputShape[1] - this.cropping[1][1], this.inputShape[2]).lo(this.cropping[0][0], this.cropping[1][0], 0)),
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(2, 0, 1), this.output.tensor = this.output.tensor.transpose(2, 0, 1))
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e, n) {
        var r,
        o;
        if (!this.indexMap) {
          var i = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          var a = 'channels_first' === this.dataFormat ? [
            0,
            this.cropping[0][0],
            this.cropping[1][0]
          ] : [
            this.cropping[0][0],
            this.cropping[1][0],
            0
          ],
          s = 'channels_first' === this.dataFormat ? [
            this.inputShape[0],
            this.inputShape[1] - this.cropping[0][1],
            this.inputShape[2] - this.cropping[1][1]
          ] : [
            this.inputShape[0] - this.cropping[0][1],
            this.inputShape[1] - this.cropping[1][1],
            this.inputShape[2]
          ];
          Yp.a.assign(this.indexMap.tensor, (r = (o = i.tensor).hi.apply(o, s)).lo.apply(r, a)),
          n ? this.indexMap.reshapeTo2D()  : this.indexMap.reshapeTo2DSquare(),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || (e.reshapeTo2DSquare(), e.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.inputShape = e.originalShape,
        this.outputShape = 'channels_first' === this.dataFormat ? [
          this.inputShape[0],
          this.inputShape[1] - this.cropping[0][0] - this.cropping[0][1],
          this.inputShape[2] - this.cropping[1][0] - this.cropping[1][1]
        ] : [
          this.inputShape[0] - this.cropping[0][0] - this.cropping[0][1],
          this.inputShape[1] - this.cropping[1][0] - this.cropping[1][1],
          this.inputShape[2]
        ],
        this._createIndexMap(e.indicesForReshaped, e.is2DReshaped),
        this.output || (this.output = new Jp([], this.outputShape), e.is2DReshaped ? this.output.reshapeTo2D()  : this.output.reshapeTo2DSquare(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
ef = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
nf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    we(this, e),
    t = Pe(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Cropping3D';
    var r = n.cropping,
    o = void 0 === r ? [
      [0,
      0],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ] : r,
    i = n.data_format,
    a = void 0 === i ? 'channels_last' : i;
    return Array.isArray(o) ? Array.isArray(o[0]) ? t.cropping = o : t.cropping = [
      [o[0],
      o[0]],
      [
        o[1],
        o[1]
      ],
      [
        o[2],
        o[2]
      ]
    ] : t.cropping = [
      [o,
      o],
      [
        o,
        o
      ],
      [
        o,
        o
      ]
    ],
    t.dataFormat = a,
    t.description = ''.concat(JSON.stringify(t.cropping)),
    t.gpu && (t.mapInputProgram = Up.compileProgram(ef)),
    t
  }
  return Ce(e, t),
  Te(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 3, 0)),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] - this.cropping[0][0] - this.cropping[0][1],
          this.inputShape[1] - this.cropping[1][0] - this.cropping[1][1],
          this.inputShape[2] - this.cropping[2][0] - this.cropping[2][1],
          this.inputShape[3]
        ],
        this.output = new Jp([], this.outputShape),
        Yp.a.assign(this.output.tensor, e.tensor.hi(this.inputShape[0] - this.cropping[0][1], this.inputShape[1] - this.cropping[1][1], this.inputShape[2] - this.cropping[2][1], this.inputShape[3]).lo(this.cropping[0][0], this.cropping[1][0], this.cropping[2][0], 0)),
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(3, 0, 1, 2), this.output.tensor = this.output.tensor.transpose(3, 0, 1, 2))
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e, n) {
        var r,
        o;
        if (!this.indexMap) {
          var i = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          var a = 'channels_first' === this.dataFormat ? [
            0,
            this.cropping[0][0],
            this.cropping[1][0],
            this.cropping[2][0]
          ] : [
            this.cropping[0][0],
            this.cropping[1][0],
            this.cropping[2][0],
            0
          ],
          s = 'channels_first' === this.dataFormat ? [
            this.inputShape[0],
            this.inputShape[1] - this.cropping[0][1],
            this.inputShape[2] - this.cropping[1][1],
            this.inputShape[3] - this.cropping[2][1]
          ] : [
            this.inputShape[0] - this.cropping[0][1],
            this.inputShape[1] - this.cropping[1][1],
            this.inputShape[2] - this.cropping[2][1],
            this.inputShape[3]
          ];
          Yp.a.assign(this.indexMap.tensor, (r = (o = i.tensor).hi.apply(o, s)).lo.apply(r, a)),
          n ? this.indexMap.reshapeTo2D()  : this.indexMap.reshapeTo2DSquare(),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || (e.reshapeTo2DSquare(), e.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.inputShape = e.originalShape,
        this.outputShape = 'channels_first' === this.dataFormat ? [
          this.inputShape[0],
          this.inputShape[1] - this.cropping[0][0] - this.cropping[0][1],
          this.inputShape[2] - this.cropping[1][0] - this.cropping[1][1],
          this.inputShape[3] - this.cropping[2][0] - this.cropping[2][1]
        ] : [
          this.inputShape[0] - this.cropping[0][0] - this.cropping[0][1],
          this.inputShape[1] - this.cropping[1][0] - this.cropping[1][1],
          this.inputShape[2] - this.cropping[2][0] - this.cropping[2][1],
          this.inputShape[3]
        ],
        this._createIndexMap(e.indicesForReshaped, e.is2DReshaped),
        this.output || (this.output = new Jp([], this.outputShape), e.is2DReshaped ? this.output.reshapeTo2D()  : this.output.reshapeTo2DSquare(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
rf = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
of = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Oe(this, e),
    t = Ae(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'UpSampling1D';
    var r = n.size,
    o = void 0 === r ? 2 : r;
    return t.size = o,
    t.description = 'size '.concat(o),
    t.gpu && (t.mapInputProgram = Up.compileProgram(rf)),
    t
  }
  return Fe(e, t),
  je(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] * this.size,
          this.inputShape[1]
        ],
        this.output = new Jp([], this.outputShape);
        for (var n = 0; n < this.size; n++) Yp.a.assign(this.output.tensor.lo(n, 0).step(this.size, 1), e.tensor)
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        if (!this.indexMap) {
          for (var e = new Jp([], this.inputShape, {
            type: Int32Array
          }), n = new Jp([], this.inputShape, {
            type: Int32Array
          }), r = new Jp([], this.inputShape, {
            type: Int32Array
          }), o = 0; o < this.inputShape[0]; o++) Yp.a.assigns(n.tensor.pick(o, null), o);
          for (var i = 0; i < this.inputShape[1]; i++) Yp.a.assigns(r.tensor.pick(null, i), i);
          Yp.a.muls(e.tensor, n.tensor, this.inputShape[1]),
          Yp.a.addeq(e.tensor, r.tensor),
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          for (var a = 0; a < this.size; a++) Yp.a.assign(this.indexMap.tensor.lo(a, 0).step(this.size, 1), e.tensor);
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        }),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] * this.size,
          this.inputShape[1]
        ],
        this._createIndexMap(),
        this.output || (this.output = new Jp([], this.outputShape), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
af = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
sf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Re(this, e),
    t = Le(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'UpSampling2D';
    var r = n.size,
    o = void 0 === r ? [
      2,
      2
    ] : r,
    i = n.data_format,
    a = void 0 === i ? 'channels_last' : i;
    return Array.isArray(o) ? t.size = o : t.size = [
      o,
      o
    ],
    t.dataFormat = a,
    t.description = 'size '.concat(t.size.join('x')),
    t.gpu && (t.mapInputProgram = Up.compileProgram(af)),
    t
  }
  return ze(e, t),
  Ie(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 0)),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] * this.size[0],
          this.inputShape[1] * this.size[1],
          this.inputShape[2]
        ],
        this.output = new Jp([], this.outputShape);
        for (var n = 0; n < this.size[0]; n++) for (var r = 0; r < this.size[1]; r++) Yp.a.assign(this.output.tensor.lo(n, r, 0).step(this.size[0], this.size[1], 1), e.tensor);
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(2, 0, 1), this.output.tensor = this.output.tensor.transpose(2, 0, 1))
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e, n) {
        if (!this.indexMap) {
          var r = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          for (var o = 0; o < this.size[0]; o++) for (var i = 0; i < this.size[1]; i++) {
            var a,
            s,
            u = 'channels_first' === this.dataFormat ? [
              0,
              o,
              i
            ] : [
              o,
              i,
              0
            ],
            c = 'channels_first' === this.dataFormat ? [
              1,
              this.size[0],
              this.size[1]
            ] : [
              this.size[0],
              this.size[1],
              1
            ];
            Yp.a.assign((a = (s = this.indexMap.tensor).lo.apply(s, u)).step.apply(a, c), r.tensor)
          }
          n ? this.indexMap.reshapeTo2D()  : this.indexMap.reshapeTo2DSquare(),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || (e.reshapeTo2DSquare(), e.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.inputShape = e.originalShape,
        this.outputShape = 'channels_first' === this.dataFormat ? [
          this.inputShape[0],
          this.inputShape[1] * this.size[0],
          this.inputShape[2] * this.size[1]
        ] : [
          this.inputShape[0] * this.size[0],
          this.inputShape[1] * this.size[1],
          this.inputShape[2]
        ],
        this._createIndexMap(e.indicesForReshaped, e.is2DReshaped),
        this.output || (this.output = new Jp([], this.outputShape), e.is2DReshaped ? this.output.reshapeTo2D()  : this.output.reshapeTo2DSquare(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
uf = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
cf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Ge(this, e),
    t = qe(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'UpSampling3D';
    var r = n.size,
    o = void 0 === r ? [
      2,
      2,
      2
    ] : r,
    i = n.data_format,
    a = void 0 === i ? 'channels_last' : i;
    return Array.isArray(o) ? t.size = o : t.size = [
      o,
      o,
      o
    ],
    t.dataFormat = a,
    t.description = 'size '.concat(t.size.join('x')),
    t.gpu && (t.mapInputProgram = Up.compileProgram(uf)),
    t
  }
  return Ve(e, t),
  Be(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 3, 0)),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] * this.size[0],
          this.inputShape[1] * this.size[1],
          this.inputShape[2] * this.size[2],
          this.inputShape[3]
        ],
        this.output = new Jp([], this.outputShape);
        for (var n = 0; n < this.size[0]; n++) for (var r = 0; r < this.size[1]; r++) for (var o = 0; o < this.size[2]; o++) Yp.a.assign(this.output.tensor.lo(n, r, o, 0).step(this.size[0], this.size[1], this.size[2], 1), e.tensor);
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(3, 0, 1, 2), this.output.tensor = this.output.tensor.transpose(3, 0, 1, 2))
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e, n) {
        if (!this.indexMap) {
          var r = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          for (var o = 0; o < this.size[0]; o++) for (var i = 0; i < this.size[1]; i++) for (var a = 0; a < this.size[2]; a++) {
            var s,
            u,
            c = 'channels_first' === this.dataFormat ? [
              0,
              o,
              i,
              a
            ] : [
              o,
              i,
              a,
              0
            ],
            l = 'channels_first' === this.dataFormat ? [
              1,
              this.size[0],
              this.size[1],
              this.size[2]
            ] : [
              this.size[0],
              this.size[1],
              this.size[2],
              1
            ];
            Yp.a.assign((s = (u = this.indexMap.tensor).lo.apply(u, c)).step.apply(s, l), r.tensor)
          }
          n ? this.indexMap.reshapeTo2D()  : this.indexMap.reshapeTo2DSquare(),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || (e.reshapeTo2DSquare(), e.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.inputShape = e.originalShape,
        this.outputShape = 'channels_first' === this.dataFormat ? [
          this.inputShape[0],
          this.inputShape[1] * this.size[0],
          this.inputShape[2] * this.size[1],
          this.inputShape[3] * this.size[2]
        ] : [
          this.inputShape[0] * this.size[0],
          this.inputShape[1] * this.size[1],
          this.inputShape[2] * this.size[2],
          this.inputShape[3]
        ],
        this._createIndexMap(e.indicesForReshaped, e.is2DReshaped),
        this.output || (this.output = new Jp([], this.outputShape), e.is2DReshaped ? this.output.reshapeTo2D()  : this.output.reshapeTo2DSquare(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
lf = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
pf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    We(this, e),
    t = $e(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'ZeroPadding1D';
    var r = n.padding,
    o = void 0 === r ? [
      1,
      1
    ] : r;
    return Array.isArray(o) ? t.padding = o : t.padding = [
      o,
      o
    ],
    t.description = ''.concat(JSON.stringify(t.padding)),
    t.gpu && (t.mapInputProgram = Up.compileProgram(lf)),
    t
  }
  return Ke(e, t),
  Ye(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] + this.padding[0] + this.padding[1],
          this.inputShape[1]
        ],
        this.output = new Jp([], this.outputShape),
        Yp.a.assign(this.output.tensor.hi(this.inputShape[0] + this.padding[0], this.inputShape[1]).lo(this.padding[0], 0), e.tensor)
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        var e,
        n;
        if (!this.indexMap) {
          for (var r = new Jp([], this.inputShape, {
            type: Int32Array
          }), o = new Jp([], this.inputShape, {
            type: Int32Array
          }), i = new Jp([], this.inputShape, {
            type: Int32Array
          }), a = 0; a < this.inputShape[0]; a++) Yp.a.assigns(o.tensor.pick(a, null), a);
          for (var s = 0; s < this.inputShape[1]; s++) Yp.a.assigns(i.tensor.pick(null, s), s);
          Yp.a.muls(r.tensor, o.tensor, this.inputShape[1]),
          Yp.a.addeq(r.tensor, i.tensor),
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          var u = [
            this.padding[0],
            0
          ],
          c = [
            this.inputShape[0] + this.padding[0],
            this.inputShape[1]
          ];
          Yp.a.assigns(this.indexMap.tensor, - 1),
          Yp.a.assign((e = (n = this.indexMap.tensor).hi.apply(n, c)).lo.apply(e, u), r.tensor),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        }),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] + this.padding[0] + this.padding[1],
          this.inputShape[1]
        ],
        this._createIndexMap(),
        this.output || (this.output = new Jp([], this.outputShape), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
hf = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
ff = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Qe(this, e),
    t = en(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'ZeroPadding2D';
    var r = n.padding,
    o = void 0 === r ? [
      [1,
      1],
      [
        1,
        1
      ]
    ] : r,
    i = n.data_format,
    a = void 0 === i ? 'channels_last' : i;
    return Array.isArray(o) ? Array.isArray(o[0]) ? t.padding = o : t.padding = [
      [o[0],
      o[0]],
      [
        o[1],
        o[1]
      ]
    ] : t.padding = [
      [o,
      o],
      [
        o,
        o
      ]
    ],
    t.dataFormat = a,
    t.description = ''.concat(JSON.stringify(t.padding)),
    t.gpu && (t.mapInputProgram = Up.compileProgram(hf)),
    t
  }
  return nn(e, t),
  tn(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 0)),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] + this.padding[0][0] + this.padding[0][1],
          this.inputShape[1] + this.padding[1][0] + this.padding[1][1],
          this.inputShape[2]
        ],
        this.output = new Jp([], this.outputShape),
        Yp.a.assign(this.output.tensor.hi(this.inputShape[0] + this.padding[0][0], this.inputShape[1] + this.padding[1][0], this.inputShape[2]).lo(this.padding[0][0], this.padding[1][0], 0), e.tensor),
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(2, 0, 1), this.output.tensor = this.output.tensor.transpose(2, 0, 1))
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e, n) {
        var r,
        o;
        if (!this.indexMap) {
          var i = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          var a = 'channels_first' === this.dataFormat ? [
            0,
            this.padding[0][0],
            this.padding[1][0]
          ] : [
            this.padding[0][0],
            this.padding[1][0],
            0
          ],
          s = 'channels_first' === this.dataFormat ? [
            this.inputShape[0],
            this.inputShape[1] + this.padding[0][0],
            this.inputShape[2] + this.padding[1][0]
          ] : [
            this.inputShape[0] + this.padding[0][0],
            this.inputShape[1] + this.padding[1][0],
            this.inputShape[2]
          ];
          Yp.a.assigns(this.indexMap.tensor, - 1),
          Yp.a.assign((r = (o = this.indexMap.tensor).hi.apply(o, s)).lo.apply(r, a), i.tensor),
          n ? this.indexMap.reshapeTo2D()  : this.indexMap.reshapeTo2DSquare(),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || (e.reshapeTo2DSquare(), e.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.inputShape = e.originalShape,
        this.outputShape = 'channels_first' === this.dataFormat ? [
          this.inputShape[0],
          this.inputShape[1] + this.padding[0][0] + this.padding[0][1],
          this.inputShape[2] + this.padding[1][0] + this.padding[1][1]
        ] : [
          this.inputShape[0] + this.padding[0][0] + this.padding[0][1],
          this.inputShape[1] + this.padding[1][0] + this.padding[1][1],
          this.inputShape[2]
        ],
        this._createIndexMap(e.indicesForReshaped, e.is2DReshaped),
        this.output || (this.output = new Jp([], this.outputShape), e.is2DReshaped ? this.output.reshapeTo2D()  : this.output.reshapeTo2DSquare(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
df = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
mf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    on(this, e),
    t = un(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'ZeroPadding3D';
    var r = n.padding,
    o = void 0 === r ? [
      [1,
      1],
      [
        1,
        1
      ],
      [
        1,
        1
      ]
    ] : r,
    i = n.data_format,
    a = void 0 === i ? 'channels_last' : i;
    return Array.isArray(o) ? Array.isArray(o[0]) ? t.padding = o : t.padding = [
      [o[0],
      o[0]],
      [
        o[1],
        o[1]
      ],
      [
        o[2],
        o[2]
      ]
    ] : t.padding = [
      [o,
      o],
      [
        o,
        o
      ],
      [
        o,
        o
      ]
    ],
    t.dataFormat = a,
    t.description = ''.concat(JSON.stringify(t.padding)),
    t.gpu && (t.mapInputProgram = Up.compileProgram(df)),
    t
  }
  return cn(e, t),
  sn(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 3, 0)),
        this.inputShape = e.tensor.shape,
        this.outputShape = [
          this.inputShape[0] + this.padding[0][0] + this.padding[0][1],
          this.inputShape[1] + this.padding[1][0] + this.padding[1][1],
          this.inputShape[2] + this.padding[2][0] + this.padding[2][1],
          this.inputShape[3]
        ],
        this.output = new Jp([], this.outputShape),
        Yp.a.assign(this.output.tensor.hi(this.inputShape[0] + this.padding[0][0], this.inputShape[1] + this.padding[1][0], this.inputShape[2] + this.padding[2][0], this.inputShape[3]).lo(this.padding[0][0], this.padding[1][0], this.padding[2][0], 0), e.tensor),
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(3, 0, 1, 2), this.output.tensor = this.output.tensor.transpose(3, 0, 1, 2))
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e, n) {
        var r,
        o;
        if (!this.indexMap) {
          var i = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          this.indexMap = new Jp([], this.outputShape, {
            type: Int32Array
          });
          var a = 'channels_first' === this.dataFormat ? [
            0,
            this.padding[0][0],
            this.padding[1][0],
            this.padding[2][0]
          ] : [
            this.padding[0][0],
            this.padding[1][0],
            this.padding[2][0],
            0
          ],
          s = 'channels_first' === this.dataFormat ? [
            this.inputShape[0],
            this.inputShape[1] + this.padding[0][0],
            this.inputShape[2] + this.padding[1][0],
            this.inputShape[3] + this.padding[2][0]
          ] : [
            this.inputShape[0] + this.padding[0][0],
            this.inputShape[1] + this.padding[1][0],
            this.inputShape[2] + this.padding[2][0],
            this.inputShape[3]
          ];
          Yp.a.assigns(this.indexMap.tensor, - 1),
          Yp.a.assign((r = (o = this.indexMap.tensor).hi.apply(o, s)).lo.apply(r, a), i.tensor),
          n ? this.indexMap.reshapeTo2D()  : this.indexMap.reshapeTo2DSquare(),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || (e.reshapeTo2DSquare(), e.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.inputShape = e.originalShape,
        this.outputShape = 'channels_first' === this.dataFormat ? [
          this.inputShape[0],
          this.inputShape[1] + this.padding[0][0] + this.padding[0][1],
          this.inputShape[2] + this.padding[1][0] + this.padding[1][1],
          this.inputShape[3] + this.padding[2][0] + this.padding[2][1]
        ] : [
          this.inputShape[0] + this.padding[0][0] + this.padding[0][1],
          this.inputShape[1] + this.padding[1][0] + this.padding[1][1],
          this.inputShape[2] + this.padding[2][0] + this.padding[2][1],
          this.inputShape[3]
        ],
        this._createIndexMap(e.indicesForReshaped, e.is2DReshaped),
        this.output || (this.output = new Jp([], this.outputShape), e.is2DReshaped ? this.output.reshapeTo2D()  : this.output.reshapeTo2DSquare(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
yf = n(59),
vf = n.n(yf),
gf = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D A;\nuniform sampler2D B;\nuniform sampler2D C;\nuniform bool addC;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 A_size = textureSize(A, 0);\n  ivec2 B_size = textureSize(B, 0);\n  int out_x = int(float(B_size[0]) * outTex.x);\n  int out_y = int(float(A_size[1]) * outTex.y);\n  int commonDim = A_size[0];\n\n  float sum = 0.;\n  for (int i = 0; i < commonDim; ++i) {\n    float a = texelFetch(A, ivec2(i, out_y), 0).r;\n    float b = texelFetch(B, ivec2(out_x, i), 0).r;\n    sum += a * b;\n  }\n\n  if (addC) {\n    sum += texelFetch(C, ivec2(out_x, 0), 0).r;\n  }\n\n  outColor = vec4(sum);\n}\n',
_f = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    pn(this, e),
    t = dn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Dense';
    var r = n.units,
    o = void 0 === r ? 1 : r,
    i = n.activation,
    a = void 0 === i ? 'linear' : i,
    s = n.input_dim,
    u = void 0 === s ? null : s,
    c = n.use_bias,
    l = void 0 === c || c;
    return t.description = ''.concat(a, ' activation, output dimensions: ').concat(o),
    t.activation = a,
    t.activationFunc = Es[t.activation],
    t.units = o,
    t.input_dim = u,
    t.use_bias = l,
    t.params = t.use_bias ? [
      'kernel',
      'bias'
    ] : [
      'kernel'
    ],
    t.input_dim && (t.inputShape = [
      t.input_dim
    ]),
    t.gpu && (t.matMulProgram = Up.compileProgram(gf), t.activationProgram = Up.compileProgram(js[t.activation])),
    t
  }
  return mn(e, t),
  fn(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.output = new Jp([], [
          this.units
        ]),
        this.use_bias && Yp.a.assign(this.output.tensor, this.weights.bias.tensor),
        Object(yf.gemv) (1, this.weights.kernel.tensor.transpose(1, 0), e.tensor, 1, this.output.tensor),
        this.activationFunc(this.output)
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        }),
        'linear' === this.activation || this.outputPreactiv || (this.outputPreactiv = new Jp([], [
          this.units
        ]), this.outputPreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.output || (this.output = new Jp([], [
          this.units
        ]), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        var n = [
          {
            input: e,
            name: 'A'
          },
          {
            input: this.weights.kernel,
            name: 'B'
          }
        ];
        this.use_bias && n.push({
          input: this.weights.bias,
          name: 'C'
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: 'linear' === this.activation ? this.output : this.outputPreactiv,
          inputs: n,
          uniforms: [
            {
              value: this.use_bias ? 1 : 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        'linear' !== this.activation && Up.runProgram({
          program: this.activationProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputPreactiv,
              name: 'x'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
bf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    vn(this, e),
    t = bn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Activation';
    var r = n.activation,
    o = void 0 === r ? 'linear' : r;
    return t.activation = o,
    t.activationFunc = Es[o],
    t.description = ''.concat(t.activation),
    t.gpu && (t.program = Up.compileProgram(js[t.activation])),
    t
  }
  return xn(e, t),
  _n(e, [
    {
      key: 'call',
      value: function t(e) {
        return 'linear' === this.activation ? (this.output = e, this.output)  : (this.gpu ? this._callGPU(e)  : this._callCPU(e), this.output)
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.output = new Jp(new e.arrayType(e.tensor.data), e.tensor.shape),
        this.activationFunc(this.output)
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.glTextureFragments || e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }),
        this.output || (this.output = new Jp([], e.glTextureShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), e.is1D ? this.output.is1D = e.is1D : (e.is2DReshaped || e.is2DSquareReshaped) && (e.is2DReshaped ? this.output.is2DReshaped = e.is2DReshaped : e.is2DSquareReshaped && (this.output.is2DSquareReshaped = e.is2DSquareReshaped), this.output.originalShape = e.originalShape, this.output.indicesForReshaped = e.indicesForReshaped)),
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
xf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Sn(this, e),
    t = Cn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Dropout';
    var r = n.rate,
    o = void 0 === r ? 0.5 : r;
    return t.description = ''.concat(o),
    t.rate = Math.min(Math.max(0, o), 1),
    t
  }
  return kn(e, t),
  Pn(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.output = e,
        this.output
      }
    }
  ]),
  e
}(Bp),
wf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    En(this, e),
    t = Fn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'SpatialDropout1D';
    var r = n.p,
    o = void 0 === r ? 0.5 : r;
    return t.description = ''.concat(o),
    t.p = Math.min(Math.max(0, o), 1),
    t
  }
  return Mn(e, t),
  An(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.output = e,
        this.output
      }
    }
  ]),
  e
}(Bp),
Sf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Dn(this, e),
    t = zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'SpatialDropout2D';
    var r = n.rate,
    o = void 0 === r ? 0.5 : r,
    i = n.data_format,
    a = void 0 === i ? 'channels_last' : i;
    return t.description = ''.concat(o),
    t.rate = Math.min(Math.max(0, o), 1),
    t.dataFormat = a,
    t
  }
  return Un(e, t),
  Ln(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.output = e,
        this.output
      }
    }
  ]),
  e
}(Bp),
Tf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Nn(this, e),
    t = Vn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'SpatialDropout3D';
    var r = n.rate,
    o = void 0 === r ? 0.5 : r,
    i = n.data_format,
    a = void 0 === i ? 'channels_last' : i;
    return t.description = ''.concat(o),
    t.rate = Math.min(Math.max(0, o), 1),
    t.dataFormat = a,
    t
  }
  return Hn(e, t),
  qn(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.output = e,
        this.output
      }
    }
  ]),
  e
}(Bp),
Pf = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int outputSize;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  int out_x = int(float(outputSize) * outTex.x);\n  int out_y = 0;\n\n  int i = int(floor(float(out_x) / float(inputCols)));\n  int j = int(mod(float(out_x), float(inputCols)));\n  outColor = vec4(texelFetch(x, ivec2(j, i), 0).r);\n}\n',
Cf = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int outputSize;\nuniform int inputRows;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  int out_x = int(float(outputSize) * outTex.x);\n  int out_y = 0;\n\n  int rowIndex = int(mod(floor(float(out_x) / float(inputCols)), float(inputRows)));\n  int colIndex = int(mod(float(out_x), float(inputCols)));\n  int fragmentIndex = int(floor(float(out_x) / (float(inputRows) * float(inputCols))));\n  colIndex += fragmentIndex * inputCols;\n  outColor = vec4(texelFetch(x, ivec2(colIndex, rowIndex), 0).r);\n}\n',
kf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Xn(this, e),
    t = Kn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Flatten',
    t.gpu && (t.flattenProgram = Up.compileProgram(Pf), t.flattenFragmentsProgram = Up.compileProgram(Cf)),
    t
  }
  return Jn(e, t),
  $n(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        e.tensor.shape.length <= 1 ? this.output = e : (this.output = new Jp([], [
          e.tensor.shape.reduce(function (t, e) {
            return t * e
          }, 1)
        ]), this.output.replaceTensorData(e.tensor.data))
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.glTextureFragments || (e.tensor.shape.length <= 2 ? e.createGLTexture({
          type: '2d',
          format: 'float'
        })  : e.tensor.shape.length > 2 && !e.is2DReshaped && (e.reshapeTo2D(), e.createGLTexture({
          type: '2d',
          format: 'float'
        }))),
        this.output || (this.output = new Jp([], [
          e.glTextureShape.reduce(function (t, e) {
            return t * e
          }, 1)
        ]), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        e.glTextureFragments ? (e.convert2DRowFragmentedGLTextureToColStack(), Up.runProgram({
          program: this.flattenFragmentsProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: this.output.glTextureShape[1],
              type: 'int',
              name: 'outputSize'
            },
            {
              value: e.glTextureShape[0],
              type: 'int',
              name: 'inputRows'
            },
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ],
          supportsTextureFragments: !0
        }), e.removeGLTextureFragmentsAsColStack())  : Up.runProgram({
          program: this.flattenProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: this.output.glTextureShape[1],
              type: 'int',
              name: 'outputSize'
            },
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ],
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
Of = n(164),
Ef = n.n(Of),
jf = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
Af = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    tr(this, e),
    t = rr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Reshape';
    var r = n.target_shape,
    o = void 0 === r ? [
    ] : r;
    return t.targetShape = o,
    t.description = 'target shape: '.concat(JSON.stringify(t.targetShape)),
    t.gpu && (t.mapInputProgram = Up.compileProgram(jf)),
    t
  }
  return or(e, t),
  nr(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.targetShape.reduce(function (t, e) {
          return t * e
        }, 1) !== e.tensor.size && this.throwError('The total size of new array must be unchanged in reshape layer.'),
        this.output = new Jp([], this.targetShape),
        this.output.replaceTensorData(e.tensor.data)
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        if (!this.indexMap) {
          var e = new Jp([], this.inputShape, {
            type: Int32Array
          }),
          n = new Jp([], this.inputShape, {
            type: Int32Array
          }),
          r = new Jp([], this.inputShape, {
            type: Int32Array
          });
          if (2 === this.inputShape.length) for (var o = 0; o < this.inputShape[0]; o++) Yp.a.assigns(n.tensor.pick(o, null), o);
           else if (3 === this.inputShape.length) for (var i = 0; i < this.inputShape[0]; i++) for (var a = 0; a < this.inputShape[1]; a++) Yp.a.assigns(n.tensor.pick(i, a, null), i * this.inputShape[1] + a);
           else if (4 === this.inputShape.length) for (var s = 0; s < this.inputShape[0]; s++) for (var u = 0; u < this.inputShape[1]; u++) for (var c = 0; c < this.inputShape[2]; c++) Yp.a.assigns(n.tensor.pick(s, u, c, null), s * this.inputShape[1] * this.inputShape[2] + u * this.inputShape[2] + c);
          for (var l = 0; l < Ef() (this.inputShape); l++) {
            var p;
            Yp.a.assigns((p = r.tensor).pick.apply(p, Zn(Array(this.inputShape.length - 1).fill(null)).concat([l])), l)
          }
          Yp.a.muls(e.tensor, n.tensor, Ef() (this.inputShape)),
          Yp.a.addeq(e.tensor, r.tensor),
          this.indexMap = new Jp([], this.targetShape, {
            type: Int32Array
          }),
          this.indexMap.replaceTensorData(new Int32Array(e.tensor.data)),
          this.targetShape.length > 2 && this.indexMap.reshapeTo2D(),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture ? e.is2DReshaped || e.is2DSquareReshaped ? this.inputShape = e.originalShape : this.inputShape = e.tensor.shape : (this.inputShape = e.tensor.shape, e.tensor.shape.length <= 2 ? e.createGLTexture({
          type: '2d',
          format: 'float'
        })  : e.tensor.shape.length > 2 && !e.is2DReshaped && (e.reshapeTo2D(), e.createGLTexture({
          type: '2d',
          format: 'float'
        }))),
        this._createIndexMap(),
        this.output || (this.output = new Jp([], this.targetShape), this.targetShape.length > 2 && this.output.reshapeTo2D(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
Ff = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
Mf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    sr(this, e),
    t = lr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Permute';
    var r = n.dims,
    o = void 0 === r ? [
    ] : r;
    return t.description = ''.concat(JSON.stringify(o)),
    t.dims = o.map(function (t) {
      return t - 1
    }),
    t.gpu && (t.mapInputProgram = Up.compileProgram(Ff)),
    t
  }
  return pr(e, t),
  cr(e, [
    {
      key: 'call',
      value: function t(e) {
        return e.tensor.shape.length <= 1 || bp() (Vp() (e.tensor.shape.length), this.dims) ? (this.output = e, this.output)  : (this.gpu ? this._callGPU(e)  : this._callCPU(e), this.output)
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        var n;
        this.dims.length !== e.tensor.shape.length && this.throwError('The specified dims permutation must match the number of dimensions.');
        var r = this.dims.map(function (t) {
          return e.tensor.shape[t]
        });
        this.output = new Jp([], r),
        Yp.a.assign(this.output.tensor, (n = e.tensor).transpose.apply(n, ar(this.dims)))
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        var e = this,
        n;
        if (!this.indexMap) {
          var r = new Jp([], this.inputShape, {
            type: Int32Array
          }),
          o = new Jp([], this.inputShape, {
            type: Int32Array
          }),
          i = new Jp([], this.inputShape, {
            type: Int32Array
          });
          if (2 === this.inputShape.length) for (var a = 0; a < this.inputShape[0]; a++) Yp.a.assigns(o.tensor.pick(a, null), a);
           else if (3 === this.inputShape.length) for (var s = 0; s < this.inputShape[0]; s++) for (var u = 0; u < this.inputShape[1]; u++) Yp.a.assigns(o.tensor.pick(s, u, null), s * this.inputShape[1] + u);
           else if (4 === this.inputShape.length) for (var c = 0; c < this.inputShape[0]; c++) for (var l = 0; l < this.inputShape[1]; l++) for (var p = 0; p < this.inputShape[2]; p++) Yp.a.assigns(o.tensor.pick(c, l, p, null), c * this.inputShape[1] * this.inputShape[2] + l * this.inputShape[2] + p);
          for (var h = 0; h < Ef() (this.inputShape); h++) {
            var f;
            Yp.a.assigns((f = i.tensor).pick.apply(f, ar(Array(this.inputShape.length - 1).fill(null)).concat([h])), h)
          }
          Yp.a.muls(r.tensor, o.tensor, Ef() (this.inputShape)),
          Yp.a.addeq(r.tensor, i.tensor);
          var d = this.dims.map(function (t) {
            return e.inputShape[t]
          });
          this.indexMap = new Jp([], d, {
            type: Int32Array
          }),
          Yp.a.assign(this.indexMap.tensor, (n = r.tensor).transpose.apply(n, ar(this.dims))),
          d.length > 2 && this.indexMap.reshapeTo2D(),
          this.indexMap.createGLTexture({
            type: '2d',
            format: 'int'
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        var n = this;
        if (e.glTexture ? e.is2DReshaped || e.is2DSquareReshaped ? this.inputShape = e.originalShape : this.inputShape = e.tensor.shape : (this.inputShape = e.tensor.shape, e.tensor.shape.length <= 2 ? e.createGLTexture({
          type: '2d',
          format: 'float'
        })  : e.tensor.shape.length > 2 && !e.is2DReshaped && (e.reshapeTo2D(), e.createGLTexture({
          type: '2d',
          format: 'float'
        }))), this._createIndexMap(), !this.output) {
          var r = this.dims.map(function (t) {
            return n.inputShape[t]
          });
          this.output = new Jp([], r),
          r.length > 2 && this.output.reshapeTo2D(),
          this.output.createGLTexture({
            type: '2d',
            format: 'float'
          })
        }
        Up.runProgram({
          program: this.mapInputProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMap,
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
Rf = n(449),
Df = n.n(Rf),
If = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nout vec4 outColor;\n\nvoid main() {\n  outColor = texture(x, vec2(outTex.x, 0));\n}\n',
Lf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    fr(this, e),
    t = yr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'RepeatVector';
    var r = n.n,
    o = void 0 === r ? 1 : r;
    return t.n = o,
    t.description = 'n = '.concat(o),
    t.gpu && (t.program = Up.compileProgram(If)),
    t
  }
  return vr(e, t),
  mr(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        1 !== e.tensor.shape.length && this.throwError('Only 1D tensor inputs allowed.'),
        this.output = new Jp([], [
          this.n,
          e.tensor.shape[1]
        ]),
        this.output.tensor = Df() (Uh() (e.tensor, 0), [
          this.n,
          1
        ])
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        }),
        this.output || (this.output = new Jp([], [
          this.n,
          e.glTextureShape[1]
        ]), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
zf = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform sampler2D embeddings;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 x_size = textureSize(x, 0);\n  ivec2 embeddings_size = textureSize(embeddings, 0);\n  int out_x = int(float(embeddings_size[0]) * outTex.x);\n  int out_y = int(float(x_size[0]) * outTex.y);\n\n  int index = int(texelFetch(x, ivec2(out_y, 0), 0).r);\n  outColor = texelFetch(embeddings, ivec2(out_x, index), 0);\n}\n',
Uf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    _r(this, e),
    t = wr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Embedding';
    var r = n.input_dim,
    o = void 0 === r ? 1 : r,
    i = n.output_dim,
    a = void 0 === i ? 1 : i,
    s = n.input_length,
    u = void 0 === s ? 0 : s,
    c = n.mask_zero,
    l = void 0 !== c && c;
    return t.description = 'output dimensions: '.concat(a),
    t.inputDim = o,
    t.outputDim = a,
    t.inputLength = u,
    t.maskZero = l,
    t.params = [
      'embeddings'
    ],
    t.gpu && (t.program = Up.compileProgram(zf)),
    t
  }
  return Sr(e, t),
  xr(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.output = new Jp([], [
          e.tensor.shape[0],
          this.weights.embeddings.tensor.shape[1]
        ]);
        for (var n = 0, r = e.tensor.shape[0]; n < r; n++) Yp.a.assign(this.output.tensor.pick(n, null), this.weights.embeddings.tensor.pick(e.tensor.get(n), null))
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        }),
        this.output || (this.output = new Jp([], [
          e.glTextureShape[1],
          this.weights.embeddings.glTextureShape[1]
        ]), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.weights.embeddings,
              name: 'embeddings'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
Gf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Pr(this, e),
    t = Or(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = '_Merge',
    t.isMergeLayer = !0,
    t
  }
  return Er(e, t),
  kr(e, [
    {
      key: 'call',
      value: function t(e) {
        if (this.gpu) this._callGPU(e);
         else {
          this._validateInputs(e) || this.throwError('Invalid inputs to call method.'),
          this._callCPU(e)
        }
        return this.output
      }
    },
    {
      key: '_validateInputs',
      value: function t(e) {
        var n = e.map(function (t) {
          return t.tensor.shape.slice()
        });
        if (['sum',
        'diff',
        'mul',
        'ave',
        'max',
        'min'].indexOf(this.mode) > - 1 && (n.every(function (t) {
          return bp() (t, n[0])
        }) || this.throwError('All input shapes must be the same for mode '.concat(this.mode, '.'))), 'dot' === this.mode) 2 !== e.length && this.throwError('Exactly 2 inputs required for mode '.concat(this.mode, '.')),
        this.dotAxes[0] < 0 && (this.dotAxes[0] = n[0].length + this.dotAxes[0]),
        this.dotAxes[1] < 0 && (this.dotAxes[1] = n[1].length + this.dotAxes[1]),
        n[0][this.dotAxes[0]] !== n[1][this.dotAxes[1]] && this.throwError('Dimensions incompatibility using dot mode.');
         else if ('concat' === this.mode) {
          var r = n.slice(),
          o = this.concatAxis < 0 ? r[0].length + this.concatAxis : this.concatAxis;
          0 === this.concatAxis && (o = 0),
          Vp() (r.length).forEach(function (t) {
            r[t].splice(o, 1)
          }),
          r.every(function (t) {
            return bp() (t, r[0])
          }) || this.throwError('In concat mode, all shapes must be the same except along the concat axis.')
        }
        return !0
      }
    },
    {
      key: '_callCPU',
      value: function t() {
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.forEach(function (t) {
          t.glTexture || t.glTextureFragments || t.createGLTexture({
            type: '2d',
            format: 'float',
            supportsTextureFragments: !0
          })
        }),
        this.output || (this.output = new Jp([], e[0].glTextureShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), e[0].is1D ? this.output.is1D = e[0].is1D : (e[0].is2DReshaped || e[0].is2DSquareReshaped) && (e[0].is2DReshaped ? this.output.is2DReshaped = e[0].is2DReshaped : e[0].is2DSquareReshaped && (this.output.is2DSquareReshaped = e[0].is2DSquareReshaped), this.output.originalShape = e[0].originalShape.slice(), this.output.indicesForReshaped = e[0].indicesForReshaped)),
        Up.runProgram({
          program: this.mergeProgram,
          output: this.output,
          inputs: e.map(function (t, e) {
            return {
              input: t,
              name: 'inputs['.concat(e, ']')
            }
          }),
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
Nf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Ar(this, e),
    t = Rr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Add',
    t.mode = 'sum',
    t
  }
  return Ir(e, t),
  Mr(e, [
    {
      key: '_callCPU',
      value: function t(e) {
        var n = e[0].tensor.shape.slice();
        this.output = new Jp([], n);
        for (var r = 0; r < e.length; r++) Yp.a.addeq(this.output.tensor, e[r].tensor)
      }
    },
    {
      key: '_callGPU',
      value: function t(n) {
        if (!this.mergeProgram) {
          var r = n[0].glTextureFragments ? n[0].glTextureFragmentShape : n[0].glTextureShape,
          o = yt('add', n.length, r);
          this.mergeProgram = Up.compileProgram(o)
        }
        Dr(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), '_callGPU', this).call(this, n)
      }
    }
  ]),
  e
}(Gf),
Bf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return zr(this, e),
    t = Nr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Subtract',
    t.mode = 'diff',
    t
  }
  return qr(e, t),
  Gr(e, [
    {
      key: '_callCPU',
      value: function t(e) {
        2 !== e.length && this.throwError('Inputs should be an array of 2 Tensors.');
        var n = e[0].tensor.shape.slice();
        this.output = new Jp([], n),
        Yp.a.sub(this.output.tensor, e[0].tensor, e[1].tensor)
      }
    },
    {
      key: '_callGPU',
      value: function t(n) {
        if (!this.mergeProgram) {
          var r = n[0].glTextureFragments ? n[0].glTextureFragmentShape : n[0].glTextureShape,
          o = yt('subtract', n.length, r);
          this.mergeProgram = Up.compileProgram(o)
        }
        Br(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), '_callGPU', this).call(this, n)
      }
    }
  ]),
  e
}(Gf),
qf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Hr(this, e),
    t = Yr(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Multiply',
    t.mode = 'mul',
    t
  }
  return Kr(e, t),
  Xr(e, [
    {
      key: '_callCPU',
      value: function t(e) {
        var n = e[0].tensor.shape.slice();
        this.output = new Jp([], n),
        Yp.a.assigns(this.output.tensor, 1);
        for (var r = 0; r < e.length; r++) Yp.a.muleq(this.output.tensor, e[r].tensor)
      }
    },
    {
      key: '_callGPU',
      value: function t(n) {
        if (!this.mergeProgram) {
          var r = n[0].glTextureFragments ? n[0].glTextureFragmentShape : n[0].glTextureShape,
          o = yt('multiply', n.length, r);
          this.mergeProgram = Up.compileProgram(o)
        }
        $r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), '_callGPU', this).call(this, n)
      }
    }
  ]),
  e
}(Gf),
Vf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Qr(this, e),
    t = eo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Average',
    t.mode = 'ave',
    t
  }
  return ro(e, t),
  to(e, [
    {
      key: '_callCPU',
      value: function t(e) {
        var n = e[0].tensor.shape.slice();
        this.output = new Jp([], n);
        for (var r = 0; r < e.length; r++) Yp.a.addeq(this.output.tensor, e[r].tensor);
        Yp.a.divseq(this.output.tensor, e.length)
      }
    },
    {
      key: '_callGPU',
      value: function t(n) {
        if (!this.mergeProgram) {
          var r = n[0].glTextureFragments ? n[0].glTextureFragmentShape : n[0].glTextureShape,
          o = yt('average', n.length, r);
          this.mergeProgram = Up.compileProgram(o)
        }
        no(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), '_callGPU', this).call(this, n)
      }
    }
  ]),
  e
}(Gf),
Hf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return io(this, e),
    t = uo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Maximum',
    t.mode = 'max',
    t
  }
  return lo(e, t),
  so(e, [
    {
      key: '_callCPU',
      value: function t(e) {
        var n = e[0].tensor.shape.slice();
        this.output = new Jp([], n),
        Yp.a.assign(this.output.tensor, e[0].tensor);
        for (var r = 1; r < e.length; r++) Yp.a.maxeq(this.output.tensor, e[r].tensor)
      }
    },
    {
      key: '_callGPU',
      value: function t(n) {
        if (!this.mergeProgram) {
          var r = n[0].glTextureFragments ? n[0].glTextureFragmentShape : n[0].glTextureShape,
          o = yt('maximum', n.length, r);
          this.mergeProgram = Up.compileProgram(o)
        }
        co(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), '_callGPU', this).call(this, n)
      }
    }
  ]),
  e
}(Gf),
Wf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return ho(this, e),
    t = yo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Minimum',
    t.mode = 'min',
    t
  }
  return go(e, t),
  mo(e, [
    {
      key: '_callCPU',
      value: function t(e) {
        var n = e[0].tensor.shape.slice();
        this.output = new Jp([], n),
        Yp.a.assign(this.output.tensor, e[0].tensor);
        for (var r = 1; r < e.length; r++) Yp.a.mineq(this.output.tensor, e[r].tensor)
      }
    },
    {
      key: '_callGPU',
      value: function t(n) {
        if (!this.mergeProgram) {
          var r = n[0].glTextureFragments ? n[0].glTextureFragmentShape : n[0].glTextureShape,
          o = yt('minimum', n.length, r);
          this.mergeProgram = Up.compileProgram(o)
        }
        vo(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), '_callGPU', this).call(this, n)
      }
    }
  ]),
  e
}(Gf),
Xf = n(456),
Yf = n.n(Xf),
$f = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    bo(this, e),
    t = So(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Concatenate',
    t.mode = 'concat';
    var r = n.axis,
    o = void 0 === r ? - 1 : r;
    return t.concatAxis = o <= 0 ? o : o - 1,
    t
  }
  return To(e, t),
  wo(e, [
    {
      key: '_callCPU',
      value: function t(e) {
        var n = e[0].tensor.shape.slice(),
        r = this.concatAxis < 0 ? n.length + this.concatAxis : this.concatAxis;
        if (e.slice(1, e.length).forEach(function (t) {
          var e = t.tensor.shape.slice() [r];
          n[r] += e
        }), this.output = new Jp([], n), 0 === r) Yf() (this.output.tensor, e.map(function (t) {
          return t.tensor
        }));
         else {
          for (var o, i = [
            r
          ], a = 0; a < e[0].tensor.shape.length; a++) a !== r && i.push(a);
          Yf() ((o = this.output.tensor).transpose.apply(o, i), e.map(function (t) {
            var e;
            return (e = t.tensor).transpose.apply(e, i)
          }))
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.forEach(function (t) {
          t.glTexture || t.glTextureFragments || t.createGLTexture({
            type: '2d',
            format: 'float',
            supportsTextureFragments: !0
          })
        });
        var n = e[0].glTextureShape.slice(),
        r = 1;
        if (e[0].is2DReshaped ? - 1 === this.concatAxis || this.concatAxis === e[0].originalShape.length - 1 ? r = 1 : this.throwError('specified axis not supported for now.')  : - 1 === this.concatAxis || 1 === this.concatAxis ? r = 1 : - 2 === this.concatAxis || 0 === this.concatAxis ? r = 0 : this.throwError('specified axis not supported for now.'), n[r] = xh() (e.map(function (t) {
          return t.glTextureShape[r]
        })), !this.output) if (this.output = new Jp([], n), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: 1 === r
        }), e[0].is1D) this.output.is1D = e[0].is1D;
         else if (e[0].is2DReshaped) {
          this.output.is2DReshaped = e[0].is2DReshaped,
          this.output.originalShape = e[0].originalShape.slice();
          var o = this.concatAxis < 0 ? this.output.originalShape.length + this.concatAxis : this.concatAxis;
          this.output.originalShape[o] = xh() (e.map(function (t) {
            return t.originalShape[o]
          })),
          this.output.indicesForReshaped = h(this.output.originalShape, !1, o)
        }
        if (!this.mergeProgram) {
          var i = this.output.glTextureFragments ? this.output.glTextureFragmentShape : this.output.glTextureShape,
          a = yt('concatenate', e.length, e.map(function (t) {
            return t.glTextureShape
          }), i, r);
          this.mergeProgram = Up.compileProgram(a)
        }
        Up.runProgram({
          program: this.mergeProgram,
          output: this.output,
          inputs: e.map(function (t, e) {
            return {
              input: t,
              name: 'inputs['.concat(e, ']')
            }
          }),
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Gf),
Kf = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D input1;\nuniform sampler2D input2;\nuniform int rows;\nuniform int cols;\nuniform int dotAxis1;\nuniform int dotAxis2;\nuniform int commonDim;\nuniform bool normalize;\nout vec4 outColor;\n\nvoid main() {\n  int out_x = int(float(cols) * outTex.x);\n  int out_y = int(float(rows) * outTex.y);\n\n  float sum = 0.;\n  float a = 0.;\n  float b = 0.;\n  float norm1 = 0.;\n  float norm2 = 0.;\n\n  for (int i = 0; i < commonDim; ++i) {\n    if (dotAxis1 == 0 && dotAxis2 == 0) {\n      a = texelFetch(input1, ivec2(out_y, i), 0).r;\n      b = texelFetch(input2, ivec2(out_x, i), 0).r;\n    } else if (dotAxis1 == 1 && dotAxis2 == 1) {\n      a = texelFetch(input1, ivec2(i, out_y), 0).r;\n      b = texelFetch(input2, ivec2(i, out_x), 0).r;\n    }\n\n    sum += a * b;\n\n    if (normalize) {\n      norm1 += a * a;\n      norm2 += b * b;\n    }\n  }\n\n  if (normalize) {\n    sum /= sqrt(norm1) * sqrt(norm2);\n  }\n\n  outColor = vec4(sum);\n}\n',
Jf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Co(this, e),
    t = Eo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Dot',
    t.mode = 'dot';
    var r = n.axes,
    o = void 0 === r ? - 1 : r,
    i = n.normalize,
    a = void 0 !== i && i;
    return Array.isArray(o) ? t.dotAxes = [
      o[0] <= 0 ? o[0] : o[0] - 1,
      o[1] <= 0 ? o[1] : o[1] - 1
    ] : t.dotAxes = [
      o <= 0 ? o : o - 1,
      o <= 0 ? o : o - 1
    ],
    t.normalize = a,
    t.gpu && (t.mergeProgram = Up.compileProgram(Kf)),
    t
  }
  return jo(e, t),
  Oo(e, [
    {
      key: '_calcOutputShape',
      value: function t(e) {
        var n = e[0].slice(),
        r = e[1].slice();
        n.splice(this.dotAxes[0], 1),
        r.splice(this.dotAxes[1], 1),
        this.outputShape = n.concat(r),
        1 === this.outputShape.length && this.outputShape.push(1)
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        if (this._calcOutputShape([e[0].tensor.shape,
        e[1].tensor.shape]), this.output = new Jp([], this.outputShape), 2 === e[0].tensor.shape.length && 2 === e[1].tensor.shape.length) {
          if (0 === this.dotAxes[0] && 0 === this.dotAxes[1]) {
            if (this.normalize) {
              for (var n = 0; n < e[0].tensor.shape[1]; n++) Yp.a.divseq(e[0].tensor.pick(null, n), Yp.a.norm2(e[0].tensor.pick(null, n)));
              for (var r = 0; r < e[1].tensor.shape[1]; r++) Yp.a.divseq(e[1].tensor.pick(null, r), Yp.a.norm2(e[1].tensor.pick(null, r)))
            }
            Sh() (this.output.tensor, e[0].tensor.transpose(1, 0), e[1].tensor)
          } else if (1 === this.dotAxes[0] && 1 === this.dotAxes[1]) {
            if (this.normalize) {
              for (var o = 0; o < e[0].tensor.shape[0]; o++) Yp.a.divseq(e[0].tensor.pick(o, null), Yp.a.norm2(e[0].tensor.pick(o, null)));
              for (var i = 0; i < e[1].tensor.shape[0]; i++) Yp.a.divseq(e[1].tensor.pick(i, null), Yp.a.norm2(e[1].tensor.pick(i, null)))
            }
            Sh() (this.output.tensor, e[0].tensor, e[1].tensor.transpose(1, 0))
          }
        } else this.throwError('dot mode for 3+ dim tensors not yet implemented.')
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.forEach(function (t) {
          t.glTexture || t.glTextureFragments || t.createGLTexture({
            type: '2d',
            format: 'float'
          })
        }),
        this._calcOutputShape([e[0].glTextureShape,
        e[1].glTextureShape]),
        this.output || (this.output = new Jp([], this.outputShape), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        var n = e[0].glTextureShape[this.dotAxes[0]];
        Up.runProgram({
          program: this.mergeProgram,
          output: this.output,
          inputs: [
            {
              input: e[0],
              name: 'input1'
            },
            {
              input: e[1],
              name: 'input2'
            }
          ],
          uniforms: [
            {
              value: this.output.glTextureShape[0],
              type: 'int',
              name: 'rows'
            },
            {
              value: this.output.glTextureShape[1],
              type: 'int',
              name: 'cols'
            },
            {
              value: this.dotAxes[0],
              type: 'int',
              name: 'dotAxis1'
            },
            {
              value: this.dotAxes[1],
              type: 'int',
              name: 'dotAxis2'
            },
            {
              value: n,
              type: 'int',
              name: 'commonDim'
            },
            {
              value: + this.normalize,
              type: 'bool',
              name: 'normalize'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Gf),
Qf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Fo(this, e),
    t = Do(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'GaussianDropout';
    var r = n.rate,
    o = void 0 === r ? 0.5 : r;
    return t.rate = Math.min(Math.max(0, o), 1),
    t
  }
  return Io(e, t),
  Ro(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.output = e,
        this.output
      }
    }
  ]),
  e
}(Bp),
Zf = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    zo(this, e),
    t = No(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'GaussianNoise';
    var r = n.stddev,
    o = void 0 === r ? 0 : r;
    return t.stddev = o,
    t
  }
  return Bo(e, t),
  Go(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.output = e,
        this.output
      }
    }
  ]),
  e
}(Bp),
td = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D X;\nuniform isampler2D normAxisIndexMap;\nuniform sampler2D gamma;\nuniform sampler2D beta;\nuniform sampler2D mean;\nuniform sampler2D std;\nuniform float epsilon;\nuniform bool scale;\nuniform bool center;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(X, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\nint normAxisIndex = texelFetch(normAxisIndexMap, ivec2(out_x, out_y), 0).r;\n\n  float _x = texelFetch(X, ivec2(out_x, out_y), 0).r;\n  float _mean = texelFetch(mean, ivec2(normAxisIndex, 0), 0).r;\n  float _std = texelFetch(std, ivec2(normAxisIndex, 0), 0).r;\n\n  float _gamma = 1.0;\n  if (scale) {\n    _gamma = texelFetch(gamma, ivec2(normAxisIndex, 0), 0).r;\n  }\n\n  float _beta = 0.0;\n  if (center) {\n    _beta = texelFetch(beta, ivec2(normAxisIndex, 0), 0).r;\n  }\n\n  float sum = _beta + _gamma * (_x - _mean) / sqrt(_std + epsilon);\n\n  outColor = vec4(sum);\n}\n',
ed = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Ho(this, e),
    t = Yo(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'BatchNormalization';
    var r = n.epsilon,
    o = void 0 === r ? 0.001 : r,
    i = n.axis,
    a = void 0 === i ? - 1 : i,
    s = n.center,
    u = void 0 === s || s,
    c = n.scale,
    l = void 0 === c || c;
    return t.epsilon = o,
    t.center = u,
    t.scale = l,
    t.axis = a,
    t.axisNormalized = !1,
    t.params = [
    ],
    t.scale && t.params.push('gamma'),
    t.center && t.params.push('beta'),
    t.params = t.params.concat(['moving_mean',
    'moving_variance']),
    t.gpu && (t.program = Up.compileProgram(td)),
    t
  }
  return $o(e, t),
  Xo(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.axisNormalized || (this.axis = this.axis < 0 ? e.tensor.shape.length + this.axis : this.axis - 1, this.axisNormalized = !0);
        for (var n = [
        ], r = 0; r < e.tensor.shape.length; r++) r === this.axis ? n.push(1)  : n.push(null);
        for (var o = new Jp([], e.tensor.shape), i = new Jp([], e.tensor.shape), a = 0; a < e.tensor.shape[this.axis]; a++) {
          if (n[this.axis] = a, this.scale) {
            var s;
            Yp.a.assigns((s = o.tensor).pick.apply(s, n), this.weights.gamma.tensor.get(a))
          }
          if (this.center) {
            var u;
            Yp.a.assigns((u = i.tensor).pick.apply(u, n), this.weights.beta.tensor.get(a))
          }
        }
        for (var c = new Jp([], e.tensor.shape), l = new Jp([], e.tensor.shape), p = 0; p < e.tensor.shape[this.axis]; p++) {
          var h,
          f;
          n[this.axis] = p,
          Yp.a.assigns((h = c.tensor).pick.apply(h, n), this.weights.moving_mean.tensor.get(p)),
          Yp.a.assigns((f = l.tensor).pick.apply(f, n), this.weights.moving_variance.tensor.get(p) + this.epsilon)
        }
        Yp.a.sqrteq(l.tensor),
        this.output = new Jp(e.tensor.data, e.tensor.shape),
        Yp.a.subeq(this.output.tensor, c.tensor),
        Yp.a.diveq(this.output.tensor, l.tensor),
        this.scale && Yp.a.muleq(this.output.tensor, o.tensor),
        this.center && Yp.a.addeq(this.output.tensor, i.tensor)
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e, n) {
        if (!this.normAxisIndexMap) {
          var r = new Jp([], this.inputShape, {
            type: Int32Array
          });
          this.normAxisIndexMap = new Jp([], e, {
            type: Int32Array
          });
          for (var o = Array(this.inputShape.length).fill(null), i = 0; i < this.inputShape[this.axis]; i++) {
            var a;
            o[this.axis] = i,
            Yp.a.assigns((a = r.tensor).pick.apply(a, Vo(o)), i)
          }
          if (n) for (var s = 0; s < n.data.length; s++) this.normAxisIndexMap.tensor.data[n.data[s]] = r.tensor.data[s];
           else this.normAxisIndexMap = r;
          this.normAxisIndexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        this.axisNormalized || (e.is2DReshaped || e.is2DSquareReshaped ? this.inputShape = e.originalShape : this.inputShape = e.tensor.shape, this.axis = this.axis < 0 ? this.inputShape.length + this.axis : this.axis - 1, this.axisNormalized = !0),
        e.glTexture || e.glTextureFragments || (e.tensor.shape.length <= 2 ? e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        })  : e.tensor.shape.length > 2 && !e.is2DReshaped && (e.reshapeTo2DSquare(), e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }))),
        this._createIndexMap(e.glTextureShape, e.indicesForReshaped),
        this.output || (this.output = new Jp([], e.glTextureShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }), e.is1D ? this.output.is1D = e.is1D : (e.is2DReshaped || e.is2DSquareReshaped) && (e.is2DReshaped ? this.output.is2DReshaped = e.is2DReshaped : e.is2DSquareReshaped && (this.output.is2DSquareReshaped = e.is2DSquareReshaped), this.output.originalShape = e.originalShape, this.output.indicesForReshaped = e.indicesForReshaped));
        var n = [
          {
            input: e,
            name: 'X'
          },
          {
            input: this.normAxisIndexMap,
            name: 'normAxisIndexMap'
          }
        ];
        this.scale && n.push({
          input: this.weights.gamma,
          name: 'gamma'
        }),
        this.center && n.push({
          input: this.weights.beta,
          name: 'beta'
        }),
        n.push({
          input: this.weights.moving_mean,
          name: 'mean'
        }),
        n.push({
          input: this.weights.moving_variance,
          name: 'std'
        });
        var r = [
          {
            value: this.epsilon,
            type: 'float',
            name: 'epsilon'
          },
          {
            value: + this.scale,
            type: 'bool',
            name: 'scale'
          },
          {
            value: + this.center,
            type: 'bool',
            name: 'center'
          }
        ];
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: n,
          uniforms: r,
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
nd = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D poolIndexMap;\nuniform int channels;\nuniform int poolSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  int out_x = int(float(channels) * outTex.x);\n  int out_y = int(float(textureSize(poolIndexMap, 0)[1]) * outTex.y);\n\n  float val = 0.;\n  int count = 0;\n  for (int i = 0; i < poolSize; ++i) {\n    int poolIndex = texelFetch(poolIndexMap, ivec2(i, out_y), 0).r;\n    if (poolIndex != -1) {\n      float val2 = texelFetch(x, ivec2(out_x, poolIndex), 0).r;\n      if (isMaxPooling) {\n        if (count == 0 || val2 > val) {\n          val = val2;\n        }\n      } else {\n        val += val2;\n      }\n      count += 1;\n    }\n  }\n\n  if (!isMaxPooling) {\n    val /= float(count);\n  }\n\n  outColor = vec4(val);\n}\n',
rd = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D poolIndexMap;\nuniform int channels;\nuniform int poolSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 inputSize = textureSize(x, 0);\n  ivec2 outputSize = textureSize(poolIndexMap, 0);\n  int out_x = int(float(channels) * outTex.x);\n  int out_y = int(float(outputSize[1]) * outTex.y);\n\n  float val = 0.;\n  int count = 0;\n  for (int i = 0; i < poolSize; ++i) {\n    int poolIndex = texelFetch(poolIndexMap, ivec2(i, out_y), 0).r;\n    int fragmentIndex = int(floor(float(poolIndex) / float(inputSize[1])));\n    if (poolIndex != -1) {\n      poolIndex = int(mod(float(poolIndex), float(inputSize[1])));\n      float val2 = texelFetch(x, ivec2(fragmentIndex * channels + out_x, poolIndex), 0).r;\n      if (isMaxPooling) {\n        if (count == 0 || val2 > val) {\n          val = val2;\n        }\n      } else {\n        val += val2;\n      }\n      count += 1;\n    }\n  }\n\n  if (!isMaxPooling) {\n    val /= float(count);\n  }\n\n  outColor = vec4(val);\n}\n',
od = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Jo(this, e),
    t = ti(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = '_Pooling1D';
    var r = n.pool_size,
    o = void 0 === r ? 2 : r,
    i = n.strides,
    a = void 0 === i ? null : i,
    s = n.padding,
    u = void 0 === s ? 'valid' : s;
    return t.poolSize = o,
    t.strides = null === a ? t.poolSize : a,
    t.padding = u,
    t.poolingFunc = 'max',
    t.description = 'pool size '.concat(t.poolSize),
    t.description += t.strides > 1 ? ', striding '.concat(t.strides, ' striding')  : '',
    t.description += 'valid' === t.padding ? ', no border padding' : ', pad to same borders',
    t.gpu && (t.poolingProgram = Up.compileProgram(nd), t.poolingFragmentsProgram = Up.compileProgram(rd)),
    t
  }
  return ei(e, t),
  Zo(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        var n = 'valid' === this.padding ? Math.floor((e.tensor.shape[0] - this.poolSize + this.strides) / this.strides)  : Math.floor((e.tensor.shape[0] + this.strides - 1) / this.strides);
        this.output = new Jp([], [
          n,
          e.tensor.shape[1]
        ]);
        for (var r = new Jp([], [
          e.tensor.shape[1]
        ]), o = 'valid' === this.padding ? 0 : Math.min(0, Math.ceil((e.tensor.shape[0] - (n - 1) * this.strides - this.poolSize) / 2)), i = 0; i < n; i++) {
          var a = Math.max(0, o),
          s = this.poolSize + Math.min(0, o);
          Yp.a.assign(r.tensor, e.tensor.pick(a, null));
          for (var u = 1, c = 1; c < s && !(a + c > e.tensor.shape[0] - 1); c++) 'max' === this.poolingFunc ? Yp.a.maxeq(r.tensor, e.tensor.pick(a + c, null))  : 'average' === this.poolingFunc && Yp.a.addeq(r.tensor, e.tensor.pick(a + c, null)),
          u += 1;
          'average' === this.poolingFunc && Yp.a.divseq(r.tensor, u),
          Yp.a.assign(this.output.tensor.pick(i, null), r.tensor),
          o += this.strides
        }
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        if (!this.poolIndexMap) {
          var e = 'valid' === this.padding ? Math.floor((this.inputShape[0] - this.poolSize + this.strides) / this.strides)  : Math.floor((this.inputShape[0] + this.strides - 1) / this.strides);
          this.outputShape = [
            e,
            this.inputShape[1]
          ],
          this.poolIndexMap = new Jp([], [
            e,
            this.poolSize
          ], {
            type: Int32Array
          }),
          Yp.a.assigns(this.poolIndexMap.tensor, - 1);
          for (var n = 'valid' === this.padding ? 0 : Math.min(0, Math.ceil((this.inputShape[0] - (e - 1) * this.strides - this.poolSize) / 2)), r = 0; r < e; r++) {
            var o = Math.max(0, n),
            i = this.poolSize + Math.min(0, n),
            a = o;
            this.poolIndexMap.tensor.set(r, 0, a);
            for (var s = 1; s < i && (a = o + s) <= this.inputShape[0] - 1; s++) this.poolIndexMap.tensor.set(r, s, a);
            n += this.strides
          }
          this.poolIndexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.glTextureFragments || e.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }),
        this.inputShape = e.tensor.shape,
        this._createIndexMap(),
        this.output || (this.output = new Jp([], this.outputShape), this.output.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        }));
        var n = 'max' === this.poolingFunc,
        r = [
          {
            value: this.output.glTextureShape[1],
            type: 'int',
            name: 'channels'
          },
          {
            value: this.poolSize,
            type: 'int',
            name: 'poolSize'
          },
          {
            value: + n,
            type: 'bool',
            name: 'isMaxPooling'
          }
        ];
        e.glTextureFragments ? (e.convert2DRowFragmentedGLTextureToColStack(), Up.runProgram({
          program: this.poolingFragmentsProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.poolIndexMap,
              name: 'poolIndexMap'
            }
          ],
          uniforms: r,
          supportsTextureFragments: !0
        }), e.removeGLTextureFragmentsAsColStack())  : Up.runProgram({
          program: this.poolingProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.poolIndexMap,
              name: 'poolIndexMap'
            }
          ],
          uniforms: r,
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
id = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return ri(this, e),
    t = oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'MaxPooling1D',
    t.poolingFunc = 'max',
    t
  }
  return ii(e, t),
  e
}(od),
ad = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D poolIndexMap;\nuniform int channels;\nuniform int poolSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  int out_x = int(float(channels) * outTex.x);\n  int out_y = int(float(textureSize(poolIndexMap, 0)[1]) * outTex.y);\n\n  float val = 0.;\n  int count = 0;\n  for (int i = 0; i < poolSize; ++i) {\n    int poolIndex = texelFetch(poolIndexMap, ivec2(i, out_y), 0).r;\n    if (poolIndex != -1) {\n      float val2 = texelFetch(x, ivec2(out_x, poolIndex), 0).r;\n      if (isMaxPooling) {\n        if (count == 0 || val2 > val) {\n          val = val2;\n        }\n      } else {\n        val += val2;\n      }\n      count += 1;\n    }\n  }\n\n  if (!isMaxPooling) {\n    val /= float(count);\n  }\n\n  outColor = vec4(val);\n}\n',
sd = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D poolIndexMap;\nuniform int channels;\nuniform int poolSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 inputSize = textureSize(x, 0);\n  ivec2 outputSize = textureSize(poolIndexMap, 0);\n  int out_x = int(float(channels) * outTex.x);\n  int out_y = int(float(outputSize[1]) * outTex.y);\n\n  float val = 0.;\n  int count = 0;\n  for (int i = 0; i < poolSize; ++i) {\n    int poolIndex = texelFetch(poolIndexMap, ivec2(i, out_y), 0).r;\n    int fragmentIndex = int(floor(float(poolIndex) / float(inputSize[1])));\n    if (poolIndex != -1) {\n      poolIndex = int(mod(float(poolIndex), float(inputSize[1])));\n      float val2 = texelFetch(x, ivec2(fragmentIndex * channels + out_x, poolIndex), 0).r;\n      if (isMaxPooling) {\n        if (count == 0 || val2 > val) {\n          val = val2;\n        }\n      } else {\n        val += val2;\n      }\n      count += 1;\n    }\n  }\n\n  if (!isMaxPooling) {\n    val /= float(count);\n  }\n\n  outColor = vec4(val);\n}\n',
ud = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    ci(this, e),
    t = hi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = '_Pooling2D';
    var r = n.pool_size,
    o = void 0 === r ? [
      2,
      2
    ] : r,
    i = n.strides,
    a = void 0 === i ? null : i,
    s = n.padding,
    u = void 0 === s ? 'valid' : s,
    c = n.data_format,
    l = void 0 === c ? 'channels_last' : c;
    return Array.isArray(o) ? t.poolSize = o : t.poolSize = [
      o,
      o
    ],
    Array.isArray(a) ? t.strides = a : t.strides = null !== a ? [
      a,
      a
    ] : t.poolSize,
    t.padding = u,
    t.dataFormat = l,
    t.poolingFunc = 'max',
    t.description = 'pool size '.concat(t.poolSize.join('x')),
    t.description += t.strides.some(function (t) {
      return t > 1
    }) ? ', '.concat(t.strides.join('x'), ' striding')  : '',
    t.description += 'valid' === t.padding ? ', no border padding' : ', pad to same borders',
    t.gpu && (t.poolingProgram = Up.compileProgram(ad), t.poolingFragmentsProgram = Up.compileProgram(sd)),
    t
  }
  return fi(e, t),
  pi(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_calcOutputShape',
      value: function t(e) {
        if (!this.outputShape || !this.inputPadding) {
          var n = ui(e, 3),
          r = n[0],
          o = n[1],
          i = n[2],
          a = ui(this.poolSize, 2),
          s = a[0],
          u = a[1],
          c = 'same' === this.padding ? Math.floor((r + this.strides[0] - 1) / this.strides[0])  : Math.floor((r - s + this.strides[0]) / this.strides[0]),
          l = 'same' === this.padding ? Math.floor((o + this.strides[1] - 1) / this.strides[1])  : Math.floor((o - u + this.strides[1]) / this.strides[1]),
          p = 'same' === this.padding ? Math.max(0, Math.floor((c - 1) * this.strides[0] + s - r))  : 0,
          h = 'same' === this.padding ? Math.max(0, Math.floor((l - 1) * this.strides[1] + u - o))  : 0,
          f = Math.floor(p / 2),
          d = p - f,
          m = Math.floor(h / 2),
          y = h - m;
          this.outputShape = [
            c,
            l,
            i
          ],
          this.inputPadding = [
            f,
            d,
            m,
            y
          ]
        }
      }
    },
    {
      key: '_padInput',
      value: function t(e) {
        if ('same' === this.padding) {
          var n = ui(e.tensor.shape, 3),
          r = n[0],
          o = n[1],
          i = n[2],
          a = ui(this.inputPadding, 4),
          s = a[0],
          u = a[1],
          c = a[2],
          l = a[3],
          p = r + s + u,
          h = o + c + l,
          f = new Jp([], [
            p,
            h,
            i
          ]);
          return 'max' === this.poolingFunc && Yp.a.assigns(f.tensor, Number.NEGATIVE_INFINITY),
          Yp.a.assign(f.tensor.hi(r + s, o + c, i).lo(s, c, 0), e.tensor),
          f
        }
        return e
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 0)),
        this._calcOutputShape(e.tensor.shape),
        e = this._padInput(e);
        var n = ui(e.tensor.shape, 3),
        r = n[0],
        o = n[1],
        i = n[2],
        a = ui(this.poolSize, 2),
        s = a[0],
        u = a[1];
        this.output = new Jp([], this.outputShape);
        for (var c = new Jp([], [
          s,
          u,
          i
        ]), l = ui(this.inputPadding, 4), p = l[0], h = l[1], f = l[2], d = l[3], m = 0, y = 0; m <= r - s; m += this.strides[0], y++) {
          var v = 0;
          m < p ? v = p - m : m + s > r - h && (v = m + s - (r - h));
          for (var g = 0, _ = 0; g <= o - u; g += this.strides[1], _++) {
            var b = 0;
            g < f ? b = f - g : g + u > o - d && (b = g + u - (o - d));
            var x = (s - v) * (u - b);
            Yp.a.assign(c.tensor, e.tensor.hi(m + s, g + u, i).lo(m, g, 0));
            for (var w = 0; w < i; w++) 'max' === this.poolingFunc ? this.output.tensor.set(y, _, w, Yp.a.sup(c.tensor.pick(null, null, w)))  : 'average' === this.poolingFunc && this.output.tensor.set(y, _, w, Yp.a.sum(c.tensor.pick(null, null, w)) / x)
          }
        }
        'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(2, 0, 1))
      }
    },
    {
      key: '_im2col',
      value: function t(e) {
        var n = ui(e.tensor.shape, 3),
        r = n[0],
        o = n[1],
        i = n[2];
        this.tiledInput || (this.tiledInput = new Jp([], [
          r * o,
          i
        ]));
        for (var a = new Jp([], [
          r,
          o
        ]), s = new Jp([], [
          r * o
        ]), u = 0; u < i; u++) Yp.a.assign(a.tensor, e.tensor.pick(null, null, u)),
        s.replaceTensorData(a.tensor.data),
        Yp.a.assign(this.tiledInput.tensor.pick(null, u), s.tensor);
        return this.tiledInput
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        if (!this.poolIndexMap) {
          for (var e = this.inputShape[0], n = this.inputShape[1], r = new Jp([], [
            e,
            n
          ]), o = 0, i = 0; i < e; i++) for (var a = 0; a < n; a++) r.tensor.set(i, a, o),
          o += 1;
          if ('same' === this.padding) {
            var s = ui(this.inputPadding, 4),
            u = s[0],
            c = s[1],
            l = s[2],
            p = s[3];
            e = e + u + c,
            n = n + l + p;
            var h = new Jp([], [
              e,
              n
            ]);
            Yp.a.assigns(h.tensor, - 1),
            Yp.a.assign(h.tensor.hi(this.inputShape[0] + u, this.inputShape[1] + l).lo(u, l), r.tensor),
            r.tensor = h.tensor
          }
          var f = ui(this.poolSize, 2),
          d = f[0],
          m = f[1],
          y = this.outputShape[0],
          v = this.outputShape[1];
          this.poolIndexMap = new Jp([], [
            y * v,
            d * m
          ], {
            type: Int32Array
          });
          for (var g = new Jp([], [
            d,
            m
          ]), _ = 0, b = 0, x = e - d; b <= x; b += this.strides[0]) for (var w = 0, S = n - m; w <= S; w += this.strides[1]) Yp.a.assign(g.tensor, r.tensor.hi(b + d, w + m).lo(b, w)),
          this.poolIndexMap.tensor.data.set(g.tensor.data, _),
          _ += d * m;
          this.poolIndexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        if (e.is2DReshaped || e.is2DSquareReshaped ? this.inputShape = e.originalShape : ('channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 0)), this.inputShape = e.tensor.shape, this._im2col(e), this.tiledInput.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        })), this._calcOutputShape(this.inputShape), this._createIndexMap(), !this.output) {
          var n = ui(this.outputShape, 3),
          r = n[0],
          o = n[1],
          i = n[2],
          a = [
            r * o,
            i
          ];
          this.output = new Jp([], a),
          this.output.createGLTexture({
            type: '2d',
            format: 'float',
            supportsTextureFragments: !0
          }),
          this.output.is2DReshaped = !0,
          this.output.originalShape = this.outputShape,
          this.output.indicesForReshaped = h(this.outputShape, !1, - 1)
        }
        var s = e.is2DReshaped || e.is2DSquareReshaped ? e : this.tiledInput,
        u = this.poolSize[0] * this.poolSize[1],
        c = 'max' === this.poolingFunc,
        l = [
          {
            value: this.output.glTextureShape[1],
            type: 'int',
            name: 'channels'
          },
          {
            value: u,
            type: 'int',
            name: 'poolSize'
          },
          {
            value: + c,
            type: 'bool',
            name: 'isMaxPooling'
          }
        ];
        s.glTextureFragments ? (s.convert2DRowFragmentedGLTextureToColStack(), Up.runProgram({
          program: this.poolingFragmentsProgram,
          output: this.output,
          inputs: [
            {
              input: s,
              name: 'x'
            },
            {
              input: this.poolIndexMap,
              name: 'poolIndexMap'
            }
          ],
          uniforms: l,
          supportsTextureFragments: !0
        }), s.removeGLTextureFragmentsAsColStack())  : Up.runProgram({
          program: this.poolingProgram,
          output: this.output,
          inputs: [
            {
              input: s,
              name: 'x'
            },
            {
              input: this.poolIndexMap,
              name: 'poolIndexMap'
            }
          ],
          uniforms: l,
          supportsTextureFragments: !0
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.reshapeFrom2D(), 'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(2, 0, 1)))
      }
    }
  ]),
  e
}(Bp),
cd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return mi(this, e),
    t = yi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'MaxPooling2D',
    t.poolingFunc = 'max',
    t
  }
  return vi(e, t),
  e
}(ud),
ld = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D poolIndexMap;\nuniform int channels;\nuniform int poolSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  int out_x = int(float(channels) * outTex.x);\n  int out_y = int(float(textureSize(poolIndexMap, 0)[1]) * outTex.y);\n\n  float val = 0.;\n  int count = 0;\n  for (int i = 0; i < poolSize; ++i) {\n    int poolIndex = texelFetch(poolIndexMap, ivec2(i, out_y), 0).r;\n    if (poolIndex != -1) {\n      float val2 = texelFetch(x, ivec2(out_x, poolIndex), 0).r;\n      if (isMaxPooling) {\n        if (count == 0 || val2 > val) {\n          val = val2;\n        }\n      } else {\n        val += val2;\n      }\n      count += 1;\n    }\n  }\n\n  if (!isMaxPooling) {\n    val /= float(count);\n  }\n\n  outColor = vec4(val);\n}\n',
pd = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D poolIndexMap;\nuniform int channels;\nuniform int poolSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 inputSize = textureSize(x, 0);\n  ivec2 outputSize = textureSize(poolIndexMap, 0);\n  int out_x = int(float(channels) * outTex.x);\n  int out_y = int(float(outputSize[1]) * outTex.y);\n\n  float val = 0.;\n  int count = 0;\n  for (int i = 0; i < poolSize; ++i) {\n    int poolIndex = texelFetch(poolIndexMap, ivec2(i, out_y), 0).r;\n    int fragmentIndex = int(floor(float(poolIndex) / float(inputSize[1])));\n    if (poolIndex != -1) {\n      poolIndex = int(mod(float(poolIndex), float(inputSize[1])));\n      float val2 = texelFetch(x, ivec2(fragmentIndex * channels + out_x, poolIndex), 0).r;\n      if (isMaxPooling) {\n        if (count == 0 || val2 > val) {\n          val = val2;\n        }\n      } else {\n        val += val2;\n      }\n      count += 1;\n    }\n  }\n\n  if (!isMaxPooling) {\n    val /= float(count);\n  }\n\n  outColor = vec4(val);\n}\n',
hd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    xi(this, e),
    t = Ti(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = '_Pooling3D';
    var r = n.pool_size,
    o = void 0 === r ? [
      2,
      2,
      2
    ] : r,
    i = n.strides,
    a = void 0 === i ? null : i,
    s = n.padding,
    u = void 0 === s ? 'valid' : s,
    c = n.data_format,
    l = void 0 === c ? 'channels_last' : c;
    return Array.isArray(o) ? t.poolSize = o : t.poolSize = [
      o,
      o,
      o
    ],
    Array.isArray(a) ? t.strides = a : t.strides = null !== a ? [
      a,
      a,
      a
    ] : t.poolSize,
    t.padding = u,
    t.dataFormat = l,
    t.poolingFunc = 'max',
    t.description = 'pool size '.concat(t.poolSize.join('x')),
    t.description += t.strides.some(function (t) {
      return t > 1
    }) ? ', '.concat(t.strides.join('x'), ' striding')  : '',
    t.description += 'valid' === t.padding ? ', no border padding' : ', pad to same borders',
    t.gpu && (t.poolingProgram = Up.compileProgram(ld), t.poolingFragmentsProgram = Up.compileProgram(pd)),
    t
  }
  return Pi(e, t),
  Si(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_calcOutputShape',
      value: function t(e) {
        if (!this.outputShape || !this.inputPadding) {
          var n = bi(e, 4),
          r = n[0],
          o = n[1],
          i = n[2],
          a = n[3],
          s = bi(this.poolSize, 3),
          u = s[0],
          c = s[1],
          l = s[2],
          p = 'same' === this.padding ? Math.floor((r + this.strides[0] - 1) / this.strides[0])  : Math.floor((r - u + this.strides[0]) / this.strides[0]),
          h = 'same' === this.padding ? Math.floor((o + this.strides[1] - 1) / this.strides[1])  : Math.floor((o - c + this.strides[1]) / this.strides[1]),
          f = 'same' === this.padding ? Math.floor((i + this.strides[2] - 1) / this.strides[2])  : Math.floor((i - l + this.strides[2]) / this.strides[2]),
          d = 'same' === this.padding ? Math.max(0, Math.floor((p - 1) * this.strides[0] + u - r))  : 0,
          m = 'same' === this.padding ? Math.max(0, Math.floor((h - 1) * this.strides[1] + c - o))  : 0,
          y = 'same' === this.padding ? Math.max(0, Math.floor((f - 1) * this.strides[2] + l - i))  : 0,
          v = Math.floor(d / 2),
          g = d - v,
          _ = Math.floor(m / 2),
          b = m - _,
          x = Math.floor(y / 2),
          w = y - x;
          this.outputShape = [
            p,
            h,
            f,
            a
          ],
          this.inputPadding = [
            v,
            g,
            _,
            b,
            x,
            w
          ]
        }
      }
    },
    {
      key: '_padInput',
      value: function t(e) {
        if ('same' === this.padding) {
          var n = bi(e.tensor.shape, 4),
          r = n[0],
          o = n[1],
          i = n[2],
          a = n[3],
          s = bi(this.inputPadding, 6),
          u = s[0],
          c = s[1],
          l = s[2],
          p = s[3],
          h = s[4],
          f = s[5],
          d = r + u + c,
          m = o + l + p,
          y = i + h + f,
          v = new Jp([], [
            d,
            m,
            y,
            a
          ]);
          return 'max' === this.poolingFunc && Yp.a.assigns(v.tensor, Number.NEGATIVE_INFINITY),
          Yp.a.assign(v.tensor.hi(r + u, o + l, i + h, a).lo(u, l, h, 0), e.tensor),
          v
        }
        return e
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 3, 0)),
        this._calcOutputShape(e.tensor.shape),
        e = this._padInput(e);
        var n = bi(e.tensor.shape, 4),
        r = n[0],
        o = n[1],
        i = n[2],
        a = n[3],
        s = bi(this.poolSize, 3),
        u = s[0],
        c = s[1],
        l = s[2];
        this.output = new Jp([], this.outputShape);
        for (var p = new Jp([], [
          u,
          c,
          l,
          a
        ]), h = bi(this.inputPadding, 6), f = h[0], d = h[1], m = h[2], y = h[3], v = h[4], g = h[5], _ = 0, b = 0; _ <= r - u; _ += this.strides[0], b++) {
          var x = 0;
          _ < f ? x = f - _ : _ + u > r - d && (x = _ + u - (r - d));
          for (var w = 0, S = 0; w <= o - c; w += this.strides[1], S++) {
            var T = 0;
            w < m ? T = m - w : w + c > o - y && (T = w + c - (o - y));
            for (var P = 0, C = 0; P <= i - l; P += this.strides[2], C++) {
              var k = 0;
              P < v ? k = v - P : P + l > i - g && (k = P + l - (i - g));
              var O = (u - x) * (c - T) * (l - k);
              Yp.a.assign(p.tensor, e.tensor.hi(_ + u, w + c, P + l, a).lo(_, w, P, 0));
              for (var E = 0; E < a; E++) 'max' === this.poolingFunc ? this.output.tensor.set(b, S, C, E, Yp.a.sup(p.tensor.pick(null, null, null, E)))  : 'average' === this.poolingFunc && this.output.tensor.set(b, S, C, E, Yp.a.sum(p.tensor.pick(null, null, null, E)) / O)
            }
          }
        }
        'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(3, 0, 1, 2))
      }
    },
    {
      key: '_vol2col',
      value: function t(e) {
        var n = bi(e.tensor.shape, 4),
        r = n[0],
        o = n[1],
        i = n[2],
        a = n[3];
        this.tiledInput || (this.tiledInput = new Jp([], [
          r * o * i,
          a
        ]));
        for (var s = new Jp([], [
          r,
          o,
          i
        ]), u = new Jp([], [
          r * o * i
        ]), c = 0; c < a; c++) Yp.a.assign(s.tensor, e.tensor.pick(null, null, null, c)),
        u.replaceTensorData(s.tensor.data),
        Yp.a.assign(this.tiledInput.tensor.pick(null, c), u.tensor);
        return this.tiledInput
      }
    },
    {
      key: '_createIndexMap',
      value: function t() {
        if (!this.poolIndexMap) {
          for (var e = this.inputShape[0], n = this.inputShape[1], r = this.inputShape[2], o = new Jp([], [
            e,
            n,
            r
          ]), i = 0, a = 0; a < e; a++) for (var s = 0; s < n; s++) for (var u = 0; u < r; u++) o.tensor.set(a, s, u, i),
          i += 1;
          if ('same' === this.padding) {
            var c = bi(this.inputPadding, 6),
            l = c[0],
            p = c[1],
            h = c[2],
            f = c[3],
            d = c[4],
            m = c[5];
            e = e + l + p,
            n = n + h + f,
            r = r + d + m;
            var y = new Jp([], [
              e,
              n,
              r
            ]);
            Yp.a.assigns(y.tensor, - 1),
            Yp.a.assign(y.tensor.hi(this.inputShape[0] + l, this.inputShape[1] + h, this.inputShape[2] + d).lo(l, h, d), o.tensor),
            o.tensor = y.tensor
          }
          var v = bi(this.poolSize, 3),
          g = v[0],
          _ = v[1],
          b = v[2],
          x = this.outputShape[0],
          w = this.outputShape[1],
          S = this.outputShape[2];
          this.poolIndexMap = new Jp([], [
            x * w * S,
            g * _ * b
          ], {
            type: Int32Array
          });
          for (var T = new Jp([], [
            g,
            _,
            b
          ]), P = 0, C = 0, k = e - g; C <= k; C += this.strides[0]) for (var O = 0, E = n - _; O <= E; O += this.strides[1]) for (var j = 0, A = r - b; j <= A; j += this.strides[2]) Yp.a.assign(T.tensor, o.tensor.hi(C + g, O + _, j + b).lo(C, O, j)),
          this.poolIndexMap.tensor.data.set(T.tensor.data, P),
          P += g * _ * b;
          this.poolIndexMap.createGLTexture({
            type: '2d',
            format: 'int',
            supportsTextureFragments: !0
          })
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        if (e.is2DReshaped || e.is2DSquareReshaped ? this.inputShape = e.originalShape : ('channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 3, 0)), this.inputShape = e.tensor.shape, this._vol2col(e), this.tiledInput.createGLTexture({
          type: '2d',
          format: 'float',
          supportsTextureFragments: !0
        })), this._calcOutputShape(this.inputShape), this._createIndexMap(), !this.output) {
          var n = bi(this.outputShape, 4),
          r = n[0],
          o = n[1],
          i = n[2],
          a = n[3],
          s = [
            r * o * i,
            a
          ];
          this.output = new Jp([], s),
          this.output.createGLTexture({
            type: '2d',
            format: 'float',
            supportsTextureFragments: !0
          }),
          this.output.is2DReshaped = !0,
          this.output.originalShape = this.outputShape,
          this.output.indicesForReshaped = h(this.outputShape, !1, - 1)
        }
        var u = e.is2DReshaped || e.is2DSquareReshaped ? e : this.tiledInput,
        c = this.poolSize[0] * this.poolSize[1] * this.poolSize[2],
        l = 'max' === this.poolingFunc,
        p = [
          {
            value: this.output.glTextureShape[1],
            type: 'int',
            name: 'channels'
          },
          {
            value: c,
            type: 'int',
            name: 'poolSize'
          },
          {
            value: + l,
            type: 'bool',
            name: 'isMaxPooling'
          }
        ];
        u.glTextureFragments ? (u.convert2DRowFragmentedGLTextureToColStack(), Up.runProgram({
          program: this.poolingFragmentsProgram,
          output: this.output,
          inputs: [
            {
              input: u,
              name: 'x'
            },
            {
              input: this.poolIndexMap,
              name: 'poolIndexMap'
            }
          ],
          uniforms: p,
          supportsTextureFragments: !0
        }), u.removeGLTextureFragmentsAsColStack())  : Up.runProgram({
          program: this.poolingProgram,
          output: this.output,
          inputs: [
            {
              input: u,
              name: 'x'
            },
            {
              input: this.poolIndexMap,
              name: 'poolIndexMap'
            }
          ],
          uniforms: p
        }),
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.reshapeFrom2D(), 'channels_first' === this.dataFormat && (this.output.tensor = this.output.tensor.transpose(3, 0, 1, 2)))
      }
    }
  ]),
  e
}(Bp),
fd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return ki(this, e),
    t = Oi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'MaxPooling3D',
    t.poolingFunc = 'max',
    t
  }
  return Ei(e, t),
  e
}(hd),
dd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Ai(this, e),
    t = Fi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'AveragePooling1D',
    t.poolingFunc = 'average',
    t
  }
  return Mi(e, t),
  e
}(od),
md = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Di(this, e),
    t = Ii(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'AveragePooling2D',
    t.poolingFunc = 'average',
    t
  }
  return Li(e, t),
  e
}(ud),
yd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Ui(this, e),
    t = Gi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'AveragePooling3D',
    t.poolingFunc = 'average',
    t
  }
  return Ni(e, t),
  e
}(hd),
vd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int channelDataSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(x, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  if (isMaxPooling) {\n    // GlobalMaxPooling\n    float maxval = 0.0;\n    for (int j = 0; j < size[1]; ++j) {\n      float val = texelFetch(x, ivec2(out_x, j), 0).r;\n      if (j == 0 || val > maxval) {\n        maxval = val;\n      }\n    }\n    outColor = vec4(maxval);\n  } else {\n    // GlobalAveragePooling\n    float sum = 0.0;\n    for (int j = 0; j < size[1]; ++j) {\n      float val = texelFetch(x, ivec2(out_x, j), 0).r;\n      sum += val;\n    }\n    outColor = vec4(sum / float(channelDataSize));\n  }\n}\n',
gd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Hi(this, e),
    t = Yi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = '_GlobalPooling1D';
    var r = n.data_format,
    o = void 0 === r ? 'channels_last' : r;
    return t.dataFormat = o,
    t.poolingFunc = 'max',
    t.gpu && (t.poolingProgram = Up.compileProgram(vd)),
    t
  }
  return $i(e, t),
  Xi(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        var n = Vi(e.tensor.shape, 2),
        r = n[0],
        o = n[1];
        this.output = new Jp([], [
          o
        ]);
        for (var i = 0, a = o; i < a; i++) 'max' === this.poolingFunc ? this.output.tensor.set(i, Yp.a.sup(e.tensor.pick(null, i)))  : 'average' === this.poolingFunc && this.output.tensor.set(i, Yp.a.sum(e.tensor.pick(null, i)) / r)
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        }),
        this.inputShape = e.tensor.shape,
        this.output || (this.output = new Jp([], [
          this.inputShape[1]
        ]), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        var n = 'max' === this.poolingFunc;
        Up.runProgram({
          program: this.poolingProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: this.inputShape[0],
              type: 'int',
              name: 'channelDataSize'
            },
            {
              value: + n,
              type: 'bool',
              name: 'isMaxPooling'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
_d = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Ji(this, e),
    t = Qi(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'GlobalMaxPooling1D',
    t.poolingFunc = 'max',
    t
  }
  return Zi(e, t),
  e
}(gd),
bd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int channelDataSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(x, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  if (isMaxPooling) {\n    // GlobalMaxPooling\n    float maxval = 0.0;\n    for (int j = 0; j < size[1]; ++j) {\n      float val = texelFetch(x, ivec2(out_x, j), 0).r;\n      if (j == 0 || val > maxval) {\n        maxval = val;\n      }\n    }\n    outColor = vec4(maxval);\n  } else {\n    // GlobalAveragePooling\n    float sum = 0.0;\n    for (int j = 0; j < size[1]; ++j) {\n      float val = texelFetch(x, ivec2(out_x, j), 0).r;\n      sum += val;\n    }\n    outColor = vec4(sum / float(channelDataSize));\n  }\n}\n',
xd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    ra(this, e),
    t = aa(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = '_GlobalPooling2D';
    var r = n.data_format,
    o = void 0 === r ? 'channels_last' : r;
    return t.dataFormat = o,
    t.poolingFunc = 'max',
    t.gpu && (t.poolingProgram = Up.compileProgram(bd)),
    t
  }
  return sa(e, t),
  ia(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 0));
        var n = na(e.tensor.shape, 3),
        r = n[0],
        o = n[1],
        i = n[2];
        this.output = new Jp([], [
          i
        ]);
        for (var a = 0, s = i; a < s; a++) 'max' === this.poolingFunc ? this.output.tensor.set(a, Yp.a.sup(e.tensor.pick(null, null, a)))  : 'average' === this.poolingFunc && this.output.tensor.set(a, Yp.a.sum(e.tensor.pick(null, null, a)) / (r * o))
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.is2DReshaped || e.is2DSquareReshaped ? this.inputShape = e.originalShape : ('channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 0)), this.inputShape = e.tensor.shape, e.reshapeTo2D(), e.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.output || (this.output = new Jp([], [
          this.inputShape[2]
        ]), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        var n = 'max' === this.poolingFunc;
        Up.runProgram({
          program: this.poolingProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: this.inputShape[0] * this.inputShape[1],
              type: 'int',
              name: 'channelDataSize'
            },
            {
              value: + n,
              type: 'bool',
              name: 'isMaxPooling'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
wd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return ca(this, e),
    t = la(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'GlobalMaxPooling2D',
    t.poolingFunc = 'max',
    t
  }
  return pa(e, t),
  e
}(xd),
Sd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int channelDataSize;\nuniform bool isMaxPooling;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(x, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  if (isMaxPooling) {\n    // GlobalMaxPooling\n    float maxval = 0.0;\n    for (int j = 0; j < size[1]; ++j) {\n      float val = texelFetch(x, ivec2(out_x, j), 0).r;\n      if (j == 0 || val > maxval) {\n        maxval = val;\n      }\n    }\n    outColor = vec4(maxval);\n  } else {\n    // GlobalAveragePooling\n    float sum = 0.0;\n    for (int j = 0; j < size[1]; ++j) {\n      float val = texelFetch(x, ivec2(out_x, j), 0).r;\n      sum += val;\n    }\n    outColor = vec4(sum / float(channelDataSize));\n  }\n}\n',
Td = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    ma(this, e),
    t = ga(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = '_GlobalPooling3D';
    var r = n.data_format,
    o = void 0 === r ? 'channels_last' : r;
    return t.dataFormat = o,
    t.poolingFunc = 'max',
    t.gpu && (t.poolingProgram = Up.compileProgram(Sd)),
    t
  }
  return _a(e, t),
  va(e, [
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        'channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 3, 0));
        var n = da(e.tensor.shape, 4),
        r = n[0],
        o = n[1],
        i = n[2],
        a = n[3];
        this.output = new Jp([], [
          a
        ]);
        for (var s = 0, u = a; s < u; s++) 'max' === this.poolingFunc ? this.output.tensor.set(s, Yp.a.sup(e.tensor.pick(null, null, null, s)))  : 'average' === this.poolingFunc && this.output.tensor.set(s, Yp.a.sum(e.tensor.pick(null, null, null, s)) / (r * o * i))
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.is2DReshaped || e.is2DSquareReshaped ? this.inputShape = e.originalShape : ('channels_first' === this.dataFormat && (e.tensor = e.tensor.transpose(1, 2, 3, 0)), this.inputShape = e.tensor.shape, e.reshapeTo2D(), e.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.output || (this.output = new Jp([], [
          this.inputShape[3]
        ]), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        var n = 'max' === this.poolingFunc;
        Up.runProgram({
          program: this.poolingProgram,
          output: this.output,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: this.inputShape[0] * this.inputShape[1] * this.inputShape[2],
              type: 'int',
              name: 'channelDataSize'
            },
            {
              value: + n,
              type: 'bool',
              name: 'isMaxPooling'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
Pd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return xa(this, e),
    t = wa(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'GlobalMaxPooling3D',
    t.poolingFunc = 'max',
    t
  }
  return Sa(e, t),
  e
}(Td),
Cd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Pa(this, e),
    t = Ca(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'GlobalAveragePooling1D',
    t.poolingFunc = 'average',
    t
  }
  return ka(e, t),
  e
}(gd),
kd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Ea(this, e),
    t = ja(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'GlobalAveragePooling2D',
    t.poolingFunc = 'average',
    t
  }
  return Aa(e, t),
  e
}(xd),
Od = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    return Ma(this, e),
    t = Ra(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'GlobalAveragePooling3D',
    t.poolingFunc = 'average',
    t
  }
  return Da(e, t),
  e
}(Td),
Ed = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D source;\nout vec4 outColor;\n\nvoid main(void) {\n  outColor = texture(source, vec2(outTex.x, outTex.y));\n}\n',
jd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D A;\nuniform sampler2D B;\nuniform sampler2D C;\nuniform bool addC;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 A_size = textureSize(A, 0);\n  ivec2 B_size = textureSize(B, 0);\n  int out_x = int(float(B_size[0]) * outTex.x);\n  int out_y = int(float(A_size[1]) * outTex.y);\n  int commonDim = A_size[0];\n\n  float sum = 0.;\n  for (int i = 0; i < commonDim; ++i) {\n    float a = texelFetch(A, ivec2(i, out_y), 0).r;\n    float b = texelFetch(B, ivec2(out_x, i), 0).r;\n    sum += a * b;\n  }\n\n  if (addC) {\n    sum += texelFetch(C, ivec2(out_x, 0), 0).r;\n  }\n\n  outColor = vec4(sum);\n}\n',
Ad = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D t1;\nuniform sampler2D t2;\nuniform sampler2D bias;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(bias, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float t1_val = texelFetch(t1, ivec2(out_x, out_y), 0).r;\n  float t2_val = texelFetch(t2, ivec2(out_x, out_y), 0).r;\n  float bias_val = texelFetch(bias, ivec2(out_x, out_y), 0).r;\n\n  outColor = vec4(t1_val + t2_val + bias_val);\n}\n',
Fd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int index;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(x, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n\n  outColor = vec4(texelFetch(x, ivec2(out_x, index), 0).r);\n}\n',
Md = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform sampler2D y;\nuniform int index;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(y, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  if (out_y == index) {\n    outColor = vec4(texelFetch(x, ivec2(out_x, 0), 0).r);\n  } else {\n    outColor = vec4(texelFetch(y, ivec2(out_x, out_y), 0).r);\n  }\n}\n',
Rd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    La(this, e),
    t = Ga(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    Object.defineProperty(qa(t), '_combine', {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: th() ({
        args: [
          'array',
          'array',
          'array',
          'array'
        ],
        body: function t(e, n, r, o) {
          e = n + r + o
        }
      })
    }),
    t.layerClass = 'SimpleRNN';
    var r = n.units,
    o = void 0 === r ? 1 : r,
    i = n.activation,
    a = void 0 === i ? 'tanh' : i,
    s = n.use_bias,
    u = void 0 === s || s,
    c = n.return_sequences,
    l = void 0 !== c && c,
    p = n.go_backwards,
    h = void 0 !== p && p,
    f = n.stateful,
    d = void 0 !== f && f;
    return t.units = o,
    t.activation = a,
    t.activationFunc = Es[a],
    t.use_bias = u,
    t.returnSequences = l,
    t.goBackwards = h,
    t.stateful = d,
    t.params = t.use_bias ? [
      'kernel',
      'recurrent_kernel',
      'bias'
    ] : [
      'kernel',
      'recurrent_kernel'
    ],
    t.description = 'output dimensions: '.concat(t.units),
    t.description += 'linear' !== t.activation ? ', '.concat(t.activation, ' activation')  : '',
    t.description += t.returnSequences ? ', return sequences' : '',
    t.description += t.goBackwards ? ', backward direction' : '',
    t.description += t.stateful ? ', stateful' : '',
    t.gpu && (t.copyTextureProgram = Up.compileProgram(Ed), t.matMulProgram = Up.compileProgram(jd), t.activationProgram = Up.compileProgram(js[t.activation]), t.gateSummationProgram = Up.compileProgram(Ad), t.timestepReadProgram = Up.compileProgram(Fd), t.timestepWriteProgram = Up.compileProgram(Md)),
    t
  }
  return Ba(e, t),
  Ua(e, [
    {
      key: 'setWeights',
      value: function t(n) {
        Na(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'setWeights', this).call(this, n),
        this.use_bias || (this.weights.bias = new Jp([], [
          this.units
        ]), this.gpu && this.weights.bias.createGLTexture({
          type: '2d',
          format: 'float'
        }))
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        var n = this,
        r = this.units,
        o = this.stateful && this.currentHiddenState ? this.currentHiddenState : new Jp([], [
          r
        ]),
        i = new Jp([], [
          r
        ]),
        a = new Jp([], [
          r
        ]),
        s = new Jp([], [
          r
        ]);
        this.hiddenStateSequence = new Jp([], [
          e.tensor.shape[0],
          r
        ]);
        for (var u = new Jp([], [
          e.tensor.shape[1]
        ]), c = function t() {
          Yp.a.assign(s.tensor, o.tensor),
          Object(yf.gemv) (1, n.weights.kernel.tensor.transpose(1, 0), u.tensor, 1, i.tensor),
          Object(yf.gemv) (1, n.weights.recurrent_kernel.tensor.transpose(1, 0), s.tensor, 1, a.tensor),
          n._combine(o.tensor, i.tensor, a.tensor, n.weights.bias.tensor),
          n.activationFunc(o)
        }, l = 0, p = e.tensor.shape[0]; l < p; l++) {
          var h = this.goBackwards ? p - l - 1 : l;
          Yp.a.assign(u.tensor, e.tensor.pick(h, null));
          [
            i,
            a
          ].forEach(function (t) {
            return Yp.a.assigns(t.tensor, 0)
          }),
          c(),
          this.returnSequences && Yp.a.assign(this.hiddenStateSequence.tensor.pick(l, null), o.tensor)
        }
        this.returnSequences ? this.output = this.hiddenStateSequence : this.output = o,
        this.stateful && (this.currentHiddenState = o)
      }
    },
    {
      key: '_stepGPU',
      value: function t() {
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.previousHiddenState,
          inputs: [
            {
              input: this.currentHiddenState,
              name: 'source'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempXH,
          inputs: [
            {
              input: this.currentX,
              name: 'A'
            },
            {
              input: this.weights.kernel,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempHH,
          inputs: [
            {
              input: this.previousHiddenState,
              name: 'A'
            },
            {
              input: this.weights.recurrent_kernel,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateSummationProgram,
          output: this.currentHiddenStatePreactiv,
          inputs: [
            {
              input: this.tempXH,
              name: 't1'
            },
            {
              input: this.tempHH,
              name: 't2'
            },
            {
              input: this.weights.bias,
              name: 'bias'
            }
          ]
        }),
        'linear' !== this.activation ? Up.runProgram({
          program: this.activationProgram,
          output: this.currentHiddenState,
          inputs: [
            {
              input: this.currentHiddenStatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentHiddenState = this.currentHiddenStatePreactiv
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        });
        var n = this.units;
        this.currentHiddenState && this.stateful || (this.currentHiddenState = new Jp([], [
          n
        ]), this.currentHiddenState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentHiddenStatePreactiv || (this.currentHiddenStatePreactiv = new Jp([], [
          n
        ]), this.currentHiddenStatePreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempXH || (this.tempXH = new Jp([], [
          n
        ]), this.tempXH.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempHH || (this.tempHH = new Jp([], [
          n
        ]), this.tempHH.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.previousHiddenState || (this.previousHiddenState = new Jp([], [
          n
        ]), this.previousHiddenState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.hiddenStateSequence || (this.hiddenStateSequence = new Jp([], [
          e.glTextureShape[0],
          n
        ]), this.hiddenStateSequence.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.hiddenStateSequenceCopy || (this.hiddenStateSequenceCopy = new Jp([], [
          e.glTextureShape[0],
          n
        ]), this.hiddenStateSequenceCopy.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentX || (this.currentX = new Jp([], [
          e.glTextureShape[1]
        ]), this.currentX.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        for (var r = 0, o = e.glTextureShape[0]; r < o; r++) {
          var i = this.goBackwards ? o - r - 1 : r;
          Up.runProgram({
            program: this.timestepReadProgram,
            output: this.currentX,
            inputs: [
              {
                input: e,
                name: 'x'
              }
            ],
            uniforms: [
              {
                value: i,
                type: 'int',
                name: 'index'
              }
            ]
          }),
          this._stepGPU(),
          this.returnSequences && (Up.runProgram({
            program: this.copyTextureProgram,
            output: this.hiddenStateSequenceCopy,
            inputs: [
              {
                input: this.hiddenStateSequence,
                name: 'source'
              }
            ]
          }), Up.runProgram({
            program: this.timestepWriteProgram,
            output: this.hiddenStateSequence,
            inputs: [
              {
                input: this.currentHiddenState,
                name: 'x'
              },
              {
                input: this.hiddenStateSequenceCopy,
                name: 'y'
              }
            ],
            uniforms: [
              {
                value: r,
                type: 'int',
                name: 'index'
              }
            ]
          }))
        }
        this.returnSequences ? this.output = this.hiddenStateSequence : this.output = this.currentHiddenState,
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
Dd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D source;\nout vec4 outColor;\n\nvoid main(void) {\n  outColor = texture(source, vec2(outTex.x, outTex.y));\n}\n',
Id = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D A;\nuniform sampler2D B;\nuniform sampler2D C;\nuniform bool addC;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 A_size = textureSize(A, 0);\n  ivec2 B_size = textureSize(B, 0);\n  int out_x = int(float(B_size[0]) * outTex.x);\n  int out_y = int(float(A_size[1]) * outTex.y);\n  int commonDim = A_size[0];\n\n  float sum = 0.;\n  for (int i = 0; i < commonDim; ++i) {\n    float a = texelFetch(A, ivec2(i, out_y), 0).r;\n    float b = texelFetch(B, ivec2(out_x, i), 0).r;\n    sum += a * b;\n  }\n\n  if (addC) {\n    sum += texelFetch(C, ivec2(out_x, 0), 0).r;\n  }\n\n  outColor = vec4(sum);\n}\n',
Ld = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D t1;\nuniform sampler2D t2;\nuniform sampler2D bias;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(bias, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float t1_val = texelFetch(t1, ivec2(out_x, out_y), 0).r;\n  float t2_val = texelFetch(t2, ivec2(out_x, out_y), 0).r;\n  float bias_val = texelFetch(bias, ivec2(out_x, out_y), 0).r;\n\n  outColor = vec4(t1_val + t2_val + bias_val);\n}\n',
zd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D t1;\nuniform sampler2D t2;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(t1, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float t1_val = texelFetch(t1, ivec2(out_x, out_y), 0).r;\n  float t2_val = texelFetch(t2, ivec2(out_x, out_y), 0).r;\n\n  outColor = vec4(t1_val * t2_val);\n}\n',
Ud = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int index;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(x, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n\n  outColor = vec4(texelFetch(x, ivec2(out_x, index), 0).r);\n}\n',
Gd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform sampler2D y;\nuniform int index;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(y, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  if (out_y == index) {\n    outColor = vec4(texelFetch(x, ivec2(out_x, 0), 0).r);\n  } else {\n    outColor = vec4(texelFetch(y, ivec2(out_x, out_y), 0).r);\n  }\n}\n',
Nd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D c;\nuniform sampler2D ctm1;\nuniform sampler2D i;\nuniform sampler2D f;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(c, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float c_val = texelFetch(c, ivec2(out_x, out_y), 0).r;\n  float ctm1_val = texelFetch(ctm1, ivec2(out_x, out_y), 0).r;\n  float i_val = texelFetch(i, ivec2(out_x, out_y), 0).r;\n  float f_val = texelFetch(f, ivec2(out_x, out_y), 0).r;\n\n  outColor = vec4(c_val * i_val + ctm1_val * f_val);\n}\n',
Bd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Ha(this, e),
    t = Ya(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    Object.defineProperty(Ja(t), '_combine', {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: th() ({
        args: [
          'array',
          'array',
          'array',
          'array'
        ],
        body: function t(e, n, r, o) {
          e = n + r + o
        }
      })
    }),
    Object.defineProperty(Ja(t), '_update', {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: th() ({
        args: [
          'array',
          'array',
          'array',
          'array'
        ],
        body: function t(e, n, r, o) {
          e = e * r + n * o
        }
      })
    }),
    t.layerClass = 'LSTM';
    var r = n.units,
    o = void 0 === r ? 1 : r,
    i = n.activation,
    a = void 0 === i ? 'tanh' : i,
    s = n.use_bias,
    u = void 0 === s || s,
    c = n.recurrent_activation,
    l = void 0 === c ? 'hard_sigmoid' : c,
    p = n.return_sequences,
    h = void 0 !== p && p,
    f = n.go_backwards,
    d = void 0 !== f && f,
    m = n.stateful,
    y = void 0 !== m && m;
    return t.units = o,
    t.activation = a,
    t.recurrentActivation = l,
    t.activationFunc = Es[a],
    t.recurrentActivationFunc = Es[l],
    t.use_bias = u,
    t.returnSequences = h,
    t.goBackwards = d,
    t.stateful = y,
    t.params = t.use_bias ? [
      'kernel',
      'recurrent_kernel',
      'bias'
    ] : [
      'kernel',
      'recurrent_kernel'
    ],
    t.description = 'output dimensions: '.concat(t.units),
    t.description += 'linear' !== t.activation ? ', '.concat(t.activation, ' activation')  : '',
    t.description += 'linear' !== t.recurrentActivation ? ', '.concat(t.recurrentActivation, ' recurrent activation')  : '',
    t.description += t.returnSequences ? ', return sequences' : '',
    t.description += t.goBackwards ? ', backward direction' : '',
    t.description += t.stateful ? ', stateful' : '',
    t.gpu && (t.copyTextureProgram = Up.compileProgram(Dd), t.matMulProgram = Up.compileProgram(Id), t.activationProgram = Up.compileProgram(js[t.activation]), t.recurrentActivationProgram = Up.compileProgram(js[t.recurrentActivation]), t.gateSummationProgram = Up.compileProgram(Ld), t.gateProductProgram = Up.compileProgram(zd), t.timestepReadProgram = Up.compileProgram(Ud), t.timestepWriteProgram = Up.compileProgram(Gd), t.updateProgram = Up.compileProgram(Nd)),
    t
  }
  return Ka(e, t),
  Xa(e, [
    {
      key: 'setWeights',
      value: function t(n) {
        var r = this;
        $a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'setWeights', this).call(this, n);
        var o = this.weights.kernel.tensor.shape;
        this.weights.W_i = new Jp([], [
          o[0],
          this.units
        ]),
        this.weights.W_f = new Jp([], [
          o[0],
          this.units
        ]),
        this.weights.W_c = new Jp([], [
          o[0],
          this.units
        ]),
        this.weights.W_o = new Jp([], [
          o[0],
          this.units
        ]),
        Yp.a.assign(this.weights.W_i.tensor, this.weights.kernel.tensor.hi(o[0], this.units).lo(0, 0)),
        Yp.a.assign(this.weights.W_f.tensor, this.weights.kernel.tensor.hi(o[0], 2 * this.units).lo(0, this.units)),
        Yp.a.assign(this.weights.W_c.tensor, this.weights.kernel.tensor.hi(o[0], 3 * this.units).lo(0, 2 * this.units)),
        Yp.a.assign(this.weights.W_o.tensor, this.weights.kernel.tensor.hi(o[0], 4 * this.units).lo(0, 3 * this.units));
        var i = this.weights.recurrent_kernel.tensor.shape;
        if (this.weights.U_i = new Jp([], [
          i[0],
          this.units
        ]), this.weights.U_f = new Jp([], [
          i[0],
          this.units
        ]), this.weights.U_c = new Jp([], [
          i[0],
          this.units
        ]), this.weights.U_o = new Jp([], [
          i[0],
          this.units
        ]), Yp.a.assign(this.weights.U_i.tensor, this.weights.recurrent_kernel.tensor.hi(i[0], this.units).lo(0, 0)), Yp.a.assign(this.weights.U_f.tensor, this.weights.recurrent_kernel.tensor.hi(i[0], 2 * this.units).lo(0, this.units)), Yp.a.assign(this.weights.U_c.tensor, this.weights.recurrent_kernel.tensor.hi(i[0], 3 * this.units).lo(0, 2 * this.units)), Yp.a.assign(this.weights.U_o.tensor, this.weights.recurrent_kernel.tensor.hi(i[0], 4 * this.units).lo(0, 3 * this.units)), this.weights.b_i = new Jp([], [
          this.units
        ]), this.weights.b_f = new Jp([], [
          this.units
        ]), this.weights.b_c = new Jp([], [
          this.units
        ]), this.weights.b_o = new Jp([], [
          this.units
        ]), this.use_bias && (Yp.a.assign(this.weights.b_i.tensor, this.weights.bias.tensor.hi(this.units).lo(0)), Yp.a.assign(this.weights.b_f.tensor, this.weights.bias.tensor.hi(2 * this.units).lo(this.units)), Yp.a.assign(this.weights.b_c.tensor, this.weights.bias.tensor.hi(3 * this.units).lo(2 * this.units)), Yp.a.assign(this.weights.b_o.tensor, this.weights.bias.tensor.hi(4 * this.units).lo(3 * this.units))), this.gpu) {
          [
            'W_i',
            'W_f',
            'W_c',
            'W_o',
            'U_i',
            'U_f',
            'U_c',
            'U_o',
            'b_i',
            'b_f',
            'b_c',
            'b_o'
          ].forEach(function (t) {
            r.weights[t].createGLTexture({
              type: '2d',
              format: 'float'
            })
          })
        }
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        var n = this,
        r = this.weights.b_i.tensor.shape[0],
        o = this.weights.b_c.tensor.shape[0],
        i = this.weights.b_f.tensor.shape[0],
        a = this.weights.b_o.tensor.shape[0],
        s = new Jp([], [
          r
        ]),
        u = new Jp([], [
          r
        ]),
        c = new Jp([], [
          r
        ]),
        l = new Jp([], [
          i
        ]),
        p = new Jp([], [
          i
        ]),
        h = new Jp([], [
          i
        ]),
        f = new Jp([], [
          a
        ]),
        d = new Jp([], [
          a
        ]),
        m = new Jp([], [
          a
        ]),
        y = new Jp([], [
          o
        ]),
        v = new Jp([], [
          o
        ]),
        g = new Jp([], [
          o
        ]),
        _ = this.stateful && this.previousCandidate ? this.previousCandidate : new Jp([], [
          o
        ]),
        b = this.stateful && this.currentHiddenState ? this.currentHiddenState : new Jp([], [
          o
        ]),
        x = new Jp([], [
          o
        ]);
        this.hiddenStateSequence = new Jp([], [
          e.tensor.shape[0],
          o
        ]);
        for (var w = new Jp([], [
          e.tensor.shape[1]
        ]), S = function t() {
          Yp.a.assign(x.tensor, b.tensor),
          Object(yf.gemv) (1, n.weights.W_i.tensor.transpose(1, 0), w.tensor, 1, u.tensor),
          Object(yf.gemv) (1, n.weights.U_i.tensor.transpose(1, 0), x.tensor, 1, c.tensor),
          n._combine(s.tensor, u.tensor, c.tensor, n.weights.b_i.tensor),
          n.recurrentActivationFunc(s),
          Object(yf.gemv) (1, n.weights.W_f.tensor.transpose(1, 0), w.tensor, 1, p.tensor),
          Object(yf.gemv) (1, n.weights.U_f.tensor.transpose(1, 0), x.tensor, 1, h.tensor),
          n._combine(l.tensor, p.tensor, h.tensor, n.weights.b_f.tensor),
          n.recurrentActivationFunc(l),
          Object(yf.gemv) (1, n.weights.W_o.tensor.transpose(1, 0), w.tensor, 1, d.tensor),
          Object(yf.gemv) (1, n.weights.U_o.tensor.transpose(1, 0), x.tensor, 1, m.tensor),
          n._combine(f.tensor, d.tensor, m.tensor, n.weights.b_o.tensor),
          n.recurrentActivationFunc(f),
          Object(yf.gemv) (1, n.weights.W_c.tensor.transpose(1, 0), w.tensor, 1, v.tensor),
          Object(yf.gemv) (1, n.weights.U_c.tensor.transpose(1, 0), x.tensor, 1, g.tensor),
          n._combine(y.tensor, v.tensor, g.tensor, n.weights.b_c.tensor),
          n.activationFunc(y),
          n._update(y.tensor, _.tensor, s.tensor, l.tensor),
          Yp.a.assign(_.tensor, y.tensor),
          n.activationFunc(y),
          Yp.a.mul(b.tensor, f.tensor, y.tensor)
        }, T = 0, P = e.tensor.shape[0]; T < P; T++) {
          var C = this.goBackwards ? P - T - 1 : T;
          Yp.a.assign(w.tensor, e.tensor.pick(C, null));
          [
            u,
            c,
            p,
            h,
            d,
            m,
            v,
            g
          ].forEach(function (t) {
            return Yp.a.assigns(t.tensor, 0)
          }),
          S(),
          Yp.a.assign(this.hiddenStateSequence.tensor.pick(T, null), b.tensor)
        }
        this.returnSequences ? this.output = this.hiddenStateSequence : this.output = b,
        this.stateful && (this.previousCandidate = _, this.currentHiddenState = b)
      }
    },
    {
      key: '_stepGPU',
      value: function t() {
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.previousHiddenState,
          inputs: [
            {
              input: this.currentHiddenState,
              name: 'source'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempXI,
          inputs: [
            {
              input: this.currentX,
              name: 'A'
            },
            {
              input: this.weights.W_i,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempHI,
          inputs: [
            {
              input: this.previousHiddenState,
              name: 'A'
            },
            {
              input: this.weights.U_i,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateSummationProgram,
          output: this.currentInputGateStatePreactiv,
          inputs: [
            {
              input: this.tempXI,
              name: 't1'
            },
            {
              input: this.tempHI,
              name: 't2'
            },
            {
              input: this.weights.b_i,
              name: 'bias'
            }
          ]
        }),
        'linear' !== this.recurrentActivation ? Up.runProgram({
          program: this.recurrentActivationProgram,
          output: this.currentInputGateState,
          inputs: [
            {
              input: this.currentInputGateStatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentInputGateState = this.currentInputGateStatePreactiv,
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempXF,
          inputs: [
            {
              input: this.currentX,
              name: 'A'
            },
            {
              input: this.weights.W_f,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempHF,
          inputs: [
            {
              input: this.previousHiddenState,
              name: 'A'
            },
            {
              input: this.weights.U_f,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateSummationProgram,
          output: this.currentForgetGateStatePreactiv,
          inputs: [
            {
              input: this.tempXF,
              name: 't1'
            },
            {
              input: this.tempHF,
              name: 't2'
            },
            {
              input: this.weights.b_f,
              name: 'bias'
            }
          ]
        }),
        'linear' !== this.recurrentActivation ? Up.runProgram({
          program: this.recurrentActivationProgram,
          output: this.currentForgetGateState,
          inputs: [
            {
              input: this.currentForgetGateStatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentForgetGateState = this.currentForgetGateStatePreactiv,
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempXO,
          inputs: [
            {
              input: this.currentX,
              name: 'A'
            },
            {
              input: this.weights.W_o,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempHO,
          inputs: [
            {
              input: this.previousHiddenState,
              name: 'A'
            },
            {
              input: this.weights.U_o,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateSummationProgram,
          output: this.currentOutputGateStatePreactiv,
          inputs: [
            {
              input: this.tempXO,
              name: 't1'
            },
            {
              input: this.tempHO,
              name: 't2'
            },
            {
              input: this.weights.b_o,
              name: 'bias'
            }
          ]
        }),
        'linear' !== this.recurrentActivation ? Up.runProgram({
          program: this.recurrentActivationProgram,
          output: this.currentOutputGateState,
          inputs: [
            {
              input: this.currentOutputGateStatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentOutputGateState = this.currentOutputGateStatePreactiv,
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempXC,
          inputs: [
            {
              input: this.currentX,
              name: 'A'
            },
            {
              input: this.weights.W_c,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempHC,
          inputs: [
            {
              input: this.previousHiddenState,
              name: 'A'
            },
            {
              input: this.weights.U_c,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateSummationProgram,
          output: this.currentCandidatePreactiv,
          inputs: [
            {
              input: this.tempXC,
              name: 't1'
            },
            {
              input: this.tempHC,
              name: 't2'
            },
            {
              input: this.weights.b_c,
              name: 'bias'
            }
          ]
        }),
        'linear' !== this.activation ? Up.runProgram({
          program: this.activationProgram,
          output: this.currentCandidate,
          inputs: [
            {
              input: this.currentCandidatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentCandidate = this.currentCandidatePreactiv,
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.currentCandidateCopy,
          inputs: [
            {
              input: this.currentCandidate,
              name: 'source'
            }
          ]
        }),
        Up.runProgram({
          program: this.updateProgram,
          output: this.currentCandidate,
          inputs: [
            {
              input: this.currentCandidateCopy,
              name: 'c'
            },
            {
              input: this.previousCandidate,
              name: 'ctm1'
            },
            {
              input: this.currentInputGateState,
              name: 'i'
            },
            {
              input: this.currentForgetGateState,
              name: 'f'
            }
          ]
        }),
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.previousCandidate,
          inputs: [
            {
              input: this.currentCandidate,
              name: 'source'
            }
          ]
        }),
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.currentCandidatePreactiv,
          inputs: [
            {
              input: this.currentCandidate,
              name: 'source'
            }
          ]
        }),
        'linear' !== this.activation ? Up.runProgram({
          program: this.activationProgram,
          output: this.currentCandidate,
          inputs: [
            {
              input: this.currentCandidatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentCandidate = this.currentCandidatePreactiv,
        Up.runProgram({
          program: this.gateProductProgram,
          output: this.currentHiddenState,
          inputs: [
            {
              input: this.currentOutputGateState,
              name: 't1'
            },
            {
              input: this.currentCandidate,
              name: 't2'
            }
          ]
        })
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        });
        var n = this.weights.b_i.glTextureShape[1],
        r = this.weights.b_c.glTextureShape[1],
        o = this.weights.b_f.glTextureShape[1],
        i = this.weights.b_o.glTextureShape[1];
        this.currentInputGateState || (this.currentInputGateState = new Jp([], [
          n
        ]), this.currentInputGateState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentInputGateStatePreactiv || (this.currentInputGateStatePreactiv = new Jp([], [
          n
        ]), this.currentInputGateStatePreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempXI || (this.tempXI = new Jp([], [
          n
        ]), this.tempXI.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempHI || (this.tempHI = new Jp([], [
          n
        ]), this.tempHI.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentForgetGateState || (this.currentForgetGateState = new Jp([], [
          o
        ]), this.currentForgetGateState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentForgetGateStatePreactiv || (this.currentForgetGateStatePreactiv = new Jp([], [
          o
        ]), this.currentForgetGateStatePreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempXF || (this.tempXF = new Jp([], [
          o
        ]), this.tempXF.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempHF || (this.tempHF = new Jp([], [
          o
        ]), this.tempHF.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentOutputGateState || (this.currentOutputGateState = new Jp([], [
          i
        ]), this.currentOutputGateState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentOutputGateStatePreactiv || (this.currentOutputGateStatePreactiv = new Jp([], [
          i
        ]), this.currentOutputGateStatePreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempXO || (this.tempXO = new Jp([], [
          i
        ]), this.tempXO.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempHO || (this.tempHO = new Jp([], [
          i
        ]), this.tempHO.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentCandidate || (this.currentCandidate = new Jp([], [
          r
        ]), this.currentCandidate.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentCandidateCopy || (this.currentCandidateCopy = new Jp([], [
          r
        ]), this.currentCandidateCopy.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentCandidatePreactiv || (this.currentCandidatePreactiv = new Jp([], [
          r
        ]), this.currentCandidatePreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempXC || (this.tempXC = new Jp([], [
          r
        ]), this.tempXC.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempHC || (this.tempHC = new Jp([], [
          r
        ]), this.tempHC.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.previousCandidate && this.stateful || (this.previousCandidate = new Jp([], [
          r
        ]), this.previousCandidate.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentHiddenState && this.stateful || (this.currentHiddenState = new Jp([], [
          r
        ]), this.currentHiddenState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.previousHiddenState || (this.previousHiddenState = new Jp([], [
          r
        ]), this.previousHiddenState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.hiddenStateSequence || (this.hiddenStateSequence = new Jp([], [
          e.glTextureShape[0],
          r
        ]), this.hiddenStateSequence.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.hiddenStateSequenceCopy || (this.hiddenStateSequenceCopy = new Jp([], [
          e.glTextureShape[0],
          r
        ]), this.hiddenStateSequenceCopy.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentX || (this.currentX = new Jp([], [
          e.glTextureShape[1]
        ]), this.currentX.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        for (var a = 0, s = e.glTextureShape[0]; a < s; a++) {
          var u = this.goBackwards ? s - a - 1 : a;
          Up.runProgram({
            program: this.timestepReadProgram,
            output: this.currentX,
            inputs: [
              {
                input: e,
                name: 'x'
              }
            ],
            uniforms: [
              {
                value: u,
                type: 'int',
                name: 'index'
              }
            ]
          }),
          this._stepGPU(),
          this.returnSequences && (Up.runProgram({
            program: this.copyTextureProgram,
            output: this.hiddenStateSequenceCopy,
            inputs: [
              {
                input: this.hiddenStateSequence,
                name: 'source'
              }
            ]
          }), Up.runProgram({
            program: this.timestepWriteProgram,
            output: this.hiddenStateSequence,
            inputs: [
              {
                input: this.currentHiddenState,
                name: 'x'
              },
              {
                input: this.hiddenStateSequenceCopy,
                name: 'y'
              }
            ],
            uniforms: [
              {
                value: a,
                type: 'int',
                name: 'index'
              }
            ]
          }))
        }
        this.returnSequences ? this.output = this.hiddenStateSequence : this.output = this.currentHiddenState,
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
qd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D source;\nout vec4 outColor;\n\nvoid main(void) {\n  outColor = texture(source, vec2(outTex.x, outTex.y));\n}\n',
Vd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D A;\nuniform sampler2D B;\nuniform sampler2D C;\nuniform bool addC;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 A_size = textureSize(A, 0);\n  ivec2 B_size = textureSize(B, 0);\n  int out_x = int(float(B_size[0]) * outTex.x);\n  int out_y = int(float(A_size[1]) * outTex.y);\n  int commonDim = A_size[0];\n\n  float sum = 0.;\n  for (int i = 0; i < commonDim; ++i) {\n    float a = texelFetch(A, ivec2(i, out_y), 0).r;\n    float b = texelFetch(B, ivec2(out_x, i), 0).r;\n    sum += a * b;\n  }\n\n  if (addC) {\n    sum += texelFetch(C, ivec2(out_x, 0), 0).r;\n  }\n\n  outColor = vec4(sum);\n}\n',
Hd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D t1;\nuniform sampler2D t2;\nuniform sampler2D bias;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(bias, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float t1_val = texelFetch(t1, ivec2(out_x, out_y), 0).r;\n  float t2_val = texelFetch(t2, ivec2(out_x, out_y), 0).r;\n  float bias_val = texelFetch(bias, ivec2(out_x, out_y), 0).r;\n\n  outColor = vec4(t1_val + t2_val + bias_val);\n}\n',
Wd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D t1;\nuniform sampler2D t2;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(t1, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float t1_val = texelFetch(t1, ivec2(out_x, out_y), 0).r;\n  float t2_val = texelFetch(t2, ivec2(out_x, out_y), 0).r;\n\n  outColor = vec4(t1_val * t2_val);\n}\n',
Xd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int index;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(x, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n\n  outColor = vec4(texelFetch(x, ivec2(out_x, index), 0).r);\n}\n',
Yd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform sampler2D y;\nuniform int index;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(y, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  if (out_y == index) {\n    outColor = vec4(texelFetch(x, ivec2(out_x, 0), 0).r);\n  } else {\n    outColor = vec4(texelFetch(y, ivec2(out_x, out_y), 0).r);\n  }\n}\n',
$d = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D h;\nuniform sampler2D htm1;\nuniform sampler2D z;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(h, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float h_val = texelFetch(h, ivec2(out_x, out_y), 0).r;\n  float htm1_val = texelFetch(htm1, ivec2(out_x, out_y), 0).r;\n  float z_val = texelFetch(z, ivec2(out_x, out_y), 0).r;\n\n  outColor = vec4(h_val * (float(1.0) - z_val) + htm1_val * z_val);\n}\n',
Kd = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Za(this, e),
    t = ns(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    Object.defineProperty(is(t), '_combine', {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: th() ({
        args: [
          'array',
          'array',
          'array',
          'array'
        ],
        body: function t(e, n, r, o) {
          e = n + r + o
        }
      })
    }),
    Object.defineProperty(is(t), '_update', {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: th() ({
        args: [
          'array',
          'array',
          'array'
        ],
        body: function t(e, n, r) {
          e = e * (1 - r) + n * r
        }
      })
    }),
    t.layerClass = 'GRU';
    var r = n.units,
    o = void 0 === r ? 1 : r,
    i = n.activation,
    a = void 0 === i ? 'tanh' : i,
    s = n.use_bias,
    u = void 0 === s || s,
    c = n.recurrent_activation,
    l = void 0 === c ? 'hard_sigmoid' : c,
    p = n.return_sequences,
    h = void 0 !== p && p,
    f = n.go_backwards,
    d = void 0 !== f && f,
    m = n.stateful,
    y = void 0 !== m && m;
    return t.units = o,
    t.activation = a,
    t.recurrentActivation = l,
    t.activationFunc = Es[a],
    t.recurrentActivationFunc = Es[l],
    t.use_bias = u,
    t.returnSequences = h,
    t.goBackwards = d,
    t.stateful = y,
    t.params = t.use_bias ? [
      'kernel',
      'recurrent_kernel',
      'bias'
    ] : [
      'kernel',
      'recurrent_kernel'
    ],
    t.description = 'output dimensions: '.concat(t.units),
    t.description += 'linear' !== t.activation ? ', '.concat(t.activation, ' activation')  : '',
    t.description += 'linear' !== t.recurrentActivation ? ', '.concat(t.recurrentActivation, ' recurrent activation')  : '',
    t.description += t.returnSequences ? ', return sequences' : '',
    t.description += t.goBackwards ? ', backward direction' : '',
    t.description += t.stateful ? ', stateful' : '',
    t.gpu && (t.copyTextureProgram = Up.compileProgram(qd), t.matMulProgram = Up.compileProgram(Vd), t.activationProgram = Up.compileProgram(js[t.activation]), t.recurrentActivationProgram = Up.compileProgram(js[t.recurrentActivation]), t.gateSummationProgram = Up.compileProgram(Hd), t.gateProductProgram = Up.compileProgram(Wd), t.timestepReadProgram = Up.compileProgram(Xd), t.timestepWriteProgram = Up.compileProgram(Yd), t.updateProgram = Up.compileProgram($d)),
    t
  }
  return os(e, t),
  es(e, [
    {
      key: 'setWeights',
      value: function t(n) {
        var r = this;
        rs(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'setWeights', this).call(this, n);
        var o = this.weights.kernel.tensor.shape;
        this.weights.W_z = new Jp([], [
          o[0],
          this.units
        ]),
        this.weights.W_r = new Jp([], [
          o[0],
          this.units
        ]),
        this.weights.W_h = new Jp([], [
          o[0],
          this.units
        ]),
        Yp.a.assign(this.weights.W_z.tensor, this.weights.kernel.tensor.hi(o[0], this.units).lo(0, 0)),
        Yp.a.assign(this.weights.W_r.tensor, this.weights.kernel.tensor.hi(o[0], 2 * this.units).lo(0, this.units)),
        Yp.a.assign(this.weights.W_h.tensor, this.weights.kernel.tensor.hi(o[0], 3 * this.units).lo(0, 2 * this.units));
        var i = this.weights.recurrent_kernel.tensor.shape;
        if (this.weights.U_z = new Jp([], [
          i[0],
          this.units
        ]), this.weights.U_r = new Jp([], [
          i[0],
          this.units
        ]), this.weights.U_h = new Jp([], [
          i[0],
          this.units
        ]), Yp.a.assign(this.weights.U_z.tensor, this.weights.recurrent_kernel.tensor.hi(i[0], this.units).lo(0, 0)), Yp.a.assign(this.weights.U_r.tensor, this.weights.recurrent_kernel.tensor.hi(i[0], 2 * this.units).lo(0, this.units)), Yp.a.assign(this.weights.U_h.tensor, this.weights.recurrent_kernel.tensor.hi(i[0], 3 * this.units).lo(0, 2 * this.units)), this.weights.b_z = new Jp([], [
          this.units
        ]), this.weights.b_r = new Jp([], [
          this.units
        ]), this.weights.b_h = new Jp([], [
          this.units
        ]), this.use_bias && (Yp.a.assign(this.weights.b_z.tensor, this.weights.bias.tensor.hi(this.units).lo(0)), Yp.a.assign(this.weights.b_r.tensor, this.weights.bias.tensor.hi(2 * this.units).lo(this.units)), Yp.a.assign(this.weights.b_h.tensor, this.weights.bias.tensor.hi(3 * this.units).lo(2 * this.units))), this.gpu) {
          [
            'W_z',
            'W_r',
            'W_h',
            'U_z',
            'U_r',
            'U_h',
            'b_z',
            'b_r',
            'b_h'
          ].forEach(function (t) {
            r.weights[t].createGLTexture({
              type: '2d',
              format: 'float'
            })
          })
        }
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        var n = this,
        r = this.weights.b_z.tensor.shape[0],
        o = this.weights.b_r.tensor.shape[0],
        i = this.weights.b_h.tensor.shape[0],
        a = new Jp([], [
          r
        ]),
        s = new Jp([], [
          r
        ]),
        u = new Jp([], [
          r
        ]),
        c = new Jp([], [
          o
        ]),
        l = new Jp([], [
          o
        ]),
        p = new Jp([], [
          o
        ]),
        h = this.stateful && this.currentHiddenState ? this.currentHiddenState : new Jp([], [
          i
        ]),
        f = new Jp([], [
          i
        ]),
        d = new Jp([], [
          i
        ]),
        m = new Jp([], [
          i
        ]);
        this.hiddenStateSequence = new Jp([], [
          e.tensor.shape[0],
          i
        ]);
        for (var y = new Jp([], [
          e.tensor.shape[1]
        ]), v = function t() {
          Yp.a.assign(m.tensor, h.tensor),
          Object(yf.gemv) (1, n.weights.W_z.tensor.transpose(1, 0), y.tensor, 1, s.tensor),
          Object(yf.gemv) (1, n.weights.U_z.tensor.transpose(1, 0), m.tensor, 1, u.tensor),
          n._combine(a.tensor, s.tensor, u.tensor, n.weights.b_z.tensor),
          n.recurrentActivationFunc(a),
          Object(yf.gemv) (1, n.weights.W_r.tensor.transpose(1, 0), y.tensor, 1, l.tensor),
          Object(yf.gemv) (1, n.weights.U_r.tensor.transpose(1, 0), m.tensor, 1, p.tensor),
          n._combine(c.tensor, l.tensor, p.tensor, n.weights.b_r.tensor),
          n.recurrentActivationFunc(c),
          Yp.a.muleq(c.tensor, m.tensor),
          Object(yf.gemv) (1, n.weights.W_h.tensor.transpose(1, 0), y.tensor, 1, f.tensor),
          Object(yf.gemv) (1, n.weights.U_h.tensor.transpose(1, 0), c.tensor, 1, d.tensor),
          n._combine(h.tensor, f.tensor, d.tensor, n.weights.b_h.tensor),
          n.activationFunc(h),
          n._update(h.tensor, m.tensor, a.tensor)
        }, g = 0, _ = e.tensor.shape[0]; g < _; g++) {
          var b = this.goBackwards ? _ - g - 1 : g;
          Yp.a.assign(y.tensor, e.tensor.pick(b, null));
          [
            s,
            u,
            l,
            p,
            f,
            d
          ].forEach(function (t) {
            return Yp.a.assigns(t.tensor, 0)
          }),
          v(),
          this.returnSequences && Yp.a.assign(this.hiddenStateSequence.tensor.pick(g, null), h.tensor)
        }
        this.returnSequences ? this.output = this.hiddenStateSequence : this.output = h,
        this.stateful && (this.currentHiddenState = h)
      }
    },
    {
      key: '_stepGPU',
      value: function t() {
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.previousHiddenState,
          inputs: [
            {
              input: this.currentHiddenState,
              name: 'source'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempXZ,
          inputs: [
            {
              input: this.currentX,
              name: 'A'
            },
            {
              input: this.weights.W_z,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempHZ,
          inputs: [
            {
              input: this.previousHiddenState,
              name: 'A'
            },
            {
              input: this.weights.U_z,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateSummationProgram,
          output: this.currentUpdateGateStatePreactiv,
          inputs: [
            {
              input: this.tempXZ,
              name: 't1'
            },
            {
              input: this.tempHZ,
              name: 't2'
            },
            {
              input: this.weights.b_z,
              name: 'bias'
            }
          ]
        }),
        'linear' !== this.recurrentActivation ? Up.runProgram({
          program: this.recurrentActivationProgram,
          output: this.currentUpdateGateState,
          inputs: [
            {
              input: this.currentUpdateGateStatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentUpdateGateState = this.currentUpdateGateStatePreactiv,
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempXR,
          inputs: [
            {
              input: this.currentX,
              name: 'A'
            },
            {
              input: this.weights.W_r,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempHR,
          inputs: [
            {
              input: this.previousHiddenState,
              name: 'A'
            },
            {
              input: this.weights.U_r,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateSummationProgram,
          output: this.currentResetGateStatePreactiv,
          inputs: [
            {
              input: this.tempXR,
              name: 't1'
            },
            {
              input: this.tempHR,
              name: 't2'
            },
            {
              input: this.weights.b_r,
              name: 'bias'
            }
          ]
        }),
        'linear' !== this.recurrentActivation ? Up.runProgram({
          program: this.recurrentActivationProgram,
          output: this.currentResetGateState,
          inputs: [
            {
              input: this.currentResetGateStatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentResetGateState = this.currentResetGateStatePreactiv,
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.currentResetGateStateCopy,
          inputs: [
            {
              input: this.currentResetGateState,
              name: 'source'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateProductProgram,
          output: this.currentResetGateState,
          inputs: [
            {
              input: this.currentResetGateStateCopy,
              name: 't1'
            },
            {
              input: this.previousHiddenState,
              name: 't2'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempXH,
          inputs: [
            {
              input: this.currentX,
              name: 'A'
            },
            {
              input: this.weights.W_h,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.matMulProgram,
          output: this.tempHH,
          inputs: [
            {
              input: this.currentResetGateState,
              name: 'A'
            },
            {
              input: this.weights.U_h,
              name: 'B'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'bool',
              name: 'addC'
            }
          ]
        }),
        Up.runProgram({
          program: this.gateSummationProgram,
          output: this.currentHiddenStatePreactiv,
          inputs: [
            {
              input: this.tempXH,
              name: 't1'
            },
            {
              input: this.tempHH,
              name: 't2'
            },
            {
              input: this.weights.b_h,
              name: 'bias'
            }
          ]
        }),
        'linear' !== this.activation ? Up.runProgram({
          program: this.activationProgram,
          output: this.currentHiddenState,
          inputs: [
            {
              input: this.currentHiddenStatePreactiv,
              name: 'x'
            }
          ]
        })  : this.currentHiddenState = this.currentHiddenStatePreactiv,
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.currentHiddenStateCopy,
          inputs: [
            {
              input: this.currentHiddenState,
              name: 'source'
            }
          ]
        }),
        Up.runProgram({
          program: this.updateProgram,
          output: this.currentHiddenState,
          inputs: [
            {
              input: this.currentHiddenStateCopy,
              name: 'h'
            },
            {
              input: this.previousHiddenState,
              name: 'htm1'
            },
            {
              input: this.currentUpdateGateState,
              name: 'z'
            }
          ]
        })
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        });
        var n = this.weights.b_z.glTextureShape[1],
        r = this.weights.b_r.glTextureShape[1],
        o = this.weights.b_h.glTextureShape[1];
        this.currentHiddenState && this.stateful || (this.currentHiddenState = new Jp([], [
          o
        ]), this.currentHiddenState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentHiddenStateCopy || (this.currentHiddenStateCopy = new Jp([], [
          o
        ]), this.currentHiddenStateCopy.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentHiddenStatePreactiv || (this.currentHiddenStatePreactiv = new Jp([], [
          o
        ]), this.currentHiddenStatePreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentUpdateGateState || (this.currentUpdateGateState = new Jp([], [
          n
        ]), this.currentUpdateGateState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentUpdateGateStatePreactiv || (this.currentUpdateGateStatePreactiv = new Jp([], [
          n
        ]), this.currentUpdateGateStatePreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempXZ || (this.tempXZ = new Jp([], [
          n
        ]), this.tempXZ.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempHZ || (this.tempHZ = new Jp([], [
          n
        ]), this.tempHZ.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentResetGateState || (this.currentResetGateState = new Jp([], [
          r
        ]), this.currentResetGateState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentResetGateStateCopy || (this.currentResetGateStateCopy = new Jp([], [
          r
        ]), this.currentResetGateStateCopy.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentResetGateStatePreactiv || (this.currentResetGateStatePreactiv = new Jp([], [
          r
        ]), this.currentResetGateStatePreactiv.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempXR || (this.tempXR = new Jp([], [
          r
        ]), this.tempXR.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempHR || (this.tempHR = new Jp([], [
          r
        ]), this.tempHR.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempXH || (this.tempXH = new Jp([], [
          o
        ]), this.tempXH.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.tempHH || (this.tempHH = new Jp([], [
          o
        ]), this.tempHH.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.previousHiddenState || (this.previousHiddenState = new Jp([], [
          o
        ]), this.previousHiddenState.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.hiddenStateSequence || (this.hiddenStateSequence = new Jp([], [
          e.glTextureShape[0],
          o
        ]), this.hiddenStateSequence.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.hiddenStateSequenceCopy || (this.hiddenStateSequenceCopy = new Jp([], [
          e.glTextureShape[0],
          o
        ]), this.hiddenStateSequenceCopy.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        this.currentX || (this.currentX = new Jp([], [
          e.glTextureShape[1]
        ]), this.currentX.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        for (var i = 0, a = e.glTextureShape[0]; i < a; i++) {
          var s = this.goBackwards ? a - i - 1 : i;
          Up.runProgram({
            program: this.timestepReadProgram,
            output: this.currentX,
            inputs: [
              {
                input: e,
                name: 'x'
              }
            ],
            uniforms: [
              {
                value: s,
                type: 'int',
                name: 'index'
              }
            ]
          }),
          this._stepGPU(),
          this.returnSequences && (Up.runProgram({
            program: this.copyTextureProgram,
            output: this.hiddenStateSequenceCopy,
            inputs: [
              {
                input: this.hiddenStateSequence,
                name: 'source'
              }
            ]
          }), Up.runProgram({
            program: this.timestepWriteProgram,
            output: this.hiddenStateSequence,
            inputs: [
              {
                input: this.currentHiddenState,
                name: 'x'
              },
              {
                input: this.hiddenStateSequenceCopy,
                name: 'y'
              }
            ],
            uniforms: [
              {
                value: i,
                type: 'int',
                name: 'index'
              }
            ]
          }))
        }
        this.returnSequences ? this.output = this.hiddenStateSequence : this.output = this.currentHiddenState,
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
Jd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D source;\nout vec4 outColor;\n\nvoid main(void) {\n  outColor = texture(source, vec2(outTex.x, outTex.y));\n}\n',
Qd = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform isampler2D indexMap;\nuniform int inputCols;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(indexMap, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(inputCols)));\n    int colIndex = int(mod(float(index), float(inputCols)));\n    float val = texelFetch(x, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = vec4(0.0);\n  }\n}\n',
Zd = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D x;\nuniform int t;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(x, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n\n  outColor = vec4(texelFetch(x, ivec2(out_x, t), 0).r);\n}\n',
tm = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D outputCopy;\nuniform sampler2D sliceOutput;\nuniform int t;\nuniform int timesteps;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(sliceOutput, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(timesteps) * outTex.y);\n\n  if (t == out_y) {\n    outColor = vec4(texelFetch(sliceOutput, ivec2(out_x, 0), 0).r);\n  } else {\n    outColor = texelFetch(outputCopy, ivec2(out_x, out_y), 0);\n  }\n}\n',
em = '#version 300 es\nprecision highp float;\nprecision highp isampler2D;\n\nin vec2 outTex;\nuniform sampler2D outputCopy;\nuniform sampler2D sliceOutput;\nuniform isampler2D indexMap;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(outputCopy, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  int index = texelFetch(indexMap, ivec2(out_x, out_y), 0).r;\n\n  if (index != -1) {\n    int rowIndex = int(floor(float(index) / float(textureSize(sliceOutput, 0)[0])));\n    int colIndex = int(mod(float(index), float(textureSize(sliceOutput, 0)[0])));\n    float val = texelFetch(sliceOutput, ivec2(colIndex, rowIndex), 0).r;\n    outColor = vec4(val);\n  } else {\n    outColor = texelFetch(outputCopy, ivec2(out_x, out_y), 0);\n  }\n}\n',
nm = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    us(this, e),
    t = ps(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'TimeDistributed';
    var r = n.layer;
    r || t.throwError('wrapped layer is undefined.');
    var o = Object.assign({
    }, r.config, {
      gpu: n.gpu
    });
    return t.wrappedLayer = new Fs[r.class_name](o),
    t.wrappedLayer.outbound = [
      null
    ],
    t.gpu && (t.copyTextureProgram = Up.compileProgram(Jd), t.mapInputProgram = Up.compileProgram(Qd), t.selectSliceProgram = Up.compileProgram(Zd), t.copySliceOutputProgram = Up.compileProgram(tm), t.mapSliceOutputProgram = Up.compileProgram(em)),
    t
  }
  return hs(e, t),
  ls(e, [
    {
      key: 'setWeights',
      value: function t(e) {
        this.wrappedLayer.setWeights(e)
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        var n,
        r,
        o = ss(e.tensor.shape.slice(1)),
        i = new Jp([], o);
        Yp.a.assign(i.tensor, (n = e.tensor).pick.apply(n, [
          0
        ].concat(ss(Array(o.length).fill(null)))));
        var a = this.wrappedLayer.call(i),
        s = a.tensor.shape.slice();
        this.output = new Jp([], [
          e.tensor.shape[0]
        ].concat(ss(s))),
        Yp.a.assign((r = this.output.tensor).pick.apply(r, [
          0
        ].concat(ss(Array(s.length).fill(null)))), a.tensor);
        for (var u = 1, c = e.tensor.shape[0]; u < c; u++) {
          var l,
          p;
          Yp.a.assign(i.tensor, (l = e.tensor).pick.apply(l, [
            u
          ].concat(ss(Array(o.length).fill(null))))),
          a = this.wrappedLayer.call(i),
          Yp.a.assign((p = this.output.tensor).pick.apply(p, [
            u
          ].concat(ss(Array(s.length).fill(null)))), a.tensor)
        }
      }
    },
    {
      key: '_createIndexMap',
      value: function t(e) {
        if (!this.indexMaps) {
          var n = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          this.indexMaps = [
          ];
          for (var r = this.inputShape[0], o = this.inputShape.slice(1), i = 0; i < r; i++) {
            var a,
            s = new Jp([], o, {
              type: Int32Array
            });
            Yp.a.assign(s.tensor, (a = n.tensor).pick.apply(a, [
              i
            ].concat(ss(Array(o.length).fill(null))))),
            s.reshapeTo2DSquare(),
            s.createGLTexture({
              type: '2d',
              format: 'int'
            }),
            this.indexMaps.push(s)
          }
        }
      }
    },
    {
      key: '_createOutputIndexMap',
      value: function t(e) {
        if (!this.outputIndexMaps) {
          var n = new Jp(e.data, e.shape, {
            type: Int32Array
          });
          this.outputIndexMaps = [
          ];
          for (var r = this.outputShape[0], o = this.outputShape.slice(1), i = 0; i < r; i++) {
            var a,
            s = new Jp([], this.outputShape, {
              type: Int32Array
            });
            Yp.a.assigns(s.tensor, - 1),
            Yp.a.assign((a = s.tensor).pick.apply(a, [
              i
            ].concat(ss(Array(o.length).fill(null)))), n.tensor),
            s.reshapeTo2DSquare(),
            s.createGLTexture({
              type: '2d',
              format: 'int'
            }),
            this.outputIndexMaps.push(s)
          }
        }
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.is2DReshaped || e.is2DSquareReshaped ? this.inputShape = e.originalShape : this.inputShape = e.tensor.shape,
        e.glTexture || (e.tensor.shape.length <= 2 ? e.createGLTexture({
          type: '2d',
          format: 'float'
        })  : e.tensor.shape.length > 2 && !e.is2DReshaped && (e.reshapeTo2DSquare(), e.createGLTexture({
          type: '2d',
          format: 'float'
        }))),
        this.inputShape.length > 2 && this._createIndexMap(e.indicesForReshaped);
        var n = this.inputShape[0],
        r = this.inputShape.slice(1);
        this.slice || (this.slice = new Jp([], r), r.length <= 2 ? this.slice.createGLTexture({
          type: '2d',
          format: 'float'
        })  : (this.slice.reshapeTo2DSquare(), this.slice.createGLTexture({
          type: '2d',
          format: 'float'
        }))),
        this.inputShape.length <= 2 ? Up.runProgram({
          program: this.selectSliceProgram,
          output: this.slice,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'int',
              name: 't'
            }
          ]
        })  : Up.runProgram({
          program: this.mapInputProgram,
          output: this.slice,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMaps[0],
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        this.wrappedLayer._callGPU(this.slice),
        this.sliceOutput = this.wrappedLayer.output,
        this.output || (this.inputShape.length <= 2 ? (this.outputShape = [
          n,
          this.sliceOutput.glTextureShape[1]
        ], this.output = new Jp([], this.outputShape), this.outputCopy = new Jp([], this.outputShape), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }), this.outputCopy.createGLTexture({
          type: '2d',
          format: 'float'
        }))  : (this.outputShape = [
          n
        ].concat(ss(this.sliceOutput.originalShape)), this.output = new Jp([], this.outputShape), this.outputCopy = new Jp([], this.outputShape), this.output.reshapeTo2DSquare(), this.outputCopy.reshapeTo2DSquare(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }), this.outputCopy.createGLTexture({
          type: '2d',
          format: 'float'
        }), this._createOutputIndexMap(this.sliceOutput.indicesForReshaped))),
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.outputCopy,
          inputs: [
            {
              input: this.output,
              name: 'source'
            }
          ]
        }),
        this.inputShape.length <= 2 ? Up.runProgram({
          program: this.copySliceOutputProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputCopy,
              name: 'outputCopy'
            },
            {
              input: this.sliceOutput,
              name: 'sliceOutput'
            }
          ],
          uniforms: [
            {
              value: 0,
              type: 'int',
              name: 't'
            },
            {
              value: n,
              type: 'int',
              name: 'timesteps'
            }
          ]
        })  : Up.runProgram({
          program: this.mapSliceOutputProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputCopy,
              name: 'outputCopy'
            },
            {
              input: this.sliceOutput,
              name: 'sliceOutput'
            },
            {
              input: this.outputIndexMaps[0],
              name: 'indexMap'
            }
          ]
        });
        for (var o = 1; o < n; o++) this.inputShape.length <= 2 ? Up.runProgram({
          program: this.selectSliceProgram,
          output: this.slice,
          inputs: [
            {
              input: e,
              name: 'x'
            }
          ],
          uniforms: [
            {
              value: o,
              type: 'int',
              name: 't'
            }
          ]
        })  : Up.runProgram({
          program: this.mapInputProgram,
          output: this.slice,
          inputs: [
            {
              input: e,
              name: 'x'
            },
            {
              input: this.indexMaps[o],
              name: 'indexMap'
            }
          ],
          uniforms: [
            {
              value: e.glTextureShape[1],
              type: 'int',
              name: 'inputCols'
            }
          ]
        }),
        this.wrappedLayer._callGPU(this.slice),
        this.sliceOutput = this.wrappedLayer.output,
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.outputCopy,
          inputs: [
            {
              input: this.output,
              name: 'source'
            }
          ]
        }),
        this.inputShape.length <= 2 ? Up.runProgram({
          program: this.copySliceOutputProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputCopy,
              name: 'outputCopy'
            },
            {
              input: this.sliceOutput,
              name: 'sliceOutput'
            }
          ],
          uniforms: [
            {
              value: o,
              type: 'int',
              name: 't'
            },
            {
              value: n,
              type: 'int',
              name: 'timesteps'
            }
          ]
        })  : Up.runProgram({
          program: this.mapSliceOutputProgram,
          output: this.output,
          inputs: [
            {
              input: this.outputCopy,
              name: 'outputCopy'
            },
            {
              input: this.sliceOutput,
              name: 'sliceOutput'
            },
            {
              input: this.outputIndexMaps[o],
              name: 'indexMap'
            }
          ]
        });
        0 === this.outbound.length && (this.output.transferFromGLTexture(), this.output.is2DReshaped ? this.output.reshapeFrom2D()  : this.output.is2DSquareReshaped && this.output.reshapeFrom2DSquare())
      }
    }
  ]),
  e
}(Bp),
rm = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D source;\nout vec4 outColor;\n\nvoid main(void) {\n  outColor = texture(source, vec2(outTex.x, outTex.y));\n}\n',
om = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D forward;\nuniform sampler2D backward;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(forward, 0);\n  int out_x = int(float(size[0] * 2) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  if (out_x >= 0 && out_x < size[0]) {\n    outColor = vec4(texelFetch(forward, ivec2(out_x, out_y), 0).r);\n  } else {\n    outColor = vec4(texelFetch(backward, ivec2(out_x - size[0], size[1] - out_y - 1), 0).r);\n  }\n}\n',
im = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D forward;\nuniform sampler2D backward;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(forward, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float forward_val = texelFetch(forward, ivec2(out_x, out_y), 0).r;\n  float backward_val = texelFetch(backward, ivec2(out_x, size[1] - out_y - 1), 0).r;\n\n  outColor = vec4(forward_val + backward_val);\n}\n',
am = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D forward;\nuniform sampler2D backward;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(forward, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float forward_val = texelFetch(forward, ivec2(out_x, out_y), 0).r;\n  float backward_val = texelFetch(backward, ivec2(out_x, size[1] - out_y - 1), 0).r;\n\n  outColor = vec4(forward_val * backward_val);\n}\n',
sm = '#version 300 es\nprecision highp float;\n\nin vec2 outTex;\nuniform sampler2D forward;\nuniform sampler2D backward;\nout vec4 outColor;\n\nvoid main() {\n  ivec2 size = textureSize(forward, 0);\n  int out_x = int(float(size[0]) * outTex.x);\n  int out_y = int(float(size[1]) * outTex.y);\n\n  float forward_val = texelFetch(forward, ivec2(out_x, out_y), 0).r;\n  float backward_val = texelFetch(backward, ivec2(out_x, size[1] - out_y - 1), 0).r;\n\n  outColor = vec4(0.5 * (forward_val + backward_val));\n}\n',
um = function (t) {
  function e() {
    var t,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    ds(this, e),
    t = vs(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n)),
    t.layerClass = 'Bidirectional';
    var r = n.layer,
    o = n.merge_mode,
    i = void 0 === o ? 'concat' : o;
    r || t.throwError('wrapped layer is undefined.'),
    [
      'SimpleRNN',
      'GRU',
      'LSTM'
    ].includes(r.class_name) || t.throwError('cannot wrap '.concat(r.class_name, ' layer.')),
    [
      'concat',
      'sum',
      'mul',
      'ave'
    ].includes(i) || t.throwError('merge_mode '.concat(i, ' not supported.'));
    var a = Object.assign({
    }, r.config, {
      gpu: n.gpu
    }),
    s = Object.assign({
    }, r.config, {
      gpu: n.gpu
    });
    return s.go_backwards = !s.go_backwards,
    t.forwardLayer = new As[r.class_name](a),
    t.backwardLayer = new As[r.class_name](s),
    t.forwardLayer.outbound = [
      null
    ],
    t.backwardLayer.outbound = [
      null
    ],
    t.mergeMode = i,
    t.returnSequences = r.config.return_sequences,
    t.gpu && (t.copyTextureProgram = Up.compileProgram(rm), 'concat' === t.mergeMode ? t.mergeProgram = Up.compileProgram(om)  : 'sum' === t.mergeMode ? t.mergeProgram = Up.compileProgram(im)  : 'mul' === t.mergeMode ? t.mergeProgram = Up.compileProgram(am)  : 'ave' === t.mergeMode && (t.mergeProgram = Up.compileProgram(sm))),
    t
  }
  return gs(e, t),
  ys(e, [
    {
      key: 'setWeights',
      value: function t(e) {
        this.forwardLayer.setWeights(e.slice(0, e.length / 2)),
        this.backwardLayer.setWeights(e.slice(e.length / 2))
      }
    },
    {
      key: 'call',
      value: function t(e) {
        return this.gpu ? this._callGPU(e)  : this._callCPU(e),
        this.output
      }
    },
    {
      key: '_callCPU',
      value: function t(e) {
        this.forwardLayer._callCPU(new Jp(e.tensor.data, e.tensor.shape)),
        this.backwardLayer._callCPU(new Jp(e.tensor.data, e.tensor.shape));
        var n = this.forwardLayer.output,
        r = this.backwardLayer.output;
        this.returnSequences && (r.tensor = r.tensor.step( - 1));
        var o = n.tensor.shape.slice();
        'concat' === this.mergeMode && (o[o.length - 1] += r.tensor.shape[o.length - 1]),
        this.output = new Jp([], o),
        'concat' === this.mergeMode ? this.returnSequences ? (Yp.a.assign(this.output.tensor.hi(o[0], n.tensor.shape[1]).lo(0, 0), n.tensor), Yp.a.assign(this.output.tensor.hi(o[0], o[1]).lo(0, n.tensor.shape[1]), r.tensor))  : (Yp.a.assign(this.output.tensor.hi(n.tensor.shape[0]).lo(0), n.tensor), Yp.a.assign(this.output.tensor.hi(o[0]).lo(n.tensor.shape[0]), r.tensor))  : 'sum' === this.mergeMode ? (Yp.a.addeq(this.output.tensor, n.tensor), Yp.a.addeq(this.output.tensor, r.tensor))  : 'mul' === this.mergeMode ? (Yp.a.assigns(this.output.tensor, 1), Yp.a.muleq(this.output.tensor, n.tensor), Yp.a.muleq(this.output.tensor, r.tensor))  : 'ave' === this.mergeMode && (Yp.a.addeq(this.output.tensor, n.tensor), Yp.a.addeq(this.output.tensor, r.tensor), Yp.a.divseq(this.output.tensor, 2))
      }
    },
    {
      key: '_callGPU',
      value: function t(e) {
        e.glTexture || e.createGLTexture({
          type: '2d',
          format: 'float'
        }),
        this.inputCopy || (this.inputCopy = new Jp([], e.glTextureShape), this.inputCopy.createGLTexture({
          type: '2d',
          format: 'float'
        })),
        Up.runProgram({
          program: this.copyTextureProgram,
          output: this.inputCopy,
          inputs: [
            {
              input: e,
              name: 'source'
            }
          ]
        }),
        this.forwardLayer._callGPU(e),
        this.backwardLayer._callGPU(this.inputCopy);
        var n = this.forwardLayer.output,
        r = this.backwardLayer.output,
        o = n.glTextureShape.slice();
        'concat' === this.mergeMode && (o[1] += r.glTextureShape[1]),
        this.output || (this.output = new Jp([], o), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }), this.returnSequences || (this.output.is1D = !0)),
        Up.runProgram({
          program: this.mergeProgram,
          output: this.output,
          inputs: [
            {
              input: n,
              name: 'forward'
            },
            {
              input: r,
              name: 'backward'
            }
          ]
        }),
        0 === this.outbound.length && this.output.transferFromGLTexture()
      }
    }
  ]),
  e
}(Bp),
cm = function () {
  function t() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    if (bs(this, t), this.modelLayersMap = e.modelLayersMap, this.gpu = e.gpu, !this.modelLayersMap) throw new Error('[CAM] modelLayersMap is required')
  }
  return ws(t, [
    {
      key: 'initialize',
      value: function t() {
        var e = this;
        if (this.modelLayersMap.forEach(function (t) {
          'GlobalAveragePooling2D' === t.layerClass && (e.enabled = !0, e.poolLayer = t)
        }), this.enabled && !this.data) {
          this.featureMaps = this.modelLayersMap.get(this.poolLayer.inbound[0]).output;
          var n = this.poolLayer;
          for (n.outbound.length || (this.weights = this.poolLayer.output); n.outbound.length; ) n = this.modelLayersMap.get(n.outbound[0]),
          n.weights.kernel ? this.weights = n.weights.kernel : this.weights = this.poolLayer.output;
          if (this.featureMaps.is2DReshaped ? this.inputShape = this.featureMaps.originalShape.slice(0, 2)  : this.inputShape = this.featureMaps.tensor.shape.slice(0, 2), 1 === this.weights.tensor.shape.length) this.shape = this.inputShape;
           else {
            var r = this.weights.tensor.shape[1];
            this.shape = _s(this.inputShape).concat([r])
          }
          this.data = new Float32Array(this.shape.reduce(function (t, e) {
            return t * e
          }, 1))
        }
      }
    },
    {
      key: 'update',
      value: function t() {
        if (this.enabled) {
          this.featureMaps = this.modelLayersMap.get(this.poolLayer.inbound[0]).output,
          this.gpu ? this._updateGPU()  : this._updateCPU();
          var e = Yp.a.inf(this.output.tensor),
          n = Yp.a.sup(this.output.tensor);
          Yp.a.divseq(Yp.a.subseq(this.output.tensor, e), n - e),
          this.data = this.output.tensor.data
        }
      }
    },
    {
      key: '_updateCPU',
      value: function t() {
        if (this.featureMaps.is2DReshaped || this.featureMaps.reshapeTo2D(), 1 === this.weights.tensor.shape.length) {
          this.output || (this.output = new Jp([], this.shape));
          var e = new Jp([], [
            this.shape[0] * this.shape[1]
          ]);
          Object(yf.gemv) (1, this.featureMaps.tensor, this.weights.tensor, 1, e.tensor),
          this.output.replaceTensorData(e.tensor.data)
        } else this.output || (this.output = new Jp([], this.shape)),
        this.output.reshapeTo2D(),
        Sh() (this.output.tensor, this.featureMaps.tensor, this.weights.tensor, 1, 1),
        this.output.reshapeFrom2D();
        Yp.a.maxseq(this.output.tensor, 0),
        this.featureMaps.is2DReshaped && this.featureMaps.reshapeFrom2D()
      }
    },
    {
      key: '_updateGPU',
      value: function t() {
        this.output || (this.output = new Jp([], this.shape));
        var e = this.weights.is1D;
        !this.output.glTexture && e ? this.output.createGLTexture({
          type: '2d',
          format: 'float'
        })  : (this.output.reshapeTo2D(), this.output.createGLTexture({
          type: '2d',
          format: 'float'
        }));
        var n = e ? this.weights.glTextureShape[1] : this.weights.glTextureShape[0];
        if (!this.program) {
          var r = yt('cam', this.output.glTextureShape, n, e);
          this.program = Up.compileProgram(r)
        }
        Up.runProgram({
          program: this.program,
          output: this.output,
          inputs: [
            {
              input: this.featureMaps,
              name: 'featureMaps'
            },
            {
              input: this.weights,
              name: 'weights'
            }
          ]
        }),
        this.output.transferFromGLTexture(),
        this.output.is2DReshaped && this.output.reshapeFrom2D()
      }
    }
  ]),
  t
}(),
lm = n(458),
pm = n.n(lm),
hm = lm.Reader,
fm = lm.Writer,
dm = lm.util,
mm = lm.roots.default || (lm.roots.default = {
}), ym = mm.Weights = function () {
  function t(t) {
    if (this.shape = [
    ], t) for (var e = Object.keys(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
  }
  return t.prototype.layerName = '',
  t.prototype.weightName = '',
  t.prototype.shape = dm.emptyArray,
  t.prototype.type = '',
  t.prototype.data = dm.newBuffer([]),
  t.prototype.quantizeMin = 0,
  t.prototype.quantizeMax = 0,
  t.create = function e(n) {
    return new t(n)
  },
  t.encode = function t(e, n) {
    if (n || (n = fm.create()), null != e.layerName && e.hasOwnProperty('layerName') && n.uint32(10).string(e.layerName), null != e.weightName && e.hasOwnProperty('weightName') && n.uint32(18).string(e.weightName), null != e.shape && e.shape.length) {
      n.uint32(26).fork();
      for (var r = 0; r < e.shape.length; ++r) n.uint32(e.shape[r]);
      n.ldelim()
    }
    return null != e.type && e.hasOwnProperty('type') && n.uint32(34).string(e.type),
    null != e.data && e.hasOwnProperty('data') && n.uint32(42).bytes(e.data),
    null != e.quantizeMin && e.hasOwnProperty('quantizeMin') && n.uint32(53).float(e.quantizeMin),
    null != e.quantizeMax && e.hasOwnProperty('quantizeMax') && n.uint32(61).float(e.quantizeMax),
    n
  },
  t.encodeDelimited = function t(e, n) {
    return this.encode(e, n).ldelim()
  },
  t.decode = function t(e, n) {
    e instanceof hm || (e = hm.create(e));
    for (var r = void 0 === n ? e.len : e.pos + n, o = new mm.Weights; e.pos < r; ) {
      var i = e.uint32();
      switch (i >>> 3) {
        case 1:
          o.layerName = e.string();
          break;
        case 2:
          o.weightName = e.string();
          break;
        case 3:
          if (o.shape && o.shape.length || (o.shape = [
          ]), 2 == (7 & i)) for (var a = e.uint32() + e.pos; e.pos < a; ) o.shape.push(e.uint32());
           else o.shape.push(e.uint32());
          break;
        case 4:
          o.type = e.string();
          break;
        case 5:
          o.data = e.bytes();
          break;
        case 6:
          o.quantizeMin = e.float();
          break;
        case 7:
          o.quantizeMax = e.float();
          break;
        default:
          e.skipType(7 & i)
      }
    }
    return o
  },
  t.decodeDelimited = function t(e) {
    return e instanceof hm || (e = new hm(e)),
    this.decode(e, e.uint32())
  },
  t.verify = function t(e) {
    if ('object' !== Ss(e) || null === e) return 'object expected';
    if (null != e.layerName && e.hasOwnProperty('layerName') && !dm.isString(e.layerName)) return 'layerName: string expected';
    if (null != e.weightName && e.hasOwnProperty('weightName') && !dm.isString(e.weightName)) return 'weightName: string expected';
    if (null != e.shape && e.hasOwnProperty('shape')) {
      if (!Array.isArray(e.shape)) return 'shape: array expected';
      for (var n = 0; n < e.shape.length; ++n) if (!dm.isInteger(e.shape[n])) return 'shape: integer[] expected'
    }
    return null != e.type && e.hasOwnProperty('type') && !dm.isString(e.type) ? 'type: string expected' : null != e.data && e.hasOwnProperty('data') && !(e.data && 'number' == typeof e.data.length || dm.isString(e.data)) ? 'data: buffer expected' : null != e.quantizeMin && e.hasOwnProperty('quantizeMin') && 'number' != typeof e.quantizeMin ? 'quantizeMin: number expected' : null != e.quantizeMax && e.hasOwnProperty('quantizeMax') && 'number' != typeof e.quantizeMax ? 'quantizeMax: number expected' : null
  },
  t.fromObject = function t(e) {
    if (e instanceof mm.Weights) return e;
    var n = new mm.Weights;
    if (null != e.layerName && (n.layerName = String(e.layerName)), null != e.weightName && (n.weightName = String(e.weightName)), e.shape) {
      if (!Array.isArray(e.shape)) throw TypeError('.Weights.shape: array expected');
      n.shape = [
      ];
      for (var r = 0; r < e.shape.length; ++r) n.shape[r] = e.shape[r] >>> 0
    }
    return null != e.type && (n.type = String(e.type)),
    null != e.data && ('string' == typeof e.data ? dm.base64.decode(e.data, n.data = dm.newBuffer(dm.base64.length(e.data)), 0)  : e.data.length && (n.data = e.data)),
    null != e.quantizeMin && (n.quantizeMin = Number(e.quantizeMin)),
    null != e.quantizeMax && (n.quantizeMax = Number(e.quantizeMax)),
    n
  },
  t.toObject = function t(e, n) {
    n || (n = {
    });
    var r = {
    };
    if ((n.arrays || n.defaults) && (r.shape = [
    ]), n.defaults && (r.layerName = '', r.weightName = '', r.type = '', r.data = n.bytes === String ? '' : [
    ], r.quantizeMin = 0, r.quantizeMax = 0), null != e.layerName && e.hasOwnProperty('layerName') && (r.layerName = e.layerName), null != e.weightName && e.hasOwnProperty('weightName') && (r.weightName = e.weightName), e.shape && e.shape.length) {
      r.shape = [
      ];
      for (var o = 0; o < e.shape.length; ++o) r.shape[o] = e.shape[o]
    }
    return null != e.type && e.hasOwnProperty('type') && (r.type = e.type),
    null != e.data && e.hasOwnProperty('data') && (r.data = n.bytes === String ? dm.base64.encode(e.data, 0, e.data.length)  : n.bytes === Array ? Array.prototype.slice.call(e.data)  : e.data),
    null != e.quantizeMin && e.hasOwnProperty('quantizeMin') && (r.quantizeMin = n.json && !isFinite(e.quantizeMin) ? String(e.quantizeMin)  : e.quantizeMin),
    null != e.quantizeMax && e.hasOwnProperty('quantizeMax') && (r.quantizeMax = n.json && !isFinite(e.quantizeMax) ? String(e.quantizeMax)  : e.quantizeMax),
    r
  },
  t.prototype.toJSON = function t() {
    return this.constructor.toObject(this, lm.util.toJSONOptions)
  },
  t
}(),
vm = mm.Model = function () {
  function t(t) {
    if (this.modelWeights = [
    ], t) for (var e = Object.keys(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
  }
  return t.prototype.id = '',
  t.prototype.name = '',
  t.prototype.kerasVersion = '',
  t.prototype.backend = '',
  t.prototype.modelConfig = '',
  t.prototype.modelWeights = dm.emptyArray,
  t.create = function e(n) {
    return new t(n)
  },
  t.encode = function t(e, n) {
    if (n || (n = fm.create()), null != e.id && e.hasOwnProperty('id') && n.uint32(10).string(e.id), null != e.name && e.hasOwnProperty('name') && n.uint32(18).string(e.name), null != e.kerasVersion && e.hasOwnProperty('kerasVersion') && n.uint32(26).string(e.kerasVersion), null != e.backend && e.hasOwnProperty('backend') && n.uint32(34).string(e.backend), null != e.modelConfig && e.hasOwnProperty('modelConfig') && n.uint32(42).string(e.modelConfig), null != e.modelWeights && e.modelWeights.length) for (var r = 0; r < e.modelWeights.length; ++r) mm.Weights.encode(e.modelWeights[r], n.uint32(50).fork()).ldelim();
    return n
  },
  t.encodeDelimited = function t(e, n) {
    return this.encode(e, n).ldelim()
  },
  t.decode = function t(e, n) {
    e instanceof hm || (e = hm.create(e));
    for (var r = void 0 === n ? e.len : e.pos + n, o = new mm.Model; e.pos < r; ) {
      var i = e.uint32();
      switch (i >>> 3) {
        case 1:
          o.id = e.string();
          break;
        case 2:
          o.name = e.string();
          break;
        case 3:
          o.kerasVersion = e.string();
          break;
        case 4:
          o.backend = e.string();
          break;
        case 5:
          o.modelConfig = e.string();
          break;
        case 6:
          o.modelWeights && o.modelWeights.length || (o.modelWeights = [
          ]),
          o.modelWeights.push(mm.Weights.decode(e, e.uint32()));
          break;
        default:
          e.skipType(7 & i)
      }
    }
    return o
  },
  t.decodeDelimited = function t(e) {
    return e instanceof hm || (e = new hm(e)),
    this.decode(e, e.uint32())
  },
  t.verify = function t(e) {
    if ('object' !== Ss(e) || null === e) return 'object expected';
    if (null != e.id && e.hasOwnProperty('id') && !dm.isString(e.id)) return 'id: string expected';
    if (null != e.name && e.hasOwnProperty('name') && !dm.isString(e.name)) return 'name: string expected';
    if (null != e.kerasVersion && e.hasOwnProperty('kerasVersion') && !dm.isString(e.kerasVersion)) return 'kerasVersion: string expected';
    if (null != e.backend && e.hasOwnProperty('backend') && !dm.isString(e.backend)) return 'backend: string expected';
    if (null != e.modelConfig && e.hasOwnProperty('modelConfig') && !dm.isString(e.modelConfig)) return 'modelConfig: string expected';
    if (null != e.modelWeights && e.hasOwnProperty('modelWeights')) {
      if (!Array.isArray(e.modelWeights)) return 'modelWeights: array expected';
      for (var n = 0; n < e.modelWeights.length; ++n) {
        var r = mm.Weights.verify(e.modelWeights[n]);
        if (r) return 'modelWeights.' + r
      }
    }
    return null
  },
  t.fromObject = function t(e) {
    if (e instanceof mm.Model) return e;
    var n = new mm.Model;
    if (null != e.id && (n.id = String(e.id)), null != e.name && (n.name = String(e.name)), null != e.kerasVersion && (n.kerasVersion = String(e.kerasVersion)), null != e.backend && (n.backend = String(e.backend)), null != e.modelConfig && (n.modelConfig = String(e.modelConfig)), e.modelWeights) {
      if (!Array.isArray(e.modelWeights)) throw TypeError('.Model.modelWeights: array expected');
      n.modelWeights = [
      ];
      for (var r = 0; r < e.modelWeights.length; ++r) {
        if ('object' !== Ss(e.modelWeights[r])) throw TypeError('.Model.modelWeights: object expected');
        n.modelWeights[r] = mm.Weights.fromObject(e.modelWeights[r])
      }
    }
    return n
  },
  t.toObject = function t(e, n) {
    n || (n = {
    });
    var r = {
    };
    if ((n.arrays || n.defaults) && (r.modelWeights = [
    ]), n.defaults && (r.id = '', r.name = '', r.kerasVersion = '', r.backend = '', r.modelConfig = ''), null != e.id && e.hasOwnProperty('id') && (r.id = e.id), null != e.name && e.hasOwnProperty('name') && (r.name = e.name), null != e.kerasVersion && e.hasOwnProperty('kerasVersion') && (r.kerasVersion = e.kerasVersion), null != e.backend && e.hasOwnProperty('backend') && (r.backend = e.backend), null != e.modelConfig && e.hasOwnProperty('modelConfig') && (r.modelConfig = e.modelConfig), e.modelWeights && e.modelWeights.length) {
      r.modelWeights = [
      ];
      for (var o = 0; o < e.modelWeights.length; ++o) r.modelWeights[o] = mm.Weights.toObject(e.modelWeights[o], n)
    }
    return r
  },
  t.prototype.toJSON = function t() {
    return this.constructor.toObject(this, lm.util.toJSONOptions)
  },
  t
}(),
gm = Fp.a.CancelToken.source(),
_m = function () {
  function t() {
    var e = this,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    };
    Ps(this, t);
    var r = n.filepath,
    o = void 0 === r ? null : r,
    i = n.headers,
    a = void 0 === i ? {
    }
     : i,
    s = n.filesystem,
    u = void 0 !== s && s,
    c = n.gpu,
    l = void 0 !== c && c,
    p = n.transferLayerOutputs,
    h = void 0 !== p && p,
    f = n.pauseAfterLayerCalls,
    d = void 0 !== f && f,
    m = n.visualizations,
    y = void 0 === m ? [
    ] : m;
    if (!o) throw new Error('[Model] path to protobuf-serialized model definition file is missing.');
    this.filepath = o,
    this.headers = a,
    this.filesystem = 'undefined' == typeof window && u,
    this.events = new Dp.EventEmitter,
    this.id = null,
    this.name = null,
    this.kerasVersion = null,
    this.backend = null,
    this.modelConfig = {
    },
    this.modelWeights = [
    ],
    this.gpu = !('undefined' == typeof window || !Up.isSupported) && l,
    this.transferLayerOutputs = h,
    this.pauseAfterLayerCalls = d,
    this.modelLayersInfo = [
    ],
    this.modelLayersMap = new Map,
    this.inputTensorsMap = new Map,
    this.inputLayerNames = [
    ],
    this.outputLayerNames = [
    ],
    this.finishedLayerNames = [
    ],
    this.isRunning = !1,
    this.runningProgress = 0,
    this.predictStats = {
    },
    this.visMap = new Map,
    y.forEach(function (t) {
      if (t in Ms) {
        var n = new Ms[t]({
          modelLayersMap: e.modelLayersMap,
          gpu: e.gpu
        });
        e.visMap.set(t, n)
      }
    }),
    this._ready = this._initialize()
  }
  return ks(t, [
    {
      key: 'checkGPUSupport',
      value: function t() {
        return Up.isSupported
      }
    },
    {
      key: 'ready',
      value: function t() {
        return this._ready
      }
    },
    {
      key: '_interrupt',
      value: function t() {
        gm.cancel()
      }
    },
    {
      key: '_initialize',
      value: function () {
        var t = Ts(regeneratorRuntime.mark(function t() {
          var e = this,
          n,
          r;
          return regeneratorRuntime.wrap(function t(o) {
            for (; ; ) switch (o.prev = o.next) {
              case 0:
                return this.events.emit('loadingProgress', 0),
                o.prev = 1,
                n = this.filesystem ? this._dataRequestFS()  : this._dataRequestHTTP(this.headers),
                o.next = 5,
                n;
              case 5:
                o.next = 11;
                break;
              case 7:
                o.prev = 7,
                o.t0 = o.catch (1),
                console.log(o.t0),
                this._interrupt();
              case 11:
                return this.events.emit('loadingProgress', 100),
                this._buildDAG(),
                this.inputLayerNames.forEach(function (t) {
                  var n = e.modelLayersMap.get(t);
                  n.call(e.inputTensorsMap.get(t)),
                  n.hasOutput = !0,
                  n.visited = !0
                }),
                r = this.pauseAfterLayerCalls,
                this.pauseAfterLayerCalls = !0,
                this.runningProgress = 0,
                this.events.emit('initProgress', 0),
                o.next = 20,
                this._traverseDAG(this.inputLayerNames, 'initProgress');
              case 20:
                return this.pauseAfterLayerCalls = r,
                this.finishedLayerNames = [
                ],
                this.modelLayersMap.forEach(function (t) {
                  t.hasOutput = !1,
                  t.visited = !1
                }),
                this.visMap.forEach(function (t) {
                  t.initialize()
                }),
                this.events.emit('initProgress', 100),
                o.abrupt('return', !0);
              case 26:
              case 'end':
                return o.stop()
            }
          },
          t,
          this,
          [
            [1,
            7]
          ])
        })); return function e() {
          return t.apply(this, arguments)
        }
      }()
    },
    {
      key: '_dataRequestHTTP',
      value: function () {
        var t = Ts(regeneratorRuntime.mark(function t() {
          var e = this,
          n,
          r,
          o = arguments;
          return regeneratorRuntime.wrap(function t(i) {
            for (; ; ) switch (i.prev = i.next) {
              case 0:
                return n = o.length > 0 && void 0 !== o[0] ? o[0] : {
                },
                i.prev = 1,
                i.next = 4,
                Fp.a.get(this.filepath, {
                  responseType: 'arraybuffer',
                  headers: n,
                  onDownloadProgress: function t(n) {
                    if (n.lengthComputable) {
                      var r = Math.round(100 * n.loaded / n.total);
                      e.events.emit('loadingProgress', r)
                    }
                  },
                  cancelToken: gm.token
                });
              case 4:
                r = i.sent,
                this._decodeProtobuf(new Uint8Array(r.data)),
                i.next = 15;
                break;
              case 8:
                if (i.prev = 8, i.t0 = i.catch (1), !Fp.a.isCancel(i.t0)) {
                  i.next = 14;
                  break
                }
                console.log('[Model] Data request canceled', i.t0.message),
                i.next = 15;
                break;
              case 14:
                throw i.t0;
              case 15:
              case 'end':
                return i.stop()
            }
          },
          t,
          this,
          [
            [1,
            8]
          ])
        })); return function e() {
          return t.apply(this, arguments)
        }
      }()
    },
    {
      key: '_dataRequestFS',
      value: function () {
        var t = Ts(regeneratorRuntime.mark(function t() {
          var e,
          r;
          return regeneratorRuntime.wrap(function t(o) {
            for (; ; ) switch (o.prev = o.next) {
              case 0:
                return e = jp.a.promisify(n(473).readFile),
                o.prev = 1,
                o.next = 4,
                e(this.filepath);
              case 4:
                r = o.sent,
                this._decodeProtobuf(r),
                o.next = 11;
                break;
              case 8:
                throw o.prev = 8,
                o.t0 = o.catch (1),
                o.t0;
              case 11:
              case 'end':
                return o.stop()
            }
          },
          t,
          this,
          [
            [1,
            8]
          ])
        })); return function e() {
          return t.apply(this, arguments)
        }
      }()
    },
    {
      key: '_decodeProtobuf',
      value: function t(e) {
        if (mm.Model.verify(e)) throw new Error('[Model] Invalid model - check protobuf serialization: {err}');
        var n = mm.Model.decode(e);
        this.id = n.id,
        this.name = n.name,
        this.kerasVersion = n.kerasVersion,
        this.backend = n.backend,
        this.modelConfig = JSON.parse(n.modelConfig),
        this.modelWeights = n.modelWeights
      }
    },
    {
      key: 'toggleGPU',
      value: function t(e) {
        var n = this;
        this.gpu = void 0 === e ? !this.gpu : e,
        this.modelLayersMap.forEach(function (t) {
          t.toggleGPU(n.gpu)
        }),
        this.visMap.forEach(function (t) {
          t.gpu = n.gpu
        }),
        this.resetInputTensors()
      }
    },
    {
      key: 'resetInputTensors',
      value: function t() {
        var e = this;
        this.inputLayerNames.forEach(function (t) {
          var n = e.modelLayersMap.get(t);
          e.inputTensorsMap.set(t, new Jp([], n.shape))
        })
      }
    },
    {
      key: '_buildDAG',
      value: function t() {
        var e = this,
        n = this.modelConfig.class_name,
        r = [
        ];
        if ('Sequential' === n ? r = this.modelConfig.config : 'Model' === n && (r = this.modelConfig.config.layers), !Array.isArray(r) || !r.length) throw new Error('[Model] Model configuration does not contain any layers.');
        r.forEach(function (t, o) {
          var i = t.class_name,
          a = t.config;
          if ('Model' === n && 'Sequential' === i) a.forEach(function (n, r) {
            var o = n.class_name,
            i = n.config,
            s = 0 === r ? t.inbound_nodes[0].map(function (t) {
              return t[0]
            })  : [
              a[r - 1].config.name
            ];
            e._createLayer(o, i, s)
          });
           else {
            if (!(i in Fs)) throw new Error('[Model] Layer '.concat(i, ' specified in model configuration is not implemented!'));
            if ('Sequential' === n && 0 === o) {
              var s = 'input',
              u = a.batch_input_shape.slice(1),
              c = new Qp({
                name: 'input',
                shape: u,
                gpu: e.gpu
              });
              e.modelLayersMap.set('input', c),
              e.inputTensorsMap.set('input', new Jp([], u)),
              e.inputLayerNames.push('input')
            } else if ('Model' === n && 'InputLayer' === i) {
              var l = a.batch_input_shape.slice(1);
              e.inputTensorsMap.set(a.name, new Jp([], l)),
              e.inputLayerNames.push(a.name)
            }
            var p = [
            ];
            if ('Sequential' === n) p = 0 === o ? [
              'input'
            ] : [
              r[o - 1].config.name
            ];
             else if ('Model' === n) {
              var h = t.inbound_nodes;
              h && h.length && (p = h[0].map(function (t) {
                return t[0]
              }))
            }
            e._createLayer(i, a, p)
          }
        }),
        this.modelLayersMap.forEach(function (t) {
          e.modelLayersInfo.push(Op() (t, [
            'name',
            'description',
            'layerClass',
            'inbound',
            'outbound'
          ])),
          0 === t.outbound.length && e.outputLayerNames.push(t.name)
        }),
        this.inputLayerNames.sort(),
        this.outputLayerNames.sort()
      }
    },
    {
      key: '_createLayer',
      value: function t(e, n, r) {
        var o = this,
        i = new Fs[e](Object.assign({
        }, n, {
          gpu: this.gpu
        })),
        a = [
        ];
        if ('Bidirectional' === e) {
          var s = i.forwardLayer.params.map(function (t) {
            return ''.concat(n.name, '/forward_').concat(n.layer.config.name, '/').concat(t)
          }),
          u = i.backwardLayer.params.map(function (t) {
            return ''.concat(n.name, '/backward_').concat(n.layer.config.name, '/').concat(t)
          });
          a = s.concat(u)
        } else a = 'TimeDistributed' === e ? i.layer.params.map(function (t) {
          return ''.concat(n.name, '/').concat(t)
        })  : i.params.map(function (t) {
          return ''.concat(n.name, '/').concat(t)
        });
        if (a && a.length) {
          var c = a.map(function (t) {
            var e = Cp() (o.modelWeights, function (e) {
              return new RegExp('^.*'.concat(t)).test(e.weightName)
            });
            if (!e) throw new Error('[Model] error loading weights.');
            var n = e.data,
            r = e.shape,
            i = e.type,
            a = new ArrayBuffer(n.byteLength),
            s = new Uint8Array(a);
            if (s.set(new Uint8Array(n.buffer, n.byteOffset, n.byteLength)), 'uint8' === i) {
              for (var u = e.quantizeMin, c = e.quantizeMax, l = new Float32Array(s), p = 0, h = l.length; p < h; p++) l[p] *= (c - u) / 255,
              l[p] += u;
              return new Jp(l, r)
            }
            return new Jp(new Float32Array(a), r)
          });
          i.setWeights(c)
        }
        this.modelLayersMap.set(n.name, i),
        r.forEach(function (t) {
          o.modelLayersMap.get(n.name).inbound.push(t),
          o.modelLayersMap.get(t).outbound.push(n.name)
        })
      }
    },
    {
      key: '_traverseDAG',
      value: function () {
        var t = Ts(regeneratorRuntime.mark(function t(e, n) {
          var r = this,
          o,
          i,
          a,
          s;
          return regeneratorRuntime.wrap(function t(u) {
            for (; ; ) switch (u.prev = u.next) {
              case 0:
                if (0 !== e.length) {
                  u.next = 6;
                  break
                }
                return this.runningProgress = 100,
                this.events.emit(n, 100),
                u.abrupt('return', !0);
              case 6:
                if (1 !== e.length) {
                  u.next = 32;
                  break
                }
                if (o = e[0], i = this.modelLayersMap.get(o), 'InputLayer' !== i.layerClass) {
                  u.next = 13;
                  break
                }
                this.finishedLayerNames.push(this.modelLayersMap.get(o).name),
                u.next = 26;
                break;
              case 13:
                if (a = this.modelLayersMap.get(o), !a.visited) {
                  u.next = 16;
                  break
                }
                return u.abrupt('return', !1);
              case 16:
                if (s = a.inbound.map(function (t) {
                  return r.modelLayersMap.get(t)
                }), Tp() (wp() (s, 'hasOutput'))) {
                  u.next = 19;
                  break
                }
                return u.abrupt('return', !1);
              case 19:
                if (a.isMergeLayer ? a.call(wp() (s, 'output'))  : a.call(s[0].output), a.hasOutput = !0, a.visited = !0, this.finishedLayerNames.push(a.name), !this.pauseAfterLayerCalls) {
                  u.next = 26;
                  break
                }
                return u.next = 26,
                jp.a.delay(0);
              case 26:
                return this.runningProgress += 100 / this.modelLayersMap.size,
                this.events.emit(n, this.runningProgress),
                u.next = 30,
                this._traverseDAG(i.outbound, n);
              case 30:
                u.next = 34;
                break;
              case 32:
                return u.next = 34,
                jp.a.all(e.map(function (t) {
                  return r._traverseDAG([t], n)
                }));
              case 34:
              case 'end':
                return u.stop()
            }
          },
          t,
          this)
        })); return function e(n, r) {
          return t.apply(this, arguments)
        }
      }()
    },
    {
      key: '_maybeTransferIntermediateOutputs',
      value: function t() {
        this.gpu && this.transferLayerOutputs && this.modelLayersMap.forEach(function (t) {
          t.output && t.output.glTexture && (Up.bindOutputTexture(t.output.glTexture, t.output.glTextureShape), t.output.transferFromGLTexture(), t.output.is2DReshaped && t.output.reshapeFrom2D())
        })
      }
    },
    {
      key: 'loadData',
      value: function t(e) {
        var n = this;
        this.inputLayerNames.forEach(function (t) {
          var r = n.modelLayersMap.get(t);
          n.inputTensorsMap.get(t).replaceTensorData(e[t]),
          r.call(n.inputTensorsMap.get(t)),
          r.hasOutput = !0,
          r.visited = !0
        })
      }
    },
    {
      key: 'predict',
      value: function () {
        var t = Ts(regeneratorRuntime.mark(function t(e) {
          var n = this,
          r,
          o,
          i,
          a;
          return regeneratorRuntime.wrap(function t(s) {
            for (; ; ) switch (s.prev = s.next) {
              case 0:
                if (this.isRunning = !0, this.runningProgress = 0, this.events.emit('predictProgress', 0), bp() (gp() (e).sort(), this.inputLayerNames)) {
                  s.next = 6;
                  break
                }
                throw this.isRunning = !1,
                new Error('[Model] predict() must take an object where the keys are the named inputs of the model: ' + JSON.stringify(this.inputLayerNames));
              case 6:
                if (Tp() (this.inputLayerNames, function (t) {
                  return e[t] instanceof Float32Array
                })) {
                  s.next = 9;
                  break
                }
                throw this.isRunning = !1,
                new Error('[Model] predict() must take an object where the values are the flattened data as Float32Array.');
              case 9:
                return this.finishedLayerNames = [
                ],
                this.modelLayersMap.forEach(function (t) {
                  t.hasOutput = !1,
                  t.visited = !1
                }),
                r = Rp() (),
                this.loadData(e),
                this.predictStats.loadData = Rp() () - r,
                r = Rp() (),
                s.next = 17,
                this._traverseDAG(this.inputLayerNames, 'predictProgress');
              case 17:
                return this.predictStats.forwardPass = Rp() () - r,
                this._maybeTransferIntermediateOutputs(),
                o = this.modelConfig.class_name,
                i = {
                },
                'Sequential' === o ? (a = this.modelLayersMap.get(this.outputLayerNames[0]), i.output = a.output.tensor.data)  : 'Model' === o && this.outputLayerNames.forEach(function (t) {
                  var e = n.modelLayersMap.get(t);
                  i[t] = e.output.tensor.data
                }),
                r = Rp() (),
                this.visMap.forEach(function (t) {
                  t.update()
                }),
                this.predictStats.visualizations = Rp() () - r,
                this.isRunning = !1,
                this.events.emit('predictProgress', 100),
                s.abrupt('return', i);
              case 28:
              case 'end':
                return s.stop()
            }
          },
          t,
          this)
        })); return function e(n) {
          return t.apply(this, arguments)
        }
      }()
    },
    {
      key: 'layerCall',
      value: function t(e, n) {
        if (this.modelLayersMap.has(e)) {
          var r;
          r = n instanceof Jp ? n : new Jp(n.data, n.shape);
          return this.modelLayersMap.get(e).call(r)
        }
      }
    },
    {
      key: 'cleanup',
      value: function t() {
        Up.clearRefs(),
        this.modelLayersMap.clear(),
        this.inputTensorsMap.clear(),
        this.visMap.clear(),
        delete this.modelWeights
      }
    }
    ]),
    t
  }(),
  bm = n(474),
  xm = n.n(bm),
  wm = n(475),
  Sm = n.n(wm),
  Tm = n(476),
  Pm = n.n(Tm);
  n.d(e, 'GPU_SUPPORT', function () {
    return Cm
  }),
  n.d(e, 'default', function () {
    return km
  }),
  n.d(e, 'Model', function () {
    return _m
  }),
  n.d(e, 'Tensor', function () {
    return Jp
  }),
  n.d(e, 'activations', function () {
    return Es
  }),
  n.d(e, 'layers', function () {
    return Fs
  }),
  n.d(e, 'testUtils', function () {
    return Rs
  });
  var Cm = Up.isSupported,
  km = {
    Model: _m,
    Tensor: Jp,
    GPU_SUPPORT: Cm,
    activations: Es,
    layers: Fs,
    testUtils: Rs
  }
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(23),
  i = n(15),
  a = n(5),
  s = [
  ].sort,
  u = [
    1,
    2,
    3
  ];
  r(r.P + r.F * (a(function () {
    u.sort(void 0)
  }) || !a(function () {
    u.sort(null)
  }) || !n(171) (s)), 'Array', {
    sort: function t(e) {
      return void 0 === e ? s.call(i(this))  : s.call(i(this), o(e))
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(5);
  t.exports = function (t, e) {
    return !!t && r(function () {
      e ? t.call(null, function () {
      }, 1)  : t.call(null)
    })
  }
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(80),
  i = n(111),
  a = n(4),
  s = n(39),
  u = n(9),
  c = n(2),
  l = n(3).ArrayBuffer,
  p = n(87),
  h = i.ArrayBuffer,
  f = i.DataView,
  d = o.ABV && l.isView,
  m = h.prototype.slice,
  y = o.VIEW,
  v = 'ArrayBuffer';
  r(r.G + r.W + r.F * (l !== h), {
    ArrayBuffer: h
  }),
  r(r.S + r.F * !o.CONSTR, v, {
    isView: function t(e) {
      return d && d(e) || c(e) && y in e
    }
  }),
  r(r.P + r.U + r.F * n(5) (function () {
    return !new h(2).slice(1, void 0).byteLength
  }), v, {
    slice: function t(e, n) {
      if (void 0 !== m && void 0 === n) return m.call(a(this), e);
      for (var r = a(this).byteLength, o = s(e, r), i = s(void 0 === n ? r : n, r), c = new (p(this, h)) (u(i - o)), l = new f(this), d = new f(c), y = 0; o < i; ) d.setUint8(y++, l.getUint8(o++));
      return c
    }
  }),
  n(60) (v)
},
function (t, e, n) {
  n(20) ('Int8', 1, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  })
},
function (t, e, n) {
  var r = n(7),
  o = n(4),
  i = n(29);
  t.exports = n(10) ? Object.defineProperties : function t(e, n) {
    o(e);
    for (var a = i(n), s = a.length, u = 0, c; s > u; ) r.f(e, c = a[u++], n[c]);
    return e
  }
},
function (t, e, n) {
  var r = n(176);
  t.exports = function (t, e) {
    return new (r(t)) (e)
  }
},
function (t, e, n) {
  var r = n(2),
  o = n(115),
  i = n(6) ('species');
  t.exports = function (t) {
    var e;
    return o(t) && (e = t.constructor, 'function' != typeof e || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)),
    void 0 === e ? Array : e
  }
},
function (t, e, n) {
  'use strict';
  var r = n(49),
  o = n(26),
  i = n(40),
  a = {
  };
  n(13) (a, n(6) ('iterator'), function () {
    return this
  }),
  t.exports = function (t, e, n) {
    t.prototype = r(a, {
      next: o(1, n)
    }),
    i(t, e + ' Iterator')
  }
},
function (t, e, n) {
  n(20) ('Uint8', 1, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  })
},
function (t, e, n) {
  n(20) ('Uint8', 1, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  }, !0)
},
function (t, e, n) {
  n(20) ('Int16', 2, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  })
},
function (t, e, n) {
  n(20) ('Uint16', 2, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  })
},
function (t, e, n) {
  n(20) ('Int32', 4, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  })
},
function (t, e, n) {
  n(20) ('Uint32', 4, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  })
},
function (t, e, n) {
  n(20) ('Float32', 4, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  })
},
function (t, e, n) {
  n(20) ('Float64', 8, function (t) {
    return function e(n, r, o) {
      return t(this, n, r, o)
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(119),
  o = n(44),
  i = 'Map';
  t.exports = n(63) (i, function (t) {
    return function e() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    get: function t(e) {
      var n = r.getEntry(o(this, i), e);
      return n && n.v
    },
    set: function t(e, n) {
      return r.def(o(this, i), 0 === e ? 0 : e, n)
    }
  }, r, !0)
},
function (t, e, n) {
  var r = n(2),
  o = n(92).set;
  t.exports = function (t, e, n) {
    var i = e.constructor,
    a;
    return i !== n && 'function' == typeof i && (a = i.prototype) !== n.prototype && r(a) && o && o(t, a),
    t
  }
},
function (t, e, n) {
  'use strict';
  var r = n(119),
  o = n(44),
  i = 'Set';
  t.exports = n(63) (i, function (t) {
    return function e() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function t(e) {
      return r.def(o(this, i), e = 0 === e ? 0 : e, e)
    }
  }, r)
},
function (t, e, n) {
  'use strict';
  var r = n(50) (0),
  o = n(22),
  i = n(25),
  a = n(121),
  s = n(122),
  u = n(2),
  c = n(5),
  l = n(44),
  p = 'WeakMap',
  h = i.getWeak,
  f = Object.isExtensible,
  d = s.ufstore,
  m = {
  },
  y,
  v = function (t) {
    return function e() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  },
  g = {
    get: function t(e) {
      if (u(e)) {
        var n = h(e);
        return !0 === n ? d(l(this, p)).get(e)  : n ? n[this._i] : void 0
      }
    },
    set: function t(e, n) {
      return s.def(l(this, p), e, n)
    }
  },
  _ = t.exports = n(63) (p, v, g, s, !0, !0);
  c(function () {
    return 7 != (new _).set((Object.freeze || Object) (m), 7).get(m)
  }) && (y = s.getConstructor(v, p), a(y.prototype, g), i.NEED = !0, r(['delete',
  'has',
  'get',
  'set'], function (t) {
    var e = _.prototype,
    n = e[t];
    o(e, t, function (e, r) {
      if (u(e) && !f(e)) {
        this._f || (this._f = new y);
        var o = this._f[t](e, r);
        return 'set' == t ? this : o
      }
      return n.call(this, e, r)
    })
  }))
},
function (t, e, n) {
  'use strict';
  var r = n(122),
  o = n(44),
  i = 'WeakSet';
  n(63) (i, function (t) {
    return function e() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function t(e) {
      return r.def(o(this, i), e, !0)
    }
  }, r, !1, !0)
},
function (t, e, n) {
  var r = n(0),
  o = n(23),
  i = n(4),
  a = (n(3).Reflect || {
  }).apply,
  s = Function.apply;
  r(r.S + r.F * !n(5) (function () {
    a(function () {
    })
  }), 'Reflect', {
    apply: function t(e, n, r) {
      var u = o(e),
      c = i(r);
      return a ? a(u, n, c)  : s.call(u, n, c)
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(49),
  i = n(23),
  a = n(4),
  s = n(2),
  u = n(5),
  c = n(193),
  l = (n(3).Reflect || {
  }).construct,
  p = u(function () {
    function t() {
    }
    return !(l(function () {
    }, [
    ], t) instanceof t)
  }),
  h = !u(function () {
    l(function () {
    })
  });
  r(r.S + r.F * (p || h), 'Reflect', {
    construct: function t(e, n) {
      i(e),
      a(n);
      var r = arguments.length < 3 ? e : i(arguments[2]);
      if (h && !p) return l(e, n, r);
      if (e == r) {
        switch (n.length) {
          case 0:
            return new e;
          case 1:
            return new e(n[0]);
          case 2:
            return new e(n[0], n[1]);
          case 3:
            return new e(n[0], n[1], n[2]);
          case 4:
            return new e(n[0], n[1], n[2], n[3])
        }
        var u = [
          null
        ];
        return u.push.apply(u, n),
        new (c.apply(e, u))
      }
      var f = r.prototype,
      d = o(s(f) ? f : Object.prototype),
      m = Function.apply.call(e, d, n);
      return s(m) ? m : d
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(23),
  o = n(2),
  i = n(123),
  a = [
  ].slice,
  s = {
  },
  u = function (t, e, n) {
    if (!(e in s)) {
      for (var r = [
      ], o = 0; o < e; o++) r[o] = 'a[' + o + ']';
      s[e] = Function('F,a', 'return new F(' + r.join(',') + ')')
    }
    return s[e](t, n)
  };
  t.exports = Function.bind || function t(e) {
    var n = r(this),
    s = a.call(arguments, 1),
    c = function () {
      var t = s.concat(a.call(arguments));
      return this instanceof c ? u(n, t.length, t)  : i(n, t, e)
    };
    return o(n.prototype) && (c.prototype = n.prototype),
    c
  }
},
function (t, e, n) {
  var r = n(7),
  o = n(0),
  i = n(4),
  a = n(47);
  o(o.S + o.F * n(5) (function () {
    Reflect.defineProperty(r.f({
    }, 1, {
      value: 1
    }), 1, {
      value: 2
    })
  }), 'Reflect', {
    defineProperty: function t(e, n, o) {
      i(e),
      n = a(n, !0),
      i(o);
      try {
        return r.f(e, n, o),
        !0
      } catch (t) {
        return !1
      }
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(21).f,
  i = n(4);
  r(r.S, 'Reflect', {
    deleteProperty: function t(e, n) {
      var r = o(i(e), n);
      return !(r && !r.configurable) && delete e[n]
    }
  })
},
function (t, e, n) {
  function r(t, e) {
    var n = arguments.length < 3 ? t : arguments[2],
    s,
    l;
    return c(t) === n ? t[e] : (s = o.f(t, e)) ? a(s, 'value') ? s.value : void 0 !== s.get ? s.get.call(n)  : void 0 : u(l = i(t)) ? r(l, e, n)  : void 0
  }
  var o = n(21),
  i = n(42),
  a = n(11),
  s = n(0),
  u = n(2),
  c = n(4);
  s(s.S, 'Reflect', {
    get: r
  })
},
function (t, e, n) {
  var r = n(21),
  o = n(0),
  i = n(4);
  o(o.S, 'Reflect', {
    getOwnPropertyDescriptor: function t(e, n) {
      return r.f(i(e), n)
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(42),
  i = n(4);
  r(r.S, 'Reflect', {
    getPrototypeOf: function t(e) {
      return o(i(e))
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Reflect', {
    has: function t(e, n) {
      return n in e
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(4),
  i = Object.isExtensible;
  r(r.S, 'Reflect', {
    isExtensible: function t(e) {
      return o(e),
      !i || i(e)
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Reflect', {
    ownKeys: n(124)
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(4),
  i = Object.preventExtensions;
  r(r.S, 'Reflect', {
    preventExtensions: function t(e) {
      o(e);
      try {
        return i && i(e),
        !0
      } catch (t) {
        return !1
      }
    }
  })
},
function (t, e, n) {
  function r(t, e, n) {
    var u = arguments.length < 4 ? t : arguments[3],
    h = i.f(l(t), e),
    f,
    d;
    if (!h) {
      if (p(d = a(t))) return r(d, e, n, u);
      h = c(0)
    }
    return s(h, 'value') ? !(!1 === h.writable || !p(u)) && (f = i.f(u, e) || c(0), f.value = n, o.f(u, e, f), !0)  : void 0 !== h.set && (h.set.call(u, n), !0)
  }
  var o = n(7),
  i = n(21),
  a = n(42),
  s = n(11),
  u = n(0),
  c = n(26),
  l = n(4),
  p = n(2);
  u(u.S, 'Reflect', {
    set: r
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(92);
  o && r(r.S, 'Reflect', {
    setPrototypeOf: function t(e, n) {
      o.check(e, n);
      try {
        return o.set(e, n),
        !0
      } catch (t) {
        return !1
      }
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(35),
  o = n(3),
  i = n(19),
  a = n(88),
  s = n(0),
  u = n(2),
  c = n(23),
  l = n(37),
  p = n(62),
  h = n(87),
  f = n(93).set,
  d = n(206) (),
  m = n(125),
  y = n(207),
  v = n(208),
  g = 'Promise',
  _ = o.TypeError,
  b = o.process,
  x = o[g],
  w = 'process' == a(b),
  S = function () {
  },
  T,
  P,
  C,
  k,
  O = P = m.f,
  E = !!function () {
    try {
      var t = x.resolve(1),
      e = (t.constructor = {
      }) [n(6) ('species')] = function (t) {
        t(S, S)
      };
      return (w || 'function' == typeof PromiseRejectionEvent) && t.then(S) instanceof e
    } catch (t) {
    }
  }(),
  j = function (t) {
    var e;
    return !(!u(t) || 'function' != typeof (e = t.then)) && e
  },
  A = function (t, e) {
    if (!t._n) {
      t._n = !0;
      var n = t._c;
      d(function () {
        for (var r = t._v, o = 1 == t._s, i = 0, a = function (e) {
          var n = o ? e.ok : e.fail,
          i = e.resolve,
          a = e.reject,
          s = e.domain,
          u,
          c;
          try {
            n ? (o || (2 == t._h && R(t), t._h = 1), !0 === n ? u = r : (s && s.enter(), u = n(r), s && s.exit()), u === e.promise ? a(_('Promise-chain cycle'))  : (c = j(u)) ? c.call(u, i, a)  : i(u))  : a(r)
          } catch (t) {
            a(t)
          }
        }; n.length > i; ) a(n[i++]);
        t._c = [
        ],
        t._n = !1,
        e && !t._h && F(t)
      })
    }
  },
  F = function (t) {
    f.call(o, function () {
      var e = t._v,
      n = M(t),
      r,
      i,
      a;
      if (n && (r = y(function () {
        w ? b.emit('unhandledRejection', e, t)  : (i = o.onunhandledrejection) ? i({
          promise: t,
          reason: e
        })  : (a = o.console) && a.error && a.error('Unhandled promise rejection', e)
      }), t._h = w || M(t) ? 2 : 1), t._a = void 0, n && r.e) throw r.v
    })
  },
  M = function (t) {
    return 1 !== t._h && 0 === (t._a || t._c).length
  },
  R = function (t) {
    f.call(o, function () {
      var e;
      w ? b.emit('rejectionHandled', t)  : (e = o.onrejectionhandled) && e({
        promise: t,
        reason: t._v
      })
    })
  },
  D = function (t) {
    var e = this;
    e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), A(e, !0))
  },
  I = function (t) {
    var e = this,
    n;
    if (!e._d) {
      e._d = !0,
      e = e._w || e;
      try {
        if (e === t) throw _('Promise can\'t be resolved itself');
        (n = j(t)) ? d(function () {
          var r = {
            _w: e,
            _d: !1
          };
          try {
            n.call(t, i(I, r, 1), i(D, r, 1))
          } catch (t) {
            D.call(r, t)
          }
        })  : (e._v = t, e._s = 1, A(e, !1))
      } catch (t) {
        D.call({
          _w: e,
          _d: !1
        }, t)
      }
    }
  };
  E || (x = function t(e) {
    l(this, x, g, '_h'),
    c(e),
    T.call(this);
    try {
      e(i(I, this, 1), i(D, this, 1))
    } catch (t) {
      D.call(this, t)
    }
  }, T = function t(e) {
    this._c = [
    ],
    this._a = void 0,
    this._s = 0,
    this._d = !1,
    this._v = void 0,
    this._h = 0,
    this._n = !1
  }, T.prototype = n(36) (x.prototype, {
    then: function t(e, n) {
      var r = O(h(this, x));
      return r.ok = 'function' != typeof e || e,
      r.fail = 'function' == typeof n && n,
      r.domain = w ? b.domain : void 0,
      this._c.push(r),
      this._a && this._a.push(r),
      this._s && A(this, !1),
      r.promise
    },
    catch : function (t) {
      return this.then(void 0, t)
    }
  }), C = function () {
    var t = new T;
    this.promise = t,
    this.resolve = i(I, t, 1),
    this.reject = i(D, t, 1)
  }, m.f = O = function (t) {
    return t === x || t === k ? new C(t)  : P(t)
  }),
  s(s.G + s.W + s.F * !E, {
    Promise: x
  }),
  n(40) (x, g),
  n(60) (g),
  k = n(34) [g],
  s(s.S + s.F * !E, g, {
    reject: function t(e) {
      var n = O(this);
      return (0, n.reject) (e),
      n.promise
    }
  }),
  s(s.S + s.F * (r || !E), g, {
    resolve: function t(e) {
      return v(r && this === k ? x : this, e)
    }
  }),
  s(s.S + s.F * !(E && n(61) (function (t) {
    x.all(t).catch (S)
  })), g, {
    all: function t(e) {
      var n = this,
      r = O(n),
      o = r.resolve,
      i = r.reject,
      a = y(function () {
        var t = [
        ],
        r = 0,
        a = 1;
        p(e, !1, function (e) {
          var s = r++,
          u = !1;
          t.push(void 0),
          a++,
          n.resolve(e).then(function (e) {
            u || (u = !0, t[s] = e, --a || o(t))
          }, i)
        }),
        --a || o(t)
      });
      return a.e && i(a.v),
      r.promise
    },
    race: function t(e) {
      var n = this,
      r = O(n),
      o = r.reject,
      i = y(function () {
        p(e, !1, function (t) {
          n.resolve(t).then(r.resolve, o)
        })
      });
      return i.e && o(i.v),
      r.promise
    }
  })
},
function (t, e, n) {
  var r = n(3),
  o = n(93).set,
  i = r.MutationObserver || r.WebKitMutationObserver,
  a = r.process,
  s = r.Promise,
  u = 'process' == n(38) (a);
  t.exports = function () {
    var t,
    e,
    n,
    c = function () {
      var r,
      o;
      for (u && (r = a.domain) && r.exit(); t; ) {
        o = t.fn,
        t = t.next;
        try {
          o()
        } catch (r) {
          throw t ? n()  : e = void 0,
          r
        }
      }
      e = void 0,
      r && r.enter()
    };
    if (u) n = function () {
      a.nextTick(c)
    };
     else if (!i || r.navigator && r.navigator.standalone) if (s && s.resolve) {
      var l = s.resolve();
      n = function () {
        l.then(c)
      }
    } else n = function () {
      o.call(r, c)
    };
     else {
      var p = !0,
      h = document.createTextNode('');
      new i(c).observe(h, {
        characterData: !0
      }),
      n = function () {
        h.data = p = !p
      }
    }
    return function (r) {
      var o = {
        fn: r,
        next: void 0
      };
      e && (e.next = o),
      t || (t = o, n()),
      e = o
    }
  }
},
function (t, e) {
  t.exports = function (t) {
    try {
      return {
        e: !1,
        v: t()
      }
    } catch (t) {
      return {
        e: !0,
        v: t
      }
    }
  }
},
function (t, e, n) {
  var r = n(4),
  o = n(2),
  i = n(125);
  t.exports = function (t, e) {
    if (r(t), o(e) && e.constructor === t) return e;
    var n = i.f(t);
    return (0, n.resolve) (e),
    n.promise
  }
},
function (t, e, n) {
  'use strict';
  var r = n(3),
  o = n(11),
  i = n(10),
  a = n(0),
  s = n(22),
  u = n(25).KEY,
  c = n(5),
  l = n(84),
  p = n(40),
  h = n(27),
  f = n(6),
  d = n(126),
  m = n(210),
  y = n(211),
  v = n(115),
  g = n(4),
  _ = n(2),
  b = n(16),
  x = n(47),
  w = n(26),
  S = n(49),
  T = n(127),
  P = n(21),
  C = n(7),
  k = n(29),
  O = P.f,
  E = C.f,
  j = T.f,
  A = r.Symbol,
  F = r.JSON,
  M = F && F.stringify,
  R = 'prototype',
  D = f('_hidden'),
  I = f('toPrimitive'),
  L = {
  }.propertyIsEnumerable,
  z = l('symbol-registry'),
  U = l('symbols'),
  G = l('op-symbols'),
  N = Object[R],
  B = 'function' == typeof A,
  q = r.QObject,
  V = !q || !q[R] || !q[R].findChild,
  H = i && c(function () {
    return 7 != S(E({
    }, 'a', {
      get: function () {
        return E(this, 'a', {
          value: 7
        }).a
      }
    })).a
  }) ? function (t, e, n) {
    var r = O(N, e);
    r && delete N[e],
    E(t, e, n),
    r && t !== N && E(N, e, r)
  }
   : E,
  W = function (t) {
    var e = U[t] = S(A[R]);
    return e._k = t,
    e
  },
  X = B && 'symbol' == typeof A.iterator ? function (t) {
    return 'symbol' == typeof t
  }
   : function (t) {
    return t instanceof A
  },
  Y = function t(e, n, r) {
    return e === N && Y(G, n, r),
    g(e),
    n = x(n, !0),
    g(r),
    o(U, n) ? (r.enumerable ? (o(e, D) && e[D][n] && (e[D][n] = !1), r = S(r, {
      enumerable: w(0, !1)
    }))  : (o(e, D) || E(e, D, w(1, {
    })), e[D][n] = !0), H(e, n, r))  : E(e, n, r)
  },
  $ = function t(e, n) {
    g(e);
    for (var r = y(n = b(n)), o = 0, i = r.length, a; i > o; ) Y(e, a = r[o++], n[a]);
    return e
  },
  K = function t(e, n) {
    return void 0 === n ? S(e)  : $(S(e), n)
  },
  J = function t(e) {
    var n = L.call(this, e = x(e, !0));
    return !(this === N && o(U, e) && !o(G, e)) && (!(n || !o(this, e) || !o(U, e) || o(this, D) && this[D][e]) || n)
  },
  Q = function t(e, n) {
    if (e = b(e), n = x(n, !0), e !== N || !o(U, n) || o(G, n)) {
      var r = O(e, n);
      return !r || !o(U, n) || o(e, D) && e[D][n] || (r.enumerable = !0),
      r
    }
  },
  Z = function t(e) {
    for (var n = j(b(e)), r = [
    ], i = 0, a; n.length > i; ) o(U, a = n[i++]) || a == D || a == u || r.push(a);
    return r
  },
  tt = function t(e) {
    for (var n = e === N, r = j(n ? G : b(e)), i = [
    ], a = 0, s; r.length > a; ) !o(U, s = r[a++]) || n && !o(N, s) || i.push(U[s]);
    return i
  };
  B || (A = function t() {
    if (this instanceof A) throw TypeError('Symbol is not a constructor!');
    var e = h(arguments.length > 0 ? arguments[0] : void 0),
    n = function (t) {
      this === N && n.call(G, t),
      o(this, D) && o(this[D], e) && (this[D][e] = !1),
      H(this, e, w(1, t))
    };
    return i && V && H(N, e, {
      configurable: !0,
      set: n
    }),
    W(e)
  }, s(A[R], 'toString', function t() {
    return this._k
  }), P.f = Q, C.f = Y, n(48).f = T.f = Z, n(51).f = J, n(64).f = tt, i && !n(35) && s(N, 'propertyIsEnumerable', J, !0), d.f = function (t) {
    return W(f(t))
  }),
  a(a.G + a.W + a.F * !B, {
    Symbol: A
  });
  for (var et = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), nt = 0; et.length > nt; ) f(et[nt++]);
  for (var rt = k(f.store), ot = 0; rt.length > ot; ) m(rt[ot++]);
  a(a.S + a.F * !B, 'Symbol', {
    for : function (t) {
      return o(z, t += '') ? z[t] : z[t] = A(t)
    },
    keyFor: function t(e) {
      if (!X(e)) throw TypeError(e + ' is not a symbol!');
      for (var n in z) if (z[n] === e) return n
    },
    useSetter: function () {
      V = !0
    },
    useSimple: function () {
      V = !1
    }
  }),
  a(a.S + a.F * !B, 'Object', {
    create: K,
    defineProperty: Y,
    defineProperties: $,
    getOwnPropertyDescriptor: Q,
    getOwnPropertyNames: Z,
    getOwnPropertySymbols: tt
  }),
  F && a(a.S + a.F * (!B || c(function () {
    var t = A();
    return '[null]' != M([t]) || '{}' != M({
      a: t
    }) || '{}' != M(Object(t))
  })), 'JSON', {
    stringify: function t(e) {
      for (var n = [
        e
      ], r = 1, o, i; arguments.length > r; ) n.push(arguments[r++]);
      if (i = o = n[1], (_(o) || void 0 !== e) && !X(e)) return v(o) || (o = function (t, e) {
        if ('function' == typeof i && (e = i.call(this, t, e)), !X(e)) return e
      }),
      n[1] = o,
      M.apply(F, n)
    }
  }),
  A[R][I] || n(13) (A[R], I, A[R].valueOf),
  p(A, 'Symbol'),
  p(Math, 'Math', !0),
  p(r.JSON, 'JSON', !0)
},
function (t, e, n) {
  var r = n(3),
  o = n(34),
  i = n(35),
  a = n(126),
  s = n(7).f;
  t.exports = function (t) {
    var e = o.Symbol || (o.Symbol = i ? {
    }
     : r.Symbol || {
    });
    '_' == t.charAt(0) || t in e || s(e, t, {
      value: a.f(t)
    })
  }
},
function (t, e, n) {
  var r = n(29),
  o = n(64),
  i = n(51);
  t.exports = function (t) {
    var e = r(t),
    n = o.f;
    if (n) for (var a = n(t), s = i.f, u = 0, c; a.length > u; ) s.call(t, c = a[u++]) && e.push(c);
    return e
  }
},
function (t, e, n) {
  var r = n(2),
  o = n(25).onFreeze;
  n(17) ('freeze', function (t) {
    return function e(n) {
      return t && r(n) ? t(o(n))  : n
    }
  })
},
function (t, e, n) {
  var r = n(2),
  o = n(25).onFreeze;
  n(17) ('seal', function (t) {
    return function e(n) {
      return t && r(n) ? t(o(n))  : n
    }
  })
},
function (t, e, n) {
  var r = n(2),
  o = n(25).onFreeze;
  n(17) ('preventExtensions', function (t) {
    return function e(n) {
      return t && r(n) ? t(o(n))  : n
    }
  })
},
function (t, e, n) {
  var r = n(2);
  n(17) ('isFrozen', function (t) {
    return function e(n) {
      return !r(n) || !!t && t(n)
    }
  })
},
function (t, e, n) {
  var r = n(2);
  n(17) ('isSealed', function (t) {
    return function e(n) {
      return !r(n) || !!t && t(n)
    }
  })
},
function (t, e, n) {
  var r = n(2);
  n(17) ('isExtensible', function (t) {
    return function e(n) {
      return !!r(n) && (!t || t(n))
    }
  })
},
function (t, e, n) {
  var r = n(16),
  o = n(21).f;
  n(17) ('getOwnPropertyDescriptor', function () {
    return function t(e, n) {
      return o(r(e), n)
    }
  })
},
function (t, e, n) {
  var r = n(15),
  o = n(42);
  n(17) ('getPrototypeOf', function () {
    return function t(e) {
      return o(r(e))
    }
  })
},
function (t, e, n) {
  var r = n(15),
  o = n(29);
  n(17) ('keys', function () {
    return function t(e) {
      return o(r(e))
    }
  })
},
function (t, e, n) {
  n(17) ('getOwnPropertyNames', function () {
    return n(127).f
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S + r.F, 'Object', {
    assign: n(121)
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Object', {
    is: n(224)
  })
},
function (t, e) {
  t.exports = Object.is || function t(e, n) {
    return e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n
  }
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Object', {
    setPrototypeOf: n(92).set
  })
},
function (t, e, n) {
  var r = n(7).f,
  o = Function.prototype,
  i = /^\s*function ([^ (]*)/,
  a = 'name';
  a in o || n(10) && r(o, a, {
    configurable: !0,
    get: function () {
      try {
        return ('' + this).match(i) [1]
      } catch (t) {
        return ''
      }
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(16),
  i = n(9);
  r(r.S, 'String', {
    raw: function t(e) {
      for (var n = o(e.raw), r = i(n.length), a = arguments.length, s = [
      ], u = 0; r > u; ) s.push(String(n[u++])),
      u < a && s.push(String(arguments[u]));
      return s.join('')
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(39),
  i = String.fromCharCode,
  a = String.fromCodePoint;
  r(r.S + r.F * (!!a && 1 != a.length), 'String', {
    fromCodePoint: function t(e) {
      for (var n = [
      ], r = arguments.length, a = 0, s; r > a; ) {
        if (s = + arguments[a++], o(s, 1114111) !== s) throw RangeError(s + ' is not a valid code point');
        n.push(s < 65536 ? i(s)  : i(55296 + ((s -= 65536) >> 10), s % 1024 + 56320))
      }
      return n.join('')
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(230) (!1);
  r(r.P, 'String', {
    codePointAt: function t(e) {
      return o(this, e)
    }
  })
},
function (t, e, n) {
  var r = n(28),
  o = n(24);
  t.exports = function (t) {
    return function (e, n) {
      var i = String(o(e)),
      a = r(n),
      s = i.length,
      u,
      c;
      return a < 0 || a >= s ? t ? '' : void 0 : (u = i.charCodeAt(a), u < 55296 || u > 56319 || a + 1 === s || (c = i.charCodeAt(a + 1)) < 56320 || c > 57343 ? t ? i.charAt(a)  : u : t ? i.slice(a, a + 2)  : c - 56320 + (u - 55296 << 10) + 65536)
    }
  }
},
function (t, e, n) {
  var r = n(0);
  r(r.P, 'String', {
    repeat: n(128)
  })
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(9),
  i = n(94),
  a = 'startsWith',
  s = ''[a];
  r(r.P + r.F * n(95) (a), 'String', {
    startsWith: function t(e) {
      var n = i(this, e, a),
      r = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)),
      u = String(e);
      return s ? s.call(n, u, r)  : n.slice(r, r + u.length) === u
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(9),
  i = n(94),
  a = 'endsWith',
  s = ''[a];
  r(r.P + r.F * n(95) (a), 'String', {
    endsWith: function t(e) {
      var n = i(this, e, a),
      r = arguments.length > 1 ? arguments[1] : void 0,
      u = o(n.length),
      c = void 0 === r ? u : Math.min(o(r), u),
      l = String(e);
      return s ? s.call(n, l, c)  : n.slice(c - l.length, c) === l
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(94),
  i = 'includes';
  r(r.P + r.F * n(95) (i), 'String', {
    includes: function t(e) {
      return !!~o(this, e, i).indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
},
function (t, e, n) {
  n(10) && 'g' != /./g.flags && n(7).f(RegExp.prototype, 'flags', {
    configurable: !0,
    get: n(236)
  })
},
function (t, e, n) {
  'use strict';
  var r = n(4);
  t.exports = function () {
    var t = r(this),
    e = '';
    return t.global && (e += 'g'),
    t.ignoreCase && (e += 'i'),
    t.multiline && (e += 'm'),
    t.unicode && (e += 'u'),
    t.sticky && (e += 'y'),
    e
  }
},
function (t, e, n) {
  n(65) ('match', 1, function (t, e, n) {
    return [function n(r) {
      'use strict';
      var o = t(this),
      i = void 0 == r ? void 0 : r[e];
      return void 0 !== i ? i.call(r, o)  : new RegExp(r) [e](String(o))
    },
    n]
  })
},
function (t, e, n) {
  n(65) ('replace', 2, function (t, e, n) {
    return [function r(o, i) {
      'use strict';
      var a = t(this),
      s = void 0 == o ? void 0 : o[e];
      return void 0 !== s ? s.call(o, a, i)  : n.call(String(a), o, i)
    },
    n]
  })
},
function (t, e, n) {
  n(65) ('split', 2, function (t, e, r) {
    'use strict';
    var o = n(129),
    i = r,
    a = [
    ].push,
    s = 'split',
    u = 'length',
    c = 'lastIndex';
    if ('c' == 'abbc'[s](/(b)*/) [1] || 4 != 'test'[s](/(?:)/, - 1) [u] || 2 != 'ab'[s](/(?:ab)*/) [u] || 4 != '.'[s](/(.?)(.?)/) [u] || '.'[s](/()()/) [u] > 1 || ''[s](/.?/) [u]) {
      var l = void 0 === /()??/.exec('') [1];
      r = function (t, e) {
        var n = String(this);
        if (void 0 === t && 0 === e) return [];
        if (!o(t)) return i.call(n, t, e);
        var r = [
        ],
        s = (t.ignoreCase ? 'i' : '') + (t.multiline ? 'm' : '') + (t.unicode ? 'u' : '') + (t.sticky ? 'y' : ''),
        p = 0,
        h = void 0 === e ? 4294967295 : e >>> 0,
        f = new RegExp(t.source, s + 'g'),
        d,
        m,
        y,
        v,
        g;
        for (l || (d = new RegExp('^' + f.source + '$(?!\\s)', s)); (m = f.exec(n)) && !((y = m.index + m[0][u]) > p && (r.push(n.slice(p, m.index)), !l && m[u] > 1 && m[0].replace(d, function () {
          for (g = 1; g < arguments[u] - 2; g++) void 0 === arguments[g] && (m[g] = void 0)
        }), m[u] > 1 && m.index < n[u] && a.apply(r, m.slice(1)), v = m[0][u], p = y, r[u] >= h)); ) f[c] === m.index && f[c]++;
        return p === n[u] ? !v && f.test('') || r.push('')  : r.push(n.slice(p)),
        r[u] > h ? r.slice(0, h)  : r
      }
    } else '0'[s](void 0, 0) [u] && (r = function (t, e) {
      return void 0 === t && 0 === e ? [
      ] : i.call(this, t, e)
    });
    return [function n(o, i) {
      var a = t(this),
      s = void 0 == o ? void 0 : o[e];
      return void 0 !== s ? s.call(o, a, i)  : r.call(String(a), o, i)
    },
    r]
  })
},
function (t, e, n) {
  n(65) ('search', 1, function (t, e, n) {
    return [function n(r) {
      'use strict';
      var o = t(this),
      i = void 0 == r ? void 0 : r[e];
      return void 0 !== i ? i.call(r, o)  : new RegExp(r) [e](String(o))
    },
    n]
  })
},
function (t, e, n) {
  'use strict';
  var r = n(19),
  o = n(0),
  i = n(15),
  a = n(120),
  s = n(89),
  u = n(9),
  c = n(96),
  l = n(90);
  o(o.S + o.F * !n(61) (function (t) {
    Array.from(t)
  }), 'Array', {
    from: function t(e) {
      var n = i(e),
      o = 'function' == typeof this ? this : Array,
      p = arguments.length,
      h = p > 1 ? arguments[1] : void 0,
      f = void 0 !== h,
      d = 0,
      m = l(n),
      y,
      v,
      g,
      _;
      if (f && (h = r(h, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || o == Array && s(m)) for (y = u(n.length), v = new o(y); y > d; d++) c(v, d, f ? h(n[d], d)  : n[d]);
       else for (_ = m.call(n), v = new o; !(g = _.next()).done; d++) c(v, d, f ? a(_, h, [
        g.value,
        d
      ], !0)  : g.value);
      return v.length = d,
      v
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(96);
  r(r.S + r.F * n(5) (function () {
    function t() {
    }
    return !(Array.of.call(t) instanceof t)
  }), 'Array', {
    of: function t() {
      for (var e = 0, n = arguments.length, r = new ('function' == typeof this ? this : Array) (n); n > e; ) o(r, e, arguments[e++]);
      return r.length = n,
      r
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.P, 'Array', {
    copyWithin: n(118)
  }),
  n(43) ('copyWithin')
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(50) (5),
  i = 'find',
  a = !0;
  i in [
  ] && Array(1) [i](function () {
    a = !1
  }),
  r(r.P + r.F * a, 'Array', {
    find: function t(e) {
      return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }),
  n(43) (i)
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(50) (6),
  i = 'findIndex',
  a = !0;
  i in [
  ] && Array(1) [i](function () {
    a = !1
  }),
  r(r.P + r.F * a, 'Array', {
    findIndex: function t(e) {
      return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }),
  n(43) (i)
},
function (t, e, n) {
  var r = n(0);
  r(r.P, 'Array', {
    fill: n(86)
  }),
  n(43) ('fill')
},
function (t, e, n) {
  var r = n(0),
  o = n(3).isFinite;
  r(r.S, 'Number', {
    isFinite: function t(e) {
      return 'number' == typeof e && o(e)
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Number', {
    isInteger: n(130)
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(130),
  i = Math.abs;
  r(r.S, 'Number', {
    isSafeInteger: function t(e) {
      return o(e) && i(e) <= 9007199254740991
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Number', {
    isNaN: function t(e) {
      return e != e
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Number', {
    EPSILON: Math.pow(2, - 52)
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Number', {
    MIN_SAFE_INTEGER: - 9007199254740991
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Number', {
    MAX_SAFE_INTEGER: 9007199254740991
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(255);
  r(r.S + r.F * (Number.parseFloat != o), 'Number', {
    parseFloat: o
  })
},
function (t, e, n) {
  var r = n(3).parseFloat,
  o = n(131).trim;
  t.exports = 1 / r(n(97) + '-0') != - 1 / 0 ? function t(e) {
    var n = o(String(e), 3),
    i = r(n);
    return 0 === i && '-' == n.charAt(0) ? - 0 : i
  }
   : r
},
function (t, e, n) {
  var r = n(0),
  o = n(257);
  r(r.S + r.F * (Number.parseInt != o), 'Number', {
    parseInt: o
  })
},
function (t, e, n) {
  var r = n(3).parseInt,
  o = n(131).trim,
  i = n(97),
  a = /^[-+]?0[xX]/;
  t.exports = 8 !== r(i + '08') || 22 !== r(i + '0x16') ? function t(e, n) {
    var i = o(String(e), 3);
    return r(i, n >>> 0 || (a.test(i) ? 16 : 10))
  }
   : r
},
function (t, e, n) {
  var r = n(0),
  o = n(132),
  i = Math.sqrt,
  a = Math.acosh;
  r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), 'Math', {
    acosh: function t(e) {
      return (e = + e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : o(e - 1 + i(e - 1) * i(e + 1))
    }
  })
},
function (t, e, n) {
  function r(t) {
    return isFinite(t = + t) && 0 != t ? t < 0 ? - r( - t)  : Math.log(t + Math.sqrt(t * t + 1))  : t
  }
  var o = n(0),
  i = Math.asinh;
  o(o.S + o.F * !(i && 1 / i(0) > 0), 'Math', {
    asinh: r
  })
},
function (t, e, n) {
  var r = n(0),
  o = Math.atanh;
  r(r.S + r.F * !(o && 1 / o( - 0) < 0), 'Math', {
    atanh: function t(e) {
      return 0 == (e = + e) ? e : Math.log((1 + e) / (1 - e)) / 2
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(98);
  r(r.S, 'Math', {
    cbrt: function t(e) {
      return o(e = + e) * Math.pow(Math.abs(e), 1 / 3)
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Math', {
    clz32: function t(e) {
      return (e >>>= 0) ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E)  : 32
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = Math.exp;
  r(r.S, 'Math', {
    cosh: function t(e) {
      return (o(e = + e) + o( - e)) / 2
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(99);
  r(r.S + r.F * (o != Math.expm1), 'Math', {
    expm1: o
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Math', {
    fround: n(266)
  })
},
function (t, e, n) {
  var r = n(98),
  o = Math.pow,
  i = o(2, - 52),
  a = o(2, - 23),
  s = o(2, 127) * (2 - a),
  u = o(2, - 126),
  c = function (t) {
    return t + 1 / i - 1 / i
  };
  t.exports = Math.fround || function t(e) {
    var n = Math.abs(e),
    o = r(e),
    l,
    p;
    return n < u ? o * c(n / u / a) * u * a : (l = (1 + a / i) * n, p = l - (l - n), p > s || p != p ? o * (1 / 0)  : o * p)
  }
},
function (t, e, n) {
  var r = n(0),
  o = Math.abs;
  r(r.S, 'Math', {
    hypot: function t(e, n) {
      for (var r = 0, i = 0, a = arguments.length, s = 0, u, c; i < a; ) u = o(arguments[i++]),
      s < u ? (c = s / u, r = r * c * c + 1, s = u)  : u > 0 ? (c = u / s, r += c * c)  : r += u;
      return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(r)
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = Math.imul;
  r(r.S + r.F * n(5) (function () {
    return - 5 != o(4294967295, 5) || 2 != o.length
  }), 'Math', {
    imul: function t(e, n) {
      var r = 65535,
      o = + e,
      i = + n,
      a = 65535 & o,
      s = 65535 & i;
      return 0 | a * s + ((65535 & o >>> 16) * s + a * (65535 & i >>> 16) << 16 >>> 0)
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Math', {
    log1p: n(132)
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Math', {
    log10: function t(e) {
      return Math.log(e) * Math.LOG10E
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Math', {
    log2: function t(e) {
      return Math.log(e) / Math.LN2
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Math', {
    sign: n(98)
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(99),
  i = Math.exp;
  r(r.S + r.F * n(5) (function () {
    return - 2e-17 != !Math.sinh( - 2e-17)
  }), 'Math', {
    sinh: function t(e) {
      return Math.abs(e = + e) < 1 ? (o(e) - o( - e)) / 2 : (i(e - 1) - i( - e - 1)) * (Math.E / 2)
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(99),
  i = Math.exp;
  r(r.S, 'Math', {
    tanh: function t(e) {
      var n = o(e = + e),
      r = o( - e);
      return n == 1 / 0 ? 1 : r == 1 / 0 ? - 1 : (n - r) / (i(e) + i( - e))
    }
  })
},
function (t, e, n) {
  var r = n(0);
  r(r.S, 'Math', {
    trunc: function t(e) {
      return (e > 0 ? Math.floor : Math.ceil) (e)
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(82) (!0);
  r(r.P, 'Array', {
    includes: function t(e) {
      return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }),
  n(43) ('includes')
},
function (t, e, n) {
  var r = n(0),
  o = n(133) (!1);
  r(r.S, 'Object', {
    values: function t(e) {
      return o(e)
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(133) (!0);
  r(r.S, 'Object', {
    entries: function t(e) {
      return o(e)
    }
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(124),
  i = n(16),
  a = n(21),
  s = n(96);
  r(r.S, 'Object', {
    getOwnPropertyDescriptors: function t(e) {
      for (var n = i(e), r = a.f, u = o(n), c = {
      }, l = 0, p, h; u.length > l; ) void 0 !== (h = r(n, p = u[l++])) && s(c, p, h);
      return c
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(134),
  i = n(100);
  r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(i), 'String', {
    padStart: function t(e) {
      return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
    }
  })
},
function (t, e, n) {
  'use strict';
  var r = n(0),
  o = n(134),
  i = n(100);
  r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(i), 'String', {
    padEnd: function t(e) {
      return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
    }
  })
},
function (t, e, n) {
  var r = n(3),
  o = n(0),
  i = n(100),
  a = [
  ].slice,
  s = /MSIE .\./.test(i),
  u = function (t) {
    return function (e, n) {
      var r = arguments.length > 2,
      o = !!r && a.call(arguments, 2);
      return t(r ? function () {
        ('function' == typeof e ? e : Function(e)).apply(this, o)
      }
       : e, n)
    }
  };
  o(o.G + o.B + o.F * s, {
    setTimeout: u(r.setTimeout),
    setInterval: u(r.setInterval)
  })
},
function (t, e, n) {
  var r = n(0),
  o = n(93);
  r(r.G + r.B, {
    setImmediate: o.set,
    clearImmediate: o.clear
  })
},
function (t, e, n) {
  for (var r = n(91), o = n(29), i = n(22), a = n(3), s = n(13), u = n(41), c = n(6), l = c('iterator'), p = c('toStringTag'), h = u.Array, f = {
    CSSRuleList: !0,
    CSSStyleDeclaration: !1,
    CSSValueList: !1,
    ClientRectList: !1,
    DOMRectList: !1,
    DOMStringList: !1,
    DOMTokenList: !0,
    DataTransferItemList: !1,
    FileList: !1,
    HTMLAllCollection: !1,
    HTMLCollection: !1,
    HTMLFormElement: !1,
    HTMLSelectElement: !1,
    MediaList: !0,
    MimeTypeArray: !1,
    NamedNodeMap: !1,
    NodeList: !0,
    PaintRequestList: !1,
    Plugin: !1,
    PluginArray: !1,
    SVGLengthList: !1,
    SVGNumberList: !1,
    SVGPathSegList: !1,
    SVGPointList: !1,
    SVGStringList: !1,
    SVGTransformList: !1,
    SourceBufferList: !1,
    StyleSheetList: !0,
    TextTrackCueList: !1,
    TextTrackList: !1,
    TouchList: !1
  }, d = o(f), m = 0; m < d.length; m++) {
    var y = d[m],
    v = f[y],
    g = a[y],
    _ = g && g.prototype,
    b;
    if (_ && (_[l] || s(_, l, h), _[p] || s(_, p, y), u[y] = h, v)) for (b in r) _[b] || i(_, b, r[b], !0)
  }
},
function (t, e) {
  !function (e) {
    'use strict';
    function n(t, e, n, r) {
      var i = e && e.prototype instanceof o ? e : o,
      a = Object.create(i.prototype),
      s = new f(r || [
      ]);
      return a._invoke = c(t, n, s),
      a
    }
    function r(t, e, n) {
      try {
        return {
          type: 'normal',
          arg: t.call(e, n)
        }
      } catch (t) {
        return {
          type: 'throw',
          arg: t
        }
      }
    }
    function o() {
    }
    function i() {
    }
    function a() {
    }
    function s(t) {
      [
        'next',
        'throw',
        'return'
      ].forEach(function (e) {
        t[e] = function (t) {
          return this._invoke(e, t)
        }
      })
    }
    function u(t) {
      function e(n, o, i, a) {
        var s = r(t[n], t, o);
        if ('throw' !== s.type) {
          var u = s.arg,
          c = u.value;
          return c && 'object' == typeof c && v.call(c, '__await') ? Promise.resolve(c.__await).then(function (t) {
            e('next', t, i, a)
          }, function (t) {
            e('throw', t, i, a)
          })  : Promise.resolve(c).then(function (t) {
            u.value = t,
            i(u)
          }, a)
        }
        a(s.arg)
      }
      function n(t, n) {
        function r() {
          return new Promise(function (r, o) {
            e(t, n, r, o)
          })
        }
        return o = o ? o.then(r, r)  : r()
      }
      var o;
      this._invoke = n
    }
    function c(t, e, n) {
      var o = P;
      return function i(a, s) {
        if (o === k) throw new Error('Generator is already running');
        if (o === O) {
          if ('throw' === a) throw s;
          return m()
        }
        for (n.method = a, n.arg = s; ; ) {
          var u = n.delegate;
          if (u) {
            var c = l(u, n);
            if (c) {
              if (c === E) continue;
              return c
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
           else if ('throw' === n.method) {
            if (o === P) throw o = O,
            n.arg;
            n.dispatchException(n.arg)
          } else 'return' === n.method && n.abrupt('return', n.arg);
          o = k;
          var p = r(t, e, n);
          if ('normal' === p.type) {
            if (o = n.done ? O : C, p.arg === E) continue;
            return {
              value: p.arg,
              done: n.done
            }
          }
          'throw' === p.type && (o = O, n.method = 'throw', n.arg = p.arg)
        }
      }
    }
    function l(t, e) {
      var n = t.iterator[e.method];
      if (n === g) {
        if (e.delegate = null, 'throw' === e.method) {
          if (t.iterator.return && (e.method = 'return', e.arg = g, l(t, e), 'throw' === e.method)) return E;
          e.method = 'throw',
          e.arg = new TypeError('The iterator does not provide a \'throw\' method')
        }
        return E
      }
      var o = r(n, t.iterator, e.arg);
      if ('throw' === o.type) return e.method = 'throw',
      e.arg = o.arg,
      e.delegate = null,
      E;
      var i = o.arg;
      return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, 'return' !== e.method && (e.method = 'next', e.arg = g), e.delegate = null, E)  : i : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, E)
    }
    function p(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]),
      2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
      this.tryEntries.push(e)
    }
    function h(t) {
      var e = t.completion || {
      };
      e.type = 'normal',
      delete e.arg,
      t.completion = e
    }
    function f(t) {
      this.tryEntries = [
        {
          tryLoc: 'root'
        }
      ],
      t.forEach(p, this),
      this.reset(!0)
    }
    function d(t) {
      if (t) {
        var e = t[b];
        if (e) return e.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var n = - 1,
          r = function e() {
            for (; ++n < t.length; ) if (v.call(t, n)) return e.value = t[n],
            e.done = !1,
            e;
            return e.value = g,
            e.done = !0,
            e
          };
          return r.next = r
        }
      }
      return {
        next: m
      }
    }
    function m() {
      return {
        value: g,
        done: !0
      }
    }
    var y = Object.prototype,
    v = y.hasOwnProperty,
    g,
    _ = 'function' == typeof Symbol ? Symbol : {
    },
    b = _.iterator || '@@iterator',
    x = _.asyncIterator || '@@asyncIterator',
    w = _.toStringTag || '@@toStringTag',
    S = 'object' == typeof t,
    T = e.regeneratorRuntime;
    if (T) return void (S && (t.exports = T));
    T = e.regeneratorRuntime = S ? t.exports : {
    },
    T.wrap = n;
    var P = 'suspendedStart',
    C = 'suspendedYield',
    k = 'executing',
    O = 'completed',
    E = {
    },
    j = {
    };
    j[b] = function () {
      return this
    };
    var A = Object.getPrototypeOf,
    F = A && A(A(d([])));
    F && F !== y && v.call(F, b) && (j = F);
    var M = a.prototype = o.prototype = Object.create(j);
    i.prototype = M.constructor = a,
    a.constructor = i,
    a[w] = i.displayName = 'GeneratorFunction',
    T.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor;
      return !!e && (e === i || 'GeneratorFunction' === (e.displayName || e.name))
    },
    T.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, a)  : (t.__proto__ = a, w in t || (t[w] = 'GeneratorFunction')),
      t.prototype = Object.create(M),
      t
    },
    T.awrap = function (t) {
      return {
        __await: t
      }
    },
    s(u.prototype),
    u.prototype[x] = function () {
      return this
    },
    T.AsyncIterator = u,
    T.async = function (t, e, r, o) {
      var i = new u(n(t, e, r, o));
      return T.isGeneratorFunction(e) ? i : i.next().then(function (t) {
        return t.done ? t.value : i.next()
      })
    },
    s(M),
    M[w] = 'Generator',
    M[b] = function () {
      return this
    },
    M.toString = function () {
      return '[object Generator]'
    },
    T.keys = function (t) {
      var e = [
      ];
      for (var n in t) e.push(n);
      return e.reverse(),
      function n() {
        for (; e.length; ) {
          var r = e.pop();
          if (r in t) return n.value = r,
          n.done = !1,
          n
        }
        return n.done = !0,
        n
      }
    },
    T.values = d,
    f.prototype = {
      constructor: f,
      reset: function (t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = g, this.done = !1, this.delegate = null, this.method = 'next', this.arg = g, this.tryEntries.forEach(h), !t) for (var e in this) 't' === e.charAt(0) && v.call(this, e) && !isNaN( + e.slice(1)) && (this[e] = g)
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0],
        e = t.completion;
        if ('throw' === e.type) throw e.arg;
        return this.rval
      },
      dispatchException: function (t) {
        function e(e, r) {
          return i.type = 'throw',
          i.arg = t,
          n.next = e,
          r && (n.method = 'next', n.arg = g),
          !!r
        }
        if (this.done) throw t;
        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r],
          i = o.completion;
          if ('root' === o.tryLoc) return e('end');
          if (o.tryLoc <= this.prev) {
            var a = v.call(o, 'catchLoc'),
            s = v.call(o, 'finallyLoc');
            if (a && s) {
              if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
              if (this.prev < o.finallyLoc) return e(o.finallyLoc)
            } else if (a) {
              if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
            } else {
              if (!s) throw new Error('try statement without catch or finally');
              if (this.prev < o.finallyLoc) return e(o.finallyLoc)
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var r = this.tryEntries[n];
          if (r.tryLoc <= this.prev && v.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
            var o = r;
            break
          }
        }
        o && ('break' === t || 'continue' === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
        var i = o ? o.completion : {
        };
        return i.type = t,
        i.arg = e,
        o ? (this.method = 'next', this.next = o.finallyLoc, E)  : this.complete(i)
      },
      complete: function (t, e) {
        if ('throw' === t.type) throw t.arg;
        return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end')  : 'normal' === t.type && e && (this.next = e),
        E
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc),
          h(n),
          E
        }
      },
      catch : function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.tryLoc === t) {
            var r = n.completion;
            if ('throw' === r.type) {
              var o = r.arg;
              h(n)
            }
            return o
          }
        }
        throw new Error('illegal catch attempt')
      },
      delegateYield: function (t, e, n) {
        return this.delegate = {
          iterator: d(t),
          resultName: e,
          nextLoc: n
        },
        'next' === this.method && (this.arg = g),
        E
      }
    }
  }(function () {
    return this
  }() || Function('return this') ())
},
function (t, e, n) {
  function r(t, e) {
    var n = a(t),
    r = !n && i(t),
    l = !n && !r && s(t),
    h = !n && !r && !l && c(t),
    f = n || r || l || h,
    d = f ? o(t.length, String)  : [
    ],
    m = d.length;
    for (var y in t) !e && !p.call(t, y) || f && ('length' == y || l && ('offset' == y || 'parent' == y) || h && ('buffer' == y || 'byteLength' == y || 'byteOffset' == y) || u(y, m)) || d.push(y);
    return d
  }
  var o = n(287),
  i = n(101),
  a = n(14),
  s = n(136),
  u = n(67),
  c = n(137),
  l = Object.prototype,
  p = l.hasOwnProperty;
  t.exports = r
},
function (t, e) {
  function n(t, e) {
    for (var n = - 1, r = Array(t); ++n < t; ) r[n] = e(n);
    return r
  }
  t.exports = n
},
function (t, e, n) {
  function r(t) {
    return i(t) && o(t) == a
  }
  var o = n(53),
  i = n(55),
  a = '[object Arguments]';
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    var e = a.call(t, u),
    n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {
    }
    var o = s.call(t);
    return r && (e ? t[u] = n : delete t[u]),
    o
  }
  var o = n(54),
  i = Object.prototype,
  a = i.hasOwnProperty,
  s = i.toString,
  u = o ? o.toStringTag : void 0;
  t.exports = r
},
function (t, e) {
  function n(t) {
    return o.call(t)
  }
  var r = Object.prototype,
  o = r.toString;
  t.exports = n
},
function (t, e) {
  function n() {
    return !1
  }
  t.exports = n
},
function (t, e, n) {
  function r(t) {
    return a(t) && i(t.length) && !!s[o(t)]
  }
  var o = n(53),
  i = n(102),
  a = n(55),
  s = {
  };
  s['[object Float32Array]'] = s['[object Float64Array]'] = s['[object Int8Array]'] = s['[object Int16Array]'] = s['[object Int32Array]'] = s['[object Uint8Array]'] = s['[object Uint8ClampedArray]'] = s['[object Uint16Array]'] = s['[object Uint32Array]'] = !0,
  s['[object Arguments]'] = s['[object Array]'] = s['[object ArrayBuffer]'] = s['[object Boolean]'] = s['[object DataView]'] = s['[object Date]'] = s['[object Error]'] = s['[object Function]'] = s['[object Map]'] = s['[object Number]'] = s['[object Object]'] = s['[object RegExp]'] = s['[object Set]'] = s['[object String]'] = s['[object WeakMap]'] = !1,
  t.exports = r
},
function (t, e) {
  function n(t) {
    return function (e) {
      return t(e)
    }
  }
  t.exports = n
},
function (t, e, n) {
  (function (t) {
    var r = n(135),
    o = 'object' == typeof e && e && !e.nodeType && e,
    i = o && 'object' == typeof t && t && !t.nodeType && t,
    a = i && i.exports === o,
    s = a && r.process,
    u = function () {
      try {
        return s && s.binding && s.binding('util')
      } catch (t) {
      }
    }();
    t.exports = u
  }).call(e, n(66) (t))
},
function (t, e, n) {
  function r(t) {
    if (!o(t)) return i(t);
    var e = [
    ];
    for (var n in Object(t)) s.call(t, n) && 'constructor' != n && e.push(n);
    return e
  }
  var o = n(296),
  i = n(297),
  a = Object.prototype,
  s = a.hasOwnProperty;
  t.exports = r
},
function (t, e) {
  function n(t) {
    var e = t && t.constructor;
    return t === ('function' == typeof e && e.prototype || r)
  }
  var r = Object.prototype;
  t.exports = n
},
function (t, e, n) {
  var r = n(298),
  o = r(Object.keys, Object);
  t.exports = o
},
function (t, e) {
  function n(t, e) {
    return function (n) {
      return t(e(n))
    }
  }
  t.exports = n
},
function (t, e, n) {
  function r(t, e, n, r, y, g) {
    var _ = c(t),
    b = c(e),
    x = _ ? d : u(t),
    w = b ? d : u(e);
    x = x == f ? m : x,
    w = w == f ? m : w;
    var S = x == m,
    T = w == m,
    P = x == w;
    if (P && l(t)) {
      if (!l(e)) return !1;
      _ = !0,
      S = !1
    }
    if (P && !S) return g || (g = new o),
    _ || p(t) ? i(t, e, n, r, y, g)  : a(t, e, x, n, r, y, g);
    if (!(n & h)) {
      var C = S && v.call(t, '__wrapped__'),
      k = T && v.call(e, '__wrapped__');
      if (C || k) {
        var O = C ? t.value()  : t,
        E = k ? e.value()  : e;
        return g || (g = new o),
        y(O, E, n, r, g)
      }
    }
    return !!P && (g || (g = new o), s(t, e, n, r, y, g))
  }
  var o = n(139),
  i = n(141),
  a = n(331),
  s = n(335),
  u = n(341),
  c = n(14),
  l = n(136),
  p = n(137),
  h = 1,
  f = '[object Arguments]',
  d = '[object Array]',
  m = '[object Object]',
  y = Object.prototype,
  v = y.hasOwnProperty;
  t.exports = r
},
function (t, e) {
  function n() {
    this.__data__ = [
    ],
    this.size = 0
  }
  t.exports = n
},
function (t, e, n) {
  function r(t) {
    var e = this.__data__,
    n = o(e, t);
    return !(n < 0) && (n == e.length - 1 ? e.pop()  : a.call(e, n, 1), --this.size, !0)
  }
  var o = n(70),
  i = Array.prototype,
  a = i.splice;
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    var e = this.__data__,
    n = o(e, t);
    return n < 0 ? void 0 : e[n][1]
  }
  var o = n(70);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return o(this.__data__, t) > - 1
  }
  var o = n(70);
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    var n = this.__data__,
    r = o(n, t);
    return r < 0 ? (++this.size, n.push([t,
    e]))  : n[r][1] = e,
    this
  }
  var o = n(70);
  t.exports = r
},
function (t, e, n) {
  function r() {
    this.__data__ = new o,
    this.size = 0
  }
  var o = n(69);
  t.exports = r
},
function (t, e) {
  function n(t) {
    var e = this.__data__,
    n = e.delete (t);
    return this.size = e.size,
    n
  }
  t.exports = n
},
function (t, e) {
  function n(t) {
    return this.__data__.get(t)
  }
  t.exports = n
},
function (t, e) {
  function n(t) {
    return this.__data__.has(t)
  }
  t.exports = n
},
function (t, e, n) {
  function r(t, e) {
    var n = this.__data__;
    if (n instanceof o) {
      var r = n.__data__;
      if (!i || r.length < s - 1) return r.push([t,
      e]),
      this.size = ++n.size,
      this;
      n = this.__data__ = new a(r)
    }
    return n.set(t, e),
    this.size = n.size,
    this
  }
  var o = n(69),
  i = n(104),
  a = n(105),
  s = 200;
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return !(!a(t) || i(t)) && (o(t) ? d : c).test(s(t))
  }
  var o = n(138),
  i = n(311),
  a = n(45),
  s = n(140),
  u = /[\\^$.*+?()[\]{}|]/g,
  c = /^\[object .+?Constructor\]$/,
  l = Function.prototype,
  p = Object.prototype,
  h = l.toString,
  f = p.hasOwnProperty,
  d = RegExp('^' + h.call(f).replace(u, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return !!i && i in t
  }
  var o = n(312),
  i = function () {
    var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || '');
    return t ? 'Symbol(src)_1.' + t : ''
  }();
  t.exports = r
},
function (t, e, n) {
  var r = n(18),
  o = r['__core-js_shared__'];
  t.exports = o
},
function (t, e) {
  function n(t, e) {
    return null == t ? void 0 : t[e]
  }
  t.exports = n
},
function (t, e, n) {
  function r() {
    this.size = 0,
    this.__data__ = {
      hash: new o,
      map: new (a || i),
      string: new o
    }
  }
  var o = n(315),
  i = n(69),
  a = n(104);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    var e = - 1,
    n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n; ) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }
  var o = n(316),
  i = n(317),
  a = n(318),
  s = n(319),
  u = n(320);
  r.prototype.clear = o,
  r.prototype.delete = i,
  r.prototype.get = a,
  r.prototype.has = s,
  r.prototype.set = u,
  t.exports = r
},
function (t, e, n) {
  function r() {
    this.__data__ = o ? o(null)  : {
    },
    this.size = 0
  }
  var o = n(72);
  t.exports = r
},
function (t, e) {
  function n(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0,
    e
  }
  t.exports = n
},
function (t, e, n) {
  function r(t) {
    var e = this.__data__;
    if (o) {
      var n = e[t];
      return n === i ? void 0 : n
    }
    return s.call(e, t) ? e[t] : void 0
  }
  var o = n(72),
  i = '__lodash_hash_undefined__',
  a = Object.prototype,
  s = a.hasOwnProperty;
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    var e = this.__data__;
    return o ? void 0 !== e[t] : a.call(e, t)
  }
  var o = n(72),
  i = Object.prototype,
  a = i.hasOwnProperty;
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1,
    n[t] = o && void 0 === e ? i : e,
    this
  }
  var o = n(72),
  i = '__lodash_hash_undefined__';
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    var e = o(this, t).delete (t);
    return this.size -= e ? 1 : 0,
    e
  }
  var o = n(73);
  t.exports = r
},
function (t, e) {
  function n(t) {
    var e = typeof t;
    return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t
  }
  t.exports = n
},
function (t, e, n) {
  function r(t) {
    return o(this, t).get(t)
  }
  var o = n(73);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return o(this, t).has(t)
  }
  var o = n(73);
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    var n = o(this, t),
    r = n.size;
    return n.set(t, e),
    this.size += n.size == r ? 0 : 1,
    this
  }
  var o = n(73);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    var e = - 1,
    n = null == t ? 0 : t.length;
    for (this.__data__ = new o; ++e < n; ) this.add(t[e])
  }
  var o = n(105),
  i = n(327),
  a = n(328);
  r.prototype.add = r.prototype.push = i,
  r.prototype.has = a,
  t.exports = r
},
function (t, e) {
  function n(t) {
    return this.__data__.set(t, r),
    this
  }
  var r = '__lodash_hash_undefined__';
  t.exports = n
},
function (t, e) {
  function n(t) {
    return this.__data__.has(t)
  }
  t.exports = n
},
function (t, e) {
  function n(t, e) {
    for (var n = - 1, r = null == t ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
    return !1
  }
  t.exports = n
},
function (t, e) {
  function n(t, e) {
    return t.has(e)
  }
  t.exports = n
},
function (t, e, n) {
  function r(t, e, n, r, o, S, P) {
    switch (n) {
      case w:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer,
        e = e.buffer;
      case x:
        return !(t.byteLength != e.byteLength || !S(new i(t), new i(e)));
      case h:
      case f:
      case y:
        return a( + t, + e);
      case d:
        return t.name == e.name && t.message == e.message;
      case v:
      case _:
        return t == e + '';
      case m:
        var C = u;
      case g:
        var k = r & l;
        if (C || (C = c), t.size != e.size && !k) return !1;
        var O = P.get(t);
        if (O) return O == e;
        r |= p,
        P.set(t, e);
        var E = s(C(t), C(e), r, o, S, P);
        return P.delete (t),
        E;
      case b:
        if (T) return T.call(t) == T.call(e)
    }
    return !1
  }
  var o = n(54),
  i = n(332),
  a = n(71),
  s = n(141),
  u = n(333),
  c = n(334),
  l = 1,
  p = 2,
  h = '[object Boolean]',
  f = '[object Date]',
  d = '[object Error]',
  m = '[object Map]',
  y = '[object Number]',
  v = '[object RegExp]',
  g = '[object Set]',
  _ = '[object String]',
  b = '[object Symbol]',
  x = '[object ArrayBuffer]',
  w = '[object DataView]',
  S = o ? o.prototype : void 0,
  T = S ? S.valueOf : void 0;
  t.exports = r
},
function (t, e, n) {
  var r = n(18),
  o = r.Uint8Array;
  t.exports = o
},
function (t, e) {
  function n(t) {
    var e = - 1,
    n = Array(t.size);
    return t.forEach(function (t, r) {
      n[++e] = [
        r,
        t
      ]
    }),
    n
  }
  t.exports = n
},
function (t, e) {
  function n(t) {
    var e = - 1,
    n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t
    }),
    n
  }
  t.exports = n
},
function (t, e, n) {
  function r(t, e, n, r, a, u) {
    var c = n & i,
    l = o(t),
    p = l.length;
    if (p != o(e).length && !c) return !1;
    for (var h = p; h--; ) {
      var f = l[h];
      if (!(c ? f in e : s.call(e, f))) return !1
    }
    var d = u.get(t);
    if (d && u.get(e)) return d == e;
    var m = !0;
    u.set(t, e),
    u.set(e, t);
    for (var y = c; ++h < p; ) {
      f = l[h];
      var v = t[f],
      g = e[f];
      if (r) var _ = c ? r(g, v, f, e, t, u)  : r(v, g, f, t, e, u);
      if (!(void 0 === _ ? v === g || a(v, g, n, r, u)  : _)) {
        m = !1;
        break
      }
      y || (y = 'constructor' == f)
    }
    if (m && !y) {
      var b = t.constructor,
      x = e.constructor;
      b != x && 'constructor' in t && 'constructor' in e && !('function' == typeof b && b instanceof b && 'function' == typeof x && x instanceof x) && (m = !1)
    }
    return u.delete (t),
    u.delete (e),
    m
  }
  var o = n(336),
  i = 1,
  a = Object.prototype,
  s = a.hasOwnProperty;
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return o(t, a, i)
  }
  var o = n(337),
  i = n(338),
  a = n(52);
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n) {
    var r = e(t);
    return i(t) ? r : o(r, n(t))
  }
  var o = n(142),
  i = n(14);
  t.exports = r
},
function (t, e, n) {
  var r = n(339),
  o = n(340),
  i = Object.prototype,
  a = i.propertyIsEnumerable,
  s = Object.getOwnPropertySymbols,
  u = s ? function (t) {
    return null == t ? [
    ] : (t = Object(t), r(s(t), function (e) {
      return a.call(t, e)
    }))
  }
   : o;
  t.exports = u
},
function (t, e) {
  function n(t, e) {
    for (var n = - 1, r = null == t ? 0 : t.length, o = 0, i = [
    ]; ++n < r; ) {
      var a = t[n];
      e(a, n, t) && (i[o++] = a)
    }
    return i
  }
  t.exports = n
},
function (t, e) {
  function n() {
    return []
  }
  t.exports = n
},
function (t, e, n) {
  var r = n(342),
  o = n(104),
  i = n(343),
  a = n(344),
  s = n(345),
  u = n(53),
  c = n(140),
  l = '[object Map]',
  p = '[object Promise]',
  h = '[object Set]',
  f = '[object WeakMap]',
  d = '[object DataView]',
  m = c(r),
  y = c(o),
  v = c(i),
  g = c(a),
  _ = c(s),
  b = u;
  (r && b(new r(new ArrayBuffer(1))) != d || o && b(new o) != l || i && b(i.resolve()) != p || a && b(new a) != h || s && b(new s) != f) && (b = function (t) {
    var e = u(t),
    n = '[object Object]' == e ? t.constructor : void 0,
    r = n ? c(n)  : '';
    if (r) switch (r) {
      case m:
        return d;
      case y:
        return l;
      case v:
        return p;
      case g:
        return h;
      case _:
        return f
    }
    return e
  }), t.exports = b
},
function (t, e, n) {
  var r = n(31),
  o = n(18),
  i = r(o, 'DataView');
  t.exports = i
},
function (t, e, n) {
  var r = n(31),
  o = n(18),
  i = r(o, 'Promise');
  t.exports = i
},
function (t, e, n) {
  var r = n(31),
  o = n(18),
  i = r(o, 'Set');
  t.exports = i
},
function (t, e, n) {
  var r = n(31),
  o = n(18),
  i = r(o, 'WeakMap');
  t.exports = i
},
function (t, e, n) {
  function r(t, e) {
    return (s(t) ? o : a) (t, i(e, 3))
  }
  var o = n(143),
  i = n(74),
  a = n(362),
  s = n(14);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    var e = i(t);
    return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1])  : function (n) {
      return n === t || o(n, t, e)
    }
  }
  var o = n(348),
  i = n(349),
  a = n(145);
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n, r) {
    var u = n.length,
    c = u,
    l = !r;
    if (null == t) return !c;
    for (t = Object(t); u--; ) {
      var p = n[u];
      if (l && p[2] ? p[1] !== t[p[0]] : !(p[0] in t)) return !1
    }
    for (; ++u < c; ) {
      p = n[u];
      var h = p[0],
      f = t[h],
      d = p[1];
      if (l && p[2]) {
        if (void 0 === f && !(h in t)) return !1
      } else {
        var m = new o;
        if (r) var y = r(f, d, h, t, e, m);
        if (!(void 0 === y ? i(d, f, a | s, r, m)  : y)) return !1
      }
    }
    return !0
  }
  var o = n(139),
  i = n(103),
  a = 1,
  s = 2;
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    for (var e = i(t), n = e.length; n--; ) {
      var r = e[n],
      a = t[r];
      e[n] = [
        r,
        a,
        o(a)
      ]
    }
    return e
  }
  var o = n(144),
  i = n(52);
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    return s(t) && u(e) ? c(l(t), e)  : function (n) {
      var r = i(n, t);
      return void 0 === r && r === e ? a(n, t)  : o(e, r, p | h)
    }
  }
  var o = n(103),
  i = n(351),
  a = n(146),
  s = n(107),
  u = n(144),
  c = n(145),
  l = n(57),
  p = 1,
  h = 2;
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n) {
    var r = null == t ? void 0 : o(t, e);
    return void 0 === r ? n : r
  }
  var o = n(106);
  t.exports = r
},
function (t, e, n) {
  var r = n(353),
  o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  i = /\\(\\)?/g,
  a = r(function (t) {
    var e = [
    ];
    return 46 === t.charCodeAt(0) && e.push(''),
    t.replace(o, function (t, n, r, o) {
      e.push(r ? o.replace(i, '$1')  : n || t)
    }),
    e
  });
  t.exports = a
},
function (t, e, n) {
  function r(t) {
    var e = o(t, function (t) {
      return n.size === i && n.clear(),
      t
    }),
    n = e.cache;
    return e
  }
  var o = n(354),
  i = 500;
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    if ('function' != typeof t || null != e && 'function' != typeof e) throw new TypeError(i);
    var n = function () {
      var r = arguments,
      o = e ? e.apply(this, r)  : r[0],
      i = n.cache;
      if (i.has(o)) return i.get(o);
      var a = t.apply(this, r);
      return n.cache = i.set(o, a) || i,
      a
    };
    return n.cache = new (r.Cache || o),
    n
  }
  var o = n(105),
  i = 'Expected a function';
  r.Cache = o,
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return null == t ? '' : o(t)
  }
  var o = n(356);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    if ('string' == typeof t) return t;
    if (a(t)) return i(t, r) + '';
    if (s(t)) return l ? l.call(t)  : '';
    var e = t + '';
    return '0' == e && 1 / t == - u ? '-0' : e
  }
  var o = n(54),
  i = n(143),
  a = n(14),
  s = n(76),
  u = 1 / 0,
  c = o ? o.prototype : void 0,
  l = c ? c.toString : void 0;
  t.exports = r
},
function (t, e) {
  function n(t, e) {
    return null != t && e in Object(t)
  }
  t.exports = n
},
function (t, e, n) {
  function r(t, e, n) {
    e = o(e, t);
    for (var r = - 1, l = e.length, p = !1; ++r < l; ) {
      var h = c(e[r]);
      if (!(p = null != t && n(t, h))) break;
      t = t[h]
    }
    return p || ++r != l ? p : !!(l = null == t ? 0 : t.length) && u(l) && s(h, l) && (a(t) || i(t))
  }
  var o = n(75),
  i = n(101),
  a = n(14),
  s = n(67),
  u = n(102),
  c = n(57);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return a(t) ? o(s(t))  : i(t)
  }
  var o = n(360),
  i = n(361),
  a = n(107),
  s = n(57);
  t.exports = r
},
function (t, e) {
  function n(t) {
    return function (e) {
      return null == e ? void 0 : e[t]
    }
  }
  t.exports = n
},
function (t, e, n) {
  function r(t) {
    return function (e) {
      return o(e, t)
    }
  }
  var o = n(106);
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    var n = - 1,
    r = i(t) ? Array(t.length)  : [
    ];
    return o(t, function (t, o, i) {
      r[++n] = e(t, o, i)
    }),
    r
  }
  var o = n(147),
  i = n(56);
  t.exports = r
},
function (t, e, n) {
  function r(t, e) {
    return t && o(t, e, i)
  }
  var o = n(364),
  i = n(52);
  t.exports = r
},
function (t, e, n) {
  var r = n(365),
  o = r();
  t.exports = o
},
function (t, e) {
  function n(t) {
    return function (e, n, r) {
      for (var o = - 1, i = Object(e), a = r(e), s = a.length; s--; ) {
        var u = a[t ? s : ++o];
        if (!1 === n(i[u], u, i)) break
      }
      return e
    }
  }
  t.exports = n
},
function (t, e, n) {
  function r(t, e) {
    return function (n, r) {
      if (null == n) return n;
      if (!o(n)) return t(n, r);
      for (var i = n.length, a = e ? i : - 1, s = Object(n); (e ? a-- : ++a < i) && !1 !== r(s[a], a, s); );
      return n
    }
  }
  var o = n(56);
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n) {
    var r = s(t) ? o : i;
    return n && u(t, e, n) && (e = void 0),
    r(t, a(e, 3))
  }
  var o = n(368),
  i = n(369),
  a = n(74),
  s = n(14),
  u = n(148);
  t.exports = r
},
function (t, e) {
  function n(t, e) {
    for (var n = - 1, r = null == t ? 0 : t.length; ++n < r; ) if (!e(t[n], n, t)) return !1;
    return !0
  }
  t.exports = n
},
function (t, e, n) {
  function r(t, e) {
    var n = !0;
    return o(t, function (t, r, o) {
      return n = !!e(t, r, o)
    }),
    n
  }
  var o = n(147);
  t.exports = r
},
function (t, e, n) {
  var r = n(371),
  o = n(372),
  i = r(o);
  t.exports = i
},
function (t, e, n) {
  function r(t) {
    return function (e, n, r) {
      var s = Object(e);
      if (!i(e)) {
        var u = o(n, 3);
        e = a(e),
        n = function (t) {
          return u(s[t], t, s)
        }
      }
      var c = t(e, n, r);
      return c > - 1 ? s[u ? e[c] : c] : void 0
    }
  }
  var o = n(74),
  i = n(56),
  a = n(52);
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n) {
    var r = null == t ? 0 : t.length;
    if (!r) return - 1;
    var u = null == n ? 0 : a(n);
    return u < 0 && (u = s(r + u, 0)),
    o(t, i(e, 3), u)
  }
  var o = n(373),
  i = n(74),
  a = n(149),
  s = Math.max;
  t.exports = r
},
function (t, e) {
  function n(t, e, n, r) {
    for (var o = t.length, i = n + (r ? 1 : - 1); r ? i-- : ++i < o; ) if (e(t[i], i, t)) return i;
    return - 1
  }
  t.exports = n
},
function (t, e, n) {
  function r(t) {
    if ('number' == typeof t) return t;
    if (i(t)) return a;
    if (o(t)) {
      var e = 'function' == typeof t.valueOf ? t.valueOf()  : t;
      t = o(e) ? e + '' : e
    }
    if ('string' != typeof t) return 0 === t ? t : + t;
    t = t.replace(s, '');
    var n = c.test(t);
    return n || l.test(t) ? p(t.slice(2), n ? 2 : 8)  : u.test(t) ? a : + t
  }
  var o = n(45),
  i = n(76),
  a = NaN,
  s = /^\s+|\s+$/g,
  u = /^[-+]0x[0-9a-f]+$/i,
  c = /^0b[01]+$/i,
  l = /^0o[0-7]+$/i,
  p = parseInt;
  t.exports = r
},
function (t, e, n) {
  var r = n(376),
  o = n(381),
  i = o(function (t, e) {
    return null == t ? {
    }
     : r(t, e)
  });
  t.exports = i
},
function (t, e, n) {
  function r(t, e) {
    return o(t, e, function (e, n) {
      return i(t, n)
    })
  }
  var o = n(377),
  i = n(146);
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n) {
    for (var r = - 1, s = e.length, u = {
    }; ++r < s; ) {
      var c = e[r],
      l = o(t, c);
      n(l, c) && i(u, a(c, t), l)
    }
    return u
  }
  var o = n(106),
  i = n(378),
  a = n(75);
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n, r) {
    if (!s(t)) return t;
    e = i(e, t);
    for (var c = - 1, l = e.length, p = l - 1, h = t; null != h && ++c < l; ) {
      var f = u(e[c]),
      d = n;
      if (c != p) {
        var m = h[f];
        d = r ? r(m, f, h)  : void 0,
        void 0 === d && (d = s(m) ? m : a(e[c + 1]) ? [
        ] : {
        })
      }
      o(h, f, d),
      h = h[f]
    }
    return t
  }
  var o = n(379),
  i = n(75),
  a = n(67),
  s = n(45),
  u = n(57);
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n) {
    var r = t[e];
    s.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n)
  }
  var o = n(380),
  i = n(71),
  a = Object.prototype,
  s = a.hasOwnProperty;
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n) {
    '__proto__' == e && o ? o(t, e, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    })  : t[e] = n
  }
  var o = n(151);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return a(i(t, void 0, o), t + '')
  }
  var o = n(382),
  i = n(384),
  a = n(386);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return (null == t ? 0 : t.length) ? o(t, 1)  : [
    ]
  }
  var o = n(152);
  t.exports = r
},
function (t, e, n) {
  function r(t) {
    return a(t) || i(t) || !!(s && t && t[s])
  }
  var o = n(54),
  i = n(101),
  a = n(14),
  s = o ? o.isConcatSpreadable : void 0;
  t.exports = r
},
function (t, e, n) {
  function r(t, e, n) {
    return e = i(void 0 === e ? t.length - 1 : e, 0),
    function () {
      for (var r = arguments, a = - 1, s = i(r.length - e, 0), u = Array(s); ++a < s; ) u[a] = r[e + a];
      a = - 1;
      for (var c = Array(e + 1); ++a < e; ) c[a] = r[a];
      return c[e] = n(u),
      o(t, this, c)
    }
  }
  var o = n(385),
  i = Math.max;
  t.exports = r
},
function (t, e) {
  function n(t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, n[0]);
      case 2:
        return t.call(e, n[0], n[1]);
      case 3:
        return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
  }
  t.exports = n
},
function (t, e, n) {
  var r = n(387),
  o = n(389),
  i = o(r);
  t.exports = i
},
function (t, e, n) {
  var r = n(388),
  o = n(151),
  i = n(108),
  a = o ? function (t, e) {
    return o(t, 'toString', {
      configurable: !0,
      enumerable: !1,
      value: r(e),
      writable: !0
    })
  }
   : i;
  t.exports = a
},
function (t, e) {
  function n(t) {
    return function () {
      return t
    }
  }
  t.exports = n
},
function (t, e) {
  function n(t) {
    var e = 0,
    n = 0;
    return function () {
      var a = i(),
      s = o - (a - n);
      if (n = a, s > 0) {
        if (++e >= r) return arguments[0]
      } else e = 0;
      return t.apply(void 0, arguments)
    }
  }
  var r = 800,
  o = 16,
  i = Date.now;
  t.exports = n
},
function (t, e, n) {
  (function (e, n, r) {
    !function (e) {
      var n;
      t.exports = e()
    }(function () {
      var t,
      o,
      i;
      return function t(e, n, r) {
        function o(a, s) {
          if (!n[a]) {
            if (!e[a]) {
              var u = 'function' == typeof _dereq_ && _dereq_;
              if (!s && u) return u(a, !0);
              if (i) return i(a, !0);
              var c = new Error('Cannot find module \'' + a + '\'');
              throw c.code = 'MODULE_NOT_FOUND',
              c
            }
            var l = n[a] = {
              exports: {
              }
            };
            e[a][0].call(l.exports, function (t) {
              var n = e[a][1][t];
              return o(n || t)
            }, l, l.exports, t, e, n, r)
          }
          return n[a].exports
        }
        for (var i = 'function' == typeof _dereq_ && _dereq_, a = 0; a < r.length; a++) o(r[a]);
        return o
      }({
        1: [
          function (t, e, n) {
            'use strict';
            e.exports = function (t) {
              function e(t) {
                var e = new n(t),
                r = e.promise();
                return e.setHowMany(1),
                e.setUnwrap(),
                e.init(),
                r
              }
              var n = t._SomePromiseArray;
              t.any = function (t) {
                return e(t)
              },
              t.prototype.any = function () {
                return e(this)
              }
            }
          },
          {
          }
        ],
        2: [
          function (t, n, r) {
            'use strict';
            function o() {
              this._customScheduler = !1,
              this._isTickUsed = !1,
              this._lateQueue = new l(16),
              this._normalQueue = new l(16),
              this._haveDrainedQueues = !1,
              this._trampolineEnabled = !0;
              var t = this;
              this.drainQueues = function () {
                t._drainQueues()
              },
              this._schedule = c
            }
            function i(t, e, n) {
              this._lateQueue.push(t, e, n),
              this._queueTick()
            }
            function a(t, e, n) {
              this._normalQueue.push(t, e, n),
              this._queueTick()
            }
            function s(t) {
              this._normalQueue._pushOne(t),
              this._queueTick()
            }
            var u;
            try {
              throw new Error
            } catch (t) {
              u = t
            }
            var c = t('./schedule'),
            l = t('./queue'),
            p = t('./util');
            o.prototype.setScheduler = function (t) {
              var e = this._schedule;
              return this._schedule = t,
              this._customScheduler = !0,
              e
            },
            o.prototype.hasCustomScheduler = function () {
              return this._customScheduler
            },
            o.prototype.enableTrampoline = function () {
              this._trampolineEnabled = !0
            },
            o.prototype.disableTrampolineIfNecessary = function () {
              p.hasDevTools && (this._trampolineEnabled = !1)
            },
            o.prototype.haveItemsQueued = function () {
              return this._isTickUsed || this._haveDrainedQueues
            },
            o.prototype.fatalError = function (t, n) {
              n ? (e.stderr.write('Fatal ' + (t instanceof Error ? t.stack : t) + '\n'), e.exit(2))  : this.throwLater(t)
            },
            o.prototype.throwLater = function (t, e) {
              if (1 === arguments.length && (e = t, t = function () {
                throw e
              }), 'undefined' != typeof setTimeout) setTimeout(function () {
                t(e)
              }, 0);
               else try {
                this._schedule(function () {
                  t(e)
                })
              } catch (t) {
                throw new Error('No async scheduler available\n\n    See http://goo.gl/MqrFmX\n')
              }
            },
            p.hasDevTools ? (o.prototype.invokeLater = function (t, e, n) {
              this._trampolineEnabled ? i.call(this, t, e, n)  : this._schedule(function () {
                setTimeout(function () {
                  t.call(e, n)
                }, 100)
              })
            }, o.prototype.invoke = function (t, e, n) {
              this._trampolineEnabled ? a.call(this, t, e, n)  : this._schedule(function () {
                t.call(e, n)
              })
            }, o.prototype.settlePromises = function (t) {
              this._trampolineEnabled ? s.call(this, t)  : this._schedule(function () {
                t._settlePromises()
              })
            })  : (o.prototype.invokeLater = i, o.prototype.invoke = a, o.prototype.settlePromises = s),
            o.prototype._drainQueue = function (t) {
              for (; t.length() > 0; ) {
                var e = t.shift();
                if ('function' == typeof e) {
                  var n = t.shift(),
                  r = t.shift();
                  e.call(n, r)
                } else e._settlePromises()
              }
            },
            o.prototype._drainQueues = function () {
              this._drainQueue(this._normalQueue),
              this._reset(),
              this._haveDrainedQueues = !0,
              this._drainQueue(this._lateQueue)
            },
            o.prototype._queueTick = function () {
              this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
            },
            o.prototype._reset = function () {
              this._isTickUsed = !1
            },
            n.exports = o,
            n.exports.firstLineError = u
          },
          {
            './queue': 26,
            './schedule': 29,
            './util': 36
          }
        ],
        3: [
          function (t, e, n) {
            'use strict';
            e.exports = function (t, e, n, r) {
              var o = !1,
              i = function (t, e) {
                this._reject(e)
              },
              a = function (t, e) {
                e.promiseRejectionQueued = !0,
                e.bindingPromise._then(i, i, null, this, t)
              },
              s = function (t, e) {
                0 == (50397184 & this._bitField) && this._resolveCallback(e.target)
              },
              u = function (t, e) {
                e.promiseRejectionQueued || this._reject(t)
              };
              t.prototype.bind = function (i) {
                o || (o = !0, t.prototype._propagateFrom = r.propagateFromFunction(), t.prototype._boundValue = r.boundValueFunction());
                var c = n(i),
                l = new t(e);
                l._propagateFrom(this, 1);
                var p = this._target();
                if (l._setBoundTo(c), c instanceof t) {
                  var h = {
                    promiseRejectionQueued: !1,
                    promise: l,
                    target: p,
                    bindingPromise: c
                  };
                  p._then(e, a, void 0, l, h),
                  c._then(s, u, void 0, l, h),
                  l._setOnCancel(c)
                } else l._resolveCallback(p);
                return l
              },
              t.prototype._setBoundTo = function (t) {
                void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t)  : this._bitField = - 2097153 & this._bitField
              },
              t.prototype._isBound = function () {
                return 2097152 == (2097152 & this._bitField)
              },
              t.bind = function (e, n) {
                return t.resolve(n).bind(e)
              }
            }
          },
          {
          }
        ],
        4: [
          function (t, e, n) {
            'use strict';
            function r() {
              try {
                Promise === i && (Promise = o)
              } catch (t) {
              }
              return i
            }
            var o;
            'undefined' != typeof Promise && (o = Promise);
            var i = t('./promise') ();
            i.noConflict = r,
            e.exports = i
          },
          {
            './promise': 22
          }
        ],
        5: [
          function (t, e, n) {
            'use strict';
            var r = Object.create;
            if (r) {
              var o = r(null),
              i = r(null);
              o[' size'] = i[' size'] = 0
            }
            e.exports = function (e) {
              function n(t, n) {
                var r;
                if (null != t && (r = t[n]), 'function' != typeof r) {
                  var o = 'Object ' + a.classString(t) + ' has no method \'' + a.toString(n) + '\'';
                  throw new e.TypeError(o)
                }
                return r
              }
              function r(t) {
                return n(t, this.pop()).apply(t, this)
              }
              function o(t) {
                return t[this]
              }
              function i(t) {
                var e = + this;
                return e < 0 && (e = Math.max(0, e + t.length)),
                t[e]
              }
              var a = t('./util'),
              s = a.canEvaluate,
              u = a.isIdentifier,
              c,
              l,
              p,
              h,
              f;
              e.prototype.call = function (t) {
                var e = [
                ].slice.call(arguments, 1),
                n;
                return e.push(t),
                this._then(r, void 0, void 0, e, void 0)
              },
              e.prototype.get = function (t) {
                var e = 'number' == typeof t,
                n;
                if (e) n = i;
                 else if (s) {
                  var r = l(t);
                  n = null !== r ? r : o
                } else n = o;
                return this._then(n, void 0, void 0, t, void 0)
              }
            }
          },
          {
            './util': 36
          }
        ],
        6: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e, n, r, o) {
              var i = t('./util'),
              a = i.tryCatch,
              s = i.errorObj,
              u = e._async;
              e.prototype.break = e.prototype.cancel = function () {
                if (!o.cancellation()) return this._warn('cancellation is disabled');
                for (var t = this, e = t; t._isCancellable(); ) {
                  if (!t._cancelBy(e)) {
                    e._isFollowing() ? e._followee().cancel()  : e._cancelBranched();
                    break
                  }
                  var n = t._cancellationParent;
                  if (null == n || !n._isCancellable()) {
                    t._isFollowing() ? t._followee().cancel()  : t._cancelBranched();
                    break
                  }
                  t._isFollowing() && t._followee().cancel(),
                  t._setWillBeCancelled(),
                  e = t,
                  t = n
                }
              },
              e.prototype._branchHasCancelled = function () {
                this._branchesRemainingToCancel--
              },
              e.prototype._enoughBranchesHaveCancelled = function () {
                return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
              },
              e.prototype._cancelBy = function (t) {
                return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0)  : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0))
              },
              e.prototype._cancelBranched = function () {
                this._enoughBranchesHaveCancelled() && this._cancel()
              },
              e.prototype._cancel = function () {
                this._isCancellable() && (this._setCancelled(), u.invoke(this._cancelPromises, this, void 0))
              },
              e.prototype._cancelPromises = function () {
                this._length() > 0 && this._settlePromises()
              },
              e.prototype._unsetOnCancel = function () {
                this._onCancelField = void 0
              },
              e.prototype._isCancellable = function () {
                return this.isPending() && !this._isCancelled()
              },
              e.prototype.isCancellable = function () {
                return this.isPending() && !this.isCancelled()
              },
              e.prototype._doInvokeOnCancel = function (t, e) {
                if (i.isArray(t)) for (var n = 0; n < t.length; ++n) this._doInvokeOnCancel(t[n], e);
                 else if (void 0 !== t) if ('function' == typeof t) {
                  if (!e) {
                    var r = a(t).call(this._boundValue());
                    r === s && (this._attachExtraTrace(r.e), u.throwLater(r.e))
                  }
                } else t._resultCancelled(this)
              },
              e.prototype._invokeOnCancel = function () {
                var t = this._onCancel();
                this._unsetOnCancel(),
                u.invoke(this._doInvokeOnCancel, this, t)
              },
              e.prototype._invokeInternalOnCancel = function () {
                this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel())
              },
              e.prototype._resultCancelled = function () {
                this.cancel()
              }
            }
          },
          {
            './util': 36
          }
        ],
        7: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e) {
              function n(t, n, s) {
                return function (u) {
                  var c = s._boundValue();
                  t: for (var l = 0; l < t.length; ++l) {
                    var p = t[l];
                    if (p === Error || null != p && p.prototype instanceof Error) {
                      if (u instanceof p) return i(n).call(c, u)
                    } else if ('function' == typeof p) {
                      var h = i(p).call(c, u);
                      if (h === a) return h;
                      if (h) return i(n).call(c, u)
                    } else if (r.isObject(u)) {
                      for (var f = o(p), d = 0; d < f.length; ++d) {
                        var m = f[d];
                        if (p[m] != u[m]) continue t
                      }
                      return i(n).call(c, u)
                    }
                  }
                  return e
                }
              }
              var r = t('./util'),
              o = t('./es5').keys,
              i = r.tryCatch,
              a = r.errorObj;
              return n
            }
          },
          {
            './es5': 13,
            './util': 36
          }
        ],
        8: [
          function (t, e, n) {
            'use strict';
            e.exports = function (t) {
              function e() {
                this._trace = new e.CapturedTrace(r())
              }
              function n() {
                if (o) return new e
              }
              function r() {
                var t = i.length - 1;
                if (t >= 0) return i[t]
              }
              var o = !1,
              i = [
              ];
              return t.prototype._promiseCreated = function () {
              },
              t.prototype._pushContext = function () {
              },
              t.prototype._popContext = function () {
                return null
              },
              t._peekContext = t.prototype._peekContext = function () {
              },
              e.prototype._pushContext = function () {
                void 0 !== this._trace && (this._trace._promiseCreated = null, i.push(this._trace))
              },
              e.prototype._popContext = function () {
                if (void 0 !== this._trace) {
                  var t = i.pop(),
                  e = t._promiseCreated;
                  return t._promiseCreated = null,
                  e
                }
                return null
              },
              e.CapturedTrace = null,
              e.create = n,
              e.deactivateLongStackTraces = function () {
              },
              e.activateLongStackTraces = function () {
                var n = t.prototype._pushContext,
                i = t.prototype._popContext,
                a = t._peekContext,
                s = t.prototype._peekContext,
                u = t.prototype._promiseCreated;
                e.deactivateLongStackTraces = function () {
                  t.prototype._pushContext = n,
                  t.prototype._popContext = i,
                  t._peekContext = a,
                  t.prototype._peekContext = s,
                  t.prototype._promiseCreated = u,
                  o = !1
                },
                o = !0,
                t.prototype._pushContext = e.prototype._pushContext,
                t.prototype._popContext = e.prototype._popContext,
                t._peekContext = t.prototype._peekContext = r,
                t.prototype._promiseCreated = function () {
                  var t = this._peekContext();
                  t && null == t._promiseCreated && (t._promiseCreated = this)
                }
              },
              e
            }
          },
          {
          }
        ],
        9: [
          function (t, n, r) {
            'use strict';
            n.exports = function (n, r) {
              function o(t, e) {
                return {
                  promise: e
                }
              }
              function i() {
                return !1
              }
              function a(t, e, n) {
                var r = this;
                try {
                  t(e, n, function (t) {
                    if ('function' != typeof t) throw new TypeError('onCancel must be a function, got: ' + I.toString(t));
                    r._attachCancellationCallback(t)
                  })
                } catch (t) {
                  return t
                }
              }
              function s(t) {
                if (!this._isCancellable()) return this;
                var e = this._onCancel();
                void 0 !== e ? I.isArray(e) ? e.push(t)  : this._setOnCancel([e,
                t])  : this._setOnCancel(t)
              }
              function u() {
                return this._onCancelField
              }
              function c(t) {
                this._onCancelField = t
              }
              function l() {
                this._cancellationParent = void 0,
                this._onCancelField = void 0
              }
              function p(t, e) {
                if (0 != (1 & e)) {
                  this._cancellationParent = t;
                  var n = t._branchesRemainingToCancel;
                  void 0 === n && (n = 0),
                  t._branchesRemainingToCancel = n + 1
                }
                0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
              }
              function h(t, e) {
                0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
              }
              function f() {
                var t = this._boundTo;
                return void 0 !== t && t instanceof n ? t.isFulfilled() ? t.value()  : void 0 : t
              }
              function d() {
                this._trace = new F(this._peekContext())
              }
              function m(t, e) {
                if (L(t)) {
                  var n = this._trace;
                  if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);
                   else if (!t.__stackCleaned__) {
                    var r = T(t);
                    I.notEnumerableProp(t, 'stack', r.message + '\n' + r.stack.join('\n')),
                    I.notEnumerableProp(t, '__stackCleaned__', !0)
                  }
                }
              }
              function y(t, e, n, r, o) {
                if (void 0 === t && null !== e && K) {
                  if (void 0 !== o && o._returnedNonUndefined()) return;
                  if (0 == (65535 & r._bitField)) return;
                  n && (n += ' ');
                  var i = '',
                  a = '';
                  if (e._trace) {
                    for (var s = e._trace.stack.split('\n'), u = w(s), c = u.length - 1; c >= 0; --c) {
                      var l = u[c];
                      if (!N.test(l)) {
                        var p = l.match(B);
                        p && (i = 'at ' + p[1] + ':' + p[2] + ':' + p[3] + ' ');
                        break
                      }
                    }
                    if (u.length > 0) for (var h = u[0], c = 0; c < s.length; ++c) if (s[c] === h) {
                      c > 0 && (a = '\n' + s[c - 1]);
                      break
                    }
                  }
                  var f = 'a promise was created in a ' + n + 'handler ' + i + 'but was not returned from it, see http://goo.gl/rRqMUw' + a;
                  r._warn(f, !0, e)
                }
              }
              function v(t, e) {
                var n = t + ' is deprecated and will be removed in a future version.';
                return e && (n += ' Use ' + e + ' instead.'),
                g(n)
              }
              function g(t, e, r) {
                if (at.warnings) {
                  var o = new D(t),
                  i;
                  if (e) r._attachExtraTrace(o);
                   else if (at.longStackTraces && (i = n._peekContext())) i.attachExtraTrace(o);
                   else {
                    var a = T(o);
                    o.stack = a.message + '\n' + a.stack.join('\n')
                  }
                  et('warning', o) || P(o, '', !0)
                }
              }
              function _(t, e) {
                for (var n = 0; n < e.length - 1; ++n) e[n].push('From previous event:'),
                e[n] = e[n].join('\n');
                return n < e.length && (e[n] = e[n].join('\n')),
                t + '\n' + e.join('\n')
              }
              function b(t) {
                for (var e = 0; e < t.length; ++e) (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--)
              }
              function x(t) {
                for (var e = t[0], n = 1; n < t.length; ++n) {
                  for (var r = t[n], o = e.length - 1, i = e[o], a = - 1, s = r.length - 1; s >= 0; --s) if (r[s] === i) {
                    a = s;
                    break
                  }
                  for (var s = a; s >= 0; --s) {
                    var u = r[s];
                    if (e[o] !== u) break;
                    e.pop(),
                    o--
                  }
                  e = r
                }
              }
              function w(t) {
                for (var e = [
                ], n = 0; n < t.length; ++n) {
                  var r = t[n],
                  o = '    (No stack trace)' === r || q.test(r),
                  i = o && rt(r);
                  o && !i && (H && ' ' !== r.charAt(0) && (r = '    ' + r), e.push(r))
                }
                return e
              }
              function S(t) {
                for (var e = t.stack.replace(/\s+$/g, '').split('\n'), n = 0; n < e.length; ++n) {
                  var r = e[n];
                  if ('    (No stack trace)' === r || q.test(r)) break
                }
                return n > 0 && 'SyntaxError' != t.name && (e = e.slice(n)),
                e
              }
              function T(t) {
                var e = t.stack,
                n = t.toString();
                return e = 'string' == typeof e && e.length > 0 ? S(t)  : [
                  '    (No stack trace)'
                ],
                {
                  message: n,
                  stack: 'SyntaxError' == t.name ? e : w(e)
                }
              }
              function P(t, e, n) {
                if ('undefined' != typeof console) {
                  var r;
                  if (I.isObject(t)) {
                    var o = t.stack;
                    r = e + V(o, t)
                  } else r = e + String(t);
                  'function' == typeof W ? W(r, n)  : 'function' != typeof console.log && 'object' != typeof console.log || console.log(r)
                }
              }
              function C(t, e, n, r) {
                var o = !1;
                try {
                  'function' == typeof e && (o = !0, 'rejectionHandled' === t ? e(r)  : e(n, r))
                } catch (t) {
                  R.throwLater(t)
                }
                'unhandledRejection' === t ? et(t, n, r) || o || P(n, 'Unhandled rejection ')  : et(t, r)
              }
              function k(t) {
                var e;
                if ('function' == typeof t) e = '[function ' + (t.name || 'anonymous') + ']';
                 else {
                  e = t && 'function' == typeof t.toString ? t.toString()  : I.toString(t);
                  if (/\[object [a-zA-Z0-9$_]+\]/.test(e)) try {
                    e = JSON.stringify(t)
                  } catch (t) {
                  }
                  0 === e.length && (e = '(empty array)')
                }
                return '(<' + O(e) + '>, no stack trace)'
              }
              function O(t) {
                var e = 41;
                return t.length < 41 ? t : t.substr(0, 38) + '...'
              }
              function E() {
                return 'function' == typeof it
              }
              function j(t) {
                var e = t.match(ot);
                if (e) return {
                  fileName: e[1],
                  line: parseInt(e[2], 10)
                }
              }
              function A(t, e) {
                if (E()) {
                  for (var n = t.stack.split('\n'), r = e.stack.split('\n'), o = - 1, i = - 1, a, s, u = 0; u < n.length; ++u) {
                    var c = j(n[u]);
                    if (c) {
                      a = c.fileName,
                      o = c.line;
                      break
                    }
                  }
                  for (var u = 0; u < r.length; ++u) {
                    var c = j(r[u]);
                    if (c) {
                      s = c.fileName,
                      i = c.line;
                      break
                    }
                  }
                  o < 0 || i < 0 || !a || !s || a !== s || o >= i || (rt = function (t) {
                    if (G.test(t)) return !0;
                    var e = j(t);
                    return !!(e && e.fileName === a && o <= e.line && e.line <= i)
                  })
                }
              }
              function F(t) {
                this._parent = t,
                this._promisesCreated = 0;
                var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                it(this, F),
                e > 32 && this.uncycle()
              }
              var M = n._getDomain,
              R = n._async,
              D = t('./errors').Warning,
              I = t('./util'),
              L = I.canAttachTrace,
              z,
              U,
              G = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
              N = /\((?:timers\.js):\d+:\d+\)/,
              B = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
              q = null,
              V = null,
              H = !1,
              W,
              X = !(0 == I.env('BLUEBIRD_DEBUG')),
              Y = !(0 == I.env('BLUEBIRD_WARNINGS') || !X && !I.env('BLUEBIRD_WARNINGS')),
              $ = !(0 == I.env('BLUEBIRD_LONG_STACK_TRACES') || !X && !I.env('BLUEBIRD_LONG_STACK_TRACES')),
              K = 0 != I.env('BLUEBIRD_W_FORGOTTEN_RETURN') && (Y || !!I.env('BLUEBIRD_W_FORGOTTEN_RETURN'));
              n.prototype.suppressUnhandledRejections = function () {
                var t = this._target();
                t._bitField = - 1048577 & t._bitField | 524288
              },
              n.prototype._ensurePossibleRejectionHandled = function () {
                if (0 == (524288 & this._bitField)) {
                  this._setRejectionIsUnhandled();
                  var t = this;
                  setTimeout(function () {
                    t._notifyUnhandledRejection()
                  }, 1)
                }
              },
              n.prototype._notifyUnhandledRejectionIsHandled = function () {
                C('rejectionHandled', z, void 0, this)
              },
              n.prototype._setReturnedNonUndefined = function () {
                this._bitField = 268435456 | this._bitField
              },
              n.prototype._returnedNonUndefined = function () {
                return 0 != (268435456 & this._bitField)
              },
              n.prototype._notifyUnhandledRejection = function () {
                if (this._isRejectionUnhandled()) {
                  var t = this._settledValue();
                  this._setUnhandledRejectionIsNotified(),
                  C('unhandledRejection', U, t, this)
                }
              },
              n.prototype._setUnhandledRejectionIsNotified = function () {
                this._bitField = 262144 | this._bitField
              },
              n.prototype._unsetUnhandledRejectionIsNotified = function () {
                this._bitField = - 262145 & this._bitField
              },
              n.prototype._isUnhandledRejectionNotified = function () {
                return (262144 & this._bitField) > 0
              },
              n.prototype._setRejectionIsUnhandled = function () {
                this._bitField = 1048576 | this._bitField
              },
              n.prototype._unsetRejectionIsUnhandled = function () {
                this._bitField = - 1048577 & this._bitField,
                this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
              },
              n.prototype._isRejectionUnhandled = function () {
                return (1048576 & this._bitField) > 0
              },
              n.prototype._warn = function (t, e, n) {
                return g(t, e, n || this)
              },
              n.onPossiblyUnhandledRejection = function (t) {
                var e = M();
                U = 'function' == typeof t ? null === e ? t : I.domainBind(e, t)  : void 0
              },
              n.onUnhandledRejectionHandled = function (t) {
                var e = M();
                z = 'function' == typeof t ? null === e ? t : I.domainBind(e, t)  : void 0
              };
              var J = function () {
              };
              n.longStackTraces = function () {
                if (R.haveItemsQueued() && !at.longStackTraces) throw new Error('cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n');
                if (!at.longStackTraces && E()) {
                  var t = n.prototype._captureStackTrace,
                  e = n.prototype._attachExtraTrace;
                  at.longStackTraces = !0,
                  J = function () {
                    if (R.haveItemsQueued() && !at.longStackTraces) throw new Error('cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n');
                    n.prototype._captureStackTrace = t,
                    n.prototype._attachExtraTrace = e,
                    r.deactivateLongStackTraces(),
                    R.enableTrampoline(),
                    at.longStackTraces = !1
                  },
                  n.prototype._captureStackTrace = d,
                  n.prototype._attachExtraTrace = m,
                  r.activateLongStackTraces(),
                  R.disableTrampolineIfNecessary()
                }
              },
              n.hasLongStackTraces = function () {
                return at.longStackTraces && E()
              };
              var Q = function () {
                try {
                  if ('function' == typeof CustomEvent) {
                    var t = new CustomEvent('CustomEvent');
                    return I.global.dispatchEvent(t),
                    function (t, e) {
                      var n = new CustomEvent(t.toLowerCase(), {
                        detail: e,
                        cancelable: !0
                      });
                      return !I.global.dispatchEvent(n)
                    }
                  }
                  if ('function' == typeof Event) {
                    var t = new Event('CustomEvent');
                    return I.global.dispatchEvent(t),
                    function (t, e) {
                      var n = new Event(t.toLowerCase(), {
                        cancelable: !0
                      });
                      return n.detail = e,
                      !I.global.dispatchEvent(n)
                    }
                  }
                  var t = document.createEvent('CustomEvent');
                  return t.initCustomEvent('testingtheevent', !1, !0, {
                  }),
                  I.global.dispatchEvent(t),
                  function (t, e) {
                    var n = document.createEvent('CustomEvent');
                    return n.initCustomEvent(t.toLowerCase(), !1, !0, e),
                    !I.global.dispatchEvent(n)
                  }
                } catch (t) {
                }
                return function () {
                  return !1
                }
              }(),
              Z = function () {
                return I.isNode ? function () {
                  return e.emit.apply(e, arguments)
                }
                 : I.global ? function (t) {
                  var e = 'on' + t.toLowerCase(),
                  n = I.global[e];
                  return !!n && (n.apply(I.global, [
                  ].slice.call(arguments, 1)), !0)
                }
                 : function () {
                  return !1
                }
              }(),
              tt = {
                promiseCreated: o,
                promiseFulfilled: o,
                promiseRejected: o,
                promiseResolved: o,
                promiseCancelled: o,
                promiseChained: function (t, e, n) {
                  return {
                    promise: e,
                    child: n
                  }
                },
                warning: function (t, e) {
                  return {
                    warning: e
                  }
                },
                unhandledRejection: function (t, e, n) {
                  return {
                    reason: e,
                    promise: n
                  }
                },
                rejectionHandled: o
              },
              et = function (t) {
                var e = !1;
                try {
                  e = Z.apply(null, arguments)
                } catch (t) {
                  R.throwLater(t),
                  e = !0
                }
                var n = !1;
                try {
                  n = Q(t, tt[t].apply(null, arguments))
                } catch (t) {
                  R.throwLater(t),
                  n = !0
                }
                return n || e
              };
              n.config = function (t) {
                if (t = Object(t), 'longStackTraces' in t && (t.longStackTraces ? n.longStackTraces()  : !t.longStackTraces && n.hasLongStackTraces() && J()), 'warnings' in t) {
                  var e = t.warnings;
                  at.warnings = !!e,
                  K = at.warnings,
                  I.isObject(e) && 'wForgottenReturn' in e && (K = !!e.wForgottenReturn)
                }
                if ('cancellation' in t && t.cancellation && !at.cancellation) {
                  if (R.haveItemsQueued()) throw new Error('cannot enable cancellation after promises are in use');
                  n.prototype._clearCancellationData = l,
                  n.prototype._propagateFrom = p,
                  n.prototype._onCancel = u,
                  n.prototype._setOnCancel = c,
                  n.prototype._attachCancellationCallback = s,
                  n.prototype._execute = a,
                  nt = p,
                  at.cancellation = !0
                }
                return 'monitoring' in t && (t.monitoring && !at.monitoring ? (at.monitoring = !0, n.prototype._fireEvent = et)  : !t.monitoring && at.monitoring && (at.monitoring = !1, n.prototype._fireEvent = i)),
                n
              },
              n.prototype._fireEvent = i,
              n.prototype._execute = function (t, e, n) {
                try {
                  t(e, n)
                } catch (t) {
                  return t
                }
              },
              n.prototype._onCancel = function () {
              },
              n.prototype._setOnCancel = function (t) {
              },
              n.prototype._attachCancellationCallback = function (t) {
              },
              n.prototype._captureStackTrace = function () {
              },
              n.prototype._attachExtraTrace = function () {
              },
              n.prototype._clearCancellationData = function () {
              },
              n.prototype._propagateFrom = function (t, e) {
              };
              var nt = h,
              rt = function () {
                return !1
              },
              ot = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
              I.inherits(F, Error),
              r.CapturedTrace = F,
              F.prototype.uncycle = function () {
                var t = this._length;
                if (!(t < 2)) {
                  for (var e = [
                  ], n = {
                  }, r = 0, o = this; void 0 !== o; ++r) e.push(o),
                  o = o._parent;
                  t = this._length = r;
                  for (var r = t - 1; r >= 0; --r) {
                    var i = e[r].stack;
                    void 0 === n[i] && (n[i] = r)
                  }
                  for (var r = 0; r < t; ++r) {
                    var a = e[r].stack,
                    s = n[a];
                    if (void 0 !== s && s !== r) {
                      s > 0 && (e[s - 1]._parent = void 0, e[s - 1]._length = 1),
                      e[r]._parent = void 0,
                      e[r]._length = 1;
                      var u = r > 0 ? e[r - 1] : this;
                      s < t - 1 ? (u._parent = e[s + 1], u._parent.uncycle(), u._length = u._parent._length + 1)  : (u._parent = void 0, u._length = 1);
                      for (var c = u._length + 1, l = r - 2; l >= 0; --l) e[l]._length = c,
                      c++;
                      return
                    }
                  }
                }
              },
              F.prototype.attachExtraTrace = function (t) {
                if (!t.__stackCleaned__) {
                  this.uncycle();
                  for (var e = T(t), n = e.message, r = [
                    e.stack
                  ], o = this; void 0 !== o; ) r.push(w(o.stack.split('\n'))),
                  o = o._parent;
                  x(r),
                  b(r),
                  I.notEnumerableProp(t, 'stack', _(n, r)),
                  I.notEnumerableProp(t, '__stackCleaned__', !0)
                }
              };
              var it = function t() {
                var e = /^\s*at\s*/,
                n = function (t, e) {
                  return 'string' == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString()  : k(e)
                };
                if ('number' == typeof Error.stackTraceLimit && 'function' == typeof Error.captureStackTrace) {
                  Error.stackTraceLimit += 6,
                  q = e,
                  V = n;
                  var r = Error.captureStackTrace;
                  return rt = function (t) {
                    return G.test(t)
                  },
                  function (t, e) {
                    Error.stackTraceLimit += 6,
                    r(t, e),
                    Error.stackTraceLimit -= 6
                  }
                }
                var o = new Error;
                if ('string' == typeof o.stack && o.stack.split('\n') [0].indexOf('stackDetection@') >= 0) return q = /@/,
                V = n,
                H = !0,
                function t(e) {
                  e.stack = (new Error).stack
                };
                var i;
                try {
                  throw new Error
                } catch (t) {
                  i = 'stack' in t
                }
                return 'stack' in o || !i || 'number' != typeof Error.stackTraceLimit ? (V = function (t, e) {
                  return 'string' == typeof t ? t : 'object' != typeof e && 'function' != typeof e || void 0 === e.name || void 0 === e.message ? k(e)  : e.toString()
                }, null)  : (q = e, V = n, function t(e) {
                  Error.stackTraceLimit += 6;
                  try {
                    throw new Error
                  } catch (t) {
                    e.stack = t.stack
                  }
                  Error.stackTraceLimit -= 6
                })
              }([]);
              'undefined' != typeof console && void 0 !== console.warn && (W = function (t) {
                console.warn(t)
              }, I.isNode && e.stderr.isTTY ? W = function (t, e) {
                var n = e ? '[33m' : '[31m';
                console.warn(n + t + '[0m\n')
              }
               : I.isNode || 'string' != typeof (new Error).stack || (W = function (t, e) {
                console.warn('%c' + t, e ? 'color: darkorange' : 'color: red')
              }));
              var at = {
                warnings: Y,
                longStackTraces: !1,
                cancellation: !1,
                monitoring: !1
              };
              return $ && n.longStackTraces(),
              {
                longStackTraces: function () {
                  return at.longStackTraces
                },
                warnings: function () {
                  return at.warnings
                },
                cancellation: function () {
                  return at.cancellation
                },
                monitoring: function () {
                  return at.monitoring
                },
                propagateFromFunction: function () {
                  return nt
                },
                boundValueFunction: function () {
                  return f
                },
                checkForgottenReturns: y,
                setBounds: A,
                warn: g,
                deprecated: v,
                CapturedTrace: F,
                fireDomEvent: Q,
                fireGlobalEvent: Z
              }
            }
          },
          {
            './errors': 12,
            './util': 36
          }
        ],
        10: [
          function (t, e, n) {
            'use strict';
            e.exports = function (t) {
              function e() {
                return this.value
              }
              function n() {
                throw this.reason
              }
              t.prototype.return = t.prototype.thenReturn = function (n) {
                return n instanceof t && n.suppressUnhandledRejections(),
                this._then(e, void 0, void 0, {
                  value: n
                }, void 0)
              },
              t.prototype.throw = t.prototype.thenThrow = function (t) {
                return this._then(n, void 0, void 0, {
                  reason: t
                }, void 0)
              },
              t.prototype.catchThrow = function (t) {
                if (arguments.length <= 1) return this._then(void 0, n, void 0, {
                  reason: t
                }, void 0);
                var e = arguments[1],
                r = function () {
                  throw e
                };
                return this.caught(t, r)
              },
              t.prototype.catchReturn = function (n) {
                if (arguments.length <= 1) return n instanceof t && n.suppressUnhandledRejections(),
                this._then(void 0, e, void 0, {
                  value: n
                }, void 0);
                var r = arguments[1];
                r instanceof t && r.suppressUnhandledRejections();
                var o = function () {
                  return r
                };
                return this.caught(n, o)
              }
            }
          },
          {
          }
        ],
        11: [
          function (t, e, n) {
            'use strict';
            e.exports = function (t, e) {
              function n() {
                return i(this)
              }
              function r(t, n) {
                return o(t, n, e, e)
              }
              var o = t.reduce,
              i = t.all;
              t.prototype.each = function (t) {
                return o(this, t, e, 0)._then(n, void 0, void 0, this, void 0)
              },
              t.prototype.mapSeries = function (t) {
                return o(this, t, e, e)
              },
              t.each = function (t, r) {
                return o(t, r, e, 0)._then(n, void 0, void 0, t, void 0)
              },
              t.mapSeries = r
            }
          },
          {
          }
        ],
        12: [
          function (t, e, n) {
            'use strict';
            function r(t, e) {
              function n(r) {
                if (!(this instanceof n)) return new n(r);
                c(this, 'message', 'string' == typeof r ? r : e),
                c(this, 'name', t),
                Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor)  : Error.call(this)
              }
              return u(n, Error),
              n
            }
            function o(t) {
              if (!(this instanceof o)) return new o(t);
              c(this, 'name', 'OperationalError'),
              c(this, 'message', t),
              this.cause = t,
              this.isOperational = !0,
              t instanceof Error ? (c(this, 'message', t.message), c(this, 'stack', t.stack))  : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
            }
            var i = t('./es5'),
            a = i.freeze,
            s = t('./util'),
            u = s.inherits,
            c = s.notEnumerableProp,
            l,
            p,
            h = r('Warning', 'warning'),
            f = r('CancellationError', 'cancellation error'),
            d = r('TimeoutError', 'timeout error'),
            m = r('AggregateError', 'aggregate error');
            try {
              l = TypeError,
              p = RangeError
            } catch (t) {
              l = r('TypeError', 'type error'),
              p = r('RangeError', 'range error')
            }
            for (var y = 'join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse'.split(' '), v = 0; v < y.length; ++v) 'function' == typeof Array.prototype[y[v]] && (m.prototype[y[v]] = Array.prototype[y[v]]);
            i.defineProperty(m.prototype, 'length', {
              value: 0,
              configurable: !1,
              writable: !0,
              enumerable: !0
            }),
            m.prototype.isOperational = !0;
            var g = 0;
            m.prototype.toString = function () {
              var t = Array(4 * g + 1).join(' '),
              e = '\n' + t + 'AggregateError of:\n';
              g++,
              t = Array(4 * g + 1).join(' ');
              for (var n = 0; n < this.length; ++n) {
                for (var r = this[n] === this ? '[Circular AggregateError]' : this[n] + '', o = r.split('\n'), i = 0; i < o.length; ++i) o[i] = t + o[i];
                r = o.join('\n'),
                e += r + '\n'
              }
              return g--,
              e
            },
            u(o, Error);
            var _ = Error.__BluebirdErrorTypes__;
            _ || (_ = a({
              CancellationError: f,
              TimeoutError: d,
              OperationalError: o,
              RejectionError: o,
              AggregateError: m
            }), i.defineProperty(Error, '__BluebirdErrorTypes__', {
              value: _,
              writable: !1,
              enumerable: !1,
              configurable: !1
            })),
            e.exports = {
              Error: Error,
              TypeError: l,
              RangeError: p,
              CancellationError: _.CancellationError,
              OperationalError: _.OperationalError,
              TimeoutError: _.TimeoutError,
              AggregateError: _.AggregateError,
              Warning: h
            }
          },
          {
            './es5': 13,
            './util': 36
          }
        ],
        13: [
          function (t, e, n) {
            var r = function () {
              'use strict';
              return void 0 === this
            }();
            if (r) e.exports = {
              freeze: Object.freeze,
              defineProperty: Object.defineProperty,
              getDescriptor: Object.getOwnPropertyDescriptor,
              keys: Object.keys,
              names: Object.getOwnPropertyNames,
              getPrototypeOf: Object.getPrototypeOf,
              isArray: Array.isArray,
              isES5: r,
              propertyIsWritable: function (t, e) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                return !(n && !n.writable && !n.set)
              }
            };
             else {
              var o = {
              }.hasOwnProperty,
              i = {
              }.toString,
              a = {
              }.constructor.prototype,
              s = function (t) {
                var e = [
                ];
                for (var n in t) o.call(t, n) && e.push(n);
                return e
              },
              u = function (t, e) {
                return {
                  value: t[e]
                }
              },
              c = function (t, e, n) {
                return t[e] = n.value,
                t
              },
              l = function (t) {
                return t
              },
              p = function (t) {
                try {
                  return Object(t).constructor.prototype
                } catch (t) {
                  return a
                }
              },
              h = function (t) {
                try {
                  return '[object Array]' === i.call(t)
                } catch (t) {
                  return !1
                }
              };
              e.exports = {
                isArray: h,
                keys: s,
                names: s,
                defineProperty: c,
                getDescriptor: u,
                freeze: l,
                getPrototypeOf: p,
                isES5: r,
                propertyIsWritable: function () {
                  return !0
                }
              }
            }
          },
          {
          }
        ],
        14: [
          function (t, e, n) {
            'use strict';
            e.exports = function (t, e) {
              var n = t.map;
              t.prototype.filter = function (t, r) {
                return n(this, t, r, e)
              },
              t.filter = function (t, r, o) {
                return n(t, r, o, e)
              }
            }
          },
          {
          }
        ],
        15: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e, n, r) {
              function o(t, e, n) {
                this.promise = t,
                this.type = e,
                this.handler = n,
                this.called = !1,
                this.cancelPromise = null
              }
              function i(t) {
                this.finallyHandler = t
              }
              function a(t, e) {
                return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e)  : t.cancelPromise._cancel(), t.cancelPromise = null, !0)
              }
              function s() {
                return c.call(this, this.promise._target()._settledValue())
              }
              function u(t) {
                if (!a(this, t)) return h.e = t,
                h
              }
              function c(t) {
                var o = this.promise,
                c = this.handler;
                if (!this.called) {
                  this.called = !0;
                  var l = this.isFinallyHandler() ? c.call(o._boundValue())  : c.call(o._boundValue(), t);
                  if (l === r) return l;
                  if (void 0 !== l) {
                    o._setReturnedNonUndefined();
                    var f = n(l, o);
                    if (f instanceof e) {
                      if (null != this.cancelPromise) {
                        if (f._isCancelled()) {
                          var d = new p('late cancellation observer');
                          return o._attachExtraTrace(d),
                          h.e = d,
                          h
                        }
                        f.isPending() && f._attachCancellationCallback(new i(this))
                      }
                      return f._then(s, u, void 0, this, void 0)
                    }
                  }
                }
                return o.isRejected() ? (a(this), h.e = t, h)  : (a(this), t)
              }
              var l = t('./util'),
              p = e.CancellationError,
              h = l.errorObj,
              f = t('./catch_filter') (r);
              return o.prototype.isFinallyHandler = function () {
                return 0 === this.type
              },
              i.prototype._resultCancelled = function () {
                a(this.finallyHandler)
              },
              e.prototype._passThrough = function (t, e, n, r) {
                return 'function' != typeof t ? this.then()  : this._then(n, r, void 0, new o(this, e, t), void 0)
              },
              e.prototype.lastly = e.prototype.finally = function (t) {
                return this._passThrough(t, 0, c, c)
              },
              e.prototype.tap = function (t) {
                return this._passThrough(t, 1, c)
              },
              e.prototype.tapCatch = function (t) {
                var n = arguments.length;
                if (1 === n) return this._passThrough(t, 1, void 0, c);
                var r = new Array(n - 1),
                o = 0,
                i;
                for (i = 0; i < n - 1; ++i) {
                  var a = arguments[i];
                  if (!l.isObject(a)) return e.reject(new TypeError('tapCatch statement predicate: expecting an object but got ' + l.classString(a)));
                  r[o++] = a
                }
                r.length = o;
                var s = arguments[i];
                return this._passThrough(f(r, s, this), 1, void 0, c)
              },
              o
            }
          },
          {
            './catch_filter': 7,
            './util': 36
          }
        ],
        16: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e, n, r, o, i, a) {
              function s(t, n, r) {
                for (var i = 0; i < n.length; ++i) {
                  r._pushContext();
                  var a = f(n[i]) (t);
                  if (r._popContext(), a === h) {
                    r._pushContext();
                    var s = e.reject(h.e);
                    return r._popContext(),
                    s
                  }
                  var u = o(a, r);
                  if (u instanceof e) return u
                }
                return null
              }
              function u(t, n, o, i) {
                if (a.cancellation()) {
                  var s = new e(r),
                  u = this._finallyPromise = new e(r);
                  this._promise = s.lastly(function () {
                    return u
                  }),
                  s._captureStackTrace(),
                  s._setOnCancel(this)
                } else {
                  (this._promise = new e(r))._captureStackTrace()
                }
                this._stack = i,
                this._generatorFunction = t,
                this._receiver = n,
                this._generator = void 0,
                this._yieldHandlers = 'function' == typeof o ? [
                  o
                ].concat(d)  : d,
                this._yieldedPromise = null,
                this._cancellationPhase = !1
              }
              var c = t('./errors'),
              l = c.TypeError,
              p = t('./util'),
              h = p.errorObj,
              f = p.tryCatch,
              d = [
              ];
              p.inherits(u, i),
              u.prototype._isResolved = function () {
                return null === this._promise
              },
              u.prototype._cleanup = function () {
                this._promise = this._generator = null,
                a.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null)
              },
              u.prototype._promiseCancelled = function () {
                if (!this._isResolved()) {
                  var t = void 0 !== this._generator.return ,
                  n;
                  if (t) this._promise._pushContext(),
                  n = f(this._generator.return ).call(this._generator, void 0),
                  this._promise._popContext();
                   else {
                    var r = new e.CancellationError('generator .return() sentinel');
                    e.coroutine.returnSentinel = r,
                    this._promise._attachExtraTrace(r),
                    this._promise._pushContext(),
                    n = f(this._generator.throw ).call(this._generator, r),
                    this._promise._popContext()
                  }
                  this._cancellationPhase = !0,
                  this._yieldedPromise = null,
                  this._continue(n)
                }
              },
              u.prototype._promiseFulfilled = function (t) {
                this._yieldedPromise = null,
                this._promise._pushContext();
                var e = f(this._generator.next).call(this._generator, t);
                this._promise._popContext(),
                this._continue(e)
              },
              u.prototype._promiseRejected = function (t) {
                this._yieldedPromise = null,
                this._promise._attachExtraTrace(t),
                this._promise._pushContext();
                var e = f(this._generator.throw ).call(this._generator, t);
                this._promise._popContext(),
                this._continue(e)
              },
              u.prototype._resultCancelled = function () {
                if (this._yieldedPromise instanceof e) {
                  var t = this._yieldedPromise;
                  this._yieldedPromise = null,
                  t.cancel()
                }
              },
              u.prototype.promise = function () {
                return this._promise
              },
              u.prototype._run = function () {
                this._generator = this._generatorFunction.call(this._receiver),
                this._receiver = this._generatorFunction = void 0,
                this._promiseFulfilled(void 0)
              },
              u.prototype._continue = function (t) {
                var n = this._promise;
                if (t === h) return this._cleanup(),
                this._cancellationPhase ? n.cancel()  : n._rejectCallback(t.e, !1);
                var r = t.value;
                if (!0 === t.done) return this._cleanup(),
                this._cancellationPhase ? n.cancel()  : n._resolveCallback(r);
                var i = o(r, this._promise);
                if (!(i instanceof e) && null === (i = s(i, this._yieldHandlers, this._promise))) return void this._promiseRejected(new l('A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n'.replace('%s', String(r)) + 'From coroutine:\n' + this._stack.split('\n').slice(1, - 7).join('\n')));
                i = i._target();
                var a = i._bitField;
                0 == (50397184 & a) ? (this._yieldedPromise = i, i._proxy(this, null))  : 0 != (33554432 & a) ? e._async.invoke(this._promiseFulfilled, this, i._value())  : 0 != (16777216 & a) ? e._async.invoke(this._promiseRejected, this, i._reason())  : this._promiseCancelled()
              },
              e.coroutine = function (t, e) {
                if ('function' != typeof t) throw new l('generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n');
                var n = Object(e).yieldHandler,
                r = u,
                o = (new Error).stack;
                return function () {
                  var e = t.apply(this, arguments),
                  i = new r(void 0, void 0, n, o),
                  a = i.promise();
                  return i._generator = e,
                  i._promiseFulfilled(void 0),
                  a
                }
              },
              e.coroutine.addYieldHandler = function (t) {
                if ('function' != typeof t) throw new l('expecting a function but got ' + p.classString(t));
                d.push(t)
              },
              e.spawn = function (t) {
                if (a.deprecated('Promise.spawn()', 'Promise.coroutine()'), 'function' != typeof t) return n('generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n');
                var r = new u(t, this),
                o = r.promise();
                return r._run(e.spawn),
                o
              }
            }
          },
          {
            './errors': 12,
            './util': 36
          }
        ],
        17: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e, n, r, o, i, a) {
              var s = t('./util'),
              u = s.canEvaluate,
              c = s.tryCatch,
              l = s.errorObj,
              p,
              h,
              f,
              d,
              m,
              y,
              v,
              g;
              e.join = function () {
                var t = arguments.length - 1,
                e;
                if (t > 0 && 'function' == typeof arguments[t]) {
                  e = arguments[t];
                  var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  l
                }
                var p = [
                ].slice.call(arguments);
                e && p.pop();
                var r = new n(p).promise();
                return void 0 !== e ? r.spread(e)  : r
              }
            }
          },
          {
            './util': 36
          }
        ],
        18: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e, n, r, o, i, a) {
              function s(t, e, n, r) {
                this.constructor$(t),
                this._promise._captureStackTrace();
                var o = c();
                this._callback = null === o ? e : l.domainBind(o, e),
                this._preservedValues = r === i ? new Array(this.length())  : null,
                this._limit = n,
                this._inFlight = 0,
                this._queue = [
                ],
                f.invoke(this._asyncInit, this, void 0)
              }
              function u(t, n, o, i) {
                if ('function' != typeof n) return r('expecting a function but got ' + l.classString(n));
                var a = 0;
                if (void 0 !== o) {
                  if ('object' != typeof o || null === o) return e.reject(new TypeError('options argument must be an object but it is ' + l.classString(o)));
                  if ('number' != typeof o.concurrency) return e.reject(new TypeError('\'concurrency\' must be a number but it is ' + l.classString(o.concurrency)));
                  a = o.concurrency
                }
                return a = 'number' == typeof a && isFinite(a) && a >= 1 ? a : 0,
                new s(t, n, a, i).promise()
              }
              var c = e._getDomain,
              l = t('./util'),
              p = l.tryCatch,
              h = l.errorObj,
              f = e._async;
              l.inherits(s, n),
              s.prototype._asyncInit = function () {
                this._init$(void 0, - 2)
              },
              s.prototype._init = function () {
              },
              s.prototype._promiseFulfilled = function (t, n) {
                var r = this._values,
                i = this.length(),
                s = this._preservedValues,
                u = this._limit;
                if (n < 0) {
                  if (n = - 1 * n - 1, r[n] = t, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0
                } else {
                  if (u >= 1 && this._inFlight >= u) return r[n] = t,
                  this._queue.push(n),
                  !1;
                  null !== s && (s[n] = t);
                  var c = this._promise,
                  l = this._callback,
                  f = c._boundValue();
                  c._pushContext();
                  var d = p(l).call(f, t, n, i),
                  m = c._popContext();
                  if (a.checkForgottenReturns(d, m, null !== s ? 'Promise.filter' : 'Promise.map', c), d === h) return this._reject(d.e),
                  !0;
                  var y = o(d, this._promise);
                  if (y instanceof e) {
                    y = y._target();
                    var v = y._bitField;
                    if (0 == (50397184 & v)) return u >= 1 && this._inFlight++,
                    r[n] = y,
                    y._proxy(this, - 1 * (n + 1)),
                    !1;
                    if (0 == (33554432 & v)) return 0 != (16777216 & v) ? (this._reject(y._reason()), !0)  : (this._cancel(), !0);
                    d = y._value()
                  }
                  r[n] = d
                }
                return ++this._totalResolved >= i && (null !== s ? this._filter(r, s)  : this._resolve(r), !0)
              },
              s.prototype._drainQueue = function () {
                for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e; ) {
                  if (this._isResolved()) return;
                  var r = t.pop();
                  this._promiseFulfilled(n[r], r)
                }
              },
              s.prototype._filter = function (t, e) {
                for (var n = e.length, r = new Array(n), o = 0, i = 0; i < n; ++i) t[i] && (r[o++] = e[i]);
                r.length = o,
                this._resolve(r)
              },
              s.prototype.preservedValues = function () {
                return this._preservedValues
              },
              e.prototype.map = function (t, e) {
                return u(this, t, e, null)
              },
              e.map = function (t, e, n, r) {
                return u(t, e, n, r)
              }
            }
          },
          {
            './util': 36
          }
        ],
        19: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e, n, r, o, i) {
              var a = t('./util'),
              s = a.tryCatch;
              e.method = function (t) {
                if ('function' != typeof t) throw new e.TypeError('expecting a function but got ' + a.classString(t));
                return function () {
                  var r = new e(n);
                  r._captureStackTrace(),
                  r._pushContext();
                  var o = s(t).apply(this, arguments),
                  a = r._popContext();
                  return i.checkForgottenReturns(o, a, 'Promise.method', r),
                  r._resolveFromSyncValue(o),
                  r
                }
              },
              e.attempt = e.try = function (t) {
                if ('function' != typeof t) return o('expecting a function but got ' + a.classString(t));
                var r = new e(n);
                r._captureStackTrace(),
                r._pushContext();
                var u;
                if (arguments.length > 1) {
                  i.deprecated('calling Promise.try with more than 1 argument');
                  var c = arguments[1],
                  l = arguments[2];
                  u = a.isArray(c) ? s(t).apply(l, c)  : s(t).call(l, c)
                } else u = s(t) ();
                var p = r._popContext();
                return i.checkForgottenReturns(u, p, 'Promise.try', r),
                r._resolveFromSyncValue(u),
                r
              },
              e.prototype._resolveFromSyncValue = function (t) {
                t === a.errorObj ? this._rejectCallback(t.e, !1)  : this._resolveCallback(t, !0)
              }
            }
          },
          {
            './util': 36
          }
        ],
        20: [
          function (t, e, n) {
            'use strict';
            function r(t) {
              return t instanceof Error && l.getPrototypeOf(t) === Error.prototype
            }
            function o(t) {
              var e;
              if (r(t)) {
                e = new c(t),
                e.name = t.name,
                e.message = t.message,
                e.stack = t.stack;
                for (var n = l.keys(t), o = 0; o < n.length; ++o) {
                  var i = n[o];
                  p.test(i) || (e[i] = t[i])
                }
                return e
              }
              return a.markAsOriginatingFromRejection(t),
              t
            }
            function i(t, e) {
              return function (n, r) {
                if (null !== t) {
                  if (n) {
                    var i = o(s(n));
                    t._attachExtraTrace(i),
                    t._reject(i)
                  } else if (e) {
                    var a = [
                    ].slice.call(arguments, 1);
                    t._fulfill(a)
                  } else t._fulfill(r);
                  t = null
                }
              }
            }
            var a = t('./util'),
            s = a.maybeWrapAsError,
            u = t('./errors'),
            c = u.OperationalError,
            l = t('./es5'),
            p = /^(?:name|message|stack|cause)$/;
            e.exports = i
          },
          {
            './errors': 12,
            './es5': 13,
            './util': 36
          }
        ],
        21: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e) {
              function n(t, e) {
                var n = this;
                if (!i.isArray(t)) return r.call(n, t, e);
                var o = s(e).apply(n._boundValue(), [
                  null
                ].concat(t));
                o === u && a.throwLater(o.e)
              }
              function r(t, e) {
                var n = this,
                r = n._boundValue(),
                o = void 0 === t ? s(e).call(r, null)  : s(e).call(r, null, t);
                o === u && a.throwLater(o.e)
              }
              function o(t, e) {
                var n = this;
                if (!t) {
                  var r = new Error(t + '');
                  r.cause = t,
                  t = r
                }
                var o = s(e).call(n._boundValue(), t);
                o === u && a.throwLater(o.e)
              }
              var i = t('./util'),
              a = e._async,
              s = i.tryCatch,
              u = i.errorObj;
              e.prototype.asCallback = e.prototype.nodeify = function (t, e) {
                if ('function' == typeof t) {
                  var i = r;
                  void 0 !== e && Object(e).spread && (i = n),
                  this._then(i, o, void 0, this, t)
                }
                return this
              }
            }
          },
          {
            './util': 36
          }
        ],
        22: [
          function (t, n, r) {
            'use strict';
            n.exports = function () {
              function r() {
              }
              function o(t, e) {
                if (null == t || t.constructor !== i) throw new _('the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n');
                if ('function' != typeof e) throw new _('expecting a function but got ' + f.classString(e))
              }
              function i(t) {
                t !== x && o(this, t),
                this._bitField = 0,
                this._fulfillmentHandler0 = void 0,
                this._rejectionHandler0 = void 0,
                this._promise0 = void 0,
                this._receiver0 = void 0,
                this._resolveFromExecutor(t),
                this._promiseCreated(),
                this._fireEvent('promiseCreated', this)
              }
              function a(t) {
                this.promise._resolveCallback(t)
              }
              function s(t) {
                this.promise._rejectCallback(t, !1)
              }
              function u(t) {
                var e = new i(x);
                e._fulfillmentHandler0 = t,
                e._rejectionHandler0 = t,
                e._promise0 = t,
                e._receiver0 = t
              }
              var c = function () {
                return new _('circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n')
              },
              l = function () {
                return new i.PromiseInspection(this._target())
              },
              p = function (t) {
                return i.reject(new _(t))
              },
              h = {
              },
              f = t('./util'),
              d;
              d = f.isNode ? function () {
                var t = e.domain;
                return void 0 === t && (t = null),
                t
              }
               : function () {
                return null
              },
              f.notEnumerableProp(i, '_getDomain', d);
              var m = t('./es5'),
              y = t('./async'),
              v = new y;
              m.defineProperty(i, '_async', {
                value: v
              });
              var g = t('./errors'),
              _ = i.TypeError = g.TypeError;
              i.RangeError = g.RangeError;
              var b = i.CancellationError = g.CancellationError;
              i.TimeoutError = g.TimeoutError,
              i.OperationalError = g.OperationalError,
              i.RejectionError = g.OperationalError,
              i.AggregateError = g.AggregateError;
              var x = function () {
              },
              w = {
              },
              S = {
              },
              T = t('./thenables') (i, x),
              P = t('./promise_array') (i, x, T, p, r),
              C = t('./context') (i),
              k = C.create,
              O = t('./debuggability') (i, C),
              E = O.CapturedTrace,
              j = t('./finally') (i, T, S),
              A = t('./catch_filter') (S),
              F = t('./nodeback'),
              M = f.errorObj,
              R = f.tryCatch;
              return i.prototype.toString = function () {
                return '[object Promise]'
              },
              i.prototype.caught = i.prototype.catch = function (t) {
                var e = arguments.length;
                if (e > 1) {
                  var n = new Array(e - 1),
                  r = 0,
                  o;
                  for (o = 0; o < e - 1; ++o) {
                    var i = arguments[o];
                    if (!f.isObject(i)) return p('Catch statement predicate: expecting an object but got ' + f.classString(i));
                    n[r++] = i
                  }
                  return n.length = r,
                  t = arguments[o],
                  this.then(void 0, A(n, t, this))
                }
                return this.then(void 0, t)
              },
              i.prototype.reflect = function () {
                return this._then(l, l, void 0, this, void 0)
              },
              i.prototype.then = function (t, e) {
                if (O.warnings() && arguments.length > 0 && 'function' != typeof t && 'function' != typeof e) {
                  var n = '.then() only accepts functions but was passed: ' + f.classString(t);
                  arguments.length > 1 && (n += ', ' + f.classString(e)),
                  this._warn(n)
                }
                return this._then(t, e, void 0, void 0, void 0)
              },
              i.prototype.done = function (t, e) {
                this._then(t, e, void 0, void 0, void 0)._setIsFinal()
              },
              i.prototype.spread = function (t) {
                return 'function' != typeof t ? p('expecting a function but got ' + f.classString(t))  : this.all()._then(t, void 0, void 0, w, void 0)
              },
              i.prototype.toJSON = function () {
                var t = {
                  isFulfilled: !1,
                  isRejected: !1,
                  fulfillmentValue: void 0,
                  rejectionReason: void 0
                };
                return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0)  : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0),
                t
              },
              i.prototype.all = function () {
                return arguments.length > 0 && this._warn('.all() was passed arguments but it does not take any'),
                new P(this).promise()
              },
              i.prototype.error = function (t) {
                return this.caught(f.originatesFromRejection, t)
              },
              i.getNewLibraryCopy = n.exports,
              i.is = function (t) {
                return t instanceof i
              },
              i.fromNode = i.fromCallback = function (t) {
                var e = new i(x);
                e._captureStackTrace();
                var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs,
                r = R(t) (F(e, n));
                return r === M && e._rejectCallback(r.e, !0),
                e._isFateSealed() || e._setAsyncGuaranteed(),
                e
              },
              i.all = function (t) {
                return new P(t).promise()
              },
              i.cast = function (t) {
                var e = T(t);
                return e instanceof i || (e = new i(x), e._captureStackTrace(), e._setFulfilled(), e._rejectionHandler0 = t),
                e
              },
              i.resolve = i.fulfilled = i.cast,
              i.reject = i.rejected = function (t) {
                var e = new i(x);
                return e._captureStackTrace(),
                e._rejectCallback(t, !0),
                e
              },
              i.setScheduler = function (t) {
                if ('function' != typeof t) throw new _('expecting a function but got ' + f.classString(t));
                return v.setScheduler(t)
              },
              i.prototype._then = function (t, e, n, r, o) {
                var a = void 0 !== o,
                s = a ? o : new i(x),
                u = this._target(),
                c = u._bitField;
                a || (s._propagateFrom(this, 3), s._captureStackTrace(), void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & c) ? this._boundValue()  : u === this ? void 0 : this._boundTo), this._fireEvent('promiseChained', this, s));
                var l = d();
                if (0 != (50397184 & c)) {
                  var p,
                  h,
                  m = u._settlePromiseCtx;
                  0 != (33554432 & c) ? (h = u._rejectionHandler0, p = t)  : 0 != (16777216 & c) ? (h = u._fulfillmentHandler0, p = e, u._unsetRejectionIsUnhandled())  : (m = u._settlePromiseLateCancellationObserver, h = new b('late cancellation observer'), u._attachExtraTrace(h), p = e),
                  v.invoke(m, u, {
                    handler: null === l ? p : 'function' == typeof p && f.domainBind(l, p),
                    promise: s,
                    receiver: r,
                    value: h
                  })
                } else u._addCallbacks(t, e, s, r, l);
                return s
              },
              i.prototype._length = function () {
                return 65535 & this._bitField
              },
              i.prototype._isFateSealed = function () {
                return 0 != (117506048 & this._bitField)
              },
              i.prototype._isFollowing = function () {
                return 67108864 == (67108864 & this._bitField)
              },
              i.prototype._setLength = function (t) {
                this._bitField = - 65536 & this._bitField | 65535 & t
              },
              i.prototype._setFulfilled = function () {
                this._bitField = 33554432 | this._bitField,
                this._fireEvent('promiseFulfilled', this)
              },
              i.prototype._setRejected = function () {
                this._bitField = 16777216 | this._bitField,
                this._fireEvent('promiseRejected', this)
              },
              i.prototype._setFollowing = function () {
                this._bitField = 67108864 | this._bitField,
                this._fireEvent('promiseResolved', this)
              },
              i.prototype._setIsFinal = function () {
                this._bitField = 4194304 | this._bitField
              },
              i.prototype._isFinal = function () {
                return (4194304 & this._bitField) > 0
              },
              i.prototype._unsetCancelled = function () {
                this._bitField = - 65537 & this._bitField
              },
              i.prototype._setCancelled = function () {
                this._bitField = 65536 | this._bitField,
                this._fireEvent('promiseCancelled', this)
              },
              i.prototype._setWillBeCancelled = function () {
                this._bitField = 8388608 | this._bitField
              },
              i.prototype._setAsyncGuaranteed = function () {
                v.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
              },
              i.prototype._receiverAt = function (t) {
                var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];
                if (e !== h) return void 0 === e && this._isBound() ? this._boundValue()  : e
              },
              i.prototype._promiseAt = function (t) {
                return this[4 * t - 4 + 2]
              },
              i.prototype._fulfillmentHandlerAt = function (t) {
                return this[4 * t - 4 + 0]
              },
              i.prototype._rejectionHandlerAt = function (t) {
                return this[4 * t - 4 + 1]
              },
              i.prototype._boundValue = function () {
              },
              i.prototype._migrateCallback0 = function (t) {
                var e = t._bitField,
                n = t._fulfillmentHandler0,
                r = t._rejectionHandler0,
                o = t._promise0,
                i = t._receiverAt(0);
                void 0 === i && (i = h),
                this._addCallbacks(n, r, o, i, null)
              },
              i.prototype._migrateCallbackAt = function (t, e) {
                var n = t._fulfillmentHandlerAt(e),
                r = t._rejectionHandlerAt(e),
                o = t._promiseAt(e),
                i = t._receiverAt(e);
                void 0 === i && (i = h),
                this._addCallbacks(n, r, o, i, null)
              },
              i.prototype._addCallbacks = function (t, e, n, r, o) {
                var i = this._length();
                if (i >= 65531 && (i = 0, this._setLength(0)), 0 === i) this._promise0 = n,
                this._receiver0 = r,
                'function' == typeof t && (this._fulfillmentHandler0 = null === o ? t : f.domainBind(o, t)),
                'function' == typeof e && (this._rejectionHandler0 = null === o ? e : f.domainBind(o, e));
                 else {
                  var a = 4 * i - 4;
                  this[a + 2] = n,
                  this[a + 3] = r,
                  'function' == typeof t && (this[a + 0] = null === o ? t : f.domainBind(o, t)),
                  'function' == typeof e && (this[a + 1] = null === o ? e : f.domainBind(o, e))
                }
                return this._setLength(i + 1),
                i
              },
              i.prototype._proxy = function (t, e) {
                this._addCallbacks(void 0, void 0, e, t, null)
              },
              i.prototype._resolveCallback = function (t, e) {
                if (0 == (117506048 & this._bitField)) {
                  if (t === this) return this._rejectCallback(c(), !1);
                  var n = T(t, this);
                  if (!(n instanceof i)) return this._fulfill(t);
                  e && this._propagateFrom(n, 2);
                  var r = n._target();
                  if (r === this) return void this._reject(c());
                  var o = r._bitField;
                  if (0 == (50397184 & o)) {
                    var a = this._length();
                    a > 0 && r._migrateCallback0(this);
                    for (var s = 1; s < a; ++s) r._migrateCallbackAt(this, s);
                    this._setFollowing(),
                    this._setLength(0),
                    this._setFollowee(r)
                  } else if (0 != (33554432 & o)) this._fulfill(r._value());
                   else if (0 != (16777216 & o)) this._reject(r._reason());
                   else {
                    var u = new b('late cancellation observer');
                    r._attachExtraTrace(u),
                    this._reject(u)
                  }
                }
              },
              i.prototype._rejectCallback = function (t, e, n) {
                var r = f.ensureErrorObject(t),
                o = r === t;
                if (!o && !n && O.warnings()) {
                  var i = 'a promise was rejected with a non-error: ' + f.classString(t);
                  this._warn(i, !0)
                }
                this._attachExtraTrace(r, !!e && o),
                this._reject(t)
              },
              i.prototype._resolveFromExecutor = function (t) {
                if (t !== x) {
                  var e = this;
                  this._captureStackTrace(),
                  this._pushContext();
                  var n = !0,
                  r = this._execute(t, function (t) {
                    e._resolveCallback(t)
                  }, function (t) {
                    e._rejectCallback(t, n)
                  });
                  n = !1,
                  this._popContext(),
                  void 0 !== r && e._rejectCallback(r, !0)
                }
              },
              i.prototype._settlePromiseFromHandler = function (t, e, n, r) {
                var o = r._bitField;
                if (0 == (65536 & o)) {
                  r._pushContext();
                  var i;
                  e === w ? n && 'number' == typeof n.length ? i = R(t).apply(this._boundValue(), n)  : (i = M, i.e = new _('cannot .spread() a non-array: ' + f.classString(n)))  : i = R(t).call(e, n);
                  var a = r._popContext();
                  o = r._bitField,
                  0 == (65536 & o) && (i === S ? r._reject(n)  : i === M ? r._rejectCallback(i.e, !1)  : (O.checkForgottenReturns(i, a, '', r, this), r._resolveCallback(i)))
                }
              },
              i.prototype._target = function () {
                for (var t = this; t._isFollowing(); ) t = t._followee();
                return t
              },
              i.prototype._followee = function () {
                return this._rejectionHandler0
              },
              i.prototype._setFollowee = function (t) {
                this._rejectionHandler0 = t
              },
              i.prototype._settlePromise = function (t, e, n, o) {
                var a = t instanceof i,
                s = this._bitField,
                u = 0 != (134217728 & s);
                0 != (65536 & s) ? (a && t._invokeInternalOnCancel(), n instanceof j && n.isFinallyHandler() ? (n.cancelPromise = t, R(e).call(n, o) === M && t._reject(M.e))  : e === l ? t._fulfill(l.call(n))  : n instanceof r ? n._promiseCancelled(t)  : a || t instanceof P ? t._cancel()  : n.cancel())  : 'function' == typeof e ? a ? (u && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, n, o, t))  : e.call(n, o, t)  : n instanceof r ? n._isResolved() || (0 != (33554432 & s) ? n._promiseFulfilled(o, t)  : n._promiseRejected(o, t))  : a && (u && t._setAsyncGuaranteed(), 0 != (33554432 & s) ? t._fulfill(o)  : t._reject(o))
              },
              i.prototype._settlePromiseLateCancellationObserver = function (t) {
                var e = t.handler,
                n = t.promise,
                r = t.receiver,
                o = t.value;
                'function' == typeof e ? n instanceof i ? this._settlePromiseFromHandler(e, r, o, n)  : e.call(r, o, n)  : n instanceof i && n._reject(o)
              },
              i.prototype._settlePromiseCtx = function (t) {
                this._settlePromise(t.promise, t.handler, t.receiver, t.value)
              },
              i.prototype._settlePromise0 = function (t, e, n) {
                var r = this._promise0,
                o = this._receiverAt(0);
                this._promise0 = void 0,
                this._receiver0 = void 0,
                this._settlePromise(r, t, o, e)
              },
              i.prototype._clearCallbackDataAtIndex = function (t) {
                var e = 4 * t - 4;
                this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0
              },
              i.prototype._fulfill = function (t) {
                var e = this._bitField;
                if (!((117506048 & e) >>> 16)) {
                  if (t === this) {
                    var n = c();
                    return this._attachExtraTrace(n),
                    this._reject(n)
                  }
                  this._setFulfilled(),
                  this._rejectionHandler0 = t,
                  (65535 & e) > 0 && (0 != (134217728 & e) ? this._settlePromises()  : v.settlePromises(this))
                }
              },
              i.prototype._reject = function (t) {
                var e = this._bitField;
                if (!((117506048 & e) >>> 16)) {
                  if (this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal()) return v.fatalError(t, f.isNode);
                  (65535 & e) > 0 ? v.settlePromises(this)  : this._ensurePossibleRejectionHandled()
                }
              },
              i.prototype._fulfillPromises = function (t, e) {
                for (var n = 1; n < t; n++) {
                  var r = this._fulfillmentHandlerAt(n),
                  o = this._promiseAt(n),
                  i = this._receiverAt(n);
                  this._clearCallbackDataAtIndex(n),
                  this._settlePromise(o, r, i, e)
                }
              },
              i.prototype._rejectPromises = function (t, e) {
                for (var n = 1; n < t; n++) {
                  var r = this._rejectionHandlerAt(n),
                  o = this._promiseAt(n),
                  i = this._receiverAt(n);
                  this._clearCallbackDataAtIndex(n),
                  this._settlePromise(o, r, i, e)
                }
              },
              i.prototype._settlePromises = function () {
                var t = this._bitField,
                e = 65535 & t;
                if (e > 0) {
                  if (0 != (16842752 & t)) {
                    var n = this._fulfillmentHandler0;
                    this._settlePromise0(this._rejectionHandler0, n, t),
                    this._rejectPromises(e, n)
                  } else {
                    var r = this._rejectionHandler0;
                    this._settlePromise0(this._fulfillmentHandler0, r, t),
                    this._fulfillPromises(e, r)
                  }
                  this._setLength(0)
                }
                this._clearCancellationData()
              },
              i.prototype._settledValue = function () {
                var t = this._bitField;
                return 0 != (33554432 & t) ? this._rejectionHandler0 : 0 != (16777216 & t) ? this._fulfillmentHandler0 : void 0
              },
              i.defer = i.pending = function () {
                return O.deprecated('Promise.defer', 'new Promise'),
                {
                  promise: new i(x),
                  resolve: a,
                  reject: s
                }
              },
              f.notEnumerableProp(i, '_makeSelfResolutionError', c),
              t('./method') (i, x, T, p, O),
              t('./bind') (i, x, T, O),
              t('./cancel') (i, P, p, O),
              t('./direct_resolve') (i),
              t('./synchronous_inspection') (i),
              t('./join') (i, P, T, x, v, d),
              i.Promise = i,
              i.version = '3.5.1',
              t('./map.js') (i, P, p, T, x, O),
              t('./call_get.js') (i),
              t('./using.js') (i, p, T, k, x, O),
              t('./timers.js') (i, x, O),
              t('./generators.js') (i, p, x, T, r, O),
              t('./nodeify.js') (i),
              t('./promisify.js') (i, x),
              t('./props.js') (i, P, T, p),
              t('./race.js') (i, x, T, p),
              t('./reduce.js') (i, P, p, T, x, O),
              t('./settle.js') (i, P, O),
              t('./some.js') (i, P, p),
              t('./filter.js') (i, x),
              t('./each.js') (i, x),
              t('./any.js') (i),
              f.toFastProperties(i),
              f.toFastProperties(i.prototype),
              u({
                a: 1
              }),
              u({
                b: 2
              }),
              u({
                c: 3
              }),
              u(1),
              u(function () {
              }),
              u(void 0),
              u(!1),
              u(new i(x)),
              O.setBounds(y.firstLineError, f.lastLineError),
              i
            }
          },
          {
            './any.js': 1,
            './async': 2,
            './bind': 3,
            './call_get.js': 5,
            './cancel': 6,
            './catch_filter': 7,
            './context': 8,
            './debuggability': 9,
            './direct_resolve': 10,
            './each.js': 11,
            './errors': 12,
            './es5': 13,
            './filter.js': 14,
            './finally': 15,
            './generators.js': 16,
            './join': 17,
            './map.js': 18,
            './method': 19,
            './nodeback': 20,
            './nodeify.js': 21,
            './promise_array': 23,
            './promisify.js': 24,
            './props.js': 25,
            './race.js': 27,
            './reduce.js': 28,
            './settle.js': 30,
            './some.js': 31,
            './synchronous_inspection': 32,
            './thenables': 33,
            './timers.js': 34,
            './using.js': 35,
            './util': 36
          }
        ],
        23: [
          function (t, e, n) {
            'use strict';
            e.exports = function (e, n, r, o, i) {
              function a(t) {
                switch (t) {
                  case - 2:
                    return [];
                  case - 3:
                    return {
                    };
                  case - 6:
                    return new Map
                }
              }
              function s(t) {
                var r = this._promise = new e(n);
                t instanceof e && r._propagateFrom(t, 3),
                r._setOnCancel(this),
                this._values = t,
                this._length = 0,
                this._totalResolved = 0,
                this._init(void 0, - 2)
              }
              var u = t('./util'),
              c = u.isArray;
              return u.inherits(s, i),
              s.prototype.length = function () {
                return this._length
              },
              s.prototype.promise = function () {
                return this._promise
              },
              s.prototype._init = function t(n, i) {
                var s = r(this._values, this._promise);
                if (s instanceof e) {
                  s = s._target();
                  var c = s._bitField;
                  if (this._values = s, 0 == (50397184 & c)) return this._promise._setAsyncGuaranteed(),
                  s._then(t, this._reject, void 0, this, i);
                  if (0 == (33554432 & c)) return 0 != (16777216 & c) ? this._reject(s._reason())  : this._cancel();
                  s = s._value()
                }
                if (null === (s = u.asArray(s))) {
                  var l = o('expecting an array or an iterable object but got ' + u.classString(s)).reason();
                  return void this._promise._rejectCallback(l, !1)
                }
                if (0 === s.length) return void ( - 5 === i ? this._resolveEmptyArray()  : this._resolve(a(i)));
                this._iterate(s)
              },
              s.prototype._iterate = function (t) {
                var n = this.getActualLength(t.length);
                this._length = n,
                this._values = this.shouldCopyValues() ? new Array(n)  : this._values;
                for (var o = this._promise, i = !1, a = null, s = 0; s < n; ++s) {
                  var u = r(t[s], o);
                  u instanceof e ? (u = u._target(), a = u._bitField)  : a = null,
                  i ? null !== a && u.suppressUnhandledRejections()  : null !== a ? 0 == (50397184 & a) ? (u._proxy(this, s), this._values[s] = u)  : i = 0 != (33554432 & a) ? this._promiseFulfilled(u._value(), s)  : 0 != (16777216 & a) ? this._promiseRejected(u._reason(), s)  : this._promiseCancelled(s)  : i = this._promiseFulfilled(u, s)
                }
                i || o._setAsyncGuaranteed()
              },
              s.prototype._isResolved = function () {
                return null === this._values
              },
              s.prototype._resolve = function (t) {
                this._values = null,
                this._promise._fulfill(t)
              },
              s.prototype._cancel = function () {
                !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel())
              },
              s.prototype._reject = function (t) {
                this._values = null,
                this._promise._rejectCallback(t, !1)
              },
              s.prototype._promiseFulfilled = function (t, e) {
                return this._values[e] = t,
                ++this._totalResolved >= this._length && (this._resolve(this._values), !0)
              },
              s.prototype._promiseCancelled = function () {
                return this._cancel(),
                !0
              },
              s.prototype._promiseRejected = function (t) {
                return this._totalResolved++,
                this._reject(t),
                !0
              },
              s.prototype._resultCancelled = function () {
                if (!this._isResolved()) {
                  var t = this._values;
                  if (this._cancel(), t instanceof e) t.cancel();
                   else for (var n = 0; n < t.length; ++n) t[n] instanceof e && t[n].cancel()
                }
              },
              s.prototype.shouldCopyValues = function () {
                return !0
              },
              s.prototype.getActualLength = function (t) {
                return t
              },
              s
            }
          },
          {
            './util': 36
          }
          ],
          24: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n) {
                function r(t) {
                  return !x.test(t)
                }
                function o(t) {
                  try {
                    return !0 === t.__isPromisified__
                  } catch (t) {
                    return !1
                  }
                }
                function i(t, e, n) {
                  var r = h.getDataPropertyOrDefault(t, e + n, _);
                  return !!r && o(r)
                }
                function a(t, e, n) {
                  for (var r = 0; r < t.length; r += 2) {
                    var o = t[r];
                    if (n.test(o)) for (var i = o.replace(n, ''), a = 0; a < t.length; a += 2) if (t[a] === i) throw new v('Cannot promisify an API that has normal methods with \'%s\'-suffix\n\n    See http://goo.gl/MqrFmX\n'.replace('%s', e))
                  }
                }
                function s(t, e, n, r) {
                  for (var s = h.inheritedDataKeys(t), u = [
                  ], c = 0; c < s.length; ++c) {
                    var l = s[c],
                    p = t[l],
                    f = r === w || w(l, p, t);
                    'function' != typeof p || o(p) || i(t, l, e) || !r(l, p, t, f) || u.push(l, p)
                  }
                  return a(u, e, n),
                  u
                }
                function u(t, r, o, i, a, s) {
                  function u() {
                    var o = r;
                    r === p && (o = this);
                    var i = new e(n);
                    i._captureStackTrace();
                    var a = 'string' == typeof l && this !== c ? this[l] : t,
                    u = f(i, s);
                    try {
                      a.apply(o, d(arguments, u))
                    } catch (t) {
                      i._rejectCallback(m(t), !0, !0)
                    }
                    return i._isFateSealed() || i._setAsyncGuaranteed(),
                    i
                  }
                  var c = function () {
                    return this
                  }(),
                  l = t;
                  return 'string' == typeof l && (t = i),
                  h.notEnumerableProp(u, '__isPromisified__', !0),
                  u
                }
                function c(t, e, n, r, o) {
                  for (var i = new RegExp(S(e) + '$'), a = s(t, e, i, n), u = 0, c = a.length; u < c; u += 2) {
                    var l = a[u],
                    f = a[u + 1],
                    d = l + e;
                    if (r === E) t[d] = E(l, p, l, f, e, o);
                     else {
                      var m = r(f, function () {
                        return E(l, p, l, f, e, o)
                      });
                      h.notEnumerableProp(m, '__isPromisified__', !0),
                      t[d] = m
                    }
                  }
                  return h.toFastProperties(t),
                  t
                }
                function l(t, e, n) {
                  return E(t, e, void 0, t, null, n)
                }
                var p = {
                },
                h = t('./util'),
                f = t('./nodeback'),
                d = h.withAppended,
                m = h.maybeWrapAsError,
                y = h.canEvaluate,
                v = t('./errors').TypeError,
                g = 'Async',
                _ = {
                  __isPromisified__: !0
                },
                b = [
                  'arity',
                  'length',
                  'name',
                  'arguments',
                  'caller',
                  'callee',
                  'prototype',
                  '__isPromisified__'
                ],
                x = new RegExp('^(?:' + b.join('|') + ')$'),
                w = function (t) {
                  return h.isIdentifier(t) && '_' !== t.charAt(0) && 'constructor' !== t
                },
                S = function (t) {
                  return t.replace(/([$])/, '\\$')
                },
                T,
                P,
                C,
                k,
                O,
                E = y ? T : u;
                e.promisify = function (t, e) {
                  if ('function' != typeof t) throw new v('expecting a function but got ' + h.classString(t));
                  if (o(t)) return t;
                  e = Object(e);
                  var n = void 0 === e.context ? p : e.context,
                  i = !!e.multiArgs,
                  a = l(t, n, i);
                  return h.copyDescriptors(t, a, r),
                  a
                },
                e.promisifyAll = function (t, e) {
                  if ('function' != typeof t && 'object' != typeof t) throw new v('the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n');
                  e = Object(e);
                  var n = !!e.multiArgs,
                  r = e.suffix;
                  'string' != typeof r && (r = 'Async');
                  var o = e.filter;
                  'function' != typeof o && (o = w);
                  var i = e.promisifier;
                  if ('function' != typeof i && (i = E), !h.isIdentifier(r)) throw new RangeError('suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n');
                  for (var a = h.inheritedDataKeys(t), s = 0; s < a.length; ++s) {
                    var u = t[a[s]];
                    'constructor' !== a[s] && h.isClass(u) && (c(u.prototype, r, o, i, n), c(u, r, o, i, n))
                  }
                  return c(t, r, o, i, n)
                }
              }
            },
            {
              './errors': 12,
              './nodeback': 20,
              './util': 36
            }
          ],
          25: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n, r, o) {
                function i(t) {
                  var e = !1,
                  n;
                  if (void 0 !== l && t instanceof l) n = p(t),
                  e = !0;
                   else {
                    var r = c.keys(t),
                    o = r.length;
                    n = new Array(2 * o);
                    for (var i = 0; i < o; ++i) {
                      var a = r[i];
                      n[i] = t[a],
                      n[i + o] = a
                    }
                  }
                  this.constructor$(n),
                  this._isMap = e,
                  this._init$(void 0, e ? - 6 : - 3)
                }
                function a(t) {
                  var n,
                  a = r(t);
                  return u(a) ? (n = a instanceof e ? a._then(e.props, void 0, void 0, void 0, void 0)  : new i(a).promise(), a instanceof e && n._propagateFrom(a, 2), n)  : o('cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n')
                }
                var s = t('./util'),
                u = s.isObject,
                c = t('./es5'),
                l;
                'function' == typeof Map && (l = Map);
                var p = function () {
                  function t(t, r) {
                    this[e] = t,
                    this[e + n] = r,
                    e++
                  }
                  var e = 0,
                  n = 0;
                  return function r(o) {
                    n = o.size,
                    e = 0;
                    var i = new Array(2 * o.size);
                    return o.forEach(t, i),
                    i
                  }
                }(),
                h = function (t) {
                  for (var e = new l, n = t.length / 2 | 0, r = 0; r < n; ++r) {
                    var o = t[n + r],
                    i = t[r];
                    e.set(o, i)
                  }
                  return e
                };
                s.inherits(i, n),
                i.prototype._init = function () {
                },
                i.prototype._promiseFulfilled = function (t, e) {
                  if (this._values[e] = t, ++this._totalResolved >= this._length) {
                    var n;
                    if (this._isMap) n = h(this._values);
                     else {
                      n = {
                      };
                      for (var r = this.length(), o = 0, i = this.length(); o < i; ++o) n[this._values[o + r]] = this._values[o]
                    }
                    return this._resolve(n),
                    !0
                  }
                  return !1
                },
                i.prototype.shouldCopyValues = function () {
                  return !1
                },
                i.prototype.getActualLength = function (t) {
                  return t >> 1
                },
                e.prototype.props = function () {
                  return a(this)
                },
                e.props = function (t) {
                  return a(t)
                }
              }
            },
            {
              './es5': 13,
              './util': 36
            }
          ],
          26: [
            function (t, e, n) {
              'use strict';
              function r(t, e, n, r, o) {
                for (var i = 0; i < o; ++i) n[i + r] = t[i + e],
                t[i + e] = void 0
              }
              function o(t) {
                this._capacity = t,
                this._length = 0,
                this._front = 0
              }
              o.prototype._willBeOverCapacity = function (t) {
                return this._capacity < t
              },
              o.prototype._pushOne = function (t) {
                var e = this.length();
                this._checkCapacity(e + 1),
                this[this._front + e & this._capacity - 1] = t,
                this._length = e + 1
              },
              o.prototype.push = function (t, e, n) {
                var r = this.length() + 3;
                if (this._willBeOverCapacity(r)) return this._pushOne(t),
                this._pushOne(e),
                void this._pushOne(n);
                var o = this._front + r - 3;
                this._checkCapacity(r);
                var i = this._capacity - 1;
                this[o + 0 & i] = t,
                this[o + 1 & i] = e,
                this[o + 2 & i] = n,
                this._length = r
              },
              o.prototype.shift = function () {
                var t = this._front,
                e = this[t];
                return this[t] = void 0,
                this._front = t + 1 & this._capacity - 1,
                this._length--,
                e
              },
              o.prototype.length = function () {
                return this._length
              },
              o.prototype._checkCapacity = function (t) {
                this._capacity < t && this._resizeTo(this._capacity << 1)
              },
              o.prototype._resizeTo = function (t) {
                var e = this._capacity;
                this._capacity = t,
                r(this, 0, this, e, this._front + this._length & e - 1)
              },
              e.exports = o
            },
            {
            }
          ],
          27: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n, r, o) {
                function i(t, i) {
                  var u = r(t);
                  if (u instanceof e) return s(u);
                  if (null === (t = a.asArray(t))) return o('expecting an array or an iterable object but got ' + a.classString(t));
                  var c = new e(n);
                  void 0 !== i && c._propagateFrom(i, 3);
                  for (var l = c._fulfill, p = c._reject, h = 0, f = t.length; h < f; ++h) {
                    var d = t[h];
                    (void 0 !== d || h in t) && e.cast(d)._then(l, p, void 0, c, null)
                  }
                  return c
                }
                var a = t('./util'),
                s = function (t) {
                  return t.then(function (e) {
                    return i(e, t)
                  })
                };
                e.race = function (t) {
                  return i(t, void 0)
                },
                e.prototype.race = function () {
                  return i(this, void 0)
                }
              }
            },
            {
              './util': 36
            }
          ],
          28: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n, r, o, i, a) {
                function s(t, n, r, o) {
                  this.constructor$(t);
                  var a = h();
                  this._fn = null === a ? n : f.domainBind(a, n),
                  void 0 !== r && (r = e.resolve(r), r._attachCancellationCallback(this)),
                  this._initialValue = r,
                  this._currentCancellable = null,
                  this._eachValues = o === i ? Array(this._length)  : 0 === o ? null : void 0,
                  this._promise._captureStackTrace(),
                  this._init$(void 0, - 5)
                }
                function u(t, e) {
                  this.isFulfilled() ? e._resolve(t)  : e._reject(t)
                }
                function c(t, e, n, o) {
                  return 'function' != typeof e ? r('expecting a function but got ' + f.classString(e))  : new s(t, e, n, o).promise()
                }
                function l(t) {
                  this.accum = t,
                  this.array._gotAccum(t);
                  var n = o(this.value, this.array._promise);
                  return n instanceof e ? (this.array._currentCancellable = n, n._then(p, void 0, void 0, this, void 0))  : p.call(this, n)
                }
                function p(t) {
                  var n = this.array,
                  r = n._promise,
                  o = d(n._fn);
                  r._pushContext();
                  var i;
                  (i = void 0 !== n._eachValues ? o.call(r._boundValue(), t, this.index, this.length)  : o.call(r._boundValue(), this.accum, t, this.index, this.length)) instanceof e && (n._currentCancellable = i);
                  var s = r._popContext();
                  return a.checkForgottenReturns(i, s, void 0 !== n._eachValues ? 'Promise.each' : 'Promise.reduce', r),
                  i
                }
                var h = e._getDomain,
                f = t('./util'),
                d = f.tryCatch;
                f.inherits(s, n),
                s.prototype._gotAccum = function (t) {
                  void 0 !== this._eachValues && null !== this._eachValues && t !== i && this._eachValues.push(t)
                },
                s.prototype._eachComplete = function (t) {
                  return null !== this._eachValues && this._eachValues.push(t),
                  this._eachValues
                },
                s.prototype._init = function () {
                },
                s.prototype._resolveEmptyArray = function () {
                  this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                },
                s.prototype.shouldCopyValues = function () {
                  return !1
                },
                s.prototype._resolve = function (t) {
                  this._promise._resolveCallback(t),
                  this._values = null
                },
                s.prototype._resultCancelled = function (t) {
                  if (t === this._initialValue) return this._cancel();
                  this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel())
                },
                s.prototype._iterate = function (t) {
                  this._values = t;
                  var n,
                  r,
                  o = t.length;
                  if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0)  : (n = e.resolve(t[0]), r = 1), this._currentCancellable = n, !n.isRejected()) for (; r < o; ++r) {
                    var i = {
                      accum: null,
                      value: t[r],
                      index: r,
                      length: o,
                      array: this
                    };
                    n = n._then(l, void 0, void 0, i, void 0)
                  }
                  void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)),
                  n._then(u, u, void 0, n, this)
                },
                e.prototype.reduce = function (t, e) {
                  return c(this, t, e, null)
                },
                e.reduce = function (t, e, n, r) {
                  return c(t, e, n, r)
                }
              }
            },
            {
              './util': 36
            }
          ],
          29: [
            function (t, o, i) {
              'use strict';
              var a = t('./util'),
              s,
              u = function () {
                throw new Error('No async scheduler available\n\n    See http://goo.gl/MqrFmX\n')
              },
              c = a.getNativePromise();
              if (a.isNode && 'undefined' == typeof MutationObserver) {
                var l = n.setImmediate,
                p = e.nextTick;
                s = a.isRecentNode ? function (t) {
                  l.call(n, t)
                }
                 : function (t) {
                  p.call(e, t)
                }
              } else if ('function' == typeof c && 'function' == typeof c.resolve) {
                var h = c.resolve();
                s = function (t) {
                  h.then(t)
                }
              } else s = 'undefined' == typeof MutationObserver || 'undefined' != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== r ? function (t) {
                r(t)
              }
               : 'undefined' != typeof setTimeout ? function (t) {
                setTimeout(t, 0)
              }
               : u : function () {
                var t = document.createElement('div'),
                e = {
                  attributes: !0
                },
                n = !1,
                r = document.createElement('div');
                new MutationObserver(function () {
                  t.classList.toggle('foo'),
                  n = !1
                }).observe(r, e);
                var o = function () {
                  n || (n = !0, r.classList.toggle('foo'))
                };
                return function n(r) {
                  var i = new MutationObserver(function () {
                    i.disconnect(),
                    r()
                  });
                  i.observe(t, e),
                  o()
                }
              }();
              o.exports = s
            },
            {
              './util': 36
            }
          ],
          30: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n, r) {
                function o(t) {
                  this.constructor$(t)
                }
                var i = e.PromiseInspection;
                t('./util').inherits(o, n),
                o.prototype._promiseResolved = function (t, e) {
                  return this._values[t] = e,
                  ++this._totalResolved >= this._length && (this._resolve(this._values), !0)
                },
                o.prototype._promiseFulfilled = function (t, e) {
                  var n = new i;
                  return n._bitField = 33554432,
                  n._settledValueField = t,
                  this._promiseResolved(e, n)
                },
                o.prototype._promiseRejected = function (t, e) {
                  var n = new i;
                  return n._bitField = 16777216,
                  n._settledValueField = t,
                  this._promiseResolved(e, n)
                },
                e.settle = function (t) {
                  return r.deprecated('.settle()', '.reflect()'),
                  new o(t).promise()
                },
                e.prototype.settle = function () {
                  return e.settle(this)
                }
              }
            },
            {
              './util': 36
            }
          ],
          31: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n, r) {
                function o(t) {
                  this.constructor$(t),
                  this._howMany = 0,
                  this._unwrap = !1,
                  this._initialized = !1
                }
                function i(t, e) {
                  if ((0 | e) !== e || e < 0) return r('expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n');
                  var n = new o(t),
                  i = n.promise();
                  return n.setHowMany(e),
                  n.init(),
                  i
                }
                var a = t('./util'),
                s = t('./errors').RangeError,
                u = t('./errors').AggregateError,
                c = a.isArray,
                l = {
                };
                a.inherits(o, n),
                o.prototype._init = function () {
                  if (this._initialized) {
                    if (0 === this._howMany) return void this._resolve([]);
                    this._init$(void 0, - 5);
                    var t = c(this._values);
                    !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                  }
                },
                o.prototype.init = function () {
                  this._initialized = !0,
                  this._init()
                },
                o.prototype.setUnwrap = function () {
                  this._unwrap = !0
                },
                o.prototype.howMany = function () {
                  return this._howMany
                },
                o.prototype.setHowMany = function (t) {
                  this._howMany = t
                },
                o.prototype._promiseFulfilled = function (t) {
                  return this._addFulfilled(t),
                  this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0])  : this._resolve(this._values), !0)
                },
                o.prototype._promiseRejected = function (t) {
                  return this._addRejected(t),
                  this._checkOutcome()
                },
                o.prototype._promiseCancelled = function () {
                  return this._values instanceof e || null == this._values ? this._cancel()  : (this._addRejected(l), this._checkOutcome())
                },
                o.prototype._checkOutcome = function () {
                  if (this.howMany() > this._canPossiblyFulfill()) {
                    for (var t = new u, e = this.length(); e < this._values.length; ++e) this._values[e] !== l && t.push(this._values[e]);
                    return t.length > 0 ? this._reject(t)  : this._cancel(),
                    !0
                  }
                  return !1
                },
                o.prototype._fulfilled = function () {
                  return this._totalResolved
                },
                o.prototype._rejected = function () {
                  return this._values.length - this.length()
                },
                o.prototype._addRejected = function (t) {
                  this._values.push(t)
                },
                o.prototype._addFulfilled = function (t) {
                  this._values[this._totalResolved++] = t
                },
                o.prototype._canPossiblyFulfill = function () {
                  return this.length() - this._rejected()
                },
                o.prototype._getRangeError = function (t) {
                  var e = 'Input array must contain at least ' + this._howMany + ' items but contains only ' + t + ' items';
                  return new s(e)
                },
                o.prototype._resolveEmptyArray = function () {
                  this._reject(this._getRangeError(0))
                },
                e.some = function (t, e) {
                  return i(t, e)
                },
                e.prototype.some = function (t) {
                  return i(this, t)
                },
                e._SomePromiseArray = o
              }
            },
            {
              './errors': 12,
              './util': 36
            }
          ],
          32: [
            function (t, e, n) {
              'use strict';
              e.exports = function (t) {
                function e(t) {
                  void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue()  : void 0)  : (this._bitField = 0, this._settledValueField = void 0)
                }
                e.prototype._settledValue = function () {
                  return this._settledValueField
                };
                var n = e.prototype.value = function () {
                  if (!this.isFulfilled()) throw new TypeError('cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n');
                  return this._settledValue()
                },
                r = e.prototype.error = e.prototype.reason = function () {
                  if (!this.isRejected()) throw new TypeError('cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n');
                  return this._settledValue()
                },
                o = e.prototype.isFulfilled = function () {
                  return 0 != (33554432 & this._bitField)
                },
                i = e.prototype.isRejected = function () {
                  return 0 != (16777216 & this._bitField)
                },
                a = e.prototype.isPending = function () {
                  return 0 == (50397184 & this._bitField)
                },
                s = e.prototype.isResolved = function () {
                  return 0 != (50331648 & this._bitField)
                };
                e.prototype.isCancelled = function () {
                  return 0 != (8454144 & this._bitField)
                },
                t.prototype.__isCancelled = function () {
                  return 65536 == (65536 & this._bitField)
                },
                t.prototype._isCancelled = function () {
                  return this._target().__isCancelled()
                },
                t.prototype.isCancelled = function () {
                  return 0 != (8454144 & this._target()._bitField)
                },
                t.prototype.isPending = function () {
                  return a.call(this._target())
                },
                t.prototype.isRejected = function () {
                  return i.call(this._target())
                },
                t.prototype.isFulfilled = function () {
                  return o.call(this._target())
                },
                t.prototype.isResolved = function () {
                  return s.call(this._target())
                },
                t.prototype.value = function () {
                  return n.call(this._target())
                },
                t.prototype.reason = function () {
                  var t = this._target();
                  return t._unsetRejectionIsUnhandled(),
                  r.call(t)
                },
                t.prototype._value = function () {
                  return this._settledValue()
                },
                t.prototype._reason = function () {
                  return this._unsetRejectionIsUnhandled(),
                  this._settledValue()
                },
                t.PromiseInspection = e
              }
            },
            {
            }
          ],
          33: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n) {
                function r(t, r) {
                  if (l(t)) {
                    if (t instanceof e) return t;
                    var o = i(t);
                    if (o === c) {
                      r && r._pushContext();
                      var u = e.reject(o.e);
                      return r && r._popContext(),
                      u
                    }
                    if ('function' == typeof o) {
                      if (a(t)) {
                        var u = new e(n);
                        return t._then(u._fulfill, u._reject, void 0, u, null),
                        u
                      }
                      return s(t, o, r)
                    }
                  }
                  return t
                }
                function o(t) {
                  return t.then
                }
                function i(t) {
                  try {
                    return o(t)
                  } catch (t) {
                    return c.e = t,
                    c
                  }
                }
                function a(t) {
                  try {
                    return p.call(t, '_promise0')
                  } catch (t) {
                    return !1
                  }
                }
                function s(t, r, o) {
                  function i(t) {
                    s && (s._resolveCallback(t), s = null)
                  }
                  function a(t) {
                    s && (s._rejectCallback(t, p, !0), s = null)
                  }
                  var s = new e(n),
                  l = s;
                  o && o._pushContext(),
                  s._captureStackTrace(),
                  o && o._popContext();
                  var p = !0,
                  h = u.tryCatch(r).call(t, i, a);
                  return p = !1,
                  s && h === c && (s._rejectCallback(h.e, !0, !0), s = null),
                  l
                }
                var u = t('./util'),
                c = u.errorObj,
                l = u.isObject,
                p = {
                }.hasOwnProperty;
                return r
              }
            },
            {
              './util': 36
            }
          ],
          34: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n, r) {
                function o(t) {
                  this.handle = t
                }
                function i(t) {
                  return clearTimeout(this.handle),
                  t
                }
                function a(t) {
                  throw clearTimeout(this.handle),
                  t
                }
                var s = t('./util'),
                u = e.TimeoutError;
                o.prototype._resultCancelled = function () {
                  clearTimeout(this.handle)
                };
                var c = function (t) {
                  return l( + this).thenReturn(t)
                },
                l = e.delay = function (t, i) {
                  var a,
                  s;
                  return void 0 !== i ? (a = e.resolve(i)._then(c, null, null, t, void 0), r.cancellation() && i instanceof e && a._setOnCancel(i))  : (a = new e(n), s = setTimeout(function () {
                    a._fulfill()
                  }, + t), r.cancellation() && a._setOnCancel(new o(s)), a._captureStackTrace()),
                  a._setAsyncGuaranteed(),
                  a
                };
                e.prototype.delay = function (t) {
                  return l(t, this)
                };
                var p = function (t, e, n) {
                  var r;
                  r = 'string' != typeof e ? e instanceof Error ? e : new u('operation timed out')  : new u(e),
                  s.markAsOriginatingFromRejection(r),
                  t._attachExtraTrace(r),
                  t._reject(r),
                  null != n && n.cancel()
                };
                e.prototype.timeout = function (t, e) {
                  t = + t;
                  var n,
                  s,
                  u = new o(setTimeout(function t() {
                    n.isPending() && p(n, e, s)
                  }, t));
                  return r.cancellation() ? (s = this.then(), n = s._then(i, a, void 0, u, void 0), n._setOnCancel(u))  : n = this._then(i, a, void 0, u, void 0),
                  n
                }
              }
            },
            {
              './util': 36
            }
          ],
          35: [
            function (t, e, n) {
              'use strict';
              e.exports = function (e, n, r, o, i, a) {
                function s(t) {
                  setTimeout(function () {
                    throw t
                  }, 0)
                }
                function u(t) {
                  var e = r(t);
                  return e !== t && 'function' == typeof t._isDisposable && 'function' == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()),
                  e
                }
                function c(t, n) {
                  function o() {
                    if (a >= c) return l._fulfill();
                    var i = u(t[a++]);
                    if (i instanceof e && i._isDisposable()) {
                      try {
                        i = r(i._getDisposer().tryDispose(n), t.promise)
                      } catch (t) {
                        return s(t)
                      }
                      if (i instanceof e) return i._then(o, s, null, null, null)
                    }
                    o()
                  }
                  var a = 0,
                  c = t.length,
                  l = new e(i);
                  return o(),
                  l
                }
                function l(t, e, n) {
                  this._data = t,
                  this._promise = e,
                  this._context = n
                }
                function p(t, e, n) {
                  this.constructor$(t, e, n)
                }
                function h(t) {
                  return l.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise())  : t
                }
                function f(t) {
                  this.length = t,
                  this.promise = null,
                  this[t - 1] = null
                }
                var d = t('./util'),
                m = t('./errors').TypeError,
                y = t('./util').inherits,
                v = d.errorObj,
                g = d.tryCatch,
                _ = {
                };
                l.prototype.data = function () {
                  return this._data
                },
                l.prototype.promise = function () {
                  return this._promise
                },
                l.prototype.resource = function () {
                  return this.promise().isFulfilled() ? this.promise().value()  : _
                },
                l.prototype.tryDispose = function (t) {
                  var e = this.resource(),
                  n = this._context;
                  void 0 !== n && n._pushContext();
                  var r = e !== _ ? this.doDispose(e, t)  : null;
                  return void 0 !== n && n._popContext(),
                  this._promise._unsetDisposable(),
                  this._data = null,
                  r
                },
                l.isDisposer = function (t) {
                  return null != t && 'function' == typeof t.resource && 'function' == typeof t.tryDispose
                },
                y(p, l),
                p.prototype.doDispose = function (t, e) {
                  return this.data().call(t, t, e)
                },
                f.prototype._resultCancelled = function () {
                  for (var t = this.length, n = 0; n < t; ++n) {
                    var r = this[n];
                    r instanceof e && r.cancel()
                  }
                },
                e.using = function () {
                  var t = arguments.length;
                  if (t < 2) return n('you must pass at least 2 arguments to Promise.using');
                  var o = arguments[t - 1];
                  if ('function' != typeof o) return n('expecting a function but got ' + d.classString(o));
                  var i,
                  s = !0;
                  2 === t && Array.isArray(arguments[0]) ? (i = arguments[0], t = i.length, s = !1)  : (i = arguments, t--);
                  for (var u = new f(t), p = 0; p < t; ++p) {
                    var m = i[p];
                    if (l.isDisposer(m)) {
                      var y = m;
                      m = m.promise(),
                      m._setDisposable(y)
                    } else {
                      var _ = r(m);
                      _ instanceof e && (m = _._then(h, null, null, {
                        resources: u,
                        index: p
                      }, void 0))
                    }
                    u[p] = m
                  }
                  for (var b = new Array(u.length), p = 0; p < b.length; ++p) b[p] = e.resolve(u[p]).reflect();
                  var x = e.all(b).then(function (t) {
                    for (var e = 0; e < t.length; ++e) {
                      var n = t[e];
                      if (n.isRejected()) return v.e = n.error(),
                      v;
                      if (!n.isFulfilled()) return void x.cancel();
                      t[e] = n.value()
                    }
                    w._pushContext(),
                    o = g(o);
                    var r = s ? o.apply(void 0, t)  : o(t),
                    i = w._popContext();
                    return a.checkForgottenReturns(r, i, 'Promise.using', w),
                    r
                  }),
                  w = x.lastly(function () {
                    var t = new e.PromiseInspection(x);
                    return c(u, t)
                  });
                  return u.promise = w,
                  w._setOnCancel(u),
                  w
                },
                e.prototype._setDisposable = function (t) {
                  this._bitField = 131072 | this._bitField,
                  this._disposer = t
                },
                e.prototype._isDisposable = function () {
                  return (131072 & this._bitField) > 0
                },
                e.prototype._getDisposer = function () {
                  return this._disposer
                },
                e.prototype._unsetDisposable = function () {
                  this._bitField = - 131073 & this._bitField,
                  this._disposer = void 0
                },
                e.prototype.disposer = function (t) {
                  if ('function' == typeof t) return new p(t, this, o());
                  throw new m
                }
              }
            },
            {
              './errors': 12,
              './util': 36
            }
          ],
          36: [
            function (t, r, o) {
              'use strict';
              function i() {
                try {
                  var t = A;
                  return A = null,
                  t.apply(this, arguments)
                } catch (t) {
                  return j.e = t,
                  j
                }
              }
              function a(t) {
                return A = t,
                i
              }
              function s(t) {
                return null == t || !0 === t || !1 === t || 'string' == typeof t || 'number' == typeof t
              }
              function u(t) {
                return 'function' == typeof t || 'object' == typeof t && null !== t
              }
              function c(t) {
                return s(t) ? new Error(g(t))  : t
              }
              function l(t, e) {
                var n = t.length,
                r = new Array(n + 1),
                o;
                for (o = 0; o < n; ++o) r[o] = t[o];
                return r[o] = e,
                r
              }
              function p(t, e, n) {
                if (!O.isES5) return {
                }.hasOwnProperty.call(t, e) ? t[e] : void 0;
                var r = Object.getOwnPropertyDescriptor(t, e);
                return null != r ? null == r.get && null == r.set ? r.value : n : void 0
              }
              function h(t, e, n) {
                if (s(t)) return t;
                var r = {
                  value: n,
                  configurable: !0,
                  enumerable: !1,
                  writable: !0
                };
                return O.defineProperty(t, e, r),
                t
              }
              function f(t) {
                throw t
              }
              function d(t) {
                try {
                  if ('function' == typeof t) {
                    var e = O.names(t.prototype),
                    n = O.isES5 && e.length > 1,
                    r = e.length > 0 && !(1 === e.length && 'constructor' === e[0]),
                    o = D.test(t + '') && O.names(t).length > 0;
                    if (n || r || o) return !0
                  }
                  return !1
                } catch (t) {
                  return !1
                }
              }
              function m(t) {
                function e() {
                }
                e.prototype = t;
                for (var n = 8; n--; ) new e;
                return t
              }
              function y(t) {
                return I.test(t)
              }
              function v(t, e, n) {
                for (var r = new Array(t), o = 0; o < t; ++o) r[o] = e + o + n;
                return r
              }
              function g(t) {
                try {
                  return t + ''
                } catch (t) {
                  return '[no string representation]'
                }
              }
              function _(t) {
                return t instanceof Error || null !== t && 'object' == typeof t && 'string' == typeof t.message && 'string' == typeof t.name
              }
              function b(t) {
                try {
                  h(t, 'isOperational', !0)
                } catch (t) {
                }
              }
              function x(t) {
                return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === t.isOperational)
              }
              function w(t) {
                return _(t) && O.propertyIsWritable(t, 'stack')
              }
              function S(t) {
                return {
                }.toString.call(t)
              }
              function T(t, e, n) {
                for (var r = O.names(t), o = 0; o < r.length; ++o) {
                  var i = r[o];
                  if (n(i)) try {
                    O.defineProperty(e, i, O.getDescriptor(t, i))
                  } catch (t) {
                  }
                }
              }
              function P(t) {
                return N ? e.env[t] : void 0
              }
              function C() {
                if ('function' == typeof Promise) try {
                  var t = new Promise(function () {
                  });
                  if ('[object Promise]' === {
                  }.toString.call(t)) return Promise
                } catch (t) {
                }
              }
              function k(t, e) {
                return t.bind(e)
              }
              var O = t('./es5'),
              E = 'undefined' == typeof navigator,
              j = {
                e: {
                }
              },
              A,
              F = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== n ? n : void 0 !== this ? this : null,
              M = function (t, e) {
                function n() {
                  this.constructor = t,
                  this.constructor$ = e;
                  for (var n in e.prototype) r.call(e.prototype, n) && '$' !== n.charAt(n.length - 1) && (this[n + '$'] = e.prototype[n])
                }
                var r = {
                }.hasOwnProperty;
                return n.prototype = e.prototype,
                t.prototype = new n,
                t.prototype
              },
              R = function () {
                var t = [
                  Array.prototype,
                  Object.prototype,
                  Function.prototype
                ],
                e = function (e) {
                  for (var n = 0; n < t.length; ++n) if (t[n] === e) return !0;
                  return !1
                };
                if (O.isES5) {
                  var n = Object.getOwnPropertyNames;
                  return function (t) {
                    for (var r = [
                    ], o = Object.create(null); null != t && !e(t); ) {
                      var i;
                      try {
                        i = n(t)
                      } catch (t) {
                        return r
                      }
                      for (var a = 0; a < i.length; ++a) {
                        var s = i[a];
                        if (!o[s]) {
                          o[s] = !0;
                          var u = Object.getOwnPropertyDescriptor(t, s);
                          null != u && null == u.get && null == u.set && r.push(s)
                        }
                      }
                      t = O.getPrototypeOf(t)
                    }
                    return r
                  }
                }
                var r = {
                }.hasOwnProperty;
                return function (n) {
                  if (e(n)) return [];
                  var o = [
                  ];
                  t: for (var i in n) if (r.call(n, i)) o.push(i);
                   else {
                    for (var a = 0; a < t.length; ++a) if (r.call(t[a], i)) continue t;
                    o.push(i)
                  }
                  return o
                }
              }(),
              D = /this\s*\.\s*\S+\s*=/,
              I = /^[a-z$_][a-z$_0-9]*$/i,
              L = function () {
                return 'stack' in new Error ? function (t) {
                  return w(t) ? t : new Error(g(t))
                }
                 : function (t) {
                  if (w(t)) return t;
                  try {
                    throw new Error(g(t))
                  } catch (t) {
                    return t
                  }
                }
              }(),
              z = function (t) {
                return O.isArray(t) ? t : null
              };
              if ('undefined' != typeof Symbol && Symbol.iterator) {
                var U = 'function' == typeof Array.from ? function (t) {
                  return Array.from(t)
                }
                 : function (t) {
                  for (var e = [
                  ], n = t[Symbol.iterator](), r; !(r = n.next()).done; ) e.push(r.value);
                  return e
                };
                z = function (t) {
                  return O.isArray(t) ? t : null != t && 'function' == typeof t[Symbol.iterator] ? U(t)  : null
                }
              }
              var G = void 0 !== e && '[object process]' === S(e).toLowerCase(),
              N = void 0 !== e && void 0 !== e.env,
              B = {
                isClass: d,
                isIdentifier: y,
                inheritedDataKeys: R,
                getDataPropertyOrDefault: p,
                thrower: f,
                isArray: O.isArray,
                asArray: z,
                notEnumerableProp: h,
                isPrimitive: s,
                isObject: u,
                isError: _,
                canEvaluate: E,
                errorObj: j,
                tryCatch: a,
                inherits: M,
                withAppended: l,
                maybeWrapAsError: c,
                toFastProperties: m,
                filledRange: v,
                toString: g,
                canAttachTrace: w,
                ensureErrorObject: L,
                originatesFromRejection: x,
                markAsOriginatingFromRejection: b,
                classString: S,
                copyDescriptors: T,
                hasDevTools: 'undefined' != typeof chrome && chrome && 'function' == typeof chrome.loadTimes,
                isNode: G,
                hasEnvVariables: N,
                env: P,
                global: F,
                getNativePromise: C,
                domainBind: k
              };
              B.isRecentNode = B.isNode && function () {
                var t = e.versions.node.split('.').map(Number);
                return 0 === t[0] && t[1] > 10 || t[0] > 0
              }(),
              B.isNode && B.toFastProperties(e);
              try {
                throw new Error
              } catch (t) {
                B.lastLineError = t
              }
              r.exports = B
            },
            {
              './es5': 13
            }
          ]
        },
        {
        },
        [
          4
        ]) (4)
      }), 'undefined' != typeof window && null !== window ? window.P = window.Promise : 'undefined' != typeof self && null !== self && (self.P = self.Promise)
    }).call(e, n(77), n(30), n(391).setImmediate)
  },
  function (t, e, n) {
    function r(t, e) {
      this._id = t,
      this._clearFn = e
    }
    var o = Function.prototype.apply;
    e.setTimeout = function () {
      return new r(o.call(setTimeout, window, arguments), clearTimeout)
    },
    e.setInterval = function () {
      return new r(o.call(setInterval, window, arguments), clearInterval)
    },
    e.clearTimeout = e.clearInterval = function (t) {
      t && t.close()
    },
    r.prototype.unref = r.prototype.ref = function () {
    },
    r.prototype.close = function () {
      this._clearFn.call(window, this._id)
    },
    e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId),
      t._idleTimeout = e
    },
    e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId),
      t._idleTimeout = - 1
    },
    e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function e() {
        t._onTimeout && t._onTimeout()
      }, e))
    },
    n(392),
    e.setImmediate = setImmediate,
    e.clearImmediate = clearImmediate
  },
  function (t, e, n) {
    (function (t, e) {
      !function (t, n) {
        'use strict';
        function r(t) {
          'function' != typeof t && (t = new Function('' + t));
          for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
          var r = {
            callback: t,
            args: e
          };
          return d[f] = r,
          v(f),
          f++
        }
        function o(t) {
          delete d[t]
        }
        function i(t) {
          var e = t.callback,
          r = t.args;
          switch (r.length) {
            case 0:
              e();
              break;
            case 1:
              e(r[0]);
              break;
            case 2:
              e(r[0], r[1]);
              break;
            case 3:
              e(r[0], r[1], r[2]);
              break;
            default:
              e.apply(n, r)
          }
        }
        function a(t) {
          if (m) setTimeout(a, 0, t);
           else {
            var e = d[t];
            if (e) {
              m = !0;
              try {
                i(e)
              } finally {
                o(t),
                m = !1
              }
            }
          }
        }
        function s() {
          v = function (t) {
            e.nextTick(function () {
              a(t)
            })
          }
        }
        function u() {
          if (t.postMessage && !t.importScripts) {
            var e = !0,
            n = t.onmessage;
            return t.onmessage = function () {
              e = !1
            },
            t.postMessage('', '*'),
            t.onmessage = n,
            e
          }
        }
        function c() {
          var e = 'setImmediate$' + Math.random() + '$',
          n = function (n) {
            n.source === t && 'string' == typeof n.data && 0 === n.data.indexOf(e) && a( + n.data.slice(e.length))
          };
          t.addEventListener ? t.addEventListener('message', n, !1)  : t.attachEvent('onmessage', n),
          v = function (n) {
            t.postMessage(e + n, '*')
          }
        }
        function l() {
          var t = new MessageChannel;
          t.port1.onmessage = function (t) {
            a(t.data)
          },
          v = function (e) {
            t.port2.postMessage(e)
          }
        }
        function p() {
          var t = y.documentElement;
          v = function (e) {
            var n = y.createElement('script');
            n.onreadystatechange = function () {
              a(e),
              n.onreadystatechange = null,
              t.removeChild(n),
              n = null
            },
            t.appendChild(n)
          }
        }
        function h() {
          v = function (t) {
            setTimeout(a, 0, t)
          }
        }
        if (!t.setImmediate) {
          var f = 1,
          d = {
          },
          m = !1,
          y = t.document,
          v,
          g = Object.getPrototypeOf && Object.getPrototypeOf(t);
          g = g && g.setTimeout ? g : t,
          '[object process]' === {
          }.toString.call(t.process) ? s()  : u() ? c()  : t.MessageChannel ? l()  : y && 'onreadystatechange' in y.createElement('script') ? p()  : h(),
          g.setImmediate = r,
          g.clearImmediate = o
        }
      }('undefined' == typeof self ? void 0 === t ? this : t : self)
    }).call(e, n(30), n(77))
  },
  function (t, e, n) {
    t.exports = n(394)
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      var e = new a(t),
      n = i(a.prototype.request, e);
      return o.extend(n, a.prototype, e),
      o.extend(n, e),
      n
    }
    var o = n(12),
    i = n(153),
    a = n(395),
    s = n(109),
    u = r(s);
    u.Axios = a,
    u.create = function t(e) {
      return r(o.merge(s, e))
    },
    u.Cancel = n(158),
    u.CancelToken = n(409),
    u.isCancel = n(157),
    u.all = function t(e) {
      return Promise.all(e)
    },
    u.spread = n(410),
    t.exports = u,
    t.exports.default = u
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      this.defaults = t,
      this.interceptors = {
        request: new a,
        response: new a
      }
    }
    var o = n(109),
    i = n(12),
    a = n(404),
    s = n(405);
    r.prototype.request = function t(e) {
      'string' == typeof e && (e = i.merge({
        url: arguments[0]
      }, arguments[1])),
      e = i.merge(o, this.defaults, {
        method: 'get'
      }, e),
      e.method = e.method.toLowerCase();
      var n = [
        s,
        void 0
      ],
      r = Promise.resolve(e);
      for (this.interceptors.request.forEach(function t(e) {
        n.unshift(e.fulfilled, e.rejected)
      }), this.interceptors.response.forEach(function t(e) {
        n.push(e.fulfilled, e.rejected)
      }); n.length; ) r = r.then(n.shift(), n.shift());
      return r
    },
    i.forEach(['delete',
    'get',
    'head',
    'options'], function t(e) {
      r.prototype[e] = function (t, n) {
        return this.request(i.merge(n || {
        }, {
          method: e,
          url: t
        }))
      }
    }),
    i.forEach(['post',
    'put',
    'patch'], function t(e) {
      r.prototype[e] = function (t, n, r) {
        return this.request(i.merge(r || {
        }, {
          method: e,
          url: t,
          data: n
        }))
      }
    }),
    t.exports = r
  },
  function (t, e, n) {
    'use strict';
    var r = n(12);
    t.exports = function t(e, n) {
      r.forEach(e, function t(r, o) {
        o !== n && o.toUpperCase() === n.toUpperCase() && (e[n] = r, delete e[o])
      })
    }
  },
  function (t, e, n) {
    'use strict';
    var r = n(156);
    t.exports = function t(e, n, o) {
      var i = o.config.validateStatus;
      o.status && i && !i(o.status) ? n(r('Request failed with status code ' + o.status, o.config, null, o.request, o))  : e(o)
    }
  },
  function (t, e, n) {
    'use strict';
    t.exports = function t(e, n, r, o, i) {
      return e.config = n,
      r && (e.code = r),
      e.request = o,
      e.response = i,
      e
    }
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      return encodeURIComponent(t).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']')
    }
    var o = n(12);
    t.exports = function t(e, n, i) {
      if (!n) return e;
      var a;
      if (i) a = i(n);
       else if (o.isURLSearchParams(n)) a = n.toString();
       else {
        var s = [
        ];
        o.forEach(n, function t(e, n) {
          null !== e && void 0 !== e && (o.isArray(e) && (n += '[]'), o.isArray(e) || (e = [
            e
          ]), o.forEach(e, function t(e) {
            o.isDate(e) ? e = e.toISOString()  : o.isObject(e) && (e = JSON.stringify(e)),
            s.push(r(n) + '=' + r(e))
          }))
        }),
        a = s.join('&')
      }
      return a && (e += ( - 1 === e.indexOf('?') ? '?' : '&') + a),
      e
    }
  },
  function (t, e, n) {
    'use strict';
    var r = n(12),
    o = [
      'age',
      'authorization',
      'content-length',
      'content-type',
      'etag',
      'expires',
      'from',
      'host',
      'if-modified-since',
      'if-unmodified-since',
      'last-modified',
      'location',
      'max-forwards',
      'proxy-authorization',
      'referer',
      'retry-after',
      'user-agent'
    ];
    t.exports = function t(e) {
      var n = {
      },
      i,
      a,
      s;
      return e ? (r.forEach(e.split('\n'), function t(e) {
        if (s = e.indexOf(':'), i = r.trim(e.substr(0, s)).toLowerCase(), a = r.trim(e.substr(s + 1)), i) {
          if (n[i] && o.indexOf(i) >= 0) return;
          n[i] = 'set-cookie' === i ? (n[i] ? n[i] : [
          ]).concat([a])  : n[i] ? n[i] + ', ' + a : a
        }
      }), n)  : n
    }
  },
  function (t, e, n) {
    'use strict';
    var r = n(12);
    t.exports = r.isStandardBrowserEnv() ? function t() {
      function e(t) {
        var e = t;
        return n && (o.setAttribute('href', e), e = o.href),
        o.setAttribute('href', e),
        {
          href: o.href,
          protocol: o.protocol ? o.protocol.replace(/:$/, '')  : '',
          host: o.host,
          search: o.search ? o.search.replace(/^\?/, '')  : '',
          hash: o.hash ? o.hash.replace(/^#/, '')  : '',
          hostname: o.hostname,
          port: o.port,
          pathname: '/' === o.pathname.charAt(0) ? o.pathname : '/' + o.pathname
        }
      }
      var n = /(msie|trident)/i.test(navigator.userAgent),
      o = document.createElement('a'),
      i;
      return i = e(window.location.href),
      function t(n) {
        var o = r.isString(n) ? e(n)  : n;
        return o.protocol === i.protocol && o.host === i.host
      }
    }()  : function t() {
      return function t() {
        return !0
      }
    }()
  },
  function (t, e, n) {
    'use strict';
    function r() {
      this.message = 'String contains an invalid character'
    }
    function o(t) {
      for (var e = String(t), n = '', o, a, s = 0, u = i; e.charAt(0 | s) || (u = '=', s % 1); n += u.charAt(63 & o >> 8 - s % 1 * 8)) {
        if ((a = e.charCodeAt(s += 0.75)) > 255) throw new r;
        o = o << 8 | a
      }
      return n
    }
    var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    r.prototype = new Error,
    r.prototype.code = 5,
    r.prototype.name = 'InvalidCharacterError',
    t.exports = o
  },
  function (t, e, n) {
    'use strict';
    var r = n(12);
    t.exports = r.isStandardBrowserEnv() ? function t() {
      return {
        write: function t(e, n, o, i, a, s) {
          var u = [
          ];
          u.push(e + '=' + encodeURIComponent(n)),
          r.isNumber(o) && u.push('expires=' + new Date(o).toGMTString()),
          r.isString(i) && u.push('path=' + i),
          r.isString(a) && u.push('domain=' + a),
          !0 === s && u.push('secure'),
          document.cookie = u.join('; ')
        },
        read: function t(e) {
          var n = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
          return n ? decodeURIComponent(n[3])  : null
        },
        remove: function t(e) {
          this.write(e, '', Date.now() - 86400000)
        }
      }
    }()  : function t() {
      return {
        write: function t() {
        },
        read: function t() {
          return null
        },
        remove: function t() {
        }
      }
    }()
  },
  function (t, e, n) {
    'use strict';
    function r() {
      this.handlers = [
      ]
    }
    var o = n(12);
    r.prototype.use = function t(e, n) {
      return this.handlers.push({
        fulfilled: e,
        rejected: n
      }),
      this.handlers.length - 1
    },
    r.prototype.eject = function t(e) {
      this.handlers[e] && (this.handlers[e] = null)
    },
    r.prototype.forEach = function t(e) {
      o.forEach(this.handlers, function t(n) {
        null !== n && e(n)
      })
    },
    t.exports = r
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      t.cancelToken && t.cancelToken.throwIfRequested()
    }
    var o = n(12),
    i = n(406),
    a = n(157),
    s = n(109),
    u = n(407),
    c = n(408);
    t.exports = function t(e) {
      return r(e),
      e.baseURL && !u(e.url) && (e.url = c(e.baseURL, e.url)),
      e.headers = e.headers || {
      },
      e.data = i(e.data, e.headers, e.transformRequest),
      e.headers = o.merge(e.headers.common || {
      }, e.headers[e.method] || {
      }, e.headers || {
      }),
      o.forEach(['delete',
      'get',
      'head',
      'post',
      'put',
      'patch',
      'common'], function t(n) {
        delete e.headers[n]
      }),
      (e.adapter || s.adapter) (e).then(function t(n) {
        return r(e),
        n.data = i(n.data, n.headers, e.transformResponse),
        n
      }, function t(n) {
        return a(n) || (r(e), n && n.response && (n.response.data = i(n.response.data, n.response.headers, e.transformResponse))),
        Promise.reject(n)
      })
    }
  },
  function (t, e, n) {
    'use strict';
    var r = n(12);
    t.exports = function t(e, n, o) {
      return r.forEach(o, function t(r) {
        e = r(e, n)
      }),
      e
    }
  },
  function (t, e, n) {
    'use strict';
    t.exports = function t(e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  },
  function (t, e, n) {
    'use strict';
    t.exports = function t(e, n) {
      return n ? e.replace(/\/+$/, '') + '/' + n.replace(/^\/+/, '')  : e
    }
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      if ('function' != typeof t) throw new TypeError('executor must be a function.');
      var e;
      this.promise = new Promise(function t(n) {
        e = n
      });
      var n = this;
      t(function t(r) {
        n.reason || (n.reason = new o(r), e(n.reason))
      })
    }
    var o = n(158);
    r.prototype.throwIfRequested = function t() {
      if (this.reason) throw this.reason
    },
    r.source = function t() {
      var e;
      return {
        token: new r(function t(n) {
          e = n
        }),
        cancel: e
      }
    },
    t.exports = r
  },
  function (t, e, n) {
    'use strict';
    t.exports = function t(e) {
      return function t(n) {
        return e.apply(null, n)
      }
    }
  },
  function (t, e, n) {
    (function (e) {
      (function () {
        var n,
        r,
        o,
        i,
        a,
        s;
        'undefined' != typeof performance && null !== performance && performance.now ? t.exports = function () {
          return performance.now()
        }
         : void 0 !== e && null !== e && e.hrtime ? (t.exports = function () {
          return (n() - a) / 1000000
        }, r = e.hrtime, n = function () {
          var t;
          return t = r(),
          1000000000 * t[0] + t[1]
        }, i = n(), s = 1000000000 * e.uptime(), a = i - s)  : Date.now ? (t.exports = function () {
          return Date.now() - o
        }, o = Date.now())  : (t.exports = function () {
          return (new Date).getTime() - o
        }, o = (new Date).getTime())
      }).call(this)
    }).call(e, n(77))
  },
  function (t, e, n) {
    'use strict';
    function r() {
    }
    function o(t, e, n) {
      this.fn = t,
      this.context = e,
      this.once = n || !1
    }
    function i(t, e, n, r, i) {
      if ('function' != typeof n) throw new TypeError('The listener must be a function');
      var a = new o(n, r || t, i),
      s = c ? c + e : e;
      return t._events[s] ? t._events[s].fn ? t._events[s] = [
        t._events[s],
        a
      ] : t._events[s].push(a)  : (t._events[s] = a, t._eventsCount++),
      t
    }
    function a(t, e) {
      0 == --t._eventsCount ? t._events = new r : delete t._events[e]
    }
    function s() {
      this._events = new r,
      this._eventsCount = 0
    }
    var u = Object.prototype.hasOwnProperty,
    c = '~';
    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (c = !1)),
    s.prototype.eventNames = function t() {
      var e = [
      ],
      n,
      r;
      if (0 === this._eventsCount) return e;
      for (r in n = this._events) u.call(n, r) && e.push(c ? r.slice(1)  : r);
      return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(n))  : e
    },
    s.prototype.listeners = function t(e) {
      var n = c ? c + e : e,
      r = this._events[n];
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var o = 0, i = r.length, a = new Array(i); o < i; o++) a[o] = r[o].fn;
      return a
    },
    s.prototype.listenerCount = function t(e) {
      var n = c ? c + e : e,
      r = this._events[n];
      return r ? r.fn ? 1 : r.length : 0
    },
    s.prototype.emit = function t(e, n, r, o, i, a) {
      var s = c ? c + e : e;
      if (!this._events[s]) return !1;
      var u = this._events[s],
      l = arguments.length,
      p,
      h;
      if (u.fn) {
        switch (u.once && this.removeListener(e, u.fn, void 0, !0), l) {
          case 1:
            return u.fn.call(u.context),
            !0;
          case 2:
            return u.fn.call(u.context, n),
            !0;
          case 3:
            return u.fn.call(u.context, n, r),
            !0;
          case 4:
            return u.fn.call(u.context, n, r, o),
            !0;
          case 5:
            return u.fn.call(u.context, n, r, o, i),
            !0;
          case 6:
            return u.fn.call(u.context, n, r, o, i, a),
            !0
        }
        for (h = 1, p = new Array(l - 1); h < l; h++) p[h - 1] = arguments[h];
        u.fn.apply(u.context, p)
      } else {
        var f = u.length,
        d;
        for (h = 0; h < f; h++) switch (u[h].once && this.removeListener(e, u[h].fn, void 0, !0), l) {
          case 1:
            u[h].fn.call(u[h].context);
            break;
          case 2:
            u[h].fn.call(u[h].context, n);
            break;
          case 3:
            u[h].fn.call(u[h].context, n, r);
            break;
          case 4:
            u[h].fn.call(u[h].context, n, r, o);
            break;
          default:
            if (!p) for (d = 1, p = new Array(l - 1); d < l; d++) p[d - 1] = arguments[d];
            u[h].fn.apply(u[h].context, p)
        }
      }
      return !0
    },
    s.prototype.on = function t(e, n, r) {
      return i(this, e, n, r, !1)
    },
    s.prototype.once = function t(e, n, r) {
      return i(this, e, n, r, !0)
    },
    s.prototype.removeListener = function t(e, n, r, o) {
      var i = c ? c + e : e;
      if (!this._events[i]) return this;
      if (!n) return a(this, i),
      this;
      var s = this._events[i];
      if (s.fn) s.fn !== n || o && !s.once || r && s.context !== r || a(this, i);
       else {
        for (var u = 0, l = [
        ], p = s.length; u < p; u++) (s[u].fn !== n || o && !s[u].once || r && s[u].context !== r) && l.push(s[u]);
        l.length ? this._events[i] = 1 === l.length ? l[0] : l : a(this, i)
      }
      return this
    },
    s.prototype.removeAllListeners = function t(e) {
      var n;
      return e ? (n = c ? c + e : e, this._events[n] && a(this, n))  : (this._events = new r, this._eventsCount = 0),
      this
    },
    s.prototype.off = s.prototype.removeListener,
    s.prototype.addListener = s.prototype.on,
    s.prefixed = c,
    s.EventEmitter = s,
    t.exports = s
  },
  function (t, e, n) {
    function r(t) {
      return function (e, n, r) {
        return r && 'number' != typeof r && i(e, n, r) && (n = r = void 0),
        e = a(e),
        void 0 === n ? (n = e, e = 0)  : n = a(n),
        r = void 0 === r ? e < n ? 1 : - 1 : a(r),
        o(e, n, r, t)
      }
    }
    var o = n(414),
    i = n(148),
    a = n(150);
    t.exports = r
  },
  function (t, e) {
    function n(t, e, n, i) {
      for (var a = - 1, s = o(r((e - t) / (n || 1)), 0), u = Array(s); s--; ) u[i ? s : ++a] = t,
      t += n;
      return u
    }
    var r = Math.ceil,
    o = Math.max;
    t.exports = n
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      for (var e = new Array(t), n = 0; n < t; ++n) e[n] = n;
      return e
    }
    t.exports = r
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      var e = [
        '\'use strict\'',
        'var CACHED={}'
      ],
      n = [
      ],
      r = t.funcName + '_cwise_thunk';
      e.push(['return function ',
      r,
      '(',
      t.shimArgs.join(','),
      '){'].join(''));
      for (var i = [
      ], a = [
      ], s = [
        ['array',
        t.arrayArgs[0],
        '.shape.slice(',
        Math.max(0, t.arrayBlockIndices[0]),
        t.arrayBlockIndices[0] < 0 ? ',' + t.arrayBlockIndices[0] + ')' : ')'].join('')
      ], u = [
      ], c = [
      ], l = 0; l < t.arrayArgs.length; ++l) {
        var p = t.arrayArgs[l];
        n.push(['t',
        p,
        '=array',
        p,
        '.dtype,',
        'r',
        p,
        '=array',
        p,
        '.order'].join('')),
        i.push('t' + p),
        i.push('r' + p),
        a.push('t' + p),
        a.push('r' + p + '.join()'),
        s.push('array' + p + '.data'),
        s.push('array' + p + '.stride'),
        s.push('array' + p + '.offset|0'),
        l > 0 && (u.push('array' + t.arrayArgs[0] + '.shape.length===array' + p + '.shape.length+' + (Math.abs(t.arrayBlockIndices[0]) - Math.abs(t.arrayBlockIndices[l]))), c.push('array' + t.arrayArgs[0] + '.shape[shapeIndex+' + Math.max(0, t.arrayBlockIndices[0]) + ']===array' + p + '.shape[shapeIndex+' + Math.max(0, t.arrayBlockIndices[l]) + ']'))
      }
      t.arrayArgs.length > 1 && (e.push('if (!(' + u.join(' && ') + ')) throw new Error(\'cwise: Arrays do not all have the same dimensionality!\')'), e.push('for(var shapeIndex=array' + t.arrayArgs[0] + '.shape.length-' + Math.abs(t.arrayBlockIndices[0]) + '; shapeIndex-->0;) {'), e.push('if (!(' + c.join(' && ') + ')) throw new Error(\'cwise: Arrays do not all have the same shape!\')'), e.push('}'));
      for (var l = 0; l < t.scalarArgs.length; ++l) s.push('scalar' + t.scalarArgs[l]);
      return n.push(['type=[',
      a.join(','),
      '].join()'].join('')),
      n.push('proc=CACHED[type]'),
      e.push('var ' + n.join(',')),
      e.push(['if(!proc){',
      'CACHED[type]=proc=compile([',
      i.join(','),
      '])}',
      'return proc(',
      s.join(','),
      ')}'].join('')),
      t.debug && console.log('-----Generated thunk:\n' + e.join('\n') + '\n----------'),
      new Function('compile', e.join('\n')) (o.bind(void 0, t))
    }
    var o = n(417);
    t.exports = r
  },
  function (t, e, n) {
    'use strict';
    function r(t, e, n) {
      var r = t.length,
      o = e.arrayArgs.length,
      i = e.indexArgs.length > 0,
      a = [
      ],
      s = [
      ],
      u = 0,
      c = 0,
      l,
      p;
      for (l = 0; l < r; ++l) s.push(['i',
      l,
      '=0'].join(''));
      for (p = 0; p < o; ++p) for (l = 0; l < r; ++l) c = u,
      u = t[l],
      0 === l ? s.push(['d',
      p,
      's',
      l,
      '=t',
      p,
      'p',
      u].join(''))  : s.push(['d',
      p,
      's',
      l,
      '=(t',
      p,
      'p',
      u,
      '-s',
      c,
      '*t',
      p,
      'p',
      c,
      ')'].join(''));
      for (s.length > 0 && a.push('var ' + s.join(',')), l = r - 1; l >= 0; --l) u = t[l],
      a.push(['for(i',
      l,
      '=0;i',
      l,
      '<s',
      u,
      ';++i',
      l,
      '){'].join(''));
      for (a.push(n), l = 0; l < r; ++l) {
        for (c = u, u = t[l], p = 0; p < o; ++p) a.push(['p',
        p,
        '+=d',
        p,
        's',
        l].join(''));
        i && (l > 0 && a.push(['index[',
        c,
        ']-=s',
        c].join('')), a.push(['++index[',
        u,
        ']'].join(''))),
        a.push('}')
      }
      return a.join('\n')
    }
    function o(t, e, n, o) {
      for (var i = e.length, a = n.arrayArgs.length, s = n.blockSize, u = n.indexArgs.length > 0, c = [
      ], l = 0; l < a; ++l) c.push(['var offset',
      l,
      '=p',
      l].join(''));
      for (var l = t; l < i; ++l) c.push(['for(var j' + l + '=SS[',
      e[l],
      ']|0;j',
      l,
      '>0;){'].join('')),
      c.push(['if(j',
      l,
      '<',
      s,
      '){'].join('')),
      c.push(['s',
      e[l],
      '=j',
      l].join('')),
      c.push(['j',
      l,
      '=0'].join('')),
      c.push(['}else{s',
      e[l],
      '=',
      s].join('')),
      c.push(['j',
      l,
      '-=',
      s,
      '}'].join('')),
      u && c.push(['index[',
      e[l],
      ']=j',
      l].join(''));
      for (var l = 0; l < a; ++l) {
        for (var p = [
          'offset' + l
        ], h = t; h < i; ++h) p.push(['j',
        h,
        '*t',
        l,
        'p',
        e[h]].join(''));
        c.push(['p',
        l,
        '=(',
        p.join('+'),
        ')'].join(''))
      }
      c.push(r(e, n, o));
      for (var l = t; l < i; ++l) c.push('}');
      return c.join('\n')
    }
    function i(t) {
      for (var e = 0, n = t[0].length; e < n; ) {
        for (var r = 1; r < t.length; ++r) if (t[r][e] !== t[0][e]) return e;
        ++e
      }
      return e
    }
    function a(t, e, n) {
      for (var r = t.body, o = [
      ], i = [
      ], a = 0; a < t.args.length; ++a) {
        var s = t.args[a];
        if (!(s.count <= 0)) {
          var u = new RegExp(s.name, 'g'),
          c = '',
          l = e.arrayArgs.indexOf(a);
          switch (e.argTypes[a]) {
            case 'offset':
              var p = e.offsetArgIndex.indexOf(a);
              l = e.offsetArgs[p].array,
              c = '+q' + p;
            case 'array':
              c = 'p' + l + c;
              var h = 'l' + a,
              f = 'a' + l;
              if (0 === e.arrayBlockIndices[l]) 1 === s.count ? 'generic' === n[l] ? s.lvalue ? (o.push(['var ',
              h,
              '=',
              f,
              '.get(',
              c,
              ')'].join('')), r = r.replace(u, h), i.push([f,
              '.set(',
              c,
              ',',
              h,
              ')'].join('')))  : r = r.replace(u, [
                f,
                '.get(',
                c,
                ')'
              ].join(''))  : r = r.replace(u, [
                f,
                '[',
                c,
                ']'
              ].join(''))  : 'generic' === n[l] ? (o.push(['var ',
              h,
              '=',
              f,
              '.get(',
              c,
              ')'].join('')), r = r.replace(u, h), s.lvalue && i.push([f,
              '.set(',
              c,
              ',',
              h,
              ')'].join('')))  : (o.push(['var ',
              h,
              '=',
              f,
              '[',
              c,
              ']'].join('')), r = r.replace(u, h), s.lvalue && i.push([f,
              '[',
              c,
              ']=',
              h].join('')));
               else {
                for (var d = [
                  s.name
                ], m = [
                  c
                ], y = 0; y < Math.abs(e.arrayBlockIndices[l]); y++) d.push('\\s*\\[([^\\]]+)\\]'),
                m.push('$' + (y + 1) + '*t' + l + 'b' + y);
                if (u = new RegExp(d.join(''), 'g'), c = m.join('+'), 'generic' === n[l]) throw new Error('cwise: Generic arrays not supported in combination with blocks!');
                r = r.replace(u, [
                  f,
                  '[',
                  c,
                  ']'
                ].join(''))
              }
              break;
            case 'scalar':
              r = r.replace(u, 'Y' + e.scalarArgs.indexOf(a));
              break;
            case 'index':
              r = r.replace(u, 'index');
              break;
            case 'shape':
              r = r.replace(u, 'shape')
          }
        }
      }
      return [o.join('\n'),
      r,
      i.join('\n')].join('\n').trim()
    }
    function s(t) {
      for (var e = new Array(t.length), n = !0, r = 0; r < t.length; ++r) {
        var o = t[r],
        i = o.match(/\d+/);
        i = i ? i[0] : '',
        0 === o.charAt(0) ? e[r] = 'u' + o.charAt(1) + i : e[r] = o.charAt(0) + i,
        r > 0 && (n = n && e[r] === e[r - 1])
      }
      return n ? e[0] : e.join('')
    }
    function u(t, e) {
      for (var n = e[1].length - Math.abs(t.arrayBlockIndices[0]) | 0, u = new Array(t.arrayArgs.length), l = new Array(t.arrayArgs.length), p = 0; p < t.arrayArgs.length; ++p) l[p] = e[2 * p],
      u[p] = e[2 * p + 1];
      for (var h = [
      ], f = [
      ], d = [
      ], m = [
      ], y = [
      ], p = 0; p < t.arrayArgs.length; ++p) {
        t.arrayBlockIndices[p] < 0 ? (d.push(0), m.push(n), h.push(n), f.push(n + t.arrayBlockIndices[p]))  : (d.push(t.arrayBlockIndices[p]), m.push(t.arrayBlockIndices[p] + n), h.push(0), f.push(t.arrayBlockIndices[p]));
        for (var v = [
        ], g = 0; g < u[p].length; g++) d[p] <= u[p][g] && u[p][g] < m[p] && v.push(u[p][g] - d[p]);
        y.push(v)
      }
      for (var _ = [
        'SS'
      ], b = [
        '\'use strict\''
      ], x = [
      ], g = 0; g < n; ++g) x.push(['s',
      g,
      '=SS[',
      g,
      ']'].join(''));
      for (var p = 0; p < t.arrayArgs.length; ++p) {
        _.push('a' + p),
        _.push('t' + p),
        _.push('p' + p);
        for (var g = 0; g < n; ++g) x.push(['t',
        p,
        'p',
        g,
        '=t',
        p,
        '[',
        d[p] + g,
        ']'].join(''));
        for (var g = 0; g < Math.abs(t.arrayBlockIndices[p]); ++g) x.push(['t',
        p,
        'b',
        g,
        '=t',
        p,
        '[',
        h[p] + g,
        ']'].join(''))
      }
      for (var p = 0; p < t.scalarArgs.length; ++p) _.push('Y' + p);
      if (t.shapeArgs.length > 0 && x.push('shape=SS.slice(0)'), t.indexArgs.length > 0) {
        for (var w = new Array(n), p = 0; p < n; ++p) w[p] = '0';
        x.push(['index=[',
        w.join(','),
        ']'].join(''))
      }
      for (var p = 0; p < t.offsetArgs.length; ++p) {
        for (var S = t.offsetArgs[p], T = [
        ], g = 0; g < S.offset.length; ++g) 0 !== S.offset[g] && (1 === S.offset[g] ? T.push(['t',
        S.array,
        'p',
        g].join(''))  : T.push([S.offset[g],
        '*t',
        S.array,
        'p',
        g].join('')));
        0 === T.length ? x.push('q' + p + '=0')  : x.push(['q',
        p,
        '=',
        T.join('+')].join(''))
      }
      var P = c([].concat(t.pre.thisVars).concat(t.body.thisVars).concat(t.post.thisVars));
      x = x.concat(P),
      x.length > 0 && b.push('var ' + x.join(','));
      for (var p = 0; p < t.arrayArgs.length; ++p) b.push('p' + p + '|=0');
      t.pre.body.length > 3 && b.push(a(t.pre, t, l));
      var C = a(t.body, t, l),
      k = i(y);
      k < n ? b.push(o(k, y[0], t, C))  : b.push(r(y[0], t, C)),
      t.post.body.length > 3 && b.push(a(t.post, t, l)),
      t.debug && console.log('-----Generated cwise routine for ', e, ':\n' + b.join('\n') + '\n----------');
      var O = [
        t.funcName || 'unnamed',
        '_cwise_loop_',
        u[0].join('s'),
        'm',
        k,
        s(l)
      ].join('');
      return new Function(['function ',
      O,
      '(',
      _.join(','),
      '){',
      b.join('\n'),
      '} return ',
      O].join('')) ()
    }
    var c = n(160);
    t.exports = u
  },
  function (t, e, n) {
    'use strict';
    (function (e) {
      function r(t, e, n) {
        this.name = t,
        this.lvalue = e,
        this.rvalue = n,
        this.count = 0
      }
      function o(t, e, n, r) {
        this.body = t,
        this.args = e,
        this.thisVars = n,
        this.localVars = r
      }
      function i(t) {
        if ('eval' === t) throw new Error('cwise-parser: eval() not allowed');
        return 'undefined' != typeof window ? t in window : void 0 !== e ? t in e : 'undefined' != typeof self && t in self
      }
      function a(t) {
        for (var e = t.body[0].expression.callee.params, n = new Array(e.length), r = 0; r < e.length; ++r) n[r] = e[r].name;
        return n
      }
      function s(t) {
        function e(t) {
          var e = y + t.replace(/\_/g, '__');
          return w.push(e),
          e
        }
        function n(t) {
          var e = 'this_' + t.replace(/\_/g, '__');
          return S.push(e),
          e
        }
        function s(t, e) {
          for (var n = t.range[0], r = t.range[1], o = n + 1; o < r; ++o) b[o] = '';
          b[n] = e
        }
        function p(t) {
          return '\'' + t.replace(/\_/g, '\\_').replace(/\'/g, '\'') + '\''
        }
        function h(t) {
          return b.slice(t.range[0], t.range[1]).join('')
        }
        function f(t) {
          return 'AssignmentExpression' === t.parent.type && t.parent.left === t ? '=' === t.parent.operator ? P : P | C : 'UpdateExpression' === t.parent.type ? P | C : C
        }
        for (var d = [
          '(',
          t,
          ')()'
        ].join(''), m = u.parse(d, {
          range: !0
        }), y = '_inline_' + l++ + '_', v = a(m), g = new Array(v.length), _ = 0; _ < v.length; ++_) g[_] = new r([y,
        'arg',
        _,
        '_'].join(''), !1, !1);
        for (var b = new Array(d.length), _ = 0, x = d.length; _ < x; ++_) b[_] = d.charAt(_);
        var w = [
        ],
        S = [
        ],
        T = !1,
        P = 1,
        C = 2;
        return function t(r, o) {
          if (r.parent = o, 'MemberExpression' === r.type) r.computed ? (t(r.object, r), t(r.property, r))  : 'ThisExpression' === r.object.type ? s(r, n(r.property.name))  : t(r.object, r);
           else {
            if ('ThisExpression' === r.type) throw new Error('cwise-parser: Computed this is not allowed');
            if ('Identifier' === r.type) {
              var a = r.name,
              u = v.indexOf(a);
              if (u >= 0) {
                var c = g[u],
                l = f(r);
                l & P && (c.lvalue = !0),
                l & C && (c.rvalue = !0),
                ++c.count,
                s(r, c.name)
              } else i(a) || s(r, e(a))
            } else if ('Literal' === r.type) 'string' == typeof r.value && s(r, p(r.value));
             else {
              if ('WithStatement' === r.type) throw new Error('cwise-parser: with() statements not allowed');
              for (var h = Object.keys(r), d = 0, m = h.length; d < m; ++d) if ('parent' !== h[d]) {
                var y = r[h[d]];
                if (y) if (y instanceof Array) for (var _ = 0; _ < y.length; ++_) y[_] && 'string' == typeof y[_].type && t(y[_], r);
                 else 'string' == typeof y.type && t(y, r)
              }
            }
          }
        }(m.body[0].expression.callee.body, void 0),
        c(w),
        c(S),
        new o(h(m.body[0].expression.callee.body), g, S, w)
      }
      var u = n(419),
      c = n(160),
      l = 0;
      t.exports = s
    }).call(e, n(30))
  },
  function (t, e, n) {
    var r,
    o,
    i;
    !function (n, a) {
      'use strict';
      o = [
        e
      ],
      r = a,
      void 0 !== (i = 'function' == typeof r ? r.apply(e, o)  : r) && (t.exports = i)
    }(this, function (t) {
      'use strict';
      function e(t, e) {
        if (!t) throw new Error('ASSERT: ' + e)
      }
      function n(t) {
        return t >= 48 && t <= 57
      }
      function r(t) {
        return '0123456789abcdefABCDEF'.indexOf(t) >= 0
      }
      function o(t) {
        return '01234567'.indexOf(t) >= 0
      }
      function i(t) {
        return 32 === t || 9 === t || 11 === t || 12 === t || 160 === t || t >= 5760 && [
          5760,
          6158,
          8192,
          8193,
          8194,
          8195,
          8196,
          8197,
          8198,
          8199,
          8200,
          8201,
          8202,
          8239,
          8287,
          12288,
          65279
        ].indexOf(t) >= 0
      }
      function a(t) {
        return 10 === t || 13 === t || 8232 === t || 8233 === t
      }
      function s(t) {
        return 36 === t || 95 === t || t >= 65 && t <= 90 || t >= 97 && t <= 122 || 92 === t || t >= 128 && ie.NonAsciiIdentifierStart.test(String.fromCharCode(t))
      }
      function u(t) {
        return 36 === t || 95 === t || t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 48 && t <= 57 || 92 === t || t >= 128 && ie.NonAsciiIdentifierPart.test(String.fromCharCode(t))
      }
      function c(t) {
        switch (t) {
          case 'class':
          case 'enum':
          case 'export':
          case 'extends':
          case 'import':
          case 'super':
            return !0;
          default:
            return !1
        }
      }
      function l(t) {
        switch (t) {
          case 'implements':
          case 'interface':
          case 'package':
          case 'private':
          case 'protected':
          case 'public':
          case 'static':
          case 'yield':
          case 'let' :
            return !0;
          default:
            return !1
        }
      }
      function p(t) {
        return 'eval' === t || 'arguments' === t
      }
      function h(t) {
        if (ue && l(t)) return !0;
        switch (t.length) {
          case 2:
            return 'if' === t || 'in' === t || 'do' === t;
          case 3:
            return 'var' === t || 'for' === t || 'new' === t || 'try' === t || 'let' === t;
          case 4:
            return 'this' === t || 'else' === t || 'case' === t || 'void' === t || 'with' === t || 'enum' === t;
          case 5:
            return 'while' === t || 'break' === t || 'catch' === t || 'throw' === t || 'const' === t || 'yield' === t || 'class' === t || 'super' === t;
          case 6:
            return 'return' === t || 'typeof' === t || 'delete' === t || 'switch' === t || 'export' === t || 'import' === t;
          case 7:
            return 'default' === t || 'finally' === t || 'extends' === t;
          case 8:
            return 'function' === t || 'continue' === t || 'debugger' === t;
          case 10:
            return 'instanceof' === t;
          default:
            return !1
        }
      }
      function f(t, n, r, o, i) {
        var a,
        s;
        e('number' == typeof r, 'Comment must have valid position'),
        me.lastCommentStart >= r || (me.lastCommentStart = r, a = {
          type: t,
          value: n
        }, ye.range && (a.range = [
          r,
          o
        ]), ye.loc && (a.loc = i), ye.comments.push(a), ye.attachComment && (ye.leadingComments.push(a), ye.trailingComments.push(a)))
      }
      function d(t) {
        var e,
        n,
        r,
        o;
        for (e = ce - t, n = {
          start: {
            line: le,
            column: ce - pe - t
          }
        }; ce < he; ) if (r = se.charCodeAt(ce), ++ce, a(r)) return ye.comments && (o = se.slice(e + t, ce - 1), n.end = {
          line: le,
          column: ce - pe - 1
        }, f('Line', o, e, ce - 1, n)),
        13 === r && 10 === se.charCodeAt(ce) && ++ce,
        ++le,
        void (pe = ce);
        ye.comments && (o = se.slice(e + t, ce), n.end = {
          line: le,
          column: ce - pe
        }, f('Line', o, e, ce, n))
      }
      function m() {
        var t,
        e,
        n,
        r;
        for (ye.comments && (t = ce - 2, e = {
          start: {
            line: le,
            column: ce - pe - 2
          }
        }); ce < he; ) if (n = se.charCodeAt(ce), a(n)) 13 === n && 10 === se.charCodeAt(ce + 1) && ++ce,
        ++le,
        ++ce,
        pe = ce,
        ce >= he && N({
        }, oe.UnexpectedToken, 'ILLEGAL');
         else if (42 === n) {
          if (47 === se.charCodeAt(ce + 1)) return ++ce,
          ++ce,
          void (ye.comments && (r = se.slice(t + 2, ce - 2), e.end = {
            line: le,
            column: ce - pe
          }, f('Block', r, t, ce, e)));
          ++ce
        } else ++ce;
        N({
        }, oe.UnexpectedToken, 'ILLEGAL')
      }
      function y() {
        var t,
        e;
        for (e = 0 === ce; ce < he; ) if (t = se.charCodeAt(ce), i(t)) ++ce;
         else if (a(t)) ++ce,
        13 === t && 10 === se.charCodeAt(ce) && ++ce,
        ++le,
        pe = ce,
        e = !0;
         else if (47 === t) if (47 === (t = se.charCodeAt(ce + 1))) ++ce,
        ++ce,
        d(2),
        e = !0;
         else {
          if (42 !== t) break;
          ++ce,
          ++ce,
          m()
        } else if (e && 45 === t) {
          if (45 !== se.charCodeAt(ce + 1) || 62 !== se.charCodeAt(ce + 2)) break;
          ce += 3,
          d(3)
        } else {
          if (60 !== t) break;
          if ('!--' !== se.slice(ce + 1, ce + 4)) break;
          ++ce,
          ++ce,
          ++ce,
          ++ce,
          d(4)
        }
      }
      function v(t) {
        var e,
        n,
        o,
        i = 0;
        for (n = 'u' === t ? 4 : 2, e = 0; e < n; ++e) {
          if (!(ce < he && r(se[ce]))) return '';
          o = se[ce++],
          i = 16 * i + '0123456789abcdef'.indexOf(o.toLowerCase())
        }
        return String.fromCharCode(i)
      }
      function g() {
        var t,
        e;
        for (t = se.charCodeAt(ce++), e = String.fromCharCode(t), 92 === t && (117 !== se.charCodeAt(ce) && N({
        }, oe.UnexpectedToken, 'ILLEGAL'), ++ce, t = v('u'), t && '\\' !== t && s(t.charCodeAt(0)) || N({
        }, oe.UnexpectedToken, 'ILLEGAL'), e = t); ce < he && (t = se.charCodeAt(ce), u(t)); ) ++ce,
        e += String.fromCharCode(t),
        92 === t && (e = e.substr(0, e.length - 1), 117 !== se.charCodeAt(ce) && N({
        }, oe.UnexpectedToken, 'ILLEGAL'), ++ce, t = v('u'), t && '\\' !== t && u(t.charCodeAt(0)) || N({
        }, oe.UnexpectedToken, 'ILLEGAL'), e += t);
        return e
      }
      function _() {
        var t,
        e;
        for (t = ce++; ce < he; ) {
          if (92 === (e = se.charCodeAt(ce))) return ce = t,
          g();
          if (!u(e)) break;
          ++ce
        }
        return se.slice(t, ce)
      }
      function b() {
        var t,
        e,
        n;
        return t = ce,
        e = 92 === se.charCodeAt(ce) ? g()  : _(),
        n = 1 === e.length ? Zt.Identifier : h(e) ? Zt.Keyword : 'null' === e ? Zt.NullLiteral : 'true' === e || 'false' === e ? Zt.BooleanLiteral : Zt.Identifier,
        {
          type: n,
          value: e,
          lineNumber: le,
          lineStart: pe,
          start: t,
          end: ce
        }
      }
      function x() {
        var t = ce,
        e = se.charCodeAt(ce),
        n,
        r = se[ce],
        o,
        i,
        a;
        switch (e) {
          case 46:
          case 40:
          case 41:
          case 59:
          case 44:
          case 123:
          case 125:
          case 91:
          case 93:
          case 58:
          case 63:
          case 126:
            return ++ce,
            ye.tokenize && (40 === e ? ye.openParenToken = ye.tokens.length : 123 === e && (ye.openCurlyToken = ye.tokens.length)),
            {
              type: Zt.Punctuator,
              value: String.fromCharCode(e),
              lineNumber: le,
              lineStart: pe,
              start: t,
              end: ce
            };
          default:
            if (61 === (n = se.charCodeAt(ce + 1))) switch (e) {
              case 43:
              case 45:
              case 47:
              case 60:
              case 62:
              case 94:
              case 124:
              case 37:
              case 38:
              case 42:
                return ce += 2,
                {
                  type: Zt.Punctuator,
                  value: String.fromCharCode(e) + String.fromCharCode(n),
                  lineNumber: le,
                  lineStart: pe,
                  start: t,
                  end: ce
                };
              case 33:
              case 61:
                return ce += 2,
                61 === se.charCodeAt(ce) && ++ce,
                {
                  type: Zt.Punctuator,
                  value: se.slice(t, ce),
                  lineNumber: le,
                  lineStart: pe,
                  start: t,
                  end: ce
                }
            }
          }
          return '>>>=' === (a = se.substr(ce, 4)) ? (ce += 4, {
            type: Zt.Punctuator,
            value: a,
            lineNumber: le,
            lineStart: pe,
            start: t,
            end: ce
          })  : '>>>' === (i = a.substr(0, 3)) || '<<=' === i || '>>=' === i ? (ce += 3, {
            type: Zt.Punctuator,
            value: i,
            lineNumber: le,
            lineStart: pe,
            start: t,
            end: ce
          })  : (o = i.substr(0, 2), r === o[1] && '+-<>&|'.indexOf(r) >= 0 || '=>' === o ? (ce += 2, {
            type: Zt.Punctuator,
            value: o,
            lineNumber: le,
            lineStart: pe,
            start: t,
            end: ce
          })  : '<>=!+-*%&|^/'.indexOf(r) >= 0 ? (++ce, {
            type: Zt.Punctuator,
            value: r,
            lineNumber: le,
            lineStart: pe,
            start: t,
            end: ce
          })  : void N({
          }, oe.UnexpectedToken, 'ILLEGAL'))
      }
      function w(t) {
        for (var e = ''; ce < he && r(se[ce]); ) e += se[ce++];
        return 0 === e.length && N({
        }, oe.UnexpectedToken, 'ILLEGAL'),
        s(se.charCodeAt(ce)) && N({
        }, oe.UnexpectedToken, 'ILLEGAL'),
        {
          type: Zt.NumericLiteral,
          value: parseInt('0x' + e, 16),
          lineNumber: le,
          lineStart: pe,
          start: t,
          end: ce
        }
    }
    function S(t) {
      for (var e = '0' + se[ce++]; ce < he && o(se[ce]); ) e += se[ce++];
      return (s(se.charCodeAt(ce)) || n(se.charCodeAt(ce))) && N({
      }, oe.UnexpectedToken, 'ILLEGAL'),
      {
        type: Zt.NumericLiteral,
        value: parseInt(e, 8),
        octal: !0,
        lineNumber: le,
        lineStart: pe,
        start: t,
        end: ce
      }
  }
  function T() {
    var t,
    e;
    for (t = ce + 1; t < he; ++t) {
      if ('8' === (e = se[t]) || '9' === e) return !1;
      if (!o(e)) return !0
    }
    return !0
}
function P() {
  var t,
  r,
  i;
  if (i = se[ce], e(n(i.charCodeAt(0)) || '.' === i, 'Numeric literal must start with a decimal digit or a decimal point'), r = ce, t = '', '.' !== i) {
    if (t = se[ce++], i = se[ce], '0' === t) {
      if ('x' === i || 'X' === i) return ++ce,
      w(r);
      if (o(i) && T()) return S(r)
    }
    for (; n(se.charCodeAt(ce)); ) t += se[ce++];
    i = se[ce]
  }
  if ('.' === i) {
    for (t += se[ce++]; n(se.charCodeAt(ce)); ) t += se[ce++];
    i = se[ce]
  }
  if ('e' === i || 'E' === i) if (t += se[ce++], i = se[ce], '+' !== i && '-' !== i || (t += se[ce++]), n(se.charCodeAt(ce))) for (; n(se.charCodeAt(ce)); ) t += se[ce++];
   else N({
  }, oe.UnexpectedToken, 'ILLEGAL');
  return s(se.charCodeAt(ce)) && N({
  }, oe.UnexpectedToken, 'ILLEGAL'),
  {
    type: Zt.NumericLiteral,
    value: parseFloat(t),
    lineNumber: le,
    lineStart: pe,
    start: r,
    end: ce
  }
}
function C() {
var t = '',
n,
r,
i,
s,
u,
c,
l = !1,
p,
h;
for (p = le, h = pe, n = se[ce], e('\'' === n || '"' === n, 'String literal must starts with a quote'), r = ce, ++ce; ce < he; ) {
  if ((i = se[ce++]) === n) {
    n = '';
    break
  }
  if ('\\' === i) if ((i = se[ce++]) && a(i.charCodeAt(0))) ++le,
  '\r' === i && '\n' === se[ce] && ++ce,
  pe = ce;
   else switch (i) {
    case 'u':
    case 'x':
      c = ce,
      u = v(i),
      u ? t += u : (ce = c, t += i);
      break;
    case 'n':
      t += '\n';
      break;
    case 'r':
      t += '\r';
      break;
    case 't':
      t += '\t';
      break;
    case 'b':
      t += '';
      break;
    case 'f':
      t += '\f';
      break;
    case 'v':
      t += '\v';
      break;
    default:
      o(i) ? (s = '01234567'.indexOf(i), 0 !== s && (l = !0), ce < he && o(se[ce]) && (l = !0, s = 8 * s + '01234567'.indexOf(se[ce++]), '0123'.indexOf(i) >= 0 && ce < he && o(se[ce]) && (s = 8 * s + '01234567'.indexOf(se[ce++]))), t += String.fromCharCode(s))  : t += i
  } else {
    if (a(i.charCodeAt(0))) break;
    t += i
}
}
return '' !== n && N({
}, oe.UnexpectedToken, 'ILLEGAL'),
{
type: Zt.StringLiteral,
value: t,
octal: l,
startLineNumber: p,
startLineStart: h,
lineNumber: le,
lineStart: pe,
start: r,
end: ce
}
}
function k(t, e) {
var n;
try {
n = new RegExp(t, e)
} catch (t) {
N({
}, oe.InvalidRegExp)
}
return n
}
function O() {
var t,
n,
r,
o,
i;
for (t = se[ce], e('/' === t, 'Regular expression literal must start with a slash'), n = se[ce++], r = !1, o = !1; ce < he; ) if (t = se[ce++], n += t, '\\' === t) t = se[ce++],
a(t.charCodeAt(0)) && N({
}, oe.UnterminatedRegExp),
n += t;
 else if (a(t.charCodeAt(0))) N({
}, oe.UnterminatedRegExp);
 else if (r) ']' === t && (r = !1);
 else {
if ('/' === t) {
  o = !0;
  break
}
'[' === t && (r = !0)
}
return o || N({
}, oe.UnterminatedRegExp),
i = n.substr(1, n.length - 2),
{
value: i,
literal: n
}
}
function E() {
var t,
e,
n,
r;
for (e = '', n = ''; ce < he && (t = se[ce], u(t.charCodeAt(0))); ) if (++ce, '\\' === t && ce < he) if ('u' === (t = se[ce])) {
if (++ce, r = ce, t = v('u')) for (n += t, e += '\\u'; r < ce; ++r) e += se[r];
 else ce = r,
n += 'u',
e += '\\u';
B({
}, oe.UnexpectedToken, 'ILLEGAL')
} else e += '\\',
B({
}, oe.UnexpectedToken, 'ILLEGAL');
 else n += t,
e += t;
return {
value: n,
literal: e
}
}
function j() {
var t,
e,
n,
r,
o;
return de = null,
y(),
t = ce,
e = O(),
n = E(),
o = k(e.value, n.value),
ye.tokenize ? {
type: Zt.RegularExpression,
value: o,
lineNumber: le,
lineStart: pe,
start: t,
end: ce
}
 : {
literal: e.literal + n.literal,
value: o,
start: t,
end: ce
}
}
function A() {
var t,
e,
n,
r;
return y(),
t = ce,
e = {
start: {
  line: le,
  column: ce - pe
}
},
n = j(),
e.end = {
line: le,
column: ce - pe
},
ye.tokenize || (ye.tokens.length > 0 && (r = ye.tokens[ye.tokens.length - 1], r.range[0] === t && 'Punctuator' === r.type && ('/' !== r.value && '/=' !== r.value || ye.tokens.pop())), ye.tokens.push({
type: 'RegularExpression',
value: n.literal,
range: [
  t,
  ce
],
loc: e
})),
n
}
function F(t) {
return t.type === Zt.Identifier || t.type === Zt.Keyword || t.type === Zt.BooleanLiteral || t.type === Zt.NullLiteral
}
function M() {
var t,
e;
if (!(t = ye.tokens[ye.tokens.length - 1])) return A();
if ('Punctuator' === t.type) {
if (']' === t.value) return x();
if (')' === t.value) return e = ye.tokens[ye.openParenToken - 1],
!e || 'Keyword' !== e.type || 'if' !== e.value && 'while' !== e.value && 'for' !== e.value && 'with' !== e.value ? x()  : A();
if ('}' === t.value) {
  if (ye.tokens[ye.openCurlyToken - 3] && 'Keyword' === ye.tokens[ye.openCurlyToken - 3].type) {
    if (!(e = ye.tokens[ye.openCurlyToken - 4])) return x()
  } else {
    if (!ye.tokens[ye.openCurlyToken - 4] || 'Keyword' !== ye.tokens[ye.openCurlyToken - 4].type) return x();
    if (!(e = ye.tokens[ye.openCurlyToken - 5])) return A()
  }
  return ee.indexOf(e.value) >= 0 ? x()  : A()
}
return A()
}
return 'Keyword' === t.type && 'this' !== t.value ? A()  : x()
}
function R() {
var t;
return y(),
ce >= he ? {
type: Zt.EOF,
lineNumber: le,
lineStart: pe,
start: ce,
end: ce
}
 : (t = se.charCodeAt(ce), s(t) ? b()  : 40 === t || 41 === t || 59 === t ? x()  : 39 === t || 34 === t ? C()  : 46 === t ? n(se.charCodeAt(ce + 1)) ? P()  : x()  : n(t) ? P()  : ye.tokenize && 47 === t ? M()  : x())
}
function D() {
var t,
e,
n,
r;
return y(),
t = {
start: {
  line: le,
  column: ce - pe
}
},
e = R(),
t.end = {
line: le,
column: ce - pe
},
e.type !== Zt.EOF && (r = se.slice(e.start, e.end), ye.tokens.push({
type: te[e.type],
value: r,
range: [
  e.start,
  e.end
],
loc: t
})),
e
}
function I() {
var t;
return t = de,
ce = t.end,
le = t.lineNumber,
pe = t.lineStart,
de = void 0 !== ye.tokens ? D()  : R(),
ce = t.end,
le = t.lineNumber,
pe = t.lineStart,
t
}
function L() {
var t,
e,
n;
t = ce,
e = le,
n = pe,
de = void 0 !== ye.tokens ? D()  : R(),
ce = t,
le = e,
pe = n
}
function z(t, e) {
this.line = t,
this.column = e
}
function U(t, e, n, r) {
this.start = new z(t, e),
this.end = new z(n, r)
}
function G() {
var t,
e,
n,
r;
return t = ce,
e = le,
n = pe,
y(),
r = le !== e,
ce = t,
le = e,
pe = n,
r
}
function N(t, n) {
var r,
o = Array.prototype.slice.call(arguments, 2),
i = n.replace(/%(\d)/g, function (t, n) {
return e(n < o.length, 'Message reference must be in range'),
o[n]
});
throw 'number' == typeof t.lineNumber ? (r = new Error('Line ' + t.lineNumber + ': ' + i), r.index = t.start, r.lineNumber = t.lineNumber, r.column = t.start - pe + 1)  : (r = new Error('Line ' + le + ': ' + i), r.index = ce, r.lineNumber = le, r.column = ce - pe + 1),
r.description = i,
r
}
function B() {
try {
N.apply(null, arguments)
} catch (t) {
if (!ye.errors) throw t;
ye.errors.push(t)
}
}
function q(t) {
if (t.type === Zt.EOF && N(t, oe.UnexpectedEOS), t.type === Zt.NumericLiteral && N(t, oe.UnexpectedNumber), t.type === Zt.StringLiteral && N(t, oe.UnexpectedString), t.type === Zt.Identifier && N(t, oe.UnexpectedIdentifier), t.type === Zt.Keyword) {
if (c(t.value)) N(t, oe.UnexpectedReserved);
 else if (ue && l(t.value)) return void B(t, oe.StrictReservedWord);
N(t, oe.UnexpectedToken, t.value)
}
N(t, oe.UnexpectedToken, t.value)
}
function V(t) {
var e = I();
e.type === Zt.Punctuator && e.value === t || q(e)
}
function H(t) {
var e = I();
e.type === Zt.Keyword && e.value === t || q(e)
}
function W(t) {
return de.type === Zt.Punctuator && de.value === t
}
function X(t) {
return de.type === Zt.Keyword && de.value === t
}
function Y() {
var t;
return de.type === Zt.Punctuator && ('=' === (t = de.value) || '*=' === t || '/=' === t || '%=' === t || '+=' === t || '-=' === t || '<<=' === t || '>>=' === t || '>>>=' === t || '&=' === t || '^=' === t || '|=' === t)
}
function $() {
var t,
e = ce,
n = le,
r = pe,
o = de;
return 59 === se.charCodeAt(ce) || W(';') ? void I()  : (t = le, y(), le !== t ? (ce = e, le = n, pe = r, void (de = o))  : void (de.type === Zt.EOF || W('}') || q(de)))
}
function K(t) {
return t.type === ne.Identifier || t.type === ne.MemberExpression
}
function J() {
var t = [
],
e;
for (e = de, V('['); !W(']'); ) W(',') ? (I(), t.push(null))  : (t.push(yt()), W(']') || V(','));
return I(),
fe.markEnd(fe.createArrayExpression(t), e)
}
function Q(t, e) {
var n,
r,
o;
return n = ue,
o = de,
r = qt(),
e && ue && p(t[0].name) && B(e, oe.StrictParamName),
ue = n,
fe.markEnd(fe.createFunctionExpression(null, t, [
], r), o)
}
function Z() {
var t,
e;
return e = de,
t = I(),
t.type === Zt.StringLiteral || t.type === Zt.NumericLiteral ? (ue && t.octal && B(t, oe.StrictOctalLiteral), fe.markEnd(fe.createLiteral(t), e))  : fe.markEnd(fe.createIdentifier(t.value), e)
}
function tt() {
var t,
e,
n,
r,
o,
i;
return t = de,
i = de,
t.type === Zt.Identifier ? (n = Z(), 'get' !== t.value || W(':') ? 'set' !== t.value || W(':') ? (V(':'), r = yt(), fe.markEnd(fe.createProperty('init', n, r), i))  : (e = Z(), V('('), t = de, t.type !== Zt.Identifier ? (V(')'), B(t, oe.UnexpectedToken, t.value), r = Q([]))  : (o = [
bt()
], V(')'), r = Q(o, t)), fe.markEnd(fe.createProperty('set', e, r), i))  : (e = Z(), V('('), V(')'), r = Q([]), fe.markEnd(fe.createProperty('get', e, r), i)))  : t.type !== Zt.EOF && t.type !== Zt.Punctuator ? (e = Z(), V(':'), r = yt(), fe.markEnd(fe.createProperty('init', e, r), i))  : void q(t)
}
function et() {
var t = [
],
e,
n,
r,
o,
i = {
},
a = String,
s;
for (s = de, V('{'); !W('}'); ) e = tt(),
n = e.key.type === ne.Identifier ? e.key.name : a(e.key.value),
o = 'init' === e.kind ? re.Data : 'get' === e.kind ? re.Get : re.Set,
r = '$' + n,
Object.prototype.hasOwnProperty.call(i, r) ? (i[r] === re.Data ? ue && o === re.Data ? B({
}, oe.StrictDuplicateProperty)  : o !== re.Data && B({
}, oe.AccessorDataProperty)  : o === re.Data ? B({
}, oe.AccessorDataProperty)  : i[r] & o && B({
}, oe.AccessorGetSet), i[r] |= o)  : i[r] = o,
t.push(e),
W('}') || V(',');
return V('}'),
fe.markEnd(fe.createObjectExpression(t), s)
}
function nt() {
var t;
return V('('),
t = vt(),
V(')'),
t
}
function rt() {
var t,
e,
n,
r;
if (W('(')) return nt();
if (W('[')) return J();
if (W('{')) return et();
if (t = de.type, r = de, t === Zt.Identifier) n = fe.createIdentifier(I().value);
 else if (t === Zt.StringLiteral || t === Zt.NumericLiteral) ue && de.octal && B(de, oe.StrictOctalLiteral),
n = fe.createLiteral(I());
 else if (t === Zt.Keyword) {
if (X('function')) return Wt();
X('this') ? (I(), n = fe.createThisExpression())  : q(I())
} else t === Zt.BooleanLiteral ? (e = I(), e.value = 'true' === e.value, n = fe.createLiteral(e))  : t === Zt.NullLiteral ? (e = I(), e.value = null, n = fe.createLiteral(e))  : W('/') || W('/=') ? (n = void 0 !== ye.tokens ? fe.createLiteral(A())  : fe.createLiteral(j()), L())  : q(I());
return fe.markEnd(n, r)
}
function ot() {
var t = [
];
if (V('('), !W(')')) for (; ce < he && (t.push(yt()), !W(')')); ) V(',');
return V(')'),
t
}
function it() {
var t,
e;
return e = de,
t = I(),
F(t) || q(t),
fe.markEnd(fe.createIdentifier(t.value), e)
}
function at() {
return V('.'),
it()
}
function st() {
var t;
return V('['),
t = vt(),
V(']'),
t
}
function ut() {
var t,
e,
n;
return n = de,
H('new'),
t = lt(),
e = W('(') ? ot()  : [
],
fe.markEnd(fe.createNewExpression(t, e), n)
}
function ct() {
var t,
e,
n,
r,
o = me.allowIn;
for (r = de, me.allowIn = !0, t = X('new') ? ut()  : rt(); ; ) {
if (W('.')) n = at(),
t = fe.createMemberExpression('.', t, n);
 else if (W('(')) e = ot(),
t = fe.createCallExpression(t, e);
 else {
  if (!W('[')) break;
  n = st(),
  t = fe.createMemberExpression('[', t, n)
}
fe.markEnd(t, r)
}
return me.allowIn = o,
t
}
function lt() {
var t,
n,
r;
for (e(me.allowIn, 'callee of new expression always allow in keyword.'), r = de, t = X('new') ? ut()  : rt(); W('.') || W('['); ) W('[') ? (n = st(), t = fe.createMemberExpression('[', t, n))  : (n = at(), t = fe.createMemberExpression('.', t, n)),
fe.markEnd(t, r);
return t
}
function pt() {
var t,
e,
n = de;
return t = ct(),
de.type === Zt.Punctuator && (!W('++') && !W('--') || G() || (ue && t.type === ne.Identifier && p(t.name) && B({
}, oe.StrictLHSPostfix), K(t) || B({
}, oe.InvalidLHSInAssignment), e = I(), t = fe.markEnd(fe.createPostfixExpression(e.value, t), n))),
t
}
function ht() {
var t,
e,
n;
return de.type !== Zt.Punctuator && de.type !== Zt.Keyword ? e = pt()  : W('++') || W('--') ? (n = de, t = I(), e = ht(), ue && e.type === ne.Identifier && p(e.name) && B({
}, oe.StrictLHSPrefix), K(e) || B({
}, oe.InvalidLHSInAssignment), e = fe.createUnaryExpression(t.value, e), e = fe.markEnd(e, n))  : W('+') || W('-') || W('~') || W('!') ? (n = de, t = I(), e = ht(), e = fe.createUnaryExpression(t.value, e), e = fe.markEnd(e, n))  : X('delete') || X('void') || X('typeof') ? (n = de, t = I(), e = ht(), e = fe.createUnaryExpression(t.value, e), e = fe.markEnd(e, n), ue && 'delete' === e.operator && e.argument.type === ne.Identifier && B({
}, oe.StrictDelete))  : e = pt(),
e
}
function ft(t, e) {
var n = 0;
if (t.type !== Zt.Punctuator && t.type !== Zt.Keyword) return 0;
switch (t.value) {
case '||':
  n = 1;
  break;
case '&&':
  n = 2;
  break;
case '|':
  n = 3;
  break;
case '^':
  n = 4;
  break;
case '&':
  n = 5;
  break;
case '==':
case '!=':
case '===':
case '!==':
  n = 6;
  break;
case '<':
case '>':
case '<=':
case '>=':
case 'instanceof':
  n = 7;
  break;
case 'in':
  n = e ? 7 : 0;
  break;
case '<<':
case '>>':
case '>>>':
  n = 8;
  break;
case '+':
case '-':
  n = 9;
  break;
case '*':
case '/':
case '%':
  n = 11
}
return n
}
function dt() {
var t,
e,
n,
r,
o,
i,
a,
s,
u,
c;
if (t = de, u = ht(), r = de, 0 === (o = ft(r, me.allowIn))) return u;
for (r.prec = o, I(), e = [
t,
de
], a = ht(), i = [
u,
r,
a
]; (o = ft(de, me.allowIn)) > 0; ) {
for (; i.length > 2 && o <= i[i.length - 2].prec; ) a = i.pop(),
s = i.pop().value,
u = i.pop(),
n = fe.createBinaryExpression(s, u, a),
e.pop(),
t = e[e.length - 1],
fe.markEnd(n, t),
i.push(n);
r = I(),
r.prec = o,
i.push(r),
e.push(de),
n = ht(),
i.push(n)
}
for (c = i.length - 1, n = i[c], e.pop(); c > 1; ) n = fe.createBinaryExpression(i[c - 1].value, i[c - 2], n),
c -= 2,
t = e.pop(),
fe.markEnd(n, t);
return n
}
function mt() {
var t,
e,
n,
r,
o;
return o = de,
t = dt(),
W('?') && (I(), e = me.allowIn, me.allowIn = !0, n = yt(), me.allowIn = e, V(':'), r = yt(), t = fe.createConditionalExpression(t, n, r), fe.markEnd(t, o)),
t
}
function yt() {
var t,
e,
n,
r,
o;
return t = de,
o = de,
r = e = mt(),
Y() && (K(e) || B({
}, oe.InvalidLHSInAssignment), ue && e.type === ne.Identifier && p(e.name) && B(t, oe.StrictLHSAssignment), t = I(), n = yt(), r = fe.markEnd(fe.createAssignmentExpression(t.value, e, n), o)),
r
}
function vt() {
var t,
e = de;
if (t = yt(), W(',')) {
for (t = fe.createSequenceExpression([t]); ce < he && W(','); ) I(),
t.expressions.push(yt());
fe.markEnd(t, e)
}
return t
}
function gt() {
for (var t = [
], e; ce < he && !W('}') && void 0 !== (e = Xt()); ) t.push(e);
return t
}
function _t() {
var t,
e;
return e = de,
V('{'),
t = gt(),
V('}'),
fe.markEnd(fe.createBlockStatement(t), e)
}
function bt() {
var t,
e;
return e = de,
t = I(),
t.type !== Zt.Identifier && q(t),
fe.markEnd(fe.createIdentifier(t.value), e)
}
function xt(t) {
var e = null,
n,
r;
return r = de,
n = bt(),
ue && p(n.name) && B({
}, oe.StrictVarName),
'const' === t ? (V('='), e = yt())  : W('=') && (I(), e = yt()),
fe.markEnd(fe.createVariableDeclarator(n, e), r)
}
function wt(t) {
var e = [
];
do {
if (e.push(xt(t)), !W(',')) break;
I()
} while (ce < he);
return e
}
function St() {
var t;
return H('var'),
t = wt(),
$(),
fe.createVariableDeclaration(t, 'var')
}
function Tt(t) {
var e,
n;
return n = de,
H(t),
e = wt(t),
$(),
fe.markEnd(fe.createVariableDeclaration(e, t), n)
}
function Pt() {
return V(';'),
fe.createEmptyStatement()
}
function Ct() {
var t = vt();
return $(),
fe.createExpressionStatement(t)
}
function kt() {
var t,
e,
n;
return H('if'),
V('('),
t = vt(),
V(')'),
e = Bt(),
X('else') ? (I(), n = Bt())  : n = null,
fe.createIfStatement(t, e, n)
}
function Ot() {
var t,
e,
n;
return H('do'),
n = me.inIteration,
me.inIteration = !0,
t = Bt(),
me.inIteration = n,
H('while'),
V('('),
e = vt(),
V(')'),
W(';') && I(),
fe.createDoWhileStatement(t, e)
}
function Et() {
var t,
e,
n;
return H('while'),
V('('),
t = vt(),
V(')'),
n = me.inIteration,
me.inIteration = !0,
e = Bt(),
me.inIteration = n,
fe.createWhileStatement(t, e)
}
function jt() {
var t,
e,
n;
return n = de,
t = I(),
e = wt(),
fe.markEnd(fe.createVariableDeclaration(e, t.value), n)
}
function At() {
var t,
e,
n,
r,
o,
i,
a,
s = me.allowIn;
return t = e = n = null,
H('for'),
V('('),
W(';') ? I()  : (X('var') || X('let' ) ? (me.allowIn = !1, t = jt(), me.allowIn = s, 1 === t.declarations.length && X('in') && (I(), r = t, o = vt(), t = null))  : (me.allowIn = !1, t = vt(), me.allowIn = s, X('in') && (K(t) || B({
}, oe.InvalidLHSInForIn), I(), r = t, o = vt(), t = null)), void 0 === r && V(';')),
void 0 === r && (W(';') || (e = vt()), V(';'), W(')') || (n = vt())),
V(')'),
a = me.inIteration,
me.inIteration = !0,
i = Bt(),
me.inIteration = a,
void 0 === r ? fe.createForStatement(t, e, n, i)  : fe.createForInStatement(r, o, i)
}
function Ft() {
var t = null,
e;
return H('continue'),
59 === se.charCodeAt(ce) ? (I(), me.inIteration || N({
}, oe.IllegalContinue), fe.createContinueStatement(null))  : G() ? (me.inIteration || N({
}, oe.IllegalContinue), fe.createContinueStatement(null))  : (de.type === Zt.Identifier && (t = bt(), e = '$' + t.name, Object.prototype.hasOwnProperty.call(me.labelSet, e) || N({
}, oe.UnknownLabel, t.name)), $(), null !== t || me.inIteration || N({
}, oe.IllegalContinue), fe.createContinueStatement(t))
}
function Mt() {
var t = null,
e;
return H('break'),
59 === se.charCodeAt(ce) ? (I(), me.inIteration || me.inSwitch || N({
}, oe.IllegalBreak), fe.createBreakStatement(null))  : G() ? (me.inIteration || me.inSwitch || N({
}, oe.IllegalBreak), fe.createBreakStatement(null))  : (de.type === Zt.Identifier && (t = bt(), e = '$' + t.name, Object.prototype.hasOwnProperty.call(me.labelSet, e) || N({
}, oe.UnknownLabel, t.name)), $(), null !== t || me.inIteration || me.inSwitch || N({
}, oe.IllegalBreak), fe.createBreakStatement(t))
}
function Rt() {
var t = null;
return H('return'),
me.inFunctionBody || B({
}, oe.IllegalReturn),
32 === se.charCodeAt(ce) && s(se.charCodeAt(ce + 1)) ? (t = vt(), $(), fe.createReturnStatement(t))  : G() ? fe.createReturnStatement(null)  : (W(';') || W('}') || de.type === Zt.EOF || (t = vt()), $(), fe.createReturnStatement(t))
}
function Dt() {
var t,
e;
return ue && (y(), B({
}, oe.StrictModeWith)),
H('with'),
V('('),
t = vt(),
V(')'),
e = Bt(),
fe.createWithStatement(t, e)
}
function It() {
var t,
e = [
],
n,
r;
for (r = de, X('default') ? (I(), t = null)  : (H('case'), t = vt()), V(':'); ce < he && !(W('}') || X('default') || X('case')); ) n = Bt(),
e.push(n);
return fe.markEnd(fe.createSwitchCase(t, e), r)
}
function Lt() {
var t,
e,
n,
r,
o;
if (H('switch'), V('('), t = vt(), V(')'), V('{'), e = [
], W('}')) return I(),
fe.createSwitchStatement(t, e);
for (r = me.inSwitch, me.inSwitch = !0, o = !1; ce < he && !W('}'); ) n = It(),
null === n.test && (o && N({
}, oe.MultipleDefaultsInSwitch), o = !0),
e.push(n);
return me.inSwitch = r,
V('}'),
fe.createSwitchStatement(t, e)
}
function zt() {
var t;
return H('throw'),
G() && N({
}, oe.NewlineAfterThrow),
t = vt(),
$(),
fe.createThrowStatement(t)
}
function Ut() {
var t,
e,
n;
return n = de,
H('catch'),
V('('),
W(')') && q(de),
t = bt(),
ue && p(t.name) && B({
}, oe.StrictCatchVariable),
V(')'),
e = _t(),
fe.markEnd(fe.createCatchClause(t, e), n)
}
function Gt() {
var t,
e = [
],
n = null;
return H('try'),
t = _t(),
X('catch') && e.push(Ut()),
X('finally') && (I(), n = _t()),
0 !== e.length || n || N({
}, oe.NoCatchOrFinally),
fe.createTryStatement(t, [
], e, n)
}
function Nt() {
return H('debugger'),
$(),
fe.createDebuggerStatement()
}
function Bt() {
var t = de.type,
e,
n,
r,
o;
if (t === Zt.EOF && q(de), t === Zt.Punctuator && '{' === de.value) return _t();
if (o = de, t === Zt.Punctuator) switch (de.value) {
case ';':
  return fe.markEnd(Pt(), o);
case '(':
  return fe.markEnd(Ct(), o)
}
if (t === Zt.Keyword) switch (de.value) {
case 'break':
  return fe.markEnd(Mt(), o);
case 'continue':
  return fe.markEnd(Ft(), o);
case 'debugger':
  return fe.markEnd(Nt(), o);
case 'do':
  return fe.markEnd(Ot(), o);
case 'for':
  return fe.markEnd(At(), o);
case 'function':
  return fe.markEnd(Ht(), o);
case 'if':
  return fe.markEnd(kt(), o);
case 'return':
  return fe.markEnd(Rt(), o);
case 'switch':
  return fe.markEnd(Lt(), o);
case 'throw':
  return fe.markEnd(zt(), o);
case 'try':
  return fe.markEnd(Gt(), o);
case 'var':
  return fe.markEnd(St(), o);
case 'while':
  return fe.markEnd(Et(), o);
case 'with':
  return fe.markEnd(Dt(), o)
}
return e = vt(),
e.type === ne.Identifier && W(':') ? (I(), r = '$' + e.name, Object.prototype.hasOwnProperty.call(me.labelSet, r) && N({
}, oe.Redeclaration, 'Label', e.name), me.labelSet[r] = !0, n = Bt(), delete me.labelSet[r], fe.markEnd(fe.createLabeledStatement(e, n), o))  : ($(), fe.markEnd(fe.createExpressionStatement(e), o))
}
function qt() {
var t,
e = [
],
n,
r,
o,
i,
a,
s,
u,
c;
for (c = de, V('{'); ce < he && de.type === Zt.StringLiteral && (n = de, t = Xt(), e.push(t), t.expression.type === ne.Literal); ) r = se.slice(n.start + 1, n.end - 1),
'use strict' === r ? (ue = !0, o && B(o, oe.StrictOctalLiteral))  : !o && n.octal && (o = n);
for (i = me.labelSet, a = me.inIteration, s = me.inSwitch, u = me.inFunctionBody, me.labelSet = {
}, me.inIteration = !1, me.inSwitch = !1, me.inFunctionBody = !0; ce < he && !W('}') && void 0 !== (t = Xt()); ) e.push(t);
return V('}'),
me.labelSet = i,
me.inIteration = a,
me.inSwitch = s,
me.inFunctionBody = u,
fe.markEnd(fe.createBlockStatement(e), c)
}
function Vt(t) {
var e,
n = [
],
r,
o,
i,
a,
s;
if (V('('), !W(')')) for (i = {
}; ce < he && (r = de, e = bt(), a = '$' + r.value, ue ? (p(r.value) && (o = r, s = oe.StrictParamName), Object.prototype.hasOwnProperty.call(i, a) && (o = r, s = oe.StrictParamDupe))  : t || (p(r.value) ? (t = r, s = oe.StrictParamName)  : l(r.value) ? (t = r, s = oe.StrictReservedWord)  : Object.prototype.hasOwnProperty.call(i, a) && (t = r, s = oe.StrictParamDupe)), n.push(e), i[a] = !0, !W(')')); ) V(',');
return V(')'),
{
params: n,
stricted: o,
firstRestricted: t,
message: s
}
}
function Ht() {
var t,
e = [
],
n,
r,
o,
i,
a,
s,
u,
c;
return c = de,
H('function'),
r = de,
t = bt(),
ue ? p(r.value) && B(r, oe.StrictFunctionName)  : p(r.value) ? (a = r, s = oe.StrictFunctionName)  : l(r.value) && (a = r, s = oe.StrictReservedWord),
i = Vt(a),
e = i.params,
o = i.stricted,
a = i.firstRestricted,
i.message && (s = i.message),
u = ue,
n = qt(),
ue && a && N(a, s),
ue && o && B(o, s),
ue = u,
fe.markEnd(fe.createFunctionDeclaration(t, e, [
], n), c)
}
function Wt() {
var t,
e = null,
n,
r,
o,
i,
a = [
],
s,
u,
c;
return c = de,
H('function'),
W('(') || (t = de, e = bt(), ue ? p(t.value) && B(t, oe.StrictFunctionName)  : p(t.value) ? (r = t, o = oe.StrictFunctionName)  : l(t.value) && (r = t, o = oe.StrictReservedWord)),
i = Vt(r),
a = i.params,
n = i.stricted,
r = i.firstRestricted,
i.message && (o = i.message),
u = ue,
s = qt(),
ue && r && N(r, o),
ue && n && B(n, o),
ue = u,
fe.markEnd(fe.createFunctionExpression(e, a, [
], s), c)
}
function Xt() {
if (de.type === Zt.Keyword) switch (de.value) {
case 'const' :
case 'let' :
return Tt(de.value);
case 'function':
return Ht();
default:
return Bt()
}
if (de.type !== Zt.EOF) return Bt()
}
function Yt() {
for (var t, e = [
], n, r, o; ce < he && (n = de, n.type === Zt.StringLiteral) && (t = Xt(), e.push(t), t.expression.type === ne.Literal); ) r = se.slice(n.start + 1, n.end - 1),
'use strict' === r ? (ue = !0, o && B(o, oe.StrictOctalLiteral))  : !o && n.octal && (o = n);
for (; ce < he && void 0 !== (t = Xt()); ) e.push(t);
return e
}
function $t() {
var t,
e;
return y(),
L(),
e = de,
ue = !1,
t = Yt(),
fe.markEnd(fe.createProgram(t), e)
}
function Kt() {
var t,
e,
n,
r = [
];
for (t = 0; t < ye.tokens.length; ++t) e = ye.tokens[t],
n = {
type: e.type,
value: e.value
},
ye.range && (n.range = e.range),
ye.loc && (n.loc = e.loc),
r.push(n);
ye.tokens = r
}
function Jt(t, e) {
var n,
r,
o;
n = String,
'string' == typeof t || t instanceof String || (t = n(t)),
fe = ae,
se = t,
ce = 0,
le = se.length > 0 ? 1 : 0,
pe = 0,
he = se.length,
de = null,
me = {
allowIn: !0,
labelSet: {
},
inFunctionBody: !1,
inIteration: !1,
inSwitch: !1,
lastCommentStart: - 1
},
ye = {
},
e = e || {
},
e.tokens = !0,
ye.tokens = [
],
ye.tokenize = !0,
ye.openParenToken = - 1,
ye.openCurlyToken = - 1,
ye.range = 'boolean' == typeof e.range && e.range,
ye.loc = 'boolean' == typeof e.loc && e.loc,
'boolean' == typeof e.comment && e.comment && (ye.comments = [
]),
'boolean' == typeof e.tolerant && e.tolerant && (ye.errors = [
]);
try {
if (L(), de.type === Zt.EOF) return ye.tokens;
for (r = I(); de.type !== Zt.EOF; ) try {
r = I()
} catch (t) {
if (r = de, ye.errors) {
ye.errors.push(t);
break
}
throw t
}
Kt(),
o = ye.tokens,
void 0 !== ye.comments && (o.comments = ye.comments),
void 0 !== ye.errors && (o.errors = ye.errors)
} catch (t) {
throw t
} finally {
ye = {
}
}
return o
}
function Qt(t, e) {
var n,
r;
r = String,
'string' == typeof t || t instanceof String || (t = r(t)),
fe = ae,
se = t,
ce = 0,
le = se.length > 0 ? 1 : 0,
pe = 0,
he = se.length,
de = null,
me = {
allowIn: !0,
labelSet: {
},
inFunctionBody: !1,
inIteration: !1,
inSwitch: !1,
lastCommentStart: - 1
},
ye = {
},
void 0 !== e && (ye.range = 'boolean' == typeof e.range && e.range, ye.loc = 'boolean' == typeof e.loc && e.loc, ye.attachComment = 'boolean' == typeof e.attachComment && e.attachComment, ye.loc && null !== e.source && void 0 !== e.source && (ye.source = r(e.source)), 'boolean' == typeof e.tokens && e.tokens && (ye.tokens = [
]), 'boolean' == typeof e.comment && e.comment && (ye.comments = [
]), 'boolean' == typeof e.tolerant && e.tolerant && (ye.errors = [
]), ye.attachComment && (ye.range = !0, ye.comments = [
], ye.bottomRightStack = [
], ye.trailingComments = [
], ye.leadingComments = [
]));
try {
n = $t(),
void 0 !== ye.comments && (n.comments = ye.comments),
void 0 !== ye.tokens && (Kt(), n.tokens = ye.tokens),
void 0 !== ye.errors && (n.errors = ye.errors)
} catch (t) {
throw t
} finally {
ye = {
}
}
return n
}
var Zt,
te,
ee,
ne,
re,
oe,
ie,
ae,
se,
ue,
ce,
le,
pe,
he,
fe,
de,
me,
ye;
Zt = {
BooleanLiteral: 1,
EOF: 2,
Identifier: 3,
Keyword: 4,
NullLiteral: 5,
NumericLiteral: 6,
Punctuator: 7,
StringLiteral: 8,
RegularExpression: 9
},
te = {
},
te[Zt.BooleanLiteral] = 'Boolean',
te[Zt.EOF] = '<end>',
te[Zt.Identifier] = 'Identifier',
te[Zt.Keyword] = 'Keyword',
te[Zt.NullLiteral] = 'Null',
te[Zt.NumericLiteral] = 'Numeric',
te[Zt.Punctuator] = 'Punctuator',
te[Zt.StringLiteral] = 'String',
te[Zt.RegularExpression] = 'RegularExpression',
ee = [
'(',
'{',
'[',
'in',
'typeof',
'instanceof',
'new',
'return',
'case',
'delete',
'throw',
'void',
'=',
'+=',
'-=',
'*=',
'/=',
'%=',
'<<=',
'>>=',
'>>>=',
'&=',
'|=',
'^=',
',',
'+',
'-',
'*',
'/',
'%',
'++',
'--',
'<<',
'>>',
'>>>',
'&',
'|',
'^',
'!',
'~',
'&&',
'||',
'?',
':',
'===',
'==',
'>=',
'<=',
'<',
'>',
'!=',
'!=='
],
ne = {
AssignmentExpression: 'AssignmentExpression',
ArrayExpression: 'ArrayExpression',
BlockStatement: 'BlockStatement',
BinaryExpression: 'BinaryExpression',
BreakStatement: 'BreakStatement',
CallExpression: 'CallExpression',
CatchClause: 'CatchClause',
ConditionalExpression: 'ConditionalExpression',
ContinueStatement: 'ContinueStatement',
DoWhileStatement: 'DoWhileStatement',
DebuggerStatement: 'DebuggerStatement',
EmptyStatement: 'EmptyStatement',
ExpressionStatement: 'ExpressionStatement',
ForStatement: 'ForStatement',
ForInStatement: 'ForInStatement',
FunctionDeclaration: 'FunctionDeclaration',
FunctionExpression: 'FunctionExpression',
Identifier: 'Identifier',
IfStatement: 'IfStatement',
Literal: 'Literal',
LabeledStatement: 'LabeledStatement',
LogicalExpression: 'LogicalExpression',
MemberExpression: 'MemberExpression',
NewExpression: 'NewExpression',
ObjectExpression: 'ObjectExpression',
Program: 'Program',
Property: 'Property',
ReturnStatement: 'ReturnStatement',
SequenceExpression: 'SequenceExpression',
SwitchStatement: 'SwitchStatement',
SwitchCase: 'SwitchCase',
ThisExpression: 'ThisExpression',
ThrowStatement: 'ThrowStatement',
TryStatement: 'TryStatement',
UnaryExpression: 'UnaryExpression',
UpdateExpression: 'UpdateExpression',
VariableDeclaration: 'VariableDeclaration',
VariableDeclarator: 'VariableDeclarator',
WhileStatement: 'WhileStatement',
WithStatement: 'WithStatement'
},
re = {
Data: 1,
Get: 2,
Set: 4
},
oe = {
UnexpectedToken: 'Unexpected token %0',
UnexpectedNumber: 'Unexpected number',
UnexpectedString: 'Unexpected string',
UnexpectedIdentifier: 'Unexpected identifier',
UnexpectedReserved: 'Unexpected reserved word',
UnexpectedEOS: 'Unexpected end of input',
NewlineAfterThrow: 'Illegal newline after throw',
InvalidRegExp: 'Invalid regular expression',
UnterminatedRegExp: 'Invalid regular expression: missing /',
InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
InvalidLHSInForIn: 'Invalid left-hand side in for-in',
MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
NoCatchOrFinally: 'Missing catch or finally after try',
UnknownLabel: 'Undefined label \'%0\'',
Redeclaration: '%0 \'%1\' has already been declared',
IllegalContinue: 'Illegal continue statement',
IllegalBreak: 'Illegal break statement',
IllegalReturn: 'Illegal return statement',
StrictModeWith: 'Strict mode code may not include a with statement',
StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
StrictVarName: 'Variable name may not be eval or arguments in strict mode',
StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
StrictDelete: 'Delete of an unqualified identifier in strict mode.',
StrictDuplicateProperty: 'Duplicate data property in object literal not allowed in strict mode',
AccessorDataProperty: 'Object literal may not have data and accessor property with the same name',
AccessorGetSet: 'Object literal may not have multiple get/set accessors with the same name',
StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
StrictReservedWord: 'Use of future reserved word in strict mode'
},
ie = {
NonAsciiIdentifierStart: new RegExp('[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]'),
NonAsciiIdentifierPart: new RegExp('[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]')
},
ae = {
name: 'SyntaxTree',
processComment: function (t) {
var e,
n;
if (!(t.type === ne.Program && t.body.length > 0)) {
for (ye.trailingComments.length > 0 ? ye.trailingComments[0].range[0] >= t.range[1] ? (n = ye.trailingComments, ye.trailingComments = [
])  : ye.trailingComments.length = 0 : ye.bottomRightStack.length > 0 && ye.bottomRightStack[ye.bottomRightStack.length - 1].trailingComments && ye.bottomRightStack[ye.bottomRightStack.length - 1].trailingComments[0].range[0] >= t.range[1] && (n = ye.bottomRightStack[ye.bottomRightStack.length - 1].trailingComments, delete ye.bottomRightStack[ye.bottomRightStack.length - 1].trailingComments); ye.bottomRightStack.length > 0 && ye.bottomRightStack[ye.bottomRightStack.length - 1].range[0] >= t.range[0]; ) e = ye.bottomRightStack.pop();
e ? e.leadingComments && e.leadingComments[e.leadingComments.length - 1].range[1] <= t.range[0] && (t.leadingComments = e.leadingComments, delete e.leadingComments)  : ye.leadingComments.length > 0 && ye.leadingComments[ye.leadingComments.length - 1].range[1] <= t.range[0] && (t.leadingComments = ye.leadingComments, ye.leadingComments = [
]),
n && (t.trailingComments = n),
ye.bottomRightStack.push(t)
}
},
markEnd: function (t, e) {
return ye.range && (t.range = [
e.start,
ce
]),
ye.loc && (t.loc = new U(void 0 === e.startLineNumber ? e.lineNumber : e.startLineNumber, e.start - (void 0 === e.startLineStart ? e.lineStart : e.startLineStart), le, ce - pe), this.postProcess(t)),
ye.attachComment && this.processComment(t),
t
},
postProcess: function (t) {
return ye.source && (t.loc.source = ye.source),
t
},
createArrayExpression: function (t) {
return {
type: ne.ArrayExpression,
elements: t
}
},
createAssignmentExpression: function (t, e, n) {
return {
type: ne.AssignmentExpression,
operator: t,
left: e,
right: n
}
},
createBinaryExpression: function (t, e, n) {
return {
type: '||' === t || '&&' === t ? ne.LogicalExpression : ne.BinaryExpression,
operator: t,
left: e,
right: n
}
},
createBlockStatement: function (t) {
return {
type: ne.BlockStatement,
body: t
}
},
createBreakStatement: function (t) {
return {
type: ne.BreakStatement,
label: t
}
},
createCallExpression: function (t, e) {
return {
type: ne.CallExpression,
callee: t,
arguments: e
}
},
createCatchClause: function (t, e) {
return {
type: ne.CatchClause,
param: t,
body: e
}
},
createConditionalExpression: function (t, e, n) {
return {
type: ne.ConditionalExpression,
test: t,
consequent: e,
alternate: n
}
},
createContinueStatement: function (t) {
return {
type: ne.ContinueStatement,
label: t
}
},
createDebuggerStatement: function () {
return {
type: ne.DebuggerStatement
}
},
createDoWhileStatement: function (t, e) {
return {
type: ne.DoWhileStatement,
body: t,
test: e
}
},
createEmptyStatement: function () {
return {
type: ne.EmptyStatement
}
},
createExpressionStatement: function (t) {
return {
type: ne.ExpressionStatement,
expression: t
}
},
createForStatement: function (t, e, n, r) {
return {
type: ne.ForStatement,
init: t,
test: e,
update: n,
body: r
}
},
createForInStatement: function (t, e, n) {
return {
type: ne.ForInStatement,
left: t,
right: e,
body: n,
each: !1
}
},
createFunctionDeclaration: function (t, e, n, r) {
return {
type: ne.FunctionDeclaration,
id: t,
params: e,
defaults: n,
body: r,
rest: null,
generator: !1,
expression: !1
}
},
createFunctionExpression: function (t, e, n, r) {
return {
type: ne.FunctionExpression,
id: t,
params: e,
defaults: n,
body: r,
rest: null,
generator: !1,
expression: !1
}
},
createIdentifier: function (t) {
return {
type: ne.Identifier,
name: t
}
},
createIfStatement: function (t, e, n) {
return {
type: ne.IfStatement,
test: t,
consequent: e,
alternate: n
}
},
createLabeledStatement: function (t, e) {
return {
type: ne.LabeledStatement,
label: t,
body: e
}
},
createLiteral: function (t) {
return {
type: ne.Literal,
value: t.value,
raw: se.slice(t.start, t.end)
}
},
createMemberExpression: function (t, e, n) {
return {
type: ne.MemberExpression,
computed: '[' === t,
object: e,
property: n
}
},
createNewExpression: function (t, e) {
return {
type: ne.NewExpression,
callee: t,
arguments: e
}
},
createObjectExpression: function (t) {
return {
type: ne.ObjectExpression,
properties: t
}
},
createPostfixExpression: function (t, e) {
return {
type: ne.UpdateExpression,
operator: t,
argument: e,
prefix: !1
}
},
createProgram: function (t) {
return {
type: ne.Program,
body: t
}
},
createProperty: function (t, e, n) {
return {
type: ne.Property,
key: e,
value: n,
kind: t
}
},
createReturnStatement: function (t) {
return {
type: ne.ReturnStatement,
argument: t
}
},
createSequenceExpression: function (t) {
return {
type: ne.SequenceExpression,
expressions: t
}
},
createSwitchCase: function (t, e) {
return {
type: ne.SwitchCase,
test: t,
consequent: e
}
},
createSwitchStatement: function (t, e) {
return {
type: ne.SwitchStatement,
discriminant: t,
cases: e
}
},
createThisExpression: function () {
return {
type: ne.ThisExpression
}
},
createThrowStatement: function (t) {
return {
type: ne.ThrowStatement,
argument: t
}
},
createTryStatement: function (t, e, n, r) {
return {
type: ne.TryStatement,
block: t,
guardedHandlers: e,
handlers: n,
finalizer: r
}
},
createUnaryExpression: function (t, e) {
return '++' === t || '--' === t ? {
type: ne.UpdateExpression,
operator: t,
argument: e,
prefix: !0
}
 : {
type: ne.UnaryExpression,
operator: t,
argument: e,
prefix: !0
}
},
createVariableDeclaration: function (t, e) {
return {
type: ne.VariableDeclaration,
declarations: t,
kind: e
}
},
createVariableDeclarator: function (t, e) {
return {
type: ne.VariableDeclarator,
id: t,
init: e
}
},
createWhileStatement: function (t, e) {
return {
type: ne.WhileStatement,
test: t,
body: e
}
},
createWithStatement: function (t, e) {
return {
type: ne.WithStatement,
object: t,
body: e
}
}
},
t.version = '1.2.5',
t.tokenize = Jt,
t.parse = Qt,
t.Syntax = function () {
var t,
e = {
};
'function' == typeof Object.create && (e = Object.create(null));
for (t in ne) ne.hasOwnProperty(t) && (e[t] = ne[t]);
return 'function' == typeof Object.freeze && Object.freeze(e),
e
}()
})
},
function (t, e, n) {
function r(t, e, n) {
return t && t.length ? (e = n || void 0 === e ? 1 : i(e), o(t, 0, e < 0 ? 0 : e))  : [
]
}
var o = n(421),
i = n(149);
t.exports = r
},
function (t, e) {
function n(t, e, n) {
var r = - 1,
o = t.length;
e < 0 && (e = - e > o ? 0 : o + e),
n = n > o ? o : n,
n < 0 && (n += o),
o = e > n ? 0 : n - e >>> 0,
e >>>= 0;
for (var i = Array(o); ++r < o; ) i[r] = t[r + e];
return i
}
t.exports = n
},
function (t, e) {
function n(t, e) {
for (var n, r = - 1, o = t.length; ++r < o; ) {
var i = e(t[r]);
void 0 !== i && (n = void 0 === n ? i : n + i)
}
return n
}
t.exports = n
},
function (t, e, n) {
'use strict';
function r(t) {
return 'r' === t ? [
1,
0
] : [
0,
1
]
}
function o(t, e) {
return 'native' === e[1] ? [
t,
'd0=',
t,
'.length,',
t,
'd1=',
t,
'[0].length,'
].join('')  : [
t,
'd0=',
t,
'.shape[0],',
t,
'd1=',
t,
'.shape[1],',
t,
's0=',
t,
'.stride[0],',
t,
's1=',
t,
'.stride[1],',
t,
'o=',
t,
'.offset,',
t,
'd=',
t,
'.data,'
].join('')
}
function i(t, e, n, r, o, i) {
var a = [
];
return 'native' === n[1] ? t[0] && (r ? a.push('var ', e, 'p=', e, '[', r, '];')  : a.push('var ', e, 'p=', e, '[0];'))  : r && o ? i ? a.push('var ', e, 't0=', e, 's', t[0], ',', e, 't1=', e, 's', t[1], '-', e, 's', t[0], '*', i, ',', e, 'p=', e, 'o+', r, '*', e, 's0+', o, '*', e, 's1;')  : a.push('var ', e, 't0=', e, 's', t[0], ',', e, 'p=', e, 'o+', r, '*', e, 's0+', o, '*', e, 's1;')  : r ? a.push('var ', e, 't0=', e, 's', t[0], ',', e, 'p=', e, 'o+', r, '*', e, 's0;')  : o ? a.push('var ', e, 't0=', e, 's', t[0], ',', e, 'p=', e, 'o+', o, '*', e, 's1;')  : a.push('var ', e, 't0=', e, 's', t[0], ',', e, 't1=', e, 's', t[1], '-', e, 's', t[0], '*', e, 'd', t[0], ',', e, 'p=', e, 'o;'),
a
}
function a(t, e, n, r, o) {
var i = [
];
return 'native' === n[1] ? t[0] && 1 === r && i.push(e, 'p=', e, '[', o, '+1]')  : i.push(e, 'p+=', e, 't', r, ';'),
i
}
function s(t, e, n, r, o, i) {
var a = [
];
return 'native' === n[1] ? t[0] ? a.push(e, 'p[', o, ']=', i, ';')  : a.push(e, '[', r, '][', o, ']=', i, ';')  : 'generic' === n[1] ? a.push(e, 'd.set(', e, 'p,', i, ');')  : a.push(e, 'd[', e, 'p]=', i, ';'),
a
}
function u(t, e, n, r, o) {
var i = [
];
return 'native' === n[1] ? t[0] ? i.push(e, 'p[', o, ']')  : i.push(e, '[', r, '][', o, ']')  : 'generic' === n[1] ? i.push(e, 'd.get(', e, 'p)')  : i.push(e, 'd[', e, 'p]'),
i.join('')
}
function c(t, e, n, r, o) {
var c = [
],
l = 'r' === t[0] ? [
1,
0
] : [
0,
1
],
p = [
1,
0
],
h = [
0,
1
],
f = [
'i',
'j'
];
return c.push.apply(c, i(l, 'o', t)),
l[1] ? (c.push('for(j=0;j<od1;++j){'), c.push('for(i=0;i<od0;++i){'))  : (c.push('for(i=0;i<od0;++i){'), c.push('for(j=0;j<od1;++j){')),
c.push.apply(c, i(p, 'a', e, 'i')),
c.push.apply(c, i(h, 'b', n, void 0, 'j')),
c.push('var r=0.0;', 'for(k=0;k<ad1;++k){', 'r+=', u(p, 'a', e, 'i', 'k'), '*', u(h, 'b', n, 'k', 'j'), ';'),
c.push.apply(c, a(p, 'a', e, 0, 'k')),
c.push.apply(c, a(h, 'b', n, 0, 'k')),
c.push('}'),
r && c.push('r*=A;'),
o && c.push('r+=B*', u(l, 'o', t, 'i', 'j'), ';'),
c.push.apply(c, s(l, 'o', t, 'i', 'j', 'r')),
c.push.apply(c, a(l, 'o', t, 0, f[1])),
c.push('}'),
c.push.apply(c, a(l, 'o', t, 1, f[0])),
c.push('}'),
c
}
function l(t, e) {
var n = [
],
r = 'r' === t[0] ? [
1,
0
] : [
0,
1
],
o;
return e && n.push('if(B!==1.0){'),
n.push.apply(n, i(r, 'o', t)),
r[0] ? (n.push('for(i=0;i<od0;++i){for(j=0;j<od1;++j){'), o = [
'i',
'j'
])  : (n.push('for(j=0;j<od1;++j){for(i=0;i<od0;++i){'), o = [
'j',
'i'
]),
e ? n.push.apply(n, s(r, 'o', t, 'i', 'j', 'B*' + u(r, 'o', t, 'i', 'j')))  : n.push.apply(n, s(r, 'o', t, 'i', 'j', '0')),
n.push.apply(n, a(r, 'o', t, 0, o[1])),
n.push('}'),
n.push.apply(n, a(r, 'o', t, 1, o[0])),
n.push('}'),
e && n.push('}'),
n
}
function p(t, e, n, r, o) {
var c = [
],
p = [
'od0',
'od1',
'ad1'
],
h = [
1,
0
],
d = [
1,
0
],
m = [
0,
1
];
c.push.apply(c, l(t, o));
for (var y = 0; y < 3; ++y) c.push('for(var i', y, '=', p[y], ';i', y, '>0;){', 'var w', y, '=', f, ';', 'if(i', y, '<', f, '){', 'w', y, '=i', y, ';', 'i', y, '=0;', '}else{', 'i', y, '-=', f, ';', '}');
c.push.apply(c, i(h, 'o', t, 'i0', 'i1', 'w1')),
c.push('for(i=0;i<w0;++i){for(j=0;j<w1;++j){var r=0.0;'),
c.push.apply(c, i(d, 'a', e, '(i0+i)', 'i2')),
c.push.apply(c, i(m, 'b', n, 'i2', '(i1+j)')),
c.push('for(k=0;k<w2;++k){'),
c.push('r+=', u(d, 'a', e, '(i0+i)', '(i2+k)'), '*', u(m, 'b', n, '(i2+k)', '(i1+j)'), ';'),
c.push.apply(c, a(d, 'a', e, 0, '(i2+k)')),
c.push.apply(c, a(m, 'b', n, 0, '(i2+k)')),
c.push('}');
var v = 'r';
return r && (v = 'A*r'),
c.push.apply(c, s(h, 'o', t, '(i0+i)', '(i1+j)', v + '+' + u(h, 'o', t, '(i0+i)', '(i1+j)'))),
c.push.apply(c, a(h, 'o', t, 0, '(i1+j)')),
c.push('}'),
c.push.apply(c, a(h, 'o', t, 1, '(i0+i)')),
c.push('}}}}'),
c
}
function h(t, e, n, r, i) {
var a = [
'gemm',
t[0],
t[1],
'a',
e[0],
e[1],
'b',
n[0],
n[1],
r ? 'alpha' : '',
i ? 'beta' : ''
].join(''),
s = [
'function ',
a,
'(o,a,b,A,B){',
'var ',
o('o', t),
o('a', e),
o('b', n),
'i,j,k;'
];
return 'r' === e[0] && 'c' === n[0] ? s.push.apply(s, c(t, e, n, r, i))  : s.push.apply(s, p(t, e, n, r, i)),
s.push('}return ', a),
new Function(s.join('')) ()
}
t.exports = h;
var f = 32
},
function (t, e, n) {
'use strict';
function r(t, e, n, r, i) {
for (var a = o.dot, s = e.shape[0] - 1; s >= 0; s--) i.set(s, i.get(s) * r + t * a(e.pick(s, null), n));
return !0
}
var o = n(78);
t.exports = r
},
function (t, e, n) {
'use strict';
t.exports = function t(e, n) {
var r,
o,
i = e.data,
a = n.data,
s = e.stride[0],
u = n.stride[0],
c = e.offset,
l = n.offset;
for (r = e.shape[0] - 1; r >= 0; r--, c += s, l += u) o = i[c],
i[c] = a[l],
a[l] = o
}
},
function (t, e, n) {
'use strict';
t.exports = function t(e, n) {
var r,
o = n.data,
i = n.stride[0],
a = n.offset;
for (r = n.shape[0] - 1; r >= 0; r--, a += i) o[a] *= e
}
},
function (t, e, n) {
'use strict';
t.exports = function t(e, n) {
var r,
o = e.data,
i = n.data,
a = e.stride[0],
s = n.stride[0],
u = e.offset,
c = n.offset;
for (r = e.shape[0] - 1; r >= 0; r--, u += a, c += s) i[c] = o[u]
}
},
function (t, e, n) {
'use strict';
t.exports = function t(e, n, r) {
var o,
i = n.data,
a = r.data,
s = n.stride[0],
u = r.stride[0],
c = n.offset,
l = r.offset;
for (o = n.shape[0] - 1; o >= 0; o--, c += s, l += u) a[l] += e * i[c]
}
},
function (t, e, n) {
'use strict';
t.exports = function t(e, n) {
var r,
o,
i = e.data,
a = e.stride[0],
s = e.offset,
u = 0;
if (e === n) for (r = e.shape[0] - 1; r >= 0; r--, s += a) o = i[s],
u += o * o;
 else {
var c = n.data,
l = n.stride[0],
p = n.offset;
for (r = e.shape[0] - 1; r >= 0; r--, s += a, p += l) u += c[p] * i[s]
}
return u
}
},
function (t, e, n) {
'use strict';
t.exports = function t(e, n, r) {
var o,
i = n.data,
a = r.data,
s = n.stride[0],
u = r.stride[0],
c = n.offset,
l = r.offset;
for (o = n.shape[0] - 1; o >= 0; o--, c += s, l += u) a[l] = e * i[c]
}
},
function (t, e, n) {
'use strict';
var r = function t(e, n) {
if (0 === e && 0 === n) return 0;
var r = Math.abs(e),
o = Math.abs(n),
i = Math.min(r, o),
a = Math.max(r, o);
return i /= a,
a * Math.sqrt(1 + i * i)
};
t.exports = function t(e) {
var n,
o,
i = e.data,
a = e.stride[0],
s = e.offset,
u = 0;
for (n = e.shape[0] - 1; n >= 0; n--, s += a) o = i[s],
u = r(u, o);
return u
}
},
function (t, e, n) {
'use strict';
t.exports = function t(e) {
var n,
r = e.data,
o = e.stride[0],
i = e.offset,
a = 0;
for (n = e.shape[0] - 1; n >= 0; n--, i += o) a += Math.abs(r[i]);
return a
}
},
function (t, e, n) {
'use strict';
t.exports = function t(e) {
var n,
r,
o,
i = - 1 / 0,
a = e.data,
s = e.stride[0],
u = e.offset,
c = e.shape[0];
for (n = 0; n < c; n++, u += s) (r = Math.abs(a[u])) > i && (i = r, o = n);
return o
}
},
function (t, e, n) {
'use strict';
Math.sign = Math.sign || function (t) {
return t = + t,
0 === t || isNaN(t) ? t : t > 0 ? 1 : - 1
},
t.exports = function t(e, n, r) {
var o = 0,
i = 0,
a = 0,
s = 0,
u = 0;
if (0 === n ? (o = Math.sign(e), i = 0, a = Math.abs(e))  : 0 === e ? (o = 0, i = Math.sign(n), a = Math.abs(n))  : Math.abs(e) > Math.abs(n) ? (s = n / e, u = Math.sign(e) * Math.sqrt(1 + s * s), o = 1 / u, i = s * o, a = e * u)  : (s = e / n, u = Math.sign(e) * Math.sqrt(1 + s * s), i = 1 / u, o = s * i, a = n * u), !(void 0 !== r && r.length > 2)) return [o,
i,
a];
r[0] = o,
r[1] = i,
r[2] = a
}
},
function (t, e, n) {
'use strict';
function r(t, e, n, r, o, i, a) {
for (var s = 0, u = 0, c = 0, l = 0, p = 0, h = t.shape[0], f = t.shape[1], d = Math.min(e, h - 1), m = Math.min(n, f - 1), y = void 0 === i ? 1 : i, v = void 0 === a ? 0 : a; s <= d; ) {
l = 0;
var g = Math.min(s + m, f - 1);
for (c = 0; c <= g; c++) l += t.get(s, c) * r.get(c);
o.set(s, l * y + v * o.get(s)),
s++
}
if (s < h) for (u = 0; s + m < f; ) {
for (l = 0, c = 0; c <= d + m; c++) p = u + c + 1,
l += t.get(s, p) * r.get(p);
if (o.set(s, l * y + v * o.get(s)), s++, u++, s === h) break
}
if (s < h) for (u++; s - d < f; ) {
for (l = 0, c = u; c < f; c++) l += t.get(s, c) * r.get(c);
if (o.set(s, l * y + v * o.get(s)), s++, u++, s === h) break
}
return !0
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r(t, e, n, r, i, a) {
var s = t.shape[0],
u = r || !0,
c = void 0 === i ? 1 : i,
l = void 0 === a ? 0 : a,
p = 0,
h = 0,
f = 0,
d = 0;
if (0 === l) for (p = 0; p < n.shape[0]; ++p) n.set(p, 0);
 else 1 !== l && o.scal(l, n);
if (0 === c) return !0;
if (1 === c) if (u) for (h = 0; h < s; ++h) {
for (f = e.get(h), d = 0, n.set(h, n.get(h) + f * t.get(h, h)), p = h + 1; p < s; ++p) n.set(p, n.get(p) + f * t.get(p, h)),
d += t.get(p, h) * e.get(p);
n.set(h, n.get(h) + d)
} else for (h = 0; h < s; ++h) {
for (f = e.get(h), d = 0, p = 0; p <= h - 1; ++p) n.set(p, n.get(p) + f * t.get(p, h)),
d += t.get(p, h) * e.get(p);
n.set(h, n.get(h) + f * t.get(h, h) + d)
} else if (u) for (h = 0; h < s; ++h) {
for (f = c * e.get(h), d = 0, n.set(h, n.get(h) + f * t.get(h, h)), p = h + 1; p < s; ++p) n.set(p, n.get(p) + f * t.get(p, h)),
d += t.get(p, h) * e.get(p);
n.set(h, n.get(h) + c * d)
} else for (h = 0; h < s; ++h) {
for (f = c * e.get(h), d = 0, p = 0; p <= h - 1; ++p) n.set(p, n.get(p) + f * t.get(p, h)),
d += t.get(p, h) * e.get(p);
n.set(h, n.get(h) + f * t.get(h, h) + c * d)
}
return !0
}
var o = n(78);
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
console.error('SBMV (symmetric banded matrix vector multiply) not yet implemented')
}
t.exports = r
},
function (t, e, n) {
'use strict';
(function (t) {
function e() {
console.error('SPMV (symmetric packed matrix vector multiply) not yet implemented')
}
t.exporst = e
}).call(e, n(66) (t))
},
function (t, e, n) {
'use strict';
function r(t, e, n) {
var r = o.dot,
i = t.shape[1],
a = 0;
if (n) for (a = i - 1; a >= 0; a--) e.set(a, r(t.pick(a, null).hi(a + 1), e.hi(a + 1)));
 else for (a = 0; a < i; a++) e.set(a, r(t.pick(a, null).lo(a), e.lo(a)));
return !0
}
var o = n(78);
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
console.error('TBMV (triangular banded matrix vector multiply) not yet implemented')
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r(t, e, n) {
var r = o.dot,
i = t.shape[1],
a = 0;
if (n) for (e.set(0, e.get(0) / t.get(0, 0)), a = 1; a < i; a++) e.set(a, (e.get(a) - r(t.pick(a, null).hi(a), e.hi(a))) / t.get(a, a));
 else for (e.set(i - 1, e.get(i - 1) / t.get(i - 1, i - 1)), a = i - 2; a >= 0; a--) e.set(a, (e.get(a) - r(t.pick(a, null).lo(a + 1), e.lo(a + 1))) / t.get(a, a));
return !0
}
var o = n(78);
t.exports = r
},
function (t, e, n) {
'use strict';
(function (t) {
function e() {
console.error('TBSV (triangular banded matrix solver) not yet implemented')
}
t.exporst = e
}).call(e, n(66) (t))
},
function (t, e, n) {
'use strict';
function r() {
console.error('TPSV (triangular packed matrix solver) not yet implemented')
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
console.error('GER (rank 1 operation A := alpha*x*y\' + A) not yet implemented')
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
console.error('SYR (symmetric rank 1 operation A := alpha*x*y\' + A) not yet implemented')
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
console.error('SPR (symmetric packed rank 1 operation A := alpha*x*y\' + A) not yet implemented')
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
console.error('SYR (symmetric rank 2 operation A := alpha*x*y\' + alpha*y*x\' + A) not yet implemented')
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
console.error('SPR (symmetric packed rank 2 operation A := alpha*x*y\' + alpha*y*x\' + A) not yet implemented')
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r() {
var t,
e,
n,
r;
if (2 === arguments.length ? (e = arguments[0], r = arguments[1])  : 3 === arguments.length && (n = arguments[0], e = arguments[1], r = arguments[2]), !Array.isArray(r)) throw new Error('second argument of tile must be an array of repetition counts for each dimension');
var a = e.shape.slice(0),
s = a.slice(0),
u = Math.max(s.length, r.length);
for (t = 0; t < u; t++) if (a[t] = void 0 === a[t] ? 1 : a[t], r[t] = void 0 === r[t] ? 1 : r[t], s[t] = (void 0 === s[t] ? 1 : s[t]) * r[t], 0 === s[t]) throw new Error('Number of tiles must be greater than zero');
n || (n = o.zeros(s, e.dtype));
var c = 1;
for (t = 0; t < r.length; t++) c *= r[t];
var l = new Array(r.length);
for (t = 0; t < r.length; t++) l[t] = 0;
var p = s.slice(0);
for (f = 0; f < s.length; f++) p[f] = f < e.dimension ? null : 0;
for (t = 0; t < c; t++) {
for (f = e.dimension; f < s.length; f++) p[f] = l[f];
var h = n.pick.apply(n, p);
if (h = h.lo.apply(h, l), h = h.hi.apply(h, e.shape), i.assign(h, e), t === c - 1) break;
for (var f = u - 1; f >= 0 && (l[f] += a[f], l[f] === s[f]); ) l[f] = 0,
f--
}
return n
}
var o = n(165),
i = n(1);
t.exports = r
},
function (t, e, n) {
'use strict';
(function (t, r) {
function o(t) {
if (t) {
var e = t.length || t.byteLength,
n = g.log2(e);
w[n].push(t)
}
}
function i(t) {
o(t.buffer)
}
function a(t) {
var t = g.nextPow2(t),
e = g.log2(t),
n = w[e];
return n.length > 0 ? n.pop()  : new ArrayBuffer(t)
}
function s(t) {
return new Uint8Array(a(t), 0, t)
}
function u(t) {
return new Uint16Array(a(2 * t), 0, t)
}
function c(t) {
return new Uint32Array(a(4 * t), 0, t)
}
function l(t) {
return new Int8Array(a(t), 0, t)
}
function p(t) {
return new Int16Array(a(2 * t), 0, t)
}
function h(t) {
return new Int32Array(a(4 * t), 0, t)
}
function f(t) {
return new Float32Array(a(4 * t), 0, t)
}
function d(t) {
return new Float64Array(a(8 * t), 0, t)
}
function m(t) {
return b ? new Uint8ClampedArray(a(t), 0, t)  : s(t)
}
function y(t) {
return new DataView(a(t), 0, t)
}
function v(t) {
t = g.nextPow2(t);
var e = g.log2(t),
n = S[e];
return n.length > 0 ? n.pop()  : new r(t)
}
var g = n(455),
_ = n(166);
t.__TYPEDARRAY_POOL || (t.__TYPEDARRAY_POOL = {
UINT8: _([32,
0]),
UINT16: _([32,
0]),
UINT32: _([32,
0]),
INT8: _([32,
0]),
INT16: _([32,
0]),
INT32: _([32,
0]),
FLOAT: _([32,
0]),
DOUBLE: _([32,
0]),
DATA: _([32,
0]),
UINT8C: _([32,
0]),
BUFFER: _([32,
0])
});
var b = 'undefined' != typeof Uint8ClampedArray,
x = t.__TYPEDARRAY_POOL;
x.UINT8C || (x.UINT8C = _([32,
0])),
x.BUFFER || (x.BUFFER = _([32,
0]));
var w = x.DATA,
S = x.BUFFER;
e.free = function t(e) {
if (r.isBuffer(e)) S[g.log2(e.length)].push(e);
 else {
if ('[object ArrayBuffer]' !== Object.prototype.toString.call(e) && (e = e.buffer), !e) return;
var n = e.length || e.byteLength,
o = 0 | g.log2(n);
w[o].push(e)
}
},
e.freeUint8 = e.freeUint16 = e.freeUint32 = e.freeInt8 = e.freeInt16 = e.freeInt32 = e.freeFloat32 = e.freeFloat = e.freeFloat64 = e.freeDouble = e.freeUint8Clamped = e.freeDataView = i,
e.freeArrayBuffer = o,
e.freeBuffer = function t(e) {
S[g.log2(e.length)].push(e)
},
e.malloc = function t(e, n) {
if (void 0 === n || 'arraybuffer' === n) return a(e);
switch (n) {
case 'uint8':
return s(e);
case 'uint16':
return u(e);
case 'uint32':
return c(e);
case 'int8':
return l(e);
case 'int16':
return p(e);
case 'int32':
return h(e);
case 'float':
case 'float32':
return f(e);
case 'double':
case 'float64':
return d(e);
case 'uint8_clamped':
return m(e);
case 'buffer':
return v(e);
case 'data':
case 'dataview':
return y(e);
default:
return null
}
return null
},
e.mallocArrayBuffer = a,
e.mallocUint8 = s,
e.mallocUint16 = u,
e.mallocUint32 = c,
e.mallocInt8 = l,
e.mallocInt16 = p,
e.mallocInt32 = h,
e.mallocFloat32 = e.mallocFloat = f,
e.mallocFloat64 = e.mallocDouble = d,
e.mallocUint8Clamped = m,
e.mallocDataView = y,
e.mallocBuffer = v,
e.clearCache = function t() {
for (var e = 0; e < 32; ++e) x.UINT8[e].length = 0,
x.UINT16[e].length = 0,
x.UINT32[e].length = 0,
x.INT8[e].length = 0,
x.INT16[e].length = 0,
x.INT32[e].length = 0,
x.FLOAT[e].length = 0,
x.DOUBLE[e].length = 0,
x.UINT8C[e].length = 0,
w[e].length = 0,
S[e].length = 0
}
}).call(e, n(30), n(451).Buffer)
},
function (t, e, n) {
'use strict';
(function (t) {
function r() {
try {
var t = new Uint8Array(1);
return t.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function () {
return 42
}
},
42 === t.foo() && 'function' == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
} catch (t) {
return !1
}
}
function o() {
return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
}
function i(t, e) {
if (o() < e) throw new RangeError('Invalid typed array length');
return a.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = a.prototype)  : (null === t && (t = new a(e)), t.length = e),
t
}
function a(t, e, n) {
if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(t, e, n);
if ('number' == typeof t) {
if ('string' == typeof e) throw new Error('If encoding is specified then the first argument must be a string');
return l(this, t)
}
return s(this, t, e, n)
}
function s(t, e, n, r) {
if ('number' == typeof e) throw new TypeError('"value" argument must not be a number');
return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer ? f(t, e, n, r)  : 'string' == typeof e ? p(t, e, n)  : d(t, e)
}
function u(t) {
if ('number' != typeof t) throw new TypeError('"size" argument must be a number');
if (t < 0) throw new RangeError('"size" argument must not be negative')
}
function c(t, e, n, r) {
return u(e),
e <= 0 ? i(t, e)  : void 0 !== n ? 'string' == typeof r ? i(t, e).fill(n, r)  : i(t, e).fill(n)  : i(t, e)
}
function l(t, e) {
if (u(e), t = i(t, e < 0 ? 0 : 0 | m(e)), !a.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
return t
}
function p(t, e, n) {
if ('string' == typeof n && '' !== n || (n = 'utf8'), !a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var r = 0 | v(e, n);
t = i(t, r);
var o = t.write(e, n);
return o !== r && (t = t.slice(0, o)),
t
}
function h(t, e) {
var n = e.length < 0 ? 0 : 0 | m(e.length);
t = i(t, n);
for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
return t
}
function f(t, e, n, r) {
if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError('\'offset\' is out of bounds');
if (e.byteLength < n + (r || 0)) throw new RangeError('\'length\' is out of bounds');
return e = void 0 === n && void 0 === r ? new Uint8Array(e)  : void 0 === r ? new Uint8Array(e, n)  : new Uint8Array(e, n, r),
a.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = a.prototype)  : t = h(t, e),
t
}
function d(t, e) {
if (a.isBuffer(e)) {
var n = 0 | m(e.length);
return t = i(t, n),
0 === t.length ? t : (e.copy(t, 0, 0, n), t)
}
if (e) {
if ('undefined' != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || 'length' in e) return 'number' != typeof e.length || K(e.length) ? i(t, 0)  : h(t, e);
if ('Buffer' === e.type && Z(e.data)) return h(t, e.data)
}
throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}
function m(t) {
if (t >= o()) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + o().toString(16) + ' bytes');
return 0 | t
}
function y(t) {
return + t != t && (t = 0),
a.alloc( + t)
}
function v(t, e) {
if (a.isBuffer(t)) return t.length;
if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
'string' != typeof t && (t = '' + t);
var n = t.length;
if (0 === n) return 0;
for (var r = !1; ; ) switch (e) {
case 'ascii':
case 'latin1':
case 'binary':
return n;
case 'utf8':
case 'utf-8':
case void 0:
return H(t).length;
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return 2 * n;
case 'hex':
return n >>> 1;
case 'base64':
return Y(t).length;
default:
if (r) return H(t).length;
e = ('' + e).toLowerCase(),
r = !0
}
}
function g(t, e, n) {
var r = !1;
if ((void 0 === e || e < 0) && (e = 0), e > this.length) return '';
if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return '';
if (n >>>= 0, e >>>= 0, n <= e) return '';
for (t || (t = 'utf8'); ; ) switch (t) {
case 'hex':
return M(this, e, n);
case 'utf8':
case 'utf-8':
return E(this, e, n);
case 'ascii':
return A(this, e, n);
case 'latin1':
case 'binary':
return F(this, e, n);
case 'base64':
return O(this, e, n);
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return R(this, e, n);
default:
if (r) throw new TypeError('Unknown encoding: ' + t);
t = (t + '').toLowerCase(),
r = !0
}
}
function _(t, e, n) {
var r = t[e];
t[e] = t[n],
t[n] = r
}
function b(t, e, n, r, o) {
if (0 === t.length) return - 1;
if ('string' == typeof n ? (r = n, n = 0)  : n > 2147483647 ? n = 2147483647 : n < - 2147483648 && (n = - 2147483648), n = + n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
if (o) return - 1;
n = t.length - 1
} else if (n < 0) {
if (!o) return - 1;
n = 0
}
if ('string' == typeof e && (e = a.from(e, r)), a.isBuffer(e)) return 0 === e.length ? - 1 : x(t, e, n, r, o);
if ('number' == typeof e) return e &= 255,
a.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n)  : Uint8Array.prototype.lastIndexOf.call(t, e, n)  : x(t, [
e
], n, r, o);
throw new TypeError('val must be string, number or Buffer')
}
function x(t, e, n, r, o) {
function i(t, e) {
return 1 === a ? t[e] : t.readUInt16BE(e * a)
}
var a = 1,
s = t.length,
u = e.length;
if (void 0 !== r && ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
if (t.length < 2 || e.length < 2) return - 1;
a = 2,
s /= 2,
u /= 2,
n /= 2
}
var c;
if (o) {
var l = - 1;
for (c = n; c < s; c++) if (i(t, c) === i(e, - 1 === l ? 0 : c - l)) {
if ( - 1 === l && (l = c), c - l + 1 === u) return l * a
} else - 1 !== l && (c -= c - l),
l = - 1
} else for (n + u > s && (n = s - u), c = n; c >= 0; c--) {
for (var p = !0, h = 0; h < u; h++) if (i(t, c + h) !== i(e, h)) {
p = !1;
break
}
if (p) return c
}
return - 1
}
function w(t, e, n, r) {
n = Number(n) || 0;
var o = t.length - n;
r ? (r = Number(r)) > o && (r = o)  : r = o;
var i = e.length;
if (i % 2 != 0) throw new TypeError('Invalid hex string');
r > i / 2 && (r = i / 2);
for (var a = 0; a < r; ++a) {
var s = parseInt(e.substr(2 * a, 2), 16);
if (isNaN(s)) return a;
t[n + a] = s
}
return a
}
function S(t, e, n, r) {
return $(H(e, t.length - n), t, n, r)
}
function T(t, e, n, r) {
return $(W(e), t, n, r)
}
function P(t, e, n, r) {
return T(t, e, n, r)
}
function C(t, e, n, r) {
return $(Y(e), t, n, r)
}
function k(t, e, n, r) {
return $(X(e, t.length - n), t, n, r)
}
function O(t, e, n) {
return 0 === e && n === t.length ? J.fromByteArray(t)  : J.fromByteArray(t.slice(e, n))
}
function E(t, e, n) {
n = Math.min(t.length, n);
for (var r = [
], o = e; o < n; ) {
var i = t[o],
a = null,
s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
if (o + s <= n) {
var u,
c,
l,
p;
switch (s) {
case 1:
i < 128 && (a = i);
break;
case 2:
u = t[o + 1],
128 == (192 & u) && (p = (31 & i) << 6 | 63 & u) > 127 && (a = p);
break;
case 3:
u = t[o + 1],
c = t[o + 2],
128 == (192 & u) && 128 == (192 & c) && (p = (15 & i) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (p < 55296 || p > 57343) && (a = p);
break;
case 4:
u = t[o + 1],
c = t[o + 2],
l = t[o + 3],
128 == (192 & u) && 128 == (192 & c) && 128 == (192 & l) && (p = (15 & i) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & l) > 65535 && p < 1114112 && (a = p)
}
}
null === a ? (a = 65533, s = 1)  : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a),
r.push(a),
o += s
}
return j(r)
}
function j(t) {
var e = t.length;
if (e <= tt) return String.fromCharCode.apply(String, t);
for (var n = '', r = 0; r < e; ) n += String.fromCharCode.apply(String, t.slice(r, r += tt));
return n
}
function A(t, e, n) {
var r = '';
n = Math.min(t.length, n);
for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
return r
}
function F(t, e, n) {
var r = '';
n = Math.min(t.length, n);
for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
return r
}
function M(t, e, n) {
var r = t.length;
(!e || e < 0) && (e = 0),
(!n || n < 0 || n > r) && (n = r);
for (var o = '', i = e; i < n; ++i) o += V(t[i]);
return o
}
function R(t, e, n) {
for (var r = t.slice(e, n), o = '', i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
return o
}
function D(t, e, n) {
if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
if (t + e > n) throw new RangeError('Trying to access beyond buffer length')
}
function I(t, e, n, r, o, i) {
if (!a.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
if (n + r > t.length) throw new RangeError('Index out of range')
}
function L(t, e, n, r) {
e < 0 && (e = 65535 + e + 1);
for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
}
function z(t, e, n, r) {
e < 0 && (e = 4294967295 + e + 1);
for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
}
function U(t, e, n, r, o, i) {
if (n + r > t.length) throw new RangeError('Index out of range');
if (n < 0) throw new RangeError('Index out of range')
}
function G(t, e, n, r, o) {
return o || U(t, e, n, 4, 3.4028234663852886e+38, - 3.4028234663852886e+38),
Q.write(t, e, n, r, 23, 4),
n + 4
}
function N(t, e, n, r, o) {
return o || U(t, e, n, 8, 1.7976931348623157e+308, - 1.7976931348623157e+308),
Q.write(t, e, n, r, 52, 8),
n + 8
}
function B(t) {
if (t = q(t).replace(et, ''), t.length < 2) return '';
for (; t.length % 4 != 0; ) t += '=';
return t
}
function q(t) {
return t.trim ? t.trim()  : t.replace(/^\s+|\s+$/g, '')
}
function V(t) {
return t < 16 ? '0' + t.toString(16)  : t.toString(16)
}
function H(t, e) {
e = e || 1 / 0;
for (var n, r = t.length, o = null, i = [
], a = 0; a < r; ++a) {
if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
if (!o) {
if (n > 56319) {
(e -= 3) > - 1 && i.push(239, 191, 189);
continue
}
if (a + 1 === r) {
(e -= 3) > - 1 && i.push(239, 191, 189);
continue
}
o = n;
continue
}
if (n < 56320) {
(e -= 3) > - 1 && i.push(239, 191, 189),
o = n;
continue
}
n = 65536 + (o - 55296 << 10 | n - 56320)
} else o && (e -= 3) > - 1 && i.push(239, 191, 189);
if (o = null, n < 128) {
if ((e -= 1) < 0) break;
i.push(n)
} else if (n < 2048) {
if ((e -= 2) < 0) break;
i.push(n >> 6 | 192, 63 & n | 128)
} else if (n < 65536) {
if ((e -= 3) < 0) break;
i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
} else {
if (!(n < 1114112)) throw new Error('Invalid code point');
if ((e -= 4) < 0) break;
i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
}
}
return i
}
function W(t) {
for (var e = [
], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
return e
}
function X(t, e) {
for (var n, r, o, i = [
], a = 0; a < t.length && !((e -= 2) < 0); ++a) n = t.charCodeAt(a),
r = n >> 8,
o = n % 256,
i.push(o),
i.push(r);
return i
}
function Y(t) {
return J.toByteArray(B(t))
}
function $(t, e, n, r) {
for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
return o
}
function K(t) {
return t !== t
}
var J = n(452),
Q = n(453),
Z = n(454);
e.Buffer = a,
e.SlowBuffer = y,
e.INSPECT_MAX_BYTES = 50,
a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(),
e.kMaxLength = o(),
a.poolSize = 8192,
a._augment = function (t) {
return t.__proto__ = a.prototype,
t
},
a.from = function (t, e, n) {
return s(null, t, e, n)
},
a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, 'undefined' != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
value: null,
configurable: !0
})),
a.alloc = function (t, e, n) {
return c(null, t, e, n)
},
a.allocUnsafe = function (t) {
return l(null, t)
},
a.allocUnsafeSlow = function (t) {
return l(null, t)
},
a.isBuffer = function t(e) {
return !(null == e || !e._isBuffer)
},
a.compare = function t(e, n) {
if (!a.isBuffer(e) || !a.isBuffer(n)) throw new TypeError('Arguments must be Buffers');
if (e === n) return 0;
for (var r = e.length, o = n.length, i = 0, s = Math.min(r, o); i < s; ++i) if (e[i] !== n[i]) {
r = e[i],
o = n[i];
break
}
return r < o ? - 1 : o < r ? 1 : 0
},
a.isEncoding = function t(e) {
switch (String(e).toLowerCase()) {
case 'hex':
case 'utf8':
case 'utf-8':
case 'ascii':
case 'latin1':
case 'binary':
case 'base64':
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return !0;
default:
return !1
}
},
a.concat = function t(e, n) {
if (!Z(e)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === e.length) return a.alloc(0);
var r;
if (void 0 === n) for (n = 0, r = 0; r < e.length; ++r) n += e[r].length;
var o = a.allocUnsafe(n),
i = 0;
for (r = 0; r < e.length; ++r) {
var s = e[r];
if (!a.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
s.copy(o, i),
i += s.length
}
return o
},
a.byteLength = v,
a.prototype._isBuffer = !0,
a.prototype.swap16 = function t() {
var e = this.length;
if (e % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
for (var n = 0; n < e; n += 2) _(this, n, n + 1);
return this
},
a.prototype.swap32 = function t() {
var e = this.length;
if (e % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
for (var n = 0; n < e; n += 4) _(this, n, n + 3),
_(this, n + 1, n + 2);
return this
},
a.prototype.swap64 = function t() {
var e = this.length;
if (e % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
for (var n = 0; n < e; n += 8) _(this, n, n + 7),
_(this, n + 1, n + 6),
_(this, n + 2, n + 5),
_(this, n + 3, n + 4);
return this
},
a.prototype.toString = function t() {
var e = 0 | this.length;
return 0 === e ? '' : 0 === arguments.length ? E(this, 0, e)  : g.apply(this, arguments)
},
a.prototype.equals = function t(e) {
if (!a.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
return this === e || 0 === a.compare(this, e)
},
a.prototype.inspect = function t() {
var n = '',
r = e.INSPECT_MAX_BYTES;
return this.length > 0 && (n = this.toString('hex', 0, r).match(/.{2}/g).join(' '), this.length > r && (n += ' ... ')),
'<Buffer ' + n + '>'
},
a.prototype.compare = function t(e, n, r, o, i) {
if (!a.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
if (void 0 === n && (n = 0), void 0 === r && (r = e ? e.length : 0), void 0 === o && (o = 0), void 0 === i && (i = this.length), n < 0 || r > e.length || o < 0 || i > this.length) throw new RangeError('out of range index');
if (o >= i && n >= r) return 0;
if (o >= i) return - 1;
if (n >= r) return 1;
if (n >>>= 0, r >>>= 0, o >>>= 0, i >>>= 0, this === e) return 0;
for (var s = i - o, u = r - n, c = Math.min(s, u), l = this.slice(o, i), p = e.slice(n, r), h = 0; h < c; ++h) if (l[h] !== p[h]) {
s = l[h],
u = p[h];
break
}
return s < u ? - 1 : u < s ? 1 : 0
},
a.prototype.includes = function t(e, n, r) {
return - 1 !== this.indexOf(e, n, r)
},
a.prototype.indexOf = function t(e, n, r) {
return b(this, e, n, r, !0)
},
a.prototype.lastIndexOf = function t(e, n, r) {
return b(this, e, n, r, !1)
},
a.prototype.write = function t(e, n, r, o) {
if (void 0 === n) o = 'utf8',
r = this.length,
n = 0;
 else if (void 0 === r && 'string' == typeof n) o = n,
r = this.length,
n = 0;
 else {
if (!isFinite(n)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
n |= 0,
isFinite(r) ? (r |= 0, void 0 === o && (o = 'utf8'))  : (o = r, r = void 0)
}
var i = this.length - n;
if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || n < 0) || n > this.length) throw new RangeError('Attempt to write outside buffer bounds');
o || (o = 'utf8');
for (var a = !1; ; ) switch (o) {
case 'hex':
return w(this, e, n, r);
case 'utf8':
case 'utf-8':
return S(this, e, n, r);
case 'ascii':
return T(this, e, n, r);
case 'latin1':
case 'binary':
return P(this, e, n, r);
case 'base64':
return C(this, e, n, r);
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return k(this, e, n, r);
default:
if (a) throw new TypeError('Unknown encoding: ' + o);
o = ('' + o).toLowerCase(),
a = !0
}
},
a.prototype.toJSON = function t() {
return {
type: 'Buffer',
data: Array.prototype.slice.call(this._arr || this, 0)
}
};
var tt = 4096;
a.prototype.slice = function t(e, n) {
var r = this.length;
e = ~~e,
n = void 0 === n ? r : ~~n,
e < 0 ? (e += r) < 0 && (e = 0)  : e > r && (e = r),
n < 0 ? (n += r) < 0 && (n = 0)  : n > r && (n = r),
n < e && (n = e);
var o;
if (a.TYPED_ARRAY_SUPPORT) o = this.subarray(e, n),
o.__proto__ = a.prototype;
 else {
var i = n - e;
o = new a(i, void 0);
for (var s = 0; s < i; ++s) o[s] = this[s + e]
}
return o
},
a.prototype.readUIntLE = function t(e, n, r) {
e |= 0,
n |= 0,
r || D(e, n, this.length);
for (var o = this[e], i = 1, a = 0; ++a < n && (i *= 256); ) o += this[e + a] * i;
return o
},
a.prototype.readUIntBE = function t(e, n, r) {
e |= 0,
n |= 0,
r || D(e, n, this.length);
for (var o = this[e + --n], i = 1; n > 0 && (i *= 256); ) o += this[e + --n] * i;
return o
},
a.prototype.readUInt8 = function t(e, n) {
return n || D(e, 1, this.length),
this[e]
},
a.prototype.readUInt16LE = function t(e, n) {
return n || D(e, 2, this.length),
this[e] | this[e + 1] << 8
},
a.prototype.readUInt16BE = function t(e, n) {
return n || D(e, 2, this.length),
this[e] << 8 | this[e + 1]
},
a.prototype.readUInt32LE = function t(e, n) {
return n || D(e, 4, this.length),
(this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
},
a.prototype.readUInt32BE = function t(e, n) {
return n || D(e, 4, this.length),
16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
},
a.prototype.readIntLE = function t(e, n, r) {
e |= 0,
n |= 0,
r || D(e, n, this.length);
for (var o = this[e], i = 1, a = 0; ++a < n && (i *= 256); ) o += this[e + a] * i;
return i *= 128,
o >= i && (o -= Math.pow(2, 8 * n)),
o
},
a.prototype.readIntBE = function t(e, n, r) {
e |= 0,
n |= 0,
r || D(e, n, this.length);
for (var o = n, i = 1, a = this[e + --o]; o > 0 && (i *= 256); ) a += this[e + --o] * i;
return i *= 128,
a >= i && (a -= Math.pow(2, 8 * n)),
a
},
a.prototype.readInt8 = function t(e, n) {
return n || D(e, 1, this.length),
128 & this[e] ? - 1 * (255 - this[e] + 1)  : this[e]
},
a.prototype.readInt16LE = function t(e, n) {
n || D(e, 2, this.length);
var r = this[e] | this[e + 1] << 8;
return 32768 & r ? 4294901760 | r : r
},
a.prototype.readInt16BE = function t(e, n) {
n || D(e, 2, this.length);
var r = this[e + 1] | this[e] << 8;
return 32768 & r ? 4294901760 | r : r
},
a.prototype.readInt32LE = function t(e, n) {
return n || D(e, 4, this.length),
this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
},
a.prototype.readInt32BE = function t(e, n) {
return n || D(e, 4, this.length),
this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
},
a.prototype.readFloatLE = function t(e, n) {
return n || D(e, 4, this.length),
Q.read(this, e, !0, 23, 4)
},
a.prototype.readFloatBE = function t(e, n) {
return n || D(e, 4, this.length),
Q.read(this, e, !1, 23, 4)
},
a.prototype.readDoubleLE = function t(e, n) {
return n || D(e, 8, this.length),
Q.read(this, e, !0, 52, 8)
},
a.prototype.readDoubleBE = function t(e, n) {
return n || D(e, 8, this.length),
Q.read(this, e, !1, 52, 8)
},
a.prototype.writeUIntLE = function t(e, n, r, o) {
if (e = + e, n |= 0, r |= 0, !o) {
I(this, e, n, r, Math.pow(2, 8 * r) - 1, 0)
}
var i = 1,
a = 0;
for (this[n] = 255 & e; ++a < r && (i *= 256); ) this[n + a] = e / i & 255;
return n + r
},
a.prototype.writeUIntBE = function t(e, n, r, o) {
if (e = + e, n |= 0, r |= 0, !o) {
I(this, e, n, r, Math.pow(2, 8 * r) - 1, 0)
}
var i = r - 1,
a = 1;
for (this[n + i] = 255 & e; --i >= 0 && (a *= 256); ) this[n + i] = e / a & 255;
return n + r
},
a.prototype.writeUInt8 = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 1, 255, 0),
a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
this[n] = 255 & e,
n + 1
},
a.prototype.writeUInt16LE = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 2, 65535, 0),
a.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8)  : L(this, e, n, !0),
n + 2
},
a.prototype.writeUInt16BE = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 2, 65535, 0),
a.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 8, this[n + 1] = 255 & e)  : L(this, e, n, !1),
n + 2
},
a.prototype.writeUInt32LE = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 4, 4294967295, 0),
a.TYPED_ARRAY_SUPPORT ? (this[n + 3] = e >>> 24, this[n + 2] = e >>> 16, this[n + 1] = e >>> 8, this[n] = 255 & e)  : z(this, e, n, !0),
n + 4
},
a.prototype.writeUInt32BE = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 4, 4294967295, 0),
a.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e)  : z(this, e, n, !1),
n + 4
},
a.prototype.writeIntLE = function t(e, n, r, o) {
if (e = + e, n |= 0, !o) {
var i = Math.pow(2, 8 * r - 1);
I(this, e, n, r, i - 1, - i)
}
var a = 0,
s = 1,
u = 0;
for (this[n] = 255 & e; ++a < r && (s *= 256); ) e < 0 && 0 === u && 0 !== this[n + a - 1] && (u = 1),
this[n + a] = (e / s >> 0) - u & 255;
return n + r
},
a.prototype.writeIntBE = function t(e, n, r, o) {
if (e = + e, n |= 0, !o) {
var i = Math.pow(2, 8 * r - 1);
I(this, e, n, r, i - 1, - i)
}
var a = r - 1,
s = 1,
u = 0;
for (this[n + a] = 255 & e; --a >= 0 && (s *= 256); ) e < 0 && 0 === u && 0 !== this[n + a + 1] && (u = 1),
this[n + a] = (e / s >> 0) - u & 255;
return n + r
},
a.prototype.writeInt8 = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 1, 127, - 128),
a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
e < 0 && (e = 255 + e + 1),
this[n] = 255 & e,
n + 1
},
a.prototype.writeInt16LE = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 2, 32767, - 32768),
a.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8)  : L(this, e, n, !0),
n + 2
},
a.prototype.writeInt16BE = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 2, 32767, - 32768),
a.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 8, this[n + 1] = 255 & e)  : L(this, e, n, !1),
n + 2
},
a.prototype.writeInt32LE = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 4, 2147483647, - 2147483648),
a.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & e, this[n + 1] = e >>> 8, this[n + 2] = e >>> 16, this[n + 3] = e >>> 24)  : z(this, e, n, !0),
n + 4
},
a.prototype.writeInt32BE = function t(e, n, r) {
return e = + e,
n |= 0,
r || I(this, e, n, 4, 2147483647, - 2147483648),
e < 0 && (e = 4294967295 + e + 1),
a.TYPED_ARRAY_SUPPORT ? (this[n] = e >>> 24, this[n + 1] = e >>> 16, this[n + 2] = e >>> 8, this[n + 3] = 255 & e)  : z(this, e, n, !1),
n + 4
},
a.prototype.writeFloatLE = function t(e, n, r) {
return G(this, e, n, !0, r)
},
a.prototype.writeFloatBE = function t(e, n, r) {
return G(this, e, n, !1, r)
},
a.prototype.writeDoubleLE = function t(e, n, r) {
return N(this, e, n, !0, r)
},
a.prototype.writeDoubleBE = function t(e, n, r) {
return N(this, e, n, !1, r)
},
a.prototype.copy = function t(e, n, r, o) {
if (r || (r = 0), o || 0 === o || (o = this.length), n >= e.length && (n = e.length), n || (n = 0), o > 0 && o < r && (o = r), o === r) return 0;
if (0 === e.length || 0 === this.length) return 0;
if (n < 0) throw new RangeError('targetStart out of bounds');
if (r < 0 || r >= this.length) throw new RangeError('sourceStart out of bounds');
if (o < 0) throw new RangeError('sourceEnd out of bounds');
o > this.length && (o = this.length),
e.length - n < o - r && (o = e.length - n + r);
var i = o - r,
s;
if (this === e && r < n && n < o) for (s = i - 1; s >= 0; --s) e[s + n] = this[s + r];
 else if (i < 1000 || !a.TYPED_ARRAY_SUPPORT) for (s = 0; s < i; ++s) e[s + n] = this[s + r];
 else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), n);
return i
},
a.prototype.fill = function t(e, n, r, o) {
if ('string' == typeof e) {
if ('string' == typeof n ? (o = n, n = 0, r = this.length)  : 'string' == typeof r && (o = r, r = this.length), 1 === e.length) {
var i = e.charCodeAt(0);
i < 256 && (e = i)
}
if (void 0 !== o && 'string' != typeof o) throw new TypeError('encoding must be a string');
if ('string' == typeof o && !a.isEncoding(o)) throw new TypeError('Unknown encoding: ' + o)
} else 'number' == typeof e && (e &= 255);
if (n < 0 || this.length < n || this.length < r) throw new RangeError('Out of range index');
if (r <= n) return this;
n >>>= 0,
r = void 0 === r ? this.length : r >>> 0,
e || (e = 0);
var s;
if ('number' == typeof e) for (s = n; s < r; ++s) this[s] = e;
 else {
var u = a.isBuffer(e) ? e : H(new a(e, o).toString()),
c = u.length;
for (s = 0; s < r - n; ++s) this[s + n] = u[s % c]
}
return this
};
var et = /[^+\/0-9A-Za-z-_]/g
}).call(e, n(30))
},
function (t, e, n) {
'use strict';
function r(t) {
var e = t.length;
if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
return '=' === t[e - 2] ? 2 : '=' === t[e - 1] ? 1 : 0
}
function o(t) {
return 3 * t.length / 4 - r(t)
}
function i(t) {
var e,
n,
o,
i,
a,
s = t.length;
i = r(t),
a = new p(3 * s / 4 - i),
n = i > 0 ? s - 4 : s;
var u = 0;
for (e = 0; e < n; e += 4) o = l[t.charCodeAt(e)] << 18 | l[t.charCodeAt(e + 1)] << 12 | l[t.charCodeAt(e + 2)] << 6 | l[t.charCodeAt(e + 3)],
a[u++] = o >> 16 & 255,
a[u++] = o >> 8 & 255,
a[u++] = 255 & o;
return 2 === i ? (o = l[t.charCodeAt(e)] << 2 | l[t.charCodeAt(e + 1)] >> 4, a[u++] = 255 & o)  : 1 === i && (o = l[t.charCodeAt(e)] << 10 | l[t.charCodeAt(e + 1)] << 4 | l[t.charCodeAt(e + 2)] >> 2, a[u++] = o >> 8 & 255, a[u++] = 255 & o),
a
}
function a(t) {
return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
}
function s(t, e, n) {
for (var r, o = [
], i = e; i < n; i += 3) r = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2],
o.push(a(r));
return o.join('')
}
function u(t) {
for (var e, n = t.length, r = n % 3, o = '', i = [
], a = 16383, u = 0, l = n - r; u < l; u += 16383) i.push(s(t, u, u + 16383 > l ? l : u + 16383));
return 1 === r ? (e = t[n - 1], o += c[e >> 2], o += c[e << 4 & 63], o += '==')  : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], o += c[e >> 10], o += c[e >> 4 & 63], o += c[e << 2 & 63], o += '='),
i.push(o),
i.join('')
}
e.byteLength = o,
e.toByteArray = i,
e.fromByteArray = u;
for (var c = [
], l = [
], p = 'undefined' != typeof Uint8Array ? Uint8Array : Array, h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', f = 0, d = h.length; f < d; ++f) c[f] = h[f],
l[h.charCodeAt(f)] = f;
l['-'.charCodeAt(0)] = 62,
l['_'.charCodeAt(0)] = 63
},
function (t, e) {
e.read = function (t, e, n, r, o) {
var i,
a,
s = 8 * o - r - 1,
u = (1 << s) - 1,
c = u >> 1,
l = - 7,
p = n ? o - 1 : 0,
h = n ? - 1 : 1,
f = t[e + p];
for (p += h, i = f & (1 << - l) - 1, f >>= - l, l += s; l > 0; i = 256 * i + t[e + p], p += h, l -= 8);
for (a = i & (1 << - l) - 1, i >>= - l, l += r; l > 0; a = 256 * a + t[e + p], p += h, l -= 8);
if (0 === i) i = 1 - c;
 else {
if (i === u) return a ? NaN : 1 / 0 * (f ? - 1 : 1);
a += Math.pow(2, r),
i -= c
}
return (f ? - 1 : 1) * a * Math.pow(2, i - r)
},
e.write = function (t, e, n, r, o, i) {
var a,
s,
u,
c = 8 * i - o - 1,
l = (1 << c) - 1,
p = l >> 1,
h = 23 === o ? Math.pow(2, - 24) - Math.pow(2, - 77)  : 0,
f = r ? 0 : i - 1,
d = r ? 1 : - 1,
m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = l)  : (a = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, - a)) < 1 && (a--, u *= 2), e += a + p >= 1 ? h / u : h * Math.pow(2, 1 - p), e * u >= 2 && (a++, u /= 2), a + p >= l ? (s = 0, a = l)  : a + p >= 1 ? (s = (e * u - 1) * Math.pow(2, o), a += p)  : (s = e * Math.pow(2, p - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + f] = 255 & s, f += d, s /= 256, o -= 8);
for (a = a << o | s, c += o; c > 0; t[n + f] = 255 & a, f += d, a /= 256, c -= 8);
t[n + f - d] |= 128 * m
}
},
function (t, e) {
var n = {
}.toString;
t.exports = Array.isArray || function (t) {
return '[object Array]' == n.call(t)
}
},
function (t, e, n) {
'use strict';
'use restrict';
function r(t) {
var e = 32;
return t &= - t,
t && e--,
65535 & t && (e -= 16),
16711935 & t && (e -= 8),
252645135 & t && (e -= 4),
858993459 & t && (e -= 2),
1431655765 & t && (e -= 1),
e
}
var o = 32;
e.INT_BITS = 32,
e.INT_MAX = 2147483647,
e.INT_MIN = - 1 << 31,
e.sign = function (t) {
return (t > 0) - (t < 0)
},
e.abs = function (t) {
var e = t >> 31;
return (t ^ e) - e
},
e.min = function (t, e) {
return e ^ (t ^ e) & - (t < e)
},
e.max = function (t, e) {
return t ^ (t ^ e) & - (t < e)
},
e.isPow2 = function (t) {
return !(t & t - 1 || !t)
},
e.log2 = function (t) {
var e,
n;
return e = (t > 65535) << 4,
t >>>= e,
n = (t > 255) << 3,
t >>>= n,
e |= n,
n = (t > 15) << 2,
t >>>= n,
e |= n,
n = (t > 3) << 1,
t >>>= n,
(e |= n) | t >> 1
},
e.log10 = function (t) {
return t >= 1000000000 ? 9 : t >= 100000000 ? 8 : t >= 10000000 ? 7 : t >= 1000000 ? 6 : t >= 100000 ? 5 : t >= 10000 ? 4 : t >= 1000 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
},
e.popCount = function (t) {
return t -= t >>> 1 & 1431655765,
16843009 * ((t = (858993459 & t) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24
},
e.countTrailingZeros = r,
e.nextPow2 = function (t) {
return t += 0 === t,
--t,
t |= t >>> 1,
t |= t >>> 2,
t |= t >>> 4,
t |= t >>> 8,
(t |= t >>> 16) + 1
},
e.prevPow2 = function (t) {
return t |= t >>> 1,
t |= t >>> 2,
t |= t >>> 4,
t |= t >>> 8,
(t |= t >>> 16) - (t >>> 1)
},
e.parity = function (t) {
return t ^= t >>> 16,
t ^= t >>> 8,
t ^= t >>> 4,
27030 >>> (t &= 15) & 1
};
var i = new Array(256);
!function (t) {
for (var e = 0; e < 256; ++e) {
var n = e,
r = e,
o = 7;
for (n >>>= 1; n; n >>>= 1) r <<= 1,
r |= 1 & n,
--o;
t[e] = r << o & 255
}
}(i),
e.reverse = function (t) {
return i[255 & t] << 24 | i[t >>> 8 & 255] << 16 | i[t >>> 16 & 255] << 8 | i[t >>> 24 & 255]
},
e.interleave2 = function (t, e) {
return t &= 65535,
t = 16711935 & (t | t << 8),
t = 252645135 & (t | t << 4),
t = 858993459 & (t | t << 2),
t = 1431655765 & (t | t << 1),
e &= 65535,
e = 16711935 & (e | e << 8),
e = 252645135 & (e | e << 4),
e = 858993459 & (e | e << 2),
e = 1431655765 & (e | e << 1),
t | e << 1
},
e.deinterleave2 = function (t, e) {
return t = t >>> e & 1431655765,
t = 858993459 & (t | t >>> 1),
t = 252645135 & (t | t >>> 2),
t = 16711935 & (t | t >>> 4),
(t = 65535 & (t | t >>> 16)) << 16 >> 16
},
e.interleave3 = function (t, e, n) {
return t &= 1023,
t = 4278190335 & (t | t << 16),
t = 251719695 & (t | t << 8),
t = 3272356035 & (t | t << 4),
t = 1227133513 & (t | t << 2),
e &= 1023,
e = 4278190335 & (e | e << 16),
e = 251719695 & (e | e << 8),
e = 3272356035 & (e | e << 4),
e = 1227133513 & (e | e << 2),
t |= e << 1,
n &= 1023,
n = 4278190335 & (n | n << 16),
n = 251719695 & (n | n << 8),
n = 3272356035 & (n | n << 4),
n = 1227133513 & (n | n << 2),
t | n << 2
},
e.deinterleave3 = function (t, e) {
return t = t >>> e & 1227133513,
t = 3272356035 & (t | t >>> 2),
t = 251719695 & (t | t >>> 4),
t = 4278190335 & (t | t >>> 8),
(t = 1023 & (t | t >>> 16)) << 22 >> 22
},
e.nextCombination = function (t) {
var e = t | t - 1;
return e + 1 | (~e & - ~e) - 1 >>> r(t) + 1
}
},
function (t, e, n) {
'use strict';
function r() {
var t,
e,
n,
r,
u,
c,
l,
p,
h,
f;
if (r = o({
}, s), 0 === arguments.length) throw new Error('Array of ndarrays to concatenate must not be empty');
if (Array.isArray(arguments[0]) ? (n = arguments[0], o(r, arguments[1] || {
}))  : 2 === arguments.length && (n = arguments[1], t = arguments[0], o(r, arguments[2] || {
})), 0 === n.length) throw new Error('Array of ndarrays to concatenate must not be empty');
for (u = 0; u < n.length; u++) if (l) {
if (n[u].dimension !== l.length) throw new Error('all arrays must have the same dimensionality');
for (c = 1; c < n[u].shape.length; c++) if (n[u].shape[c] !== l[c]) throw new Error('last n-1 dimensions of concatenated rows must have the same size');
l[0] += n[u].shape[0]
} else l = n[u].shape.slice(0);
if (t) {
if (l[0] !== t.shape[0]) throw new Error('first dimension of output array must match the total number of concatenated rows')
} else t = a.zeros(l, r.dtype);
for (c = 0, p = 0; c < n.length; c++) e = n[c],
h = e.shape[0],
f = t.lo(p).hi(h),
i.assign(f, e),
p += h;
return t
}
t.exports = r;
var o = n(457),
i = n(1),
a = n(165),
s = {
dtype: 'double'
}
},
function (t, e) {
function n(t, e) {
if (!e || 'object' != typeof e) return t;
for (var n = Object.keys(e), r = n.length; r--; ) t[n[r]] = e[n[r]];
return t
}
t.exports = n
},
function (t, e, n) {
'use strict';
t.exports = n(459)
},
function (t, e, n) {
'use strict';
function r() {
o.Reader._configure(o.BufferReader),
o.util._configure()
}
var o = e;
o.build = 'minimal',
o.Writer = n(167),
o.BufferWriter = n(468),
o.Reader = n(168),
o.BufferReader = n(469),
o.util = n(33),
o.rpc = n(470),
o.roots = n(472),
o.configure = r,
o.Writer._configure(o.BufferWriter),
r()
},
function (t, e, n) {
'use strict';
function r(t, e) {
for (var n = new Array(arguments.length - 1), r = 0, o = 2, i = !0; o < arguments.length; ) n[r++] = arguments[o++];
return new Promise(function o(a, s) {
n[r] = function t(e) {
if (i) if (i = !1, e) s(e);
 else {
for (var n = new Array(arguments.length - 1), r = 0; r < n.length; ) n[r++] = arguments[r];
a.apply(null, n)
}
};
try {
t.apply(e || null, n)
} catch (t) {
i && (i = !1, s(t))
}
})
}
t.exports = r
},
function (t, e, n) {
'use strict';
var r = e;
r.length = function t(e) {
var n = e.length;
if (!n) return 0;
for (var r = 0; --n % 4 > 1 && '=' === e.charAt(n); ) ++r;
return Math.ceil(3 * e.length) / 4 - r
};
for (var o = new Array(64), i = new Array(123), a = 0; a < 64; ) i[o[a] = a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : a - 59 | 43] = a++;
r.encode = function t(e, n, r) {
for (var i = null, a = [
], s = 0, u = 0, c; n < r; ) {
var l = e[n++];
switch (u) {
case 0:
a[s++] = o[l >> 2],
c = (3 & l) << 4,
u = 1;
break;
case 1:
a[s++] = o[c | l >> 4],
c = (15 & l) << 2,
u = 2;
break;
case 2:
a[s++] = o[c | l >> 6],
a[s++] = o[63 & l],
u = 0
}
s > 8191 && ((i || (i = [
])).push(String.fromCharCode.apply(String, a)), s = 0)
}
return u && (a[s++] = o[c], a[s++] = 61, 1 === u && (a[s++] = 61)),
i ? (s && i.push(String.fromCharCode.apply(String, a.slice(0, s))), i.join(''))  : String.fromCharCode.apply(String, a.slice(0, s))
};
var s = 'invalid encoding';
r.decode = function t(e, n, r) {
for (var o = r, a = 0, u, c = 0; c < e.length; ) {
var l = e.charCodeAt(c++);
if (61 === l && a > 1) break;
if (void 0 === (l = i[l])) throw Error(s);
switch (a) {
case 0:
u = l,
a = 1;
break;
case 1:
n[r++] = u << 2 | (48 & l) >> 4,
u = l,
a = 2;
break;
case 2:
n[r++] = (15 & u) << 4 | (60 & l) >> 2,
u = l,
a = 3;
break;
case 3:
n[r++] = (3 & u) << 6 | l,
a = 0
}
}
if (1 === a) throw Error(s);
return r - o
},
r.test = function t(e) {
return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)
}
},
function (t, e, n) {
'use strict';
function r() {
this._listeners = {
}
}
t.exports = r,
r.prototype.on = function t(e, n, r) {
return (this._listeners[e] || (this._listeners[e] = [
])).push({
fn: n,
ctx: r || this
}),
this
},
r.prototype.off = function t(e, n) {
if (void 0 === e) this._listeners = {
};
 else if (void 0 === n) this._listeners[e] = [
];
 else for (var r = this._listeners[e], o = 0; o < r.length; ) r[o].fn === n ? r.splice(o, 1)  : ++o;
return this
},
r.prototype.emit = function t(e) {
var n = this._listeners[e];
if (n) {
for (var r = [
], o = 1; o < arguments.length; ) r.push(arguments[o++]);
for (o = 0; o < n.length; ) n[o].fn.apply(n[o++].ctx, r)
}
return this
}
},
function (t, e, n) {
'use strict';
function r(t) {
return 'undefined' != typeof Float32Array ? function () {
function e(t, e, n) {
i[0] = t,
e[n] = a[0],
e[n + 1] = a[1],
e[n + 2] = a[2],
e[n + 3] = a[3]
}
function n(t, e, n) {
i[0] = t,
e[n] = a[3],
e[n + 1] = a[2],
e[n + 2] = a[1],
e[n + 3] = a[0]
}
function r(t, e) {
return a[0] = t[e],
a[1] = t[e + 1],
a[2] = t[e + 2],
a[3] = t[e + 3],
i[0]
}
function o(t, e) {
return a[3] = t[e],
a[2] = t[e + 1],
a[1] = t[e + 2],
a[0] = t[e + 3],
i[0]
}
var i = new Float32Array([ - 0]),
a = new Uint8Array(i.buffer),
s = 128 === a[3];
t.writeFloatLE = s ? e : n,
t.writeFloatBE = s ? n : e,
t.readFloatLE = s ? r : o,
t.readFloatBE = s ? o : r
}()  : function () {
function e(t, e, n, r) {
var o = e < 0 ? 1 : 0;
if (o && (e = - e), 0 === e) t(1 / e > 0 ? 0 : 2147483648, n, r);
 else if (isNaN(e)) t(2143289344, n, r);
 else if (e > 3.4028234663852886e+38) t((o << 31 | 2139095040) >>> 0, n, r);
 else if (e < 1.1754943508222875e-38) t((o << 31 | Math.round(e / 1.401298464324817e-45)) >>> 0, n, r);
 else {
var i = Math.floor(Math.log(e) / Math.LN2),
a = 8388607 & Math.round(e * Math.pow(2, - i) * 8388608);
t((o << 31 | i + 127 << 23 | a) >>> 0, n, r)
}
}
function n(t, e, n) {
var r = t(e, n),
o = 2 * (r >> 31) + 1,
i = r >>> 23 & 255,
a = 8388607 & r;
return 255 === i ? a ? NaN : o * (1 / 0)  : 0 === i ? 1.401298464324817e-45 * o * a : o * Math.pow(2, i - 150) * (a + 8388608)
}
t.writeFloatLE = e.bind(null, o),
t.writeFloatBE = e.bind(null, i),
t.readFloatLE = n.bind(null, a),
t.readFloatBE = n.bind(null, s)
}(),
'undefined' != typeof Float64Array ? function () {
function e(t, e, n) {
i[0] = t,
e[n] = a[0],
e[n + 1] = a[1],
e[n + 2] = a[2],
e[n + 3] = a[3],
e[n + 4] = a[4],
e[n + 5] = a[5],
e[n + 6] = a[6],
e[n + 7] = a[7]
}
function n(t, e, n) {
i[0] = t,
e[n] = a[7],
e[n + 1] = a[6],
e[n + 2] = a[5],
e[n + 3] = a[4],
e[n + 4] = a[3],
e[n + 5] = a[2],
e[n + 6] = a[1],
e[n + 7] = a[0]
}
function r(t, e) {
return a[0] = t[e],
a[1] = t[e + 1],
a[2] = t[e + 2],
a[3] = t[e + 3],
a[4] = t[e + 4],
a[5] = t[e + 5],
a[6] = t[e + 6],
a[7] = t[e + 7],
i[0]
}
function o(t, e) {
return a[7] = t[e],
a[6] = t[e + 1],
a[5] = t[e + 2],
a[4] = t[e + 3],
a[3] = t[e + 4],
a[2] = t[e + 5],
a[1] = t[e + 6],
a[0] = t[e + 7],
i[0]
}
var i = new Float64Array([ - 0]),
a = new Uint8Array(i.buffer),
s = 128 === a[7];
t.writeDoubleLE = s ? e : n,
t.writeDoubleBE = s ? n : e,
t.readDoubleLE = s ? r : o,
t.readDoubleBE = s ? o : r
}()  : function () {
function e(t, e, n, r, o, i) {
var a = r < 0 ? 1 : 0;
if (a && (r = - r), 0 === r) t(0, o, i + e),
t(1 / r > 0 ? 0 : 2147483648, o, i + n);
 else if (isNaN(r)) t(0, o, i + e),
t(2146959360, o, i + n);
 else if (r > 1.7976931348623157e+308) t(0, o, i + e),
t((a << 31 | 2146435072) >>> 0, o, i + n);
 else {
var s;
if (r < 2.2250738585072014e-308) s = r / 5e-324,
t(s >>> 0, o, i + e),
t((a << 31 | s / 4294967296) >>> 0, o, i + n);
 else {
var u = Math.floor(Math.log(r) / Math.LN2);
1024 === u && (u = 1023),
s = r * Math.pow(2, - u),
t(4503599627370496 * s >>> 0, o, i + e),
t((a << 31 | u + 1023 << 20 | 1048576 * s & 1048575) >>> 0, o, i + n)
}
}
}
function n(t, e, n, r, o) {
var i = t(r, o + e),
a = t(r, o + n),
s = 2 * (a >> 31) + 1,
u = a >>> 20 & 2047,
c = 4294967296 * (1048575 & a) + i;
return 2047 === u ? c ? NaN : s * (1 / 0)  : 0 === u ? 5e-324 * s * c : s * Math.pow(2, u - 1075) * (c + 4503599627370496)
}
t.writeDoubleLE = e.bind(null, o, 0, 4),
t.writeDoubleBE = e.bind(null, i, 4, 0),
t.readDoubleLE = n.bind(null, a, 0, 4),
t.readDoubleBE = n.bind(null, s, 4, 0)
}(),
t
}
function o(t, e, n) {
e[n] = 255 & t,
e[n + 1] = t >>> 8 & 255,
e[n + 2] = t >>> 16 & 255,
e[n + 3] = t >>> 24
}
function i(t, e, n) {
e[n] = t >>> 24,
e[n + 1] = t >>> 16 & 255,
e[n + 2] = t >>> 8 & 255,
e[n + 3] = 255 & t
}
function a(t, e) {
return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
}
function s(t, e) {
return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
}
t.exports = r(r)
},
function (module, exports, __webpack_require__) {
'use strict';
function inquire(moduleName) {
try {
var mod = eval('quire'.replace(/^/, 're')) (moduleName);
if (mod && (mod.length || Object.keys(mod).length)) return mod
} catch (t) {
}
return null
}
module.exports = inquire
},
function (t, e, n) {
'use strict';
var r = e;
r.length = function t(e) {
for (var n = 0, r = 0, o = 0; o < e.length; ++o) r = e.charCodeAt(o),
r < 128 ? n += 1 : r < 2048 ? n += 2 : 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(o + 1)) ? (++o, n += 4)  : n += 3;
return n
},
r.read = function t(e, n, r) {
if (r - n < 1) return '';
for (var o = null, i = [
], a = 0, s; n < r; ) s = e[n++],
s < 128 ? i[a++] = s : s > 191 && s < 224 ? i[a++] = (31 & s) << 6 | 63 & e[n++] : s > 239 && s < 365 ? (s = ((7 & s) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536, i[a++] = 55296 + (s >> 10), i[a++] = 56320 + (1023 & s))  : i[a++] = (15 & s) << 12 | (63 & e[n++]) << 6 | 63 & e[n++],
a > 8191 && ((o || (o = [
])).push(String.fromCharCode.apply(String, i)), a = 0);
return o ? (a && o.push(String.fromCharCode.apply(String, i.slice(0, a))), o.join(''))  : String.fromCharCode.apply(String, i.slice(0, a))
},
r.write = function t(e, n, r) {
for (var o = r, i, a, s = 0; s < e.length; ++s) i = e.charCodeAt(s),
i < 128 ? n[r++] = i : i < 2048 ? (n[r++] = i >> 6 | 192, n[r++] = 63 & i | 128)  : 55296 == (64512 & i) && 56320 == (64512 & (a = e.charCodeAt(s + 1))) ? (i = 65536 + ((1023 & i) << 10) + (1023 & a), ++s, n[r++] = i >> 18 | 240, n[r++] = i >> 12 & 63 | 128, n[r++] = i >> 6 & 63 | 128, n[r++] = 63 & i | 128)  : (n[r++] = i >> 12 | 224, n[r++] = i >> 6 & 63 | 128, n[r++] = 63 & i | 128);
return r - o
}
},
function (t, e, n) {
'use strict';
function r(t, e, n) {
var r = n || 8192,
o = r >>> 1,
i = null,
a = r;
return function n(s) {
if (s < 1 || s > o) return t(s);
a + s > r && (i = t(r), a = 0);
var u = e.call(i, a, a += s);
return 7 & a && (a = 1 + (7 | a)),
u
}
}
t.exports = r
},
function (t, e, n) {
'use strict';
function r(t, e) {
this.lo = t >>> 0,
this.hi = e >>> 0
}
t.exports = r;
var o = n(33),
i = r.zero = new r(0, 0);
i.toNumber = function () {
return 0
},
i.zzEncode = i.zzDecode = function () {
return this
},
i.length = function () {
return 1
};
var a = r.zeroHash = '\0\0\0\0\0\0\0\0';
r.fromNumber = function t(e) {
if (0 === e) return i;
var n = e < 0;
n && (e = - e);
var o = e >>> 0,
a = (e - o) / 4294967296 >>> 0;
return n && (a = ~a >>> 0, o = ~o >>> 0, ++o > 4294967295 && (o = 0, ++a > 4294967295 && (a = 0))),
new r(o, a)
},
r.from = function t(e) {
if ('number' == typeof e) return r.fromNumber(e);
if (o.isString(e)) {
if (!o.Long) return r.fromNumber(parseInt(e, 10));
e = o.Long.fromString(e)
}
return e.low || e.high ? new r(e.low >>> 0, e.high >>> 0)  : i
},
r.prototype.toNumber = function t(e) {
if (!e && this.hi >>> 31) {
var n = 1 + ~this.lo >>> 0,
r = ~this.hi >>> 0;
return n || (r = r + 1 >>> 0),
- (n + 4294967296 * r)
}
return this.lo + 4294967296 * this.hi
},
r.prototype.toLong = function t(e) {
return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(e))  : {
low: 0 | this.lo,
high: 0 | this.hi,
unsigned: Boolean(e)
}
};
var s = String.prototype.charCodeAt;
r.fromHash = function t(e) {
return e === a ? i : new r((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0, (s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0)
},
r.prototype.toHash = function t() {
return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
},
r.prototype.zzEncode = function t() {
var e = this.hi >> 31;
return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0,
this.lo = (this.lo << 1 ^ e) >>> 0,
this
},
r.prototype.zzDecode = function t() {
var e = - (1 & this.lo);
return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0,
this.hi = (this.hi >>> 1 ^ e) >>> 0,
this
},
r.prototype.length = function t() {
var e = this.lo,
n = (this.lo >>> 28 | this.hi << 4) >>> 0,
r = this.hi >>> 24;
return 0 === r ? 0 === n ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : r < 128 ? 9 : 10
}
},
function (t, e, n) {
'use strict';
function r() {
i.call(this)
}
function o(t, e, n) {
t.length < 40 ? a.utf8.write(t, e, n)  : e.utf8Write(t, n)
}
t.exports = r;
var i = n(167);
(r.prototype = Object.create(i.prototype)).constructor = r;
var a = n(33),
s = a.Buffer;
r.alloc = function t(e) {
return (r.alloc = a._Buffer_allocUnsafe) (e)
};
var u = s && s.prototype instanceof Uint8Array && 'set' === s.prototype.set.name ? function t(e, n, r) {
n.set(e, r)
}
 : function t(e, n, r) {
if (e.copy) e.copy(n, r, 0, e.length);
 else for (var o = 0; o < e.length; ) n[r++] = e[o++]
};
r.prototype.bytes = function t(e) {
a.isString(e) && (e = a._Buffer_from(e, 'base64'));
var n = e.length >>> 0;
return this.uint32(n),
n && this._push(u, n, e),
this
},
r.prototype.string = function t(e) {
var n = s.byteLength(e);
return this.uint32(n),
n && this._push(o, n, e),
this
}
},
function (t, e, n) {
'use strict';
function r(t) {
o.call(this, t)
}
t.exports = r;
var o = n(168);
(r.prototype = Object.create(o.prototype)).constructor = r;
var i = n(33);
i.Buffer && (r.prototype._slice = i.Buffer.prototype.slice),
r.prototype.string = function t() {
var e = this.uint32();
return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len))
}
},
function (t, e, n) {
'use strict';
e.Service = n(471)
},
function (t, e, n) {
'use strict';
function r(t, e, n) {
if ('function' != typeof t) throw TypeError('rpcImpl must be a function');
o.EventEmitter.call(this),
this.rpcImpl = t,
this.requestDelimited = Boolean(e),
this.responseDelimited = Boolean(n)
}
t.exports = r;
var o = n(33);
(r.prototype = Object.create(o.EventEmitter.prototype)).constructor = r,
r.prototype.rpcCall = function t(e, n, r, i, a) {
if (!i) throw TypeError('request must be specified');
var s = this;
if (!a) return o.asPromise(t, s, e, n, r, i);
if (!s.rpcImpl) return void setTimeout(function () {
a(Error('already ended'))
}, 0);
try {
return s.rpcImpl(e, n[s.requestDelimited ? 'encodeDelimited' : 'encode'](i).finish(), function t(n, o) {
if (n) return s.emit('error', n, e),
a(n);
if (null === o) return void s.end(!0);
if (!(o instanceof r)) try {
o = r[s.responseDelimited ? 'decodeDelimited' : 'decode'](o)
} catch (n) {
return s.emit('error', n, e),
a(n)
}
return s.emit('data', o, e),
a(null, o)
})
} catch (t) {
return s.emit('error', t, e),
void setTimeout(function () {
a(t)
}, 0)
}
},
r.prototype.end = function t(e) {
return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit('end').off()),
this
}
},
function (t, e, n) {
'use strict';
t.exports = {
}
},
function (t, e) {
},
function (t, e, n) {
function r(t) {
return 'number' == typeof t && i(t)
}
var o = n(18),
i = o.isFinite;
t.exports = r
},
function (t, e, n) {
function r(t) {
return (null == t ? 0 : t.length) ? o(t, i)  : [
]
}
var o = n(152),
i = 1 / 0;
t.exports = r
},
function (t, e, n) {
'use strict';
var r = n(166),
o = n(8),
i = o({
args: [
'array',
'scalar',
'index'
],
body: function t(e, n, r) {
var o = n,
i;
for (i = 0; i < r.length - 1; ++i) o = o[r[i]];
o[r[r.length - 1]] = e
}
});
t.exports = function t(e) {
var n = r(e.shape);
return i(e, n),
n
}
}
])
});
