/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return (userPref && userPref("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let updateThemeToggleUI = (theme) => {
  const isDark = theme === "dark";
  const toggleTitle = isDark ? "Switch to light mode" : "Switch to dark mode";

  $("#theme-toggle")
    .attr("aria-pressed", isDark ? "true" : "false")
    .attr("aria-label", toggleTitle)
    .attr("title", toggleTitle)
    .attr("data-mode", isDark ? "dark" : "light");

  $("#theme-icon")
    .toggleClass("fa-sun", !isDark)
    .toggleClass("fa-moon", isDark);
};

let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
  }

  updateThemeToggleUI(use_theme === "dark" ? "dark" : "light");
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
};

// Subtle click burst so the site feels a little more alive without losing the academic tone.
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

let spawnClickBurst = (x, y) => {
  const burst = document.createElement("span");
  burst.className = "click-burst";
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;

  const ring = document.createElement("span");
  ring.className = "click-burst__ring";
  burst.appendChild(ring);

  const glow = document.createElement("span");
  glow.className = "click-burst__glow";
  burst.appendChild(glow);

  const sparkAngles = [0, 52, 118, 180, 238, 304];
  sparkAngles.forEach((angle, index) => {
    const spark = document.createElement("span");
    spark.className = "click-burst__spark";
    spark.style.setProperty("--angle", `${angle + (Math.random() * 14 - 7)}deg`);
    spark.style.setProperty("--travel", `${0.75 + Math.random() * 0.5}rem`);
    spark.style.setProperty("--delay", `${index * 14}ms`);
    spark.style.setProperty(
      "--spark-color",
      index % 3 === 0 ? "var(--outreach-spark-warm)" : "var(--outreach-spark-core)"
    );
    burst.appendChild(spark);
  });

  document.body.appendChild(burst);
  window.setTimeout(() => burst.remove(), 720);
};

let initClickBurst = () => {
  if (!window.PointerEvent || reducedMotionQuery.matches) {
    return;
  }

  document.addEventListener("pointerdown", (event) => {
    if (event.isPrimary === false) {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    spawnClickBurst(event.clientX, event.clientY);
  }, { passive: true });
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // Add a light click flourish across the site.
  initClickBurst();

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
