# Rotina para Alteração de Textos

Quando o usuário pedir alteração de texto no formato: "Altere o texto [texto_atual] da página [página] para [novo_texto]" (em português), siga estes passos:

1. **Identificar a chave de tradução:**
   - Procure o [texto_atual] em português no arquivo `lib/translations/pt.json` para encontrar a chave (ex.: 'home.welcome').
   - Confirme a página (ex.: home, signup).

2. **Atualizar tradução em português:**
   - Edite `lib/translations/pt.json` e substitua o texto antigo pelo [novo_texto] para a chave identificada.

3. **Traduzir para todos os idiomas existentes:**
   - Use IA para traduzir o [novo_texto] para cada idioma: en, es, fr, it, ru.
   - Edite cada arquivo JSON em `lib/translations/` e atualize o valor da chave correspondente.

4. **Verificar e commit:**
   - Execute lint e typecheck.
   - Commit as mudanças com mensagem descritiva.

Exemplo: Para "Altere o texto 'SaaS Starter Kit para lançamento de MVP's Seguros' da página home para 'Novo Texto'":
- Chave: 'home.title'
- Edite pt.json: "home.title": "Novo Texto"
- Edite en.json: "home.title": "New Text"
- E assim por diante para todos os idiomas.

Esta rotina garante traduções consistentes em todos os idiomas usando arquivos JSON separados.