function validate() 
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if(username=="user"&& password=="user12345" ||
username=="admin"&& password=="admin12345"  ||
username=="user"&& password=="user123456"  ||
username=="user"&& password=="user54321"  ||
username=="user"&& password=="user99999")
{
    window.open("https://a7mad-design.github.io/A7medCourses_Official/")
    return false;
}
else
{
    swal ( "Oops" ,  "Wrong Email Or Password!" ,  "error" )
    event.preventDefault()
}

}
