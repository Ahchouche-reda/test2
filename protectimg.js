
function protect(evt) 
{
if (navigator.appName != 'Microsoft Internet Explorer')
{
if (evt.which != 3) 
return true;
};
alert("Enregistrement désactivé.\n");
return false;
}
function trap() 
{
if(document.images)
{
if(navigator.appName != 'Microsoft Internet Explorer')
{
for(i=0;i<document.images.length;i++)
document.images[i].onmousedown = protect;
}
else
{
for(i=0;i<document.images.length;i++)
document.images[i].oncontextmenu = protect;
}
}
}