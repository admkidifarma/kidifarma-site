# kidifarma.com.br

Site público da Kidi Farma. Conta: admkidifarma@gmail.com (GitHub, Vercel, Supabase).

- /links : página do link da bio do Instagram (links.html). Este endereço não muda nunca.
- /encarte : encarte interativo (encarte.html). A pessoa monta o pedido de perfumaria, manda pelo WhatsApp e retira na loja. Por enquanto só perfumaria. A lista de remédios isentos (sem carrinho) liga com mostrarFarmacia: true, depois que o farmacêutico conferir. Remédio de receita nunca aparece.
- / : por enquanto redireciona para /links. Quando o site de vendas ficar pronto, apague o redirect do vercel.json.

Para preencher WhatsApp, grupo, encarte, horário etc., edite o bloco CONFIG no fim do links.html.

Para trocar o encarte do mês, edite só o encarte-dados.js (id, mês, validade e produtos). O campo tipo de cada remédio é confirmado pelo farmacêutico.
