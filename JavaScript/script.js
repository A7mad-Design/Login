function validate() 
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
var Else=document.getElementById("Wrong")
if(username=="admin"&& password=="user12345" ||
username=="admin"&& password=="admin12345"  ||
username=="admin"&& password=="user123456"  ||
username=="admin"&& password=="user54321"  ||
username=="admin"&& password=="user99999")
{
    window.location.href="https://a7mad-design.github.io/A7medCourses_Official/"
    return false;
}
else
{
    Else.innerHTML="Wrong Email Or Password"
    event.preventDefault
}




}