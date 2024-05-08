from flask import Flask

app = Flask(__name__)
print("hello")

@app.route("/flask", methods=["GET"])
def hello_word():
    return "<p>hello world</p>"

if __name__ == "__main__":
    app.run(port=4000, debug=True)