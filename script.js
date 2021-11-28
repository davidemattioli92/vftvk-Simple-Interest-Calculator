function compute()
{
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let n = document.getElementById("years").value;
    let calc =  p * r * n / 100;
    document.getElementById('calc').innerHTML="Result is: " + calc ;
}
        
