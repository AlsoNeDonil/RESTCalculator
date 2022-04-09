class CalcController{
    async execute(req, res){
        const op = req.query.op;
        const a = parseInt(req.query.a);
        const b = parseInt(req.query.b);
        let result = '';

        switch(op){
            case 'add':
                result = a + b;
                break;
            case 'sub':
                result = a - b;
                break;
            case 'mul':
                result = a * b;
                break;
            case 'div':
                result = a / b;
                break;
            default:
                result = 'Unknown operation';
                console.log(op, a, b);
                break;
        }

        res.json(result);
    }
}

module.exports = new CalcController();