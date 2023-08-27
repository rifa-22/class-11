document.getElementById('btn').addEventListener('mouseenter', function(){
    document.getElementById('sidebar').style.marginLeft = 0;
})

document.getElementById('btn').addEventListener('mouseleave', function(){
    document.getElementById('sidebar').style.marginLeft = '-300px';
})