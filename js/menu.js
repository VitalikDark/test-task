var menuIcon=document.querySelector('.menu-icon');
var menuList=document.querySelector('.menu-items');
var close=document.querySelector('.menu-close');


menuIcon.addEventListener('click', function () {
	console.log('item')
	menuList.style.display= 'flex'
	close.style.display= 'flex'
	menuIcon.style.display= 'none'

})

close.addEventListener('click', function() {
	menuList.style.display= 'none'
	close.style.display= 'none'
	
	menuIcon.style.display= 'flex'
})