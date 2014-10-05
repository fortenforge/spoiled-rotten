var s = '';
var e = '';

chrome.storage.sync.get('season', function (data) {
  console.log('test');
  if (chrome.runtime.lastError) {
    console.log('error for season');
    s = '1';
  }
  console.log('sfull');
  console.log(data);
  switch(data.season)
  {
    case '1':
      console.log('s1');
      s = '1';
    break;
    case '2':
      console.log('s2');
      s = '2';
    break;
    case '3':
      console.log('s3');
      s = '3';
    break;
    case '4':
      console.log('s4');
      s = '4';
    break;
    default:
      console.log('none');
      chrome.storage.sync.set({'season': '1'}, function() {
        console.log('Setting for season saved');
      });
      s = '1';
  }
  console.log(s);
});

chrome.storage.sync.get('episode', function (data) {
  if (chrome.runtime.lastError) {
    console.log('error for episode');
    e = '1';
  }
  console.log('efull');
  switch(data.episode)
  {
    case '1':
      console.log('e1');
      e = '1';
    break;
    case '2':
      console.log('e2');
      e = '2';
    break;
    case '3':
      console.log('e3');
      e = '3';
    break;
    case '4':
      console.log('e4');
      e = '4';
    break;
    case '5':
      console.log('e5');
      e = '5';
    break;
    case '6':
      console.log('e6');
      e = '6';
    break;
    case '7':
      console.log('e7');
      e = '7';
    break;
    case '8':
      console.log('e8');
      e = '8';
    break;
    case '9':
      console.log('e9');
      e = '9';
    break;
    case '10':
      console.log('e10');
      e = '10';
    break;
    default:
      console.log('none');
      chrome.storage.sync.set({'episode': '1'}, function() {
        console.log('Setting for episode saved');
      });
      e = '1';
  }
  console.log(e);
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSE")
      sendResponse({season: s, episode: e});
    else
      sendResponse({}); // snub them.
  });
});

/*
console.log(getSeason());
console.log(getEpisode());
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSE")
      sendResponse({season: getSeason(), episode: getEpisode()});
    else
      sendResponse({}); // snub them.
});*/
/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {season: getSeason(), episode: getEpisode()});
  });*/