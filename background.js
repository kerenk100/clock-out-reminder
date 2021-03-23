chrome.alarms.onAlarm.addListener( function () {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
    title: 'Stop Working',
    message: 'It is time to stop working and have some fun',
    iconUrl: 'need_sleep.png',
    requireInteraction: true,
    type: 'basic'
  })
});
