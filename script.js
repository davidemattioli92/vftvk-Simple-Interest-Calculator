function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    n = document.getElementById("years").value;
    let r_adj = r/100
    let result = p*r_adj*n;
}
        
