# Progetto di Ingegneria. del Software 2023 - Gruppo 03
*Bellini Mirko, Natali Federico, Sorrentino Sara*
## Struttura della repo
La repository GitHub è composta da due branch attualmente:
- **Develop**: contiene il codice più aggiornato che non fa parte dei deliverable richiesti per il corso.
- **Main**: contiene il codice testato e stabile che va preso in considerazione per i deliverable.

La repo è fomata da due cartelle standalone: **frontend** e **backend**.

- All'interno della cartella backend si trova il codice server-side scritto in javascript, basandosi su [Node.js](nodejs.org) e [Express.js](expressjs.com). Questo effettua le operazioni sul nostro database No-SQL [MongoDB](mongodb.com) hostato sul loro servizio di cloud [Atlas](mongodb.com/clud/atlas), questo gestisce anche le logiche di autorizzazione mentre, per quelle di autenticazione ci siamo appoggiati sul servizio esterno offerto da [supabase](supabase.com) dati i vantaggi offerti, tra cui la sicurezza. Il codice di sviluppa su due cartelle principali: `routes` e `shared`. La prima contiene i router che implementano le logiche di authorization e di gestione del DB, mentre shared i modelli e gli schemi dei nostri documenti. `app.js` è l'ingress point che contiene il middleware di validation del token attraverso i secret presenti nel file `.env` ( aggiunto al `.gitignore` per ovvi motivi).

- [ ⚠️ work in progress] il frontend sta attualmente venendo sviluppato in [Angular 14](angular.io) sfruttando [ngrx](ngrx.io) per lo state management.

I commit sono segnalati come:
- 🦾 new working code
- 🐛 bug fix
- 🧼 code cleanup/refractoring
- 🚨 new code w/ errors
- 🔙 code removed
- ℹ️ updated README.md

## Documentazione
La documentazione delle API può essere trovata su [apiary.io](myscuderia.docs.apiary.io) mentre per la restante fare riferimento ai deliverables consegnati.
