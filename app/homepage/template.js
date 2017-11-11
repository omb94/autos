const template = (datos) => {
  let rows = ''
  let countRow = 1
  let keys = Object.keys(datos)

	keys.map(key => {
    let item = datos[key]
    rows +=  `
     <tr>
      <!--<td>${countRow++}</td>-->     
      <td>${item.marca}$</td>
      <td>${item.votos}$</td>
    </tr>
    `
  })

  let table = `
  <table class="striped">
    <thead>
      <tr>
        <!--<th>#</th>-->
        <th>Nombre</th>
        <th>Votos</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>`

  let card = `
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Lista de Autos</span>
          ${table}
        </div>
      </div>
    </div>
  </div>`

  return card
}

module.exports = template