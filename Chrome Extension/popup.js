function update() {
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {season: link1.value, episode: link2.value}, function(response) {
    console.log(response.farewell);
    });
  });
}

titles = ['Winter Is Coming', 'The Kingsroad', 'Lord Snow', 'Cripples, Bastards, and Broken Things', 
'The Wolf and the Lion', 'A Golden Crown', 'You Win or You Die', 'The Pointy End', 'Baelor', 'Fire and Blood', 
'The North Remembers', 'The Night Lands', 'What Is Dead May Never Die', 'Garden of Bones', 'The Ghost of Harrenhal', 
'The Old Gods and the New', 'A Man Without Honor', 'The Prince of Winterfell', 'Blackwater', 'Valar Morghulis', 
'Valar Dohaeris', 'Dark Wings, Dark Words', 'Walk of Punishment', 'And Now His Watch Is Ended', 'Kissed by Fire', 
'The Climb', 'The Bear and the Maiden Fair', 'Second Sons', 'The Rains of Castamere', 'Mhysa', 
'Two Swords', 'The Lion and the Rose', 'Breaker of Chains', 'Oathkeeper', 'First of His Name', 
'The Laws of Gods and Men', 'Mockingbird', 'The Mountain and the Viper', 'The Watchers on the Wall', 'The Children'];

chrome.storage.sync.get('season', function (data) {
  if (chrome.runtime.lastError) {
    return;
  }
  console.log('sfull');
  console.log(data);
  var link1 = document.getElementById('link1');
  switch(data.season)
  {
    case '1':
      console.log('s1');
      link1.value = '1';
    break;
    case '2':
      console.log('s2');
      link1.value = '2';
    break;
    case '3':
      console.log('s3');
      link1.value = '3';
    break;
    case '4':
      console.log('s4');
      link1.value = '4';
    break;
    default:
      console.log('none');
      chrome.storage.sync.set({'season': '1'}, function() {
        console.log('Setting for season saved');
      });
      link1.value = '1';
  }
  document.getElementById('num1').innerHTML = 'Season ' + link1.value;
});

chrome.storage.sync.get('episode', function (data) {
  if (chrome.runtime.lastError) {
    return;
  }
  console.log('efull');
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');
  switch(data.episode)
  {
    case '1':
      console.log('e1');
      link2.value = '1';
    break;
    case '2':
      console.log('e2');
      link2.value = '2';
    break;
    case '3':
      console.log('e3');
      link2.value = '3';
    break;
    case '4':
      console.log('e4');
      link2.value = '4';
    break;
    case '5':
      console.log('e5');
      link2.value = '5';
    break;
    case '6':
      console.log('e6');
      link2.value = '6';
    break;
    case '7':
      console.log('e7');
      link2.value = '7';
    break;
    case '8':
      console.log('e8');
      link2.value = '8';
    break;
    case '9':
      console.log('e9');
      link2.value = '9';
    break;
    case '10':
      console.log('e10');
      link2.value = '10';
    break;
    default:
      console.log('none');
      chrome.storage.sync.set({'episode': '1'}, function() {
        console.log('Setting for episode saved');
      });
      link2.value = '1';
  }
  document.getElementById('num2').innerHTML = 'Episode ' + link2.value;
  document.getElementById('num3').innerHTML = titles[(parseInt(link1.value) - 1) * 10 + parseInt(link2.value) - 1];
  update();
});
/*console.log('hi');
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log('begin');
  chrome.tabs.sendMessage(tabs[0].id, {season: link1.value, episode: link2.value}, function(response) {
  console.log('response');
  console.log(response.farewell);
  });
});*/
document.addEventListener('DOMContentLoaded', function() {
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');
  link1.addEventListener('input', function() {
    document.getElementById('num1').innerHTML = 'Season ' + link1.value;
    document.getElementById('num3').innerHTML = titles[(parseInt(link1.value) - 1) * 10 + parseInt(link2.value) - 1];
    console.log('link1');
    chrome.storage.sync.set({'season': link1.value}, function() {
      console.log('Setting for season updated');
    });
    update();
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');
  link2.addEventListener('input', function() {
    document.getElementById('num2').innerHTML = 'Episode ' + link2.value;
    document.getElementById('num3').innerHTML = titles[(parseInt(link1.value) - 1) * 10 + parseInt(link2.value) - 1];
    console.log('link2');
    chrome.storage.sync.set({'episode': link2.value}, function() {
      console.log('Setting for episode updated');
    });
    update();
  });
});
/*
function showValue(vol) {
  document.getElementById('num').innerHTML = vol;
  //document.getElementById('range').innerHTML = x;
}

var e = document.getElementById('slider');
e.onchange = showValue(e.value);
/*
document.addEventListener('DOMContentLoaded', function (newValue) {
  showValue(newValue);
});*/