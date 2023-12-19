//Adding javascript components in it
document.getElementById('zoom-btn').addEventListener('click', function() {
    const photo = document.getElementById('photo');
     
    if (photo.style.transform === 'scale(2)') {
       photo.style.transform = '';
    } else {
       photo.style.transform = 'scale(2)';
    }
   });