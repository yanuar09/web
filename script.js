let barang = [];

function tambahBarang() {
  const nama = document.getElementById("namaBarang").value;
  const stok = parseInt(document.getElementById("stokBarang").value);

  if (!nama || stok < 0) {
    alert("Data tidak valid");
    return;
  }

  barang.push({ nama, stok });
  document.getElementById("namaBarang").value = "";
  document.getElementById("stokBarang").value = "";
  tampilBarang();
}

function tampilBarang() {
  const tabel = document.getElementById("tabelBarang");
  tabel.innerHTML = "";

  barang.forEach((b, index) => {
    tabel.innerHTML += `
      <tr>
        <td>${b.nama}</td>
        <td>${b.stok}</td>
        <td>
          <button onclick="stokMasuk(${index})">+</button>
          <button onclick="stokKeluar(${index})">-</button>
          <button onclick="hapusBarang(${index})">🗑</button>
        </td>
      </tr>
    `;
  });
}

function stokMasuk(index) {
  barang[index].stok++;
  tampilBarang();
}

function stokKeluar(index) {
  if (barang[index].stok > 0) {
    barang[index].stok--;
  }
  tampilBarang();
}

function hapusBarang(index) {
  barang.splice(index, 1);
  tampilBarang();
}
