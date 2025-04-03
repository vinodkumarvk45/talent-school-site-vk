function navigatePages(secId){
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById(secId).style.display='block';
}