global_dependencies:
	sudo apt install -y nodejs-dev node-gyp libssl1.0-dev
	sudo apt install -y npm
	sudo apt install -y nodejs
	sudo npm install --global cross-env
	sudo snap install serve
	npm install serve

dependencies:
	#backend dependencies:
	sudo pip3 install -r flask/requirements.txt

	#frontend dependencies (creates node_modules/):
	sudo npm install

run_local_backend:
	python3 flask/app.py

run_local_frontend:
	npm start
	#http://localhost:3000/

run_production:
	npm run build
	#to test it:
	serve -s build
	#https://localhost:8443/
