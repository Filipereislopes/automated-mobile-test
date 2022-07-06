package stepsDefinitions;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import static utils.Utils.*;

public class Hooks {


	
	@Before
	public void iniciarTesteCalculadora() throws Exception {
		acessarBasicNote();
	}
	
	
	@After
	public void finalizarTeste(Scenario scenario) {
		capturarScreenshot(scenario);
		driver.quit();
	}
}
