var senha;

function bsenha()
{
    senha = document.getElementById("tsenha").value;
    if(senha == "bondia")
    {
        alert("https://www.youtube.com/channel/UCK0MUByfOTZBLErrDBjy1Gw");
        senha = "";
    }
    else if(senha == "varolant'-'")
    {
        alert("https://ninechu.github.io/butao/");
        senha = "";
    }
    else if(senha == "senha")
    {
        alert("C acha que eu sou burro ?");
        senha = "";
    }
    else
    {
        alert("Senha incorreta !");
        senha = "";
    }
}
window.onload = function()
{
document.getElementById("tsenha").addEventListener("keyup", function(event)
{
    if(event.keyCode === 13)
    {
        event.preventDefault;
        bsenha();
    }
});
}
