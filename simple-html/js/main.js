
const linkExterno =
          document.querySelector('a[title="Google Maps"]');
//linkExterno.onclick = () => {
    //alert("você será redirecionado para um link externo.");
//};

linkExterno.addEventListener('click', ()=> {
    alert("você será redirecionado para um link externo");
});