
# Instalação

Instalação no Ubuntu 18.08 LTS, mas funciona
no windows ou mac.

````python
# instalar o nodejs
# https://nodejs.org/en/
sudo apt-get install nodejs
# instale o npm
sudo apt-get install npm
````


````python
# clone o repositorio
git clone https://gitlab.com/beegol/web-cianet.git
# Entre no diretorio
cd web-cianet
# instale
npm install
# inicie o servidor
npm start
````

se tudo der certo vai aparecer a mensagem

````python
You can now view shards-dashboard-lite-react in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.17.89.193:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
````

Caso de algum problema, tente instalar os pacotes abaixo
````python
# instale os pacotes
# speedometer
npm install react-d3-speedometer
# recharts
npm install recharts
npm start
````



# Atenção

Suba no git apenas a pasta src, esta pasta é a essencial do projeto.

não utilize : git add .

# Fazer o build do projeto

Para fazer o build execute o comando

````python
# faça build, será criado uma pasta /build no 
# mesmo nível da pasta /src
npm run build
# instale o sere
npm install serve
# e para testar o servidor
serve -s build
# ou dentro da pasta build
cd build
serve -s
````

# Build funcionando com o flask

A pasta build e a pasta flask estão no mesmo nível, copie a pasta static para a pasta
flask/static e o restante para a pasta flask/templates

após isso execute o comando
````python
python app.py
````
