package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaCategoriaPage;
import pageObjects.TelaInicialPage;
import pageObjects.TelaListaPage;

public class CategoriaStep {

	TelaInicialPage telaInicialPage = new TelaInicialPage(driver);
	TelaCategoriaPage telaCategoriaPage = new TelaCategoriaPage(driver);
	TelaListaPage telaListaPage = new TelaListaPage(driver);

	@Quando("eu acionar o menu")
	public void euAcionarOMenu() {
		telaInicialPage.clicarCategoria();
	}

	@Quando("eu acionar o botao addCategoria")
	public void euAcionarOBotaoAddCategoria() {
		telaCategoriaPage.clicarAddCategoria();
	}

	@Quando("eu digitar no nome da categoria {string}")
	public void euDigitarNoNomeDaCategoria(String nome) {
		telaCategoriaPage.digitarCategoria(nome);
	}

	@Entao("^a categoria e criada com nome \"([^\"]*)\"$")
	public void aCategoriaECriadaComNome(String nome) {
		assertEquals(nome, telaCategoriaPage.obterNomeCategoria());
	}
	
	@Quando("eu clicar longo na categoria")
	public void euClicarLongoNaCategoria() {
	    telaCategoriaPage.cliqueLongoCategoria();
	}

	@Entao("a categoria e excluida")
	public void aCategoriaEExcluida() {
	    assertTrue(driver.findElement(By.id("notizen.basic.notes.notas.note.notepad:id/txtCategory")).isDisplayed());
	}
	
	@Quando("eu acionar o botao editar nota")
	public void euAcionarOBotaoEditarNota() {
	    telaCategoriaPage.clicarEditorCategoria();
	}

	@Quando("eu digitar novo titulo para categoria {string}")
	public void euDigitarNovoTituloParaCategoria(String titulo) {
	     telaListaPage.digitarTarefa(titulo);
	}

	@Entao("^editada nova Categoria \"([^\"]*)\"$")
	public void editadaNovaCategoria(String titulo) throws Throwable {
		assertEquals(titulo, telaCategoriaPage.obterNomeCategoria());
	}
}
