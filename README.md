### Regras da aplicação

[] A aplicação deve ter dois tipos de usuário, entregador e/ou admin
[] Deve ser possível realizar login com CPF e Senha
[] Deve ser possível realizar o CRUD dos entregadores
[] Deve ser possível realizar o CRUD das encomendas
[] Deve ser possível realizar o CRUD dos destinatários
[] Deve ser possível marcar uma encomenda como aguardando (Disponível para retirada)
[] Deve ser possível retirar uma encomenda
[] Deve ser possível marcar uma encomenda como entregue
[] Deve ser possível marcar uma encomenda como devolvida
[] Deve ser possível listar as encomendas com endereços de entrega próximo ao local do entregador
[] Deve ser possível alterar a senha de um usuário
[] Deve ser possível listar as entregas de um usuário
[] Deve ser possível notificar o destinatário a cada alteração no status da encomenda

### Regras de negócio

[] Somente usuário do tipo admin pode realizar operações de CRUD nas encomendas
[] Somente usuário do tipo admin pode realizar operações de CRUD dos entregadores
[] Somente usuário do tipo admin pode realizar operações de CRUD dos destinatários
[] Para marcar uma encomenda como entregue é obrigatório o envio de uma foto
[] Somente o entregador que retirou a encomenda pode marcar ela como entregue
[] Somente o admin pode alterar a senha de um usuário
[] Não deve ser possível um entregador listar as encomendas de outro entregador

## Complementar básico

User (Usuário):

id: Identificador único do usuário.
name: Nome do usuário.
email: Email do usuário.
password: Senha do usuário.
rule: Tipo de usuário (ADMIN, DELIVERY, MODERATOR)
createdAt: Data e hora em que o usuário foi criado.
updatedAt: Data e hora da última atualização do usuário.

Order (Pedido):

id: Identificador único do pedido.
deliverymanId: Identificador do entregador responsável pelo pedido.
recipientId: Identificador do destinatário do pedido.
product: Nome ou descrição do produto.
createdAt: Data e hora em que o pedido foi criado.
updatedAt: Data e hora da última atualização do pedido.
status: Estado atual do pedido (por exemplo, pendente, em trânsito, entregue).

Recipient (Destinatário):

id: Identificador único do destinatário.
name: Nome do destinatário.
address: Endereço do destinatário.
phoneNumber: Número de telefone do destinatário.

Deliveryman (Entregador):

id: Identificador único do entregador.
name: Nome do entregador.
vehicle: Veículo usado pelo entregador (por exemplo, carro, moto).
phoneNumber: Número de telefone do entregador.
