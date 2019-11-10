from flask import Flask
from flask import jsonify

#from flask import render_template
from flask_cors import CORS


# creates a Flask application, named app
app = Flask(__name__)
CORS(app)

# a route where we will display a welcome message via an HTML template
@app.route("/")
def hello():
    return 'ok'
    #return render_template('index.html')


#qualidade de experiencia
@app.route("/qoe")
def qoe():
    return jsonify({'qoe':65})

# utilizacao da banda larga
@app.route("/bduse")
def bduse():
    return jsonify({'bduse':80})

# qualidade de canal wifi
@app.route("/wifiqoe")
def wifiqoe():
    return jsonify({'wifiqoe':55,'canal2g':10})

# qualidade de canal wifi
@app.route("/snrdevices")
def snrdevices():
    return jsonify({'bom':4,'medio':1,'ruim':2})

# Tabela de dispositios
@app.route("/table_devices")
def table_devices():
    students= [
    { 'id': 1, 'name': 'Wasif', 'age': 21, 'email': 'wasif@email.com' },
    { 'id': 2, 'name': 'Ali', 'age': 19, 'email': 'ali@email.com' },
    { 'id': 3, 'name': 'Saad', 'age': 16, 'email': 'saad@email.com' },
    { 'id': 4, 'name': 'Asad', 'age': 25, 'email': 'asad@email.com' }]
    return jsonify({'students':students})

# Dados da antena wifi 2g
@app.route("/wifi_modem_2g")
def wifi_modem_2g():
    wifi= [
    { 'id': 1,'MAC': 'C4:6E:1F:08:84:F5', 'Frequencia': '2.4G',
     'SSID': 'REDE 2G', 'Canal': '10','Sinal':'-52',
     'Ruido':'-85','SNR':'33' }]
    return jsonify({'wifi2g':wifi})

# qualidade de canal wifi
@app.route("/down_up")
def down_up():
    return jsonify({'down':[300,300,300,300,300,280,300,300,300,300,230,300,299,300,300,301,300,300,300,300,300,300,300,300],
                    'up' :[150,150,150,145,150,150,150,150,150,149,150,150,144,150,150,151,150,150,150,150,150,151,150,150,]
    })



# run the application
if __name__ == "__main__":
    app.run(debug=True,port=9999)
