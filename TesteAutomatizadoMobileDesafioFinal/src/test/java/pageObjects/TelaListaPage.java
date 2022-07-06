package pageObjects;

import static utils.Utils.*;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaListaPage {

	public TelaListaPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	TelaInicialPage telaInicialPage = new TelaInicialPage(driver);

	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAddCheckbox")
	private MobileElement addTarefa;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editText")
	private MobileElement campoTarefa;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAdd")
	private MobileElement botaoAdicionar;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/txtTitle")
	private MobileElement tituloLista;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/layout")
	private MobileElement tarefa;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/layout")
	private MobileElement check;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnGuide")
	private MobileElement botaoguia;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/txtGuide")
	private MobileElement guia;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/txtCategory")
	private MobileElement textoCategoria;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnLock")
	private MobileElement botaopassword;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editPassword")
	private MobileElement password;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btn")
	private MobileElement botaoContinuar;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnDelete")
	private MobileElement botaoDeletar;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnEdit")
	private MobileElement botaoEditar;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/recyclerView")
	private MobileElement novaPosicao;

	public void clicarAddTarefa() {
		addTarefa.click();
	}

	public void clicarEditar() {
		botaoEditar.click();
	}

	public void clicarBotaoDeletar() {
		botaoDeletar.click();
	}

	public void digitarTarefa(String tarefa) {
		campoTarefa.sendKeys(tarefa);
	}

	public void clicarBotaoAdicionarTarefa() {
		botaoAdicionar.click();
	}

	public String obterTextoDoTitulo() {
		return tituloLista.getText();
	}

	public void clicarTarefa() {
		tarefa.click();
	}

	public String statusTarefa() {
		return check.getAttribute("checked");
	}

	public void clicarGuia() {
		botaoguia.click();
	}

	public String obterTextoGuia() {
		return guia.getText();
	}

	public void clicarTextoCategoria() {
		textoCategoria.click();
	}

	public void clicarBotaoPassword() {
		botaopassword.click();
	}

	public void digitarPassword(String senha) {
		password.sendKeys(senha);
	}

	public void clicarBotaoContinuar() {
		botaoContinuar.click();
	}

	public void clicarTextoTitulo() {
		tituloLista.click();
	}

	public void clicarLongoTarefa() {
		Actions acao = new Actions(driver);
		acao.clickAndHold(tarefa).perform();
	}
	public void arrastarTarefa() {
		swiperDireita();
	}

	public String obterTextoCategoria() {
		return textoCategoria.getText();
	}

	public void criarLista(String titulo, String tarefa) {
		telaInicialPage.clicarBotaoAdd();
		telaInicialPage.clicarAddLista();
		telaInicialPage.digitarTituloLista(titulo);
		telaInicialPage.clicarBotaoGuardar();
		for (int x = 1; x < 4; x++) {
			clicarAddTarefa();
			digitarTarefa(tarefa + " " + x);
			clicarBotaoAdicionarTarefa();
		}
	}
}
