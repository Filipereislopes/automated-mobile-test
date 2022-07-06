package stepsDefinitions;

import static utils.Utils.driver;

import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;
import pageObjects.TelaNotaPage;

public class NotaStep {

	TelaInicialPage telaInicialPage = new TelaInicialPage(driver);
	TelaNotaPage telaNotaPage = new TelaNotaPage(driver);

	@Quando("eu acionar na opcao nota")
	public void euAcionarNaOpcaoNota() {
		telaInicialPage.clicarAddNota();
	}

	@Quando("eu digitar no titulo nota \"([^\"]*)\"")
	public void euDigitarNoTituloNota(String titulo)  {
		telaNotaPage.digitarTituloNota(titulo);
	}
	
	@Quando("eu digitar no compo da nota {string}")
	public void euDigitarNoCompoDaNota(String texto) {
		telaNotaPage.digitarNota(texto);
	}

	@Quando("eu criar nota")
	public void euCriarNota() {
		telaNotaPage.criarNota("Teste", "Testando");
	}

	@Quando("eu limpo titulo")
	public void euLimpoTitulo() {
		telaNotaPage.LimparTituloNota();
	}

	@Quando("eu limpo nota")
	public void euLimpoNota() {
		telaNotaPage.LimparNota();
	}	
}
