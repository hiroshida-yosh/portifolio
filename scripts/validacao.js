$(function() {
    $(document).ready(function() {
        $("form").on("submit", function(e) {
          var name = $("input[name='name']").val();
          var nameRegex = /^[a-zA-Z\s]*$/;

          let minLength = 3;
          let maxLength = 40; 
            if (name.length < minLength) {
            AlertaForm(`O nome deve ter mais que ${minLength} caracteres! <i class="fa-solid fa-triangle-exclamation">`);
            e.preventDefault();
            $("input[name='name']").val('')
        }else if(name.length > maxLength) {
            AlertaForm(`O nome deve ter menos que ${maxLength} caracteres! <i class="fa-solid fa-triangle-exclamation">`);
            e.preventDefault();
        }else if (!nameRegex.test(name)) {
            AlertaForm(`O nome só pode conter letras e espaços! <i class="fa-solid fa-triangle-exclamation">`);
          }else {
            enviadoForm(`Formulario enviado com sucesso <i class="fa-duotone fa-check"></i>`)
          }
        });
      });
      
      $(document).ready(function() {
        $("form").on("submit", function(e) {
          var email = $("input[name='email']").val();
          var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
          if (!emailRegex.test(email)) {
            AlertaForm(`O endereço de email é invalido! <i class="fa-solid fa-triangle-exclamation">`);
            e.preventDefault();
          }else{
            enviadoForm(`Formulario enviado com sucesso <i class="fa-duotone fa-check"></i>`)
          }
        });
      });

      function AlertaForm(aviso) {
        $('.alert-form').html(`<p>${aviso}</p>`)
        $('.alert-form').css('display','block')
        setTimeout(function() {
            $('.alert-form').css('display','none')
          }, 4000);
      }

      function enviadoForm(aviso) {
        $('.alert-form').html(`<p>${aviso}</p>`)
        $('.alert-form').css({'display':'block','color':'green'})
        setTimeout(function() {
            $('.alert-form').css('display','none')
          }, 4000);
      }
})