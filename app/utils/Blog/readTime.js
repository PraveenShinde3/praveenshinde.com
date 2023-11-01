export default function getReadTime(content, wordsPerMinute = 200) {
  // Calculate the number of words in the content
  const wordCount = content.split(/\s+/).length;

  // Calculate the estimated read time in minutes
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  return readTimeMinutes;
}
