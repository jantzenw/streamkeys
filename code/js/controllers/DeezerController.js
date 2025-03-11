"use strict";
(function () {
  var BaseController = require("BaseController");

  var controller = new BaseController({
    siteName: "Deezer",

    playPrev: "",
    playPause: "",
    playNext: "",
    playState: "",
    dislike: "",
    mute: "",

    song: "a.track-link:nth-of-type(1)",
    artist: "a.track-link:nth-of-type(2)"
  });

  controller.playPrev = function () {
    document.querySelector("[data-testid='SkipBackFilledIcon']").closest("button").click();
  };

  controller.playPause = function () {
    document.querySelector("[data-testid='play_button_pause'], [data-testid='play_button_play']").closest("button").click();
  };

  controller.playNext = function () {
    document.querySelector("[data-testid='SkipNextFilledIcon']").closest("button").click();
  };

  controller.like = function () {
    document.querySelector("div.player-track [data-testid='HeartOutlinedIcon'], div.player-track [data-testid='HeartFilledIcon']").closest("button").click();
  };

  controller.dislike = function () {
    if (!document.querySelector("[data-testid='NoteBanIcon']")) {
      document.querySelector("[data-testid='angry_face_button']").closest("button").click();
    }
    setTimeout(function () {
      document.querySelector("[data-testid='NoteBanIcon']").closest("div").click();
    }, 100);
  };

  controller.mute = function () {
    document.querySelector("[data-testid='VolumeMaxIcon'], [data-testid='VolumeMuteIcon']").closest("button").click();
  };
})();
