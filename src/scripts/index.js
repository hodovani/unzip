import '../styles/index.scss';
import { Archive } from 'libarchive.js/main.js';

Archive.init({
	workerUrl: 'public/worker-bundle.js',
});

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

document
	.getElementById('file')
	.addEventListener('change', async (e) => {
		const file = e.currentTarget.files[0];

		const archive = await Archive.open(file);
		let obj = await archive.extractFiles();
		console.log(obj);

		const reader = new FileReader();
		reader.onload = function (event) {
			const textarea = document.getElementById('fileOutput');
			textarea.textContent += event.target.result;
			console.log(event.target.result);
		};
		reader.readAsText(obj['blah.txt']);
	});
