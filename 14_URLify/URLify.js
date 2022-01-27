function URLify(blogTitle) {
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
  const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
  return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(URLify("How I Got Into Programming!!!"));
