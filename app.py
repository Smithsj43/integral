from flask import Flask, request, jsonify
from sympy import symbols, integrate, sympify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate_integral():
    data = request.json
    function = sympify(data['function'])
    lower_limit = sympify(data['lower_limit'])
    upper_limit = sympify(data['upper_limit'])
    x = symbols('x')

    if lower_limit.is_real and upper_limit.is_real:
        result = integrate(function, (x, lower_limit, upper_limit))
    else:
        result = integrate(function, x)

    return jsonify(result=str(result))

if __name__ == '__main__':
    app.run(debug=True)