function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    n = document.getElementById("years").value;
    document.getElementById("result").innerHTML = p * r * n / 100;
}
        
