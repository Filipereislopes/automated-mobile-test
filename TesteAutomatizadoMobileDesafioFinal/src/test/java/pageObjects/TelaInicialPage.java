package pageObjects;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaInicialPage {

	public TelaInicialPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAddNote")
	private MobileElement botaoAdd;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/txtNote")
	private MobileElement addNota;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/txtChecklist")
	private MobileElement addLista;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnCategory")
	private MobileElement addCategoria;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/editText")
	private MobileElement addListaTitulo;
	@AndroidFindBy(id = "notizen.basic.notes.notas.note.notepad:id/btnAdd")
	private MobileElement botaoGuardar;
	
	
	public void clicarBotaoAdd() {
		botaoAdd.click();
	}
	public void clicarAddNota() {
		addNota.click();
	}
	public void clicarAddLista() {
		addLista.click();
	}
	public void clicarCategoria() {
		addCategoria.click();
	}
	public void digitarTituloLista(String titulo) {
		addListaTitulo.sendKeys(titulo);
	}
	public void clicarBotaoGuardar() {
		botaoGuardar.click();
	}
}
