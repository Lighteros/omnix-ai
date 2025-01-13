(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(74112);
        },
      ]);
    },
    74112: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return L;
          },
        });
      var s = l(85893),
        n = l(9008),
        i = l.n(n),
        a = l(25675),
        o = l.n(a),
        x = {
          src: "/_next/static/media/logo.9c051ac4.png",
          height: 22,
          width: 108,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = l(67294),
        c = l(59429),
        d = l(75131);
      function p() {
        let [e, t] = (0, r.useState)(!1),
          [l, n] = (0, r.useState)(!1),
          i = () => {
            t(window.scrollY > 0);
          };
        return (
          (0, r.useEffect)(
            () => (
              window.addEventListener("scroll", i),
              () => {
                window.removeEventListener("scroll", i);
              }
            ),
            []
          ),
          (0, s.jsxs)("div", {
            className:
              "py-[14px] px-[30px] lg:px-[48px] flex flex-row justify-between items-center bg-black lg:bg-[unset]",
            children: [
              (0, s.jsx)(o(), { src: x, alt: "logo", height: 23 }),
              (0, s.jsx)("div", {
                onClick: () => (0, c._)(!0),
                onMouseEnter: () => {
                  n(!0);
                },
                onMouseLeave: () => {
                  n(!1);
                },
                className: "cursor-pointer",
                children: l
                  ? (0, s.jsx)(d.jX, { width: "115", height: "33" })
                  : (0, s.jsx)("img", {
                      src: "/navbtn.png",
                      className: "w-[114px]",
                      alt: "",
                    }),
              }),
            ],
          })
        );
      }
      var m = l(81685),
        h = l.n(m),
        u = l(41664),
        g = l.n(u),
        f = l(75502);
      function j() {
        let [e, t] = (0, r.useState)(0),
          [l, n] = (0, r.useState)(0),
          i = (0, r.useRef)(null),
          a = (0, r.useRef)(null),
          x = (0, r.useRef)(null),
          c = (0, r.useRef)(null);
        (0, r.useRef)(!1),
          (0, r.useRef)(null),
          (0, r.useEffect)(() => {
            if ((console.log(x, "===>iconref"), x.current)) {
              var e, t, l;
              let s =
                  (null == x
                    ? void 0
                    : null === (e = x.current) || void 0 === e
                    ? void 0
                    : e.offsetTop) +
                  (null == x
                    ? void 0
                    : null === (t = x.current) || void 0 === t
                    ? void 0
                    : t.naturalHeight),
                i =
                  (null == a
                    ? void 0
                    : null === (l = a.current) || void 0 === l
                    ? void 0
                    : l.clientHeight) * 0.1475;
              n(s - i), console.log(s, i, "===>ass");
            }
          }, []);
        let p = [
            {
              height: "16%",
              btnTitle: "Swap Now",
              url: "https://app.omnixai.cc/swap",
              title: "Swap Your Tokens",
              subTitle: "With Low Slippage",
              content:
                "OmniX AI ensures minimal slippage and maximum returns with smart routing, deep liquidity, and advanced AMM tech.",
              img: "/Introducing1.png",
            },
            {
              height: "44.5%",
              url: "https://app.omnixai.cc/liquidity",
              btnTitle: "Deposit Liquidity",
              title: "Stake Liquidity to Earn",
              subTitle: "Earn OMNIX emissions",
              content:
                "LP stakers obtain weekly OMNIX emission rewards by attracting OMNIX holders to vote for the Pool.",
              img: "/Introducing2.png",
            },
            {
              height: "71%",
              btnTitle: "Go to Lock",
              url: "https://app.omnixai.cc/lock",
              title: "Lock OMNIX to earn ",
              subTitle: "Lock OMNIX to get votes",
              content:
                "Lock your OMNIX to gain voting rights and unlock voting benefits.",
              img: "/Introducing3.png",
            },
            {
              height: "98%",
              btnTitle: "Cast your vote",
              url: "https://app.omnixai.cc/vote",
              title: "Cast Your Votes to Earn",
              subTitle: "Earn Bribes and Rewards",
              content:
                "OMNIX holders participate in voting, receive bribes and fees, and redirect emissions to OMNIX pool of LPs.",
              img: "/Introducing4.png",
            },
          ],
          m = (e) => {
            t(e);
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: h().topArea,
              style: { zIndex: "1" },
              children: [
                (0, s.jsx)("div", {
                  className: h().mobileBg,
                  ref: a,
                  style: { top: "".concat(l, "px"), zIndex: "1" },
                  children: (0, s.jsx)("img", { src: "/homeBg.png", alt: "" }),
                }),
                (0, s.jsxs)("video", {
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  className: h().videoBackground,
                  ref: i,
                  style: { top: "170px", zIndex: "1" },
                  children: [
                    (0, s.jsx)("source", {
                      src: "/video/homeBg.mp4",
                      type: "video/mp4",
                    }),
                    "Your browser does not support the video tag.",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "w-full flex flex-col items-center",
                  style: { zIndex: "2" },
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex flex-col items-center",
                      children: (0, s.jsx)(o(), {
                        src: "/topareaicon.png",
                        alt: "lunach app",
                        width: 102,
                        height: 102,
                        ref: x,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "".concat(h().topTitle),
                      style: { fontFamily: "Outfit-SemiBold" },
                      children: [
                        "The native depin-focused liquidity layer on ",
                        (0, s.jsx)("span", {
                          className: "text-blue",
                          style: { fontFamily: "Outfit-SemiBold" },
                          children: "OmniX",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(
                      g(),
                      {
                        className: "".concat(
                          h().animationPulse,
                          " mt-[80px] lg:mt-[50px] flex items-center gap-2 h-[46px] pl-[80px] pr-8 text-black rounded-[30px]"
                        ),
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                        target: "_blank",
                        children: [
                          (0, s.jsx)("button", {
                            className: h().mintBtn,
                            children: "Buy Now",
                          }),
                          (0, s.jsx)("span", {
                            className: "ml-1",
                            children: (0, s.jsx)(d.t_, {}),
                          }),
                        ],
                      },
                      "presale"
                    ),
                    (0, s.jsxs)(
                      g(),
                      {
                        className: "".concat(
                          h().animationPulse,
                          " mt-[20px] lg:mt-[10px] flex items-center gap-2 h-[46px] pl-[80px] pr-8 text-black rounded-[30px]"
                        ),
                        href: "/mint",
                        children: [
                          (0, s.jsx)("button", {
                            className: h().mintBtn,
                            children: "MINT OmnixNFT",
                          }),
                          (0, s.jsx)("span", {
                            className: "ml-1",
                            children: (0, s.jsx)(d.t_, {}),
                          }),
                        ],
                      },
                      "presale"
                    ),
                    (0, s.jsx)("div", {
                      className: "hidden lg:block",
                      children: (0, s.jsx)("div", {
                        className: "flex items-center mt-[84px]",
                        children: f.yg.map((e) =>
                          (0, s.jsx)(
                            g(),
                            {
                              href: e.href,
                              target: "_blank",
                              children: (0, s.jsx)(e.icon, {
                                className:
                                  "flex-shrink-0 w-[28px] h-[28px] mx-3 text-gray-400 hover:text-gray-200",
                                "aria-hidden": "true",
                              }),
                            },
                            e.name
                          )
                        ),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "lg:hidden",
                      children: (0, s.jsx)("div", {
                        className: "flex items-center mt-[64px]",
                        children: f.pn.map((e) =>
                          (0, s.jsx)(
                            g(),
                            {
                              href: e.href,
                              target: "_blank",
                              children: (0, s.jsx)(e.icon, {
                                className:
                                  "flex-shrink-0 w-[48px] h-[48px] mx-4 text-gray-400 hover:text-gray-200",
                                "aria-hidden": "true",
                              }),
                            },
                            e.name
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "w-full hidden lg:block",
              children: (0, s.jsxs)("div", {
                className: h().news,
                ref: c,
                style: { marginTop: "158px" },
                children: [
                  (0, s.jsx)("div", {
                    className: h().gradient,
                    style: { zIndex: "1" },
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex-1 flex flex-col your-container-class",
                    style: { zIndex: "2" },
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "fontSemibold pl-[8px] text-[24px] leading-[48px] text-blue",
                        style: { zIndex: "2" },
                        children: "Introducing OmniX AI",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "mt-[16px] pl-[8px] text-white text-[48px] leading-[48px] fontSemibold",
                        children: p[e].title,
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-row mt-[36px]",
                        children: [
                          (0, s.jsx)("div", {
                            className: h().progressContainer,
                            children: (0, s.jsx)("div", {
                              className: h().progressBar,
                              style: { height: p[e].height },
                              children: (0, s.jsx)("div", {
                                className: h().progressBall,
                                children: (0, s.jsx)(d.qZ, {}),
                              }),
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "pt-[4px] pl-[32px] w-full",
                            style: { zIndex: "2" },
                            children: p.map((t, l) =>
                              (0, s.jsxs)(
                                "div",
                                {
                                  className: h().card,
                                  onClick: () => {
                                    m(l);
                                  },
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: ""
                                        .concat(
                                          p[e].title === t.title && h().active,
                                          " "
                                        )
                                        .concat(h().subTitle),
                                      children: t.subTitle,
                                    }),
                                    (0, s.jsx)("div", {
                                      className: ""
                                        .concat(
                                          p[e].title === t.title &&
                                            h().activeContent,
                                          " "
                                        )
                                        .concat(h().content),
                                      children: t.content,
                                    }),
                                  ],
                                },
                                l
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: h().info,
                    style: { zIndex: "2" },
                    children: [
                      (0, s.jsxs)("div", {
                        className: h().infoBtn,
                        onClick: () => {
                          window.open(p[e].url);
                        },
                        children: [p[e].btnTitle, (0, s.jsx)(d.aw, {})],
                      }),
                      (0, s.jsx)("img", {
                        src: p[e].img,
                        className: "max-w-[420px]",
                        alt: "",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)("div", {
              className: "w-full lg:hidden",
              children: (0, s.jsxs)("div", {
                className:
                  "flex flex-col items-center w-full mt-[140px] md:mt-[200px]",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "fontSemibold text-[26px] md:text-[32px] leading-[36px] md:leading-[48px] text-blue",
                    style: { zIndex: "2" },
                    children: "Introducing OmniX AI",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "mt-[26px] text-white text-[30px] md:text-[48px] leading-[30px] md:leading-[48px] fontSemibold",
                    style: { zIndex: "2" },
                    children: p[e].title,
                  }),
                  (0, s.jsxs)("div", {
                    className: h().infoMobile,
                    style: { zIndex: "2" },
                    children: [
                      (0, s.jsxs)("div", {
                        className: h().infoBtnMobile,
                        onClick: () => {
                          window.open(p[e].url);
                        },
                        children: [
                          p[e].btnTitle,
                          (0, s.jsx)("span", {
                            className: "pl-[22px] pr-[16px]",
                            children: (0, s.jsx)(d.aw, {}),
                          }),
                        ],
                      }),
                      (0, s.jsx)("img", {
                        src: p[e].img,
                        className: "max-h-[468px] mt-[43px]",
                        alt: "",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "w-full",
                    style: { zIndex: "2" },
                    children: p.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "cursor-pointer",
                          onClick: () => {
                            m(t);
                          },
                          children: [
                            (0, s.jsx)("div", {
                              className: "".concat(h().subTitleMobile),
                              children: e.subTitle,
                            }),
                            (0, s.jsx)("div", {
                              className: "".concat(h().contentMobile),
                              children: e.content,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function b() {
        return (0, s.jsxs)("div", {
          className:
            "w-full flex flex-col items-center mt-[140px] md:mt-[215px] lg:mt-[250px] relative",
          children: [
            (0, s.jsx)("div", { className: h().gradient2 }),
            (0, s.jsx)("div", {
              className:
                "fontSemibold text-[50px] md:text-[80px] lg:text-[64px] leading-[80px] md:leading-[120px] lg:leading-[96px] text-center text-white h-[96px]",
              children: "How To Earn",
            }),
            (0, s.jsx)("div", {
              className:
                "text-[26px] md:text-[32px] max-w-[500px] lg:max-w-[unset] mt-[10px] lg:mt-0 leading-[40px] md:leading-[60px] text-center",
              children: "Control OmniX AI’s destiny by locking into OMNIX.",
            }),
            (0, s.jsx)("div", {
              className:
                "lg:mt-[78px] w-full flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between",
              children: [
                {
                  title: "Lock OMNIX",
                  subTitle: "and Receive OMNIX",
                  color: "#3FFAAF",
                  content:
                    "Lock OMNIX for up to 2 years to receive vote-escrowed OMNIX (OMNIX). The longer OMNIX lock, the more OMNIX you receive.",
                },
                {
                  title: "Use OMNIX to Vote",
                  subTitle: "for Your Favorite Pools",
                  color: "#E7FF42",
                  content:
                    "OMNIX gives you voting power to decide which pools should receive OMNIX emissions.",
                },
                {
                  title: "Receive Bribes",
                  subTitle: "and Trading Fees",
                  color: "#3FFAAF",
                  content:
                    "Voting for a pool lets you claim a share of OMNIX weekly bribes and trading fees.",
                },
              ].map((e, t) =>
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("div", {
                      className: h().earnCard,
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex flex-row",
                          children: [
                            (0, s.jsx)("span", {
                              style: { backgroundColor: e.color },
                              className:
                                "rounded-[8px] fontSemibold text-black text-[27px] leading-[42px] px-[10px] py-[6px]",
                              children: e.title,
                            }),
                            (0, s.jsx)("div", {
                              style: { backgroundColor: e.color },
                              className:
                                "rounded-[8px] fontSemibold text-[20px] w-[32px] text-black flex items-center justify-center h-[32px] ml-2",
                              children: t + 1,
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "mt-[12px]",
                          children: (0, s.jsx)("span", {
                            style: { backgroundColor: e.color },
                            className: "fontSemibold rounded-[8px] bg-[".concat(
                              e.color,
                              "] text-black text-[20px] leading-[30px] px-[10px] py-[6px]"
                            ),
                            children: e.subTitle,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "mt-[39px] text-white text-[16px] leading-[30px]",
                          children: e.content,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: h().earnCardMobile,
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex flex-row",
                          children: [
                            (0, s.jsx)("span", {
                              style: { backgroundColor: e.color },
                              className:
                                "rounded-[8px] fontSemibold text-black text-[24px] md:text-[36px] lg:text-[27px] leading-[36px] md:leading-[54px] lg:leading-[42px] px-[14px] md:px-[20px] whitespace-nowrap py-[7px]",
                              children: e.title,
                            }),
                            (0, s.jsx)("div", {
                              style: { backgroundColor: e.color },
                              className:
                                "rounded-[8px] fontSemibold text-[24px] md:text-[40px] lg:text-[20px] w-[36px] md:w-[47px] text-black flex items-center justify-center h-[40px] md:h-[53px] ml-2",
                              children: t + 1,
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "mt-[27px]",
                          children: (0, s.jsx)("span", {
                            style: { backgroundColor: e.color },
                            className: "fontSemibold rounded-[8px] bg-[".concat(
                              e.color,
                              "] text-black text-[20px] md:text-[32px] leading-[32px] md:leading-[48px] px-[14px] md:px-[20px] py-[8px] whitespace-nowrap"
                            ),
                            children: e.subTitle,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "w-[97%] mt-[24px] md:mt-[36px] text-[18px] md:text-[28px] leading-[28px] md:leading-[48px]",
                          children: e.content,
                        }),
                      ],
                    }),
                  ],
                })
              ),
            }),
            (0, s.jsx)("div", {
              className: "w-full mt-[30px] hidden lg:block",
              style: { zIndex: "1" },
              children: (0, s.jsx)("img", {
                alt: "",
                className: "w-full",
                src: "/earnImage.png",
              }),
            }),
            (0, s.jsx)("div", {
              className: "w-full mt-[60px] lg:hidden",
              style: { zIndex: "1" },
              children: (0, s.jsx)("img", {
                alt: "",
                className: "w-full",
                src: "/earnImageMobile.png",
              }),
            }),
          ],
        });
      }
      function w() {
        let e = (0, r.useRef)(null),
          [t, l] = (0, r.useState)(0),
          n = [
            {
              title: "Request Gauge",
              subTitle: "Whitelisting",
              color: "#3FFAAF",
              content:
                "Protocols that seek to open a gauge to be voted on have to request a whitelisting by presenting a proposal.",
            },
            {
              title: "Create a Bribe With",
              subTitle: "Few Clicks",
              color: "#E7FF42",
              content:
                "Once OMNIX gauge has been initiated, anyone can bribe it with just a few clicks. Bribes are set per epoch, which lasts for 7 days.",
            },
            {
              title: "Receive Emissions",
              subTitle: "From OMNIX Holders Votes",
              color: "#3FFAAF",
              content:
                "OMNIX emissions are distributed to gauges for new epoch based on votes from OMNIX holders.",
            },
          ];
        return (
          (0, r.useEffect)(() => {
            e.current && l(e.current.clientWidth);
          }, [e]),
          (0, s.jsxs)("div", {
            className:
              "w-full flex flex-col mt-[160px] items-center lg:items-stretch lg:mt-[190px] relative",
            children: [
              (0, s.jsx)("div", {
                className: "absolute top-[100px] left-[45px] hidden lg:block",
                children: (0, s.jsx)(d.vH, {}),
              }),
              (0, s.jsx)("div", { className: h().lineNews }),
              (0, s.jsx)("div", { className: h().gradient4 }),
              (0, s.jsx)("div", {
                ref: e,
                children: (0, s.jsx)("span", {
                  className:
                    "fontSemibold text-[64px] leading-[96px] py-[12px] px-[24px] bg-[#C44EFF] rounded-[20px] text-black",
                  children: "Protocols",
                }),
              }),
              (0, s.jsxs)("div", {
                className: "xl:px-[162px] w-full",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "mt-[47px] lg:mt-[40px] text-white leading-[40px] md:leading-[60px] text-[28px] md:text-[40px] text-center lg:text-start",
                    children: [
                      "Attract votes to obtain more",
                      (0, s.jsx)("br", {}),
                      " emissions by rewarding more bribes",
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "mt-0 lg:mt-[74px] flex-row items-center flex-wrap justify-between hidden lg:flex",
                    children: n.map((e, t) =>
                      2 === t
                        ? (0, s.jsxs)(
                            "div",
                            {
                              className: h().earnCardFull,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "w-1/2 pt-[45px] pb-[75px]",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className: "flex flex-row",
                                      children: [
                                        (0, s.jsx)("span", {
                                          style: { backgroundColor: e.color },
                                          className:
                                            "rounded-[8px] fontSemibold text-black text-[20px] lg:text-[28px] leading-[42px] px-[10px] py-[6px]",
                                          children: e.title,
                                        }),
                                        (0, s.jsx)("div", {
                                          style: { backgroundColor: e.color },
                                          className:
                                            "rounded-[8px] fontSemibold text-[16px] lg:text-[20px] w-[32px] text-black flex items-center justify-center h-[32px] ml-2",
                                          children: t + 1,
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      className: "mt-[12px]",
                                      children: (0, s.jsx)("span", {
                                        style: { backgroundColor: e.color },
                                        className:
                                          "fontSemibold rounded-[8px] bg-[".concat(
                                            e.color,
                                            "] text-black text-[16px] lg:text-[20px] leading-[30px] px-[10px] py-[6px]"
                                          ),
                                        children: e.subTitle,
                                      }),
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "mt-[39px] max-w-[350px] text-white text-[13px] lg:text-[16px] leading-[30px]",
                                      children: e.content,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "w-1/2 flex flex-row justify-center items-center",
                                  children: (0, s.jsx)("img", {
                                    src: "/emissions.png",
                                    className: "max-h-[312px]",
                                    alt: "",
                                  }),
                                }),
                              ],
                            },
                            t
                          )
                        : (0, s.jsxs)(
                            "div",
                            {
                              className: h().earnCard2,
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "flex flex-row",
                                  children: [
                                    (0, s.jsx)("span", {
                                      style: { backgroundColor: e.color },
                                      className:
                                        "rounded-[8px] fontSemibold text-black text-[20px] lg:text-[28px] leading-[42px] px-[10px] py-[6px]",
                                      children: e.title,
                                    }),
                                    (0, s.jsx)("div", {
                                      style: { backgroundColor: e.color },
                                      className:
                                        "rounded-[8px] fontSemibold text-[16px] lg:text-[20px] w-[32px] text-black flex items-center justify-center h-[32px] ml-2",
                                      children: t + 1,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("div", {
                                  className: "mt-[12px]",
                                  children: (0, s.jsx)("span", {
                                    style: { backgroundColor: e.color },
                                    className:
                                      "fontSemibold rounded-[8px] bg-[".concat(
                                        e.color,
                                        "] text-black text-[16px] lg:text-[20px] leading-[30px] px-[10px] py-[6px]"
                                      ),
                                    children: e.subTitle,
                                  }),
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "mt-[39px] text-white text-[13px] lg:text-[16px] leading-[30px]",
                                  children: e.content,
                                }),
                              ],
                            },
                            t
                          )
                    ),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "mt-0 flex flex-row items-center flex-wrap justify-between lg:hidden",
                    children: n.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: h().earnCardFullMobile,
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex flex-row",
                              children: [
                                (0, s.jsx)("span", {
                                  style: { backgroundColor: e.color },
                                  className:
                                    "rounded-[8px] fontSemibold text-black text-[22px] md:text-[36px] whitespace-nowrap leading-[32px] md:leading-[54px] px-[14px] md:px-[20px] py-[7px]",
                                  children: e.title,
                                }),
                                (0, s.jsx)("div", {
                                  style: { backgroundColor: e.color },
                                  className:
                                    "rounded-[8px] fontSemibold text-[20px] md:text-[40px] w-[38px] md:w-[47px] text-black flex items-center justify-center h-[40px] md:h-[50px] ml-2",
                                  children: t + 1,
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "mt-[20px] md:mt-[27px]",
                              children: (0, s.jsx)("span", {
                                style: { backgroundColor: e.color },
                                className:
                                  "fontSemibold rounded-[8px] bg-[".concat(
                                    e.color,
                                    "] whitespace-nowrap text-black text-[20px] md:text-[32px] leading-[32px] md:leading-[48px] px-[14px] md:px-[20px] py-[7px]"
                                  ),
                                children: e.subTitle,
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "mt-[16px] md:mt-[30px] text-[18px] md:text-[28px] leading-[28px] md:leading-[48px]",
                              children: e.content,
                            }),
                            2 === t &&
                              (0, s.jsx)("div", {
                                className:
                                  "w-full px-[50px] flex flex-row justify-center items-center",
                                children: (0, s.jsx)("img", {
                                  src: "/emissions.png",
                                  className: "w-full",
                                  alt: "",
                                }),
                              }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function v() {
        return (0, s.jsxs)("div", {
          className: h().nftBox,
          children: [
            (0, s.jsxs)("div", {
              className:
                "w-full flex flex-col lg:flex-row lg:justify-between items-stretch lg:items-center",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "fontSemibold text-[48px] md:text-[56px] lg:text-[64px] leading-[70px] lg:leading-[96px] text-white",
                  children: "OmnixNFT",
                }),
                (0, s.jsxs)(
                  g(),
                  {
                    className: "".concat(
                      h().animationPulse,
                      " hidden lg:flex items-center gap-2 h-[46px] pl-[45px] pr-[14px] text-black rounded-[30px]"
                    ),
                    href: "/mint",
                    style: { flex: "0 0 auto" },
                    children: [
                      (0, s.jsx)("button", {
                        className: h().mintBtn2,
                        style: { paddingRight: 0 },
                        children: "MINT OmnixNFT",
                      }),
                      (0, s.jsx)("span", {
                        className: "ml-1",
                        children: (0, s.jsx)(d.t_, {}),
                      }),
                    ],
                  },
                  "presale"
                ),
                (0, s.jsxs)(
                  g(),
                  {
                    className: "".concat(
                      h().animationPulse,
                      " lg:hidden w-[225px] md:w-[335px] mt-[20px] flex items-center justify-center gap-2 h-[56px] md:h-[80px] text-black rounded-[50px]"
                    ),
                    href: "/mint",
                    style: { flex: "0 0 auto" },
                    children: [
                      (0, s.jsx)("button", {
                        className: h().mintBtn2,
                        style: { paddingRight: 0 },
                        children: "MINT OmnixNFT",
                      }),
                      (0, s.jsx)("span", {
                        className: "ml-1 hidden md:block",
                        children: (0, s.jsx)(d.aw, {
                          size: "32",
                          color: "#000",
                        }),
                      }),
                      (0, s.jsx)("span", {
                        className: "ml-1 md:hidden",
                        children: (0, s.jsx)(d.aw, {
                          size: "24",
                          color: "#000",
                        }),
                      }),
                    ],
                  },
                  "presale"
                ),
              ],
            }),
            (0, s.jsx)("div", {
              className: "lg:px-[54px] mt-[40px] lg:mt-[30px]",
              children: (0, s.jsxs)("div", {
                className: h().nftContent,
                children: [
                  (0, s.jsxs)("div", {
                    className: "w-full lg:w-[58%]",
                    style: { zIndex: "1" },
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "leading-[24px] md:leading-[32px] lg:leading-[26px] text-[24px] md:text-[32px] lg:text-[20px] fontSemibold pb-[12px] text-white",
                        children: "Benefits",
                      }),
                      (0, s.jsxs)("div", {
                        className: "".concat(
                          h().nftDesc,
                          " mt-[60px] lg:mt-[24px]"
                        ),
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "fontSemibold w-full lg:w-[unset] inline-block",
                            children: "\xb7 Passive Income:",
                          }),
                          " 10% OmniX AI trading fees + 3% of secondary NFT sales.",
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: h().nftDesc,
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "fontSemibold w-full lg:w-[unset] inline-block",
                            children: "\xb7 Emission Rewards:",
                          }),
                          " Earn $OMNIX emissions simply by staking your OmnixNFT.",
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: h().nftDesc,
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "fontSemibold w-full lg:w-[unset] inline-block",
                            children: "\xb7 Exclusive Airdrops:",
                          }),
                          " Stake OmnixNFT to get 10% $OMNIX Airdrop.",
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: h().nftDesc,
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "fontSemibold w-full lg:w-[unset] inline-block",
                            children: "\xb7 Community Ownership:",
                          }),
                          " Shape the protocol's future through voting and governance.",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "w-full lg:w-[42%] mt-[40px] lg:mt-0 flex flex-row justify-center",
                    style: { zIndex: "1" },
                    children: (0, s.jsx)("img", {
                      src: "/homeNFT.png",
                      className: "w-full lg:max-w-[264px]",
                      alt: "",
                    }),
                  }),
                  (0, s.jsx)("div", { className: h().nftGradient1 }),
                  (0, s.jsx)("div", { className: h().nftGradient2 }),
                ],
              }),
            }),
          ],
        });
      }
      function N() {
        let [e, t] = (0, r.useState)(!1),
          [l, n] = (0, r.useState)(750);
        (0, r.useEffect)(() => {
          var e;
          n(
            (null === (e = window) || void 0 === e ? void 0 : e.innerWidth) ||
              750
          );
        }, []);
        let i = [
          {
            year: "2025",
            times: [
              {
                icon: (0, s.jsx)(d.G0, {}),
                iconMobile: (0, s.jsx)(d.G0, { size: "28" }),
                title: "September - December",
                desc: "launch perpetual trading function",
              },
              {
                icon: (0, s.jsx)(d.Yc, {}),
                iconMobile: (0, s.jsx)(d.Yc, { size: "20" }),
                title: "July - August",
                desc: "Integration of Launchpad",
              },
              {
                icon: (0, s.jsx)(d.dy, {}),
                iconMobile: (0, s.jsx)(d.dy, { size: "28" }),
                title: "May - July",
                desc: "Mainnet and Airdrop Launch",
              },
              {
                icon: (0, s.jsx)(d.uU, {}),
                iconMobile: (0, s.jsx)(d.uU, { size: "28" }),
                title: "February - March",
                desc: "Launch on OmniX testnet",
              },
              {
                icon: (0, s.jsx)(d.sQ, {}),
                iconMobile: (0, s.jsx)(d.sQ, { size: "24" }),
                title: "Jan",
                desc: "Community initiating, Tokenomics upgrade",
              },
            ],
          },
        ];
        return (0, s.jsxs)("div", {
          className: "w-full",
          children: [
            (0, s.jsxs)("div", {
              className:
                "w-full flex flex-col mt-[190px] lg:px-[166px] relative overflow-x-hidden",
              children: [
                i.map((e, t) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: "flex flex-row",
                      style: { zIndex: "1" },
                      children: [
                        (0, s.jsx)("div", {
                          className: "pt-[9px] hidden lg:block",
                          children: (0, s.jsx)(d.nQ, {}),
                        }),
                        (0, s.jsxs)("div", {
                          className: "lg:ml-[58px] pb-[60px] w-full",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "bg-[#fff] inline-block rounded-[8px] leading-[40px] text-[32px] text-black fontSemibold px-[18px] py-[10px] mb-[10px]",
                              children: e.year,
                            }),
                            e.times.map((e, t) =>
                              (0, s.jsx)(
                                "div",
                                {
                                  className: "w-full mt-[20px]",
                                  children: (0, s.jsxs)("div", {
                                    className: h().timeCard,
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: "".concat(
                                          h().cardIcon,
                                          " w-[40px] h-[40px] md:w-[54px] md:h-[54px] rounded-full justify-center items-center hidden md:flex"
                                        ),
                                        children: e.icon,
                                      }),
                                      (0, s.jsx)("div", {
                                        className: "".concat(
                                          h().cardIcon,
                                          " w-[40px] h-[40px] md:w-[54px] md:h-[54px] rounded-full flex justify-center items-center md:hidden"
                                        ),
                                        children: e.iconMobile,
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: "ml-[20px] md:ml-[22px]",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "leading-[30px] md:leading-[40px] text-white text-[20px] md:text-[24px] fontSemibold",
                                            children: e.title,
                                          }),
                                          (0, s.jsx)("div", {
                                            className:
                                              "leading-[18px] md:leading-[22px] text-[14px] md:text-[16px] opacity-80",
                                            children: e.desc,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                t
                              )
                            ),
                          ],
                        }),
                      ],
                    },
                    t
                  )
                ),
                (0, s.jsx)("div", {
                  className: h().line,
                  children: (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7",
                    height: "950",
                    viewBox: "0 0 7 950",
                    fill: "none",
                    children: (0, s.jsx)("path", {
                      d: "M3.49998 3L3.49996 946.5",
                      stroke: "white",
                      "stroke-opacity": "0.14",
                      "stroke-width": "6",
                      "stroke-linecap": "round",
                      "stroke-dasharray": "12 12",
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className:
                    "w-full flex flex-col items-center mt-[120px] pb-[277px]",
                  style: { zIndex: "1" },
                  children: (0, s.jsx)("div", {
                    onClick: () => (0, c._)(!0),
                    onMouseEnter: () => {
                      t(!0);
                    },
                    onMouseLeave: () => {
                      t(!1);
                    },
                    className: "cursor-pointer",
                    children: e
                      ? (0, s.jsx)(d.jX, {
                          width: "".concat(l >= 750 ? "400" : "250"),
                          height: "".concat(l >= 750 ? "116" : "73"),
                        })
                      : (0, s.jsx)(d.jM, {
                          width: "".concat(l >= 750 ? "400" : "250"),
                          height: "".concat(l >= 750 ? "116" : "73"),
                        }),
                  }),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: h().bgBottom,
              children: (0, s.jsx)("img", {
                src: "/bgFooter.png",
                className: "w-[110%] max-w-[110%]",
                alt: "",
              }),
            }),
          ],
        });
      }
      function _() {
        return (0, s.jsxs)("div", {
          className: "".concat(h().nftBox, " items-center !pb-[20px] relative"),
          children: [
            (0, s.jsx)("div", { className: h().gradient7 }),
            (0, s.jsx)("div", {
              className:
                "text-[48px] md:text-[56px] lg:text-[64px] text-white fontSemibold leading-[75px] text-center",
              children: "Partners",
            }),
            (0, s.jsx)("div", {
              className:
                "w-full mt-[24px] xs:mt-[40px] md:mt-[80px] flex flex-row items-center justify-center flex-wrap xl:max-w-[1000px]",
              style: { zIndex: "1" },
              children: [
                {
                  title: "OmniX",
                  icon: "/partners/iotex.png",
                  url: "https://iotex.io/",
                },
                {
                  title: "Bedrock",
                  icon: "/partners/bedrock.png",
                  url: "https://www.bedrock.technology/",
                },
                {
                  title: "OmniX_Daily",
                  icon: "/partners/iotexDaily.png",
                  url: "https://x.com/OmnixAI_Erc20",
                },
                {
                  title: "U2DPN",
                  icon: "/partners/u2dpn.png",
                  url: "https://u2dpn.xyz/",
                },
                {
                  title: "Inferix GPU",
                  icon: "/partners/inferix.png",
                  url: "https://inferix.io/",
                },
                {
                  title: "DePIN Buddy",
                  icon: "/partners/depin.png",
                  url: "https://x.com/OmnixAI_Erc20",
                },
                {
                  title: "mimo protocol",
                  icon: "/partners/mimo.png",
                  url: "https://mimo.finance/",
                },
                {
                  title: "WatchX",
                  icon: "/partners/watchx.png",
                  url: "https://watchx.network/",
                },
                {
                  title: "W3bstream",
                  icon: "/partners/w3bstream.png",
                  url: "https://w3bstream.com/",
                },
                {
                  title: "Magma Protocol",
                  icon: "/partners/magma.png",
                  url: "https://magma.finance/",
                },
                {
                  title: "TaskOn",
                  icon: "/partners/taskon.png",
                  url: "https://taskon.xyz/",
                },
                {
                  title: "ioPay",
                  icon: "/partners/iopay.png",
                  url: "https://iopay.me/",
                },
                {
                  title: "U2U Network",
                  icon: "/partners/u2unetwork.png",
                  url: "https://u2u.xyz/",
                },
                {
                  title: "Crust Network",
                  icon: "/partners/crust.png",
                  url: "https://crust.network/",
                },
                {
                  title: "SkyX",
                  icon: "/partners/skyx.png",
                  url: "https://skyxglobal.com/#/",
                },
                {
                  title: "PinSwap",
                  icon: "/partners/pinswap.png",
                  url: "https://www.pinswap.finance/",
                },
                {
                  title: "NetLink",
                  icon: "/partners/netlink.png",
                  url: "https://www.netlinkprotocol.io/",
                },
                {
                  title: "TabbyLab",
                  icon: "/partners/tabbylab.png",
                  url: "https://www.tabbylab.io/",
                },
                {
                  title: "Nubila",
                  icon: "/partners/nubila.png",
                  url: "https://nubila.ai/",
                },
              ].map((e) =>
                (0, s.jsxs)("div", {
                  className: h().partnersItem,
                  onClick: () => {
                    window.open(e.url);
                  },
                  children: [
                    (0, s.jsx)("img", {
                      src: e.icon,
                      className:
                        "w-[42px] h-[42px] xs:w-[60px] xs:h-[60px] sm:w-[100px] sm:h-[100px]",
                    }),
                    (0, s.jsx)("span", {
                      className:
                        "mt-[14px] text-white opacity-60 hidden xs:block text-center max-w-[35px] xs:max-w-[unset] text-[12px] xs:text-[14px] sm:text-[16px]",
                      children: e.title,
                    }),
                  ],
                })
              ),
            }),
          ],
        });
      }
      function y() {
        return (0, s.jsxs)("div", {
          className: "w-full mt-8 text-white text-center",
          children: [
            "Powered by",
            (0, s.jsx)(
              g(),
              {
                href: "https://twitter.com/OmnixAI_Erc20",
                target: "_blank",
                className: "px-2 text-blue hover:text-gray-200",
                children: "@OmniX AI Organization",
              },
              "twitter"
            ),
          ],
        });
      }
      function k() {
        return (0, s.jsxs)("div", {
          className: "bg-black flex flex-col items-center overflow-hidden",
          children: [
            (0, s.jsxs)("header", {
              className: "w-full fixed top-0 left-0",
              style: { zIndex: "99" },
              children: [
                (0, s.jsxs)(i(), {
                  children: [
                    (0, s.jsx)("title", { children: "OmniX AI" }),
                    (0, s.jsx)("link", {
                      rel: "apple-touch-icon",
                      sizes: "180x180",
                      href: "/favicon.ico",
                    }),
                    (0, s.jsx)("link", {
                      rel: "icon",
                      type: "image/png",
                      sizes: "32x32",
                      href: "/favicon.ico",
                    }),
                    (0, s.jsx)("link", {
                      rel: "icon",
                      type: "image/png",
                      sizes: "16x16",
                      href: "/favicon.ico",
                    }),
                    (0, s.jsx)("link", {
                      rel: "manifest",
                      href: "/site.webmanifest",
                    }),
                  ],
                }),
                (0, s.jsx)(p, {}),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "w-full px-[40px] md:px-[84px] lg:px-[100px] relative overflow-hidden",
              children: [
                (0, s.jsx)(j, {}),
                (0, s.jsx)(b, {}),
                (0, s.jsx)(w, {}),
                (0, s.jsx)(v, {}),
                (0, s.jsx)(_, {}),
                (0, s.jsx)(N, {}),
                (0, s.jsx)("div", { className: h().gradient3 }),
                (0, s.jsx)("div", {
                  className: h().gradient5,
                  style: { zIndex: "1" },
                }),
                (0, s.jsx)("div", { className: h().gradient6 }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "pb-[20px] pt-[156px]",
              children: (0, s.jsx)(y, {}),
            }),
          ],
        });
      }
      function L() {
        return (0, s.jsx)(k, {});
      }
    },
    81685: function (e) {
      e.exports = {
        topTitle: "Home_topTitle__iA4FH",
        topArea: "Home_topArea__K8Q12",
        animationPulse: "Home_animationPulse__d8oum",
        pulse: "Home_pulse__g11hs",
        mintBtn2: "Home_mintBtn2__m10TY",
        mintBtn: "Home_mintBtn__g3q_q",
        progressContainer: "Home_progressContainer__fEOk3",
        progressBar: "Home_progressBar__yiejZ",
        progressBall: "Home_progressBall__32gxG",
        card: "Home_card__4VFfu",
        subTitle: "Home_subTitle__9TKf_",
        content: "Home_content__yg6_1",
        subTitleMobile: "Home_subTitleMobile__5s_P0",
        contentMobile: "Home_contentMobile__0E_d_",
        active: "Home_active__mSLqE",
        activeContent: "Home_activeContent__nbn8_",
        info: "Home_info__bhMSO",
        infoMobile: "Home_infoMobile__JWPyW",
        infoBtn: "Home_infoBtn__X0BQ3",
        infoBtnMobile: "Home_infoBtnMobile__6yDJv",
        earnCard: "Home_earnCard__GWclP",
        earnCardMobile: "Home_earnCardMobile__dYW9r",
        earnCard2: "Home_earnCard2__aN_SQ",
        earnCardFull: "Home_earnCardFull__eNyZM",
        earnCardFullMobile: "Home_earnCardFullMobile__zP6Du",
        nftBox: "Home_nftBox__GLMtC",
        nftGradient1: "Home_nftGradient1__nFM_e",
        nftGradient2: "Home_nftGradient2__CfzSo",
        nftContent: "Home_nftContent__FX_5Y",
        nftDesc: "Home_nftDesc__qEk0V",
        timeCard: "Home_timeCard__mRFY3",
        cardIcon: "Home_cardIcon__ajzE8",
        line: "Home_line__m2hrj",
        gradient: "Home_gradient__4xrot",
        gradient2: "Home_gradient2__t6Srt",
        gradient3: "Home_gradient3__96nZ7",
        gradient4: "Home_gradient4__VuuG2",
        gradient5: "Home_gradient5__lFV44",
        gradient6: "Home_gradient6__GAkAE",
        videoBackground: "Home_videoBackground__q0JLB",
        mobileBg: "Home_mobileBg__b2LbN",
        bgBottom: "Home_bgBottom__Og_fN",
        news: "Home_news__fZZiX",
        lineNews: "Home_lineNews__fWgsW",
        partnersItem: "Home_partnersItem__H3Hs8",
        gradient7: "Home_gradient7__wzhbu",
      };
    },
  },
  function (e) {
    e.O(0, [8907, 3276, 5987, 9774, 2888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
