import Acesso from "../page/acesso/acesso.page";
import formularioentervehicledata from "../page/preenchimento/formularioentervehicledata.page";

Given("que eu acesse o sistema Tricentis", () => {
  Acesso.visitarSite();
 
});

When("inicio o preenchimento de formulário para seguro", () => {
  formularioentervehicledata.ClickPickMake();

});