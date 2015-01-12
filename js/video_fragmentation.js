// get video element
video = document.getElementsByTagName("video")[0];
fragend = 0;

// transport bar, play button etc
position    = document.getElementById("position");
fragmentbar = document.getElementById("fragmentbar");
curTime     = document.getElementById("curTime");
duration    = document.getElementById("duration");
play        = document.getElementById("play");

video.addEventListener("timeupdate", curTimeUpdate, false);
function curTimeUpdate(evt) {
  // stop playing if reached end of fragment
  if (video.currentTime >= fragend && !video.paused) togglePlay();
  curTime.innerHTML = video.currentTime.toFixed(2);
  position.style.width = 300*video.currentTime/video.duration + "px";
}

play.addEventListener("click", togglePlay, false);
function togglePlay() {
  if (video.paused == false) {
    video.pause();
    play.style.backgroundPosition = "0 0";
  } else {
    video.play();
    play.style.backgroundPosition = "0 -75px";
  }
}

function updateFragment(url) {
  var fragment = retrieveTimeFragment(url);
  if (fragment != "") {
    video.currentTime = (1.0*fragment[0]).toFixed(2);
    fragmentbar.style.left = 300.0*fragment[0]/video.duration + "px";
    fragmentbar.style.width = 300.0*(fragment[1]-fragment[0])/video.duration + "px";
    fragend = fragment[1];
  } else {
    fragend = video.duration;
  }
}

// once video is loaded, jump to time offset
video.addEventListener("loadedmetadata", init, false);
function init(evt) {
  // update duration display
  duration.innerHTML = video.duration.toFixed(2);
  fragend = video.duration;
  // calculate video url & offset
  // jump to offset given in video url
  var videourl = video.currentSrc;
  updateFragment(videourl);
  // first time only: jump to offset given in page url
  var currenturl = window.location.href;
  updateFragment(currenturl);
}

// parse the time hash out of the given url
function retrieveTimeFragment(url) {
  offsettime = [];
  if (url.indexOf("#") == -1) return [];
  var fragment = url.split("#")[1];
  // first separate out the different components separated by "&"
  if (fragment == "" || fragment == null) return [];
  var components = [];
  if (fragment.indexOf("&") == -1) {
    components[0] = fragment;
  } else {
    components = fragment.split("&");
  }
  // then parse the component by separating name from value by "="
  for (i=0; i<components.length; i++) {
    var name = components[i].split("=")[0];
    var value = components[i].split("=")[1];
    // then grab last "t" component and separate out start and end time
    if (name == "t") { // temporal URI
      if (value.indexOf("-") == -1) {
        start = (1.0*value).toFixed(2);
        end = video.duration.toFixed(2);
      } else {
        start = (1.0*value.split("-")[0]).toFixed(2);
        end = (1.0*value.split("-")[1]).toFixed(2);
      }
      offsettime = [start,end];
    }
  }
  return offsettime;
}

// when the hash on the window changes, also do an offset
window.addEventListener("hashchange", doVideoFragment, false);
function doVideoFragment(evt) {
  var url = window.location.href;
  updateFragment(url);
}

// capture onkeydown on the navigation to allow space bar to toggle play/pause
anchors = document.getElementsByTagName("a");
for (i=0; i < anchors.length; i++) {
  anchors[i].addEventListener("keydown", videoPlayPause, false);
}
function videoPlayPause(evt) {
  if (evt.keyCode == "32") { // space bar
    togglePlay();
  } if (evt.keyCode == "13") { // enter key
    var fragment = this.getAttribute("href");
    window.location.hash = fragment.substring(1);
    // stop event from bubbling
    evt = evt||event; /* get IE event ( not passed ) */
    evt.stopPropagation? evt.stopPropagation() : evt.cancelBubble = true;
  }
}

// set callback for video to update page URL with time offset when paused
// this actually makes the location.hash update urls work, since they are not re-loaded if unchanged
video.addEventListener("pause", updatePageUrl, false);
function updatePageUrl(evt) {
  // only change url if it wasn't reached as the end of a fragment
  if (video.currentTime < fragend) {
    videotime = video.currentTime;
    window.location.hash = "#t=" + videotime + "-" + fragend;
  }
}