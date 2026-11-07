# Prompts utilizados no projeto

Este arquivo reúne, em ordem, as solicitações usadas para construir a página
**Sobre mim** e seus estilos.

## 1. Estrutura inicial da página

```text
Crie a estrutura inicial de uma página 'Sobre mim' com um arquivo index.html
e um style.css (separado). No HTML, inclua o meu nome (Sóstenes Marques
Maciel), uma frase de apresentação (gere para mim algo inspirador), uma seção
'Sobre' com 2 a 3 linhas sobre a minha área de interesse (Cibersegurança),
uma lista com 3 tecnologias que quero aprender (IA e dados, computação em
nuvem e cibersegurança) e um link para o meu GitHub
(https://github.com/Sostenes-Maciel). Faça um design responsivo.
```

## 2. Alternância entre temas

```text
Adicione um botão na página para alternar entre tema claro e escuro. Atualize
o style.css com variáveis de cor para os dois temas e crie a lógica em
JavaScript para a troca. Mantenha o código simples.
```

## 3. Favicon e animações

```text
Adicione um favicon simples ao index.html (pode ser um emoji na tag link).
Em seguida, adicione no CSS uma animação suave de 'fade-in' para que a página
surja gradualmente ao ser carregada. Adicione também um efeito de 'hover'
(aumento suave) nos ícones ou links da página.

Obs: não faça commits automáticos. Será feito manualmente.
```

## 4. Seção de projetos do GitHub

```text
Crie uma seção 'Projetos' no HTML. Escreva um script JS para fazer um fetch
na API do GitHub
(https://api.github.com/users/sostenesmaciel/repos). Exiba até 6 repositórios
em formato de cards (nome, descrição e link). Estilize os cards em um grid
responsivo no style.css.
```

## 5. Correção da URL da API

```text
Corrija o script da seção 'Projetos'. A URL correta da API do GitHub para
buscar meus repositórios é
(https://api.github.com/users/Sostenes-Maciel/repos). Atualize a requisição
fetch e garanta que os cards dos repositórios públicos sejam renderizados
corretamente no HTML.
```

## 6. Ordenação dos repositórios

```text
Atualize o script JavaScript da seção 'Projetos'. Quando a requisição da API
do GitHub retornar a lista de repositórios, ordene o array com base na
propriedade size em ordem decrescente (do maior para o menor). Após ordenar,
pegue apenas os 6 primeiros repositórios e renderize-os nos cards.
```
