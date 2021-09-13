const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const active = urlParams.get('active');

const activeElement = document.getElementById(active);
if (activeElement) {
  activeElement.style.color='#0b84ff'
}
