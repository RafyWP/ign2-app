# Rotina para Alteração de Textos

Quando o usuário pedir alteração de texto no formato: "Altere o texto [texto_atual] da página [página] para [novo_texto]" (em português), siga estes passos:

1. **Identificar a chave de tradução:**
   - Procure o [texto_atual] em português nas traduções (pt) para encontrar a chave (ex.: 'home.welcome').
   - Confirme a página (ex.: home, signup).

2. **Atualizar tradução em português:**
   - Substitua o texto antigo pelo [novo_texto] na entrada 'pt' do objeto translations.

3. **Traduzir para todos os idiomas existentes:**
   - Use IA para traduzir o [novo_texto] para cada idioma: en, es, fr, it, ru.
   - Atualize as entradas correspondentes no objeto translations.

4. **Verificar e commit:**
   - Execute lint e typecheck.
   - Commit as mudanças com mensagem descritiva.

Exemplo: Para "Altere o texto 'Bem-vindo ao App IGN2' da página home para 'Olá, bem-vindo ao IGN2 App'":
- Chave: 'home.welcome'
- pt: 'Olá, bem-vindo ao IGN2 App'
- en: 'Hello, welcome to IGN2 App'
- es: 'Hola, bienvenido a IGN2 App'
- fr: 'Salut, bienvenue sur IGN2 App'
- it: 'Ciao, benvenuto su IGN2 App'
- ru: 'Привет, добро пожаловать в IGN2 App'

Esta rotina garante traduções consistentes em todos os idiomas.