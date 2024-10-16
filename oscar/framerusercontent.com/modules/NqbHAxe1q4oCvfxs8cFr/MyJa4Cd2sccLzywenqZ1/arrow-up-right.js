let o;
var s = (r) => {
  if (!o) {
    const n = r.forwardRef(
      ({ color: i = "currentColor", size: e = 24, ...t }, l) =>
        r.createElement(
          "svg",
          {
            ref: l,
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: i,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            ...t,
          },
          r.createElement("line", { x1: "7", y1: "17", x2: "17", y2: "7" }),
          r.createElement("polyline", { points: "7 7 17 7 17 17" })
        )
    );
    (n.displayName = "ArrowUpRight"), (o = n);
  }
  return o;
};
export { s as default };
