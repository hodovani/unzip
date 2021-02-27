import '../styles/index.scss';
import { Archive } from 'libarchive.js/main.js';

Archive.init({
	workerUrl: 'public/worker-bundle.js',
});

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

const treeView = document.getElementById('treeView');

fetch(
	'https://github.com/fancycode/pylzma/raw/master/tests/data/test-issue-43.7z'
)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	});

document
	.getElementById('file')
	.addEventListener('change', async (e) => {
		const file = e.currentTarget.files[0];

		const archive = await Archive.open(file);
		let obj = await archive.extractFiles();
		console.log(obj);
		walk(obj);

		// const reader = new FileReader();
		// reader.onload = function (event) {
		// 	const textarea = document.getElementById('fileOutput');
		// 	textarea.textContent += event.target.result;
		// 	console.log(event.target.result);
		// };
		// reader.readAsText(obj['blah.txt']);
	});

function walk(node) {
	if (node instanceof File) {
		console.log(node);
		const li = document.createElement('li');
		li.innerText = node.name;
		treeView.appendChild(li);
	} else {
		Object.keys(node).forEach((key) => {
			walk(node[key]);
		});
	}
}
