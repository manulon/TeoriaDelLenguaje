export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            res.status(200).json(req.query);
            break;
        case 'GET':
            res.status(200).json({ "Hola": "azu" })
            break;
    }
}