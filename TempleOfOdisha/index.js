function buttonLast()
{
    let name = document.getElementById("usr").value ;
    let experience = document.getElementsByClassName("form-control").value ;
    if(name == "")
    {
        alert("Please enter your name .") ;
    }
    else(experience == "")
    {
        alert("Please enter your experience .") ;
    }
}