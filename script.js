const actionLinks = [
  { label: "GitHub", href: "https://github.com/egg4946", primary: true },
  { label: "WebClass Bot", href: "https://github.com/egg4946/discordbot_webclass" },
  { label: "NAND", href: "https://github.com/egg4946/NANDmain" },
  { label: "KC3Hack", href: "https://github.com/kc3hack/2026_team26" },
  { label: "SysHack", href: "https://sys-hack-sefirot-frontend.vercel.app/" },
  { label: "Slides", href: "https://canva.link/jj0s9kmno36hmj0" },
];

const workCards = [
  {
    index: "01",
    kicker: "Hackathon",
    badge: "Frontend",
    title: "KC3Hack",
    description: "React / MUIで画面実装を担当。チームで仕様を詰めながら、迷わず触れるUIを形にしました。",
    meta: "React / MUI",
    layout: "panel--kc3",
    backUrl: "https://github.com/kc3hack/2026_team26",
    backLabel: "GitHub",
  },
  {
    index: "02",
    kicker: "SysHack",
    badge: "Backend",
    title: "SEFIROT",
    description: "TypeScriptでフロントとバックエンドを横断。画面とAPI、データ設計のつながりを意識して実装しました。",
    meta: "TypeScript / Prisma",
    layout: "panel--sefirot",
    image: "./assets/syshack logo.png",
    imageSize: "44% auto",
    imagePosition: "92% 54%",
    imageOpacity: "0.52",
    backUrl: "https://sys-hack-sefirot-frontend.vercel.app/",
    backLabel: "Open project",
  },
  {
    index: "03",
    kicker: "Utility Bot",
    badge: "Discord",
    title: "WebClass Bot",
    description: "WebClassを3時間ごとに巡回。課題追加、期限変更、24時間前、当日の通知と確認用コマンドを実装しました。",
    meta: "Discord.js / Playwright",
    layout: "panel--bot",
    backUrl: "https://github.com/egg4946/discordbot_webclass",
    backLabel: "GitHub",
  },
  {
    index: "04",
    kicker: "Circle",
    badge: "Lead",
    title: "NAND",
    description: "南山大学の学生エンジニア団体で主任を担当。Web、アプリ、AI、ゲームを作りながら学ぶ場を運営しています。",
    meta: "Community / Direction",
    layout: "panel--nand",
    image: "./assets/NAND rogo.png",
    imageSize: "cover",
    imagePosition: "center 47%",
    imageOpacity: "0.24",
    backUrl: "https://github.com/egg4946/NANDmain",
    backLabel: "GitHub",
  },
];

const nextEvent = {
  index: "05",
  kicker: "Next",
  badge: "Solo",
  title: "HACK STAGE | STAGE 2",
  date: "2026.08.01 - 08.09",
  description: "初めての個人参加。9日間で、企画から実装までを一人でやり切ります。",
  image: "./assets/HACK STAGE.png",
  url: "https://localstage.connpass.com/event/397029/",
};

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "MUI",
  "Node.js",
  "Express",
  "Prisma",
  "Ruby",
  "HTML",
  "CSS",
];

const iconLabels = {
  CSS: "CS",
  Express: "EX",
  HTML: "HT",
  JavaScript: "JS",
  MUI: "MU",
  "Node.js": "NJ",
  Prisma: "PR",
  React: "RE",
  Ruby: "RB",
  TypeScript: "TS",
};

const getIconLabel = (label) => iconLabels[label] ?? label.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase();

const createElement = (tagName, options = {}, children = []) => {
  const element = document.createElement(tagName);
  const { className, text, attributes = {}, style = {} } = options;

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  Object.entries(style).forEach(([name, value]) => element.style.setProperty(name, value));
  children.forEach((child) => element.append(child));
  return element;
};

const createActionLink = ({ label, href, primary }) =>
  createElement("a", {
    className: primary ? "button button--primary" : "button",
    text: label,
    attributes: { href, target: "_blank", rel: "noreferrer" },
  });

const createBadge = (label) => createElement("span", { className: "badge", text: label });

const getCardStyle = ({ image, imageSize, imagePosition, imageOpacity }) =>
  image
    ? {
        "--card-image": `url("${image}")`,
        "--card-image-size": imageSize ?? "cover",
        "--card-image-position": imagePosition ?? "center",
        "--card-image-opacity": imageOpacity ?? "0.4",
      }
    : {};

const createWorkCard = (card) => {
  const { index, kicker, badge, title, description, meta, layout, image, backUrl, backLabel } = card;

  return createElement(
    "article",
    {
      className: ["panel", layout, image && "panel--has-image", "reveal"].filter(Boolean).join(" "),
      attributes: {
        "data-flippable": "true",
        "data-state": "front",
        "data-title": title,
        "data-kicker": kicker,
        "aria-label": `${title} card. Press Enter to flip.`,
        role: "group",
        tabindex: "0",
      },
      style: getCardStyle(card),
    },
    [
      createElement("div", { className: "panel-flip" }, [
        createElement("div", { className: "panel-face panel-face--front" }, [
          createElement("span", { className: "panel-index", text: index, attributes: { "aria-hidden": "true" } }),
          createElement("div", { className: "panel-head" }, [
            createElement("span", { className: "kicker", text: kicker }),
            createBadge(badge),
          ]),
          createElement("div", { className: "panel-copy" }, [
            createElement("h2", { text: title }),
            createElement("p", { text: description }),
          ]),
          createElement("span", { className: "panel-meta", text: meta }),
        ]),
        createElement(
          "div",
          { className: "panel-face panel-face--back", attributes: { "aria-hidden": "true" } },
          [
            createElement("span", { className: "panel-index", text: index, attributes: { "aria-hidden": "true" } }),
            createElement("span", { className: "kicker", text: backLabel === "GitHub" ? "Repository" : "Live project" }),
            createElement("h2", { text: title }),
            createElement("a", {
              className: "flip-link",
              text: backLabel,
              attributes: { href: backUrl, target: "_blank", rel: "noreferrer", tabindex: "-1" },
            }),
          ],
        ),
      ]),
    ],
  );
};

const createNextPanel = () =>
  createElement(
    "article",
    {
      className: "panel panel--next panel--has-image reveal",
      attributes: {
        "data-flippable": "true",
        "data-state": "front",
        "data-title": nextEvent.title,
        "data-kicker": nextEvent.kicker,
        "aria-label": `${nextEvent.title} card. Press Enter to flip.`,
        role: "group",
        tabindex: "0",
      },
      style: {
        "--card-image": `url("${nextEvent.image}")`,
        "--card-image-size": "cover",
        "--card-image-position": "center",
        "--card-image-opacity": "0.58",
      },
    },
    [
      createElement("div", { className: "panel-flip" }, [
        createElement("div", { className: "panel-face panel-face--front" }, [
          createElement("span", { className: "panel-index", text: nextEvent.index, attributes: { "aria-hidden": "true" } }),
          createElement("div", { className: "panel-head" }, [
            createElement("span", { className: "kicker", text: nextEvent.kicker }),
            createBadge(nextEvent.badge),
          ]),
          createElement("div", { className: "panel-copy" }, [
            createElement("h2", { text: nextEvent.title }),
            createElement("p", { text: nextEvent.description }),
          ]),
          createElement("span", { className: "panel-meta panel-meta--date", text: nextEvent.date }),
        ]),
        createElement(
          "div",
          { className: "panel-face panel-face--back", attributes: { "aria-hidden": "true" } },
          [
            createElement("span", { className: "panel-index", text: nextEvent.index, attributes: { "aria-hidden": "true" } }),
            createElement("span", { className: "kicker", text: "Event page" }),
            createElement("h2", { text: nextEvent.title }),
            createElement("a", {
              className: "flip-link",
              text: "Connpass",
              attributes: { href: nextEvent.url, target: "_blank", rel: "noreferrer", tabindex: "-1" },
            }),
          ],
        ),
      ]),
    ],
  );

const createSkillPanel = () =>
  createElement(
    "article",
    {
      className: "panel panel--skills reveal",
      attributes: { "data-title": "Skills", "data-kicker": "Toolkit" },
    },
    [
      createElement("span", { className: "panel-index", text: "06", attributes: { "aria-hidden": "true" } }),
      createElement("div", { className: "panel-head" }, [
        createElement("span", { className: "kicker", text: "Skills" }),
        createElement("span", { className: "badge", text: "10 tools" }),
      ]),
      createElement(
        "div",
        { className: "chips", attributes: { "aria-label": "skills" } },
        skills.map((skill) =>
          createElement("span", { className: "skill-chip" }, [
            createElement("span", {
              className: "skill-mark",
              text: getIconLabel(skill),
              attributes: { "aria-hidden": "true" },
            }),
            createElement("span", { className: "skill-name", text: skill }),
          ]),
        ),
      ),
    ],
  );

const cardMotion = new WeakMap();

const resetCardMotion = (card) => {
  const state = cardMotion.get(card);

  if (state?.frame) {
    window.cancelAnimationFrame(state.frame);
  }

  cardMotion.delete(card);
  card.classList.remove("is-active");
  card.style.setProperty("--tilt-x", "0deg");
  card.style.setProperty("--tilt-y", "0deg");
  card.style.setProperty("--media-x", "0px");
  card.style.setProperty("--media-y", "0px");
};

const updateCardMotion = (card, event) => {
  const state = cardMotion.get(card) ?? {
    frame: 0,
    pointerX: 0.5,
    pointerY: 0.5,
    rect: card.getBoundingClientRect(),
  };

  card.classList.add("is-active");
  state.pointerX = (event.clientX - state.rect.left) / state.rect.width;
  state.pointerY = (event.clientY - state.rect.top) / state.rect.height;

  if (!state.frame) {
    state.frame = window.requestAnimationFrame(() => {
      const rotateY = (state.pointerX - 0.5) * 5;
      const rotateX = (0.5 - state.pointerY) * 5;

      state.frame = 0;
      card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--media-x", `${((state.pointerX - 0.5) * -10).toFixed(2)}px`);
      card.style.setProperty("--media-y", `${((state.pointerY - 0.5) * -8).toFixed(2)}px`);
    });
  }

  cardMotion.set(card, state);
};

const startCardMotion = (card, event) => {
  cardMotion.set(card, {
    frame: 0,
    pointerX: 0.5,
    pointerY: 0.5,
    rect: card.getBoundingClientRect(),
  });
  updateCardMotion(card, event);
};

const initCardMotion = () => {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canHover || prefersReducedMotion) {
    return;
  }

  document.querySelectorAll(".panel[data-flippable='true']").forEach((card) => {
    card.addEventListener("pointermove", (event) => updateCardMotion(card, event), { passive: true });
    card.addEventListener("pointerenter", (event) => startCardMotion(card, event), { passive: true });
    card.addEventListener("pointerleave", () => resetCardMotion(card));
    card.addEventListener("pointercancel", () => resetCardMotion(card));
  });
};

const toggleCardFlip = (card) => {
  const isFlipped = card.getAttribute("data-state") === "flipped";
  const nextState = isFlipped ? "front" : "flipped";
  const links = card.querySelectorAll(".flip-link");
  const front = card.querySelector(".panel-face--front");
  const back = card.querySelector(".panel-face--back");

  card.setAttribute("data-state", nextState);
  links.forEach((link) => link.setAttribute("tabindex", isFlipped ? "-1" : "0"));
  front?.setAttribute("aria-hidden", String(!isFlipped));
  back?.setAttribute("aria-hidden", String(isFlipped));
};

const initCardFlip = () => {
  document.querySelectorAll("[data-flippable='true']").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (!event.target.closest("a")) {
        toggleCardFlip(card);
      }
    });

    card.addEventListener("keydown", (event) => {
      if (event.target.closest("a")) {
        return;
      }

      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      toggleCardFlip(card);
    });
  });
};

const initFocusStatus = () => {
  const status = document.querySelector("#focus-project");
  const defaultText = "Works / 2026";

  if (!status) {
    return;
  }

  document.querySelectorAll(".panel[data-title]").forEach((panel) => {
    const setStatus = () => {
      status.textContent = `${panel.dataset.title} / ${panel.dataset.kicker}`;
    };
    const resetStatus = (event) => {
      if (event?.relatedTarget && panel.contains(event.relatedTarget)) {
        return;
      }

      status.textContent = defaultText;
    };

    panel.addEventListener("pointerenter", setStatus);
    panel.addEventListener("pointerleave", resetStatus);
    panel.addEventListener("focusin", setStatus);
    panel.addEventListener("focusout", resetStatus);
  });
};

const initReveal = () => {
  const revealItems = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 35, 180)}ms`);
    observer.observe(item);
  });
};

const renderPortfolio = () => {
  const actions = document.querySelector("#portfolio-actions");
  const dashboard = document.querySelector("#portfolio-dashboard");

  actions.append(...actionLinks.map(createActionLink));
  dashboard.append(...workCards.map(createWorkCard), createSkillPanel(), createNextPanel());
  document.querySelector(".hero-copy")?.classList.add("reveal");
  actions.classList.add("reveal");

  initCardMotion();
  initCardFlip();
  initFocusStatus();
  initReveal();
};

renderPortfolio();
