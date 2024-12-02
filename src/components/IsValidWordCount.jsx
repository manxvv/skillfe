export default function IsValidWordCount(text, length) {
  console.log("amarnathprajapatiasfasjklfasdf");
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;
  if (wordCount < length) {
    return false;
  } else {
    return true;
  }
};