package pageObjects;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import static utils.Utils.*;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaCategoriaPage {

	public TelaCategoriaPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	TelaInicialPage telaInicialPage = new TelaInicialPage(driver);
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAddCategory")
	private MobileElement addCategoria;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editText")
	private MobileElement nomeCategoria;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/categoryName")
	private MobileElement textoCategoria;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnClose")
	private MobileElement botaoFechar;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnEditCategoryName")
	private MobileElement botaoEdicao;
	
	public void clicarAddCategoria() {
		addCategoria.click();
	}
	public void digitarCategoria(String nome) {
		nomeCategoria.sendKeys(nome);
	}
	public void clicarEditorCategoria() {
		botaoEdicao.click();
	}
	public String obterNomeCategoria() {
		return textoCategoria.getText();
	}
	public void clicarBotaoFechar() {
		botaoFechar.click();
	}
	public void clicarTextoCategoria() {
		textoCategoria.click();
	}
	
	public void cliqueLongoCategoria() {
		Actions acao = new Actions(driver);
		acao.clickAndHold(textoCategoria).perform();
	}
	
	public void criarCategoria(String nome) {
		telaInicialPage.clicarCategoria();
		clicarAddCategoria();
		digitarCategoria(nome);
		telaInicialPage.clicarBotaoGuardar();
	}
}
