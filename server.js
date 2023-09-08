import express  from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();

app.use(express.static(path.join(__dirname+'/frontend/', 'build')));

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname+'/frontend/', 'build', 'index.html'));
});



app.listen(4006, function () {
	console.log("Server started running");
});