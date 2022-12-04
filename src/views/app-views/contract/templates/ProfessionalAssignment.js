import React, { forwardRef } from "react";
import { Card } from "antd";
import LOGO from "../.././../../assets/svg/templogo4.png";
import moment from "moment";
const ProfesionalAssignment = forwardRef((props, ref) => {
  const data = props.data;
  const client = props.client;

  return (
    <div className="container" style={{ padding: 50 }} ref={ref}>
      <Card style={{ border: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 style={{ fontSize: "16px", color: "black", fontWeight: "bold" }}>
            Offerta _____________
          </h5>
          <h5 style={{ fontSize: "16px", color: "black", fontWeight: "bold" }}>
            T.I.P.A.S S.r.l
          </h5>
        </div>
        <div
          style={{
            marginTop: 50,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={LOGO} alt="logo" width={100} />
          <h2
            style={{
              fontSize: "10px",
              color: "black",
              fontWeight: "bold",
              marginLeft: 100,
            }}
          >
            TECHNICAL INNOVATIONAL PRODUCT AND SERVICE UNION S.R.L
          </h2>
        </div>
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <p style={{ fontSize: "10px", color: "black" }}>
            Efficienza ed Energia Rinnovabile Riqualificazione e mantenimento
            del <br /> territorio Sede Legale: Via Monterosa 86, Milano 20149
            <br /> Sede Operativa: Via Vincenzo Monti 52, Rho (MI) 20017
            <br /> Ph: +39 0289450402 Fx: +390289450409
            <br /> e-mail: tecnico@tipas.it
          </p>
        </div>
        <h2 style={{ textAlign: "center", fontSize: "16px", color: "#2C73B6" }}>
          INCARICO PROFESSIONALE
        </h2>
        <p style={{ fontSize: "10px", color: "black", textAlign: "center" }}>
          tra
        </p>
        <p style={{ fontSize: "10px", color: "black", textAlign: "center" }}>
          Il sig. _____________, nato a__________. in data e residente in
          __________.(...), via , C.F.__________,, rappresentante o
          Amministratore del condominio _____________.. ubicato
          in_____________.(...)
          cap__________________.via_______________.n___________. CF (di seguito
          “Committente”)
        </p>
        <p style={{ fontSize: "10px", color: "black", textAlign: "center" }}>
          e
        </p>
        <p style={{ fontSize: "10px", color: "black", textAlign: "center" }}>
          T.I.P.A.S. s.r.l. (C.F./P.I. 113337860966), Sede legale a Milano via
          Monterosa 86, sede operativa a Rho ( MI ) via Vincenzo Monti
          52,persona dell’ Amministratore Loris Arena (l’“Appaltatore” o
          “T.I.P.A.S. ”) <br />
          (il Committente e l’Appaltatore, di seguito congiuntamente anche le
          “Parti” o singolarmente la “Parte”)
        </p>
        <h2 style={{ textAlign: "center", fontSize: "12px", color: "#2C73B6" }}>
          Premesso che
        </h2>
        <p style={{ fontSize: "10px", color: "black", lineHeight: 2 }}>
          a) T.I.P.A.S. ha numerose imprese associate di comprovata esperienza
          nell’edificazione e ristrutturazione di immobili e si è resa
          disponibile ad eseguire le opere edili di riqualificazione energetica
          e/o di recupero del patrimonio edilizio, inclusive delle realizzate
          attività di progettazione (l’“Intervento”), che consentano agli aventi
          diritto la possibilità di accedere agli incentivi statali, nella forma
          di detrazioni fiscali, quali Ecobonus e/o Sismabonus e/o Superbonus
          e/o Bonus Casa e/o Bonus Facciate (i “Bonus Fiscali”), previsti dagli
          artt. 14 e 16 del Decreto Legge 4 giugno 2013, n. 63, così come
          modificato dagli artt. 119 e 121 del Decreto Legge 19 maggio 2020, n.
          34, convertito con modificazioni dalla Legge 17 luglio 2020, n.77 e
          ss.mm.ii. (il “Decreto Rilancio”), con particolare riguardo a quelle
          di isolamento termico ricomprese nell’art. 2 del Decreto Ministeriale
          6 8.2020 (il “Decreto Requisiti”), nel punto 5) dalla Guida
          dell’Agenzia delle Entrate del luglio 2020 (la “Guida”), nell’art. 1
          del Provvedimento del Direttore dell’Agenzia delle Entrate prot. n.
          283847/2020 ( il “Provvedimento”) e nell’art. 2 della Circolare
          dell’Agenzia delle Entrate 8.8.2020 (la“Circolare”) <br /> b) l’art.
          121 del Decreto Rilancio concede la possibilità per i soggetti che
          negli anni 2020, 2021 e 2022, sostengono spese per gli interventi di
          efficientamento energetico e miglioramento sismico, in luogo
          dell’utilizzo diretto della detrazione spettante, a fronte del
          corretto invio della Comunicazione di cui all’articolo 121, comma 7
          del Decreto Rilancio (l’“Opzione”), di ottenere un contributo sotto
          forma di sconto sul corrispettivo dovuto (c.d. “Contributo Sconto in
          Fattura”) o, alternativamente, cedere il credito d’imposta ad altri
          soggetti (c.d. “Cessione dei Crediti d’Imposta”) <br /> c) il
          Committente è intenzionato a i procedere ai lavori di efficientamento
          energetico per l’importo massimo ammissibile finanziabile ai sensi del
          c.d. decreto rilancio per le opere di isolamento delle facciate, delle
          coperture, eventuali caldaie, serramenti, pannelli fotovoltaici e
          batterie di accumulo, domotica e ricarica elettrica) al fine di
          ottenere il miglioramento di due classi energetiche [..]”, con
          affidamento dei suddetti lavori di manutenzione straordinaria
          all”Appaltatore <br /> d) il committente ha deciso di stipulare il
          contratto d’appalto con la formula dello “Sconto in fattura” con
          Cessione del credito fiscale che si matura con la realizzazione delle
          opere di efficientamento a favore di T.I.P.A.S. S.r.l.; <br /> e)
          l’Appaltatore ha dunque dichiarato di essere in grado di progettare e
          realizzare le Opere, avvalendosi anche – se del caso – del supporto di
          imprese terze e fornire i Servizi; nonché accettare dal committente,
          quale forma totale di pagamento del Corrispettivo (come di seguito
          definito) dovuto per l’esecuzione delle Opere, il Contributo Sconto in
          Fattura. Con la presente scrittura privata (di seguito il
          “Contratto”), le Parti intendono disciplinare termini, modalità e
          condizioni di redazione della Progettazione Esecutiva, di esecuzione
          degli Interventi.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "16px", color: "#2C73B6" }}>
          Tutto ciò premesso, le Parti
        </h2>
        <h2 style={{ textAlign: "center", fontSize: "16px", color: "black" }}>
          stipulano e convengono quanto segue:
        </h2>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          1. PREMESSE E ALLEGATI 2.
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          1.1. Le Premesse e i documenti allegati (gli “Allegati”) formano parte
          integrante ed essenziale del presente Contratto. In caso di conflitto
          tra il contenuto del Contratto e il contenuto degli Allegati, prevarrà
          il contenuto del Contratto.
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          1.2. Elenco degli Allegati:
          <p style={{ fontSize: "10px", color: "black", marginLeft: 20 }}>
            Allegato A): studio di fattibilità; <br /> Allegato B): PSC (ove
            richiesto); <br /> Allegato C): crono-programma; <br /> Allegato D):
            Allegato tecnico.
          </p>
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          2. OGGETTO DEL CONTRATTO
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          2.1. Costituisce oggetto del presente Contratto l’esecuzione a regola
          d’arte, nonché in conformità alle previsioni di cui al Decreto
          Rilancio e alle relative disposizioni di attuazione, delle opere che
          sono specificamente individuate nell’Allegato tecnico (le “Opere”), da
          eseguirsi sull’immobile sito in …………………………….. via
          ……………………………………………………………….., n. ….. (l’“Immobile”) e da intendersi come
          approvate senza riserva da parte del Committente con la sottoscrizione
          del presente Contratto. <br /> 2.2. Non rientra fra le obbligazioni in
          capo all’Appaltatore quanto a carico del Committente e/o quanto non
          espressamente ricompreso nell’attività di esecuzione delle Opere. In
          particolare, rimangono estranee al presente Contratto, a titolo
          esemplificativo e non esaustivo: <br />
          a) le attività volte all’ottenimento delle Autorizzazioni
          Amministrative (come di seguito definite); <br /> b) ogni eventuale
          adempimento che dovesse emergere durante la realizzazione delle Opere
          legato alla presenza di sostanze e/o materiali inquinanti (incluso, ma
          non limitatamente, amianto). Resta inteso che gli obblighi, gli oneri
          e i costi per la rimozione e/o smaltimento e/o comunque la messa in
          sicurezza di sostanze e/o materiali inquinanti sono a carico del
          Committente;
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          3. DICHIARAZIONI E GARANZIE
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          3.1. Con la sottoscrizione del presente Contratto, l’Appaltatore
          dichiara e garantisce: <br /> a) che tutte le attività oggetto del
          presente Contratto saranno eseguite con propria organizzazione di
          mezzi e di risorse e a proprio rischio, anche avvalendosi di imprese
          terze subappaltatrici;
          <br />
          b) di possedere le necessarie capacità tecniche, finanziarie e
          organizzative richieste per la realizzazione delle Opere a perfetta
          regola d’arte e nel rispetto della migliore prassi del settore per
          attività e lavori sostanzialmente simili, per tipologia e
          caratteristiche, alle Opere nonché per l’esecuzione delle obbligazioni
          previste nel presente Contratto a suo carico; <br /> c) di essere un
          consorzio validamente costituito ed esistente in conformità alla legge
          applicabile; <br /> d) che il Contratto costituisce fonte di
          obbligazioni vincolanti, valide, azionabili ed eseguibili, in
          conformità ai rispettivi termini e condizioni; <br /> e) che la
          realizzazione delle Opere rientra tra le proprie attività
          istituzionali, e che dispone delle capacità tecniche,
          dell’organizzazione, dell’esperienza e delle autorizzazioni necessarie
          alla esecuzione delle stesse; <br /> f) di trovarsi nel pieno e libero
          esercizio dei propri diritti, non essendo in stato di insolvenza,
          liquidazione volontaria, fallimento, liquidazione coatta
          amministrativa, concordato preventivo o altre simili procedure
          concorsuali; <br /> g) che la sottoscrizione del Contratto e di ogni
          altro atto o contratto ad esso collegato, e l’adempimento delle
          obbligazioni da essi derivanti non sono in contrasto con obbligazioni
          contrattuali in essere, leggi o con atti aventi forza di legge; <br />{" "}
          h) di aver valutato tutte le circostanze di tempo e di luogo che
          possono influire sull’esecuzione dell’Intervento; <br /> i) di aver
          analizzato le caratteristiche delle Opere nonché di aver effettuato un
          sopralluogo prendendo visione degli ambienti di lavoro e, dunque, di
          essere a conoscenza dello stato attuale dell’Immobile; e <br /> j) di
          aver conseguentemente valutato le caratteristiche, le esigenze, le
          modalità operative e le tempistiche concernenti la realizzazione
          dell’intervento, avuto riguardo anche ai particolari costruttivi dei
          quali dichiara di aver preso completa ed esatta conoscenza per la
          realizzazione dell’Intervento, il tutto prima della sottoscrizione del
          presente Contratto. <br /> 3.2. Con la sottoscrizione del presente
          Contratto, il Committente dichiara a garantisce: <br /> a) di aver
          fornito tutte le evidenze documentali richieste dall’Appaltatore e di
          impegnarsi a fornire quelle ulteriori che dovessero essere
          successivamente da questi richieste; <br /> b) che si assume la
          responsabilità, anche ai sensi dell’art. 1381 del Codice Civile, della
          veridicità, della correttezza e della completezza dei documenti di cui
          alla precedente lett. a); <br />
          c) di tenere manlevato e indenne l’Appaltatore per qualsivoglia danno
          o pregiudizio possa derivargli in connessione alla presentazione di
          dichiarazioni erronee, false o incomplete; <br /> d) di avere la piena
          disponibilità sia in linea di diritto che di fatto dell’Immobile e,
          pertanto, di metterlo a disposizione dell’Appaltatore per tutta la
          durata del Contratto senza alcun impedimento, ostacolo, onere e
          quant’altro possa pregiudicare la regolare esecuzione dell’Intervento;
          <br />
          e) di aver ottenuto e che manterrà valide ed efficaci tutte le
          autorizzazioni, istanze, pareri, nulla osta, titoli abilitativi
          comunque denominati necessari o comunque opportuni secondo le vigenti
          disposizioni di legge (congiuntamente, le “Autorizzazioni
          Amministrative”) per l’esecuzione delle Opere oggetto del presente
          Contratto e per tutta la durata dello stesso, con la sola esclusione
          delle autorizzazioni di competenza dell’Appaltatore (e.g. ottenimento
          dell’assenso e del permesso all’occupazione di suolo pubblico del
          Cantiere); e <br /> f) che sussistono tutti i presupposti di legge per
          l’esercizio dell’opzione per il Contributo Sconto in Fattura.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          3. CONDIZIONI SOSPENSIVE
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          2.1. Costituisce oggetto del presente Contratto l’esecuzione a regola
          d’arte, nonché in conformità alle previsioni di cui al Decreto
          Rilancio e alle relative disposizioni di attuazione, delle opere che
          sono specificamente individuate nell’Allegato tecnico (le “Opere”), da
          eseguirsi sull’immobile sito in …………………………….. via
          ……………………………………………………………….., n. ….. (l’“Immobile”) e da intendersi come
          approvate senza riserva da parte del Committente con la sottoscrizione
          del presente Contratto. <br /> 2.2. Non rientra fra le obbligazioni in
          capo all’Appaltatore quanto a carico del Committente e/o quanto non
          espressamente ricompreso nell’attività di esecuzione delle Opere. In
          particolare, rimangono estranee al presente Contratto, a titolo
          esemplificativo e non esaustivo: <br />
          a) le attività volte all’ottenimento delle Autorizzazioni
          Amministrative (come di seguito definite); <br /> b) ogni eventuale
          adempimento che dovesse emergere durante la realizzazione delle Opere
          legato alla presenza di sostanze e/o materiali inquinanti (incluso, ma
          non limitatamente, amianto). Resta inteso che gli obblighi, gli oneri
          e i costi per la rimozione e/o smaltimento e/o comunque la messa in
          sicurezza di sostanze e/o materiali inquinanti sono a carico del
          Committente;
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          4. DICHIARAZIONI E GARANZIE
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          4.1. Fermo restando la validità ed efficacia delle disposizioni di cui
          al presente Contratto nei confronti del Committente a partire dalla
          data di sottoscrizione del medesimo, rimane inteso e convenuto tra le
          Parti che le sole obbligazioni in capo all’Appaltatore di cui al
          presente Contratto, ad eccezione di quelle afferenti la Progettazione
          Esecutiva, sono sospensivamente condizionate, ai sensi e per gli
          effetti dell’art. 1353 del Codice Civile, a quanto segue: <br /> a)
          consegna, da parte del Committente, di tutta la documentazione e delle
          autodichiarazioni richieste e debitamente compilate e sottoscritte;{" "}
          <br /> b) ottenimento, da parte del Committente, delle necessarie
          Autorizzazioni Amministrative; (di seguito, ciascuna la “Condizione
          Sospensiva” e congiuntamente le “Condizioni Sospensive”). 4.2 Le Parti
          espressamente convengono che, in caso di mancato avveramento delle
          Condizioni Sospensive di cui sopra entro e non oltre 30 (trenta)
          giorni (di seguito, il “Termine di Avveramento”) dalla data di
          sottoscrizione del Contratto, il Contratto potrà essere risolto
          dall’Appaltatore e ciascuna Parte non avrà nulla a che pretendere nei
          confronti dell’altra Parte con riferimento al Contratto, fatto salvo
          quanto previsto al precedente Articolo 3.2.c).
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          5. OBBLIGHI E ONERI DELLE PA
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          5.1. Sono ad esclusivo carico dell’Appaltatore i seguenti obblighi:{" "}
          <br /> a) la fornitura di tutti i materiali, la manodopera, i
          trasporti, i noli e quant’altro necessario per la compiuta esecuzione
          dei lavori inclusi gli oneri relativi al personale e mezzi d’opera per
          i necessari tracciamenti e misurazioni; <br /> b) l’assistenza in sede
          di Collaudo (come di seguito definito); <br />
          c) la predisposizione e il mantenimento del Cantiere (come di seguito
          definito) adeguatamente attrezzato, nonché la gestione in generale del
          Cantiere stesso, dell’opera in costruzione e di tutti i materiali
          approvvigionati; l’installazione di baracche, uffici, spogliatoi,
          servizi igienici necessari al Cantiere, conformemente alle
          prescrizioni del Piano di Sicurezza e Coordinamento (il “PSC”)(se
          richiesto). <br />
          5.2. Il Committente garantisce di: <br /> a) assicurare
          all’Appaltatore la massima collaborazione per l’adempimento degli
          obblighi da questi assunti ai sensi del presente Contratto, nonché per
          gestire la risoluzione di eventuali errori, omissioni o carenze;{" "}
          <br /> b) non effettuare ulteriori lavorazioni o attività che possano
          comportare interferenze, ritardi o maggiori oneri in capo
          all’Appaltatore nell’esecuzione dell’Intervento stesso; <br /> c) non
          interferire con le attività del Cantiere (come di seguito definito) e,
          nel caso di interferenza, manlevare l’Appaltatore da qualsiasi
          responsabilità per danni a cose e persone; <br /> d) garantire
          l’accesso all’Immobile oggetto dell’Intervento, agli spazi di esso in
          cui le opere verranno realizzate e a quelli limitrofi necessari per il
          cantiere. Il medesimo accesso è garantito altresì agli incaricati di
          ENEA o di altre autorità incaricate di effettuare controlli sulla
          corretta esecuzione tecnica e documentale delle Opere; <br /> e)
          ottenere e mantenere per tutta la durata del presente Contratto tutte
          le Autorizzazioni Amministrative necessarie o utili per l’esecuzione
          dell’Intervento; e <br /> f) non apportare (anche successivamente alla
          conclusione del Contratto e per tutto il periodo rilevante ai fini
          della fruizione e della successiva cessione dei Bonus Fiscali) alcuna
          modifica e/o variazione alle opere oggetto dell’Intervento e/o
          variazione di destinazione dell’Unità Immobiliare.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          6. CORRISPETTIVO
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          6.1. Il corrispettivo dovuto al T.I.P.A.S. comprende le Attività di
          Progettazione già eseguite,la realizzazione delle Opere, le forniture
          di materiali, le lavorazioni, i trasporti, i noleggi e quanto
          espressamente necessario alla realizzazione dell’Intervento (il
          “Corrispettivo”), ferme le esclusioni di cui al precedente Articolo 2.
          Restano invece a carico del Committente: <br /> a) le imposte di bollo
          e di registro del presente Contratto in caso d’uso; <br /> b) i costi
          per la fornitura dell’acqua e dell’energia elettrica necessari
          all’esecuzione dell’Intervento; <br /> c) gli oneri e i costi per la
          rimozione e/o lo smaltimento, e/o comunque la messa in sicurezza, di
          sostanze e/o materiali inquinanti (incluso, ma non limitatamente,
          amianto); e <br />
          d) tutto quanto non specificato esplicitamente come a carico
          dell’Appaltatore nel presente Contratto. <br /> 6.2. Il Corrispettivo,
          fermo quanto eventualmente previsto negli Allegati, è pattuito in
          conformità: per quanto inerente l’Attività di Progettazione ai
          parametri e non oltre i valori massimi previsti nell’art. 13, comma 1,
          lett. C, del Decreto Requisiti e, segnatamente, nel D.M. 17.6.2016 e
          ss.mm.ii. ivi richiamato, in relazione alle sole prestazioni
          riferibili al predetto decreto e limitatamente alle attività
          espressamente previste a carico dell’Appaltatore nel presente
          Contratto e negli eventuali separati accordi di cui all’art. 17.1;{" "}
          <br /> a) ai parametri e non oltre i valori massimi di cui al
          prezzario delle opere edili 2021 della Casa Editrice DEI - Tipografia
          del Genio Civile, richiamato nell’art. 13, lett. B del Decreto
          Requisiti, in relazione alle attività volte all’esecuzione elle Opere
          di cui al precedente Articolo 2; <br /> b) agli ulteriori criteri
          indicati nell’art. 13 del Decreto Requisiti, per eventuali prestazioni
          a carico dell’Appaltatore, strettamente connesse all’Intervento e non
          contemplate nei punti 0 e a). <br />
          6.3. Il Corrispettivo è concordato a misura e non a corpo e la sua
          quantificazione esatta avverrà a consuntivo dell’Intervento eseguito,
          così come risulterà dallo SFL (come di seguito definito). <br /> 6.4.
          Nel consuntivo o eventualmente in separato documento, saranno altresì
          compresi i compensi dovuti con riferimento alle prestazioni
          professionali svolte dal Direttore dei Lavori (come di seguito
          definito) e in genere tutti i beni e/o servizi forniti in relazione
          all’Intervento, calcolati sulla scorta dei parametri di cui al
          precedente Articolo 6.2.
          <br /> 6.5. In merito all’aliquota IVA da applicare, premesso che le
          Opere rientrano tra gli interventi edilizi di cui all’art. 3 del
          D.P.R. n. 380/2001 e ss.mm.ii., il Committente: <br /> a) dichiara che
          l’Immobile ha prevalente destinazione d’uso abitativa privata e
          garantisce la permanenza di tale caratteristica sino all’avvenuto
          pagamento del Corrispettivo; <br /> b) pertanto, richiede
          l’applicazione dell’IVA ad aliquota ridotta al 10% sul Corrispettivo,
          ai sensi dell’art. 7, comma 1, lettera b) della Legge n. 488/1999 e
          ss.mm.ii.; <br /> c) si impegna a comunicare tempestivamente
          all’Appaltatore ogni eventuale fatto o circostanza, che faccia venire
          meno il diritto alla sopra citata agevolazione, al fine di consentire
          l’emissione della fattura integrativa per la differenza di aliquota,
          secondo quanto previsto dall’art. 26, comma 1 del D.P.R. n. 633/1972 e
          ss.mm.ii.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          7. MODALITA’ DI PAGAMENTO
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          7.1. Il Corrispettivo di cui al precedente Articolo 6.1, in virtù del
          beneficio fiscale degli artt. 119 e/o 121 del Decreto Rilancio, sarà
          corrisposto dal Committente tramite il riconoscimento di un Contributo
          Sconto in Fattura, come risultante dalla Dichiarazione di adesione
          all’opzione Contributo Sconto in Fattura che il Committente si impegna
          a consegnare all’Appaltatore contestualmente alla sottoscrizione del
          presente Contratto o, in ogni caso, entro il termine previsto <br />
          7.1. Resta inteso che saranno inclusi nel Corrispettivo in quanto
          spesa detraibile, ogni onere connesso all’Intervento e alla
          documentazione che deve essere rilasciata ai sensi dell’art. 119,
          commi 3, 11 e 13 del Decreto Rilancio. <br /> 7.2. In relazione al
          Corrispettivo, il Committente si impegna a: <br /> 7.2.1. riconoscere
          l’Appaltatore come unico soggetto beneficiario del Contributo Sconto
          in fattura; <br /> 7.2.2. non cedere ad altri detto Contributo Sconto
          in Fattura; <br /> 7.2.3. non richiedere, per l’Intervento o per altri
          interventi, altri incentivi non cumulabili – quali, a titolo
          esemplificativo e non esaustivo, detrazioni fiscali per gli interventi
          di ristrutturazione edilizia e titoli di efficienza energetica per
          interventi negli usi finali dell’energia – né altre forme di
          incentivazione, anche future. <br /> 7.3. L’Appaltatore, direttamente
          o tramite soggetti all’uopo incaricati, si impegna a espletare gli
          adempimenti necessari per il riconoscimento dei Bonus Fiscali
          applicabili all’Intervento e a ciascuna porzione dello stesso, come di
          volta in volta applicabile. <br /> 7.4. Il Committente prende atto che
          l’Appaltatore ha individuato (A) nell’Asseveratore Fiscale il soggetto
          incaricato, oltre dell’Analisi Fiscale, anche (i) dell’apposizione del
          visto di conformità e della trasmissione del modello di comunicazione
          relativa al Contributo Sconto in Fattura in conformità alla legge e
          alle direttive dell’Agenzia dell’Entrate e (B) nell’Asseveratore
          Tecnico il soggetto incaricato dell’asseverazione. <br /> 7.5.
          L’eventuale spesa eccedente la soglia massima prevista dalla normativa
          applicabile, resterà a carico di T.I.P.A.S. e non potrà essere da
          quest’ultimo richiesta in pagamento al Committente, salvo
          espressamente diverso accordo scritto fra le Parti. <br /> 7.6. Nel
          caso in cui non si verifichi una o più delle Condizioni Sospensive di
          cui al precedente Articolo 4.1, ovvero si verifichi la condizione
          risolutiva come da premessa iniziale, il Committente si impegna, in
          ogni caso, a corrispondere all’Appaltatore gli importi relativi alle
          attività che quest’ultimo avrà medio tempore svolto e opportunamente
          documentato al Committente. <br /> 7.7. Fermo quanto previsto al
          successivo Articolo 13.6, il Direttore dei Lavori dovrà, entro 10
          (dieci) giorni dal ricevimento di ciascun SAL e del Verbale di Fine
          Lavori, verificare e approvare, rispettivamente, il SAL rilevante e il
          SFL. Resta inteso che in mancanza di riscontro da parte del Direttore
          dei Lavori entro detto termine, l’Appaltatore invierà al Direttore dei
          Lavori una comunicazione di messa in mora, fissando un nuovo termine
          di 10 (dieci) giorni per la verifica e l’approvazione,
          rispettivamente, di ciascun SAL rilevante e dello SFL. Decorso
          inutilmente anche detto termine ulteriore, il SAL rilevante e/o lo SFL
          si reputeranno accettati a ogni effetto di legge e ai sensi del
          Contratto. <br /> 7.8. Gli importi dovuti a T.I.P.A.S. per
          corrispettivo e spese potranno essere pagati dal cliente tramite
          bonifico bancario, alle seguenti coordinate bancarie: IT62M0103032940
          0000013783 62
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          8. GESTIONE DEI PROFESSIONISTI
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          8.1 Il Coordinatore della Sicurezza in fase di Progettazione Esecutiva
          e di Esecuzione e il Direttore dei Lavori (di seguito I
          Professionisti) saranno nominati, previa condivisione, da entrambe le
          parti. <br />
          8.2. I Professionisti saranno contrattualizzati direttamente
          dall’Appaltatore e, pertanto, i relativi costi, corrispettivi e le
          imposte per le attività professionali svolte ( Corrispettivi dei
          professionisti ) saranno sostenuti dall’Appaltatore stesso, che li
          espliciterà separatamente rispetto all’imponibile e concorreranno al
          computo dei massimali di spesa previsti nonché i costi massimali per
          singola tipologia di intervento ammessi alla detrazione prevista dal
          Decreto Rilancio.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          9. POTERI E RESPONSABILITA’ DEL DIRETTORE DEI LAVORI
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          9.1. Il Direttore dei Lavori costituirà l’ordinario interlocutore
          dell’Appaltatore per ogni questione tecnica e operativa inerente
          all’esecuzione dell’Intervento. Egli, in particolare, svolgerà i
          seguenti compiti e mansioni: <br /> 9.1.1. esaminare e validare, anche
          sulla base dei documenti forniti dall’Appaltatore, il progetto
          esecutivo dei lavori redatto a seguito dell’Attività di Progettazione
          (il “Progetto Esecutivo”) e il relativo Cronoprogramma; <br />
          9.1.2. controllare, approvare o contestare l’Intervento eseguito
          dall’Appaltatore; <br /> 9.1.3. occuparsi del coordinamento per la
          sicurezza in fase di esecuzione ai sensi del D.Lgs. n. 81/2008; <br />
          9.1.4. notificare all’Appaltatore ordini di servizio che contengano le
          istruzioni occorrenti a garantire la regolarità` di esecuzione
          dell’Intervento; <br /> 9.1.5. accedere in qualsiasi momento al
          Cantiere (come di seguito definito) per effettuare tutti i controlli e
          le ispezioni che, a suo giudizio, si rendano necessarie;
          <br />
          9.1.6. inviare alle Parti una relazione particolareggiata, formulando
          in forma scritta le contestazioni ed assegnando un termine non
          superiore ai giorni 5 (cinque) per la relativa risoluzione, in caso di
          grave inadempimento da parte dell’Appaltatore alle obbligazioni del
          Contratto o alle prescrizioni eventualmente emanate nel corso della
          realizzazione dell’Intervento tale da compromettere la buona
          esecuzione delle Opere; <br /> 9.1.7. partecipare in contraddittorio
          con l’Appaltatore alle attività di verifica del raggiungimento dei
          SAL, anche ai fini dell’approvazione delle fatture dell’Appaltatore;
          <br /> 9.1.8. partecipare al Collaudo (come di seguito definito)
          secondo le modalità di cui al successivo Articolo 13, in
          contraddittorio con l’Appaltatore, esercitando i poteri e facoltà
          previste per legge, nonché sottoscrivere per accettazione il Verbale
          di Fine Lavori e il Verbale di Collaudo ovvero riportare le
          osservazioni ritenute necessarie; <br /> 9.1.9. disporre la
          sospensione dell’esecuzione dei Lavori, anche in base a quanto
          previsto al successivo Articolo 14. <br /> 9.2. Il Direttore dei
          Lavori svolgerà altresì l’incarico di Responsabile dei Lavori. <br />{" "}
          9.3. È fatta salva la facoltà dell’Appaltatore di avanzare per
          iscritto le proprie osservazioni e richieste rispetto agli ordini del
          Direttore dei Lavori. <br /> 9.4. In caso di divergenza tra
          l’Appaltatore e il Direttore dei Lavori in merito alle richieste e/o
          osservazioni di quest’ultimo e/o contenzioso è fatto diritto
          dell’Appaltatore richiedere e ottenere una sospensione dell’esecuzione
          delle Opere al fine di verificare in contraddittorio le indicazioni
          del Direttore dei Lavori. Tale periodo sospensivo verrà verbalizzato
          con un verbale di sospensione dei Lavori e determinerà un eguale
          slittamento temporale dell’esecuzione delle Opere rispetto al
          Cronoprogramma.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          10. PERSONALE E ONERI PREVIDENZIALI E ASSICURATIVI
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          10.1. L’Appaltatore dichiara espressamente e garantisce: <br />{" "}
          10.1.1. che per l’esecuzione dell’Intervento verrà impiegato personale
          con adeguata specializzazione, formazione, qualifiche ed esperienza
          necessari; <br /> 10.1.2. di essere adempiente e tutte le norme che
          riguardano i rapporti di lavoro, con particolare riferimento alla
          normativa in materia di sicurezza e salute dei lavoratori, nonché
          delle disposizioni retributive, contributive, previdenziali,
          assistenziali e fiscali vigenti; e <br />
          10.1.3. di avere analizzato e valutato i rischi specifici esistenti
          nell’ambiente di lavoro in cui le maestranze saranno chiamate a
          prestare la loro attività. <br /> 10.2. Tutti i costi, i corrispettivi
          e le imposte relativi ai dipendenti dell’Appaltatore impiegati
          nell’esecuzione dell’Intervento ai sensi dei rispettivi contratti di
          lavoro saranno di esclusiva competenza e responsabilità
          dell’Appaltatore. L’Appaltatore inoltre verificherà il regolare
          pagamento di tutti i costi, i corrispettivi e le imposte relativi ai
          dipendenti dei subappaltatori. <br /> 10.3. L’Appaltatore si impegna a
          tenere indenne il Committente, salva la responsabilità di quest’ultimo
          nei casi previsti dalla legge: <br />
          10.3.1. per qualsiasi infortunio che sul lavoro dovessero subire i
          propri dipendenti o quelli di eventuali subappaltatori; così pure
          l’Appaltatore garantisce di manlevare e tenere indenne il Committente
          da eventuali richieste di risarcimento del danno che lo stesso
          Appaltatore dovesse procurare a persone e/o cose; e <br /> 10.3.2. da
          qualsiasi responsabilità in relazione all’esecuzione dei Lavori, ivi
          compresa quella derivante da sanzioni amministrative che dovessero
          essere irrogate per l’esecuzione dell’Intervento. La sottoscrizione
          del presente Contratto e dei suoi allegati da parte dell’Appaltatore
          equivale a dichiarazione di perfetta conoscenza delle leggi, dei
          regolamenti e di tutta la normativa vigente per la corretta esecuzione
          del presente Contratto. <br /> 10.4. L’Appaltatore si obbliga ad
          aprire presso gli Enti Previdenziali ed Assicurativi una posizione
          assicurativa specifica per i lavori di cui al presente Contratto con
          impiego di manodopera propria. <br /> 10.5. L’Appaltatore dichiara di
          essere in regola con il versamento dei contributi previdenziali e
          assistenziali, nonché di rispettare le previsioni di cui al C.C.N.L.
          applicabile.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          11. DISPOSIZIONI IN MATERIA DI SICUREZZA
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          11.1. Tutti i soggetti coinvolti nelle attività oggetto del presente
          Contratto sono tenuti all’osservanza delle misure generali di tutela
          rispettivamente applicabili di cui al D.Lgs. n. 81/2008.
          <br /> 11.2. Il Committente o il Responsabile dei Lavori da questi
          incaricato verificherà l’adempimento degli obblighi gravanti sul
          Coordinatore della Sicurezza e provvederà alle altre attività in
          materia di sicurezza imposte dalla legge. In particolare, nei casi in
          cui ne sia richiesta la predisposizione ai sensi del D.Lgs. n.
          81/2008, il Committente o il Responsabile dei Lavori da questi
          incaricato predisporranno e aggiorneranno, anche ai sensi e per gli
          effetti dell’art. 96, comma 2 del D.Lgs. n. 81/2008, il contenuto del
          PSC (se redatto). Le Parti si danno reciprocamente atto che il PSC
          includerà (così come individuato dal punto 4 dell’allegato XV al
          D.Lgs. n. 81/2008) anche una parte dedicata alla stima dei costi della
          sicurezza che costituisce adempimento di quanto previsto dall’art. 26,
          comma 5 del D.Lgs. n. 81/2008, senza liberazione o limitazione della
          responsabilità dell’Appaltatore nell’esecuzione del presente
          Contratto. Nel caso di ricorso a presidi o procedure di mitigazione
          dei rischi che comportino un aumento dei costi stimati della sicurezza
          a base del progetto, l’Appaltatore recepirà le suddette direttive
          previa proposta e accettazione da parte del Committente di un addendum
          contrattuale riportante la modifica degli importi contrattuali e le
          eventuali modifiche della durata dell’esecuzione delle Opere in base
          al Cronoprogramma.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          12. PRESA IN CONSEGNA, CUSTODIA E GESTIONE DEL CANTIERE
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          12.1. Il Committente consegna all’Appaltatore, il quale prende lo in
          consegna l’Immobile, e l’area presso L’Immobile e le Unità Immobiliari
          interessate dalla realizzazione dell’Intervento, ivi incluso
          l’impianto di cantiere installato dall’Appaltatore, le aree di
          pertinenza e le altre aree di appoggio a tali fini (il “Cantiere”),
          mediante redazione di un verbale di consegna (il “Verbale di
          Consegna”) sottoscritto dal Direttore dei Lavori e dal Committente nel
          termine che verrà previsto dal Programma Lavori. Tale consegna dovrà
          avvenire entro 30 (trenta) giorni dalla sottoscrizione del presente
          Contratto. <br /> 12.2. Il Cantiere dovrà essere consegnato sgombero
          da cose e/o persone, dotato dei necessari accessi, permessi, utenze e
          collegamenti, nonché, ove possibile, dotato di un locale da adibire a
          spogliatoio e di idonei servizi igienici. Anche al fine di prevenire
          ogni possibile pericolo di danno per l’ambiente, il Committente dovrà
          (i) informare l’Appaltatore circa i rischi esistenti nel Cantiere e
          sulle relative misure di prevenzione e protezione anche in rapporto
          all’esercizio dell’attività dell’Appaltatore e/o dell’attività di
          altri appaltatori eventualmente presenti; rendere note all’Appaltatore
          le misure di emergenza ed evacuazione; promuovere la valutazione delle
          interferenze e la gestione delle relative misure di coordinamento
          nell’esecuzione delle Opere. <br /> 12.3. La data del Verbale di
          Consegna costituisce la data di decorrenza dei termini di consegna
          contrattuali di cui al Cronoprogramma per l’esecuzione delle Opere.
          <br />
          12.4. Nel caso in cui il Cantiere non sia consegnato entro il termine
          di cui al precedente Articolo 12.1 libero da persone e cose,
          l’Appaltatore non procederà all’esecuzione dell’Intervento fino al
          momento dell’effettiva liberazione e avrà diritto a un termine
          suppletivo pari al ritardo nella consegna ovvero al diverso termine
          concordato tra le Parti, sempre che ciò non consenta più di eseguire
          le Opere entro il termine ultimo previsto dalla Normativa di
          Riferimento per l’accesso ai Bonus Fiscali, nel qual caso il
          Committente dovrà tenere indenne l’Appaltatore da ogni danno o
          pregiudizio conseguente e pagare la quota del Corrispettivo
          corrispondente al prezzo di redazione della Progettazione Esecutiva.
          <br /> 12.5. Dalla data del Verbale di Consegna, l’Appaltatore
          assumerà ogni responsabilità e rischio connessi alla custodia e
          detenzione delle aree di Cantiere. <br /> 12.6. Nel corso
          dell’esecuzione delle Opere, il Committente deve mantenere il Cantiere
          libero da persone e cose, mentre l’Appaltatore deve provvedere a
          propria cura e spese, direttamente o per il tramite di soggetti terzi,
          ad un’adeguata e periodica pulizia del Cantiere, nonché allo sgombero
          dei materiali di risulta dal Cantiere, provvedendo alla loro rimozione
          e trasporto nei luoghi e con modalità concordate con il Direttore dei
          Lavori.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          13. ULTIMAZIONE DELLE OPERE E COLLAUDO
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          13.1. Salvo quanto previsto nei successivi Articoli 14 e 18 e gli
          ulteriori rimedi in capo all’Appaltatore, tutte le fasi
          delll’Intervento dovranno essere ultimate entro le scadenze previste
          nel Cronoprogramma. <br /> 13.2. L’ultimazione delle Opere sarà
          documentata con apposito verbale controfirmati dall’Appaltatore e dal
          Direttore dei Lavori (il “Verbale di Fine Lavori”).
          <br /> 13.3. L’ultimazione dell’Intervento dovrà essere accertata
          tramite un collaudo (il “Collaudo”). Visto quanto disposto dall’art.
          1665 del Codice Civile, oggetto di tale Collaudo è accertare, in
          contraddittorio tra il Committente, per mezzo del Direttore dei
          Lavori, e l’Appaltatore, l’esecuzione delle Opere a regola d’arte e
          secondo le prescrizioni di cui al presente Contratto. Il Collaudo
          dovrà essere completato entro 15 (quindici) giorni dalla data del
          Verbale di Fine Lavori. <br /> 13.4. L’inizio delle operazioni
          finalizzate al Collaudo, eseguite contestualmente alla redazione dello
          SFL , ovvero entro 3 (tre) giorni dall’eventuale invito scritto
          dell’Appaltatore e, in ogni caso, entro 15 (quindici) giorni
          dall’ultimazione dell’Intervento, verrà comunicato dal Direttore dei
          Lavori e/o dal Committente all’Appaltatore in forma scritta e
          trasmesso a mezzo di lettera raccomandata A.R. o a mezzo PEC agli
          indirizzi di cui al successivo Articolo 23. Tale comunicazione dovrà
          pervenire all’Appaltatore con almeno 2 (due) giorni di anticipo
          rispetto all’inizio delle operazioni finalizzate al Collaudo. <br />{" "}
          13.5. Qualora l’esito del Collaudo risulti positivo, entro 30 (trenta)
          giorni dal suo termine verrà sottoscritto dalle Parti il relativo
          verbale (il “Verbale di Collaudo”). Tale Verbale di Collaudo conterrà
          anche l’accettazione senza riserve ai sensi dell’art. 1666 del Codice
          Civile delle opere realizzate tramite l’Intervento, con contestuale
          consegna delle stesse al Committente e, dalla sua sottoscrizione, il
          Committente assumerà la custodia e la detenzione dell’Immobile e delle
          aree di Cantiere. <br /> 13.6. Qualora dall’esito del Collaudo risulti
          necessario porre in essere ulteriori interventi per l’ultimazione
          dell’Intervento ovvero emergano difetti, vizi, malfunzionamenti,
          errori od omissioni di natura rilevante relativi a ciascuna o
          all’insieme delle Opere e/o parte delle stesse (i “Difetti”), il
          Direttore dei Lavori comunicherà all’Appaltatore gli interventi ai
          quali quest’ultimo dovrà provvedere nel termine fissato dal
          Committente e comunque non inferiore a 30 (trenta) giorni. Una volta
          eliminati i Difetti, si procederà, analogamente a quanto sopra
          previsto, ad un nuovo Collaudo e, in caso di esito positivo dello
          stesso, alla redazione del Verbale di Collaudo. <br /> 13.7. Qualora
          il Direttore dei Lavori, il Committente o i loro incaricati, senza
          giustificati motivi, tralascino di procedere alle operazioni di
          Collaudo, ovvero non le portino a termine entro il termine di cui al
          precedente Articolo 13.3, le Opere si considereranno accettate dal
          Committente ai sensi del precedente Articolo 13.5. L’Appaltatore avrà
          quindi diritto alla liquidazione integrale del Corrispettivo, fermo
          l’obbligo per il Committente di formare e trasmettere all’Appaltatore
          il Certificato di Collaudo.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          14. SOSPENSIONE DEI LAVORI
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          14.1. La realizzazione dell’Intervento deve essere sospesa durante i
          periodi di avversità atmosferiche che possano portare pregiudizio alla
          regolare esecuzione delle Opere stesse. In tal caso l’Appaltatore ha
          diritto ad un termine suppletivo per l’ultimazione dell’Intervento
          corrispondente ai giorni di sospensione o comunque alla diversa misura
          che il Direttore dei Lavori riterrà equa. Analogamente si procederà
          nel caso di sospensione dei lavori derivante da altre cause non
          imputabili all’Appaltatore.
          <br /> 14.2. Qualora la sospensione non fosse totale, il Direttore dei
          Lavori, previo accordo con l’Appaltatore, stabilirà un termine
          suppletivo per l’ultimazione dell’Intervento.
          <br />
          14.3. In tutti i casi di sospensione della realizzazione
          dell’Intervento richiesta dal Direttore dei Lavori, l’Appaltatore –
          con la sola esclusione di sospensione esclusivamente imputabile a
          proprio inadempimento, nella cui evenienza l’Appaltatore dovrà
          sostenere tutti i relativi costi – avrà diritto al rimbors o di tutti
          gli oneri e costi debitamente documentati derivanti o comunque
          connessi alla sospensione e per tutta la durata della medesima, nonché
          alla proroga dei termini di cui al Cronoprogramma.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          15. VARIAZIONI
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          15.1. Nessuna delle Parti potrà apportare variazioni e/o aggiunte al
          Progetto Esecutivo e all’Intervento di sua iniziativa per qualsivoglia
          motivo, salvo il rispetto della legge applicabile o quanto
          strettamente necessario ai fini della realizzazione dell’Intervento
          stesso.
          <br /> 15.2. Resta fermo che eventuali ulteriori prestazioni
          professionali e/o tecniche e/o amministrative richieste dal
          Committente e strettamente connesse all’Intervento, saranno oggetto di
          eventuali separati accordi tra le Parti, ferme in ogni caso le soglie
          massime e i criteri per la determinazione dei compensi ai fini
          dell’ammissione della spesa al Superbonus precisati dalla normativa in
          vigore.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          16. AUTORIZZAZIONE AL SUBAPPALTO
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          16.1. Il Committente autorizza l’Appaltatore a subappaltare a propria
          discrezione, in tutto o in parte, le Opere di cui al presente
          Contratto, nonché le attività a loro connesse o accessorie, mantenendo
          il rispetto dei termini e le condizioni contenute nel presente
          Contratto e verificando che i subappaltatori applichino e rispettino
          tutte le disposizioni in materia di sicurezza e igiene sul posto di
          lavoro, nonché le disposizioni di legge e del CCNL in ambito
          retributivo, contributivo, previdenziale e assicurativo.
          <br /> 16.2. L’Appaltatore avrà inoltre facoltà di sostituire, anche
          in corso d’opera, uno o più subappaltatori, previo avviso per iscritto
          al Committente.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          17. LIMITAZIONI DI RESPONSABILITÀ DELL’APPALTATORE
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          17.1. L’Appaltatore non sarà in nessun caso responsabile nei confronti
          del Committente per danni indiretti e, inoltre, fatte salve le
          eventuali garanzie di performance specificamente ed espressamente
          indicate nel Contratto e nei relativi Allegati in relazione alle
          Opere, non sarà responsabile per qualsivoglia mancato guadagno e/o
          perdita per mancata e/o limitata commerciabilità e/o reddittività dei
          beni oggetto dell’Intervento.
          <br /> 17.2. L’Appaltatore non avrà alcun obbligo di risarcire il
          Committente nel caso in cui la non conformità delle Opere e/o un
          ritardo nell’esecuzione delle stesse derivino da inadempimenti del
          Committente alle obbligazioni previste dal presente Contratto ovvero
          da negligenza o da un uso improprio o modifiche dei beni e/o delle
          Opere.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          18. FORZA MAGGIORE
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          18.1. Per “Cause di Forza Maggiore s’intendono, ai sensi del presente
          Contratto, tutti quegli eventi imprevedibili ed indipendenti dalla
          volontà delle Parti o comunque non imputabili alle Parti che
          impediscano totalmente o parzialmente l’esecuzione delle Opere e vi
          rientrano - a titolo esemplificativo e non esaustivo - avverse
          condizioni atmosferiche di entità tale da non consentire la
          prosecuzione dei lavori oggetto delle Opere ovvero tali da
          rappresentare un rischio per la sicurezza e/o la salute dei lavoratori
          (quali a mero titolo esemplificativo, pioggia, ghiaccio, neve,
          temperature sotto lo zero), inondazioni, terremoti, frane,
          ritrovamenti archeologici, scioperi, epidemie, pandemie, situazioni
          emergenziali, difficoltà di approvvigionamento dei materiali non
          dipendenti dall’Appaltatore, sospensione dei lavori oggetto delle
          Opere imposte dalle autorità pubbliche anche, ma non solo, in
          relazione all’emergenza COVID-19.
          <br /> 18.2. Qualora si verifichi una Causa di Forza Maggiore la Parte
          colpita da tale evento non sarà responsabile per il mancato
          adempimento delle obbligazioni ad essa derivanti dal presente
          Contratto per il tempo e nella misura in cui l’adempimento di tali
          obbligazioni sia reso impossibile o illegittimo a causa dell’evento di
          forza maggiore, a condizione che integrino i requisiti di cui al
          precedente Articolo 18.1 e la Parte che ne è affetta comunichi
          immediatamente all’altra Parte l’evento di forza maggiore
          verificatosi, i suoi effetti e la sua probabile durata, ponendo in
          essere azioni per ovviare all'evento di forza maggiore o limitarne le
          conseguenze sull’esecuzione dell’Oggetto del presente Contratto.
          <br /> 18.3. Qualora si verifichi una Causa di Forza Maggiore
          l’Appaltatore avrà diritto ad un termine suppletivo per l’ultimazione
          dell’Intervento o di parte di esso proporzionale ai giorni di
          sospensione, tenuto conto della durata della stessa e di ulteriori
          termini necessari alla ripresa dell’esecuzione dell’Intervento e
          all’approvvigionamento dei relativi materiali.
          <br /> 18.4. La Parte non interessata dalla Causa di Forza Maggiore
          avrà il diritto di sospendere l’adempimento degli obblighi su di essa
          gravanti nella stessa misura in cui gli obblighi gravanti sulla Parte
          interessata dall’evento di forza maggiore non siano adempiuti a causa
          dello stesso.
          <br /> 18.5. In parziale deroga all’art. 1256, secondo comma del
          Codice Civile, il presente Contratto rimarrà in vigore tra le Parti, e
          la Parte colpita dovrà riprendere l’esecuzione dei propri obblighi non
          appena possibile dopo la cessazione della Causa di Forza Maggiore,
          dandone relativa comunicazione all'altra Parte. <br />
          18.6. Qualora la sospensione dei lavori per Cause di Forza Maggiore si
          protragga oltre per un periodo consecutivo pari o superiore a 4
          (quattro) mesi ovvero per un periodo complessivo superiore a 6 (sei)
          mesi nel corso del periodo di validità del presente Contratto dal
          momento in cui si è verificato ogni Parte avrà il diritto di recedere
          dal presente Contratto, previa comunicazione scritta da inviarsi
          all’altra Parte; e l’Appaltatore avrà diritto al pagamento del
          Corrispettivo dovuto per le Opere eseguite sino alla data della
          comunicazione scritta con la quale si comunica la sospensione ai sensi
          del precedente Articolo 18.2.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          19. MUTAMENTO NORMATIVO
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          19.1. Ai sensi del presente Contratto, per “Mutamento Normativo” si
          intende qualsiasi nuova legge applicabile o modifica della legge
          applicabile che sia promulgata, abrogata, modificata o pubblicata dopo
          la data di sottoscrizione del presente Contratto (incluso qualsiasi
          cambiamento nell'interpretazione o nell’applicazione da parte delle
          autorità competenti della legge applicabile e/o qualsiasi cambiamento
          di qualsiasi requisito normativo ai sensi della legge applicabile),
          esclusivamente in relazione:
          <br /> 19.1.1. alle autorizzazioni necessarie all’esecuzione del
          presente Contratto; e/o
          <br /> 19.1.2. alle formalità, requisiti e adempimenti al fine di
          ottenere il perfezionamento del Contributo Sconto in Fattura e che
          tale Mutamento Normativo:
          <br /> a) influisca direttamente e significativamente sull'adempimento
          degli obblighi in capo alle Parti ai sensi del presente Contratto,
          comportando costi e/o rischi aggiuntivi in capo alle stesse; o
          <br /> b) renda il Contratto ovvero l’adempimento delle obbligazioni
          in capo alle Parti illegale.
          <br /> 19.2. Qualora si verifichi un Mutamento Normativo, le Parti
          concordano che:
          <br /> a) ciascuna Parte avrà diritto ad inviare una comunicazione
          all’altra Parte, indicando: (a) l’evento (o gli eventi), i fatti e/o
          le circostanze che hanno dato origine al Mutamento Normativo; e (b) le
          eventuali modifiche da apportare al Contratto in conseguenza del
          Mutamento Normativo, al fine di riflettere il più possibile le
          intenzioni delle Parti e l’equilibrio economico tra le prestazioni in
          capo alle Parti alla data di sottoscrizione del presente Contratto;
          <br /> b) a seguito della comunicazione di cui al precedente comma, le
          Parti dovranno tempestivamente e in ogni caso entro e non oltre 30
          (trenta) giorni incontrarsi al fine di negoziare e concordare in buona
          fede e con spirito costruttivo le modifiche da apportare al Contratto;
          <br /> c) gli eventuali maggiori costi e le maggiori spese in capo
          alle Parti a seguito di un Mutamento Normativo saranno suddivisi
          equamente tra le stesse;
          <br /> d) non potranno risolvere il presente Contratto per eccessiva
          onerosità sopravvenuta a seguito di un Mutamento Normativo, pertanto
          rinunciando ai diritti ed ai rimedi di cui all’art. 1467 del Codice
          Civile;
          <br /> e) nel caso in cui le Parti non dovessero raggiungere un
          accordo circa le modifiche da apportare al Contratto a seguito di un
          Mutamento Normativo nel termine di 30 (trenta) giorni dalla data in
          cui le Parti si sono incontrate per discuterle per la prima volta,
          tale controversia sarà deferita al Foro di cui al successivo Articolo
          24.6.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          20. RISOLUZIONE DEL CONTRATTO
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          20.1. Fermo restando ogni diverso rimedio di legge o previsto dal
          presente Contratto, l’Appaltatore potrà risolvere il presente
          Contratto, in tutto o in parte, ai sensi dell’art. 1456 del Codice
          Civile, con comunicazione scritta con cui dichiari di avvalersi di
          quanto disposto dalla presente clausola, nel caso in cui si verifichi
          uno dei seguenti eventi:
          <br /> 20.1.1. mancato ottenimento o mantenimento, da parte del
          Committente e per motivi ad esso imputabili, una o più delle
          Autorizzazioni necessarie per l’esecuzione delle Opere;
          <br /> 20.1.2. mancato accesso al Cantiere a favore dell’Appaltatore
          nei termini e alle condizioni previsti dal presente Contratto;
          <br /> 20.1.3. erroneità, falsità o incompletezza delle dichiarazioni
          rese dal Committente ai sensi dell’Articolo 3.2;
          <br /> 20.1.4. invalidità e/o inefficacia del Contributo Sconto in
          Fattura, anche parziale, imputabile al committente rilevato
          successivamente all’esecuzione dell’Intervento e al perfezionamento
          del Contributo Sconto in Fattura.
          <br /> 20.2. In tutti i casi di risoluzione del presente Contratto per
          fatti imputabili al Committente, entro 5 (cinque) giorni lavorativi
          dalla dichiarazione di avvenuta risoluzione da parte dell’Appaltatore,
          il Committente dovrà corrispondere all’Appaltatore la quota parte del
          Corrispettivo per le opere relative all’Intervento realizzate sino
          alla data di risoluzione del presente Contratto e i materiali a piè
          d’opera presenti, anche con versamento in denaro, ove non fosse
          possibile procedere con il Contributo Sconto in Fattura. Resta inteso
          che le opere realizzate verranno trasferite, in assenza di garanzia,
          nello stato di fatto e di diritto in cui si trovano al momento della
          risoluzione, con rinuncia a qualsivoglia pretesa, diritto o azione da
          parte del Committente ed ogni eccezione rimossa o rinunciata.
          <br /> 20.3. In aggiunta a quanto previsto al precedente Articolo
          20.2, all’Appaltatore verrà riconosciuta una penale pari al 10% degli
          ammontari massimi rispetto ai quali l’Appaltatore avrebbe potuto
          beneficiare dei Bonus Fiscali, salvo il risarcimento del maggior danno
          subito. Tale penale è stata concordata dalle Parti tenendo in
          considerazione il complesso delle pattuizioni del presente Contratto e
          pertanto le Parti si danno atto e riconoscono che tale penale è di
          ammontare congruo e ragionevole.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          21. TRATTAMENTO DEI DATI PERSONALI
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          21.1. Le Parti dichiarano di essere state reciprocamente informate del
          trattamento dei dati personali per la conclusione ed esecuzione del
          presente Contratto, che dovrà avvenire nel rispetto della normativa
          vigente in materia, ivi incluso l’art. 13 del Regolamento (UE)
          2016/679 (il “GDPR”), di dare il consenso tale trattamento e di
          impegnarsi all’osservanza, ciascuna nel proprio ambito, della
          normativa vigente in materia di protezione dei dati personali, nonché
          di ogni e qualsiasi provvedimento adottato dal Garante per la
          protezione dei dati personali concernente i trattamenti dei dati
          personali.
          <br />
          21.2. A tal fine le Parti prendono atto e confermano reciprocamente
          che le stesse trattano i dati personali ognuna per le proprie finalità
          in qualità di autonomi titolari del trattamento dei dati personali, ai
          sensi’dell’art. 4, comma 1, n. 7 del GDPR, e saranno pertanto
          responsabili per l’adempimento dei relativi obblighi.
          <br /> 21.3. Le Parti si impegnano fin d’ora a tenersi reciprocamente
          indenni e manlevate da eventuali contestazioni che possano essere
          avanzate dagli interessati sulla base dei diritti loro attribuiti
          dalla normativa vigente per il trattamento illegittimo dei dati
          personali, nonché da ogni altra contestazione che possa essere mossa
          dall’Autorità Garante per la protezione dei dati personali.
          <br /> 21.4. Le Parti danno il loro consenso alla trasmissione dei
          loro dati personali esclusivamente ai soggetti ai quali la
          comunicazione è necessaria per legge o ai fini dell’esecuzione degli
          obblighi contrattuali.
          <br /> 21.5. Trascorsi 90 (novanta) giorni dalla data di scadenza del
          Contratto ovvero dalla data di risoluzione o cessazione dello stesso,
          per qualsivoglia causa, ciascuna Parte, fatto in ogni caso salvo
          quanto debba essere conservato ai sensi di legge, avrà l’obbligo di
          cancellare tutti i dati acquisiti nell’esecuzione del rapporto
          contrattuale.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          22. POLIZZA ASSICURATIVA
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          22.1. Le Parti danno atto che T.I.P.A.S. ha messo a disposizione del
          Committente, primadella data di inizio lavori, una idonea polizza di
          assicurazione con massimali congrui a coprire eventuali danni
          cagionati nel corso dell’esecuzione dei lavori, e per la
          responsabilità civile.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          23. COMUNICAZIONI
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          23.1. Qualsiasi comunicazione prevista o consentita ai sensi del
          presente Contratto dovrà essere effettuata ai seguenti recapiti:
          <br /> a) Appaltatore: e-mail: tecnico@tipas.it, telefono:
          0289450402,PEC: tipas@legalmail.it;
          <br /> b) Committente: e-mail: [ ], telefono: [_________.], PEC: [ ];
          . Eventuali variazioni dei recapiti sopra indicati dovranno essere
          prontamente comunicate per iscritto dalle Parti (con uno dei mezzi ivi
          indicati). In difetto di comunicazione della variazione dei recapiti,
          le comunicazioni si riterranno validamente avvenute se indirizzate ai
          recapiti sopra indicati o all’ultimo recapito validamente comunicato.
        </p>
        <h2 style={{ textAlign: "center", fontSize: "11px", color: "black" }}>
          24. MISCELLANEA
        </h2>
        <p style={{ fontSize: "10px", color: "black" }}>
          24.1. Il presente Contratto sostituisce e supera integralmente ogni
          precedente accordo stipulato tra le Parti, sia scritto che orale, in
          relazione a quanto quivi disciplinato.
          <br /> 24.2. Nessuna modifica cambiamento o aggiunta al presente
          Contratto sarà valida e vincolante tra le Parti, se non concordata per
          iscritto tra le Parti e da queste sottoscritta per approvazione.
          <br /> 24.3. L’invalidità di una delle previsioni di cui al presente
          Contratto non determinerà l’invalidità dell’intero Contratto. Le Parti
          si impegnano a sostituire la disposizione invalida o inefficace con
          una o più nuove disposizioni conformi alla legge che abbiano, per
          quanto possibile, contenuto e finalità equivalenti alla disposizione
          sostituita.
          <br /> 24.4. Il presente Contratto è regolato dalla, e dovrà essere
          interpretato ai sensi della, legge italiana.
          <br /> 24.5. Per quanto non espressamente previsto dal Contratto, le
          Parti rinviano a quanto previsto dal Codice Civile e dalle altre leggi
          vigenti in materia.
          <br /> 24.6. Per ogni controversia che dovesse insorgere circa
          validità, interpretazione, esecuzione, risoluzione del Contratto o,
          comunque ad esso attinente, le Parti, convengono di ricorrere in via
          esclusiva all’Autorità Giudiziaria del Foro di Milano.
          <br /> 24.7. Tutti i diritti di proprietà intellettuale, il know-how,
          i segreti commerciali, i documenti, gli elaborati tecnici, i programmi
          di calcolo e, in generale, tutte le informazioni messe a disposizione
          al Committente da parte dell’Appaltatore anche, ma non limitatamente,
          in relazione alle Attività di Progettazione sono e rimangono di
          proprietà esclusiva dell’Appaltatore.
          <br /> 24.8. Le Parti considerano il contenuto del Contratto, nonché
          delle comunicazioni reciprocamente trasmesse in esecuzione dello
          stesso, di natura confidenziale e riservata. Quanto sopra non si
          applica in relazione alle eventuali comunicazioni da effettuarsi in
          conformità a norme di legge o regolamentari o a seguito di eventuali
          richieste da parte delle autorità competenti.
          <br /> 24.9. Le Parti si danno reciprocamente atto di aver negoziato
          liberamente il presente Contratto e che, dunque, non trovano
          applicazione gli artt. 1341 e 1342 del Codice Civile.
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          Luogo, _____________.
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          Il Committente L’Appaltatore
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          (____________________ ) T.I.P.A.S.
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          L’Amministratore Unico
        </p>
      </Card>
    </div>
  );
});

export default ProfesionalAssignment;
