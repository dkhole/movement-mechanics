function initMap() {
  //location of place
  const movementMech = { lat: -33.810226, lng: 151.043765 };

  //The map centered around location
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: movementMech,
  });

  //The marker positioned at place
  const marker = new google.maps.Marker({
    position: movementMech,
    map: map,
  });
}

//add event to each link
const links = document.querySelectorAll('.link');

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.className = 'temp-link';
    const allLinks = document.querySelectorAll('.link');
    allLinks.forEach((ink) => {
      ink.style.color = 'grey';
    });
  });
  link.addEventListener('mouseout', () => {
    const allLinks = document.querySelectorAll('.link');
    allLinks.forEach((ink) => {
      ink.style.color = 'black';
    });
    link.className = 'link';
  });
});

console.log('made it?');
