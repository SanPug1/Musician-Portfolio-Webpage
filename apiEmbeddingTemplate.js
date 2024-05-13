
// YouTUbe API Key
const API_KEY = 'INSERT YOUR GOOGLE DEVELOPER YOUTUBE API KEY HERE';

// Youtube Channel ID
const CHANNEL_ID = 'INSERT YOUR YOUTUBE CHANNEL ID HERE';

// Code to retrieve most recent video from the channel
fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`)
    .then(response=> response.json())
    .then(data => {
        const videoId = data.items[0].id.videoId;
        const iframe = document.createElement('iframe');
        iframe.width = '854';
        iframe.height = '480';
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.frameborder = '0';
        iframe.allow = 'autoplay; encrypted-media';
        document.getElementById('embedded').appendChild(iframe);
    })
    .catch(error => console.error('Error fetching Youtube data:', error));
