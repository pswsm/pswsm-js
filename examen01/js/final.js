function makeBoxDom(info) {
	let box = document.getElementById('dabox')
	let p_where = document.createElement('p')
	p_where.innerHTML = 'Lloc: ' + info['lloc']
	box.appendChild(p_where)
	let p_id = document.createElement('p')
	p_id.innerHTML = 'ID: ' + info['id']
	box.appendChild(p_id)
	let p_desc = document.createElement('p')
	p_id.innerHTML = 'Descripció: ' + info['desc']
	box.appendChild(p_desc)
	let p_data = document.createElement('p')
	p_data.innerHTML = 'Data: ' + info['data']
	box.appendChild(p_data)
	let p_tlf = document.createElement('p')
	p_tlf.innerHTML = 'Telèfon: ' + info['telefon']
	box.appendChild(p_tlf)
	let p_mail = document.createElement('p')
	p_mail.innerHTML = 'Email: ' + info['email']
	box.appendChild(p_mail)
	let p_prioritat = document.createElement('p')
	p_prioritat.innerHTML = 'Prioritat: ' + info['prioritat']
	box.appendChild(p_prioritat)
}
