/* @ds-bundle: {"format":4,"namespace":"ScholarSQuestDesignSystem_b05a4d","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"eee35f096d60","components/core/Badge.jsx":"6e77a79e33cf","components/core/Button.jsx":"25765d25de26","components/core/Card.jsx":"57420f3ecf13","components/core/Icon.jsx":"c199c574bd37","components/core/IconButton.jsx":"0c903ce57db6","components/core/Logo.jsx":"4e6bca8537fa","components/feedback/Alert.jsx":"dc4b07656cb1","components/feedback/Modal.jsx":"661abb7c44cb","components/feedback/ProgressBar.jsx":"a9ff8858dab6","components/forms/Checkbox.jsx":"3498fd79f9c3","components/forms/Input.jsx":"452630403adf","components/forms/Radio.jsx":"b663b6dd3ef3","components/forms/Select.jsx":"659caae1f2e4","components/forms/Switch.jsx":"2647cdf60185","components/navigation/NavBar.jsx":"20b31e1f5270","components/navigation/SideNav.jsx":"03d129d5fc1e","components/navigation/Tabs.jsx":"faa1ca5bd55a","ui_kits/app/app-shared.jsx":"62a0728fb090","ui_kits/app/screen-dashboard.jsx":"17344358c8c1","ui_kits/app/screen-lesson-room.jsx":"40d07ba030d0","ui_kits/app/screen-practice.jsx":"3246ddef8b0c","ui_kits/app/screen-progress.jsx":"54084ee39dd6","ui_kits/website/screen-about.jsx":"fcf1fc9432a0","ui_kits/website/screen-contact.jsx":"b2d1ed305fa4","ui_kits/website/screen-demo.jsx":"76cf9347c113","ui_kits/website/screen-home.jsx":"f1b6417550c5","ui_kits/website/screen-login.jsx":"4742b249bda1","ui_kits/website/screen-subject.jsx":"8f408afe39fd","ui_kits/website/site-shared.jsx":"b9dcf3eeeffa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ScholarSQuestDesignSystem_b05a4d = window.ScholarSQuestDesignSystem_b05a4d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 44,
  lg: 64
};
const RINGS = {
  teal: 'var(--sq-teal-400)',
  pink: 'var(--sq-pink-500)',
  sun: 'var(--sq-sun-400)',
  none: 'transparent'
};

/** Round person chip; initials when no photo is supplied. */
function Avatar({
  name = '',
  src,
  size = 'md',
  ring = 'teal',
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      width: px,
      height: px,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flex: '0 0 auto',
      background: 'var(--sq-teal-100)',
      color: 'var(--sq-teal-800)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: px * 0.36,
      boxShadow: ring === 'none' ? 'none' : `0 0 0 3px ${RINGS[ring] || RINGS.teal}`,
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** White rounded surface; the default container for every grouped block. */
function Card({
  children,
  tone = 'plain',
  padding = 24,
  hoverLift = false,
  accentBar,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const tones = {
    plain: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    warm: {
      background: 'var(--sq-cream-deep)',
      border: '1px solid #F3DEC8'
    },
    teal: {
      background: 'var(--sq-teal-50)',
      border: '1px solid var(--sq-teal-200)'
    },
    pink: {
      background: 'var(--sq-pink-50)',
      border: '1px solid var(--sq-pink-200)'
    },
    ink: {
      background: 'var(--sq-ink)',
      border: '1px solid var(--sq-ink)',
      color: 'var(--sq-white)'
    },
    outline: {
      background: 'transparent',
      border: '2px solid var(--sq-ink)'
    }
  };
  const t = tones[tone] || tones.plain;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: hoverLift && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hoverLift && hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...t,
      ...style
    }
  }), accentBar && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 6,
      background: accentBar
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
const CACHE = {};
const BASE = 'https://unpkg.com/lucide-static@0.446.0/icons/';

/** Lucide glyph inlined as SVG so it inherits currentColor. */
function Icon({
  name = 'star',
  size = 20,
  strokeWidth = 2,
  style,
  ...rest
}) {
  const [svg, setSvg] = useState(CACHE[name] || null);
  useEffect(() => {
    let live = true;
    if (CACHE[name]) {
      setSvg(CACHE[name]);
      return;
    }
    fetch(BASE + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      const body = t.replace(/<\?xml[^>]*\?>/, '').replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
      CACHE[name] = body;
      if (live) setSvg(body);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: svg || ''
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  teal: ['var(--sq-teal-100)', 'var(--sq-teal-800)'],
  pink: ['var(--sq-pink-100)', 'var(--sq-pink-800)'],
  sun: ['var(--sq-sun-100)', 'var(--sq-sun-700)'],
  grape: ['var(--sq-grape-100)', 'var(--sq-grape-700)'],
  success: ['var(--sq-success-soft)', '#0F7A4E'],
  neutral: ['var(--sq-grey-100)', 'var(--sq-grey-700)'],
  solid: ['var(--sq-pink-500)', '#fff']
};

/** Small status / category pill. */
function Badge({
  children,
  tone = 'teal',
  icon,
  size = 'md',
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.teal;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: sm ? 11 : 13,
      letterSpacing: '.02em',
      padding: sm ? '3px 9px' : '5px 13px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 12 : 14
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 14,
    radius: 'var(--radius-pill)',
    icon: 16,
    gap: 6
  },
  md: {
    padding: '12px 24px',
    fontSize: 16,
    radius: 'var(--radius-pill)',
    icon: 18,
    gap: 8
  },
  lg: {
    padding: '16px 34px',
    fontSize: 18,
    radius: 'var(--radius-pill)',
    icon: 20,
    gap: 10
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--sq-pink-500)',
    color: '#fff',
    border: '2px solid var(--sq-pink-500)',
    hover: {
      background: 'var(--sq-pink-600)',
      borderColor: 'var(--sq-pink-600)'
    }
  },
  secondary: {
    background: 'var(--sq-teal-400)',
    color: 'var(--sq-ink)',
    border: '2px solid var(--sq-teal-400)',
    hover: {
      background: 'var(--sq-teal-300)',
      borderColor: 'var(--sq-teal-300)'
    }
  },
  outline: {
    background: 'transparent',
    color: 'var(--sq-ink)',
    border: '2px solid var(--sq-ink)',
    hover: {
      background: 'var(--sq-ink)',
      color: '#fff'
    }
  },
  ghost: {
    background: 'transparent',
    color: 'var(--sq-teal-700)',
    border: '2px solid transparent',
    hover: {
      background: 'var(--sq-teal-50)'
    }
  },
  sun: {
    background: 'var(--sq-sun-400)',
    color: 'var(--sq-ink)',
    border: '2px solid var(--sq-sun-400)',
    hover: {
      background: 'var(--sq-sun-300)',
      borderColor: 'var(--sq-sun-300)'
    }
  }
};

/** The Scholar's Quest button: pill shaped, bold, with an optional sticker shadow. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  pop = false,
  fullWidth = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const on = hover && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: s.fontSize,
      lineHeight: 1.1,
      padding: s.padding,
      borderRadius: s.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: v.background,
      color: v.color,
      border: v.border,
      boxShadow: pop ? press ? '1px 1px 0 var(--sq-ink)' : 'var(--shadow-pop)' : 'none',
      transform: press && !disabled ? 'translate(2px,2px)' : 'translateY(0)',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...(on ? v.hover : null),
      ...style
    }
  }), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};

/** Square-ish circular icon-only control. */
function IconButton({
  icon = 'x',
  size = 'md',
  variant = 'soft',
  label,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const px = SIZES[size] || SIZES.md;
  const skins = {
    soft: {
      background: 'var(--sq-grey-100)',
      color: 'var(--sq-grey-700)',
      hover: 'var(--sq-grey-200)'
    },
    teal: {
      background: 'var(--sq-teal-100)',
      color: 'var(--sq-teal-700)',
      hover: 'var(--sq-teal-200)'
    },
    pink: {
      background: 'var(--sq-pink-100)',
      color: 'var(--sq-pink-700)',
      hover: 'var(--sq-pink-200)'
    },
    solid: {
      background: 'var(--sq-pink-500)',
      color: '#fff',
      hover: 'var(--sq-pink-600)'
    },
    bare: {
      background: 'transparent',
      color: 'var(--sq-grey-600)',
      hover: 'var(--sq-grey-100)'
    }
  };
  const sk = skins[variant] || skins.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      width: px,
      height: px,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: hover && !disabled ? sk.hover : sk.background,
      color: sk.color,
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(px * 0.5)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'full-color': 'assets/logo-primary.png',
  'full-white': 'assets/logo-white.png',
  'mark-color': 'assets/logomark-color.png',
  'mark-white': 'assets/logomark-white.png',
  'mark-black': 'assets/logomark-black.png'
};

/** Scholar's Quest logo. assetBase points at the folder containing assets/. */
function Logo({
  variant = 'full-color',
  height = 40,
  assetBase = '',
  style,
  ...rest
}) {
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base + (SRC[variant] || SRC['full-color']),
    alt: "Scholar's Quest"
  }, rest, {
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--sq-info-soft)',
    border: 'var(--sq-teal-300)',
    fg: 'var(--sq-teal-800)',
    icon: 'info'
  },
  success: {
    bg: 'var(--sq-success-soft)',
    border: '#9EDFC3',
    fg: '#0F7A4E',
    icon: 'party-popper'
  },
  warning: {
    bg: 'var(--sq-warning-soft)',
    border: 'var(--sq-sun-300)',
    fg: 'var(--sq-sun-700)',
    icon: 'alert-triangle'
  },
  danger: {
    bg: 'var(--sq-danger-soft)',
    border: 'var(--sq-pink-300)',
    fg: 'var(--sq-pink-800)',
    icon: 'alert-circle'
  }
};

/** Inline message banner. */
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: t.bg,
      border: `2px solid ${t.border}`,
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      fontFamily: 'var(--font-body)',
      color: t.fg,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.5
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'inherit',
      display: 'flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred dialog over a scrim. */
function Modal({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(20,18,24,.45)',
      backdropFilter: 'var(--blur-glass)'
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true"
  }, rest, {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 800,
      margin: 0,
      color: 'var(--sq-ink)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    size: "sm",
    variant: "soft",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  teal: 'var(--sq-teal-400)',
  pink: 'var(--sq-pink-500)',
  sun: 'var(--sq-sun-400)',
  success: 'var(--sq-success)'
};

/** Horizontal progress track used for streaks, mastery and course completion. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'teal',
  label,
  showValue = false,
  height = 12,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--sq-ink)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--sq-grey-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: TONES[tone] || TONES.teal,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with a teal filled box and white tick. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--sq-grey-700)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 8,
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--sq-teal-500)' : '#fff',
      border: `2px solid ${checked ? 'var(--sq-teal-500)' : 'var(--border-default)'}`,
      color: '#fff',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Labelled text field. */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  icon,
  hint,
  error,
  disabled,
  fullWidth = true,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const borderColor = error ? 'var(--sq-danger)' : focus ? 'var(--sq-teal-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      width: fullWidth ? '100%' : undefined,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--sq-ink)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: disabled ? 'var(--sq-grey-100)' : '#fff',
      border: `2px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '11px 16px',
      boxShadow: focus ? '0 0 0 4px var(--sq-teal-100)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sq-grey-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--sq-ink)'
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 13,
      fontWeight: 600,
      color: error ? 'var(--sq-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio option; also works as a card-style picker with `block`. */
function Radio({
  label,
  description,
  name,
  checked = false,
  onChange,
  block = false,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: block ? 'flex' : 'inline-flex',
      alignItems: block ? 'flex-start' : 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      opacity: disabled ? 0.5 : 1,
      padding: block ? '14px 16px' : 0,
      borderRadius: block ? 'var(--radius-md)' : 0,
      border: block ? `2px solid ${checked ? 'var(--sq-teal-500)' : 'var(--border-subtle)'}` : 'none',
      background: block ? checked ? 'var(--sq-teal-50)' : '#fff' : 'transparent',
      transition: 'border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      flex: '0 0 auto',
      marginTop: block ? 2 : 0,
      border: `2px solid ${checked ? 'var(--sq-teal-500)' : 'var(--border-default)'}`,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--sq-teal-500)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--sq-ink)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Native select in Scholar's Quest field clothing. */
function Select({
  label,
  options = [],
  value,
  onChange,
  hint,
  disabled,
  fullWidth = true,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      width: fullWidth ? '100%' : undefined,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--sq-ink)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: disabled ? 'var(--sq-grey-100)' : '#fff',
      border: `2px solid ${focus ? 'var(--sq-teal-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '11px 16px',
      boxShadow: focus ? '0 0 0 4px var(--sq-teal-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: 'none',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--sq-ink)',
      cursor: 'pointer'
    }
  }), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sq-grey-500)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On/off toggle. */
function Switch({
  label,
  checked = false,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--sq-grey-700)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 50,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      flex: '0 0 auto',
      background: checked ? 'var(--sq-teal-500)' : 'var(--sq-grey-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transform: checked ? 'translateX(22px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-bounce)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Marketing site top bar. */
function NavBar({
  links = [],
  active,
  onNavigate,
  assetBase = '',
  cta = 'Book a free demo',
  onCta,
  secondaryCta,
  onSecondaryCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(255,249,242,.88)',
      backdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]);
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "full-color",
    height: 38,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      fontSize: 15,
      fontWeight: 800,
      textDecoration: 'none',
      color: l === active ? 'var(--sq-pink-600)' : 'var(--sq-grey-700)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, secondaryCta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "outline",
    onClick: onSecondaryCta
  }, secondaryCta), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    onClick: onCta
  }, cta))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** App left rail. */
function SideNav({
  items = [],
  value,
  onChange,
  assetBase = '',
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({}, rest, {
    style: {
      width: 236,
      flex: '0 0 auto',
      background: '#fff',
      borderRight: '1px solid var(--border-subtle)',
      padding: '20px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 10px 18px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "full-color",
    height: 32,
    assetBase: assetBase
  })), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        textAlign: 'left',
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        background: active ? 'var(--sq-teal-100)' : 'transparent',
        color: active ? 'var(--sq-teal-800)' : 'var(--sq-grey-600)',
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: 15,
        transition: 'background var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || 'circle',
      size: 19
    }), it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        background: 'var(--sq-pink-500)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 800,
        borderRadius: 'var(--radius-pill)',
        padding: '2px 8px'
      }
    }, it.badge));
  }), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill tab switcher. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'pill',
  style,
  ...rest
}) {
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'inline-flex',
      gap: pill ? 4 : 24,
      padding: pill ? 4 : 0,
      background: pill ? 'var(--sq-grey-100)' : 'transparent',
      borderRadius: 'var(--radius-pill)',
      borderBottom: pill ? 'none' : '2px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }), items.map(it => {
    const id = typeof it === 'string' ? it : it.value;
    const lab = typeof it === 'string' ? it : it.label;
    const icon = typeof it === 'string' ? null : it.icon;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: 15,
        padding: pill ? '9px 18px' : '0 0 12px',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        background: pill && active ? '#fff' : 'transparent',
        boxShadow: pill && active ? 'var(--shadow-xs)' : 'none',
        color: active ? 'var(--sq-ink)' : 'var(--sq-grey-500)',
        borderBottom: pill ? 'none' : `3px solid ${active ? 'var(--sq-pink-500)' : 'transparent'}`,
        marginBottom: pill ? 0 : -2,
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 16
    }), lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-shared.jsx
try { (() => {
const {
  Card,
  Icon,
  Badge
} = window.ScholarSQuestDesignSystem_b05a4d;
function PageHead({
  title,
  sub,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 900,
      letterSpacing: '-.02em',
      margin: 0,
      color: 'var(--sq-ink)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, sub)), right);
}
function StatTile({
  icon,
  value,
  label,
  tone = 'teal'
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 14,
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `var(--sq-${tone}-100)`,
      color: `var(--sq-${tone}-700)`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--sq-ink)',
      lineHeight: 1.1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, label))));
}
Object.assign(window, {
  PageHead,
  StatTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screen-dashboard.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Avatar,
  Icon,
  ProgressBar,
  Checkbox,
  Alert
} = window.ScholarSQuestDesignSystem_b05a4d;
function Dashboard({
  onJoin,
  onPractice
}) {
  const [done, setDone] = React.useState({
    0: true
  });
  const tasks = [['Algebra I — Worksheet 4.2', 'Due Tue', 'teal'], ['Read "The Outsiders" ch. 7–9', 'Due Wed', 'pink'], ['SAT Math drill — linear systems', 'Due Thu', 'sun'], ['Essay draft: thesis paragraph', 'Due Fri', 'pink']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Hi, Jordan \uD83D\uDC4B",
    sub: "Tuesday, 12 September",
    right: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: "calendar"
    }, "Reschedule")
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: 26,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Rodriguez",
    size: "lg",
    ring: "teal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid",
    size: "sm"
  }, "Starts in 12 minutes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 900,
      color: '#fff',
      margin: '8px 0 4px'
    }
  }, "Algebra I with Maya R."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--sq-grey-400)'
    }
  }, "4:00 \u2013 4:50pm \xB7 Quadratic equations")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    pop: true,
    iconRight: "video",
    onClick: onJoin
  }, "Join lesson"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "flame",
    value: "12",
    label: "day streak",
    tone: "sun"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "check-circle",
    value: "38",
    label: "lessons done",
    tone: "teal"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "pencil",
    value: "214",
    label: "questions solved",
    tone: "pink"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "trending-up",
    value: "+218",
    label: "SAT gain",
    tone: "teal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 900,
      margin: 0,
      color: 'var(--sq-ink)'
    }
  }, "This week"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, Object.values(done).filter(Boolean).length, "/4 done")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, tasks.map(([t, due, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      background: done[i] ? 'var(--sq-grey-100)' : '#fff'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: !!done[i],
    onChange: () => setDone({
      ...done,
      [i]: !done[i]
    })
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 15,
      fontWeight: 700,
      color: done[i] ? 'var(--text-muted)' : 'var(--sq-ink)',
      textDecoration: done[i] ? 'line-through' : 'none'
    }
  }, t), /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    size: "sm"
  }, due)))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: "arrow-right",
    style: {
      marginTop: 14
    },
    onClick: onPractice
  }, "Start today's practice")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 900,
      margin: '0 0 16px',
      color: 'var(--sq-ink)'
    }
  }, "Mastery"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Algebra I",
    value: 72,
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Essay writing",
    value: 45,
    showValue: true,
    tone: "pink"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "SAT Math",
    value: 88,
    showValue: true,
    tone: "sun"
  }))), /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Nice \u2014 quadratics unlocked"
  }, "You scored 9/10 on Friday's check. Maya added one harder set."))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screen-dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screen-lesson-room.jsx
try { (() => {
const {
  Card,
  Button,
  IconButton,
  Badge,
  Avatar,
  Icon
} = window.ScholarSQuestDesignSystem_b05a4d;
function LessonRoom({
  onLeave
}) {
  const [tool, setTool] = React.useState('pen');
  const [mic, setMic] = React.useState(true);
  const tools = [['pen', 'pen-tool'], ['text', 'type'], ['shape', 'square'], ['eraser', 'eraser'], ['equation', 'sigma']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Lesson room",
    sub: "Algebra I \xB7 Quadratic equations \xB7 50 minutes",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "pink",
      icon: "circle-dot"
    }, "Live \xB7 18:42"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onLeave
    }, "Leave"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tools.map(([id, ic]) => /*#__PURE__*/React.createElement(IconButton, {
    key: id,
    icon: ic,
    label: id,
    size: "sm",
    variant: tool === id ? 'teal' : 'bare',
    onClick: () => setTool(id)
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: 'var(--border-subtle)',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "undo-2",
    label: "Undo",
    size: "sm",
    variant: "bare"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "trash-2",
    label: "Clear",
    size: "sm",
    variant: "bare"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      fontWeight: 800,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, "Shared whiteboard")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 420,
      background: `var(--sq-white)`,
      backgroundImage: 'radial-gradient(var(--sq-grey-200) 1.2px, transparent 1.2px)',
      backgroundSize: '22px 22px',
      position: 'relative',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--sq-ink)'
    }
  }, "x\xB2 + 5x + 6 = 0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      color: 'var(--sq-teal-700)',
      marginTop: 18
    }
  }, "(x + 2)(x + 3) = 0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      color: 'var(--sq-pink-600)',
      marginTop: 14
    }
  }, "x = \u22122 \xA0 or \xA0 x = \u22123"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 26,
      top: 26,
      width: 180,
      padding: 14,
      background: 'var(--sq-sun-100)',
      border: '2px solid var(--sq-sun-300)',
      borderRadius: 16,
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--sq-sun-700)',
      transform: 'rotate(1.5deg)'
    }
  }, "Factor pairs of 6 that add to 5 \u2192 2 and 3"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      bottom: 26,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      fontWeight: 800,
      color: 'var(--sq-teal-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--sq-teal-500)'
    }
  }), "Maya is drawing\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: 'var(--sq-teal-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Rodriguez",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm",
    style: {
      position: 'absolute',
      left: 10,
      bottom: 10,
      background: 'rgba(255,255,255,.9)'
    }
  }, "Maya R. \xB7 Tutor")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      background: 'var(--sq-grey-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Jordan Lee",
    ring: "pink"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm",
    style: {
      position: 'absolute',
      left: 10,
      bottom: 10,
      background: 'rgba(255,255,255,.9)'
    }
  }, "You")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 12,
      justifyContent: 'center',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: mic ? 'mic' : 'mic-off',
    label: "Mic",
    variant: mic ? 'soft' : 'pink',
    onClick: () => setMic(!mic)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "video",
    label: "Camera",
    variant: "soft"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "monitor-up",
    label: "Share screen",
    variant: "soft"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "phone-off",
    label: "Leave",
    variant: "solid",
    onClick: onLeave
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 900,
      margin: '0 0 10px',
      color: 'var(--sq-ink)'
    }
  }, "Session plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, [['Warm-up: factoring review', true], ['Quadratics by factoring', true], ['Word problems', false], ['Set homework', false]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      fontSize: 13.5,
      fontWeight: 700,
      color: d ? 'var(--text-muted)' : 'var(--sq-ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d ? 'check-circle' : 'circle',
    size: 16,
    style: {
      color: d ? 'var(--sq-success)' : 'var(--sq-grey-400)'
    }
  }), t)))))));
}
window.LessonRoom = LessonRoom;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screen-lesson-room.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screen-practice.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Icon,
  ProgressBar,
  Alert,
  Tabs
} = window.ScholarSQuestDesignSystem_b05a4d;
const CHOICES = [['A', 'x = −2 or x = −3', true], ['B', 'x = 2 or x = 3', false], ['C', 'x = −1 or x = −6', false], ['D', 'No real solutions', false]];
function Practice({
  onBack
}) {
  const [tab, setTab] = React.useState('math');
  const [picked, setPicked] = React.useState(null);
  const [hint, setHint] = React.useState(false);
  const answered = picked !== null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Practice",
    sub: "Question 4 of 10 \xB7 Quadratic equations",
    right: /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: 'math',
        label: 'Math',
        icon: 'calculator'
      }, {
        value: 'english',
        label: 'English',
        icon: 'book-open'
      }, {
        value: 'sat',
        label: 'SAT',
        icon: 'target'
      }]
    })
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 40,
    height: 10,
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 280px',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    icon: "calculator"
  }, "Algebra I \xB7 Factoring"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--sq-ink)',
      margin: '18px 0 10px'
    }
  }, "Solve for x:"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--sq-ink)',
      marginBottom: 24
    }
  }, "x\xB2 + 5x + 6 = 0"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, CHOICES.map(([k, label, correct]) => {
    const isPicked = picked === k;
    const show = answered && (correct || isPicked);
    const good = answered && correct;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => !answered && setPicked(k),
      disabled: answered,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 18px',
        textAlign: 'left',
        borderRadius: 16,
        cursor: answered ? 'default' : 'pointer',
        fontFamily: 'var(--font-body)',
        border: `2px solid ${show ? correct ? 'var(--sq-success)' : 'var(--sq-danger)' : 'var(--border-subtle)'}`,
        background: show ? correct ? 'var(--sq-success-soft)' : 'var(--sq-danger-soft)' : '#fff',
        transition: 'all var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: show ? correct ? 'var(--sq-success)' : 'var(--sq-danger)' : 'var(--sq-grey-100)',
        color: show ? '#fff' : 'var(--sq-grey-700)',
        fontWeight: 900,
        fontSize: 14
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 17,
        fontWeight: 600,
        color: 'var(--sq-ink)'
      }
    }, label), show && /*#__PURE__*/React.createElement(Icon, {
      name: correct ? 'check' : 'x',
      size: 20,
      style: {
        marginLeft: 'auto',
        color: correct ? 'var(--sq-success)' : 'var(--sq-danger)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "lightbulb",
    onClick: () => setHint(true)
  }, "Show a hint"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    pop: true,
    iconRight: "arrow-right",
    disabled: !answered,
    onClick: () => {
      setPicked(null);
      setHint(false);
    },
    style: {
      marginLeft: 'auto'
    }
  }, "Next question")), hint && /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Hint",
    style: {
      marginTop: 16
    }
  }, "Look for two numbers that multiply to 6 and add to 5."), answered && /*#__PURE__*/React.createElement(Alert, {
    tone: picked === 'A' ? 'success' : 'danger',
    title: picked === 'A' ? 'Correct!' : 'Not quite',
    style: {
      marginTop: 12
    }
  }, "(x + 2)(x + 3) = 0, so x = \u22122 or x = \u22123.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    tone: "warm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 22,
    style: {
      color: 'var(--sq-apricot-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 17,
      color: 'var(--sq-ink)'
    }
  }, "12-day streak")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, "Finish this set today to keep it alive.")), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 900,
      margin: '0 0 12px',
      color: 'var(--sq-ink)'
    }
  }, "This set"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 8
    }
  }, Array.from({
    length: 10
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 34,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      background: i < 3 ? 'var(--sq-teal-100)' : i === 3 ? 'var(--sq-pink-500)' : 'var(--sq-grey-100)',
      color: i === 3 ? '#fff' : i < 3 ? 'var(--sq-teal-800)' : 'var(--sq-grey-500)'
    }
  }, i + 1)))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    fullWidth: true,
    iconLeft: "arrow-left",
    onClick: onBack
  }, "Back to dashboard"))));
}
window.Practice = Practice;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screen-practice.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screen-progress.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Avatar,
  Icon,
  ProgressBar,
  Tabs
} = window.ScholarSQuestDesignSystem_b05a4d;
const SCORES = [[1180, 'Mar'], [1230, 'Apr'], [1260, 'May'], [1310, 'Jun'], [1350, 'Jul'], [1398, 'Aug']];
function Progress() {
  const [tab, setTab] = React.useState('overview');
  const max = 1500,
    min = 1100;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHead, {
    title: "Progress",
    sub: "Jordan Lee \xB7 Grade 10 \xB7 shared with Priya N.",
    right: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: "download"
    }, "Export report")
  }), /*#__PURE__*/React.createElement(Tabs, {
    variant: "underline",
    value: tab,
    onChange: setTab,
    items: [{
      value: 'overview',
      label: 'Overview'
    }, {
      value: 'topics',
      label: 'By topic'
    }, {
      value: 'notes',
      label: 'Tutor notes'
    }],
    style: {
      marginBottom: 22,
      display: 'flex'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "target",
    value: "1398",
    label: "latest SAT practice",
    tone: "sun"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "trending-up",
    value: "+218",
    label: "since March",
    tone: "teal"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "clock",
    value: "31h",
    label: "tutored this term",
    tone: "pink"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "calendar-check",
    value: "96%",
    label: "attendance",
    tone: "teal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 900,
      margin: '0 0 20px',
      color: 'var(--sq-ink)'
    }
  }, "SAT practice scores"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 18,
      height: 190
    }
  }, SCORES.map(([s, m], i) => {
    const h = (s - min) / (max - min) * 100;
    const last = i === SCORES.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: m,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600,
        textAlign: 'center',
        color: last ? 'var(--sq-pink-600)' : 'var(--text-muted)'
      }
    }, s), /*#__PURE__*/React.createElement("div", {
      style: {
        height: h + '%',
        borderRadius: '12px 12px 6px 6px',
        background: last ? 'var(--sq-pink-500)' : 'var(--sq-teal-300)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        textAlign: 'center',
        color: 'var(--text-muted)'
      }
    }, m));
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 900,
      margin: '0 0 18px',
      color: 'var(--sq-ink)'
    }
  }, "Mastery by topic"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Linear equations",
    value: 94,
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Quadratics",
    value: 72,
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Geometry",
    value: 58,
    showValue: true,
    tone: "sun"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Reading evidence",
    value: 81,
    showValue: true,
    tone: "pink"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Essay structure",
    value: 45,
    showValue: true,
    tone: "pink"
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 900,
      margin: '0 0 16px',
      color: 'var(--sq-ink)'
    }
  }, "Recent tutor notes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Maya Rodriguez', 'Sep 9 · Algebra I', 'Factoring is landing. Jordan solved 9/10 unprompted. Next week: word problems, which is where the wobble still is.'], ['Sam Keller', 'Sep 5 · ACT English', 'Comma rules are solid now. We slowed the reading pace and accuracy jumped — keep that pacing on the real test.'], ['Ada Lawal', 'Sep 2 · Essay writing', 'Thesis statements are much sharper. Body paragraphs still drift; we are drilling topic sentences next.']].map(([n, m, t]) => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      gap: 14,
      padding: '14px 16px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 15,
      color: 'var(--sq-ink)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, m)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-body)',
      lineHeight: 1.6,
      marginTop: 3
    }
  }, t)))))));
}
window.Progress = Progress;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screen-progress.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-about.jsx
try { (() => {
const {
  Card,
  Icon,
  Avatar
} = window.ScholarSQuestDesignSystem_b05a4d;
function About({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingTop: 64,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "About us"), /*#__PURE__*/React.createElement(Title, {
    size: 48
  }, "A small practice, on purpose"), /*#__PURE__*/React.createElement(Lede, {
    style: {
      marginTop: 18
    }
  }, "Scholar's Quest is one-on-one tutoring in Math and English for Kindergarten through Grade 12, built around the belief that confidence comes before grades, not the other way round."))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    h: 400,
    tone: "var(--sq-grey-100)",
    label: "Founder portrait: Kathni"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--sq-teal-700)"
  }, "The founder"), /*#__PURE__*/React.createElement(Title, {
    size: 32
  }, "Kathni Patel"), ["I've spent more than four years working with children in Math and English, and the thing I keep coming back to is that no two students get stuck in the same place. So I teach to the student in front of me: their pace, their learning style, the specific thing that isn't landing, rather than to a fixed curriculum.", 'Homework, exam preparation, or a concept that has refused to click for a year: we work on whatever is actually in the way. Grades improve, but the change parents mention first is usually confidence.', "Scholar's Quest has stayed deliberately small. I match every family myself, build the learning plan with you and your child, and read the session notes."].map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 15.5,
      fontWeight: 600,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: '14px 0 0'
    }
  }, p)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      flexWrap: 'wrap',
      paddingTop: 22,
      marginTop: 22,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, [['Qualification', 'Early Childhood Degree,\nSheridan College'], ['Experience', '4+ years teaching\nMath & English']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 900,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--sq-ink)',
      whiteSpace: 'pre-line'
    }
  }, v))))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--sq-teal-400)",
    pad: 60
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 44
    }
  }, [['200+', 'students enrolled with us to date'], ['80%', 'improve by two letter grades within their first semester'], ['K–12', 'grades served, in Math and English, including test prep']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 52,
      fontWeight: 600,
      lineHeight: 1,
      color: 'var(--sq-ink)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'rgba(20,18,24,.78)',
      marginTop: 12,
      maxWidth: 260
    }
  }, l))))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 34,
    style: {
      marginBottom: 30
    }
  }, "How we work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 22
    }
  }, [['search', 'Find the gap first', "Every student starts with a short diagnostic. We'd rather spend a session finding the real problem than a term treating the symptom."], ['user-check', 'One student, one tutor', 'No group classes and no rotating staff. The same tutor week after week, so progress compounds.'], ['notebook-pen', 'Parents stay informed', 'Notes after every session: what we covered, what clicked, what to practise. No mystery about where the money goes.'], ['heart-handshake', 'Confidence is the metric', 'A child who will attempt a hard problem in front of someone has already made the hardest gain. Grades tend to follow.']].map(([icon, h, p]) => /*#__PURE__*/React.createElement(Card, {
    key: h,
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--sq-pink-500)',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 900,
      margin: '0 0 8px',
      color: 'var(--sq-ink)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, p))))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(CtaCard, {
    heading: "Meet us before you commit",
    body: "One free session, a real tutor, and honest notes on what your child needs.",
    secondary: "Get in touch",
    onPrimary: () => onNav('Demo'),
    onSecondary: () => onNav('Contact')
  }))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-contact.jsx
try { (() => {
const {
  Card,
  Button,
  Input,
  Select,
  Alert,
  Icon,
  Badge
} = window.ScholarSQuestDesignSystem_b05a4d;
function Contact({
  onNav
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingTop: 64,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement(Title, {
    size: 48
  }, "Ask us anything"), /*#__PURE__*/React.createElement(Lede, {
    style: {
      marginTop: 18
    }
  }, "Questions about grade levels, scheduling, test prep or how we'd handle a particular problem. A real person reads every message."))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 44,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 420
    }
  }, [['Email', 'info@scholars.quest', 'mailto:info@scholars.quest', 'Replies within one business day.', 'mail'], ['Phone', '(609) 517-8112', 'tel:+16095178112', 'Call or text. Fastest for scheduling questions.', 'phone']].map(([label, value, href, note, icon]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11,
      fontWeight: 900,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14
  }), label), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 900,
      color: 'var(--sq-teal-700)'
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      margin: '8px 0 0'
    }
  }, note))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "warm",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 900,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--sq-apricot-700)',
      marginBottom: 10
    }
  }, "Ready to start?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-body)',
      margin: '0 0 16px'
    }
  }, "Skip the back-and-forth and book the free demo directly."), /*#__PURE__*/React.createElement(Button, {
    pop: true,
    onClick: () => onNav('Demo')
  }, "Book a free demo class"))), /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      boxShadow: 'var(--shadow-md)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Message sent"
  }, "Thanks, we'll reply within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    style: {
      marginTop: 18
    },
    onClick: () => setSent(false)
  }, "Write another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 24
  }, "Send a message"), /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    icon: "user"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    icon: "mail"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What's this about?",
    options: ['Starting tutoring', 'Scheduling', 'Test prep', 'Pricing', 'Something else']
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--sq-ink)',
      marginBottom: 6
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    placeholder: "Tell us a bit about your child's grade and what they're finding hard",
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--sq-ink)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: '2px solid var(--border-default)',
      outline: 'none',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    pop: true,
    onClick: () => setSent(true)
  }, "Send message"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "This form isn't connected to an inbox yet. Wire it to a form service, or use the email and phone opposite in the meantime."))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-demo.jsx
try { (() => {
const {
  Card,
  Button,
  Input,
  Select,
  Checkbox,
  Alert,
  Icon
} = window.ScholarSQuestDesignSystem_b05a4d;
const FAQ = [['How long is a session, and how often?', 'Sessions run 45 or 60 minutes. Most families book once or twice a week; test-prep students often go twice weekly in the two months before the exam.'], ['What if we need to reschedule?', "Reschedule or cancel with reasonable notice and there's no charge and no penalty. Illness and school events happen; we'd rather move the session than waste it."], ['How is a tutor matched to my child?', "We match on subject and grade level first, then on temperament. A child who freezes up needs a different pace than one who races ahead. If the fit isn't right after a session or two, tell us and we'll change it."], ['What actually happens in the demo class?', "A short diagnostic to see where your child is, then real work on something they're currently stuck on. It's a teaching session, not a sales call, and you get written notes afterwards."], ['How will I know it\u2019s working?', 'You get notes after every session covering what we worked on and what to practise, plus a progress summary you can compare against school reports.'], ['Should I sit in on sessions?', "You're welcome to, and for younger children it often helps for the first session. After that most students concentrate better on their own, and the notes keep you in the loop."]];
function Demo({
  onNav
}) {
  const [sent, setSent] = React.useState(false);
  const [times, setTimes] = React.useState({});
  const [open, setOpen] = React.useState(-1);
  const toggle = k => setTimes({
    ...times,
    [k]: !times[k]
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingTop: 64,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Free demo class"), /*#__PURE__*/React.createElement(Title, {
    size: 48
  }, "A real session, before you decide anything"), /*#__PURE__*/React.createElement(Lede, {
    style: {
      marginTop: 18
    }
  }, "Forty-five minutes with a tutor, matched to your child's grade and subject. No card, no obligation, and you keep the notes either way."))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 44,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, {
    size: 26,
    style: {
      marginBottom: 26
    }
  }, "What happens"), [['01', 'You send the details', "Grade, subject, and what's been hard lately. The form opposite takes a minute."], ['02', 'We match a tutor and confirm a time', 'Usually within one business day, from the times you marked as workable.'], ['03', 'Your child works, we watch how', 'A short diagnostic, then real problems. Join a video link from any laptop or tablet, with nothing to install.'], ['04', 'You get notes and a plan', "What we saw, where the gap is, and what we'd do about it. Then it's your call."]].map(([n, h, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      gap: 18,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--sq-pink-500)',
      width: 26,
      flex: 'none',
      paddingTop: 3
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 900,
      margin: '0 0 6px',
      color: 'var(--sq-ink)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, p))))), /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      boxShadow: 'var(--shadow-md)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Request received"
  }, "We'll be in touch within one business day with a tutor and a time. If it's urgent, call (609) 517-8112."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    style: {
      marginTop: 18
    },
    onClick: () => setSent(false)
  }, "Send another request")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, {
    size: 24
  }, "Request a demo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, "All fields optional except email, so tell us what you can.")), /*#__PURE__*/React.createElement(Input, {
    label: "Parent name",
    placeholder: "Your name",
    icon: "user"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    icon: "mail"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Child's grade",
    options: ['Kindergarten', 'Grade 1–2', 'Grade 3–5', 'Grade 6–8', 'Grade 9–10', 'Grade 11–12']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Subject",
    options: ['Math', 'English', 'Both', 'Test prep']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--sq-ink)',
      marginBottom: 8
    }
  }, "Times that usually work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, ['Weekday mornings', 'Weekday evenings', 'Weekends'].map(t => /*#__PURE__*/React.createElement(Checkbox, {
    key: t,
    label: t,
    checked: !!times[t],
    onChange: () => toggle(t)
  })))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--sq-ink)',
      marginBottom: 6
    }
  }, "What's been hard lately?"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: "e.g. fractions, or essays that lose the thread halfway",
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--sq-ink)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: '2px solid var(--border-default)',
      outline: 'none',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    pop: true,
    onClick: () => setSent(true)
  }, "Request my free demo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "This form isn't connected to a booking system yet. Wire it to your scheduler or a form service to go live."))))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '0 0 48px'
    }
  }), /*#__PURE__*/React.createElement(Title, {
    size: 34
  }, "Questions parents ask"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      margin: '8px 0 30px'
    }
  }, "Draft answers. Correct anything that doesn't match how you actually run sessions."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, FAQ.map(([q, a], i) => /*#__PURE__*/React.createElement(Card, {
    key: q,
    padding: 0
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '18px 22px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 17,
      color: 'var(--sq-ink)'
    }
  }, q, /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? 'minus' : 'plus',
    size: 20,
    style: {
      color: 'var(--sq-pink-500)',
      flex: 'none'
    }
  })), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 20px',
      fontSize: 15,
      fontWeight: 600,
      lineHeight: 1.65,
      color: 'var(--text-body)'
    }
  }, a)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-body)',
      margin: '28px 0 0'
    }
  }, "Something not answered here? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('Contact');
    }
  }, "Send us the question"), ". We reply to every one.")));
}
window.Demo = Demo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-demo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-home.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Avatar,
  Icon,
  IconButton,
  ProgressBar
} = window.ScholarSQuestDesignSystem_b05a4d;
const QUOTES = [['All three of mine see Kathni and no two sessions look alike. My two in Grade 2 play games with numbers while my Grade 5 gets properly pushed. Homework stopped being an argument in our house.', 'Mukti', 'parent of two Grade 2 students and a Grade 5 student'], ['My daughter was behind on reading and starting to hide it. A few months in she reads to me at bedtime without being asked. That\u2019s the part I didn\u2019t expect.', 'Zalak', 'parent of a Grade 1 student'], ['The notes after every session are what sold me. I actually know what my son worked on. My sixth-grader went from dreading math tests to telling me his score before I ask.', 'Riddhi', 'parent of a Grade 1 and a Grade 6 student']];
const PROGRAMS = [{
  page: 'Math',
  tag: 'Mathematics',
  tone: 'teal',
  icon: 'calculator',
  h: 'From counting to calculus',
  p: 'Arithmetic fluency, fractions and ratios, algebra, geometry, trigonometry and calculus, plus SAT, ACT and AP Math.',
  rows: [['K–5', 'Number sense, operations, word problems'], ['6–8', 'Pre-algebra, ratios, data, state testing'], ['9–12', 'Algebra II, geometry, calculus, AP & SAT']]
}, {
  page: 'English',
  tag: 'English',
  tone: 'pink',
  icon: 'book-open',
  h: 'From first readers to first drafts',
  p: 'Phonics and fluency, comprehension, grammar, essay writing, literature analysis, plus SAT, ACT and AP English.',
  rows: [['K–5', 'Phonics, fluency, vocabulary, sentences'], ['6–8', 'Comprehension, grammar, structured essays'], ['9–12', 'Literary analysis, argument, AP & SAT']]
}];
const STEPS = [{
  n: '01',
  icon: 'phone-call',
  t: 'Tell us about your child',
  d: 'Grade, subject, and what\u2019s been hard lately. A few sentences is plenty.'
}, {
  n: '02',
  icon: 'calendar',
  t: 'Pick a time that fits',
  d: 'Weekday evenings and weekends included. Reschedule any time without penalty.'
}, {
  n: '03',
  icon: 'video',
  t: 'Meet your tutor, free',
  d: 'A real working session. Afterwards you get notes on what we saw and a plan, and you decide.'
}];
function Home({
  onNav
}) {
  const [q, setQ] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setQ(i => (i + 1) % QUOTES.length), 8000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    icon: "graduation-cap"
  }, "Kindergarten \u2013 Grade 12"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 58,
      fontWeight: 900,
      letterSpacing: '-.03em',
      lineHeight: 1.04,
      color: 'var(--sq-ink)',
      margin: '20px 0 0'
    }
  }, "One-on-one tutoring that starts where your child ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sq-pink-500)'
    }
  }, "actually is"), "."), /*#__PURE__*/React.createElement(Lede, {
    style: {
      marginTop: 18,
      maxWidth: 500
    }
  }, "One-on-one tutoring in Math and English, matched to your child's pace, from early reading and number sense through calculus, AP and SAT prep."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    pop: true,
    iconRight: "arrow-right",
    onClick: () => onNav('Demo')
  }, "Book a free demo class"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNav('Math')
  }, "See the programs")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-muted)',
      margin: '20px 0 0'
    }
  }, "No card required. The demo is a real session, not a sales call.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    h: 380,
    tone: "var(--sq-teal-100)",
    label: "Hero photo: a student working at a laptop"
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      position: 'absolute',
      left: -26,
      bottom: 34,
      width: 250,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Kathni Patel",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 900,
      color: 'var(--sq-ink)'
    }
  }, "Session notes \xB7 Grade 5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, "Fractions \u2192 word problems"))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 72,
    label: "Where we are",
    showValue: true,
    height: 10
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    tone: "ink",
    style: {
      position: 'absolute',
      right: -18,
      top: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 20,
    style: {
      color: 'var(--sq-sun-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "200+ students"))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--sq-white)",
    pad: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, [['200+', 'students to date'], ['80%', 'up two letter grades in a semester'], ['1:1', 'one student, one tutor'], ['K–12', 'every grade band'], ['45–60', 'minutes per session']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--sq-teal-700)'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, b))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, null, "What we teach"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Title, null, "Two subjects, every grade band"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Pick a subject to see what a term looks like.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginTop: 34
    }
  }, PROGRAMS.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.page,
    hoverLift: true,
    padding: 30,
    accentBar: 'var(--sq-' + s.tone + '-400)',
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNav(s.page)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      background: 'var(--sq-' + s.tone + '-100)',
      color: 'var(--sq-' + s.tone + '-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 900,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, s.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 900,
      margin: '0 0 10px',
      color: 'var(--sq-ink)'
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      marginBottom: 20
    }
  }, s.p), s.rows.map(([b, t]) => /*#__PURE__*/React.createElement(GradeRow, {
    key: b,
    band: b,
    text: t,
    tone: s.tone
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--sq-pink-600)'
    }
  }, "Explore ", s.page.toLowerCase(), " tutoring ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 17
  })))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--sq-cream-deep)"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--sq-teal-700)"
  }, "How it works"), /*#__PURE__*/React.createElement(Title, null, "Three steps from first click to first session."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-body)',
      margin: '10px 0 0'
    }
  }, "Usually inside a week."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28,
      marginTop: 34
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--sq-pink-500)'
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      background: 'rgba(20,18,24,.10)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--sq-teal-700)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 28
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 900,
      margin: '0 0 6px',
      color: 'var(--sq-ink)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, s.d))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--sq-teal-400)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 40,
    style: {
      color: 'rgba(20,18,24,.35)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 800,
      lineHeight: 1.32,
      letterSpacing: '-.01em',
      color: 'var(--sq-ink)',
      margin: '10px 0 22px',
      minHeight: 150
    }
  }, QUOTES[q][0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: QUOTES[q][1],
    ring: "none",
    style: {
      boxShadow: '0 0 0 3px rgba(255,255,255,.6)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      color: 'var(--sq-ink)'
    }
  }, QUOTES[q][1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'rgba(20,18,24,.7)'
    }
  }, QUOTES[q][2]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 28,
      paddingTop: 22,
      borderTop: '1px solid rgba(20,18,24,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginRight: 'auto'
    }
  }, QUOTES.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setQ(i),
    "aria-label": 'Quote ' + (i + 1),
    style: {
      width: 10,
      height: 10,
      padding: 0,
      border: 0,
      borderRadius: '50%',
      cursor: 'pointer',
      background: i === q ? 'var(--sq-ink)' : 'rgba(20,18,24,.28)'
    }
  }))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Previous quote",
    variant: "bare",
    style: {
      color: 'var(--sq-ink)'
    },
    onClick: () => setQ((q + QUOTES.length - 1) % QUOTES.length)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-right",
    label: "Next quote",
    variant: "bare",
    style: {
      color: 'var(--sq-ink)'
    },
    onClick: () => setQ((q + 1) % QUOTES.length)
  }))), /*#__PURE__*/React.createElement(PhotoSlot, {
    h: 320,
    tone: "rgba(255,255,255,.45)",
    label: "Family photo"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: 48,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 40,
    align: "center",
    style: {
      color: '#fff'
    }
  }, "Start with a free demo class"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--sq-grey-300)',
      maxWidth: 560,
      margin: '14px auto 26px'
    }
  }, "Pick a time, tell us a little about your child, and meet a tutor. If it isn't the right fit, that's a useful answer too."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    pop: true,
    iconRight: "arrow-right",
    onClick: () => onNav('Demo')
  }, "Book a free demo class"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: 'var(--sq-teal-300)'
    },
    onClick: () => onNav('Contact')
  }, "Ask a question first")))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-login.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Icon
} = window.ScholarSQuestDesignSystem_b05a4d;
function Login({
  onNav
}) {
  return /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingTop: 64,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sun",
    icon: "hammer"
  }, "In development"), /*#__PURE__*/React.createElement(Title, {
    size: 44,
    style: {
      marginTop: 20
    }
  }, "Student & parent portal"), /*#__PURE__*/React.createElement(Lede, {
    style: {
      marginTop: 18
    }
  }, "We're building a portal where students check assignments and progress, and parents pay tuition and buy worksheets. It's being built separately from this site. When it's live, this page becomes the sign-in."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      margin: '0 0 26px'
    }
  }, "Until then, everything you need runs through email or a quick call."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    pop: true,
    onClick: () => onNav('Contact')
  }, "Contact us instead"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNav('Demo')
  }, "Book a demo"))), /*#__PURE__*/React.createElement(Card, {
    padding: 30,
    style: {
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 900,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, "What the portal will do"), [['clipboard-list', 'Assignments & submissions', "Students see what's due and upload work."], ['trending-up', 'Progress reports', 'Session notes and trends in one place for parents.'], ['credit-card', 'Tuition & worksheets', 'Pay for sessions and buy practice packs.'], ['message-circle', 'Messaging', "Direct line to your child's tutor between sessions."]].map(([icon, h, p], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: i === arr.length - 1 ? 0 : 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: 'none',
      borderRadius: 12,
      background: 'var(--sq-teal-100)',
      color: 'var(--sq-teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 900,
      margin: 0,
      color: 'var(--sq-ink)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      margin: '4px 0 0'
    }
  }, p)))))));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screen-subject.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon
} = window.ScholarSQuestDesignSystem_b05a4d;
const SUBJECTS = {
  Math: {
    tone: 'teal',
    icon: 'calculator',
    eyebrow: 'Program · Mathematics',
    h1: 'Math, from counting to calculus',
    lede: 'We start with a short diagnostic, find the gap that\u2019s actually causing trouble, and work forward from there. One student, one tutor, every session.',
    other: 'English',
    otherLabel: 'English instead',
    photo: 'Math session photo: whiteboard or notebook work',
    bands: [['Grades K–5', 'Elementary math', 'A solid foundation in the four operations, and the habit of explaining why an answer works. Games, manipulatives and short interactive drills keep it moving.', ['Number sense', 'Times tables', 'Fractions', 'Word problems', 'Measurement']], ['Grades 6–8', 'Middle school math', 'The years where math turns abstract. We shore up fractions, decimals and ratios, then move into pre-algebra, geometry and data with plenty of practice against state test formats.', ['Ratios & percent', 'Pre-algebra', 'Geometry', 'Data & graphs', 'State testing']], ['Grades 9–12', 'High school math', 'Algebra II through calculus, with support for homework, projects and exams. Sessions can run as steady weekly coaching or as focused sprints before a test.', ['Algebra II', 'Trigonometry', 'Pre-calculus', 'Calculus', 'Statistics']]],
    testTitle: 'SAT, ACT and AP math',
    testBody: 'Timed sections, error logs and question-type drills, plus the pacing strategy that usually matters more than the content. We build a schedule backwards from your test date.',
    testRows: [['SAT', 'Heart of Algebra, problem solving, advanced math'], ['ACT', 'Speed work across all 60 questions'], ['AP', 'Calculus AB/BC and Statistics, free-response practice']],
    why: [['user-check', 'One tutor, consistently', 'Your child works with the same tutor week to week, so nobody re-explains the backstory every session.'], ['notebook-pen', 'Notes after every session', 'What we worked on, what clicked, what to practise. No guessing about progress.'], ['calendar-clock', 'Scheduling that bends', 'Early mornings, evenings, weekends. Reschedule when life happens, with no penalties.']],
    ctaH: 'See a math session before you commit',
    ctaP: 'The demo is a real working session with a real tutor, free, and you get our notes afterwards.'
  },
  English: {
    tone: 'pink',
    icon: 'book-open',
    eyebrow: 'Program · English',
    h1: 'English, from first readers to first drafts',
    lede: 'Reading that makes sense, writing that holds together, and the confidence to speak up. We work from your child\u2019s own assignments wherever we can.',
    other: 'Math',
    otherLabel: 'Math instead',
    photo: 'English session photo: reading or writing',
    bands: [['Grades K–5', 'Learning to read', 'Phonics, decoding and fluency, then comprehension and vocabulary. Short, lively sessions built around books a child actually wants to finish.', ['Phonics', 'Fluency', 'Vocabulary', 'Sentences', 'Spelling']], ['Grades 6–8', 'Reading to learn', 'Strategies for harder texts, grammar and punctuation that stick, and the structure of a paragraph, then a whole essay, with feedback on every draft.', ['Comprehension', 'Grammar', 'Essay structure', 'Creative writing', 'Speaking']], ['Grades 9–12', 'Analysis and argument', 'Close reading of classic and contemporary texts, thesis-driven writing, and the timed essay. Support for coursework, exams and college application drafts.', ['Literary analysis', 'Thesis writing', 'Rhetoric', 'Timed essays', 'Presentations']]],
    testTitle: 'SAT, ACT and AP English',
    testBody: 'Question-type drills, evidence-based reading practice, and a repeatable plan for the essay. We schedule backwards from your test date and track section timing week by week.',
    testRows: [['SAT', 'Reading & Writing modules, evidence questions'], ['ACT', 'English, Reading, and the optional essay'], ['AP', 'Language & Composition, Literature & Composition']],
    why: [['file-pen', 'Feedback on real work', 'We mark up your child\u2019s own essays and assignments, not generic worksheets.'], ['book-heart', 'Reading they\u2019ll finish', 'Texts chosen for level and interest: the fastest route to a child who reads without being asked.'], ['mic', 'Space to speak up', 'One-on-one sessions are a low-stakes place to practise reading aloud and presenting.']],
    ctaH: 'Bring an assignment to the demo',
    ctaP: 'Send us a piece of writing or a reading your child is stuck on, and we\u2019ll build the free session around it.'
  }
};
function Subject({
  subject,
  onNav
}) {
  const d = SUBJECTS[subject];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingTop: 64,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 48,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: 'var(--sq-' + d.tone + '-700)'
  }, d.eyebrow), /*#__PURE__*/React.createElement(Title, {
    size: 48
  }, d.h1), /*#__PURE__*/React.createElement(Lede, {
    style: {
      marginTop: 18,
      maxWidth: 500
    }
  }, d.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    pop: true,
    iconRight: "arrow-right",
    onClick: () => onNav('Demo')
  }, "Book a free demo class"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNav(d.other)
  }, d.otherLabel))), /*#__PURE__*/React.createElement(PhotoSlot, {
    h: 280,
    tone: 'var(--sq-' + d.tone + '-100)',
    label: d.photo
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '0 0 44px'
    }
  }), /*#__PURE__*/React.createElement(Title, {
    size: 34,
    style: {
      marginBottom: 30
    }
  }, "What we cover, by grade band"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, d.bands.map(([band, h, p, tags]) => /*#__PURE__*/React.createElement(Card, {
    key: band,
    padding: 28
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone,
    size: "sm"
  }, band), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 900,
      margin: '14px 0 10px',
      color: 'var(--sq-ink)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      marginBottom: 18
    }
  }, p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral",
    size: "sm"
  }, t))))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--sq-cream-deep)",
    pad: 64
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 44,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Test preparation"), /*#__PURE__*/React.createElement(Title, {
    size: 34
  }, d.testTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      fontWeight: 600,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '14px 0 0'
    }
  }, d.testBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, d.testRows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'baseline',
      background: '#fff',
      borderRadius: 16,
      padding: '14px 18px',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      flex: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--sq-pink-600)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, v)))))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(Title, {
    size: 34,
    style: {
      marginBottom: 30
    }
  }, "Why families stay"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, d.why.map(([icon, h, p]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--sq-teal-700)',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 900,
      margin: '0 0 8px',
      color: 'var(--sq-ink)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, p))))), /*#__PURE__*/React.createElement(Section, {
    pad: 0,
    style: {
      paddingBottom: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(CtaCard, {
    heading: d.ctaH,
    body: d.ctaP,
    onPrimary: () => onNav('Demo')
  }))));
}
window.Subject = Subject;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screen-subject.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-shared.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Avatar,
  Icon,
  Logo
} = window.ScholarSQuestDesignSystem_b05a4d;
function Section({
  children,
  bg = 'transparent',
  pad = 88,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: pad + 'px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, children));
}
function Eyebrow({
  children,
  color = 'var(--sq-pink-600)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 900,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color,
      marginBottom: 12
    }
  }, children);
}
function Title({
  children,
  size = 42,
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size,
      fontWeight: 900,
      letterSpacing: '-.02em',
      lineHeight: 1.08,
      color: 'var(--sq-ink)',
      margin: 0,
      textAlign: align,
      ...style
    }
  }, children);
}
function Lede({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      fontWeight: 600,
      color: 'var(--text-body)',
      maxWidth: 620,
      ...style
    }
  }, children);
}

/** Flat tinted stand-in where brand photography will go (repo still has .image-slot placeholders). */
function PhotoSlot({
  h = 260,
  tone = 'var(--sq-teal-100)',
  label = 'Photography',
  radius = 24,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: radius,
      background: tone,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 24,
      color: 'var(--sq-grey-600)',
      fontSize: 13,
      fontWeight: 700,
      border: '2px dashed rgba(20,18,24,.14)',
      ...style
    }
  }, label);
}

/** Small stack: a grade band label and what it covers. */
function GradeRow({
  band,
  text,
  tone = 'teal'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'baseline',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 62,
      flex: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--sq-' + tone + '-700)'
    }
  }, band), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, text));
}
function CtaCard({
  heading,
  body,
  primary = 'Book a free demo class',
  secondary,
  onPrimary,
  onSecondary
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: 48
  }, /*#__PURE__*/React.createElement(Title, {
    size: 36,
    style: {
      color: '#fff'
    }
  }, heading), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--sq-grey-300)',
      maxWidth: 560,
      margin: '14px 0 26px'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    pop: true,
    iconRight: "arrow-right",
    onClick: onPrimary
  }, primary), secondary && /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: 'var(--sq-teal-300)'
    },
    onClick: onSecondary
  }, secondary)));
}
function Footer({
  onNav
}) {
  const cols = [['Programs', [['Math tutoring', 'Math'], ['English tutoring', 'English'], ['Book a free demo', 'Demo']]], ['Company', [['About', 'About'], ['Contact', 'Contact'], ['Privacy policy', null]]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--sq-ink)',
      color: 'var(--sq-grey-300)',
      padding: '64px 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full-white",
    height: 40,
    assetBase: "../../"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.6
    }
  }, "One-on-one online tutoring in Math and English for students in Kindergarten through Grade 12, including SAT, ACT and AP preparation.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 900,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--sq-teal-300)',
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(([label, page]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (page && onNav) onNav(page);
    },
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--sq-grey-300)',
      textDecoration: 'none'
    }
  }, label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 900,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--sq-teal-300)',
      marginBottom: 14
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@scholars.quest",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--sq-grey-300)',
      textDecoration: 'none'
    }
  }, "info@scholars.quest"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+16095178112",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--sq-grey-300)',
      textDecoration: 'none'
    }
  }, "(609) 517-8112")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '40px auto 0',
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,.12)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--sq-grey-500)'
    }
  }, "\xA9 2026 Scholar's Quest. All rights reserved."));
}
Object.assign(window, {
  Section,
  Eyebrow,
  Title,
  Lede,
  PhotoSlot,
  GradeRow,
  CtaCard,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
