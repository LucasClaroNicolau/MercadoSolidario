from flask import Flask, render_template, jsonify, request, send_from_directory
import sqlite3

app = Flask(__name__, static_url_path='/static')

cnx = sqlite3.connect('rede3s.db', check_same_thread=False)
conx = cnx.cursor()

@app.route("/list", methods=['GET'])
def getDados():
    conx.execute("select * from dados;")
    dados = conx.fetchall()
    response = []
    for t in dados:
        o = {"user":t[0], "public": t[1]}
        response.append(o)

    return jsonify(response)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/inicio")
def inicio():
    return render_template("components/inicio.html")

@app.route("/produtos")
def produtos():
    return render_template("components/produtos.html")

@app.route("/familias")
def familias():
    return render_template("components/familias.html")

@app.route("/relatorioProdutos")
def relatorioProdutos():
    return render_template("components/relatorioProdutos.html")

@app.route("/relatorioFamilias")
def relatorioFamilias():
    return render_template("components/relatorioFamilias.html")

@app.route("/cadastroFamilia")
def cadastroFamilia():
    return render_template("components/cadastroFamilia.html")


if __name__ == "__main__":
    app.run(host="localhost", port=80)
