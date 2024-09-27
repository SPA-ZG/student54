url:https://web2-lab6-q23z.onrender.com/

zahtjevi:
 - interpolation/one-way binding - Da, src/components/ActivityComponent.vue, :4, varijabla name je interpolirana
 - two-way binding - Da, src/components/ListComponent.vue, :11, :33, :51, varijabla newActivity je dvosmjerno povezana
 - methods - Da, src/components/ListComponent.vue, :26-:40
 - computed properties - Da, src/components/ListComponent.vue, :19-:25
 - barem jedan scoped style - Da, src/components/ListComponent.vue, :73
 - koristiti barem jedan lifecycle hook - Da, src/components/SportComponent.vue, :15-:17
 - routing (više stranica) - Da, src/router/index.js, cijeli file
 - - aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)
 - - dinamičko usmjeravanje s 404 stranicom ("catch all")
 - (barem) dvije komponente - Da, src/components/*
 - - komponenta bez stanja, koristiti properties - Da, src/components/ActivityComponent.vue
 - - komponenta sa stanjem - Da, src/components/ListComponent.vue
 - barem jedna komponenta mora emitirati barem jedan event  - Da, src/components/ActivityComponent.vue, :18
 - store (Pinia) - Da, src/stores/sports.js cijeli file nadalje korišten u /src/views/SportView.vue :30, /src/views/HomeView.vue :10, /src/components/SportComponent.vue :13
 - asinkroni dohvat podataka s backenda, možete: - Da asinkrono učitavanje komponente, src/router/index.js :26
 - - koristiti Firebase ili Back4App, Mocky, itd.
 - - vlastiti storage, ili
 - - možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
 - - ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)