const htmlDecode = (input) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

const videoDecode = (video) => {
  let { title, description, channelTitle } = video.snippet;

  let decodedItems = [title, description, channelTitle];

  // Decodes &amp; etc to readable strings
  // Karena ini destructuring, maka pada left hand side si decodedItems harus di spread. Gabisa cuman decodedItems = [Arr];
  [...decodedItems] = decodedItems.map((text) => {
    text = htmlDecode(text);
    text.replace("&amp;", "&");
    return text;
  });

  // Change the non-decoded text to the decoded one.
  decodedItems.forEach((item) => (video.snippet.item = item));
  // video.snippet.title = title;
  // video.snippet.description = description;
  // video.snippet.channelTitle = channelTitle;

  return video;
};

export default videoDecode;
