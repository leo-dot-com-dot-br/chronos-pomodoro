# Chronos Pomodoro

Aplicativo de Pomodoro para organizar o tempo de foco e descanso, com histórico de tarefas, configurações personalizáveis e tema claro/escuro.

🔗 **Demo:** https://chronos-pomodoro-portfolio.vercel.app/

> Projeto desenvolvido durante o curso de React JS 19 e Next.js 15.

## Funcionalidades

- Ciclos automáticos de foco, pausa curta e pausa longa, com indicador visual do ciclo atual
- Iniciar, interromper e concluir tarefas
- Histórico de tarefas com status e ordenação
- Duração dos ciclos configurável
- Tempo restante exibido no título da aba do navegador
- Alerta sonoro ao fim de cada ciclo
- Tema claro e escuro, lembrado entre sessões
- Estado da aplicação salvo no localStorage
- Notificações (toast) e diálogo de confirmação
- Página explicando a técnica Pomodoro

## Tecnologias

React 18 · TypeScript · Vite · React Router 7 · react-toastify · date-fns · lucide-react · CSS Modules · ESLint

Deploy na Vercel.

## Decisões técnicas

**Timer em Web Worker:** o contador roda em um Web Worker para não depender da thread principal, que o navegador desacelera em abas inativas. Em vez de subtrair 1 a cada segundo, o worker calcula o tempo restante a partir da hora de término, então o valor continua correto mesmo se um tick atrasar.

**Estado com Context API e useReducer:** o estado reúne campos que mudam juntos (tarefa ativa, ciclo, tempo restante, histórico e configurações). Um reducer concentra todas as transições em um só lugar, cada uma com um nome claro (`START_TASK`, `COMPLETE_TASK`...), o que evita inconsistências entre campos. O Context disponibiliza esse estado para qualquer componente sem repassar props.

**Adapter para notificações:** os componentes usam `showMessage.success(...)` em vez de chamar o `react-toastify` diretamente. Só o arquivo do adapter conhece a biblioteca, então trocá-la (ou mudar o diálogo de confirmação) exige alterar um único arquivo.

**Tema com variáveis CSS:** os componentes usam variáveis como `var(--gray-900)`, e o atributo `data-theme` no `<html>` redefine seus valores. Assim, nenhum componente precisa saber qual tema está ativo, e a escolha do usuário fica salva no localStorage.

**Rotas em SPA na Vercel:** como o React Router resolve as rotas no navegador, o `vercel.json` redireciona qualquer caminho para o `index.html`. Sem isso, atualizar a página em `/history` ou `/settings` resultava em 404.

## Como rodar

```bash
git clone [url do repositório]
cd chronos-pomodoro
npm install
npm run dev
```

## Estrutura

```
src/
├── adapters/    # isola a biblioteca de notificações
├── components/  # componentes reutilizáveis (cada um com seu CSS Module)
├── contexts/    # TaskContext: estado global com reducer
├── models/      # tipos do domínio
├── pages/       # Home, History, Settings, AboutPomodoro, NotFound
├── routers/     # rotas
├── styles/      # tema e estilos globais
├── utils/       # funções auxiliares
└── workers/     # timer em Web Worker
```
