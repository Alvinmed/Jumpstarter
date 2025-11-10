const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".nav-toggle__bar");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", (!expanded).toString());
    menu.classList.toggle("is-open");
    bars[0].style.transform = menu.classList.contains("is-open")
      ? "translateY(8px) rotate(45deg)"
      : "";
    bars[1].style.opacity = menu.classList.contains("is-open") ? "0" : "1";
    bars[2].style.transform = menu.classList.contains("is-open")
      ? "translateY(-8px) rotate(-45deg)"
      : "";
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        bars[0].style.transform = "";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "";
      }
    }
  });
});

// Solution tabs
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

if (tabs.length) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("is-active")) {
      tab.setAttribute("tabindex", "0");
    } else {
      tab.setAttribute("tabindex", "-1");
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;
      const panel = document.getElementById(targetId);

      if (!panel) return;

      tabs.forEach((btn) => {
        btn.classList.toggle("is-active", btn === tab);
        btn.setAttribute("aria-selected", btn === tab ? "true" : "false");
     live   btn.setAttribute("tabindex", btn === tab ? "0" : "-1");
      });

      panels.forEach((p) => {
        p.classList.toggle("is-active", p === panel);
        p.setAttribute("hidden", p !== panel);
      });
    });

    // keyboard navigation between tabs
    tab.addEventListener("keydown", (event) => {
      const currentIndex = Array.from(tabs).indexOf(tab);
      let newIndex = currentIndex;

      if (event.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      } else {
        return;
      }

      event.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  panels.forEach((panel, index) => {
    if (!panel.classList.contains("is-active")) {
      panel.setAttribute("hidden", "true");
    } else {
      tabs[index].setAttribute("tabindex", "0");
    }
  });
}

// Solution feature selectors
document.querySelectorAll(".solution-layout").forEach((layout) => {
  const items = layout.querySelectorAll(".solution-item");
  const pillars = layout.querySelectorAll(".pillar");

  const activate = (key) => {
    items.forEach((item) => {
      const isMatch = item.dataset.pillar === key;
      item.classList.toggle("is-active", isMatch);
      item.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar.dataset.pillar === key);
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => activate(item.dataset.pillar));
    item.addEventListener("mouseenter", () => activate(item.dataset.pillar));
  });

  if (items.length) {
    activate(items[0].dataset.pillar);
  }
});

// Hero sphere rotation
const heroFigure = document.querySelector(".hero-figure");
const figureCore = heroFigure?.querySelector(".figure-core");

if (heroFigure && figureCore) {
  let isInteracting = false;
  let startX = 0;
  let startY = 0;
  const defaultRotation = { x: 18, y: 32 };
  let baseX = defaultRotation.x;
  let baseY = defaultRotation.y;
  let targetX = baseX;
  let targetY = baseY;
  let autoAngle = 0;
  const autoSpeed = 0.015;

  const setRotation = (xDeg, yDeg) => {
    figureCore.style.setProperty("--rotateX", `${xDeg}deg`);
    figureCore.style.setProperty("--rotateY", `${yDeg}deg`);
  };

  const animate = () => {
    if (!isInteracting) {
      autoAngle += autoSpeed;
      const autoX = defaultRotation.x + Math.sin(autoAngle) * 4;
      const autoY = defaultRotation.y + Math.sin(autoAngle * 0.7) * 10;
      targetX += (autoX - targetX) * 0.05;
      targetY += (autoY - targetY) * 0.05;
    }

    baseX += (targetX - baseX) * 0.12;
    baseY += (targetY - baseY) * 0.12;
    setRotation(baseX, baseY);

    requestAnimationFrame(animate);
  };

  heroFigure.addEventListener("pointerdown", (event) => {
    isInteracting = true;
    heroFigure.classList.add("is-interacting");
    heroFigure.setPointerCapture(event.pointerId);
    startX = event.clientX;
    startY = event.clientY;
    baseX = targetX;
    baseY = targetY;
    autoAngle = 0;
  });

  heroFigure.addEventListener("pointermove", (event) => {
    if (!isInteracting) return;
    const deltaX = (event.clientY - startY) * 0.2;
    const deltaY = (event.clientX - startX) * 0.25;
    targetX = Math.max(-20, Math.min(50, baseX - deltaX));
    targetY = baseY + deltaY;
  });

  const endInteraction = (event) => {
    if (!isInteracting) return;
    isInteracting = false;
    heroFigure.classList.remove("is-interacting");
    if (typeof event.pointerId === "number") {
      heroFigure.releasePointerCapture(event.pointerId);
    }
    // Ease targets back toward default so auto-rotation resumes smoothly
    targetX += (defaultRotation.x - targetX) * 0.3;
    targetY += (defaultRotation.y - targetY) * 0.3;
  };

  heroFigure.addEventListener("pointerup", endInteraction);
  heroFigure.addEventListener("pointerleave", endInteraction);
  heroFigure.addEventListener("pointercancel", endInteraction);

  heroFigure.addEventListener("mouseenter", () => {
    heroFigure.classList.add("is-hovered");
  });
  heroFigure.addEventListener("mouseleave", () => {
    heroFigure.classList.remove("is-hovered");
  });

  animate();
}

