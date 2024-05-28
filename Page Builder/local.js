// שמירת התוכן
localStorage.page = page.innerHTML;
// שמירת העיצוב של הדף
localStorage.css = page.attributes.style.value

// שחזור התוכן
page.innerHTML = localStorage.page;

// שחזור העיצוב
page.setAttribute('style', localStorage.css)