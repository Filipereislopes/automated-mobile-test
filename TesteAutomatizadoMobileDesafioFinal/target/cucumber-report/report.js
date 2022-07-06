$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/BasicNote.feature");
formatter.feature({
  "name": "Basic Note",
  "description": "",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Criar uma lista com tarefas",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao add",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar na opcao lista de verificacao",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarNaOpcaoListaDeVerificacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no titulo \"Limpar casa\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDigitarNoTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao guardar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoGuardarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao addTarefas",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoAddTarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no nome da tarefa \"Limpar quarto\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDigitarNoNomeDaTarefa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao adicionar tarefa",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoAdicionarTarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao addTarefas",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoAddTarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no nome da tarefa \"Limpar cozinha\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDigitarNoNomeDaTarefa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao adicionar tarefa",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoAdicionarTarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao addTarefas",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoAddTarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no nome da tarefa \"Limpar banheiro\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDigitarNoNomeDaTarefa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao adicionar tarefa",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoAdicionarTarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criada com titulo \"Limpar casa\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.aListaComTarefasECriadaComTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criar uma nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao add",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar na opcao nota",
  "keyword": "E "
});
formatter.match({
  "location": "NotaStep.euAcionarNaOpcaoNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no titulo nota \"Test Mobile\"",
  "keyword": "E "
});
formatter.match({
  "location": "NotaStep.euDigitarNoTituloNota(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no compo da nota \"hello word!\"",
  "keyword": "E "
});
formatter.match({
  "location": "NotaStep.euDigitarNoCompoDaNota(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao guardar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoGuardarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criada com titulo \"Test Mobile\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.aListaComTarefasECriadaComTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criar uma categoria",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o menu",
  "keyword": "Quando "
});
formatter.match({
  "location": "CategoriaStep.euAcionarOMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao addCategoria",
  "keyword": "E "
});
formatter.match({
  "location": "CategoriaStep.euAcionarOBotaoAddCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no nome da categoria \"organizacao\"",
  "keyword": "E "
});
formatter.match({
  "location": "CategoriaStep.euDigitarNoNomeDaCategoria(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao guardar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoGuardarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a categoria e criada com nome \"organizacao\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CategoriaStep.aCategoriaECriadaComNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "marcar checked das tarefas",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar lista",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar na tarefa",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euClicarNaTarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checked e marcado",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.checkedEMarcado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "verificar guia de instrucoes",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar lista",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao guia",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoGuia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu entro na aba guia",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.euEntroNaAbaGuia()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "adicionar uma categoria na lista",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar categoria",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao minimizar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.acionarOBotaoMinimizar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu criar lista",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euCriarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o campo categoria",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOCampoCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar a categoria",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euSelecionarACategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "uma categoria e adicionada na lista",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.umaCategoriaEAdicionadaNaLista()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "adicionar senha na lista",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario7"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar lista",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao segurancao",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoSegurancaoLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu dicitar a senha \"1234\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDicitarASenhaLista(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o continuar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu dicitar a senha \"1234\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDicitarASenhaLista(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o continuar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao minimizar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.acionarOBotaoMinimizar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar titulo criado",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.acionarTituloCriado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "senha e adicionada",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.senhaEAdicionadaNaLista()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "adicionar senha na nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario8"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "NotaStep.euCriarNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar titulo criado",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.acionarTituloCriado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao segurancao",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoSegurancaoLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu dicitar a senha \"1234\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDicitarASenhaLista(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o continuar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu dicitar a senha \"1234\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDicitarASenhaLista(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o continuar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOContinuar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao minimizar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.acionarOBotaoMinimizar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar titulo criado",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.acionarTituloCriado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "senha e adicionada",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.senhaEAdicionadaNaLista()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "excluir lista",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario9"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar lista",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao excluir",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoExcluirLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao excluir",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoExcluirLista()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element \u0027By.id: notizen.basic.notes.notas.note.notepad:id/btnDelete\u0027 does not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PC-GAMERM31\u0027, ip: \u0027192.168.101.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: io.appium.java_client.AppiumDriver\nCapabilities {appActivity: notizen.basic.notes.notas.n..., appPackage: notizen.basic.notes.notas.n..., automationName: uiautomator2, databaseEnabled: false, desired: {appActivity: notizen.basic.notes.notas.n..., appPackage: notizen.basic.notes.notas.n..., automationName: uiautomator2, deviceName: Sm-N9600, platformName: android}, deviceApiLevel: 29, deviceManufacturer: samsung, deviceModel: SM-N9600, deviceName: 28b9a7d9b93f7ece, deviceScreenDensity: 420, deviceScreenSize: 1080x2220, deviceUDID: 28b9a7d9b93f7ece, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 10, statBarHeight: 63, takesScreenshot: true, viewportRect: {height: 2118, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 8c9a8714-0c50-4c75-b176-9c8cdff1c926\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.appium.java_client.pagefactory.ElementInterceptor.getObject(ElementInterceptor.java:40)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:60)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.click(\u003cgenerated\u003e)\r\n\tat pageObjects.TelaListaPage.clicarBotaoDeletar(TelaListaPage.java:61)\r\n\tat stepsDefinitions.ListaStep.euAcionarOBotaoExcluirLista(ListaStep.java:138)\r\n\tat ✽.eu acionar o botao excluir(file:src/test/resources/features/BasicNote.feature:90)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "e deletado",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.eEliminado()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "excluir nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario10"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "NotaStep.euCriarNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar titulo criado",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.acionarTituloCriado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao excluir",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoExcluirLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao excluir",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoExcluirLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e deletado",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.eEliminado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "excluir categoria",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario11"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar categoria",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar longo na categoria",
  "keyword": "E "
});
formatter.match({
  "location": "CategoriaStep.euClicarLongoNaCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao excluir",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoExcluirLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a categoria e excluida",
  "keyword": "Entao "
});
formatter.match({
  "location": "CategoriaStep.aCategoriaEExcluida()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "editar lista",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario12"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar lista",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao editar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoEditar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar novo titulo para \"Novo test\"",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euDigitarNovoTituloPara(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao editar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoEditar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "editada com titulo \"Novo test\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.editadaComTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "editar nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario13"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "NotaStep.euCriarNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar titulo criado",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.acionarTituloCriado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao editar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoEditar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu limpo titulo",
  "keyword": "E "
});
formatter.match({
  "location": "NotaStep.euLimpoTitulo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no titulo nota \"Novo Test\"",
  "keyword": "E "
});
formatter.match({
  "location": "NotaStep.euDigitarNoTituloNota(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu limpo nota",
  "keyword": "E "
});
formatter.match({
  "location": "NotaStep.euLimpoNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no compo da nota \"Editar Test\"",
  "keyword": "E "
});
formatter.match({
  "location": "NotaStep.euDigitarNoCompoDaNota(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao editar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoEditar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "editada com titulo \"Novo Test\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.editadaComTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "editar categoria",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario14"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar categoria",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar longo na categoria",
  "keyword": "E "
});
formatter.match({
  "location": "CategoriaStep.euClicarLongoNaCategoria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao editar nota",
  "keyword": "E "
});
formatter.match({
  "location": "CategoriaStep.euAcionarOBotaoEditarNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar novo titulo para categoria \"Limpar\"",
  "keyword": "E "
});
formatter.match({
  "location": "CategoriaStep.euDigitarNovoTituloParaCategoria(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao editar",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euAcionarOBotaoEditar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "editada nova Categoria \"Limpar\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CategoriaStep.editadaNovaCategoria(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "sumir com tarefa",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cenario15"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu criar lista",
  "keyword": "Quando "
});
formatter.match({
  "location": "ListaStep.euCriarLista()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu arrastar para lado ultima tarefa",
  "keyword": "E "
});
formatter.match({
  "location": "ListaStep.euScrollParaLado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tarefa vai sumir",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaStep.tarefaVaiParaNovaPosicao()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", null);
formatter.after({
  "status": "passed"
});
});