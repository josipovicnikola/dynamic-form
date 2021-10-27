Dinamicko renderovanje forme

Zadatak je zavrsen. Na front se renderuju polja u zavisnosti od tipa polja (string, boolean i array). 
Vrednost se cuva u bazu za input nakon skidanja fokusa sa polja, kod bool-a i selecta nakon promene selekcije.

Manipulacija nad konkretnim poljima u bazi se vrsi preko back-a, a rute za to su sledece ( u frontu se nalazi samo forma sa poljima )

*const fieldSchema = new Schema({
	label: { type: String, required: false},
	type: { type: String, required: false},
	options: { type: Array, required: false},
	value: {type: String, required: false}
})*

BASE_URL je localhost:5000/api/fields

*Vraca sva polja*
Method: GET
Path: "/"

*Vraca konkretno polje u zavisnosti od id-ja*
Method: GET
Path: "/:id"

*Kreira novo polje*
--Prilikom dodavanja novog polja "label" i "type" su obavezni.
--Tip moze biti ["string","boolean","array"]
Method: POST
Path: "/"

*Azuriranje polja po id-ju*
--Prilikom izmene samo prosledjeni atributi u JSON-u se menjaju, oni koji nisu prosledjeni ostaju isti
Method: PATCH
Path: "/:id"

*Brisanje polja*
Method: DELETE
Path: "/:id"










