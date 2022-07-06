	#language: pt
	#encoding: UTF-8

Funcionalidade: Basic Note

@cenario1
Cenario: Criar uma lista com tarefas
	Quando eu acionar o botao add
	E eu acionar na opcao lista de verificacao
	E eu digitar no titulo "Limpar casa"
	E eu acionar o botao guardar 
	E eu acionar o botao addTarefas
	E eu digitar no nome da tarefa "Limpar quarto"
	E eu acionar o botao adicionar tarefa
	E eu acionar o botao addTarefas
	E eu digitar no nome da tarefa "Limpar cozinha"
	E eu acionar o botao adicionar tarefa
	E eu acionar o botao addTarefas
	E eu digitar no nome da tarefa "Limpar banheiro"
	E eu acionar o botao adicionar tarefa
	Entao criada com titulo "Limpar casa"
	
@cenario2
Cenario: Criar uma nota
	Quando eu acionar o botao add
	E eu acionar na opcao nota
	E eu digitar no titulo nota "Test Mobile"
	E eu digitar no compo da nota "hello word!"
	E eu acionar o botao guardar
	Entao criada com titulo "Test Mobile"

@cenario3
Cenario: Criar uma categoria
	Quando eu acionar o menu
	E eu acionar o botao addCategoria
	E eu digitar no nome da categoria "organizacao"
	E eu acionar o botao guardar
	Entao a categoria e criada com nome "organizacao"

@cenario4
Cenario: marcar checked das tarefas
	Quando eu criar lista
	E eu clicar na tarefa 
	Entao checked e marcado

@cenario5
Cenario: verificar guia de instrucoes
	Quando eu criar lista
	E eu acionar o botao guia
	Entao eu entro na aba guia 
	
@cenario6
Cenario: adicionar uma categoria na lista
	Quando eu criar categoria
	E acionar o botao minimizar
	E eu criar lista
	E eu acionar o campo categoria
	E eu selecionar a categoria
	Entao uma categoria e adicionada na lista
	
@cenario7
Cenario: adicionar senha na lista
	Quando eu criar lista
	E eu acionar o botao segurancao
	E eu dicitar a senha "1234"
	E eu acionar o continuar
	E eu dicitar a senha "1234"
	E eu acionar o continuar
	E acionar o botao minimizar
	E acionar titulo criado
	Entao  senha e adicionada
	
@cenario8
Cenario: adicionar senha na nota
	Quando eu criar nota
	E acionar titulo criado
	E eu acionar o botao segurancao
	E eu dicitar a senha "1234"
	E eu acionar o continuar
	E eu dicitar a senha "1234"
	E eu acionar o continuar
	E acionar o botao minimizar
	E acionar titulo criado
	Entao  senha e adicionada	
	
@cenario9
Cenario: excluir lista
	Quando eu criar lista
	E eu acionar o botao excluir 
	E eu acionar o botao excluir
	Entao e deletado
	
@cenario10
Cenario: excluir nota
	Quando eu criar nota
	E acionar titulo criado
	E eu acionar o botao excluir
	E eu acionar o botao excluir
	Entao e deletado
	
@cenario11
Cenario: excluir categoria
	Quando eu criar categoria
	E eu clicar longo na categoria
	E eu acionar o botao excluir 
	Entao a categoria e excluida	
	
@cenario12
Cenario: editar lista
	Quando eu criar lista
	E eu acionar o botao editar
	E eu digitar novo titulo para "Novo test"
	E eu acionar o botao editar
	Entao editada com titulo "Novo test"
	
@cenario13
Cenario: editar nota
	Quando eu criar nota
	E acionar titulo criado
	E eu acionar o botao editar
	E eu limpo titulo
	E eu digitar no titulo nota "Novo Test"
	E eu limpo nota
	E eu digitar no compo da nota "Editar Test"
	E eu acionar o botao editar
	Entao editada com titulo "Novo Test"
	
@cenario14
Cenario: editar categoria
	Quando eu criar categoria
	E eu clicar longo na categoria
	E eu acionar o botao editar nota
	E eu digitar novo titulo para categoria "Limpar"
	E eu acionar o botao editar
	Entao editada nova Categoria "Limpar"	
	
@cenario15
Cenario: sumir com tarefa
	Quando eu criar lista
	E eu arrastar para lado ultima tarefa
	Entao tarefa vai sumir
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	