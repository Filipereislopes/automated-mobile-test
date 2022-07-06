package pageObjects;

import static utils.Utils.driver;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaNotaPage {

	public TelaNotaPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	TelaInicialPage telaInicialPage = new TelaInicialPage(driver);
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editTitle")
	private MobileElement tituloNota;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editContent")
	private MobileElement corpoNota;
	
	
	public void digitarTituloNota(String titulo) {
		tituloNota.sendKeys(titulo);
	}
	public void digitarNota(String texto) {
		corpoNota.sendKeys(texto);
	}
	public void LimparTituloNota() {
		corpoNota.clear();
	}
	public void LimparNota() {
		corpoNota.clear();
	}
	
	public void criarNota(String titulo, String texto) {
		telaInicialPage.clicarBotaoAdd();
		telaInicialPage.clicarAddNota();
		digitarTituloNota(titulo);
		digitarNota(texto);
		telaInicialPage.clicarBotaoGuardar();
	}
}