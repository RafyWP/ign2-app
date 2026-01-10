# Rotina para Adicionar Nova Linguagem

Quando o usuário pedir para adicionar uma nova linguagem (ex.: "adicionar language italiano"), siga estes passos:

1. **Traduzir todas as strings existentes:**
   - Use IA para traduzir todas as chaves em `components/translation-provider.tsx` para a nova linguagem.
   - Adicione a nova entrada no objeto `translations` com as traduções precisas.

2. **Atualizar language-selector.tsx:**
   - Adicione nova entrada no array `languages` com código, nome, bandeira emoji e chave.

3. **Atualizar clerk-provider.tsx:**
   - Importe a nova localization do @clerk/localizations (ex.: `import { itIT } from '@clerk/localizations';`).
   - Adicione ao objeto `locs` (ex.: `itIT`).
   - Atualize o mapeamento em language-selector para `itIT`.

4. **Testar:**
   - Execute lint e typecheck.
   - Commit das mudanças.

Exemplo para italiano:
- Translations: 'home.title': 'Per iniziare, modifica il file page.tsx.'
- Languages: { code: 'it', name: 'Italiano', flag: '🇮🇹', key: 'it' }
- Clerk: import itIT, locs = { ...itIT }, key: 'itIT'

Esta rotina garante que todas as strings do projeto sejam traduzidas e o seletor atualizado automaticamente.