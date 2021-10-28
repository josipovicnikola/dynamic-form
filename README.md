# `Dinamicko renderovanje forme` <br />
 <br />
Zadatak je zavrsen. Na front se renderuju polja u zavisnosti od tipa polja **(string, boolean i array)**.  <br />
Vrednost se cuva u bazu za input nakon skidanja fokusa sa polja, kod bool-a i selecta nakon promene selekcije. <br />
 <br />
Manipulacija nad konkretnim poljima u bazi se vrsi preko back-a, a rute za to su sledece <br />
 <br />
### `const **fieldSchema** = new Schema({ <br />
	label: { type: String, required: false}, <br />
	type: { type: String, required: false}, <br />
	options: { type: Array, required: false}, <br />
	value: {type: String, required: false} <br />
})` <br />
# `Field collection` <br />
 <br />
## `Vraca sva polja` <br />
*Method*: **GET** <br />
*Path*: [http://localhost:5000/api/fields](http://localhost:5000/api/fields)/ <br />
 <br />
## `Vraca konkretno polje u zavisnosti od id-ja` <br />
*Method*: **GET** <br />
*Path*: [http://localhost:5000/api/fields/:id](http://localhost:5000/api/fields)//:id <br />
 <br />
## `Kreira novo polje` <br />
--Prilikom dodavanja novog polja "label" i "type" su obavezni. <br />
--Tip moze biti ["string","boolean","array"] <br />
*Method*: **POST** <br />
*Path*: [http://localhost:5000/api/fields](http://localhost:5000/api/fields)/ <br />
 <br />
## `Azuriranje polja po id-ju` <br />
--Prilikom izmene samo prosledjeni atributi u JSON-u se menjaju, oni koji nisu prosledjeni ostaju isti <br />
*Method*: **PATCH** <br />
*Path*: [http://localhost:5000/api/fields/:id](http://localhost:5000/api/fields/:id)/ <br />
 <br />
## `Brisanje polja` <br />
*Method*: **DELETE** <br />
*Path*: "/:id" <br />
# Field data collection <br />
<br />
## `Vraca sve unete torke` <br />
*Method*: **GET** <br />
*Path*: [http://localhost:5000/api/fields/data](http://localhost:5000/api/fields/data)/ <br />
 <br />
## `Upisuje torku forme` <br />
*Method*: **POST** <br />
*Path*: [http://localhost:5000/api/fields/data](http://localhost:5000/api/fields/data)/ <br />
 <br />










