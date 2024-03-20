import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_DxAj7np4.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"inline","content":".about-section[data-astro-cid-noeej2nj]{position:relative;background:url(/img/aboutUs.webp) no-repeat left;background-size:55%;background-color:#fdfdfd;overflow:hidden;padding:100px 0;z-index:5000}.inner-container[data-astro-cid-noeej2nj]{width:55%;float:right;background-color:#fdfdfd;padding:150px}.inner-container[data-astro-cid-noeej2nj] h1[data-astro-cid-noeej2nj]{margin-bottom:30px;font-size:30px;font-weight:900}.text[data-astro-cid-noeej2nj]{font-size:13px;color:#545454;line-height:30px;text-align:justify;margin-bottom:40px}.skills[data-astro-cid-noeej2nj]{display:flex;justify-content:space-between;font-weight:700;font-size:13px}@media screen and (max-width:1200px){.inner-container[data-astro-cid-noeej2nj]{padding:80px}}@media screen and (max-width:1000px){.about-section[data-astro-cid-noeej2nj]{background-size:100%;padding:100px 40px}.inner-container[data-astro-cid-noeej2nj]{width:100%}}@media screen and (max-width:600px){.about-section[data-astro-cid-noeej2nj]{padding:0}.inner-container[data-astro-cid-noeej2nj]{padding:60px}}\n"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-escolar/viaje-de-estudios/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-escolar\\/viaje-de-estudios\\/([^/]+?)\\/?$","segments":[[{"content":"tour-escolar","dynamic":false,"spread":false}],[{"content":"viaje-de-estudios","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-escolar/viaje-de-estudios/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-escolar/viaje-de-estudios","isIndex":true,"type":"page","pattern":"^\\/tour-escolar\\/viaje-de-estudios\\/?$","segments":[[{"content":"tour-escolar","dynamic":false,"spread":false}],[{"content":"viaje-de-estudios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-escolar/viaje-de-estudios/index.astro","pathname":"/tour-escolar/viaje-de-estudios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-escolar/viaje-de-promocion/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-escolar\\/viaje-de-promocion\\/([^/]+?)\\/?$","segments":[[{"content":"tour-escolar","dynamic":false,"spread":false}],[{"content":"viaje-de-promocion","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-escolar/viaje-de-promocion/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-escolar/viaje-de-promocion","isIndex":true,"type":"page","pattern":"^\\/tour-escolar\\/viaje-de-promocion\\/?$","segments":[[{"content":"tour-escolar","dynamic":false,"spread":false}],[{"content":"viaje-de-promocion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-escolar/viaje-de-promocion/index.astro","pathname":"/tour-escolar/viaje-de-promocion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-escolar/visita-de-estudios/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-escolar\\/visita-de-estudios\\/([^/]+?)\\/?$","segments":[[{"content":"tour-escolar","dynamic":false,"spread":false}],[{"content":"visita-de-estudios","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-escolar/visita-de-estudios/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-escolar/visita-de-estudios","isIndex":true,"type":"page","pattern":"^\\/tour-escolar\\/visita-de-estudios\\/?$","segments":[[{"content":"tour-escolar","dynamic":false,"spread":false}],[{"content":"visita-de-estudios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-escolar/visita-de-estudios/index.astro","pathname":"/tour-escolar/visita-de-estudios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-escolar","isIndex":true,"type":"page","pattern":"^\\/tour-escolar\\/?$","segments":[[{"content":"tour-escolar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-escolar/index.astro","pathname":"/tour-escolar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-internacional/caribe/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-internacional\\/caribe\\/([^/]+?)\\/?$","segments":[[{"content":"tour-internacional","dynamic":false,"spread":false}],[{"content":"caribe","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-internacional/caribe/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-internacional/caribe","isIndex":true,"type":"page","pattern":"^\\/tour-internacional\\/caribe\\/?$","segments":[[{"content":"tour-internacional","dynamic":false,"spread":false}],[{"content":"caribe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-internacional/caribe/index.astro","pathname":"/tour-internacional/caribe","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-internacional/norteamerica/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-internacional\\/norteamerica\\/([^/]+?)\\/?$","segments":[[{"content":"tour-internacional","dynamic":false,"spread":false}],[{"content":"norteamerica","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-internacional/norteamerica/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-internacional/norteamerica","isIndex":true,"type":"page","pattern":"^\\/tour-internacional\\/norteamerica\\/?$","segments":[[{"content":"tour-internacional","dynamic":false,"spread":false}],[{"content":"norteamerica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-internacional/norteamerica/index.astro","pathname":"/tour-internacional/norteamerica","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-internacional/sudamerica/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-internacional\\/sudamerica\\/([^/]+?)\\/?$","segments":[[{"content":"tour-internacional","dynamic":false,"spread":false}],[{"content":"sudamerica","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-internacional/sudamerica/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-internacional/sudamerica","isIndex":true,"type":"page","pattern":"^\\/tour-internacional\\/sudamerica\\/?$","segments":[[{"content":"tour-internacional","dynamic":false,"spread":false}],[{"content":"sudamerica","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-internacional/sudamerica/index.astro","pathname":"/tour-internacional/sudamerica","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-internacional/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-internacional\\/([^/]+?)\\/?$","segments":[[{"content":"tour-internacional","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-internacional/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-internacional","isIndex":true,"type":"page","pattern":"^\\/tour-internacional\\/?$","segments":[[{"content":"tour-internacional","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-internacional/index.astro","pathname":"/tour-internacional","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-lima/full-day/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-lima\\/full-day\\/([^/]+?)\\/?$","segments":[[{"content":"tour-lima","dynamic":false,"spread":false}],[{"content":"full-day","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-lima/full-day/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-lima/full-day","isIndex":true,"type":"page","pattern":"^\\/tour-lima\\/full-day\\/?$","segments":[[{"content":"tour-lima","dynamic":false,"spread":false}],[{"content":"full-day","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-lima/full-day/index.astro","pathname":"/tour-lima/full-day","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-lima/tematico/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-lima\\/tematico\\/([^/]+?)\\/?$","segments":[[{"content":"tour-lima","dynamic":false,"spread":false}],[{"content":"tematico","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-lima/tematico/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-lima/tematico","isIndex":true,"type":"page","pattern":"^\\/tour-lima\\/tematico\\/?$","segments":[[{"content":"tour-lima","dynamic":false,"spread":false}],[{"content":"tematico","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-lima/tematico/index.astro","pathname":"/tour-lima/tematico","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-lima/weekend/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-lima\\/weekend\\/([^/]+?)\\/?$","segments":[[{"content":"tour-lima","dynamic":false,"spread":false}],[{"content":"weekend","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-lima/weekend/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-lima/weekend","isIndex":true,"type":"page","pattern":"^\\/tour-lima\\/weekend\\/?$","segments":[[{"content":"tour-lima","dynamic":false,"spread":false}],[{"content":"weekend","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-lima/weekend/index.astro","pathname":"/tour-lima/weekend","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-lima/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-lima\\/([^/]+?)\\/?$","segments":[[{"content":"tour-lima","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-lima/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-lima","isIndex":true,"type":"page","pattern":"^\\/tour-lima\\/?$","segments":[[{"content":"tour-lima","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-lima/index.astro","pathname":"/tour-lima","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-nacional/[slug]","isIndex":false,"type":"page","pattern":"^\\/tour-nacional\\/([^/]+?)\\/?$","segments":[[{"content":"tour-nacional","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/tour-nacional/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.jnnqSOQb.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"}],"routeData":{"route":"/tour-nacional","isIndex":true,"type":"page","pattern":"^\\/tour-nacional\\/?$","segments":[[{"content":"tour-nacional","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tour-nacional/index.astro","pathname":"/tour-nacional","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"}],"routeData":{"route":"/tours-especiales","isIndex":false,"type":"page","pattern":"^\\/tours-especiales\\/?$","segments":[[{"content":"tours-especiales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tours-especiales.astro","pathname":"/tours-especiales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BZ9L6hAI.js"}],"styles":[{"type":"external","src":"/_astro/index.CcHaZ2z7.css"},{"type":"external","src":"/_astro/index.B45zUXpM.css"},{"type":"external","src":"/_astro/index.BapPq9F8.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/viaje-de-estudios/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/viaje-de-estudios/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/viaje-de-promocion/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/viaje-de-promocion/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/visita-de-estudios/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-escolar/visita-de-estudios/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/caribe/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/caribe/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/norteamerica/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/norteamerica/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/sudamerica/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-internacional/sudamerica/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/full-day/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/full-day/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/tematico/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/tematico/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/weekend/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-lima/weekend/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-nacional/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/src/pages/tour-nacional/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BZbkuZhO.mjs","/src/pages/nosotros.astro":"chunks/pages/nosotros_B0Wd46zQ.mjs","/src/pages/tours-especiales.astro":"chunks/pages/tours-especiales_BgcPnjMZ.mjs","\u0000@astrojs-manifest":"manifest_DnTjQZbT.mjs","C:/Users/Joseph/Desktop/Proyectos/AventurTravelWeb/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BWpVD2L1.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"chunks/nosotros_BI9wxvzM.mjs","\u0000@astro-page:src/pages/tour-escolar/viaje-de-estudios/[slug]@_@astro":"chunks/_slug__UbnNJJmN.mjs","\u0000@astro-page:src/pages/tour-escolar/viaje-de-estudios/index@_@astro":"chunks/index_R3Es13RK.mjs","\u0000@astro-page:src/pages/tour-escolar/viaje-de-promocion/[slug]@_@astro":"chunks/_slug___Lgyu9yD.mjs","\u0000@astro-page:src/pages/tour-escolar/viaje-de-promocion/index@_@astro":"chunks/index_HkH8EZdq.mjs","\u0000@astro-page:src/pages/tour-escolar/visita-de-estudios/[slug]@_@astro":"chunks/_slug__CEA_5lVT.mjs","\u0000@astro-page:src/pages/tour-escolar/visita-de-estudios/index@_@astro":"chunks/index_HC_IlyI2.mjs","\u0000@astro-page:src/pages/tour-escolar/index@_@astro":"chunks/index_QBwD7_Hh.mjs","\u0000@astro-page:src/pages/tour-internacional/caribe/[slug]@_@astro":"chunks/_slug__CMYBGECS.mjs","\u0000@astro-page:src/pages/tour-internacional/caribe/index@_@astro":"chunks/index_CX2FFi0O.mjs","\u0000@astro-page:src/pages/tour-internacional/norteamerica/[slug]@_@astro":"chunks/_slug__DkXH65zj.mjs","\u0000@astro-page:src/pages/tour-internacional/norteamerica/index@_@astro":"chunks/index_CJMXc0Ej.mjs","\u0000@astro-page:src/pages/tour-internacional/sudamerica/[slug]@_@astro":"chunks/_slug__2UKGTE_0.mjs","\u0000@astro-page:src/pages/tour-internacional/sudamerica/index@_@astro":"chunks/index_DVl-s8QI.mjs","\u0000@astro-page:src/pages/tour-internacional/[slug]@_@astro":"chunks/_slug__DTGZyHQd.mjs","\u0000@astro-page:src/pages/tour-internacional/index@_@astro":"chunks/index_CiBX5WBF.mjs","\u0000@astro-page:src/pages/tour-lima/full-day/[slug]@_@astro":"chunks/_slug__QNIUlLAZ.mjs","\u0000@astro-page:src/pages/tour-lima/full-day/index@_@astro":"chunks/index_D-vTc0PR.mjs","\u0000@astro-page:src/pages/tour-lima/tematico/[slug]@_@astro":"chunks/_slug__6hgt0wZC.mjs","\u0000@astro-page:src/pages/tour-lima/tematico/index@_@astro":"chunks/index_xn4j1QaB.mjs","\u0000@astro-page:src/pages/tour-lima/weekend/[slug]@_@astro":"chunks/_slug__DpPUyuxy.mjs","\u0000@astro-page:src/pages/tour-lima/weekend/index@_@astro":"chunks/index_CLnDgvei.mjs","\u0000@astro-page:src/pages/tour-lima/[slug]@_@astro":"chunks/_slug__DDpQCHTo.mjs","\u0000@astro-page:src/pages/tour-lima/index@_@astro":"chunks/index_BHCOXToS.mjs","\u0000@astro-page:src/pages/tour-nacional/[slug]@_@astro":"chunks/_slug__CW9u6fTa.mjs","\u0000@astro-page:src/pages/tour-nacional/index@_@astro":"chunks/index_Cw7ttHBG.mjs","\u0000@astro-page:src/pages/tours-especiales@_@astro":"chunks/tours-especiales_0SMuL5ab.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CoLtSgMU.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.jnnqSOQb.js","/astro/hoisted.js?q=0":"_astro/hoisted.BZ9L6hAI.js","@astrojs/react/client.js":"_astro/client.CwWKiGVO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BapPq9F8.css","/_astro/index.CcHaZ2z7.css","/_astro/index.B45zUXpM.css","/close.svg","/Logo.webp","/image/img1.jpg","/image/img2.jpg","/image/img3.jpg","/image/img4.jpg","/_astro/client.CwWKiGVO.js","/_astro/hoisted.BZ9L6hAI.js","/_astro/hoisted.jnnqSOQb.js","/_astro/index.LwwINSg9.js","/img/CarouselMain/CarouselMain1.webp","/img/CarouselMain/CarouselMain2.webp","/img/CarouselMain/CarouselMain3.webp","/img/CarouselMain/CarouselMain4.webp","/img/CarouselMain/CarouselMain5.webp","/img/Escolar/EscolarSlider1.webp","/img/Escolar/EscolarSlider2.webp","/img/Escolar/EscolarSlider3.webp","/img/Escolar/EscolarSlider4.webp","/img/Escolar/PromocionEscolar.webp","/img/Escolar/ViajeEscolar.webp","/img/Escolar/VisitaEscolar.webp","/img/Fates/Amarillo Rosa y Azul Escuela Útiles Sobre Mí En Blanco Educación Presentación.zip","/img/Fates/Caribe.webp","/img/Fates/Especiales.webp","/img/Fates/Lima.webp","/img/Fates/Machu-Picchu.webp","/img/Fates/Promocion.webp","/img/International/Africa.webp","/img/International/Argentina.webp","/img/International/Asia.webp","/img/International/Brasil.webp","/img/International/Chile.webp","/img/International/Colombia.webp","/img/International/Europa.webp","/img/International/InternationalSlider1.webp","/img/International/InternationalSlider2.webp","/img/International/InternationalSlider3.webp","/img/International/InternationalSlider4.webp","/img/International/Mexico.webp","/img/International/Panama.webp","/img/International/USA.webp","/img/Lima/CityTour.webp","/img/Lima/FullDay.webp","/img/Lima/LimaSlider1.webp","/img/Lima/LimaSlider2.webp","/img/Lima/LimaSlider3.webp","/img/Lima/LimaSlider4.webp","/img/Lima/MuseoArqueologico.webp","/img/Lima/MuseoReligioso.webp","/img/Lima/TourTematico.webp","/img/Lima/Weekend.webp","/img/National/Amazonas.webp","/img/National/Ancash.webp","/img/National/Arequipa.webp","/img/National/Chanchamayo.webp","/img/National/Cusco.webp","/img/National/Ica.webp","/img/National/Iquitos.webp","/img/National/Lambayeque.webp","/img/National/NationalSlider1.webp","/img/National/NationalSlider2.webp","/img/National/NationalSlider3.webp","/img/National/NationalSlider4.webp","/img/National/Piura.webp","/img/National/Puno.webp","/img/National/Tarapoto.webp","/img/ToursLima/Antioquia.webp","/img/ToursLima/Canete.webp","/img/ToursLima/Chincha.webp","/img/ToursLima/Huaral.webp","/img/ToursLima/imagen1.webp","/img/ToursLima/imagen10.webp","/img/ToursLima/imagen11.webp","/img/ToursLima/imagen2.webp","/img/ToursLima/imagen3.webp","/img/ToursLima/imagen4.webp","/img/ToursLima/imagen5.webp","/img/ToursLima/imagen6.webp","/img/ToursLima/imagen7.webp","/img/ToursLima/imagen8.webp","/img/ToursLima/imagen9.webp","/img/ToursNational/imagen1.webp","/img/ToursNational/imagen10.webp","/img/ToursNational/imagen11.webp","/img/ToursNational/imagen2.webp","/img/ToursNational/imagen3.webp","/img/ToursNational/imagen4.webp","/img/ToursNational/imagen5.webp","/img/ToursNational/imagen6.webp","/img/ToursNational/imagen7.webp","/img/ToursNational/imagen8.webp","/img/ToursNational/imagen9.webp","/img/ToursInternational/Europa.webp","/img/ToursInternational/imagen1.webp","/img/ToursInternational/imagen10.webp","/img/ToursInternational/imagen11.webp","/img/ToursInternational/imagen2.webp","/img/ToursInternational/imagen3.webp","/img/ToursInternational/imagen4.webp","/img/ToursInternational/imagen6.webp","/img/ToursInternational/imagen7.webp","/img/ToursInternational/imagen8.webp","/img/ToursInternational/imagen9.webp","/img/ToursInternational/InternationalSlider4.webp","/img/Escolar/Viaje-De-Estudios/Arequipa-1.png","/img/Escolar/Viaje-De-Estudios/Arequipa.webp","/img/Escolar/Viaje-De-Estudios/Chiclayo.webp","/img/Escolar/Viaje-De-Estudios/Cuzco.webp","/img/Escolar/Viaje-De-Estudios/Trujillo.webp","/img/Escolar/Viaje-De-Estudios/ViajeSlider1.webp","/img/Escolar/Viaje-De-Estudios/ViajeSlider2.webp","/img/Escolar/Viaje-De-Estudios/ViajeSlider3.webp","/img/Escolar/Viaje-De-Estudios/ViajeSlider4.webp","/img/Escolar/Viaje-De-Promocion/Cajamarca.webp","/img/Escolar/Viaje-De-Promocion/Cancun.webp","/img/Escolar/Viaje-De-Promocion/Chiclayo.webp","/img/Escolar/Viaje-De-Promocion/Huancayo.webp","/img/Escolar/Viaje-De-Promocion/Paracas.webp","/img/Escolar/Viaje-De-Promocion/PromocionSlider1.webp","/img/Escolar/Viaje-De-Promocion/PromocionSlider2.webp","/img/Escolar/Viaje-De-Promocion/PromocionSlider3.webp","/img/Escolar/Viaje-De-Promocion/PromocionSlider4.webp","/img/Escolar/Viaje-De-Promocion/Trujillo.webp","/img/Escolar/Visita-De-Estudios/MuseoDeArte.webp","/img/Escolar/Visita-De-Estudios/MuseoNacion.webp","/img/Escolar/Visita-De-Estudios/PlanetarioLima.webp","/img/Escolar/Visita-De-Estudios/RealFelipe.webp","/img/Escolar/Visita-De-Estudios/VisitaSlider1.webp","/img/Escolar/Visita-De-Estudios/VisitaSlider2.webp","/img/Escolar/Visita-De-Estudios/VisitaSlider3.webp","/img/Escolar/Visita-De-Estudios/VisitaSlider4.webp","/img/International/Caribe/Cancun.webp","/img/International/Caribe/CaribeSlider1.webp","/img/International/Caribe/CaribeSlider2.webp","/img/International/Caribe/CaribeSlider3.webp","/img/International/Caribe/CaribeSlider4.webp","/img/International/Caribe/PuntaCana.webp","/img/International/Norteamerica/EstadosUnidos.webp","/img/International/Norteamerica/Mexico.webp","/img/International/Norteamerica/NorteamericaSlider1.webp","/img/International/Norteamerica/NorteamericaSlider2.webp","/img/International/Norteamerica/NorteamericaSlider3.webp","/img/International/Norteamerica/NorteamericaSlider4.webp","/img/International/Sudamerica/Argentina.webp","/img/International/Sudamerica/Brasil.webp","/img/International/Sudamerica/Chile.webp","/img/International/Sudamerica/Colombia.webp","/img/International/Sudamerica/SudamericaSlider1.webp","/img/International/Sudamerica/SudamericaSlider2.webp","/img/International/Sudamerica/SudamericaSlider3.webp","/img/International/Sudamerica/SudamericaSlider4.webp","/img/Lima/Full-Days/Antioquia.webp","/img/Lima/Full-Days/Full-DaysSlider1.webp","/img/Lima/Full-Days/Full-DaysSlider2.webp","/img/Lima/Full-Days/Full-DaysSlider3.webp","/img/Lima/Full-Days/Full-DaysSlider4.webp","/img/Lima/Full-Days/Huaral.webp","/img/Lima/Full-Days/IslasPalomino.webp","/img/Lima/Full-Days/Lunahuana.webp","/img/Lima/Full-Days/Paracas.webp","/img/Lima/Full-Days/ValleSagrado.webp","/img/Lima/Weekend/Canete.webp","/img/Lima/Weekend/Chincha.webp","/img/Lima/Weekend/Huacho.webp","/img/Lima/Weekend/Ica.webp","/img/Lima/Weekend/Lunahuana.webp","/img/Lima/Weekend/Paracas.webp","/img/Lima/Weekend/WeekendSlider1.webp","/img/Lima/Weekend/WeekendSlider2.webp","/img/Lima/Weekend/WeekendSlider3.webp","/img/Lima/Weekend/WeekendSlider4.webp"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
