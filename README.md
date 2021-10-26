Dinamicko renderovanje forme

Back je povezan sa bazom, koristim cloud mongo.
Takodje back sam implementirao do kraja, dodao sam neke rute koje ce olaksati testiranje sa postmenom, 
a koje necu pozivati u frontu.

BASE_URL je localhost:5000/api/fields

GET - / - vraca sve fildove
GET - /:id - vraca odredje fild

POST - / - kreira novi fild 

PATCH - /:id - menja fild 
PATCH - /value/:id - menja samo value properti filda

DELETE - /:id - brise fild 

Front je povezan sa bekom samo da prikupi postojece fildove trenutno.

Nije uradjeno: renderovanje fildova.

Plan:
Prolazak kroz fildove sa map funkcijom i ubacivanje fild propertija u komponentu <DynamicField/>
Komponenta dynamicField ce proveravati type properti fielda i na osnovu njega kreirati <InputField/>, <CheckboxField/> ili 
<DropdownField/> komponentu i na ovome trenutno radim.
Nakon toga ostaje submit koji ce biti ili pojedinacni za svako polje (koji se nalazi recimo sa desne strane polja)
ili jedan submit na dnu forme koji ce se odnositi na sva polja.
