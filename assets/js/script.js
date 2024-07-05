// Initialisation des variables
const table = [];
let height, width;

// Fonction générant le tableau.
function generateTable() {
    width = Number(document.getElementById('width').value);
    height = Number(document.getElementById('height').value);
    document.getElementById('table').innerHTML = '';

    // Calcul de la matrice de données pour le tableau
    for (let y = 0; y < height; y++) {
        table[y] = [];
        for (let x = 0; x < width; x++) {
            table[y][x] = y * width - x * (width - 1);
            while (table[y][x] < 0) {
                table[y][x] += height * width;
            }
        }
    }

    // Création des cellules du tableau et assignation de leurs valeurs
    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            row += `<td>${table[y][x]}</td>`;
        }
        document.getElementById('table').innerHTML += `<tr>${row}</tr>`;
    }
}
 
// Listenner sur la modification des input Height et Width pour régénérer le tableau
document.getElementById('height').addEventListener('input', () => {
  width = Number(document.getElementById('width').value);
  height = Number(document.getElementById('height').value);
  if (width > 0 && height > 0) generateTable();
});
document.getElementById('width').addEventListener('input', () => {
  width = Number(document.getElementById('width').value);
  height = Number(document.getElementById('height').value);
  if (height > 0 && width > 0) generateTable();
});