package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaCategoriaPage;
import pageObjects.TelaInicialPage;
import pageObjects.TelaListaPage;

public class ListaStep {

	TelaInicialPage telaInicialPage = new TelaInicialPage(driver);
	TelaListaPage telaListaPage = new TelaListaPage(driver);
	TelaCategoriaPage telaCategoriaPage = new TelaCategoriaPage(driver);
	
	@Quando("eu acionar o botao add")
	public void euAcionarOBotaoAdd() {
		telaInicialPage.clicarBotaoAdd();
	}

	@Quando("eu acionar na opcao lista de verificacao")
	public void euAcionarNaOpcaoListaDeVerificacao() {
		telaInicialPage.clicarAddLista();
	}

	@Quando("eu digitar no titulo {string}")
	public void euDigitarNoTitulo(String titulo) {
		telaInicialPage.digitarTituloLista(titulo);
	}

	@Quando("eu acionar o botao guardar")
	public void euAcionarOBotaoGuardarLista() {
		telaInicialPage.clicarBotaoGuardar();
	}

	@Quando("eu acionar o botao addTarefas")
	public void euAcionarOBotaoAddTarefas() {
		telaListaPage.clicarAddTarefa();
	}

	@Quando("eu digitar no nome da tarefa {string}")
	public void euDigitarNoNomeDaTarefa(String tarefa) {
		telaListaPage.digitarTarefa(tarefa);
	}

	@Quando("eu acionar o botao adicionar tarefa")
	public void euAcionarOBotaoAdicionarTarefa() {
		telaListaPage.clicarBotaoAdicionarTarefa();
	}

	@Entao("criada com titulo \"([^\"]*)\"")
	public void aListaComTarefasECriadaComTitulo(String titulo) {
		assertEquals(titulo, telaListaPage.obterTextoDoTitulo());
	}
	
	@Quando("eu criar lista")
	public void euCriarLista() {
	  telaListaPage.criarLista("teste", "testando");
	}

	@Quando("eu clicar na tarefa")
	public void euClicarNaTarefa() {
		telaListaPage.clicarTarefa();
	}

	@Entao("checked e marcado")
	public void checkedEMarcado() {
		assertEquals("false", telaListaPage.statusTarefa());
	}
	
	@Quando("eu acionar o botao guia")
	public void euAcionarOBotaoGuia() {
	    telaListaPage.clicarGuia();
	}

	@Entao("eu entro na aba guia")
	public void euEntroNaAbaGuia() {
		assertEquals("Guide", telaListaPage.obterTextoGuia());
	}
	
	@Quando("eu criar categoria")
	public void euCriarCategoria() {
		telaCategoriaPage.criarCategoria("teste");
	}

	@Quando("acionar o botao minimizar")
	public void acionarOBotaoMinimizar() {
		telaCategoriaPage.clicarBotaoFechar();
	}

	@Quando("eu acionar o campo categoria")
	public void euAcionarOCampoCategoria() {
		telaListaPage.clicarTextoCategoria();
	}

	@Quando("eu selecionar a categoria")
	public void euSelecionarACategoria() {
		telaCategoriaPage.clicarTextoCategoria();
	}

	@Entao("uma categoria e adicionada na lista")
	public void umaCategoriaEAdicionadaNaLista() {
		assertEquals("teste", telaListaPage.obterTextoCategoria()); 
	}
	
	@Quando("eu acionar o botao segurancao")
	public void euAcionarOBotaoSegurancaoLista() {
		telaListaPage.clicarBotaoPassword();
	}

	@Quando("eu dicitar a senha {string}")
	public void euDicitarASenhaLista(String senha) {
		telaListaPage.digitarPassword(senha);
	}

	@Quando("eu acionar o continuar")
	public void euAcionarOContinuar() {
		telaListaPage.clicarBotaoContinuar();
	}

	@Quando("^acionar titulo criado$")
	public void acionarTituloCriado() {
		telaListaPage.clicarTextoTitulo();
	}

	@Entao("senha e adicionada")
	public void senhaEAdicionadaNaLista() {
		assertTrue(driver.findElement(By.id("notizen.basic.notes.notas.note.notepad:id/editPassword")).isDisplayed());
	}

	@Quando("eu acionar o botao excluir")
	public void euAcionarOBotaoExcluirLista() {
	    telaListaPage.clicarBotaoDeletar();
	}

	@Entao("e deletado")
	public void eEliminado() {
		assertTrue(driver.findElement(By.id("notizen.basic.notes.notas.note.notepad:id/recyclerView")).isDisplayed());
	}
	
	@Quando("eu acionar o botao editar")
	public void euAcionarOBotaoEditar() {
	    telaListaPage.clicarEditar();
	}

	@Quando("eu digitar novo titulo para {string}")
	public void euDigitarNovoTituloPara(String texto) {
	    telaListaPage.digitarTarefa(texto);
	}

	@Entao("editada com titulo {string}")
	public void editadaComTitulo(String titulo) {
		assertEquals(titulo, telaListaPage.obterTextoDoTitulo());
	}
	
	@Quando("eu arrastar para lado ultima tarefa")
	public void euScrollParaLado() throws Throwable {
		telaListaPage.arrastarTarefa();
	}

	@Entao("tarefa vai sumir")
	public void tarefaVaiParaNovaPosicao() {
	    assertTrue(driver.findElement(By.id("notizen.basic.notes.notas.note.notepad:id/recyclerView")).isDisplayed());
	}

	

	
}
