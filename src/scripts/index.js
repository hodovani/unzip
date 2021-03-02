import '../styles/index.scss';
import { Archive } from 'libarchive.js/main.js';
import { v4 as uuidv4 } from 'uuid';

Archive.init({
	workerUrl: 'public/worker-bundle.js',
});

const textarea = document.getElementById('fileOutput');
const fileInput = document.getElementById('fileInput');
const treeView = document.getElementById('treeView');

fetch('https://api.mpds.io/v0/download/p?q=P50006769-1&fmt=raw&sid=null&ed=0').then(response => response.blob())
  .then(async (blob) => {
    const archive = await Archive.open(blob);
    let obj = await archive.extractFiles();
    treeView.innerHTML = '';
    walk({ node: obj, liId: 'treeView', name: 'NaCl_225_cF8.7z' });
});




fileInput.addEventListener('change', async (e) => {
  const file = e.currentTarget.files[0];

  const archive = await Archive.open(file);
  let obj = await archive.extractFiles();

  treeView.innerHTML = '';

  walk({ node: obj, liId: 'treeView', name: file.name });
});

function walk({ node, liId, name }) {
	const root = document.getElementById(liId);
	if (!(node instanceof File)) {
		const newUlId = uuidv4();
    const newUl = document.createElement('ul');
    newUl.classList.add('nested');

		newUl.id = newUlId;

		const newLi = document.createElement('li');
    root.appendChild(newLi);
    newLi.classList.add('folder');
    newLi.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      newLi.childNodes.forEach(c => {
        console.log(c);
        if (c.classList.contains('nested')) {
          c.classList.toggle("active");
        }
      });
    });

		const span = document.createElement('span');
		span.innerText = name;
		newLi.appendChild(span);

    newLi.appendChild(newUl);
    
    const keys = Object.keys(node);
    if (keys.length > 0) {
      keys.forEach((key) => {
        walk({ node: node[key], liId: newUlId, name: key });
      });
    } else { 
      const span = document.createElement('span');
      span.innerHTML = '<i>Empty folder</i>';
      root.appendChild(span);
    }
	} else {
    const li = document.createElement('li');
    li.addEventListener('click', function (e) { e.stopPropagation(); });
		li.innerText = node.name;
		li.addEventListener('click', () => {
			const reader = new FileReader();
			reader.onload = function (event) {
				textarea.textContent = event.target.result;
			};
			reader.readAsText(node);
		});
		root.appendChild(li);
	}
}
