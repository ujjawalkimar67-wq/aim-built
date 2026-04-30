import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/+esm";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js/+esm";
import { FBXLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/FBXLoader.js/+esm";
import { clone as cloneSkinnedObject } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/utils/SkeletonUtils.js/+esm";

const DIAG_BUILD_LABEL = "Aim Forge Build Test 002";
const DIAG_BUILD_TAG = "build-test-002";

console.log("[DIAG] Runtime file loaded", {
  build: DIAG_BUILD_LABEL,
  html: window.location.href,
  module: import.meta.url
});
console.log("[SCOPE DEBUG 001] live file loaded");
console.log("[AIM ADS DEBUG 004] loaded live file");
document.title = DIAG_BUILD_LABEL;

window.onload = () => {
  const canvas = document.getElementById("game");
  const hud = document.getElementById("hud");
  const instructions = document.getElementById("instructions");
  const homePanel = instructions?.querySelector(".home-panel");
  const homeCameraEntryButton = document.getElementById("home-camera-entry-button");
  const homeGunEntryButton = document.getElementById("home-gun-entry-button");
  const homeSettingsEntryButton = document.getElementById("home-settings-entry-button");
  const homeMusicToggleButton = document.getElementById("home-music-toggle-button");
  const homeFullscreenButton = document.getElementById("home-fullscreen-button");
  const homeGunView = document.getElementById("home-gun-view");
  const homeGunBackButton = document.getElementById("home-gun-back-button");
  const homeSettingsView = document.getElementById("home-settings-view");
  const homeSettingsBackButton = document.getElementById("home-settings-back-button");
  const aimTrainingView = document.getElementById("aim-training-view");
  const trainAimButton = document.getElementById("train-aim-button");
  const startGridShotButton = document.getElementById("start-grid-shot-button");
  const aimTrainingHomeButton = document.getElementById("aim-training-home-button");
  const aimTrainingHud = document.getElementById("aim-training-hud");
  const aimTrainingStatsText = document.getElementById("aim-training-stats-text");
  const aimTrainingResultsContainer = document.getElementById("aim-training-results-container");
  const aimTrainingRestartButton = document.getElementById("aim-training-restart-button");
  const aimTrainingBackButton = document.getElementById("aim-training-back-button");
  const startTrackingBallButton = document.getElementById("start-tracking-ball-button");
  const startJiggleTrainingButton = document.getElementById("start-jiggle-training-button");
  const startMediumCombatModeButton = document.getElementById("start-medium-combat-mode-button");
  const aimTrainingDifficultySelect = document.getElementById("aim-training-difficulty-select");
  const aimModeCards = document.querySelectorAll(".aim-mode-card");
  const homeSettingsMenuMount = document.getElementById("home-settings-menu-mount");
  const homeGunCustomizationMount = document.getElementById("home-gun-customization-mount");
  const homeOnlineModeMount = document.getElementById("home-online-mode-mount");
  const readyButton = document.getElementById("ready-button");
  const mapSelect = document.getElementById("map-select");
  const ammoUi = document.getElementById("ammo-ui");
  const ammoUiText = document.getElementById("ammo-ui-text");
  const playerHpUi = document.getElementById("player-hp-ui");
  const playerHpFill = document.getElementById("player-hp-fill");
  const playerHpText = document.getElementById("player-hp-text");
  const startupLoadingOverlay = document.getElementById("startup-loading-overlay");
  const startupLoadingShell = startupLoadingOverlay?.querySelector(".startup-loading-shell");
  const startupLoadingStatus = document.getElementById("startup-loading-status");
  const startupLoadingDebug = document.getElementById("startup-loading-debug");
  const startupLoadingProgressFill = document.getElementById("startup-loading-progress-fill");
  const startupLoadingPercent = document.getElementById("startup-loading-percent");
  const deviceModeOverlay = document.getElementById("device-mode-overlay");
  const deviceModePcButton = document.getElementById("device-mode-pc-button");
  const deviceModePhoneButton = document.getElementById("device-mode-phone-button");
  const interactionMenu = document.getElementById("interaction-menu");
  const interactionMenuCloseButton = document.getElementById("interaction-menu-close-button");
  const settingsMenu = document.getElementById("settings-menu");
  const settingsMenuCloseButton = document.getElementById("settings-menu-close-button");
  const settingsHomeButton = document.getElementById("settings-home-button");
  const settingsFullscreenButton = document.getElementById("settings-fullscreen-button");
  const settingsControlsPanel = document.getElementById("settings-panel-controls");
  const settingsGraphicsPanel = document.getElementById("settings-panel-graphics");
  const settingsMobileLayoutPanel = document.getElementById("settings-panel-mobile-layout");
  const settingsGameplayPanel = document.getElementById("settings-panel-gameplay");
  const settingsAudioEffectsPanel = document.getElementById("settings-panel-audio-effects");
  const settingsDebugAdvancedPanel = document.getElementById("settings-panel-debug-advanced");
  const settingsMenuBackButton = document.getElementById("settings-menu-back-button");
  const settingsCategoryResetButton = document.getElementById("settings-category-reset-button");
  const settingsMobileLayoutTabButton = document.getElementById("settings-tab-mobile-layout");
  const mobileLayoutUnavailableNote = document.getElementById("mobile-layout-unavailable-note");
  const settingsDebugBuildValue = document.getElementById("settings-debug-build-value");
  const settingsDebugDeviceValue = document.getElementById("settings-debug-device-value");
  const settingsDebugCameraInputValue = document.getElementById("settings-debug-camera-input-value");
  const settingsDebugMapValue = document.getElementById("settings-debug-map-value");
  const difficultySelect = document.getElementById("difficulty-select");
  const spawnEnemyButton = document.getElementById("spawn-enemy-button");
  const enemyCountInput = document.getElementById("enemy-count-input");
  const startWaveButton = document.getElementById("start-wave-button");
  const waveEnemyCountInput = document.getElementById("wave-enemy-count-input");
  const waveCountInput = document.getElementById("wave-count-input");
  const waveStatusText = document.getElementById("wave-status-text");
  const gunModificationButton = document.getElementById("gun-modification-button");
  const gunCustomizationPanel = document.getElementById("gun-customization-panel");
  const gunCustomizationCloseButton = document.getElementById("gun-customization-close-button");
  const settingsFovInput = document.getElementById("settings-fov-input");
  const graphicsSettingsSection = document.getElementById("graphics-settings-section");
  const graphicsRenderScaleInput = document.getElementById("graphics-render-scale-input");
  const graphicsRenderScaleValue = document.getElementById("graphics-render-scale-value");
  const graphicsPixelRatioInput = document.getElementById("graphics-pixel-ratio-input");
  const graphicsPixelRatioValue = document.getElementById("graphics-pixel-ratio-value");
  const graphicsShadowsToggle = document.getElementById("graphics-shadows-toggle");
  const graphicsShadowQualityField = document.getElementById("graphics-shadow-quality-field");
  const graphicsShadowQualitySelect = document.getElementById("graphics-shadow-quality-select");
  const graphicsRenderDistanceInput = document.getElementById("graphics-render-distance-input");
  const graphicsRenderDistanceValue = document.getElementById("graphics-render-distance-value");
  const graphicsEffectQualitySelect = document.getElementById("graphics-effect-quality-select");
  const advancedColorStyleSelect = document.getElementById("advanced-color-style-select");
  const advancedExposureInput = document.getElementById("advanced-exposure-input");
  const advancedExposureValue = document.getElementById("advanced-exposure-value");
  const advancedContrastInput = document.getElementById("advanced-contrast-input");
  const advancedContrastValue = document.getElementById("advanced-contrast-value");
  const advancedSaturationInput = document.getElementById("advanced-saturation-input");
  const advancedSaturationValue = document.getElementById("advanced-saturation-value");
  const advancedFogToggle = document.getElementById("advanced-fog-toggle");
  const advancedFogStrengthInput = document.getElementById("advanced-fog-strength-input");
  const advancedFogStrengthValue = document.getElementById("advanced-fog-strength-value");
  const advancedFogDistanceInput = document.getElementById("advanced-fog-distance-input");
  const advancedFogDistanceValue = document.getElementById("advanced-fog-distance-value");
  const advancedBloomToggle = document.getElementById("advanced-bloom-toggle");
  const advancedBloomStrengthInput = document.getElementById("advanced-bloom-strength-input");
  const advancedBloomStrengthValue = document.getElementById("advanced-bloom-strength-value");
  const advancedAoToggle = document.getElementById("advanced-ao-toggle");
  const advancedAoStrengthInput = document.getElementById("advanced-ao-strength-input");
  const advancedAoStrengthValue = document.getElementById("advanced-ao-strength-value");
  const advancedAntialiasingSelect = document.getElementById("advanced-antialiasing-select");
  const advancedMaterialQualitySelect = document.getElementById("advanced-material-quality-select");
  const advancedDynamicLightsSelect = document.getElementById("advanced-dynamic-lights-select");
  const advancedMotionBlurSelect = document.getElementById("advanced-motion-blur-select");
  const advancedMotionBlurStrengthInput = document.getElementById("advanced-motion-blur-strength-input");
  const advancedMotionBlurStrengthValue = document.getElementById("advanced-motion-blur-strength-value");
  const savedGunList = document.getElementById("savedGunList");
  const gunNameInput = document.getElementById("gunName");
  const gunFireRateInput = document.getElementById("gunFireRate");
  const gunDamageInput = document.getElementById("gunDamage");
  const gunHeadshotMultiplierInput = document.getElementById("gunHeadshotMultiplier");
  const gunRecoilStrengthInput = document.getElementById("gunRecoilStrength");
  const gunRecoilEnabledInput = document.getElementById("gunRecoilEnabled");
  const gunAdvancedRecoilButton = document.getElementById("gunAdvancedRecoilButton");
  const gunAdvancedRecoilPanel = document.getElementById("gunAdvancedRecoilPanel");
  const gunAdvancedRecoilCloseButton = document.getElementById("gunAdvancedRecoilCloseButton");
  const gunRecoilIntensityXInput = document.getElementById("gunRecoilIntensityX");
  const gunRecoilIntensityYInput = document.getElementById("gunRecoilIntensityY");
  const gunRecoilIntensityZInput = document.getElementById("gunRecoilIntensityZ");
  const gunReloadTimeInput = document.getElementById("gunReloadTime");
  const gunAmmoCapacityInput = document.getElementById("gunAmmoCapacity");
  const gunInfiniteAmmoInput = document.getElementById("gunInfiniteAmmo");
  const saveGunConfigButton = document.getElementById("saveGunConfig");
  const enemyHpFloating = document.getElementById("enemy-hp-floating");
  const enemyHpFill = document.getElementById("enemy-hp-fill");
  const statusMessage = document.getElementById("status-message");
  const cameraPreviewCursorHint = document.getElementById("camera-preview-cursor-hint");
  const playerNameInput = document.getElementById("player-name-input");
  const showOwnNameToggle = document.getElementById("show-own-name-toggle");
  const activePlayerNameUi = document.getElementById("active-player-name-ui");
  const onlineKillFeedMessage = document.getElementById("online-kill-feed-message");
  let onlineKillMessageTimeout = 0;
  const lanMultiplayerMenu = document.getElementById("lan-multiplayer-menu");
  const startLanGameButton = document.getElementById("start-lan-game-button");
  const joinLanGameButton = document.getElementById("join-lan-game-button");
  const lanMultiplayerStatus = document.getElementById("lan-multiplayer-status");
  const lanJoinPanel = document.getElementById("lan-join-panel");
  const lanHostIpInput = document.getElementById("lan-host-ip-input");
  const mobileControlsSettingsSection = document.getElementById("mobile-controls-settings-section");
  const mobileCameraSensitivityInput = document.getElementById("mobile-camera-sensitivity-input");
  const mobileCameraSensitivityValue = document.getElementById("mobile-camera-sensitivity-value");
  const mobileLayoutSettingsSection = document.getElementById("mobile-layout-settings-section");
  const openMobileLayoutButton = document.getElementById("open-mobile-layout-button");
  const mobileHud = document.getElementById("mobile-hud");
  const basicUserSettingsStorageKey = "aimBuiltBasicSettings_v1";

  // Menu Music State
  let menuMusic = null;
  let isMenuMusicPlaying = false;
  let isMenuMusicBlockedByAutoplay = false;
  let menuMusicInitialized = false;
  const menuMusicDefaultVolume = 0.315;
  let menuMusicEnabled = loadMenuMusicEnabledFromStorage();

  function loadMenuMusicEnabledFromStorage() {
    try {
      const saved = localStorage.getItem(basicUserSettingsStorageKey);
      if (!saved) return true;
      const settings = JSON.parse(saved);
      return settings?.audio?.menuMusicEnabled !== false;
    } catch (error) {
      console.warn("[MENU MUSIC] failed to load saved music setting:", error);
      return true;
    }
  }

  function isMenuMusicEnabled() {
    return menuMusicEnabled;
  }

  function saveMenuMusicEnabledSetting() {
    let settings = {};
    try {
      const saved = localStorage.getItem(basicUserSettingsStorageKey);
      settings = saved ? JSON.parse(saved) : {};
      if (!settings || typeof settings !== "object") settings = {};
    } catch (error) {
      console.warn("[MENU MUSIC] failed to merge saved music setting:", error);
      settings = {};
    }

    settings.audio = {
      ...(settings.audio && typeof settings.audio === "object" ? settings.audio : {}),
      menuMusicEnabled
    };
    localStorage.setItem(basicUserSettingsStorageKey, JSON.stringify(settings));
  }

  function updateHomeMusicToggleUi() {
    if (!homeMusicToggleButton) return;
    homeMusicToggleButton.textContent = menuMusicEnabled ? "Music: ON" : "Music: OFF";
    homeMusicToggleButton.setAttribute("aria-pressed", String(menuMusicEnabled));
    homeMusicToggleButton.classList.toggle("is-off", !menuMusicEnabled);
  }

  function isMenuMusicHomeFlowActive() {
    const aimTrainingActive = isGridShotActive || isTrackingBallActive || isJiggleTrainingActive || isMediumCombatActive;
    return !gameStarted && !aimTrainingActive && (
      document.body.classList.contains("startup-loading") ||
      document.body.classList.contains("main-menu-open")
    );
  }

  function setMenuMusicEnabled(value, { persist = true } = {}) {
    menuMusicEnabled = Boolean(value);
    updateHomeMusicToggleUi();

    if (persist) {
      saveMenuMusicEnabledSetting();
    }

    if (!menuMusicEnabled) {
      isMenuMusicBlockedByAutoplay = false;
      if (menuMusic) {
        menuMusic.pause();
      }
      isMenuMusicPlaying = false;
      console.log("[MENU MUSIC] disabled from home toggle");
      return;
    }

    if (isMenuMusicHomeFlowActive()) {
      playMenuMusic("home-toggle-on");
    }
  }

  function initMenuMusic() {
    if (menuMusicInitialized) return;
    try {
      menuMusic = new Audio("assets/audio/aim-built-menu-theme.mp3");
      menuMusic.loop = true;
      menuMusic.volume = menuMusicDefaultVolume;
      menuMusicInitialized = true;
      console.log("[MENU MUSIC] initialized");
    } catch (error) {
      console.warn("[MENU MUSIC] initialization failed (file may be missing):", error);
    }
  }

  function playMenuMusic(reason = "unknown") {
    if (!isMenuMusicEnabled()) return;
    if (!menuMusicInitialized) initMenuMusic();
    if (!menuMusic || isMenuMusicPlaying) return;

    console.log("[MENU MUSIC] play requested", reason);
    menuMusic.play()
      .then(() => {
        if (!isMenuMusicEnabled()) {
          menuMusic.pause();
          isMenuMusicPlaying = false;
          return;
        }
        isMenuMusicPlaying = true;
        isMenuMusicBlockedByAutoplay = false;
        console.log("[MENU MUSIC] playing");
      })
      .catch(error => {
        if (error.name === "NotAllowedError") {
          isMenuMusicBlockedByAutoplay = true;
          console.log("[MENU MUSIC] autoplay blocked, waiting for user gesture");
        } else {
          console.warn("[MENU MUSIC] play failed:", error);
        }
      });
  }

  function stopMenuMusic(reason = "unknown") {
    if (!menuMusic || !isMenuMusicPlaying) return;
    menuMusic.pause();
    isMenuMusicPlaying = false;
    console.log("[MENU MUSIC] stopped for gameplay", reason);
  }

  // Fade out menu music over 600ms
  function fadeOutMenuMusic(reason = "unknown") {
    if (!menuMusic || !isMenuMusicPlaying) return;

    const startVolume = 0.315; // target volume
    const fadeDuration = 600;
    const startTime = performance.now();

    function fade() {
      const elapsed = performance.now() - startTime;
      if (elapsed < fadeDuration) {
        menuMusic.volume = startVolume * (1 - elapsed / fadeDuration);
        requestAnimationFrame(fade);
      } else {
        menuMusic.pause();
        menuMusic.volume = startVolume; // reset for next play
        isMenuMusicPlaying = false;
        console.log("[MENU MUSIC] stopped for gameplay (faded)", reason);
      }
    }
    fade();
  }

  function resumeMenuMusicAfterUserGesture() {
    if (isMenuMusicEnabled() && isMenuMusicBlockedByAutoplay) {
      playMenuMusic("user-gesture");
    }
  }

  // Register user gesture listener for autoplay fallback
  ["click", "touchstart", "keydown"].forEach(evtType => {
    window.addEventListener(evtType, resumeMenuMusicAfterUserGesture, { once: true });
  });
  const mobileLayoutEditBar = document.getElementById("mobile-layout-edit-bar");
  const mobileLayoutCloseButton = document.getElementById("mobile-layout-close-button");
  const mobileLayoutSaveButton = document.getElementById("mobile-layout-save-button");
  const mobileLayoutCancelButton = document.getElementById("mobile-layout-cancel-button");
  const mobileLayoutResetButton = document.getElementById("mobile-layout-reset-button");
  const mobileControlJoystick = document.getElementById("mobile-control-joystick");
  const mobileJoystickThumb = mobileControlJoystick?.querySelector(".mobile-hud-joystick-thumb");
  const mobileControlFire = document.getElementById("mobile-control-fire");
  const mobileControlFireOnly = document.getElementById("mobile-control-fire-only");
  const mobileControlAim = document.getElementById("mobile-control-aim");
  const mobileControlJump = document.getElementById("mobile-control-jump");
  const mobileControlReload = document.getElementById("mobile-control-reload");
  const mobileControlSprint = document.getElementById("mobile-control-sprint");
  const mobileControlCrouch = document.getElementById("mobile-control-crouch");
  const scopeModeOverlay = document.getElementById("scope-mode-overlay");


  function isHomeActuallyOpen() {
    const isMainMenuOpen = document.body.classList.contains("main-menu-open");
    const isInstructionsVisible = instructions && instructions.getAttribute("aria-hidden") === "false";
    // If the home panel element itself is hidden or display none, it's not open
    const homePanelVisible = homePanel && (homePanel.offsetParent !== null);
    return isMainMenuOpen || (isInstructionsVisible && homePanelVisible);
  }

  function isActuallyFullscreenNow() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  let isAimAdsActive = false;
  let preAimAdsCameraState = null;
  let isScopeAimingActive = false;
  let scopeAimStartedFromThirdPerson = false;
  let preScopeCrosshairOpacity = null;

  const AIM_ADS_CAMERA = {
    distance: 4.4,
    offsetX: 0.80,
    offsetY: 0.80,
    offsetZ: 3.00
  };
  const mobileControlCamera = document.getElementById("mobile-control-camera");
  const mobileControlMenu = document.getElementById("mobile-control-menu");
  const mobileControlSettings = document.getElementById("mobile-control-settings");
  const settingsAimingPanel = document.getElementById("settings-panel-aiming");
  const aimingZoomToggle = document.getElementById("aiming-zoom-toggle");
  const aimingScopeToggle = document.getElementById("aiming-scope-toggle");
  const aimingScopeSizeSlider = document.getElementById("aiming-scope-size-slider");
  const aimingScopeSizeValue = document.getElementById("aiming-scope-size-value");
  const aimingScopeColorPicker = document.getElementById("aiming-scope-color");
  const defaultOnlineRelayAddress = "wss://i-will-take-aim-built-multiplayer-server.onrender.com";
  const settingsTabButtons = Array.from(settingsMenu?.querySelectorAll(".settings-tab-button") || []);
  const settingsTabPanels = Array.from(settingsMenu?.querySelectorAll(".settings-tab-panel") || []);
  const settingsContent = settingsMenu?.querySelector(".settings-content, .settings-tabs-content") || null;
  const crosshairCustomizationPanel = document.getElementById("crosshair-customization-panel");
  const crosshairCustomizationCloseButton = document.getElementById("crosshair-customization-close-button");
  const homeSettingsCrosshairButton = document.getElementById("home-settings-crosshair-button");
  const ingameSettingsCrosshairButton = document.getElementById("ingame-settings-crosshair-button");
  const crosshairVisualInputs = Array.from(
    crosshairCustomizationPanel?.querySelectorAll("[data-crosshair-var]") || []
  );

  const movementSlowToggle = document.getElementById("movement-slow-when-shooting");
  const movementShootingSpeedSlider = document.getElementById("movement-shooting-speed");
  const movementShootingSpeedValue = document.getElementById("movement-shooting-speed-value");
  const movementSprintSpeedSlider = document.getElementById("movement-sprint-speed");
  const movementSprintSpeedValue = document.getElementById("movement-sprint-speed-value");

  if (
    !canvas ||
    !hud ||
    !instructions ||
    !homePanel ||
    !homeCameraEntryButton ||
    !homeGunEntryButton ||
    !homeSettingsEntryButton ||
    !homeFullscreenButton ||
    !homeGunView ||
    !homeGunBackButton ||
    !homeSettingsView ||
    !homeSettingsBackButton ||
    !homeSettingsMenuMount ||
    !homeGunCustomizationMount ||
    !homeOnlineModeMount ||
    !readyButton ||
    !mapSelect ||
    !ammoUi ||
    !ammoUiText ||
    !playerHpUi ||
    !playerHpFill ||
    !playerHpText ||
    !startupLoadingOverlay ||
    !startupLoadingShell ||
    !startupLoadingStatus ||
    !startupLoadingDebug ||
    !startupLoadingProgressFill ||
    !startupLoadingPercent ||
    !deviceModeOverlay ||
    !deviceModePcButton ||
    !deviceModePhoneButton ||
    !crosshairCustomizationPanel ||
    !crosshairCustomizationCloseButton ||
    !interactionMenu ||
    !interactionMenuCloseButton ||
    !settingsMenu ||
    !settingsMenuCloseButton ||
    !homeSettingsCrosshairButton ||
    !ingameSettingsCrosshairButton ||
    !settingsFullscreenButton ||
    !settingsControlsPanel ||
    !settingsGraphicsPanel ||
    !settingsMobileLayoutPanel ||
    !settingsGameplayPanel ||
    !settingsAudioEffectsPanel ||
    !settingsDebugAdvancedPanel ||
    !settingsMenuBackButton ||
    !settingsCategoryResetButton ||
    !settingsMobileLayoutTabButton ||
    !mobileLayoutUnavailableNote ||
    !settingsDebugBuildValue ||
    !settingsDebugDeviceValue ||
    !settingsDebugCameraInputValue ||
    !settingsDebugMapValue ||
    !settingsAimingPanel ||
    !aimingZoomToggle ||
    !aimingScopeToggle ||
    settingsTabButtons.length < 8 ||
    settingsTabPanels.length < 8 ||
    !difficultySelect ||
    !spawnEnemyButton ||
    !enemyCountInput ||
    !startWaveButton ||
    !waveEnemyCountInput ||
    !waveCountInput ||
    !waveStatusText ||
    !gunModificationButton ||
    !gunCustomizationPanel ||
    !gunCustomizationCloseButton ||
    !settingsFovInput ||
    !graphicsSettingsSection ||
    !graphicsRenderScaleInput ||
    !graphicsRenderScaleValue ||
    !graphicsPixelRatioInput ||
    !graphicsPixelRatioValue ||
    !graphicsShadowsToggle ||
    !graphicsShadowQualityField ||
    !graphicsShadowQualitySelect ||
    !graphicsRenderDistanceInput ||
    !graphicsRenderDistanceValue ||
    !graphicsEffectQualitySelect ||
    !advancedColorStyleSelect ||
    !advancedExposureInput ||
    !advancedExposureValue ||
    !advancedContrastInput ||
    !advancedContrastValue ||
    !advancedSaturationInput ||
    !advancedSaturationValue ||
    !advancedFogToggle ||
    !advancedFogStrengthInput ||
    !advancedFogStrengthValue ||
    !advancedFogDistanceInput ||
    !advancedFogDistanceValue ||
    !advancedBloomToggle ||
    !advancedBloomStrengthInput ||
    !advancedBloomStrengthValue ||
    !advancedAoToggle ||
    !advancedAoStrengthInput ||
    !advancedAoStrengthValue ||
    !advancedAntialiasingSelect ||
    !advancedMaterialQualitySelect ||
    !advancedDynamicLightsSelect ||
    !advancedMotionBlurSelect ||
    !advancedMotionBlurStrengthInput ||
    !advancedMotionBlurStrengthValue ||
    !savedGunList ||
    !gunNameInput ||
    !gunFireRateInput ||
    !gunDamageInput ||
    !gunHeadshotMultiplierInput ||
    !gunRecoilStrengthInput ||
    !gunRecoilEnabledInput ||
    !gunAdvancedRecoilButton ||
    !gunAdvancedRecoilPanel ||
    !gunAdvancedRecoilCloseButton ||
    !gunRecoilIntensityXInput ||
    !gunRecoilIntensityYInput ||
    !gunRecoilIntensityZInput ||
    !gunReloadTimeInput ||
    !gunAmmoCapacityInput ||
    !gunInfiniteAmmoInput ||
    !saveGunConfigButton ||
    !enemyHpFloating ||
    !enemyHpFill ||
    !statusMessage ||
    !cameraPreviewCursorHint ||
    !playerNameInput ||
    !showOwnNameToggle ||
    !activePlayerNameUi ||
    !lanMultiplayerMenu ||
    !startLanGameButton ||
    !joinLanGameButton ||
    !lanMultiplayerStatus ||
    !lanJoinPanel ||
    !lanHostIpInput ||
    !mobileControlsSettingsSection ||
    !mobileCameraSensitivityInput ||
    !mobileCameraSensitivityValue ||
    !mobileLayoutSettingsSection ||
    !openMobileLayoutButton ||
    !mobileHud ||
    !mobileLayoutEditBar ||
    !mobileLayoutCloseButton ||
    !mobileLayoutSaveButton ||
    !mobileLayoutCancelButton ||
    !mobileLayoutResetButton ||
    !mobileControlJoystick ||
    !mobileJoystickThumb ||
    !mobileControlFire ||
    !mobileControlFireOnly ||
    !mobileControlAim ||
    !mobileControlJump ||
    !mobileControlReload ||
    !mobileControlSprint ||
    !mobileControlCrouch ||
    !mobileControlCamera ||
    !mobileControlMenu ||
    !mobileControlSettings
  ) {
    console.error("Required game UI elements are missing.");
    return;
  }

  const startupTrace = window.__startupTrace ?? {
    htmlOverlayPaintIntentAt: performance.now()
  };

  console.log("[DIAG] Runtime DOM ready", {
    build: DIAG_BUILD_LABEL,
    html: window.location.href,
    module: import.meta.url
  });
  startupTrace.jsBootStartAt = performance.now();
  console.log("[STARTUP]", {
    phase: "JS boot start",
    t: Number(startupTrace.jsBootStartAt.toFixed(1))
  });

  updateHomeMusicToggleUi();
  startupLoadingOverlay.hidden = false;
  startupLoadingOverlay.classList.remove("is-hidden");
  startupLoadingOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("startup-loading");
  playMenuMusic("loading-start");
  console.log("[STARTUP]", {
    phase: "overlay exists",
    elapsedMs: getStartupElapsedMs?.() ?? 0,
    id: startupLoadingOverlay.id
  });
  console.log("[STARTUP]", {
    phase: "overlay shown",
    elapsedMs: getStartupElapsedMs?.() ?? 0
  });

  const settingsMenuOriginalParent = settingsMenu.parentElement;
  const settingsMenuOriginalNextSibling = settingsMenu.nextSibling;
  const gunCustomizationPanelOriginalParent = gunCustomizationPanel.parentElement;
  const gunCustomizationPanelOriginalNextSibling = gunCustomizationPanel.nextSibling;
  const lanMultiplayerMenuOriginalParent = lanMultiplayerMenu.parentElement;
  const lanMultiplayerMenuOriginalNextSibling = lanMultiplayerMenu.nextSibling;

  waveStatusText.style.marginTop = "8px";
  waveStatusText.style.padding = "8px 10px";
  waveStatusText.style.border = "1px solid rgba(255, 255, 255, 0.12)";
  waveStatusText.style.borderRadius = "10px";
  waveStatusText.style.background = "rgba(255, 255, 255, 0.04)";
  waveStatusText.style.color = "#dbeafe";
  waveStatusText.style.fontSize = "0.92rem";
  waveStatusText.style.lineHeight = "1.4";

  function showFatalError(message) {
    let overlay = document.getElementById("fatal-webgl-error");

    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "fatal-webgl-error";
      overlay.style.position = "fixed";
      overlay.style.inset = "0";
      overlay.style.zIndex = "7000";
      overlay.style.display = "grid";
      overlay.style.placeItems = "center";
      overlay.style.padding = "24px";
      overlay.style.background = "rgba(7, 16, 28, 0.88)";
      overlay.style.color = "#eff6ff";
      overlay.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
      overlay.style.textAlign = "center";
      overlay.style.lineHeight = "1.5";

      const panel = document.createElement("div");
      panel.style.maxWidth = "720px";
      panel.style.padding = "20px 24px";
      panel.style.border = "1px solid rgba(255,255,255,0.16)";
      panel.style.borderRadius = "16px";
      panel.style.background = "rgba(12, 24, 40, 0.92)";
      panel.style.boxShadow = "0 18px 40px rgba(0,0,0,0.35)";
      panel.textContent = message;
      overlay.appendChild(panel);
      document.body.appendChild(overlay);
    } else {
      overlay.textContent = message;
    }
  }

  function setStartupLoadingStatus(message) {
    startupLoadingStatus.textContent = message;
  }

  function setStartupLoadingDebug(message) {
    startupLoadingDebug.textContent = message;
  }

  function getStartupElapsedMs() {
    const origin = startupTrace.htmlOverlayPaintIntentAt ?? performance.now();
    return Number((performance.now() - origin).toFixed(1));
  }

  function logStartupMilestone(phase, details = {}) {
    console.log("[STARTUP]", {
      phase,
      elapsedMs: getStartupElapsedMs(),
      ...details
    });
  }

  function isStartupReadyFromDependencies() {
    return startupReadinessKeys.every((key) => startupReadinessState[key] === true);
  }

  function setStartupProgress(percent, reason = "") {
    const nextPercent = THREE.MathUtils.clamp(Math.round(percent), 0, 100);
    if (nextPercent < startupProgressPercent) {
      return;
    }

    startupProgressPercent = nextPercent;
    startupLoadingProgressFill.style.width = `${startupProgressPercent}%`;
    startupLoadingPercent.textContent = `${startupProgressPercent}%`;
    console.log("[STARTUP]", {
      phase: "progress update",
      elapsedMs: getStartupElapsedMs(),
      progress: startupProgressPercent,
      reason
    });
  }

  function updateStartupLoadingProgress() {
    let resolvedProgress = 0;
    for (const key of startupReadinessKeys) {
      if (startupReadinessState[key]) {
        resolvedProgress = Math.max(resolvedProgress, startupProgressByKey[key] ?? 0);
      }
    }

    setStartupProgress(resolvedProgress, "resolved startup milestones");
  }

  function setStartupPhase(statusMessage, debugMessage) {
    setStartupLoadingStatus(statusMessage);
    setStartupLoadingDebug(`Phase: ${debugMessage} | Progress: ${startupProgressPercent}%`);
    logStartupMilestone(statusMessage, {
      debug: debugMessage
    });
  }

  function setStartupReadiness(key, isReady, {
    statusMessage = "",
    debugMessage = "",
    logPhase = ""
  } = {}) {
    if (!(key in startupReadinessState)) {
      return;
    }

    startupReadinessState[key] = isReady;
    startupReady = isStartupReadyFromDependencies();
    updateStartupLoadingProgress();
    if (statusMessage) {
      setStartupLoadingStatus(statusMessage);
    }
    if (debugMessage) {
      setStartupLoadingDebug(`Phase: ${debugMessage} | Progress: ${startupProgressPercent}%`);
    }
    if (key === "mapReady" && selectedMap === warehouseRailyardMapId) {
      logMapPipelineStep(
        createMapPipelineContext(selectedMap, "startup readiness"),
        isReady ? "map-ready flag set" : "map-ready flag cleared",
        {
          dependency: key,
          ready: isReady
        }
      );
    }
    if (logPhase) {
      logStartupMilestone(logPhase, {
        dependency: key,
        ready: isReady
      });
    }
  }

  function showStartupLoadingError(message, error = null) {
    startupLoadingShell.classList.add("has-error");
    setStartupLoadingStatus(message);
    setStartupLoadingDebug(`Phase: Startup halted. ${message} | Progress: ${startupProgressPercent}%`);
    logStartupMilestone("startup error", {
      message,
      error: error ? String(error?.message || error) : null
    });
  }

  function hideStartupLoadingOverlay() {
    if (startupOverlayHideTimeoutId) {
      window.clearTimeout(startupOverlayHideTimeoutId);
      startupOverlayHideTimeoutId = 0;
    }

    // Startup loading overlay
    // Hide loading overlay only after startupReady
    document.body.classList.remove("startup-loading");
    startupLoadingOverlay.classList.add("is-hidden");
    startupLoadingOverlay.setAttribute("aria-hidden", "true");
    logStartupMilestone("startup overlay hide");
    startupOverlayHideTimeoutId = window.setTimeout(() => {
      startupLoadingOverlay.hidden = true;
    }, 280);
  }

  async function resolveStartupLoadingOverlay() {
    if (!isStartupReadyFromDependencies()) {
      return;
    }

    const elapsed = performance.now() - startupSequenceStartTime;
    const remainingDelay = Math.max(0, startupMinimumOverlayMs - elapsed);

    if (remainingDelay > 0) {
      await new Promise((resolve) => {
        window.setTimeout(resolve, remainingDelay);
      });
    }

    hideStartupLoadingOverlay();
  }

  function applySelectedDeviceMode(mode) {
    const resolvedMode = mode === "phone" ? "phone" : "pc";
    const nextState = resolvedMode === "phone"
      ? {
        deviceType: "phone",
        controls: "mobile",
        quality: "mobile"
      }
      : {
        deviceType: "pc",
        controls: "desktop",
        quality: "desktop"
      };

    Object.assign(startupDeviceMode, nextState);
    document.body.dataset.deviceType = startupDeviceMode.deviceType;
    document.body.dataset.controlMode = startupDeviceMode.controls;
    document.body.dataset.qualityMode = startupDeviceMode.quality;
    document.body.classList.toggle("device-mode-pc", startupDeviceMode.deviceType === "pc");
    document.body.classList.toggle("device-mode-phone", startupDeviceMode.deviceType === "phone");
    if (!isDesktopPointerLockCameraModeActive() && document.pointerLockElement === canvas) {
      document.exitPointerLock?.();
    }
    if (!isPhoneModeSelected()) {
      clearActiveMobileGameplayInputs();
    }
    applyGraphicsDefaultsForDeviceModeIfNeeded(resolvedMode);
    syncMobileLayoutSettingsAvailability();
    syncSettingsDebugReadout();
    applyMobileControlLayout();
    refreshMobileHudVisibility();
    syncMobileHudActionAvailability();
    updateMobileInputDiagnosticsOverlay();
  }

  function hideDeviceModeChooser() {
    if (deviceModeOverlayHideTimeoutId) {
      window.clearTimeout(deviceModeOverlayHideTimeoutId);
      deviceModeOverlayHideTimeoutId = 0;
    }

    document.body.classList.remove("device-mode-selection-open");
    deviceModeOverlay.classList.remove("is-visible");
    deviceModeOverlay.setAttribute("aria-hidden", "true");
    deviceModeOverlayHideTimeoutId = window.setTimeout(() => {
      deviceModeOverlay.hidden = true;
      deviceModeOverlayHideTimeoutId = 0;
    }, 240);
  }

  function finalizeDeviceModeSelection(mode) {
    if (deviceModeSelectionResolved) {
      return;
    }

    deviceModeSelectionResolved = true;
    deviceModePcButton.disabled = true;
    deviceModePhoneButton.disabled = true;
    applySelectedDeviceMode(mode);
    console.log("device_mode_selected", {
      ...startupDeviceMode
    });
    hideDeviceModeChooser();

    const resolveSelection = resolvePendingDeviceModeSelection;
    pendingDeviceModeSelectionPromise = null;
    resolvePendingDeviceModeSelection = null;
    resolveSelection?.({ ...startupDeviceMode });
  }

  function bindDeviceModeChooserEvents() {
    if (deviceModeChooserListenersBound) {
      return;
    }

    deviceModeChooserListenersBound = true;
    deviceModePcButton.addEventListener("click", () => {
      finalizeDeviceModeSelection("pc");
    });
    deviceModePhoneButton.addEventListener("click", () => {
      finalizeDeviceModeSelection("phone");
    });
  }

  function showDeviceModeChooser() {
    if (deviceModeSelectionResolved) {
      return Promise.resolve({ ...startupDeviceMode });
    }

    if (pendingDeviceModeSelectionPromise) {
      return pendingDeviceModeSelectionPromise;
    }

    if (deviceModeOverlayHideTimeoutId) {
      window.clearTimeout(deviceModeOverlayHideTimeoutId);
      deviceModeOverlayHideTimeoutId = 0;
    }

    deviceModePcButton.disabled = false;
    deviceModePhoneButton.disabled = false;
    deviceModeOverlay.hidden = false;
    deviceModeOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("device-mode-selection-open");
    window.requestAnimationFrame(() => {
      deviceModeOverlay.classList.add("is-visible");
    });
    console.log("device_mode_chooser_shown", {
      startupReady,
      loadingOverlayVisible: document.body.classList.contains("startup-loading")
    });

    pendingDeviceModeSelectionPromise = new Promise((resolve) => {
      resolvePendingDeviceModeSelection = resolve;
    });

    window.setTimeout(() => {
      deviceModePcButton.focus();
    }, 0);

    return pendingDeviceModeSelectionPromise;
  }

  function continueStartupAfterDeviceSelection() {
    if (!listenersBound) {
      bindEventListeners();
    }

    console.log("game_startup_continues_after_device_selection", {
      ...startupDeviceMode
    });
  }

  function isPhoneModeSelected() {
    return startupDeviceMode.controls === "mobile";
  }

  function isDesktopPointerLockCameraModeActive() {
    return startupDeviceMode.controls === "desktop";
  }

  function getActiveCameraInputModeLabel() {
    if (isDesktopPointerLockCameraModeActive()) {
      return "desktop-pointer-lock";
    }

    return activeMobileCameraInputSource === "desktop-sim" ||
      activeMobileFireAimInputSource === "desktop-sim"
      ? "mobile-touch-desktop-sim"
      : "mobile-touch";
  }

  function getGameplayHudDefaultEntry(elementId) {
    if (gameplayHudLayoutDefaults?.[elementId]) {
      return gameplayHudLayoutDefaults[elementId];
    }

    return gameplayHudLayoutFallbackDefaults[elementId];
  }

  function captureGameplayHudLayoutDefaults() {
    const metrics = getMobileHudViewportMetrics();
    const nextDefaults = {};

    for (const elementId of editableGameplayHudIds) {
      const config = editableGameplayHudElements[elementId];
      const fallbackEntry = gameplayHudLayoutFallbackDefaults[elementId];

      if (config.layoutType === "hud") {
        const rect = config.element.getBoundingClientRect();

        nextDefaults[elementId] = {
          x: Number.isFinite(rect.left)
            ? THREE.MathUtils.clamp(rect.left / metrics.width, 0, 1)
            : fallbackEntry.x,
          y: Number.isFinite(rect.top)
            ? THREE.MathUtils.clamp(rect.top / metrics.height, 0, 1)
            : fallbackEntry.y,
          size: fallbackEntry.size
        };
        continue;
      }

      nextDefaults[elementId] = { ...fallbackEntry };
    }

    gameplayHudLayoutDefaults = nextDefaults;
  }

  function getDefaultMobileControlLayout() {
    const layout = {};
    if (!gameplayHudLayoutDefaults) {
      captureGameplayHudLayoutDefaults();
    }

    for (const elementId of editableGameplayHudIds) {
      layout[elementId] = { ...getGameplayHudDefaultEntry(elementId) };
    }
    return layout;
  }

  function cloneMobileControlLayout(layout = gameplayHudLayoutFallbackDefaults) {
    const nextLayout = {};
    for (const elementId of editableGameplayHudIds) {
      const fallbackEntry = getGameplayHudDefaultEntry(elementId);
      const sourceEntry = layout?.[elementId] ?? fallbackEntry;
      nextLayout[elementId] = {
        x: Number(sourceEntry?.x),
        y: Number(sourceEntry?.y),
        size: Number(sourceEntry?.size)
      };
    }
    return nextLayout;
  }

  function getMobileHudViewportMetrics() {
    let width = Math.max(1, mobileHud.clientWidth || window.innerWidth || 1);
    let height = Math.max(1, mobileHud.clientHeight || window.innerHeight || 1);

    if (window.visualViewport) {
      width = Math.max(1, window.visualViewport.width || width);
      height = Math.max(1, window.visualViewport.height || height);
    }

    return {
      width,
      height,
      base: Math.max(1, Math.min(width, height))
    };
  }

  function getMobileTouchZoneMetrics() {
    const metrics = getMobileHudViewportMetrics();
    const movementZoneWidth = metrics.width * 0.30;
    return {
      ...metrics,
      movementZoneWidth,
      cameraZoneStart: movementZoneWidth
    };
  }

  function getActiveMobileInputPointerSnapshot() {
    return {
      activeMobileCameraPointerId,
      activeMobileJoystickPointerId,
      activeMobileFireAimPointerId,
      activeMobileHudActionPointerIds: Array.from(activeMobileHudActionPointers.keys()),
      activeMobileTouchPointerIds: Array.from(activeMobileTouchPointerIds)
    };
  }

  function registerActiveMobileTouchPointerId(pointerId) {
    if (!Number.isFinite(pointerId)) {
      return false;
    }

    const sizeBefore = activeMobileTouchPointerIds.size;
    activeMobileTouchPointerIds.add(pointerId);
    if (activeMobileTouchPointerIds.size === sizeBefore) {
      return false;
    }

    updateMobileInputDiagnosticsOverlay();
    return true;
  }

  function unregisterActiveMobileTouchPointerId(pointerId) {
    if (!Number.isFinite(pointerId)) {
      return false;
    }

    const didDelete = activeMobileTouchPointerIds.delete(pointerId);
    if (didDelete) {
      updateMobileInputDiagnosticsOverlay();
    }
    return didDelete;
  }

  function clearActiveMobileTouchPointerRegistry() {
    if (activeMobileTouchPointerIds.size === 0) {
      return false;
    }

    activeMobileTouchPointerIds.clear();
    updateMobileInputDiagnosticsOverlay();
    return true;
  }

  function isActiveMobileTouchPointerIdAlive(pointerId) {
    return pointerId !== null && activeMobileTouchPointerIds.has(pointerId);
  }

  function isActiveMobileCameraPointerAlive() {
    if (activeMobileCameraPointerId === null) {
      return false;
    }

    if (activeMobileCameraInputSource === "desktop-sim") {
      return true;
    }

    return isActiveMobileTouchPointerIdAlive(activeMobileCameraPointerId);
  }

  function getElementClassNameForDiagnostics(element) {
    if (!(element instanceof Element)) {
      return "";
    }

    if (typeof element.className === "string") {
      return element.className.trim();
    }

    return element.getAttribute("class") || "";
  }

  function describeElementForDiagnostics(element) {
    if (!(element instanceof Element)) {
      return {
        tag: "",
        id: "",
        class: ""
      };
    }

    return {
      tag: element.tagName.toLowerCase(),
      id: element.id || "",
      class: getElementClassNameForDiagnostics(element)
    };
  }

  function getClosestMobileInputBlockingOverlay(element) {
    if (!(element instanceof Element)) {
      return null;
    }

    let current = element;
    while (current) {
      if (
        current.matches?.(
          [
            "[data-scrollable-menu]",
            "#settings-menu",
            ".settings-content",
            ".settings-tab-panel",
            "#mobile-layout-edit-bar",
            "#interaction-menu",
            "#gun-customization-panel",
            "#device-mode-overlay",
            ".device-mode-panel",
            "#instructions",
            ".home-panel",
            ".home-settings-view"
          ].join(", ")
        ) &&
        isMobileInputBlockerVisible(current)
      ) {
        return current;
      }
      current = current.parentElement;
    }

    return null;
  }

  function getElementVisibilityDiagnostics(element) {
    if (!(element instanceof Element)) {
      return {
        visible: false,
        display: "",
        visibility: "",
        opacity: "",
        pointerEvents: "",
        rectWidth: 0,
        rectHeight: 0
      };
    }

    const computedStyle = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    let visible =
      !element.hidden &&
      computedStyle.display !== "none" &&
      computedStyle.visibility !== "hidden" &&
      Number.parseFloat(computedStyle.opacity || "1") > 0 &&
      computedStyle.pointerEvents !== "none" &&
      rect.width > 0 &&
      rect.height > 0;

    let current = element.parentElement;
    while (visible && current) {
      const currentStyle = window.getComputedStyle(current);
      if (
        current.hidden ||
        currentStyle.display === "none" ||
        currentStyle.visibility === "hidden" ||
        Number.parseFloat(currentStyle.opacity || "1") <= 0 ||
        currentStyle.pointerEvents === "none"
      ) {
        visible = false;
        break;
      }
      current = current.parentElement;
    }

    return {
      visible,
      display: computedStyle.display,
      visibility: computedStyle.visibility,
      opacity: computedStyle.opacity,
      pointerEvents: computedStyle.pointerEvents,
      rectWidth: Number(rect.width.toFixed(1)),
      rectHeight: Number(rect.height.toFixed(1))
    };
  }

  function isSettingsMenuTouchBlockActive(element) {
    if (!(element instanceof Element) || !element.closest("#settings-menu")) {
      return false;
    }

    if (!settingsMenuOpen) {
      return false;
    }

    return getElementVisibilityDiagnostics(settingsMenu).visible &&
      getElementVisibilityDiagnostics(element).visible;
  }

  function isMobileInputBlockerVisible(element) {
    if (!(element instanceof Element)) {
      return false;
    }

    if (element.closest("#settings-menu")) {
      return isSettingsMenuTouchBlockActive(element);
    }

    if (element.closest("#mobile-layout-edit-bar")) {
      return mobileLayoutEditMode &&
        getElementVisibilityDiagnostics(mobileLayoutEditBar).visible &&
        getElementVisibilityDiagnostics(element).visible;
    }

    if (element.closest("#interaction-menu")) {
      return interactionMenuOpen &&
        getElementVisibilityDiagnostics(interactionMenu).visible &&
        getElementVisibilityDiagnostics(element).visible;
    }

    if (element.closest("#gun-customization-panel")) {
      return gunPanelOpen &&
        getElementVisibilityDiagnostics(gunCustomizationPanel).visible &&
        getElementVisibilityDiagnostics(element).visible;
    }

    if (element.closest("#device-mode-overlay, .device-mode-panel")) {
      return getElementVisibilityDiagnostics(deviceModeOverlay).visible &&
        getElementVisibilityDiagnostics(element).visible;
    }

    return getElementVisibilityDiagnostics(element).visible;
  }

  function updateMobileInputDiagnosticsOverlay() {
  }

  function logMobileCameraStartAttempt(event, options = {}) {
    void event;
    return {
      accepted: Boolean(options.accepted),
      rejectReason: options.rejectReason || "",
      cameraPointerRejectType: options.cameraPointerRejectType || "",
      staleCleanupHappened: Boolean(options.staleCleanupHappened)
    };
  }

  function logMobileCameraMove(event, deltaX, deltaY) {
    void event;
    void deltaX;
    void deltaY;
  }

  function logMobileCameraCleanupEvent(eventName, details = {}) {
    void eventName;
    void details;
  }

  function logMobilePointerStaleDetected(reason, activePointersBefore, extra = {}) {
    void reason;
    void activePointersBefore;
    void extra;
  }

  function clearStaleActiveMobileCameraPointerIfNeeded(reason, extra = {}) {
    if (
      activeMobileCameraPointerId === null ||
      activeMobileCameraInputSource === "desktop-sim" ||
      isActiveMobileCameraPointerAlive()
    ) {
      return false;
    }

    const activePointersBefore = getActiveMobileInputPointerSnapshot();
    const stalePointerId = activeMobileCameraPointerId;
    logMobilePointerStaleDetected(reason, activePointersBefore, {
      stalePointerId,
      inputSource: activeMobileCameraInputSource,
      ...extra
    });
    stopMobileCameraInteraction(stalePointerId, { reason });
    logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
      eventType: "stale-check",
      activePointersBefore,
      clearedPointerIds: [stalePointerId],
      cameraStateReset: true,
      activePointersAfter: getActiveMobileInputPointerSnapshot(),
      reason,
      staleCleanup: true
    });
    return true;
  }

  function clearTouchBasedMobileGameplayInputs(reason, extra = {}) {
    const activePointersBefore = getActiveMobileInputPointerSnapshot();
    const clearedPointerIdSet = new Set();
    let cameraStateReset = false;

    if (
      activeMobileJoystickPointerId !== null &&
      isActiveMobileTouchPointerIdAlive(activeMobileJoystickPointerId)
    ) {
      clearedPointerIdSet.add(activeMobileJoystickPointerId);
      stopMobileJoystickInteraction(activeMobileJoystickPointerId);
    }

    if (
      activeMobileCameraPointerId !== null &&
      activeMobileCameraInputSource !== "desktop-sim"
    ) {
      clearedPointerIdSet.add(activeMobileCameraPointerId);
      stopMobileCameraInteraction(activeMobileCameraPointerId, { reason });
      cameraStateReset = true;
    }

    for (const [pointerId] of Array.from(activeMobileHudActionPointers.entries())) {
      if (!isActiveMobileTouchPointerIdAlive(pointerId)) {
        continue;
      }

      clearedPointerIdSet.add(pointerId);
      releaseMobileHudActionPointer(pointerId);
    }

    if (
      activeMobileFireAimPointerId !== null &&
      activeMobileFireAimInputSource !== "desktop-sim"
    ) {
      clearedPointerIdSet.add(activeMobileFireAimPointerId);
      stopMobileFireDragAim(activeMobileFireAimPointerId);
      isShooting = false;
    }

    clearActiveMobileTouchPointerRegistry();
    syncMobileHudActionAvailability();
    logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
      eventType: reason,
      activePointersBefore,
      clearedPointerIds: Array.from(clearedPointerIdSet),
      cameraStateReset,
      activePointersAfter: getActiveMobileInputPointerSnapshot(),
      reason,
      staleCleanup: cameraStateReset,
      ...extra
    });
  }

  function getEditableGameplayHudSizeBounds(config) {
    return {
      min: Number.isFinite(config?.minSize) ? config.minSize : mobileControlMinSize,
      max: Number.isFinite(config?.maxSize) ? config.maxSize : mobileControlMaxSize
    };
  }

  function clearGameplayHudLayoutOverrides() {
    for (const elementId of editableGameplayHudIds) {
      const config = editableGameplayHudElements[elementId];
      config.element.classList.remove("selected");

      if (config.layoutType !== "hud") {
        continue;
      }

      config.element.style.left = "";
      config.element.style.top = "";
      config.element.style.right = "";
      config.element.style.bottom = "";
      config.element.style.transform = "";
      config.element.style.transformOrigin = "";
    }
  }

  function clampMobileControlLayoutEntry(elementId, entry, metrics = getMobileHudViewportMetrics()) {
    const config = editableGameplayHudElements[elementId];
    const fallbackEntry = getGameplayHudDefaultEntry(elementId);
    const { min, max } = getEditableGameplayHudSizeBounds(config);
    const resolvedSize = THREE.MathUtils.clamp(
      Number.isFinite(entry?.size) ? entry.size : fallbackEntry.size,
      min,
      max
    );

    let minX;
    let maxX;
    let minY;
    let maxY;

    if (config.layoutType === "hud") {
      const baseWidthPx = Math.max(1, config.element.offsetWidth || 1);
      const baseHeightPx = Math.max(1, config.element.offsetHeight || 1);
      const widthPx = baseWidthPx * resolvedSize;
      const heightPx = baseHeightPx * resolvedSize;
      minX = mobileControlEdgePaddingPx / metrics.width;
      maxX = (metrics.width - widthPx - mobileControlEdgePaddingPx) / metrics.width;
      minY = mobileControlEdgePaddingPx / metrics.height;
      maxY = (metrics.height - heightPx - mobileControlEdgePaddingPx) / metrics.height;
    } else {
      const sizePx = resolvedSize * metrics.base;
      const halfSizePx = sizePx * 0.5;
      minX = (halfSizePx + mobileControlEdgePaddingPx) / metrics.width;
      maxX = 1 - minX;
      minY = (halfSizePx + mobileControlEdgePaddingPx) / metrics.height;
      maxY = 1 - minY;
    }

    return {
      x: THREE.MathUtils.clamp(
        Number.isFinite(entry?.x) ? entry.x : fallbackEntry.x,
        Math.min(minX, maxX),
        Math.max(minX, maxX)
      ),
      y: THREE.MathUtils.clamp(
        Number.isFinite(entry?.y) ? entry.y : fallbackEntry.y,
        Math.min(minY, maxY),
        Math.max(minY, maxY)
      ),
      size: resolvedSize
    };
  }

  function getActiveMobileControlLayout() {
    return mobileLayoutEditMode && mobileControlLayoutDraft
      ? mobileControlLayoutDraft
      : mobileControlLayout;
  }

  function normalizeSettingsTabId(tabId) {
    return settingsTabOrder.includes(tabId) ? tabId : "graphics";
  }

  function syncSettingsDebugReadout() {
    settingsDebugBuildValue.textContent = DIAG_BUILD_LABEL;
    settingsDebugDeviceValue.textContent = startupDeviceMode.deviceType
      ? startupDeviceMode.deviceType === "phone" ? "Phone Mode" : "PC Mode"
      : "Not Selected";
    settingsDebugCameraInputValue.textContent = getActiveCameraInputModeLabel();
    settingsDebugMapValue.textContent = getMapDisplayName(currentLoadedMapId || selectedMap);
  }

  function updateSettingsCategoryResetAvailability() {
    const canResetCurrentTab =
      Boolean(activeSettingsTabId) &&
      settingsCategoryResettableTabs.has(activeSettingsTabId) &&
      !(activeSettingsTabId === "mobileLayout" && !isPhoneModeSelected());
    settingsCategoryResetButton.disabled = !canResetCurrentTab;
  }

  function getSettingsElementComputedSummary(element) {
    if (!(element instanceof HTMLElement)) {
      return null;
    }

    const computedStyle = window.getComputedStyle(element);
    return {
      display: computedStyle.display,
      visibility: computedStyle.visibility,
      height: computedStyle.height,
      overflow: computedStyle.overflow,
      overflowY: computedStyle.overflowY,
      hidden: Boolean(element.hidden),
      childElementCount: element.children.length,
      clientHeight: element.clientHeight,
      scrollHeight: element.scrollHeight
    };
  }

  function logSettingsMenuDiagnostics(reason = "manual") {
    if (!(settingsMenu instanceof HTMLElement)) {
      console.log("settings_menu_diagnostics_missing_menu", { reason });
      return;
    }

    const panelEntries = [
      ["Controls", settingsControlsPanel],
      ["Graphics", settingsGraphicsPanel],
      ["Mobile Layout", settingsMobileLayoutPanel],
      ["Gameplay", settingsGameplayPanel],
      ["UI", settingsAudioEffectsPanel],
      ["Debug / Advanced", settingsDebugAdvancedPanel]
    ];

    const panelChildCounts = {};
    const panelComputedStyles = {};

    for (const [label, panel] of panelEntries) {
      panelChildCounts[label] = panel instanceof HTMLElement ? panel.children.length : null;
      panelComputedStyles[label] = getSettingsElementComputedSummary(panel);
    }

    console.log("settings_menu_diagnostics", {
      reason,
      outerHtmlLength: settingsMenu.outerHTML.length,
      activeTab: activeSettingsTabId,
      panelChildCounts,
      computedStyles: {
        settingsMenu: getSettingsElementComputedSummary(settingsMenu),
        settingsContent: getSettingsElementComputedSummary(settingsContent),
        panels: panelComputedStyles
      }
    });
  }

  function queueSettingsMenuDiagnostics(reason) {
    window.requestAnimationFrame(() => {
      logSettingsMenuDiagnostics(reason);
    });
  }

  function collapseActiveSettingsTab({ emitLog = true } = {}) {
    activeSettingsTabId = "";

    for (const button of settingsTabButtons) {
      button.classList.remove("is-active");
      button.setAttribute("aria-selected", "false");
      button.setAttribute("aria-expanded", "false");
    }

    for (const panel of settingsTabPanels) {
      panel.classList.remove("is-active");
      panel.hidden = true;
      panel.setAttribute("aria-hidden", "true");
    }

    updateSettingsCategoryResetAvailability();

    if (emitLog) {
      console.log("settings_tab_selected", {
        tab: ""
      });
    }

    if (settingsMenuOpen || homeSettingsViewOpen || activeSettingsPreviewFlow === "camera") {
      queueSettingsMenuDiagnostics("tab-change:collapsed");
    }
  }

  function setActiveSettingsTab(tabId, { emitLog = true } = {}) {
    const nextTabId = normalizeSettingsTabId(tabId);
    activeSettingsTabId = nextTabId;

    for (const button of settingsTabButtons) {
      const isActive = button.dataset.settingsTab === nextTabId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("aria-expanded", String(isActive));
    }

    for (const panel of settingsTabPanels) {
      const isActive = panel.dataset.settingsTabPanel === nextTabId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
      panel.setAttribute("aria-hidden", String(!isActive));
    }

    updateSettingsCategoryResetAvailability();

    if (emitLog) {
      console.log("settings_tab_selected", {
        tab: nextTabId
      });
    }

    if (settingsMenuOpen || homeSettingsViewOpen || activeSettingsPreviewFlow === "camera") {
      queueSettingsMenuDiagnostics(`tab-change:${nextTabId}`);
    }
  }

  function syncSettingsTabAvailability() {
    const phoneModeActive = isPhoneModeSelected();
    settingsMobileLayoutTabButton.classList.remove("is-disabled");
    settingsMobileLayoutTabButton.classList.toggle("is-phone-only", !phoneModeActive);
    settingsMobileLayoutTabButton.setAttribute("aria-disabled", "false");
    mobileLayoutUnavailableNote.hidden = phoneModeActive;

    updateSettingsCategoryResetAvailability();
  }

  function resetSettingsCategoryToDefault() {
    switch (activeSettingsTabId) {
      case "controls": {
        applyCameraFov(defaultCameraFov, {
          persist: true,
          syncInput: true
        });
        const resetSettings = cameraMode === "firstPerson"
          ? defaultFirstPersonCameraSettings
          : defaultCameraCustomizationSettings;
        for (const config of cameraCustomizationControlConfigs) {
          applyCameraCustomizationSetting(
            config.key,
            resetSettings[config.key],
            { persist: false, syncInputs: false }
          );
        }
        persistCameraCustomizationSettings();
        applyMobileCameraSensitivity(defaultMobileCameraSensitivityPercent, {
          persist: true,
          syncInput: true
        });
        syncSettingsInputs();
        showStatusMessage("Control settings reset.", 1500);
        return;
      }
      case "graphics":
        applyGraphicsSettings(
          getDefaultGraphicsSettingsForDeviceMode(startupDeviceMode.quality),
          {
            persist: true,
            syncInputs: true,
            reason: "category-reset:graphics"
          }
        );
        showStatusMessage("Graphics settings reset.", 1500);
        return;
      case "mobileLayout":
        if (!isPhoneModeSelected()) {
          return;
        }
        resetMobileControlLayout();
        return;
      case "audioEffects":
        applyUiTransparency(defaultUiTransparency, {
          persist: true,
          syncInput: true
        });
        showStatusMessage("UI settings reset.", 1500);
        return;
      default:
        return;
    }
  }

  function handleSettingsBackAction() {
    if (homeSettingsViewOpen) {
      setHomeSettingsViewOpen(false);
      return;
    }

    if (settingsMenuOpen) {
      setSettingsMenuOpen(false);
    }
  }

  function getMobileLayoutEntryContext() {
    if (!isPhoneModeSelected()) {
      return "";
    }

    const inMainMenu = document.body.classList.contains("main-menu-open");
    if (homeSettingsViewOpen || (settingsMenuOpen && inMainMenu)) {
      return "home-settings";
    }

    if (
      settingsMenuOpen &&
      gameStarted &&
      !inMainMenu &&
      activeSettingsPreviewFlow !== "camera"
    ) {
      return "in-game-settings";
    }

    return "";
  }

  function syncMobileLayoutSettingsAvailability() {
    const phoneModeActive = isPhoneModeSelected();
    mobileControlsSettingsSection.hidden = !phoneModeActive;
    mobileControlsSettingsSection.setAttribute("aria-hidden", String(!phoneModeActive));
    mobileLayoutSettingsSection.hidden = !phoneModeActive;
    mobileLayoutSettingsSection.setAttribute("aria-hidden", String(!phoneModeActive));
    const canOpenLayoutPreviewFromCurrentContext =
      phoneModeActive &&
      Boolean(getMobileLayoutEntryContext()) &&
      !mobileLayoutEditMode &&
      activeSettingsPreviewFlow !== "mobile-layout" &&
      activeSettingsPreviewFlow !== "camera";
    openMobileLayoutButton.disabled = !canOpenLayoutPreviewFromCurrentContext;
    openMobileLayoutButton.textContent = mobileLayoutEditMode ? "Editing Layout..." : "Custom Layout";
    syncSettingsTabAvailability();
  }

  function updateMobileLayoutEditUi() {
    mobileHud.classList.toggle("edit-mode", mobileLayoutEditMode);
    mobileLayoutEditBar.hidden = !mobileLayoutEditMode;
    mobileLayoutEditBar.setAttribute("aria-hidden", String(!mobileLayoutEditMode));
    syncMobileLayoutSettingsAvailability();
    updateMobileInputDiagnosticsOverlay();
  }

  function isMobileHudGameplayContextActive() {
    return isPhoneModeSelected() &&
      gameStarted &&
      !document.body.classList.contains("main-menu-open") &&
      activeSettingsPreviewFlow !== "camera" &&
      activeSettingsPreviewFlow !== "mobile-layout";
  }

  function canUseMobileJoystickGameplay() {
    return isMobileHudGameplayContextActive() &&
      !mobileLayoutEditMode &&
      !menuOpen &&
      !playerDead;
  }

  function canUseMobileTouchCameraGameplay() {
    return isMobileHudGameplayContextActive() &&
      !mobileLayoutEditMode &&
      !menuOpen &&
      !playerDead;
  }

  function isTouchInsideScrollableMenu(target) {
    if (!(target instanceof Element)) {
      return false;
    }

    return Boolean(getClosestMobileInputBlockingOverlay(target));
  }

  function isSettingsInteractiveControl(target) {
    if (!(target instanceof Element)) {
      return false;
    }

    return Boolean(
      target.closest(
        [
          "#settings-menu input[type=\"range\"]",
          "#settings-menu select",
          "#settings-menu button",
          "#settings-menu input[type=\"checkbox\"]",
          "#settings-menu input[type=\"text\"]",
          "#settings-menu input[type=\"number\"]",
          "#settings-menu input:not([type])"
        ].join(", ")
      )
    );
  }

  function getSettingsScrollContainerForTarget(target) {
    if (!(settingsMenu instanceof HTMLElement) || !(settingsContent instanceof HTMLElement)) {
      return null;
    }

    if (target instanceof Element && !target.closest("#settings-menu")) {
      return null;
    }

    return settingsContent;
  }

  function handleSettingsWheelScroll(event) {
    const scrollContainer = getSettingsScrollContainerForTarget(event.target);
    if (!scrollContainer || event.defaultPrevented || event.ctrlKey) {
      return;
    }

    const directInteractiveControl = isSettingsInteractiveControl(event.target);

    const deltaY = Number.isFinite(event.deltaY) ? event.deltaY : 0;
    const deltaX = Number.isFinite(event.deltaX) ? event.deltaX : 0;
    if (deltaY === 0 && deltaX === 0) {
      return;
    }

    const canScrollVertically = scrollContainer.scrollHeight > scrollContainer.clientHeight + 1;
    const canScrollHorizontally = scrollContainer.scrollWidth > scrollContainer.clientWidth + 1;
    if (!canScrollVertically && !canScrollHorizontally) {
      return;
    }

    scrollContainer.scrollBy({
      top: deltaY,
      left: deltaX,
      behavior: "auto"
    });

    if (directInteractiveControl || event.target !== scrollContainer || deltaY !== 0 || deltaX !== 0) {
      event.preventDefault();
    }
  }

  function isMobileTouchZoneEligibleTarget(target) {
    if (!(target instanceof Element)) {
      return true;
    }

    if (isTouchInsideScrollableMenu(target)) {
      return false;
    }

    return !target.closest(".mobile-hud-control");
  }

  function canUseMobileHudAction(actionId) {
    const config = mobileHudActionConfigs[actionId];
    if (!config || !isMobileHudGameplayContextActive() || mobileLayoutEditMode) {
      return false;
    }

    if (!config.allowWhenMenuOpen && menuOpen) {
      return false;
    }

    if (!config.allowWhilePlayerDead && playerDead) {
      return false;
    }

    if (actionId === "reload" && (currentGun.infiniteAmmo || isReloading || ammo === maxAmmo)) {
      return false;
    }

    return true;
  }

  function isMobileHudActionPointerActive(actionId) {
    for (const activeActionId of activeMobileHudActionPointers.values()) {
      if (activeActionId === actionId) {
        return true;
      }
    }

    return false;
  }

  function getMobileHudActionActiveState(actionId) {
    switch (actionId) {
      case "fire":
      case "fireOnly":
        return isShooting;
      case "aim":
        return isAimAdsActive;
      case "sprint":
        return Boolean(moveState.sprint);
      case "crouch":
        return isCrouching;
      case "cameraToggle":
        return cameraMode === "firstPerson";
      case "menu":
        return interactionMenuOpen;
      case "settings":
        return settingsMenuOpen;
      default:
        return false;
    }
  }

  function syncMobileHudActionAvailability() {
    for (const actionId of mobileHudActionIds) {
      const element = editableGameplayHudElements[actionId]?.element;
      if (!element) {
        continue;
      }

      const isEnabled = canUseMobileHudAction(actionId);
      const isActive = isMobileHudActionPointerActive(actionId) || getMobileHudActionActiveState(actionId);
      element.classList.toggle("is-disabled", !isEnabled);
      element.classList.toggle("is-active", isActive);
    }

    mobileControlJoystick.classList.toggle(
      "is-disabled",
      !canUseMobileJoystickGameplay() && !mobileLayoutEditMode
    );
  }

  function resetMobileJoystickVisual() {
    mobileJoystickThumb.style.transform = "translate(-50%, -50%)";
    if (!mobileLayoutEditMode) {
      mobileControlJoystick.classList.remove("is-active");
    }
  }

  function setMobileJoystickRuntimeAnchor(clientX, clientY) {
    const metrics = getMobileTouchZoneMetrics();
    const activeLayout = getActiveMobileControlLayout() ?? getDefaultMobileControlLayout();
    const baseEntry = activeLayout?.joystick ?? getGameplayHudDefaultEntry("joystick");
    const clampedEntry = clampMobileControlLayoutEntry(
      "joystick",
      {
        x: clientX / metrics.width,
        y: clientY / metrics.height,
        size: baseEntry.size
      },
      metrics
    );

    mobileJoystickRuntimeAnchor = {
      x: clampedEntry.x,
      y: clampedEntry.y
    };
    applyMobileControlLayout();
  }

  function clearMobileJoystickRuntimeAnchor() {
    if (!mobileJoystickRuntimeAnchor) {
      return;
    }

    mobileJoystickRuntimeAnchor = null;
    applyMobileControlLayout();
  }

  function stopMobileJoystickInteraction(pointerId = activeMobileJoystickPointerId) {
    if (pointerId !== null && mobileControlJoystick.hasPointerCapture?.(pointerId)) {
      mobileControlJoystick.releasePointerCapture(pointerId);
    }

    activeMobileJoystickPointerId = null;
    moveState.forward = false;
    moveState.backward = false;
    moveState.left = false;
    moveState.right = false;
    moveState.sprint = false;
    clearMobileJoystickRuntimeAnchor();
    resetMobileJoystickVisual();
    syncMobileHudActionAvailability();
    updateMobileInputDiagnosticsOverlay();
  }

  function updateMobileJoystickInteraction(event) {
    if (event.pointerId !== activeMobileJoystickPointerId || !canUseMobileJoystickGameplay()) {
      return false;
    }

    const controlRect = mobileControlJoystick.getBoundingClientRect();
    const centerX = controlRect.left + (controlRect.width * 0.5);
    const centerY = controlRect.top + (controlRect.height * 0.5);
    const maxRadius = Math.max(20, Math.min(controlRect.width, controlRect.height) * 0.27);
    const rawOffsetX = event.clientX - centerX;
    const rawOffsetY = event.clientY - centerY;
    const distance = Math.hypot(rawOffsetX, rawOffsetY);
    const clampScale = distance > maxRadius ? maxRadius / distance : 1;
    const clampedOffsetX = rawOffsetX * clampScale;
    const clampedOffsetY = rawOffsetY * clampScale;
    const normalizedX = clampedOffsetX / maxRadius;
    const normalizedY = clampedOffsetY / maxRadius;
    const invertedNormalizedX = -normalizedX;
    const invertedNormalizedY = -normalizedY;
    const deadZone = 0.22;

    mobileJoystickThumb.style.transform =
      `translate(calc(-50% + ${clampedOffsetX.toFixed(1)}px), calc(-50% + ${clampedOffsetY.toFixed(1)}px))`;

    // Keep the joystick visuals natural, but send the same inverted movement
    // directions already used by the PC keyboard controls.
    moveState.left = invertedNormalizedX < -deadZone;
    moveState.right = invertedNormalizedX > deadZone;
    moveState.forward = invertedNormalizedY < -deadZone;
    moveState.backward = invertedNormalizedY > deadZone;

    // Sprint based on joystick magnitude with hysteresis to prevent flickering.
    // Uses same distance/maxRadius already computed above — no new DOM reads.
    const normalizedMagnitude = Math.min(distance / maxRadius, 1);
    const sprintStartThreshold = 0.85;
    const sprintStopThreshold = 0.75;
    if (!moveState.sprint && normalizedMagnitude >= sprintStartThreshold) {
      moveState.sprint = true;
    } else if (moveState.sprint && normalizedMagnitude < sprintStopThreshold) {
      moveState.sprint = false;
    }

    mobileControlJoystick.classList.toggle(
      "is-active",
      Math.abs(normalizedX) > deadZone || Math.abs(normalizedY) > deadZone
    );
    syncMobileHudActionAvailability();
    return true;
  }

  function beginMobileJoystickInteraction(event) {
    if (activeMobileJoystickPointerId !== null || !canUseMobileJoystickGameplay()) {
      return false;
    }

    if (event.pointerType === "touch") {
      registerActiveMobileTouchPointerId(event.pointerId);
    }
    setMobileJoystickRuntimeAnchor(event.clientX, event.clientY);
    activeMobileJoystickPointerId = event.pointerId;
    mobileControlJoystick.setPointerCapture?.(event.pointerId);
    updateMobileJoystickInteraction(event);
    updateMobileInputDiagnosticsOverlay();
    return true;
  }

  function applyCameraLookDelta(deltaX, deltaY) {
    yaw -= deltaX * cameraConfig.mouseSensitivity;
    pitch -= deltaY * cameraConfig.mouseSensitivity;
    pitch = THREE.MathUtils.clamp(pitch, cameraConfig.minPitch, cameraConfig.maxPitch);
  }

  function applyMobileCameraLookDelta(deltaX, deltaY) {
    const sensitivityMultiplier = getMobileCameraSensitivityMultiplier();
    applyCameraLookDelta(
      deltaX * sensitivityMultiplier,
      deltaY * sensitivityMultiplier
    );
  }

  function beginMobileCameraInteraction(
    event,
    { inputSource = event.pointerType === "mouse" ? "desktop-sim" : "touch" } = {}
  ) {
    if (activeMobileCameraPointerId !== null || !canUseMobileTouchCameraGameplay()) {
      return false;
    }

    if (inputSource !== "desktop-sim") {
      registerActiveMobileTouchPointerId(event.pointerId);
    }
    activeMobileCameraPointerId = event.pointerId;
    activeMobileCameraLastClientX = event.clientX;
    activeMobileCameraLastClientY = event.clientY;
    activeMobileCameraCaptureElement = event.target instanceof Element ? event.target : null;
    activeMobileCameraInputSource = inputSource;
    activeMobileCameraCaptureElement?.setPointerCapture?.(event.pointerId);
    updateMobileInputDiagnosticsOverlay();
    return true;
  }

  function updateMobileCameraInteraction(event) {
    const matchesActiveMobileCameraPointerId = event.pointerId === activeMobileCameraPointerId;
    if (!matchesActiveMobileCameraPointerId || !canUseMobileTouchCameraGameplay()) {
      return false;
    }

    const deltaX = event.clientX - activeMobileCameraLastClientX;
    const deltaY = event.clientY - activeMobileCameraLastClientY;
    activeMobileCameraLastClientX = event.clientX;
    activeMobileCameraLastClientY = event.clientY;
    if (deltaX !== 0 || deltaY !== 0) {
      logMobileCameraMove(event, deltaX, deltaY);
    }
    applyMobileCameraLookDelta(deltaX, deltaY);
    return true;
  }

  function beginMobileFireDragAim(
    event,
    { inputSource = event.pointerType === "mouse" ? "desktop-sim" : "touch" } = {}
  ) {
    activeMobileFireAimPointerId = event.pointerId;
    activeMobileFireAimLastClientX = event.clientX;
    activeMobileFireAimLastClientY = event.clientY;
    activeMobileFireAimInputSource = inputSource;
    updateMobileInputDiagnosticsOverlay();
  }

  function updateMobileFireDragAim(event) {
    if (
      event.pointerId !== activeMobileFireAimPointerId ||
      !canUseMobileTouchCameraGameplay()
    ) {
      return false;
    }

    const deltaX = event.clientX - activeMobileFireAimLastClientX;
    const deltaY = event.clientY - activeMobileFireAimLastClientY;
    activeMobileFireAimLastClientX = event.clientX;
    activeMobileFireAimLastClientY = event.clientY;

    if (deltaX === 0 && deltaY === 0) {
      return false;
    }

    applyMobileCameraLookDelta(deltaX, deltaY);
    return true;
  }

  function stopMobileFireDragAim(pointerId = activeMobileFireAimPointerId) {
    if (activeMobileFireAimPointerId === null) {
      return;
    }

    if (pointerId !== activeMobileFireAimPointerId) {
      return;
    }

    const previousInputSource = activeMobileFireAimInputSource;
    activeMobileFireAimPointerId = null;
    activeMobileFireAimLastClientX = 0;
    activeMobileFireAimLastClientY = 0;
    activeMobileFireAimInputSource = "";
    void previousInputSource;
    updateMobileInputDiagnosticsOverlay();
  }

  function stopMobileCameraInteraction(pointerId = activeMobileCameraPointerId, { reason = "stop" } = {}) {
    if (pointerId !== activeMobileCameraPointerId) {
      return;
    }

    const activeMobileCameraPointerIdBeforeClear = activeMobileCameraPointerId;
    if (pointerId !== null && activeMobileCameraCaptureElement?.hasPointerCapture?.(pointerId)) {
      activeMobileCameraCaptureElement.releasePointerCapture(pointerId);
    }

    activeMobileCameraPointerId = null;
    activeMobileCameraLastClientX = 0;
    activeMobileCameraLastClientY = 0;
    activeMobileCameraCaptureElement = null;
    activeMobileCameraInputSource = "";
    void activeMobileCameraPointerIdBeforeClear;
    void reason;
    updateMobileInputDiagnosticsOverlay();
  }

  function releaseMobileHudActionPointer(pointerId) {
    const actionId = activeMobileHudActionPointers.get(pointerId);
    if (!actionId) {
      return false;
    }

    const element = editableGameplayHudElements[actionId]?.element;
    if (element?.hasPointerCapture?.(pointerId)) {
      element.releasePointerCapture(pointerId);
    }

    activeMobileHudActionPointers.delete(pointerId);

    switch (actionId) {
      case "fire":
        stopMobileFireDragAim(pointerId);
        isShooting = false;
        break;
      case "fireOnly":
        isShooting = false;
        break;
      case "aim":
        console.log("[AIM ADS] mobile AIM up detected");
        stopAdsAiming("mobileButton");
        break;
      case "sprint":
        moveState.sprint = false;
        break;
      case "crouch":
        setCrouchState(false);
        break;
      default:
        break;
    }

    syncMobileHudActionAvailability();
    return true;
  }

  function clearActiveMobileGameplayInputs() {
    const activePointersBefore = getActiveMobileInputPointerSnapshot();
    stopMobileJoystickInteraction();
    stopMobileCameraInteraction(undefined, { reason: "clear-active-mobile-gameplay-inputs" });
    stopMobileFireDragAim();

    for (const [pointerId] of activeMobileHudActionPointers) {
      releaseMobileHudActionPointer(pointerId);
    }

    clearActiveMobileTouchPointerRegistry();
    syncMobileHudActionAvailability();
    logMobileCameraCleanupEvent("mobile_input_state_reset", {
      reason: "clear-active-mobile-gameplay-inputs",
      activePointersBefore,
      activePointersAfter: getActiveMobileInputPointerSnapshot(),
      cameraStateReset: activePointersBefore.activeMobileCameraPointerId !== null
    });
  }

  function handleMobileTouchZonePointerDown(event) {
    if (event.pointerType !== "touch") {
      return false;
    }

    const staleCameraPointerCleared = clearStaleActiveMobileCameraPointerIfNeeded(
      "camera-start-stale-pointer-recovery",
      {
        pointerId: event.pointerId,
        x: Number(event.clientX.toFixed(1)),
        y: Number(event.clientY.toFixed(1))
      }
    );
    const activeCameraPointerBefore = activeMobileCameraPointerId;
    const activeJoystickPointerBefore = activeMobileJoystickPointerId;
    const blockedByScrollableMenu = isTouchInsideScrollableMenu(event.target);
    const targetEligible = isMobileTouchZoneEligibleTarget(event.target);
    const inPhoneMode = isPhoneModeSelected();

    if (!inPhoneMode) {
      return false;
    }

    if (mobileLayoutEditMode) {
      logMobileCameraStartAttempt(event, {
        accepted: false,
        rejectReason: "mobile-layout-edit-open",
        activeCameraPointerBefore,
        activeJoystickPointerBefore
      });
      return false;
    }

    if (!targetEligible) {
      logMobileCameraStartAttempt(event, {
        accepted: false,
        rejectReason: blockedByScrollableMenu
          ? "blocked-by-scrollable-menu"
          : event.target instanceof Element && event.target.closest(".mobile-hud-control")
            ? "blocked-by-mobile-hud-control"
            : "target-not-eligible",
        activeCameraPointerBefore,
        activeJoystickPointerBefore
      });
      return false;
    }

    const { movementZoneWidth, cameraZoneStart } = getMobileTouchZoneMetrics();

    if (event.clientX <= movementZoneWidth) {
      if (!canUseMobileJoystickGameplay() || activeMobileJoystickPointerId !== null) {
        logMobileCameraStartAttempt(event, {
          accepted: false,
          rejectReason: !canUseMobileJoystickGameplay()
            ? "movement-zone-joystick-gameplay-disabled"
            : "movement-zone-joystick-pointer-already-active",
          activeCameraPointerBefore,
          activeJoystickPointerBefore
        });
        return false;
      }

      logMobileCameraStartAttempt(event, {
        accepted: false,
        rejectReason: "movement-zone-touch",
        activeCameraPointerBefore,
        activeJoystickPointerBefore
      });
      event.preventDefault();
      return beginMobileJoystickInteraction(event);
    }

    if (event.clientX >= cameraZoneStart) {
      if (!canUseMobileTouchCameraGameplay() || activeMobileCameraPointerId !== null) {
        logMobileCameraStartAttempt(event, {
          accepted: false,
          rejectReason: !canUseMobileTouchCameraGameplay()
            ? "camera-gameplay-disabled"
            : "camera-pointer-already-active",
          cameraPointerRejectType: !canUseMobileTouchCameraGameplay()
            ? ""
            : "true-active-pointer",
          staleCleanupHappened: staleCameraPointerCleared,
          activeCameraPointerBefore,
          activeJoystickPointerBefore
        });
        return false;
      }

      event.preventDefault();
      const accepted = beginMobileCameraInteraction(event);
      logMobileCameraStartAttempt(event, {
        accepted,
        rejectReason: accepted ? "" : "camera-begin-returned-false",
        cameraPointerRejectType: staleCameraPointerCleared ? "stale-pointer-cleared" : "",
        staleCleanupHappened: staleCameraPointerCleared,
        activeCameraPointerBefore,
        activeJoystickPointerBefore
      });
      return accepted;
    }

    logMobileCameraStartAttempt(event, {
      accepted: false,
      rejectReason: "outside-camera-zone",
      activeCameraPointerBefore,
      activeJoystickPointerBefore
    });
    return false;
  }

  function handleMobileDesktopCameraSimulationPointerDown(event) {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return false;
    }

    const staleCameraPointerCleared = clearStaleActiveMobileCameraPointerIfNeeded(
      "desktop-sim-camera-start-stale-pointer-recovery",
      {
        pointerId: event.pointerId,
        x: Number(event.clientX.toFixed(1)),
        y: Number(event.clientY.toFixed(1))
      }
    );
    const activeCameraPointerBefore = activeMobileCameraPointerId;
    const activeJoystickPointerBefore = activeMobileJoystickPointerId;
    const blockedByScrollableMenu = isTouchInsideScrollableMenu(event.target);
    const targetEligible = isMobileTouchZoneEligibleTarget(event.target);

    if (
      !isPhoneModeSelected() ||
      mobileLayoutEditMode ||
      !canUseMobileTouchCameraGameplay() ||
      !targetEligible
    ) {
      logMobileCameraStartAttempt(event, {
        accepted: false,
        rejectReason: !isPhoneModeSelected()
          ? "phone-mode-inactive"
          : mobileLayoutEditMode
            ? "mobile-layout-edit-open"
            : !canUseMobileTouchCameraGameplay()
              ? "camera-gameplay-disabled"
              : blockedByScrollableMenu
                ? "blocked-by-scrollable-menu"
                : event.target instanceof Element && event.target.closest(".mobile-hud-control")
                  ? "blocked-by-mobile-hud-control"
                  : "target-not-eligible",
        inputSource: "desktop-sim",
        activeCameraPointerBefore,
        activeJoystickPointerBefore
      });
      return false;
    }

    const { cameraZoneStart } = getMobileTouchZoneMetrics();
    if (event.clientX < cameraZoneStart || activeMobileCameraPointerId !== null) {
      logMobileCameraStartAttempt(event, {
        accepted: false,
        rejectReason: event.clientX < cameraZoneStart
          ? "outside-camera-zone"
          : "camera-pointer-already-active",
        cameraPointerRejectType: event.clientX < cameraZoneStart
          ? ""
          : "true-active-pointer",
        staleCleanupHappened: staleCameraPointerCleared,
        inputSource: "desktop-sim",
        activeCameraPointerBefore,
        activeJoystickPointerBefore
      });
      return false;
    }

    event.preventDefault();
    const accepted = beginMobileCameraInteraction(event, { inputSource: "desktop-sim" });
    logMobileCameraStartAttempt(event, {
      accepted,
      rejectReason: accepted ? "" : "camera-begin-returned-false",
      cameraPointerRejectType: staleCameraPointerCleared ? "stale-pointer-cleared" : "",
      staleCleanupHappened: staleCameraPointerCleared,
      inputSource: "desktop-sim",
      activeCameraPointerBefore,
      activeJoystickPointerBefore
    });
    return accepted;
  }

  function executeMobileHudAction(actionId) {
    switch (actionId) {
      case "fire":
      case "fireOnly":
        isShooting = true;
        if (currentGun.infiniteAmmo || ammo > 0) {
          tryShoot(performance.now());
        }
        return true;
      case "aim":
        console.log("[AIM ADS] mobile AIM down detected");
        startAdsAiming("mobileButton");
        return true;
      case "jump":
        if (!canUseMobileHudAction("jump") || !isGrounded) {
          return false;
        }
        verticalVelocity = moveConfig.jumpSpeed;
        isGrounded = false;
        localJumpSequenceId += 1;
        syncPlayerAimIdleAnimation(true, true);
        return true;
      case "reload":
        return canUseMobileHudAction("reload") && beginReload();
      case "sprint":
        if (!canUseMobileHudAction("sprint")) {
          return false;
        }
        moveState.sprint = true;
        return true;
      case "crouch":
        if (!canUseMobileHudAction("crouch")) {
          return false;
        }
        setCrouchState(true);
        return isCrouching;
      case "cameraToggle":
        if (!canUseMobileHudAction("cameraToggle")) {
          return false;
        }
        toggleCameraMode();
        return true;
      case "menu":
        if (!canUseMobileHudAction("menu")) {
          return false;
        }
        setMenuOpen(!interactionMenuOpen);
        return true;
      case "settings":
        if (!canUseMobileHudAction("settings")) {
          return false;
        }
        toggleSettingsMenu();
        return true;
      default:
        return false;
    }
  }

  function handleMobileGameplayHudPointerDown(event, controlElement, controlId) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return false;
    }

    if (controlId === "joystick") {
      if (!canUseMobileJoystickGameplay()) {
        return false;
      }

      event.preventDefault();
      event.stopPropagation();
      return beginMobileJoystickInteraction(event);
    }

    if (!mobileHudActionConfigs[controlId] || !canUseMobileHudAction(controlId)) {
      return false;
    }

    if (!executeMobileHudAction(controlId)) {
      syncMobileHudActionAvailability();
      return false;
    }

    if (event.pointerType === "touch") {
      registerActiveMobileTouchPointerId(event.pointerId);
    }
    activeMobileHudActionPointers.set(event.pointerId, controlId);
    controlElement.setPointerCapture?.(event.pointerId);
    if (controlId === "fire") {
      beginMobileFireDragAim(event);
    }
    event.preventDefault();
    event.stopPropagation();
    syncMobileHudActionAvailability();
    return true;
  }

  function hasGameplayFireInputControl() {
    return pointerLocked || isPhoneModeSelected();
  }

  function showMobileHud() {
    if (!isPhoneModeSelected()) {
      return;
    }

    mobileHudVisible = true;
    mobileHud.hidden = false;
    mobileHud.setAttribute("aria-hidden", "false");
    mobileHud.classList.add("visible");
    updateMobileLayoutEditUi();
    applyMobileControlLayout();
    syncMobileHudActionAvailability();
  }

  function hideMobileHud() {
    clearActiveMobileGameplayInputs();
    mobileHudVisible = false;
    mobileHud.classList.remove("visible");
    mobileHud.setAttribute("aria-hidden", "true");
    mobileHud.hidden = true;
    updateMobileLayoutEditUi();
  }

  function applyMobileControlLayout(layout = getActiveMobileControlLayout()) {
    const layoutSource = layout ?? mobileControlLayout ?? getDefaultMobileControlLayout();

    if (!isPhoneModeSelected()) {
      clearGameplayHudLayoutOverrides();
      return;
    }

    const metrics = getMobileHudViewportMetrics();

    for (const elementId of editableGameplayHudIds) {
      const config = editableGameplayHudElements[elementId];
      const targetElement = config.element;
      if (!targetElement) {
        continue;
      }

      const nextEntry = clampMobileControlLayoutEntry(elementId, layoutSource[elementId], metrics);

      // Update the source object ONLY if we are in edit mode
      // This prevents temporary resizes from overwriting the player's saved layout
      if (mobileLayoutEditMode) {
        if (!layoutSource[elementId]) {
          layoutSource[elementId] = nextEntry;
        } else {
          Object.assign(layoutSource[elementId], nextEntry);
        }
      }

      const appliedEntry = elementId === "joystick" && mobileJoystickRuntimeAnchor && !mobileLayoutEditMode
        ? clampMobileControlLayoutEntry(
          elementId,
          {
            ...nextEntry,
            x: mobileJoystickRuntimeAnchor.x,
            y: mobileJoystickRuntimeAnchor.y
          },
          metrics
        )
        : nextEntry;

      if (config.layoutType === "hud") {
        targetElement.style.left = `${(appliedEntry.x * 100).toFixed(3)}%`;
        targetElement.style.top = `${(appliedEntry.y * 100).toFixed(3)}%`;
        targetElement.style.right = "auto";
        targetElement.style.bottom = "auto";
        targetElement.style.transform = `scale(${appliedEntry.size.toFixed(3)})`;
        targetElement.style.transformOrigin = "top left";
      } else {
        const sizePx = Math.round(appliedEntry.size * metrics.base);
        targetElement.style.left = `${(appliedEntry.x * 100).toFixed(3)}%`;
        targetElement.style.top = `${(appliedEntry.y * 100).toFixed(3)}%`;
        targetElement.style.width = `${sizePx}px`;
        targetElement.style.height = `${sizePx}px`;
      }

      targetElement.classList.toggle(
        "selected",
        mobileLayoutEditMode && selectedMobileControlId === elementId
      );
    }
  }

  function refreshMobileHudVisibility() {
    const shouldShowMobileHud = isPhoneModeSelected() && (
      mobileLayoutEditMode ||
      (gameStarted &&
        activeSettingsPreviewFlow !== "camera" &&
        !document.body.classList.contains("main-menu-open"))
    );

    if (shouldShowMobileHud) {
      showMobileHud();
    } else {
      hideMobileHud();
    }

    syncMobileHudActionAvailability();
    syncMobileLayoutSettingsAvailability();
  }

  function loadSavedMobileControlLayout() {
    captureGameplayHudLayoutDefaults();
    mobileControlLayout = getDefaultMobileControlLayout();

    const savedLayoutRaw = localStorage.getItem(mobileControlLayoutStorageKey);
    if (savedLayoutRaw) {
      try {
        mobileControlLayout = cloneMobileControlLayout(JSON.parse(savedLayoutRaw));
      } catch (error) {
        console.warn("Failed to parse saved gameplay HUD layout:", error);
      }
    }

    mobileControlLayoutDraft = null;
    applyMobileControlLayout(mobileControlLayout);
    refreshMobileHudVisibility();
  }

  function clearActiveMobileLayoutInteraction(pointerId = activeMobileLayoutPointerId) {
    if (
      pointerId !== null &&
      activeMobileLayoutControlId &&
      editableGameplayHudElements[activeMobileLayoutControlId]?.element?.hasPointerCapture?.(pointerId)
    ) {
      editableGameplayHudElements[activeMobileLayoutControlId].element.releasePointerCapture(pointerId);
    }

    activeMobileLayoutPointerId = null;
    activeMobileLayoutPointerMode = "";
    activeMobileLayoutControlId = "";
    activeMobileLayoutPointerStartX = 0;
    activeMobileLayoutPointerStartY = 0;
    activeMobileLayoutPointerStartLayout = null;
  }

  function storeMobileLayoutReturnContext() {
    const entryContext = getMobileLayoutEntryContext();
    mobileLayoutEditReturnState.source = entryContext || (
      settingsMenuOpen
        ? "settings-menu"
        : document.body.classList.contains("main-menu-open")
          ? "main-menu"
          : "unknown"
    );
    mobileLayoutEditReturnState.reopenHomeSettings = homeSettingsViewOpen;
    mobileLayoutEditReturnState.reopenSettingsMenu = settingsMenuOpen && !homeSettingsViewOpen;
    console.log("mobile_layout_previous_menu_context_stored", {
      ...mobileLayoutEditReturnState
    });
    return { ...mobileLayoutEditReturnState };
  }

  function clearMobileLayoutReturnContext() {
    mobileLayoutEditReturnState.source = "";
    mobileLayoutEditReturnState.reopenHomeSettings = false;
    mobileLayoutEditReturnState.reopenSettingsMenu = false;
  }

  function returnToPreviousMenuContext(reason = "cancel") {
    const contextSnapshot = { ...mobileLayoutEditReturnState };
    console.log(
      reason === "save"
        ? "mobile_layout_save_return_to_previous_context"
        : "mobile_layout_cancel_return_to_previous_context",
      contextSnapshot
    );

    if (contextSnapshot.reopenHomeSettings) {
      setHomeSettingsViewOpen(true);
    } else if (contextSnapshot.reopenSettingsMenu) {
      setSettingsMenuOpen(true);
    }

    clearMobileLayoutReturnContext();
  }

  function enterMobileLayoutEditMode() {
    if (!isPhoneModeSelected() || mobileLayoutEditMode) {
      return false;
    }

    handleMenuOpened();
    mobileLayoutEditMode = true;
    mobileControlLayoutDraft = cloneMobileControlLayout(mobileControlLayout);
    if (!mobileControlLayoutDraft[selectedMobileControlId]) {
      selectedMobileControlId = "joystick";
    }
    updateMobileLayoutEditUi();
    syncMenuState();
    refreshMobileHudVisibility();
    applyMobileControlLayout(mobileControlLayoutDraft);
    return true;
  }

  function exitMobileLayoutEditMode() {
    if (!mobileLayoutEditMode) {
      return false;
    }

    clearActiveMobileLayoutInteraction();
    mobileLayoutEditMode = false;
    mobileControlLayoutDraft = null;
    updateMobileLayoutEditUi();
    syncMenuState();
    refreshMobileHudVisibility();

    return true;
  }

  async function enterMobileLayoutPreviewMode() {
    if (!isPhoneModeSelected() || mobileLayoutEditMode || cameraCustomizationPreviewMode) {
      return false;
    }

    const previousMenuContext = storeMobileLayoutReturnContext();
    const enterFromInGameSettings = previousMenuContext.source === "in-game-settings";
    console.log("mobile_layout_preview_mode_enter", {
      previewMapId: settingsPreviewMapId,
      previewCoordinates: {
        x: Number(cameraCustomizationPreviewSpawn.x.toFixed(3)),
        y: Number(cameraCustomizationPreviewSpawn.y.toFixed(3)),
        z: Number(cameraCustomizationPreviewSpawn.z.toFixed(3))
      },
      previewYaw: Number(cameraCustomizationPreviewYaw.toFixed(3)),
      previewPitch: Number(cameraCustomizationPreviewPitch.toFixed(3)),
      previousMenuContext,
      enterFromInGameSettings
    });

    if (enterFromInGameSettings) {
      cameraCustomizationPreviewMode = false;
      activeSettingsPreviewFlow = "";
      temporaryPlayerSpawnOverride = null;
      cameraCustomizationPreviewPreviousMapId = "";
      setCameraPreviewCursorHintVisible(false);
      setCameraCustomizationPreviewPanelOpen(false);
      return enterMobileLayoutEditMode();
    }

    commitPlayerIdentitySettings();
    cameraCustomizationPreviewMode = true;
    activeSettingsPreviewFlow = "mobile-layout";
    cameraCustomizationPreviewPreviousMapId = selectedMap;
    temporaryPlayerSpawnOverride = cameraCustomizationPreviewSpawn.clone();

    try {
      await loadSelectedMap(settingsPreviewMapId, { forceReload: true });
      gameStarted = true;
      hideMainMenu();
      resetPlayerToCurrentSpawn();
      statusMessage.classList.remove("visible");
      setCameraPreviewCursorHintVisible(false);
      setCameraCustomizationPreviewPanelOpen(false);
      enterMobileLayoutEditMode();
      return true;
    } catch (error) {
      console.error("Failed to enter mobile layout preview mode:", error);
      cameraCustomizationPreviewMode = false;
      activeSettingsPreviewFlow = "";
      temporaryPlayerSpawnOverride = null;
      setCameraPreviewCursorHintVisible(false);
      setCameraCustomizationPreviewPanelOpen(false);
      gameStarted = false;

      if (cameraCustomizationPreviewPreviousMapId) {
        selectedMap = cameraCustomizationPreviewPreviousMapId;
        mapSelect.value = selectedMap;
        cameraCustomizationPreviewPreviousMapId = "";
      }

      showMainMenu();
      returnToPreviousMenuContext("cancel");
      return false;
    }
  }

  function exitMobileLayoutPreviewMode({ reason = "cancel" } = {}) {
    const inLayoutPreviewMode = cameraCustomizationPreviewMode && activeSettingsPreviewFlow === "mobile-layout";

    if (!mobileLayoutEditMode && !inLayoutPreviewMode) {
      return false;
    }

    exitMobileLayoutEditMode();
    setCameraPreviewCursorHintVisible(false);
    hideDeathOverlay();
    setCameraCustomizationPreviewPanelOpen(false);
    closeMenus();
    clearMovementInput();
    isShooting = false;

    if (!inLayoutPreviewMode) {
      returnToPreviousMenuContext(reason);
      showStatusMessage(
        reason === "save" ? "Gameplay HUD layout saved." : "Gameplay HUD layout changes discarded.",
        1500
      );
      return true;
    }

    cameraCustomizationPreviewMode = false;
    activeSettingsPreviewFlow = "";
    temporaryPlayerSpawnOverride = null;
    playerDead = false;
    gameStarted = false;

    if (cameraCustomizationPreviewPreviousMapId) {
      selectedMap = cameraCustomizationPreviewPreviousMapId;
      mapSelect.value = selectedMap;
      cameraCustomizationPreviewPreviousMapId = "";
    }

    showMainMenu();
    returnToPreviousMenuContext(reason);
    showStatusMessage(
      reason === "save" ? "Gameplay HUD layout saved." : "Gameplay HUD layout changes discarded.",
      1500
    );
    return true;
  }

  function saveMobileControlLayout() {
    if (!mobileLayoutEditMode || !mobileControlLayoutDraft) {
      return false;
    }

    mobileControlLayout = cloneMobileControlLayout(mobileControlLayoutDraft);
    localStorage.setItem(mobileControlLayoutStorageKey, JSON.stringify(mobileControlLayout));
    applyMobileControlLayout(mobileControlLayout);
    exitMobileLayoutPreviewMode({ reason: "save" });
    return true;
  }

  function resetMobileControlLayout() {
    const nextLayout = getDefaultMobileControlLayout();

    if (mobileLayoutEditMode) {
      mobileControlLayoutDraft = cloneMobileControlLayout(nextLayout);
      selectedMobileControlId = "joystick";
      applyMobileControlLayout(mobileControlLayoutDraft);
      showStatusMessage("Gameplay HUD layout reset to default.", 1400);
      return cloneMobileControlLayout(mobileControlLayoutDraft);
    }

    mobileControlLayout = cloneMobileControlLayout(nextLayout);
    localStorage.setItem(mobileControlLayoutStorageKey, JSON.stringify(mobileControlLayout));
    applyMobileControlLayout(mobileControlLayout);
    refreshMobileHudVisibility();
    showStatusMessage("Gameplay HUD layout reset to default.", 1400);
    return cloneMobileControlLayout(mobileControlLayout);
  }

  function handleMobileLayoutControlPointerDown(event) {
    const controlElement = event.currentTarget;
    if (!(controlElement instanceof HTMLElement)) {
      return;
    }

    const controlId = controlElement.dataset.layoutElementId;
    if (!controlId) {
      return;
    }

    if (!mobileLayoutEditMode || !mobileControlLayoutDraft) {
      handleMobileGameplayHudPointerDown(event, controlElement, controlId);
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    if (!mobileControlLayoutDraft[controlId]) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    selectedMobileControlId = controlId;
    activeMobileLayoutPointerId = event.pointerId;
    activeMobileLayoutControlId = controlId;
    activeMobileLayoutPointerMode = event.target instanceof Element &&
      event.target.closest(".layout-edit-resize-handle")
      ? "resize"
      : "drag";
    activeMobileLayoutPointerStartX = event.clientX;
    activeMobileLayoutPointerStartY = event.clientY;
    activeMobileLayoutPointerStartLayout = { ...mobileControlLayoutDraft[controlId] };
    controlElement.setPointerCapture?.(event.pointerId);
    applyMobileControlLayout(mobileControlLayoutDraft);
  }

  function updateMobileLayoutPointerInteraction(event) {
    if (
      !mobileLayoutEditMode ||
      !mobileControlLayoutDraft ||
      activeMobileLayoutPointerId === null ||
      event.pointerId !== activeMobileLayoutPointerId ||
      !activeMobileLayoutControlId ||
      !activeMobileLayoutPointerStartLayout
    ) {
      return;
    }

    const metrics = getMobileHudViewportMetrics();
    const deltaX = event.clientX - activeMobileLayoutPointerStartX;
    const deltaY = event.clientY - activeMobileLayoutPointerStartY;
    const nextEntry = {
      ...activeMobileLayoutPointerStartLayout
    };

    if (activeMobileLayoutPointerMode === "resize") {
      nextEntry.size = activeMobileLayoutPointerStartLayout.size +
        (Math.max(deltaX, deltaY) / metrics.base);
    } else {
      nextEntry.x = activeMobileLayoutPointerStartLayout.x + (deltaX / metrics.width);
      nextEntry.y = activeMobileLayoutPointerStartLayout.y + (deltaY / metrics.height);
    }

    mobileControlLayoutDraft[activeMobileLayoutControlId] = clampMobileControlLayoutEntry(
      activeMobileLayoutControlId,
      nextEntry,
      metrics
    );
    applyMobileControlLayout(mobileControlLayoutDraft);
  }

  function formatCameraCustomizationValue(value, step) {
    const decimals = step < 0.1 ? 2 : 1;
    return Number(value).toFixed(decimals);
  }

  function createCameraCustomizationControls() {
    cameraPreviewPanelHeader = document.createElement("div");
    cameraPreviewPanelHeader.className = "camera-preview-panel-header";


    cameraPreviewPanelCloseButton = document.createElement("button");
    cameraPreviewPanelCloseButton.type = "button";
    cameraPreviewPanelCloseButton.className = "camera-preview-panel-close";
    cameraPreviewPanelCloseButton.textContent = "X";
    cameraPreviewPanelCloseButton.setAttribute("aria-label", "Close camera preview");
    cameraPreviewPanelHeader.appendChild(cameraPreviewPanelCloseButton);
    settingsMenu.appendChild(cameraPreviewPanelHeader);

    const section = document.createElement("section");
    section.id = "camera-customization-section";
    section.style.marginTop = "14px";
    section.style.paddingTop = "14px";
    section.style.borderTop = "1px solid rgba(255, 255, 255, 0.12)";
    cameraCustomizationSection = section;

    const title = document.createElement("h3");
    title.textContent = "Camera Customization";
    title.style.margin = "0 0 10px";
    title.style.fontSize = "16px";
    title.style.fontWeight = "600";
    section.appendChild(title);

    cameraCustomizationPreviewButton = document.createElement("button");
    cameraCustomizationPreviewButton.type = "button";
    cameraCustomizationPreviewButton.textContent = "Customise Camera View";
    cameraCustomizationPreviewButton.className = "home-camera-preview-entry";
    cameraCustomizationPreviewButton.style.marginTop = "0";
    cameraCustomizationPreviewButton.style.marginBottom = "14px";
    settingsControlsPanel.appendChild(cameraCustomizationPreviewButton);

    for (const config of cameraCustomizationControlConfigs) {
      const field = document.createElement("label");
      field.className = "menu-field";
      field.htmlFor = `camera-${config.key}-number`;

      const label = document.createElement("span");
      label.textContent = config.label;
      field.appendChild(label);

      const controlRow = document.createElement("div");
      controlRow.style.display = "grid";
      controlRow.style.gridTemplateColumns = "1fr 92px";
      controlRow.style.gap = "10px";
      controlRow.style.alignItems = "center";

      const rangeInput = document.createElement("input");
      rangeInput.type = "range";
      rangeInput.id = `camera-${config.key}-range`;
      rangeInput.min = String(config.min);
      rangeInput.max = String(config.max);
      rangeInput.step = String(config.step);

      const numberInput = document.createElement("input");
      numberInput.type = "number";
      numberInput.id = `camera-${config.key}-number`;
      numberInput.min = String(config.min);
      numberInput.max = String(config.max);
      numberInput.step = String(config.step);

      controlRow.appendChild(rangeInput);
      controlRow.appendChild(numberInput);
      field.appendChild(controlRow);
      section.appendChild(field);

      cameraCustomizationControls[config.key] = {
        config,
        rangeInput,
        numberInput
      };
    }

    cameraCustomizationResetButton = document.createElement("button");
    cameraCustomizationResetButton.type = "button";
    cameraCustomizationResetButton.textContent = "Reset Camera";
    cameraCustomizationResetButton.style.marginTop = "6px";
    section.appendChild(cameraCustomizationResetButton);

    settingsControlsPanel.appendChild(section);
  }

  function createUiTransparencyControls() {
    const section = document.createElement("section");
    section.id = "ui-transparency-section";
    section.style.marginTop = "14px";
    section.style.paddingTop = "14px";
    section.style.borderTop = "1px solid rgba(255, 255, 255, 0.12)";

    const title = document.createElement("h3");
    title.textContent = "UI Transparency";
    title.style.margin = "0 0 10px";
    title.style.fontSize = "16px";
    title.style.fontWeight = "600";
    section.appendChild(title);

    const field = document.createElement("label");
    field.className = "menu-field";
    field.htmlFor = "ui-transparency-input";

    const label = document.createElement("span");
    label.textContent = "UI Transparency";
    field.appendChild(label);

    const controlRow = document.createElement("div");
    controlRow.style.display = "grid";
    controlRow.style.gridTemplateColumns = "1fr 56px";
    controlRow.style.gap = "10px";
    controlRow.style.alignItems = "center";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.id = "ui-transparency-input";
    slider.min = "0.2";
    slider.max = "1";
    slider.step = "0.05";

    const value = document.createElement("span");
    value.id = "ui-transparency-value";
    value.style.justifySelf = "end";
    value.style.fontSize = "0.88rem";
    value.style.color = "#c7d5e4";

    controlRow.appendChild(slider);
    controlRow.appendChild(value);
    field.appendChild(controlRow);
    section.appendChild(field);

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.textContent = "Reset UI";
    resetButton.style.marginTop = "6px";
    section.appendChild(resetButton);

    settingsAudioEffectsPanel.appendChild(section);
    return { slider, value, resetButton };
  }

  function checkWebGLSupport() {
    try {
      if (!window.WebGLRenderingContext) {
        return false;
      }

      const probeCanvas = document.createElement("canvas");
      const gl =
        probeCanvas.getContext("webgl2") ||
        probeCanvas.getContext("webgl") ||
        probeCanvas.getContext("experimental-webgl");

      return Boolean(gl);
    } catch (error) {
      console.error("WebGL support check failed:", error);
      return false;
    }
  }

  const fatalErrorMessage =
    "WebGL is disabled or unavailable in this browser. Enable hardware acceleration, update GPU drivers, or try another browser.";

  if (!checkWebGLSupport()) {
    showFatalError(fatalErrorMessage);
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  } catch (error) {
    console.error("Failed to create WebGL renderer:", error);
    showFatalError(fatalErrorMessage);
    return;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xc8bfe6);
  scene.fog = new THREE.Fog(0xe2d7ef, 25, 100);
  const advancedGraphicsDynamicLightsGroup = new THREE.Group();
  advancedGraphicsDynamicLightsGroup.name = "advanced-graphics-dynamic-lights";
  scene.add(advancedGraphicsDynamicLightsGroup);

  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  const clock = new THREE.Clock();
  const raycaster = new THREE.Raycaster();
  const cameraCollisionRaycaster = new THREE.Raycaster();
  const pvpRaycaster = new THREE.Raycaster();

  const worldUp = new THREE.Vector3(0, 1, 0);
  const cameraLookDirection = new THREE.Vector3();
  const movementForward = new THREE.Vector3();
  const movementRight = new THREE.Vector3();
  const localMoveDirection = new THREE.Vector3();
  const worldMoveDirection = new THREE.Vector3();
  const desiredCameraPosition = new THREE.Vector3();
  const lookTarget = new THREE.Vector3();
  const playerAimTarget = new THREE.Vector3();
  const horizontalVelocity = new THREE.Vector3();
  const targetVelocity = new THREE.Vector3();
  const testBounds = new THREE.Box3();
  const playerCollisionBox = new THREE.Box3();
  const playerHalfExtents = new THREE.Vector3(0.45, 1.8, 0.45);
  const enemyHalfExtents = new THREE.Vector3(0.45, 1.8, 0.45);
  const aimDirection = new THREE.Vector3();
  const aimLookTarget = new THREE.Vector3();
  const impactNormal = new THREE.Vector3();
  const impactMarkForward = new THREE.Vector3(0, 0, 1);
  const hpBarWorldPosition = new THREE.Vector3();
  const projectedHudPosition = new THREE.Vector3();
  const playerNameplateWorldPosition = new THREE.Vector3();
  const playerNameplateProjectedPosition = new THREE.Vector3();
  const playerBodyFacingDirection = new THREE.Vector3();
  const pvpShotOrigin = new THREE.Vector3();
  const pvpShotDirection = new THREE.Vector3();
  const pvpFallbackShotOrigin = new THREE.Vector3();
  const pvpFallbackShotDirection = new THREE.Vector3();
  const pvpRespawnPosition = new THREE.Vector3();
  const enemyToPlayer = new THREE.Vector3();
  const enemyStrafeVector = new THREE.Vector3();
  const enemyDesiredMove = new THREE.Vector3();
  const enemyTargetPosition = new THREE.Vector3();
  const enemySlidePosition = new THREE.Vector3();
  const enemyShotOrigin = new THREE.Vector3();
  const enemyShotTarget = new THREE.Vector3();
  const enemyShotDirection = new THREE.Vector3();
  const enemyLineOfSightRay = new THREE.Ray();
  const enemyLineOfSightHitPoint = new THREE.Vector3();
  const enemyLineOfSightTargetPoint = new THREE.Vector3();
  const enemyMissDirection = new THREE.Vector3();
  const enemyAimJitter = new THREE.Vector3();
  const enemyTargetAimPosition = new THREE.Vector3();
  const enemyTargetOffset = new THREE.Vector3();
  const collisionMin = new THREE.Vector3();
  const collisionMax = new THREE.Vector3();
  const impactLookTarget = new THREE.Vector3();
  const zeroVector = new THREE.Vector3();
  const nextPlayerPosition = new THREE.Vector3();
  const horizontalStep = new THREE.Vector3();
  const slideXPosition = new THREE.Vector3();
  const slideZPosition = new THREE.Vector3();
  const playerCameraOffset = new THREE.Vector3(0, 1.6, 0);
  const cameraObstructionDirection = new THREE.Vector3();
  const resolvedCameraPosition = new THREE.Vector3();
  const cameraRightVector = new THREE.Vector3();
  const cameraColliderHitPoint = new THREE.Vector3();
  const cameraColliderClosestHitPoint = new THREE.Vector3();
  const initialFacingDirection = new THREE.Vector3(0, 0, -1);
  const screenCenterNdc = new THREE.Vector2(0, 0);
  const debugFrustum = new THREE.Frustum();
  const debugFrustumMatrix = new THREE.Matrix4();
  const debugSphere = new THREE.Sphere();
  const debugSphereCenter = new THREE.Vector3();
  const proceduralCityChunkFrustum = new THREE.Frustum();
  const proceduralCityChunkFrustumMatrix = new THREE.Matrix4();
  const proceduralCityChunkSphere = new THREE.Sphere();
  const gameFovStorageKey = "gameFov";
  const gameCameraCustomizationStorageKey = "gameCameraCustomization";
  const gameCameraModeStorageKey = "cameraMode";
  const thirdPersonCameraSettingsStorageKey = "thirdPersonCameraSettings";
  const aimingSettings = {
    zoomInWhileAiming: true,
    scopeMode: false,
    scopeSize: 72,
    scopeCrosshairColor: "#000000"
  };

  const movementSettings = {
    slowPlayerWhenShooting: true,
    shootingSpeedPercent: 60,
    sprintSpeedPercent: 158
  };
  const defaultCrosshairSettings = Object.freeze({
    "--crosshair-size": "18",
    "--crosshair-thickness": "3",
    "--crosshair-gap": "8",
    "--crosshair-opacity": "1",
    "--crosshair-dot-size": "4",
    "--crosshair-outline-thickness": "1",
    "--crosshair-color": "#ff6b3d",
    "--crosshair-outline-color": "#050b14"
  });

  function saveBasicUserSettings() {
    const settings = {
      camera: {
        distance: thirdPersonCameraSettings.distance,
        offsetX: thirdPersonCameraSettings.offsetX,
        offsetY: thirdPersonCameraSettings.offsetY,
        offsetZ: thirdPersonCameraSettings.offsetZ,
        fov: typeof camera !== "undefined" ? camera.fov : 55
      },
      crosshair: {},
      aiming: {
        zoomInWhileAiming: aimingSettings.zoomInWhileAiming,
        scopeMode: aimingSettings.scopeMode,
        scopeSize: aimingSettings.scopeSize,
        scopeCrosshairColor: aimingSettings.scopeCrosshairColor
      },
      movement: {
        slowPlayerWhenShooting: movementSettings.slowPlayerWhenShooting,
        shootingSpeedPercent: movementSettings.shootingSpeedPercent,
        sprintSpeedPercent: movementSettings.sprintSpeedPercent
      },
      audio: {
        menuMusicEnabled
      }
    };

    if (typeof crosshairVisualInputs !== "undefined") {
      for (const input of crosshairVisualInputs) {
        const variableName = input.dataset.crosshairVar;
        if (variableName) {
          settings.crosshair[variableName] = sanitizeCrosshairInputValue(input, input.value);
        }
      }
    }

    localStorage.setItem(basicUserSettingsStorageKey, JSON.stringify(settings));
    console.log("[AIM BUILT BASIC SAVE] saved settings", settings);
  }

  function loadBasicUserSettings() {
    const saved = localStorage.getItem(basicUserSettingsStorageKey);
    if (!saved) return null;
    try {
      const settings = JSON.parse(saved);
      console.log("[AIM BUILT BASIC SAVE] loaded settings", settings);
      return settings;
    } catch (e) {
      console.error("[AIM BUILT BASIC SAVE] error loading settings", e);
      return null;
    }
  }

  function saveBasicCameraSetting(key, value) {
    if (isAimAdsActive) return;
    saveBasicUserSettings();
    console.log("[AIM BUILT BASIC SAVE] saved camera", key, value);
  }

  function saveBasicCrosshairSetting(key, value) {
    saveBasicUserSettings();
    console.log("[AIM BUILT BASIC SAVE] saved crosshair", key, value);
  }

  function sanitizeCrosshairInputValue(input, value) {
    const variableName = input?.dataset?.crosshairVar || "";
    const defaultValue = defaultCrosshairSettings[variableName] ?? String(input?.defaultValue || "");
    const rawValue = String(value ?? "").trim();

    if (input?.type === "color") {
      return /^#[0-9a-f]{6}$/i.test(rawValue) ? rawValue : defaultValue;
    }

    const parsedValue = Number(rawValue);
    const minValue = Number(input?.min);
    const maxValue = Number(input?.max);
    if (!Number.isFinite(parsedValue)) {
      return defaultValue;
    }
    if (Number.isFinite(minValue) && parsedValue < minValue) {
      return defaultValue;
    }
    if (Number.isFinite(maxValue) && parsedValue > maxValue) {
      return defaultValue;
    }
    if (variableName === "--crosshair-opacity" && parsedValue <= 0) {
      return defaultValue;
    }

    return rawValue;
  }

  function sanitizeCrosshairSettings(settings) {
    if (!settings || typeof settings !== "object") {
      settings = { crosshair: {} };
    }
    if (!settings.crosshair) {
      settings.crosshair = {};
    }

    const crosshair = settings.crosshair;
    for (const [key, defaultValue] of Object.entries(defaultCrosshairSettings)) {
      const value = crosshair[key];
      // If missing, invalid, or empty, use the stable default
      if (value === undefined || value === null || String(value).trim() === "" || (typeof value === "number" && isNaN(value))) {
        crosshair[key] = defaultValue;
      }
      
      // Safety: Never allow opacity 0 to persist in saved settings
      if (key === "--crosshair-opacity" && parseFloat(crosshair[key]) <= 0) {
        crosshair[key] = defaultValue;
      }
    }

    return settings;
  }

  function applyCrosshairInputValue(input, value) {
    const variableName = input?.dataset?.crosshairVar;
    if (!variableName) {
      return;
    }

    const sanitizedValue = sanitizeCrosshairInputValue(input, value);
    input.value = sanitizedValue;
    document.documentElement.style.setProperty(
      variableName,
      `${sanitizedValue}${input.dataset.crosshairUnit || ""}`
    );
  }

  function applyBasicUserSettings(settings) {
    if (!settings) return;

    if (settings.camera) {
      const applyOpts = { persist: false, syncInputs: true };
      if (settings.camera.distance !== undefined) applyCameraCustomizationSetting("distance", settings.camera.distance, applyOpts);
      if (settings.camera.offsetX !== undefined) applyCameraCustomizationSetting("offsetX", settings.camera.offsetX, applyOpts);
      if (settings.camera.offsetY !== undefined) applyCameraCustomizationSetting("offsetY", settings.camera.offsetY, applyOpts);
      if (settings.camera.offsetZ !== undefined) applyCameraCustomizationSetting("offsetZ", settings.camera.offsetZ, applyOpts);
      if (settings.camera.fov !== undefined) applyCameraFov(settings.camera.fov, { persist: false, syncInput: true });
    }

    const sanitizedSettings = sanitizeCrosshairSettings(settings);
    if (sanitizedSettings.crosshair && typeof crosshairVisualInputs !== "undefined") {
      for (const input of crosshairVisualInputs) {
        const variableName = input.dataset.crosshairVar;
        if (variableName && sanitizedSettings.crosshair[variableName] !== undefined) {
          applyCrosshairInputValue(input, sanitizedSettings.crosshair[variableName]);
        }
      }
      console.log("[CROSSHAIR RESTORE] defaults validated");
      console.log("[CROSSHAIR RESTORE] applied", sanitizedSettings.crosshair);
    }

    if (settings.aiming) {
      aimingSettings.zoomInWhileAiming = settings.aiming.zoomInWhileAiming !== undefined ? settings.aiming.zoomInWhileAiming : true;
      aimingSettings.scopeMode = settings.aiming.scopeMode !== undefined ? settings.aiming.scopeMode : false;
      aimingSettings.scopeSize = settings.aiming.scopeSize !== undefined ? settings.aiming.scopeSize : 72;

      let scopeColor = settings.aiming.scopeCrosshairColor !== undefined ? settings.aiming.scopeCrosshairColor : "#000000";
      // Migration: if color is the old default white, move to new default black
      if (scopeColor === "#ffffff") {
        scopeColor = "#000000";
      }
      aimingSettings.scopeCrosshairColor = scopeColor;

      if (aimingZoomToggle) aimingZoomToggle.value = aimingSettings.zoomInWhileAiming ? "on" : "off";
      if (aimingScopeToggle) aimingScopeToggle.value = aimingSettings.scopeMode ? "on" : "off";

      if (aimingScopeSizeSlider) {
        aimingScopeSizeSlider.value = aimingSettings.scopeSize;
        if (aimingScopeSizeValue) aimingScopeSizeValue.textContent = aimingSettings.scopeSize;
        document.documentElement.style.setProperty("--scope-size-scale", aimingSettings.scopeSize / 100);
      }

      if (aimingScopeColorPicker) {
        aimingScopeColorPicker.value = aimingSettings.scopeCrosshairColor;
        document.documentElement.style.setProperty("--scope-crosshair-color", aimingSettings.scopeCrosshairColor);
      }

      console.log("[AIMING SETTINGS] applied", aimingSettings);
    }

    if (settings.movement) {
      movementSettings.slowPlayerWhenShooting = settings.movement.slowPlayerWhenShooting !== undefined ? settings.movement.slowPlayerWhenShooting : true;
      movementSettings.shootingSpeedPercent = settings.movement.shootingSpeedPercent !== undefined ? settings.movement.shootingSpeedPercent : 60;
      movementSettings.sprintSpeedPercent = settings.movement.sprintSpeedPercent !== undefined ? settings.movement.sprintSpeedPercent : 158;

      if (movementSlowToggle) movementSlowToggle.value = movementSettings.slowPlayerWhenShooting ? "on" : "off";

      if (movementShootingSpeedSlider) {
        movementShootingSpeedSlider.value = movementSettings.shootingSpeedPercent;
        if (movementShootingSpeedValue) movementShootingSpeedValue.textContent = movementSettings.shootingSpeedPercent + "%";
      }

      if (movementSprintSpeedSlider) {
        movementSprintSpeedSlider.value = movementSettings.sprintSpeedPercent;
        if (movementSprintSpeedValue) movementSprintSpeedValue.textContent = movementSettings.sprintSpeedPercent + "%";
      }

      console.log("[PLAYER MOVEMENT SETTINGS] applied", movementSettings);
    }

    if (settings.audio?.menuMusicEnabled !== undefined) {
      menuMusicEnabled = settings.audio.menuMusicEnabled !== false;
    }
    updateHomeMusicToggleUi();

    console.log("[AIM BUILT BASIC SAVE] applied saved settings");
  }
  const firstPersonCameraSettingsStorageKey = "firstPersonCameraSettings";
  const gameUiTransparencyStorageKey = "gameUiTransparency";
  const mobileCameraSensitivityStorageKey = "mobileCameraSensitivity";
  const graphicsSettingsStorageKey = "graphicsSettings.v1";
  const savedGunsStorageKey = "savedGuns";
  const currentGunStorageKey = "currentGun";
  const mobileControlLayoutStorageKey = "mobileControlLayout.v1";
  const playerNameStorageKey = "playerName";
  const showOwnNameInGameStorageKey = "showOwnNameInGame";
  const multiplayerDebugLoggingStorageKey = "multiplayerDebugLogging";
  const playerNameFallbackPrefix = "Player_";
  const playerNameMaxLength = 24;
  const lanServerPort = "8765";
  const defaultLanPreviewIp = "192.168.1.7";
  const lanReconnectBaseDelayMs = 1200;
  const lanReconnectMaxDelayMs = 8000;
  const lanReconnectMaxAttempts = 9;
  const lanHeartbeatWatchdogIntervalMs = 2000;
  const localPlayerStateSendIntervalMs = 50;
  const sharedEnemyStateSendIntervalMs = 80;
  const lanPlayerMaxHp = 100;
  const lanPlayerRespawnDelayMs = 2200;
  const pvpShotOriginTolerance = 20;
  const playerNameplateAnchorHeight = 2.72;
  const playerNameplateCrouchOffset = 0.2;
  const playerNameplateFutureHpSlotHeightPx = 12;
  const hostSessionMapLoadErrorMessage = "Unable to load the host's current map for this session.";
  const mobileControlMinSize = 0.1;
  const mobileControlMaxSize = 0.26;
  const mobileControlEdgePaddingPx = 18;
  const gameplayHudLayoutFallbackDefaults = Object.freeze({
    joystick: Object.freeze({ x: 0.17, y: 0.78, size: 0.23 }),
    fire: Object.freeze({ x: 0.86, y: 0.74, size: 0.165 }),
    fireOnly: Object.freeze({ x: 0.86, y: 0.22, size: 0.165 }),
    aim: Object.freeze({ x: 0.86, y: 0.50, size: 0.15 }),
    jump: Object.freeze({ x: 0.78, y: 0.58, size: 0.135 }),
    reload: Object.freeze({ x: 0.64, y: 0.79, size: 0.12 }),
    sprint: Object.freeze({ x: 0.32, y: 0.64, size: 0.12 }),
    crouch: Object.freeze({ x: 0.22, y: 0.55, size: 0.115 }),
    cameraToggle: Object.freeze({ x: 0.13, y: 0.14, size: 0.118 }),
    menu: Object.freeze({ x: 0.25, y: 0.14, size: 0.118 }),
    settings: Object.freeze({ x: 0.37, y: 0.14, size: 0.118 }),
    playerHpBar: Object.freeze({ x: 0.02, y: 0.86, size: 1 }),
    ammoCounter: Object.freeze({ x: 0.74, y: 0.02, size: 1 })
  });
  const settingsPreviewMapId = "industrialDome";

  let savedGuns = [];
  let currentGun = {
    name: "Gun No 1",
    fireRate: 10,
    // Updated default gun modification settings
    damage: 6,
    headshotMultiplier: 4.5,
    recoilStrength: 1.6,
    recoilEnabled: true,
    recoilIntensityX: 0.06,
    recoilIntensityY: 0.55,
    recoilIntensityZ: 0.05,
    reloadTime: 2,
    ammoCapacity: 50,
    // Unlimited ammo default set to off
    infiniteAmmo: false
  };
  const startupMinimumOverlayMs = 450;
  const startupReadinessKeys = [
    "engineInitialized",
    "sceneCreated",
    "mapReady",
    "playerModelReady",
    "playerStandingAnimReady",
    "playerCrouchAnimReady",
    "playerActionsReady",
    "cameraReady"
  ];
  const startupReadinessState = {
    engineInitialized: false,
    sceneCreated: false,
    mapReady: false,
    playerModelReady: false,
    playerStandingAnimReady: false,
    playerCrouchAnimReady: false,
    playerActionsReady: false,
    cameraReady: false
  };
  const startupProgressByKey = Object.freeze({
    engineInitialized: 5,
    sceneCreated: 15,
    playerModelReady: 30,
    playerStandingAnimReady: 45,
    playerCrouchAnimReady: 60,
    playerActionsReady: 75,
    mapReady: 90,
    cameraReady: 100
  });

  let gameStarted = false;
  let startupReady = false;
  let selectedMap = "defaultVillage";
  let playerName = "";
  let showOwnNameInGame = true;
  let localPlayerId = "";
  let isLanHost = false;
  let isLanClient = false;
  let lanConnectionStatus = "offline";
  let lanSocket = null;
  let lanSessionIntent = null;
  let lanReconnectTimeoutId = 0;
  let lanHeartbeatIntervalId = 0;
  let lanHeartbeatIntervalMs = 10000;
  let lanHeartbeatTimeoutMs = 60000;
  let lanResumeGraceMs = 60000;
  let lanHeartbeatWatchdogIntervalId = 0;
  let lanLastServerPacketAt = 0;
  let lastLocalStateSentAt = 0;
  let lastSharedEnemyStateSentAt = 0;
  let pendingLanConnectionResolve = null;
  let pendingLanConnectionReject = null;
  let pendingAuthoritativeSessionMapSync = null;
  let menuOpen = false;
  let interactionMenuOpen = false;
  let settingsMenuOpen = false;
  let homeGunViewOpen = false;
  let homeSettingsViewOpen = false;
  let activeSettingsTabId = "graphics";
  let pointerLocked = false;
  let gunPanelOpen = false;
  let advancedRecoilPanelOpen = false;
  let isMoving = false;
  let isShooting = false;
  let isJumping = false;
  let isCrouching = false;
  let playerDead = false;
  let yaw = Math.PI;
  let pitch = -0.3;
  let crouchCameraOffsetY = 0;
  let recoilPitch = 0;
  let recoilPitchClimb = 0;
  let recoilYaw = 0;
  let recoilRoll = 0;
  let verticalVelocity = 0;
  let isGrounded = true;
  let localJumpSequenceId = 0;
  let ammo = currentGun.ammoCapacity;
  let lastShotTime = -Infinity;
  let playerHp = 100;

  // Grid Shot State
  let isGridShotActive = false;
  let gridShotHits = 0;
  let gridShotMisses = 0;
  let gridShotTimer = 60;
  let gridShotIntervalId = 0;
  const gridShotBalls = [];
  const gridShotSpawn = new THREE.Vector3(0.2, 0.9, -0.6);
  const GRID_SHOT_TARGET_BOUNDS = {
    minX: -4.8, maxX: 5.2,
    minY: 3.9, maxY: 6.9,
    minZ: -14.6, maxZ: -10.6
  };

  // Tracking Ball State
  let isTrackingBallActive = false;
  let trackingBallScore = 0;
  let trackingBallMisses = 0;
  let trackingBallTimer = 60;
  let trackingBallIntervalId = 0;
  let trackingBallObject = null;
  let trackingBallHp = 100;
  let trackingBallMaxHp = 100;
  let trackingBallMovementTime = 0;
  let trackingBallHpBarFill = null;
  let trackingBallTargetId = "";
  const TRACKING_BALL_DAMAGE = 10;
  let trackingBallMovePhase = "slow";
  let trackingBallPhaseTimer = 0;
  let trackingBallSpawnBurstTimer = 0;
  const trackingBallDir = new THREE.Vector3();

  // Jiggle Training State
  let isJiggleTrainingActive = false;
  let jiggleTrainingHits = 0;
  let jiggleTrainingMisses = 0;
  let jiggleTrainingTimer = 60;
  let jiggleTrainingIntervalId = 0;
  let jiggleTrainingEnemy = null;
  let jiggleTrainingEnemySpawnCenter = new THREE.Vector3();
  let jiggleTrainingSideDirection = new THREE.Vector3();
  let jiggleTrainingMoveDirection = 1;
  let jiggleTrainingCurrentOffset = 0;
  const jiggleTrainingMaxSideDistance = 1.5;
  const jiggleTrainingMoveSpeed = 3.5;

  // Medium Range Jiggle Training State
  let isMediumCombatActive = false;
  let mediumCombatHits = 0;
  let mediumCombatMisses = 0;
  let mediumCombatTimer = 60;
  let mediumCombatIntervalId = 0;
  let mediumCombatEnemy = null;
  let mediumCombatEnemySpawnCenter = new THREE.Vector3();
  let mediumCombatSideDirection = new THREE.Vector3();
  let mediumCombatMoveDirection = 1;
  let mediumCombatCurrentOffset = 0;
  let mediumCombatEnemySideOffset = 0;
  let mediumCombatEnemySideVelocity = 0;
  let mediumCombatEnemyMoveState = "jiggle";
  let mediumCombatEnemyMoveStateTimer = 0;
  let mediumCombatEnemyMoveTargetOffset = 0;
  let mediumCombatEnemyJiggleBaseOffset = 0;
  let mediumCombatEnemyJiggleDirection = 1;
  let mediumCombatMovementBoundaryGroup = null;
  const mediumCombatPlayerSpawn = new THREE.Vector3(-15.6, 0.0, 27.3);
  const mediumCombatEnemySpawn = new THREE.Vector3(12.3, 0.0, 22.5);
  const mediumCombatForward = mediumCombatEnemySpawn.clone().sub(mediumCombatPlayerSpawn);
  mediumCombatForward.y = 0;
  mediumCombatForward.normalize();
  const mediumCombatRight = new THREE.Vector3(mediumCombatForward.z, 0, -mediumCombatForward.x);
  const mediumCombatJiggleSideDirection = new THREE.Vector3(-mediumCombatForward.z, 0, mediumCombatForward.x);
  const mediumCombatBoundaryLength = 8;
  const mediumCombatBoundaryHalfWidth = 2.5;
  const mediumCombatBoundaryYaw = Math.atan2(mediumCombatForward.x, mediumCombatForward.z);
  const mediumCombatBoundsOffset = new THREE.Vector3();
  const MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH = 4.5;
  const MEDIUM_RANGE_JIGGLE_CROSS_TIME = 0.43;
  const MEDIUM_RANGE_JIGGLE_MIN_TARGET = 0.5;
  const MEDIUM_RANGE_JIGGLE_MAX_TARGET = 1.1;

  // Multiplayer Aim Training sync
  let isNetworkAimTrainingMirror = false;
  let aimTrainingSessionId = "";
  let aimTrainingSessionMode = "";
  let currentHostAimTrainingSessionId = "";
  let hasLeftHostAimTrainingSession = false;
  let ignoredHostAimTrainingSessionId = "";
  let lastAimTrainingStateSentAt = -Infinity;
  let lastAimTrainingTimerSentAt = -Infinity;
  let lastAimTrainingTargetStateSentAt = -Infinity;
  let lastAimTrainingSyncedMode = "";
  let lastAimTrainingSyncedFinished = false;
  let nextAimTrainingTargetSequence = 0;
  const aimTrainingStateSyncIntervalMs = 1000;
  const aimTrainingTargetSyncIntervalMs = 100;

  // Aim Training Stats HUD Logic
  let aimTrainingStats = {
    active: false,
    mode: null,
    durationSeconds: 60,
    startTime: 0,
    remainingSeconds: 60,
    hits: 0,
    misses: 0,
    totalShots: 0,
    finished: false
  };

  const trainingStatTime = document.getElementById("training-stat-time");
  const trainingStatHit = document.getElementById("training-stat-hit");
  const trainingStatMiss = document.getElementById("training-stat-miss");
  const trainingStatAcc = document.getElementById("training-stat-acc");
  const aimTrainingStatsHud = document.getElementById("aim-training-stats-hud");

  const aimTrainingEndPanel = document.getElementById("aim-training-end-panel");
  const endStatHitVal = document.getElementById("end-stat-hit-val");
  const endStatMissVal = document.getElementById("end-stat-miss-val");
  const endStatAccVal = document.getElementById("end-stat-acc-val");
  const endPanelRestartButton = document.getElementById("end-panel-restart-button");
  const endPanelHomeButton = document.getElementById("end-panel-home-button");

  function showAimTrainingStatsHud(mode) {
    aimTrainingStats.active = true;
    aimTrainingStats.mode = mode;
    aimTrainingStats.startTime = performance.now();
    aimTrainingStats.hits = 0;
    aimTrainingStats.misses = 0;
    aimTrainingStats.totalShots = 0;
    aimTrainingStats.remainingSeconds = 60;
    aimTrainingStats.finished = false;

    hideAimTrainingEndPanel();

    if (aimTrainingStatsHud) {
      aimTrainingStatsHud.classList.add("active");
    }
    updateAimTrainingStatsHud();
    console.log("[AIM TRAINING TIMER] countdown started", mode);
  }

  function hideAimTrainingStatsHud(reason = "unknown") {
    aimTrainingStats.active = false;
    if (aimTrainingStatsHud) {
      aimTrainingStatsHud.classList.remove("active");
    }
    hideAimTrainingEndPanel();
    console.log("[AIM TRAINING HUD] hidden", reason);
  }

  function recordAimTrainingShot(hit) {
    if (!aimTrainingStats.active || aimTrainingStats.finished) return;

    aimTrainingStats.totalShots++;
    if (hit) {
      aimTrainingStats.hits++;
    } else {
      aimTrainingStats.misses++;
    }

    updateAimTrainingStatsHud();
  }

  function updateAimTrainingStatsHud() {
    if (!aimTrainingStats.active || (!isGridShotActive && !isTrackingBallActive && !isJiggleTrainingActive && !isMediumCombatActive)) {
      if (aimTrainingStats.active) hideAimTrainingStatsHud("returned to aim training chooser");
      return;
    }

    if (aimTrainingStats.finished) return;

    // Update Timer (Countdown from 60)
    const elapsedSeconds = Math.floor((performance.now() - aimTrainingStats.startTime) / 1000);
    aimTrainingStats.remainingSeconds = Math.max(0, 60 - elapsedSeconds);

    if (trainingStatTime) trainingStatTime.textContent = `${aimTrainingStats.remainingSeconds}s`;
    if (trainingStatHit) trainingStatHit.textContent = aimTrainingStats.hits;
    if (trainingStatMiss) trainingStatMiss.textContent = aimTrainingStats.misses;

    const acc = aimTrainingStats.totalShots > 0
      ? Math.round((aimTrainingStats.hits / aimTrainingStats.totalShots) * 100)
      : 0;
    if (trainingStatAcc) trainingStatAcc.textContent = acc + "%";

    if (aimTrainingStats.remainingSeconds <= 0 && !aimTrainingStats.finished) {
      finishAimTrainingSession("time over");
    }
  }

  function finishAimTrainingSession(reason) {
    aimTrainingStats.finished = true;
    console.log("[AIM TRAINING TIMER] time over", aimTrainingStats);
    showAimTrainingEndPanel();
  }

  function showAimTrainingEndPanel() {
    if (aimTrainingEndPanel) {
      const acc = aimTrainingStats.totalShots > 0
        ? Math.round((aimTrainingStats.hits / aimTrainingStats.totalShots) * 100)
        : 0;

      if (endStatHitVal) endStatHitVal.textContent = aimTrainingStats.hits;
      if (endStatMissVal) endStatMissVal.textContent = aimTrainingStats.misses;
      if (endStatAccVal) endStatAccVal.textContent = acc + "%";

      aimTrainingEndPanel.style.display = "block";
    }
  }

  function hideAimTrainingEndPanel() {
    if (aimTrainingEndPanel) {
      aimTrainingEndPanel.style.display = "none";
    }
  }

  function restartCurrentAimTrainingMode(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const mode = aimTrainingStats.mode;
    console.log("[AIM TRAINING END PANEL] restart clicked", mode);
    if (isNetworkAimTrainingMirror && isLanClient) {
      showStatusMessage("Host controls Aim Training restart.", 1400);
      return;
    }
    hideAimTrainingEndPanel("restart");
    cleanupAimTrainingMode("restart from end panel");

    if (mode === "Grid Shot") {
      startGridShotMode();
    } else if (mode === "Tracking Ball") {
      startTrackingBallMode();
    } else if (mode === "Jiggle Training") {
      startJiggleTrainingMode();
    } else if (mode === "Medium Range Jiggle Training") {
      startMediumCombatMode();
    }
    console.log("[AIM TRAINING END PANEL] cleanup complete");
  }

  function returnFromAimTrainingEndPanelToHomeOrChooser(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const mode = aimTrainingStats.mode;
    console.log("[AIM TRAINING END PANEL] home clicked");
    if (
      handleHomeFromOnlineClient("time-over home clicked") ||
      leaveMirroredHostAimTrainingLocally("time-over home clicked")
    ) {
      console.log("[AIM TRAINING END PANEL] cleanup complete");
      return;
    }
    console.log("[AIM TRAINING END PANEL] using Settings Home exit path");

    hideAimTrainingEndPanel("home clicked");
    hideAimTrainingStatsHud("home clicked from end panel");

    if (mode === "Medium Range Jiggle Training") {
      exitMediumCombatMode();
      console.log("[AIM TRAINING END PANEL] cleanup complete");
      return;
    }

    // Exact path from Settings > Home
    cleanupAimTrainingMode();
    exitCameraCustomizationPreviewMode();
    closeMenus();
    showMainMenu();

    console.log("[AIM TRAINING END PANEL] cleanup complete");
  }

  // Listeners for End Panel (safe to bind now)
  endPanelRestartButton?.addEventListener("click", restartCurrentAimTrainingMode);
  endPanelHomeButton?.addEventListener("click", returnFromAimTrainingEndPanelToHomeOrChooser);

  // Shared Aim Difficulty
  let aimTrainingDifficulty = localStorage.getItem("aimTrainingDifficulty") || "moderate";
  let aimTrainingManualInfiniteAmmoOverride = false;
  if (aimTrainingDifficultySelect) aimTrainingDifficultySelect.value = aimTrainingDifficulty;

  const JIGGLE_BLOCKER_OBJECT = {
    minX: -2.9,
    maxX: 2.9,
    minZ: 8.0,
    maxZ: 8.9
  };

  function isInsideJiggleBlockerObject(pos) {
    return pos.x >= JIGGLE_BLOCKER_OBJECT.minX && pos.x <= JIGGLE_BLOCKER_OBJECT.maxX &&
      pos.z >= JIGGLE_BLOCKER_OBJECT.minZ && pos.z <= JIGGLE_BLOCKER_OBJECT.maxZ;
  }

  function lineSegmentsIntersect(p1, p2, p3, p4) {
    const det = (p2.x - p1.x) * (p4.z - p3.z) - (p2.z - p1.z) * (p4.x - p3.x);
    if (det === 0) return false;
    const lambda = ((p4.z - p3.z) * (p4.x - p1.x) + (p3.x - p4.x) * (p4.z - p1.z)) / det;
    const gamma = ((p1.z - p2.z) * (p4.x - p1.x) + (p2.x - p1.x) * (p4.z - p1.z)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }

  function lineSegmentIntersectsJiggleBlocker(p1, p2) {
    // 4 edges of the AABB
    const corners = [
      { x: JIGGLE_BLOCKER_OBJECT.minX, z: JIGGLE_BLOCKER_OBJECT.minZ },
      { x: JIGGLE_BLOCKER_OBJECT.maxX, z: JIGGLE_BLOCKER_OBJECT.minZ },
      { x: JIGGLE_BLOCKER_OBJECT.maxX, z: JIGGLE_BLOCKER_OBJECT.maxZ },
      { x: JIGGLE_BLOCKER_OBJECT.minX, z: JIGGLE_BLOCKER_OBJECT.maxZ }
    ];
    // Check if either end is inside
    if (isInsideJiggleBlockerObject(p1) || isInsideJiggleBlockerObject(p2)) return true;
    // Check intersection with each edge
    for (let i = 0; i < 4; i++) {
      if (lineSegmentsIntersect(p1, p2, corners[i], corners[(i + 1) % 4])) return true;
    }
    return false;
  }

  function getAimTrainingDifficultyConfig() {
    if (aimTrainingDifficulty === "easy") {
      return {
        trackingSpeedMult: 0.65,
        trackingUnpredictability: 0.4,
        gridShotDistancing: 0 // No min distance bias
      };
    } else if (aimTrainingDifficulty === "hard") {
      return {
        trackingSpeedMult: 1.45,
        trackingUnpredictability: 1.8,
        gridShotDistancing: 4.5 // Prefer spawning balls at least 4.5 units away
      };
    }
    return {
      trackingSpeedMult: 1.0,
      trackingUnpredictability: 1.0,
      gridShotDistancing: 2.0
    };
  }
  let enemy = null;
  let enemies = [];
  let statusMessageTimeoutId = 0;
  let deathRespawnTimeoutId = 0;
  let deathOverlayHideTimeoutId = 0;
  let deathOverlayActionLocked = false;
  const healthPickups = [];
  const staticWorldObjects = [];
  const effectQualityControlledObjects = [];
  let activeBulletMarks = 0;
  let visibleStaticWorldObjects = 0;
  let listenersBound = false;
  let deviceModeChooserListenersBound = false;
  let deviceModeSelectionResolved = false;
  let deviceModeOverlayHideTimeoutId = 0;
  let pendingDeviceModeSelectionPromise = null;
  let resolvePendingDeviceModeSelection = null;
  let listenerWarningCount = 0;
  let activeBlossomPetalSystem = null;
  let activeLightingProfile = null;
  let cameraObstructionActive = false;
  const settingsCategoryResettableTabs = new Set([
    "controls",
    "graphics",
    "mobileLayout",
    "audioEffects",
    "crosshair"
  ]);
  const settingsTabOrder = Object.freeze([
    "controls",
    "graphics",
    "mobileLayout",
    "gameplay",
    "audioEffects",
    "crosshair",
    "aiming",
    "movement",
    "debugAdvanced"
  ]);
  const startupDeviceMode = {
    deviceType: null,
    controls: null,
    quality: null
  };
  let mobileHudVisible = false;
  let mobileLayoutEditMode = false;
  let selectedMobileControlId = "joystick";
  let activeMobileLayoutPointerId = null;
  let activeMobileLayoutPointerMode = "";
  let activeMobileLayoutControlId = "";
  let activeMobileLayoutPointerStartX = 0;
  let activeMobileLayoutPointerStartY = 0;
  let activeMobileLayoutPointerStartLayout = null;
  let activeMobileJoystickPointerId = null;
  let activeMobileCameraPointerId = null;
  let activeMobileCameraLastClientX = 0;
  let activeMobileCameraLastClientY = 0;
  let activeMobileCameraCaptureElement = null;
  let activeMobileCameraInputSource = "";
  let activeMobileFireAimPointerId = null;
  let activeMobileFireAimLastClientX = 0;
  let activeMobileFireAimLastClientY = 0;
  let activeMobileFireAimInputSource = "";
  let mobileJoystickRuntimeAnchor = null;
  const activeMobileHudActionPointers = new Map();
  const activeMobileTouchPointerIds = new Set();
  let gameplayHudLayoutDefaults = null;
  let mobileControlLayout = null;
  let mobileControlLayoutDraft = null;
  let mobileHudReflowTimer = null;

  function scheduleMobileHudReflow(reason) {
    if (!isPhoneModeSelected()) return;
    clearTimeout(mobileHudReflowTimer);
    mobileHudReflowTimer = setTimeout(() => {
      console.log("[MOBILE HUD REFLOW] applying", {
        reason,
        width: window.innerWidth,
        height: window.innerHeight,
        visualViewportWidth: window.visualViewport?.width,
        visualViewportHeight: window.visualViewport?.height
      });
      applyMobileControlLayout();
    }, 180);
    console.log("[MOBILE HUD REFLOW] scheduled", reason);
  }

  function restoreSavedMobileLayoutForFullscreen(reason) {
    if (!isPhoneModeSelected()) return;

    const isFS = isActuallyFullscreenNow();

    console.log("[MOBILE HUD FULLSCREEN RESTORE] applying saved layout", {
      reason,
      isActuallyFullscreen: isFS,
      width: window.innerWidth,
      height: window.innerHeight
    });

    const savedLayoutRaw = localStorage.getItem(mobileControlLayoutStorageKey);
    if (savedLayoutRaw) {
      try {
        const savedLayout = JSON.parse(savedLayoutRaw);
        // Sync the in-memory layout with the saved one
        mobileControlLayout = cloneMobileControlLayout(savedLayout);
        // Apply it to the current viewport
        applyMobileControlLayout(mobileControlLayout);

        if (isFS) {
          showStatusMessage("MOBILE HUD: restored saved fullscreen layout", 2500);
        }
      } catch (e) {
        console.error("[MOBILE HUD FULLSCREEN RESTORE] failed", e);
      }
    }
  }

  function scheduleRestoreSavedMobileLayout(reason) {
    if (!isPhoneModeSelected()) return;

    console.log("[MOBILE HUD FULLSCREEN RESTORE] scheduled", reason);

    [100, 300, 700, 1200].forEach((delay) => {
      setTimeout(() => {
        restoreSavedMobileLayoutForFullscreen(`${reason} (${delay}ms delay)`);
      }, delay);
    });
  }
  const mobileLayoutEditReturnState = {
    source: "",
    reopenHomeSettings: false,
    reopenSettingsMenu: false
  };
  const proceduralCityChunkState = {
    chunks: [],
    activeChunkCount: -1,
    nearKeepDistance: 120,
    visibilityDistance: 260
  };
  const proceduralCityCollisionState = {
    enabled: false,
    solidZones: [],
    zonePadding: 0.25,
    playerRadius: 0.6,
    derivedColliderCount: 0,
    lastBlockedZoneId: "",
    lastBlockedColliderId: ""
  };
  const editableGameplayHudElements = Object.freeze({
    joystick: Object.freeze({
      element: mobileControlJoystick,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: mobileControlMinSize,
      maxSize: mobileControlMaxSize
    }),
    fire: Object.freeze({
      element: mobileControlFire,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: mobileControlMinSize,
      maxSize: mobileControlMaxSize
    }),
    fireOnly: Object.freeze({
      element: mobileControlFireOnly,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: mobileControlMinSize,
      maxSize: mobileControlMaxSize
    }),
    aim: Object.freeze({
      element: mobileControlAim,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: mobileControlMinSize,
      maxSize: mobileControlMaxSize
    }),
    jump: Object.freeze({
      element: mobileControlJump,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: mobileControlMinSize,
      maxSize: mobileControlMaxSize
    }),
    reload: Object.freeze({
      element: mobileControlReload,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: mobileControlMinSize,
      maxSize: mobileControlMaxSize
    }),
    sprint: Object.freeze({
      element: mobileControlSprint,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: 0.095,
      maxSize: 0.18
    }),
    crouch: Object.freeze({
      element: mobileControlCrouch,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: 0.095,
      maxSize: 0.18
    }),
    cameraToggle: Object.freeze({
      element: mobileControlCamera,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: 0.1,
      maxSize: 0.17
    }),
    menu: Object.freeze({
      element: mobileControlMenu,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: 0.1,
      maxSize: 0.17
    }),
    settings: Object.freeze({
      element: mobileControlSettings,
      layoutType: "control",
      anchor: "center",
      sizeMode: "viewport",
      minSize: 0.1,
      maxSize: 0.17
    }),
    playerHpBar: Object.freeze({
      element: playerHpUi,
      layoutType: "hud",
      anchor: "top-left",
      sizeMode: "scale",
      minSize: 0.8,
      maxSize: 1.45
    }),
    ammoCounter: Object.freeze({
      element: ammoUi,
      layoutType: "hud",
      anchor: "top-left",
      sizeMode: "scale",
      minSize: 0.8,
      maxSize: 1.45
    })
  });
  const editableGameplayHudIds = Object.freeze(Object.keys(editableGameplayHudElements));
  const mobileHudActionConfigs = Object.freeze({
    fire: Object.freeze({
      behavior: "hold",
      allowWhenMenuOpen: false,
      allowWhilePlayerDead: false
    }),
    fireOnly: Object.freeze({
      behavior: "hold",
      allowWhenMenuOpen: false,
      allowWhilePlayerDead: false
    }),
    aim: Object.freeze({
      behavior: "hold",
      allowWhenMenuOpen: false,
      allowWhilePlayerDead: false
    }),
    jump: Object.freeze({
      behavior: "tap",
      allowWhenMenuOpen: false,
      allowWhilePlayerDead: false
    }),
    reload: Object.freeze({
      behavior: "tap",
      allowWhenMenuOpen: false,
      allowWhilePlayerDead: false
    }),
    sprint: Object.freeze({
      behavior: "hold",
      allowWhenMenuOpen: false,
      allowWhilePlayerDead: false
    }),
    crouch: Object.freeze({
      behavior: "hold",
      allowWhenMenuOpen: false,
      allowWhilePlayerDead: false
    }),
    cameraToggle: Object.freeze({
      behavior: "tap",
      allowWhenMenuOpen: false,
      allowWhilePlayerDead: false
    }),
    menu: Object.freeze({
      behavior: "tap",
      allowWhenMenuOpen: true,
      allowWhilePlayerDead: true
    }),
    settings: Object.freeze({
      behavior: "tap",
      allowWhenMenuOpen: true,
      allowWhilePlayerDead: true
    })
  });
  const mobileHudActionIds = Object.freeze(Object.keys(mobileHudActionConfigs));

  const blossomPetalDummy = new THREE.Object3D();
  const blossomPetalColor = new THREE.Color();

  const ammoUiState = { text: "" };
  const activePlayerNameUiState = { text: "", visible: false };
  const playerHpUiState = { ratio: -1, text: "" };
  const remotePlayers = new Map();
  const lastPacketTimestamps = new Map();
  const lanPlayerCombatState = new Map();
  const sharedEnemyRegistry = new Map();
  const sharedOnlineHealthPickupRegistry = new Map();
  let localPlayerNameplate = null;
  let nextLanShotSequence = 0;
  let nextLanEnemySequence = 0;
  let nextLanHealthPickupSequence = 0;
  const perfOverlayState = {
    frames: 0,
    fps: 0,
    lastSampleTime: performance.now(),
    lastDomUpdateTime: 0,
    text: ""
  };
  const coordinatesOverlayState = { text: "" };

  let maxAmmo = currentGun.ammoCapacity;
  const playerMaxHp = 100;
  const enemyMaxHp = 100;
  let damagePerBullet = currentGun.damage;
  let headshotDamage = currentGun.damage * currentGun.headshotMultiplier;
  let legshotDamage = Math.max(1, Math.round(currentGun.damage * 0.75));
  let fireCooldownMs = Math.round(1000 / currentGun.fireRate);
  let reloadDuration = currentGun.reloadTime;
  let isReloading = false;
  let reloadEndTimeMs = 0;
  let reloadTimeoutId = 0;
  let reloadResumeAutoFire = false;
  let enemySpawnPoints = [
    new THREE.Vector3(-8, 0, -10),
    new THREE.Vector3(10, 0, -12),
    new THREE.Vector3(-14, 0, 6),
    new THREE.Vector3(12, 0, 10)
  ];
  let waveSessionActive = false;
  let currentWaveIndex = 0;
  let totalWaves = 0;
  let enemiesPerWave = 0;
  let waveRemaining = 0;
  let waveCountdownActive = false;
  let waveCountdownRemaining = 0;
  let activeWaveId = 0;
  let waveSessionDifficultyKey = "noob";
  let waveCountdownIntervalId = 0;
  const pendingWaveSpawnTimeoutIds = [];
  const difficultyProfiles = {
    noob: {
      label: "Noob",
      fireCooldownMs: 2850,
      damage: 16,
      sprintMissChance: 0.5,
      reactionTime: 0.9,
      moveSpeed: 4.2,
      preferredDistance: 8.5,
      closeDistance: 2.6,
      reloadTime: 1.8,
      clipSize: 8
    },
    intermediate: {
      label: "Intermediate",
      fireCooldownMs: 2500,
      damage: 18,
      sprintMissChance: 0.35,
      reactionTime: 0.55,
      moveSpeed: 4.9,
      preferredDistance: 8,
      closeDistance: 2.7,
      reloadTime: 1.45,
      clipSize: 10
    },
    pro: {
      label: "Pro",
      fireCooldownMs: 1800,
      damage: 18,
      sprintMissChance: 0.2,
      reactionTime: 0.2,
      moveSpeed: 5.5,
      preferredDistance: 7.4,
      closeDistance: 2.8,
      reloadTime: 1.2,
      clipSize: 12
    }
  };

  const moveState = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    sprint: false
  };

  const invertedMoveKeyMap = {
    KeyW: "backward",
    KeyS: "forward",
    KeyA: "right",
    KeyD: "left"
  };

  const cameraConfig = {
    // Updated default camera settings
    distance: 6.8,
    height: 0.8,
    shoulder: 0.6,
    obstructionMargin: 0.18,
    minObstructedDistance: 1.2,
    minPitch: -0.85,
    maxPitch: 0.45,
    mouseSensitivity: 0.0024,
    smoothness: 10
  };
  const crouchCameraDrop = 0.18;
  const crouchCameraOffsetSmoothness = 12;
  const recoilConfig = {
    pitchKickUnit: THREE.MathUtils.degToRad(1),
    yawKickUnit: THREE.MathUtils.degToRad(1),
    rollKickUnit: THREE.MathUtils.degToRad(0.6),
    activeRecoverySpeed: 8,
    idleRecoverySpeed: 14,
    clearRecoverySpeed: 18,
    pitchKickBlend: 0.38,
    pitchClimbBlend: 0.62,
    activeClimbRecoverySpeed: 0.9,
    idleClimbRecoverySpeed: 5,
    maxPitchOffset: THREE.MathUtils.degToRad(8),
    maxYawOffset: THREE.MathUtils.degToRad(2),
    maxRollOffset: THREE.MathUtils.degToRad(4)
  };
  const defaultCameraCustomizationSettings = Object.freeze({
    distance: cameraConfig.distance,
    offsetX: cameraConfig.shoulder,
    offsetY: cameraConfig.height,
    offsetZ: 3.0
  });
  const defaultFirstPersonCameraSettings = Object.freeze({
    distance: 2.0,
    offsetX: 0.20,
    offsetY: 0.45,
    offsetZ: 2.80
  });
  const thirdPersonCameraSettings = {
    ...defaultCameraCustomizationSettings
  };
  const firstPersonCameraSettings = {
    ...defaultFirstPersonCameraSettings
  };
  let cameraMode = "thirdPerson";
  const cameraCustomizationControlConfigs = [
    { key: "distance", label: "Camera Distance", min: 2, max: 12, step: 0.1 },
    { key: "offsetX", label: "Camera X", min: -4, max: 4, step: 0.05 },
    { key: "offsetY", label: "Camera Y", min: -1, max: 6, step: 0.05 },
    { key: "offsetZ", label: "Camera Z", min: -3, max: 3, step: 0.05 }
  ];
  const cameraCustomizationControls = {};
  let cameraCustomizationSection = null;
  let cameraCustomizationResetButton = null;
  let cameraCustomizationPreviewButton = null;
  let cameraPreviewPanelHeader = null;
  let cameraPreviewPanelCloseButton = null;
  let cameraCustomizationPreviewMode = false;
  let activeSettingsPreviewFlow = "";
  let cameraCustomizationPreviewPreviousMapId = "";
  const cameraCustomizationPreviewSpawn = new THREE.Vector3(0.2, 0.9, -0.6);
  const cameraCustomizationPreviewFacingDirection = new THREE.Vector3(0, 0, -1);
  const cameraCustomizationPreviewYaw = Math.PI;
  const cameraCustomizationPreviewPitch = -0.3;
  let temporaryPlayerSpawnOverride = null;
  let cameraPreviewPanelLeft = null;
  let cameraPreviewPanelDragPointerId = null;
  let cameraPreviewPanelDragStartX = 0;
  let cameraPreviewPanelDragStartLeft = 0;
  const defaultCameraFov = 55;
  const defaultUiTransparency = 1;
  const defaultMobileCameraSensitivityPercent = 230;
  const maxMobileCameraSensitivityPercent = 500;
  const graphicsShadowQualityMapSizes = Object.freeze({
    ultra: 4096,
    high: 2048,
    medium: 1024,
    low: 512
  });
  const graphicsEffectQualityRanks = Object.freeze({
    ultraLow: 0,
    low: 1,
    medium: 2,
    ultra: 3
  });
  const advancedGraphicsDefaults = Object.freeze({
    colorStyle: "Default",
    exposure: 1.0,
    contrast: 1.0,
    saturation: 1.0,
    fogEnabled: false,
    fogStrength: 0.25,
    fogDistance: 120,
    bloomEnabled: false,
    bloomStrength: 0.35,
    ambientOcclusionEnabled: false,
    aoStrength: 0.45,
    antiAliasing: "Off",
    materialQuality: "Medium",
    dynamicLights: "Off",
    motionBlur: "Off",
    motionBlurStrength: 0
  });
  const advancedGraphicsColorStylePresets = Object.freeze({
    Default: Object.freeze({ exposure: 1.0, contrast: 1.0, saturation: 1.0 }),
    Cinematic: Object.freeze({ exposure: 1.05, contrast: 1.15, saturation: 0.9 }),
    Warm: Object.freeze({ exposure: 1.05, contrast: 1.08, saturation: 1.1 }),
    Cold: Object.freeze({ exposure: 1.0, contrast: 1.08, saturation: 0.95 }),
    "High Contrast": Object.freeze({ exposure: 1.05, contrast: 1.25, saturation: 1.05 })
  });
  const graphicsDefaultsByMode = Object.freeze({
    desktop: Object.freeze({
      renderScalePercent: 100,
      pixelRatio: 1.5,
      shadowsEnabled: true,
      shadowQuality: "high",
      renderDistance: 600,
      effectQuality: "ultra",
      advancedGraphics: advancedGraphicsDefaults
    }),
    mobile: Object.freeze({
      renderScalePercent: 70,
      pixelRatio: 1.0,
      shadowsEnabled: true,
      shadowQuality: "low",
      renderDistance: 250,
      effectQuality: "low",
      advancedGraphics: advancedGraphicsDefaults
    })
  });
  let uiTransparency = defaultUiTransparency;
  let mobileCameraSensitivityPercent = defaultMobileCameraSensitivityPercent;
  let graphicsSettings = { ...graphicsDefaultsByMode.desktop };
  let graphicsSettingsLoadedFromStorage = false;
  const advancedGraphicsOptionalEffectLogs = new Set();
  let motionBlurCleanupLogged = false;
  let uiTransparencySlider = null;
  let uiTransparencyValue = null;
  let uiTransparencyResetButton = null;
  let startupOverlayHideTimeoutId = 0;
  let startupSequenceStartTime = performance.now();
  let animationLoopStarted = false;
  let forceNextCameraSnap = false;
  let startupProgressPercent = 0;
  setStartupPhase("Booting", "Starting startup pipeline.");
  setStartupProgress(5, "Booting");
  setStartupReadiness("sceneCreated", true, {
    statusMessage: "Creating scene",
    debugMessage: "Renderer, scene, and camera created.",
    logPhase: "scene creation"
  });

  const moveConfig = {
    walkSpeed: 5.2,
    sprintSpeed: 8.2,
    acceleration: 18,
    damping: 14,
    gravity: 24,
    jumpSpeed: 9
  };

  const playerCollisionConfig = {
    skinWidth: 0.02,
    supportInset: 0.04,
    groundSnapDistance: 0.18,
    penetrationResolveIterations: 4
  };

  const obstacleColliders = [];
  const worldColliders = obstacleColliders;
  const bulletCollisionMeshes = [];
  const bulletImpactTargets = [];
  const impactMarks = [];
  const impactMarkPool = [];
  const currentPlayerSpawn = new THREE.Vector3(0, 0, 10);
  const playerPosition = new THREE.Vector3(0, 0, 10);
  const bodyGeometry = new THREE.BoxGeometry(0.9, 1.35, 0.55);
  const headGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const armGeometry = new THREE.BoxGeometry(0.18, 0.78, 0.18);
  const legGeometry = new THREE.BoxGeometry(0.22, 0.92, 0.22);
  const sharedImpactMarkGeometry = new THREE.CircleGeometry(0.05, 8);
  const sharedImpactMarkMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const sharedMuzzleFlashGeometry = new THREE.SphereGeometry(0.09, 8, 8);
  const sharedMuzzleFlashMaterials = new Map();
  let player = null;
  let playerActor = null;
  const mapGroup = new THREE.Group();
  const gltfLoader = new GLTFLoader();
  const sharedTextureKeys = [
    "map",
    "alphaMap",
    "normalMap",
    "aoMap",
    "metalnessMap",
    "roughnessMap",
    "emissiveMap",
    "specularMap",
    "specularIntensityMap",
    "specularColorMap",
    "clearcoatMap",
    "clearcoatNormalMap",
    "clearcoatRoughnessMap",
    "bumpMap"
  ];
  const cityAssetTemplateCache = new Map();
  const cityAssetLoadCache = new Map();
  let activeMapBuildId = 0;
  let currentLoadedMapId = "";
  let currentMapVisualVariant = "";
  let pendingMapLoadRequest = null;
  const ironworksYardMapId = "ironworksYard";
  const ironworksYardDisplayName = "Ironworks Yard";
  const mediumRangeJiggleTrainingVisualVariant = "mediumRangeJiggleTrainingLight";
  const warehouseRailyardMapId = "warehouseRailyard";
  const warehouseRailyardDisplayName = "Warehouse Railyard";
  const warehouseRailyardModelRelativePath = "../assets/models/warehouse-railyard/warehouse_colliders.glb";
  const warehouseRailyardSlowLoadWarningMs = 20000;
  const warehouseRailyardFatalLoadTimeoutMs = 120000;
  const proceduralCityModelUrl = new URL("../assets/models/procedural-city/procedural_city_5.glb", import.meta.url).href;
  const warehouseRailyardModelUrl = new URL(warehouseRailyardModelRelativePath, import.meta.url).href;
  const motusManCharacterUrl = new URL("../assets/characters/motusman/MotusMan_v55.fbx", import.meta.url).href;
  const motusManResourceUrl = new URL("../assets/characters/motusman/MotusMan_v55.fbm/", import.meta.url).href;
  const motusManIdleAnimationUrl = new URL("../assets/characters/motusman/Animation/W1_Stand_Aim_Idle.fbx", import.meta.url).href;
  const motusManCrouchIdleAnimationUrl = new URL("../assets/characters/motusman/Animation/W1_Crouch_Aim_Idle_IPC.fbx", import.meta.url).href;
  const motusManWalkAimAnimationUrl = new URL("../assets/characters/motusman/Animation/W1_Walk_Aim_F_Loop_IPC.fbx", import.meta.url).href;
  const motusManJogAimAnimationUrl = new URL("../assets/characters/motusman/Animation/W1_Jog_Aim_F_Loop_IPC.fbx", import.meta.url).href;
  const motusManJumpStartAnimationUrl = new URL("../assets/characters/motusman/Animation/W1_Stand_Aim_Jump_Start_IPC.fbx", import.meta.url).href;
  const motusManJumpAirAnimationUrl = new URL("../assets/characters/motusman/Animation/W1_Stand_Aim_Jump_Air_IPC.fbx", import.meta.url).href;
  const cityAssetPaths = Object.freeze({
    roadStraight: new URL("../assets/city/kenney_roads/Models/GLB format/road-straight.glb", import.meta.url).href,
    roadCurve: new URL("../assets/city/kenney_roads/Models/GLB format/road-curve.glb", import.meta.url).href,
    roadIntersection: new URL("../assets/city/kenney_roads/Models/GLB format/road-intersection.glb", import.meta.url).href,
    roadCrossroad: new URL("../assets/city/kenney_roads/Models/GLB format/road-crossroad.glb", import.meta.url).href,
    roadRoundabout: new URL("../assets/city/kenney_roads/Models/GLB format/road-roundabout.glb", import.meta.url).href,
    roadSide: new URL("../assets/city/kenney_roads/Models/GLB format/road-side.glb", import.meta.url).href,
    lightSquare: new URL("../assets/city/kenney_roads/Models/GLB format/light-square.glb", import.meta.url).href,
    lightCurved: new URL("../assets/city/kenney_roads/Models/GLB format/light-curved.glb", import.meta.url).href,
    barrier: new URL("../assets/city/kenney_roads/Models/GLB format/construction-barrier.glb", import.meta.url).href,
    buildingA: new URL("../assets/city/kenney_commercial/Models/GLB format/building-a.glb", import.meta.url).href,
    buildingALow: new URL("../assets/city/kenney_commercial/Models/GLB format/low-detail-building-a.glb", import.meta.url).href,
    buildingC: new URL("../assets/city/kenney_commercial/Models/GLB format/building-c.glb", import.meta.url).href,
    buildingCLow: new URL("../assets/city/kenney_commercial/Models/GLB format/low-detail-building-c.glb", import.meta.url).href,
    buildingF: new URL("../assets/city/kenney_commercial/Models/GLB format/building-f.glb", import.meta.url).href,
    buildingFLow: new URL("../assets/city/kenney_commercial/Models/GLB format/low-detail-building-f.glb", import.meta.url).href,
    buildingJ: new URL("../assets/city/kenney_commercial/Models/GLB format/building-j.glb", import.meta.url).href,
    buildingJLow: new URL("../assets/city/kenney_commercial/Models/GLB format/low-detail-building-j.glb", import.meta.url).href,
    buildingM: new URL("../assets/city/kenney_commercial/Models/GLB format/building-m.glb", import.meta.url).href,
    buildingMLow: new URL("../assets/city/kenney_commercial/Models/GLB format/low-detail-building-m.glb", import.meta.url).href,
    skyscraperA: new URL("../assets/city/kenney_commercial/Models/GLB format/building-skyscraper-a.glb", import.meta.url).href,
    skyscraperC: new URL("../assets/city/kenney_commercial/Models/GLB format/building-skyscraper-c.glb", import.meta.url).href,
    awning: new URL("../assets/city/kenney_commercial/Models/GLB format/detail-awning.glb", import.meta.url).href,
    awningWide: new URL("../assets/city/kenney_commercial/Models/GLB format/detail-awning-wide.glb", import.meta.url).href,
    overhang: new URL("../assets/city/kenney_commercial/Models/GLB format/detail-overhang.glb", import.meta.url).href,
    suburbanA: new URL("../assets/city/kenney_suburban/Models/GLB format/building-type-a.glb", import.meta.url).href,
    suburbanF: new URL("../assets/city/kenney_suburban/Models/GLB format/building-type-f.glb", import.meta.url).href,
    suburbanK: new URL("../assets/city/kenney_suburban/Models/GLB format/building-type-k.glb", import.meta.url).href,
    suburbanP: new URL("../assets/city/kenney_suburban/Models/GLB format/building-type-p.glb", import.meta.url).href,
    suburbanU: new URL("../assets/city/kenney_suburban/Models/GLB format/building-type-u.glb", import.meta.url).href,
    drivewayLong: new URL("../assets/city/kenney_suburban/Models/GLB format/driveway-long.glb", import.meta.url).href,
    drivewayShort: new URL("../assets/city/kenney_suburban/Models/GLB format/driveway-short.glb", import.meta.url).href,
    planter: new URL("../assets/city/kenney_suburban/Models/GLB format/planter.glb", import.meta.url).href,
    treeLarge: new URL("../assets/city/kenney_suburban/Models/GLB format/tree-large.glb", import.meta.url).href,
    treeSmall: new URL("../assets/city/kenney_suburban/Models/GLB format/tree-small.glb", import.meta.url).href,
    floorFull: new URL("../assets/city/kenney_furniture/Models/GLTF format/floorFull.glb", import.meta.url).href,
    floorCornerRound: new URL("../assets/city/kenney_furniture/Models/GLTF format/floorCornerRound.glb", import.meta.url).href,
    wall: new URL("../assets/city/kenney_furniture/Models/GLTF format/wall.glb", import.meta.url).href,
    wallCornerRound: new URL("../assets/city/kenney_furniture/Models/GLTF format/wallCornerRond.glb", import.meta.url).href,
    wallDoorwayWide: new URL("../assets/city/kenney_furniture/Models/GLTF format/wallDoorwayWide.glb", import.meta.url).href,
    wallWindow: new URL("../assets/city/kenney_furniture/Models/GLTF format/wallWindow.glb", import.meta.url).href,
    doorwayOpen: new URL("../assets/city/kenney_furniture/Models/GLTF format/doorwayOpen.glb", import.meta.url).href,
    chairRounded: new URL("../assets/city/kenney_furniture/Models/GLTF format/chairRounded.glb", import.meta.url).href,
    tableRound: new URL("../assets/city/kenney_furniture/Models/GLTF format/tableRound.glb", import.meta.url).href,
    bench: new URL("../assets/city/kenney_furniture/Models/GLTF format/bench.glb", import.meta.url).href,
    pottedPlant: new URL("../assets/city/kenney_furniture/Models/GLTF format/pottedPlant.glb", import.meta.url).href,
    loungeSofa: new URL("../assets/city/kenney_furniture/Models/GLTF format/loungeDesignSofa.glb", import.meta.url).href,
    lampFloor: new URL("../assets/city/kenney_furniture/Models/GLTF format/lampRoundFloor.glb", import.meta.url).href,
    kitchenFridge: new URL("../assets/city/kenney_furniture/Models/GLTF format/kitchenFridge.glb", import.meta.url).href,
    kitchenCabinet: new URL("../assets/city/kenney_furniture/Models/GLTF format/kitchenCabinet.glb", import.meta.url).href,
    kitchenCornerRound: new URL("../assets/city/kenney_furniture/Models/GLTF format/kitchenCabinetCornerRound.glb", import.meta.url).href,
    kitchenSink: new URL("../assets/city/kenney_furniture/Models/GLTF format/kitchenSink.glb", import.meta.url).href
  });
  let motusManTemplate = null;
  let motusManLoadPromise = null;
  let motusManIdleClip = null;
  let motusManIdleLoadPromise = null;
  let motusManCrouchIdleClip = null;
  let motusManCrouchIdleLoadPromise = null;
  let motusManWalkAimClip = null;
  let motusManWalkAimLoadPromise = null;
  let motusManJogAimClip = null;
  let motusManJogAimLoadPromise = null;
  let motusManJumpStartClip = null;
  let motusManJumpStartLoadPromise = null;
  let motusManJumpAirClip = null;
  let motusManJumpAirLoadPromise = null;
  let playerAnimationMixer = null;
  let playerIdleAction = null;
  let playerCrouchIdleAction = null;
  let playerWalkAction = null;
  let playerJogAction = null;
  let playerJumpStartAction = null;
  let playerJumpAirAction = null;
  let playerJumpStartFinished = false;
  let playerVisualReadyPromise = Promise.resolve(null);
  let playerCurrentAimIdleMode = "standing";
  const enemyMotusManBodyColor = 0x2f6bff;
  const remotePlayerMotusManAccentColor = 0x33c7ff;

  function loadMotusManTemplate() {
    if (motusManTemplate) {
      return Promise.resolve(motusManTemplate);
    }

    if (motusManLoadPromise) {
      return motusManLoadPromise;
    }

    console.log("MotusMan load start");
    const loader = new FBXLoader();
    loader.setResourcePath(motusManResourceUrl);
    motusManLoadPromise = new Promise((resolve, reject) => {
      loader.load(
        motusManCharacterUrl,
        (fbx) => {
          const bounds = new THREE.Box3().setFromObject(fbx);
          const size = new THREE.Vector3();
          bounds.getSize(size);
          const targetHeight = 2.2;
          const scaleFactor = size.y > 0.001 ? targetHeight / size.y : 1;
          fbx.scale.setScalar(scaleFactor);
          fbx.position.y = -bounds.min.y * scaleFactor;
          fbx.rotation.y = 0;
          fbx.traverse((object) => {
            if (!object.isMesh) {
              return;
            }

            object.castShadow = true;
            object.receiveShadow = true;
            object.userData.ignoreShotRay = true;
          });
          motusManTemplate = fbx;
          console.log("MotusMan loaded successfully");
          resolve(motusManTemplate);
        },
        undefined,
        (error) => {
          console.error("MotusMan load failed:", error);
          motusManLoadPromise = null;
          reject(error);
        }
      );
    });

    return motusManLoadPromise;
  }

  function loadMotusManIdleClip() {
    if (motusManIdleClip) {
      return Promise.resolve(motusManIdleClip);
    }

    if (motusManIdleLoadPromise) {
      return motusManIdleLoadPromise;
    }

    const loader = new FBXLoader();
    if (!startupReady) {
      setStartupPhase("Loading standing animation", "Fetching standing aim idle clip.");
    }
    motusManIdleLoadPromise = new Promise((resolve, reject) => {
      loader.load(
        motusManIdleAnimationUrl,
        (fbx) => {
          const clip = fbx.animations?.[0];
          if (!clip) {
            motusManIdleLoadPromise = null;
            const missingClipError = new Error("MotusMan idle animation clip missing");
            console.error("MotusMan idle animation load failed:", missingClipError);
            reject(missingClipError);
            return;
          }

          motusManIdleClip = clip;
          resolve(motusManIdleClip);
        },
        undefined,
        (error) => {
          motusManIdleLoadPromise = null;
          console.error("MotusMan idle animation load failed:", error);
          reject(error);
        }
      );
    });

    return motusManIdleLoadPromise;
  }

  function loadMotusManCrouchIdleClip() {
    if (motusManCrouchIdleClip) {
      return Promise.resolve(motusManCrouchIdleClip);
    }

    if (motusManCrouchIdleLoadPromise) {
      return motusManCrouchIdleLoadPromise;
    }

    const loader = new FBXLoader();
    if (!startupReady) {
      setStartupPhase("Loading crouch animation", "Fetching crouch aim idle clip.");
    }
    motusManCrouchIdleLoadPromise = new Promise((resolve, reject) => {
      loader.load(
        motusManCrouchIdleAnimationUrl,
        (fbx) => {
          const clip = fbx.animations?.[0];
          if (!clip) {
            motusManCrouchIdleLoadPromise = null;
            const missingClipError = new Error("MotusMan crouch idle animation clip missing");
            console.warn("MotusMan crouch idle animation load failed:", missingClipError);
            reject(missingClipError);
            return;
          }

          motusManCrouchIdleClip = clip;
          resolve(motusManCrouchIdleClip);
        },
        undefined,
        (error) => {
          motusManCrouchIdleLoadPromise = null;
          console.warn("MotusMan crouch idle animation load failed:", error);
          reject(error);
        }
      );
    });

    return motusManCrouchIdleLoadPromise;
  }

  function loadMotusManWalkAimClip() {
    if (motusManWalkAimClip) {
      return Promise.resolve(motusManWalkAimClip);
    }

    if (motusManWalkAimLoadPromise) {
      return motusManWalkAimLoadPromise;
    }

    const loader = new FBXLoader();
    motusManWalkAimLoadPromise = new Promise((resolve, reject) => {
      loader.load(
        motusManWalkAimAnimationUrl,
        (fbx) => {
          const clip = fbx.animations?.[0];
          if (!clip) {
            motusManWalkAimLoadPromise = null;
            const err = new Error("MotusMan walk-aim animation clip missing");
            console.warn("MotusMan walk-aim animation load failed:", err);
            reject(err);
            return;
          }
          motusManWalkAimClip = clip;
          resolve(motusManWalkAimClip);
        },
        undefined,
        (error) => {
          motusManWalkAimLoadPromise = null;
          console.warn("MotusMan walk-aim animation load failed:", error);
          reject(error);
        }
      );
    });

    return motusManWalkAimLoadPromise;
  }

  function loadMotusManJogAimClip() {
    if (motusManJogAimClip) {
      return Promise.resolve(motusManJogAimClip);
    }

    if (motusManJogAimLoadPromise) {
      return motusManJogAimLoadPromise;
    }

    const loader = new FBXLoader();
    motusManJogAimLoadPromise = new Promise((resolve, reject) => {
      loader.load(
        motusManJogAimAnimationUrl,
        (fbx) => {
          const clip = fbx.animations?.[0];
          if (!clip) {
            motusManJogAimLoadPromise = null;
            const err = new Error("MotusMan jog-aim animation clip missing");
            console.warn("MotusMan jog-aim animation load failed:", err);
            reject(err);
            return;
          }
          motusManJogAimClip = clip;
          resolve(motusManJogAimClip);
        },
        undefined,
        (error) => {
          motusManJogAimLoadPromise = null;
          console.warn("MotusMan jog-aim animation load failed:", error);
          reject(error);
        }
      );
    });

    return motusManJogAimLoadPromise;
  }

  function loadMotusManJumpStartClip() {
    if (motusManJumpStartClip) {
      return Promise.resolve(motusManJumpStartClip);
    }

    if (motusManJumpStartLoadPromise) {
      return motusManJumpStartLoadPromise;
    }

    const loader = new FBXLoader();
    motusManJumpStartLoadPromise = new Promise((resolve, reject) => {
      loader.load(
        motusManJumpStartAnimationUrl,
        (fbx) => {
          const clip = fbx.animations?.[0];
          if (!clip) {
            motusManJumpStartLoadPromise = null;
            const err = new Error("MotusMan jump-start animation clip missing");
            console.warn("MotusMan jump-start animation load failed:", err);
            reject(err);
            return;
          }
          motusManJumpStartClip = clip;
          resolve(motusManJumpStartClip);
        },
        undefined,
        (error) => {
          motusManJumpStartLoadPromise = null;
          console.warn("MotusMan jump-start animation load failed:", error);
          reject(error);
        }
      );
    });

    return motusManJumpStartLoadPromise;
  }

  function loadMotusManJumpAirClip() {
    if (motusManJumpAirClip) {
      return Promise.resolve(motusManJumpAirClip);
    }

    if (motusManJumpAirLoadPromise) {
      return motusManJumpAirLoadPromise;
    }

    const loader = new FBXLoader();
    motusManJumpAirLoadPromise = new Promise((resolve, reject) => {
      loader.load(
        motusManJumpAirAnimationUrl,
        (fbx) => {
          const clip = fbx.animations?.[0];
          if (!clip) {
            motusManJumpAirLoadPromise = null;
            const err = new Error("MotusMan jump-air animation clip missing");
            console.warn("MotusMan jump-air animation load failed:", err);
            reject(err);
            return;
          }
          motusManJumpAirClip = clip;
          resolve(motusManJumpAirClip);
        },
        undefined,
        (error) => {
          motusManJumpAirLoadPromise = null;
          console.warn("MotusMan jump-air animation load failed:", error);
          reject(error);
        }
      );
    });

    return motusManJumpAirLoadPromise;
  }

  function syncPlayerAimIdleAnimation(forceRestart = false, triggerJumpStart = false) {
    if (!playerIdleAction) {
      return;
    }

    if (isCrouching && !playerCrouchIdleAction) {
      ensurePlayerCrouchIdleAction();
    }

    // Priority: crouch > jumpStart > jumpAir > jog (sprint) > walk (move) > standing
    const isSprinting = isMoving && Boolean(moveState.sprint);
    let nextMode = "standing";

    if (isCrouching && playerCrouchIdleAction) {
      nextMode = "crouch";
    } else if (triggerJumpStart && playerJumpStartAction) {
      nextMode = "jumpStart";
    } else if (playerCurrentAimIdleMode === "jumpStart" && !isGrounded && !playerJumpStartFinished) {
      nextMode = "jumpStart";
    } else if (!isGrounded && playerJumpAirAction) {
      nextMode = "jumpAir";
    } else if (isMoving && !isShooting && isSprinting && playerJogAction) {
      nextMode = "jog";
    } else if (isMoving && !isShooting && playerWalkAction) {
      nextMode = "walk";
    }

    if (!forceRestart && playerCurrentAimIdleMode === nextMode) {
      return;
    }

    playerCurrentAimIdleMode = nextMode;

    if (nextMode === "crouch") {
      if (playerWalkAction) playerWalkAction.fadeOut(0.18);
      if (playerJogAction) playerJogAction.fadeOut(0.18);
      if (playerJumpStartAction) playerJumpStartAction.fadeOut(0.18);
      if (playerJumpAirAction) playerJumpAirAction.fadeOut(0.18);
      playerIdleAction.fadeOut(0.18);
      playerCrouchIdleAction.reset().fadeIn(0.18).play();
      return;
    }

    if (nextMode === "jumpStart") {
      playerJumpStartFinished = false;
      if (playerCrouchIdleAction) playerCrouchIdleAction.fadeOut(0.18);
      if (playerWalkAction) playerWalkAction.fadeOut(0.18);
      if (playerJogAction) playerJogAction.fadeOut(0.18);
      if (playerJumpAirAction) playerJumpAirAction.fadeOut(0.18);
      playerIdleAction.fadeOut(0.18);
      playerJumpStartAction.reset().fadeIn(0.18).play();
      return;
    }

    if (nextMode === "jumpAir") {
      if (playerCrouchIdleAction) playerCrouchIdleAction.fadeOut(0.18);
      if (playerWalkAction) playerWalkAction.fadeOut(0.18);
      if (playerJogAction) playerJogAction.fadeOut(0.18);
      if (playerJumpStartAction) playerJumpStartAction.fadeOut(0.18);
      playerIdleAction.fadeOut(0.18);
      playerJumpAirAction.reset().fadeIn(0.18).play();
      return;
    }

    if (nextMode === "jog") {
      if (playerCrouchIdleAction) playerCrouchIdleAction.fadeOut(0.18);
      if (playerWalkAction) playerWalkAction.fadeOut(0.20);
      if (playerJumpStartAction) playerJumpStartAction.fadeOut(0.18);
      if (playerJumpAirAction) playerJumpAirAction.fadeOut(0.18);
      playerIdleAction.fadeOut(0.18);
      playerJogAction.reset().fadeIn(0.18).play();
      return;
    }

    if (nextMode === "walk") {
      if (playerCrouchIdleAction) playerCrouchIdleAction.fadeOut(0.18);
      if (playerJogAction) playerJogAction.fadeOut(0.20);
      if (playerJumpStartAction) playerJumpStartAction.fadeOut(0.18);
      if (playerJumpAirAction) playerJumpAirAction.fadeOut(0.18);
      playerIdleAction.fadeOut(0.18);
      playerWalkAction.reset().fadeIn(0.18).play();
      return;
    }

    // standing
    if (playerCrouchIdleAction) playerCrouchIdleAction.fadeOut(0.18);
    if (playerWalkAction) playerWalkAction.fadeOut(0.18);
    if (playerJogAction) playerJogAction.fadeOut(0.18);
    if (playerJumpStartAction) playerJumpStartAction.fadeOut(0.18);
    if (playerJumpAirAction) playerJumpAirAction.fadeOut(0.18);
    playerIdleAction.reset().fadeIn(0.18).play();
  }

  function ensurePlayerCrouchIdleAction(actor = playerActor) {
    if (!actor?.motusManVisual || !playerAnimationMixer || playerCrouchIdleAction) {
      return;
    }

    loadMotusManCrouchIdleClip()
      .then((crouchClip) => {
        if (playerActor !== actor || !playerAnimationMixer) {
          return;
        }

        playerCrouchIdleAction = playerAnimationMixer.clipAction(crouchClip);
        syncPlayerAimIdleAnimation();
      })
      .catch((error) => {
        console.warn("Failed to load crouch aim idle animation:", error);
      });
  }

  function attachMotusManToPlayer(actor) {
    // Wait for player animation readiness before reveal
    if (!startupReady) {
      setStartupPhase("Loading player", "Loading player character model.");
    }
    const attachmentPromise = Promise.all([
      loadMotusManTemplate(),
      loadMotusManIdleClip(),
      loadMotusManCrouchIdleClip(),
      loadMotusManWalkAimClip().catch(() => null),
      loadMotusManJogAimClip().catch(() => null),
      loadMotusManJumpStartClip().catch(() => null),
      loadMotusManJumpAirClip().catch(() => null)
    ])
      .then(([template, idleClip, crouchClip, walkClip, jogClip, jumpStartClip, jumpAirClip]) => {
        if (playerActor !== actor || !actor.root.parent) {
          return null;
        }

        if (template.parent) {
          template.parent.remove(template);
        }

        console.log("Replacing blue cube visual");
        actor.visual.visible = false;
        template.name = "playerMotusMan";
        template.rotation.y = 0;
        actor.root.add(template);
        actor.motusManVisual = template;
        if (!startupReady) {
          setStartupPhase("Preparing player actions", "Binding standing and crouch actions.");
        }
        playerAnimationMixer = new THREE.AnimationMixer(template);
        playerAnimationMixer.addEventListener('finished', (e) => {
          if (e.action === playerJumpStartAction && playerCurrentAimIdleMode === "jumpStart") {
            playerJumpStartFinished = true;
            syncPlayerAimIdleAnimation(true);
          }
        });
        playerIdleAction = playerAnimationMixer.clipAction(idleClip);
        playerCrouchIdleAction = crouchClip ? playerAnimationMixer.clipAction(crouchClip) : null;
        playerWalkAction = walkClip ? playerAnimationMixer.clipAction(walkClip) : null;
        if (playerWalkAction) {
          playerWalkAction.setLoop(THREE.LoopRepeat, Infinity);
        }
        playerJogAction = jogClip ? playerAnimationMixer.clipAction(jogClip) : null;
        if (playerJogAction) {
          playerJogAction.setLoop(THREE.LoopRepeat, Infinity);
        }
        playerJumpStartAction = jumpStartClip ? playerAnimationMixer.clipAction(jumpStartClip) : null;
        if (playerJumpStartAction) {
          playerJumpStartAction.setLoop(THREE.LoopOnce, 1);
          playerJumpStartAction.clampWhenFinished = true;
        }
        playerJumpAirAction = jumpAirClip ? playerAnimationMixer.clipAction(jumpAirClip) : null;
        if (playerJumpAirAction) {
          playerJumpAirAction.setLoop(THREE.LoopRepeat, Infinity);
        }
        playerJumpStartFinished = false;
        playerCurrentAimIdleMode = "standing";
        syncPlayerAimIdleAnimation(true);
        console.log("MotusMan attached to live player, walkAction:", Boolean(playerWalkAction), "jogAction:", Boolean(playerJogAction), "jumpStartAction:", Boolean(playerJumpStartAction), "jumpAirAction:", Boolean(playerJumpAirAction));
        if (!startupReady) {
          setStartupReadiness("playerModelReady", true, {
            statusMessage: "Loading player",
            debugMessage: "Player model attached.",
            logPhase: "player ready"
          });
          setStartupReadiness("playerStandingAnimReady", true, {
            statusMessage: "Loading standing animation",
            debugMessage: "Standing animation action ready.",
            logPhase: "standing action ready"
          });
          setStartupReadiness("playerCrouchAnimReady", true, {
            statusMessage: "Loading crouch animation",
            debugMessage: "Crouch animation action ready.",
            logPhase: "crouch action ready"
          });
          setStartupReadiness("playerActionsReady", true, {
            statusMessage: "Preparing player actions",
            debugMessage: "Standing and crouch actions are bound.",
            logPhase: "player actions ready"
          });
        }

        return {
          visualReady: true,
          standingAnimationReady: Boolean(playerIdleAction),
          crouchAnimationReady: Boolean(playerCrouchIdleAction)
        };
      })
      .catch((error) => {
        actor.visual.visible = startupReady;
        throw error;
      });

    if (playerActor === actor) {
      playerVisualReadyPromise = attachmentPromise;
    }

    return attachmentPromise;
  }

  function cloneMotusManVisualSource() {
    const sourceVisual = playerActor?.motusManVisual ?? motusManTemplate;
    return sourceVisual ? cloneSkinnedObject(sourceVisual) : null;
  }

  function logEnemyModelMeshes(actor) {
    if (!actor?.root) {
      return;
    }

    actor.root.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      const materials = Array.isArray(object.material)
        ? object.material.filter(Boolean)
        : object.material ? [object.material] : [];
      const firstColor = materials[0]?.color ? `#${materials[0].color.getHexString()}` : "none";
      const isBoxLike = Boolean(object.geometry?.type?.match(/Box|Cube/i));
      const hasRedTransparentMaterial = materials.some((material) => (
        Boolean(material?.transparent) &&
        (material.opacity ?? 1) < 0.98 &&
        material.color &&
        material.color.r > material.color.g + 0.12 &&
        material.color.r > material.color.b + 0.12
      ));

      console.log("Enemy model mesh", {
        name: object.name || "(unnamed)",
        geometry: object.geometry?.type ?? "none",
        transparent: materials.some((material) => Boolean(material?.transparent)),
        opacity: materials[0]?.opacity ?? 1,
        color: firstColor,
        helperCandidate: isBoxLike || hasRedTransparentMaterial
      });
    });
  }

  function hideEnemyHelperMeshes(actor) {
    if (!actor?.root) {
      return;
    }

    actor.root.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      const materials = Array.isArray(object.material)
        ? object.material.filter(Boolean)
        : object.material ? [object.material] : [];
      const isBoxLike = Boolean(object.geometry?.type?.match(/Box|Cube/i));
      const hasRedTransparentMaterial = materials.some((material) => (
        Boolean(material?.transparent) &&
        (material.opacity ?? 1) < 0.98 &&
        material.color &&
        material.color.r > material.color.g + 0.12 &&
        material.color.r > material.color.b + 0.12
      ));

      if (!isBoxLike && !hasRedTransparentMaterial) {
        return;
      }

      console.log("Enemy helper mesh hidden", {
        name: object.name || "(unnamed)",
        geometry: object.geometry?.type ?? "none"
      });
      object.visible = false;
    });
  }

  function showEnemyBodyColorAccent(actor, color) {
    if (!actor.body.userData.enemyBodyAccentPrepared) {
      actor.body.material = actor.body.material.clone();
      actor.body.material.transparent = true;
      actor.body.material.opacity = 0.72;
      actor.body.userData.enemyBodyAccentPrepared = true;
    }

    actor.body.material.color.set(color);
    actor.body.visible = false;
    actor.head.visible = false;
    actor.leftArm.visible = false;
    actor.rightArm.visible = false;
    actor.leftLeg.visible = false;
    actor.rightLeg.visible = false;
    actor.visual.visible = false;
  }

  function recolorMotusManAccent(actor, color) {
    if (!actor.motusManVisual) {
      console.warn("MotusMan accent recolor failed: missing visual");
      return false;
    }

    let recolorCount = 0;

    actor.motusManVisual.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      if (Array.isArray(object.material)) {
        let changed = false;
        object.material = object.material.map((material) => {
          if (!material?.color) {
            return material;
          }

          const isRedAccent =
            material.color.r > 0.3 &&
            material.color.r > material.color.g + 0.12 &&
            material.color.r > material.color.b + 0.12;
          if (!isRedAccent) {
            return material;
          }

          const nextMaterial = material.clone();
          nextMaterial.color.set(color);
          changed = true;
          recolorCount += 1;
          return nextMaterial;
        });

        if (!changed) {
          return;
        }
      } else if (object.material?.color) {
        const isRedAccent =
          object.material.color.r > 0.3 &&
          object.material.color.r > object.material.color.g + 0.12 &&
          object.material.color.r > object.material.color.b + 0.12;
        if (!isRedAccent) {
          return;
        }

        object.material = object.material.clone();
        object.material.color.set(color);
        recolorCount += 1;
      } else {
        return;
      }
    });

    if (recolorCount > 0) {
      return true;
    }

    console.warn("MotusMan accent recolor failed");
    return false;
  }

  function recolorEnemyMotusManBody(actor, color) {
    if (recolorMotusManAccent(actor, color)) {
      actor.visual.visible = false;
      console.log("Enemy body recolor success");
      return true;
    }

    console.warn("Enemy body recolor failed");
    showEnemyBodyColorAccent(actor, color);
    return false;
  }

  function attachMotusManToEnemy(actor, bodyColor = enemyMotusManBodyColor) {
    Promise.all([loadMotusManTemplate(), loadMotusManIdleClip()])
      .then(([, idleClip]) => {
        if (!actor.root.parent) {
          return;
        }

        const enemyVisual = cloneMotusManVisualSource();
        if (!enemyVisual) {
          console.warn("Enemy clone creation failed");
          return;
        }

        enemyVisual.name = "enemyMotusMan";
        enemyVisual.rotation.y = 0;
        actor.root.add(enemyVisual);
        actor.motusManVisual = enemyVisual;
        actor.characterMixer = new THREE.AnimationMixer(enemyVisual);
        actor.characterIdleAction = actor.characterMixer.clipAction(idleClip);
        actor.characterIdleAction.reset();
        actor.characterIdleAction.play();
        console.log("Enemy clone creation success");
        actor.visual.visible = false;
        logEnemyModelMeshes(actor);
        recolorEnemyMotusManBody(actor, bodyColor);
        hideEnemyHelperMeshes(actor);

        let diagnosticEnemyMesh = null;
        actor.motusManVisual.traverse((object) => {
          if (!diagnosticEnemyMesh && object.isMesh) {
            diagnosticEnemyMesh = object;
          }
        });
        const diagnosticMaterial = Array.isArray(diagnosticEnemyMesh?.material)
          ? diagnosticEnemyMesh.material.find(Boolean)
          : diagnosticEnemyMesh?.material;
        console.log("[DIAG] Enemy visual attached", {
          rootVisible: actor.root.visible,
          visualVisible: actor.motusManVisual.visible,
          meshVisible: diagnosticEnemyMesh?.visible ?? null,
          materialTransparent: diagnosticMaterial?.transparent ?? null,
          materialOpacity: diagnosticMaterial?.opacity ?? null
        });
      })
      .catch((error) => {
        console.warn("Enemy clone creation failed", error);
      });
  }

  function setRemoteVisualTransformDefaults(visual, crouchOffset, crouchScale) {
    if (!visual) {
      return;
    }

    visual.userData.basePositionY = visual.position.y;
    visual.userData.baseScaleX = visual.scale.x;
    visual.userData.baseScaleY = visual.scale.y;
    visual.userData.baseScaleZ = visual.scale.z;
    visual.userData.crouchOffset = crouchOffset;
    visual.userData.crouchScale = crouchScale;
  }

  function attachMotusManToRemotePlayer(actor, accentColor = remotePlayerMotusManAccentColor) {
    Promise.all([
      loadMotusManTemplate(),
      loadMotusManIdleClip(),
      loadMotusManCrouchIdleClip(),
      loadMotusManWalkAimClip().catch(() => null),
      loadMotusManJogAimClip().catch(() => null),
      loadMotusManJumpStartClip().catch(() => null),
      loadMotusManJumpAirClip().catch(() => null)
    ])
      .then(([, idleClip, crouchClip, walkClip, jogClip, jumpStartClip, jumpAirClip]) => {
        if (!actor?.root?.parent || remotePlayers.get(actor.playerId) !== actor) {
          return;
        }

        const remoteVisual = cloneMotusManVisualSource();
        if (!remoteVisual) {
          console.warn("Remote player character clone creation failed");
          actor.visual.visible = true;
          return;
        }

        remoteVisual.name = "remotePlayerMotusMan";
        remoteVisual.rotation.y = 0;
        remoteVisual.visible = true;
        actor.root.add(remoteVisual);
        actor.motusManVisual = remoteVisual;
        actor.characterMixer = new THREE.AnimationMixer(remoteVisual);
        actor.characterMixer.addEventListener('finished', (e) => {
          if (e.action === actor.characterJumpStartAction) {
            actor.remoteJumpStartFinished = true;
          }
        });
        actor.characterIdleAction = actor.characterMixer.clipAction(idleClip);
        actor.characterIdleAction.reset();
        actor.characterIdleAction.play();
        if (crouchClip) {
          actor.characterCrouchAction = actor.characterMixer.clipAction(crouchClip);
          actor.characterCrouchAction.reset();
          actor.characterCrouchAction.setLoop(THREE.LoopRepeat, Infinity);
        } else {
          actor.characterCrouchAction = null;
        }
        if (walkClip) {
          actor.characterWalkAction = actor.characterMixer.clipAction(walkClip);
          actor.characterWalkAction.reset();
          actor.characterWalkAction.setLoop(THREE.LoopRepeat, Infinity);
        } else {
          actor.characterWalkAction = null;
        }
        if (jogClip) {
          actor.characterJogAction = actor.characterMixer.clipAction(jogClip);
          actor.characterJogAction.reset();
          actor.characterJogAction.setLoop(THREE.LoopRepeat, Infinity);
        } else {
          actor.characterJogAction = null;
        }
        if (jumpStartClip) {
          actor.characterJumpStartAction = actor.characterMixer.clipAction(jumpStartClip);
          actor.characterJumpStartAction.reset();
          actor.characterJumpStartAction.setLoop(THREE.LoopOnce, 1);
        } else {
          actor.characterJumpStartAction = null;
        }
        if (jumpAirClip) {
          actor.characterJumpAirAction = actor.characterMixer.clipAction(jumpAirClip);
          actor.characterJumpAirAction.reset();
          actor.characterJumpAirAction.setLoop(THREE.LoopRepeat, Infinity);
        } else {
          actor.characterJumpAirAction = null;
        }
        actor.remoteCrouchActive = false;
        actor.remoteJumpActiveMode = "idle";
        actor.remoteJumpSequenceId = 0;
        actor.remoteJumpStartFinished = false;
        actor.characterMixer.timeScale = actor.isDead ? 0 : 1;
        setRemoteVisualTransformDefaults(remoteVisual, 0.18, 0.12);
        actor.visual.visible = false;
        recolorMotusManAccent(actor, accentColor);
        hideEnemyHelperMeshes(actor);

        actor.motusManVisual.traverse((object) => {
          if (!object.isMesh) {
            return;
          }

          object.userData.ownerType = "remotePlayer";
          object.userData.ignoreShotRay = true;
        });
      })
      .catch((error) => {
        console.warn("Remote player character clone creation failed", error);
        if (remotePlayers.get(actor?.playerId) === actor) {
          actor.visual.visible = true;
        }
      });
  }

  function createPlayer() {
    if (playerAnimationMixer) {
      playerAnimationMixer.stopAllAction();
      playerAnimationMixer = null;
    }
    playerIdleAction = null;
    playerCrouchIdleAction = null;
    playerWalkAction = null;
    playerJogAction = null;
    playerJumpStartAction = null;
    playerJumpAirAction = null;
    playerJumpStartFinished = false;
    playerCurrentAimIdleMode = "standing";

    const actor = buildBoxActor({
      body: 0x2a63ff,
      head: 0x8db7ff,
      limb: 0x1f3f8f
    });
    actor.visual.visible = startupReady;

    actor.root.position.copy(playerPosition);
    actor.root.isDead = false;

    for (const mesh of [
      actor.body,
      actor.head,
      actor.leftArm,
      actor.rightArm,
      actor.leftLeg,
      actor.rightLeg
    ]) {
      mesh.userData.ownerType = "player";
      mesh.userData.ignoreShotRay = true;
    }

    actor.head.name = "playerHead";
    actor.body.name = "playerBody";
    actor.leftArm.name = "playerLeftArm";
    actor.rightArm.name = "playerRightArm";
    actor.leftLeg.name = "playerLeftLeg";
    actor.rightLeg.name = "playerRightLeg";

    scene.add(actor.root);
    player = actor.root;
    playerActor = actor;
    createActorPvpHitboxes(actor, localPlayerId);
    updateActorPvpHitboxes(actor, isCrouching ? 1 : 0);
    attachMotusManToPlayer(actor);
    return player;
  }

  createPlayer();

  async function ensureStartupPlayerReadiness() {
    // Prevent placeholder player flash
    // Wait for player animation readiness before reveal
    setStartupPhase("Loading player", "Waiting for player model and animation actions.");
    const readiness = await playerVisualReadyPromise;

    if (!readiness?.visualReady || !playerActor?.motusManVisual) {
      throw new Error("Player visual setup did not finish.");
    }

    if (!readiness.standingAnimationReady || !playerIdleAction) {
      throw new Error("Standing aim animation is not ready.");
    }

    if (!readiness.crouchAnimationReady || !playerCrouchIdleAction) {
      throw new Error("Crouch aim animation is not ready.");
    }
  }

  function snapCameraBeforeStartupReveal() {
    // Hide camera settling until startup ready
    if (player) {
      player.position.copy(playerPosition);
      player.updateMatrixWorld(true);
    }

    updateLookDirection();
    updateMovementRotation(initialFacingDirection);
    forceNextCameraSnap = true;
    updateCamera(0.016);
    renderer.render(scene, camera);
  }

  async function runStartupSequence() {
    // Startup readiness gate
    startupSequenceStartTime = performance.now();
    startupLoadingShell.classList.remove("has-error");
    updateStartupLoadingProgress();
    setStartupPhase("Booting", "Preparing startup pipeline.");

    try {
      setStartupPhase("Loading player", "Preparing player startup assets.");
      const playerReadyTask = ensureStartupPlayerReadiness();
      setStartupPhase("Loading map", `Loading map: ${selectedMap}`);
      const mapReadyTask = loadSelectedMap(selectedMap, {
        requestSource: "startup sequence"
      }).then(() => {
        setStartupReadiness("mapReady", true, {
          statusMessage: "Loading map",
          debugMessage: `Map ready: ${selectedMap}`,
          logPhase: "map ready"
        });
      });

      await Promise.all([playerReadyTask, mapReadyTask]);

      setStartupPhase("Finalizing scene", "Applying first playable camera frame.");
      snapCameraBeforeStartupReveal();
      setStartupReadiness("cameraReady", true, {
        statusMessage: "Finalizing scene",
        debugMessage: "Camera snap complete for first playable frame.",
        logPhase: "camera ready"
      });
      if (!isStartupReadyFromDependencies()) {
        throw new Error("Startup dependencies did not all resolve before reveal.");
      }

      showMainMenu();
      startupReady = isStartupReadyFromDependencies();
      logStartupMilestone("startup complete", {
        dependenciesResolved: startupReady
      });

      if (!animationLoopStarted) {
        animate();
      }

      setStartupPhase("Ready", "Startup complete. Revealing game.");
      await resolveStartupLoadingOverlay();
      await showDeviceModeChooser();
      continueStartupAfterDeviceSelection();

      window.setTimeout(() => {
        preloadCityAssets().catch((error) => {
          console.warn("City asset preload failed:", error);
        });
      }, 0);
    } catch (error) {
      console.error("Startup readiness failed:", error);
      startupReady = false;
      showStartupLoadingError(
        "Startup failed: required player, crouch, map, or camera setup did not finish.",
        error
      );
    }
  }

  const skyLight = new THREE.HemisphereLight(0xf2e4ff, 0x6a7b59, 1.22);
  scene.add(skyLight);
  scene.add(mapGroup);

  const sun = new THREE.DirectionalLight(0xfff0de, 1.12);
  sun.position.set(14, 22, 8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -30;
  sun.shadow.camera.right = 30;
  sun.shadow.camera.top = 30;
  sun.shadow.camera.bottom = -30;
  scene.add(sun);

  function applyLightingProfile({
    background,
    fogColor = background,
    fogNear,
    fogFar,
    sunColor,
    sunIntensity,
    sunPosition,
    skyColor,
    groundColor,
    skyIntensity
  }) {
    activeLightingProfile = {
      background,
      fogColor,
      fogNear,
      fogFar,
      sunColor,
      sunIntensity,
      sunPosition: sunPosition.clone(),
      skyColor,
      groundColor,
      skyIntensity
    };
    scene.background = new THREE.Color(background);
    scene.fog = new THREE.Fog(fogColor, fogNear, fogFar);
    sun.color.set(sunColor);
    sun.intensity = sunIntensity;
    sun.position.copy(sunPosition);
    skyLight.color.set(skyColor);
    skyLight.groundColor.set(groundColor);
    skyLight.intensity = skyIntensity;
  }

  function registerObstacle(mesh, options = {}) {
    const {
      bulletCollision = true
    } = options;

    mesh.updateMatrixWorld(true);
    mesh.userData.collider = new THREE.Box3().setFromObject(mesh);
    mesh.userData.isWorldCollider = true;
    worldColliders.push(mesh);
    markWorldSurfaceForBulletImpacts(mesh, bulletCollision && mesh.userData.supportOnly !== true);

    if (bulletCollision) {
      bulletCollisionMeshes.push(mesh);
      registerBulletImpactTarget(mesh, mesh.userData.supportOnly !== true);
    }

    freezeStaticWorldObject(mesh);
  }

  function addMapMesh(mesh, options = {}) {
    const {
      collidable = false,
      bulletCollision = true,
      castShadow = true,
      receiveShadow = true
    } = options;

    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    mapGroup.add(mesh);

    if (collidable) {
      registerObstacle(mesh, { bulletCollision });
    } else {
      markWorldSurfaceForBulletImpacts(mesh, bulletCollision && mesh.userData.supportOnly !== true);
      if (bulletCollision) {
        bulletCollisionMeshes.push(mesh);
        registerBulletImpactTarget(mesh, mesh.userData.supportOnly !== true);
      }
      freezeStaticWorldObject(mesh);
    }

    return mesh;
  }

  function addStaticMapGroup(group) {
    mapGroup.add(group);
    group.updateMatrixWorld(true);

    group.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      const allowsBulletCollision = object.userData.registerBulletCollision !== false;
      markWorldSurfaceForBulletImpacts(object, allowsBulletCollision && object.userData.supportOnly !== true);

      if (allowsBulletCollision) {
        bulletCollisionMeshes.push(object);
        registerBulletImpactTarget(object, object.userData.supportOnly !== true);
      }

      freezeStaticWorldObject(object);
    });

    group.updateMatrix();
    group.matrixAutoUpdate = false;
    return group;
  }

  function markSharedMaterialResources(material) {
    if (!material) {
      return;
    }

    material.userData.sharedAssetResource = true;

    for (const key of sharedTextureKeys) {
      const texture = material[key];
      if (texture?.isTexture) {
        texture.userData.sharedAssetResource = true;
      }
    }
  }

  function disposeMaterialResources(material) {
    if (!material || material.userData.sharedAssetResource === true) {
      return;
    }

    for (const key of sharedTextureKeys) {
      const texture = material[key];
      if (texture?.isTexture && texture.userData.sharedAssetResource !== true) {
        texture.dispose();
      }
    }

    material.dispose();
  }

  function disposeDetachedSceneResources(root) {
    if (!root) {
      return;
    }

    root.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      if (object.geometry && object.geometry.userData.sharedAssetResource !== true) {
        object.geometry.dispose();
      }

      if (Array.isArray(object.material)) {
        for (const material of object.material) {
          disposeMaterialResources(material);
        }
      } else if (object.material) {
        disposeMaterialResources(object.material);
      }
    });
  }

  function markAssetTemplateShared(root) {
    root.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      object.castShadow = true;
      object.receiveShadow = true;
      object.frustumCulled = object.userData.disableFrustumCulling !== true;

      if (object.geometry) {
        object.geometry.userData.sharedAssetResource = true;
      }

      if (Array.isArray(object.material)) {
        for (const material of object.material) {
          markSharedMaterialResources(material);
        }
      } else {
        markSharedMaterialResources(object.material);
      }
    });

    return root;
  }

  async function loadCityAssetTemplate(url) {
    if (cityAssetTemplateCache.has(url)) {
      return cityAssetTemplateCache.get(url);
    }

    if (!cityAssetLoadCache.has(url)) {
      const loadPromise = new Promise((resolve, reject) => {
        gltfLoader.load(
          url,
          (gltf) => {
            const template = markAssetTemplateShared(gltf.scene || gltf.scenes[0]);

            cityAssetTemplateCache.set(url, template);
            cityAssetLoadCache.delete(url);
            resolve(template);
          },
          undefined,
          (error) => {
            cityAssetLoadCache.delete(url);
            reject(error);
          }
        );
      });

      cityAssetLoadCache.set(url, loadPromise);
    }

    return cityAssetLoadCache.get(url);
  }

  function cloneCityAssetTemplate(url) {
    const template = cityAssetTemplateCache.get(url);

    if (!template) {
      throw new Error(`City asset template not loaded: ${url}`);
    }

    const clone = template.clone(true);
    clone.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      object.castShadow = true;
      object.receiveShadow = true;
      object.frustumCulled = object.userData.disableFrustumCulling !== true;
    });

    return clone;
  }

  async function preloadCityAssets() {
    await Promise.all(Object.values(cityAssetPaths).map((url) => loadCityAssetTemplate(url)));
  }

  function applyStaticTransform(object, options = {}) {
    const {
      position = null,
      rotation = null,
      rotationY = 0,
      scale = 1
    } = options;

    if (position) {
      object.position.copy(position);
    }

    if (rotation) {
      object.rotation.set(rotation.x, rotation.y, rotation.z);
    } else {
      object.rotation.set(0, rotationY, 0);
    }

    if (typeof scale === "number") {
      object.scale.setScalar(scale);
    } else if (scale) {
      object.scale.copy(scale);
    }

    object.updateMatrix();
    object.updateMatrixWorld(true);
    object.matrixAutoUpdate = false;
    return object;
  }

  function createLocalOffset(origin, x, y, z, rotationY = 0) {
    return origin.clone().add(new THREE.Vector3(x, y, z).applyAxisAngle(worldUp, rotationY));
  }

  function addBoundsColliderFromObject(sourceObject, options = {}) {
    const {
      padding = 0.45,
      minHeight = 0.8
    } = options;
    const bounds = new THREE.Box3().setFromObject(sourceObject);

    if (bounds.isEmpty()) {
      return null;
    }

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);
    size.x = Math.max(0.5, size.x + padding);
    size.y = Math.max(minHeight, size.y + padding * 0.5);
    size.z = Math.max(0.5, size.z + padding);

    const collider = new THREE.Mesh(
      new THREE.BoxGeometry(size.x, size.y, size.z),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    collider.position.copy(center);
    collider.visible = false;
    collider.userData.registerBulletCollision = false;
    collider.userData.ignoreShotRay = true;
    addMapMesh(collider, {
      collidable: true,
      bulletCollision: false,
      castShadow: false,
      receiveShadow: false
    });

    return collider;
  }

  function createStaticBoxCollider({
    center,
    size,
    rotationY = 0,
    name = "",
    bulletCollision = true,
    supportOnly = false,
    metadata = null
  } = {}) {
    if (!center || !size) {
      return null;
    }

    const collider = new THREE.Mesh(
      new THREE.BoxGeometry(
        Math.max(0.1, size.x),
        Math.max(0.1, size.y),
        Math.max(0.1, size.z)
      ),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    if (name) {
      collider.name = name;
    }
    collider.position.copy(center);
    collider.rotation.y = rotationY;
    collider.visible = false;
    collider.userData.registerBulletCollision = bulletCollision;
    collider.userData.ignoreShotRay = !bulletCollision;
    if (supportOnly) {
      collider.userData.supportOnly = true;
    }
    if (metadata && typeof metadata === "object") {
      Object.assign(collider.userData, metadata);
    }

    addMapMesh(collider, {
      collidable: true,
      bulletCollision,
      castShadow: false,
      receiveShadow: false
    });
    return collider;
  }

  function createBoundsColliderFromObject(sourceObject, options = {}) {
    if (!sourceObject) {
      return null;
    }

    const {
      paddingX = 0,
      paddingY = 0,
      paddingZ = 0,
      minWidth = 0.5,
      minHeight = 0.8,
      minDepth = 0.5,
      centerYOffset = 0,
      name = "",
      bulletCollision = true,
      supportOnly = false,
      metadata = null
    } = options;
    const bounds = new THREE.Box3().setFromObject(sourceObject);

    if (bounds.isEmpty()) {
      return null;
    }

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);
    size.x = Math.max(minWidth, size.x + paddingX * 2);
    size.y = Math.max(minHeight, size.y + paddingY * 2);
    size.z = Math.max(minDepth, size.z + paddingZ * 2);
    center.y += centerYOffset;

    return createStaticBoxCollider({
      center,
      size,
      name,
      bulletCollision,
      supportOnly,
      metadata
    });
  }

  function createCityAssetInstance(url, options = {}) {
    const root = cloneCityAssetTemplate(url);
    const {
      collidable = false,
      colliderPadding = 0.45,
      colliderMinHeight = 0.8,
      bulletCollision = true,
      castShadow = true,
      receiveShadow = true
    } = options;

    root.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      object.castShadow = castShadow;
      object.receiveShadow = receiveShadow;
      object.userData.registerBulletCollision = bulletCollision;
    });

    applyStaticTransform(root, options);
    addStaticMapGroup(root);

    if (collidable) {
      addBoundsColliderFromObject(root, {
        padding: colliderPadding,
        minHeight: colliderMinHeight
      });
    }

    return root;
  }

  function createCityAssetLod(nearUrl, farUrl, options = {}) {
    const {
      lodDistance = 110,
      hideDistance = 220,
      collidable = false,
      colliderPadding = 0.55,
      colliderMinHeight = 1,
      bulletCollision = true,
      castShadow = true,
      receiveShadow = true
    } = options;
    const nearObject = cloneCityAssetTemplate(nearUrl);
    const farObject = cloneCityAssetTemplate(farUrl);

    for (const root of [nearObject, farObject]) {
      root.traverse((object) => {
        if (!object.isMesh) {
          return;
        }

        object.castShadow = castShadow;
        object.receiveShadow = receiveShadow;
        object.userData.registerBulletCollision = bulletCollision;
      });
    }

    const lod = createDecorativeLod(new THREE.Vector3(), [
      { object: nearObject, distance: 0 },
      { object: farObject, distance: lodDistance },
      { object: new THREE.Group(), distance: hideDistance }
    ]);
    applyStaticTransform(lod, options);
    addStaticMapGroup(lod);

    if (collidable) {
      addBoundsColliderFromObject(lod, {
        padding: colliderPadding,
        minHeight: colliderMinHeight
      });
    }

    return lod;
  }

  function buildProceduralCityChunks(sourceRoot, container) {
    sourceRoot.updateMatrixWorld(true);
    container.updateMatrixWorld(true);

    const sourceMeshes = [];
    sourceRoot.traverse((object) => {
      if (object.isMesh) {
        sourceMeshes.push(object);
      }
    });

    const sourceBounds = new THREE.Box3().setFromObject(sourceRoot);
    const chunkWorldSize = 96;
    const chunkMap = new Map();
    const meshBounds = new THREE.Box3();
    const meshCenter = new THREE.Vector3();
    function getChunkData(key) {
      let chunkData = chunkMap.get(key);
      if (chunkData) {
        return chunkData;
      }

      const group = new THREE.Group();
      group.matrixAutoUpdate = false;
      group.visible = true;
      container.add(group);

      chunkData = {
        group,
        bounds: new THREE.Box3().makeEmpty(),
        center: new THREE.Vector3(),
        radius: 0
      };
      chunkMap.set(key, chunkData);
      return chunkData;
    }

    for (const mesh of sourceMeshes) {
      meshBounds.setFromObject(mesh);
      if (meshBounds.isEmpty()) {
        continue;
      }

      meshBounds.getCenter(meshCenter);
      const chunkX = Math.floor((meshCenter.x - sourceBounds.min.x) / chunkWorldSize);
      const chunkZ = Math.floor((meshCenter.z - sourceBounds.min.z) / chunkWorldSize);
      const chunkData = getChunkData(`${chunkX}:${chunkZ}`);

      chunkData.group.attach(mesh);
      mesh.matrixAutoUpdate = false;
      mesh.receiveShadow = true;
      mesh.frustumCulled = true;
      mesh.userData.registerBulletCollision = false;

      if (!mesh.geometry.boundingBox) {
        mesh.geometry.computeBoundingBox();
      }
      if (!mesh.geometry.boundingSphere) {
        mesh.geometry.computeBoundingSphere();
      }

      chunkData.bounds.union(meshBounds);
    }

    const chunks = [];
    for (const chunkData of chunkMap.values()) {
      chunkData.bounds.getCenter(chunkData.center);
      chunkData.radius = chunkData.center.distanceTo(chunkData.bounds.max);
      chunkData.group.updateMatrix();
      chunkData.group.matrixAutoUpdate = false;
      chunks.push(chunkData);
    }

    proceduralCityChunkState.chunks = chunks;
    proceduralCityChunkState.activeChunkCount = -1;
    console.log("City chunks created:", chunks.length);
    return chunks.length;
  }

  function registerProceduralCityNonGroundPlayerColliders(sourceRoot, roadSurfaceY) {
    const meshBounds = new THREE.Box3();
    const meshSize = new THREE.Vector3();
    const meshCenter = new THREE.Vector3();
    let registeredCount = 0;
    let skippedGroundLikeCount = 0;

    sourceRoot.updateMatrixWorld(true);

    sourceRoot.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      meshBounds.setFromObject(object);
      if (meshBounds.isEmpty()) {
        return;
      }

      meshBounds.getSize(meshSize);
      if (Math.max(meshSize.x, meshSize.y, meshSize.z) < 0.18) {
        return;
      }

      const isGroundLikeSurface =
        meshBounds.min.y <= roadSurfaceY + 0.35 &&
        meshSize.y <= 0.65 &&
        meshSize.x >= 2.5 &&
        meshSize.z >= 2.5;

      if (isGroundLikeSurface) {
        // Ground excluded from wall blocking
        skippedGroundLikeCount += 1;
        return;
      }

      meshBounds.getCenter(meshCenter);
      const collider = new THREE.Mesh(
        new THREE.BoxGeometry(
          Math.max(0.08, meshSize.x),
          Math.max(0.08, meshSize.y),
          Math.max(0.08, meshSize.z)
        ),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      collider.name = `procedural-city-collider-${registeredCount}`;
      collider.position.copy(meshCenter);
      collider.visible = false;
      collider.userData.registerBulletCollision = false;
      collider.userData.ignoreShotRay = true;
      collider.userData.proceduralCityPlayerCollider = true;
      collider.userData.proceduralCityColliderId = object.name || collider.name;

      // Procedural City non-ground player collision fix
      // Register Procedural City solid objects for player collision only
      addMapMesh(collider, {
        collidable: true,
        bulletCollision: false,
        castShadow: false,
        receiveShadow: false
      });
      registeredCount += 1;
    });

    proceduralCityCollisionState.derivedColliderCount = registeredCount;
    proceduralCityCollisionState.lastBlockedColliderId = "";
    console.log(
      "Procedural City non-ground colliders registered:",
      registeredCount,
      "ground-like skipped:",
      skippedGroundLikeCount
    );
    return registeredCount;
  }

  function updateProceduralCityChunkVisibility(forceLog = false) {
    if (
      !proceduralCityChunkState.chunks.length ||
      (currentLoadedMapId !== "proceduralCity" && selectedMap !== "proceduralCity") ||
      !player
    ) {
      return;
    }

    proceduralCityChunkFrustumMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    proceduralCityChunkFrustum.setFromProjectionMatrix(proceduralCityChunkFrustumMatrix);

    const nearKeepDistanceSq = proceduralCityChunkState.nearKeepDistance * proceduralCityChunkState.nearKeepDistance;
    const visibilityDistanceSq = proceduralCityChunkState.visibilityDistance * proceduralCityChunkState.visibilityDistance;
    let activeChunkCount = 0;

    for (const chunkData of proceduralCityChunkState.chunks) {
      const distanceSq = player.position.distanceToSquared(chunkData.center);
      let isVisible = false;

      if (distanceSq <= nearKeepDistanceSq) {
        isVisible = true;
      } else if (distanceSq <= visibilityDistanceSq) {
        proceduralCityChunkSphere.center.copy(chunkData.center);
        proceduralCityChunkSphere.radius = chunkData.radius;
        isVisible = proceduralCityChunkFrustum.intersectsSphere(proceduralCityChunkSphere);
      }

      if (chunkData.group.visible !== isVisible) {
        chunkData.group.visible = isVisible;
      }

      if (isVisible) {
        activeChunkCount += 1;
      }
    }

    if (forceLog || activeChunkCount !== proceduralCityChunkState.activeChunkCount) {
      console.log("Active chunks:", activeChunkCount);
    }
    proceduralCityChunkState.activeChunkCount = activeChunkCount;
  }

  function useProceduralCitySolidZoneCollision() {
    return proceduralCityCollisionState.enabled &&
      (currentLoadedMapId === "proceduralCity" || selectedMap === "proceduralCity");
  }

  function getProceduralCitySolidZone(position, halfExtents = playerHalfExtents) {
    if (!useProceduralCitySolidZoneCollision()) {
      return null;
    }

    const horizontalPadding = proceduralCityCollisionState.zonePadding + proceduralCityCollisionState.playerRadius;
    const paddedMinX = position.x - halfExtents.x - horizontalPadding;
    const paddedMaxX = position.x + halfExtents.x + horizontalPadding;
    const paddedMinY = position.y;
    const paddedMaxY = position.y + halfExtents.y;
    const paddedMinZ = position.z - halfExtents.z - horizontalPadding;
    const paddedMaxZ = position.z + halfExtents.z + horizontalPadding;

    for (const zone of proceduralCityCollisionState.solidZones) {
      if (
        paddedMaxX > zone.minX &&
        paddedMinX < zone.maxX &&
        paddedMaxY > zone.minY &&
        paddedMinY < zone.maxY &&
        paddedMaxZ > zone.minZ &&
        paddedMinZ < zone.maxZ
      ) {
        return zone;
      }
    }

    return null;
  }

  function createSeededRandom(seed) {
    let state = seed >>> 0;
    return () => {
      state = (1664525 * state + 1013904223) >>> 0;
      return state / 4294967295;
    };
  }

  let blossomPetalGeometry = null;

  function getBlossomPetalGeometry() {
    if (blossomPetalGeometry) {
      return blossomPetalGeometry;
    }

    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, -0.26);
    petalShape.bezierCurveTo(0.2, -0.18, 0.25, 0.05, 0.08, 0.26);
    petalShape.bezierCurveTo(0.03, 0.34, 0.01, 0.4, 0, 0.44);
    petalShape.bezierCurveTo(-0.01, 0.4, -0.03, 0.34, -0.08, 0.26);
    petalShape.bezierCurveTo(-0.25, 0.05, -0.2, -0.18, 0, -0.26);

    blossomPetalGeometry = new THREE.ShapeGeometry(petalShape, 12);
    blossomPetalGeometry.center();
    return blossomPetalGeometry;
  }

  function writeBlossomClusterInstances(instancedMesh, dummy, center, count, random, options, startIndex = 0) {
    const spread = options.spread;
    const minScale = options.minScale;
    const maxScale = options.maxScale;

    for (let index = 0; index < count; index += 1) {
      const theta = random() * Math.PI * 2;
      const radius = spread * (0.18 + random() * 0.82);
      const verticalOffset = (random() - 0.28) * spread * 1.25;
      dummy.position.copy(center).add(new THREE.Vector3(
        Math.cos(theta) * radius,
        verticalOffset,
        Math.sin(theta) * radius
      ));
      dummy.rotation.set(
        (random() - 0.5) * 1.45,
        random() * Math.PI * 2,
        (random() - 0.5) * 1.45
      );

      const scale = minScale + random() * (maxScale - minScale);
      dummy.scale.set(
        scale * (0.7 + random() * 0.35),
        scale * (1.0 + random() * 0.28),
        scale
      );
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(startIndex, dummy.matrix);
      startIndex += 1;
    }

    return startIndex;
  }

  function addBlossomRingAnchors(target, center, radius, yOffset, count, random, verticalScale = 0.18) {
    for (let index = 0; index < count; index += 1) {
      const angle = (index / count) * Math.PI * 2 + (random() - 0.5) * 0.28;
      const radialScale = 0.78 + random() * 0.32;
      target.push(center.clone().add(new THREE.Vector3(
        Math.cos(angle) * radius * radialScale,
        yOffset + (random() - 0.2) * radius * verticalScale,
        Math.sin(angle) * radius * radialScale
      )));
    }
  }

  function finalizeInstancedDecorativeMesh(mesh) {
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingBox();
    mesh.computeBoundingSphere();
    mesh.frustumCulled = true;
    mesh.userData.registerBulletCollision = false;
    return mesh;
  }

  function createDecorativeLod(position, levels) {
    const lod = new THREE.LOD();
    lod.position.copy(position);
    lod.autoUpdate = true;

    for (const level of levels) {
      level.object.traverse((object) => {
        if (!object.isMesh) {
          return;
        }

        object.frustumCulled = object.userData.disableFrustumCulling !== true;

        if (object.isInstancedMesh) {
          object.computeBoundingBox();
          object.computeBoundingSphere();
        } else if (object.geometry) {
          object.geometry.computeBoundingBox();
          object.geometry.computeBoundingSphere();
        }
      });
      lod.addLevel(level.object, level.distance);
    }

    lod.updateMatrix();
    lod.matrixAutoUpdate = false;
    return lod;
  }

  function createBlossomCanopyLevel({
    blossomClusterCenters,
    canopyRadius,
    trunkHeight,
    randomSeed,
    blossomMaterial,
    blossomHighlightMaterial,
    fallenPetalMaterial,
    clusterStride,
    petalsPerClusterMin,
    petalsPerClusterMax,
    highlightPerClusterMin,
    highlightPerClusterMax,
    clusterSpreadMin,
    clusterSpreadMax,
    petalScaleMin,
    petalScaleMax,
    includeHighlights = true,
    fallenPetalCount = 0
  }) {
    const canopyGroup = new THREE.Group();
    const random = createSeededRandom(randomSeed);
    const filteredCenters = blossomClusterCenters.filter((_, index) => index % clusterStride === 0);
    const blossomDummy = new THREE.Object3D();
    const petalGeometry = getBlossomPetalGeometry();

    const blossomMesh = new THREE.InstancedMesh(
      petalGeometry,
      blossomMaterial,
      filteredCenters.length * petalsPerClusterMax
    );
    blossomMesh.material.side = THREE.DoubleSide;
    blossomMesh.castShadow = true;
    blossomMesh.receiveShadow = false;
    canopyGroup.add(blossomMesh);

    let blossomHighlightMesh = null;
    if (includeHighlights) {
      blossomHighlightMesh = new THREE.InstancedMesh(
        petalGeometry,
        blossomHighlightMaterial,
        filteredCenters.length * highlightPerClusterMax
      );
      blossomHighlightMesh.material.side = THREE.DoubleSide;
      blossomHighlightMesh.castShadow = true;
      blossomHighlightMesh.receiveShadow = false;
      canopyGroup.add(blossomHighlightMesh);
    }

    let blossomIndex = 0;
    let blossomHighlightIndex = 0;

    for (const clusterAnchor of filteredCenters) {
      const clusterCenter = clusterAnchor.clone().add(new THREE.Vector3(
        (random() - 0.5) * canopyRadius * 0.18,
        (random() - 0.08) * canopyRadius * 0.12,
        (random() - 0.5) * canopyRadius * 0.18
      ));
      clusterCenter.y = Math.max(clusterCenter.y, trunkHeight * 0.7);

      blossomIndex = writeBlossomClusterInstances(
        blossomMesh,
        blossomDummy,
        clusterCenter,
        petalsPerClusterMin + Math.floor(random() * (petalsPerClusterMax - petalsPerClusterMin + 1)),
        random,
        {
          spread: canopyRadius * (clusterSpreadMin + random() * (clusterSpreadMax - clusterSpreadMin)),
          minScale: petalScaleMin,
          maxScale: petalScaleMax
        },
        blossomIndex
      );

      if (blossomHighlightMesh) {
        blossomHighlightIndex = writeBlossomClusterInstances(
          blossomHighlightMesh,
          blossomDummy,
          clusterCenter.clone().add(new THREE.Vector3(
            (random() - 0.5) * 0.16,
            random() * 0.2,
            (random() - 0.5) * 0.16
          )),
          highlightPerClusterMin + Math.floor(random() * (highlightPerClusterMax - highlightPerClusterMin + 1)),
          random,
          {
            spread: canopyRadius * (clusterSpreadMin * 0.6 + random() * Math.max(0.01, (clusterSpreadMax - clusterSpreadMin) * 0.35)),
            minScale: petalScaleMin * 0.65,
            maxScale: petalScaleMax * 0.7
          },
          blossomHighlightIndex
        );
      }
    }

    blossomMesh.count = blossomIndex;
    finalizeInstancedDecorativeMesh(blossomMesh);

    if (blossomHighlightMesh) {
      blossomHighlightMesh.count = blossomHighlightIndex;
      finalizeInstancedDecorativeMesh(blossomHighlightMesh);
    }

    if (fallenPetalCount > 0) {
      const fallenPetals = new THREE.InstancedMesh(
        new THREE.CircleGeometry(0.07, 5),
        fallenPetalMaterial,
        fallenPetalCount
      );
      fallenPetals.castShadow = false;
      fallenPetals.receiveShadow = true;
      canopyGroup.add(fallenPetals);

      for (let index = 0; index < fallenPetalCount; index += 1) {
        const angle = random() * Math.PI * 2;
        const radius = 1.3 + random() * canopyRadius * 1.28;
        blossomDummy.position.set(Math.cos(angle) * radius, 0.02, Math.sin(angle) * radius);
        blossomDummy.rotation.set(-Math.PI / 2, random() * Math.PI * 2, 0);
        blossomDummy.scale.setScalar(0.55 + random() * 0.55);
        blossomDummy.updateMatrix();
        fallenPetals.setMatrixAt(index, blossomDummy.matrix);
      }

      finalizeInstancedDecorativeMesh(fallenPetals);
    }

    return canopyGroup;
  }

  function createBlossomBranchLevel({
    trunkCurve,
    trunkHeight,
    trunkRadius,
    canopyRadius,
    barkMaterial,
    randomSeed,
    branchCount,
    twigCount,
    branchSegments,
    twigSegments,
    collectCanopyAnchors = false
  }) {
    const branchGroup = new THREE.Group();
    const random = createSeededRandom(randomSeed);
    const canopyAnchors = collectCanopyAnchors
      ? [
        trunkCurve.getPointAt(0.82),
        trunkCurve.getPointAt(0.9),
        trunkCurve.getPointAt(0.97)
      ]
      : [];

    for (let index = 0; index < branchCount; index += 1) {
      const branchT = branchCount === 1
        ? 0.74
        : 0.62 + (index / Math.max(1, branchCount - 1)) * 0.23;
      const branchStart = trunkCurve.getPointAt(branchT);
      const angle = index * ((Math.PI * 2) / branchCount) + random() * 0.45;
      const branchLength = canopyRadius * (0.94 + random() * 0.24);
      const branchEnd = new THREE.Vector3(
        Math.cos(angle) * branchLength,
        branchStart.y + canopyRadius * (0.38 + random() * 0.16),
        Math.sin(angle) * branchLength
      );
      const branchMid = branchStart.clone().lerp(branchEnd, 0.45);
      branchMid.y += canopyRadius * (0.24 + random() * 0.14);

      const branchCurve = new THREE.CatmullRomCurve3([branchStart, branchMid, branchEnd]);
      const branch = new THREE.Mesh(
        new THREE.TubeGeometry(
          branchCurve,
          branchSegments,
          trunkRadius * (0.18 + random() * 0.05),
          Math.max(5, Math.round(branchSegments * 0.35)),
          false
        ),
        barkMaterial
      );
      branch.castShadow = true;
      branch.receiveShadow = true;
      branch.userData.registerBulletCollision = true;
      branchGroup.add(branch);

      if (collectCanopyAnchors) {
        canopyAnchors.push(
          branchCurve.getPointAt(0.6),
          branchCurve.getPointAt(0.8),
          branchEnd.clone()
        );
      }

      for (let twigIndex = 0; twigIndex < twigCount; twigIndex += 1) {
        const twigStart = branchCurve.getPointAt(0.62 + twigIndex * 0.18);
        const twigAngle = angle + (twigIndex === 0 ? -0.48 : 0.48) + (random() - 0.5) * 0.28;
        const twigLength = canopyRadius * (0.32 + random() * 0.12);
        const twigEnd = twigStart.clone().add(new THREE.Vector3(
          Math.cos(twigAngle) * twigLength,
          canopyRadius * (0.14 + random() * 0.08),
          Math.sin(twigAngle) * twigLength
        ));
        const twigMid = twigStart.clone().lerp(twigEnd, 0.5);
        twigMid.y += canopyRadius * (0.06 + random() * 0.05);

        const twigCurve = new THREE.CatmullRomCurve3([twigStart, twigMid, twigEnd]);
        const twig = new THREE.Mesh(
          new THREE.TubeGeometry(
            twigCurve,
            twigSegments,
            trunkRadius * (0.075 + random() * 0.02),
            Math.max(4, Math.round(twigSegments * 0.35)),
            false
          ),
          barkMaterial
        );
        twig.castShadow = true;
        twig.receiveShadow = true;
        twig.userData.registerBulletCollision = true;
        branchGroup.add(twig);

        if (collectCanopyAnchors) {
          canopyAnchors.push(
            twigCurve.getPointAt(0.7),
            twigEnd.clone()
          );
        }
      }
    }

    return { group: branchGroup, canopyAnchors };
  }

  function setMapSpawns(playerSpawn, spawns) {
    const activePlayerSpawn =
      ((cameraCustomizationPreviewMode || isGridShotActive || isTrackingBallActive || isJiggleTrainingActive) &&
        temporaryPlayerSpawnOverride &&
        selectedMap === settingsPreviewMapId)
        || (isMediumCombatActive &&
          temporaryPlayerSpawnOverride &&
          selectedMap === ironworksYardMapId)
        ? temporaryPlayerSpawnOverride
        : playerSpawn;

    // Temporary Industrial Dome spawn override for camera preview
    currentPlayerSpawn.copy(activePlayerSpawn);
    playerPosition.copy(activePlayerSpawn);
    enemySpawnPoints = spawns.map((spawn) => new THREE.Vector3(spawn.x, 0, spawn.z));

    if (player) {
      player.position.copy(playerPosition);
    }
  }

  function clearCurrentMap() {
    resetWaveState({ detachExisting: true });

    for (const pickup of [...healthPickups]) {
      removeHealthPickup(pickup, {
        suppressOnlineLog: true
      });
    }

    for (const impactMark of [...impactMarks]) {
      removeImpactMark(impactMark);
    }

    obstacleColliders.length = 0;
    bulletCollisionMeshes.length = 0;
    bulletImpactTargets.length = 0;
    staticWorldObjects.length = 0;
    effectQualityControlledObjects.length = 0;
    visibleStaticWorldObjects = 0;
    activeBlossomPetalSystem = null;
    activeLightingProfile = null;
    proceduralCityChunkState.chunks.length = 0;
    proceduralCityChunkState.activeChunkCount = -1;
    proceduralCityCollisionState.enabled = false;
    proceduralCityCollisionState.solidZones.length = 0;
    proceduralCityCollisionState.derivedColliderCount = 0;
    proceduralCityCollisionState.lastBlockedZoneId = "";
    proceduralCityCollisionState.lastBlockedColliderId = "";

    mapGroup.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      if (object.geometry && object.geometry.userData.sharedAssetResource !== true) {
        object.geometry.dispose();
      }

      if (Array.isArray(object.material)) {
        for (const material of object.material) {
          disposeMaterialResources(material);
        }
      } else if (object.material) {
        disposeMaterialResources(object.material);
      }
    });

    mapGroup.clear();
  }

  function buildDefaultVillage() {
    applyLightingProfile({
      background: 0xc8bfe6,
      fogColor: 0xe2d7ef,
      fogNear: 25,
      fogFar: 100,
      sunColor: 0xfff0de,
      sunIntensity: 1.12,
      sunPosition: new THREE.Vector3(14, 22, 8),
      skyColor: 0xf2e4ff,
      groundColor: 0x6a7b59,
      skyIntensity: 1.22
    });
    setMapSpawns(
      new THREE.Vector3(0, 0, 10),
      [
        new THREE.Vector3(-8, 0, -10),
        new THREE.Vector3(10, 0, -12),
        new THREE.Vector3(-14, 0, 6),
        new THREE.Vector3(12, 0, 10)
      ]
    );

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0x2f8a3a, roughness: 0.98 })
    );
    ground.rotation.x = -Math.PI / 2;
    addMapMesh(ground, { castShadow: false, receiveShadow: true });

    const road = new THREE.Mesh(
      new THREE.BoxGeometry(9, 0.06, 36),
      new THREE.MeshStandardMaterial({ color: 0x535863, roughness: 0.94 })
    );
    road.position.set(0, 0.03, 0);
    addMapMesh(road, { castShadow: false, receiveShadow: true });

    const buildingSpecs = [
      { x: -13, z: -6, w: 4, h: 6, d: 5, color: 0x7f8892 },
      { x: 14, z: -2, w: 5, h: 8, d: 4, color: 0x8f6a4b },
      { x: 3, z: -18, w: 6, h: 5, d: 6, color: 0x708b5c },
      { x: -6, z: 12, w: 3.5, h: 7, d: 3.5, color: 0x8a8173 }
    ];

    for (const spec of buildingSpecs) {
      const building = new THREE.Mesh(
        new THREE.BoxGeometry(spec.w, spec.h, spec.d),
        new THREE.MeshStandardMaterial({ color: spec.color, roughness: 0.88 })
      );
      building.position.set(spec.x, spec.h / 2, spec.z);
      addMapMesh(building, { collidable: true });

      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(Math.max(spec.w, spec.d) * 0.55, 2.2, 4),
        new THREE.MeshStandardMaterial({ color: 0x5f3b2c, roughness: 0.75 })
      );
      roof.position.set(spec.x, spec.h + 1.1, spec.z);
      roof.rotation.y = Math.PI * 0.25;
      addMapMesh(roof);
    }

    const crateSpecs = [
      { x: -3, z: -8, w: 1.8, h: 1.4, d: 1.8, color: 0x6f7a82 },
      { x: 8, z: -12, w: 2.4, h: 1.2, d: 1.6, color: 0x6d583f },
      { x: 12, z: 8, w: 1.5, h: 2.1, d: 1.5, color: 0x617447 },
      { x: -14, z: 9, w: 2.2, h: 1.3, d: 2.2, color: 0x7b7267 },
      { x: 5, z: 4, w: 3.2, h: 1.1, d: 1.4, color: 0x80664c }
    ];

    for (const spec of crateSpecs) {
      const obstacle = new THREE.Mesh(
        new THREE.BoxGeometry(spec.w, spec.h, spec.d),
        new THREE.MeshStandardMaterial({ color: spec.color, roughness: 0.92 })
      );
      obstacle.position.set(spec.x, spec.h / 2, spec.z);
      addMapMesh(obstacle, { collidable: true });
    }

    const treePositions = [
      [-18, -10], [-12, 10], [11, -16], [18, 12], [-20, 16]
    ];
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x6b4426, roughness: 1 });
    const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x2f7a36, roughness: 0.9 });
    const villageTreeTrunkGeometry = new THREE.CylinderGeometry(0.32, 0.42, 2.8, 12);
    const villageTreeCrownHighGeometry = new THREE.ConeGeometry(1.7, 4.3, 12);
    const villageTreeCrownMediumGeometry = new THREE.ConeGeometry(1.65, 4.1, 9);
    const villageTreeCrownFarGeometry = new THREE.ConeGeometry(1.45, 3.7, 6);

    for (const [x, z] of treePositions) {
      const trunk = new THREE.Mesh(villageTreeTrunkGeometry, trunkMaterial);
      trunk.position.set(x, 1.4, z);
      addMapMesh(trunk, { collidable: true });

      const crownLod = createDecorativeLod(new THREE.Vector3(x, 4.2, z), [
        {
          object: (() => {
            const crown = new THREE.Mesh(villageTreeCrownHighGeometry, leafMaterial);
            crown.receiveShadow = false;
            return crown;
          })(),
          distance: 0
        },
        {
          object: (() => {
            const crown = new THREE.Mesh(villageTreeCrownMediumGeometry, leafMaterial);
            crown.receiveShadow = false;
            return crown;
          })(),
          distance: 52
        },
        {
          object: (() => {
            const crown = new THREE.Mesh(villageTreeCrownFarGeometry, leafMaterial);
            crown.receiveShadow = false;
            return crown;
          })(),
          distance: 96
        },
        {
          object: new THREE.Group(),
          distance: 142
        }
      ]);
      addStaticMapGroup(crownLod);
    }
  }

  function buildIndustrialDome() {
    applyLightingProfile({
      background: 0x6d678d,
      fogColor: 0x948aaf,
      fogNear: 22,
      fogFar: 85,
      sunColor: 0xffdfcb,
      sunIntensity: 1.1,
      sunPosition: new THREE.Vector3(14, 22, 8),
      skyColor: 0xe6dcf6,
      groundColor: 0x343846,
      skyIntensity: 1.16
    });
    setMapSpawns(
      new THREE.Vector3(0, 0, 16),
      [
        new THREE.Vector3(-13, 0, -10),
        new THREE.Vector3(13, 0, -10),
        new THREE.Vector3(-17, 0, 8),
        new THREE.Vector3(17, 0, 8),
        new THREE.Vector3(0, 0, -18)
      ]
    );

    const platformMaterial = new THREE.MeshStandardMaterial({ color: 0x434a54, roughness: 0.78, metalness: 0.24 });
    const steelMaterial = new THREE.MeshStandardMaterial({ color: 0x67717d, roughness: 0.54, metalness: 0.58 });
    const darkSteelMaterial = new THREE.MeshStandardMaterial({ color: 0x262d36, roughness: 0.62, metalness: 0.42 });
    const accentMaterial = new THREE.MeshStandardMaterial({ color: 0x41576b, roughness: 0.48, metalness: 0.42 });
    const pipeMaterial = new THREE.MeshStandardMaterial({ color: 0x7c8792, roughness: 0.44, metalness: 0.68 });
    const pillarGeometry = new THREE.CylinderGeometry(0.9, 1.05, 7.5, 18);
    const pillarCapHighGeometry = new THREE.SphereGeometry(1.05, 18, 12);
    const pillarCapLowGeometry = new THREE.SphereGeometry(1.05, 10, 8);
    const archHighGeometry = new THREE.TorusGeometry(24.2, 0.16, 10, 72, Math.PI);
    const archLowGeometry = new THREE.TorusGeometry(24.2, 0.16, 8, 28, Math.PI);
    const sidePipeHighGeometry = new THREE.CylinderGeometry(0.22, 0.22, 5.6, 12);
    const sidePipeLowGeometry = new THREE.CylinderGeometry(0.22, 0.22, 5.6, 6);
    const ringPipeHighGeometry = new THREE.CylinderGeometry(0.2, 0.2, 8.6, 12);
    const ringPipeLowGeometry = new THREE.CylinderGeometry(0.2, 0.2, 8.6, 6);
    const tankCapHighGeometry = new THREE.SphereGeometry(1.38, 18, 12);
    const tankCapLowGeometry = new THREE.SphereGeometry(1.38, 10, 8);

    const foundation = new THREE.Mesh(
      new THREE.CylinderGeometry(26, 26, 1.6, 48),
      darkSteelMaterial
    );
    foundation.position.y = -0.8;
    addMapMesh(foundation, { castShadow: false, receiveShadow: true });

    const combatFloor = new THREE.Mesh(
      new THREE.CylinderGeometry(24.2, 24.2, 0.08, 48),
      platformMaterial
    );
    combatFloor.position.y = 0.04;
    addMapMesh(combatFloor, { bulletCollision: true, castShadow: false, receiveShadow: true });

    const centralPlatform = new THREE.Mesh(
      new THREE.CylinderGeometry(6.8, 6.8, 0.9, 40),
      accentMaterial
    );
    centralPlatform.position.y = 0.45;
    addMapMesh(centralPlatform, { collidable: true });

    const centralRing = new THREE.Mesh(
      new THREE.TorusGeometry(8.9, 0.3, 12, 48),
      steelMaterial
    );
    centralRing.rotation.x = Math.PI / 2;
    centralRing.position.y = 0.62;
    addMapMesh(centralRing, { castShadow: false, receiveShadow: true });

    const topRing = new THREE.Mesh(
      new THREE.TorusGeometry(25.8, 0.38, 12, 72),
      steelMaterial
    );
    topRing.rotation.x = Math.PI / 2;
    topRing.position.y = 8.2;
    addMapMesh(topRing, { castShadow: false, receiveShadow: true });

    const lowerRing = new THREE.Mesh(
      new THREE.TorusGeometry(24.8, 0.28, 12, 72),
      accentMaterial
    );
    lowerRing.rotation.x = Math.PI / 2;
    lowerRing.position.y = 1.4;
    addMapMesh(lowerRing, { castShadow: false, receiveShadow: true });

    const wallShell = new THREE.Mesh(
      new THREE.CylinderGeometry(25.6, 25.6, 8.4, 64, 1, true),
      new THREE.MeshStandardMaterial({
        color: 0x232a34,
        roughness: 0.72,
        metalness: 0.46,
        side: THREE.DoubleSide
      })
    );
    wallShell.position.y = 4.4;
    addMapMesh(wallShell, { castShadow: false, receiveShadow: true });

    for (let index = 0; index < 16; index += 1) {
      const angle = (index / 16) * Math.PI * 2;
      const wallCollider = new THREE.Mesh(
        new THREE.BoxGeometry(9, 6.6, 1.6),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      wallCollider.position.set(Math.cos(angle) * 24.8, 3.3, Math.sin(angle) * 24.8);
      wallCollider.rotation.y = -angle;
      wallCollider.visible = false;
      addMapMesh(wallCollider, {
        collidable: true,
        bulletCollision: false,
        castShadow: false,
        receiveShadow: false
      });
    }

    for (let index = 0; index < 8; index += 1) {
      const angle = (index / 8) * Math.PI * 2;
      const pillar = new THREE.Mesh(
        pillarGeometry,
        steelMaterial
      );
      pillar.position.set(Math.cos(angle) * 18.5, 3.75, Math.sin(angle) * 18.5);
      addMapMesh(pillar, { collidable: true });

      const pillarCapLod = createDecorativeLod(
        new THREE.Vector3(Math.cos(angle) * 18.5, 7.7, Math.sin(angle) * 18.5),
        [
          {
            object: (() => {
              const cap = new THREE.Mesh(pillarCapHighGeometry, darkSteelMaterial);
              cap.scale.y = 0.55;
              return cap;
            })(),
            distance: 0
          },
          {
            object: (() => {
              const cap = new THREE.Mesh(pillarCapLowGeometry, darkSteelMaterial);
              cap.scale.y = 0.55;
              return cap;
            })(),
            distance: 64
          },
          {
            object: new THREE.Group(),
            distance: 118
          }
        ]
      );
      addStaticMapGroup(pillarCapLod);
    }

    const archAngles = [0, Math.PI / 2, Math.PI / 4, -Math.PI / 4];
    for (const angle of archAngles) {
      const archMaterial = new THREE.MeshStandardMaterial({ color: 0x5d6874, roughness: 0.36, metalness: 0.72 });
      const archLod = createDecorativeLod(new THREE.Vector3(0, 8.2, 0), [
        {
          object: (() => {
            const arch = new THREE.Mesh(archHighGeometry, archMaterial);
            arch.castShadow = false;
            arch.receiveShadow = true;
            arch.rotation.z = Math.PI / 2;
            arch.rotation.y = angle;
            return arch;
          })(),
          distance: 0
        },
        {
          object: (() => {
            const arch = new THREE.Mesh(archLowGeometry, archMaterial);
            arch.castShadow = false;
            arch.receiveShadow = true;
            arch.rotation.z = Math.PI / 2;
            arch.rotation.y = angle;
            return arch;
          })(),
          distance: 82
        },
        {
          object: new THREE.Group(),
          distance: 132
        }
      ]);
      addStaticMapGroup(archLod);
    }

    const flankPlatforms = [
      { x: -11, z: 0, rot: 0 },
      { x: 11, z: 0, rot: Math.PI }
    ];

    for (const platform of flankPlatforms) {
      const semiPlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(5.8, 5.8, 1.2, 36, 1, false, Math.PI * 0.5, Math.PI),
        accentMaterial
      );
      semiPlatform.position.set(platform.x, 0.7, platform.z);
      semiPlatform.rotation.y = platform.rot;
      addMapMesh(semiPlatform, { collidable: true });

      const ramp = new THREE.Mesh(
        new THREE.BoxGeometry(4.4, 0.8, 8),
        darkSteelMaterial
      );
      ramp.position.set(platform.x + Math.cos(platform.rot) * 4.4, 0.44, 0);
      ramp.rotation.z = platform.rot === 0 ? -0.18 : 0.18;
      addMapMesh(ramp, { collidable: true });
    }

    const coverPositions = [
      { x: 0, y: 1.1, z: -8.5, rotY: 0 },
      { x: 0, y: 1.1, z: 8.5, rotY: Math.PI },
      { x: -8.5, y: 1.1, z: 0, rotY: Math.PI / 2 },
      { x: 8.5, y: 1.1, z: 0, rotY: -Math.PI / 2 }
    ];

    for (const cover of coverPositions) {
      const bunker = new THREE.Mesh(
        new THREE.CapsuleGeometry(1, 2.8, 6, 12),
        steelMaterial
      );
      bunker.position.set(cover.x, cover.y, cover.z);
      bunker.rotation.z = Math.PI / 2;
      bunker.rotation.y = cover.rotY;
      addMapMesh(bunker, { collidable: true });

      const sidePipeLod = createDecorativeLod(
        new THREE.Vector3(cover.x, cover.y + 1.05, cover.z),
        [
          {
            object: (() => {
              const lodPipe = new THREE.Mesh(sidePipeHighGeometry, pipeMaterial);
              lodPipe.castShadow = false;
              lodPipe.receiveShadow = true;
              lodPipe.rotation.z = Math.PI / 2;
              lodPipe.rotation.y = cover.rotY;
              return lodPipe;
            })(),
            distance: 0
          },
          {
            object: (() => {
              const lodPipe = new THREE.Mesh(sidePipeLowGeometry, pipeMaterial);
              lodPipe.castShadow = false;
              lodPipe.receiveShadow = true;
              lodPipe.rotation.z = Math.PI / 2;
              lodPipe.rotation.y = cover.rotY;
              return lodPipe;
            })(),
            distance: 54
          },
          {
            object: new THREE.Group(),
            distance: 102
          }
        ]
      );
      addStaticMapGroup(sidePipeLod);
    }

    const tankPositions = [
      { x: -14, z: -14 },
      { x: 14, z: -14 },
      { x: -14, z: 14 },
      { x: 14, z: 14 }
    ];

    for (const tank of tankPositions) {
      const tankBody = new THREE.Mesh(
        new THREE.CylinderGeometry(1.35, 1.35, 3.8, 18),
        darkSteelMaterial
      );
      tankBody.position.set(tank.x, 1.9, tank.z);
      addMapMesh(tankBody, { collidable: true });

      const tankCapLod = createDecorativeLod(new THREE.Vector3(tank.x, 3.9, tank.z), [
        {
          object: (() => {
            const tankCap = new THREE.Mesh(tankCapHighGeometry, steelMaterial);
            tankCap.scale.y = 0.55;
            return tankCap;
          })(),
          distance: 0
        },
        {
          object: (() => {
            const tankCap = new THREE.Mesh(tankCapLowGeometry, steelMaterial);
            tankCap.scale.y = 0.55;
            return tankCap;
          })(),
          distance: 66
        },
        {
          object: new THREE.Group(),
          distance: 120
        }
      ]);
      addStaticMapGroup(tankCapLod);
    }

    const pipeRingY = [2.3, 5.1];
    for (const yLevel of pipeRingY) {
      for (let index = 0; index < 8; index += 1) {
        const angle = (index / 8) * Math.PI * 2;
        const ringPipeLod = createDecorativeLod(
          new THREE.Vector3(Math.cos(angle) * 21.2, yLevel, Math.sin(angle) * 21.2),
          [
            {
              object: (() => {
                const lodPipe = new THREE.Mesh(ringPipeHighGeometry, pipeMaterial);
                lodPipe.castShadow = false;
                lodPipe.receiveShadow = true;
                lodPipe.rotation.y = angle;
                lodPipe.rotation.z = Math.PI / 2;
                return lodPipe;
              })(),
              distance: 0
            },
            {
              object: (() => {
                const lodPipe = new THREE.Mesh(ringPipeLowGeometry, pipeMaterial);
                lodPipe.castShadow = false;
                lodPipe.receiveShadow = true;
                lodPipe.rotation.y = angle;
                lodPipe.rotation.z = Math.PI / 2;
                return lodPipe;
              })(),
              distance: 58
            },
            {
              object: new THREE.Group(),
              distance: 108
            }
          ]
        );
        addStaticMapGroup(ringPipeLod);
      }
    }

  }

  function createBlossomTree({
    position,
    seed,
    rotation = 0,
    trunkHeight = 7.4,
    trunkRadius = 0.42,
    canopyRadius = 4.25,
    barkMaterial,
    barkDarkMaterial,
    blossomMaterial,
    blossomHighlightMaterial,
    fallenPetalMaterial
  }) {
    const treeGroup = new THREE.Group();
    treeGroup.position.copy(position);
    treeGroup.rotation.y = rotation;

    const random = createSeededRandom(seed);
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3((random() - 0.5) * 0.32, trunkHeight * 0.28, (random() - 0.5) * 0.28),
      new THREE.Vector3((random() - 0.5) * 0.6, trunkHeight * 0.66, (random() - 0.5) * 0.58),
      new THREE.Vector3((random() - 0.5) * 0.86, trunkHeight * 1.02, (random() - 0.5) * 0.82)
    ]);

    const trunk = new THREE.Mesh(
      new THREE.TubeGeometry(trunkCurve, 28, trunkRadius, 10, false),
      barkMaterial
    );
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    trunk.userData.registerBulletCollision = true;
    treeGroup.add(trunk);

    const rootFlare = new THREE.Mesh(
      new THREE.CylinderGeometry(trunkRadius * 2.2, trunkRadius * 1.45, 1.08, 12),
      barkDarkMaterial
    );
    rootFlare.position.y = 0.54;
    rootFlare.castShadow = true;
    rootFlare.receiveShadow = true;
    rootFlare.userData.registerBulletCollision = true;
    treeGroup.add(rootFlare);

    const trunkCollider = new THREE.Mesh(
      new THREE.CylinderGeometry(trunkRadius * 2.2, trunkRadius * 3.1, trunkHeight, 10),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    trunkCollider.position.y = trunkHeight * 0.5;
    trunkCollider.visible = false;
    trunkCollider.userData.registerBulletCollision = false;
    trunkCollider.userData.ignoreShotRay = true;
    treeGroup.add(trunkCollider);

    const nearBranchLevel = createBlossomBranchLevel({
      trunkCurve,
      trunkHeight,
      trunkRadius,
      canopyRadius,
      barkMaterial,
      randomSeed: seed + 11,
      branchCount: 6,
      twigCount: 2,
      branchSegments: 22,
      twigSegments: 14,
      collectCanopyAnchors: true
    });
    const mediumBranchLevel = createBlossomBranchLevel({
      trunkCurve,
      trunkHeight,
      trunkRadius,
      canopyRadius,
      barkMaterial,
      randomSeed: seed + 11,
      branchCount: 5,
      twigCount: 1,
      branchSegments: 14,
      twigSegments: 8
    });
    const farBranchLevel = createBlossomBranchLevel({
      trunkCurve,
      trunkHeight,
      trunkRadius,
      canopyRadius,
      barkMaterial,
      randomSeed: seed + 11,
      branchCount: 4,
      twigCount: 0,
      branchSegments: 10,
      twigSegments: 6
    });

    const branchLod = new THREE.LOD();
    branchLod.autoUpdate = true;
    branchLod.addLevel(nearBranchLevel.group, 0);
    branchLod.addLevel(mediumBranchLevel.group, 72);
    branchLod.addLevel(farBranchLevel.group, 118);
    branchLod.addLevel(new THREE.Group(), 160);
    treeGroup.add(branchLod);

    const canopyAnchors = nearBranchLevel.canopyAnchors;

    const blossomClusterCenters = [];
    const crownCenter = trunkCurve.getPointAt(0.98).clone();
    crownCenter.y += canopyRadius * 0.12;

    for (const anchor of canopyAnchors) {
      const liftedAnchor = anchor.clone();
      liftedAnchor.y += canopyRadius * (0.06 + random() * 0.08);
      liftedAnchor.y = Math.max(liftedAnchor.y, trunkHeight * 0.68);
      blossomClusterCenters.push(liftedAnchor);

      if (anchor.y > trunkHeight * 0.7) {
        blossomClusterCenters.push(anchor.clone().add(new THREE.Vector3(
          (random() - 0.5) * canopyRadius * 0.34,
          canopyRadius * (0.12 + random() * 0.12),
          (random() - 0.5) * canopyRadius * 0.34
        )));
      }
    }

    addBlossomRingAnchors(blossomClusterCenters, crownCenter, canopyRadius * 0.38, canopyRadius * 0.08, 6, random, 0.12);
    addBlossomRingAnchors(blossomClusterCenters, crownCenter, canopyRadius * 0.62, canopyRadius * 0.02, 10, random, 0.16);
    addBlossomRingAnchors(blossomClusterCenters, crownCenter, canopyRadius * 0.82, -canopyRadius * 0.06, 12, random, 0.1);
    addBlossomRingAnchors(blossomClusterCenters, crownCenter, canopyRadius * 0.52, canopyRadius * 0.32, 8, random, 0.12);

    const canopyLod = new THREE.LOD();
    canopyLod.autoUpdate = true;
    canopyLod.addLevel(createBlossomCanopyLevel({
      blossomClusterCenters,
      canopyRadius,
      trunkHeight,
      randomSeed: seed + 101,
      blossomMaterial,
      blossomHighlightMaterial,
      fallenPetalMaterial,
      clusterStride: 1,
      petalsPerClusterMin: 14,
      petalsPerClusterMax: 20,
      highlightPerClusterMin: 6,
      highlightPerClusterMax: 9,
      clusterSpreadMin: 0.14,
      clusterSpreadMax: 0.19,
      petalScaleMin: 0.18,
      petalScaleMax: 0.33,
      includeHighlights: true,
      fallenPetalCount: 28
    }), 0);
    canopyLod.addLevel(createBlossomCanopyLevel({
      blossomClusterCenters,
      canopyRadius,
      trunkHeight,
      randomSeed: seed + 202,
      blossomMaterial,
      blossomHighlightMaterial,
      fallenPetalMaterial,
      clusterStride: 2,
      petalsPerClusterMin: 9,
      petalsPerClusterMax: 13,
      highlightPerClusterMin: 4,
      highlightPerClusterMax: 6,
      clusterSpreadMin: 0.12,
      clusterSpreadMax: 0.17,
      petalScaleMin: 0.16,
      petalScaleMax: 0.28,
      includeHighlights: true,
      fallenPetalCount: 16
    }), 68);
    canopyLod.addLevel(createBlossomCanopyLevel({
      blossomClusterCenters,
      canopyRadius,
      trunkHeight,
      randomSeed: seed + 303,
      blossomMaterial,
      blossomHighlightMaterial,
      fallenPetalMaterial,
      clusterStride: 6,
      petalsPerClusterMin: 3,
      petalsPerClusterMax: 5,
      highlightPerClusterMin: 0,
      highlightPerClusterMax: 0,
      clusterSpreadMin: 0.08,
      clusterSpreadMax: 0.1,
      petalScaleMin: 0.14,
      petalScaleMax: 0.2,
      includeHighlights: false,
      fallenPetalCount: 0
    }), 116);
    canopyLod.addLevel(new THREE.Group(), 160);
    treeGroup.add(canopyLod);

    return { group: treeGroup, colliders: [trunkCollider] };
  }

  function createGardenLantern(position, materials) {
    const lanternGroup = new THREE.Group();
    lanternGroup.position.copy(position);

    const post = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.11, 2.4, 10),
      materials.post
    );
    post.position.y = 1.2;
    post.castShadow = true;
    post.receiveShadow = true;
    post.userData.registerBulletCollision = true;
    lanternGroup.add(post);

    const lanternBody = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.18, 0.34, 4, 8),
      materials.glow
    );
    lanternBody.position.y = 2.2;
    lanternBody.castShadow = false;
    lanternBody.receiveShadow = false;
    lanternBody.userData.registerBulletCollision = false;
    lanternGroup.add(lanternBody);

    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.26, 0.08, 10),
      materials.post
    );
    cap.position.y = 2.52;
    cap.castShadow = true;
    cap.receiveShadow = true;
    cap.userData.registerBulletCollision = true;
    lanternGroup.add(cap);

    const collider = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.22, 2.6, 8),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    collider.position.y = 1.3;
    collider.visible = false;
    collider.userData.registerBulletCollision = false;
    collider.userData.ignoreShotRay = true;
    lanternGroup.add(collider);

    return { group: lanternGroup, colliders: [collider] };
  }

  function createGardenPath(curvePoints, width, material) {
    const halfWidth = width * 0.5;
    const pathShape = new THREE.Shape();
    pathShape.moveTo(-halfWidth, -0.04);
    pathShape.lineTo(halfWidth, -0.04);
    pathShape.lineTo(halfWidth * 0.92, 0.09);
    pathShape.lineTo(-halfWidth * 0.92, 0.09);
    pathShape.closePath();

    return new THREE.Mesh(
      new THREE.ExtrudeGeometry(pathShape, {
        steps: Math.max(48, curvePoints.length * 22),
        bevelEnabled: true,
        bevelSize: 0.035,
        bevelThickness: 0.025,
        extrudePath: new THREE.CatmullRomCurve3(curvePoints)
      }),
      material
    );
  }

  function createGardenBench(position, rotation, materials, scale = 1) {
    const benchGroup = new THREE.Group();
    benchGroup.position.copy(position);
    benchGroup.rotation.y = rotation;

    const seat = new THREE.Mesh(
      new THREE.BoxGeometry(1.9 * scale, 0.14 * scale, 0.54 * scale),
      materials.wood
    );
    seat.position.y = 0.88 * scale;
    seat.castShadow = true;
    seat.receiveShadow = true;
    seat.userData.registerBulletCollision = true;
    benchGroup.add(seat);

    const backrest = new THREE.Mesh(
      new THREE.BoxGeometry(1.9 * scale, 0.14 * scale, 0.5 * scale),
      materials.wood
    );
    backrest.position.set(0, 1.25 * scale, -0.2 * scale);
    backrest.rotation.x = -0.1;
    backrest.castShadow = true;
    backrest.receiveShadow = true;
    backrest.userData.registerBulletCollision = true;
    benchGroup.add(backrest);

    const supportOffsets = [
      [-0.78, 0.42, -0.18],
      [0.78, 0.42, -0.18],
      [-0.78, 0.42, 0.18],
      [0.78, 0.42, 0.18]
    ];

    for (const [x, y, z] of supportOffsets) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05 * scale, 0.06 * scale, 0.84 * scale, 8),
        materials.frame
      );
      leg.position.set(x * scale, y * scale, z * scale);
      leg.castShadow = true;
      leg.receiveShadow = true;
      leg.userData.registerBulletCollision = true;
      benchGroup.add(leg);
    }

    const brace = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04 * scale, 0.04 * scale, 1.4 * scale, 8),
      materials.frame
    );
    brace.position.set(0, 0.58 * scale, 0);
    brace.rotation.z = Math.PI / 2;
    brace.castShadow = true;
    brace.receiveShadow = true;
    brace.userData.registerBulletCollision = true;
    benchGroup.add(brace);

    const collider = new THREE.Mesh(
      new THREE.BoxGeometry(2.1 * scale, 1.45 * scale, 0.86 * scale),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    collider.position.y = 0.72 * scale;
    collider.visible = false;
    collider.userData.registerBulletCollision = false;
    collider.userData.ignoreShotRay = true;
    benchGroup.add(collider);

    return { group: benchGroup, colliders: [collider] };
  }

  function createGrassClump(position, seed, materials, size = 1, bladeCount = 7) {
    const random = createSeededRandom(seed);
    const grassGroup = new THREE.Group();
    grassGroup.position.copy(position);

    for (let index = 0; index < bladeCount; index += 1) {
      const blade = new THREE.Mesh(
        new THREE.PlaneGeometry(0.18 * size, (0.55 + random() * 0.4) * size),
        materials.blade
      );
      blade.position.set(
        (random() - 0.5) * 0.24 * size,
        (0.22 + random() * 0.16) * size,
        (random() - 0.5) * 0.24 * size
      );
      blade.rotation.set(
        (random() - 0.5) * 0.35,
        random() * Math.PI,
        (random() - 0.5) * 0.22
      );
      blade.castShadow = true;
      blade.receiveShadow = false;
      blade.userData.registerBulletCollision = false;
      grassGroup.add(blade);
    }

    return grassGroup;
  }

  function createGrassClumpLod(position, seed, materials, size = 1) {
    return createDecorativeLod(position, [
      {
        object: createGrassClump(new THREE.Vector3(), seed, materials, size, 7),
        distance: 0
      },
      {
        object: createGrassClump(new THREE.Vector3(), seed + 17, materials, size * 0.94, 5),
        distance: 34
      },
      {
        object: createGrassClump(new THREE.Vector3(), seed + 29, materials, size * 0.82, 2),
        distance: 62
      },
      {
        object: new THREE.Group(),
        distance: 88
      }
    ]);
  }

  function createFlowerPatch(position, seed, materials, radius = 1.2, flowerCount = 18) {
    const random = createSeededRandom(seed);
    const patchGroup = new THREE.Group();
    patchGroup.position.copy(position);
    const blossomDummy = new THREE.Object3D();
    const petalGeometry = getBlossomPetalGeometry();

    const bloomMesh = new THREE.InstancedMesh(petalGeometry, materials.bloom, 90);
    bloomMesh.material.side = THREE.DoubleSide;
    bloomMesh.castShadow = true;
    bloomMesh.receiveShadow = false;
    bloomMesh.userData.registerBulletCollision = false;
    patchGroup.add(bloomMesh);

    const accentMesh = new THREE.InstancedMesh(petalGeometry, materials.accent, 36);
    accentMesh.material.side = THREE.DoubleSide;
    accentMesh.castShadow = true;
    accentMesh.receiveShadow = false;
    accentMesh.userData.registerBulletCollision = false;
    patchGroup.add(accentMesh);

    let bloomIndex = 0;
    for (let flowerIndex = 0; flowerIndex < flowerCount; flowerIndex += 1) {
      const angle = random() * Math.PI * 2;
      const flowerRadius = radius * (0.18 + random() * 0.82);
      const flowerCenter = new THREE.Vector3(
        Math.cos(angle) * flowerRadius,
        0.06 + random() * 0.08,
        Math.sin(angle) * flowerRadius
      );
      const petalCount = 4 + Math.floor(random() * 3);

      for (let petalIndex = 0; petalIndex < petalCount; petalIndex += 1) {
        const petalAngle = (petalIndex / petalCount) * Math.PI * 2 + random() * 0.2;
        blossomDummy.position.copy(flowerCenter).add(new THREE.Vector3(
          Math.cos(petalAngle) * 0.07,
          random() * 0.04,
          Math.sin(petalAngle) * 0.07
        ));
        blossomDummy.rotation.set(
          -Math.PI / 2 + (random() - 0.5) * 0.35,
          random() * Math.PI,
          petalAngle
        );
        blossomDummy.scale.setScalar(0.12 + random() * 0.08);
        blossomDummy.updateMatrix();
        bloomMesh.setMatrixAt(bloomIndex, blossomDummy.matrix);
        bloomIndex += 1;
      }
    }

    let accentIndex = 0;
    for (let index = 0; index < accentMesh.count; index += 1) {
      const angle = random() * Math.PI * 2;
      const accentRadius = radius * (0.12 + random() * 0.88);
      blossomDummy.position.set(
        Math.cos(angle) * accentRadius,
        0.08 + random() * 0.05,
        Math.sin(angle) * accentRadius
      );
      blossomDummy.rotation.set(-Math.PI / 2, random() * Math.PI, random() * Math.PI);
      blossomDummy.scale.setScalar(0.08 + random() * 0.05);
      blossomDummy.updateMatrix();
      accentMesh.setMatrixAt(accentIndex, blossomDummy.matrix);
      accentIndex += 1;
    }

    bloomMesh.count = bloomIndex;
    finalizeInstancedDecorativeMesh(bloomMesh);
    accentMesh.count = accentIndex;
    finalizeInstancedDecorativeMesh(accentMesh);

    return patchGroup;
  }

  function createFlowerPatchLod(position, seed, materials, radius = 1.2) {
    return createDecorativeLod(position, [
      {
        object: createFlowerPatch(new THREE.Vector3(), seed, materials, radius, 18),
        distance: 0
      },
      {
        object: createFlowerPatch(new THREE.Vector3(), seed + 13, materials, radius * 0.92, 14),
        distance: 42
      },
      {
        object: createFlowerPatch(new THREE.Vector3(), seed + 27, materials, radius * 0.74, 6),
        distance: 76
      },
      {
        object: new THREE.Group(),
        distance: 102
      }
    ]);
  }

  function createButterfly(position, rotation, materials, scale = 1) {
    const butterflyGroup = new THREE.Group();
    butterflyGroup.position.copy(position);
    butterflyGroup.rotation.y = rotation;

    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015 * scale, 0.02 * scale, 0.22 * scale, 6),
      materials.body
    );
    body.rotation.z = Math.PI / 2;
    body.castShadow = false;
    body.receiveShadow = false;
    body.userData.registerBulletCollision = false;
    butterflyGroup.add(body);

    const leftWing = new THREE.Mesh(
      new THREE.PlaneGeometry(0.22 * scale, 0.18 * scale),
      materials.wing
    );
    leftWing.position.set(0, 0.02 * scale, -0.09 * scale);
    leftWing.rotation.set(0.18, 0.5, 0.22);
    leftWing.castShadow = false;
    leftWing.receiveShadow = false;
    leftWing.userData.registerBulletCollision = false;
    butterflyGroup.add(leftWing);

    const rightWing = leftWing.clone();
    rightWing.position.z = 0.09 * scale;
    rightWing.rotation.y = -0.5;
    rightWing.rotation.z = -0.22;
    butterflyGroup.add(rightWing);

    return butterflyGroup;
  }

  function createButterflyLod(position, rotation, materials, scale = 1) {
    const nearButterfly = createButterfly(new THREE.Vector3(), rotation, materials, scale);
    const farButterfly = createButterfly(new THREE.Vector3(), rotation, materials, scale * 0.82);
    farButterfly.traverse((object) => {
      if (object.isMesh && object.geometry?.type === "PlaneGeometry") {
        object.scale.x *= 0.85;
      }
    });

    return createDecorativeLod(position, [
      { object: nearButterfly, distance: 0 },
      { object: farButterfly, distance: 16 },
      { object: new THREE.Group(), distance: 30 }
    ]);
  }

  function createAnimatedSakuraTreeFeature({
    position,
    barkMaterial,
    barkDarkMaterial,
    blossomMaterial,
    blossomHighlightMaterial,
    fallenPetalMaterial
  }) {
    const heroTree = createBlossomTree({
      position: position.clone(),
      seed: 8088,
      rotation: 0.42,
      trunkHeight: 11.4,
      trunkRadius: 0.6,
      canopyRadius: 7.2,
      barkMaterial,
      barkDarkMaterial,
      blossomMaterial,
      blossomHighlightMaterial,
      fallenPetalMaterial
    });

    const heroRandom = createSeededRandom(8088001);
    const blossomDummy = new THREE.Object3D();
    const petalGeometry = getBlossomPetalGeometry();
    const crownCenters = [];

    addBlossomRingAnchors(crownCenters, new THREE.Vector3(0, 8.9, 0), 1.8, 0.2, 6, heroRandom, 0.1);
    addBlossomRingAnchors(crownCenters, new THREE.Vector3(0, 8.5, 0), 3.1, 0.1, 10, heroRandom, 0.12);
    addBlossomRingAnchors(crownCenters, new THREE.Vector3(0, 7.7, 0), 4.2, -0.18, 12, heroRandom, 0.1);
    addBlossomRingAnchors(crownCenters, new THREE.Vector3(0, 9.7, 0), 1.2, 0.18, 5, heroRandom, 0.08);

    const heroBlossomMesh = new THREE.InstancedMesh(
      petalGeometry,
      blossomMaterial.clone(),
      crownCenters.length * 18
    );
    heroBlossomMesh.material.side = THREE.DoubleSide;
    heroBlossomMesh.castShadow = true;
    heroBlossomMesh.receiveShadow = false;
    heroTree.group.add(heroBlossomMesh);

    const heroHighlightMesh = new THREE.InstancedMesh(
      petalGeometry,
      blossomHighlightMaterial.clone(),
      crownCenters.length * 7
    );
    heroHighlightMesh.material.side = THREE.DoubleSide;
    heroHighlightMesh.castShadow = true;
    heroHighlightMesh.receiveShadow = false;
    heroTree.group.add(heroHighlightMesh);

    let blossomIndex = 0;
    let highlightIndex = 0;
    for (const center of crownCenters) {
      blossomIndex = writeBlossomClusterInstances(
        heroBlossomMesh,
        blossomDummy,
        center,
        12 + Math.floor(heroRandom() * 7),
        heroRandom,
        {
          spread: 0.95 + heroRandom() * 0.55,
          minScale: 0.2,
          maxScale: 0.36
        },
        blossomIndex
      );

      highlightIndex = writeBlossomClusterInstances(
        heroHighlightMesh,
        blossomDummy,
        center.clone().add(new THREE.Vector3(
          (heroRandom() - 0.5) * 0.28,
          heroRandom() * 0.32,
          (heroRandom() - 0.5) * 0.28
        )),
        4 + Math.floor(heroRandom() * 3),
        heroRandom,
        {
          spread: 0.5 + heroRandom() * 0.22,
          minScale: 0.12,
          maxScale: 0.22
        },
        highlightIndex
      );
    }

    heroBlossomMesh.count = blossomIndex;
    finalizeInstancedDecorativeMesh(heroBlossomMesh);
    heroHighlightMesh.count = highlightIndex;
    finalizeInstancedDecorativeMesh(heroHighlightMesh);

    const blossomCurtainMesh = new THREE.InstancedMesh(
      petalGeometry,
      fallenPetalMaterial.clone(),
      110
    );
    blossomCurtainMesh.material.side = THREE.DoubleSide;
    blossomCurtainMesh.castShadow = true;
    blossomCurtainMesh.receiveShadow = false;
    heroTree.group.add(blossomCurtainMesh);

    for (let index = 0; index < blossomCurtainMesh.count; index += 1) {
      const angle = heroRandom() * Math.PI * 2;
      const radius = 2.1 + heroRandom() * 2.8;
      blossomDummy.position.set(
        Math.cos(angle) * radius,
        6.3 + heroRandom() * 2.6,
        Math.sin(angle) * radius
      );
      blossomDummy.rotation.set(
        -0.25 + heroRandom() * 0.5,
        heroRandom() * Math.PI * 2,
        (heroRandom() - 0.5) * 0.5
      );
      blossomDummy.scale.set(
        0.14 + heroRandom() * 0.1,
        0.24 + heroRandom() * 0.16,
        0.14 + heroRandom() * 0.1
      );
      blossomDummy.updateMatrix();
      blossomCurtainMesh.setMatrixAt(index, blossomDummy.matrix);
    }

    finalizeInstancedDecorativeMesh(blossomCurtainMesh);

    return heroTree;
  }

  function resetBlossomPetal(system, index, initial = false) {
    const anchor = system.anchors[Math.floor(system.random() * system.anchors.length)];
    const angle = system.random() * Math.PI * 2;
    const radius = anchor.spread * (0.15 + system.random() * 0.85);
    const heightOffset = initial
      ? system.random() * (anchor.heightRange + 2.4)
      : anchor.heightRange + system.random() * 2.8;

    system.positions[index].set(
      anchor.position.x + Math.cos(angle) * radius,
      anchor.topY + heightOffset,
      anchor.position.z + Math.sin(angle) * radius
    );
    system.fallSpeeds[index] = 0.34 + system.random() * 0.42;
    system.driftX[index] = (system.random() - 0.5) * 0.34;
    system.driftZ[index] = (system.random() - 0.5) * 0.34;
    system.rotation[index].set(
      system.random() * Math.PI * 2,
      system.random() * Math.PI * 2,
      system.random() * Math.PI * 2
    );
    system.rotationSpeed[index].set(
      (system.random() - 0.5) * 0.9,
      (system.random() - 0.5) * 0.55,
      (system.random() - 0.5) * 1.2
    );
    system.scale[index] = 0.65 + system.random() * 0.75;
    system.windPhase[index] = system.random() * Math.PI * 2;
  }

  function createBlossomPetalSystem(anchors, count = 120) {
    const petalGeometry = new THREE.PlaneGeometry(0.1, 0.18);
    const petalMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff2f7,
      roughness: 0.94,
      metalness: 0.02,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    const mesh = new THREE.InstancedMesh(petalGeometry, petalMaterial, count);
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    mesh.userData.registerBulletCollision = false;
    mesh.userData.ignoreShotRay = true;

    const system = {
      anchors,
      mesh,
      random: createSeededRandom(90210),
      positions: Array.from({ length: count }, () => new THREE.Vector3()),
      rotation: Array.from({ length: count }, () => new THREE.Vector3()),
      rotationSpeed: Array.from({ length: count }, () => new THREE.Vector3()),
      fallSpeeds: new Float32Array(count),
      driftX: new Float32Array(count),
      driftZ: new Float32Array(count),
      scale: new Float32Array(count),
      windPhase: new Float32Array(count)
    };

    for (let index = 0; index < count; index += 1) {
      resetBlossomPetal(system, index, true);
      blossomPetalColor.setRGB(
        0.95 + system.random() * 0.05,
        0.76 + system.random() * 0.12,
        0.84 + system.random() * 0.12
      );
      mesh.setColorAt(index, blossomPetalColor);
    }

    mesh.instanceColor.needsUpdate = true;
    return system;
  }

  function updateBlossomPetalSystem(delta, elapsedTime) {
    if (!activeBlossomPetalSystem || !activeBlossomPetalSystem.mesh.visible) {
      return;
    }

    const system = activeBlossomPetalSystem;
    const count = system.mesh.count;

    for (let index = 0; index < count; index += 1) {
      const position = system.positions[index];
      const rotation = system.rotation[index];

      position.y -= system.fallSpeeds[index] * delta;
      position.x += system.driftX[index] * delta + Math.sin(elapsedTime * 0.9 + system.windPhase[index]) * 0.09 * delta;
      position.z += system.driftZ[index] * delta + Math.cos(elapsedTime * 0.75 + system.windPhase[index] * 0.7) * 0.07 * delta;

      rotation.x += system.rotationSpeed[index].x * delta;
      rotation.y += system.rotationSpeed[index].y * delta;
      rotation.z += system.rotationSpeed[index].z * delta;

      if (position.y <= 0.04) {
        resetBlossomPetal(system, index, false);
      }

      blossomPetalDummy.position.copy(position);
      blossomPetalDummy.rotation.set(rotation.x, rotation.y, rotation.z);
      blossomPetalDummy.scale.setScalar(system.scale[index]);
      blossomPetalDummy.updateMatrix();
      system.mesh.setMatrixAt(index, blossomPetalDummy.matrix);
    }

    system.mesh.instanceMatrix.needsUpdate = true;
    system.mesh.computeBoundingSphere();
  }

  function buildIronworksYard(options = {}) {
    const isMediumRangeLightVariant = options.visualVariant === mediumRangeJiggleTrainingVisualVariant;
    const palette = isMediumRangeLightVariant
      ? {
        lighting: {
          background: 0xa9bed1,
          fogColor: 0xd8d4c9,
          fogNear: 24,
          fogFar: 132,
          sunColor: 0xffead2,
          sunIntensity: 1.34,
          sunPosition: new THREE.Vector3(-20, 26, 14),
          skyColor: 0xf0ece2,
          groundColor: 0xb5afa4,
          skyIntensity: 1.28
        },
        floorPlate: 0x5d6378,
        foundation: 0x9fa19b,
        wall: 0xb7aa98,
        ruinWall: 0xb7aa98,
        darkSteel: 0x858d8f,
        tank: 0xaab1ae,
        trim: 0xd1d0c6,
        pipe: 0xc0b691,
        pipeCover: 0xb8ad93,
        crate: 0xb89d73,
        debris: 0xa99d88,
        lowWall: 0xb7aa98,
        laneStrip: 0x5d6378,
        accent: 0xd1b066,
        centralPad: 0x5d6378,
        warehouseRoof: 0x9fa8aa
      }
      : {
        lighting: {
          background: 0x6b6f78,
          fogColor: 0x8c9198,
          fogNear: 18,
          fogFar: 118,
          sunColor: 0xffdcc4,
          sunIntensity: 1.08,
          sunPosition: new THREE.Vector3(-20, 24, 14),
          skyColor: 0xd8dee3,
          groundColor: 0x505650,
          skyIntensity: 1.08
        },
        floorPlate: 0x5a5f63,
        foundation: 0x43484d,
        wall: 0x61676f,
        ruinWall: 0x565b62,
        darkSteel: 0x2b3137,
        tank: 0x707881,
        trim: 0x899097,
        pipe: 0x8d846f,
        pipeCover: 0x7a6e5d,
        crate: 0x7a6248,
        debris: 0x65584c,
        lowWall: 0x706b63,
        laneStrip: 0x7a7060,
        accent: 0xb79052,
        centralPad: 0x67625c,
        warehouseRoof: 0x3b434b
      };

    applyLightingProfile(palette.lighting);
    if (isMediumRangeLightVariant) {
      scene.background = new THREE.Color(0xa9bed1);
      console.log("[MEDIUM RANGE SKY] applied polished sky tone", "0xa9bed1");
    }
    const mediumRangeFloorColor = 0x5d6378;
    const applyMediumRangeFloorColorProof = (mesh, material) => {
      if (!isMediumRangeLightVariant || !mesh || !material?.color) {
        return;
      }

      material.color.setHex(mediumRangeFloorColor);
      console.log("[MEDIUM RANGE FLOOR] applied floor color #5D6378", {
        materialName: material.name || "",
        meshName: mesh.name || "",
        color: material.color?.getHexString?.()
      });
    };

    const ironworksArenaWidth = 96;
    const ironworksArenaDepth = 78;
    const ironworksAddedStructureGroups = 4;
    const ironworksAddedStructureObjects = 17;

    setMapSpawns(
      new THREE.Vector3(0, 0, 32.2),
      [
        new THREE.Vector3(-30, 0, -12.5),
        new THREE.Vector3(30, 0, -12.5),
        new THREE.Vector3(-34, 0, 7.5),
        new THREE.Vector3(34, 0, 7.5),
        new THREE.Vector3(0, 0, -28.5),
        new THREE.Vector3(-15, 0, 27),
        new THREE.Vector3(15, 0, 27)
      ]
    );

    const createRoundedRectShape = (width, depth, radius) => {
      const halfWidth = width * 0.5;
      const halfDepth = depth * 0.5;
      const clampedRadius = Math.min(radius, halfWidth - 0.1, halfDepth - 0.1);
      const shape = new THREE.Shape();
      shape.moveTo(-halfWidth + clampedRadius, -halfDepth);
      shape.lineTo(halfWidth - clampedRadius, -halfDepth);
      shape.quadraticCurveTo(halfWidth, -halfDepth, halfWidth, -halfDepth + clampedRadius);
      shape.lineTo(halfWidth, halfDepth - clampedRadius);
      shape.quadraticCurveTo(halfWidth, halfDepth, halfWidth - clampedRadius, halfDepth);
      shape.lineTo(-halfWidth + clampedRadius, halfDepth);
      shape.quadraticCurveTo(-halfWidth, halfDepth, -halfWidth, halfDepth - clampedRadius);
      shape.lineTo(-halfWidth, -halfDepth + clampedRadius);
      shape.quadraticCurveTo(-halfWidth, -halfDepth, -halfWidth + clampedRadius, -halfDepth);
      return shape;
    };
    const addArenaMesh = (mesh, {
      collidable = false,
      bulletCollision = collidable,
      castShadow = true,
      receiveShadow = true
    } = {}) => addMapMesh(mesh, {
      collidable,
      bulletCollision,
      castShadow,
      receiveShadow
    });
    const addBoxFeature = (size, position, material, options = {}) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(size.x, size.y, size.z), material);
      mesh.position.copy(position);
      return addArenaMesh(mesh, options);
    };
    const addOrientedBoxFeature = (size, position, material, {
      rotation = null,
      collidable = false,
      bulletCollision = collidable,
      castShadow = true,
      receiveShadow = true
    } = {}) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(size.x, size.y, size.z), material);
      mesh.position.copy(position);
      if (rotation) {
        mesh.rotation.copy(rotation);
      }
      return addArenaMesh(mesh, {
        collidable,
        bulletCollision,
        castShadow,
        receiveShadow
      });
    };
    const addCylinderFeature = (radius, height, position, material, options = {}) => {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 24), material);
      mesh.position.copy(position);
      return addArenaMesh(mesh, options);
    };
    const addHorizontalPipeCover = (length, radius, position, axis, material) => {
      const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, length, 20, 1, false),
        material
      );
      if (axis === "x") {
        mesh.rotation.z = Math.PI * 0.5;
      } else {
        mesh.rotation.x = Math.PI * 0.5;
      }
      mesh.position.copy(position);
      return addArenaMesh(mesh, { collidable: true });
    };
    const addPipeRun = (points, radius, material) => {
      const mesh = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 30, radius, 10, false),
        material
      );
      return addArenaMesh(mesh, {
        bulletCollision: false,
        castShadow: false,
        receiveShadow: true
      });
    };
    const addTankBands = (position, radius, yValues, material) => {
      for (const y of yValues) {
        const band = new THREE.Mesh(
          new THREE.TorusGeometry(radius, 0.1, 8, 22),
          material
        );
        band.rotation.x = Math.PI * 0.5;
        band.position.set(position.x, y, position.z);
        addArenaMesh(band, {
          bulletCollision: false,
          castShadow: false,
          receiveShadow: true
        });
      }
    };
    const addRubbleCluster = (center, material, pieces = []) => {
      for (const piece of pieces) {
        addOrientedBoxFeature(
          piece.size,
          center.clone().add(piece.offset),
          material,
          {
            rotation: piece.rotation,
            collidable: true
          }
        );
      }
    };

    const floorPlateMaterial = new THREE.MeshStandardMaterial({
      color: palette.floorPlate,
      roughness: 0.95,
      metalness: 0.08
    });
    floorPlateMaterial.name = isMediumRangeLightVariant
      ? "medium-range-floor-arena-deck-material"
      : "ironworks-floor-arena-deck-material";
    const foundationMaterial = new THREE.MeshStandardMaterial({
      color: palette.foundation,
      roughness: 0.98,
      metalness: 0.04
    });
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: palette.wall,
      roughness: 0.84,
      metalness: 0.22
    });
    wallMaterial.name = isMediumRangeLightVariant
      ? "medium-range-wall-material"
      : "ironworks-wall-material";
    const ruinWallMaterial = new THREE.MeshStandardMaterial({
      color: palette.ruinWall,
      roughness: 0.9,
      metalness: 0.18
    });
    ruinWallMaterial.name = isMediumRangeLightVariant
      ? "medium-range-ruin-wall-material"
      : "ironworks-ruin-wall-material";
    const darkSteelMaterial = new THREE.MeshStandardMaterial({
      color: palette.darkSteel,
      roughness: 0.72,
      metalness: 0.46
    });
    const tankMaterial = new THREE.MeshStandardMaterial({
      color: palette.tank,
      roughness: 0.56,
      metalness: 0.48
    });
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: palette.trim,
      roughness: 0.42,
      metalness: 0.72
    });
    const pipeMaterial = new THREE.MeshStandardMaterial({
      color: palette.pipe,
      roughness: 0.48,
      metalness: 0.62
    });
    const pipeCoverMaterial = new THREE.MeshStandardMaterial({
      color: palette.pipeCover,
      roughness: 0.64,
      metalness: 0.34
    });
    const crateMaterial = new THREE.MeshStandardMaterial({
      color: palette.crate,
      roughness: 0.9,
      metalness: 0.08
    });
    const debrisMaterial = new THREE.MeshStandardMaterial({
      color: palette.debris,
      roughness: 0.96,
      metalness: 0.04
    });
    const lowWallMaterial = new THREE.MeshStandardMaterial({
      color: palette.lowWall,
      roughness: 0.93,
      metalness: 0.06
    });
    lowWallMaterial.name = isMediumRangeLightVariant
      ? "medium-range-low-wall-material"
      : "ironworks-low-wall-material";
    const laneStripMaterial = new THREE.MeshStandardMaterial({
      color: palette.laneStrip,
      roughness: 0.9,
      metalness: 0.14
    });
    laneStripMaterial.name = isMediumRangeLightVariant
      ? "medium-range-floor-lane-strip-material"
      : "ironworks-lane-strip-material";
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: palette.accent,
      roughness: 0.72,
      metalness: 0.38
    });

    const arenaShape = createRoundedRectShape(ironworksArenaWidth, ironworksArenaDepth, 13.2);
    const arenaFoundation = new THREE.Mesh(
      new THREE.ExtrudeGeometry(arenaShape, {
        depth: 1.6,
        steps: 1,
        bevelEnabled: true,
        bevelSegments: 2,
        bevelSize: 0.45,
        bevelThickness: 0.18,
        curveSegments: 24
      }),
      foundationMaterial
    );
    arenaFoundation.name = isMediumRangeLightVariant
      ? "medium-range-floor-foundation-slab"
      : "ironworks-foundation-slab";
    arenaFoundation.rotation.x = Math.PI * 0.5;
    addArenaMesh(arenaFoundation, {
      bulletCollision: false,
      castShadow: false,
      receiveShadow: true
    });

    const arenaDeck = new THREE.Mesh(
      new THREE.ShapeGeometry(arenaShape, 24),
      floorPlateMaterial
    );
    arenaDeck.name = isMediumRangeLightVariant
      ? "medium-range-floor-arena-deck"
      : "ironworks-arena-deck";
    arenaDeck.rotation.x = -Math.PI * 0.5;
    arenaDeck.position.y = 0.02;
    addArenaMesh(arenaDeck, {
      castShadow: false,
      receiveShadow: true
    });
    applyMediumRangeFloorColorProof(arenaDeck, floorPlateMaterial);

    const centralPadMaterial = new THREE.MeshStandardMaterial({
      color: palette.centralPad,
      roughness: 0.9,
      metalness: 0.12
    });
    centralPadMaterial.name = isMediumRangeLightVariant
      ? "medium-range-floor-central-pad-material"
      : "ironworks-central-pad-material";

    const centralPad = new THREE.Mesh(
      new THREE.CircleGeometry(8.2, 40),
      centralPadMaterial
    );
    centralPad.name = isMediumRangeLightVariant
      ? "medium-range-floor-central-pad"
      : "ironworks-central-pad";
    centralPad.rotation.x = -Math.PI * 0.5;
    centralPad.position.set(0, 0.03, 0.2);
    addArenaMesh(centralPad, {
      bulletCollision: false,
      castShadow: false,
      receiveShadow: true
    });
    applyMediumRangeFloorColorProof(centralPad, centralPadMaterial);

    const centralRing = new THREE.Mesh(
      new THREE.TorusGeometry(10.4, 0.15, 10, 36),
      trimMaterial
    );
    centralRing.rotation.x = Math.PI * 0.5;
    centralRing.position.set(0, 0.2, 0.2);
    addArenaMesh(centralRing, {
      bulletCollision: false,
      castShadow: false,
      receiveShadow: true
    });

    const laneCurves = [
      [
        new THREE.Vector3(-33.5, 0.03, 30),
        new THREE.Vector3(-35.8, 0.03, 14.5),
        new THREE.Vector3(-34.2, 0.03, -5.8),
        new THREE.Vector3(-28.2, 0.03, -27.8)
      ],
      [
        new THREE.Vector3(33.5, 0.03, 30),
        new THREE.Vector3(35.8, 0.03, 14.5),
        new THREE.Vector3(34.2, 0.03, -5.8),
        new THREE.Vector3(28.2, 0.03, -27.8)
      ],
      [
        new THREE.Vector3(-18.6, 0.03, 10.8),
        new THREE.Vector3(-8.2, 0.03, 2.6),
        new THREE.Vector3(8.2, 0.03, -2.6),
        new THREE.Vector3(18.6, 0.03, -10.8)
      ]
    ];
    for (const curvePoints of laneCurves) {
      const laneStrip = createGardenPath(curvePoints, 1.55, laneStripMaterial);
      laneStrip.name = isMediumRangeLightVariant
        ? "medium-range-floor-lane-strip"
        : "ironworks-lane-strip";
      addArenaMesh(laneStrip, {
        bulletCollision: false,
        castShadow: false,
        receiveShadow: true
      });
      applyMediumRangeFloorColorProof(laneStrip, laneStripMaterial);
    }

    const perimeterWalls = [
      { size: new THREE.Vector3(61.5, 6.4, 2.4), position: new THREE.Vector3(0, 3.2, -36.8) },
      { size: new THREE.Vector3(61.5, 6.4, 2.4), position: new THREE.Vector3(0, 3.2, 36.8) },
      { size: new THREE.Vector3(2.4, 6.4, 45.8), position: new THREE.Vector3(-45.2, 3.2, 0) },
      { size: new THREE.Vector3(2.4, 6.4, 45.8), position: new THREE.Vector3(45.2, 3.2, 0) }
    ];
    for (const wall of perimeterWalls) {
      addBoxFeature(wall.size, wall.position, wallMaterial, { collidable: true });
    }

    const cornerTankSpecs = [
      new THREE.Vector3(-37.2, 3.2, -28.4),
      new THREE.Vector3(37.2, 3.2, -28.4),
      new THREE.Vector3(-37.2, 3.2, 28.4),
      new THREE.Vector3(37.2, 3.2, 28.4)
    ];
    for (const position of cornerTankSpecs) {
      addCylinderFeature(4.7, 6.4, position, darkSteelMaterial, { collidable: true });
      addTankBands(position, 4.85, [1.8, 4.6, 6.2], trimMaterial);
    }

    addBoxFeature(new THREE.Vector3(32.5, 5.8, 1.6), new THREE.Vector3(0, 2.9, -28.2), wallMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(1.6, 5.8, 17.8), new THREE.Vector3(-16.8, 2.9, -20.8), wallMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(1.6, 5.8, 17.8), new THREE.Vector3(16.8, 2.9, -20.8), wallMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(2.2, 3.8, 2.2), new THREE.Vector3(-11.4, 1.9, -12.2), crateMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(2.2, 3.8, 2.2), new THREE.Vector3(11.4, 1.9, -12.2), crateMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(2.8, 2.4, 3.6), new THREE.Vector3(-7.6, 1.2, -20.8), crateMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(2.8, 2.4, 3.6), new THREE.Vector3(7.6, 1.2, -20.8), crateMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(8.4, 1.4, 1.4), new THREE.Vector3(0, 0.7, -15.2), lowWallMaterial, {
      collidable: true
    });

    const warehouseRoof = new THREE.Mesh(
      new THREE.CylinderGeometry(7.7, 7.7, 35.6, 28, 1, true, 0, Math.PI),
      new THREE.MeshStandardMaterial({
        color: palette.warehouseRoof,
        roughness: 0.68,
        metalness: 0.34,
        side: THREE.DoubleSide
      })
    );
    warehouseRoof.rotation.z = Math.PI * 0.5;
    warehouseRoof.position.set(0, 6.2, -21.2);
    addArenaMesh(warehouseRoof, {
      bulletCollision: false,
      castShadow: false,
      receiveShadow: true
    });

    for (const x of [-13.2, -4.4, 4.4, 13.2]) {
      const roofRib = new THREE.Mesh(
        new THREE.TorusGeometry(7.15, 0.14, 10, 24, Math.PI),
        trimMaterial
      );
      roofRib.rotation.y = Math.PI * 0.5;
      roofRib.position.set(x, 6.0, -21.2);
      addArenaMesh(roofRib, {
        bulletCollision: false,
        castShadow: false,
        receiveShadow: true
      });
    }

    addCylinderFeature(2.35, 7.4, new THREE.Vector3(29.5, 3.7, -12.4), tankMaterial, {
      collidable: true
    });
    addCylinderFeature(2.1, 6.6, new THREE.Vector3(35.2, 3.3, 13.2), tankMaterial, {
      collidable: true
    });
    addTankBands(new THREE.Vector3(29.5, 0, -12.4), 2.48, [1.8, 4.2, 6.6], accentMaterial);
    addTankBands(new THREE.Vector3(35.2, 0, 13.2), 2.22, [1.6, 3.7, 5.8], accentMaterial);
    addBoxFeature(new THREE.Vector3(6.4, 1.8, 1.6), new THREE.Vector3(24.8, 0.9, 7.4), lowWallMaterial, {
      collidable: true
    });
    addHorizontalPipeCover(9.2, 0.85, new THREE.Vector3(38.6, 0.85, -3.2), "z", pipeCoverMaterial);
    addPipeRun([
      new THREE.Vector3(29.5, 6.2, -12.4),
      new THREE.Vector3(36.4, 7.4, -4.8),
      new THREE.Vector3(35.2, 5.8, 13.2)
    ], 0.28, pipeMaterial);

    addCylinderFeature(1.85, 5.8, new THREE.Vector3(-31.4, 2.9, 11.2), tankMaterial, {
      collidable: true
    });
    addTankBands(new THREE.Vector3(-31.4, 0, 11.2), 1.96, [1.4, 3.2, 5], accentMaterial);
    addHorizontalPipeCover(11.2, 0.95, new THREE.Vector3(-28.4, 0.95, -6.2), "z", pipeCoverMaterial);
    addHorizontalPipeCover(9.4, 0.95, new THREE.Vector3(-35.2, 0.95, 15.6), "x", pipeCoverMaterial);
    addBoxFeature(new THREE.Vector3(6.4, 1.9, 1.5), new THREE.Vector3(-21.6, 0.95, 18.4), lowWallMaterial, {
      collidable: true
    });
    addPipeRun([
      new THREE.Vector3(-31.4, 4.8, 11.2),
      new THREE.Vector3(-23.2, 5.8, 4.2),
      new THREE.Vector3(-20.4, 5.5, -6.8)
    ], 0.24, pipeMaterial);

    addHorizontalPipeCover(13.6, 1, new THREE.Vector3(-16.8, 1, 3.4), "x", pipeCoverMaterial);
    addHorizontalPipeCover(13.2, 1, new THREE.Vector3(17.2, 1, -3.2), "z", pipeCoverMaterial);
    addBoxFeature(new THREE.Vector3(9.6, 1.4, 1.5), new THREE.Vector3(0, 0.7, 13.4), lowWallMaterial, {
      collidable: true
    });

    addHorizontalPipeCover(10.4, 0.8, new THREE.Vector3(-23.6, 0.8, 29.2), "x", pipeCoverMaterial);
    addHorizontalPipeCover(10.4, 0.8, new THREE.Vector3(23.6, 0.8, 29.2), "x", pipeCoverMaterial);
    addBoxFeature(new THREE.Vector3(2.8, 2.4, 2.8), new THREE.Vector3(-32.2, 1.2, 31.2), crateMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(2.8, 2.4, 2.8), new THREE.Vector3(32.2, 1.2, 31.2), crateMaterial, {
      collidable: true
    });
    addBoxFeature(new THREE.Vector3(8.6, 0.5, 2.2), new THREE.Vector3(0, 0.25, 27.4), lowWallMaterial, {
      collidable: true
    });

    addOrientedBoxFeature(
      new THREE.Vector3(8.2, 3.4, 1.2),
      new THREE.Vector3(-35.2, 1.7, -4.8),
      ruinWallMaterial,
      {
        rotation: new THREE.Euler(0, 0.18, 0),
        collidable: true
      }
    );
    addOrientedBoxFeature(
      new THREE.Vector3(1.4, 4.2, 7.2),
      new THREE.Vector3(-39.4, 2.1, 2.1),
      ruinWallMaterial,
      {
        rotation: new THREE.Euler(0, -0.22, 0),
        collidable: true
      }
    );
    addOrientedBoxFeature(
      new THREE.Vector3(5.8, 0.8, 3.4),
      new THREE.Vector3(-34.4, 1.35, 1.8),
      darkSteelMaterial,
      {
        rotation: new THREE.Euler(-0.28, 0.35, 0.08),
        collidable: true
      }
    );
    addRubbleCluster(
      new THREE.Vector3(-31.4, 0.3, 4.8),
      debrisMaterial,
      [
        {
          size: new THREE.Vector3(1.6, 0.6, 1.3),
          offset: new THREE.Vector3(-0.9, 0, -0.7),
          rotation: new THREE.Euler(0, 0.26, 0.12)
        },
        {
          size: new THREE.Vector3(1.2, 0.5, 1.5),
          offset: new THREE.Vector3(0.9, 0.02, 0.4),
          rotation: new THREE.Euler(0.08, -0.34, -0.04)
        }
      ]
    );

    addOrientedBoxFeature(
      new THREE.Vector3(7.4, 3.1, 1.2),
      new THREE.Vector3(39.2, 1.55, 14.4),
      ruinWallMaterial,
      {
        rotation: new THREE.Euler(0, -0.34, 0),
        collidable: true
      }
    );
    addHorizontalPipeCover(7.8, 0.88, new THREE.Vector3(36.8, 0.88, 19.6), "x", pipeCoverMaterial);
    addCylinderFeature(1.45, 2.8, new THREE.Vector3(33.4, 1.4, 23.4), darkSteelMaterial, {
      collidable: true
    });
    addRubbleCluster(
      new THREE.Vector3(30.8, 0.3, 17.6),
      debrisMaterial,
      [
        {
          size: new THREE.Vector3(1.5, 0.55, 1.2),
          offset: new THREE.Vector3(-0.8, 0, -0.5),
          rotation: new THREE.Euler(0, -0.24, 0.08)
        },
        {
          size: new THREE.Vector3(1.1, 0.45, 1.4),
          offset: new THREE.Vector3(0.8, 0.02, 0.5),
          rotation: new THREE.Euler(0.05, 0.31, -0.06)
        }
      ]
    );

    addOrientedBoxFeature(
      new THREE.Vector3(6.2, 1.4, 1.4),
      new THREE.Vector3(-31.8, 0.7, 20.8),
      lowWallMaterial,
      {
        rotation: new THREE.Euler(0, 0.42, 0),
        collidable: true
      }
    );
    addRubbleCluster(
      new THREE.Vector3(-27.8, 0.28, 24.2),
      debrisMaterial,
      [
        {
          size: new THREE.Vector3(1.4, 0.5, 1.2),
          offset: new THREE.Vector3(-0.7, 0, 0.1),
          rotation: new THREE.Euler(0.04, -0.38, 0.03)
        },
        {
          size: new THREE.Vector3(1.1, 0.42, 1.3),
          offset: new THREE.Vector3(0.8, 0.01, -0.3),
          rotation: new THREE.Euler(0.08, 0.22, -0.08)
        }
      ]
    );

    addOrientedBoxFeature(
      new THREE.Vector3(6.8, 3.3, 1.2),
      new THREE.Vector3(33.4, 1.65, -18.8),
      ruinWallMaterial,
      {
        rotation: new THREE.Euler(0, -0.52, 0),
        collidable: true
      }
    );
    addOrientedBoxFeature(
      new THREE.Vector3(4.6, 0.72, 2.8),
      new THREE.Vector3(35.8, 1.15, -22.4),
      darkSteelMaterial,
      {
        rotation: new THREE.Euler(-0.22, -0.45, -0.08),
        collidable: true
      }
    );
    addRubbleCluster(
      new THREE.Vector3(31.8, 0.28, -23),
      debrisMaterial,
      [
        {
          size: new THREE.Vector3(1.2, 0.45, 1.1),
          offset: new THREE.Vector3(-0.8, 0, -0.4),
          rotation: new THREE.Euler(0.03, 0.28, 0.06)
        },
        {
          size: new THREE.Vector3(1.5, 0.52, 1.2),
          offset: new THREE.Vector3(0.8, 0.02, 0.4),
          rotation: new THREE.Euler(0.06, -0.26, -0.05)
        }
      ]
    );

    const southBrace = new THREE.Mesh(
      new THREE.TorusGeometry(16.2, 0.16, 10, 34, Math.PI),
      trimMaterial
    );
    southBrace.rotation.y = Math.PI;
    southBrace.position.set(0, 5.4, 33.8);
    addArenaMesh(southBrace, {
      bulletCollision: false,
      castShadow: false,
      receiveShadow: true
    });

    console.log("customArena_rescaled_1_5x", {
      map: isMediumRangeLightVariant
        ? "Medium Range Jiggle Training light Ironworks variant"
        : ironworksYardDisplayName,
      width: ironworksArenaWidth,
      depth: ironworksArenaDepth,
      addedStructureGroups: ironworksAddedStructureGroups,
      addedStructureObjects: ironworksAddedStructureObjects
    });
    if (isMediumRangeLightVariant) {
      console.log("[MEDIUM FLOOR DIAG] buildIronworksYard light variant active", {
        visualVariant: options.visualVariant,
        mapId: ironworksYardMapId,
        mapChildren: mapGroup.children.length
      });
    }
    showStatusMessage(
      isMediumRangeLightVariant
        ? "Medium Range Jiggle Training light yard loaded."
        : "Ironworks Yard loaded from original in-game geometry.",
      2600
    );
  }

  function buildBlossomGarden() {
    applyLightingProfile({
      background: 0xcbb7ea,
      fogColor: 0xe5daf2,
      fogNear: 18,
      fogFar: 92,
      sunColor: 0xffd7bf,
      sunIntensity: 1.26,
      sunPosition: new THREE.Vector3(-24, 20, 10),
      skyColor: 0xf4e5fb,
      groundColor: 0x79886f,
      skyIntensity: 1.33
    });

    setMapSpawns(
      new THREE.Vector3(0, 0, 26),
      [
        new THREE.Vector3(-28, 0, -22),
        new THREE.Vector3(28, 0, -18),
        new THREE.Vector3(-32, 0, 10),
        new THREE.Vector3(30, 0, 16),
        new THREE.Vector3(0, 0, -30),
        new THREE.Vector3(20, 0, 28),
        new THREE.Vector3(-18, 0, 30)
      ]
    );

    const gardenRandom = createSeededRandom(20260418);
    const lawnMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c916f,
      roughness: 0.98,
      metalness: 0.02
    });
    const underlawnMaterial = new THREE.MeshStandardMaterial({
      color: 0x63715a,
      roughness: 1
    });
    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x8d8784,
      roughness: 0.95,
      metalness: 0.05
    });
    const pondStoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x716b6d,
      roughness: 0.9,
      metalness: 0.08
    });
    const waterMaterial = new THREE.MeshStandardMaterial({
      color: 0x87b6bf,
      roughness: 0.16,
      metalness: 0.22
    });
    const barkMaterial = new THREE.MeshStandardMaterial({
      color: 0x6b4a38,
      roughness: 0.97
    });
    const barkDarkMaterial = new THREE.MeshStandardMaterial({
      color: 0x523526,
      roughness: 1
    });
    const blossomMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1bfd5,
      roughness: 0.8,
      metalness: 0.02
    });
    const blossomHighlightMaterial = new THREE.MeshStandardMaterial({
      color: 0xfff2f7,
      roughness: 0.72,
      metalness: 0.01
    });
    const fallenPetalMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5d6e4,
      roughness: 0.98,
      side: THREE.DoubleSide
    });
    const lanternPostMaterial = new THREE.MeshStandardMaterial({
      color: 0x55515a,
      roughness: 0.86,
      metalness: 0.18
    });
    const lanternGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffe6c8,
      emissive: 0xffba7a,
      emissiveIntensity: 0.6,
      roughness: 0.45
    });
    const benchWoodMaterial = new THREE.MeshStandardMaterial({
      color: 0x8a6648,
      roughness: 0.9,
      metalness: 0.05
    });
    const benchFrameMaterial = new THREE.MeshStandardMaterial({
      color: 0x5e6064,
      roughness: 0.8,
      metalness: 0.28
    });
    const grassBladeMaterial = new THREE.MeshStandardMaterial({
      color: 0x6f8b61,
      roughness: 0.95,
      metalness: 0.01,
      side: THREE.DoubleSide
    });
    const flowerBloomMaterial = new THREE.MeshStandardMaterial({
      color: 0xf0bcd2,
      roughness: 0.82,
      metalness: 0.02
    });
    const flowerAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9a7d4,
      roughness: 0.84,
      metalness: 0.02
    });
    const butterflyWingMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8d8b9,
      emissive: 0xf2b8d2,
      emissiveIntensity: 0.18,
      roughness: 0.72,
      side: THREE.DoubleSide
    });
    const butterflyBodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x5c4b42,
      roughness: 0.88
    });

    const gardenBase = new THREE.Mesh(
      new THREE.CylinderGeometry(60, 63, 2.8, 96),
      underlawnMaterial
    );
    gardenBase.position.y = -1.4;
    addMapMesh(gardenBase, { castShadow: false, receiveShadow: true });

    const lawnTop = new THREE.Mesh(
      new THREE.CircleGeometry(56, 96),
      lawnMaterial
    );
    lawnTop.rotation.x = -Math.PI / 2;
    lawnTop.position.y = 0.02;
    addMapMesh(lawnTop, { castShadow: false, receiveShadow: true });

    const outerMeadow = new THREE.Mesh(
      new THREE.RingGeometry(40, 55.5, 96),
      new THREE.MeshStandardMaterial({
        color: 0x728768,
        roughness: 0.99,
        metalness: 0.01,
        side: THREE.DoubleSide
      })
    );
    outerMeadow.rotation.x = -Math.PI / 2;
    outerMeadow.position.y = 0.025;
    addMapMesh(outerMeadow, { castShadow: false, receiveShadow: true, bulletCollision: false });

    const terrainMounds = [
      { position: new THREE.Vector3(-26, 0.32, -20), scale: new THREE.Vector3(10, 2.1, 8) },
      { position: new THREE.Vector3(25, 0.28, 21), scale: new THREE.Vector3(9, 1.8, 7.5) },
      { position: new THREE.Vector3(30, 0.24, -12), scale: new THREE.Vector3(8, 1.5, 6.5) }
    ];

    for (const mound of terrainMounds) {
      const terrainMound = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 20, 16),
        new THREE.MeshStandardMaterial({
          color: 0x7f936f,
          roughness: 0.98,
          metalness: 0.01
        })
      );
      terrainMound.position.copy(mound.position);
      terrainMound.scale.copy(mound.scale);
      addMapMesh(terrainMound, { castShadow: false, receiveShadow: true, bulletCollision: false });
    }

    const westPath = createGardenPath([
      new THREE.Vector3(-38, 0.03, 25),
      new THREE.Vector3(-30, 0.03, 20),
      new THREE.Vector3(-24, 0.03, 14),
      new THREE.Vector3(-20, 0.03, 7),
      new THREE.Vector3(-22, 0.03, -2),
      new THREE.Vector3(-28, 0.03, -12),
      new THREE.Vector3(-34, 0.03, -24)
    ], 2.1, stoneMaterial);
    addMapMesh(westPath, { castShadow: false, receiveShadow: true });

    const eastPath = createGardenPath([
      new THREE.Vector3(12, 0.03, 34),
      new THREE.Vector3(18, 0.03, 24),
      new THREE.Vector3(24, 0.03, 15),
      new THREE.Vector3(28, 0.03, 5),
      new THREE.Vector3(27, 0.03, -8),
      new THREE.Vector3(22, 0.03, -18),
      new THREE.Vector3(14, 0.03, -30)
    ], 1.8, stoneMaterial);
    addMapMesh(eastPath, { castShadow: false, receiveShadow: true });

    const centralLawn = new THREE.Mesh(
      new THREE.CylinderGeometry(10.8, 11.6, 0.28, 48),
      new THREE.MeshStandardMaterial({
        color: 0x8aa07c,
        roughness: 0.97,
        metalness: 0.02
      })
    );
    centralLawn.position.y = 0.14;
    addMapMesh(centralLawn, { collidable: true, castShadow: false, receiveShadow: true });

    const pondRim = new THREE.Mesh(
      new THREE.TorusGeometry(4.8, 0.38, 14, 40),
      pondStoneMaterial
    );
    pondRim.position.set(-13.5, 0.18, 13.5);
    pondRim.rotation.x = Math.PI / 2;
    addMapMesh(pondRim, { castShadow: false, receiveShadow: true, bulletCollision: false });

    const pondWater = new THREE.Mesh(
      new THREE.CircleGeometry(4.55, 40),
      waterMaterial
    );
    pondWater.position.set(-13.5, 0.05, 13.5);
    pondWater.rotation.x = -Math.PI / 2;
    addMapMesh(pondWater, { castShadow: false, receiveShadow: true, bulletCollision: false });

    const bridgeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.7, 0.42, 0),
      new THREE.Vector3(0, 1.08, 0),
      new THREE.Vector3(2.7, 0.42, 0)
    ]);
    const bridgeShape = new THREE.Shape();
    bridgeShape.moveTo(-1.15, -0.06);
    bridgeShape.lineTo(1.15, -0.06);
    bridgeShape.lineTo(1.0, 0.08);
    bridgeShape.lineTo(-1.0, 0.08);
    bridgeShape.closePath();

    const bridgeGroup = new THREE.Group();
    bridgeGroup.position.set(-13.4, 0.14, 13.5);
    bridgeGroup.rotation.y = -0.25;

    const bridgeDeck = new THREE.Mesh(
      new THREE.ExtrudeGeometry(bridgeShape, {
        steps: 50,
        bevelEnabled: true,
        bevelSize: 0.03,
        bevelThickness: 0.02,
        extrudePath: bridgeCurve
      }),
      stoneMaterial
    );
    bridgeDeck.castShadow = true;
    bridgeDeck.receiveShadow = true;
    bridgeDeck.userData.registerBulletCollision = true;
    bridgeGroup.add(bridgeDeck);

    const leftRail = new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.7, 0.7, -1.05),
        new THREE.Vector3(0, 1.34, -1.05),
        new THREE.Vector3(2.7, 0.7, -1.05)
      ]), 24, 0.06, 6, false),
      barkDarkMaterial
    );
    leftRail.castShadow = true;
    leftRail.receiveShadow = true;
    leftRail.userData.registerBulletCollision = true;
    bridgeGroup.add(leftRail);

    const rightRail = leftRail.clone();
    rightRail.position.z = 2.1;
    bridgeGroup.add(rightRail);
    addStaticMapGroup(bridgeGroup);

    const rockPositions = [
      { position: new THREE.Vector3(-10.8, 0.85, -6.2), scale: new THREE.Vector3(1.9, 1.08, 1.45) },
      { position: new THREE.Vector3(11.1, 0.9, 6.8), scale: new THREE.Vector3(1.65, 1.14, 1.52) },
      { position: new THREE.Vector3(8.8, 0.74, -10.6), scale: new THREE.Vector3(1.38, 0.94, 1.22) },
      { position: new THREE.Vector3(-6.8, 0.78, 10.6), scale: new THREE.Vector3(1.48, 1.06, 1.28) },
      { position: new THREE.Vector3(-26, 0.92, 12), scale: new THREE.Vector3(1.95, 1.18, 1.52) },
      { position: new THREE.Vector3(24, 0.86, -22), scale: new THREE.Vector3(1.72, 1.02, 1.36) },
      { position: new THREE.Vector3(30, 0.74, 18), scale: new THREE.Vector3(1.26, 0.88, 1.18) }
    ];

    for (const rock of rockPositions) {
      const rockMesh = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.1, 0),
        stoneMaterial
      );
      rockMesh.position.copy(rock.position);
      rockMesh.scale.copy(rock.scale);
      rockMesh.rotation.set(Math.PI * 0.08, Math.random() * Math.PI, Math.PI * 0.04);
      addMapMesh(rockMesh, { collidable: true });
    }

    const benchDefinitions = [
      { position: new THREE.Vector3(-8.5, 0, 17.2), rotation: 0.72, scale: 1 },
      { position: new THREE.Vector3(18.8, 0, 10.4), rotation: -1.05, scale: 1 },
      { position: new THREE.Vector3(-24.5, 0, -6.8), rotation: 1.25, scale: 0.92 }
    ];
    for (const benchDef of benchDefinitions) {
      const bench = createGardenBench(
        benchDef.position,
        benchDef.rotation,
        { wood: benchWoodMaterial, frame: benchFrameMaterial },
        benchDef.scale
      );
      addStaticMapGroup(bench.group);
      for (const collider of bench.colliders) {
        registerObstacle(collider, { bulletCollision: false });
      }
    }

    const flowerPatchCenters = [
      new THREE.Vector3(-21, 0.03, 18),
      new THREE.Vector3(17, 0.03, 19),
      new THREE.Vector3(26, 0.03, -8),
      new THREE.Vector3(-18, 0.03, -20),
      new THREE.Vector3(-5, 0.03, 28),
      new THREE.Vector3(9, 0.03, -26)
    ];
    for (let index = 0; index < flowerPatchCenters.length; index += 1) {
      const flowerPatch = createFlowerPatchLod(
        flowerPatchCenters[index],
        900 + index * 17,
        { bloom: flowerBloomMaterial, accent: flowerAccentMaterial },
        1.3 + (index % 3) * 0.25
      );
      addStaticMapGroup(flowerPatch);
    }

    const grassPositions = [
      new THREE.Vector3(-30, 0.02, 14),
      new THREE.Vector3(-15, 0.02, 24),
      new THREE.Vector3(-6, 0.02, 30),
      new THREE.Vector3(12, 0.02, 28),
      new THREE.Vector3(25, 0.02, 18),
      new THREE.Vector3(32, 0.02, 5),
      new THREE.Vector3(28, 0.02, -12),
      new THREE.Vector3(18, 0.02, -24),
      new THREE.Vector3(0, 0.02, -30),
      new THREE.Vector3(-18, 0.02, -25),
      new THREE.Vector3(-28, 0.02, -12),
      new THREE.Vector3(-32, 0.02, 2)
    ];
    for (let index = 0; index < grassPositions.length; index += 1) {
      const grassClump = createGrassClumpLod(
        grassPositions[index],
        500 + index * 13,
        { blade: grassBladeMaterial },
        0.95 + (index % 4) * 0.18
      );
      addStaticMapGroup(grassClump);
    }

    const lanternPositions = [
      new THREE.Vector3(-6.5, 0, 12.5),
      new THREE.Vector3(-18.5, 0, 7.5),
      new THREE.Vector3(10.5, 0, -4.5),
      new THREE.Vector3(16, 0, 6.5)
    ];
    for (let index = 0; index < lanternPositions.length; index += 1) {
      const lantern = createGardenLantern(lanternPositions[index], {
        post: lanternPostMaterial,
        glow: lanternGlowMaterial
      });
      addStaticMapGroup(lantern.group);
      for (const collider of lantern.colliders) {
        registerObstacle(collider, { bulletCollision: false });
      }
    }

    const animatedHeroTreePosition = new THREE.Vector3(3.5, 0, 19.5);
    const animatedHeroTree = createAnimatedSakuraTreeFeature({
      position: animatedHeroTreePosition,
      barkMaterial,
      barkDarkMaterial,
      blossomMaterial,
      blossomHighlightMaterial,
      fallenPetalMaterial
    });
    addStaticMapGroup(animatedHeroTree.group);
    for (const collider of animatedHeroTree.colliders) {
      registerObstacle(collider, { bulletCollision: false });
    }
    showStatusMessage("Hero sakura tree is ahead-right of spawn in Blossom Garden.", 3200);

    const treeDefinitions = [];
    const treeExclusionPoints = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-13.5, 0, 13.5),
      new THREE.Vector3(-8.5, 0, 17.2),
      new THREE.Vector3(18.8, 0, 10.4),
      new THREE.Vector3(-24.5, 0, -6.8),
      animatedHeroTreePosition
    ];

    let treeAttempts = 0;
    while (treeDefinitions.length < 18 && treeAttempts < 220) {
      treeAttempts += 1;
      const x = (gardenRandom() - 0.5) * 86;
      const z = (gardenRandom() - 0.5) * 86;
      const candidate = new THREE.Vector3(x, 0, z);

      if (candidate.length() < 12) {
        continue;
      }

      if (candidate.distanceTo(new THREE.Vector3(-13.5, 0, 13.5)) < 8.5) {
        continue;
      }

      if (treeExclusionPoints.some((point) => candidate.distanceTo(point) < 6.5)) {
        continue;
      }

      if (treeDefinitions.some((treeDef) => candidate.distanceTo(new THREE.Vector3(treeDef.x, 0, treeDef.z)) < 7.8)) {
        continue;
      }

      treeDefinitions.push({
        x,
        z,
        seed: 1000 + treeAttempts * 31,
        rotation: gardenRandom() * Math.PI * 2,
        height: 7.1 + gardenRandom() * 1.6,
        canopyRadius: 4.1 + gardenRandom() * 1.15
      });
    }

    for (const treeDef of treeDefinitions) {
      const tree = createBlossomTree({
        position: new THREE.Vector3(treeDef.x, 0, treeDef.z),
        seed: treeDef.seed,
        rotation: treeDef.rotation,
        trunkHeight: treeDef.height,
        trunkRadius: 0.42 + (treeDef.seed % 3) * 0.025,
        canopyRadius: treeDef.canopyRadius,
        barkMaterial,
        barkDarkMaterial,
        blossomMaterial,
        blossomHighlightMaterial,
        fallenPetalMaterial
      });
      addStaticMapGroup(tree.group);
      for (const collider of tree.colliders) {
        registerObstacle(collider, { bulletCollision: false });
      }
    }

    const blossomPetalAnchors = [
      {
        position: animatedHeroTreePosition.clone(),
        topY: 11.2,
        spread: 5.2,
        heightRange: 4.2
      },
      ...treeDefinitions.map((treeDef) => ({
        position: new THREE.Vector3(treeDef.x, 0, treeDef.z),
        topY: treeDef.height + treeDef.canopyRadius * 0.68,
        spread: treeDef.canopyRadius * 0.95,
        heightRange: 2.8 + treeDef.canopyRadius * 0.4
      }))
    ];

    activeBlossomPetalSystem = createBlossomPetalSystem(blossomPetalAnchors, 132);
    registerEffectQualityObject(activeBlossomPetalSystem.mesh, {
      minimumQuality: "medium"
    });
    mapGroup.add(activeBlossomPetalSystem.mesh);

    const butterflyDefinitions = [
      { position: new THREE.Vector3(-18.8, 1.45, 18.2), rotation: 0.3, scale: 1.15 },
      { position: new THREE.Vector3(16.5, 1.6, 18.6), rotation: 2.1, scale: 1.05 },
      { position: new THREE.Vector3(27.4, 1.35, -8.8), rotation: -0.8, scale: 0.96 },
      { position: new THREE.Vector3(-20.2, 1.5, -19.2), rotation: 1.55, scale: 1.1 },
      { position: new THREE.Vector3(-11.8, 1.8, 15.2), rotation: -1.2, scale: 0.88 },
      { position: new THREE.Vector3(10.2, 1.55, -24.5), rotation: 0.7, scale: 1.02 }
    ];
    for (const butterflyDef of butterflyDefinitions) {
      const butterflyLod = addStaticMapGroup(createButterflyLod(
        butterflyDef.position,
        butterflyDef.rotation,
        { wing: butterflyWingMaterial, body: butterflyBodyMaterial },
        butterflyDef.scale
      ));
      registerEffectQualityObject(butterflyLod, {
        minimumQuality: "low"
      });
    }
  }

  function buildCityShowroom(origin, rotationY = 0) {
    const structuralScale = 4;
    const furnishingScale = 3.4;
    const floorTiles = [
      [-4, 0.02, 8], [0, 0.02, 8], [4, 0.02, 8],
      [-4, 0.02, 4], [0, 0.02, 4], [4, 0.02, 4]
    ];

    for (const [x, y, z] of floorTiles) {
      createCityAssetInstance(cityAssetPaths.floorFull, {
        position: createLocalOffset(origin, x, y, z, rotationY),
        rotationY,
        scale: structuralScale,
        castShadow: false,
        bulletCollision: false
      });
    }

    createCityAssetInstance(cityAssetPaths.floorCornerRound, {
      position: createLocalOffset(origin, 8, 0.02, 8, rotationY),
      rotationY,
      scale: structuralScale,
      castShadow: false,
      bulletCollision: false
    });

    const wallPieces = [
      { asset: cityAssetPaths.wallCornerRound, x: -4, z: 0, rot: rotationY + Math.PI * 0.5 },
      { asset: cityAssetPaths.wall, x: 0, z: 0, rot: rotationY },
      { asset: cityAssetPaths.wallWindow, x: 4, z: 0, rot: rotationY },
      { asset: cityAssetPaths.wallCornerRound, x: 8, z: 0, rot: rotationY + Math.PI },
      { asset: cityAssetPaths.wall, x: -4, z: 4, rot: rotationY + Math.PI * 0.5 },
      { asset: cityAssetPaths.wall, x: 8, z: 4, rot: rotationY - Math.PI * 0.5 }
    ];

    for (const piece of wallPieces) {
      createCityAssetInstance(piece.asset, {
        position: createLocalOffset(origin, piece.x, 0.02, piece.z, rotationY),
        rotationY: piece.rot,
        scale: structuralScale,
        collidable: true,
        colliderPadding: 0.15,
        colliderMinHeight: 3
      });
    }

    createCityAssetInstance(cityAssetPaths.wallDoorwayWide, {
      position: createLocalOffset(origin, -4, 0.02, 8, rotationY),
      rotationY: rotationY + Math.PI * 0.5,
      scale: structuralScale,
      collidable: true,
      colliderPadding: 0.1,
      colliderMinHeight: 3
    });

    createCityAssetInstance(cityAssetPaths.doorwayOpen, {
      position: createLocalOffset(origin, 8, 0.02, 8, rotationY),
      rotationY: rotationY - Math.PI * 0.5,
      scale: structuralScale,
      bulletCollision: false
    });

    createCityAssetInstance(cityAssetPaths.awningWide, {
      position: createLocalOffset(origin, 1.5, 3.85, 8.4, rotationY),
      rotationY: rotationY + Math.PI,
      scale: structuralScale * 1.08,
      bulletCollision: false
    });

    createCityAssetInstance(cityAssetPaths.loungeSofa, {
      position: createLocalOffset(origin, 1.5, 0.02, 1.3, rotationY),
      rotationY: rotationY + Math.PI,
      scale: furnishingScale,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.tableRound, {
      position: createLocalOffset(origin, 1.7, 0.02, 4.6, rotationY),
      rotationY,
      scale: furnishingScale * 0.95,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.chairRounded, {
      position: createLocalOffset(origin, -0.2, 0.02, 4.2, rotationY),
      rotationY: rotationY + Math.PI * 0.25,
      scale: furnishingScale,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.chairRounded, {
      position: createLocalOffset(origin, 3.9, 0.02, 4.4, rotationY),
      rotationY: rotationY - Math.PI * 0.4,
      scale: furnishingScale,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.pottedPlant, {
      position: createLocalOffset(origin, -3.1, 0.02, 6.7, rotationY),
      rotationY,
      scale: furnishingScale * 1.05,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.lampFloor, {
      position: createLocalOffset(origin, 6.8, 0.02, 1.5, rotationY),
      rotationY,
      scale: furnishingScale,
      bulletCollision: false
    });
  }

  function buildCityApartmentVignette(origin, rotationY = 0) {
    const structuralScale = 4;
    const furnishingScale = 3.2;
    const floorTiles = [
      [0, 0.02, 4], [4, 0.02, 4],
      [0, 0.02, 0], [4, 0.02, 0]
    ];

    for (const [x, y, z] of floorTiles) {
      createCityAssetInstance(cityAssetPaths.floorFull, {
        position: createLocalOffset(origin, x, y, z, rotationY),
        rotationY,
        scale: structuralScale,
        castShadow: false,
        bulletCollision: false
      });
    }

    const walls = [
      { asset: cityAssetPaths.wall, x: 0, z: 0, rot: rotationY },
      { asset: cityAssetPaths.wallWindow, x: 4, z: 0, rot: rotationY },
      { asset: cityAssetPaths.wallCornerRound, x: 8, z: 0, rot: rotationY + Math.PI },
      { asset: cityAssetPaths.wall, x: 8, z: 4, rot: rotationY - Math.PI * 0.5 },
      { asset: cityAssetPaths.wallDoorwayWide, x: 0, z: 8, rot: rotationY + Math.PI * 0.5 }
    ];

    for (const piece of walls) {
      createCityAssetInstance(piece.asset, {
        position: createLocalOffset(origin, piece.x, 0.02, piece.z, rotationY),
        rotationY: piece.rot,
        scale: structuralScale,
        collidable: true,
        colliderPadding: 0.12,
        colliderMinHeight: 3
      });
    }

    createCityAssetInstance(cityAssetPaths.kitchenCornerRound, {
      position: createLocalOffset(origin, 0.4, 0.02, 0.6, rotationY),
      rotationY,
      scale: furnishingScale,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.kitchenCabinet, {
      position: createLocalOffset(origin, 3.1, 0.02, 0.6, rotationY),
      rotationY,
      scale: furnishingScale,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.kitchenSink, {
      position: createLocalOffset(origin, 5.9, 0.02, 0.7, rotationY),
      rotationY,
      scale: furnishingScale,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.kitchenFridge, {
      position: createLocalOffset(origin, 7.7, 0.02, 2.4, rotationY),
      rotationY: rotationY - Math.PI * 0.5,
      scale: furnishingScale * 0.96,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.tableRound, {
      position: createLocalOffset(origin, 2.1, 0.02, 5.5, rotationY),
      rotationY,
      scale: furnishingScale * 0.88,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.chairRounded, {
      position: createLocalOffset(origin, 0.7, 0.02, 5.1, rotationY),
      rotationY: rotationY + Math.PI * 0.15,
      scale: furnishingScale * 0.9,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.chairRounded, {
      position: createLocalOffset(origin, 3.7, 0.02, 6.2, rotationY),
      rotationY: rotationY - Math.PI * 0.3,
      scale: furnishingScale * 0.9,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.loungeSofa, {
      position: createLocalOffset(origin, 5.9, 0.02, 5.8, rotationY),
      rotationY: rotationY + Math.PI * 0.5,
      scale: furnishingScale * 0.94,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.lampFloor, {
      position: createLocalOffset(origin, 7.2, 0.02, 6.7, rotationY),
      rotationY,
      scale: furnishingScale,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.pottedPlant, {
      position: createLocalOffset(origin, 0.3, 0.02, 7.4, rotationY),
      rotationY,
      scale: furnishingScale,
      bulletCollision: false
    });
  }

  function formatMapPipelineError(error) {
    if (error instanceof Error && error.message) {
      return error.message;
    }

    return String(error);
  }

  function createMapPipelineContext(mapId, requestSource = "unknown") {
    const normalizedMapId = normalizeMapId(mapId);
    return {
      mapId: normalizedMapId,
      mapName:
        normalizedMapId === warehouseRailyardMapId
          ? warehouseRailyardDisplayName
          : getMapDisplayName(normalizedMapId),
      requestSource,
      startedAt: performance.now()
    };
  }

  function logMapPipelineStep(context, step, details = {}, level = "log") {
    if (!context || context.mapId !== warehouseRailyardMapId) {
      return;
    }

    console[level]("[WAREHOUSE MAP PIPELINE]", {
      step,
      mapId: context.mapId,
      mapName: context.mapName,
      requestSource: context.requestSource,
      elapsedMs: Number((performance.now() - context.startedAt).toFixed(1)),
      ...details
    });
  }

  async function verifyWarehouseRailyardAssetPath(context) {
    logMapPipelineStep(context, "GLB file path resolved", {
      relativePath: warehouseRailyardModelRelativePath,
      resolvedUrl: warehouseRailyardModelUrl
    });

    const response = await fetch(warehouseRailyardModelUrl, {
      method: "HEAD",
      cache: "no-store"
    });

    if (!response.ok) {
      if (response.status === 405 || response.status === 501) {
        logMapPipelineStep(context, "GLB path verification skipped", {
          relativePath: warehouseRailyardModelRelativePath,
          resolvedUrl: warehouseRailyardModelUrl,
          reason: `HEAD request unsupported (HTTP ${response.status})`
        }, "warn");
        return;
      }

      const verificationError = new Error(
        `Warehouse Railyard GLB path returned HTTP ${response.status} ${response.statusText}`.trim()
      );
      logMapPipelineStep(context, "GLB path verification failure", {
        relativePath: warehouseRailyardModelRelativePath,
        resolvedUrl: warehouseRailyardModelUrl,
        reason: verificationError.message
      }, "error");
      throw verificationError;
    }

    const contentLengthValue = Number(response.headers.get("content-length"));
    logMapPipelineStep(context, "GLB path verified", {
      relativePath: warehouseRailyardModelRelativePath,
      resolvedUrl: warehouseRailyardModelUrl,
      exists: true,
      contentLength: Number.isFinite(contentLengthValue) ? contentLengthValue : null
    });
  }

  function loadWarehouseRailyardScene(context = null) {
    return new Promise((resolve, reject) => {
      let settled = false;
      let slowLoadWarningTriggered = false;
      const slowLoadWarningTimeoutId = window.setTimeout(() => {
        if (settled) {
          return;
        }

        slowLoadWarningTriggered = true;
        logMapPipelineStep(context, "slow load warning", {
          thresholdMs: warehouseRailyardSlowLoadWarningMs,
          resolvedUrl: warehouseRailyardModelUrl
        }, "warn");
        showStatusMessage("Warehouse Railyard is still loading... waiting for the large GLB.", 0);
      }, warehouseRailyardSlowLoadWarningMs);
      const fatalTimeoutId = window.setTimeout(() => {
        if (settled) {
          return;
        }

        settled = true;
        window.clearTimeout(slowLoadWarningTimeoutId);
        const timeoutError = new Error(
          `Warehouse Railyard GLB load timeout after ${warehouseRailyardFatalLoadTimeoutMs}ms.`
        );
        logMapPipelineStep(context, "timeout expiration", {
          timeoutMs: warehouseRailyardFatalLoadTimeoutMs,
          resolvedUrl: warehouseRailyardModelUrl,
          reason: timeoutError.message
        }, "error");
        reject(timeoutError);
      }, warehouseRailyardFatalLoadTimeoutMs);

      gltfLoader.load(
        warehouseRailyardModelUrl,
        (gltf) => {
          window.clearTimeout(slowLoadWarningTimeoutId);
          window.clearTimeout(fatalTimeoutId);
          const loadedScene = gltf.scene || gltf.scenes?.[0];
          if (settled) {
            if (loadedScene) {
              disposeDetachedSceneResources(loadedScene);
            }
            return;
          }
          settled = true;
          if (!loadedScene) {
            reject(new Error("Warehouse Railyard GLB did not contain a scene root."));
            return;
          }
          logMapPipelineStep(context, "GLB load success", {
            resolvedUrl: warehouseRailyardModelUrl,
            loadedAfterSlowWarning: slowLoadWarningTriggered
          });
          resolve(loadedScene);
        },
        undefined,
        (error) => {
          window.clearTimeout(slowLoadWarningTimeoutId);
          window.clearTimeout(fatalTimeoutId);
          if (settled) {
            return;
          }
          settled = true;
          logMapPipelineStep(context, "GLB load failure", {
            resolvedUrl: warehouseRailyardModelUrl,
            reason: formatMapPipelineError(error)
          }, "error");
          reject(error);
        }
      );
    });
  }

  function getWarehouseAssetColliderCategory(name = "") {
    const categoryMatch = /^COL_([^_]+)/i.exec(name.trim());
    if (!categoryMatch) {
      return "Unknown";
    }

    const rawCategory = categoryMatch[1];
    return rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1).toLowerCase();
  }

  function isWarehouseSpawnSupportColliderCategory(category) {
    return category === "Floor" || category === "Platform";
  }

  async function buildWarehouseRailyard(buildId, context = null) {
    logMapPipelineStep(context, "map load started", {
      buildId,
      resolvedUrl: warehouseRailyardModelUrl
    });
    await verifyWarehouseRailyardAssetPath(context);
    logMapPipelineStep(context, "GLB load start", {
      buildId,
      resolvedUrl: warehouseRailyardModelUrl
    });
    let importedScene = null;

    try {
      importedScene = await loadWarehouseRailyardScene(context);
    } catch (error) {
      logMapPipelineStep(context, "GLB load failure", {
        buildId,
        reason: formatMapPipelineError(error)
      }, "error");
      throw error;
    }

    if (buildId !== activeMapBuildId) {
      disposeDetachedSceneResources(importedScene);
      return;
    }

    applyLightingProfile({
      background: 0x70717c,
      fogColor: 0x8c8a8c,
      fogNear: 30,
      fogFar: 165,
      sunColor: 0xffdfc7,
      sunIntensity: 1.04,
      sunPosition: new THREE.Vector3(-18, 24, 15),
      skyColor: 0xd8dde7,
      groundColor: 0x5c625b,
      skyIntensity: 1.03
    });

    const rawBounds = new THREE.Box3().setFromObject(importedScene);
    if (rawBounds.isEmpty()) {
      disposeDetachedSceneResources(importedScene);
      throw new Error("Warehouse Railyard GLB bounds were empty.");
    }

    const rawCenter = new THREE.Vector3();
    const warehouseScale = 5.5;
    rawBounds.getCenter(rawCenter);

    const warehouseMapRoot = new THREE.Group();
    warehouseMapRoot.name = "warehouse-railyard-map-root";
    const warehouseVisualRoot = new THREE.Group();
    warehouseVisualRoot.name = "warehouse-railyard-visual-root";
    const warehouseModel = importedScene;
    warehouseModel.name = "warehouse-railyard-model";
    warehouseModel.position.set(-rawCenter.x * warehouseScale, 0, -rawCenter.z * warehouseScale);
    warehouseModel.scale.setScalar(warehouseScale);

    let warehouseVisualMeshCount = 0;
    const warehouseColliderSourceObjects = [];
    const warehouseColliderCategoryCounts = {};
    const localMeshSize = new THREE.Vector3();
    warehouseModel.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      if (object.name.startsWith("COL_")) {
        const category = getWarehouseAssetColliderCategory(object.name);
        warehouseColliderSourceObjects.push({
          category,
          object,
          sourceName: object.name
        });
        warehouseColliderCategoryCounts[category] = (warehouseColliderCategoryCounts[category] ?? 0) + 1;
        object.visible = false;
        object.castShadow = false;
        object.receiveShadow = false;
        object.userData.registerBulletCollision = false;
        object.userData.ignoreShotRay = true;
        object.frustumCulled = true;
        return;
      }

      warehouseVisualMeshCount += 1;
      object.castShadow = false;
      object.userData.registerBulletCollision = false;
      object.frustumCulled = true;

      if (!object.geometry.boundingBox) {
        object.geometry.computeBoundingBox();
      }
      object.geometry.boundingBox?.getSize(localMeshSize);
      object.receiveShadow = Math.max(localMeshSize.x, localMeshSize.y, localMeshSize.z) >= 0.24;
    });

    warehouseVisualRoot.add(warehouseModel);
    warehouseVisualRoot.updateMatrix();
    warehouseVisualRoot.updateMatrixWorld(true);
    warehouseVisualRoot.matrixAutoUpdate = false;
    warehouseMapRoot.add(warehouseVisualRoot);
    warehouseMapRoot.updateMatrix();
    warehouseMapRoot.updateMatrixWorld(true);
    warehouseMapRoot.matrixAutoUpdate = false;
    mapGroup.add(warehouseMapRoot);

    logMapPipelineStep(context, "visual map attached to scene", {
      meshes: warehouseVisualMeshCount,
      hiddenColliderSources: warehouseColliderSourceObjects.length,
      scale: warehouseScale,
      source: warehouseRailyardModelUrl
    });

    logMapPipelineStep(context, "collider assets discovered", {
      total: warehouseColliderSourceObjects.length,
      categories: warehouseColliderCategoryCounts
    });

    if (warehouseColliderSourceObjects.length === 0) {
      throw new Error("Warehouse Railyard GLB did not contain any COL_ collider meshes.");
    }

    const warehouseMapBounds = new THREE.Box3().setFromObject(warehouseVisualRoot);
    const warehouseMapCenter = new THREE.Vector3();
    warehouseMapBounds.getCenter(warehouseMapCenter);
    const warehouseRuntimeColliders = [];
    const warehouseSupportColliders = [];

    for (const sourceCollider of warehouseColliderSourceObjects) {
      const {
        category,
        object,
        sourceName
      } = sourceCollider;
      const createdCollider = createBoundsColliderFromObject(object, {
        minWidth: 0.1,
        minHeight: 0.1,
        minDepth: 0.1,
        name: sourceName,
        bulletCollision: category !== "Floor",
        supportOnly: category === "Floor",
        metadata: {
          warehouseColliderType: "asset-collider",
          warehouseColliderSource: sourceName,
          warehouseColliderCategory: category
        }
      });

      if (!createdCollider) {
        logMapPipelineStep(context, "warehouse collider creation skipped", {
          sourceName,
          category,
          reason: "source bounds were empty"
        }, "warn");
        continue;
      }

      const runtimeColliderEntry = {
        category,
        collider: createdCollider,
        sourceName
      };
      warehouseRuntimeColliders.push(runtimeColliderEntry);

      if (isWarehouseSpawnSupportColliderCategory(category)) {
        warehouseSupportColliders.push(runtimeColliderEntry);
      }
    }

    if (warehouseRuntimeColliders.length === 0) {
      throw new Error("Warehouse Railyard could not create runtime colliders from COL_ meshes.");
    }

    const primaryWarehouseSupportCollider = (
      warehouseSupportColliders.find(({ sourceName }) => sourceName === "COL_Floor_Main") ||
      warehouseSupportColliders.find(({ category }) => category === "Floor") ||
      warehouseSupportColliders[0] ||
      null
    );

    if (!primaryWarehouseSupportCollider?.collider?.userData?.collider) {
      throw new Error("Warehouse Railyard is missing a usable floor/platform collider for spawn validation.");
    }

    const primaryWarehouseSupportBounds = primaryWarehouseSupportCollider.collider.userData.collider;

    logMapPipelineStep(context, "simplified colliders created", {
      total: warehouseRuntimeColliders.length,
      supportSurfaceCount: warehouseSupportColliders.length,
      categories: warehouseColliderCategoryCounts
    });
    logMapPipelineStep(context, "collision setup complete", {
      primarySupportCollider: primaryWarehouseSupportCollider.sourceName,
      primarySupportTopY: Number(primaryWarehouseSupportBounds.max.y.toFixed(2)),
      colliderCount: warehouseRuntimeColliders.length
    });

    const warehouseStructure = warehouseVisualRoot.getObjectByName("WASEHOUSE_10");
    if (!warehouseStructure) {
      throw new Error("Warehouse Railyard missing WASEHOUSE_10 structure node.");
    }

    const warehouseBounds = new THREE.Box3().setFromObject(warehouseStructure);
    const warehouseCenter = new THREE.Vector3();
    const warehouseSize = new THREE.Vector3();
    warehouseBounds.getCenter(warehouseCenter);
    warehouseBounds.getSize(warehouseSize);

    const playableMarginX = 6;
    const playableMarginZ = 7;
    const isWarehouseSpawnWithinBounds = (candidate) => (
      candidate.x >= warehouseMapBounds.min.x + playableMarginX &&
      candidate.x <= warehouseMapBounds.max.x - playableMarginX &&
      candidate.z >= warehouseMapBounds.min.z + playableMarginZ &&
      candidate.z <= warehouseMapBounds.max.z - playableMarginZ
    );
    const resolveWarehouseSpawnSupportSurface = (candidate, halfExtents) => {
      let bestSupportSurface = null;

      for (const supportCollider of warehouseSupportColliders) {
        const supportBounds = supportCollider.collider?.userData?.collider;
        if (!supportBounds) {
          continue;
        }

        if (!footprintOverlapsCollider(candidate, halfExtents, supportBounds)) {
          continue;
        }

        if (Math.abs(supportBounds.max.y - candidate.y) > playerCollisionConfig.groundSnapDistance) {
          continue;
        }

        if (!bestSupportSurface || supportBounds.max.y > bestSupportSurface.bounds.max.y) {
          bestSupportSurface = {
            bounds: supportBounds,
            category: supportCollider.category,
            sourceName: supportCollider.sourceName
          };
        }
      }

      return bestSupportSurface;
    };
    const validateWarehouseSpawnCandidate = (candidate, halfExtents) => {
      const withinPlayableBounds = isWarehouseSpawnWithinBounds(candidate);
      const supportSurface = withinPlayableBounds
        ? resolveWarehouseSpawnSupportSurface(candidate, halfExtents)
        : null;
      const colliding = withinPlayableBounds ? collidesAt(candidate, halfExtents) : true;
      return {
        withinPlayableBounds,
        onKnownSolidFloor: Boolean(supportSurface),
        colliding,
        supportSurfaceCategory: supportSurface?.category ?? null,
        supportSurfaceName: supportSurface?.sourceName ?? null,
        supportSurfaceY: supportSurface ? Number(supportSurface.bounds.max.y.toFixed(2)) : null,
        valid: withinPlayableBounds && Boolean(supportSurface) && !colliding
      };
    };

    const warehouseSpawnY = primaryWarehouseSupportBounds.max.y;
    const buildWarehouseSpawnVector = (x, z) => new THREE.Vector3(x, warehouseSpawnY, z);
    const guaranteedSafeWarehouseSpawn = buildWarehouseSpawnVector(
      warehouseCenter.x,
      warehouseCenter.z - warehouseSize.z * 0.72
    );
    const playerSpawnCandidates = [
      {
        label: "guaranteed-safe-yard-spawn",
        position: guaranteedSafeWarehouseSpawn
      },
      {
        label: "warehouse-center-spawn",
        position: buildWarehouseSpawnVector(warehouseCenter.x, warehouseCenter.z)
      },
      {
        label: "west-yard-spawn",
        position: buildWarehouseSpawnVector(warehouseCenter.x - warehouseSize.x * 0.74, warehouseCenter.z)
      },
      {
        label: "east-yard-spawn",
        position: buildWarehouseSpawnVector(warehouseCenter.x + warehouseSize.x * 0.74, warehouseCenter.z)
      },
      {
        label: "north-yard-spawn",
        position: buildWarehouseSpawnVector(warehouseCenter.x, warehouseCenter.z + warehouseSize.z * 0.58)
      }
    ];
    let selectedPlayerSpawnEntry = playerSpawnCandidates[0];
    let selectedPlayerSpawnValidation = validateWarehouseSpawnCandidate(
      selectedPlayerSpawnEntry.position,
      playerHalfExtents
    );
    for (const candidate of playerSpawnCandidates) {
      const validation = validateWarehouseSpawnCandidate(candidate.position, playerHalfExtents);
      if (validation.valid) {
        selectedPlayerSpawnEntry = candidate;
        selectedPlayerSpawnValidation = validation;
        break;
      }
    }

    logMapPipelineStep(
      context,
      selectedPlayerSpawnValidation.valid ? "spawn validation success" : "spawn validation failure",
      {
        candidate: selectedPlayerSpawnEntry.label,
        withinPlayableBounds: selectedPlayerSpawnValidation.withinPlayableBounds,
        onKnownSolidFloor: selectedPlayerSpawnValidation.onKnownSolidFloor,
        colliding: selectedPlayerSpawnValidation.colliding,
        supportSurface: selectedPlayerSpawnValidation.supportSurfaceName,
        supportCategory: selectedPlayerSpawnValidation.supportSurfaceCategory,
        supportY: selectedPlayerSpawnValidation.supportSurfaceY
      },
      selectedPlayerSpawnValidation.valid ? "log" : "warn"
    );

    const validatedPlayerSpawn = selectedPlayerSpawnEntry.position.clone();
    logMapPipelineStep(context, "spawn point resolved", {
      label: selectedPlayerSpawnEntry.label,
      x: Number(validatedPlayerSpawn.x.toFixed(2)),
      y: Number(validatedPlayerSpawn.y.toFixed(2)),
      z: Number(validatedPlayerSpawn.z.toFixed(2))
    });
    logMapPipelineStep(context, "floor detection success", {
      label: selectedPlayerSpawnEntry.label,
      onKnownSolidFloor: selectedPlayerSpawnValidation.onKnownSolidFloor,
      supportSurface: selectedPlayerSpawnValidation.supportSurfaceName,
      supportSurfaceTopY: selectedPlayerSpawnValidation.supportSurfaceY
    });

    const enemySpawnCandidates = [
      buildWarehouseSpawnVector(warehouseCenter.x - 28, warehouseCenter.z - 26),
      buildWarehouseSpawnVector(warehouseCenter.x + 26, warehouseCenter.z - 28),
      buildWarehouseSpawnVector(warehouseCenter.x - 30, warehouseCenter.z + 24),
      buildWarehouseSpawnVector(warehouseCenter.x + 28, warehouseCenter.z + 27),
      buildWarehouseSpawnVector(warehouseCenter.x - 12, warehouseCenter.z - 44),
      buildWarehouseSpawnVector(warehouseCenter.x + 10, warehouseCenter.z + 45),
      buildWarehouseSpawnVector(warehouseCenter.x - 37, warehouseCenter.z + 6),
      buildWarehouseSpawnVector(warehouseCenter.x + 36, warehouseCenter.z - 8),
      buildWarehouseSpawnVector(warehouseCenter.x, warehouseCenter.z - 34),
      buildWarehouseSpawnVector(warehouseCenter.x, warehouseCenter.z + 34)
    ];
    const validatedEnemySpawns = [];
    for (const candidate of enemySpawnCandidates) {
      const validation = validateWarehouseSpawnCandidate(candidate, enemyHalfExtents);
      if (validation.valid) {
        validatedEnemySpawns.push(candidate.clone());
      }
      if (validatedEnemySpawns.length >= 7) {
        break;
      }
    }

    const fallbackEnemySpawns = [
      buildWarehouseSpawnVector(warehouseMapCenter.x - 22, warehouseMapCenter.z - 18),
      buildWarehouseSpawnVector(warehouseMapCenter.x + 22, warehouseMapCenter.z - 18),
      buildWarehouseSpawnVector(warehouseMapCenter.x - 22, warehouseMapCenter.z + 18),
      buildWarehouseSpawnVector(warehouseMapCenter.x + 22, warehouseMapCenter.z + 18),
      buildWarehouseSpawnVector(warehouseMapCenter.x - 14, warehouseMapCenter.z + 32),
      buildWarehouseSpawnVector(warehouseMapCenter.x + 14, warehouseMapCenter.z - 32),
      buildWarehouseSpawnVector(warehouseMapCenter.x, warehouseMapCenter.z - 26)
    ];
    for (const candidate of fallbackEnemySpawns) {
      if (validatedEnemySpawns.length >= 7) {
        break;
      }
      const validation = validateWarehouseSpawnCandidate(candidate, enemyHalfExtents);
      if (validation.valid) {
        validatedEnemySpawns.push(candidate.clone());
      }
    }

    while (validatedEnemySpawns.length < 7) {
      validatedEnemySpawns.push(buildWarehouseSpawnVector(
        warehouseMapCenter.x + (validatedEnemySpawns.length % 2 === 0 ? 18 : -18),
        warehouseMapCenter.z + (Math.floor(validatedEnemySpawns.length / 2) - 1.5) * 14
      ));
    }

    logMapPipelineStep(context, "enemy spawn validation success", {
      requested: enemySpawnCandidates.length,
      accepted: validatedEnemySpawns.length,
      points: validatedEnemySpawns.map((spawn) => ({
        x: Number(spawn.x.toFixed(2)),
        y: Number(spawn.y.toFixed(2)),
        z: Number(spawn.z.toFixed(2))
      }))
    });

    setMapSpawns(validatedPlayerSpawn, validatedEnemySpawns);
    logMapPipelineStep(context, "map ready success", {
      buildId,
      playerSpawn: {
        x: Number(validatedPlayerSpawn.x.toFixed(2)),
        y: Number(validatedPlayerSpawn.y.toFixed(2)),
        z: Number(validatedPlayerSpawn.z.toFixed(2))
      },
      enemySpawnCount: validatedEnemySpawns.length,
      mapChildren: mapGroup.children.length
    });
  }

  async function buildProceduralCity(buildId) {
    console.log("Procedural City stable load start");
    const template = await Promise.race([
      loadCityAssetTemplate(proceduralCityModelUrl),
      new Promise((_, reject) => {
        window.setTimeout(() => {
          reject(new Error("Procedural City load timeout"));
        }, 12000);
      })
    ]);
    console.log("Procedural City stable model loaded");

    if (buildId !== activeMapBuildId) {
      return;
    }

    applyLightingProfile({
      background: 0x8a7ca7,
      fogColor: 0xc9bfdc,
      fogNear: 32,
      fogFar: 170,
      sunColor: 0xffd7c1,
      sunIntensity: 1.06,
      sunPosition: new THREE.Vector3(-22, 24, 16),
      skyColor: 0xf2e7ff,
      groundColor: 0x5d6067,
      skyIntensity: 1.1
    });

    const rawBounds = new THREE.Box3().setFromObject(template);
    const rawCenter = new THREE.Vector3();
    rawBounds.getCenter(rawCenter);

    const cityScale = 2.5;
    const cityWrapper = new THREE.Group();
    const cityModel = template.clone(true);
    cityModel.name = "procedural-city-model";
    cityModel.scale.set(cityScale, cityScale, cityScale);
    const roadSurfaceLocalY = 0.115;
    cityModel.position.set(
      -rawCenter.x * cityScale,
      -roadSurfaceLocalY * cityScale,
      -rawCenter.z * cityScale
    );
    proceduralCityChunkState.chunks.length = 0;
    proceduralCityChunkState.activeChunkCount = -1;
    cityModel.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      object.receiveShadow = true;
      object.frustumCulled = object.userData.disableFrustumCulling !== true;
      object.userData.registerBulletCollision = false;
      object.matrixAutoUpdate = false;
    });
    cityWrapper.add(cityModel);
    cityWrapper.updateMatrix();
    cityWrapper.updateMatrixWorld(true);
    cityWrapper.matrixAutoUpdate = false;
    mapGroup.add(cityWrapper);
    console.log("Procedural City added to scene");

    await new Promise((resolve) => {
      window.setTimeout(resolve, 0);
    });

    if (buildId !== activeMapBuildId) {
      if (cityWrapper.parent) {
        cityWrapper.parent.remove(cityWrapper);
      }
      proceduralCityChunkState.chunks.length = 0;
      proceduralCityChunkState.activeChunkCount = -1;
      return;
    }

    const cityBounds = new THREE.Box3().setFromObject(cityWrapper);
    const citySize = new THREE.Vector3();
    const cityCenter = new THREE.Vector3();
    cityBounds.getSize(citySize);
    cityBounds.getCenter(cityCenter);
    const roadSurfaceY = cityBounds.min.y;

    const supportGround = new THREE.Mesh(
      new THREE.PlaneGeometry(citySize.x * 1.12, citySize.z * 1.12),
      new THREE.MeshStandardMaterial({
        color: 0x4d4f59,
        roughness: 0.97,
        metalness: 0.04
      })
    );
    supportGround.rotation.x = -Math.PI / 2;
    supportGround.position.set(cityCenter.x, roadSurfaceY - 0.04, cityCenter.z);
    addMapMesh(supportGround, {
      castShadow: false,
      receiveShadow: true,
      bulletCollision: false
    });

    const walkableSupportThickness = 1.6;
    const walkableSupport = new THREE.Mesh(
      new THREE.BoxGeometry(citySize.x * 1.06, walkableSupportThickness, citySize.z * 1.06),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    walkableSupport.position.set(
      cityCenter.x,
      roadSurfaceY - walkableSupportThickness * 0.5,
      cityCenter.z
    );
    walkableSupport.visible = false;
    walkableSupport.userData.registerBulletCollision = false;
    walkableSupport.userData.ignoreShotRay = true;
    walkableSupport.userData.supportOnly = true;
    addMapMesh(walkableSupport, {
      collidable: true,
      bulletCollision: false,
      castShadow: false,
      receiveShadow: false
    });

    const derivedProceduralCityColliderCount = registerProceduralCityNonGroundPlayerColliders(
      cityWrapper,
      roadSurfaceY
    );
    proceduralCityCollisionState.enabled = false;
    proceduralCityCollisionState.solidZones.length = 0;
    proceduralCityCollisionState.lastBlockedZoneId = "";
    proceduralCityCollisionState.lastBlockedColliderId = "";
    console.log("Procedural City collider movement checks active:", derivedProceduralCityColliderCount);

    const streetX = citySize.x * 0.18;
    const streetZ = citySize.z * 0.18;
    const roadSpawnY = roadSurfaceY + 0.12;
    const streetCandidateOffsets = [
      [0, 0],
      [0.08, 0],
      [-0.08, 0],
      [0, 0.08],
      [0, -0.08],
      [0.12, 0],
      [-0.12, 0],
      [0, 0.12],
      [0, -0.12],
      [0.08, 0.08],
      [-0.08, 0.08],
      [0.08, -0.08],
      [-0.08, -0.08],
      [0.16, 0],
      [-0.16, 0],
      [0, 0.16],
      [0, -0.16],
      [0.16, 0.08],
      [-0.16, 0.08],
      [0.16, -0.08],
      [-0.16, -0.08],
      [0.2, 0],
      [-0.2, 0],
      [0, 0.2],
      [0, -0.2],
      [0.24, 0.14],
      [-0.24, 0.14],
      [0.24, -0.14],
      [-0.24, -0.14]
    ];
    const openStreetSpawns = [];

    for (const [offsetX, offsetZ] of streetCandidateOffsets) {
      const candidate = new THREE.Vector3(
        cityCenter.x + citySize.x * offsetX,
        roadSpawnY,
        cityCenter.z + citySize.z * offsetZ
      );

      if (!collidesAt(candidate)) {
        openStreetSpawns.push(candidate);
      }
    }

    openStreetSpawns.sort((left, right) => (
      left.distanceToSquared(cityCenter) - right.distanceToSquared(cityCenter)
    ));

    const playerSpawnPoint = openStreetSpawns[0] || new THREE.Vector3(
      cityCenter.x,
      roadSpawnY,
      cityCenter.z
    );
    const enemyStreetSpawnPoints = openStreetSpawns.slice(1, 8);

    while (enemyStreetSpawnPoints.length < 7) {
      const fallbackIndex = enemyStreetSpawnPoints.length;
      enemyStreetSpawnPoints.push(new THREE.Vector3(
        cityCenter.x + (fallbackIndex % 2 === 0 ? streetX : -streetX),
        roadSpawnY,
        cityCenter.z + (Math.floor(fallbackIndex / 2) - 1.5) * streetZ * 0.7
      ));
    }
    setMapSpawns(playerSpawnPoint, enemyStreetSpawnPoints);

    console.log("Procedural City stable setup complete");
    showStatusMessage("Procedural City loaded from the attached GLB.", 2600);
  }

  async function buildSunsetCity(buildId) {
    await preloadCityAssets();

    if (buildId !== activeMapBuildId) {
      return;
    }

    applyLightingProfile({
      background: 0x8f7cab,
      fogColor: 0xc7badb,
      fogNear: 28,
      fogFar: 145,
      sunColor: 0xffd8c4,
      sunIntensity: 1.08,
      sunPosition: new THREE.Vector3(-26, 22, 14),
      skyColor: 0xf0e3ff,
      groundColor: 0x5d5f69,
      skyIntensity: 1.12
    });

    setMapSpawns(
      new THREE.Vector3(0, 0, 36),
      [
        new THREE.Vector3(-26, 0, 0),
        new THREE.Vector3(26, 0, 0),
        new THREE.Vector3(0, 0, -26),
        new THREE.Vector3(0, 0, 26),
        new THREE.Vector3(16, 0, 16),
        new THREE.Vector3(-16, 0, -16),
        new THREE.Vector3(36, 0, 24)
      ]
    );

    const cityGround = new THREE.Mesh(
      new THREE.PlaneGeometry(190, 190),
      new THREE.MeshStandardMaterial({
        color: 0x484956,
        roughness: 0.95,
        metalness: 0.08
      })
    );
    cityGround.rotation.x = -Math.PI / 2;
    cityGround.position.y = -0.02;
    addMapMesh(cityGround, {
      castShadow: false,
      receiveShadow: true,
      bulletCollision: false
    });

    const plaza = new THREE.Mesh(
      new THREE.CircleGeometry(10.5, 40),
      new THREE.MeshStandardMaterial({
        color: 0x6a6773,
        roughness: 0.92,
        metalness: 0.1
      })
    );
    plaza.rotation.x = -Math.PI / 2;
    plaza.position.set(0, 0.01, 0);
    addMapMesh(plaza, {
      castShadow: false,
      receiveShadow: true,
      bulletCollision: false
    });

    const cityScale = 8;
    const roadTiles = [
      { asset: cityAssetPaths.roadRoundabout, x: 0, z: 0, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: 0, z: -8, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: 0, z: 8, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: -8, z: 0, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 8, z: 0, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadCurve, x: 16, z: 16, rot: 0 },
      { asset: cityAssetPaths.roadCurve, x: -16, z: 16, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadCurve, x: -16, z: -16, rot: Math.PI },
      { asset: cityAssetPaths.roadCurve, x: 16, z: -16, rot: -Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 16, z: 8, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: 16, z: 0, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: 16, z: -8, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: -16, z: 8, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: -16, z: 0, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: -16, z: -8, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: -8, z: 16, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 0, z: 16, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 8, z: 16, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: -8, z: -16, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 0, z: -16, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 8, z: -16, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadCrossroad, x: 24, z: 0, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 32, z: 0, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadIntersection, x: 40, z: 0, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadCurve, x: 40, z: 8, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: 40, z: 16, rot: 0 },
      { asset: cityAssetPaths.roadCurve, x: 40, z: 24, rot: -Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 32, z: 24, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: 24, z: 24, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadCurve, x: 16, z: 24, rot: Math.PI },
      { asset: cityAssetPaths.roadCrossroad, x: -24, z: 0, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: -32, z: 0, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadIntersection, x: -40, z: 0, rot: -Math.PI * 0.5 },
      { asset: cityAssetPaths.roadCurve, x: -40, z: -8, rot: Math.PI },
      { asset: cityAssetPaths.roadStraight, x: -40, z: -16, rot: 0 },
      { asset: cityAssetPaths.roadCurve, x: -40, z: -24, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: -32, z: -24, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadStraight, x: -24, z: -24, rot: Math.PI * 0.5 },
      { asset: cityAssetPaths.roadCurve, x: -16, z: -24, rot: 0 },
      { asset: cityAssetPaths.roadCrossroad, x: 0, z: 24, rot: 0 },
      { asset: cityAssetPaths.roadStraight, x: 0, z: 32, rot: 0 },
      { asset: cityAssetPaths.roadIntersection, x: 0, z: 40, rot: 0 }
    ];

    for (const tile of roadTiles) {
      createCityAssetInstance(tile.asset, {
        position: new THREE.Vector3(tile.x, 0.035, tile.z),
        rotationY: tile.rot,
        scale: cityScale,
        castShadow: false,
        receiveShadow: true,
        bulletCollision: false
      });
    }

    const commercialBuildings = [
      {
        near: cityAssetPaths.buildingA,
        far: cityAssetPaths.buildingALow,
        position: new THREE.Vector3(-28, 0, -8),
        rotationY: Math.PI * 0.5,
        scale: 6.8
      },
      {
        near: cityAssetPaths.buildingC,
        far: cityAssetPaths.buildingCLow,
        position: new THREE.Vector3(-28, 0, 12),
        rotationY: 0,
        scale: 6.7
      },
      {
        near: cityAssetPaths.buildingF,
        far: cityAssetPaths.buildingFLow,
        position: new THREE.Vector3(28, 0, -10),
        rotationY: Math.PI,
        scale: 6.8
      },
      {
        near: cityAssetPaths.buildingJ,
        far: cityAssetPaths.buildingJLow,
        position: new THREE.Vector3(24, 0, 12),
        rotationY: -Math.PI * 0.5,
        scale: 6.6
      },
      {
        near: cityAssetPaths.buildingM,
        far: cityAssetPaths.buildingMLow,
        position: new THREE.Vector3(8, 0, 28),
        rotationY: Math.PI,
        scale: 6.2
      }
    ];

    for (const building of commercialBuildings) {
      createCityAssetLod(building.near, building.far, {
        position: building.position,
        rotationY: building.rotationY,
        scale: building.scale,
        collidable: true,
        colliderPadding: 1.2,
        colliderMinHeight: 5.5,
        lodDistance: 92,
        hideDistance: 168
      });
    }

    createCityAssetInstance(cityAssetPaths.skyscraperA, {
      position: new THREE.Vector3(34, 0, 34),
      rotationY: Math.PI * 0.25,
      scale: 6.4,
      collidable: true,
      colliderPadding: 1.3,
      colliderMinHeight: 8.5
    });
    createCityAssetInstance(cityAssetPaths.skyscraperC, {
      position: new THREE.Vector3(-34, 0, 28),
      rotationY: -Math.PI * 0.1,
      scale: 6.1,
      collidable: true,
      colliderPadding: 1.25,
      colliderMinHeight: 8
    });

    const houses = [
      { asset: cityAssetPaths.suburbanA, position: new THREE.Vector3(49, 0, 17), rotationY: Math.PI, scale: 6.2 },
      { asset: cityAssetPaths.suburbanF, position: new THREE.Vector3(48, 0, 31), rotationY: Math.PI * 0.88, scale: 6.15 },
      { asset: cityAssetPaths.suburbanK, position: new THREE.Vector3(30, 0, 36), rotationY: Math.PI * 0.92, scale: 6.05 },
      { asset: cityAssetPaths.suburbanP, position: new THREE.Vector3(-48, 0, -15), rotationY: 0, scale: 6.15 },
      { asset: cityAssetPaths.suburbanU, position: new THREE.Vector3(-31, 0, -37), rotationY: Math.PI * 0.12, scale: 6.05 },
      { asset: cityAssetPaths.suburbanK, position: new THREE.Vector3(-11, 0, 47), rotationY: Math.PI, scale: 6.1 },
      { asset: cityAssetPaths.suburbanA, position: new THREE.Vector3(16, 0, 46), rotationY: Math.PI, scale: 6.05 }
    ];

    for (const house of houses) {
      createCityAssetInstance(house.asset, {
        position: house.position,
        rotationY: house.rotationY,
        scale: house.scale,
        collidable: true,
        colliderPadding: 0.9,
        colliderMinHeight: 4.5
      });
    }

    const driveways = [
      { asset: cityAssetPaths.drivewayLong, position: new THREE.Vector3(42, 0.02, 17), rotationY: Math.PI * 0.5 },
      { asset: cityAssetPaths.drivewayShort, position: new THREE.Vector3(41, 0.02, 30), rotationY: Math.PI * 0.5 },
      { asset: cityAssetPaths.drivewayLong, position: new THREE.Vector3(-41, 0.02, -15), rotationY: -Math.PI * 0.5 },
      { asset: cityAssetPaths.drivewayShort, position: new THREE.Vector3(-25, 0.02, -37), rotationY: -Math.PI * 0.2 }
    ];
    for (const driveway of driveways) {
      createCityAssetInstance(driveway.asset, {
        position: driveway.position,
        rotationY: driveway.rotationY,
        scale: 5.2,
        castShadow: false,
        receiveShadow: true,
        bulletCollision: false
      });
    }

    const streetTreePositions = [
      new THREE.Vector3(12, 0, 18),
      new THREE.Vector3(-10, 0, 18),
      new THREE.Vector3(24, 0, 10),
      new THREE.Vector3(-24, 0, -10),
      new THREE.Vector3(36, 0, 12),
      new THREE.Vector3(-36, 0, -12),
      new THREE.Vector3(44, 0, 28),
      new THREE.Vector3(-18, 0, 42)
    ];
    for (let index = 0; index < streetTreePositions.length; index += 1) {
      createCityAssetLod(cityAssetPaths.treeLarge, cityAssetPaths.treeSmall, {
        position: streetTreePositions[index],
        rotationY: (index % 5) * 0.33,
        scale: 5.2 + (index % 3) * 0.25,
        lodDistance: 84,
        hideDistance: 144,
        bulletCollision: false
      });
    }

    const sidewalkProps = [
      { asset: cityAssetPaths.lightSquare, position: new THREE.Vector3(12, 0, 12), rotationY: 0, scale: 4.8 },
      { asset: cityAssetPaths.lightCurved, position: new THREE.Vector3(-12, 0, 12), rotationY: Math.PI * 0.5, scale: 4.8 },
      { asset: cityAssetPaths.lightSquare, position: new THREE.Vector3(12, 0, -12), rotationY: Math.PI, scale: 4.8 },
      { asset: cityAssetPaths.lightCurved, position: new THREE.Vector3(-12, 0, -12), rotationY: -Math.PI * 0.5, scale: 4.8 },
      { asset: cityAssetPaths.bench, position: new THREE.Vector3(6, 0, 14), rotationY: Math.PI * 0.5, scale: 4.1 },
      { asset: cityAssetPaths.bench, position: new THREE.Vector3(-8, 0, -14), rotationY: -Math.PI * 0.5, scale: 4.1 },
      { asset: cityAssetPaths.planter, position: new THREE.Vector3(8, 0, 20), rotationY: 0, scale: 4.3 },
      { asset: cityAssetPaths.planter, position: new THREE.Vector3(-8, 0, 20), rotationY: Math.PI * 0.2, scale: 4.3 },
      { asset: cityAssetPaths.pottedPlant, position: new THREE.Vector3(22, 0, 18), rotationY: 0, scale: 4 },
      { asset: cityAssetPaths.barrier, position: new THREE.Vector3(14, 0, 36), rotationY: 0, scale: 4.6 }
    ];
    for (const prop of sidewalkProps) {
      createCityAssetInstance(prop.asset, {
        position: prop.position,
        rotationY: prop.rotationY,
        scale: prop.scale,
        bulletCollision: false,
        castShadow: true,
        receiveShadow: true
      });
    }

    createCityAssetInstance(cityAssetPaths.awning, {
      position: new THREE.Vector3(24, 3.3, 19.4),
      rotationY: Math.PI,
      scale: 4.2,
      bulletCollision: false
    });
    createCityAssetInstance(cityAssetPaths.overhang, {
      position: new THREE.Vector3(-24, 3.7, -19.4),
      rotationY: 0,
      scale: 4.2,
      bulletCollision: false
    });

    buildCityShowroom(new THREE.Vector3(24, 0, 22), Math.PI);
    buildCityApartmentVignette(new THREE.Vector3(-34, 0, 18), Math.PI * 0.5);

    showStatusMessage("Sunset City loaded with Kenney GLB assets.", 2600);
  }

  function setPlayingUi(isPlaying) {
    hud.classList.toggle("playing", isPlaying);
    perfOverlay.style.display = isPlaying ? "block" : "none";
    coordinatesOverlay.style.display = isPlaying ? "block" : "none";
    refreshMobileHudVisibility();
  }

  function ensureMapOption(value, label) {
    for (const option of mapSelect.options) {
      if (option.value === value) {
        option.textContent = label;
        return;
      }
    }

    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    mapSelect.appendChild(option);
  }

  async function loadSelectedMap(mapId, {
    forceReload = false,
    requestSource = "unknown",
    visualVariant = ""
  } = {}) {
    const normalizedMapId = normalizeMapId(mapId);
    const pipelineContext = createMapPipelineContext(normalizedMapId, requestSource);

    if (
      normalizedMapId === warehouseRailyardMapId &&
      !forceReload &&
      pendingMapLoadRequest &&
      pendingMapLoadRequest.mapId === normalizedMapId
    ) {
      selectedMap = normalizedMapId;
      mapSelect.value = selectedMap;
      logMapPipelineStep(pipelineContext, "map load started", {
        reusedPendingLoad: true,
        activeBuildId: pendingMapLoadRequest.buildId
      });
      return pendingMapLoadRequest.promise;
    }

    if (!forceReload && currentLoadedMapId === normalizedMapId && currentMapVisualVariant === visualVariant && mapGroup.children.length > 0) {
      selectedMap = normalizedMapId;
      mapSelect.value = selectedMap;
      logMapPipelineStep(pipelineContext, "map ready success", {
        reusedLoadedMap: true,
        currentLoadedMapId,
        visualVariant
      });
      if (player) {
        player.position.copy(playerPosition);
      }
      return;
    }

    const buildId = ++activeMapBuildId;
    selectedMap = normalizedMapId;
    mapSelect.value = selectedMap;
    const previousLoadedMapId = currentLoadedMapId || "defaultVillage";

    const executeLoad = async () => {
      logMapPipelineStep(pipelineContext, "map load started", {
        buildId,
        forceReload,
        previousLoadedMapId
      });

      clearCurrentMap();
      currentLoadedMapId = "";
      currentMapVisualVariant = "";

      if (
        selectedMap !== "sunsetCity" &&
        selectedMap !== "proceduralCity" &&
        selectedMap !== warehouseRailyardMapId
      ) {
        statusMessage.classList.remove("visible");
      }

      try {
        if (selectedMap === "industrialDome") {
          buildIndustrialDome();
        } else if (selectedMap === ironworksYardMapId) {
          buildIronworksYard({ visualVariant });
        } else if (selectedMap === "blossomGarden") {
          buildBlossomGarden();
        } else if (selectedMap === "proceduralCity") {
          showStatusMessage("Loading Procedural City model...", 0);
          await buildProceduralCity(buildId);
          if (buildId !== activeMapBuildId) {
            return;
          }
          statusMessage.classList.remove("visible");
        } else if (selectedMap === warehouseRailyardMapId) {
          showStatusMessage("Loading Warehouse Railyard map...", 0);
          await buildWarehouseRailyard(buildId, pipelineContext);
          if (buildId !== activeMapBuildId) {
            logMapPipelineStep(pipelineContext, "map load abandoned", {
              buildId,
              reason: "stale build superseded by a newer map request"
            }, "warn");
            return;
          }
          statusMessage.classList.remove("visible");
        } else if (selectedMap === "sunsetCity") {
          showStatusMessage("Loading Sunset City assets...", 0);
          await buildSunsetCity(buildId);
          if (buildId !== activeMapBuildId) {
            return;
          }
          statusMessage.classList.remove("visible");
        } else {
          buildDefaultVillage();
        }
      } catch (error) {
        console.error("Failed to load selected map:", error);

        if (buildId !== activeMapBuildId) {
          return;
        }

        const fallbackReason = formatMapPipelineError(error);
        logMapPipelineStep(pipelineContext, "fallback triggered", {
          buildId,
          reason: fallbackReason,
          fallbackMapId: "defaultVillage",
          previousLoadedMapId
        }, "error");

        clearCurrentMap();
        selectedMap = "defaultVillage";
        mapSelect.value = selectedMap;
        currentMapVisualVariant = "";
        buildDefaultVillage();
        showStatusMessage(
          mapId === warehouseRailyardMapId
            ? `Warehouse Railyard failed to load (${fallbackReason}). Loaded Default Village instead.`
            : "City assets failed to load. Loaded Default Village instead.",
          4200
        );
      }

      if (buildId === activeMapBuildId) {
        applyGraphicsSettingsRuntime({
          reason: `map-load:${selectedMap}`,
          emitLog: true
        });
        currentLoadedMapId = selectedMap;
        currentMapVisualVariant = selectedMap === ironworksYardMapId ? visualVariant : "";
        if (player) {
          player.position.copy(playerPosition);
        }
        syncSettingsDebugReadout();
      }
    };

    const loadPromise = executeLoad().finally(() => {
      if (pendingMapLoadRequest?.buildId === buildId) {
        pendingMapLoadRequest = null;
      }
    });

    if (!forceReload && normalizedMapId === warehouseRailyardMapId) {
      pendingMapLoadRequest = {
        mapId: normalizedMapId,
        buildId,
        promise: loadPromise
      };
    }

    return loadPromise;
  }

  function createMainMenu() {
    loadSelectedMap(selectedMap, {
      requestSource: "menu bootstrap"
    }).catch((error) => {
      console.error("Failed to prepare menu map:", error);
    });
  }

  function normalizeMapId(mapId) {
    return (
      mapId === "industrialDome" ||
      mapId === ironworksYardMapId ||
      mapId === "blossomGarden"
    )
      ? mapId
      : "defaultVillage";
  }

  function getMapDisplayName(mapId) {
    const normalizedMapId = normalizeMapId(mapId);

    for (const option of mapSelect.options) {
      if (option.value === normalizedMapId) {
        return option.textContent || normalizedMapId;
      }
    }

    return normalizedMapId;
  }

  function getActiveSessionMapId() {
    return normalizeMapId(currentLoadedMapId || selectedMap);
  }

  function restoreSharedHomePagePanel(node, parent, nextSibling) {
    if (!node || !parent) {
      return;
    }

    if (nextSibling && nextSibling.parentNode === parent) {
      parent.insertBefore(node, nextSibling);
      return;
    }

    parent.appendChild(node);
  }

  function syncHomeOnlineModePanelPlacement() {
    const shouldShowOnHomePage =
      document.body.classList.contains("main-menu-open") &&
      !homeSettingsViewOpen &&
      !homeGunViewOpen;

    if (shouldShowOnHomePage) {
      lanMultiplayerMenu.classList.add("home-page-online-panel");
      lanMultiplayerMenu.setAttribute("aria-hidden", "false");
      homeOnlineModeMount.appendChild(lanMultiplayerMenu);
      return;
    }

    lanMultiplayerMenu.classList.remove("home-page-online-panel");
    restoreSharedHomePagePanel(
      lanMultiplayerMenu,
      lanMultiplayerMenuOriginalParent,
      lanMultiplayerMenuOriginalNextSibling
    );
    lanMultiplayerMenu.setAttribute("aria-hidden", "false");
  }

  function setCameraPreviewCursorHintVisible(isVisible) {
    // Camera preview cursor unlock hint
    cameraPreviewCursorHint.classList.toggle("visible", isVisible);
    cameraPreviewCursorHint.setAttribute("aria-hidden", String(!isVisible));
  }

  function isCameraPreviewMenuInteractionTarget(target) {
    return target instanceof Node && settingsMenu.contains(target);
  }

  function setHomeGunViewOpen(isOpen) {
    if (homeGunViewOpen === isOpen) {
      return;
    }

    if (isOpen) {
      if (homeSettingsViewOpen) {
        setHomeSettingsViewOpen(false);
      }

      closeMenus();
      syncGunInputs();
      setAdvancedRecoilPanelOpen(false);

      homeGunViewOpen = true;
      document.body.classList.add("home-gun-view-open");
      homeGunEntryButton.setAttribute("aria-expanded", "true");
      homeGunView.hidden = false;
      homeGunView.setAttribute("aria-hidden", "false");

      gunCustomizationPanel.classList.add("home-page-gun-panel");
      gunCustomizationPanel.classList.add("visible");
      gunCustomizationPanel.setAttribute("aria-hidden", "false");
      homeGunCustomizationMount.appendChild(gunCustomizationPanel);
      syncHomeOnlineModePanelPlacement();
      return;
    }

    homeGunViewOpen = false;
    document.body.classList.remove("home-gun-view-open");
    homeGunEntryButton.setAttribute("aria-expanded", "false");
    homeGunView.hidden = true;
    homeGunView.setAttribute("aria-hidden", "true");
    setAdvancedRecoilPanelOpen(false);

    gunCustomizationPanel.classList.remove("home-page-gun-panel");
    gunCustomizationPanel.classList.toggle("visible", gunPanelOpen);
    restoreSharedHomePagePanel(
      gunCustomizationPanel,
      gunCustomizationPanelOriginalParent,
      gunCustomizationPanelOriginalNextSibling
    );
    gunCustomizationPanel.setAttribute("aria-hidden", String(!gunPanelOpen));
    syncHomeOnlineModePanelPlacement();
  }

  function setHomeSettingsViewOpen(isOpen) {
    if (homeSettingsViewOpen === isOpen) {
      if (isOpen && !settingsMenuOpen) {
        setSettingsMenuOpen(true);
      }
      return;
    }

    if (isOpen) {
      if (homeGunViewOpen) {
        setHomeGunViewOpen(false);
      }

      closeMenus();
      syncSettingsInputs();

      homeSettingsViewOpen = true;
      homeSettingsEntryButton.setAttribute("aria-expanded", "true");
      homeSettingsView.hidden = true;
      homeSettingsView.setAttribute("aria-hidden", "true");

      settingsMenu.classList.remove("home-page-settings-panel");
      restoreSharedHomePagePanel(
        settingsMenu,
        settingsMenuOriginalParent,
        settingsMenuOriginalNextSibling
      );
      syncMobileLayoutSettingsAvailability();
      syncHomeOnlineModePanelPlacement();
      setSettingsMenuOpen(true);
      window.requestAnimationFrame(() => {
        const computedStyle = window.getComputedStyle(settingsMenu);
        console.log("home_settings_opened_as_top_overlay", {
          parentElementId: settingsMenu.parentElement?.id || "",
          zIndex: computedStyle.zIndex
        });
      });
      return;
    }

    homeSettingsViewOpen = false;
    homeSettingsEntryButton.setAttribute("aria-expanded", "false");
    homeSettingsView.hidden = true;
    homeSettingsView.setAttribute("aria-hidden", "true");

    settingsMenu.classList.remove("home-page-settings-panel");
    restoreSharedHomePagePanel(
      settingsMenu,
      settingsMenuOriginalParent,
      settingsMenuOriginalNextSibling
    );
    syncMobileLayoutSettingsAvailability();
    syncHomeOnlineModePanelPlacement();

    if (settingsMenuOpen) {
      setSettingsMenuOpen(false);
    }
  }

  function resetPlayerToSpawnPosition(spawnPosition = currentPlayerSpawn) {
    if (playerActor) {
      cleanupActorEffects(playerActor);
      clearActorPvpHitboxes(playerActor);
    }
    if (player?.parent) {
      player.parent.remove(player);
    }

    clearMovementInput();
    if (reloadTimeoutId) {
      window.clearTimeout(reloadTimeoutId);
      reloadTimeoutId = 0;
    }
    isReloading = false;
    reloadEndTimeMs = 0;
    reloadResumeAutoFire = false;
    playerDead = false;
    playerHp = playerMaxHp;
    ammo = maxAmmo;
    lastShotTime = -Infinity;
    isShooting = false;
    resetRecoilOffsets();
    verticalVelocity = 0;
    isGrounded = true;
    isJumping = false;
    playerPosition.copy(spawnPosition ?? currentPlayerSpawn);
    createPlayer();
    player.isDead = false;
    updatePlayerHpUi();
    updateAmmoUi();
    applySpawnFacingOverrides();
  }

  function resetPlayerToCurrentSpawn() {
    resetPlayerToSpawnPosition(currentPlayerSpawn);
  }

  function applySpawnFacingOverrides() {
    if (!player) {
      return;
    }

    if (cameraCustomizationPreviewMode) {
      // Camera preview temporary facing rotation override
      // Do not affect default gameplay spawn rotation
      yaw = cameraCustomizationPreviewYaw;
      pitch = THREE.MathUtils.clamp(
        cameraCustomizationPreviewPitch,
        cameraConfig.minPitch,
        cameraConfig.maxPitch
      );
      updateLookDirection();
      aimLookTarget.copy(player.position).add(cameraCustomizationPreviewFacingDirection);
      player.lookAt(aimLookTarget);
    } else if (isJiggleTrainingActive) {
      // Jiggle Training needs to face positive Z (yaw = 0)
      // Default training facing is typically Math.PI (negative Z)
      yaw = 0;
      updateLookDirection();
    } else if (isMediumCombatActive) {
      yaw = Math.atan2(mediumCombatForward.x, mediumCombatForward.z);
      updateLookDirection();
      aimLookTarget.copy(player.position).add(mediumCombatForward);
      player.lookAt(aimLookTarget);
    }
  }

  function getCameraPreviewPanelMargin() {
    return window.innerWidth <= 680 ? 12 : 20;
  }

  function applyCameraPreviewPanelLeft(nextLeft) {
    const panelWidth = settingsMenu.offsetWidth || Math.min(380, window.innerWidth - 32);
    const margin = getCameraPreviewPanelMargin();
    const minLeft = margin;
    const maxLeft = Math.max(margin, window.innerWidth - panelWidth - margin);

    // Horizontal-only drag clamp for camera panel
    cameraPreviewPanelLeft = THREE.MathUtils.clamp(nextLeft, minLeft, maxLeft);
    settingsMenu.style.left = `${cameraPreviewPanelLeft}px`;
    settingsMenu.style.right = "auto";
  }

  function dockCameraPreviewPanel() {
    const panelWidth = settingsMenu.offsetWidth || Math.min(380, window.innerWidth - 32);
    const margin = getCameraPreviewPanelMargin();
    const dockedLeft = Math.max(margin, window.innerWidth - panelWidth - margin);
    applyCameraPreviewPanelLeft(cameraPreviewPanelLeft ?? dockedLeft);
  }

  function releaseCameraPreviewPanelDrag(pointerId = cameraPreviewPanelDragPointerId) {
    if (pointerId !== null && cameraPreviewPanelHeader?.hasPointerCapture?.(pointerId)) {
      cameraPreviewPanelHeader.releasePointerCapture(pointerId);
    }

    cameraPreviewPanelDragPointerId = null;
  }

  function resetCameraCustomizationCompactPanelUi() {
    releaseCameraPreviewPanelDrag();
    settingsMenu.classList.remove("camera-preview-panel");
    settingsMenu.style.left = "";
    settingsMenu.style.right = "";
    cameraPreviewPanelLeft = null;
  }

  function setCameraCustomizationPreviewPanelOpen(isOpen) {
    if (isOpen) {
      settingsMenu.classList.add("camera-preview-panel");
      interactionMenuOpen = false;
      settingsMenuOpen = true;
      clearMovementInput();
      isShooting = false;
      syncSettingsInputs();
      setActiveSettingsTab("controls", { emitLog: false });
      syncMenuState();
      console.log("settings_menu_opened", {
        source: "camera-preview",
        tab: "controls"
      });
      queueSettingsMenuDiagnostics("camera-preview-open");
      window.requestAnimationFrame(() => {
        dockCameraPreviewPanel();
      });
      return;
    }

    resetCameraCustomizationCompactPanelUi();
    settingsMenuOpen = false;
    syncMenuState();
    console.log("settings_menu_closed", {
      source: "camera-preview",
      tab: "controls"
    });
  }

  async function openCameraCustomizationForCurrentContext() {
    if (cameraCustomizationPreviewMode || settingsMenu.classList.contains("camera-preview-panel")) {
      return true;
    }

    const inMainMenu = document.body.classList.contains("main-menu-open");
    if (inMainMenu || homeSettingsViewOpen || !gameStarted) {
      await startCameraCustomizationPreviewMode();
      return true;
    }

    setCameraCustomizationPreviewPanelOpen(true);
    return true;
  }

  async function openCrosshairCustomizationForCurrentContext() {
    // If we are already in the testing place for crosshair, just make sure panel is open
    if (cameraCustomizationPreviewMode && activeSettingsPreviewFlow === "crosshair") {
      setCrosshairCustomizationPanelOpen(true);
      return true;
    }

    const inMainMenu = document.body.classList.contains("main-menu-open");
    // If on home page OR home settings view is open OR game hasn't started yet
    // we want to go to the Testing Place.
    if (inMainMenu || homeSettingsViewOpen || !gameStarted) {
      await startCrosshairCustomizationPreviewMode();
    } else {
      // Already in-game (real session), just show panel in place
      setSettingsMenuOpen(false);
      setCrosshairCustomizationPanelOpen(true);
    }
    return true;
  }

  async function startCrosshairCustomizationPreviewMode() {
    // Close the settings menu first to avoid UI clutter during transition
    if (homeSettingsViewOpen) {
      setHomeSettingsViewOpen(false);
    } else {
      setSettingsMenuOpen(false);
    }

    commitPlayerIdentitySettings();
    cameraCustomizationPreviewPreviousMapId = selectedMap;
    cameraCustomizationPreviewMode = true;
    activeSettingsPreviewFlow = "crosshair";

    // IMPORTANT: Testing Place (0.2, 0.9, -0.6)
    temporaryPlayerSpawnOverride = cameraCustomizationPreviewSpawn.clone();

    try {
      // settingsPreviewMapId is "industrialDome" (Testing Place)
      await loadSelectedMap(settingsPreviewMapId, { forceReload: true });
      gameStarted = true;
      hideMainMenu();
      resetPlayerToCurrentSpawn();
      statusMessage.classList.remove("visible");

      console.log("[CROSSHAIR] opened from home testing place");
      // Ensure crosshair panel is shown AFTER teleport
      setCrosshairCustomizationPanelOpen(true);
    } catch (error) {
      console.error("Failed to start crosshair customization preview mode:", error);
      gameStarted = false;
      cameraCustomizationPreviewMode = false;
      activeSettingsPreviewFlow = "";
      temporaryPlayerSpawnOverride = null;
      selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
      mapSelect.value = selectedMap;
      cameraCustomizationPreviewPreviousMapId = "";
      showMainMenu();
    }
  }

  function exitCrosshairCustomizationPreviewMode({ reopenHomeSettings = true } = {}) {
    // Only return to home if we are actually in the crosshair preview flow
    if (!cameraCustomizationPreviewMode || activeSettingsPreviewFlow !== "crosshair") {
      setCrosshairCustomizationPanelOpen(false);
      return;
    }

    cameraCustomizationPreviewMode = false;
    activeSettingsPreviewFlow = "";
    temporaryPlayerSpawnOverride = null;
    gameStarted = false;
    setCameraPreviewCursorHintVisible(false);
    selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
    mapSelect.value = selectedMap;
    cameraCustomizationPreviewPreviousMapId = "";

    setCrosshairCustomizationPanelOpen(false);
    showMainMenu();

    if (reopenHomeSettings) {
      setHomeSettingsViewOpen(true);
    }
  }

  function setCrosshairCustomizationPanelOpen(isOpen) {
    if (!crosshairCustomizationPanel) return;

    if (isOpen) {
      stopAdsAiming("crosshairOpen");
      crosshairCustomizationPanel.hidden = false;
      crosshairCustomizationPanel.style.display = "grid";
    } else {
      crosshairCustomizationPanel.hidden = true;
      crosshairCustomizationPanel.style.display = "none";
    }
  }

  function generateAimTrainingTargetId(prefix = "target") {
    nextAimTrainingTargetSequence += 1;
    return `${prefix}-${Date.now().toString(36)}-${nextAimTrainingTargetSequence.toString(36)}`;
  }

  function disposeGridShotBall(ball) {
    if (!ball) {
      return;
    }

    scene.remove(ball);
    ball.children.forEach(child => {
      if (child.material) child.material.dispose();
    });
    if (ball.geometry) ball.geometry.dispose();
    if (ball.material) ball.material.dispose();
  }

  function removeGridShotBall(ball) {
    const ballIndex = gridShotBalls.indexOf(ball);
    if (ballIndex > -1) {
      gridShotBalls.splice(ballIndex, 1);
    }
    disposeGridShotBall(ball);
  }

  function clearGridShotBalls() {
    gridShotBalls.forEach(ball => {
      disposeGridShotBall(ball);
    });
    gridShotBalls.length = 0;
  }

  function spawnGridShotBall(avoidPos = null, options = {}) {
    const minX = GRID_SHOT_TARGET_BOUNDS.minX;
    const maxX = GRID_SHOT_TARGET_BOUNDS.maxX;
    const minY = GRID_SHOT_TARGET_BOUNDS.minY;
    const maxY = GRID_SHOT_TARGET_BOUNDS.maxY;
    const minZ = GRID_SHOT_TARGET_BOUNDS.minZ;
    const maxZ = GRID_SHOT_TARGET_BOUNDS.maxZ;

    const diffConfig = getAimTrainingDifficultyConfig();
    const fixedPosition = options.position;
    let x = Number(fixedPosition?.x);
    let y = Number(fixedPosition?.y);
    let z = Number(fixedPosition?.z);
    let found = Boolean(
      fixedPosition &&
      Number.isFinite(x) &&
      Number.isFinite(y) &&
      Number.isFinite(z)
    );
    let attempts = 0;

    while (!found && attempts < 15) {
      x = Math.random() * (maxX - minX) + minX;
      y = Math.random() * (maxY - minY) + minY;
      z = Math.random() * (maxZ - minZ) + minZ;

      if (!avoidPos || diffConfig.gridShotDistancing <= 0) {
        found = true;
      } else {
        const dx = x - avoidPos.x;
        const dy = y - avoidPos.y;
        const dz = z - avoidPos.z;
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq > diffConfig.gridShotDistancing * diffConfig.gridShotDistancing) {
          found = true;
        }
      }
      attempts++;
    }

    const geometry = new THREE.SphereGeometry(0.6, 16, 16);
    const material = new THREE.MeshLambertMaterial({ color: 0xcc0000 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    sphere.userData.isGridShotTarget = true;
    sphere.userData.aimTrainingTargetId =
      typeof options.targetId === "string" && options.targetId.trim()
        ? options.targetId.trim()
        : generateAimTrainingTargetId("grid");

    // Add thin dark outline ring using BackSide scaling
    const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x110000, side: THREE.BackSide });
    const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
    outlineMesh.scale.setScalar(1.06);
    outlineMesh.userData.isGridShotOutline = true;
    sphere.add(outlineMesh);

    scene.add(sphere);
    gridShotBalls.push(sphere);
    return sphere;
  }

  function updateGridShotHudText() {
    if (aimTrainingStatsText) {
      aimTrainingStatsText.textContent = `(${gridShotTimer}s) (hit-${gridShotHits} miss-${gridShotMisses})`;
    }
  }

  function updateJiggleTrainingHudText() {
    if (aimTrainingStatsText) {
      aimTrainingStatsText.textContent = `(${jiggleTrainingTimer}s) (hit-${jiggleTrainingHits} miss-${jiggleTrainingMisses})`;
    }
  }

  async function startJiggleTrainingMode() {
    fadeOutMenuMusic("jiggle-training-start");
    cleanupAimTrainingMode();
    if (!startJiggleTrainingButton) {
      return;
    }

    commitPlayerIdentitySettings();
    startJiggleTrainingButton.disabled = true;
    startJiggleTrainingButton.querySelector('.aim-mode-title').textContent = "Loading...";

    try {
      cameraCustomizationPreviewPreviousMapId = selectedMap;
      isJiggleTrainingActive = true;
      jiggleTrainingHits = 0;
      jiggleTrainingMisses = 0;
      jiggleTrainingTimer = 60;
      showAimTrainingStatsHud("Jiggle Training");
      startNewAimTrainingSession("jiggleTraining");

      if (!aimTrainingManualInfiniteAmmoOverride) {
        currentGun.infiniteAmmo = true;
        if (gunInfiniteAmmoInput) gunInfiniteAmmoInput.checked = true;
        syncGunInputs();
      }

      if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "none";
      if (aimTrainingHud) {
        aimTrainingHud.removeAttribute("hidden");
        aimTrainingHud.setAttribute("aria-hidden", "false");
        aimTrainingHud.hidden = false;
      }
      updateJiggleTrainingHudText();

      if (jiggleTrainingIntervalId) window.clearInterval(jiggleTrainingIntervalId);

      jiggleTrainingIntervalId = window.setInterval(() => {
        if (!isJiggleTrainingActive || jiggleTrainingTimer <= 0) return;
        jiggleTrainingTimer--;
        updateJiggleTrainingHudText();

        if (jiggleTrainingTimer <= 0) {
          window.clearInterval(jiggleTrainingIntervalId);
          jiggleTrainingIntervalId = 0;
          if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "flex";
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingFinished("jiggleTraining");
        }
      }, 1000);

      temporaryPlayerSpawnOverride = gridShotSpawn.clone();
      console.log("[JIGGLE TRAINING] using shared aim training spawn", temporaryPlayerSpawnOverride);

      await loadSelectedMap(settingsPreviewMapId, { forceReload: true });
      gameStarted = true;
      hideMainMenu();
      resetPlayerToCurrentSpawn();
      statusMessage.classList.remove("visible");

      spawnJiggleTrainingEnemy();
      broadcastAimTrainingState({ force: true });
      broadcastAimTrainingTargetState({ force: true, log: true });
      console.log("[JIGGLE TRAINING] barrier enabled");
      console.log("[JIGGLE TRAINING] mode started");
    } catch (error) {
      console.error("Failed to start Jiggle Training mode:", error);
      cleanupAimTrainingMode();
      selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
      mapSelect.value = selectedMap;
      cameraCustomizationPreviewPreviousMapId = "";
    } finally {
      resetAimTrainingCardLoadingStates();
    }
  }

  function spawnJiggleTrainingEnemy() {
    let spawnPos = new THREE.Vector3();
    let validSpawn = false;
    let attempts = 0;

    // Close Spawn Band: 3 to 4 units from the wall (1.4 Z)
    // Wall is at player.z + 2.0 = -0.6 + 2.0 = 1.4
    // Min Z = 1.4 + 3.0 = 4.4
    // Max Z = 1.4 + 4.0 = 5.4
    // Absolute Max Z = 1.4 + 5.0 = 6.4

    while (!validSpawn && attempts < 50) {
      attempts++;

      const xOffset = (Math.random() - 0.5) * 3.6; // -1.8 to 1.8
      const zOffset = 5.0 + (Math.random() - 0.5) * 1.0; // 4.5 to 5.5 from player center

      const targetX = gridShotSpawn.x + xOffset;
      const targetZ = gridShotSpawn.z + zOffset;

      spawnPos.set(targetX, gridShotSpawn.y, targetZ);
      console.log("[JIGGLE TRAINING] close spawn candidate", spawnPos.clone());

      // Compute temporary side direction for validation
      const toCenter = new THREE.Vector3().subVectors(spawnPos, gridShotSpawn);
      toCenter.y = 0;
      toCenter.normalize();
      const sideDir = new THREE.Vector3(-toCenter.z, 0, toCenter.x);

      const leftEnd = spawnPos.clone().addScaledVector(sideDir, -jiggleTrainingMaxSideDistance);
      const rightEnd = spawnPos.clone().addScaledVector(sideDir, jiggleTrainingMaxSideDistance);

      // Rule 1 & 2: No point in footprint
      if (isInsideJiggleBlockerObject(spawnPos)) {
        console.log("[JIGGLE TRAINING] rejected close spawn", "center inside blocker", spawnPos.clone());
        continue;
      }
      if (isInsideJiggleBlockerObject(leftEnd) || isInsideJiggleBlockerObject(rightEnd)) {
        console.log("[JIGGLE TRAINING] rejected close spawn", "path end inside blocker", spawnPos.clone());
        continue;
      }

      // Rule 4: Jiggle path segment must not cross footprint
      if (lineSegmentIntersectsJiggleBlocker(leftEnd, rightEnd)) {
        console.log("[JIGGLE TRAINING] rejected close spawn", "jiggle path crosses blocker", spawnPos.clone());
        continue;
      }

      // Rule 3 & 4: Line of sight must not be blocked
      const playerPos = { x: gridShotSpawn.x, z: gridShotSpawn.z };
      if (lineSegmentIntersectsJiggleBlocker(playerPos, spawnPos) ||
        lineSegmentIntersectsJiggleBlocker(playerPos, leftEnd) ||
        lineSegmentIntersectsJiggleBlocker(playerPos, rightEnd)) {
        console.log("[JIGGLE TRAINING] rejected close spawn", "behind blocker object", spawnPos.clone());
        continue;
      }

      validSpawn = true;
    }

    if (!validSpawn) {
      // Fallback to a safe close spot if somehow all attempts failed
      spawnPos.set(gridShotSpawn.x, gridShotSpawn.y, gridShotSpawn.z + 4.5);
    }

    jiggleTrainingEnemy = createEnemy(spawnPos, {
      difficultyKey: "moderate",
      suppressStatus: true,
      rotationY: 0
    });

    jiggleTrainingEnemy.isJiggleTrainingTarget = true;
    jiggleTrainingEnemy.isTrainingModeTarget = true;
    jiggleTrainingEnemySpawnCenter.copy(spawnPos);
    jiggleTrainingCurrentOffset = 0;

    const toCenterFinal = new THREE.Vector3().subVectors(jiggleTrainingEnemySpawnCenter, gridShotSpawn);
    toCenterFinal.y = 0;
    toCenterFinal.normalize();
    jiggleTrainingSideDirection.set(-toCenterFinal.z, 0, toCenterFinal.x);

    console.log("[JIGGLE TRAINING] enemy spawned close to wall", spawnPos);
    broadcastAimTrainingTargetState({ force: true, log: true });
  }

  async function startGridShotMode() {
    fadeOutMenuMusic("gridshot-start");
    cleanupAimTrainingMode();
    if (!startGridShotButton) {
      return;
    }

    commitPlayerIdentitySettings();
    startGridShotButton.disabled = true;
    startGridShotButton.querySelector('.aim-mode-title').textContent = "Loading...";

    try {
      cameraCustomizationPreviewPreviousMapId = selectedMap;
      isGridShotActive = true;
      gridShotHits = 0;
      gridShotMisses = 0;
      gridShotTimer = 60;
      showAimTrainingStatsHud("Grid Shot");
      startNewAimTrainingSession("gridShot");

      // Quality Fix: Default Infinite Ammo to ON unless manually overridden
      if (!aimTrainingManualInfiniteAmmoOverride) {
        currentGun.infiniteAmmo = true;
        if (gunInfiniteAmmoInput) gunInfiniteAmmoInput.checked = true;
        syncGunInputs();
      }

      if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "none";
      if (aimTrainingHud) {
        aimTrainingHud.removeAttribute("hidden");
        aimTrainingHud.setAttribute("aria-hidden", "false");
        aimTrainingHud.hidden = false;
      }
      updateGridShotHudText();

      if (gridShotIntervalId) window.clearInterval(gridShotIntervalId);

      gridShotIntervalId = window.setInterval(() => {
        if (!isGridShotActive || gridShotTimer <= 0) return;
        gridShotTimer--;
        updateGridShotHudText();

        if (gridShotTimer <= 0) {
          window.clearInterval(gridShotIntervalId);
          gridShotIntervalId = 0;

          // Stop gameplay but keep player in arena
          if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "flex";
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingFinished("gridShot");
        }
      }, 1000);

      temporaryPlayerSpawnOverride = gridShotSpawn.clone();

      await loadSelectedMap(settingsPreviewMapId, { forceReload: true });
      gameStarted = true;
      hideMainMenu();
      resetPlayerToCurrentSpawn();
      statusMessage.classList.remove("visible");

      // Spawn exactly 3 targets
      for (let i = 0; i < 3; i++) {
        spawnGridShotBall();
      }
      broadcastAimTrainingState({ force: true });
      broadcastAimTrainingTargetState({ force: true, log: true });
    } catch (error) {
      console.error("Failed to start Grid Shot mode:", error);
      cleanupAimTrainingMode();
      selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
      mapSelect.value = selectedMap;
      cameraCustomizationPreviewPreviousMapId = "";
    } finally {
      resetAimTrainingCardLoadingStates();
    }
  }

  function updateTrackingBallHpBar() {
    if (!trackingBallHpBarFill) {
      return;
    }

    const scale = Math.max(0, trackingBallHp / trackingBallMaxHp);
    trackingBallHpBarFill.scale.x = scale;
    trackingBallHpBarFill.position.x = -0.6 * (1 - scale);
  }

  function removeTrackingBallObject() {
    if (!trackingBallObject) {
      return;
    }

    scene.remove(trackingBallObject);
    trackingBallObject.children.forEach(child => {
      if (child.material) child.material.dispose();
      if (child instanceof THREE.Group) {
        child.children.forEach(gc => {
          if (gc.material) gc.material.dispose();
          if (gc.geometry) gc.geometry.dispose();
        });
      }
    });
    if (trackingBallObject.geometry) trackingBallObject.geometry.dispose();
    if (trackingBallObject.material) trackingBallObject.material.dispose();
    trackingBallObject = null;
    trackingBallHpBarFill = null;
    trackingBallTargetId = "";
  }

  function spawnTrackingBall(options = {}) {
    const geometry = new THREE.SphereGeometry(0.6, 16, 16);
    const material = new THREE.MeshLambertMaterial({ color: 0xcc0000 });
    const sphere = new THREE.Mesh(geometry, material);

    const fixedPosition = options.position;
    let x = Number(fixedPosition?.x);
    let y = Number(fixedPosition?.y);
    let z = Number(fixedPosition?.z);

    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
      const angle = (Math.random() - 0.5) * Math.PI * 0.5;
      const dist = 8 + Math.random() * 6;
      x = gridShotSpawn.x + Math.sin(angle) * dist;
      z = gridShotSpawn.z - Math.cos(angle) * dist;
      y = gridShotSpawn.y + 1.4 + Math.random() * 1.8;
    }

    sphere.position.set(x, y, z);
    sphere.userData.isTrackingBallTarget = true;
    sphere.userData.aimTrainingTargetId =
      typeof options.targetId === "string" && options.targetId.trim()
        ? options.targetId.trim()
        : generateAimTrainingTargetId("tracking");

    trackingBallSpawnBurstTimer = 1.25; // 1.25s burst on spawn

    // Outline
    const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x110000, side: THREE.BackSide });
    const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
    outlineMesh.scale.setScalar(1.06);
    sphere.add(outlineMesh);

    // HP Bar
    const hpBarGroup = new THREE.Group();
    hpBarGroup.position.set(0, 0.9, 0);

    const bgGeo = new THREE.PlaneGeometry(1.2, 0.15);
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.5 });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    hpBarGroup.add(bg);

    const fillGeo = new THREE.PlaneGeometry(1.2, 0.15);
    const fillMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const fill = new THREE.Mesh(fillGeo, fillMat);
    fill.position.z = 0.01;
    hpBarGroup.add(fill);

    trackingBallHpBarFill = fill;
    sphere.add(hpBarGroup);
    sphere.userData.hpBarGroup = hpBarGroup;

    scene.add(sphere);
    trackingBallObject = sphere;
    trackingBallTargetId = sphere.userData.aimTrainingTargetId;
    trackingBallMaxHp = Math.max(1, Number(options.maxHp) || trackingBallMaxHp || 100);
    trackingBallHp = THREE.MathUtils.clamp(
      Number.isFinite(Number(options.hp)) ? Number(options.hp) : trackingBallMaxHp,
      0,
      trackingBallMaxHp
    );
    trackingBallMovementTime = Math.random() * 100;

    // Initialize direction - weight X more for horizontal tracking
    if (options.direction && readVector3FromNetwork(options.direction, trackingBallDir)) {
      trackingBallDir.normalize();
    } else {
      trackingBallDir.set(Math.random() - 0.5, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.6).normalize();
    }
    trackingBallMovePhase = "slow";
    trackingBallPhaseTimer = 2 + Math.random();
    updateTrackingBallHpBar();
  }

  function updateTrackingBallMovement(dt) {
    if (!trackingBallObject || !isTrackingBallActive || trackingBallTimer <= 0) return;

    trackingBallPhaseTimer -= dt;

    if (trackingBallPhaseTimer <= 0) {
      if (trackingBallMovePhase === "slow") {
        trackingBallMovePhase = "fast";
        trackingBallPhaseTimer = 4;
      } else {
        trackingBallMovePhase = "slow";
        trackingBallPhaseTimer = 2 + Math.random();
      }
      // Change direction on phase change - weight X more
      trackingBallDir.set(Math.random() - 0.5, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.6).normalize();
    }

    const diffConfig = getAimTrainingDifficultyConfig();

    // Occasional random direction change during fast phase
    if (trackingBallMovePhase === "fast" && Math.random() < 0.01 * diffConfig.trackingUnpredictability) {
      trackingBallDir.set(Math.random() - 0.5, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.6).normalize();
    }

    let speed = (trackingBallMovePhase === "fast" ? 7.5 : 2.0) * diffConfig.trackingSpeedMult;

    // Apply spawn burst
    if (trackingBallSpawnBurstTimer > 0) {
      trackingBallSpawnBurstTimer -= dt;
      // Burst speed: High for Moderate/Hard, Medium for Easy
      const burstSpeed = aimTrainingDifficulty === "easy" ? 5.0 : 8.5;
      speed = Math.max(speed, burstSpeed);
    }

    // Apply movement
    trackingBallObject.position.x += trackingBallDir.x * speed * dt;
    trackingBallObject.position.y += trackingBallDir.y * speed * dt;
    trackingBallObject.position.z += trackingBallDir.z * speed * dt;

    // Boundaries
    const minX = gridShotSpawn.x - 7.5;
    const maxX = gridShotSpawn.x + 7.5;
    const minY = gridShotSpawn.y + 1.4;
    const maxY = gridShotSpawn.y + 3.2;
    const minZ = gridShotSpawn.z - 16;
    const maxZ = gridShotSpawn.z - 7;

    if (trackingBallObject.position.x < minX) { trackingBallObject.position.x = minX; trackingBallDir.x *= -1; }
    if (trackingBallObject.position.x > maxX) { trackingBallObject.position.x = maxX; trackingBallDir.x *= -1; }
    if (trackingBallObject.position.y < minY) { trackingBallObject.position.y = minY; trackingBallDir.y *= -1; }
    if (trackingBallObject.position.y > maxY) { trackingBallObject.position.y = maxY; trackingBallDir.y *= -1; }
    if (trackingBallObject.position.z < minZ) { trackingBallObject.position.z = minZ; trackingBallDir.z *= -1; }
    if (trackingBallObject.position.z > maxZ) { trackingBallObject.position.z = maxZ; trackingBallDir.z *= -1; }

    // Billboard HP bar to camera
    if (trackingBallObject.userData.hpBarGroup) {
      trackingBallObject.userData.hpBarGroup.quaternion.copy(camera.quaternion);
    }
  }

  function updateTrackingBallHudText() {
    if (aimTrainingStatsText) {
      aimTrainingStatsText.textContent = `(${trackingBallTimer}s) (score-${trackingBallScore} miss-${trackingBallMisses})`;
    }
  }

  async function startTrackingBallMode() {
    fadeOutMenuMusic("tracking-ball-start");
    cleanupAimTrainingMode();
    if (!startTrackingBallButton) return;

    commitPlayerIdentitySettings();
    startTrackingBallButton.disabled = true;
    startTrackingBallButton.querySelector('.aim-mode-title').textContent = "Loading...";

    try {
      cameraCustomizationPreviewPreviousMapId = selectedMap;
      isTrackingBallActive = true;
      trackingBallScore = 0;
      trackingBallMisses = 0;
      trackingBallTimer = 60;
      showAimTrainingStatsHud("Tracking Ball");
      startNewAimTrainingSession("trackingBall");

      // Quality Fix: Default Infinite Ammo to ON unless manually overridden
      if (!aimTrainingManualInfiniteAmmoOverride) {
        currentGun.infiniteAmmo = true;
        if (gunInfiniteAmmoInput) gunInfiniteAmmoInput.checked = true;
        syncGunInputs();
      }

      if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "none";
      if (aimTrainingHud) {
        aimTrainingHud.removeAttribute("hidden");
        aimTrainingHud.setAttribute("aria-hidden", "false");
        aimTrainingHud.hidden = false;
      }
      updateTrackingBallHudText();

      if (trackingBallIntervalId) window.clearInterval(trackingBallIntervalId);
      trackingBallIntervalId = window.setInterval(() => {
        if (!isTrackingBallActive || trackingBallTimer <= 0) return;
        trackingBallTimer--;
        updateTrackingBallHudText();

        if (trackingBallTimer <= 0) {
          window.clearInterval(trackingBallIntervalId);
          trackingBallIntervalId = 0;
          if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "flex";
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingFinished("trackingBall");
        }
      }, 1000);

      temporaryPlayerSpawnOverride = gridShotSpawn.clone();

      await loadSelectedMap(settingsPreviewMapId, { forceReload: true });
      gameStarted = true;
      hideMainMenu();
      resetPlayerToCurrentSpawn();
      statusMessage.classList.remove("visible");
      spawnTrackingBall();
      broadcastAimTrainingState({ force: true });
      broadcastAimTrainingTargetState({ force: true, log: true });
    } catch (error) {
      console.error("Failed to start Tracking Ball mode:", error);
      cleanupAimTrainingMode();
      selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
      mapSelect.value = selectedMap;
      cameraCustomizationPreviewPreviousMapId = "";
    } finally {
      resetAimTrainingCardLoadingStates();
    }
  }

  function updateMediumCombatHudText() {
    if (aimTrainingStatsText) {
      aimTrainingStatsText.textContent = `(${mediumCombatTimer}s) (hit-${mediumCombatHits} miss-${mediumCombatMisses})`;
    }
  }

  function removeMediumCombatMovementBoundary() {
    if (!mediumCombatMovementBoundaryGroup) {
      return;
    }

    const materials = new Set();
    mediumCombatMovementBoundaryGroup.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      if (object.geometry) {
        object.geometry.dispose();
      }

      if (Array.isArray(object.material)) {
        object.material.forEach((material) => materials.add(material));
      } else if (object.material) {
        materials.add(object.material);
      }
    });
    materials.forEach((material) => material.dispose());

    if (mediumCombatMovementBoundaryGroup.parent) {
      mediumCombatMovementBoundaryGroup.parent.remove(mediumCombatMovementBoundaryGroup);
    }
    mediumCombatMovementBoundaryGroup = null;
  }

  function createMediumCombatMovementBoundary() {
    removeMediumCombatMovementBoundary();

    const boundaryMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb23f,
      emissive: 0x3a1800,
      emissiveIntensity: 0.35,
      roughness: 0.68,
      metalness: 0.18,
      transparent: true,
      opacity: 0.68
    });
    const boundaryGroup = new THREE.Group();
    boundaryGroup.name = "medium-combat-movement-boundary";
    boundaryGroup.position.copy(mediumCombatPlayerSpawn);
    boundaryGroup.rotation.y = mediumCombatBoundaryYaw;

    const railHeight = 0.14;
    const railThickness = 0.08;
    const boundaryWidth = mediumCombatBoundaryHalfWidth * 2;
    const addRail = (sizeX, sizeZ, x, z) => {
      const rail = new THREE.Mesh(
        new THREE.BoxGeometry(sizeX, railHeight, sizeZ),
        boundaryMaterial
      );
      rail.position.set(x, railHeight * 0.5 + 0.03, z);
      rail.castShadow = false;
      rail.receiveShadow = true;
      rail.userData.ignoreShotRay = true;
      boundaryGroup.add(rail);
    };

    addRail(boundaryWidth, railThickness, 0, 0);
    addRail(boundaryWidth, railThickness, 0, mediumCombatBoundaryLength);
    addRail(railThickness, mediumCombatBoundaryLength, -mediumCombatBoundaryHalfWidth, mediumCombatBoundaryLength * 0.5);
    addRail(railThickness, mediumCombatBoundaryLength, mediumCombatBoundaryHalfWidth, mediumCombatBoundaryLength * 0.5);

    scene.add(boundaryGroup);
    mediumCombatMovementBoundaryGroup = boundaryGroup;
  }

  function clampMediumCombatPosition(targetPosition) {
    if (!isMediumCombatActive || !targetPosition) {
      return false;
    }

    mediumCombatBoundsOffset.copy(targetPosition).sub(mediumCombatPlayerSpawn);
    mediumCombatBoundsOffset.y = 0;

    const forwardDistance = THREE.MathUtils.clamp(
      mediumCombatBoundsOffset.dot(mediumCombatForward),
      0,
      mediumCombatBoundaryLength
    );
    const sideDistance = THREE.MathUtils.clamp(
      mediumCombatBoundsOffset.dot(mediumCombatRight),
      -mediumCombatBoundaryHalfWidth,
      mediumCombatBoundaryHalfWidth
    );
    const clampedX = mediumCombatPlayerSpawn.x +
      mediumCombatForward.x * forwardDistance +
      mediumCombatRight.x * sideDistance;
    const clampedZ = mediumCombatPlayerSpawn.z +
      mediumCombatForward.z * forwardDistance +
      mediumCombatRight.z * sideDistance;
    const changed = Math.abs(targetPosition.x - clampedX) > 0.0001 ||
      Math.abs(targetPosition.z - clampedZ) > 0.0001;

    targetPosition.x = clampedX;
    targetPosition.z = clampedZ;
    return changed;
  }

  function applyMediumCombatPlayerBounds() {
    if (!isMediumCombatActive) {
      return;
    }

    if (clampMediumCombatPosition(playerPosition)) {
      horizontalVelocity.x = 0;
      horizontalVelocity.z = 0;
    }
  }

  function spawnMediumCombatJiggleEnemy() {
    if (mediumCombatEnemy) {
      removeEnemy(mediumCombatEnemy);
      mediumCombatEnemy = null;
    }

    const spawnPos = mediumCombatEnemySpawn.clone();
    mediumCombatEnemy = createEnemy(spawnPos, {
      difficultyKey: "moderate",
      suppressStatus: true,
      rotationY: Math.atan2(
        mediumCombatPlayerSpawn.x - mediumCombatEnemySpawn.x,
        mediumCombatPlayerSpawn.z - mediumCombatEnemySpawn.z
      )
    });

    mediumCombatEnemy.isMediumCombatTarget = true;
    mediumCombatEnemy.isTrainingModeTarget = true;
    mediumCombatEnemySpawnCenter.copy(spawnPos);
    mediumCombatSideDirection.copy(mediumCombatJiggleSideDirection).normalize();
    mediumCombatMoveDirection = 1;
    mediumCombatCurrentOffset = 0;
    resetMediumCombatEnemyMovementState();
    mediumCombatEnemy.root.lookAt(
      mediumCombatPlayerSpawn.x,
      mediumCombatEnemy.root.position.y,
      mediumCombatPlayerSpawn.z
    );
    mediumCombatEnemy.networkTargetYaw = mediumCombatEnemy.root.rotation.y;

    console.log("[Medium Range Jiggle Training] enemy spawned", mediumCombatEnemy.root.position.clone());
    broadcastAimTrainingTargetState({ force: true, log: true });
  }

  function getRandomMediumCombatRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function moveMediumCombatOffsetToward(currentOffset, targetOffset, maxDelta) {
    if (Math.abs(targetOffset - currentOffset) <= maxDelta) {
      return targetOffset;
    }

    return currentOffset + Math.sign(targetOffset - currentOffset) * maxDelta;
  }

  function chooseMediumCombatStrafeTarget() {
    let targetOffset = mediumCombatEnemySideOffset;

    for (let attempt = 0; attempt < 8; attempt += 1) {
      const direction = Math.random() < 0.5 ? -1 : 1;
      const distance = getRandomMediumCombatRange(1.4, MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH);
      targetOffset = THREE.MathUtils.clamp(
        mediumCombatEnemySideOffset + direction * distance,
        -MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH,
        MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH
      );

      if (Math.abs(targetOffset - mediumCombatEnemySideOffset) >= 0.9) {
        return targetOffset;
      }
    }

    return mediumCombatEnemySideOffset <= 0
      ? MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH
      : -MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH;
  }

  function chooseMediumCombatJiggleTarget(direction = mediumCombatEnemyJiggleDirection) {
    const amplitude = getRandomMediumCombatRange(
      MEDIUM_RANGE_JIGGLE_MIN_TARGET,
      MEDIUM_RANGE_JIGGLE_MAX_TARGET
    );
    return THREE.MathUtils.clamp(
      mediumCombatEnemyJiggleBaseOffset + direction * amplitude,
      -MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH,
      MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH
    );
  }

  function updateMediumCombatJiggleVelocity() {
    const distanceToTarget = Math.abs(mediumCombatEnemyMoveTargetOffset - mediumCombatEnemySideOffset);
    mediumCombatEnemySideVelocity = distanceToTarget > 0.001
      ? distanceToTarget / MEDIUM_RANGE_JIGGLE_CROSS_TIME
      : 0;
  }

  function setMediumCombatEnemyMovementState(state) {
    mediumCombatEnemyMoveState = state;

    if (state === "jiggle") {
      mediumCombatEnemyJiggleBaseOffset = mediumCombatEnemySideOffset;
      mediumCombatEnemyMoveStateTimer = getRandomMediumCombatRange(1.2, 2.2);
      mediumCombatEnemyJiggleDirection = Math.random() < 0.5 ? -1 : 1;
      if (mediumCombatEnemyJiggleBaseOffset >= MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH - MEDIUM_RANGE_JIGGLE_MIN_TARGET) {
        mediumCombatEnemyJiggleDirection = -1;
      } else if (mediumCombatEnemyJiggleBaseOffset <= -MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH + MEDIUM_RANGE_JIGGLE_MIN_TARGET) {
        mediumCombatEnemyJiggleDirection = 1;
      }
      mediumCombatEnemyMoveTargetOffset = chooseMediumCombatJiggleTarget();
      updateMediumCombatJiggleVelocity();
    } else if (state === "strafe") {
      mediumCombatEnemyMoveStateTimer = getRandomMediumCombatRange(1.0, 2.4);
      mediumCombatEnemySideVelocity = getRandomMediumCombatRange(2.8, 4.4);
      mediumCombatEnemyMoveTargetOffset = chooseMediumCombatStrafeTarget();
    } else {
      mediumCombatEnemyMoveStateTimer = getRandomMediumCombatRange(0.05, 0.25);
      mediumCombatEnemySideVelocity = 0;
      mediumCombatEnemyMoveTargetOffset = mediumCombatEnemySideOffset;
    }

    console.log("[MEDIUM RANGE JIGGLE] movement state", {
      state: mediumCombatEnemyMoveState,
      targetOffset: Number(mediumCombatEnemyMoveTargetOffset.toFixed(3)),
      sideOffset: Number(mediumCombatEnemySideOffset.toFixed(3))
    });
  }

  function chooseNextMediumCombatEnemyMovementState() {
    const previousState = mediumCombatEnemyMoveState;
    const roll = Math.random();

    if (previousState === "jiggle") {
      setMediumCombatEnemyMovementState(roll < 0.55 ? "strafe" : roll < 0.78 ? "pause" : "jiggle");
      return;
    }

    if (previousState === "strafe") {
      setMediumCombatEnemyMovementState(roll < 0.72 ? "jiggle" : "pause");
      return;
    }

    setMediumCombatEnemyMovementState(roll < 0.58 ? "jiggle" : "strafe");
  }

  function resetMediumCombatEnemyMovementState() {
    mediumCombatEnemySideOffset = 0;
    mediumCombatCurrentOffset = 0;
    mediumCombatEnemySideVelocity = 0;
    mediumCombatEnemyMoveTargetOffset = 0;
    mediumCombatEnemyJiggleBaseOffset = 0;
    mediumCombatEnemyJiggleDirection = 1;
    setMediumCombatEnemyMovementState("jiggle");
  }

  function updateMediumCombatEnemy(enemyActor, delta) {
    if (!enemyActor || enemyActor.isDead || !isMediumCombatActive) {
      return;
    }

    mediumCombatEnemyMoveStateTimer -= delta;

    if (mediumCombatEnemyMoveState === "pause") {
      mediumCombatEnemyMoveTargetOffset = mediumCombatEnemySideOffset;
    } else {
      mediumCombatEnemySideOffset = moveMediumCombatOffsetToward(
        mediumCombatEnemySideOffset,
        mediumCombatEnemyMoveTargetOffset,
        mediumCombatEnemySideVelocity * delta
      );
    }

    mediumCombatEnemySideOffset = THREE.MathUtils.clamp(
      mediumCombatEnemySideOffset,
      -MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH,
      MEDIUM_COMBAT_SIDE_LANE_HALF_WIDTH
    );
    mediumCombatCurrentOffset = mediumCombatEnemySideOffset;
    enemyActor.root.position.copy(mediumCombatEnemySpawnCenter)
      .addScaledVector(mediumCombatSideDirection, mediumCombatEnemySideOffset);
    enemyActor.root.position.y = mediumCombatEnemySpawn.y;
    enemyActor.root.lookAt(
      mediumCombatPlayerSpawn.x,
      enemyActor.root.position.y,
      mediumCombatPlayerSpawn.z
    );
    enemyActor.networkTargetPosition.copy(enemyActor.root.position);
    enemyActor.networkTargetYaw = enemyActor.root.rotation.y;

    if (enemyActor.characterActions && enemyActor.characterActions.run) {
      if (!enemyActor.characterActions.run.isRunning()) {
        enemyActor.characterActions.run.play();
      }
      enemyActor.characterMixer.update(0);
    }

    const reachedMoveTarget =
      Math.abs(mediumCombatEnemyMoveTargetOffset - mediumCombatEnemySideOffset) <= 0.05;

    if (mediumCombatEnemyMoveState === "jiggle" && reachedMoveTarget) {
      if (mediumCombatEnemyMoveStateTimer <= 0) {
        chooseNextMediumCombatEnemyMovementState();
      } else {
        mediumCombatEnemyJiggleDirection *= -1;
        mediumCombatEnemyMoveTargetOffset = chooseMediumCombatJiggleTarget();
        updateMediumCombatJiggleVelocity();
      }
    } else if (
      (mediumCombatEnemyMoveState === "strafe" && (mediumCombatEnemyMoveStateTimer <= 0 || reachedMoveTarget)) ||
      (mediumCombatEnemyMoveState === "pause" && mediumCombatEnemyMoveStateTimer <= 0)
    ) {
      chooseNextMediumCombatEnemyMovementState();
    }
  }

  function getActiveAimTrainingModeId() {
    if (isGridShotActive) return "gridShot";
    if (isTrackingBallActive) return "trackingBall";
    if (isJiggleTrainingActive) return "jiggleTraining";
    if (isMediumCombatActive) return "mediumRangeJiggleTraining";
    return "";
  }

  function getAimTrainingModeDisplayName(mode) {
    if (mode === "gridShot") return "Grid Shot";
    if (mode === "trackingBall") return "Tracking Ball";
    if (mode === "jiggleTraining") return "Jiggle Training";
    if (mode === "mediumRangeJiggleTraining") return "Medium Range Jiggle Training";
    return "Aim Training";
  }

  function getAimTrainingRemainingSeconds(mode = getActiveAimTrainingModeId()) {
    if (mode === "gridShot") return gridShotTimer;
    if (mode === "trackingBall") return trackingBallTimer;
    if (mode === "jiggleTraining") return jiggleTrainingTimer;
    if (mode === "mediumRangeJiggleTraining") return mediumCombatTimer;
    return 0;
  }

  function setAimTrainingRemainingSeconds(mode, remainingSeconds) {
    const safeRemaining = THREE.MathUtils.clamp(Math.ceil(Number(remainingSeconds) || 0), 0, 60);
    if (mode === "gridShot") {
      gridShotTimer = safeRemaining;
      updateGridShotHudText();
    } else if (mode === "trackingBall") {
      trackingBallTimer = safeRemaining;
      updateTrackingBallHudText();
    } else if (mode === "jiggleTraining") {
      jiggleTrainingTimer = safeRemaining;
      updateJiggleTrainingHudText();
    } else if (mode === "mediumRangeJiggleTraining") {
      mediumCombatTimer = safeRemaining;
      updateMediumCombatHudText();
    }

    if (aimTrainingStats.active) {
      aimTrainingStats.remainingSeconds = safeRemaining;
      aimTrainingStats.startTime = performance.now() - ((60 - safeRemaining) * 1000);
      if (trainingStatTime) trainingStatTime.textContent = `${safeRemaining}s`;
    }
  }

  function getAimTrainingModeMapLoad(mode) {
    if (mode === "mediumRangeJiggleTraining") {
      return {
        mapId: ironworksYardMapId,
        visualVariant: mediumRangeJiggleTrainingVisualVariant
      };
    }

    return {
      mapId: settingsPreviewMapId,
      visualVariant: ""
    };
  }

  function resetAimTrainingSyncSendMarkers() {
    lastAimTrainingStateSentAt = -Infinity;
    lastAimTrainingTimerSentAt = -Infinity;
    lastAimTrainingTargetStateSentAt = -Infinity;
    lastAimTrainingSyncedMode = "";
    lastAimTrainingSyncedFinished = false;
  }

  function generateAimTrainingSessionId(mode = getActiveAimTrainingModeId()) {
    const safeMode = String(mode || "aim-training").replace(/[^a-z0-9_-]/gi, "-");
    return `${safeMode}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function startNewAimTrainingSession(mode = getActiveAimTrainingModeId()) {
    if (isNetworkAimTrainingMirror) {
      return aimTrainingSessionId;
    }

    aimTrainingSessionMode = String(mode || "");
    aimTrainingSessionId = generateAimTrainingSessionId(aimTrainingSessionMode);
    if (!isLanClient) {
      currentHostAimTrainingSessionId = "";
      hasLeftHostAimTrainingSession = false;
      ignoredHostAimTrainingSessionId = "";
    }
    resetAimTrainingSyncSendMarkers();
    return aimTrainingSessionId;
  }

  function ensureAimTrainingSessionId(mode = getActiveAimTrainingModeId()) {
    const safeMode = String(mode || "");
    if (!safeMode) {
      return "";
    }

    if (!aimTrainingSessionId || aimTrainingSessionMode !== safeMode) {
      return startNewAimTrainingSession(safeMode);
    }

    return aimTrainingSessionId;
  }

  function getHostAimTrainingMessageSessionId(message = {}) {
    const state = message?.state && typeof message.state === "object" ? message.state : message;
    const sessionId = String(state?.sessionId || message?.sessionId || "").trim();
    if (sessionId) {
      return sessionId;
    }

    const mode = String(state?.mode || message?.mode || "").trim();
    return mode ? `legacy:${mode}` : "";
  }

  function shouldIgnoreHostAimTrainingMessage(message = {}, messageType = "aim_training_state") {
    const sessionId = getHostAimTrainingMessageSessionId(message);
    if (
      hasLeftHostAimTrainingSession &&
      ignoredHostAimTrainingSessionId &&
      sessionId &&
      sessionId === ignoredHostAimTrainingSessionId
    ) {
      console.log("[AIM TRAINING SYNC] ignored host update after client leave", messageType);
      return true;
    }

    return false;
  }

  function rememberAcceptedHostAimTrainingSession(sessionId) {
    if (!sessionId) {
      return;
    }

    currentHostAimTrainingSessionId = sessionId;
    aimTrainingSessionId = sessionId;
    aimTrainingSessionMode = String(getActiveAimTrainingModeId() || aimTrainingSessionMode || "");
    if (sessionId !== ignoredHostAimTrainingSessionId) {
      hasLeftHostAimTrainingSession = false;
      ignoredHostAimTrainingSessionId = "";
    }
  }

  function cleanupLocalMirroredAimTraining(reason = "client local leave", { markIgnored = true } = {}) {
    const sessionId =
      currentHostAimTrainingSessionId ||
      getHostAimTrainingMessageSessionId({ mode: getActiveAimTrainingModeId() }) ||
      aimTrainingSessionId;

    if (markIgnored && sessionId) {
      hasLeftHostAimTrainingSession = true;
      ignoredHostAimTrainingSessionId = sessionId;
    }

    currentHostAimTrainingSessionId = sessionId;
    isNetworkAimTrainingMirror = false;
    clearNetworkAimTrainingTargets();
    cleanupAimTrainingMode(reason);
    hideAimTrainingStatsHud(reason);
    hideAimTrainingEndPanel(reason);

    if (aimTrainingResultsContainer) {
      aimTrainingResultsContainer.style.display = "none";
    }

    clearMovementInput();
    clearActiveMobileGameplayInputs();
    isShooting = false;
    playerDead = false;
    hideDeathOverlay();
    if (document.pointerLockElement === canvas) {
      document.exitPointerLock?.();
    }

    closeMenus();
    showMainMenu();
  }

  function handleHomeFromOnlineClient(reason = "client home exit", { sendLeave = true, message = "" } = {}) {
    const isJoinedClient = isLanClient && !isLanHost;
    const hasClientSession =
      isJoinedClient &&
      (isLanSessionActive() || lanSocket || lanSessionIntent || localPlayerId || lanConnectionStatus !== "offline");

    if (!hasClientSession) {
      return false;
    }

    console.log("[ONLINE EXIT] client disconnecting before Home", reason);
    disconnectLanSession({
      preserveStatus: false,
      preserveSessionIntent: false,
      sendLeave
    });
    console.log("[ONLINE EXIT] LAN disconnected");

    hasLeftHostAimTrainingSession = true;
    ignoredHostAimTrainingSessionId =
      currentHostAimTrainingSessionId ||
      getHostAimTrainingMessageSessionId({ mode: getActiveAimTrainingModeId() }) ||
      aimTrainingSessionId;
    currentHostAimTrainingSessionId = "";
    isNetworkAimTrainingMirror = false;

    clearNetworkAimTrainingTargets();
    cleanupAimTrainingMode(reason);
    hideAimTrainingStatsHud(reason);
    hideAimTrainingEndPanel(reason);
    if (aimTrainingResultsContainer) {
      aimTrainingResultsContainer.style.display = "none";
    }
    console.log("[ONLINE EXIT] cleared remote aim training state");

    clearMovementInput();
    clearActiveMobileGameplayInputs();
    isShooting = false;
    playerDead = false;
    hideDeathOverlay();
    if (document.pointerLockElement === canvas) {
      document.exitPointerLock?.();
    }

    closeMenus();
    showMainMenu();
    if (message) {
      showStatusMessage(message, 1800);
    }
    console.log("[ONLINE EXIT] returned Home");
    return true;
  }

  function leaveMirroredHostAimTrainingLocally(reason = "client local leave") {
    if (handleHomeFromOnlineClient(reason)) {
      return true;
    }

    if (!isLanClient || !isNetworkAimTrainingMirror) {
      return false;
    }

    console.log("[AIM TRAINING SYNC] client Home clicked while mirroring");
    cleanupLocalMirroredAimTraining(reason, { markIgnored: true });
    console.log("[AIM TRAINING SYNC] client local leave complete");
    return true;
  }

  function cleanupMirroredAimTrainingAfterHostDisconnect(reason = "host disconnected") {
    if (!isLanClient || !isNetworkAimTrainingMirror) {
      return false;
    }

    console.log("[AIM TRAINING SYNC] host disconnected, cleaning mirrored training");
    return handleHomeFromOnlineClient(reason, {
      sendLeave: false,
      message: "Host disconnected"
    });
  }

  function buildGridShotTargetState() {
    return gridShotBalls.map((ball) => ({
      targetId: ball.userData.aimTrainingTargetId || "",
      position: buildNetworkVector3Payload(ball.position, 3),
      alive: true
    }));
  }

  function buildTrackingBallTargetState() {
    if (!trackingBallObject) {
      return null;
    }

    return {
      targetId: trackingBallTargetId || trackingBallObject.userData.aimTrainingTargetId || "",
      position: buildNetworkVector3Payload(trackingBallObject.position, 3),
      direction: buildNetworkVector3Payload(trackingBallDir, 4),
      hp: Math.max(0, Math.round(trackingBallHp)),
      maxHp: Math.max(1, Math.round(trackingBallMaxHp)),
      alive: true
    };
  }

  function getAimTrainingEnemyForMode(mode) {
    if (mode === "jiggleTraining") return jiggleTrainingEnemy;
    if (mode === "mediumRangeJiggleTraining") return mediumCombatEnemy;
    return null;
  }

  function markNetworkAimTrainingEnemy(enemyActor, mode) {
    if (!enemyActor) {
      return null;
    }

    enemyActor.isTrainingModeTarget = true;
    enemyActor.isJiggleTrainingTarget = mode === "jiggleTraining";
    enemyActor.isMediumCombatTarget = mode === "mediumRangeJiggleTraining";

    if (mode === "jiggleTraining") {
      jiggleTrainingEnemy = enemyActor;
    } else if (mode === "mediumRangeJiggleTraining") {
      mediumCombatEnemy = enemyActor;
    }

    return enemyActor;
  }

  function buildAimTrainingEnemyTargetState(mode) {
    const enemyActor = getAimTrainingEnemyForMode(mode);
    if (!enemyActor) {
      return null;
    }

    const enemyState = buildEnemyNetworkState(enemyActor);
    if (!enemyState) {
      return null;
    }

    enemyState.trainingTargetType = mode;
    return enemyState;
  }

  function buildAimTrainingTargetState(mode = getActiveAimTrainingModeId()) {
    if (mode === "gridShot") {
      return {
        targets: buildGridShotTargetState()
      };
    }

    if (mode === "trackingBall") {
      return {
        target: buildTrackingBallTargetState()
      };
    }

    if (mode === "jiggleTraining" || mode === "mediumRangeJiggleTraining") {
      return {
        enemy: buildAimTrainingEnemyTargetState(mode)
      };
    }

    return {};
  }

  function buildAimTrainingSyncState() {
    const mode = getActiveAimTrainingModeId();
    const active = Boolean(mode);
    const sessionId = active ? ensureAimTrainingSessionId(mode) : aimTrainingSessionId;
    const remainingSeconds = active ? getAimTrainingRemainingSeconds(mode) : 0;
    return {
      active,
      mode,
      sessionId,
      durationSeconds: 60,
      remainingSeconds,
      finished: active ? remainingSeconds <= 0 || Boolean(aimTrainingStats.finished) : false,
      targetState: active ? buildAimTrainingTargetState(mode) : {}
    };
  }

  function broadcastAimTrainingState({ force = false } = {}) {
    if (!isLanHost || !isLanSessionActive()) {
      return false;
    }

    const state = buildAimTrainingSyncState();
    const now = performance.now();
    const shouldSend =
      force ||
      now - lastAimTrainingStateSentAt >= aimTrainingStateSyncIntervalMs ||
      state.mode !== lastAimTrainingSyncedMode ||
      state.finished !== lastAimTrainingSyncedFinished;

    if (!shouldSend) {
      return false;
    }

    const didSend = sendNetworkMessage({
      type: "aim_training_state",
      state
    });

    if (didSend) {
      lastAimTrainingStateSentAt = now;
      lastAimTrainingSyncedMode = state.mode;
      lastAimTrainingSyncedFinished = state.finished;
      console.log("[AIM TRAINING SYNC] host broadcasting state", state);
      console.log("[AIM TRAINING SYNC] timer sync", state.remainingSeconds);
      if (state.finished) {
        console.log("[AIM TRAINING SYNC] finished");
      }
    }

    return didSend;
  }

  function broadcastAimTrainingTimer({ force = false } = {}) {
    if (!isLanHost || !isLanSessionActive()) {
      return false;
    }

    const mode = getActiveAimTrainingModeId();
    if (!mode) {
      return false;
    }

    const now = performance.now();
    if (!force && now - lastAimTrainingTimerSentAt < aimTrainingStateSyncIntervalMs) {
      return false;
    }

    const remainingSeconds = getAimTrainingRemainingSeconds(mode);
    const didSend = sendNetworkMessage({
      type: "aim_training_timer",
      mode,
      sessionId: ensureAimTrainingSessionId(mode),
      remainingSeconds
    });

    if (didSend) {
      lastAimTrainingTimerSentAt = now;
      console.log("[AIM TRAINING SYNC] timer sync", remainingSeconds);
    }

    return didSend;
  }

  function broadcastAimTrainingTargetState({ force = false, log = false } = {}) {
    if (!isLanHost || !isLanSessionActive()) {
      return false;
    }

    const mode = getActiveAimTrainingModeId();
    if (!mode) {
      return false;
    }

    const now = performance.now();
    if (!force && now - lastAimTrainingTargetStateSentAt < aimTrainingTargetSyncIntervalMs) {
      return false;
    }

    const targetState = buildAimTrainingTargetState(mode);
    const didSend = sendNetworkMessage({
      type: "aim_training_target_state",
      mode,
      sessionId: ensureAimTrainingSessionId(mode),
      remainingSeconds: getAimTrainingRemainingSeconds(mode),
      targetState
    });

    if (didSend) {
      lastAimTrainingTargetStateSentAt = now;
      if (log) {
        console.log("[AIM TRAINING SYNC] target state sync", targetState);
      }
    }

    return didSend;
  }

  function broadcastAimTrainingFinished(mode = getActiveAimTrainingModeId()) {
    if (!isLanHost || !isLanSessionActive() || !mode) {
      return false;
    }

    const didSend = sendNetworkMessage({
      type: "aim_training_finished",
      mode,
      sessionId: ensureAimTrainingSessionId(mode),
      remainingSeconds: 0
    });

    if (didSend) {
      console.log("[AIM TRAINING SYNC] finished");
    }

    return didSend;
  }

  function broadcastAimTrainingExit(mode = getActiveAimTrainingModeId()) {
    if (!isLanHost || !isLanSessionActive()) {
      return false;
    }

    return sendNetworkMessage({
      type: "aim_training_exit",
      mode,
      sessionId: aimTrainingSessionId
    });
  }

  function broadcastAimTrainingSyncIfNeeded(currentTime = performance.now()) {
    if (!isLanHost || !isLanSessionActive()) {
      return;
    }

    if (!getActiveAimTrainingModeId()) {
      return;
    }

    broadcastAimTrainingState();
    broadcastAimTrainingTimer();

    if (
      isTrackingBallActive ||
      isJiggleTrainingActive ||
      isMediumCombatActive
    ) {
      broadcastAimTrainingTargetState();
    } else if (isGridShotActive) {
      broadcastAimTrainingTargetState({
        force: currentTime - lastAimTrainingTargetStateSentAt >= aimTrainingStateSyncIntervalMs
      });
    }
  }

  function clearNetworkAimTrainingTargets() {
    clearGridShotBalls();
    removeTrackingBallObject();

    if (jiggleTrainingEnemy) {
      removeEnemy(jiggleTrainingEnemy, {
        suppressNetworkBroadcast: true,
        suppressWaveUpdate: true
      });
      jiggleTrainingEnemy = null;
    }

    if (mediumCombatEnemy) {
      removeEnemy(mediumCombatEnemy, {
        suppressNetworkBroadcast: true,
        suppressWaveUpdate: true
      });
      mediumCombatEnemy = null;
    }

    removeMediumCombatMovementBoundary();
  }

  function setNetworkAimTrainingActiveMode(mode, remainingSeconds) {
    const previousMode = getActiveAimTrainingModeId();
    const shouldResetTargets = previousMode && previousMode !== mode;

    if (shouldResetTargets) {
      clearNetworkAimTrainingTargets();
    }

    isNetworkAimTrainingMirror = true;
    isGridShotActive = mode === "gridShot";
    isTrackingBallActive = mode === "trackingBall";
    isJiggleTrainingActive = mode === "jiggleTraining";
    isMediumCombatActive = mode === "mediumRangeJiggleTraining";

    if (aimTrainingStats.mode !== getAimTrainingModeDisplayName(mode) || !aimTrainingStats.active || aimTrainingStats.finished) {
      showAimTrainingStatsHud(getAimTrainingModeDisplayName(mode));
    }

    if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "none";
    if (aimTrainingHud) {
      aimTrainingHud.removeAttribute("hidden");
      aimTrainingHud.setAttribute("aria-hidden", "false");
      aimTrainingHud.hidden = false;
    }

    if (mode === "mediumRangeJiggleTraining") {
      createMediumCombatMovementBoundary();
      temporaryPlayerSpawnOverride = mediumCombatPlayerSpawn.clone();
    } else {
      temporaryPlayerSpawnOverride = gridShotSpawn.clone();
    }

    gameStarted = true;
    if (document.body.classList.contains("main-menu-open")) {
      hideMainMenu();
    }
    updateAimTrainingHudVisibility();
    setAimTrainingRemainingSeconds(mode, remainingSeconds);
  }

  function applyGridShotTargetState(targetState = {}) {
    const targets = Array.isArray(targetState.targets) ? targetState.targets : [];
    const activeIds = new Set(targets.map((target) => String(target.targetId || "")));

    for (const ball of [...gridShotBalls]) {
      const targetId = ball.userData.aimTrainingTargetId || "";
      if (!activeIds.has(targetId)) {
        removeGridShotBall(ball);
      }
    }

    for (const target of targets) {
      const targetId = String(target.targetId || "");
      if (!targetId) {
        continue;
      }

      let ball = gridShotBalls.find((candidate) => candidate.userData.aimTrainingTargetId === targetId);
      if (!ball) {
        ball = spawnGridShotBall(null, {
          targetId,
          position: target.position
        });
      } else {
        readVector3FromNetwork(target.position, ball.position);
      }
    }
  }

  function applyTrackingBallTargetState(targetState = {}) {
    const target = targetState.target;
    if (!target || target.alive === false) {
      removeTrackingBallObject();
      return;
    }

    const targetId = String(target.targetId || "");
    if (!trackingBallObject || trackingBallTargetId !== targetId) {
      removeTrackingBallObject();
      spawnTrackingBall({
        targetId,
        position: target.position,
        direction: target.direction,
        hp: target.hp,
        maxHp: target.maxHp
      });
      return;
    }

    readVector3FromNetwork(target.position, trackingBallObject.position);
    if (target.direction) {
      readVector3FromNetwork(target.direction, trackingBallDir);
      trackingBallDir.normalize();
    }
    trackingBallMaxHp = Math.max(1, Number(target.maxHp) || trackingBallMaxHp || 100);
    trackingBallHp = THREE.MathUtils.clamp(
      Number.isFinite(Number(target.hp)) ? Number(target.hp) : trackingBallHp,
      0,
      trackingBallMaxHp
    );
    updateTrackingBallHpBar();
  }

  function applyEnemyAimTrainingTargetState(mode, targetState = {}) {
    const enemyState = targetState.enemy;
    if (!enemyState?.enemyId) {
      return;
    }

    enemyState.trainingTargetType = mode;
    const enemyActor = spawnOrUpdateSharedEnemyFromNetwork(enemyState, { snap: !getAimTrainingEnemyForMode(mode) });
    markNetworkAimTrainingEnemy(enemyActor, mode);

    if (mode === "jiggleTraining" && enemyActor) {
      jiggleTrainingEnemySpawnCenter.copy(enemyActor.root.position);
    } else if (mode === "mediumRangeJiggleTraining" && enemyActor) {
      mediumCombatEnemySpawnCenter.copy(mediumCombatEnemySpawn);
      mediumCombatSideDirection.copy(mediumCombatJiggleSideDirection).normalize();
    }
  }

  function applyAimTrainingTargetState(mode, targetState = {}) {
    if (mode === "gridShot") {
      applyGridShotTargetState(targetState);
    } else if (mode === "trackingBall") {
      applyTrackingBallTargetState(targetState);
    } else if (mode === "jiggleTraining" || mode === "mediumRangeJiggleTraining") {
      applyEnemyAimTrainingTargetState(mode, targetState);
    }
  }

  async function applyAimTrainingStateFromHost(state = {}) {
    console.log("[AIM TRAINING SYNC] client received state", state);
    if (state.active !== false && shouldIgnoreHostAimTrainingMessage(state, "aim_training_state")) {
      return;
    }

    const sessionId = getHostAimTrainingMessageSessionId(state);

    if (!state.active) {
      if (sessionId && sessionId === ignoredHostAimTrainingSessionId) {
        hasLeftHostAimTrainingSession = false;
        ignoredHostAimTrainingSessionId = "";
      }
      if (isNetworkAimTrainingMirror) {
        console.log("[AIM TRAINING SYNC] host exit received, cleaning client");
        clearNetworkAimTrainingTargets();
        cleanupAimTrainingMode();
        isNetworkAimTrainingMirror = false;
      }
      currentHostAimTrainingSessionId = "";
      return;
    }

    const mode = String(state.mode || "");
    const mapLoad = getAimTrainingModeMapLoad(mode);
    if (!mapLoad.mapId) {
      return;
    }

    const needsMapLoad =
      currentLoadedMapId !== mapLoad.mapId ||
      currentMapVisualVariant !== mapLoad.visualVariant;

    if (needsMapLoad) {
      await loadSelectedMap(mapLoad.mapId, {
        forceReload: true,
        requestSource: "aim training sync",
        visualVariant: mapLoad.visualVariant
      });
    }

    rememberAcceptedHostAimTrainingSession(sessionId);
    console.log("[AIM TRAINING SYNC] client applying state", state);
    setNetworkAimTrainingActiveMode(mode, state.remainingSeconds);
    applyAimTrainingTargetState(mode, state.targetState || {});

    if (state.finished) {
      setAimTrainingRemainingSeconds(mode, 0);
      finishAimTrainingSession("host time over");
      if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "flex";
    }
  }

  function applyAimTrainingTimerSync(message = {}) {
    if (shouldIgnoreHostAimTrainingMessage(message, "aim_training_timer")) {
      return;
    }

    const mode = String(message.mode || getActiveAimTrainingModeId());
    if (!isNetworkAimTrainingMirror || !mode) {
      return;
    }

    rememberAcceptedHostAimTrainingSession(getHostAimTrainingMessageSessionId(message));
    setAimTrainingRemainingSeconds(mode, message.remainingSeconds);
    console.log("[AIM TRAINING SYNC] received aim_training_timer", message);
    console.log("[AIM TRAINING SYNC] timer applied", getAimTrainingRemainingSeconds(mode));
  }

  function applyAimTrainingTargetSync(message = {}, messageType = "aim_training_target_state") {
    if (shouldIgnoreHostAimTrainingMessage(message, messageType)) {
      return;
    }

    const mode = String(message.mode || getActiveAimTrainingModeId());
    if (!isNetworkAimTrainingMirror || !mode) {
      return;
    }

    rememberAcceptedHostAimTrainingSession(getHostAimTrainingMessageSessionId(message));
    if (Number.isFinite(Number(message.remainingSeconds))) {
      setAimTrainingRemainingSeconds(mode, message.remainingSeconds);
    }
    console.log("[AIM TRAINING SYNC] received", messageType, message);
    applyAimTrainingTargetState(mode, message.targetState || {});
    console.log("[AIM TRAINING SYNC] client created mirrored target", message.targetState || {});
  }

  function getMediumRangeMaterialColor(material) {
    return material?.color?.getHexString?.() || "";
  }

  function cloneMediumRangeFloorMaterial(material, targetColor) {
    const clonedMaterial = material.clone();
    clonedMaterial.name = material.name
      ? `${material.name}-medium-range-floor-5d6378`
      : "medium-range-floor-5d6378";
    if (clonedMaterial.color) {
      clonedMaterial.color.setHex(targetColor);
    }
    clonedMaterial.needsUpdate = true;
    return clonedMaterial;
  }

  function applyMediumRangeMaterialColorToMesh(mesh, targetColor) {
    if (!mesh?.material) {
      return "";
    }

    if (Array.isArray(mesh.material)) {
      mesh.material = mesh.material.map((material) => (
        material ? cloneMediumRangeFloorMaterial(material, targetColor) : material
      ));
      return mesh.material
        .map((material) => getMediumRangeMaterialColor(material))
        .filter(Boolean)
        .join(",");
    }

    mesh.material = cloneMediumRangeFloorMaterial(mesh.material, targetColor);
    return getMediumRangeMaterialColor(mesh.material);
  }

  function ensureMediumRangeFloorProofMarker() {
    const markerName = "medium-range-floor-proof-marker";
    const existingMarker = mapGroup.getObjectByName(markerName);
    if (existingMarker) {
      if (existingMarker.parent) existingMarker.parent.remove(existingMarker);
      if (existingMarker.geometry) existingMarker.geometry.dispose();
      if (existingMarker.material) existingMarker.material.dispose();
    }

    const marker = new THREE.Mesh(
      new THREE.PlaneGeometry(0.85, 0.85),
      new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.92
      })
    );
    marker.name = markerName;
    marker.rotation.x = -Math.PI * 0.5;
    marker.position.set(mediumCombatPlayerSpawn.x, 0.055, mediumCombatPlayerSpawn.z);
    marker.userData.ignoreShotRay = true;
    marker.userData.registerBulletCollision = false;
    addMapMesh(marker, {
      collidable: false,
      bulletCollision: false,
      castShadow: false,
      receiveShadow: false
    });
    console.log("[MEDIUM FLOOR DIAG] proof marker added at player spawn floor", {
      name: marker.name,
      position: marker.position.clone(),
      color: marker.material.color.getHexString()
    });
  }

  function applyMediumRangeFloorColor(environmentRoot = mapGroup) {
    const targetColor = 0x5d6378;
    const targetBox = new THREE.Box3();
    const targetSize = new THREE.Vector3();
    const targetCenter = new THREE.Vector3();
    const floorCandidates = [];

    console.log("[MEDIUM FLOOR DIAG] tracing Medium Range Jiggle Training environment path", {
      selectedMap,
      currentLoadedMapId,
      currentMapVisualVariant,
      expectedVariant: mediumRangeJiggleTrainingVisualVariant,
      mapChildren: mapGroup.children.length
    });

    environmentRoot.updateMatrixWorld(true);
    environmentRoot.traverse((node) => {
      if (!node.isMesh) {
        return;
      }

      node.updateMatrixWorld(true);
      targetBox.setFromObject(node);
      if (targetBox.isEmpty()) {
        return;
      }

      targetBox.getSize(targetSize);
      targetBox.getCenter(targetCenter);
      const material = Array.isArray(node.material) ? node.material[0] : node.material;
      const combinedName = `${node.name || ""} ${material?.name || ""}`.toLowerCase();
      const footprintArea = Math.max(targetSize.x, 0) * Math.max(targetSize.z, 0);
      const nearGround = targetBox.min.y <= 0.12 && targetBox.max.y >= -1.8;
      const namedFloor =
        combinedName.includes("floor") ||
        combinedName.includes("ground") ||
        combinedName.includes("yard") ||
        combinedName.includes("base") ||
        combinedName.includes("slab") ||
        combinedName.includes("platform") ||
        combinedName.includes("foundation") ||
        combinedName.includes("deck") ||
        combinedName.includes("lane") ||
        combinedName.includes("pad");
      const geometryFloor = nearGround && (
        targetSize.y <= 0.18 ||
        (targetBox.max.y <= 0.12 && footprintArea >= 250)
      );
      const isFloor = nearGround && (namedFloor || geometryFloor);

      if (!isFloor) {
        return;
      }

      const candidate = {
        mesh: node,
        material,
        name: node.name || "",
        materialName: material?.name || "",
        color: getMediumRangeMaterialColor(material),
        position: node.position.clone(),
        scale: node.scale.clone(),
        visible: node.visible,
        worldMinY: Number(targetBox.min.y.toFixed(3)),
        worldMaxY: Number(targetBox.max.y.toFixed(3)),
        footprintArea: Number(footprintArea.toFixed(3))
      };
      floorCandidates.push(candidate);
      console.log("[MEDIUM FLOOR DIAG] mesh", {
        name: candidate.name,
        materialName: candidate.materialName,
        color: candidate.color,
        position: candidate.position,
        scale: candidate.scale,
        visible: candidate.visible,
        worldMinY: candidate.worldMinY,
        worldMaxY: candidate.worldMaxY,
        footprintArea: candidate.footprintArea
      });
    });

    if (!floorCandidates.length) {
      console.warn("[MEDIUM FLOOR FIX] NO FLOOR MESH FOUND - need manual selection");
      return;
    }

    for (const candidate of floorCandidates) {
      const color = applyMediumRangeMaterialColorToMesh(candidate.mesh, targetColor);
      console.log(
        "[MEDIUM FLOOR FIX] applied #5D6378 to",
        candidate.mesh.name,
        Array.isArray(candidate.mesh.material)
          ? candidate.mesh.material.map((material) => material?.name || "").join(",")
          : candidate.mesh.material?.name,
        color
      );
    }

    console.log("[MEDIUM FLOOR FIX] final visible floor color should be #5D6378");
  }

  function cloneMediumRangeWallMaterial(material, targetColor) {
    const clonedMaterial = material.clone();
    clonedMaterial.name = material.name
      ? `${material.name}-b7aa98`
      : "medium-range-wall-b7aa98";
    if (clonedMaterial.color) {
      clonedMaterial.color.setHex(targetColor);
    }
    clonedMaterial.needsUpdate = true;
    return clonedMaterial;
  }

  function applyMediumRangeWallColorToMesh(mesh, targetColor) {
    if (!mesh?.material) {
      return "";
    }

    if (Array.isArray(mesh.material)) {
      mesh.material = mesh.material.map((material) => (
        material ? cloneMediumRangeWallMaterial(material, targetColor) : material
      ));
      return mesh.material
        .map((material) => getMediumRangeMaterialColor(material))
        .filter(Boolean)
        .join(",");
    }

    mesh.material = cloneMediumRangeWallMaterial(mesh.material, targetColor);
    return getMediumRangeMaterialColor(mesh.material);
  }

  function applyMediumRangeWallColor(environmentRoot = mapGroup) {
    const targetColor = 0xb7aa98;
    const wallBox = new THREE.Box3();
    const wallSize = new THREE.Vector3();
    let wallIndex = 0;

    environmentRoot.updateMatrixWorld(true);
    environmentRoot.traverse((node) => {
      if (!node.isMesh) {
        return;
      }

      const material = Array.isArray(node.material) ? node.material[0] : node.material;
      const materialName = String(material?.name || "").toLowerCase();
      const meshName = String(node.name || "").toLowerCase();
      const isTaggedWallMaterial =
        materialName.includes("medium-range-wall-material") ||
        materialName.includes("medium-range-ruin-wall-material") ||
        materialName.includes("medium-range-low-wall-material");
      const isTaggedWallMesh =
        meshName.includes("wall") ||
        meshName.includes("barrier") ||
        meshName.includes("panel") ||
        meshName.includes("boundary") ||
        meshName.includes("fence");

      if (!isTaggedWallMaterial && !isTaggedWallMesh) {
        return;
      }

      node.updateMatrixWorld(true);
      wallBox.setFromObject(node);
      if (wallBox.isEmpty()) {
        return;
      }

      wallBox.getSize(wallSize);
      const isFloorLike = wallSize.y <= 0.35 && Math.max(wallSize.x, wallSize.z) >= 4;
      if (isFloorLike) {
        return;
      }

      if (!node.name) {
        wallIndex += 1;
        node.name = `medium-range-wall-${wallIndex}`;
      }

      applyMediumRangeWallColorToMesh(node, targetColor);
      const appliedMaterial = Array.isArray(node.material) ? node.material[0] : node.material;
      console.log("[MEDIUM RANGE WALLS] applied wall color", {
        meshName: node.name || "",
        materialName: appliedMaterial?.name || "",
        color: appliedMaterial?.color?.getHexString?.()
      });
    });
  }

  async function startMediumCombatMode() {
    fadeOutMenuMusic("medium-combat-start");
    cleanupAimTrainingMode();
    if (!startMediumCombatModeButton) {
      return;
    }

    commitPlayerIdentitySettings();
    startMediumCombatModeButton.disabled = true;
    const titleEl = startMediumCombatModeButton.querySelector('.aim-mode-title');
    if (titleEl) titleEl.textContent = "Loading...";

    try {
      if (!cameraCustomizationPreviewPreviousMapId) {
        cameraCustomizationPreviewPreviousMapId = selectedMap;
      }
      isMediumCombatActive = true;
      mediumCombatHits = 0;
      mediumCombatMisses = 0;
      mediumCombatTimer = 60;
      showAimTrainingStatsHud("Medium Range Jiggle Training");
      startNewAimTrainingSession("mediumRangeJiggleTraining");

      if (!aimTrainingManualInfiniteAmmoOverride) {
        currentGun.infiniteAmmo = true;
        if (gunInfiniteAmmoInput) gunInfiniteAmmoInput.checked = true;
        syncGunInputs();
      }

      if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "none";
      if (aimTrainingHud) {
        aimTrainingHud.removeAttribute("hidden");
        aimTrainingHud.setAttribute("aria-hidden", "false");
        aimTrainingHud.hidden = false;
      }
      updateMediumCombatHudText();

      if (mediumCombatIntervalId) window.clearInterval(mediumCombatIntervalId);
      mediumCombatIntervalId = window.setInterval(() => {
        if (!isMediumCombatActive || mediumCombatTimer <= 0) return;
        mediumCombatTimer--;
        updateMediumCombatHudText();

        if (mediumCombatTimer <= 0) {
          window.clearInterval(mediumCombatIntervalId);
          mediumCombatIntervalId = 0;
          if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "flex";
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingFinished("mediumRangeJiggleTraining");
        }
      }, 1000);

      temporaryPlayerSpawnOverride = mediumCombatPlayerSpawn.clone();

      await loadSelectedMap(ironworksYardMapId, {
        forceReload: true,
        requestSource: "medium combat mode",
        visualVariant: mediumRangeJiggleTrainingVisualVariant
      });
      console.log("[MEDIUM FLOOR DIAG] Medium Range map load complete", {
        selectedMap,
        currentLoadedMapId,
        currentMapVisualVariant,
        expectedVariant: mediumRangeJiggleTrainingVisualVariant,
        usingLightVariant: currentLoadedMapId === ironworksYardMapId &&
          currentMapVisualVariant === mediumRangeJiggleTrainingVisualVariant
      });
      applyMediumRangeFloorColor(mapGroup);
      applyMediumRangeWallColor(mapGroup);
      ensureMediumRangeFloorProofMarker();
      gameStarted = true;
      hideMainMenu();
      resetPlayerToCurrentSpawn();
      statusMessage.classList.remove("visible");

      createMediumCombatMovementBoundary();
      console.log("[Medium Range Jiggle Training] movement bounds active");
      console.log("[Medium Range Jiggle Training] player spawned", player.position.clone());
      spawnMediumCombatJiggleEnemy();
      broadcastAimTrainingState({ force: true });
      broadcastAimTrainingTargetState({ force: true, log: true });
      console.log("[Medium Range Jiggle Training] mode started");
    } catch (error) {
      console.error("Failed to start Medium Range Jiggle Training:", error);
      cleanupAimTrainingMode();
      selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
      mapSelect.value = selectedMap;
      cameraCustomizationPreviewPreviousMapId = "";
    } finally {
      resetAimTrainingCardLoadingStates();
    }
  }

  function stopMediumCombatMode() {
    cleanupAimTrainingMode();
  }

  function cleanupMediumCombatMode() {
    const hadMediumCombatState = isMediumCombatActive ||
      mediumCombatIntervalId ||
      mediumCombatEnemy ||
      mediumCombatMovementBoundaryGroup;

    if (mediumCombatIntervalId) {
      window.clearInterval(mediumCombatIntervalId);
      mediumCombatIntervalId = 0;
    }

    isMediumCombatActive = false;
    mediumCombatHits = 0;
    mediumCombatMisses = 0;
    mediumCombatTimer = 60;
    mediumCombatCurrentOffset = 0;
    mediumCombatMoveDirection = 1;
    mediumCombatEnemySideOffset = 0;
    mediumCombatEnemySideVelocity = 0;
    mediumCombatEnemyMoveState = "jiggle";
    mediumCombatEnemyMoveStateTimer = 0;
    mediumCombatEnemyMoveTargetOffset = 0;
    mediumCombatEnemyJiggleBaseOffset = 0;
    mediumCombatEnemyJiggleDirection = 1;

    if (mediumCombatEnemy) {
      removeEnemy(mediumCombatEnemy);
      mediumCombatEnemy = null;
    }

    removeMediumCombatMovementBoundary();

    if (hadMediumCombatState) {
      console.log("[Medium Range Jiggle Training] mode cleaned up");
    }
  }

  async function restartMediumCombatMode() {
    cleanupAimTrainingMode();
    await startMediumCombatMode();
  }

  function resetAimTrainingCardLoadingStates() {
    console.log("[AIM TRAINING] Hard resetting card loading states");
    if (startGridShotButton) {
      startGridShotButton.disabled = false;
      startGridShotButton.removeAttribute("aria-busy");
      startGridShotButton.classList.remove("loading");
      const titleEl = startGridShotButton.querySelector('.aim-mode-title');
      if (titleEl) titleEl.textContent = "GRID SHOT";
    }
    if (startTrackingBallButton) {
      startTrackingBallButton.disabled = false;
      startTrackingBallButton.removeAttribute("aria-busy");
      startTrackingBallButton.classList.remove("loading");
      const titleEl = startTrackingBallButton.querySelector('.aim-mode-title');
      if (titleEl) titleEl.textContent = "TRACKING BALL";
    }
    if (startJiggleTrainingButton) {
      startJiggleTrainingButton.disabled = false;
      startJiggleTrainingButton.removeAttribute("aria-busy");
      startJiggleTrainingButton.classList.remove("loading");
      const titleEl = startJiggleTrainingButton.querySelector('.aim-mode-title');
      if (titleEl) titleEl.textContent = "JIGGLE TRAINING";
    }
    if (startMediumCombatModeButton) {
      startMediumCombatModeButton.disabled = false;
      startMediumCombatModeButton.removeAttribute("aria-busy");
      startMediumCombatModeButton.classList.remove("loading");
      const titleEl = startMediumCombatModeButton.querySelector('.aim-mode-title');
      if (titleEl) titleEl.textContent = "Medium Range Jiggle Training";
    }
  }

  function cleanupAimTrainingMode() {
    console.log("[AIM TRAINING] Cleaning up current mode");
    const exitingAimTrainingMode = getActiveAimTrainingModeId();
    if (exitingAimTrainingMode && isLanHost && !isNetworkAimTrainingMirror) {
      broadcastAimTrainingExit(exitingAimTrainingMode);
    }
    hideAimTrainingStatsHud("cleanup");

    // Stop all intervals
    if (gridShotIntervalId) {
      window.clearInterval(gridShotIntervalId);
      gridShotIntervalId = 0;
    }
    if (trackingBallIntervalId) {
      window.clearInterval(trackingBallIntervalId);
      trackingBallIntervalId = 0;
    }
    if (jiggleTrainingIntervalId) {
      window.clearInterval(jiggleTrainingIntervalId);
      jiggleTrainingIntervalId = 0;
    }
    cleanupMediumCombatMode();

    // Deactivate flags
    isGridShotActive = false;
    isTrackingBallActive = false;
    isJiggleTrainingActive = false;
    isMediumCombatActive = false;
    isNetworkAimTrainingMirror = false;
    aimTrainingSessionId = "";
    aimTrainingSessionMode = "";
    resetAimTrainingSyncSendMarkers();

    // Hide Results
    if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "none";

    // Reset Buttons/Cards
    resetAimTrainingCardLoadingStates();

    updateAimTrainingHudVisibility();

    // Cleanup Grid Shot Balls
    clearGridShotBalls();

    // Cleanup Tracking Ball
    removeTrackingBallObject();

    // Cleanup Jiggle Training Enemy
    if (jiggleTrainingEnemy) {
      if (!jiggleTrainingEnemy.isDead) {
        removeEnemy(jiggleTrainingEnemy);
      }
      jiggleTrainingEnemy = null;
    }

    temporaryPlayerSpawnOverride = null;
    gameStarted = false;
  }

  function updateAimTrainingHudVisibility() {
    const active = !!(isGridShotActive || isTrackingBallActive || isJiggleTrainingActive || isMediumCombatActive);
    if (aimTrainingHud) {
      if (active) {
        aimTrainingHud.classList.add("is-active");
        console.log("[AIM HUD] shown for training mode", {
          GridShot: isGridShotActive,
          Tracking: isTrackingBallActive,
          Jiggle: isJiggleTrainingActive,
          MediumCombat: isMediumCombatActive
        });
      } else {
        aimTrainingHud.classList.remove("is-active");
        console.log("[AIM HUD] hidden outside aim training");
      }
    }
  }

  function exitTrackingBallMode() {
    cleanupAimTrainingMode();

    selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
    mapSelect.value = selectedMap;
    cameraCustomizationPreviewPreviousMapId = "";

    showMainMenu();
    if (homePanel) {
      homePanel.setAttribute("hidden", "true");
      homePanel.hidden = true;
    }
    if (aimTrainingView) {
      aimTrainingView.removeAttribute("hidden");
      aimTrainingView.hidden = false;
    }
  }

  function exitJiggleTrainingMode() {
    cleanupAimTrainingMode();

    selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
    mapSelect.value = selectedMap;
    cameraCustomizationPreviewPreviousMapId = "";

    showMainMenu();
    if (homePanel) {
      homePanel.setAttribute("hidden", "true");
      homePanel.hidden = true;
    }
    if (aimTrainingView) {
      aimTrainingView.removeAttribute("hidden");
      aimTrainingView.hidden = false;
    }
  }

  function exitMediumCombatMode() {
    cleanupAimTrainingMode();

    selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
    mapSelect.value = selectedMap;
    cameraCustomizationPreviewPreviousMapId = "";

    showMainMenu();
    if (homePanel) {
      homePanel.setAttribute("hidden", "true");
      homePanel.setAttribute("aria-hidden", "true");
      homePanel.hidden = true;
    }
    if (aimTrainingView) {
      aimTrainingView.removeAttribute("hidden");
      aimTrainingView.setAttribute("aria-hidden", "false");
      aimTrainingView.hidden = false;
    }
  }

  function exitGridShotMode() {
    cleanupAimTrainingMode();

    // Reset Map
    selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
    mapSelect.value = selectedMap;
    cameraCustomizationPreviewPreviousMapId = "";

    showMainMenu();

    if (homePanel) {
      homePanel.setAttribute("hidden", "true");
      homePanel.setAttribute("aria-hidden", "true");
      homePanel.hidden = true;
    }

    if (aimTrainingView) {
      aimTrainingView.removeAttribute("hidden");
      aimTrainingView.setAttribute("aria-hidden", "false");
      aimTrainingView.hidden = false;
    }
  }

  async function startCameraCustomizationPreviewMode() {
    if (cameraCustomizationPreviewMode || !cameraCustomizationPreviewButton) {
      return;
    }

    commitPlayerIdentitySettings();
    cameraCustomizationPreviewButton.disabled = true;
    cameraCustomizationPreviewButton.textContent = "Loading Preview...";
    cameraCustomizationPreviewPreviousMapId = selectedMap;
    cameraCustomizationPreviewMode = true;
    activeSettingsPreviewFlow = "camera";

    // Temporary Industrial Dome spawn override for camera preview
    temporaryPlayerSpawnOverride = cameraCustomizationPreviewSpawn.clone();

    try {
      await loadSelectedMap(settingsPreviewMapId, { forceReload: true });
      gameStarted = true;
      hideMainMenu();
      resetPlayerToCurrentSpawn();
      statusMessage.classList.remove("visible");
      setCameraPreviewCursorHintVisible(true);
      setCameraCustomizationPreviewPanelOpen(true);
    } catch (error) {
      console.error("Failed to start camera customization preview mode:", error);
      gameStarted = false;
      cameraCustomizationPreviewMode = false;
      activeSettingsPreviewFlow = "";
      temporaryPlayerSpawnOverride = null;
      setCameraPreviewCursorHintVisible(false);
      selectedMap = cameraCustomizationPreviewPreviousMapId || selectedMap;
      mapSelect.value = selectedMap;
      cameraCustomizationPreviewPreviousMapId = "";
      showMainMenu();
      setHomeSettingsViewOpen(true);
    } finally {
      cameraCustomizationPreviewButton.disabled = false;
      cameraCustomizationPreviewButton.textContent = "Customise Camera View";
    }
  }

  function exitCameraCustomizationPreviewMode({ reopenHomeSettings = true } = {}) {
    if (!cameraCustomizationPreviewMode) {
      return;
    }

    cameraCustomizationPreviewMode = false;
    activeSettingsPreviewFlow = "";
    temporaryPlayerSpawnOverride = null;
    playerDead = false;
    setCameraPreviewCursorHintVisible(false);
    hideDeathOverlay();
    setCameraCustomizationPreviewPanelOpen(false);
    closeMenus();
    clearMovementInput();
    isShooting = false;
    gameStarted = false;

    if (cameraCustomizationPreviewPreviousMapId) {
      selectedMap = cameraCustomizationPreviewPreviousMapId;
      mapSelect.value = selectedMap;
      cameraCustomizationPreviewPreviousMapId = "";
    }

    showMainMenu();
    if (reopenHomeSettings) {
      setHomeSettingsViewOpen(true);
    }
  }

  function showMainMenu() {
    cleanupAimTrainingMode();
    playMenuMusic("main-menu-show");
    stopAdsAiming("mainMenu");
    clearActiveMobileGameplayInputs();
    setHomeGunViewOpen(false);
    setHomeSettingsViewOpen(false);
    setCameraPreviewCursorHintVisible(false);
    resetRecoilOffsets();
    createMainMenu();
    document.body.classList.add("main-menu-open");
    instructions.setAttribute("aria-hidden", "false");
    setPlayingUi(false);
    syncHomeOnlineModePanelPlacement();
  }

  function hideMainMenu() {
    setHomeGunViewOpen(false);
    setHomeSettingsViewOpen(false);
    document.body.classList.remove("main-menu-open");
    instructions.setAttribute("aria-hidden", "true");
    setPlayingUi(true);
    syncHomeOnlineModePanelPlacement();
    syncMobileHudActionAvailability();
  }

  async function startGame() {
    if (!startupReady) {
      return;
    }

    commitPlayerIdentitySettings();
    logMapPipelineStep(
      createMapPipelineContext(mapSelect.value, "ready button"),
      "ready requested",
      {
        currentLoadedMapId,
        pendingLoadActive:
          pendingMapLoadRequest?.mapId === normalizeMapId(mapSelect.value)
      }
    );
    await loadSelectedMap(mapSelect.value, {
      requestSource: "ready button"
    });
    gameStarted = true;
    fadeOutMenuMusic("game-start");
    hideMainMenu();
    closeMenus();
    updateAimTrainingHudVisibility();
    statusMessage.classList.remove("visible");
    requestLock();
  }

  function syncMenuState() {
    menuOpen = interactionMenuOpen || settingsMenuOpen || mobileLayoutEditMode;
    hud.classList.toggle("menu-open", interactionMenuOpen);
    hud.classList.toggle("settings-open", settingsMenuOpen);
    hud.classList.toggle("mobile-layout-editing", mobileLayoutEditMode);
    interactionMenu.setAttribute("aria-hidden", String(!interactionMenuOpen));
    settingsMenu.setAttribute("aria-hidden", String(!settingsMenuOpen));
    refreshMobileHudVisibility();
    syncMobileHudActionAvailability();
    updateMobileInputDiagnosticsOverlay();
  }

  function handleMenuOpened() {
    clearMovementInput();
    isShooting = false;
    clearActiveMobileGameplayInputs();
    if (document.pointerLockElement === canvas) {
      document.exitPointerLock();
    }
  }

  function setMenuOpen(isOpen) {
    interactionMenuOpen = isOpen;

    if (isOpen) {
      settingsMenuOpen = false;
      syncGunInputs();
      handleMenuOpened();
    } else {
      setGunCustomizationPanelOpen(false);
    }

    syncMenuState();
  }

  function syncSettingsInputs() {
    settingsFovInput.value = String(Math.round(camera.fov));
    syncCameraCustomizationInputs();
    syncGraphicsSettingsInputs();
    syncUiTransparencyInput();
    syncMobileCameraSensitivityInput();
    syncPlayerIdentityInputs();
    syncSettingsDebugReadout();
    syncMobileLayoutSettingsAvailability();
    syncSettingsTabAvailability();
  }

  function setSettingsMenuOpen(isOpen) {
    if (settingsMenuOpen === isOpen) {
      return;
    }

    settingsMenuOpen = isOpen;
    const settingsMenuSource = homeSettingsViewOpen ? "home-settings" : "in-game";

    if (isOpen) {
      stopAdsAiming("settingsOpen");
      interactionMenuOpen = false;
      setGunCustomizationPanelOpen(false);
      syncSettingsInputs();
      setActiveSettingsTab(activeSettingsTabId, { emitLog: false });
      handleMenuOpened();
      console.log("settings_menu_opened", {
        source: settingsMenuSource,
        tab: activeSettingsTabId
      });
      queueSettingsMenuDiagnostics(`${settingsMenuSource}-open`);
    } else {
      if (!cameraCustomizationPreviewMode) {
        resetCameraCustomizationCompactPanelUi();
      }
      console.log("settings_menu_closed", {
        source: settingsMenuSource,
        tab: activeSettingsTabId
      });
    }

    syncMenuState();
  }

  function toggleSettingsMenu() {
    setSettingsMenuOpen(!settingsMenuOpen);
  }

  function closeMenus() {
    const wasSettingsMenuOpen = settingsMenuOpen;
    if (!cameraCustomizationPreviewMode) {
      resetCameraCustomizationCompactPanelUi();
      setCrosshairCustomizationPanelOpen(false);
    }
    interactionMenuOpen = false;
    settingsMenuOpen = false;
    setGunCustomizationPanelOpen(false);
    syncMenuState();
    if (wasSettingsMenuOpen) {
      console.log("settings_menu_closed", {
        source: "closeMenus",
        tab: activeSettingsTabId
      });
    }
  }

  function showStatusMessage(text, duration = 1800) {
    statusMessage.textContent = text;
    statusMessage.classList.add("visible");

    if (statusMessageTimeoutId) {
      window.clearTimeout(statusMessageTimeoutId);
    }

    if (duration > 0) {
      statusMessageTimeoutId = window.setTimeout(() => {
        statusMessage.classList.remove("visible");
        statusMessageTimeoutId = 0;
      }, duration);
    }
  }

  function getWaveOrdinalLabel(number) {
    const safeNumber = Math.max(1, Math.floor(Number(number) || 1));
    const mod100 = safeNumber % 100;

    if (mod100 >= 11 && mod100 <= 13) {
      return `${safeNumber}TH`;
    }

    switch (safeNumber % 10) {
      case 1:
        return `${safeNumber}ST`;
      case 2:
        return `${safeNumber}ND`;
      case 3:
        return `${safeNumber}RD`;
      default:
        return `${safeNumber}TH`;
    }
  }

  function clearWaveTimers() {
    if (waveCountdownIntervalId) {
      window.clearInterval(waveCountdownIntervalId);
      waveCountdownIntervalId = 0;
    }

    while (pendingWaveSpawnTimeoutIds.length > 0) {
      const timeoutId = pendingWaveSpawnTimeoutIds.pop();
      window.clearTimeout(timeoutId);
    }
  }

  function cancelActiveWaveSessionForRespawn() {
    if (
      !waveSessionActive &&
      !waveCountdownActive &&
      pendingWaveSpawnTimeoutIds.length === 0 &&
      !waveCountdownIntervalId
    ) {
      return;
    }

    // Wave cleanup for death menu Respawn option
    // Cancel pending wave spawns on Respawn
    // Prevent wave restart after Respawn
    resetWaveState({ detachExisting: true });
  }

  function updateWaveStatusUi() {
    if (waveSessionActive && waveCountdownActive) {
      waveStatusText.textContent =
        `Current Wave: ${currentWaveIndex} / ${totalWaves}\n` +
        `${getWaveOrdinalLabel(currentWaveIndex)} WAVE COMPLETED\n` +
        `Countdown to Next Wave: ${waveCountdownRemaining}...`;
      waveStatusText.style.color = "#fcd34d";
      startWaveButton.disabled = true;
      return;
    }

    if (waveSessionActive) {
      waveStatusText.textContent =
        `Current Wave: ${currentWaveIndex} / ${totalWaves}\n` +
        `Enemies Remaining: ${waveRemaining}`;
      waveStatusText.style.color = "#bfdbfe";
      startWaveButton.disabled = true;
      return;
    }

    if (totalWaves > 0 && currentWaveIndex === totalWaves && waveRemaining === 0) {
      waveStatusText.textContent =
        `WAVE SESSION COMPLETE\n` +
        `Current Wave: ${currentWaveIndex} / ${totalWaves}\n` +
        `Enemies Remaining: 0`;
      waveStatusText.style.color = "#86efac";
      startWaveButton.disabled = false;
      return;
    }

    waveStatusText.textContent = "Wave Idle";
    waveStatusText.style.color = "#dbeafe";
    startWaveButton.disabled = false;
  }

  function detachWaveEnemies() {
    for (const enemyActor of enemies) {
      enemyActor.waveId = null;
      enemyActor.waveRemovalCounted = true;
    }
  }

  function resetWaveState({ detachExisting = false } = {}) {
    clearWaveTimers();

    if (detachExisting) {
      detachWaveEnemies();
    }

    waveSessionActive = false;
    currentWaveIndex = 0;
    totalWaves = 0;
    enemiesPerWave = 0;
    waveRemaining = 0;
    waveCountdownActive = false;
    waveCountdownRemaining = 0;
    activeWaveId = 0;
    waveSessionDifficultyKey = "noob";
    updateWaveStatusUi();
  }

  // Final wave session complete
  function completeWaveSession() {
    clearWaveTimers();
    waveSessionActive = false;
    waveCountdownActive = false;
    waveCountdownRemaining = 0;
    waveRemaining = 0;
    updateWaveStatusUi();
    showStatusMessage(`ALL ${totalWaves} WAVES COMPLETED`, 2600);
  }

  const perfOverlay = document.createElement("div");
  perfOverlay.id = "perf-overlay";
  perfOverlay.style.position = "fixed";
  perfOverlay.style.right = "12px";
  perfOverlay.style.bottom = "12px";
  perfOverlay.style.zIndex = "1200";
  perfOverlay.style.minWidth = "0";
  perfOverlay.style.width = "auto";
  perfOverlay.style.padding = "6px 8px";
  perfOverlay.style.background = "rgba(5, 12, 22, 0.72)";
  perfOverlay.style.border = "1px solid rgba(255, 255, 255, 0.1)";
  perfOverlay.style.borderRadius = "8px";
  perfOverlay.style.color = "#dbeafe";
  perfOverlay.style.font = "700 12px/1.2 Consolas, 'Courier New', monospace";
  perfOverlay.style.whiteSpace = "nowrap";
  perfOverlay.style.pointerEvents = "none";
  hud.appendChild(perfOverlay);

  const coordinatesOverlay = document.createElement("div");
  coordinatesOverlay.id = "coordinates-overlay";
  coordinatesOverlay.style.position = "fixed";
  coordinatesOverlay.style.left = "12px";
  coordinatesOverlay.style.top = "12px";
  coordinatesOverlay.style.zIndex = "1200";
  coordinatesOverlay.style.minWidth = "112px";
  coordinatesOverlay.style.padding = "8px 10px";
  coordinatesOverlay.style.background = "rgba(5, 12, 22, 0.78)";
  coordinatesOverlay.style.border = "1px solid rgba(255, 255, 255, 0.12)";
  coordinatesOverlay.style.borderRadius = "10px";
  coordinatesOverlay.style.color = "#dbeafe";
  coordinatesOverlay.style.font = "12px/1.45 Consolas, 'Courier New', monospace";
  coordinatesOverlay.style.whiteSpace = "pre-line";
  coordinatesOverlay.style.pointerEvents = "none";
  hud.appendChild(coordinatesOverlay);

  const deathOverlay = document.createElement("div");
  deathOverlay.id = "death-overlay";
  deathOverlay.style.position = "fixed";
  deathOverlay.style.inset = "0";
  deathOverlay.style.zIndex = "1500";
  deathOverlay.style.display = "grid";
  deathOverlay.style.placeItems = "center";
  deathOverlay.style.padding = "24px";
  deathOverlay.style.background =
    "radial-gradient(circle at center, rgba(127, 29, 29, 0.26) 0%, rgba(7, 9, 14, 0.82) 56%, rgba(3, 4, 7, 0.92) 100%)";
  deathOverlay.style.backdropFilter = "blur(4px)";
  deathOverlay.style.opacity = "0";
  deathOverlay.style.visibility = "hidden";
  deathOverlay.style.transition = "opacity 220ms ease, visibility 220ms ease";
  deathOverlay.style.pointerEvents = "none";

  const deathOverlayPanel = document.createElement("div");
  deathOverlayPanel.style.display = "grid";
  deathOverlayPanel.style.gap = "10px";
  deathOverlayPanel.style.justifyItems = "center";
  deathOverlayPanel.style.textAlign = "center";
  deathOverlayPanel.style.padding = "24px 32px";

  const deathOverlayTitle = document.createElement("div");
  deathOverlayTitle.textContent = "GOT CLAPPED";
  deathOverlayTitle.style.color = "#f3f4f6";
  deathOverlayTitle.style.font = "900 clamp(52px, 10vw, 120px)/0.9 Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  deathOverlayTitle.style.letterSpacing = "0.14em";
  deathOverlayTitle.style.textTransform = "uppercase";
  deathOverlayTitle.style.textShadow =
    "0 0 18px rgba(255, 96, 96, 0.28), 0 10px 28px rgba(0, 0, 0, 0.55)";

  const deathOverlaySubtitle = document.createElement("div");
  deathOverlaySubtitle.textContent = "Choose your return.";
  deathOverlaySubtitle.style.color = "rgba(226, 232, 240, 0.92)";
  deathOverlaySubtitle.style.font = "600 clamp(14px, 2vw, 18px)/1.4 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  deathOverlaySubtitle.style.letterSpacing = "0.22em";
  deathOverlaySubtitle.style.textTransform = "uppercase";

  const deathOverlayActions = document.createElement("div");
  deathOverlayActions.style.display = "flex";
  deathOverlayActions.style.flexWrap = "wrap";
  deathOverlayActions.style.justifyContent = "center";
  deathOverlayActions.style.gap = "12px";
  deathOverlayActions.style.width = "100%";
  deathOverlayActions.style.marginTop = "10px";

  function createDeathOverlayButton(label) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.style.minWidth = "190px";
    button.style.padding = "12px 18px";
    button.style.border = "1px solid rgba(255, 255, 255, 0.28)";
    button.style.borderRadius = "999px";
    button.style.background = "linear-gradient(180deg, rgba(153, 27, 27, 0.94), rgba(88, 12, 12, 0.94))";
    button.style.boxShadow = "0 10px 26px rgba(0, 0, 0, 0.34)";
    button.style.color = "#f8fafc";
    button.style.font = "700 14px/1.1 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    button.style.letterSpacing = "0.14em";
    button.style.textTransform = "uppercase";
    button.style.cursor = "pointer";
    button.style.transition = "transform 140ms ease, filter 140ms ease, opacity 140ms ease";
    button.addEventListener("mouseenter", () => {
      if (!button.disabled) {
        button.style.transform = "translateY(-1px)";
        button.style.filter = "brightness(1.08)";
      }
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)";
      button.style.filter = "none";
    });
    return button;
  }

  const deathOverlayRespawnFightButton = createDeathOverlayButton("<RESPAWN AND FIGHT>");
  const deathOverlayRespawnClearButton = createDeathOverlayButton("<RESPAWN>");
  deathOverlayActions.appendChild(deathOverlayRespawnFightButton);
  deathOverlayActions.appendChild(deathOverlayRespawnClearButton);

  deathOverlayPanel.appendChild(deathOverlayTitle);
  deathOverlayPanel.appendChild(deathOverlaySubtitle);
  deathOverlayPanel.appendChild(deathOverlayActions);
  deathOverlay.appendChild(deathOverlayPanel);
  hud.appendChild(deathOverlay);

  function setDeathOverlayButtonsDisabled(isDisabled) {
    deathOverlayRespawnFightButton.disabled = isDisabled;
    deathOverlayRespawnClearButton.disabled = isDisabled;
    deathOverlayRespawnFightButton.style.opacity = isDisabled ? "0.58" : "1";
    deathOverlayRespawnClearButton.style.opacity = isDisabled ? "0.58" : "1";
    deathOverlayRespawnFightButton.style.cursor = isDisabled ? "default" : "pointer";
    deathOverlayRespawnClearButton.style.cursor = isDisabled ? "default" : "pointer";
    deathOverlayRespawnFightButton.style.transform = "translateY(0)";
    deathOverlayRespawnClearButton.style.transform = "translateY(0)";
    deathOverlayRespawnFightButton.style.filter = "none";
    deathOverlayRespawnClearButton.style.filter = "none";
  }

  function showDeathOverlay({
    subtitle = "Choose your return.",
    allowActions = true
  } = {}) {
    if (deathOverlayHideTimeoutId) {
      window.clearTimeout(deathOverlayHideTimeoutId);
      deathOverlayHideTimeoutId = 0;
    }

    deathOverlayActionLocked = !allowActions;
    deathOverlaySubtitle.textContent = subtitle;
    deathOverlayActions.style.display = allowActions ? "flex" : "none";
    setDeathOverlayButtonsDisabled(!allowActions);
    deathOverlay.style.visibility = "visible";
    deathOverlay.style.pointerEvents = allowActions ? "auto" : "none";
    window.requestAnimationFrame(() => {
      deathOverlay.style.opacity = "1";
    });
  }

  function showAutoRespawnDeathOverlay(statusText = "Respawning...") {
    showDeathOverlay({
      subtitle: statusText || "Respawning...",
      allowActions: false
    });
  }

  function hideDeathOverlay() {
    if (deathOverlayHideTimeoutId) {
      window.clearTimeout(deathOverlayHideTimeoutId);
    }

    deathOverlay.style.opacity = "0";
    deathOverlay.style.pointerEvents = "none";
    deathOverlayHideTimeoutId = window.setTimeout(() => {
      deathOverlay.style.visibility = "hidden";
      deathOverlayHideTimeoutId = 0;
    }, 220);
  }

  function freezeStaticWorldObject(object) {
    if (!object?.isObject3D) {
      return;
    }

    object.frustumCulled = object.userData.disableFrustumCulling !== true;
    object.updateMatrix();
    object.updateMatrixWorld(true);
    object.matrixAutoUpdate = false;

    if (object.isInstancedMesh) {
      object.computeBoundingBox();
      object.computeBoundingSphere();
    } else if (object.geometry) {
      object.geometry.computeBoundingBox();
      object.geometry.computeBoundingSphere();
    }

    staticWorldObjects.push(object);
  }

  function updateStaticWorldVisibilityStats() {
    debugFrustumMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    debugFrustum.setFromProjectionMatrix(debugFrustumMatrix);

    let visibleCount = 0;
    for (const object of staticWorldObjects) {
      if (!object?.geometry?.boundingSphere) {
        continue;
      }

      debugSphereCenter.copy(object.geometry.boundingSphere.center).applyMatrix4(object.matrixWorld);
      debugSphere.center.copy(debugSphereCenter);
      debugSphere.radius = object.geometry.boundingSphere.radius;

      if (!debugFrustum.intersectsSphere(debugSphere)) {
        continue;
      }

      if (player.position.distanceToSquared(object.position) > 40 * 40) {
        continue;
      }

      visibleCount += 1;
    }

    visibleStaticWorldObjects = visibleCount;
  }

  function updatePerfOverlay(frameTime) {
    perfOverlayState.frames += 1;
    const now = performance.now();
    const sampleElapsed = now - perfOverlayState.lastSampleTime;

    if (sampleElapsed >= 500) {
      perfOverlayState.fps = Math.round((perfOverlayState.frames * 1000) / sampleElapsed);
      perfOverlayState.frames = 0;
      perfOverlayState.lastSampleTime = now;
      updateStaticWorldVisibilityStats();
    }

    if (now - perfOverlayState.lastDomUpdateTime < 250) {
      return;
    }

    const nextText = `FPS: ${perfOverlayState.fps}`;

    if (nextText !== perfOverlayState.text) {
      perfOverlay.textContent = nextText;
      perfOverlayState.text = nextText;
    }

    perfOverlayState.lastDomUpdateTime = now;
  }

  function updateCoordinatesOverlay() {
    if (!player) {
      return;
    }

    const nextText =
      `X: ${player.position.x.toFixed(1)}\n` +
      `Y: ${player.position.y.toFixed(1)}\n` +
      `Z: ${player.position.z.toFixed(1)}`;

    if (nextText !== coordinatesOverlayState.text) {
      coordinatesOverlay.textContent = nextText;
      coordinatesOverlayState.text = nextText;
    }
  }

  function getCameraSettingsSnapshot(settings) {
    return {
      distance: Number(settings.distance.toFixed(2)),
      x: Number(settings.offsetX.toFixed(2)),
      y: Number(settings.offsetY.toFixed(2)),
      z: Number(settings.offsetZ.toFixed(2))
    };
  }

  function setGunCustomizationPanelOpen(isOpen) {
    gunPanelOpen = isOpen;
    if (!isOpen) {
      setAdvancedRecoilPanelOpen(false);
    }
    gunCustomizationPanel.classList.toggle("visible", isOpen);
    gunCustomizationPanel.setAttribute("aria-hidden", String(!isOpen));
  }

  function handleGunCustomizationCloseAction() {
    if (homeGunViewOpen) {
      setHomeGunViewOpen(false);
      return;
    }

    setGunCustomizationPanelOpen(false);
  }

  function getNextGunName() {
    return `Gun No ${savedGuns.length + 1}`;
  }

  function clampHeadshotMultiplier(value) {
    const parsedValue = Number(value);
    return THREE.MathUtils.clamp(
      Number.isFinite(parsedValue) ? parsedValue : 4.5,
      1,
      5
    );
  }

  function clampRecoilStrength(value) {
    const parsedValue = Number(value);
    return THREE.MathUtils.clamp(
      Number.isFinite(parsedValue) ? parsedValue : 1.6,
      0,
      3
    );
  }

  function clampRecoilIntensity(value, fallbackValue) {
    const parsedValue = Number(value);
    return THREE.MathUtils.clamp(
      Number.isFinite(parsedValue) ? parsedValue : fallbackValue,
      0,
      3
    );
  }

  function setAdvancedRecoilPanelOpen(isOpen) {
    advancedRecoilPanelOpen = isOpen;
    gunAdvancedRecoilButton.setAttribute("aria-expanded", String(isOpen));
    gunAdvancedRecoilPanel.hidden = !isOpen;
    gunAdvancedRecoilPanel.classList.toggle("visible", isOpen);
    gunAdvancedRecoilPanel.setAttribute("aria-hidden", String(!isOpen));
  }

  function isOnlineGunLimitsActive() {
    return isLanHost || isLanClient || lanConnectionStatus === "connected";
  }

  function clampGunSettingsForOnlineFairPlay(config) {
    if (!isOnlineGunLimitsActive()) return config;

    let clamped = { ...config };
    let wasModified = false;

    if (clamped.fireRate > 10) { clamped.fireRate = 10; wasModified = true; }
    if (clamped.damage > 6) { clamped.damage = 6; wasModified = true; }
    if (clamped.headshotMultiplier > 4.5) { clamped.headshotMultiplier = 4.5; wasModified = true; }
    if (clamped.reloadTime < 2) { clamped.reloadTime = 2; wasModified = true; }
    if (clamped.ammoCapacity > 50) { clamped.ammoCapacity = 50; wasModified = true; }
    if (clamped.infiniteAmmo) { clamped.infiniteAmmo = false; wasModified = true; }

    if (clamped.recoilEnabled === false) {
      clamped.recoilEnabled = true;
      wasModified = true;
    }
    if (clamped.recoilStrength < 1.6) { clamped.recoilStrength = 1.6; wasModified = true; }
    if (clamped.recoilIntensityX < 0.06) { clamped.recoilIntensityX = 0.06; wasModified = true; }
    if (clamped.recoilIntensityY < 0.55) { clamped.recoilIntensityY = 0.55; wasModified = true; }
    if (clamped.recoilIntensityZ < 0.05) { clamped.recoilIntensityZ = 0.05; wasModified = true; }

    if (wasModified) {
      showStatusMessage("Online fair limit: unfair upgrades are capped.", 2000);
    }

    return clamped;
  }

  function enforceOnlineGunLimitsIfActive() {
    if (isOnlineGunLimitsActive() && currentGun) {
      applyGunConfig(currentGun, { refillAmmo: false, persistCurrent: true });
    }
  }

  function normalizeGunConfig(config, fallbackName = getNextGunName()) {
    const normalizedName = String(config?.name ?? "").trim() || fallbackName;
    const normalizedFireRate = Math.max(1, Number(config?.fireRate) || 10);
    const normalizedDamage = Math.max(1, Number(config?.damage) || 6);
    const normalizedHeadshotMultiplier = clampHeadshotMultiplier(config?.headshotMultiplier);
    const normalizedRecoilStrength = clampRecoilStrength(config?.recoilStrength);
    const normalizedRecoilIntensityX = clampRecoilIntensity(config?.recoilIntensityX, 0.06);
    const normalizedRecoilIntensityY = clampRecoilIntensity(config?.recoilIntensityY, 0.55);
    const normalizedRecoilIntensityZ = clampRecoilIntensity(config?.recoilIntensityZ, 0.05);
    const normalizedReloadTime = Math.max(0.1, Number(config?.reloadTime) || 2);
    const normalizedAmmoCapacity = Math.max(1, Math.floor(Number(config?.ammoCapacity) || 50));

    return {
      name: normalizedName,
      fireRate: normalizedFireRate,
      damage: normalizedDamage,
      headshotMultiplier: normalizedHeadshotMultiplier,
      recoilStrength: normalizedRecoilStrength,
      recoilEnabled: config?.recoilEnabled !== false,
      recoilIntensityX: normalizedRecoilIntensityX,
      recoilIntensityY: normalizedRecoilIntensityY,
      recoilIntensityZ: normalizedRecoilIntensityZ,
      reloadTime: normalizedReloadTime,
      ammoCapacity: normalizedAmmoCapacity,
      infiniteAmmo: Boolean(config?.infiniteAmmo)
    };
  }

  function getMatchingSavedGunIndex(gunConfig) {
    return savedGuns.findIndex((gun) =>
      gun.name === gunConfig.name &&
      gun.fireRate === gunConfig.fireRate &&
      gun.damage === gunConfig.damage &&
      gun.headshotMultiplier === gunConfig.headshotMultiplier &&
      gun.recoilStrength === gunConfig.recoilStrength &&
      gun.recoilEnabled === gunConfig.recoilEnabled &&
      gun.recoilIntensityX === gunConfig.recoilIntensityX &&
      gun.recoilIntensityY === gunConfig.recoilIntensityY &&
      gun.recoilIntensityZ === gunConfig.recoilIntensityZ &&
      gun.reloadTime === gunConfig.reloadTime &&
      gun.ammoCapacity === gunConfig.ammoCapacity &&
      gun.infiniteAmmo === gunConfig.infiniteAmmo
    );
  }

  function persistSavedGuns() {
    localStorage.setItem(savedGunsStorageKey, JSON.stringify(savedGuns));
  }

  function createFallbackPlayerName() {
    return `${playerNameFallbackPrefix}${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`;
  }

  function normalizePlayerName(value) {
    return String(value ?? "")
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, playerNameMaxLength);
  }

  function updatePlayerNameUi() {
    const nextText = `Name: ${playerName}`;
    const nextVisible = Boolean(showOwnNameInGame && playerName);

    if (nextText !== activePlayerNameUiState.text) {
      activePlayerNameUi.textContent = nextText;
      activePlayerNameUiState.text = nextText;
    }

    if (nextVisible !== activePlayerNameUiState.visible) {
      activePlayerNameUi.classList.toggle("is-visible", nextVisible);
      activePlayerNameUi.setAttribute("aria-hidden", String(!nextVisible));
      activePlayerNameUiState.visible = nextVisible;
    }
  }

  function showOnlineKillMessage(killerName, victimName) {
    if (!isLanSessionActive() || !onlineKillFeedMessage) {
      return;
    }

    const finalKiller = (killerName || "Player").trim() || "Player";
    const finalVictim = (victimName || "Player").trim() || "Player";

    onlineKillFeedMessage.textContent = `${finalKiller} KILLED ${finalVictim}`;
    onlineKillFeedMessage.removeAttribute("hidden");
    onlineKillFeedMessage.hidden = false;
    onlineKillFeedMessage.setAttribute("aria-hidden", "false");

    if (onlineKillMessageTimeout) {
      window.clearTimeout(onlineKillMessageTimeout);
    }

    onlineKillMessageTimeout = window.setTimeout(() => {
      onlineKillFeedMessage.setAttribute("hidden", "true");
      onlineKillFeedMessage.hidden = true;
      onlineKillFeedMessage.setAttribute("aria-hidden", "true");
      onlineKillMessageTimeout = 0;
    }, 5000);
  }

  function createPlayerNameplate({ isLocal = false } = {}) {
    const container = document.createElement("div");
    container.className = `player-nameplate ${isLocal ? "player-nameplate--self" : "player-nameplate--remote"}`;
    container.setAttribute("aria-hidden", "true");

    const text = document.createElement("div");
    text.className = "player-nameplate-text status-card";

    const futureHpSlot = document.createElement("div");
    futureHpSlot.className = "player-nameplate-hp-slot";
    futureHpSlot.style.height = `${playerNameplateFutureHpSlotHeightPx}px`;
    futureHpSlot.setAttribute("aria-hidden", "true");

    const hpTrack = document.createElement("div");
    hpTrack.className = "player-nameplate-hp-track";

    const hpFill = document.createElement("div");
    hpFill.className = "player-nameplate-hp-fill";
    hpTrack.appendChild(hpFill);
    futureHpSlot.appendChild(hpTrack);

    container.appendChild(text);
    container.appendChild(futureHpSlot);
    document.body.appendChild(container);

    return {
      container,
      text,
      futureHpSlot,
      hpTrack,
      hpFill,
      isLocal,
      visible: false,
      lastText: "",
      lastHpRatio: -1
    };
  }

  function ensureLocalPlayerNameplate() {
    if (!localPlayerNameplate) {
      localPlayerNameplate = createPlayerNameplate({ isLocal: true });
    }

    return localPlayerNameplate;
  }

  function setPlayerNameplateText(nameplate, value, fallbackText = "Player") {
    if (!nameplate?.text) {
      return;
    }

    const nextText = normalizePlayerName(value) || fallbackText;
    if (nextText === nameplate.lastText) {
      return;
    }

    nameplate.text.textContent = nextText;
    nameplate.lastText = nextText;
  }

  function setPlayerNameplateHp(nameplate, hp, maxHp) {
    if (!nameplate?.hpFill) {
      return;
    }

    const safeMaxHp = Math.max(1, Number(maxHp) || 0);
    const safeHp = THREE.MathUtils.clamp(Number(hp) || 0, 0, safeMaxHp);
    const nextRatio = THREE.MathUtils.clamp(safeHp / safeMaxHp, 0, 1);
    if (Math.abs(nextRatio - nameplate.lastHpRatio) < 0.001) {
      return;
    }

    nameplate.hpFill.style.transform = `scaleX(${nextRatio.toFixed(3)})`;
    nameplate.lastHpRatio = nextRatio;
  }

  function setPlayerNameplateVisible(nameplate, isVisible) {
    if (!nameplate?.container || nameplate.visible === isVisible) {
      return;
    }

    nameplate.container.classList.toggle("is-visible", isVisible);
    nameplate.container.setAttribute("aria-hidden", String(!isVisible));
    nameplate.visible = isVisible;
  }

  function removePlayerNameplate(nameplate) {
    if (!nameplate?.container) {
      return;
    }

    if (nameplate.container.parentNode) {
      nameplate.container.parentNode.removeChild(nameplate.container);
    }
  }

  function getActorNameplateWorldPosition(actor, target = playerNameplateWorldPosition) {
    if (!actor?.root) {
      return null;
    }

    actor.root.getWorldPosition(target);
    const crouchBlend = THREE.MathUtils.clamp(
      actor === playerActor ? (isCrouching ? 1 : 0) : (actor.crouchBlend ?? actor.targetCrouchBlend ?? 0),
      0,
      1
    );
    target.y += playerNameplateAnchorHeight - (playerNameplateCrouchOffset * crouchBlend);
    return target;
  }

  function updatePlayerNameplateLayout(nameplate, actor, { visible = true } = {}) {
    if (!nameplate || !actor?.root?.parent || !visible) {
      setPlayerNameplateVisible(nameplate, false);
      return;
    }

    const worldPosition = getActorNameplateWorldPosition(actor);
    if (!worldPosition) {
      setPlayerNameplateVisible(nameplate, false);
      return;
    }

    playerNameplateProjectedPosition.copy(worldPosition).project(camera);
    if (
      playerNameplateProjectedPosition.z < -1 ||
      playerNameplateProjectedPosition.z > 1 ||
      playerNameplateProjectedPosition.x < -1.1 ||
      playerNameplateProjectedPosition.x > 1.1 ||
      playerNameplateProjectedPosition.y < -1.15 ||
      playerNameplateProjectedPosition.y > 1.15
    ) {
      setPlayerNameplateVisible(nameplate, false);
      return;
    }

    const x = (playerNameplateProjectedPosition.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-playerNameplateProjectedPosition.y * 0.5 + 0.5) * window.innerHeight;
    nameplate.container.style.left = `${x}px`;
    nameplate.container.style.top = `${y}px`;
    setPlayerNameplateVisible(nameplate, true);
  }

  function updatePlayerNameplates() {
    const shouldShowAnyNameplates = Boolean(gameStarted && player && !document.body.classList.contains("startup-loading"));

    const ownNameplate = ensureLocalPlayerNameplate();
    setPlayerNameplateText(ownNameplate, playerName, "Player");
    updatePlayerNameplateLayout(ownNameplate, playerActor, {
      visible: Boolean(shouldShowAnyNameplates && showOwnNameInGame && playerName && !playerDead)
    });

    for (const remotePlayer of remotePlayers.values()) {
      if (!remotePlayer.nameplate) {
        remotePlayer.nameplate = createPlayerNameplate({ isLocal: false });
        setPlayerNameplateHp(remotePlayer.nameplate, remotePlayer.health, remotePlayer.maxHealth);
      }

      setPlayerNameplateText(remotePlayer.nameplate, remotePlayer.playerName, "Player");
      updatePlayerNameplateLayout(remotePlayer.nameplate, remotePlayer, {
        visible: Boolean(shouldShowAnyNameplates && remotePlayer.playerName && !remotePlayer.isDead)
      });
    }
  }

  function syncPlayerIdentityInputs() {
    playerNameInput.value = playerName;
    showOwnNameToggle.value = showOwnNameInGame ? "on" : "off";
  }

  function applyPlayerName(value, { persist = true, syncInput = true } = {}) {
    playerName = normalizePlayerName(value) || createFallbackPlayerName();

    if (syncInput) {
      playerNameInput.value = playerName;
    }

    updatePlayerNameUi();

    if (persist) {
      localStorage.setItem(playerNameStorageKey, playerName);
    }
  }

  function applyShowOwnNameInGame(value, { persist = true, syncInput = true } = {}) {
    showOwnNameInGame = !(
      value === false ||
      value === "off" ||
      value === "false" ||
      value === 0 ||
      value === "0"
    );

    if (syncInput) {
      showOwnNameToggle.value = showOwnNameInGame ? "on" : "off";
    }

    updatePlayerNameUi();

    if (persist) {
      localStorage.setItem(
        showOwnNameInGameStorageKey,
        showOwnNameInGame ? "on" : "off"
      );
    }
  }

  function commitPlayerIdentitySettings() {
    applyPlayerName(playerNameInput.value, {
      persist: true,
      syncInput: true
    });
    applyShowOwnNameInGame(showOwnNameToggle.value, {
      persist: true,
      syncInput: true
    });
  }

  // Keep local player identity in one place so it can be reused for future multiplayer plumbing.
  function loadPlayerIdentitySettings() {
    const savedPlayerName = localStorage.getItem(playerNameStorageKey);
    const normalizedSavedPlayerName = normalizePlayerName(savedPlayerName ?? "");
    applyPlayerName(savedPlayerName ?? "", {
      persist: savedPlayerName === null || normalizedSavedPlayerName !== (savedPlayerName ?? ""),
      syncInput: false
    });

    const savedShowOwnNameInGame = localStorage.getItem(showOwnNameInGameStorageKey);
    applyShowOwnNameInGame(savedShowOwnNameInGame ?? true, {
      persist:
        savedShowOwnNameInGame !== "on" &&
        savedShowOwnNameInGame !== "off",
      syncInput: false
    });
  }

  function setLanMultiplayerStatus(text = "") {
    lanMultiplayerStatus.textContent = text;
  }

  function setLanJoinPanelOpen(isOpen) {
    lanJoinPanel.hidden = false;
    lanJoinPanel.setAttribute("aria-hidden", "false");

    if (isOpen) {
      window.requestAnimationFrame(() => {
        lanHostIpInput.focus({ preventScroll: true });
      });
    }
  }

  function resolveLanGamePort() {
    return lanServerPort;
  }

  function resolveLocalLanSocketHost() {
    const currentHost = String(window.location.hostname || "").trim();
    return !currentHost || currentHost === "localhost" || currentHost === "127.0.0.1"
      ? "127.0.0.1"
      : currentHost;
  }

  function shouldUseLocalMultiplayerEndpointByDefault() {
    const currentProtocol = String(window.location.protocol || "").trim().toLowerCase();
    const currentHost = String(window.location.hostname || "").trim().toLowerCase();
    return (
      currentProtocol === "file:" ||
      !currentHost ||
      currentHost === "localhost" ||
      currentHost === "127.0.0.1" ||
      currentHost === "::1" ||
      currentHost === "[::1]"
    );
  }

  function resolveDefaultHostedMultiplayerEndpoint() {
    return shouldUseLocalMultiplayerEndpointByDefault()
      ? resolveLocalLanSocketHost()
      : defaultOnlineRelayAddress;
  }

  function parseLanServerEndpoint(value, fallbackPort = lanServerPort) {
    const trimmedValue = String(value ?? "").trim();
    if (!trimmedValue) {
      return {
        original: "",
        host: "",
        port: "",
        protocol: "ws:",
        pathname: "",
        search: "",
        hasExplicitUrl: false,
        hasExplicitPort: false,
        displayAddress: ""
      };
    }

    const hasExplicitUrl = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmedValue);
    const candidateUrl = hasExplicitUrl ? trimmedValue : `ws://${trimmedValue}`;

    try {
      const parsedUrl = new URL(candidateUrl);
      const host = parsedUrl.hostname;
      const hasExplicitPort = Boolean(parsedUrl.port);
      const protocol = parsedUrl.protocol === "https:" || parsedUrl.protocol === "wss:"
        ? "wss:"
        : "ws:";
      const port = hasExplicitPort
        ? parsedUrl.port
        : (hasExplicitUrl ? "" : String(fallbackPort));
      const pathname = parsedUrl.pathname && parsedUrl.pathname !== "/"
        ? parsedUrl.pathname
        : "";
      const search = parsedUrl.search || "";
      const displayPort = port ? `:${port}` : "";

      return {
        original: trimmedValue,
        host,
        port,
        protocol,
        pathname,
        search,
        hasExplicitUrl,
        hasExplicitPort,
        displayAddress: `${host}${displayPort}${pathname}${search}`
      };
    } catch (error) {
      return {
        original: trimmedValue,
        host: "",
        port: "",
        protocol: "ws:",
        pathname: "",
        search: "",
        hasExplicitUrl,
        hasExplicitPort: false,
        displayAddress: ""
      };
    }
  }

  function buildLanSocketUrl(value) {
    const endpoint = typeof value === "string"
      ? parseLanServerEndpoint(value)
      : value;
    if (!endpoint.host) {
      return "";
    }

    const portSegment = endpoint.port ? `:${endpoint.port}` : "";
    return `${endpoint.protocol}//${endpoint.host}${portSegment}${endpoint.pathname}${endpoint.search}`;
  }

  function isLocalMultiplayerHost(host) {
    const normalizedHost = String(host ?? "").trim().toLowerCase();
    return (
      !normalizedHost ||
      normalizedHost === "localhost" ||
      normalizedHost === "127.0.0.1" ||
      normalizedHost === "::1" ||
      normalizedHost === "[::1]" ||
      normalizedHost === "0.0.0.0" ||
      normalizedHost.endsWith(".local") ||
      isPrivateIpv4Address(normalizedHost)
    );
  }

  function getMultiplayerEndpointDisplayText(endpoint) {
    if (!endpoint?.host) {
      return "";
    }

    return endpoint.hasExplicitUrl
      ? endpoint.original
      : endpoint.displayAddress;
  }

  function isLanDebugLoggingEnabled() {
    try {
      const searchParams = new URLSearchParams(window.location.search || "");
      return searchParams.get("mpdebug") === "1" ||
        localStorage.getItem(multiplayerDebugLoggingStorageKey) === "on";
    } catch (error) {
      return false;
    }
  }

  function logLanDebug(eventName, details = {}) {
    if (!isLanDebugLoggingEnabled()) {
      return;
    }

    console.debug("[LAN DEBUG]", {
      at: new Date().toISOString(),
      event: eventName,
      ...details
    });
  }

  function isHeartbeatUnsupportedMessage(errorCode, errorMessage) {
    if (errorCode !== "unsupported_message") {
      return false;
    }

    const normalizedMessage = typeof errorMessage === "string"
      ? errorMessage.toLowerCase()
      : "";

    return normalizedMessage.includes("client_heartbeat") ||
      normalizedMessage.includes("server_heartbeat");
  }

  function createLanSessionToken() {
    const generatedUuid = window.crypto?.randomUUID?.();
    if (generatedUuid) {
      return generatedUuid;
    }

    return `session-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function createLanSessionIntent({
    role,
    hostInput,
    endpoint,
    serverAddress,
    isLocalServer
  }) {
    return {
      role,
      hostInput,
      endpoint,
      serverAddress,
      isLocalServer,
      sessionToken: createLanSessionToken(),
      playerId: "",
      established: false,
      reconnecting: false,
      reconnectAttempts: 0,
      connectedDisplayText: serverAddress
    };
  }

  function clearLanReconnectTimer() {
    if (!lanReconnectTimeoutId) {
      return;
    }

    window.clearTimeout(lanReconnectTimeoutId);
    lanReconnectTimeoutId = 0;
  }

  function stopLanHeartbeat() {
    if (lanHeartbeatIntervalId) {
      window.clearInterval(lanHeartbeatIntervalId);
      lanHeartbeatIntervalId = 0;
    }

    if (lanHeartbeatWatchdogIntervalId) {
      window.clearInterval(lanHeartbeatWatchdogIntervalId);
      lanHeartbeatWatchdogIntervalId = 0;
    }
  }

  function recordLanServerPacket() {
    lanLastServerPacketAt = Date.now();
  }

  function sendSocketMessage(socket, message) {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      return false;
    }

    socket.send(JSON.stringify(message));
    return true;
  }

  function announceLanSessionLeave(socket = lanSocket) {
    if (!lanSessionIntent?.established) {
      return false;
    }

    return sendSocketMessage(socket, {
      type: "leave_session"
    });
  }

  function startLanHeartbeat() {
    stopLanHeartbeat();
    recordLanServerPacket();

    lanHeartbeatIntervalId = window.setInterval(() => {
      if (!lanSocket || lanSocket.readyState !== WebSocket.OPEN) {
        return;
      }

      sendNetworkMessage({
        type: "client_heartbeat",
        timestamp: Date.now()
      });
    }, lanHeartbeatIntervalMs);

    lanHeartbeatWatchdogIntervalId = window.setInterval(() => {
      if (!lanSocket || lanSocket.readyState !== WebSocket.OPEN) {
        return;
      }

      if (!lanLastServerPacketAt || Date.now() - lanLastServerPacketAt <= lanHeartbeatTimeoutMs) {
        return;
      }

      const elapsedMs = Date.now() - lanLastServerPacketAt;
      lanSocket.__heartbeatTimeout = true;
      lanSocket.__reconnectReason = "Server heartbeat timed out.";
      logLanDebug("heartbeat_missed", {
        role: lanSessionIntent?.role || (isLanHost ? "host" : isLanClient ? "client" : ""),
        playerId: lanSessionIntent?.playerId || localPlayerId,
        server: lanSessionIntent?.serverAddress || "",
        elapsedMs,
        timeoutMs: lanHeartbeatTimeoutMs
      });

      try {
        lanSocket.close(4000, "Heartbeat timeout");
      } catch (error) {
        try {
          lanSocket.close();
        } catch (closeError) {
          console.warn("Failed to close LAN socket after heartbeat timeout:", closeError);
        }
      }
    }, lanHeartbeatWatchdogIntervalMs);
  }

  function buildLanConnectedStatusText(intent = lanSessionIntent) {
    if (!intent) {
      return "";
    }

    const addressText = intent.connectedDisplayText || intent.serverAddress || "";
    if (intent.role === "host") {
      return intent.isLocalServer
        ? `Hosting LAN Game...\nHosting on: ${addressText}`
        : `Hosting Shared Server Session...\nServer: ${addressText}`;
    }

    return `${intent.isLocalServer ? "Connected to LAN Game." : "Connected to Shared Server."}\nServer: ${addressText}`;
  }

  function buildLanReconnectStatusText(intent = lanSessionIntent, attempt = 1, delayMs = 0) {
    if (!intent) {
      return "Connection lost. Reconnecting...";
    }

    const heading = intent.role === "host"
      ? (intent.isLocalServer ? "Hosting LAN Game..." : "Hosting Shared Server Session...")
      : (intent.isLocalServer ? "Connecting to LAN Game..." : "Connecting to Shared Server...");
    const serverLine = intent.serverAddress
      ? `Server: ${intent.serverAddress}`
      : "";
    const attemptLine = `Attempt ${attempt} of ${lanReconnectMaxAttempts} in ${(delayMs / 1000).toFixed(delayMs >= 10000 ? 0 : 1)}s`;

    return [
      heading,
      "Connection lost. Reconnecting...",
      serverLine,
      attemptLine
    ].filter(Boolean).join("\n");
  }

  function buildLanReconnectFailureStatusText(intent = lanSessionIntent, {
    message = "",
    recoveryUnavailable = false
  } = {}) {
    if (!intent) {
      return recoveryUnavailable
        ? "Reconnect failed.\nThe previous multiplayer session is no longer available."
        : "Reconnect failed.\nUnable to reach the multiplayer server.";
    }

    const heading = intent.role === "host"
      ? (intent.isLocalServer ? "Hosting LAN Game..." : "Hosting Shared Server Session...")
      : (intent.isLocalServer ? "Connecting to LAN Game..." : "Connecting to Shared Server...");

    if (recoveryUnavailable) {
      return [
        heading,
        "Reconnect failed.",
        message || "The previous multiplayer session is no longer available.",
        "The session could not be restored safely."
      ].join("\n");
    }

    const availabilityHint = intent.isLocalServer
      ? (
        intent.role === "host"
          ? "Run npm run start:lan on this PC, then host again."
          : "Make sure npm run start:lan is still running on the host PC."
      )
      : "Make sure the hosted multiplayer relay is online and publicly reachable.";

    return [
      heading,
      "Reconnect failed.",
      intent.serverAddress
        ? `Unable to reach ${intent.serverAddress}.`
        : "Unable to reach the multiplayer server.",
      message || availabilityHint
    ].join("\n");
  }

  function failLanReconnect({
    message = "",
    recoveryUnavailable = false
  } = {}) {
    const failedIntent = lanSessionIntent;
    logLanDebug("reconnect_attempt_failed", {
      role: failedIntent?.role || "",
      playerId: failedIntent?.playerId || localPlayerId,
      server: failedIntent?.serverAddress || "",
      attempt: failedIntent?.reconnectAttempts || lanReconnectMaxAttempts,
      maxAttempts: lanReconnectMaxAttempts,
      recoveryUnavailable,
      final: true,
      reason: message || (recoveryUnavailable
        ? "Session recovery is no longer available."
        : "Reconnect attempts exhausted.")
    });
    disconnectLanSession({
      preserveStatus: true,
      preserveSessionIntent: false,
      sendLeave: false,
      statusText: buildLanReconnectFailureStatusText(failedIntent, {
        message,
        recoveryUnavailable
      })
    });
    lanConnectionStatus = "error";
    showStatusMessage(
      recoveryUnavailable
        ? "Reconnect failed. Session recovery is no longer available."
        : "Reconnect failed. Server unreachable.",
      2600
    );
  }

  function scheduleLanReconnect(reason = "") {
    if (!lanSessionIntent?.established || lanReconnectTimeoutId) {
      return;
    }

    if (lanSessionIntent.reconnectAttempts >= lanReconnectMaxAttempts) {
      failLanReconnect({ message: reason });
      return;
    }

    lanSessionIntent.reconnecting = true;
    lanSessionIntent.reconnectAttempts += 1;

    const attempt = lanSessionIntent.reconnectAttempts;
    const delayMs = Math.min(
      lanReconnectMaxDelayMs,
      lanReconnectBaseDelayMs * (2 ** Math.max(0, attempt - 1))
    );

    lanConnectionStatus = "reconnecting";
    setLanMultiplayerStatus(buildLanReconnectStatusText(lanSessionIntent, attempt, delayMs));
    showStatusMessage("Connection lost. Reconnecting...", 1800);

    const reconnectIntent = lanSessionIntent;
    lanReconnectTimeoutId = window.setTimeout(() => {
      lanReconnectTimeoutId = 0;

      if (!lanSessionIntent?.established || lanSessionIntent !== reconnectIntent) {
        return;
      }

      logLanDebug("reconnect_attempt_started", {
        role: reconnectIntent.role,
        playerId: reconnectIntent.playerId || localPlayerId,
        server: reconnectIntent.serverAddress || "",
        attempt,
        maxAttempts: lanReconnectMaxAttempts,
        delayMs,
        reason: reason || "Multiplayer connection closed."
      });

      Promise.resolve(connectToLanServer({
        sessionIntent: reconnectIntent,
        isReconnect: true
      })).catch((error) => {
        if (
          lanSessionIntent?.reconnecting &&
          lanSessionIntent === reconnectIntent &&
          !lanReconnectTimeoutId &&
          !lanSocket
        ) {
          logLanDebug("reconnect_attempt_failed", {
            role: reconnectIntent.role,
            playerId: reconnectIntent.playerId || localPlayerId,
            server: reconnectIntent.serverAddress || "",
            attempt,
            maxAttempts: lanReconnectMaxAttempts,
            final: reconnectIntent.reconnectAttempts >= lanReconnectMaxAttempts,
            reason: error?.message || reason || "Reconnect attempt failed."
          });

          if (lanSessionIntent.reconnectAttempts >= lanReconnectMaxAttempts) {
            failLanReconnect({ message: error?.message || reason });
          } else {
            scheduleLanReconnect(error?.message || reason);
          }
        }
      });
    }, delayMs);
  }

  function isEditableFormControl(target = document.activeElement) {
    if (!(target instanceof Element)) {
      return false;
    }

    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) {
      return true;
    }

    if (target.isContentEditable) {
      return true;
    }

    return Boolean(target.closest("input, textarea, select, [contenteditable], [contenteditable='plaintext-only']"));
  }

  function shouldIgnoreGameplayKeyboardEvent(event) {
    return isEditableFormControl(event?.target) || isEditableFormControl(document.activeElement);
  }

  function finishPendingLanConnection({ result = null, error = null } = {}) {
    if (error) {
      pendingLanConnectionReject?.(error);
    } else if (result) {
      pendingLanConnectionResolve?.(result);
    }

    pendingLanConnectionResolve = null;
    pendingLanConnectionReject = null;
  }

  function resetLanSessionState({
    preserveStatus = false,
    preserveSessionIntent = false
  } = {}) {
    const wasLanClient = isLanClient;
    clearLanReconnectTimer();
    stopLanHeartbeat();
    lanLastServerPacketAt = 0;
    localPlayerId = "";
    isLanHost = false;
    isLanClient = false;
    lastLocalStateSentAt = 0;
    lastSharedEnemyStateSentAt = 0;
    pendingAuthoritativeSessionMapSync = null;
    lanHeartbeatIntervalMs = 10000;
    lanHeartbeatTimeoutMs = 60000;
    lanResumeGraceMs = 60000;

    if (!preserveSessionIntent) {
      lanSessionIntent = null;
    }

    for (const remotePlayerId of [...remotePlayers.keys()]) {
      removeRemotePlayer(remotePlayerId);
    }

    for (const pickup of [...healthPickups]) {
      if (pickup?.userData?.isOnlineSynced) {
        removeHealthPickup(pickup, {
          suppressOnlineLog: true
        });
      }
    }

    if (wasLanClient) {
      const replicaEnemies = enemies.filter((enemyActor) => enemyActor?.isNetworkReplica);
      for (const enemyActor of replicaEnemies) {
        removeEnemy(enemyActor, {
          suppressNetworkBroadcast: true,
          suppressWaveUpdate: true
        });
      }
    }

    lastPacketTimestamps.clear();
    clearLanCombatState();
    sharedOnlineHealthPickupRegistry.clear();

    if (!preserveStatus) {
      lanConnectionStatus = "offline";
    }
  }

  function disconnectLanSession({
    preserveStatus = false,
    preserveSessionIntent = false,
    sendLeave = true,
    statusText = ""
  } = {}) {
    const socketToClose = lanSocket;
    lanSocket = null;
    clearLanReconnectTimer();
    stopLanHeartbeat();

    if (socketToClose && sendLeave) {
      announceLanSessionLeave(socketToClose);
    }

    socketToClose?.__connectReject?.(new Error("LAN connection replaced or closed."));
    if (socketToClose) {
      socketToClose.__connectResolve = null;
      socketToClose.__connectReject = null;
    }

    if (socketToClose) {
      socketToClose.__intentionalClose = true;
      try {
        socketToClose.close();
      } catch (error) {
        console.warn("Failed to close LAN socket cleanly:", error);
      }
    }

    finishPendingLanConnection({
      error: new Error("LAN connection replaced or closed.")
    });
    resetLanSessionState({
      preserveStatus,
      preserveSessionIntent
    });

    if (statusText) {
      setLanMultiplayerStatus(statusText);
    }
  }

  function isPrivateIpv4Address(value) {
    const parts = String(value ?? "").trim().split(".");
    if (parts.length !== 4) {
      return false;
    }

    const octets = parts.map((part) => Number(part));
    if (octets.some((octet) => !Number.isInteger(octet) || octet < 0 || octet > 255)) {
      return false;
    }

    const [firstOctet, secondOctet] = octets;
    return (
      firstOctet === 10 ||
      firstOctet === 127 ||
      (firstOctet === 192 && secondOctet === 168) ||
      (firstOctet === 172 && secondOctet >= 16 && secondOctet <= 31) ||
      (firstOctet === 169 && secondOctet === 254)
    );
  }

  function extractPrivateIpv4Address(text) {
    const matches = String(text ?? "").match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g) ?? [];
    for (const match of matches) {
      if (isPrivateIpv4Address(match)) {
        return match;
      }
    }

    return "";
  }

  async function detectLocalLanIpAddress(timeoutMs = 1500) {
    const RTCPeerConnectionCtor =
      window.RTCPeerConnection ||
      window.webkitRTCPeerConnection ||
      window.mozRTCPeerConnection;

    if (!RTCPeerConnectionCtor) {
      return "";
    }

    return await new Promise((resolve) => {
      let settled = false;
      let timeoutId = 0;
      const peerConnection = new RTCPeerConnectionCtor({ iceServers: [] });

      const finish = (value = "") => {
        if (settled) {
          return;
        }

        settled = true;
        window.clearTimeout(timeoutId);
        peerConnection.onicecandidate = null;
        peerConnection.close?.();
        resolve(value);
      };

      try {
        peerConnection.createDataChannel("lan-preview");
        peerConnection.onicecandidate = (event) => {
          const candidateText = event.candidate?.candidate ?? "";
          const detectedIp = extractPrivateIpv4Address(candidateText);

          if (detectedIp) {
            finish(detectedIp);
            return;
          }

          if (!event.candidate) {
            finish("");
          }
        };

        timeoutId = window.setTimeout(() => {
          finish("");
        }, timeoutMs);

        peerConnection.createOffer()
          .then((offer) => peerConnection.setLocalDescription(offer))
          .catch(() => {
            finish("");
          });
      } catch (error) {
        finish("");
      }
    });
  }

  async function resolveLocalLanIpAddress() {
    const currentHost = String(window.location.hostname || "").trim();
    if (isPrivateIpv4Address(currentHost)) {
      return currentHost;
    }

    const detectedIp = await detectLocalLanIpAddress();
    if (detectedIp) {
      return detectedIp;
    }

    return defaultLanPreviewIp;
  }

  function buildNetworkWeaponState(config = currentGun) {
    const normalizedGun = normalizeGunConfig(config, currentGun.name || "LAN Weapon");
    return {
      fireRate: normalizedGun.fireRate,
      damage: normalizedGun.damage,
      headshotMultiplier: normalizedGun.headshotMultiplier,
      reloadTime: normalizedGun.reloadTime,
      ammoCapacity: normalizedGun.ammoCapacity,
      infiniteAmmo: normalizedGun.infiniteAmmo
    };
  }

  function getWeaponDamageForHitZone(weaponState, hitZone) {
    const normalizedWeaponState = buildNetworkWeaponState(weaponState);

    if (hitZone === "head") {
      return Math.max(1, Math.round(normalizedWeaponState.damage * normalizedWeaponState.headshotMultiplier));
    }

    if (hitZone === "legs") {
      return Math.max(1, Math.round(normalizedWeaponState.damage * 0.75));
    }

    return normalizedWeaponState.damage;
  }

  function isLanSessionActive() {
    return Boolean(
      localPlayerId &&
      lanSocket &&
      lanSocket.readyState === WebSocket.OPEN &&
      (isLanHost || isLanClient)
    );
  }

  function isSharedOnlineSessionActive() {
    return Boolean(
      isLanSessionActive() &&
      lanSessionIntent &&
      lanSessionIntent.isLocalServer === false
    );
  }

  function resolveAuthoritativeSessionMapId(message) {
    if (typeof message?.sessionMapId === "string" && message.sessionMapId.trim()) {
      return normalizeMapId(message.sessionMapId);
    }

    const hostSnapshot = Array.isArray(message?.players)
      ? message.players.find((playerSnapshot) => playerSnapshot?.playerId === message.hostId)
      : null;

    return normalizeMapId(hostSnapshot?.state?.mapId || selectedMap);
  }

  async function syncClientToAuthoritativeSessionMap(sessionMapId) {
    const authoritativeMapId = normalizeMapId(sessionMapId);
    const shouldForceReload =
      currentLoadedMapId !== authoritativeMapId ||
      mapGroup.children.length === 0;

    selectedMap = authoritativeMapId;
    mapSelect.value = authoritativeMapId;
    clearMovementInput();
    setLanMultiplayerStatus(
      `Joining Shared Session...\nLoading host map: ${getMapDisplayName(authoritativeMapId)}`
    );

    await loadSelectedMap(authoritativeMapId, {
      forceReload: shouldForceReload
    });

    playerPosition.copy(currentPlayerSpawn);
    if (player) {
      player.position.copy(currentPlayerSpawn);
    }

    gameStarted = true;
    if (document.body.classList.contains("main-menu-open")) {
      hideMainMenu();
    }

    closeMenus();
    statusMessage.classList.remove("visible");
    requestLock();
  }

  function generateSharedEnemyId() {
    nextLanEnemySequence += 1;
    return `enemy-${Date.now().toString(36)}-${nextLanEnemySequence.toString(36)}`;
  }

  function registerSharedEnemy(enemyActor) {
    if (!enemyActor?.networkId) {
      return null;
    }

    sharedEnemyRegistry.set(enemyActor.networkId, enemyActor);
    return enemyActor;
  }

  function unregisterSharedEnemy(enemyActor) {
    if (
      enemyActor?.networkId &&
      sharedEnemyRegistry.get(enemyActor.networkId) === enemyActor
    ) {
      sharedEnemyRegistry.delete(enemyActor.networkId);
    }
  }

  function getSharedEnemyById(enemyId) {
    if (!enemyId) {
      return null;
    }

    return sharedEnemyRegistry.get(enemyId) ?? null;
  }

  function generateSharedOnlineHealthPickupId(prefix = "pickup") {
    nextLanHealthPickupSequence += 1;
    return `${prefix}-${Date.now().toString(36)}-${nextLanHealthPickupSequence.toString(36)}`;
  }

  function registerSharedOnlineHealthPickup(pickup) {
    if (!pickup?.userData?.networkId) {
      return null;
    }

    sharedOnlineHealthPickupRegistry.set(pickup.userData.networkId, pickup);
    return pickup;
  }

  function unregisterSharedOnlineHealthPickup(pickup) {
    const networkId = pickup?.userData?.networkId;
    if (!networkId) {
      return;
    }

    if (sharedOnlineHealthPickupRegistry.get(networkId) === pickup) {
      sharedOnlineHealthPickupRegistry.delete(networkId);
    }
  }

  function getSharedOnlineHealthPickupById(pickupId) {
    if (!pickupId) {
      return null;
    }

    return sharedOnlineHealthPickupRegistry.get(pickupId) ?? null;
  }

  function buildOnlineHealthPickupState(pickup) {
    if (!pickup?.position || !pickup?.userData?.networkId || !pickup.userData.isOnlineSynced) {
      return null;
    }

    return {
      pickupId: pickup.userData.networkId,
      pickupType: pickup.userData.pickupType === "player_drop" ? "player_drop" : "enemy",
      position: buildNetworkVector3Payload(
        pickup.userData.spawnPosition ?? pickup.position,
        3
      ),
      sourceEnemyId: typeof pickup.userData.sourceEnemyId === "string" ? pickup.userData.sourceEnemyId : "",
      sourcePlayerId: typeof pickup.userData.sourcePlayerId === "string" ? pickup.userData.sourcePlayerId : ""
    };
  }

  function buildEnemyNetworkState(enemyActor) {
    if (!enemyActor?.root || !enemyActor.networkId) {
      return null;
    }

    return {
      enemyId: enemyActor.networkId,
      profileKey: enemyActor.profileKey || "noob",
      waveId: Number.isFinite(enemyActor.waveId) ? enemyActor.waveId : null,
      position: buildNetworkVector3Payload(enemyActor.root.position, 3),
      rotation: {
        y: Number(normalizeAngleRadians(enemyActor.root.rotation.y).toFixed(4))
      },
      health: Math.max(0, Math.round(Number(enemyActor.health) || enemyMaxHp)),
      maxHealth: Math.max(1, Math.round(Number(enemyActor.maxHealth) || enemyMaxHp)),
      isDead: Boolean(enemyActor.isDead),
      state: String(enemyActor.state || "idle"),
      targetPlayerId: typeof enemyActor.targetPlayerId === "string" ? enemyActor.targetPlayerId : "",
      trainingTargetType: enemyActor.isMediumCombatTarget
        ? "mediumRangeJiggleTraining"
        : enemyActor.isJiggleTrainingTarget
          ? "jiggleTraining"
          : ""
    };
  }

  function broadcastSharedEnemySpawns(enemyActors) {
    if (!isLanHost || !isLanSessionActive() || remotePlayers.size === 0) {
      return false;
    }

    const payloadEnemies = enemyActors
      .map((enemyActor) => buildEnemyNetworkState(enemyActor))
      .filter(Boolean);
    if (!payloadEnemies.length) {
      return false;
    }

    return sendNetworkMessage({
      type: "enemy_spawned",
      enemies: payloadEnemies
    });
  }

  function broadcastSharedEnemyStates(currentTime = performance.now(), { force = false } = {}) {
    if (!isLanHost || !isLanSessionActive() || remotePlayers.size === 0) {
      return false;
    }

    if (!force && currentTime - lastSharedEnemyStateSentAt < sharedEnemyStateSendIntervalMs) {
      return false;
    }

    const payloadEnemies = enemies
      .map((enemyActor) => buildEnemyNetworkState(enemyActor))
      .filter(Boolean);
    if (!payloadEnemies.length) {
      return false;
    }

    const didSend = sendNetworkMessage({
      type: "enemy_state",
      enemies: payloadEnemies
    });

    if (didSend) {
      lastSharedEnemyStateSentAt = currentTime;
    }

    return didSend;
  }

  function broadcastSharedEnemyDamage(enemyActor, {
    attackerId = "",
    amount = 0,
    hitZone = "body",
    hp = enemyActor?.health,
    maxHp = enemyActor?.maxHealth,
    isDead = enemyActor?.isDead
  } = {}) {
    if (!isLanHost || !isLanSessionActive() || !enemyActor?.networkId) {
      return false;
    }

    return sendNetworkMessage({
      type: "enemy_damage",
      enemyId: enemyActor.networkId,
      attackerId,
      amount: Math.max(0, Number(amount) || 0),
      hitZone,
      hp: Math.max(0, Math.round(Number(hp) || 0)),
      maxHp: Math.max(1, Math.round(Number(maxHp) || enemyMaxHp)),
      isDead: Boolean(isDead)
    });
  }

  function broadcastSharedEnemyRemoval(enemyActor, { reason = "removed" } = {}) {
    if (!isLanHost || !isLanSessionActive() || !enemyActor?.networkId) {
      return false;
    }

    return sendNetworkMessage({
      type: "enemy_removed",
      enemyId: enemyActor.networkId,
      reason
    });
  }

  function broadcastSharedEnemyAttack(enemyActor, targetPlayerId = "") {
    if (!isLanHost || !isLanSessionActive() || !enemyActor?.networkId) {
      return false;
    }

    return sendNetworkMessage({
      type: "enemy_attack",
      enemyId: enemyActor.networkId,
      targetPlayerId
    });
  }

  function broadcastSharedOnlineHealthPickupSpawns(pickups) {
    if (!isLanHost || !isSharedOnlineSessionActive()) {
      return false;
    }

    const payloadPickups = pickups
      .map((pickup) => buildOnlineHealthPickupState(pickup))
      .filter(Boolean);
    if (!payloadPickups.length) {
      return false;
    }

    return sendNetworkMessage({
      type: "health_pickup_spawned",
      pickups: payloadPickups
    });
  }

  function broadcastSharedOnlineHealthPickupRemoval({
    pickupId,
    reason = "removed",
    removedBy = ""
  } = {}) {
    if (!isLanHost || !isSharedOnlineSessionActive() || !pickupId) {
      return false;
    }

    return sendNetworkMessage({
      type: "health_pickup_removed",
      pickupId,
      reason,
      removedBy
    });
  }

  function syncExistingOnlineHealthPickupsForLanHost() {
    if (!isLanHost || !isSharedOnlineSessionActive()) {
      return false;
    }

    return broadcastSharedOnlineHealthPickupSpawns(
      healthPickups.filter((pickup) =>
        pickup?.userData?.isOnlineSynced &&
        !pickup.userData.collected &&
        !pickup.userData.removed
      )
    );
  }

  function syncExistingEnemiesForLanHost() {
    for (const enemyActor of enemies) {
      if (!enemyActor) {
        continue;
      }

      enemyActor.networkId = enemyActor.networkId || generateSharedEnemyId();
      enemyActor.isSharedEnemy = true;
      enemyActor.isNetworkReplica = false;
      enemyActor.isHostAuthoritative = true;
      enemyActor.networkTargetPosition = enemyActor.networkTargetPosition ?? enemyActor.root.position.clone();
      enemyActor.networkTargetYaw = Number.isFinite(enemyActor.networkTargetYaw)
        ? enemyActor.networkTargetYaw
        : enemyActor.root.rotation.y;
      enemyActor.targetPlayerId = enemyActor.targetPlayerId || "";
      registerSharedEnemy(enemyActor);
    }
  }

  function clearLanCombatRespawnTimeout(combatState) {
    if (!combatState?.respawnTimeoutId) {
      return;
    }

    window.clearTimeout(combatState.respawnTimeoutId);
    combatState.respawnTimeoutId = 0;
  }

  function ensureLanCombatState(playerId, overrides = {}) {
    if (!playerId) {
      return null;
    }

    let combatState = lanPlayerCombatState.get(playerId);
    if (!combatState) {
      combatState = {
        playerId,
        hp: lanPlayerMaxHp,
        maxHp: lanPlayerMaxHp,
        isDead: false,
        name: "",
        weaponState: buildNetworkWeaponState(),
        lastAcceptedShotAt: -Infinity,
        respawnTimeoutId: 0
      };
      lanPlayerCombatState.set(playerId, combatState);
    }

    if (typeof overrides.name === "string" && overrides.name.trim()) {
      combatState.name = normalizePlayerName(overrides.name);
    }

    if (overrides.weaponState) {
      combatState.weaponState = buildNetworkWeaponState(overrides.weaponState);
    }

    if (Number.isFinite(overrides.maxHp)) {
      combatState.maxHp = Math.max(1, Number(overrides.maxHp));
    }

    if (Number.isFinite(overrides.hp)) {
      combatState.hp = THREE.MathUtils.clamp(
        Number(overrides.hp),
        0,
        combatState.maxHp
      );
    }

    if ("isDead" in overrides) {
      combatState.isDead = Boolean(overrides.isDead);
    } else if (combatState.hp <= 0) {
      combatState.isDead = true;
    }

    return combatState;
  }

  function removeLanCombatState(playerId) {
    const combatState = lanPlayerCombatState.get(playerId);
    if (!combatState) {
      return;
    }

    clearLanCombatRespawnTimeout(combatState);
    lanPlayerCombatState.delete(playerId);
  }

  function clearLanCombatState() {
    for (const combatState of lanPlayerCombatState.values()) {
      clearLanCombatRespawnTimeout(combatState);
    }

    lanPlayerCombatState.clear();
  }

  function setRemotePlayerAliveState(remotePlayer, isDead) {
    if (!remotePlayer?.root) {
      return;
    }

    remotePlayer.isDead = Boolean(isDead);
    if (remotePlayer.characterMixer) {
      remotePlayer.characterMixer.timeScale = remotePlayer.isDead ? 0 : 1;
    }

    if (remotePlayer.isDead) {
      cleanupActorEffects(remotePlayer);
      applyActorDeathDrop(remotePlayer);
      remotePlayer.targetCrouchBlend = 0;
    } else {
      resetActorDeathDrop(remotePlayer);
    }
  }

  function syncRemotePlayerCombatState(playerId, updates = {}) {
    const combatState = ensureLanCombatState(playerId, updates);
    const remotePlayer = remotePlayers.get(playerId);
    if (!combatState || !remotePlayer) {
      return combatState;
    }

    remotePlayer.maxHealth = combatState.maxHp;
    remotePlayer.health = combatState.hp;
    setPlayerNameplateHp(remotePlayer.nameplate, remotePlayer.health, remotePlayer.maxHealth);
    setRemotePlayerAliveState(remotePlayer, combatState.isDead);
    return combatState;
  }

  function broadcastLanCombatState() {
    if (!isLanHost || !isLanSessionActive()) {
      return false;
    }

    const players = [...lanPlayerCombatState.values()].map((combatState) => ({
      playerId: combatState.playerId,
      hp: combatState.hp,
      maxHp: combatState.maxHp,
      isDead: combatState.isDead
    }));

    return sendNetworkMessage({
      type: "player_combat_state",
      players
    });
  }

  function getPlayerBodyYaw(actorRoot = player) {
    if (!actorRoot) {
      return 0;
    }

    actorRoot.getWorldDirection(playerBodyFacingDirection);
    playerBodyFacingDirection.y = 0;

    if (playerBodyFacingDirection.lengthSq() < 0.000001) {
      return normalizeAngleRadians(actorRoot.rotation.y);
    }

    playerBodyFacingDirection.normalize();
    return normalizeAngleRadians(Math.atan2(
      playerBodyFacingDirection.x,
      playerBodyFacingDirection.z
    ));
  }

  function buildLocalPlayerState() {
    const bodyYaw = getPlayerBodyYaw();
    const weaponState = buildNetworkWeaponState(currentGun);

    if (localPlayerId) {
      ensureLanCombatState(localPlayerId, {
        hp: playerHp,
        maxHp: playerMaxHp,
        isDead: playerDead,
        name: playerName,
        weaponState
      });
    }

    return {
      name: playerName,
      mapId: getActiveSessionMapId(),
      position: {
        x: Number(player.position.x.toFixed(3)),
        y: Number(player.position.y.toFixed(3)),
        z: Number(player.position.z.toFixed(3))
      },
      rotation: {
        x: Number(player.rotation.x.toFixed(4)),
        y: Number(bodyYaw.toFixed(4)),
        z: Number(player.rotation.z.toFixed(4)),
        bodyYaw: Number(bodyYaw.toFixed(4)),
        yaw: Number(yaw.toFixed(4)),
        pitch: Number(pitch.toFixed(4))
      },
      crouching: Boolean(isCrouching),
      isGrounded: Boolean(isGrounded),
      jumpSequenceId: localJumpSequenceId,
      movement: {
        forward: Boolean(moveState.forward),
        backward: Boolean(moveState.backward),
        left: Boolean(moveState.left),
        right: Boolean(moveState.right),
        sprint: Boolean(moveState.sprint),
        moving: Boolean(isMoving)
      },
      weapon: weaponState
    };
  }

  function sendNetworkMessage(message) {
    return sendSocketMessage(lanSocket, message);
  }

  function sendLocalPlayerState(currentTime = performance.now(), { force = false } = {}) {
    if (!lanSocket || lanSocket.readyState !== WebSocket.OPEN || !localPlayerId) {
      return false;
    }

    if (!force && currentTime - lastLocalStateSentAt < localPlayerStateSendIntervalMs) {
      return false;
    }

    const nextState = buildLocalPlayerState();
    const didSend = sendNetworkMessage({
      type: "player_state",
      state: nextState
    });

    if (didSend) {
      lastLocalStateSentAt = currentTime;
      lastPacketTimestamps.set(localPlayerId, currentTime);
    }

    return didSend;
  }

  function getRemotePlayerPalette() {
    return {
      body: 0x3d74ff,
      head: 0xb4ceff,
      limb: 0x2a4da8
    };
  }

  function spawnRemotePlayer(id, state = null) {
    if (!id || id === localPlayerId) {
      return null;
    }

    let remotePlayer = remotePlayers.get(id);
    if (remotePlayer) {
      if (state) {
        updateRemotePlayer(id, state);
      }
      return remotePlayer;
    }

    remotePlayer = buildBoxActor(getRemotePlayerPalette());
    setRemoteVisualTransformDefaults(remotePlayer.visual, 0.26, 0.22);
    remotePlayer.visual.visible = false;
    remotePlayer.playerId = id;
    remotePlayer.playerName = typeof state?.name === "string" ? state.name : "";
    remotePlayer.targetPosition = new THREE.Vector3();
    remotePlayer.targetRotation = new THREE.Euler();
    remotePlayer.targetYaw = 0;
    remotePlayer.nameplate = createPlayerNameplate({ isLocal: false });
    setPlayerNameplateHp(remotePlayer.nameplate, lanPlayerMaxHp, lanPlayerMaxHp);
    remotePlayer.lookYaw = 0;
    remotePlayer.lookPitch = 0;
    remotePlayer.maxHealth = lanPlayerMaxHp;
    remotePlayer.health = lanPlayerMaxHp;
    remotePlayer.isDead = false;
    remotePlayer.weaponState = buildNetworkWeaponState();
    remotePlayer.movementState = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      sprint: false,
      moving: false
    };
    remotePlayer.crouchBlend = 0;
    remotePlayer.targetCrouchBlend = 0;

    for (const mesh of [
      remotePlayer.body,
      remotePlayer.head,
      remotePlayer.leftArm,
      remotePlayer.rightArm,
      remotePlayer.leftLeg,
      remotePlayer.rightLeg
    ]) {
      mesh.userData.ownerType = "remotePlayer";
      mesh.userData.ignoreShotRay = true;
    }

    scene.add(remotePlayer.root);
    remotePlayers.set(id, remotePlayer);
    createActorPvpHitboxes(remotePlayer, id);
    const combatState = ensureLanCombatState(id, {
      hp: remotePlayer.health,
      maxHp: remotePlayer.maxHealth,
      isDead: remotePlayer.isDead,
      name: remotePlayer.playerName,
      weaponState: remotePlayer.weaponState
    });
    if (combatState) {
      remotePlayer.maxHealth = combatState.maxHp;
      remotePlayer.health = combatState.hp;
      setRemotePlayerAliveState(remotePlayer, combatState.isDead);
    }
    attachMotusManToRemotePlayer(remotePlayer);

    if (state) {
      updateRemotePlayer(id, state);
    }

    return remotePlayer;
  }

  function updateRemotePlayer(id, state) {
    if (!id || id === localPlayerId || !state) {
      return;
    }

    const remotePlayer = remotePlayers.get(id) ?? spawnRemotePlayer(id);
    if (!remotePlayer) {
      return;
    }

    const position = state.position ?? {};
    const rotation = state.rotation ?? {};
    const movement = state.movement ?? {};
    const weaponState = state.weapon ?? {};
    const now = performance.now();
    const hasExistingPacket = lastPacketTimestamps.has(id);

    remotePlayer.isGrounded = state.isGrounded;
    remotePlayer.jumpSequenceId = state.jumpSequenceId;

    remotePlayer.playerName =
      typeof state.name === "string" && state.name.trim()
        ? state.name.trim()
        : remotePlayer.playerName;
    setPlayerNameplateText(remotePlayer.nameplate, remotePlayer.playerName, "Player");
    remotePlayer.lookYaw = Number.isFinite(rotation.yaw)
      ? normalizeAngleRadians(rotation.yaw)
      : remotePlayer.lookYaw;
    remotePlayer.lookPitch = Number.isFinite(rotation.pitch)
      ? THREE.MathUtils.clamp(rotation.pitch, cameraConfig.minPitch, cameraConfig.maxPitch)
      : remotePlayer.lookPitch;
    remotePlayer.weaponState = buildNetworkWeaponState(weaponState);
    ensureLanCombatState(id, {
      name: remotePlayer.playerName,
      weaponState: remotePlayer.weaponState
    });

    remotePlayer.targetPosition.set(
      Number.isFinite(position.x) ? position.x : remotePlayer.targetPosition.x,
      Number.isFinite(position.y) ? position.y : remotePlayer.targetPosition.y,
      Number.isFinite(position.z) ? position.z : remotePlayer.targetPosition.z
    );

    const nextRemoteYaw = Number.isFinite(rotation.bodyYaw)
      ? normalizeAngleRadians(rotation.bodyYaw)
      : Number.isFinite(rotation.y)
        ? normalizeAngleRadians(rotation.y)
        : remotePlayer.targetYaw;

    remotePlayer.targetRotation.set(
      0,
      nextRemoteYaw,
      0
    );
    remotePlayer.targetYaw = nextRemoteYaw;

    if (!hasExistingPacket) {
      remotePlayer.root.position.copy(remotePlayer.targetPosition);
      remotePlayer.root.rotation.set(0, remotePlayer.targetYaw, 0);
    }

    remotePlayer.targetCrouchBlend = state.crouching ? 1 : 0;
    const nextRemoteCrouch = Boolean(state.crouching);
    console.log("remote_crouch_state_received", { id, crouching: nextRemoteCrouch });

    if (nextRemoteCrouch !== remotePlayer.remoteCrouchActive) {
      remotePlayer.remoteCrouchActive = nextRemoteCrouch;
      if (nextRemoteCrouch) {
        if (remotePlayer.characterCrouchAction && remotePlayer.characterIdleAction) {
          remotePlayer.characterIdleAction.fadeOut(0.18);
          remotePlayer.characterCrouchAction.reset().fadeIn(0.18).play();
          console.log("remote_crouch_animation_started", { id });
        }
      } else {
        if (remotePlayer.characterCrouchAction && remotePlayer.characterIdleAction) {
          remotePlayer.characterCrouchAction.fadeOut(0.18);
          remotePlayer.characterIdleAction.reset().fadeIn(0.18).play();
          console.log("remote_crouch_animation_stopped", { id });
        }
      }
    }

    remotePlayer.movementState = {
      forward: Boolean(movement.forward),
      backward: Boolean(movement.backward),
      left: Boolean(movement.left),
      right: Boolean(movement.right),
      sprint: Boolean(movement.sprint),
      moving: Boolean(movement.moving)
    };

    lastPacketTimestamps.set(id, now);
  }

  function removeRemotePlayer(id) {
    const remotePlayer = remotePlayers.get(id);
    if (!remotePlayer) {
      return;
    }

    if (remotePlayer.characterMixer) {
      remotePlayer.characterMixer.stopAllAction();
      remotePlayer.characterMixer = null;
      remotePlayer.characterIdleAction = null;
      remotePlayer.characterCrouchAction = null;
      remotePlayer.characterWalkAction = null;
      remotePlayer.characterJogAction = null;
      remotePlayer.characterJumpStartAction = null;
      remotePlayer.characterJumpAirAction = null;
      remotePlayer.remoteCrouchActive = false;
      remotePlayer.remoteJumpActiveMode = "idle";
    }
    clearActorPvpHitboxes(remotePlayer);
    removePlayerNameplate(remotePlayer.nameplate);
    remotePlayer.nameplate = null;
    cleanupActorEffects(remotePlayer);
    if (remotePlayer.root.parent) {
      remotePlayer.root.parent.remove(remotePlayer.root);
    }

    remotePlayers.delete(id);
    lastPacketTimestamps.delete(id);
    removeLanCombatState(id);
  }

  function lerpAngleRadians(current, target, alpha) {
    return current + Math.atan2(
      Math.sin(target - current),
      Math.cos(target - current)
    ) * alpha;
  }

  function normalizeAngleRadians(angle) {
    return Math.atan2(Math.sin(angle), Math.cos(angle));
  }

  function updateRemotePlayers(delta) {
    if (!remotePlayers.size) {
      return;
    }

    const blend = 1 - Math.exp(-12 * delta);
    const crouchBlend = 1 - Math.exp(-14 * delta);

    for (const [id, remotePlayer] of remotePlayers) {
      remotePlayer.root.position.lerp(remotePlayer.targetPosition, blend);
      remotePlayer.root.rotation.x = 0;
      remotePlayer.root.rotation.y = normalizeAngleRadians(lerpAngleRadians(
        remotePlayer.root.rotation.y,
        remotePlayer.targetYaw,
        blend
      ));
      remotePlayer.root.rotation.z = remotePlayer.isDead ? -Math.PI * 0.45 : 0;

      remotePlayer.crouchBlend = THREE.MathUtils.lerp(
        remotePlayer.crouchBlend,
        remotePlayer.targetCrouchBlend,
        crouchBlend
      );
      if (remotePlayer.characterMixer) {
        remotePlayer.characterMixer.update(delta);
      }

      // --- Remote movement animation (walk/jog/jump based on network state) ---
      if (remotePlayer.characterIdleAction) {
        const isRemoteGrounded = remotePlayer.isGrounded !== false;
        const isRemoteMoving = remotePlayer.movementState.moving && !remotePlayer.remoteCrouchActive;
        const isRemoteSprinting = isRemoteMoving && Boolean(remotePlayer.movementState.sprint);

        let jumpTriggered = false;
        const incomingJumpSeq = remotePlayer.jumpSequenceId ?? 0;
        if (incomingJumpSeq > (remotePlayer.remoteJumpSequenceId ?? 0)) {
          jumpTriggered = true;
          remotePlayer.remoteJumpSequenceId = incomingJumpSeq;
          remotePlayer.remoteJumpStartFinished = false;
        }

        // Determine target movement mode: "jumpStart" | "jumpAir" | "jog" | "walk" | "idle"
        let targetMoveMode = "idle";

        if (jumpTriggered && remotePlayer.characterJumpStartAction) {
          targetMoveMode = "jumpStart";
        } else if (remotePlayer.remoteJumpActiveMode === "jumpStart" && !isRemoteGrounded && !remotePlayer.remoteJumpStartFinished) {
          targetMoveMode = "jumpStart";
        } else if (!isRemoteGrounded && remotePlayer.characterJumpAirAction) {
          targetMoveMode = "jumpAir";
        } else if (isRemoteMoving && isRemoteSprinting && remotePlayer.characterJogAction) {
          targetMoveMode = "jog";
        } else if (isRemoteMoving && remotePlayer.characterWalkAction) {
          targetMoveMode = "walk";
        }

        const prevMoveMode = remotePlayer.remoteJumpActiveMode ?? "idle";

        if (targetMoveMode !== prevMoveMode) {
          remotePlayer.remoteJumpActiveMode = targetMoveMode;

          // Fade out previous
          if (prevMoveMode === "jumpStart" && remotePlayer.characterJumpStartAction) remotePlayer.characterJumpStartAction.fadeOut(0.18);
          if (prevMoveMode === "jumpAir" && remotePlayer.characterJumpAirAction) remotePlayer.characterJumpAirAction.fadeOut(0.18);
          if (prevMoveMode === "jog" && remotePlayer.characterJogAction) remotePlayer.characterJogAction.fadeOut(0.20);
          if (prevMoveMode === "walk" && remotePlayer.characterWalkAction) remotePlayer.characterWalkAction.fadeOut(0.20);
          if (prevMoveMode === "idle") remotePlayer.characterIdleAction.fadeOut(0.18);

          // Fade in next
          if (targetMoveMode === "jumpStart") {
            remotePlayer.characterJumpStartAction.reset().fadeIn(0.18).play();
          } else if (targetMoveMode === "jumpAir") {
            remotePlayer.characterJumpAirAction.reset().fadeIn(0.18).play();
          } else if (targetMoveMode === "jog") {
            remotePlayer.characterJogAction.reset().fadeIn(0.18).play();
          } else if (targetMoveMode === "walk") {
            remotePlayer.characterWalkAction.reset().fadeIn(0.18).play();
          } else {
            remotePlayer.characterIdleAction.reset().fadeIn(0.18).play();
          }
        }
      }

      const crouchVisual = remotePlayer.motusManVisual ?? remotePlayer.visual;
      const baseScaleX = crouchVisual.userData.baseScaleX ?? 1;
      const baseScaleY = crouchVisual.userData.baseScaleY ?? 1;
      const baseScaleZ = crouchVisual.userData.baseScaleZ ?? 1;
      const basePositionY = crouchVisual.userData.basePositionY ?? 0;
      const crouchOffset = crouchVisual.userData.crouchOffset ?? 0.26;
      const crouchScaleAmount = crouchVisual.userData.crouchScale ?? 0.22;

      // Crouch via animation. The Y scale-squish + downward offset is kept only as a
      // hitbox/collision helper for the box-actor fallback (when motusMan has not loaded).
      // When the motusMan visual is present and has a crouch action, compensate the
      // downward position push so feet stay on the ground.
      const hasAnimCrouch = Boolean(remotePlayer.characterCrouchAction);

      crouchVisual.scale.set(
        baseScaleX,
        baseScaleY * (1 - (crouchScaleAmount * remotePlayer.crouchBlend)),
        baseScaleZ
      );

      if (hasAnimCrouch) {
        // Animation drives the crouch pose — do NOT push the visual downward.
        crouchVisual.position.y = basePositionY;
      } else {
        // Fallback box-actor: use offset but compensate upward so feet stay grounded.
        const rawOffset = crouchOffset * remotePlayer.crouchBlend;
        const compensatedOffset = rawOffset * (crouchScaleAmount * 0.5);
        crouchVisual.position.y = basePositionY - rawOffset + compensatedOffset;
        if (remotePlayer.crouchBlend > 0.01) {
          console.log("remote_crouch_ground_offset_applied", { id, offset: crouchVisual.position.y });
        }
      }
      updateActorPvpHitboxes(remotePlayer, remotePlayer.crouchBlend);
    }
  }

  async function handleNetworkMessage(msg) {
    let parsedMessage = msg;
    if (typeof parsedMessage === "string") {
      try {
        parsedMessage = JSON.parse(parsedMessage);
      } catch (error) {
        console.warn("Ignoring malformed network message:", msg);
        return;
      }
    }

    if (!parsedMessage || typeof parsedMessage !== "object") {
      return;
    }

    if (
      pendingAuthoritativeSessionMapSync &&
      parsedMessage.type !== "session_ready" &&
      parsedMessage.type !== "session_closed" &&
      parsedMessage.type !== "error" &&
      parsedMessage.type !== "server_heartbeat" &&
      parsedMessage.type !== "peer_connection_lost" &&
      parsedMessage.type !== "peer_reconnected" &&
      parsedMessage.type !== "host_connection_lost" &&
      parsedMessage.type !== "host_reconnected"
    ) {
      try {
        await pendingAuthoritativeSessionMapSync;
      } catch (error) {
        return;
      }
    }

    switch (parsedMessage.type) {
      case "session_ready": {
        const isResumedSession = Boolean(parsedMessage.isResume);
        const hostSnapshot = Array.isArray(parsedMessage.players)
          ? parsedMessage.players.find((playerSnapshot) => playerSnapshot?.playerId === parsedMessage.hostId)
          : null;
        const hostIsTemporarilyOffline = Boolean(
          parsedMessage.role === "client" &&
          hostSnapshot &&
          hostSnapshot.connected === false
        );
        const previousReconnectAttemptCount = lanSessionIntent?.reconnectAttempts ?? 0;

        localPlayerId = typeof parsedMessage.playerId === "string" ? parsedMessage.playerId : "";
        isLanHost = parsedMessage.role === "host";
        isLanClient = parsedMessage.role === "client";
        lanConnectionStatus = isLanHost ? "hosting" : "connected";
        enforceOnlineGunLimitsIfActive();
        lastSharedEnemyStateSentAt = 0;

        if (Number.isFinite(Number(parsedMessage.heartbeatIntervalMs))) {
          lanHeartbeatIntervalMs = Math.max(1000, Number(parsedMessage.heartbeatIntervalMs));
        }
        if (Number.isFinite(Number(parsedMessage.heartbeatTimeoutMs))) {
          lanHeartbeatTimeoutMs = Math.max(
            lanHeartbeatIntervalMs * 2,
            Number(parsedMessage.heartbeatTimeoutMs)
          );
        }
        if (Number.isFinite(Number(parsedMessage.resumeGraceMs))) {
          lanResumeGraceMs = Math.max(1000, Number(parsedMessage.resumeGraceMs));
        }

        if (lanSessionIntent) {
          lanSessionIntent.playerId = localPlayerId;
          lanSessionIntent.sessionToken =
            typeof parsedMessage.resumeToken === "string" && parsedMessage.resumeToken.trim()
              ? parsedMessage.resumeToken.trim()
              : lanSessionIntent.sessionToken;
          lanSessionIntent.established = true;
          lanSessionIntent.reconnecting = false;
          lanSessionIntent.reconnectAttempts = 0;
        }

        clearLanReconnectTimer();
        startLanHeartbeat();

        setActorPvpOwnerId(playerActor, localPlayerId);
        ensureLanCombatState(localPlayerId, {
          hp: playerHp,
          maxHp: playerMaxHp,
          isDead: playerDead,
          name: playerName,
          weaponState: currentGun
        });
        lastPacketTimestamps.set(localPlayerId, performance.now());

        if (!isResumedSession) {
          for (const remotePlayerId of [...remotePlayers.keys()]) {
            removeRemotePlayer(remotePlayerId);
          }
        }

        if (isLanClient) {
          const authoritativeMapId = resolveAuthoritativeSessionMapId(parsedMessage);
          const needsMapSync =
            !isResumedSession ||
            currentLoadedMapId !== authoritativeMapId ||
            mapGroup.children.length === 0 ||
            !gameStarted;

          if (needsMapSync) {
            if (!isResumedSession) {
              removeAllEnemies();
            }

            pendingAuthoritativeSessionMapSync = syncClientToAuthoritativeSessionMap(authoritativeMapId);

            try {
              await pendingAuthoritativeSessionMapSync;
            } catch (error) {
              console.error("Failed to synchronize client into the host map:", error);
              lanConnectionStatus = "error";
              finishPendingLanConnection({
                error: new Error(hostSessionMapLoadErrorMessage)
              });
              disconnectLanSession({
                preserveStatus: true,
                preserveSessionIntent: false,
                statusText: hostSessionMapLoadErrorMessage
              });
              showStatusMessage(hostSessionMapLoadErrorMessage, 2200);
              pendingAuthoritativeSessionMapSync = null;
              return;
            }

            pendingAuthoritativeSessionMapSync = null;
          }
        }

        if (isLanHost) {
          syncExistingEnemiesForLanHost();
        }

        for (const remotePlayerState of parsedMessage.players ?? []) {
          if (
            !remotePlayerState?.playerId ||
            remotePlayerState.playerId === localPlayerId ||
            remotePlayerState.connected === false
          ) {
            continue;
          }

          ensureLanCombatState(remotePlayerState.playerId, {
            hp: lanPlayerMaxHp,
            maxHp: lanPlayerMaxHp,
            isDead: false,
            name: remotePlayerState.name,
            weaponState: remotePlayerState.state?.weapon
          });

          if (remotePlayerState.state) {
            updateRemotePlayer(remotePlayerState.playerId, remotePlayerState.state);
          }
        }

        sendLocalPlayerState(performance.now(), { force: true });
        if (isLanHost) {
          broadcastLanCombatState();
          broadcastSharedEnemySpawns(enemies);
          broadcastSharedEnemyStates(performance.now(), { force: true });
          syncExistingOnlineHealthPickupsForLanHost();
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingTimer({ force: true });
          broadcastAimTrainingTargetState({ force: true, log: true });
        }

        if (hostIsTemporarilyOffline && lanSessionIntent) {
          lanConnectionStatus = "waiting_for_host";
          setLanMultiplayerStatus(
            `${lanSessionIntent.isLocalServer ? "LAN session paused." : "Shared session paused."}\nHost connection lost.\nWaiting for host to reconnect...`
          );
          showStatusMessage("Reconnected to relay. Waiting for host...", 1800);
        } else if (isResumedSession && lanSessionIntent) {
          logLanDebug("reconnect_attempt_succeeded", {
            role: lanSessionIntent.role,
            playerId: localPlayerId,
            server: lanSessionIntent.serverAddress || "",
            attempt: Math.max(1, previousReconnectAttemptCount),
            timeoutMs: lanHeartbeatTimeoutMs,
            graceMs: lanResumeGraceMs
          });
          setLanMultiplayerStatus(buildLanConnectedStatusText(lanSessionIntent));
          showStatusMessage(
            isLanHost
              ? "Hosted session reconnected."
              : "Session reconnected.",
            1800
          );
        }

        lanSocket?.__connectResolve?.(parsedMessage);
        if (lanSocket) {
          lanSocket.__connectResolve = null;
          lanSocket.__connectReject = null;
        }
        finishPendingLanConnection({ result: parsedMessage });
        break;
      }

      case "peer_joined": {
        const joinedPlayerId = parsedMessage.playerId;
        if (!joinedPlayerId || joinedPlayerId === localPlayerId) {
          return;
        }

        if (parsedMessage.state) {
          updateRemotePlayer(joinedPlayerId, parsedMessage.state);
        }

        ensureLanCombatState(joinedPlayerId, {
          hp: lanPlayerMaxHp,
          maxHp: lanPlayerMaxHp,
          isDead: false,
          name: parsedMessage.name,
          weaponState: parsedMessage.state?.weapon
        });

        if (isLanHost) {
          broadcastLanCombatState();
          sendLocalPlayerState(performance.now(), { force: true });
          broadcastSharedEnemySpawns(enemies);
          broadcastSharedEnemyStates(performance.now(), { force: true });
          syncExistingOnlineHealthPickupsForLanHost();
          if (getActiveAimTrainingModeId()) {
            console.log("[AIM TRAINING SYNC] player joined during active training, sending current state");
          }
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingTimer({ force: true });
          broadcastAimTrainingTargetState({ force: true, log: true });
        }

        showStatusMessage("Player joined the session.", 1500);
        break;
      }

      case "peer_connection_lost": {
        if (!parsedMessage.playerId || parsedMessage.playerId === localPlayerId) {
          return;
        }

        showStatusMessage("Player connection lost. Waiting for reconnect...", 1800);
        break;
      }

      case "peer_reconnected": {
        const reconnectedPlayerId = parsedMessage.playerId;
        if (!reconnectedPlayerId || reconnectedPlayerId === localPlayerId) {
          return;
        }

        ensureLanCombatState(reconnectedPlayerId, {
          hp: lanPlayerMaxHp,
          maxHp: lanPlayerMaxHp,
          isDead: false,
          name: parsedMessage.name,
          weaponState: parsedMessage.state?.weapon
        });

        if (parsedMessage.state) {
          updateRemotePlayer(reconnectedPlayerId, parsedMessage.state);
        }

        if (isLanHost) {
          broadcastLanCombatState();
          sendLocalPlayerState(performance.now(), { force: true });
          broadcastSharedEnemySpawns(enemies);
          broadcastSharedEnemyStates(performance.now(), { force: true });
          syncExistingOnlineHealthPickupsForLanHost();
          if (getActiveAimTrainingModeId()) {
            console.log("[AIM TRAINING SYNC] player joined during active training, sending current state");
          }
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingTimer({ force: true });
          broadcastAimTrainingTargetState({ force: true, log: true });
        }

        showStatusMessage("Player reconnected.", 1500);
        break;
      }

      case "host_connection_lost": {
        if (!isLanClient || !lanSessionIntent) {
          return;
        }

        if (cleanupMirroredAimTrainingAfterHostDisconnect("host connection lost")) {
          break;
        }
        lanConnectionStatus = "waiting_for_host";
        setLanMultiplayerStatus(
          `${lanSessionIntent.isLocalServer ? "LAN session paused." : "Shared session paused."}\nHost connection lost.\nWaiting for host to reconnect...`
        );
        showStatusMessage("Host connection lost. Waiting for reconnect...", 1800);
        break;
      }

      case "host_reconnected": {
        if (!isLanClient || !lanSessionIntent) {
          return;
        }

        lanConnectionStatus = "connected";
        setLanMultiplayerStatus(buildLanConnectedStatusText(lanSessionIntent));
        showStatusMessage("Host reconnected.", 1500);
        break;
      }

      case "player_shot": {
        const shooterId = parsedMessage.playerId;
        if (!shooterId || shooterId === localPlayerId || !parsedMessage.shot) {
          return;
        }

        playReplicatedPlayerShotEffect(shooterId);
        if (isLanHost) {
          const handledAimTrainingShot = resolveHostAuthoritativeAimTrainingShot(shooterId, parsedMessage.shot);
          if (!handledAimTrainingShot) {
            resolveHostAuthoritativePlayerShot(shooterId, parsedMessage.shot);
            resolveHostAuthoritativeEnemyShot(shooterId, parsedMessage.shot);
          }
        }
        break;
      }

      case "enemy_spawn_request": {
        if (!isLanHost) {
          return;
        }

        spawnEnemies(parsedMessage.count, {
          difficultyKey: parsedMessage.difficultyKey
        });
        break;
      }

      case "enemy_wave_request": {
        if (!isLanHost) {
          return;
        }

        startEnemyWaveSession(
          parsedMessage.enemyCount,
          parsedMessage.waveCount,
          {
            difficultyKey: parsedMessage.difficultyKey
          }
        );
        break;
      }

      case "player_combat_state": {
        applyCombatStateSnapshotMessage(parsedMessage);
        break;
      }

      case "player_damage": {
        handlePlayerDamageMessage(parsedMessage);
        break;
      }

      case "player_respawn": {
        handlePlayerRespawnMessage(parsedMessage);
        break;
      }

      case "player_state": {
        const remotePlayerId = parsedMessage.playerId;
        if (!remotePlayerId || remotePlayerId === localPlayerId || !parsedMessage.state) {
          return;
        }

        updateRemotePlayer(remotePlayerId, parsedMessage.state);
        break;
      }

      case "enemy_spawned": {
        for (const enemyState of parsedMessage.enemies ?? []) {
          spawnOrUpdateSharedEnemyFromNetwork(enemyState, { snap: true });
        }
        break;
      }

      case "enemy_state": {
        for (const enemyState of parsedMessage.enemies ?? []) {
          spawnOrUpdateSharedEnemyFromNetwork(enemyState);
        }
        break;
      }

      case "enemy_damage": {
        handleEnemyDamageMessage(parsedMessage);
        break;
      }

      case "enemy_removed": {
        handleEnemyRemovedMessage(parsedMessage);
        break;
      }

      case "health_pickup_spawned": {
        handleOnlineHealthPickupSpawnMessage(parsedMessage);
        break;
      }

      case "health_pickup_removed": {
        handleOnlineHealthPickupRemovedMessage(parsedMessage);
        break;
      }

      case "aim_training_state": {
        if (!isLanClient) {
          return;
        }
        console.log("[AIM TRAINING SYNC] received aim_training_state", parsedMessage);
        await applyAimTrainingStateFromHost(parsedMessage.state || parsedMessage || {});
        break;
      }

      case "aim_training_timer": {
        if (!isLanClient) {
          return;
        }
        applyAimTrainingTimerSync(parsedMessage);
        break;
      }

      case "aim_training_target_state": {
        if (!isLanClient) {
          return;
        }
        applyAimTrainingTargetSync(parsedMessage);
        break;
      }

      case "aim_training_target_respawn": {
        if (!isLanClient) {
          return;
        }
        console.log("[AIM TRAINING SYNC] received aim_training_target_respawn", parsedMessage);
        applyAimTrainingTargetSync(parsedMessage, "aim_training_target_respawn");
        break;
      }

      case "aim_training_finished": {
        if (!isLanClient) {
          return;
        }
        if (shouldIgnoreHostAimTrainingMessage(parsedMessage, "aim_training_finished")) {
          return;
        }
        if (!isNetworkAimTrainingMirror) {
          return;
        }
        applyAimTrainingTimerSync({
          mode: parsedMessage.mode,
          sessionId: parsedMessage.sessionId,
          remainingSeconds: 0
        });
        finishAimTrainingSession("host finished");
        if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "flex";
        console.log("[AIM TRAINING SYNC] finished");
        break;
      }

      case "aim_training_exit": {
        if (!isLanClient) {
          return;
        }
        await applyAimTrainingStateFromHost({
          active: false,
          mode: parsedMessage.mode,
          sessionId: parsedMessage.sessionId
        });
        break;
      }

      case "aim_training_restart": {
        if (!isLanClient) {
          return;
        }
        console.log("[AIM TRAINING SYNC] received aim_training_restart", parsedMessage);
        if (shouldIgnoreHostAimTrainingMessage(parsedMessage, "aim_training_restart")) {
          return;
        }
        if (parsedMessage.state && typeof parsedMessage.state === "object") {
          await applyAimTrainingStateFromHost(parsedMessage.state);
        } else {
          await applyAimTrainingStateFromHost({
            active: true,
            mode: parsedMessage.mode || getActiveAimTrainingModeId(),
            sessionId: parsedMessage.sessionId,
            remainingSeconds: parsedMessage.remainingSeconds ?? 60,
            targetState: parsedMessage.targetState || {}
          });
        }
        break;
      }

      case "enemy_attack": {
        playReplicatedEnemyShotEffect(parsedMessage.enemyId);
        break;
      }

      case "peer_left": {
        const leftPlayerId = parsedMessage.playerId;
        if (!leftPlayerId) {
          return;
        }

        removeRemotePlayer(leftPlayerId);
        showStatusMessage(
          parsedMessage.reason === "reconnect_failed"
            ? "Player disconnected and could not reconnect."
            : "Player left the session.",
          1800
        );
        break;
      }

      case "session_closed": {
        const reason = parsedMessage.reason === "host_left"
          ? "Host left the session."
          : parsedMessage.reason === "host_disconnected"
            ? "Host connection was lost and could not be restored."
            : "Multiplayer session closed.";
        if (isNetworkAimTrainingMirror && handleHomeFromOnlineClient("session closed", {
          sendLeave: false,
          message: reason
        })) {
          break;
        }
        disconnectLanSession({
          preserveStatus: true,
          preserveSessionIntent: false,
          sendLeave: false,
          statusText: `Multiplayer session closed.\n${reason}`
        });
        lanConnectionStatus = "closed";
        showStatusMessage(reason, 1800);
        break;
      }

      case "server_heartbeat": {
        break;
      }

      case "error": {
        const errorMessage = typeof parsedMessage.message === "string"
          ? parsedMessage.message
          : "Multiplayer networking error.";
        const errorCode = typeof parsedMessage.code === "string"
          ? parsedMessage.code
          : "network_error";

        if (isHeartbeatUnsupportedMessage(errorCode, errorMessage)) {
          logLanDebug("heartbeat_unsupported_message_silenced", {
            code: errorCode,
            message: errorMessage
          });
          break;
        }

        if (errorCode === "resume_not_available") {
          failLanReconnect({
            message: errorMessage,
            recoveryUnavailable: true
          });
          break;
        }

        if (pendingLanConnectionResolve || pendingLanConnectionReject) {
          lanConnectionStatus = "error";
          finishPendingLanConnection({
            error: new Error(errorMessage)
          });

          if (lanSocket) {
            lanSocket.__intentionalClose = true;
            try {
              lanSocket.close();
            } catch (error) {
              console.warn("Failed to close LAN socket after initial connect error:", error);
            }
            lanSocket = null;
          }

          resetLanSessionState({ preserveStatus: true });
          setLanMultiplayerStatus(`Multiplayer networking error.\n${errorMessage}`);
          break;
        }

        if (errorCode === "host_reconnecting" && lanSessionIntent) {
          setLanMultiplayerStatus(
            `${lanSessionIntent.isLocalServer ? "LAN session paused." : "Shared session paused."}\n${errorMessage}`
          );
          showStatusMessage(errorMessage, 1800);
          break;
        }

        setLanMultiplayerStatus(`Multiplayer networking error.\n${errorMessage}`);
        showStatusMessage(errorMessage, 1800);
        break;
      }

      default:
        break;
    }
  }

  async function connectToLanServer({ sessionIntent, isReconnect = false }) {
    const socketUrl = buildLanSocketUrl(sessionIntent?.endpoint || sessionIntent?.hostInput);
    if (!socketUrl) {
      throw new Error("Invalid multiplayer server address.");
    }

    lanConnectionStatus = isReconnect ? "reconnecting" : "connecting";

    return await new Promise((resolve, reject) => {
      if (!isReconnect) {
        pendingLanConnectionResolve = resolve;
        pendingLanConnectionReject = reject;
      }

      const socket = new WebSocket(socketUrl);
      socket.__connectResolve = isReconnect ? resolve : null;
      socket.__connectReject = isReconnect ? reject : null;
      lanSocket = socket;

      socket.addEventListener("open", () => {
        if (lanSocket !== socket) {
          return;
        }

        recordLanServerPacket();
        sendSocketMessage(socket, {
          type: sessionIntent.role === "host" ? "host_session" : "join_session",
          name: playerName,
          mapId: getActiveSessionMapId(),
          build: DIAG_BUILD_TAG,
          resume: Boolean(isReconnect || sessionIntent.playerId),
          resumeToken: sessionIntent.sessionToken,
          playerId: sessionIntent.playerId || ""
        });
      });

      socket.addEventListener("message", (event) => {
        if (lanSocket !== socket) {
          return;
        }

        recordLanServerPacket();
        Promise.resolve(handleNetworkMessage(event.data)).catch((error) => {
          console.error("Failed to handle network message:", error);
        });
      });

      socket.addEventListener("error", () => {
        if (lanSocket !== socket) {
          return;
        }

        socket.__networkError = true;
      });

      socket.addEventListener("close", (event) => {
        if (lanSocket !== socket) {
          return;
        }

        lanSocket = null;
        stopLanHeartbeat();

        if (socket.__intentionalClose) {
          socket.__connectResolve?.(null);
          socket.__connectResolve = null;
          socket.__connectReject = null;
          return;
        }

        const closeMessage = event.reason ||
          (socket.__heartbeatTimeout
            ? "Server heartbeat timed out."
            : socket.__networkError
              ? "Unable to reach the multiplayer WebSocket server."
              : "Multiplayer connection closed.");

        socket.__connectReject?.(new Error(closeMessage));
        socket.__connectResolve = null;
        socket.__connectReject = null;

        if (sessionIntent?.established) {
          scheduleLanReconnect(closeMessage);
          return;
        }

        resetLanSessionState({ preserveStatus: true });
        lanConnectionStatus = "closed";
        finishPendingLanConnection({
          error: new Error(closeMessage)
        });
      });
    });
  }

  async function createLANHost() {
    commitPlayerIdentitySettings();
    setLanJoinPanelOpen(false);

    const manualServerInput = String(lanHostIpInput.value ?? "").trim();
    const serverInput = manualServerInput || resolveDefaultHostedMultiplayerEndpoint();
    const endpoint = parseLanServerEndpoint(serverInput);
    const endpointDisplayText = getMultiplayerEndpointDisplayText(endpoint);
    const isLocalServer = isLocalMultiplayerHost(endpoint.host);

    if (!endpoint.host) {
      setLanJoinPanelOpen(true);
      setLanMultiplayerStatus("Enter a local or remote multiplayer server address.");
      showStatusMessage("Enter a multiplayer server address.", 1600);
      lanHostIpInput.focus({ preventScroll: true });
      return null;
    }

    disconnectLanSession({
      preserveStatus: true,
      preserveSessionIntent: false,
      sendLeave: true
    });

    lanSessionIntent = createLanSessionIntent({
      role: "host",
      hostInput: serverInput,
      endpoint,
      serverAddress: endpointDisplayText,
      isLocalServer
    });

    if (!isLocalServer) {
      setLanMultiplayerStatus(`Hosting Shared Server Session...\nServer: ${endpointDisplayText}`);
    } else {
      setLanMultiplayerStatus("Hosting LAN Game...\nPreparing local server connection...");
    }

    try {
      let hostIp = "";
      let hostPort = endpoint.port || resolveLanGamePort();

      await connectToLanServer({
        sessionIntent: lanSessionIntent,
        isReconnect: false
      });

      if (!isLocalServer) {
        if (lanSessionIntent) {
          lanSessionIntent.connectedDisplayText = endpointDisplayText;
        }
        setLanMultiplayerStatus(buildLanConnectedStatusText(lanSessionIntent));
        showStatusMessage(`Hosted session active on ${endpointDisplayText}.`, 1800);
      } else {
        hostIp = await resolveLocalLanIpAddress();
        const hostAddress = `${hostIp}:${hostPort}`;
        if (lanSessionIntent) {
          lanSessionIntent.connectedDisplayText = hostAddress;
        }
        setLanMultiplayerStatus(buildLanConnectedStatusText(lanSessionIntent));
        showStatusMessage(`LAN host active on ${hostAddress}.`, 1800);
      }

      return {
        ip: hostIp || endpoint.host,
        port: hostPort
      };
    } catch (error) {
      lanConnectionStatus = "error";
      if (!isLocalServer) {
        setLanMultiplayerStatus(
          `Hosting Shared Server Session...\nUnable to reach ${endpointDisplayText}.\nCheck that the remote multiplayer relay is online and reachable.`
        );
      } else {
        const localPreviewAddress = `${await resolveLocalLanIpAddress()}:${endpoint.port || resolveLanGamePort()}`;
        setLanMultiplayerStatus(
          `Hosting LAN Game...\nUnable to reach ${localPreviewAddress}.\nRun npm run start:lan on this PC and try again.`
        );
      }
      throw error;
    }
  }

  async function joinLANGame(ip) {
    commitPlayerIdentitySettings();

    const endpoint = parseLanServerEndpoint(ip);
    const normalizedIp = endpoint.host;
    const serverAddress = getMultiplayerEndpointDisplayText(endpoint);
    const isLocalServer = isLocalMultiplayerHost(normalizedIp);

    if (!normalizedIp) {
      setLanJoinPanelOpen(true);
      setLanMultiplayerStatus("Enter a LAN IP, server address, or secure relay URL to connect.");
      showStatusMessage("Enter a multiplayer server address.", 1600);
      lanHostIpInput.focus({ preventScroll: true });
      return null;
    }

    disconnectLanSession({
      preserveStatus: true,
      preserveSessionIntent: false,
      sendLeave: true
    });

    lanHostIpInput.value = String(ip ?? "").trim();
    lanSessionIntent = createLanSessionIntent({
      role: "client",
      hostInput: lanHostIpInput.value,
      endpoint,
      serverAddress,
      isLocalServer
    });

    setLanMultiplayerStatus(
      `${isLocalServer ? "Connecting to LAN Game..." : "Connecting to Shared Server..."}\nServer: ${serverAddress}`
    );

    try {
      await connectToLanServer({
        sessionIntent: lanSessionIntent,
        isReconnect: false
      });
      setLanJoinPanelOpen(false);
      if (lanSessionIntent) {
        lanSessionIntent.connectedDisplayText = serverAddress;
      }
      setLanMultiplayerStatus(buildLanConnectedStatusText(lanSessionIntent));
      showStatusMessage(
        `${isLocalServer ? "Connected to LAN server" : "Connected to shared server"} ${serverAddress}.`,
        1800
      );
    } catch (error) {
      lanConnectionStatus = "error";
      setLanJoinPanelOpen(true);
      if (String(error?.message || "") === hostSessionMapLoadErrorMessage) {
        setLanMultiplayerStatus(`Joining Shared Session...\n${hostSessionMapLoadErrorMessage}`);
      } else {
        setLanMultiplayerStatus(
          `${isLocalServer ? "Connecting to LAN Game..." : "Connecting to Shared Server..."}\nUnable to reach ${serverAddress}.\n${isLocalServer
            ? "Make sure npm run start:lan is running on the host PC."
            : "Make sure the hosted multiplayer relay is online and publicly reachable."
          }`
        );
      }
      return null;
    }

    return {
      ip: normalizedIp,
      port: endpoint.port
    };
  }

  function getActiveCameraSettings() {
    return cameraMode === "firstPerson"
      ? firstPersonCameraSettings
      : thirdPersonCameraSettings;
  }

  function startAdsAiming(source = "unknown") {
    const scopeModeEnabled = aimingSettings.scopeMode;
    const zoomEnabled = aimingSettings.zoomInWhileAiming;

    if (isAimAdsActive || isScopeAimingActive) {
      return;
    }

    if (scopeModeEnabled) {
      startScopeAiming(source);
      return;
    }

    if (!zoomEnabled) {
      setScopeDebugStatus("both modes off");
      return;
    }

    if (cameraMode === "firstPerson") {
      setScopeDebugStatus("zoom blocked by first person");
      return;
    }

    const gameplayActive = isDesktopPointerLockCameraModeActive() ? pointerLocked : true;
    if (!gameplayActive) {
      setScopeDebugStatus("zoom blocked: gameplay not active");
      return;
    }

    const settingsOpen = settingsMenuOpen || homeSettingsViewOpen;
    if (settingsOpen) {
      return;
    }

    preAimAdsCameraState = {
      distance: thirdPersonCameraSettings.distance,
      offsetX: thirdPersonCameraSettings.offsetX,
      offsetY: thirdPersonCameraSettings.offsetY,
      offsetZ: thirdPersonCameraSettings.offsetZ
    };
    isAimAdsActive = true;

    setScopeDebugStatus("zoom started");

    const applyOpts = { persist: false, syncInputs: true };
    applyCameraCustomizationSetting("distance", 4.4, applyOpts);
    applyCameraCustomizationSetting("offsetX", 0.80, applyOpts);
    applyCameraCustomizationSetting("offsetY", 0.80, applyOpts);
    applyCameraCustomizationSetting("offsetZ", 3.00, applyOpts);
  }

  function stopAdsAiming(source = "unknown") {
    if (isScopeAimingActive) {
      stopScopeAiming(source);
      return;
    }

    if (!isAimAdsActive) return;

    isAimAdsActive = false;

    console.log("[AIM SIMPLE] up: restoring old camera", preAimAdsCameraState);

    if (preAimAdsCameraState) {
      const applyOpts = { persist: false, syncInputs: true };
      applyCameraCustomizationSetting("distance", preAimAdsCameraState.distance, applyOpts);
      applyCameraCustomizationSetting("offsetX", preAimAdsCameraState.offsetX, applyOpts);
      applyCameraCustomizationSetting("offsetY", preAimAdsCameraState.offsetY, applyOpts);
      applyCameraCustomizationSetting("offsetZ", preAimAdsCameraState.offsetZ, applyOpts);
    }

    preAimAdsCameraState = null;
  }

  function startScopeAiming(source = "unknown") {
    const gameplayActive = isDesktopPointerLockCameraModeActive() ? pointerLocked : true;
    const homeOpen = isHomeActuallyOpen();
    const settingsOpen = settingsMenuOpen || homeSettingsViewOpen;

    if (isScopeAimingActive) {
      return;
    }

    if (settingsOpen) return;
    if (homeOpen) return;
    if (!gameplayActive) return;

    console.log("[SCOPE PATH] overlay element", scopeModeOverlay);
    if (!scopeModeOverlay) return;

    scopeAimStartedFromThirdPerson = (cameraMode === "thirdPerson");

    if (scopeAimStartedFromThirdPerson) {
      setCameraMode("firstPerson", { persist: false, syncInputs: true });
    }

    if (scopeModeOverlay) {
      scopeModeOverlay.hidden = false;
      scopeModeOverlay.style.display = "grid";
      scopeModeOverlay.classList.add("active");

      // Temporarily hide crosshair
      const rootStyle = getComputedStyle(document.documentElement);
      const currentOpacity = rootStyle.getPropertyValue("--crosshair-opacity").trim();
      // Only store if we haven't already (to avoid storing 0 if somehow called twice)
      if (preScopeCrosshairOpacity === null) {
        preScopeCrosshairOpacity = currentOpacity || "1";
      }
      document.documentElement.style.setProperty("--crosshair-opacity", "0");
    }

    isScopeAimingActive = true;
    console.log("[SCOPE MODE] started", { source, startedFromThirdPerson: scopeAimStartedFromThirdPerson });
  }

  function stopScopeAiming(source = "unknown") {
    if (!isScopeAimingActive) return;

    if (scopeModeOverlay) {
      scopeModeOverlay.hidden = true;
      scopeModeOverlay.style.display = "none";
      scopeModeOverlay.classList.remove("active");
      console.log("[SCOPE MODE] overlay hidden");
    }

    if (scopeAimStartedFromThirdPerson) {
      setCameraMode("thirdPerson", { persist: false, syncInputs: true });
    }

    isScopeAimingActive = false;
    scopeAimStartedFromThirdPerson = false;

    // Restore crosshair
    if (preScopeCrosshairOpacity !== null) {
      const restoreOpacity = parseFloat(preScopeCrosshairOpacity) > 0 ? preScopeCrosshairOpacity : "1";
      document.documentElement.style.setProperty("--crosshair-opacity", restoreOpacity);
      preScopeCrosshairOpacity = null;
    }
  }

  function resetFirstPersonCameraSettings() {
    firstPersonCameraSettings.distance = defaultFirstPersonCameraSettings.distance;
    firstPersonCameraSettings.offsetX = defaultFirstPersonCameraSettings.offsetX;
    firstPersonCameraSettings.offsetY = defaultFirstPersonCameraSettings.offsetY;
    firstPersonCameraSettings.offsetZ = defaultFirstPersonCameraSettings.offsetZ;
  }

  function persistCameraCustomizationSettings() {
    localStorage.setItem(
      thirdPersonCameraSettingsStorageKey,
      JSON.stringify(thirdPersonCameraSettings)
    );
    localStorage.setItem(
      firstPersonCameraSettingsStorageKey,
      JSON.stringify(firstPersonCameraSettings)
    );
    localStorage.setItem(gameCameraModeStorageKey, cameraMode);
  }

  function clampGraphicsRenderScalePercent(value) {
    const parsedValue = Number(value);
    return THREE.MathUtils.clamp(
      Number.isFinite(parsedValue) ? Math.round(parsedValue) : graphicsSettings.renderScalePercent,
      1,
      100
    );
  }

  function clampGraphicsPixelRatio(value) {
    const parsedValue = Number(value);
    const normalizedValue = Number.isFinite(parsedValue)
      ? Math.round(parsedValue * 10) / 10
      : graphicsSettings.pixelRatio;
    return THREE.MathUtils.clamp(normalizedValue, 0.3, 2.0);
  }

  function clampGraphicsRenderDistance(value) {
    const parsedValue = Number(value);
    const normalizedValue = Number.isFinite(parsedValue)
      ? Math.round(parsedValue / 10) * 10
      : graphicsSettings.renderDistance;
    return THREE.MathUtils.clamp(normalizedValue, 50, 1000);
  }

  function normalizeGraphicsShadowQuality(value, fallback = graphicsSettings.shadowQuality) {
    return Object.prototype.hasOwnProperty.call(graphicsShadowQualityMapSizes, value)
      ? value
      : fallback;
  }

  function normalizeGraphicsEffectQuality(value, fallback = graphicsSettings.effectQuality) {
    return Object.prototype.hasOwnProperty.call(graphicsEffectQualityRanks, value)
      ? value
      : fallback;
  }

  function clampAdvancedGraphicsNumber(value, fallback, min, max, decimals = 2) {
    const parsedValue = Number(value);
    const normalizedValue = Number.isFinite(parsedValue) ? parsedValue : fallback;
    const multiplier = 10 ** decimals;
    return THREE.MathUtils.clamp(
      Math.round(normalizedValue * multiplier) / multiplier,
      min,
      max
    );
  }

  function normalizeAdvancedGraphicsChoice(value, choices, fallback) {
    return choices.includes(value) ? value : fallback;
  }

  function normalizeAdvancedGraphicsSettings(nextSettings = {}, fallback = graphicsSettings.advancedGraphics || advancedGraphicsDefaults) {
    const base = {
      ...advancedGraphicsDefaults,
      ...(fallback || {})
    };

    return {
      colorStyle: normalizeAdvancedGraphicsChoice(
        nextSettings.colorStyle ?? base.colorStyle,
        Object.keys(advancedGraphicsColorStylePresets),
        base.colorStyle
      ),
      exposure: clampAdvancedGraphicsNumber(nextSettings.exposure ?? base.exposure, base.exposure, 0.6, 1.6, 2),
      contrast: clampAdvancedGraphicsNumber(nextSettings.contrast ?? base.contrast, base.contrast, 0.75, 1.35, 2),
      saturation: clampAdvancedGraphicsNumber(nextSettings.saturation ?? base.saturation, base.saturation, 0.6, 1.5, 2),
      fogEnabled: typeof nextSettings.fogEnabled === "boolean" ? nextSettings.fogEnabled : Boolean(base.fogEnabled),
      fogStrength: clampAdvancedGraphicsNumber(nextSettings.fogStrength ?? base.fogStrength, base.fogStrength, 0, 1, 2),
      fogDistance: clampAdvancedGraphicsNumber(nextSettings.fogDistance ?? base.fogDistance, base.fogDistance, 30, 250, 0),
      bloomEnabled: typeof nextSettings.bloomEnabled === "boolean" ? nextSettings.bloomEnabled : Boolean(base.bloomEnabled),
      bloomStrength: clampAdvancedGraphicsNumber(nextSettings.bloomStrength ?? base.bloomStrength, base.bloomStrength, 0, 1.5, 2),
      ambientOcclusionEnabled: typeof nextSettings.ambientOcclusionEnabled === "boolean"
        ? nextSettings.ambientOcclusionEnabled
        : Boolean(base.ambientOcclusionEnabled),
      aoStrength: clampAdvancedGraphicsNumber(nextSettings.aoStrength ?? base.aoStrength, base.aoStrength, 0, 1, 2),
      antiAliasing: normalizeAdvancedGraphicsChoice(
        nextSettings.antiAliasing ?? base.antiAliasing,
        ["Off", "FXAA", "High"],
        base.antiAliasing
      ),
      materialQuality: normalizeAdvancedGraphicsChoice(
        nextSettings.materialQuality ?? base.materialQuality,
        ["Low", "Medium", "High"],
        base.materialQuality
      ),
      dynamicLights: normalizeAdvancedGraphicsChoice(
        nextSettings.dynamicLights ?? base.dynamicLights,
        ["Off", "Low", "High"],
        base.dynamicLights
      ),
      motionBlur: normalizeAdvancedGraphicsChoice(
        "Off",
        ["Off", "Low", "Medium"],
        "Off"
      ),
      motionBlurStrength: clampAdvancedGraphicsNumber(
        0,
        0,
        0,
        100,
        0
      )
    };
  }

  function getDefaultGraphicsSettingsForDeviceMode(mode = startupDeviceMode.quality) {
    const normalizedMode = mode === "phone" || mode === "mobile"
      ? "mobile"
      : "desktop";
    return {
      ...graphicsDefaultsByMode[normalizedMode],
      advancedGraphics: { ...advancedGraphicsDefaults }
    };
  }

  function normalizeGraphicsSettings(nextSettings = {}, fallback = graphicsSettings) {
    const fallbackAdvancedGraphics = fallback.advancedGraphics || advancedGraphicsDefaults;
    return {
      renderScalePercent: clampGraphicsRenderScalePercent(
        nextSettings.renderScalePercent ?? fallback.renderScalePercent
      ),
      pixelRatio: clampGraphicsPixelRatio(
        nextSettings.pixelRatio ?? fallback.pixelRatio
      ),
      shadowsEnabled: typeof nextSettings.shadowsEnabled === "boolean"
        ? nextSettings.shadowsEnabled
        : Boolean(fallback.shadowsEnabled),
      shadowQuality: normalizeGraphicsShadowQuality(
        nextSettings.shadowQuality ?? fallback.shadowQuality,
        fallback.shadowQuality
      ),
      renderDistance: clampGraphicsRenderDistance(
        nextSettings.renderDistance ?? fallback.renderDistance
      ),
      effectQuality: normalizeGraphicsEffectQuality(
        nextSettings.effectQuality ?? fallback.effectQuality,
        fallback.effectQuality
      ),
      advancedGraphics: normalizeAdvancedGraphicsSettings(
        nextSettings.advancedGraphics ?? fallbackAdvancedGraphics,
        fallbackAdvancedGraphics
      )
    };
  }

  function getGraphicsSettingsSnapshot(settings = graphicsSettings) {
    return {
      renderScalePercent: settings.renderScalePercent,
      pixelRatio: Number(settings.pixelRatio.toFixed(1)),
      shadowsEnabled: settings.shadowsEnabled,
      shadowQuality: settings.shadowQuality,
      renderDistance: settings.renderDistance,
      effectQuality: settings.effectQuality,
      advancedGraphics: {
        ...advancedGraphicsDefaults,
        ...(settings.advancedGraphics || {})
      }
    };
  }

  function getGraphicsEffectQualityRank(quality = graphicsSettings.effectQuality) {
    return graphicsEffectQualityRanks[quality] ?? graphicsEffectQualityRanks.low;
  }

  function getCurrentEffectQualityProfile() {
    switch (graphicsSettings.effectQuality) {
      case "ultra":
        return {
          muzzleFlashScale: 1.15,
          muzzleFlashDurationMs: 70,
          impactMarkLifetimeMs: 20000,
          maxImpactMarks: 80
        };
      case "medium":
        return {
          muzzleFlashScale: 1.0,
          muzzleFlashDurationMs: 60,
          impactMarkLifetimeMs: 14000,
          maxImpactMarks: 80
        };
      case "low":
        return {
          muzzleFlashScale: 0.82,
          muzzleFlashDurationMs: 48,
          impactMarkLifetimeMs: 8000,
          maxImpactMarks: 80
        };
      case "ultraLow":
      default:
        return {
          muzzleFlashScale: 0.66,
          muzzleFlashDurationMs: 36,
          impactMarkLifetimeMs: 4500,
          maxImpactMarks: 80
        };
    }
  }

  function markWorldSurfaceForBulletImpacts(object, acceptsBulletDecals = true) {
    if (!object?.userData) {
      return object;
    }

    object.userData.isWorldSurface = true;
    object.userData.acceptsBulletDecals = acceptsBulletDecals !== false;
    return object;
  }

  function registerBulletImpactTarget(object, acceptsBulletDecals = true) {
    if (!object) {
      return;
    }

    markWorldSurfaceForBulletImpacts(object, acceptsBulletDecals);
    if (object.userData.acceptsBulletDecals !== true) {
      return;
    }

    bulletImpactTargets.push(object);
  }

  function getSharedMuzzleFlashMaterial(color = 0xffc247) {
    const normalizedColor = Number(color) >>> 0;
    let material = sharedMuzzleFlashMaterials.get(normalizedColor);
    if (!material) {
      material = new THREE.MeshBasicMaterial({ color: normalizedColor });
      sharedMuzzleFlashMaterials.set(normalizedColor, material);
    }
    return material;
  }

  function isFullscreenSupported() {
    return typeof document.documentElement.requestFullscreen === "function" &&
      typeof document.exitFullscreen === "function";
  }

  function isFullscreenActive() {
    return Boolean(document.fullscreenElement);
  }

  function syncFullscreenButtons() {
    const nextLabel = isFullscreenActive() ? "Exit Fullscreen" : "Fullscreen";
    homeFullscreenButton.textContent = nextLabel;
    settingsFullscreenButton.textContent = nextLabel;
    homeFullscreenButton.setAttribute("aria-pressed", String(isFullscreenActive()));
    settingsFullscreenButton.setAttribute("aria-pressed", String(isFullscreenActive()));
  }

  function handleResize({ reason = "resize", emitLog = false } = {}) {
    const viewportWidth = Math.max(window.innerWidth, 1);
    const viewportHeight = Math.max(window.innerHeight, 1);

    canvas.style.width = `${viewportWidth}px`;
    canvas.style.height = `${viewportHeight}px`;

    camera.aspect = viewportWidth / viewportHeight;
    camera.updateProjectionMatrix();
    applyGraphicsSettingsRuntime({ reason, emitLog });
    if (settingsMenu.classList.contains("camera-preview-panel")) {
      dockCameraPreviewPanel();
    }
    scheduleMobileHudReflow(reason);
    syncFullscreenButtons();
    updateMobileInputDiagnosticsOverlay();
  }

  async function toggleFullscreenMode() {
    if (!isFullscreenSupported()) {
      console.warn("[Fullscreen] Fullscreen API is not supported in this browser.");
      return false;
    }

    try {
      if (isFullscreenActive()) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
        handleResize({
          reason: "fullscreen-enter-immediate",
          emitLog: false
        });
        window.setTimeout(() => {
          handleResize({
            reason: "fullscreen-enter-delayed",
            emitLog: false
          });
        }, 120);
      }
      if (!isFullscreenActive()) {
        handleResize({
          reason: "fullscreen-exit-immediate",
          emitLog: false
        });
      }
      return true;
    } catch (error) {
      console.warn("[Fullscreen] Failed to toggle fullscreen:", error);
      return false;
    }
  }

  function registerEffectQualityObject(object, { minimumQuality = "low" } = {}) {
    if (!object) {
      return object;
    }

    object.userData.minimumEffectQuality = minimumQuality;
    effectQualityControlledObjects.push(object);
    return object;
  }

  function syncGraphicsSettingsInputs() {
    graphicsRenderScaleInput.value = String(graphicsSettings.renderScalePercent);
    graphicsRenderScaleValue.textContent = `${graphicsSettings.renderScalePercent}%`;
    graphicsPixelRatioInput.value = graphicsSettings.pixelRatio.toFixed(1);
    graphicsPixelRatioValue.textContent = `${graphicsSettings.pixelRatio.toFixed(1)}x`;
    graphicsShadowsToggle.checked = graphicsSettings.shadowsEnabled;
    graphicsShadowQualitySelect.value = graphicsSettings.shadowQuality;
    graphicsShadowQualitySelect.disabled = !graphicsSettings.shadowsEnabled;
    graphicsShadowQualityField.classList.toggle("is-disabled", !graphicsSettings.shadowsEnabled);
    graphicsRenderDistanceInput.value = String(graphicsSettings.renderDistance);
    graphicsRenderDistanceValue.textContent = String(graphicsSettings.renderDistance);
    graphicsEffectQualitySelect.value = graphicsSettings.effectQuality;
    syncAdvancedGraphicsSettingsInputs();
  }

  function syncAdvancedGraphicsSettingsInputs() {
    const advancedGraphics = graphicsSettings.advancedGraphics || advancedGraphicsDefaults;
    advancedColorStyleSelect.value = advancedGraphics.colorStyle;
    advancedExposureInput.value = advancedGraphics.exposure.toFixed(2);
    advancedExposureValue.textContent = advancedGraphics.exposure.toFixed(2);
    advancedContrastInput.value = advancedGraphics.contrast.toFixed(2);
    advancedContrastValue.textContent = advancedGraphics.contrast.toFixed(2);
    advancedSaturationInput.value = advancedGraphics.saturation.toFixed(2);
    advancedSaturationValue.textContent = advancedGraphics.saturation.toFixed(2);
    advancedFogToggle.checked = advancedGraphics.fogEnabled;
    advancedFogStrengthInput.value = advancedGraphics.fogStrength.toFixed(2);
    advancedFogStrengthValue.textContent = advancedGraphics.fogStrength.toFixed(2);
    advancedFogDistanceInput.value = String(Math.round(advancedGraphics.fogDistance));
    advancedFogDistanceValue.textContent = String(Math.round(advancedGraphics.fogDistance));
    advancedBloomToggle.checked = advancedGraphics.bloomEnabled;
    advancedBloomStrengthInput.value = advancedGraphics.bloomStrength.toFixed(2);
    advancedBloomStrengthValue.textContent = advancedGraphics.bloomStrength.toFixed(2);
    advancedAoToggle.checked = advancedGraphics.ambientOcclusionEnabled;
    advancedAoStrengthInput.value = advancedGraphics.aoStrength.toFixed(2);
    advancedAoStrengthValue.textContent = advancedGraphics.aoStrength.toFixed(2);
    advancedAntialiasingSelect.value = advancedGraphics.antiAliasing;
    advancedMaterialQualitySelect.value = advancedGraphics.materialQuality;
    advancedDynamicLightsSelect.value = advancedGraphics.dynamicLights;
    advancedMotionBlurSelect.value = advancedGraphics.motionBlur;
    advancedMotionBlurStrengthInput.value = String(Math.round(advancedGraphics.motionBlurStrength));
    advancedMotionBlurStrengthValue.textContent = String(Math.round(advancedGraphics.motionBlurStrength));

    // Force hide Motion Blur options safely
    if (advancedMotionBlurSelect.parentElement) advancedMotionBlurSelect.parentElement.hidden = true;
    if (advancedMotionBlurStrengthInput.parentElement) advancedMotionBlurStrengthInput.parentElement.hidden = true;
  }

  function applyRendererOutputSettings() {
    const renderScaleMultiplier = graphicsSettings.renderScalePercent / 100;
    const viewportWidth = Math.max(window.innerWidth, 1);
    const viewportHeight = Math.max(window.innerHeight, 1);
    const effectivePixelRatio = Math.max(
      0.01,
      graphicsSettings.pixelRatio * renderScaleMultiplier
    );
    renderer.setPixelRatio(effectivePixelRatio);
    renderer.setSize(
      viewportWidth,
      viewportHeight,
      false
    );
    canvas.style.width = `${viewportWidth}px`;
    canvas.style.height = `${viewportHeight}px`;
  }

  function applyGraphicsShadowSettings() {
    const shadowMapSize = graphicsShadowQualityMapSizes[graphicsSettings.shadowQuality] || 2048;
    renderer.shadowMap.enabled = graphicsSettings.shadowsEnabled;

    scene.traverse((object) => {
      if (!object?.isLight || !object.shadow) {
        return;
      }

      if (object.userData.graphicsOriginalCastShadow === undefined) {
        object.userData.graphicsOriginalCastShadow = Boolean(object.castShadow);
      }

      const shouldCastShadow =
        Boolean(object.userData.graphicsOriginalCastShadow) &&
        graphicsSettings.shadowsEnabled;
      object.castShadow = shouldCastShadow;

      if (!shouldCastShadow) {
        return;
      }

      if (
        object.shadow.mapSize.x !== shadowMapSize ||
        object.shadow.mapSize.y !== shadowMapSize
      ) {
        object.shadow.mapSize.set(shadowMapSize, shadowMapSize);
        if (object.shadow.map) {
          object.shadow.map.dispose();
          object.shadow.map = null;
        }
      }

      object.shadow.needsUpdate = true;
    });

    renderer.shadowMap.needsUpdate = true;
  }

  function applyGraphicsRenderDistanceSettings() {
    camera.far = graphicsSettings.renderDistance;
    camera.updateProjectionMatrix();

    if (scene.fog && activeLightingProfile) {
      const effectiveFogFar = Math.max(activeLightingProfile.fogNear + 10, graphicsSettings.renderDistance);
      scene.fog.near = Math.min(
        activeLightingProfile.fogNear,
        Math.max(5, effectiveFogFar * 0.35)
      );
      scene.fog.far = effectiveFogFar;
    }

    proceduralCityChunkState.visibilityDistance = graphicsSettings.renderDistance;
    proceduralCityChunkState.nearKeepDistance = Math.min(
      Math.max(30, Math.round(graphicsSettings.renderDistance * 0.55)),
      Math.max(30, graphicsSettings.renderDistance - 20)
    );
    updateProceduralCityChunkVisibility();
  }

  function applyGraphicsEffectQualitySettings() {
    const currentRank = getGraphicsEffectQualityRank();

    for (const object of effectQualityControlledObjects) {
      if (!object) {
        continue;
      }

      const minimumRank = getGraphicsEffectQualityRank(
        object.userData.minimumEffectQuality || "low"
      );
      object.visible = currentRank >= minimumRank;
    }
  }

  function applyAdvancedGraphicsCanvasFilter(advancedGraphics) {
    renderer.toneMappingExposure = advancedGraphics.exposure;
    // Keep only safe filters: contrast and saturate. Do NOT use blur here.
    renderer.domElement.style.filter = [
      `contrast(${advancedGraphics.contrast})`,
      `saturate(${advancedGraphics.saturation})`
    ].join(" ");
  }

  function restoreBaseSceneFogForAdvancedGraphics() {
    if (activeLightingProfile) {
      const effectiveFogFar = Math.max(activeLightingProfile.fogNear + 10, graphicsSettings.renderDistance);
      scene.fog = new THREE.Fog(
        activeLightingProfile.fogColor,
        Math.min(activeLightingProfile.fogNear, Math.max(5, effectiveFogFar * 0.35)),
        effectiveFogFar
      );
      return;
    }

    if (scene.fog?.isAdvancedVisualsFog) {
      scene.fog = null;
    }
  }

  function applyAdvancedGraphicsFog(advancedGraphics) {
    if (!advancedGraphics.fogEnabled) {
      restoreBaseSceneFogForAdvancedGraphics();
      return;
    }

    const fogFar = THREE.MathUtils.clamp(advancedGraphics.fogDistance, 30, graphicsSettings.renderDistance);
    const fogNearRatio = THREE.MathUtils.lerp(0.82, 0.18, advancedGraphics.fogStrength);
    const fogNear = THREE.MathUtils.clamp(fogFar * fogNearRatio, 2, Math.max(3, fogFar - 5));
    const backgroundColor = scene.background?.isColor ? scene.background : new THREE.Color(0xaeb8bd);
    const fogColor = backgroundColor.clone().lerp(new THREE.Color(0xaeb8bd), 0.45);
    scene.fog = new THREE.Fog(fogColor, fogNear, fogFar);
    scene.fog.isAdvancedVisualsFog = true;
  }

  function getMaterialList(material) {
    if (!material) {
      return [];
    }
    return Array.isArray(material) ? material.filter(Boolean) : [material];
  }

  function cacheAdvancedGraphicsMaterialDefaults(material) {
    if (!material?.userData) {
      return null;
    }

    if (!material.userData.advancedGraphicsOriginalMaterial) {
      material.userData.advancedGraphicsOriginalMaterial = {
        roughness: typeof material.roughness === "number" ? material.roughness : null,
        metalness: typeof material.metalness === "number" ? material.metalness : null,
        envMapIntensity: typeof material.envMapIntensity === "number" ? material.envMapIntensity : null,
        normalScale: material.normalScale?.clone?.() || null
      };
    }

    return material.userData.advancedGraphicsOriginalMaterial;
  }

  function applyAdvancedGraphicsMaterialQuality(advancedGraphics) {
    const materialQuality = advancedGraphics.materialQuality;

    mapGroup.traverse((object) => {
      if (!object?.isMesh) {
        return;
      }

      for (const material of getMaterialList(object.material)) {
        const original = cacheAdvancedGraphicsMaterialDefaults(material);
        if (!original) {
          continue;
        }

        if (typeof material.roughness === "number" && original.roughness !== null) {
          if (materialQuality === "Low") {
            material.roughness = Math.min(1, Math.max(original.roughness, 0.9));
          } else if (materialQuality === "High") {
            material.roughness = THREE.MathUtils.clamp(original.roughness * 0.85, 0.25, 1);
          } else {
            material.roughness = original.roughness;
          }
        }

        if (typeof material.metalness === "number" && original.metalness !== null) {
          material.metalness = materialQuality === "Low"
            ? Math.min(original.metalness, 0.12)
            : original.metalness;
        }

        if (typeof material.envMapIntensity === "number" && original.envMapIntensity !== null) {
          if (materialQuality === "Low") {
            material.envMapIntensity = Math.min(original.envMapIntensity, 0.65);
          } else if (materialQuality === "High") {
            material.envMapIntensity = Math.max(original.envMapIntensity, 1.05);
          } else {
            material.envMapIntensity = original.envMapIntensity;
          }
        }

        if (material.normalScale && original.normalScale) {
          material.normalScale.copy(original.normalScale);
          if (materialQuality === "Low") {
            material.normalScale.multiplyScalar(0.65);
          }
        }

        material.needsUpdate = true;
      }
    });
  }

  function clearAdvancedGraphicsDynamicLights() {
    for (const light of [...advancedGraphicsDynamicLightsGroup.children]) {
      advancedGraphicsDynamicLightsGroup.remove(light);
      light.dispose?.();
    }
  }

  function applyAdvancedGraphicsDynamicLights(advancedGraphics) {
    clearAdvancedGraphicsDynamicLights();

    if (advancedGraphics.dynamicLights === "Off") {
      return;
    }

    const fill = new THREE.HemisphereLight(
      advancedGraphics.dynamicLights === "High" ? 0xd8e6ff : 0xcad8ee,
      advancedGraphics.dynamicLights === "High" ? 0xb9aa92 : 0xa99c88,
      advancedGraphics.dynamicLights === "High" ? 0.34 : 0.18
    );
    fill.name = "advanced-graphics-hemisphere-fill";
    advancedGraphicsDynamicLightsGroup.add(fill);

    const sideFill = new THREE.DirectionalLight(0xd8e8ff, advancedGraphics.dynamicLights === "High" ? 0.22 : 0.11);
    sideFill.name = "advanced-graphics-side-fill";
    sideFill.position.set(-16, 14, 10);
    sideFill.castShadow = false;
    advancedGraphicsDynamicLightsGroup.add(sideFill);

    if (advancedGraphics.dynamicLights === "High") {
      const rimFill = new THREE.DirectionalLight(0xfff1d7, 0.14);
      rimFill.name = "advanced-graphics-rim-fill";
      rimFill.position.set(18, 10, -12);
      rimFill.castShadow = false;
      advancedGraphicsDynamicLightsGroup.add(rimFill);
    }
  }

  function logAdvancedGraphicsOptionalUnavailable(effectName, message) {
    if (advancedGraphicsOptionalEffectLogs.has(effectName)) {
      return;
    }

    advancedGraphicsOptionalEffectLogs.add(effectName);
    console.log("[ADVANCED GRAPHICS] optional effect unavailable", effectName);
    if (message) {
      console.log(message);
    }
  }

  function getEffectiveMotionBlurStrength(advancedGraphics) {
    return 0;
  }

  function applyAdvancedGraphicsMotionBlur(advancedGraphics) {
    if (!motionBlurCleanupLogged) {
      console.log("[MOTION BLUR CLEANUP] hidden and disabled");
      motionBlurCleanupLogged = true;
    }

    // Force Motion Blur OFF internally
    // Disable any active motion blur passes or streak overlays here if they exist
    // Currently ensuring standard renderer is used without AfterimagePass
  }

  function applyAdvancedGraphicsOptionalEffects(advancedGraphics) {
    if (advancedGraphics.bloomEnabled) {
      logAdvancedGraphicsOptionalUnavailable(
        "Bloom",
        "[ADVANCED GRAPHICS] Bloom saved but postprocessing not available"
      );
    }

    if (advancedGraphics.ambientOcclusionEnabled) {
      logAdvancedGraphicsOptionalUnavailable(
        "Ambient Occlusion",
        "[ADVANCED GRAPHICS] AO saved but SSAO pipeline not available"
      );
    }

    if (advancedGraphics.antiAliasing !== "Off") {
      logAdvancedGraphicsOptionalUnavailable(
        "Anti-Aliasing",
        "[ADVANCED GRAPHICS] Anti-aliasing change will apply on reload"
      );
    }

    applyAdvancedGraphicsMotionBlur(advancedGraphics);
  }

  function applyAdvancedGraphicsSettingsRuntime({ reason = "manual", emitLog = true } = {}) {
    const advancedGraphics = graphicsSettings.advancedGraphics || advancedGraphicsDefaults;
    applyAdvancedGraphicsCanvasFilter(advancedGraphics);
    applyAdvancedGraphicsFog(advancedGraphics);
    applyAdvancedGraphicsMaterialQuality(advancedGraphics);
    applyAdvancedGraphicsDynamicLights(advancedGraphics);
    applyAdvancedGraphicsOptionalEffects(advancedGraphics);

    if (emitLog) {
      console.log("[ADVANCED GRAPHICS] applied live", {
        reason,
        ...advancedGraphics
      });
    }
  }

  function applyGraphicsSettingsRuntime({ reason = "manual", emitLog = true } = {}) {
    applyRendererOutputSettings();
    applyGraphicsShadowSettings();
    applyGraphicsRenderDistanceSettings();
    applyGraphicsEffectQualitySettings();
    applyAdvancedGraphicsSettingsRuntime({ reason, emitLog });

    if (emitLog) {
      console.log("graphics settings applied", {
        reason,
        settings: getGraphicsSettingsSnapshot()
      });
    }
  }

  function applyGraphicsSettings(nextSettings = {}, {
    persist = true,
    syncInputs = true,
    reason = "manual",
    emitLog = true
  } = {}) {
    graphicsSettings = normalizeGraphicsSettings(nextSettings);

    if (syncInputs) {
      syncGraphicsSettingsInputs();
    }

    if (persist) {
      graphicsSettingsLoadedFromStorage = true;
      localStorage.setItem(
        graphicsSettingsStorageKey,
        JSON.stringify(graphicsSettings)
      );
    }

    applyGraphicsSettingsRuntime({ reason, emitLog });
  }

  function applyGraphicsSettingChange(key, value) {
    console.log("graphics setting changed", {
      key,
      value
    });
    applyGraphicsSettings(
      { [key]: value },
      { reason: `change:${key}` }
    );
  }

  function applyAdvancedGraphicsSettingChange(key, value) {
    if (key === "motionBlur") {
      console.log("[ADVANCED GRAPHICS] motionBlur changed", value);
    } else if (key === "motionBlurStrength") {
      console.log("[ADVANCED GRAPHICS] motionBlurStrength changed", value);
    }

    console.log("[ADVANCED GRAPHICS] changed", key, value);
    applyGraphicsSettings(
      {
        advancedGraphics: {
          ...(graphicsSettings.advancedGraphics || advancedGraphicsDefaults),
          [key]: value
        }
      },
      { reason: `advanced-change:${key}` }
    );
  }

  function applyAdvancedGraphicsColorStyleChange(colorStyle) {
    const preset = advancedGraphicsColorStylePresets[colorStyle] || advancedGraphicsColorStylePresets.Default;
    console.log("[ADVANCED GRAPHICS] changed", "colorStyle", colorStyle);
    applyGraphicsSettings(
      {
        advancedGraphics: {
          ...(graphicsSettings.advancedGraphics || advancedGraphicsDefaults),
          colorStyle,
          ...preset
        }
      },
      { reason: "advanced-change:colorStyle" }
    );
  }

  function applyGraphicsDefaultsForDeviceModeIfNeeded(mode) {
    if (graphicsSettingsLoadedFromStorage) {
      syncGraphicsSettingsInputs();
      return;
    }

    const defaults = getDefaultGraphicsSettingsForDeviceMode(mode);
    console.log("graphics settings loaded", {
      source: `${mode === "phone" ? "phone" : "pc"}-defaults`,
      settings: getGraphicsSettingsSnapshot(defaults)
    });
    console.log("[ADVANCED GRAPHICS] loaded", defaults.advancedGraphics);
    applyGraphicsSettings(defaults, {
      persist: false,
      syncInputs: true,
      reason: `device-default:${mode === "phone" ? "phone" : "pc"}`
    });
  }

  function clampMobileCameraSensitivityPercent(value) {
    const parsedValue = Number(value);
    return THREE.MathUtils.clamp(
      Number.isFinite(parsedValue) ? Math.round(parsedValue) : mobileCameraSensitivityPercent,
      1,
      maxMobileCameraSensitivityPercent
    );
  }

  function getMobileCameraSensitivityMultiplier() {
    return mobileCameraSensitivityPercent / 100;
  }

  function syncMobileCameraSensitivityInput() {
    if (!mobileCameraSensitivityInput || !mobileCameraSensitivityValue) {
      return;
    }

    const roundedPercent = clampMobileCameraSensitivityPercent(mobileCameraSensitivityPercent);
    mobileCameraSensitivityInput.max = String(maxMobileCameraSensitivityPercent);
    mobileCameraSensitivityInput.value = String(roundedPercent);
    mobileCameraSensitivityValue.textContent = `${roundedPercent}%`;
  }

  function applyMobileCameraSensitivity(value, { persist = true, syncInput = true } = {}) {
    mobileCameraSensitivityPercent = clampMobileCameraSensitivityPercent(value);

    if (syncInput) {
      syncMobileCameraSensitivityInput();
    }

    if (persist) {
      localStorage.setItem(
        mobileCameraSensitivityStorageKey,
        String(mobileCameraSensitivityPercent)
      );
    }
  }

  function syncUiTransparencyInput() {
    if (!uiTransparencySlider || !uiTransparencyValue) {
      return;
    }

    uiTransparencySlider.value = uiTransparency.toFixed(2);
    uiTransparencyValue.textContent = `${Math.round(uiTransparency * 100)}%`;
  }

  function applyUiTransparency(value, { persist = true, syncInput = true } = {}) {
    const parsedValue = Number(value);
    const nextTransparency = THREE.MathUtils.clamp(
      Number.isFinite(parsedValue) ? parsedValue : uiTransparency,
      0.2,
      1
    );
    uiTransparency = nextTransparency;

    document.documentElement.style.setProperty(
      "--panel",
      `rgba(6, 19, 34, ${(0.68 * uiTransparency).toFixed(3)})`
    );
    statusMessage.style.backgroundColor = `rgba(6, 19, 34, ${(0.82 * uiTransparency).toFixed(3)})`;
    perfOverlay.style.backgroundColor = `rgba(5, 12, 22, ${(0.72 * uiTransparency).toFixed(3)})`;
    coordinatesOverlay.style.backgroundColor = `rgba(5, 12, 22, ${(0.78 * uiTransparency).toFixed(3)})`;

    for (const homeSurface of instructions.querySelectorAll(".home-surface-panel")) {
      homeSurface.style.backgroundColor = `rgba(6, 19, 34, ${(0.76 * uiTransparency).toFixed(3)})`;
    }

    if (syncInput) {
      syncUiTransparencyInput();
    }

    if (persist) {
      localStorage.setItem(gameUiTransparencyStorageKey, String(uiTransparency));
    }
  }

  function syncCameraCustomizationControl(key) {
    const controls = cameraCustomizationControls[key];
    if (!controls) {
      return;
    }

    const activeCameraSettings = getActiveCameraSettings();

    const formattedValue = formatCameraCustomizationValue(
      activeCameraSettings[key],
      controls.config.step
    );
    controls.rangeInput.value = formattedValue;
    controls.numberInput.value = formattedValue;
  }

  function syncCameraCustomizationInputs() {
    for (const config of cameraCustomizationControlConfigs) {
      syncCameraCustomizationControl(config.key);
    }
  }

  function applyCameraCustomizationSetting(
    key,
    value,
    { persist = true, syncInputs = true } = {}
  ) {
    const controls = cameraCustomizationControls[key];

    if (cameraMode === "firstPerson") {
      resetFirstPersonCameraSettings();

      if (syncInputs) {
        syncCameraCustomizationInputs();
      }

      if (persist) {
        persistCameraCustomizationSettings();
      }
      return;
    }

    const parsedValue = Number(value);
    const activeCameraSettings = getActiveCameraSettings();

    let minBound = -Infinity;
    let maxBound = Infinity;
    if (controls && controls.config) {
      minBound = controls.config.min;
      maxBound = controls.config.max;
    } else {
      const configObj = cameraCustomizationControlConfigs.find(c => c.key === key);
      if (configObj) {
        minBound = configObj.min;
        maxBound = configObj.max;
      }
    }

    const nextValue = THREE.MathUtils.clamp(
      Number.isFinite(parsedValue) ? parsedValue : activeCameraSettings[key],
      minBound,
      maxBound
    );
    activeCameraSettings[key] = nextValue;
    saveBasicCameraSetting(key, nextValue);

    if (syncInputs) {
      syncCameraCustomizationControl(key);
    }

    if (persist) {
      persistCameraCustomizationSettings();
    }
  }

  function setCameraMode(nextMode, { persist = true, syncInputs = true } = {}) {
    if (nextMode !== "thirdPerson" && nextMode !== "firstPerson") {
      return;
    }

    cameraMode = nextMode;

    if (cameraMode === "firstPerson") {
      resetFirstPersonCameraSettings();
      console.log("[DIAG] Switched to first-person", getCameraSettingsSnapshot(firstPersonCameraSettings));
    } else {
      console.log("[DIAG] Switched to third-person", getCameraSettingsSnapshot(thirdPersonCameraSettings));
    }

    if (syncInputs) {
      syncCameraCustomizationInputs();
    }

    if (persist) {
      persistCameraCustomizationSettings();
    }

    syncMobileHudActionAvailability();
  }

  function toggleCameraMode() {
    stopAdsAiming("firstPersonSwitch");
    const nextMode = cameraMode === "firstPerson" ? "thirdPerson" : "firstPerson";
    setCameraMode(nextMode);
    showStatusMessage(
      nextMode === "firstPerson" ? "First-person camera active." : "Third-person camera active.",
      1400
    );
  }

  function applyCameraFov(value, { persist = true, syncInput = true } = {}) {
    const nextFov = THREE.MathUtils.clamp(Number(value) || camera.fov, 55, 90);
    camera.fov = nextFov;
    camera.updateProjectionMatrix();
    saveBasicCameraSetting("fov", nextFov);

    if (syncInput) {
      settingsFovInput.value = String(Math.round(nextFov));
    }

    if (persist) {
      localStorage.setItem(gameFovStorageKey, String(nextFov));
    }
  }

  function loadSavedSettings() {
    applyBasicUserSettings(loadBasicUserSettings());
    const savedFov = localStorage.getItem(gameFovStorageKey);
    if (savedFov !== null) {
      const parsedFov = Number(savedFov);
      if (Number.isFinite(parsedFov)) {
        applyCameraFov(parsedFov, {
          persist: false,
          syncInput: false
        });
      }
    }

    const savedThirdPersonCameraSettings = localStorage.getItem(thirdPersonCameraSettingsStorageKey);
    if (savedThirdPersonCameraSettings) {
      try {
        const parsedSettings = JSON.parse(savedThirdPersonCameraSettings);
        for (const config of cameraCustomizationControlConfigs) {
          if (Number.isFinite(parsedSettings?.[config.key])) {
            thirdPersonCameraSettings[config.key] = THREE.MathUtils.clamp(
              parsedSettings[config.key],
              config.min,
              config.max
            );
          }
        }
      } catch (error) {
        console.warn("Failed to parse saved third-person camera settings:", error);
      }
    }

    const savedFirstPersonCameraSettings = localStorage.getItem(firstPersonCameraSettingsStorageKey);
    if (savedFirstPersonCameraSettings) {
      try {
        const parsedSettings = JSON.parse(savedFirstPersonCameraSettings);
        for (const config of cameraCustomizationControlConfigs) {
          if (Number.isFinite(parsedSettings?.[config.key])) {
            firstPersonCameraSettings[config.key] = THREE.MathUtils.clamp(
              parsedSettings[config.key],
              config.min,
              config.max
            );
          }
        }
      } catch (error) {
        console.warn("Failed to parse saved first-person camera settings:", error);
      }
    }

    const savedCameraMode = localStorage.getItem(gameCameraModeStorageKey);
    if (savedCameraMode === "firstPerson" || savedCameraMode === "thirdPerson") {
      cameraMode = savedCameraMode;
    }

    resetFirstPersonCameraSettings();
    console.log("[DIAG] Saved camera profiles loaded", {
      mode: cameraMode,
      thirdPerson: getCameraSettingsSnapshot(thirdPersonCameraSettings),
      firstPerson: getCameraSettingsSnapshot(firstPersonCameraSettings)
    });

    const savedGraphicsSettings = localStorage.getItem(graphicsSettingsStorageKey);
    if (savedGraphicsSettings !== null) {
      try {
        const parsedGraphicsSettings = JSON.parse(savedGraphicsSettings);
        if (parsedGraphicsSettings && typeof parsedGraphicsSettings === "object") {
          graphicsSettingsLoadedFromStorage = true;
          applyGraphicsSettings(parsedGraphicsSettings, {
            persist: false,
            syncInputs: false,
            reason: "startup-load"
          });
          console.log("graphics settings loaded", {
            source: "storage",
            settings: getGraphicsSettingsSnapshot()
          });
          console.log("[ADVANCED GRAPHICS] loaded", graphicsSettings.advancedGraphics);
        }
      } catch (error) {
        graphicsSettingsLoadedFromStorage = false;
        console.warn("Failed to parse saved graphics settings:", error);
      }
    }

    const savedUiTransparency = localStorage.getItem(gameUiTransparencyStorageKey);
    if (savedUiTransparency !== null) {
      const parsedUiTransparency = Number(savedUiTransparency);
      if (Number.isFinite(parsedUiTransparency)) {
        applyUiTransparency(parsedUiTransparency, {
          persist: false,
          syncInput: false
        });
      }
    }

    const savedMobileCameraSensitivity = localStorage.getItem(mobileCameraSensitivityStorageKey);
    if (savedMobileCameraSensitivity !== null) {
      const parsedMobileCameraSensitivity = Number(savedMobileCameraSensitivity);
      if (Number.isFinite(parsedMobileCameraSensitivity)) {
        applyMobileCameraSensitivity(parsedMobileCameraSensitivity, {
          persist: false,
          syncInput: false
        });
      }
    }

    loadPlayerIdentitySettings();
    loadSavedMobileControlLayout();
    syncSettingsInputs();
  }

  function syncGunInputs() {
    const warningEls = document.querySelectorAll(".online-fair-limits-warning");
    warningEls.forEach(el => {
      el.style.display = isOnlineGunLimitsActive() ? "block" : "none";
    });

    gunNameInput.value = currentGun.name;
    gunFireRateInput.value = String(currentGun.fireRate);
    gunDamageInput.value = String(currentGun.damage);
    gunHeadshotMultiplierInput.value = currentGun.headshotMultiplier.toFixed(1);
    gunRecoilStrengthInput.value = currentGun.recoilStrength.toFixed(1);
    gunRecoilEnabledInput.checked = currentGun.recoilEnabled;
    gunRecoilIntensityXInput.value = currentGun.recoilIntensityX.toFixed(2);
    gunRecoilIntensityYInput.value = currentGun.recoilIntensityY.toFixed(2);
    gunRecoilIntensityZInput.value = currentGun.recoilIntensityZ.toFixed(2);
    gunReloadTimeInput.value = String(currentGun.reloadTime);
    gunAmmoCapacityInput.value = String(currentGun.ammoCapacity);
    gunInfiniteAmmoInput.checked = currentGun.infiniteAmmo;

    const selectedIndex = getMatchingSavedGunIndex(currentGun);
    savedGunList.value = selectedIndex >= 0 ? String(selectedIndex) : "";
  }

  function populateSavedGunList() {
    const previousValue = savedGunList.value;
    savedGunList.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select Saved Gun";
    savedGunList.appendChild(defaultOption);

    savedGuns.forEach((gunConfig, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = gunConfig.name;
      savedGunList.appendChild(option);
    });

    if (previousValue && savedGuns[Number(previousValue)]) {
      savedGunList.value = previousValue;
    }
  }

  function applyGunConfig(config, { refillAmmo = true, persistCurrent = true } = {}) {
    if (reloadTimeoutId) {
      window.clearTimeout(reloadTimeoutId);
      reloadTimeoutId = 0;
    }
    isReloading = false;
    reloadEndTimeMs = 0;
    reloadResumeAutoFire = false;
    let normalizedConfig = normalizeGunConfig(config, currentGun?.name || getNextGunName());
    currentGun = clampGunSettingsForOnlineFairPlay(normalizedConfig);
    fireCooldownMs = Math.round(1000 / currentGun.fireRate);
    damagePerBullet = currentGun.damage;
    headshotDamage = currentGun.damage * currentGun.headshotMultiplier;
    legshotDamage = Math.max(1, Math.round(currentGun.damage * 0.75));
    reloadDuration = currentGun.reloadTime;
    maxAmmo = currentGun.ammoCapacity;
    ammo = refillAmmo ? maxAmmo : Math.min(ammo, maxAmmo);
    updateAmmoUi();
    syncGunInputs();

    if (persistCurrent) {
      localStorage.setItem(currentGunStorageKey, JSON.stringify(currentGun));
    }
  }

  function loadGunConfigs() {
    const storedGuns = localStorage.getItem(savedGunsStorageKey);
    if (storedGuns) {
      try {
        const parsedGuns = JSON.parse(storedGuns);
        if (Array.isArray(parsedGuns)) {
          savedGuns = parsedGuns.map((gunConfig, index) =>
            normalizeGunConfig(gunConfig, `Gun No ${index + 1}`)
          );
        }
      } catch (error) {
        console.error("Failed to parse saved guns:", error);
        savedGuns = [];
      }
    }

    const storedCurrentGun = localStorage.getItem(currentGunStorageKey);
    if (storedCurrentGun) {
      try {
        applyGunConfig(JSON.parse(storedCurrentGun), {
          refillAmmo: true,
          persistCurrent: false
        });
      } catch (error) {
        console.error("Failed to parse current gun config:", error);
        applyGunConfig(currentGun, {
          refillAmmo: true,
          persistCurrent: false
        });
      }
    } else {
      applyGunConfig(currentGun, {
        refillAmmo: true,
        persistCurrent: false
      });
    }

    populateSavedGunList();
    syncGunInputs();
  }

  function saveCurrentGunConfig() {
    const configFromInputs = normalizeGunConfig({
      name: gunNameInput.value,
      fireRate: gunFireRateInput.value,
      damage: gunDamageInput.value,
      headshotMultiplier: gunHeadshotMultiplierInput.value,
      recoilStrength: gunRecoilStrengthInput.value,
      recoilEnabled: gunRecoilEnabledInput.checked,
      recoilIntensityX: gunRecoilIntensityXInput.value,
      recoilIntensityY: gunRecoilIntensityYInput.value,
      recoilIntensityZ: gunRecoilIntensityZInput.value,
      reloadTime: gunReloadTimeInput.value,
      ammoCapacity: gunAmmoCapacityInput.value,
      infiniteAmmo: gunInfiniteAmmoInput.checked
    });

    applyGunConfig(configFromInputs);
    savedGuns.push({ ...currentGun });
    persistSavedGuns();
    populateSavedGunList();
    syncGunInputs();
    showStatusMessage(`${currentGun.name} saved.`, 1600);
  }

  function setHpFill(fillElement, ratio) {
    fillElement.style.transform = `scaleX(${THREE.MathUtils.clamp(ratio, 0, 1)})`;
  }

  function updateAmmoUi() {
    const remainingReloadSeconds = isReloading
      ? Math.max(0, (reloadEndTimeMs - performance.now()) / 1000)
      : 0;
    const nextText = currentGun.infiniteAmmo
      ? "Ammo: \u221E / \u221E"
      : isReloading
        ? `Ammo: ${ammo} / ${maxAmmo} · Reload ${remainingReloadSeconds.toFixed(1)}s`
        : `Ammo: ${ammo} / ${maxAmmo}`;

    if (nextText !== ammoUiState.text) {
      ammoUiText.textContent = nextText;
      ammoUiState.text = nextText;
    }

    syncMobileHudActionAvailability();
  }

  function updatePlayerHpUi() {
    const nextRatio = playerHp / playerMaxHp;
    const nextText = `${Math.ceil(playerHp)} / ${playerMaxHp}`;

    if (Math.abs(nextRatio - playerHpUiState.ratio) > 0.001) {
      setHpFill(playerHpFill, nextRatio);
      playerHpUiState.ratio = nextRatio;
    }

    if (nextText !== playerHpUiState.text) {
      playerHpText.textContent = nextText;
      playerHpUiState.text = nextText;
    }
  }

  function createEnemyHpBar(enemyActor) {
    const hpBarContainer = document.createElement("div");
    hpBarContainer.className = "enemy-hp-bar-container";

    const hpBarFill = document.createElement("div");
    hpBarFill.className = "enemy-hp-bar-fill";

    hpBarContainer.appendChild(hpBarFill);
    document.body.appendChild(hpBarContainer);

    enemyActor.hpBarContainer = hpBarContainer;
    enemyActor.hpBarFill = hpBarFill;
    enemyActor.lastHpBarLeft = null;
    enemyActor.lastHpBarTop = null;
    enemyActor.lastHpBarVisible = false;
    enemyActor.lastHpBarRatio = null;
  }

  function getHealthPickupTypeConfig(pickupType = "enemy") {
    if (pickupType === "player_drop") {
      return {
        color: 0x6cd5ff,
        emissive: 0x123f58,
        size: 0.62,
        healMode: "full"
      };
    }

    return {
      color: 0x00ff00,
      emissive: 0x003300,
      size: 0.5,
      healMode: "normal"
    };
  }

  function applyHealthPickupToLocalPlayer(pickup) {
    if (!pickup || playerDead) {
      return false;
    }

    const healMode = pickup.userData.healMode === "full" ? "full" : "normal";
    if (healMode === "full") {
      playerHp = playerMaxHp;
    } else {
      playerHp = Math.min(playerMaxHp, playerHp + 25);
    }

    updatePlayerHpUi();
    return true;
  }

  function applyOnlineHealthPickupToPlayer(playerId, pickup) {
    if (!playerId || !pickup) {
      return false;
    }

    const healMode = pickup.userData.healMode === "full" ? "full" : "normal";
    if (playerId === localPlayerId) {
      const didApply = applyHealthPickupToLocalPlayer(pickup);
      if (!didApply) {
        return false;
      }

      ensureLanCombatState(localPlayerId, {
        hp: playerHp,
        maxHp: playerMaxHp,
        isDead: false,
        name: playerName,
        weaponState: currentGun
      });
      return true;
    }

    const combatState = ensureLanCombatState(playerId, {
      name: getCombatDisplayName(playerId)
    });
    if (!combatState || combatState.isDead) {
      return false;
    }

    combatState.hp = healMode === "full"
      ? combatState.maxHp
      : Math.min(combatState.maxHp, combatState.hp + 25);
    combatState.isDead = false;

    syncRemotePlayerCombatState(playerId, {
      hp: combatState.hp,
      maxHp: combatState.maxHp,
      isDead: false
    });
    return true;
  }

  function findOnlineHealthPickupCollectorId(pickup) {
    if (!pickup?.position || !isLanHost || !isSharedOnlineSessionActive()) {
      return "";
    }

    const collectionRadiusSq = 1.5 * 1.5;
    if (!playerDead && player && player.position.distanceToSquared(pickup.position) < collectionRadiusSq) {
      return localPlayerId;
    }

    for (const [remotePlayerId, remotePlayer] of remotePlayers) {
      if (!remotePlayer || remotePlayer.isDead) {
        continue;
      }

      const combatState = ensureLanCombatState(remotePlayerId);
      if (combatState?.isDead) {
        continue;
      }

      const actorPosition = remotePlayer.targetPosition ?? remotePlayer.root?.position;
      if (actorPosition && actorPosition.distanceToSquared(pickup.position) < collectionRadiusSq) {
        return remotePlayerId;
      }
    }

    return "";
  }

  function syncOnlineHealthPickupCollection(pickup, collectorId) {
    if (
      !pickup ||
      pickup.userData.collected ||
      !pickup.userData.isOnlineSynced ||
      !collectorId ||
      !isLanHost ||
      !isSharedOnlineSessionActive()
    ) {
      return false;
    }

    if (!applyOnlineHealthPickupToPlayer(collectorId, pickup)) {
      return false;
    }

    pickup.userData.collected = true;
    console.log("drop_pickup_synced_online", {
      pickupId: pickup.userData.networkId,
      pickupType: pickup.userData.pickupType,
      collectorId
    });
    broadcastLanCombatState();
    removeHealthPickup(pickup, {
      broadcastOnlineRemoval: true,
      removedBy: collectorId,
      removalReason: "picked_up"
    });
    return true;
  }

  function removeHealthPickup(pickup, {
    broadcastOnlineRemoval = false,
    removedBy = "",
    removalReason = "removed",
    suppressOnlineLog = false
  } = {}) {
    if (!pickup || pickup.userData.removed) {
      return;
    }

    pickup.userData.removed = true;
    const isOnlineSynced = Boolean(pickup.userData.isOnlineSynced && pickup.userData.networkId);
    const pickupId = isOnlineSynced ? pickup.userData.networkId : "";
    if (pickup.userData.timeoutId) {
      window.clearTimeout(pickup.userData.timeoutId);
      pickup.userData.timeoutId = 0;
    }

    unregisterSharedOnlineHealthPickup(pickup);

    const pickupIndex = healthPickups.indexOf(pickup);
    if (pickupIndex >= 0) {
      healthPickups.splice(pickupIndex, 1);
    }

    if (pickup.parent) {
      pickup.parent.remove(pickup);
    }

    if (isOnlineSynced && broadcastOnlineRemoval) {
      broadcastSharedOnlineHealthPickupRemoval({
        pickupId,
        reason: removalReason,
        removedBy
      });
    }

    if (isOnlineSynced && !suppressOnlineLog) {
      console.log("drop_removed_online", {
        pickupId,
        pickupType: pickup.userData.pickupType,
        reason: removalReason,
        removedBy
      });
    }

    pickup.geometry.dispose();
    pickup.material.dispose();
  }

  function spawnHealthPickup(position, {
    pickupType = "enemy",
    networkId = "",
    isOnlineSynced = false,
    sourceEnemyId = "",
    sourcePlayerId = ""
  } = {}) {
    const normalizedPickupType = pickupType === "player_drop" ? "player_drop" : "enemy";
    const pickupConfig = getHealthPickupTypeConfig(normalizedPickupType);
    const pickupId = typeof networkId === "string" ? networkId.trim() : "";

    if (pickupId && getSharedOnlineHealthPickupById(pickupId)) {
      console.log("drop_spawn_rejected_duplicate", {
        pickupId,
        pickupType: normalizedPickupType
      });
      return null;
    }

    const hpPickup = new THREE.Mesh(
      new THREE.BoxGeometry(pickupConfig.size, pickupConfig.size, pickupConfig.size),
      new THREE.MeshStandardMaterial({
        color: pickupConfig.color,
        emissive: pickupConfig.emissive
      })
    );

    hpPickup.castShadow = true;
    hpPickup.receiveShadow = true;
    hpPickup.position.copy(position);
    hpPickup.position.y += pickupConfig.size;
    hpPickup.userData.baseY = hpPickup.position.y;
    hpPickup.userData.collected = false;
    hpPickup.userData.removed = false;
    hpPickup.userData.spawnTime = clock.elapsedTime;
    hpPickup.userData.spawnPosition = position.clone();
    hpPickup.userData.pickupType = normalizedPickupType;
    hpPickup.userData.healMode = pickupConfig.healMode;
    hpPickup.userData.networkId = pickupId;
    hpPickup.userData.isOnlineSynced = Boolean(isOnlineSynced && pickupId);
    hpPickup.userData.sourceEnemyId = sourceEnemyId;
    hpPickup.userData.sourcePlayerId = sourcePlayerId;
    hpPickup.userData.timeoutId = 0;

    const shouldManageLifetimeLocally = !hpPickup.userData.isOnlineSynced || (isLanHost && isSharedOnlineSessionActive());
    if (shouldManageLifetimeLocally) {
      hpPickup.userData.timeoutId = window.setTimeout(() => {
        removeHealthPickup(hpPickup, hpPickup.userData.isOnlineSynced
          ? {
            broadcastOnlineRemoval: true,
            removalReason: "expired"
          }
          : undefined);
      }, 20000);
    }

    scene.add(hpPickup);
    healthPickups.push(hpPickup);
    if (hpPickup.userData.isOnlineSynced) {
      registerSharedOnlineHealthPickup(hpPickup);
    }
    return hpPickup;
  }

  function spawnSharedOnlineHealthPickup(position, {
    pickupType = "enemy",
    sourceEnemyId = "",
    sourcePlayerId = ""
  } = {}) {
    if (!isLanHost || !isSharedOnlineSessionActive()) {
      return null;
    }

    const pickupId = generateSharedOnlineHealthPickupId(
      pickupType === "player_drop" ? "player-drop" : "enemy-drop"
    );
    const pickup = spawnHealthPickup(position, {
      pickupType,
      networkId: pickupId,
      isOnlineSynced: true,
      sourceEnemyId,
      sourcePlayerId
    });
    if (!pickup) {
      return null;
    }

    const eventName = pickupType === "player_drop"
      ? "player_drop_spawned_online"
      : "enemy_drop_spawned_online";
    console.log(eventName, {
      pickupId,
      pickupType,
      sourceEnemyId,
      sourcePlayerId,
      healMode: pickup.userData.healMode,
      position: buildNetworkVector3Payload(pickup.userData.spawnPosition, 3)
    });
    broadcastSharedOnlineHealthPickupSpawns([pickup]);
    return pickup;
  }

  function handleOnlineHealthPickupSpawnMessage(message) {
    if (!isSharedOnlineSessionActive()) {
      return;
    }

    for (const pickupState of message.pickups ?? []) {
      const pickupId = typeof pickupState?.pickupId === "string" ? pickupState.pickupId.trim() : "";
      if (!pickupId) {
        continue;
      }

      if (getSharedOnlineHealthPickupById(pickupId)) {
        console.log("drop_spawn_rejected_duplicate", {
          pickupId,
          pickupType: pickupState?.pickupType === "player_drop" ? "player_drop" : "enemy"
        });
        continue;
      }

      const pickupPosition = new THREE.Vector3();
      if (!readVector3FromNetwork(pickupState.position, pickupPosition)) {
        continue;
      }

      const pickup = spawnHealthPickup(pickupPosition, {
        pickupType: pickupState.pickupType,
        networkId: pickupId,
        isOnlineSynced: true,
        sourceEnemyId: typeof pickupState.sourceEnemyId === "string" ? pickupState.sourceEnemyId : "",
        sourcePlayerId: typeof pickupState.sourcePlayerId === "string" ? pickupState.sourcePlayerId : ""
      });
      if (!pickup) {
        continue;
      }

      const eventName = pickup.userData.pickupType === "player_drop"
        ? "player_drop_spawned_online"
        : "enemy_drop_spawned_online";
      console.log(eventName, {
        pickupId,
        pickupType: pickup.userData.pickupType,
        sourceEnemyId: pickup.userData.sourceEnemyId,
        sourcePlayerId: pickup.userData.sourcePlayerId,
        healMode: pickup.userData.healMode,
        position: buildNetworkVector3Payload(pickup.userData.spawnPosition, 3)
      });
    }
  }

  function handleOnlineHealthPickupRemovedMessage(message) {
    if (!isSharedOnlineSessionActive()) {
      return;
    }

    const pickupId = typeof message.pickupId === "string" ? message.pickupId.trim() : "";
    if (!pickupId) {
      return;
    }

    const pickup = getSharedOnlineHealthPickupById(pickupId);
    if (!pickup) {
      return;
    }

    removeHealthPickup(pickup, {
      removedBy: typeof message.removedBy === "string" ? message.removedBy : "",
      removalReason: typeof message.reason === "string" && message.reason ? message.reason : "removed"
    });
  }

  function updateHealthPickups() {
    if (!healthPickups.length || !player) {
      return;
    }

    for (let i = healthPickups.length - 1; i >= 0; i -= 1) {
      const pickup = healthPickups[i];
      if (!pickup || pickup.userData.removed || pickup.userData.collected) {
        continue;
      }

      pickup.rotation.y += pickup.userData.pickupType === "player_drop" ? 0.026 : 0.02;
      pickup.position.y = pickup.userData.baseY + Math.sin((clock.elapsedTime - pickup.userData.spawnTime) * 2) * 0.08;

      if (pickup.userData.isOnlineSynced) {
        if (isLanHost && isSharedOnlineSessionActive()) {
          const collectorId = findOnlineHealthPickupCollectorId(pickup);
          if (collectorId) {
            syncOnlineHealthPickupCollection(pickup, collectorId);
          }
        }
        continue;
      }

      if (player.position.distanceToSquared(pickup.position) < 1.5 * 1.5) {
        pickup.userData.collected = true;
        applyHealthPickupToLocalPlayer(pickup);
        removeHealthPickup(pickup);
      }
    }
  }

  function hideEnemyHpUi() {
    enemyHpFloating.classList.remove("visible");
  }

  function removeEnemyHpBar(enemyActor) {
    if (!enemyActor?.hpBarContainer) {
      return;
    }

    if (enemyActor.hpBarContainer.parentNode) {
      enemyActor.hpBarContainer.parentNode.removeChild(enemyActor.hpBarContainer);
    }

    enemyActor.hpBarContainer = null;
    enemyActor.hpBarFill = null;
    enemyActor.lastHpBarLeft = null;
    enemyActor.lastHpBarTop = null;
    enemyActor.lastHpBarVisible = false;
    enemyActor.lastHpBarRatio = null;
  }

  function updateEnemyHpBar(enemyActor) {
    if (!enemyActor || enemyActor.isDead || !enemyActor.hpBarContainer || !enemyActor.hpBarFill) {
      return;
    }

    enemyActor.headMesh.getWorldPosition(hpBarWorldPosition);
    hpBarWorldPosition.y += 0.8;
    projectedHudPosition.copy(hpBarWorldPosition).project(camera);

    if (projectedHudPosition.z < -1 || projectedHudPosition.z > 1) {
      if (enemyActor.lastHpBarVisible !== false) {
        enemyActor.hpBarContainer.style.display = "none";
        enemyActor.lastHpBarVisible = false;
      }
      return;
    }

    const x = (projectedHudPosition.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-projectedHudPosition.y * 0.5 + 0.5) * window.innerHeight;
    const left = `${x - 30}px`;
    const top = `${y}px`;

    if (enemyActor.lastHpBarLeft !== left) {
      enemyActor.hpBarContainer.style.left = left;
      enemyActor.lastHpBarLeft = left;
    }

    if (enemyActor.lastHpBarTop !== top) {
      enemyActor.hpBarContainer.style.top = top;
      enemyActor.lastHpBarTop = top;
    }

    if (enemyActor.lastHpBarVisible !== true) {
      enemyActor.hpBarContainer.style.display = "block";
      enemyActor.lastHpBarVisible = true;
    }
  }

  function updateEnemyHpBars() {
    for (const enemyActor of enemies) {
      updateEnemyHpBar(enemyActor);
    }
  }

  function getLanPlayerActorById(playerId) {
    if (!playerId) {
      return null;
    }

    if (playerId === localPlayerId) {
      return playerActor;
    }

    return remotePlayers.get(playerId) ?? null;
  }

  function buildNetworkVector3Payload(vector, precision = 4) {
    return {
      x: Number(vector.x.toFixed(precision)),
      y: Number(vector.y.toFixed(precision)),
      z: Number(vector.z.toFixed(precision))
    };
  }

  function readVector3FromNetwork(value, target) {
    if (!value || typeof value !== "object") {
      return false;
    }

    const { x, y, z } = value;
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) {
      return false;
    }

    target.set(x, y, z);
    return true;
  }

  function buildLocalShotPayload() {
    raycaster.setFromCamera(screenCenterNdc, camera);

    return {
      shotId: `${localPlayerId || "local"}-${Date.now()}-${nextLanShotSequence += 1}`,
      timestamp: Date.now(),
      origin: buildNetworkVector3Payload(raycaster.ray.origin, 4),
      direction: buildNetworkVector3Payload(raycaster.ray.direction, 5),
      cameraYaw: Number(getEffectiveCameraYaw().toFixed(4)),
      cameraPitch: Number(getEffectiveCameraPitch().toFixed(4)),
      weapon: buildNetworkWeaponState(currentGun)
    };
  }

  function getFallbackShotOriginForActor(actor, target = pvpFallbackShotOrigin) {
    if (!actor?.root) {
      return target.set(0, playerCameraOffset.y, 0);
    }

    actor.root.getWorldPosition(target);
    const crouchBlend = actor === playerActor
      ? (isCrouching ? 1 : 0)
      : (actor.crouchBlend ?? actor.targetCrouchBlend ?? 0);
    target.y += playerCameraOffset.y - (crouchCameraDrop * crouchBlend);
    return target;
  }

  function getFallbackShotDirectionForActor(actor, target = pvpFallbackShotDirection) {
    if (actor === playerActor) {
      updateLookDirection();
      return target.copy(cameraLookDirection).normalize();
    }

    const lookYaw = actor?.lookYaw ?? actor?.targetYaw ?? actor?.root?.rotation?.y ?? 0;
    const lookPitch = actor?.lookPitch ?? 0;
    target.set(
      Math.sin(lookYaw) * Math.cos(lookPitch),
      Math.sin(lookPitch),
      Math.cos(lookYaw) * Math.cos(lookPitch)
    ).normalize();
    return target;
  }

  function resolveShotOriginForValidation(shooterId, shot, target = pvpShotOrigin) {
    const shooterActor = getLanPlayerActorById(shooterId);
    const fallbackOrigin = getFallbackShotOriginForActor(shooterActor, pvpFallbackShotOrigin);

    if (!readVector3FromNetwork(shot?.origin, target)) {
      return target.copy(fallbackOrigin);
    }

    if (!shooterActor?.root) {
      return target;
    }

    if (shooterActor.root.position.distanceToSquared(target) > pvpShotOriginTolerance * pvpShotOriginTolerance) {
      target.copy(fallbackOrigin);
    }

    return target;
  }

  function resolveShotDirectionForValidation(shooterId, shot, target = pvpShotDirection) {
    const shooterActor = getLanPlayerActorById(shooterId);
    const fallbackDirection = getFallbackShotDirectionForActor(shooterActor, pvpFallbackShotDirection);

    if (!readVector3FromNetwork(shot?.direction, target) || target.lengthSq() < 0.000001) {
      return target.copy(fallbackDirection);
    }

    return target.normalize();
  }

  function getPvpTargetHitboxes(excludePlayerId = "") {
    const targetHitboxes = [];

    if (
      localPlayerId &&
      localPlayerId !== excludePlayerId &&
      !playerDead &&
      playerActor?.pvpHitboxes?.length
    ) {
      targetHitboxes.push(...playerActor.pvpHitboxes);
    }

    for (const [remotePlayerId, remotePlayer] of remotePlayers) {
      if (
        remotePlayerId === excludePlayerId ||
        remotePlayer.isDead ||
        !remotePlayer.pvpHitboxes?.length
      ) {
        continue;
      }

      targetHitboxes.push(...remotePlayer.pvpHitboxes);
    }

    return targetHitboxes;
  }

  function playReplicatedPlayerShotEffect(shooterId) {
    const shooterActor = remotePlayers.get(shooterId);
    if (!shooterActor || shooterActor.isDead) {
      return;
    }

    triggerActorShotPose(shooterActor);
    triggerActorMuzzleFlash(shooterActor);
  }

  function getSharedEnemyHitboxes() {
    const hitboxes = [];

    for (const enemyActor of enemies) {
      if (enemyActor?.isDead || !enemyActor?.hitboxes?.length) {
        continue;
      }

      hitboxes.push(...enemyActor.hitboxes);
    }

    return hitboxes;
  }

  function syncEnemyFromNetworkState(enemyActor, state, { snap = false } = {}) {
    if (!enemyActor || !state) {
      return null;
    }

    if (!enemyActor.networkTargetPosition) {
      enemyActor.networkTargetPosition = enemyActor.root.position.clone();
    }

    if (typeof state.targetPlayerId === "string") {
      enemyActor.targetPlayerId = state.targetPlayerId;
    }

    if (typeof state.state === "string" && state.state) {
      enemyActor.state = state.state;
    }

    if (Number.isFinite(state.maxHealth)) {
      enemyActor.maxHealth = Math.max(1, Number(state.maxHealth));
    }

    if (Number.isFinite(state.health)) {
      enemyActor.health = THREE.MathUtils.clamp(
        Number(state.health),
        0,
        Math.max(1, Number(enemyActor.maxHealth) || enemyMaxHp)
      );
    }

    if (readVector3FromNetwork(state.position, enemyActor.networkTargetPosition) && (snap || !enemyActor.hasReceivedNetworkState)) {
      enemyActor.root.position.copy(enemyActor.networkTargetPosition);
    }

    const nextYaw = Number.isFinite(state.rotation?.y)
      ? normalizeAngleRadians(state.rotation.y)
      : enemyActor.networkTargetYaw ?? enemyActor.root.rotation.y;
    enemyActor.networkTargetYaw = nextYaw;
    if (snap || !enemyActor.hasReceivedNetworkState) {
      enemyActor.root.rotation.set(0, nextYaw, 0);
    }

    enemyActor.hasReceivedNetworkState = true;

    if (state.isDead) {
      setEnemyDeathState(enemyActor);
    } else {
      setEnemyAliveState(enemyActor);
    }

    if (state.trainingTargetType === "jiggleTraining" || state.trainingTargetType === "mediumRangeJiggleTraining") {
      markNetworkAimTrainingEnemy(enemyActor, state.trainingTargetType);
    }

    return enemyActor;
  }

  function spawnOrUpdateSharedEnemyFromNetwork(state, { snap = false } = {}) {
    const enemyId = typeof state?.enemyId === "string" ? state.enemyId : "";
    if (!enemyId) {
      return null;
    }

    let enemyActor = getSharedEnemyById(enemyId);
    if (!enemyActor) {
      const didReadPosition = readVector3FromNetwork(state.position, enemyTargetPosition);
      const spawnPosition = didReadPosition
        ? enemyTargetPosition
        : findEnemySpawnPosition(enemies.length, Math.max(enemies.length + 1, 1));
      enemyActor = createEnemy(spawnPosition, {
        enemyId,
        difficultyKey: state.profileKey,
        waveId: state.waveId,
        suppressStatus: true,
        suppressNetworkBroadcast: true,
        isNetworkReplica: true,
        rotationY: Number.isFinite(state.rotation?.y) ? normalizeAngleRadians(state.rotation.y) : Math.PI,
        health: state.health,
        maxHealth: state.maxHealth,
        isDead: state.isDead,
        state: state.state,
        targetPlayerId: state.targetPlayerId
      });
    }

    return syncEnemyFromNetworkState(enemyActor, state, { snap });
  }

  function playReplicatedEnemyShotEffect(enemyId) {
    const enemyActor = getSharedEnemyById(enemyId);
    if (!enemyActor || enemyActor.isDead) {
      return;
    }

    playEnemyShotEffect(enemyActor);
  }

  function handleEnemyDamageMessage(message) {
    const enemyId = typeof message.enemyId === "string" ? message.enemyId : "";
    const enemyActor = getSharedEnemyById(enemyId);
    if (!enemyActor) {
      return;
    }

    if (Number.isFinite(message.maxHp)) {
      enemyActor.maxHealth = Math.max(1, Number(message.maxHp));
    }

    if (Number.isFinite(message.hp)) {
      enemyActor.health = THREE.MathUtils.clamp(
        Number(message.hp),
        0,
        Math.max(1, Number(enemyActor.maxHealth) || enemyMaxHp)
      );
    }

    if (message.isDead) {
      setEnemyDeathState(enemyActor);
    } else {
      updateEnemyHealthVisuals(enemyActor);
    }
  }

  function handleEnemyRemovedMessage(message) {
    const enemyId = typeof message.enemyId === "string" ? message.enemyId : "";
    const enemyActor = getSharedEnemyById(enemyId);
    if (!enemyActor) {
      return;
    }

    removeEnemy(enemyActor, {
      suppressNetworkBroadcast: true,
      suppressWaveUpdate: true
    });
  }

  function applyHostAuthoritativeEnemyDamage({
    enemyActor,
    attackerId,
    amount,
    hitZone = "body"
  }) {
    if (!isLanHost || !enemyActor || enemyActor.isDead || !attackerId) {
      return false;
    }

    const damageAmount = Math.max(1, Number(amount) || 1);
    enemyActor.health = Math.max(0, enemyActor.health - damageAmount);
    updateEnemyHealthVisuals(enemyActor);

    const didDie = enemyActor.health <= 0;
    broadcastSharedEnemyDamage(enemyActor, {
      attackerId,
      amount: damageAmount,
      hitZone,
      hp: enemyActor.health,
      maxHp: enemyActor.maxHealth,
      isDead: didDie
    });

    if (didDie) {
      handleEnemyDeath(enemyActor, {
        spawnPickup: false,
        suppressNetworkBroadcast: false
      });
    }

    return true;
  }

  function resolveHostAuthoritativeEnemyShot(shooterId, shot) {
    if (!isLanHost || !shooterId) {
      return false;
    }

    const shooterCombatState = ensureLanCombatState(shooterId, {
      name: getCombatDisplayName(shooterId),
      weaponState: shot?.weapon ?? (shooterId === localPlayerId
        ? currentGun
        : remotePlayers.get(shooterId)?.weaponState)
    });
    if (!shooterCombatState || shooterCombatState.isDead) {
      return false;
    }

    const enemyHitTargets = getSharedEnemyHitboxes();
    if (!enemyHitTargets.length) {
      return false;
    }

    const shotOrigin = resolveShotOriginForValidation(shooterId, shot, pvpShotOrigin);
    const shotDirection = resolveShotDirectionForValidation(shooterId, shot, pvpShotDirection);

    pvpRaycaster.near = 0;
    pvpRaycaster.far = Infinity;
    pvpRaycaster.set(shotOrigin, shotDirection);
    const enemyHits = pvpRaycaster.intersectObjects(enemyHitTargets, true);
    if (!enemyHits.length) {
      return false;
    }

    const closestEnemyHit = enemyHits[0];

    pvpRaycaster.set(shotOrigin, shotDirection);
    const worldHits = pvpRaycaster.intersectObjects(bulletCollisionMeshes, false);
    const blockingWorldHit = worldHits.find((worldHit) => worldHit.distance <= closestEnemyHit.distance);
    if (blockingWorldHit) {
      return false;
    }

    const targetEnemy = closestEnemyHit.object.userData.enemyRef;
    const hitZone = closestEnemyHit.object.userData.hitZone;
    if (!targetEnemy || targetEnemy.isDead) {
      return false;
    }

    const damageAmount = getWeaponDamageForHitZone(shooterCombatState.weaponState, hitZone);
    return applyHostAuthoritativeEnemyDamage({
      enemyActor: targetEnemy,
      attackerId: shooterId,
      amount: damageAmount,
      hitZone
    });
  }

  function resolveHostAuthoritativeAimTrainingShot(shooterId, shot) {
    if (!isLanHost || !shooterId) {
      return false;
    }

    if (!isGridShotActive && !isTrackingBallActive) {
      return false;
    }

    const targetObjects = isGridShotActive
      ? gridShotBalls
      : (trackingBallObject ? [trackingBallObject] : []);

    if (!targetObjects.length) {
      return false;
    }

    const shotOrigin = resolveShotOriginForValidation(shooterId, shot, pvpShotOrigin);
    const shotDirection = resolveShotDirectionForValidation(shooterId, shot, pvpShotDirection);

    pvpRaycaster.near = 0;
    pvpRaycaster.far = Infinity;
    pvpRaycaster.set(shotOrigin, shotDirection);
    const targetHits = pvpRaycaster.intersectObjects(targetObjects, false);
    if (!targetHits.length) {
      return false;
    }

    const closestTargetHit = targetHits[0];
    pvpRaycaster.set(shotOrigin, shotDirection);
    const worldHits = pvpRaycaster.intersectObjects(bulletCollisionMeshes, false);
    const blockingWorldHit = worldHits.find((worldHit) => worldHit.distance <= closestTargetHit.distance);
    if (blockingWorldHit) {
      return false;
    }

    if (isGridShotActive) {
      const targetBall = closestTargetHit.object;
      const lastPos = targetBall.position.clone();
      removeGridShotBall(targetBall);
      spawnGridShotBall(lastPos);
      broadcastAimTrainingTargetState({ force: true, log: true });
      return true;
    }

    if (isTrackingBallActive && trackingBallObject) {
      trackingBallHp -= TRACKING_BALL_DAMAGE;

      if (trackingBallHp <= 0) {
        removeTrackingBallObject();
        spawnTrackingBall();
      } else {
        updateTrackingBallHpBar();
      }

      broadcastAimTrainingTargetState({ force: true, log: true });
      return true;
    }

    return false;
  }

  function applyAuthoritativeLocalPlayerDamage(amount, { statusText = "Respawning..." } = {}) {
    applyDamageToPlayer(amount, {
      showOverlay: false,
      statusText
    });
  }

  function spawnSharedOnlinePlayerDeathPickup(victimId) {
    if (!victimId || !isLanHost || !isSharedOnlineSessionActive()) {
      return null;
    }

    const playerDropPosition = new THREE.Vector3();
    if (victimId === localPlayerId && player) {
      playerDropPosition.copy(player.position);
    } else {
      const victimActor = getLanPlayerActorById(victimId);
      if (victimActor?.root?.position) {
        playerDropPosition.copy(victimActor.root.position);
      } else if (remotePlayers.get(victimId)?.targetPosition) {
        playerDropPosition.copy(remotePlayers.get(victimId).targetPosition);
      } else {
        playerDropPosition.copy(currentPlayerSpawn);
      }
    }

    return spawnSharedOnlineHealthPickup(playerDropPosition, {
      pickupType: "player_drop",
      sourcePlayerId: victimId
    });
  }

  function scheduleHostAuthoritativeRespawn(playerId) {
    const combatState = ensureLanCombatState(playerId);
    if (!combatState) {
      return;
    }

    clearLanCombatRespawnTimeout(combatState);
    combatState.respawnTimeoutId = window.setTimeout(() => {
      combatState.respawnTimeoutId = 0;
      handleHostAuthoritativeRespawn(playerId);
    }, lanPlayerRespawnDelayMs);
  }

  function applyHostAuthoritativePlayerDamage({
    victimId,
    attackerId,
    amount,
    hitZone = "body"
  }) {
    if (!isLanHost || !victimId || !attackerId) {
      return false;
    }

    const combatState = ensureLanCombatState(victimId, {
      name: getCombatDisplayName(victimId)
    });
    if (!combatState || combatState.isDead) {
      return false;
    }

    combatState.hp = Math.max(0, combatState.hp - Math.max(1, Number(amount) || 1));
    combatState.isDead = combatState.hp <= 0;

    if (victimId === localPlayerId) {
      playerHp = combatState.hp;
      updatePlayerHpUi();
      if (combatState.isDead) {
        handlePlayerDeath({
          showOverlay: false,
          statusText: "Respawning..."
        });
      }
    } else {
      syncRemotePlayerCombatState(victimId, {
        hp: combatState.hp,
        maxHp: combatState.maxHp,
        isDead: combatState.isDead
      });
    }

    sendNetworkMessage({
      type: "player_damage",
      playerId: victimId,
      attackerId,
      amount: Math.max(1, Number(amount) || 1),
      hitZone,
      hp: combatState.hp,
      maxHp: combatState.maxHp,
      isDead: combatState.isDead
    });

    if (combatState.isDead) {
      const killerName = getCombatDisplayName(attackerId);
      const victimName = getCombatDisplayName(victimId);
      showOnlineKillMessage(killerName, victimName);

      spawnSharedOnlinePlayerDeathPickup(victimId);
      scheduleHostAuthoritativeRespawn(victimId);
    }

    return true;
  }

  function resolveHostAuthoritativePlayerShot(shooterId, shot) {
    if (!isLanHost || !shooterId) {
      return false;
    }

    const shooterCombatState = ensureLanCombatState(shooterId, {
      name: getCombatDisplayName(shooterId),
      weaponState: shot?.weapon ?? (shooterId === localPlayerId
        ? currentGun
        : remotePlayers.get(shooterId)?.weaponState)
    });
    if (!shooterCombatState || shooterCombatState.isDead) {
      return false;
    }

    const minimumShotIntervalMs = 1000 / Math.max(1, shooterCombatState.weaponState.fireRate || 10);
    const now = performance.now();
    if (
      shooterId !== localPlayerId &&
      now - shooterCombatState.lastAcceptedShotAt < minimumShotIntervalMs * 0.75
    ) {
      return false;
    }

    shooterCombatState.lastAcceptedShotAt = now;
    const targetHitboxes = getPvpTargetHitboxes(shooterId);
    if (!targetHitboxes.length) {
      return false;
    }

    const shotOrigin = resolveShotOriginForValidation(shooterId, shot, pvpShotOrigin);
    const shotDirection = resolveShotDirectionForValidation(shooterId, shot, pvpShotDirection);

    pvpRaycaster.near = 0;
    pvpRaycaster.far = Infinity;
    pvpRaycaster.set(shotOrigin, shotDirection);
    const playerHits = pvpRaycaster.intersectObjects(targetHitboxes, false);
    if (!playerHits.length) {
      return false;
    }

    const closestPlayerHit = playerHits[0];

    pvpRaycaster.set(shotOrigin, shotDirection);
    const worldHits = pvpRaycaster.intersectObjects(bulletCollisionMeshes, false);
    const blockingWorldHit = worldHits.find((worldHit) => worldHit.distance <= closestPlayerHit.distance);
    if (blockingWorldHit) {
      return false;
    }

    const victimId = closestPlayerHit.object.userData.playerId;
    const hitZone = closestPlayerHit.object.userData.hitZone;
    if (!victimId || victimId === shooterId) {
      return false;
    }

    const damageAmount = getWeaponDamageForHitZone(shooterCombatState.weaponState, hitZone);
    return applyHostAuthoritativePlayerDamage({
      victimId,
      attackerId: shooterId,
      amount: damageAmount,
      hitZone
    });
  }

  function handleHostAuthoritativeRespawn(playerId) {
    if (!isLanHost || !playerId) {
      return false;
    }

    const combatState = ensureLanCombatState(playerId, {
      name: getCombatDisplayName(playerId)
    });
    if (!combatState) {
      return false;
    }

    const spawnPosition = getLanRespawnPoint(playerId).clone();
    combatState.hp = combatState.maxHp;
    combatState.isDead = false;

    if (playerId === localPlayerId) {
      respawnPlayer({
        preserveEnemies: true,
        spawnPosition
      });
      ensureLanCombatState(localPlayerId, {
        hp: playerHp,
        maxHp: playerMaxHp,
        isDead: false,
        name: playerName,
        weaponState: currentGun
      });

      const respawnState = buildLocalPlayerState();
      sendNetworkMessage({
        type: "player_respawn",
        playerId,
        hp: playerHp,
        maxHp: playerMaxHp,
        state: respawnState
      });
      sendLocalPlayerState(performance.now(), { force: true });
      return true;
    }

    const respawnState = buildRespawnStateForPlayer(playerId, spawnPosition);
    const remotePlayer = remotePlayers.get(playerId);
    if (remotePlayer) {
      syncRemotePlayerCombatState(playerId, {
        hp: combatState.hp,
        maxHp: combatState.maxHp,
        isDead: false
      });
      updateRemotePlayer(playerId, respawnState);
      setRemotePlayerAliveState(remotePlayer, false);
      remotePlayer.root.position.copy(remotePlayer.targetPosition);
      remotePlayer.root.rotation.set(0, remotePlayer.targetYaw, 0);
      updateActorPvpHitboxes(remotePlayer, 0);
    }

    sendNetworkMessage({
      type: "player_respawn",
      playerId,
      hp: combatState.hp,
      maxHp: combatState.maxHp,
      state: respawnState
    });
    return true;
  }

  function applyCombatStateSnapshotMessage(message) {
    for (const playerState of message.players ?? []) {
      const playerId = playerState?.playerId;
      if (!playerId) {
        continue;
      }

      const combatState = ensureLanCombatState(playerId, {
        hp: playerState.hp,
        maxHp: playerState.maxHp,
        isDead: playerState.isDead
      });
      if (!combatState) {
        continue;
      }

      if (playerId === localPlayerId) {
        playerHp = combatState.hp;
        updatePlayerHpUi();
        if (combatState.isDead && !playerDead) {
          handlePlayerDeath({
            showOverlay: false,
            statusText: "Respawning..."
          });
        }
        continue;
      }

      syncRemotePlayerCombatState(playerId, {
        hp: combatState.hp,
        maxHp: combatState.maxHp,
        isDead: combatState.isDead
      });
    }
  }

  function handlePlayerDamageMessage(message) {
    const victimId = typeof message.playerId === "string" ? message.playerId : "";
    if (!victimId) {
      return;
    }

    const combatState = ensureLanCombatState(victimId, {
      hp: message.hp,
      maxHp: message.maxHp,
      isDead: message.isDead
    });
    if (!combatState) {
      return;
    }

    if (victimId === localPlayerId) {
      playerHp = combatState.hp;
      updatePlayerHpUi();
      if (combatState.isDead) {
        handlePlayerDeath({
          showOverlay: false,
          statusText: "Respawning..."
        });
      }
      return;
    }

    syncRemotePlayerCombatState(victimId, {
      hp: combatState.hp,
      maxHp: combatState.maxHp,
      isDead: combatState.isDead
    });

    if (combatState.isDead && message.attackerId) {
      const killerName = getCombatDisplayName(message.attackerId);
      const victimName = getCombatDisplayName(victimId);
      showOnlineKillMessage(killerName, victimName);
    }
  }

  function handlePlayerRespawnMessage(message) {
    const playerId = typeof message.playerId === "string" ? message.playerId : "";
    if (!playerId || !message.state) {
      return;
    }

    const combatState = ensureLanCombatState(playerId, {
      hp: message.hp,
      maxHp: message.maxHp,
      isDead: false
    });
    if (!combatState) {
      return;
    }

    if (playerId === localPlayerId) {
      if (!readVector3FromNetwork(message.state.position, pvpRespawnPosition)) {
        pvpRespawnPosition.copy(currentPlayerSpawn);
      }
      playerHp = combatState.hp;
      updatePlayerHpUi();
      respawnPlayer({
        preserveEnemies: true,
        spawnPosition: pvpRespawnPosition
      });
      ensureLanCombatState(localPlayerId, {
        hp: playerHp,
        maxHp: playerMaxHp,
        isDead: false,
        name: playerName,
        weaponState: currentGun
      });
      sendLocalPlayerState(performance.now(), { force: true });
      return;
    }

    const remotePlayer = remotePlayers.get(playerId) ?? spawnRemotePlayer(playerId, message.state);
    syncRemotePlayerCombatState(playerId, {
      hp: combatState.hp,
      maxHp: combatState.maxHp,
      isDead: false
    });
    updateRemotePlayer(playerId, message.state);
    if (remotePlayer) {
      setRemotePlayerAliveState(remotePlayer, false);
      remotePlayer.root.position.copy(remotePlayer.targetPosition);
      remotePlayer.root.rotation.set(0, remotePlayer.targetYaw, 0);
      updateActorPvpHitboxes(remotePlayer, 0);
    }
  }

  function handleLanShotFired(shotPayload) {
    if (!isLanSessionActive() || !shotPayload) {
      return false;
    }

    sendNetworkMessage({
      type: "player_shot",
      shot: shotPayload
    });

    if (isLanHost) {
      resolveHostAuthoritativePlayerShot(localPlayerId, shotPayload);
      resolveHostAuthoritativeEnemyShot(localPlayerId, shotPayload);
    }

    return true;
  }

  function getEffectiveCameraYaw() {
    return yaw + recoilYaw;
  }

  function getEffectiveCameraPitch() {
    return THREE.MathUtils.clamp(
      pitch + recoilPitch + recoilPitchClimb,
      cameraConfig.minPitch,
      cameraConfig.maxPitch
    );
  }

  function updateLookDirection() {
    const effectiveYaw = getEffectiveCameraYaw();
    const effectivePitch = getEffectiveCameraPitch();
    cameraLookDirection.set(
      Math.sin(effectiveYaw) * Math.cos(effectivePitch),
      Math.sin(effectivePitch),
      Math.cos(effectiveYaw) * Math.cos(effectivePitch)
    ).normalize();
  }

  function resetRecoilOffsets() {
    recoilPitch = 0;
    recoilPitchClimb = 0;
    recoilYaw = 0;
    recoilRoll = 0;
  }

  function applyShotRecoil() {
    // Basic recoil system added
    // Apply recoil only when enabled
    if (!currentGun.recoilEnabled || currentGun.recoilStrength <= 0) {
      return;
    }

    // Recoil changed from shake to upward climb
    // Axis-based recoil control to reduce shaking
    const recoilScale = currentGun.recoilStrength;
    const yawKick = THREE.MathUtils.randFloat(-1, 1) *
      recoilConfig.yawKickUnit *
      recoilScale *
      currentGun.recoilIntensityX;
    const pitchRecoilAmount = recoilConfig.pitchKickUnit *
      recoilScale *
      currentGun.recoilIntensityY;
    const pitchKick = pitchRecoilAmount * recoilConfig.pitchKickBlend;
    const pitchClimb = pitchRecoilAmount * recoilConfig.pitchClimbBlend;
    const rollKick = THREE.MathUtils.randFloat(-1, 1) *
      recoilConfig.rollKickUnit *
      recoilScale *
      currentGun.recoilIntensityZ;

    // Accumulate upward recoil while firing
    recoilPitch = THREE.MathUtils.clamp(
      recoilPitch + pitchKick,
      0,
      recoilConfig.maxPitchOffset
    );
    recoilPitchClimb = THREE.MathUtils.clamp(
      recoilPitchClimb + pitchClimb,
      0,
      recoilConfig.maxPitchOffset
    );
    recoilYaw = THREE.MathUtils.clamp(
      recoilYaw + yawKick,
      -recoilConfig.maxYawOffset,
      recoilConfig.maxYawOffset
    );
    recoilRoll = THREE.MathUtils.clamp(
      recoilRoll + rollKick,
      -recoilConfig.maxRollOffset,
      recoilConfig.maxRollOffset
    );

    const combinedPitchRecoil = recoilPitch + recoilPitchClimb;
    if (combinedPitchRecoil > recoilConfig.maxPitchOffset) {
      recoilPitchClimb = Math.max(0, recoilPitchClimb - (combinedPitchRecoil - recoilConfig.maxPitchOffset));
    }
  }

  function updateRecoil(delta) {
    const recoilActiveWhileFiring = (
      currentGun.recoilEnabled &&
      currentGun.recoilStrength > 0 &&
      isShooting &&
      pointerLocked &&
      !menuOpen &&
      !playerDead
    );
    let recoverySpeed = recoilConfig.idleRecoverySpeed;
    let climbRecoverySpeed = recoilConfig.idleClimbRecoverySpeed;

    if (!currentGun.recoilEnabled || currentGun.recoilStrength <= 0) {
      recoverySpeed = recoilConfig.clearRecoverySpeed;
      climbRecoverySpeed = recoilConfig.clearRecoverySpeed;
    } else if (recoilActiveWhileFiring) {
      recoverySpeed = recoilConfig.activeRecoverySpeed;
      climbRecoverySpeed = recoilConfig.activeClimbRecoverySpeed;
    }

    const recoveryBlend = 1 - Math.exp(-recoverySpeed * delta);
    const climbRecoveryBlend = 1 - Math.exp(-climbRecoverySpeed * delta);

    // Smooth recovery after firing stops
    recoilPitch = THREE.MathUtils.lerp(recoilPitch, 0, recoveryBlend);
    recoilPitchClimb = THREE.MathUtils.lerp(recoilPitchClimb, 0, climbRecoveryBlend);
    recoilYaw = THREE.MathUtils.lerp(recoilYaw, 0, recoveryBlend);
    recoilRoll = THREE.MathUtils.lerp(recoilRoll, 0, recoveryBlend);

    if (Math.abs(recoilPitch) < 0.00001) {
      recoilPitch = 0;
    }

    if (Math.abs(recoilPitchClimb) < 0.00001) {
      recoilPitchClimb = 0;
    }

    if (Math.abs(recoilYaw) < 0.00001) {
      recoilYaw = 0;
    }

    if (Math.abs(recoilRoll) < 0.00001) {
      recoilRoll = 0;
    }
  }

  function setBoundsAtPosition(targetBox, position, halfExtents = playerHalfExtents) {
    collisionMin.set(position.x - halfExtents.x, position.y, position.z - halfExtents.z);
    collisionMax.set(position.x + halfExtents.x, position.y + halfExtents.y, position.z + halfExtents.z);
    targetBox.min.copy(collisionMin);
    targetBox.max.copy(collisionMax);
    return targetBox;
  }

  function boxesOverlap(boxA, boxB, skin = playerCollisionConfig.skinWidth) {
    return (
      boxA.max.x > boxB.min.x + skin &&
      boxA.min.x < boxB.max.x - skin &&
      boxA.max.y > boxB.min.y + skin &&
      boxA.min.y < boxB.max.y - skin &&
      boxA.max.z > boxB.min.z + skin &&
      boxA.min.z < boxB.max.z - skin
    );
  }

  function footprintOverlapsCollider(position, halfExtents, colliderBox) {
    const inset = playerCollisionConfig.supportInset;
    const minX = position.x - halfExtents.x + inset;
    const maxX = position.x + halfExtents.x - inset;
    const minZ = position.z - halfExtents.z + inset;
    const maxZ = position.z + halfExtents.z - inset;
    const skin = playerCollisionConfig.skinWidth;

    return (
      maxX > colliderBox.min.x + skin &&
      minX < colliderBox.max.x - skin &&
      maxZ > colliderBox.min.z + skin &&
      minZ < colliderBox.max.z - skin
    );
  }

  function collidesAt(position, halfExtents = playerHalfExtents) {
    setBoundsAtPosition(testBounds, position, halfExtents);

    for (const obstacle of worldColliders) {
      if (obstacle.userData.supportOnly === true) {
        continue;
      }

      if (!boxesOverlap(testBounds, obstacle.userData.collider)) {
        continue;
      }

      if (
        obstacle.userData.proceduralCityPlayerCollider === true &&
        (currentLoadedMapId === "proceduralCity" || selectedMap === "proceduralCity") &&
        gameStarted &&
        proceduralCityCollisionState.lastBlockedColliderId !== obstacle.userData.proceduralCityColliderId
      ) {
        console.log("Procedural City collider blocked movement:", obstacle.userData.proceduralCityColliderId);
        proceduralCityCollisionState.lastBlockedColliderId = obstacle.userData.proceduralCityColliderId;
      } else if (obstacle.userData.proceduralCityPlayerCollider !== true) {
        proceduralCityCollisionState.lastBlockedColliderId = "";
      }

      proceduralCityCollisionState.lastBlockedZoneId = "";
      return true;
    }

    proceduralCityCollisionState.lastBlockedColliderId = "";
    const solidZone = getProceduralCitySolidZone(position, halfExtents);
    if (solidZone) {
      if (gameStarted && proceduralCityCollisionState.lastBlockedZoneId !== solidZone.id) {
        console.log("Blocked by Procedural City solid zone");
        proceduralCityCollisionState.lastBlockedZoneId = solidZone.id;
      }
      return true;
    }

    proceduralCityCollisionState.lastBlockedZoneId = "";
    return false;
  }

  function resolvePlayerHorizontalMovement(targetPosition) {
    if (isGridShotActive || isTrackingBallActive || isJiggleTrainingActive) {
      targetPosition.x = THREE.MathUtils.clamp(targetPosition.x, gridShotSpawn.x - 2, gridShotSpawn.x + 2);
      targetPosition.z = THREE.MathUtils.clamp(targetPosition.z, gridShotSpawn.z - 2, gridShotSpawn.z + 2);
    }
    clampMediumCombatPosition(targetPosition);

    slideXPosition.copy(playerPosition);
    slideXPosition.x = targetPosition.x;
    if (!collidesAt(slideXPosition)) {
      playerPosition.x = slideXPosition.x;
    }

    slideZPosition.copy(playerPosition);
    slideZPosition.z = targetPosition.z;
    if (!collidesAt(slideZPosition)) {
      playerPosition.z = slideZPosition.z;
    }
  }

  function resolvePlayerVerticalMovement(delta) {
    const wasGrounded = isGrounded;
    const previousFeetY = playerPosition.y;
    const previousHeadY = previousFeetY + playerHalfExtents.y;
    let nextFeetY = previousFeetY + verticalVelocity * delta;
    let grounded = false;

    if (verticalVelocity > 0) {
      let lowestCeilingY = Infinity;

      for (const obstacle of worldColliders) {
        const colliderBox = obstacle.userData.collider;
        if (!footprintOverlapsCollider(playerPosition, playerHalfExtents, colliderBox)) {
          continue;
        }

        if (previousHeadY > colliderBox.min.y + playerCollisionConfig.skinWidth) {
          continue;
        }

        const nextHeadY = nextFeetY + playerHalfExtents.y;
        if (nextHeadY < colliderBox.min.y - playerCollisionConfig.skinWidth) {
          continue;
        }

        lowestCeilingY = Math.min(lowestCeilingY, colliderBox.min.y);
      }
      if (lowestCeilingY !== Infinity) {
        nextFeetY = lowestCeilingY - playerHalfExtents.y;
        verticalVelocity = 0;
      }
    } else {
      let supportY = 0;
      let foundSupport = nextFeetY <= 0;

      for (const obstacle of worldColliders) {
        const colliderBox = obstacle.userData.collider;
        if (!footprintOverlapsCollider(playerPosition, playerHalfExtents, colliderBox)) {
          continue;
        }

        const colliderTopY = colliderBox.max.y;
        if (previousFeetY < colliderTopY - playerCollisionConfig.skinWidth) {
          continue;
        }

        if (nextFeetY > colliderTopY + playerCollisionConfig.groundSnapDistance) {
          continue;
        }

        if (!foundSupport || colliderTopY > supportY) {
          supportY = colliderTopY;
          foundSupport = true;
        }
      }
      if (foundSupport) {
        nextFeetY = supportY;
        verticalVelocity = 0;
        grounded = true;
      }
    }

    playerPosition.y = Math.max(0, nextFeetY);
    isGrounded = grounded;
    isJumping = !grounded;

    if (!wasGrounded && isGrounded) {
      syncPlayerAimIdleAnimation();
    }
  }

  function resolvePlayerPenetration() {
    for (let iteration = 0; iteration < playerCollisionConfig.penetrationResolveIterations; iteration += 1) {
      setBoundsAtPosition(playerCollisionBox, playerPosition);
      let corrected = false;

      for (const obstacle of worldColliders) {
        if (obstacle.userData.supportOnly === true) {
          continue;
        }

        const colliderBox = obstacle.userData.collider;
        if (!boxesOverlap(playerCollisionBox, colliderBox, 0)) {
          continue;
        }

        const pushLeft = colliderBox.min.x - playerCollisionBox.max.x;
        const pushRight = colliderBox.max.x - playerCollisionBox.min.x;
        const pushBackward = colliderBox.min.z - playerCollisionBox.max.z;
        const pushForward = colliderBox.max.z - playerCollisionBox.min.z;

        const resolveX = Math.abs(pushLeft) < Math.abs(pushRight) ? pushLeft : pushRight;
        const resolveZ = Math.abs(pushBackward) < Math.abs(pushForward) ? pushBackward : pushForward;

        if (Math.abs(resolveX) <= Math.abs(resolveZ)) {
          playerPosition.x += resolveX;
        } else {
          playerPosition.z += resolveZ;
        }

        corrected = true;
        break;
      }

      if (!corrected) {
        break;
      }
    }
  }

  function getImpactNormal(hit, target) {
    if (hit.face) {
      target.copy(hit.face.normal).transformDirection(hit.object.matrixWorld).normalize();
    } else {
      target.copy(raycaster.ray.direction).multiplyScalar(-1).normalize();
    }

    return target;
  }

  function armImpactMarkLifetime(impactMark, lifetimeMs) {
    if (!impactMark) {
      return;
    }

    if (impactMark.userData.timeoutId) {
      window.clearTimeout(impactMark.userData.timeoutId);
    }

    impactMark.userData.timeoutId = window.setTimeout(() => {
      removeImpactMark(impactMark);
    }, lifetimeMs);
  }

  function acquireImpactMark() {
    const effectQualityProfile = getCurrentEffectQualityProfile();
    if (impactMarks.length >= effectQualityProfile.maxImpactMarks) {
      const recycledImpactMark = impactMarks.shift();
      if (recycledImpactMark) {
        if (recycledImpactMark.userData.timeoutId) {
          window.clearTimeout(recycledImpactMark.userData.timeoutId);
          recycledImpactMark.userData.timeoutId = 0;
        }
        return recycledImpactMark;
      }
    }

    const pooledImpactMark = impactMarkPool.pop();
    if (pooledImpactMark) {
      return pooledImpactMark;
    }

    const impactMark = new THREE.Mesh(sharedImpactMarkGeometry, sharedImpactMarkMaterial);
    impactMark.userData.ignoreShotRay = true;
    impactMark.userData.timeoutId = 0;
    return impactMark;
  }

  function createImpactMark(position, normal) {
    const impactMark = acquireImpactMark();
    impactMark.position.copy(position).addScaledVector(normal, 0.01);
    impactLookTarget.copy(position).add(normal);
    impactMark.lookAt(impactLookTarget);
    impactMark.scale.setScalar(1);
    impactMark.visible = true;
    if (impactMark.parent !== scene) {
      scene.add(impactMark);
    }
    impactMarks.push(impactMark);
    activeBulletMarks = impactMarks.length;
    armImpactMarkLifetime(impactMark, getCurrentEffectQualityProfile().impactMarkLifetimeMs);
  }

  function removeImpactMark(impactMark) {
    if (!impactMark) {
      return;
    }

    if (impactMark.userData.timeoutId) {
      window.clearTimeout(impactMark.userData.timeoutId);
      impactMark.userData.timeoutId = 0;
    }

    const impactIndex = impactMarks.indexOf(impactMark);
    if (impactIndex >= 0) {
      impactMarks.splice(impactIndex, 1);
    }

    if (impactMark.parent) {
      impactMark.parent.remove(impactMark);
    }

    impactMark.visible = false;
    impactMarkPool.push(impactMark);
    activeBulletMarks = impactMarks.length;
  }

  function clearActorMuzzleFlash(actor) {
    if (actor.activeMuzzleFlash) {
      scene.remove(actor.activeMuzzleFlash);
      actor.activeMuzzleFlash.visible = false;
    }
  }

  function resetActorArmPose(actor) {
    actor.rightArmPivot.rotation.x = actor.rightArmRestRotationX;
    actor.armResetTimeoutId = 0;
  }

  function triggerActorShotPose(actor) {
    actor.rightArmPivot.rotation.x = actor.rightArmFireRotationX;

    if (actor.armResetTimeoutId) {
      window.clearTimeout(actor.armResetTimeoutId);
    }

    actor.armResetTimeoutId = window.setTimeout(() => {
      resetActorArmPose(actor);
    }, 100);
  }

  function triggerActorMuzzleFlash(actor, color = 0xffc247) {
    if (actor.activeMuzzleFlashTimeoutId) {
      window.clearTimeout(actor.activeMuzzleFlashTimeoutId);
      actor.activeMuzzleFlashTimeoutId = 0;
    }

    const effectQualityProfile = getCurrentEffectQualityProfile();
    if (!actor.activeMuzzleFlash) {
      actor.activeMuzzleFlash = new THREE.Mesh(
        sharedMuzzleFlashGeometry,
        getSharedMuzzleFlashMaterial(color)
      );
      actor.activeMuzzleFlash.userData.ignoreShotRay = true;
      actor.activeMuzzleFlash.visible = false;
    } else if (actor.activeMuzzleFlash.material !== getSharedMuzzleFlashMaterial(color)) {
      actor.activeMuzzleFlash.material = getSharedMuzzleFlashMaterial(color);
    }

    clearActorMuzzleFlash(actor);
    actor.root.updateMatrixWorld(true);
    actor.muzzleFlashWorldPosition.copy(actor.muzzleFlashLocalOffset);
    actor.rightArm.localToWorld(actor.muzzleFlashWorldPosition);
    actor.activeMuzzleFlash.position.copy(actor.muzzleFlashWorldPosition);
    actor.activeMuzzleFlash.scale.setScalar(effectQualityProfile.muzzleFlashScale);
    actor.activeMuzzleFlash.visible = true;

    scene.add(actor.activeMuzzleFlash);

    actor.activeMuzzleFlashTimeoutId = window.setTimeout(() => {
      clearActorMuzzleFlash(actor);
      actor.activeMuzzleFlashTimeoutId = 0;
    }, effectQualityProfile.muzzleFlashDurationMs);
  }

  function cleanupActorEffects(actor) {
    if (!actor) {
      return;
    }

    if (actor.armResetTimeoutId) {
      window.clearTimeout(actor.armResetTimeoutId);
      actor.armResetTimeoutId = 0;
    }

    if (actor.activeMuzzleFlashTimeoutId) {
      window.clearTimeout(actor.activeMuzzleFlashTimeoutId);
      actor.activeMuzzleFlashTimeoutId = 0;
    }

    resetActorArmPose(actor);
    clearActorMuzzleFlash(actor);
  }

  function buildBoxActor(colors) {
    const root = new THREE.Group();
    const visual = new THREE.Group();
    root.add(visual);

    const actorBody = new THREE.Mesh(
      bodyGeometry,
      new THREE.MeshStandardMaterial({ color: colors.body, roughness: 0.75 })
    );
    actorBody.position.y = 1.1;
    actorBody.castShadow = true;
    actorBody.receiveShadow = true;
    visual.add(actorBody);

    const actorHead = new THREE.Mesh(
      headGeometry,
      new THREE.MeshStandardMaterial({ color: colors.head, roughness: 0.7 })
    );
    actorHead.position.y = 2.05;
    actorHead.castShadow = true;
    visual.add(actorHead);

    const actorLeftArm = new THREE.Mesh(
      armGeometry,
      new THREE.MeshStandardMaterial({ color: colors.limb, roughness: 0.8 })
    );
    actorLeftArm.position.set(-0.62, 1.18, 0);
    actorLeftArm.castShadow = true;
    visual.add(actorLeftArm);

    const actorRightArmPivot = new THREE.Group();
    actorRightArmPivot.position.set(0.62, 1.57, 0);
    visual.add(actorRightArmPivot);

    const actorRightArm = new THREE.Mesh(
      armGeometry,
      new THREE.MeshStandardMaterial({ color: colors.limb, roughness: 0.8 })
    );
    actorRightArm.position.set(0, -0.39, 0);
    actorRightArm.castShadow = true;
    actorRightArmPivot.add(actorRightArm);

    const actorLeftLeg = new THREE.Mesh(
      legGeometry,
      new THREE.MeshStandardMaterial({ color: colors.limb, roughness: 0.8 })
    );
    actorLeftLeg.position.set(-0.22, 0.46, 0);
    actorLeftLeg.castShadow = true;
    visual.add(actorLeftLeg);

    const actorRightLeg = new THREE.Mesh(
      legGeometry,
      new THREE.MeshStandardMaterial({ color: colors.limb, roughness: 0.8 })
    );
    actorRightLeg.position.set(0.22, 0.46, 0);
    actorRightLeg.castShadow = true;
    visual.add(actorRightLeg);

    const actorLegAnchor = new THREE.Group();
    actorLegAnchor.position.set(0, 0.46, 0);
    visual.add(actorLegAnchor);

    return {
      root,
      visual,
      body: actorBody,
      head: actorHead,
      leftArm: actorLeftArm,
      rightArmPivot: actorRightArmPivot,
      rightArm: actorRightArm,
      leftLeg: actorLeftLeg,
      rightLeg: actorRightLeg,
      legAnchor: actorLegAnchor,
      rightArmRestRotationX: 0,
      rightArmFireRotationX: -Math.PI / 2,
      armResetTimeoutId: 0,
      activeMuzzleFlash: null,
      activeMuzzleFlashTimeoutId: 0,
      muzzleFlashLocalOffset: new THREE.Vector3(0, -0.43, 0),
      muzzleFlashWorldPosition: new THREE.Vector3()
    };
  }

  function createPvpHitbox(size, zone, name) {
    const hitbox = new THREE.Mesh(
      new THREE.BoxGeometry(size.x, size.y, size.z),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    hitbox.visible = false;
    hitbox.name = name;
    hitbox.userData.hitZone = zone;
    hitbox.userData.ownerType = "lanPlayerHitbox";
    hitbox.userData.ignoreShotRay = true;
    return hitbox;
  }

  function setActorPvpOwnerId(actor, playerId) {
    if (!actor) {
      return;
    }

    actor.pvpPlayerId = playerId;

    for (const hitbox of actor.pvpHitboxes ?? []) {
      hitbox.userData.playerId = playerId;
      hitbox.userData.actorRef = actor;
    }
  }

  function createActorPvpHitboxes(actor, playerId = "") {
    if (!actor?.root) {
      return;
    }

    if (actor.pvpHitboxes?.length) {
      setActorPvpOwnerId(actor, playerId || actor.pvpPlayerId || "");
      return;
    }

    const headHitbox = createPvpHitbox(
      new THREE.Vector3(0.58, 0.6, 0.58),
      "head",
      "lanPlayerHeadHitbox"
    );
    const bodyHitbox = createPvpHitbox(
      new THREE.Vector3(0.9, 1.3, 0.68),
      "body",
      "lanPlayerBodyHitbox"
    );
    const legsHitbox = createPvpHitbox(
      new THREE.Vector3(0.86, 0.95, 0.68),
      "legs",
      "lanPlayerLegHitbox"
    );

    actor.root.add(headHitbox);
    actor.root.add(bodyHitbox);
    actor.root.add(legsHitbox);

    actor.pvpHeadHitbox = headHitbox;
    actor.pvpBodyHitbox = bodyHitbox;
    actor.pvpLegsHitbox = legsHitbox;
    actor.pvpHitboxes = [headHitbox, bodyHitbox, legsHitbox];
    setActorPvpOwnerId(actor, playerId);
    updateActorPvpHitboxes(actor, actor === playerActor ? (isCrouching ? 1 : 0) : actor.crouchBlend ?? 0);
  }

  function updateActorPvpHitboxes(actor, crouchBlend = 0) {
    if (!actor?.pvpHitboxes?.length) {
      return;
    }

    const clampedCrouchBlend = THREE.MathUtils.clamp(crouchBlend, 0, 1);

    // ADJUSTED DROPS: Target ~50% of standing height (Top ~1.18 units)
    actor.pvpHeadHitbox.position.set(0, 2.06 - (1.12 * clampedCrouchBlend), 0);
    actor.pvpBodyHitbox.position.set(0, 1.22 - (0.60 * clampedCrouchBlend), 0);
    actor.pvpLegsHitbox.position.set(0, 0.56 - (0.25 * clampedCrouchBlend), 0);

    actor.pvpHeadHitbox.scale.set(1, 1 - (0.20 * clampedCrouchBlend), 1);
    actor.pvpBodyHitbox.scale.set(1, 1 - (0.45 * clampedCrouchBlend), 1);
    actor.pvpLegsHitbox.scale.set(1, 1 - (0.40 * clampedCrouchBlend), 1);

    // Logging for state changes with 50% metric
    if (actor === playerActor) {
      const isCrouchingNow = clampedCrouchBlend > 0.5;
      if (actor._lastLogCrouchState !== isCrouchingNow) {
        actor._lastLogCrouchState = isCrouchingNow;
        const standingTopY = 2.36;
        const currentHeadCenter = 2.06 - (1.12 * clampedCrouchBlend);
        const currentHeadHalfHeight = 0.3 * (1 - 0.20 * clampedCrouchBlend);
        const crouchedTopY = currentHeadCenter + currentHeadHalfHeight;
        const crouchHeightPercent = (crouchedTopY / standingTopY) * 100;

        console.log("[CROUCH HITBOX] updated", {
          crouching: isCrouchingNow,
          crouchBlend: clampedCrouchBlend.toFixed(2),
          standingTopY: standingTopY.toFixed(2),
          crouchedTopY: crouchedTopY.toFixed(2),
          crouchHeightPercent: crouchHeightPercent.toFixed(1) + "%"
        });
      }
    }
  }

  function clearActorPvpHitboxes(actor) {
    if (!actor?.pvpHitboxes?.length) {
      return;
    }

    for (const hitbox of actor.pvpHitboxes) {
      if (hitbox.parent) {
        hitbox.parent.remove(hitbox);
      }
      hitbox.geometry.dispose();
      hitbox.material.dispose();
    }

    actor.pvpHitboxes.length = 0;
    actor.pvpHeadHitbox = null;
    actor.pvpBodyHitbox = null;
    actor.pvpLegsHitbox = null;
  }

  function tagEnemyHitMesh(mesh, enemyActor, zone) {
    mesh.userData.ownerType = "enemy";
    mesh.userData.isEnemy = true;
    mesh.userData.enemyRef = enemyActor;
    mesh.userData.hitZone = zone;
  }

  function clearEnemyHitTags(enemyActor) {
    if (!enemyActor?.hitMeshes) {
      return;
    }

    for (const mesh of enemyActor.hitMeshes) {
      delete mesh.userData.ownerType;
      delete mesh.userData.isEnemy;
      delete mesh.userData.enemyRef;
      delete mesh.userData.hitZone;
    }
  }

  function createEnemyHitboxes(enemyActor) {
    const headHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.6, 0.6),
      new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
      })
    );
    headHitbox.userData.hitZone = "head";
    headHitbox.userData.enemyRef = enemyActor;
    headHitbox.userData.isEnemy = true;
    headHitbox.userData.isEnemyHitbox = true;
    headHitbox.userData.ignoreShotRay = true;
    headHitbox.name = "enemyHeadHitbox";
    headHitbox.visible = false;

    const bodyHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 1.6, 0.8),
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true
      })
    );
    bodyHitbox.userData.hitZone = "body";
    bodyHitbox.userData.enemyRef = enemyActor;
    bodyHitbox.userData.isEnemy = true;
    bodyHitbox.userData.isEnemyHitbox = true;
    bodyHitbox.userData.ignoreShotRay = true;
    bodyHitbox.name = "enemyBodyHitbox";
    bodyHitbox.visible = false;

    const legHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(1.0, 1.0, 0.8),
      new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        wireframe: true
      })
    );
    legHitbox.userData.hitZone = "legs";
    legHitbox.userData.enemyRef = enemyActor;
    legHitbox.userData.isEnemy = true;
    legHitbox.userData.isEnemyHitbox = true;
    legHitbox.userData.ignoreShotRay = true;
    legHitbox.name = "enemyLegHitbox";
    legHitbox.visible = false;

    enemyActor.headMesh.add(headHitbox);
    enemyActor.bodyMesh.add(bodyHitbox);
    enemyActor.legMesh.add(legHitbox);

    enemyActor.headHitbox = headHitbox;
    enemyActor.bodyHitbox = bodyHitbox;
    enemyActor.legHitbox = legHitbox;
    enemyActor.hitboxes = [headHitbox, bodyHitbox, legHitbox];
  }

  function clearEnemyHitboxes(enemyActor) {
    if (!enemyActor?.hitboxes) {
      return;
    }

    for (const hitbox of enemyActor.hitboxes) {
      delete hitbox.userData.isEnemy;
      delete hitbox.userData.isEnemyHitbox;
      if (hitbox.parent) {
        hitbox.parent.remove(hitbox);
      }
      hitbox.geometry.dispose();
      hitbox.material.dispose();
    }

    enemyActor.hitboxes.length = 0;
    enemyActor.headHitbox = null;
    enemyActor.bodyHitbox = null;
    enemyActor.legHitbox = null;
  }

  function isEnemySpawnClear(position) {
    if (position.distanceTo(player.position) <= 5) {
      return false;
    }

    for (const remotePlayer of remotePlayers.values()) {
      if (!remotePlayer?.root || remotePlayer.isDead) {
        continue;
      }

      if (remotePlayer.root.position.distanceTo(position) <= 5) {
        return false;
      }
    }

    return (
      !collidesAt(position, enemyHalfExtents) &&
      enemies.every((enemyActor) => enemyActor.root.position.distanceTo(position) > 2.2)
    );
  }

  function findEnemySpawnPosition(index = 0, total = 1) {
    for (let attempt = 0; attempt < enemySpawnPoints.length * 3; attempt += 1) {
      const basePoint = enemySpawnPoints[attempt % enemySpawnPoints.length];
      const ring = Math.floor(attempt / enemySpawnPoints.length);
      const angle = (index / Math.max(total, 1)) * Math.PI * 2 + ring * 0.65;
      const radius = total > 1 ? 2.6 + ring * 1.35 : ring * 1.35;
      const candidate = basePoint.clone().add(new THREE.Vector3(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      ));

      if (isEnemySpawnClear(candidate)) {
        return candidate;
      }
    }

    return enemySpawnPoints[index % enemySpawnPoints.length].clone();
  }

  function updateEnemyHealthVisuals(enemyActor) {
    if (!enemyActor) {
      return;
    }

    if (enemyActor.isDead) {
      if (enemyActor.hpBarContainer && enemyActor.lastHpBarVisible !== false) {
        enemyActor.hpBarContainer.style.display = "none";
      }
      enemyActor.lastHpBarVisible = false;
      return;
    }

    const safeMaxHealth = Math.max(1, Number(enemyActor.maxHealth) || enemyMaxHp);
    const safeHealth = THREE.MathUtils.clamp(Number(enemyActor.health) || 0, 0, safeMaxHealth);
    const ratio = safeHealth / safeMaxHealth;
    if (enemyActor.hpBarFill && enemyActor.lastHpBarRatio !== ratio) {
      enemyActor.hpBarFill.style.width = `${ratio * 100}%`;
      enemyActor.lastHpBarRatio = ratio;
    }
  }

  function clearEnemyFireState(enemyActor) {
    if (!enemyActor) {
      return;
    }

    enemyActor.isFiring = false;
    if (enemyActor.fireStateTimeoutId) {
      window.clearTimeout(enemyActor.fireStateTimeoutId);
      enemyActor.fireStateTimeoutId = 0;
    }
  }

  function resetActorDeathDrop(actor) {
    if (!actor?.root) {
      return;
    }

    actor.root.visible = true;
    actor.root.rotation.x = 0;
    actor.root.rotation.z = 0;
  }

  function applyActorDeathDrop(actor) {
    if (!actor?.root) {
      return;
    }

    actor.root.visible = true;
    actor.root.rotation.x = 0;
    actor.root.rotation.z = -Math.PI * 0.45;
  }

  function setEnemyAliveState(enemyActor) {
    if (!enemyActor?.root) {
      return;
    }

    enemyActor.isDead = false;
    resetActorDeathDrop(enemyActor);
    updateEnemyHealthVisuals(enemyActor);
  }

  function setEnemyDeathState(enemyActor) {
    if (!enemyActor?.root) {
      return;
    }

    enemyActor.isDead = true;
    enemyActor.state = "dead";
    clearEnemyFireState(enemyActor);
    cleanupActorEffects(enemyActor);
    applyActorDeathDrop(enemyActor);
    updateEnemyHealthVisuals(enemyActor);
  }

  function removeEnemy(targetEnemy = enemy, options = {}) {
    if (!targetEnemy) {
      return;
    }

    const suppressNetworkBroadcast = Boolean(options.suppressNetworkBroadcast);
    const suppressWaveUpdate = Boolean(options.suppressWaveUpdate);

    if (!suppressWaveUpdate && targetEnemy.waveId === activeWaveId && !targetEnemy.waveRemovalCounted) {
      targetEnemy.waveRemovalCounted = true;
      waveRemaining = Math.max(0, waveRemaining - 1);
      updateWaveStatusUi();

      if (waveSessionActive && !waveCountdownActive && waveRemaining === 0) {
        handleWaveCleared();
      }
    }

    targetEnemy.isDead = true;
    if (targetEnemy.characterMixer) {
      targetEnemy.characterMixer.stopAllAction();
      targetEnemy.characterMixer = null;
      targetEnemy.characterIdleAction = null;
    }
    clearEnemyFireState(targetEnemy);
    cleanupActorEffects(targetEnemy);
    clearEnemyHitTags(targetEnemy);
    clearEnemyHitboxes(targetEnemy);
    removeEnemyHpBar(targetEnemy);
    if (targetEnemy.root?.parent) {
      targetEnemy.root.parent.remove(targetEnemy.root);
    }
    if (targetEnemy.hitMeshes) {
      targetEnemy.hitMeshes.length = 0;
    }
    unregisterSharedEnemy(targetEnemy);
    const enemyIndex = enemies.indexOf(targetEnemy);
    if (enemyIndex >= 0) {
      enemies.splice(enemyIndex, 1);
    }

    if (enemy === targetEnemy) {
      enemy = enemies[0] ?? null;
    }

    if (!suppressNetworkBroadcast && targetEnemy.networkId && isLanHost && isLanSessionActive()) {
      broadcastSharedEnemyRemoval(targetEnemy, {
        reason: String(options.reason || "removed")
      });
    }
  }

  function removeAllEnemies() {
    const enemiesToRemove = [...enemies];
    for (const enemyActor of enemiesToRemove) {
      removeEnemy(enemyActor);
    }
  }

  function clearActiveEnemiesForRespawn() {
    cancelActiveWaveSessionForRespawn();
    removeAllEnemies();
  }

  function handleEnemyDeath(targetEnemy, options = {}) {
    if (!targetEnemy || targetEnemy.isDead) {
      return;
    }

    const enemyDeathPosition = targetEnemy.root.position.clone();
    const shouldSpawnPickup = options.spawnPickup ?? !isLanSessionActive();
    const shouldSpawnOnlinePickup = options.spawnOnlinePickup !== false &&
      isLanHost &&
      isSharedOnlineSessionActive();
    setEnemyDeathState(targetEnemy);

    if (targetEnemy.isJiggleTrainingTarget) {
      console.log("[JIGGLE TRAINING] enemy killed, respawning");
      jiggleTrainingHits++;
      updateJiggleTrainingHudText();
      // Remove current one and spawn new one
      setTimeout(() => {
        removeEnemy(targetEnemy);
        if (isJiggleTrainingActive) {
          spawnJiggleTrainingEnemy();
        }
      }, 50); // Small delay to show death animation
      return;
    }
    if (targetEnemy.isMediumCombatTarget) {
      console.log("[Medium Range Jiggle Training] enemy killed, respawning");
      setTimeout(() => {
        removeEnemy(targetEnemy);
        if (mediumCombatEnemy === targetEnemy) {
          mediumCombatEnemy = null;
        }
        if (isMediumCombatActive) {
          spawnMediumCombatJiggleEnemy();
        }
      }, 50);
      return;
    }
    if (shouldSpawnOnlinePickup) {
      spawnSharedOnlineHealthPickup(enemyDeathPosition, {
        pickupType: "enemy",
        sourceEnemyId: targetEnemy.networkId || ""
      });
    } else if (shouldSpawnPickup) {
      spawnHealthPickup(enemyDeathPosition);
    }
    if (!options.suppressStatus) {
      showStatusMessage("Enemy down.", 1400);
    }

    window.setTimeout(() => {
      removeEnemy(targetEnemy, {
        suppressNetworkBroadcast: Boolean(options.suppressNetworkBroadcast),
        reason: "dead"
      });
    }, Number.isFinite(options.removalDelayMs) ? options.removalDelayMs : 350);
  }

  function applyDamageToEnemy(targetEnemy, amount) {
    if (!targetEnemy || targetEnemy.isDead) {
      return false;
    }

    targetEnemy.takeDamage(amount);
    return true;
  }

  function setCrouchState(isActive) {
    const nextCrouchState = Boolean(isActive) && gameStarted && !playerDead && !menuOpen && !homeSettingsViewOpen;
    if (isCrouching === nextCrouchState) {
      return;
    }

    isCrouching = nextCrouchState;
    syncPlayerAimIdleAnimation();
    syncMobileHudActionAvailability();
  }

  function clearMovementInput() {
    moveState.forward = false;
    moveState.backward = false;
    moveState.left = false;
    moveState.right = false;
    moveState.sprint = false;
    isShooting = false;
    setCrouchState(false);
  }

  function getPlayerIdHash(value) {
    let hash = 0;
    const text = String(value ?? "");

    for (let index = 0; index < text.length; index += 1) {
      hash = ((hash << 5) - hash) + text.charCodeAt(index);
      hash |= 0;
    }

    return Math.abs(hash);
  }

  function getLanRespawnPoint(playerId) {
    const respawnCandidates = [currentPlayerSpawn.clone(), ...enemySpawnPoints.map((spawn) => spawn.clone())];
    if (!respawnCandidates.length) {
      return currentPlayerSpawn.clone();
    }

    const livingPositions = [];
    if (localPlayerId && playerId !== localPlayerId && player && !playerDead) {
      livingPositions.push(player.position.clone());
    }
    for (const [remotePlayerId, remotePlayer] of remotePlayers) {
      if (remotePlayerId === playerId || remotePlayer.isDead) {
        continue;
      }

      livingPositions.push(remotePlayer.root.position.clone());
    }

    const startIndex = getPlayerIdHash(playerId) % respawnCandidates.length;
    for (let attempt = 0; attempt < respawnCandidates.length; attempt += 1) {
      const candidate = respawnCandidates[(startIndex + attempt) % respawnCandidates.length];
      if (collidesAt(candidate, playerHalfExtents)) {
        continue;
      }

      if (livingPositions.every((position) => position.distanceToSquared(candidate) > 4 * 4)) {
        return candidate.clone();
      }
    }

    return respawnCandidates[startIndex].clone();
  }

  function getCombatDisplayName(playerId) {
    if (playerId === localPlayerId) {
      return playerName;
    }

    return remotePlayers.get(playerId)?.playerName ||
      ensureLanCombatState(playerId)?.name ||
      "Player";
  }

  function buildRespawnStateForPlayer(playerId, spawnPosition) {
    const combatState = ensureLanCombatState(playerId);
    const weaponState = playerId === localPlayerId
      ? buildNetworkWeaponState(currentGun)
      : buildNetworkWeaponState(remotePlayers.get(playerId)?.weaponState ?? combatState?.weaponState);

    return {
      name: getCombatDisplayName(playerId),
      position: {
        x: Number(spawnPosition.x.toFixed(3)),
        y: Number(spawnPosition.y.toFixed(3)),
        z: Number(spawnPosition.z.toFixed(3))
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
        bodyYaw: 0,
        yaw: 0,
        pitch: 0
      },
      crouching: false,
      movement: {
        forward: false,
        backward: false,
        left: false,
        right: false,
        sprint: false,
        moving: false
      },
      weapon: weaponState
    };
  }

  function respawnPlayer({ preserveEnemies = true, spawnPosition = null } = {}) {
    if (deathRespawnTimeoutId) {
      window.clearTimeout(deathRespawnTimeoutId);
      deathRespawnTimeoutId = 0;
    }

    if (preserveEnemies) {
      // Respawn preserving active enemies
    } else {
      // Respawn clearing active enemies
      clearActiveEnemiesForRespawn();
    }

    resetPlayerToSpawnPosition(spawnPosition ?? currentPlayerSpawn);
    if (localPlayerId) {
      setActorPvpOwnerId(playerActor, localPlayerId);
      ensureLanCombatState(localPlayerId, {
        hp: playerHp,
        maxHp: playerMaxHp,
        isDead: false,
        name: playerName,
        weaponState: currentGun
      });
    }
    statusMessage.classList.remove("visible");
    hideDeathOverlay();
    if (gameStarted && !menuOpen) {
      requestLock();
    }
    console.log("PLAYER RESPAWNED AND STATE RESET");
  }

  function triggerDeathOverlayRespawn(preserveEnemies) {
    if (deathOverlayActionLocked || !playerDead) {
      return;
    }

    deathOverlayActionLocked = true;
    setDeathOverlayButtonsDisabled(true);
    deathOverlaySubtitle.textContent = preserveEnemies
      ? "Returning to the same fight..."
      : "Clearing hostiles and respawning...";
    respawnPlayer({ preserveEnemies });
  }

  function handlePlayerDeath({ showOverlay = true, statusText = "" } = {}) {
    if (playerDead) {
      return;
    }

    if (reloadTimeoutId) {
      window.clearTimeout(reloadTimeoutId);
      reloadTimeoutId = 0;
    }
    isReloading = false;
    reloadEndTimeMs = 0;
    reloadResumeAutoFire = false;
    playerDead = true;
    if (player) {
      player.isDead = true;
    }
    if (playerAnimationMixer) {
      playerAnimationMixer.timeScale = 0;
    }
    clearMovementInput();
    clearActiveMobileGameplayInputs();
    cleanupActorEffects(playerActor);
    applyActorDeathDrop(playerActor);
    closeMenus();

    // Prevent death return to home page
    if (document.pointerLockElement === canvas) {
      document.exitPointerLock();
    }

    if (showOverlay) {
      // Custom death overlay: GOT CLAPPED
      showDeathOverlay();
    } else if (isLanSessionActive()) {
      showAutoRespawnDeathOverlay(statusText || "Respawning...");
    } else {
      hideDeathOverlay();
      if (statusText) {
        showStatusMessage(statusText, Math.max(1200, lanPlayerRespawnDelayMs));
      }
    }

    if (deathRespawnTimeoutId) {
      window.clearTimeout(deathRespawnTimeoutId);
      deathRespawnTimeoutId = 0;
    }
  }

  // Death overlay option: Respawn and Fight
  deathOverlayRespawnFightButton.addEventListener("click", () => {
    triggerDeathOverlayRespawn(true);
  });

  // Death overlay option: Respawn with enemy clear
  deathOverlayRespawnClearButton.addEventListener("click", () => {
    triggerDeathOverlayRespawn(false);
  });

  function applyDamageToPlayer(amount, { showOverlay = true, statusText = "" } = {}) {
    if (playerDead) {
      return;
    }

    playerHp = Math.max(0, playerHp - amount);
    updatePlayerHpUi();

    if (playerHp <= 0) {
      handlePlayerDeath({ showOverlay, statusText });
    }
  }

  function isPlayerMovingFast() {
    const playerSpeed = horizontalVelocity.length();
    const sprintSpeedThreshold = moveConfig.sprintSpeed * 0.8;
    return Boolean(moveState.sprint && isMoving && playerSpeed > sprintSpeedThreshold);
  }

  function getSelectedDifficultyKey() {
    return difficultySelect.value in difficultyProfiles ? difficultySelect.value : "noob";
  }

  function getSafeWaveEnemyCount() {
    const safeCount = THREE.MathUtils.clamp(
      Math.floor(Number(waveEnemyCountInput.value) || 5),
      1,
      20
    );
    waveEnemyCountInput.value = String(safeCount);
    return safeCount;
  }

  function getSafeWaveCount() {
    const safeCount = THREE.MathUtils.clamp(
      Math.floor(Number(waveCountInput.value) || 5),
      1,
      10
    );
    waveCountInput.value = String(safeCount);
    return safeCount;
  }

  // Wave session start
  function startWave(currentWave = currentWaveIndex) {
    activeWaveId += 1;
    currentWaveIndex = currentWave;
    waveCountdownActive = false;
    waveCountdownRemaining = 0;
    waveRemaining = enemiesPerWave;
    updateWaveStatusUi();

    for (let index = 0; index < enemiesPerWave; index += 1) {
      const timeoutId = window.setTimeout(() => {
        const pendingIndex = pendingWaveSpawnTimeoutIds.indexOf(timeoutId);
        if (pendingIndex >= 0) {
          pendingWaveSpawnTimeoutIds.splice(pendingIndex, 1);
        }

        if (!waveSessionActive || activeWaveId <= 0 || currentWaveIndex !== currentWave) {
          return;
        }

        createEnemy(findEnemySpawnPosition(index, enemiesPerWave), {
          suppressStatus: true,
          difficultyKey: waveSessionDifficultyKey,
          waveId: activeWaveId
        });
      }, index * 120);

      pendingWaveSpawnTimeoutIds.push(timeoutId);
    }
  }

  // Next wave countdown
  function startNextWaveCountdown() {
    clearWaveTimers();
    waveCountdownActive = true;
    waveCountdownRemaining = 3;
    updateWaveStatusUi();

    waveCountdownIntervalId = window.setInterval(() => {
      waveCountdownRemaining = Math.max(0, waveCountdownRemaining - 1);

      if (waveCountdownRemaining > 0) {
        updateWaveStatusUi();
        return;
      }

      window.clearInterval(waveCountdownIntervalId);
      waveCountdownIntervalId = 0;

      if (currentWaveIndex < totalWaves) {
        startWave(currentWaveIndex + 1);
      } else {
        completeWaveSession();
      }
    }, 1000);
  }

  // Wave completion
  function handleWaveCleared() {
    const waveLabel = getWaveOrdinalLabel(currentWaveIndex);

    if (currentWaveIndex >= totalWaves) {
      completeWaveSession();
      return;
    }

    showStatusMessage(`${waveLabel} WAVE COMPLETED`, 1800);
    startNextWaveCountdown();
  }

  function startEnemyWaveSession(
    requestedEnemyCount = getSafeWaveEnemyCount(),
    requestedWaveCount = getSafeWaveCount(),
    options = {}
  ) {
    const safeEnemyCount = THREE.MathUtils.clamp(Math.floor(Number(requestedEnemyCount) || 5), 1, 20);
    const safeWaveCount = THREE.MathUtils.clamp(Math.floor(Number(requestedWaveCount) || 5), 1, 10);
    const requestedDifficultyKey = options.difficultyKey && options.difficultyKey in difficultyProfiles
      ? options.difficultyKey
      : getSelectedDifficultyKey();

    if (isLanClient && isLanSessionActive()) {
      sendNetworkMessage({
        type: "enemy_wave_request",
        enemyCount: safeEnemyCount,
        waveCount: safeWaveCount,
        difficultyKey: requestedDifficultyKey
      });
      showStatusMessage("Wave request sent to LAN host.", 1600);
      return;
    }

    if (waveSessionActive) {
      showStatusMessage("Wave session already active.", 1400);
      updateWaveStatusUi();
      return;
    }

    clearWaveTimers();
    enemiesPerWave = safeEnemyCount;
    totalWaves = safeWaveCount;
    waveEnemyCountInput.value = String(enemiesPerWave);
    waveCountInput.value = String(totalWaves);
    waveSessionDifficultyKey = requestedDifficultyKey;
    waveSessionActive = true;
    currentWaveIndex = 0;
    waveRemaining = 0;
    showStatusMessage(
      `${enemiesPerWave} ${difficultyProfiles[waveSessionDifficultyKey].label} enemies per wave. Wave 1 starting.`,
      1800
    );
    startWave(1);
  }

  function createEnemy(spawnPosition = null, options = {}) {
    const difficultyKey = options.difficultyKey && options.difficultyKey in difficultyProfiles
      ? options.difficultyKey
      : getSelectedDifficultyKey();
    const profile = difficultyProfiles[difficultyKey];
    const isNetworkReplica = Boolean(options.isNetworkReplica);
    const shouldUseSharedEnemyId = isNetworkReplica || (isLanSessionActive() && isLanHost);
    const enemyId = typeof options.enemyId === "string" && options.enemyId.trim()
      ? options.enemyId.trim()
      : (shouldUseSharedEnemyId ? generateSharedEnemyId() : "");
    const nextEnemy = buildBoxActor({
      body: 0xc83737,
      head: 0xffd0d0,
      limb: 0x8d1f1f
    });

    nextEnemy.root.position.copy(spawnPosition ?? findEnemySpawnPosition(enemies.length, Math.max(enemies.length + 1, 1)));
    nextEnemy.root.rotation.y = Number.isFinite(options.rotationY) ? options.rotationY : Math.PI;
    nextEnemy.maxHealth = Number.isFinite(options.maxHealth) ? Math.max(1, Number(options.maxHealth)) : enemyMaxHp;
    nextEnemy.health = Number.isFinite(options.health)
      ? THREE.MathUtils.clamp(Number(options.health), 0, nextEnemy.maxHealth)
      : nextEnemy.maxHealth;
    nextEnemy.profileKey = difficultyKey;
    nextEnemy.profile = profile;
    nextEnemy.state = typeof options.state === "string" && options.state ? options.state : "idle";
    nextEnemy.isDead = Boolean(options.isDead);
    nextEnemy.isReloading = false;
    nextEnemy.reloadEndTime = 0;
    nextEnemy.lastShotTime = -Infinity;
    nextEnemy.isFiring = false;
    nextEnemy.fireStateTimeoutId = 0;
    nextEnemy.ammo = profile.clipSize;
    nextEnemy.strafeSign = Math.random() < 0.5 ? -1 : 1;
    nextEnemy.nextStrafeSwitch = clock.elapsedTime + 1.4;
    nextEnemy.engageTime = clock.elapsedTime + profile.reactionTime;
    nextEnemy.waveId = Number.isFinite(options.waveId) ? options.waveId : null;
    nextEnemy.waveRemovalCounted = nextEnemy.waveId === null;
    nextEnemy.networkId = enemyId;
    nextEnemy.isSharedEnemy = Boolean(enemyId);
    nextEnemy.isNetworkReplica = isNetworkReplica;
    nextEnemy.isHostAuthoritative = !isNetworkReplica && (!isLanSessionActive() || isLanHost);
    nextEnemy.networkTargetPosition = nextEnemy.root.position.clone();
    nextEnemy.networkTargetYaw = nextEnemy.root.rotation.y;
    nextEnemy.hasReceivedNetworkState = !isNetworkReplica;
    nextEnemy.targetPlayerId = typeof options.targetPlayerId === "string" ? options.targetPlayerId : "";
    attachMotusManToEnemy(nextEnemy, enemyMotusManBodyColor);
    nextEnemy.takeDamage = function (amount) {
      if (this.isDead) {
        return;
      }

      this.health = Math.max(0, this.health - Math.max(1, Number(amount) || 1));
      updateEnemyHealthVisuals(this);

      if (this.health <= 0) {
        handleEnemyDeath(this, {
          spawnPickup: !isLanSessionActive()
        });
      }
    };
    nextEnemy.hitMeshes = [
      nextEnemy.head,
      nextEnemy.body,
      nextEnemy.leftArm,
      nextEnemy.rightArm,
      nextEnemy.leftLeg,
      nextEnemy.rightLeg
    ];
    nextEnemy.head.name = "enemyHead";
    nextEnemy.body.name = "enemyBody";
    nextEnemy.leftArm.name = "enemyLeftArm";
    nextEnemy.rightArm.name = "enemyRightArm";
    nextEnemy.leftLeg.name = "enemyLeftLeg";
    nextEnemy.rightLeg.name = "enemyRightLeg";
    nextEnemy.headMesh = nextEnemy.head;
    nextEnemy.bodyMesh = nextEnemy.body;
    nextEnemy.legMesh = nextEnemy.legAnchor;

    tagEnemyHitMesh(nextEnemy.head, nextEnemy, "head");
    tagEnemyHitMesh(nextEnemy.body, nextEnemy, "body");
    tagEnemyHitMesh(nextEnemy.leftArm, nextEnemy, "body");
    tagEnemyHitMesh(nextEnemy.rightArm, nextEnemy, "body");
    tagEnemyHitMesh(nextEnemy.leftLeg, nextEnemy, "body");
    tagEnemyHitMesh(nextEnemy.rightLeg, nextEnemy, "body");
    createEnemyHitboxes(nextEnemy);
    createEnemyHpBar(nextEnemy);

    scene.add(nextEnemy.root);
    enemies.push(nextEnemy);
    if (nextEnemy.isSharedEnemy) {
      registerSharedEnemy(nextEnemy);
    }
    enemy = nextEnemy;
    console.log("[DIAG] Enemy spawned", {
      visible: nextEnemy.root.visible,
      cameraMode
    });
    console.log(`[DIAG] Enemy visible state after spawn: ${nextEnemy.root.visible}`);
    if (nextEnemy.isDead) {
      setEnemyDeathState(nextEnemy);
    } else {
      setEnemyAliveState(nextEnemy);
    }

    if (!options.suppressStatus && !isNetworkReplica) {
      showStatusMessage(`${profile.label} enemy deployed.`, 1600);
    }

    if (
      !options.suppressNetworkBroadcast &&
      nextEnemy.isSharedEnemy &&
      isLanHost &&
      isLanSessionActive()
    ) {
      broadcastSharedEnemySpawns([nextEnemy]);
    }

    return nextEnemy;
  }

  function spawnEnemies(count, options = {}) {
    const safeCount = THREE.MathUtils.clamp(Math.floor(Number(count) || 1), 1, 10);
    const requestedDifficultyKey = options.difficultyKey && options.difficultyKey in difficultyProfiles
      ? options.difficultyKey
      : getSelectedDifficultyKey();

    if (isLanClient && isLanSessionActive()) {
      sendNetworkMessage({
        type: "enemy_spawn_request",
        count: safeCount,
        difficultyKey: requestedDifficultyKey
      });
      showStatusMessage("Enemy spawn request sent to LAN host.", 1500);
      return;
    }

    for (let index = 0; index < safeCount; index += 1) {
      createEnemy(findEnemySpawnPosition(index, safeCount), {
        suppressStatus: true,
        difficultyKey: requestedDifficultyKey
      });
    }

    const difficultyLabel = difficultyProfiles[requestedDifficultyKey].label;
    showStatusMessage(`${safeCount} ${difficultyLabel} enem${safeCount === 1 ? "y" : "ies"} deployed.`, 1600);
  }

  function selectEnemyTarget(enemyActor) {
    if (!enemyActor?.root) {
      return null;
    }

    let bestTarget = null;
    let bestDistanceSq = Infinity;

    if (player && !playerDead) {
      enemyTargetOffset.copy(player.position).sub(enemyActor.root.position);
      enemyTargetOffset.y = 0;
      bestDistanceSq = enemyTargetOffset.lengthSq();
      bestTarget = {
        playerId: localPlayerId,
        position: player.position,
        movingFast: isPlayerMovingFast(),
        crouching: Boolean(isCrouching)
      };
    }

    for (const [remotePlayerId, remotePlayer] of remotePlayers) {
      if (!remotePlayer?.root || remotePlayer.isDead) {
        continue;
      }

      enemyTargetOffset.copy(remotePlayer.root.position).sub(enemyActor.root.position);
      enemyTargetOffset.y = 0;
      const distanceSq = enemyTargetOffset.lengthSq();
      if (distanceSq >= bestDistanceSq) {
        continue;
      }

      bestDistanceSq = distanceSq;
      bestTarget = {
        playerId: remotePlayerId,
        position: remotePlayer.root.position,
        movingFast: Boolean(remotePlayer.movementState?.sprint && remotePlayer.movementState?.moving),
        crouching: Boolean((remotePlayer.crouchBlend ?? remotePlayer.targetCrouchBlend ?? 0) > 0.55)
      };
    }

    enemyActor.targetPlayerId = bestTarget?.playerId || "";
    return bestTarget;
  }

  function getEnemyTargetAimPoint(targetCandidate, target = enemyTargetAimPosition) {
    if (!targetCandidate?.position) {
      return target.set(0, 1.35, 0);
    }

    target.copy(targetCandidate.position);
    target.y += targetCandidate.crouching ? 1.1 : 1.35;
    return target;
  }

  function getEnemyLineOfSightBlockerLabel(obstacle) {
    const explicitName = typeof obstacle?.name === "string" ? obstacle.name.trim() : "";
    if (explicitName) {
      return explicitName;
    }

    const warehouseSource = typeof obstacle?.userData?.warehouseColliderSource === "string"
      ? obstacle.userData.warehouseColliderSource.trim()
      : "";
    if (warehouseSource) {
      return warehouseSource;
    }

    const warehouseCategory = typeof obstacle?.userData?.warehouseColliderCategory === "string"
      ? obstacle.userData.warehouseColliderCategory.trim()
      : "";
    if (warehouseCategory) {
      return warehouseCategory;
    }

    const proceduralColliderId = typeof obstacle?.userData?.proceduralCityColliderId === "string"
      ? obstacle.userData.proceduralCityColliderId.trim()
      : "";
    if (proceduralColliderId) {
      return proceduralColliderId;
    }

    return obstacle?.type || "world-collider";
  }

  function getEnemyLineOfSightBlocker(enemyActor, targetCandidate, targetPoint = null) {
    if (!enemyActor?.root || !targetCandidate?.position) {
      return null;
    }

    const resolvedTargetPoint = targetPoint ?? getEnemyTargetAimPoint(targetCandidate, enemyLineOfSightTargetPoint);
    enemyShotDirection.copy(resolvedTargetPoint).sub(enemyShotOrigin);
    const shotDistance = enemyShotDirection.length();
    if (shotDistance <= 0.001) {
      return null;
    }

    enemyShotDirection.normalize();
    enemyLineOfSightRay.set(enemyShotOrigin, enemyShotDirection);

    let nearestBlocker = null;
    let nearestDistanceSq = shotDistance * shotDistance;

    for (const obstacle of worldColliders) {
      if (!obstacle?.userData?.collider || obstacle.userData.supportOnly === true) {
        continue;
      }

      if (obstacle.userData.collider.containsPoint(enemyShotOrigin)) {
        nearestBlocker = {
          obstacle,
          blockerLabel: getEnemyLineOfSightBlockerLabel(obstacle)
        };
        break;
      }

      const hitPoint = enemyLineOfSightRay.intersectBox(obstacle.userData.collider, enemyLineOfSightHitPoint);
      if (!hitPoint) {
        continue;
      }

      const hitDistanceSq = enemyShotOrigin.distanceToSquared(hitPoint);
      if (hitDistanceSq > nearestDistanceSq || hitDistanceSq <= 0.000001) {
        continue;
      }

      nearestDistanceSq = hitDistanceSq;
      nearestBlocker = {
        obstacle,
        blockerLabel: getEnemyLineOfSightBlockerLabel(obstacle)
      };
    }

    if (nearestBlocker) {
      console.log("blocked_by_object_name_or_type", nearestBlocker.blockerLabel);
      console.log("enemy_line_of_sight_blocked", {
        enemyId: enemyActor.networkId || "",
        blocker: nearestBlocker.blockerLabel,
        targetPlayerId: targetCandidate.playerId || ""
      });
      return nearestBlocker;
    }

    console.log("enemy_line_of_sight_clear", {
      enemyId: enemyActor.networkId || "",
      targetPlayerId: targetCandidate.playerId || "",
      distance: Number(shotDistance.toFixed(2))
    });
    return null;
  }

  function playEnemyShotEffect(enemyActor) {
    if (!enemyActor || enemyActor.isDead) {
      return;
    }

    enemyActor.isFiring = true;
    if (enemyActor.fireStateTimeoutId) {
      window.clearTimeout(enemyActor.fireStateTimeoutId);
    }
    enemyActor.fireStateTimeoutId = window.setTimeout(() => {
      enemyActor.isFiring = false;
      enemyActor.fireStateTimeoutId = 0;
    }, 90);

    triggerActorShotPose(enemyActor);
    triggerActorMuzzleFlash(enemyActor, 0xff8d3d);
  }

  function updateReplicatedEnemy(enemyActor, delta) {
    if (!enemyActor?.root || !enemyActor.networkTargetPosition) {
      return;
    }

    const blend = 1 - Math.exp(-11 * delta);
    enemyActor.root.position.lerp(enemyActor.networkTargetPosition, blend);
    enemyActor.root.rotation.x = 0;
    enemyActor.root.rotation.y = normalizeAngleRadians(lerpAngleRadians(
      enemyActor.root.rotation.y,
      enemyActor.networkTargetYaw ?? enemyActor.root.rotation.y,
      blend
    ));
    enemyActor.root.rotation.z = enemyActor.isDead ? -Math.PI * 0.45 : 0;
  }

  function moveEnemy(enemyActor, delta, targetCandidate = null) {
    if (!enemyActor || enemyActor.isDead) {
      return null;
    }

    const currentTarget = targetCandidate ?? selectEnemyTarget(enemyActor);
    if (!currentTarget?.position) {
      enemyActor.state = "idle";
      return null;
    }

    enemyToPlayer.copy(currentTarget.position).sub(enemyActor.root.position);
    enemyToPlayer.y = 0;
    const distanceToPlayer = enemyToPlayer.length();

    if (distanceToPlayer > 0.001) {
      enemyToPlayer.normalize();
    } else {
      enemyToPlayer.set(0, 0, 1);
    }

    enemyStrafeVector.set(-enemyToPlayer.z, 0, enemyToPlayer.x);

    if (clock.elapsedTime >= enemyActor.nextStrafeSwitch) {
      enemyActor.strafeSign *= -1;
      enemyActor.nextStrafeSwitch = clock.elapsedTime + THREE.MathUtils.randFloat(1.1, 2.2);
    }

    enemyDesiredMove.set(0, 0, 0);

    if (enemyActor.isReloading) {
      enemyActor.state = "reposition";
      enemyDesiredMove
        .addScaledVector(enemyStrafeVector, enemyActor.strafeSign)
        .addScaledVector(enemyToPlayer, distanceToPlayer < enemyActor.profile.preferredDistance ? -0.9 : 0.2);
    } else if (distanceToPlayer > enemyActor.profile.preferredDistance + 1.5) {
      enemyActor.state = "chase";
      enemyDesiredMove
        .addScaledVector(enemyToPlayer, 1)
        .addScaledVector(enemyStrafeVector, 0.35 * enemyActor.strafeSign);
    } else if (distanceToPlayer < enemyActor.profile.closeDistance) {
      enemyActor.state = "pressure";
      enemyDesiredMove
        .addScaledVector(enemyToPlayer, 0.7)
        .addScaledVector(enemyStrafeVector, enemyActor.strafeSign);
    } else {
      enemyActor.state = "strafe";
      enemyDesiredMove
        .addScaledVector(enemyStrafeVector, enemyActor.strafeSign)
        .addScaledVector(enemyToPlayer, (enemyActor.profile.preferredDistance - distanceToPlayer) * 0.25);
    }

    if (enemyDesiredMove.lengthSq() > 0.0001) {
      enemyDesiredMove.normalize();
      enemyTargetPosition.copy(enemyActor.root.position).addScaledVector(enemyDesiredMove, enemyActor.profile.moveSpeed * delta);

      if (!collidesAt(enemyTargetPosition, enemyHalfExtents)) {
        enemyActor.root.position.copy(enemyTargetPosition);
      } else {
        enemySlidePosition.copy(enemyActor.root.position);
        enemySlidePosition.x = enemyTargetPosition.x;
        if (!collidesAt(enemySlidePosition, enemyHalfExtents)) {
          enemyActor.root.position.x = enemySlidePosition.x;
        }

        enemySlidePosition.copy(enemyActor.root.position);
        enemySlidePosition.z = enemyTargetPosition.z;
        if (!collidesAt(enemySlidePosition, enemyHalfExtents)) {
          enemyActor.root.position.z = enemySlidePosition.z;
        }
      }
    }

    enemyActor.root.rotation.x = 0;
    enemyActor.root.rotation.z = 0;

    if (distanceToPlayer <= 1.1) {
      return currentTarget;
    }

    const targetYaw = Math.atan2(enemyToPlayer.x, enemyToPlayer.z);
    const currentYaw = enemyActor.root.rotation.y;
    const yawDelta = Math.atan2(
      Math.sin(targetYaw - currentYaw),
      Math.cos(targetYaw - currentYaw)
    );
    const turnBlend = Math.min(1, delta * 10);
    enemyActor.root.rotation.y = currentYaw + yawDelta * turnBlend;
    return currentTarget;
  }

  function enemyShoot(enemyActor, targetCandidate = null) {
    if (!enemyActor || enemyActor.isDead || enemyActor.isReloading) {
      return;
    }

    const currentTarget = targetCandidate ?? selectEnemyTarget(enemyActor);
    if (!currentTarget?.position) {
      return;
    }

    enemyActor.root.updateMatrixWorld(true);
    enemyShotOrigin.copy(enemyActor.muzzleFlashLocalOffset);
    enemyActor.rightArm.localToWorld(enemyShotOrigin);

    getEnemyTargetAimPoint(currentTarget, enemyShotTarget);
    if (getEnemyLineOfSightBlocker(enemyActor, currentTarget, enemyShotTarget)) {
      return;
    }

    const shouldMiss = currentTarget.movingFast && Math.random() < enemyActor.profile.sprintMissChance;

    if (shouldMiss) {
      enemyAimJitter.set(
        THREE.MathUtils.randFloat(-0.5, 0.5),
        THREE.MathUtils.randFloat(-0.3, 0.3),
        THREE.MathUtils.randFloat(-0.5, 0.5)
      );
      enemyShotTarget.add(enemyAimJitter);
    }

    enemyShotDirection.copy(enemyShotTarget).sub(enemyShotOrigin);
    if (enemyShotDirection.lengthSq() <= 0.000001) {
      return;
    }

    playEnemyShotEffect(enemyActor);

    if (!shouldMiss) {
      if (isLanSessionActive() && isLanHost && currentTarget.playerId) {
        applyHostAuthoritativePlayerDamage({
          victimId: currentTarget.playerId,
          attackerId: enemyActor.networkId || "shared-enemy",
          amount: enemyActor.profile.damage,
          hitZone: "body"
        });
      } else {
        applyDamageToPlayer(enemyActor.profile.damage);
      }
    }

    if (isLanSessionActive() && isLanHost && enemyActor.networkId) {
      broadcastSharedEnemyAttack(enemyActor, currentTarget.playerId || "");
    }

    enemyActor.ammo -= 1;

    if (enemyActor.ammo <= 0) {
      enemyActor.isReloading = true;
      enemyActor.reloadEndTime = clock.elapsedTime + enemyActor.profile.reloadTime;
    }
  }

  function updateJiggleTrainingEnemy(enemyActor, delta) {
    if (!enemyActor || enemyActor.isDead) return;

    // Rule 5: Check if current state is already invalid (forced respawn)
    const playerPos = { x: gridShotSpawn.x, z: gridShotSpawn.z };
    const currentPos2D = { x: enemyActor.root.position.x, z: enemyActor.root.position.z };

    if (isInsideJiggleBlockerObject(currentPos2D) || lineSegmentIntersectsJiggleBlocker(playerPos, currentPos2D)) {
      console.log("[JIGGLE TRAINING] forced respawn because enemy was inside/hidden behind blocker object");
      removeEnemy(enemyActor);
      spawnJiggleTrainingEnemy();
      return;
    }

    // Movement: step sideways
    const step = jiggleTrainingMoveDirection * jiggleTrainingMoveSpeed * delta;
    const nextOffset = jiggleTrainingCurrentOffset + step;

    // Check boundaries (radius 1.5)
    let reversed = false;
    if (Math.abs(nextOffset) > jiggleTrainingMaxSideDistance) {
      reversed = true;
    }

    // Check forbidden zone & visibility for next position
    const nextPos = new THREE.Vector3().copy(jiggleTrainingEnemySpawnCenter)
      .addScaledVector(jiggleTrainingSideDirection, nextOffset);
    const nextPos2D = { x: nextPos.x, z: nextPos.z };

    if (isInsideJiggleBlockerObject(nextPos2D) || lineSegmentIntersectsJiggleBlocker(playerPos, nextPos2D)) {
      reversed = true;
      console.log("[JIGGLE TRAINING] enemy avoided blocker object");
    }

    if (reversed) {
      jiggleTrainingMoveDirection *= -1;
    } else {
      jiggleTrainingCurrentOffset = nextOffset;
      enemyActor.root.position.copy(nextPos);
    }

    // Keep it on ground
    enemyActor.root.position.y = gridShotSpawn.y;

    // Face player
    enemyActor.root.lookAt(gridShotSpawn.x, enemyActor.root.position.y, gridShotSpawn.z);

    // Sync animation
    if (enemyActor.characterActions && enemyActor.characterActions.run) {
      if (!enemyActor.characterActions.run.isRunning()) {
        enemyActor.characterActions.run.play();
      }
      enemyActor.characterMixer.update(0);
    }
  }

  function updateEnemies(delta) {
    if (!enemies.length) {
      hideEnemyHpUi();
      return;
    }

    if (!gameStarted) {
      return;
    }

    for (const enemyActor of enemies) {
      if (!enemyActor) {
        continue;
      }

      if (enemyActor.characterMixer) {
        enemyActor.characterMixer.update(delta);
      }

      if (enemyActor.isNetworkReplica || (isLanSessionActive() && !isLanHost && enemyActor.isSharedEnemy)) {
        updateReplicatedEnemy(enemyActor, delta);
        continue;
      }

      if (enemyActor.isDead) {
        continue;
      }

      if (enemyActor.isJiggleTrainingTarget) {
        updateJiggleTrainingEnemy(enemyActor, delta);
        continue;
      }

      if (enemyActor.isMediumCombatTarget) {
        updateMediumCombatEnemy(enemyActor, delta);
        continue;
      }

      if (!isLanSessionActive() && (menuOpen || playerDead)) {
        continue;
      }

      if (enemyActor.isReloading && clock.elapsedTime >= enemyActor.reloadEndTime) {
        enemyActor.isReloading = false;
        enemyActor.ammo = enemyActor.profile.clipSize;
      }

      const targetCandidate = moveEnemy(enemyActor, delta);
      if (!targetCandidate?.position) {
        continue;
      }

      if (clock.elapsedTime < enemyActor.engageTime) {
        continue;
      }

      const distanceToPlayer = enemyActor.root.position.distanceTo(targetCandidate.position);
      const fireWindow = enemyActor.profile.fireCooldownMs / 1000;

      if (distanceToPlayer <= enemyActor.profile.preferredDistance + 6) {
        if (!enemyActor.isReloading && clock.elapsedTime - enemyActor.lastShotTime >= fireWindow) {
          enemyActor.lastShotTime = clock.elapsedTime;
          enemyShoot(enemyActor, targetCandidate);
        }
      }
    }
  }

  function updateAimRotation() {
    aimDirection.copy(cameraLookDirection);
    aimDirection.y = 0;

    if (aimDirection.lengthSq() < 0.0001) {
      return;
    }

    aimDirection.normalize();
    aimLookTarget.copy(player.position).add(aimDirection);
    player.lookAt(aimLookTarget);
  }

  function updateMovementRotation(direction) {
    if (direction.lengthSq() < 0.0001) {
      return;
    }

    aimLookTarget.copy(player.position).add(direction);
    player.lookAt(aimLookTarget);
  }

  function updatePlayer(delta) {
    updateLookDirection();
    movementForward.set(-Math.sin(yaw), 0, -Math.cos(yaw)).normalize();
    movementRight.set(Math.cos(yaw), 0, -Math.sin(yaw)).normalize();
    localMoveDirection.set(0, 0, 0);

    if (moveState.forward) localMoveDirection.z -= 1;
    if (moveState.backward) localMoveDirection.z += 1;
    if (moveState.left) localMoveDirection.x -= 1;
    if (moveState.right) localMoveDirection.x += 1;

    if (localMoveDirection.lengthSq() > 0) {
      localMoveDirection.normalize();
      worldMoveDirection
        .copy(movementRight)
        .multiplyScalar(localMoveDirection.x)
        .addScaledVector(movementForward, -localMoveDirection.z);
      worldMoveDirection.normalize();

      let movementSpeedMultiplier = 1;
      if (moveState.sprint) {
        movementSpeedMultiplier *= (movementSettings.sprintSpeedPercent / 100);
      }

      if (movementSettings.slowPlayerWhenShooting && isShooting) {
        movementSpeedMultiplier *= (movementSettings.shootingSpeedPercent / 100);
      }

      const speed = moveConfig.walkSpeed * movementSpeedMultiplier;
      targetVelocity.copy(worldMoveDirection).multiplyScalar(speed);
      horizontalVelocity.lerp(targetVelocity, Math.min(1, moveConfig.acceleration * delta));
      isMoving = true;
    } else {
      worldMoveDirection.set(0, 0, 0);
      horizontalVelocity.lerp(zeroVector, Math.min(1, moveConfig.damping * delta));
      isMoving = false;
    }
    syncPlayerAimIdleAnimation();

    nextPlayerPosition.copy(playerPosition);
    horizontalStep.copy(horizontalVelocity).multiplyScalar(delta);
    nextPlayerPosition.x += horizontalStep.x;
    nextPlayerPosition.z += horizontalStep.z;
    resolvePlayerHorizontalMovement(nextPlayerPosition);

    verticalVelocity -= moveConfig.gravity * delta;
    resolvePlayerVerticalMovement(delta);
    resolvePlayerPenetration();
    applyMediumCombatPlayerBounds();

    player.position.copy(playerPosition);

    if (isShooting) {
      updateAimRotation();
    } else {
      updateMovementRotation(worldMoveDirection);
    }

  }

  function updateCamera(delta) {
    updateLookDirection();
    const targetCrouchCameraOffsetY = isCrouching ? crouchCameraDrop : 0;
    const crouchCameraOffsetBlend = 1 - Math.exp(-crouchCameraOffsetSmoothness * delta);

    // Temporary crouch camera height offset
    // Restore camera height on crouch release
    crouchCameraOffsetY = THREE.MathUtils.lerp(
      crouchCameraOffsetY,
      targetCrouchCameraOffsetY,
      crouchCameraOffsetBlend
    );
    playerAimTarget.copy(player.position).add(playerCameraOffset);
    // Apply crouch camera drop in first-person and third-person
    playerAimTarget.y -= crouchCameraOffsetY;
    const activeCameraSettings = getActiveCameraSettings();

    // PHASE 7: Camera Loop Override
    if (isAimAdsActive && cameraMode !== "firstPerson") {
      activeCameraSettings.distance = 4.4;
      activeCameraSettings.offsetX = 0.80;
      activeCameraSettings.offsetY = 0.80;
      activeCameraSettings.offsetZ = 3.00;
    }

    cameraRightVector.crossVectors(cameraLookDirection, worldUp).normalize();
    desiredCameraPosition
      .copy(playerAimTarget)
      .addScaledVector(cameraRightVector, activeCameraSettings.offsetX)
      .addScaledVector(worldUp, activeCameraSettings.offsetY)
      .addScaledVector(cameraLookDirection, activeCameraSettings.offsetZ)
      .addScaledVector(cameraLookDirection, -activeCameraSettings.distance);

    resolvedCameraPosition.copy(desiredCameraPosition);
    let obstructionDetected = false;
    cameraObstructionDirection.copy(desiredCameraPosition).sub(playerAimTarget);
    const desiredCameraDistance = cameraObstructionDirection.length();

    if (desiredCameraDistance > 0.001 && worldColliders.length > 0) {
      cameraObstructionDirection.normalize();
      cameraCollisionRaycaster.set(playerAimTarget, cameraObstructionDirection);
      cameraCollisionRaycaster.near = 0.05;
      cameraCollisionRaycaster.far = desiredCameraDistance;

      const obstructionHits = cameraCollisionRaycaster.intersectObjects(worldColliders, false);
      const obstructionHit = obstructionHits.find((hit) => (
        hit.object?.userData?.isWorldCollider &&
        hit.object?.userData?.supportOnly !== true
      ));

      if (obstructionHit) {
        obstructionDetected = true;
        resolvedCameraPosition
          .copy(obstructionHit.point)
          .addScaledVector(cameraObstructionDirection, -cameraConfig.obstructionMargin);

        if (playerAimTarget.distanceTo(resolvedCameraPosition) < cameraConfig.minObstructedDistance) {
          resolvedCameraPosition
            .copy(playerAimTarget)
            .addScaledVector(cameraObstructionDirection, cameraConfig.minObstructedDistance);
        }
      }
    }

    if (obstructionDetected && !cameraObstructionActive) {
      console.log("Camera obstruction detected");
    }
    cameraObstructionActive = obstructionDetected;

    const activeSmoothness = obstructionDetected
      ? cameraConfig.smoothness * 1.35
      : cameraConfig.smoothness;
    const playerMovingForCameraFollow = horizontalVelocity.lengthSq() > 0.0004;
    const firingCameraFollowLock = isShooting;
    const stableMovementCameraFollow = playerMovingForCameraFollow && !firingCameraFollowLock;

    // Shared stable camera-character follow for movement and firing
    if (forceNextCameraSnap) {
      // Hide camera settling until startup ready
      camera.position.copy(resolvedCameraPosition);
      forceNextCameraSnap = false;
    } else if (firingCameraFollowLock) {
      // Preserve camera preset while reducing follow lag
      camera.position.copy(resolvedCameraPosition);
    } else if (stableMovementCameraFollow) {
      // Tighter general movement camera follow
      // Preserve camera preset while reducing follow lag
      const movementFollowSmoothing = 1 - Math.exp(-(activeSmoothness * 2.4) * delta);
      camera.position.lerp(resolvedCameraPosition, movementFollowSmoothing);
    } else {
      const smoothing = 1 - Math.exp(-activeSmoothness * delta);
      camera.position.lerp(resolvedCameraPosition, smoothing);
    }
    lookTarget.copy(playerAimTarget).addScaledVector(cameraLookDirection, 18);
    camera.lookAt(lookTarget);
    camera.rotateZ(recoilRoll);
    camera.updateMatrixWorld();
  }

  function worldToScreen(worldPos, activeCamera) {
    const projected = worldPos.clone().project(activeCamera);
    return {
      x: (projected.x * 0.5 + 0.5) * window.innerWidth,
      y: (-projected.y * 0.5 + 0.5) * window.innerHeight,
      z: projected.z
    };
  }

  function getBoxCorners(box) {
    const { min, max } = box;
    return [
      new THREE.Vector3(min.x, min.y, min.z),
      new THREE.Vector3(max.x, min.y, min.z),
      new THREE.Vector3(min.x, max.y, min.z),
      new THREE.Vector3(max.x, max.y, min.z),
      new THREE.Vector3(min.x, min.y, max.z),
      new THREE.Vector3(max.x, min.y, max.z),
      new THREE.Vector3(min.x, max.y, max.z),
      new THREE.Vector3(max.x, max.y, max.z)
    ];
  }

  function projectedRectFromBox(box, activeCamera, shrinkPixels = 4) {
    const center = new THREE.Vector3();
    box.getCenter(center);

    const centerScreen = worldToScreen(center, activeCamera);
    if (
      !Number.isFinite(centerScreen.x) ||
      !Number.isFinite(centerScreen.y) ||
      centerScreen.z < -1 ||
      centerScreen.z > 1
    ) {
      return null;
    }

    const projectedCorners = getBoxCorners(box).map((corner) => worldToScreen(corner, activeCamera));
    if (
      projectedCorners.some((point) =>
        !Number.isFinite(point.x) ||
        !Number.isFinite(point.y) ||
        !Number.isFinite(point.z)
      )
    ) {
      return null;
    }

    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    for (const point of projectedCorners) {
      minX = Math.min(minX, point.x);
      maxX = Math.max(maxX, point.x);
      minY = Math.min(minY, point.y);
      maxY = Math.max(maxY, point.y);
    }

    minX += shrinkPixels;
    maxX -= shrinkPixels;
    minY += shrinkPixels;
    maxY -= shrinkPixels;

    if (minX > maxX || minY > maxY) {
      return null;
    }

    return { minX, maxX, minY, maxY };
  }

  function getFirstWorldShotHit() {
    const worldHits = raycaster.intersectObjects(bulletImpactTargets, false);
    for (const worldHit of worldHits) {
      if (
        worldHit.object?.userData?.ignoreShotRay ||
        worldHit.object?.userData?.acceptsBulletDecals !== true
      ) {
        continue;
      }

      return worldHit;
    }

    return null;
  }

  function getFirstEnemyShotHit() {
    const enemyHitTargets = getSharedEnemyHitboxes();
    if (!enemyHitTargets.length) {
      return null;
    }

    const enemyHits = raycaster.intersectObjects(enemyHitTargets, true);
    for (const enemyHit of enemyHits) {
      const targetEnemy = enemyHit.object?.userData?.enemyRef;
      if (!targetEnemy || targetEnemy.isDead) {
        continue;
      }

      return enemyHit;
    }

    return null;
  }

  function getFirstGridShotHit() {
    if (!isGridShotActive || !gridShotBalls.length) return null;
    const hits = raycaster.intersectObjects(gridShotBalls, false);
    return hits.length > 0 ? hits[0] : null;
  }

  function getFirstTrackingBallHit() {
    if (!isTrackingBallActive || !trackingBallObject) return null;
    const hits = raycaster.intersectObjects([trackingBallObject], false);
    return hits.length > 0 ? hits[0] : null;
  }

  function resolveLocalShotImpact() {
    raycaster.near = 0;
    raycaster.far = Infinity;
    raycaster.setFromCamera(screenCenterNdc, camera);

    const nearestTrackingBallHit = getFirstTrackingBallHit();
    const nearestGridShotHit = getFirstGridShotHit();
    const nearestEnemyHit = getFirstEnemyShotHit();
    const nearestWorldHit = getFirstWorldShotHit();

    let nearestDistance = Infinity;
    let closestHit = null;

    if (nearestTrackingBallHit && nearestTrackingBallHit.distance < nearestDistance) {
      nearestDistance = nearestTrackingBallHit.distance;
      closestHit = { type: "trackingball", hit: nearestTrackingBallHit, object: nearestTrackingBallHit.object };
    }

    if (nearestGridShotHit && nearestGridShotHit.distance < nearestDistance) {
      nearestDistance = nearestGridShotHit.distance;
      closestHit = { type: "gridshot", hit: nearestGridShotHit, object: nearestGridShotHit.object };
    }

    if (nearestEnemyHit && nearestEnemyHit.distance < nearestDistance) {
      nearestDistance = nearestEnemyHit.distance;
      closestHit = {
        type: "enemy",
        hit: nearestEnemyHit,
        enemyActor: nearestEnemyHit.object.userData.enemyRef,
        hitZone: nearestEnemyHit.object.userData.hitZone || "body"
      };
    }

    if (nearestWorldHit && nearestWorldHit.distance < nearestDistance) {
      nearestDistance = nearestWorldHit.distance;
      closestHit = { type: "world", hit: nearestWorldHit };
    }

    return closestHit;
  }

  function shoot() {
    if (
      isReloading ||
      !hasGameplayFireInputControl() ||
      playerDead ||
      (!currentGun.infiniteAmmo && ammo <= 0)
    ) {
      return false;
    }

    const shotPayload = isLanSessionActive() ? buildLocalShotPayload() : null;
    if (!currentGun.infiniteAmmo) {
      ammo -= 1;
    }
    updateAmmoUi();
    if (!currentGun.infiniteAmmo && ammo <= 0 && isShooting) {
      beginReload({
        preserveTriggerHold: true,
        source: "auto-empty-trigger-hold"
      });
    }
    triggerActorShotPose(playerActor);
    triggerActorMuzzleFlash(playerActor);

    const shotImpact = resolveLocalShotImpact();

    if (isGridShotActive && gridShotTimer > 0) {
      if (shotImpact?.type === "gridshot" && shotImpact.object) {
        gridShotHits++;
        updateGridShotHudText();
        recordAimTrainingShot(true);

        if (!isNetworkAimTrainingMirror) {
          const lastPos = shotImpact.object.position.clone();
          removeGridShotBall(shotImpact.object);

          spawnGridShotBall(lastPos);
          broadcastAimTrainingTargetState({ force: true, log: true });
        }
      } else {
        gridShotMisses++;
        updateGridShotHudText();
        recordAimTrainingShot(false);
      }
    }

    if (isTrackingBallActive && trackingBallTimer > 0) {
      if (shotImpact?.type === "trackingball" && shotImpact.object) {
        trackingBallScore += 10;
        recordAimTrainingShot(true);

        if (!isNetworkAimTrainingMirror) {
          trackingBallHp -= TRACKING_BALL_DAMAGE;

          if (trackingBallHp <= 0) {
            trackingBallScore += 50; // Bonus for kill

            removeTrackingBallObject();

            spawnTrackingBall();
          } else {
            updateTrackingBallHpBar();
          }
          broadcastAimTrainingTargetState({ force: true, log: true });
        }
        updateTrackingBallHudText();
      } else {
        trackingBallMisses++;
        updateTrackingBallHudText();
        recordAimTrainingShot(false);
      }
    }

    if (isJiggleTrainingActive && jiggleTrainingTimer > 0) {
      if (shotImpact?.type === "enemy" && shotImpact.enemyActor?.isJiggleTrainingTarget) {
        // Hit is recorded here, but hit count is handled in handleEnemyDeath
        recordAimTrainingShot(true);
      } else {
        jiggleTrainingMisses++;
        updateJiggleTrainingHudText();
        recordAimTrainingShot(false);
      }
    }

    if (isMediumCombatActive && mediumCombatTimer > 0) {
      if (shotImpact?.type === "enemy" && shotImpact.enemyActor?.isMediumCombatTarget) {
        mediumCombatHits++;
        updateMediumCombatHudText();
        recordAimTrainingShot(true);
      } else {
        mediumCombatMisses++;
        updateMediumCombatHudText();
        recordAimTrainingShot(false);
      }
    }

    if (shotImpact?.type === "enemy" && shotImpact.enemyActor) {
      if (!isLanSessionActive()) {
        enemy = shotImpact.enemyActor;
        shotImpact.enemyActor.takeDamage(getWeaponDamageForHitZone(currentGun, shotImpact.hitZone));
      }
    } else if (shotImpact?.type === "world" && shotImpact.hit) {
      getImpactNormal(shotImpact.hit, impactNormal);
      createImpactMark(shotImpact.hit.point, impactNormal);
    }

    if (shotPayload) {
      handleLanShotFired(shotPayload);
    }

    applyShotRecoil();
    return true;
  }

  function tryShoot(currentTime = performance.now()) {
    if (currentTime - lastShotTime < fireCooldownMs) {
      return false;
    }

    const didShoot = shoot();
    if (didShoot) {
      lastShotTime = currentTime;
    }

    return didShoot;
  }

  function updateShooting() {
    if (!isShooting || !hasGameplayFireInputControl() || menuOpen || playerDead) {
      return;
    }

    if (isReloading) {
      return;
    }

    if (!currentGun.infiniteAmmo && ammo <= 0) {
      beginReload({
        preserveTriggerHold: true,
        source: "auto-empty-trigger-hold"
      });
      return;
    }

    tryShoot(performance.now());
  }

  function beginReload({
    preserveTriggerHold = false,
    source = "manual"
  } = {}) {
    if (currentGun.infiniteAmmo) {
      return false;
    }

    if (ammo === maxAmmo || isReloading) {
      return false;
    }

    if (reloadTimeoutId) {
      window.clearTimeout(reloadTimeoutId);
      reloadTimeoutId = 0;
    }

    if (!preserveTriggerHold) {
      isShooting = false;
    }

    isReloading = true;
    reloadResumeAutoFire = preserveTriggerHold && source !== "manual";
    reloadEndTimeMs = performance.now() + reloadDuration * 1000;
    updateAmmoUi();
    reloadTimeoutId = window.setTimeout(() => {
      reloadTimeoutId = 0;
      isReloading = false;
      reloadEndTimeMs = 0;
      ammo = maxAmmo;
      const shouldResumeAutoFire = reloadResumeAutoFire;
      reloadResumeAutoFire = false;
      updateAmmoUi();
      if (shouldResumeAutoFire && isShooting && hasGameplayFireInputControl() && !menuOpen && !playerDead) {
        tryShoot(performance.now());
      }
    }, reloadDuration * 1000);
    return true;
  }

  function requestLock({ allowMenuOpen = false } = {}) {
    if (
      !isDesktopPointerLockCameraModeActive() ||
      !gameStarted ||
      (menuOpen && !allowMenuOpen)
    ) {
      return;
    }
    canvas.requestPointerLock();
  }

  function setMovementKeyState(code, isPressed) {
    const moveKey = invertedMoveKeyMap[code];
    if (moveKey) {
      moveState[moveKey] = isPressed;
      return true;
    }

    return false;
  }

  function bindEventListeners() {
    if (listenersBound) {
      listenerWarningCount += 1;
      return;
    }

    listenersBound = true;

    homeCameraEntryButton.addEventListener("click", async () => {
      await openCameraCustomizationForCurrentContext();
    });

    homeGunEntryButton.addEventListener("click", () => {
      setHomeGunViewOpen(true);
    });

    // Home page settings entry button
    homeSettingsEntryButton.addEventListener("click", () => {
      setHomeSettingsViewOpen(true);
    });

    homeMusicToggleButton?.addEventListener("click", () => {
      setMenuMusicEnabled(!isMenuMusicEnabled());
    });

    homeFullscreenButton.addEventListener("click", async () => {
      await toggleFullscreenMode();
    });

    homeGunBackButton.addEventListener("click", () => {
      setHomeGunViewOpen(false);
    });

    if (trainAimButton && aimTrainingView && homePanel) {
      trainAimButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("[AIM TRAINING] Train Aim clicked");

        // Hard reset cards whenever menu is shown
        resetAimTrainingCardLoadingStates();
        homePanel.setAttribute("hidden", "true");
        homePanel.setAttribute("aria-hidden", "true");
        homePanel.hidden = true;
        aimTrainingView.removeAttribute("hidden");
        aimTrainingView.setAttribute("aria-hidden", "false");
        aimTrainingView.hidden = false;



        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
    } else {
      console.warn("[AIM TRAINING] Scaffolding elements missing", { trainAimButton, aimTrainingView, homePanel });
    }

    if (aimTrainingHomeButton && aimTrainingView && homePanel) {
      aimTrainingHomeButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("[AIM TRAINING] Home clicked");
        if (
          handleHomeFromOnlineClient("aim training home clicked") ||
          leaveMirroredHostAimTrainingLocally("aim training home clicked")
        ) {
          if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
          return;
        }
        cleanupAimTrainingMode();
        aimTrainingView.setAttribute("hidden", "true");
        aimTrainingView.setAttribute("aria-hidden", "true");
        aimTrainingView.hidden = true;
        homePanel.removeAttribute("hidden");
        homePanel.setAttribute("aria-hidden", "false");
        homePanel.hidden = false;
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
    }

    if (aimModeCards && aimModeCards.length > 0) {
      aimModeCards.forEach(card => {
        if (card.id === "start-grid-shot-button") return;
        if (card.id === "start-tracking-ball-button") return;
        if (card.id === "start-jiggle-training-button") return;
        if (card.id === "start-medium-combat-mode-button") return;
        card.addEventListener("click", () => {
          alert("Aim Practice mode coming soon! This is a UI placeholder.");
        });
      });
    }

    if (startGridShotButton) {
      startGridShotButton.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("[AIM TRAINING] Start Grid Shot clicked");
        // Reset manual override when entering fresh from menu
        aimTrainingManualInfiniteAmmoOverride = false;
        await startGridShotMode();
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
    }

    if (startTrackingBallButton) {
      startTrackingBallButton.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("[AIM TRAINING] Start Tracking Ball clicked");
        // Reset manual override when entering fresh from menu
        aimTrainingManualInfiniteAmmoOverride = false;
        await startTrackingBallMode();
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
    }

    if (startJiggleTrainingButton) {
      startJiggleTrainingButton.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("[AIM TRAINING] Start Jiggle Training clicked");
        // Reset manual override when entering fresh from menu
        aimTrainingManualInfiniteAmmoOverride = false;
        await startJiggleTrainingMode();
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
    }

    if (startMediumCombatModeButton) {
      startMediumCombatModeButton.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("[AIM TRAINING] Start Medium Range Jiggle Training clicked");
        aimTrainingManualInfiniteAmmoOverride = false;
        await startMediumCombatMode();
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
    }

    if (gunInfiniteAmmoInput) {
      gunInfiniteAmmoInput.addEventListener("change", () => {
        if (isGridShotActive || isTrackingBallActive || isMediumCombatActive) {
          aimTrainingManualInfiniteAmmoOverride = true;
          console.log("[AIM TRAINING] Manual Infinite Ammo override detected");
        }
      });
    }

    if (aimTrainingDifficultySelect) {
      aimTrainingDifficultySelect.addEventListener("change", () => {
        aimTrainingDifficulty = aimTrainingDifficultySelect.value;
        localStorage.setItem("aimTrainingDifficulty", aimTrainingDifficulty);
        console.log("[AIM TRAINING] Difficulty changed to", aimTrainingDifficulty);
      });
    }

    if (aimTrainingRestartButton) {
      aimTrainingRestartButton.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isNetworkAimTrainingMirror && isLanClient) {
          showStatusMessage("Host controls Aim Training restart.", 1400);
          if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
          return;
        }
        if (isGridShotActive) {
          console.log("[AIM TRAINING] Restart Grid Shot clicked");
          startNewAimTrainingSession("gridShot");
          clearGridShotBalls();
          gridShotHits = 0;
          gridShotMisses = 0;
          gridShotTimer = 60;
          if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "none";
          updateGridShotHudText();

          if (gridShotIntervalId) window.clearInterval(gridShotIntervalId);
          gridShotIntervalId = window.setInterval(() => {
            if (!isGridShotActive || gridShotTimer <= 0) return;
            gridShotTimer--;
            updateGridShotHudText();

            if (gridShotTimer <= 0) {
              window.clearInterval(gridShotIntervalId);
              gridShotIntervalId = 0;
              if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "flex";
              broadcastAimTrainingState({ force: true });
              broadcastAimTrainingFinished("gridShot");
            }
          }, 1000);

          for (let i = 0; i < 3; i++) spawnGridShotBall();
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingTargetState({ force: true, log: true });
        } else if (isTrackingBallActive) {
          console.log("[AIM TRAINING] Restart Tracking Ball clicked");
          startNewAimTrainingSession("trackingBall");
          removeTrackingBallObject();
          trackingBallScore = 0;
          trackingBallMisses = 0;
          trackingBallTimer = 60;
          if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "none";
          updateTrackingBallHudText();
          if (trackingBallIntervalId) window.clearInterval(trackingBallIntervalId);
          trackingBallIntervalId = window.setInterval(() => {
            if (!isTrackingBallActive || trackingBallTimer <= 0) return;
            trackingBallTimer--;
            updateTrackingBallHudText();
            if (trackingBallTimer <= 0) {
              window.clearInterval(trackingBallIntervalId);
              trackingBallIntervalId = 0;
              if (aimTrainingResultsContainer) aimTrainingResultsContainer.style.display = "flex";
              broadcastAimTrainingState({ force: true });
              broadcastAimTrainingFinished("trackingBall");
            }
          }, 1000);
          spawnTrackingBall();
          broadcastAimTrainingState({ force: true });
          broadcastAimTrainingTargetState({ force: true, log: true });
        } else if (isMediumCombatActive) {
          console.log("[AIM TRAINING] Restart Medium Range Jiggle Training clicked");
          await restartMediumCombatMode();
        }

        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
    }

    if (aimTrainingBackButton) {
      aimTrainingBackButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (
          handleHomeFromOnlineClient("aim training back clicked") ||
          leaveMirroredHostAimTrainingLocally("aim training back clicked")
        ) {
          if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
          return;
        }
        if (isGridShotActive) exitGridShotMode();
        else if (isTrackingBallActive) exitTrackingBallMode();
        else if (isJiggleTrainingActive) exitJiggleTrainingMode();
        else if (isMediumCombatActive) exitMediumCombatMode();
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
    }

    homeSettingsBackButton.addEventListener("click", () => {
      setHomeSettingsViewOpen(false);
    });

    if (cameraCustomizationPreviewButton) {
      cameraCustomizationPreviewButton.addEventListener("click", async () => {
        await openCameraCustomizationForCurrentContext();
      });
    }

    if (cameraPreviewPanelCloseButton) {
      cameraPreviewPanelCloseButton.addEventListener("click", () => {
        if (cameraCustomizationPreviewMode) {
          exitCameraCustomizationPreviewMode();
          return;
        }

        setCameraCustomizationPreviewPanelOpen(false);
      });
    }

    if (cameraPreviewPanelHeader) {
      cameraPreviewPanelHeader.addEventListener("pointerdown", (event) => {
        if (
          !settingsMenu.classList.contains("camera-preview-panel") ||
          event.button !== 0 ||
          event.target === cameraPreviewPanelCloseButton
        ) {
          return;
        }

        cameraPreviewPanelDragPointerId = event.pointerId;
        cameraPreviewPanelDragStartX = event.clientX;
        cameraPreviewPanelDragStartLeft = settingsMenu.offsetLeft;
        cameraPreviewPanelHeader.setPointerCapture?.(event.pointerId);
        event.preventDefault();
      });
    }

    readyButton.addEventListener("click", async () => {
      if (!startupReady) {
        return;
      }

      if (playerDead) {
        respawnPlayer();
      }

      try {
        await startGame();
      } catch (error) {
        console.error("Failed to start game:", error);
      }
    });

    mapSelect.addEventListener("change", async () => {
      selectedMap = mapSelect.value;
      logMapPipelineStep(
        createMapPipelineContext(selectedMap, "menu selection"),
        "new map selected",
        {
          selectedValue: selectedMap,
          currentLoadedMapId
        }
      );

      if (!document.body.classList.contains("main-menu-open")) {
        return;
      }

      try {
        await loadSelectedMap(selectedMap, {
          requestSource: "menu selection"
        });
        if (isLanHost && isLanSessionActive()) {
          sendLocalPlayerState(performance.now(), { force: true });
        }
      } catch (error) {
        console.error("Failed to preview selected map:", error);
      }
    });

    spawnEnemyButton.addEventListener("click", () => {
      const requestedCount = THREE.MathUtils.clamp(
        Math.floor(Number(enemyCountInput.value) || 1),
        1,
        10
      );
      enemyCountInput.value = String(requestedCount);
      spawnEnemies(requestedCount);
    });

    startWaveButton.addEventListener("click", () => {
      startEnemyWaveSession(getSafeWaveEnemyCount(), getSafeWaveCount());
    });

    waveEnemyCountInput.addEventListener("change", () => {
      getSafeWaveEnemyCount();
    });

    waveCountInput.addEventListener("change", () => {
      getSafeWaveCount();
    });

    interactionMenuCloseButton.addEventListener("click", () => {
      setMenuOpen(false);
    });

    gunModificationButton.addEventListener("click", () => {
      const nextOpenState = !gunPanelOpen;
      setGunCustomizationPanelOpen(nextOpenState);
      if (nextOpenState) {
        syncGunInputs();
      }
    });

    gunCustomizationCloseButton.addEventListener("click", () => {
      handleGunCustomizationCloseAction();
    });

    saveGunConfigButton.addEventListener("click", () => {
      saveCurrentGunConfig();
    });

    playerNameInput.addEventListener("change", () => {
      applyPlayerName(playerNameInput.value);
    });

    playerNameInput.addEventListener("blur", () => {
      applyPlayerName(playerNameInput.value);
    });

    showOwnNameToggle.addEventListener("change", () => {
      applyShowOwnNameInGame(showOwnNameToggle.value);
    });

    aimingZoomToggle.addEventListener("change", () => {
      aimingSettings.zoomInWhileAiming = aimingZoomToggle.value === "on";
      console.log("[AIMING SETTINGS] zoomInWhileAiming changed", aimingSettings.zoomInWhileAiming);

      if (aimingSettings.zoomInWhileAiming) {
        aimingSettings.scopeMode = false;
        if (aimingScopeToggle) aimingScopeToggle.value = "off";
        console.log("[AIMING SETTINGS] scopeMode automatically turned OFF");
      }

      saveBasicUserSettings();

      if (!aimingSettings.zoomInWhileAiming && isAimAdsActive) {
        stopAdsAiming("settingDisabled");
      }
    });

    aimingScopeToggle.addEventListener("change", () => {
      aimingSettings.scopeMode = aimingScopeToggle.value === "on";
      console.log("[AIMING SETTINGS] scopeMode changed", aimingSettings.scopeMode);

      if (aimingSettings.scopeMode) {
        aimingSettings.zoomInWhileAiming = false;
        if (aimingZoomToggle) aimingZoomToggle.value = "off";
        console.log("[AIMING SETTINGS] zoomInWhileAiming automatically turned OFF");

        if (isAimAdsActive) {
          stopAdsAiming("scopeEnabled");
        }
      }

      saveBasicUserSettings();
    });

    if (aimingScopeSizeSlider) {
      aimingScopeSizeSlider.addEventListener("input", () => {
        const val = parseInt(aimingScopeSizeSlider.value);
        aimingSettings.scopeSize = val;
        if (aimingScopeSizeValue) aimingScopeSizeValue.textContent = val;
        document.documentElement.style.setProperty("--scope-size-scale", val / 100);
        console.log("[AIMING SETTINGS] scopeSize changed", val);
      });
      aimingScopeSizeSlider.addEventListener("change", () => {
        saveBasicUserSettings();
        console.log("[AIMING SETTINGS] scopeSize applied and saved", aimingSettings.scopeSize);
      });
    }

    if (aimingScopeColorPicker) {
      aimingScopeColorPicker.addEventListener("input", () => {
        aimingSettings.scopeCrosshairColor = aimingScopeColorPicker.value;
        document.documentElement.style.setProperty("--scope-crosshair-color", aimingSettings.scopeCrosshairColor);
        console.log("[AIMING SETTINGS] scopeCrosshairColor changed", aimingSettings.scopeCrosshairColor);
      });
      aimingScopeColorPicker.addEventListener("change", () => {
        saveBasicUserSettings();
        console.log("[AIMING SETTINGS] scopeCrosshairColor applied and saved", aimingSettings.scopeCrosshairColor);
      });
    }

    if (movementSlowToggle) {
      movementSlowToggle.addEventListener("change", () => {
        movementSettings.slowPlayerWhenShooting = movementSlowToggle.value === "on";
        saveBasicUserSettings();
        console.log("[PLAYER MOVEMENT SETTINGS] slowPlayerWhenShooting changed", movementSettings.slowPlayerWhenShooting);
      });
    }

    if (movementShootingSpeedSlider) {
      movementShootingSpeedSlider.addEventListener("input", () => {
        const val = parseInt(movementShootingSpeedSlider.value);
        movementSettings.shootingSpeedPercent = val;
        if (movementShootingSpeedValue) movementShootingSpeedValue.textContent = val + "%";
        console.log("[PLAYER MOVEMENT SETTINGS] shootingSpeedPercent changing", val);
      });
      movementShootingSpeedSlider.addEventListener("change", () => {
        saveBasicUserSettings();
        console.log("[PLAYER MOVEMENT SETTINGS] shootingSpeedPercent saved", movementSettings.shootingSpeedPercent);
      });
    }

    if (movementSprintSpeedSlider) {
      movementSprintSpeedSlider.addEventListener("input", () => {
        const val = parseInt(movementSprintSpeedSlider.value);
        movementSettings.sprintSpeedPercent = val;
        if (movementSprintSpeedValue) movementSprintSpeedValue.textContent = val + "%";
        console.log("[PLAYER MOVEMENT SETTINGS] sprintSpeedPercent changing", val);
      });
      movementSprintSpeedSlider.addEventListener("change", () => {
        saveBasicUserSettings();
        console.log("[PLAYER MOVEMENT SETTINGS] sprintSpeedPercent saved", movementSettings.sprintSpeedPercent);
      });
    }

    startLanGameButton.addEventListener("click", async () => {
      try {
        await createLANHost();
      } catch (error) {
        console.error("Failed to prepare multiplayer host connection:", error);
      }
    });

    joinLanGameButton.addEventListener("click", async () => {
      const typedServerAddress = String(lanHostIpInput.value ?? "").trim();
      const joinServerAddress = typedServerAddress || defaultOnlineRelayAddress;
      if (!typedServerAddress) {
        lanHostIpInput.value = joinServerAddress;
      }
      await joinLANGame(joinServerAddress);
    });

    lanHostIpInput.addEventListener("keydown", async (event) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      await joinLANGame(lanHostIpInput.value);
    });

    if (crosshairCustomizationPanel) {
      const stopCrosshairPanelEvent = (event) => {
        event.stopPropagation();
      };

      for (const eventName of ["click", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"]) {
        crosshairCustomizationPanel.addEventListener(eventName, stopCrosshairPanelEvent);
      }
    }

    if (homeSettingsCrosshairButton) {
      homeSettingsCrosshairButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("[CROSSHAIR] Home Settings button clicked");
        openCrosshairCustomizationForCurrentContext();
        settingsMenuOpen = false;
        syncMenuState();
      });
    }

    if (ingameSettingsCrosshairButton) {
      ingameSettingsCrosshairButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("[CROSSHAIR] In-game Settings button clicked");

        // Already in-game (real session), just show panel in place
        console.log("[CROSSHAIR] opened in game");
        setSettingsMenuOpen(false);
        setCrosshairCustomizationPanelOpen(true);
      });
    }

    if (crosshairCustomizationCloseButton) {
      crosshairCustomizationCloseButton.addEventListener("click", () => {
        setCrosshairCustomizationPanelOpen(false);
        if (activeSettingsPreviewFlow === "crosshair") {
          exitCrosshairCustomizationPreviewMode();
        }
      });
    }

    for (const input of crosshairVisualInputs) {
      const applyCrosshairVisualValue = () => {
        const variableName = input.dataset.crosshairVar;
        if (!variableName) {
          return;
        }

        applyCrosshairInputValue(input, input.value);
        saveBasicCrosshairSetting(variableName, input.value);
      };

      input.addEventListener("input", applyCrosshairVisualValue);
      input.addEventListener("change", applyCrosshairVisualValue);
      applyCrosshairVisualValue();
    }
    console.log("[CROSSHAIR RESTORE] defaults validated");
    console.log("[CROSSHAIR RESTORE] applied", Object.fromEntries(
      crosshairVisualInputs
        .filter((input) => input.dataset.crosshairVar)
        .map((input) => [input.dataset.crosshairVar, input.value])
    ));

    document.addEventListener("focusin", (event) => {
      if (!isEditableFormControl(event.target)) {
        return;
      }

      clearMovementInput();
    });

    for (const button of settingsTabButtons) {
      button.addEventListener("click", () => {
        if (button.disabled) {
          return;
        }

        if (activeSettingsTabId === button.dataset.settingsTab) {
          collapseActiveSettingsTab();
          return;
        }

        setActiveSettingsTab(button.dataset.settingsTab);
      });
    }

    settingsMenuBackButton.addEventListener("click", () => {
      handleSettingsBackAction();
    });

    settingsFullscreenButton.addEventListener("click", async () => {
      await toggleFullscreenMode();
    });

    settingsHomeButton?.addEventListener("click", () => {
      if (
        handleHomeFromOnlineClient("settings home clicked") ||
        leaveMirroredHostAimTrainingLocally("settings home clicked")
      ) {
        return;
      }
      cleanupAimTrainingMode();
      exitCameraCustomizationPreviewMode();
      closeMenus();
      showMainMenu();
    });

    settingsMenuCloseButton.addEventListener("click", () => {
      handleSettingsBackAction();
    });

    if (settingsMenu) {
      settingsMenu.addEventListener("wheel", handleSettingsWheelScroll, { passive: false });
    }

    settingsCategoryResetButton.addEventListener("click", () => {
      if (settingsCategoryResetButton.disabled) {
        return;
      }

      resetSettingsCategoryToDefault();
    });

    settingsFovInput.addEventListener("input", () => {
      if (settingsFovInput.value === "") {
        return;
      }

      applyCameraFov(settingsFovInput.value);
    });

    settingsFovInput.addEventListener("change", () => {
      if (settingsFovInput.value === "") {
        syncSettingsInputs();
        return;
      }

      applyCameraFov(settingsFovInput.value);
    });

    graphicsRenderScaleInput.addEventListener("input", () => {
      if (graphicsRenderScaleInput.value === "") {
        return;
      }

      applyGraphicsSettingChange("renderScalePercent", graphicsRenderScaleInput.value);
    });

    graphicsRenderScaleInput.addEventListener("change", () => {
      if (graphicsRenderScaleInput.value === "") {
        syncSettingsInputs();
        return;
      }

      applyGraphicsSettingChange("renderScalePercent", graphicsRenderScaleInput.value);
    });

    graphicsPixelRatioInput.addEventListener("input", () => {
      if (graphicsPixelRatioInput.value === "") {
        return;
      }

      applyGraphicsSettingChange("pixelRatio", graphicsPixelRatioInput.value);
    });

    graphicsPixelRatioInput.addEventListener("change", () => {
      if (graphicsPixelRatioInput.value === "") {
        syncSettingsInputs();
        return;
      }

      applyGraphicsSettingChange("pixelRatio", graphicsPixelRatioInput.value);
    });

    graphicsShadowsToggle.addEventListener("change", () => {
      applyGraphicsSettingChange("shadowsEnabled", graphicsShadowsToggle.checked);
    });

    graphicsShadowQualitySelect.addEventListener("change", () => {
      applyGraphicsSettingChange("shadowQuality", graphicsShadowQualitySelect.value);
    });

    graphicsRenderDistanceInput.addEventListener("input", () => {
      if (graphicsRenderDistanceInput.value === "") {
        return;
      }

      applyGraphicsSettingChange("renderDistance", graphicsRenderDistanceInput.value);
    });

    graphicsRenderDistanceInput.addEventListener("change", () => {
      if (graphicsRenderDistanceInput.value === "") {
        syncSettingsInputs();
        return;
      }

      applyGraphicsSettingChange("renderDistance", graphicsRenderDistanceInput.value);
    });

    graphicsEffectQualitySelect.addEventListener("change", () => {
      applyGraphicsSettingChange("effectQuality", graphicsEffectQualitySelect.value);
    });

    advancedColorStyleSelect.addEventListener("change", () => {
      applyAdvancedGraphicsColorStyleChange(advancedColorStyleSelect.value);
    });

    advancedExposureInput.addEventListener("input", () => {
      if (advancedExposureInput.value === "") return;
      applyAdvancedGraphicsSettingChange("exposure", advancedExposureInput.value);
    });
    advancedExposureInput.addEventListener("change", () => {
      if (advancedExposureInput.value === "") {
        syncSettingsInputs();
        return;
      }
      applyAdvancedGraphicsSettingChange("exposure", advancedExposureInput.value);
    });

    advancedContrastInput.addEventListener("input", () => {
      if (advancedContrastInput.value === "") return;
      applyAdvancedGraphicsSettingChange("contrast", advancedContrastInput.value);
    });
    advancedContrastInput.addEventListener("change", () => {
      if (advancedContrastInput.value === "") {
        syncSettingsInputs();
        return;
      }
      applyAdvancedGraphicsSettingChange("contrast", advancedContrastInput.value);
    });

    advancedSaturationInput.addEventListener("input", () => {
      if (advancedSaturationInput.value === "") return;
      applyAdvancedGraphicsSettingChange("saturation", advancedSaturationInput.value);
    });
    advancedSaturationInput.addEventListener("change", () => {
      if (advancedSaturationInput.value === "") {
        syncSettingsInputs();
        return;
      }
      applyAdvancedGraphicsSettingChange("saturation", advancedSaturationInput.value);
    });

    advancedFogToggle.addEventListener("change", () => {
      applyAdvancedGraphicsSettingChange("fogEnabled", advancedFogToggle.checked);
    });

    advancedFogStrengthInput.addEventListener("input", () => {
      if (advancedFogStrengthInput.value === "") return;
      applyAdvancedGraphicsSettingChange("fogStrength", advancedFogStrengthInput.value);
    });
    advancedFogStrengthInput.addEventListener("change", () => {
      if (advancedFogStrengthInput.value === "") {
        syncSettingsInputs();
        return;
      }
      applyAdvancedGraphicsSettingChange("fogStrength", advancedFogStrengthInput.value);
    });

    advancedFogDistanceInput.addEventListener("input", () => {
      if (advancedFogDistanceInput.value === "") return;
      applyAdvancedGraphicsSettingChange("fogDistance", advancedFogDistanceInput.value);
    });
    advancedFogDistanceInput.addEventListener("change", () => {
      if (advancedFogDistanceInput.value === "") {
        syncSettingsInputs();
        return;
      }
      applyAdvancedGraphicsSettingChange("fogDistance", advancedFogDistanceInput.value);
    });

    advancedBloomToggle.addEventListener("change", () => {
      applyAdvancedGraphicsSettingChange("bloomEnabled", advancedBloomToggle.checked);
    });

    advancedBloomStrengthInput.addEventListener("input", () => {
      if (advancedBloomStrengthInput.value === "") return;
      applyAdvancedGraphicsSettingChange("bloomStrength", advancedBloomStrengthInput.value);
    });
    advancedBloomStrengthInput.addEventListener("change", () => {
      if (advancedBloomStrengthInput.value === "") {
        syncSettingsInputs();
        return;
      }
      applyAdvancedGraphicsSettingChange("bloomStrength", advancedBloomStrengthInput.value);
    });

    advancedAoToggle.addEventListener("change", () => {
      applyAdvancedGraphicsSettingChange("ambientOcclusionEnabled", advancedAoToggle.checked);
    });

    advancedAoStrengthInput.addEventListener("input", () => {
      if (advancedAoStrengthInput.value === "") return;
      applyAdvancedGraphicsSettingChange("aoStrength", advancedAoStrengthInput.value);
    });
    advancedAoStrengthInput.addEventListener("change", () => {
      if (advancedAoStrengthInput.value === "") {
        syncSettingsInputs();
        return;
      }
      applyAdvancedGraphicsSettingChange("aoStrength", advancedAoStrengthInput.value);
    });

    advancedAntialiasingSelect.addEventListener("change", () => {
      applyAdvancedGraphicsSettingChange("antiAliasing", advancedAntialiasingSelect.value);
    });

    advancedMaterialQualitySelect.addEventListener("change", () => {
      applyAdvancedGraphicsSettingChange("materialQuality", advancedMaterialQualitySelect.value);
    });

    advancedDynamicLightsSelect.addEventListener("change", () => {
      applyAdvancedGraphicsSettingChange("dynamicLights", advancedDynamicLightsSelect.value);
    });

    advancedMotionBlurSelect.addEventListener("change", () => {
      const nextMotionBlur = advancedMotionBlurSelect.value;
      const currentAdvancedGraphics = graphicsSettings.advancedGraphics || advancedGraphicsDefaults;
      const nextMotionBlurStrength =
        currentAdvancedGraphics.motionBlurStrength > 0
          ? currentAdvancedGraphics.motionBlurStrength
          : nextMotionBlur === "Low"
            ? 20
            : nextMotionBlur === "Medium"
              ? 45
              : currentAdvancedGraphics.motionBlurStrength;

      console.log("[ADVANCED GRAPHICS] motionBlur changed", nextMotionBlur);
      applyGraphicsSettings(
        {
          advancedGraphics: {
            ...currentAdvancedGraphics,
            motionBlur: nextMotionBlur,
            motionBlurStrength: nextMotionBlurStrength
          }
        },
        { reason: "advanced-change:motionBlur" }
      );
    });

    advancedMotionBlurStrengthInput.addEventListener("input", () => {
      if (advancedMotionBlurStrengthInput.value === "") return;
      applyAdvancedGraphicsSettingChange("motionBlurStrength", advancedMotionBlurStrengthInput.value);
    });
    advancedMotionBlurStrengthInput.addEventListener("change", () => {
      if (advancedMotionBlurStrengthInput.value === "") {
        syncSettingsInputs();
        return;
      }
      applyAdvancedGraphicsSettingChange("motionBlurStrength", advancedMotionBlurStrengthInput.value);
    });

    mobileCameraSensitivityInput.addEventListener("input", () => {
      if (mobileCameraSensitivityInput.value === "") {
        return;
      }

      applyMobileCameraSensitivity(mobileCameraSensitivityInput.value);
    });

    mobileCameraSensitivityInput.addEventListener("change", () => {
      if (mobileCameraSensitivityInput.value === "") {
        syncSettingsInputs();
        return;
      }

      applyMobileCameraSensitivity(mobileCameraSensitivityInput.value);
    });

    openMobileLayoutButton.addEventListener("click", async () => {
      const mobileLayoutEntryContext = getMobileLayoutEntryContext();
      if (!mobileLayoutEntryContext) {
        showStatusMessage("Open Custom Layout from Settings in Phone Mode.", 1600);
        return;
      }

      await enterMobileLayoutPreviewMode();
    });

    mobileLayoutSaveButton.addEventListener("click", () => {
      saveMobileControlLayout();
    });

    mobileLayoutCloseButton.addEventListener("click", () => {
      const didExit = exitMobileLayoutPreviewMode({ reason: "cancel" });
      if (didExit) {
        return;
      }
    });

    mobileLayoutCancelButton.addEventListener("click", () => {
      const didExit = exitMobileLayoutPreviewMode({ reason: "cancel" });
      if (didExit) {
        return;
      }
    });

    mobileLayoutResetButton.addEventListener("click", () => {
      resetMobileControlLayout();
    });

    if (uiTransparencySlider) {
      uiTransparencySlider.addEventListener("input", () => {
        if (uiTransparencySlider.value === "") {
          return;
        }

        applyUiTransparency(uiTransparencySlider.value);
      });

      uiTransparencySlider.addEventListener("change", () => {
        if (uiTransparencySlider.value === "") {
          syncSettingsInputs();
          return;
        }

        applyUiTransparency(uiTransparencySlider.value);
      });
    }

    if (uiTransparencyResetButton) {
      uiTransparencyResetButton.addEventListener("click", () => {
        applyUiTransparency(defaultUiTransparency, {
          persist: true,
          syncInput: true
        });
        showStatusMessage("UI transparency reset.", 1400);
      });
    }

    for (const config of cameraCustomizationControlConfigs) {
      const controls = cameraCustomizationControls[config.key];
      if (!controls) {
        continue;
      }

      controls.rangeInput.addEventListener("input", () => {
        if (controls.rangeInput.value === "") {
          return;
        }

        applyCameraCustomizationSetting(config.key, controls.rangeInput.value);
      });

      controls.rangeInput.addEventListener("change", () => {
        if (controls.rangeInput.value === "") {
          syncSettingsInputs();
          return;
        }

        applyCameraCustomizationSetting(config.key, controls.rangeInput.value);
      });

      controls.numberInput.addEventListener("input", () => {
        if (controls.numberInput.value === "") {
          return;
        }

        applyCameraCustomizationSetting(config.key, controls.numberInput.value);
      });

      controls.numberInput.addEventListener("change", () => {
        if (controls.numberInput.value === "") {
          syncSettingsInputs();
          return;
        }

        applyCameraCustomizationSetting(config.key, controls.numberInput.value);
      });
    }

    if (cameraCustomizationResetButton) {
      cameraCustomizationResetButton.addEventListener("click", () => {
        const resetSettings = cameraMode === "firstPerson"
          ? defaultFirstPersonCameraSettings
          : defaultCameraCustomizationSettings;
        for (const config of cameraCustomizationControlConfigs) {
          applyCameraCustomizationSetting(
            config.key,
            resetSettings[config.key],
            { persist: false, syncInputs: false }
          );
        }

        persistCameraCustomizationSettings();
        syncSettingsInputs();
        showStatusMessage("Camera customization reset.", 1400);
      });
    }

    savedGunList.addEventListener("change", () => {
      if (savedGunList.value === "") {
        syncGunInputs();
        return;
      }

      const savedGun = savedGuns[Number(savedGunList.value)];
      if (!savedGun) {
        return;
      }

      applyGunConfig(savedGun);
      showStatusMessage(`${savedGun.name} equipped.`, 1400);
    });

    function syncLiveGunCustomizationState() {
      localStorage.setItem(currentGunStorageKey, JSON.stringify(currentGun));
      const matchingSavedGunIndex = getMatchingSavedGunIndex(currentGun);
      savedGunList.value = matchingSavedGunIndex >= 0 ? String(matchingSavedGunIndex) : "";
    }

    function applyLiveHeadshotMultiplierInput({ commit = false } = {}) {
      if (gunHeadshotMultiplierInput.value === "") {
        if (commit) {
          syncGunInputs();
        }
        return;
      }

      const nextHeadshotMultiplier = clampHeadshotMultiplier(gunHeadshotMultiplierInput.value);

      // Headshot multiplier setting added
      // Shared multiplier between menus
      currentGun.headshotMultiplier = nextHeadshotMultiplier;
      headshotDamage = currentGun.damage * currentGun.headshotMultiplier;
      syncLiveGunCustomizationState();

      if (commit || Number(gunHeadshotMultiplierInput.value) !== nextHeadshotMultiplier) {
        gunHeadshotMultiplierInput.value = nextHeadshotMultiplier.toFixed(1);
      }
    }

    gunHeadshotMultiplierInput.addEventListener("input", () => {
      applyLiveHeadshotMultiplierInput();
    });

    gunHeadshotMultiplierInput.addEventListener("change", () => {
      applyLiveHeadshotMultiplierInput({ commit: true });
    });

    function applyLiveRecoilStrengthInput({ commit = false } = {}) {
      if (gunRecoilStrengthInput.value === "") {
        if (commit) {
          syncGunInputs();
        }
        return;
      }

      const nextRecoilStrength = clampRecoilStrength(gunRecoilStrengthInput.value);

      // Shared recoil settings for gun modification
      currentGun.recoilStrength = nextRecoilStrength;
      syncLiveGunCustomizationState();

      if (commit || Number(gunRecoilStrengthInput.value) !== nextRecoilStrength) {
        gunRecoilStrengthInput.value = nextRecoilStrength.toFixed(1);
      }
    }

    gunRecoilStrengthInput.addEventListener("input", () => {
      applyLiveRecoilStrengthInput();
    });

    gunRecoilStrengthInput.addEventListener("change", () => {
      applyLiveRecoilStrengthInput({ commit: true });
    });

    gunRecoilEnabledInput.addEventListener("change", () => {
      // Shared recoil settings for gun modification
      currentGun.recoilEnabled = gunRecoilEnabledInput.checked;
      syncLiveGunCustomizationState();
    });

    gunAdvancedRecoilButton.addEventListener("click", () => {
      setAdvancedRecoilPanelOpen(!advancedRecoilPanelOpen);
    });

    gunAdvancedRecoilCloseButton.addEventListener("click", () => {
      setAdvancedRecoilPanelOpen(false);
    });

    function applyLiveRecoilIntensityInput(
      inputElement,
      intensityKey,
      fallbackValue,
      { commit = false } = {}
    ) {
      if (inputElement.value === "") {
        if (commit) {
          syncGunInputs();
        }
        return;
      }

      const nextRecoilIntensity = clampRecoilIntensity(inputElement.value, fallbackValue);

      // Shared X/Y/Z recoil intensity settings
      currentGun[intensityKey] = nextRecoilIntensity;
      syncLiveGunCustomizationState();

      if (commit || Number(inputElement.value) !== nextRecoilIntensity) {
        inputElement.value = nextRecoilIntensity.toFixed(2);
      }
    }

    gunRecoilIntensityXInput.addEventListener("input", () => {
      applyLiveRecoilIntensityInput(gunRecoilIntensityXInput, "recoilIntensityX", 0.06);
    });

    gunRecoilIntensityXInput.addEventListener("change", () => {
      applyLiveRecoilIntensityInput(gunRecoilIntensityXInput, "recoilIntensityX", 0.06, {
        commit: true
      });
    });

    gunRecoilIntensityYInput.addEventListener("input", () => {
      applyLiveRecoilIntensityInput(gunRecoilIntensityYInput, "recoilIntensityY", 0.55);
    });

    gunRecoilIntensityYInput.addEventListener("change", () => {
      applyLiveRecoilIntensityInput(gunRecoilIntensityYInput, "recoilIntensityY", 0.55, {
        commit: true
      });
    });

    gunRecoilIntensityZInput.addEventListener("input", () => {
      applyLiveRecoilIntensityInput(gunRecoilIntensityZInput, "recoilIntensityZ", 0.05);
    });

    gunRecoilIntensityZInput.addEventListener("change", () => {
      applyLiveRecoilIntensityInput(gunRecoilIntensityZInput, "recoilIntensityZ", 0.05, {
        commit: true
      });
    });

    canvas.addEventListener("mousedown", (event) => {
      if (event.button === 2) {
        console.log("[SCOPE INPUT FIX] right mouse aim down");
        if (isDesktopPointerLockCameraModeActive()) {
          startAdsAiming("rightMouse");
        }
        return;
      }
      if (event.button !== 0) {
        return;
      }

      if (!isDesktopPointerLockCameraModeActive()) {
        return;
      }

      if (mobileLayoutEditMode || activeSettingsPreviewFlow === "mobile-layout") {
        return;
      }

      if (!pointerLocked) {
        requestLock();
        return;
      }

      isShooting = true;
      syncMobileHudActionAvailability();
      tryShoot(performance.now());
    });

    window.addEventListener("mousedown", (event) => {
      if (
        event.button !== 0 ||
        !isDesktopPointerLockCameraModeActive() ||
        pointerLocked ||
        !cameraCustomizationPreviewMode ||
        activeSettingsPreviewFlow !== "camera"
      ) {
        return;
      }

      if (isCameraPreviewMenuInteractionTarget(event.target)) {
        // Do not pointer-lock on menu interaction
        return;
      }

      // Camera preview: click game screen to lock cursor
      requestLock({ allowMenuOpen: true });
    });

    window.addEventListener("mouseup", (event) => {
      if (event.button === 2) {
        console.log("[SCOPE INPUT FIX] right mouse aim up");
        stopAdsAiming("rightMouse");
      }
      if (event.button === 0) {
        isShooting = false;
        syncMobileHudActionAvailability();
      }
    });

    canvas.addEventListener("contextmenu", (event) => {
      console.log("[AIM RAW] contextmenu prevented");
      event.preventDefault();
    });

    window.addEventListener("pointerdown", (event) => {
      if (handleMobileTouchZonePointerDown(event)) {
        return;
      }

      handleMobileDesktopCameraSimulationPointerDown(event);
    });

    window.addEventListener("pointermove", (event) => {
      if (mobileLayoutEditMode && event.pointerId === activeMobileLayoutPointerId) {
        event.preventDefault();
        updateMobileLayoutPointerInteraction(event);
        return;
      }

      if (event.pointerId === activeMobileJoystickPointerId) {
        event.preventDefault();
        updateMobileJoystickInteraction(event);
        return;
      }

      if (event.pointerId === activeMobileCameraPointerId) {
        event.preventDefault();
        updateMobileCameraInteraction(event);
        return;
      }

      if (event.pointerId === activeMobileFireAimPointerId) {
        event.preventDefault();
        updateMobileFireDragAim(event);
        return;
      }

      if (
        !settingsMenu.classList.contains("camera-preview-panel") ||
        cameraPreviewPanelDragPointerId === null ||
        event.pointerId !== cameraPreviewPanelDragPointerId
      ) {
        return;
      }

      applyCameraPreviewPanelLeft(
        cameraPreviewPanelDragStartLeft + (event.clientX - cameraPreviewPanelDragStartX)
      );
    });

    window.addEventListener("pointerup", (event) => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      const clearedPointerIds = [];
      let cameraStateReset = false;
      unregisterActiveMobileTouchPointerId(event.pointerId);

      if (event.pointerId === activeMobileLayoutPointerId) {
        clearActiveMobileLayoutInteraction(event.pointerId);
      }

      if (event.pointerId === activeMobileJoystickPointerId) {
        stopMobileJoystickInteraction(event.pointerId);
        clearedPointerIds.push(event.pointerId);
      }

      if (event.pointerId === activeMobileCameraPointerId) {
        stopMobileCameraInteraction(event.pointerId, { reason: "pointerup" });
        clearedPointerIds.push(event.pointerId);
        cameraStateReset = true;
      }

      releaseMobileHudActionPointer(event.pointerId);

      if (event.pointerId === cameraPreviewPanelDragPointerId) {
        releaseCameraPreviewPanelDrag(event.pointerId);
      }

      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: event.type,
        pointerId: event.pointerId,
        activePointersBefore,
        clearedPointerIds,
        cameraStateReset,
        activePointersAfter: getActiveMobileInputPointerSnapshot(),
        reason: "pointerup"
      });
    });

    window.addEventListener("pointercancel", (event) => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      const clearedPointerIds = [];
      let cameraStateReset = false;
      unregisterActiveMobileTouchPointerId(event.pointerId);

      if (event.pointerId === activeMobileLayoutPointerId) {
        clearActiveMobileLayoutInteraction(event.pointerId);
      }

      if (event.pointerId === activeMobileJoystickPointerId) {
        stopMobileJoystickInteraction(event.pointerId);
        clearedPointerIds.push(event.pointerId);
      }

      if (event.pointerId === activeMobileCameraPointerId) {
        stopMobileCameraInteraction(event.pointerId, { reason: "pointercancel" });
        clearedPointerIds.push(event.pointerId);
        cameraStateReset = true;
      }

      releaseMobileHudActionPointer(event.pointerId);

      if (event.pointerId === cameraPreviewPanelDragPointerId) {
        releaseCameraPreviewPanelDrag(event.pointerId);
      }

      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: event.type,
        pointerId: event.pointerId,
        activePointersBefore,
        clearedPointerIds,
        cameraStateReset,
        activePointersAfter: getActiveMobileInputPointerSnapshot(),
        reason: "pointercancel"
      });
    });

    window.addEventListener("touchend", (event) => {
      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: event.type,
        changedTouchIdentifiers: Array.from(event.changedTouches, (touch) => touch.identifier),
        activePointersBefore: getActiveMobileInputPointerSnapshot(),
        clearedPointerIds: [],
        cameraStateReset: false,
        reason: "touchend"
      });
    }, { passive: true });

    window.addEventListener("touchcancel", (event) => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      const changedTouchIdentifiers = Array.from(event.changedTouches, (touch) => touch.identifier);
      logMobilePointerStaleDetected("touchcancel", activePointersBefore, {
        changedTouchIdentifiers
      });
      clearTouchBasedMobileGameplayInputs("touchcancel", {
        eventType: event.type,
        changedTouchIdentifiers
      });
    }, { passive: true });

    window.addEventListener("lostpointercapture", (event) => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      if (event.pointerId === activePointersBefore.activeMobileCameraPointerId) {
        unregisterActiveMobileTouchPointerId(event.pointerId);
        stopMobileCameraInteraction(event.pointerId, { reason: "lostpointercapture" });
        logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
          eventType: event.type,
          pointerId: event.pointerId,
          target: describeElementForDiagnostics(event.target),
          activePointersBefore,
          clearedPointerIds: [event.pointerId],
          cameraStateReset: true,
          activePointersAfter: getActiveMobileInputPointerSnapshot(),
          reason: "lostpointercapture"
        });
        logMobilePointerStaleDetected("lostpointercapture-active-camera", activePointersBefore, {
          pointerId: event.pointerId
        });
        return;
      }
      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: event.type,
        pointerId: event.pointerId,
        target: describeElementForDiagnostics(event.target),
        activePointersBefore,
        clearedPointerIds: [],
        cameraStateReset: false,
        reason: "lostpointercapture"
      });
    }, true);

    for (const elementId of editableGameplayHudIds) {
      editableGameplayHudElements[elementId].element.addEventListener("pointerdown", handleMobileLayoutControlPointerDown);
    }

    canvas.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    document.addEventListener("pointerlockchange", () => {
      pointerLocked = document.pointerLockElement === canvas;
      if (pointerLocked && !isDesktopPointerLockCameraModeActive()) {
        document.exitPointerLock?.();
        return;
      }
      // Esc unlocks cursor for camera preview UI
      if (!pointerLocked && !gameStarted) {
        showMainMenu();
      }
      if (!pointerLocked) {
        isShooting = false;
        syncMobileHudActionAvailability();
      }
    });

    document.addEventListener("mousemove", (event) => {
      if (!pointerLocked || !isDesktopPointerLockCameraModeActive()) {
        return;
      }

      applyCameraLookDelta(event.movementX, event.movementY);
    });

    window.addEventListener("keydown", (event) => {
      if (shouldIgnoreGameplayKeyboardEvent(event)) {
        return;
      }

      if (mobileLayoutEditMode) {
        event.preventDefault();
        return;
      }

      if (cameraCustomizationPreviewMode && (event.code === "KeyK" || event.code === "KeyM")) {
        event.preventDefault();
        return;
      }

      if ((homeSettingsViewOpen || homeGunViewOpen) && (event.code === "KeyK" || event.code === "KeyM")) {
        event.preventDefault();
        return;
      }

      if (event.code === "KeyK" && !event.repeat) {
        console.log("K pressed - toggle settings menu");
        toggleSettingsMenu();
        return;
      }

      if (event.code === "KeyV" && !event.repeat) {
        toggleCameraMode();
        return;
      }

      if (event.code === "KeyM" && !event.repeat) {
        setMenuOpen(!interactionMenuOpen);
        return;
      }

      if (event.code === "KeyC" && gameStarted && !menuOpen && !homeSettingsViewOpen && !homeGunViewOpen) {
        if (!event.repeat) {
          setCrouchState(true);
        }
        event.preventDefault();
        return;
      }

      if (setMovementKeyState(event.code, true)) {
        return;
      }

      switch (event.code) {
        case "ShiftLeft":
        case "ShiftRight":
          moveState.sprint = true;
          syncMobileHudActionAvailability();
          break;
        case "Space":
          if (isGrounded) {
            verticalVelocity = moveConfig.jumpSpeed;
            isGrounded = false;
            localJumpSequenceId += 1;
            syncPlayerAimIdleAnimation(true, true);
          }
          event.preventDefault();
          break;
        case "KeyR":
          if (!playerDead) {
            beginReload();
          }
          break;
        default:
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      if (shouldIgnoreGameplayKeyboardEvent(event)) {
        return;
      }

      if (mobileLayoutEditMode) {
        event.preventDefault();
        return;
      }

      if (event.code === "KeyC" && isCrouching) {
        setCrouchState(false);
        event.preventDefault();
        return;
      }

      if (setMovementKeyState(event.code, false)) {
        return;
      }

      switch (event.code) {
        case "ShiftLeft":
        case "ShiftRight":
          moveState.sprint = false;
          syncMobileHudActionAvailability();
          break;
        default:
          break;
      }
    });

    window.addEventListener("resize", () => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: "resize",
        activePointersBefore,
        clearedPointerIds: [],
        cameraStateReset: false,
        reason: "resize"
      });
      logMobilePointerStaleDetected("resize", activePointersBefore);
      clearTouchBasedMobileGameplayInputs("resize");
      handleResize({
        reason: "resize",
        emitLog: false
      });
    });

    window.addEventListener("orientationchange", () => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: "orientationchange",
        activePointersBefore,
        clearedPointerIds: [],
        cameraStateReset: false,
        reason: "orientationchange"
      });
      logMobilePointerStaleDetected("orientationchange", activePointersBefore);
      clearTouchBasedMobileGameplayInputs("orientationchange");
      handleResize({
        reason: "orientationchange-immediate",
        emitLog: false
      });
      window.setTimeout(() => {
        handleResize({
          reason: "orientationchange-delayed",
          emitLog: false
        });
      }, 120);
    });

    document.addEventListener("fullscreenchange", () => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: "fullscreenchange",
        activePointersBefore,
        clearedPointerIds: [],
        cameraStateReset: false,
        reason: "fullscreenchange"
      });
      logMobilePointerStaleDetected("fullscreenchange", activePointersBefore, {
        fullscreenActive: isFullscreenActive()
      });
      clearTouchBasedMobileGameplayInputs("fullscreenchange", {
        fullscreenActive: isFullscreenActive()
      });
      handleResize({
        reason: "fullscreenchange",
        emitLog: false
      });

      if (isActuallyFullscreenNow()) {
        scheduleRestoreSavedMobileLayout("entered-fullscreen");
      } else {
        scheduleMobileHudReflow("exited-fullscreen");
      }
    });

    // Browser-specific fullscreen events
    const fullscreenEvents = ["webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
    fullscreenEvents.forEach(evt => {
      document.addEventListener(evt, () => {
        if (isActuallyFullscreenNow()) {
          scheduleRestoreSavedMobileLayout(evt);
        } else {
          scheduleMobileHudReflow(evt);
        }
      });
    });

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", () => scheduleMobileHudReflow("visual-viewport-resize"));
      window.visualViewport.addEventListener("scroll", () => scheduleMobileHudReflow("visual-viewport-scroll"));
    }

    window.addEventListener("keydown", (event) => {
      if (event.code === "F9") {
        console.log("[AIM DEBUG] F9 down");
        startAdsAiming("debugF9");
      }
    });

    window.addEventListener("keyup", (event) => {
      if (event.code === "F9") {
        console.log("[AIM DEBUG] F9 up");
        stopAdsAiming("debugF9");
      }
    });

    if (mobileControlAim) {
      mobileControlAim.addEventListener("pointerdown", (event) => {
        const customLayoutOpen = mobileLayoutEditMode || activeSettingsPreviewFlow === "mobile-layout";
        if (!customLayoutOpen) {
          startAdsAiming("mobileButton");
          event.preventDefault();
          event.stopPropagation();
        }
      });
      mobileControlAim.addEventListener("pointerup", (event) => {
        stopAdsAiming("mobileButton");
      });
      mobileControlAim.addEventListener("pointercancel", (event) => {
        stopAdsAiming("mobileButton");
      });
      mobileControlAim.addEventListener("pointerleave", (event) => {
        stopAdsAiming("mobileButton");
      });
    } else {
      console.warn("[AIM RAW] mobile AIM button NOT found");
    }

    window.addEventListener("blur", () => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: "blur",
        activePointersBefore,
        clearedPointerIds: [],
        cameraStateReset: false,
        reason: "window-blur"
      });
      logMobilePointerStaleDetected("window-blur", activePointersBefore);
      clearTouchBasedMobileGameplayInputs("window-blur");
    });

    document.addEventListener("visibilitychange", () => {
      const activePointersBefore = getActiveMobileInputPointerSnapshot();
      logMobileCameraCleanupEvent("mobile_camera_cleanup_event", {
        eventType: "visibilitychange",
        visibilityState: document.visibilityState,
        activePointersBefore,
        clearedPointerIds: [],
        cameraStateReset: false,
        reason: "visibilitychange"
      });
      if (document.visibilityState !== "visible") {
        logMobilePointerStaleDetected("visibilitychange-hidden", activePointersBefore, {
          visibilityState: document.visibilityState
        });
        clearTouchBasedMobileGameplayInputs("visibilitychange-hidden", {
          visibilityState: document.visibilityState
        });
      }
    });

    window.addEventListener("pagehide", () => {
      announceLanSessionLeave();
    });
  }

  function animate() {
    animationLoopStarted = true;
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.033);
    const frameTime = performance.now();
    updateRecoil(delta);

    if (gameStarted && !playerDead && !menuOpen) {
      updatePlayer(delta);
      if (isTrackingBallActive) {
        updateTrackingBallMovement(delta);
      }
    }

    updateActorPvpHitboxes(playerActor, isCrouching ? 1 : 0);
    sendLocalPlayerState(frameTime);
    updateAimTrainingStatsHud();

    updateEnemies(delta);
    broadcastSharedEnemyStates(frameTime);
    updateHealthPickups();
    updateBlossomPetalSystem(delta, clock.elapsedTime);
    if (playerAnimationMixer) {
      playerAnimationMixer.update(delta);
    }
    updateRemotePlayers(delta);
    updateCamera(delta);
    updatePlayerNameplates();
    updateEnemyHpBars();
    updateShooting();
    broadcastAimTrainingSyncIfNeeded(frameTime);
    if (isReloading) {
      updateAmmoUi();
    }
    updateProceduralCityChunkVisibility();
    updateCoordinatesOverlay();
    renderer.render(scene, camera);
    updatePerfOverlay(delta);
  }

  createCameraCustomizationControls();
  const uiTransparencyControls = createUiTransparencyControls();
  uiTransparencySlider = uiTransparencyControls.slider;
  uiTransparencyValue = uiTransparencyControls.value;
  uiTransparencyResetButton = uiTransparencyControls.resetButton;
  setActiveSettingsTab(activeSettingsTabId, { emitLog: false });
  syncSettingsDebugReadout();
  updateWaveStatusUi();
  syncFullscreenButtons();
  bindDeviceModeChooserEvents();
  closeMenus();
  ensureMapOption(ironworksYardMapId, ironworksYardDisplayName);
  setCrosshairCustomizationPanelOpen(false);
  updateStartupLoadingProgress();
  loadGunConfigs();
  loadSavedSettings();
  handleResize({
    reason: "startup-initial-layout",
    emitLog: false
  });
  setLanMultiplayerStatus(
    "Use the Shared Server Address field for both buttons. Leave it blank to use the default multiplayer endpoint for the current environment, or enter a LAN/server address manually."
  );
  setStartupReadiness("engineInitialized", true, {
    statusMessage: "Booting",
    debugMessage: "Renderer and saved settings are ready. Input bindings wait for device mode selection.",
    logPhase: "engine initialized"
  });
  updatePlayerHpUi();
  updateAmmoUi();
  updateAimTrainingHudVisibility();
  runStartupSequence();
  console.log("[AIM HUD FIX 003] precise lifecycle fix loaded");
};
