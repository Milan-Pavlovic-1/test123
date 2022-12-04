import React, { forwardRef } from "react";
import { Card } from "antd";
import LOGO from "../../../../assets/svg/templogo4.png";

import "./templates.css";
import moment from "moment";
const Contract = forwardRef((props, ref) => {
  const data = props.data;
  const client = props.client;

  return (
    <div className="container" style={{ padding: 50 }} ref={ref}>
      <Card style={{ border: "none" }}>
        <div>
          <img src={LOGO} alt="logo" width={100} />
        </div>
        <h6 style={{ textAlign: "center", color: "black", fontSize: "9px" }}>
          T.I.P.A.S. Srl
        </h6>
        <h6
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          CONTRATTO DI APPALTO
        </h6>
        <h6
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "10px",
            fontWeight: "bold",
            marginTop: 30,
          }}
        >
          Tra
        </h6>
        <p style={{ fontSize: "10px", color: "black" }}>
          <span style={{ fontWeight: "bold" }}> T.I.P.A.S. SRL</span> con sede
          in Via Vincenzo Monti 52 Rho (MI) 20017 Codice Fiscale partita IVA n.
          11337860966 pec: tipas@legalmail.it qui rappresentata nella persona
          del proprio legale rappresentante Aldo Fusar Poli, nato a Rho (MI) il
          18/11/1973 di seguito denominata{" "}
          <span style={{ fontWeight: "bold" }}> Appaltante</span> in virtù del
          mandato di incarico ricevuto da ____________________ denominato in
          seguito per brevità la Committente
        </p>
        <h6
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "10px",
            fontWeight: "bold",
            marginTop: 30,
          }}
        >
          e
        </h6>
        <p style={{ fontSize: "10px", color: "black" }}>
          l'Impresa ____________________ con sede legale in
          ____________________. CAP ____________________ Via
          ____________________. N ___________ P IVA ____________________ pec:
          ___________. nella persona del proprio Amministratore legale
          ____________________. nato a ____________________. denominato
          Appaltatore.
        </p>
        <h6
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "10px",
            fontWeight: "bold",
            marginTop: 30,
          }}
        >
          Premesso che
        </h6>
        <p style={{ fontSize: "10px", color: "black" }}>
          La Società Appaltatrice opera nel settore dell’
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          La società ___________. è coinvolta nell’espletamento del presente
          contratto (il “Contratto”); Su richiesta dei Committenti, la Società
          Appaltatrice ha predisposto il Contratto per la realizzazione di
          interventi volti ad effettuare lavori di riqualificazione energetica
          beneficiando delle detrazioni di superbonus 110 % e o sisma bonus 110%
          di cui al DL luglio 2020
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          Gli interventi oggetto del presente Contratto (gli “Interventi”), sono
          riportati nei computi metrici allegati;
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          Gli Interventi indicati, a realizzarsi, usufruiscono delle detrazioni
          fiscali c.d. ___________.” Legge n. 34/2020 e ss. mm. i. legge di
          bilancio 2021 (legge n. 178/2020), che sono rese disponibili dai
          committenti a favore della Società Appaltatrice con il sistema dello
          “sconto in fattura”.
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          I Committenti verseranno, quindi, soltanto il 10% dell’importo
          praticato in fattura;
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          Gli Interventi saranno eseguiti presso il fabbricato in ___________
          alla via ___________.
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          La Società Appaltatrice con il presente contratto si impegna a:
          <p style={{ fontSize: "10px", color: "black", marginLeft: 20 }}>
            • ad effettuare gli interventi di cui ai computi metrici allegati
            del presente contratto;
            <br /> • garantire, per 24 mesi dalla data di esecuzione dei lavori
            effettuati, la manutenzione delle opere realizzate; <br /> •
            manlevare I Committenti da ogni responsabilità per danni durante
            l’esecuzione dei lavori; A loro volta, I Committenti si impegnano,
            tra l’altro, a: <br /> • farsi carico delle spese per gli incarichi
            conferiti ai Tecnici progettista, direttore Lavori, coordinatore
            Sicurezza CSP e CSE; <br /> • mettere a disposizione della Società
            Appaltatrice le aree dove saranno eseguiti gli Interventi
          </p>
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          L’ Appaltatore con la sottoscrizione del presente contratto si è
          dichiarato disposto ad assumere l’appalto per l'esecuzione dei lavori
          di straordinaria manutenzione relativi alla esecuzione dei lavori
          descritti nella relazione tecnica allegata al relativo capitolato All.
          A) per € _____________
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          - L’ appaltatore dichiara di essere iscritto presso la C.C.I.A.A. al
          n___________.. del Registro Imprese e al n del REA ___________ e di
          disporre di capitali, di idonea organizzazione, di personale,
          macchinari ed attrezzature e di quant'altro necessario all'esecuzione
          dei lavori affidati con il presente contratto per garantire
          l'esecuzione a regola d'arte delle opere appaltate con gestione a
          proprio rischio e con organizzazione dei mezzi necessari; <br />-
          L’Appaltatore dichiara di essere intestatario delle seguenti posizioni
          assicurative: __________________________
        </p>
        <p style={{ fontSize: "10px", color: "black" }}>
          TUTTO CIÒ PREMESSO SI CONVIENE TRA LE PARTI LA STIPULA DEL PRESENTE
          CONTRATTO COSTITUITO DALL’INSIEME DEI SEGUENTI ARTICOLI ED ALLEGATI
        </p>
        <h6
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "9px",
            fontWeight: "bold",
          }}
        >
          Tutto ciò premesso, le Parti convengono e stipulano quanto appresso:
        </h6>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            1 - Premesse
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Le premesse costituiscono parte integrante e sostanziale del
            presente Contratto.
          </p>
          <h6 style={{ color: "black", fontSize: "9px" }}>
            PREMESSE E DEFINIZIONI
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Le premesse e gli allegati sono parte integrante ed inscindibile del
            presente Contratto.
          </p>
          <p style={{ fontSize: "10px", color: "black" }}>
            Qui di seguito si riportano le definizioni principali usate nel
            Contratto:
            <p
              style={{
                fontSize: "10px",
                color: "black",
                marginLeft: 20,
                lineHeight: 3,
              }}
            >
              • Aree (o Sito): sono le aree dell’esistente edificio oggetto
              degli Interventi; <br /> • Contratto: il presente contratto;
              <br /> • Coordinatore per la sicurezza: Figura di riferimento dei
              Committenti incaricato dell’esecuzione dei compiti di cui
              all’articolo 91 comma 1 lettera a del D. Lgs. 81/08; <br /> •
              Credito d’Imposta{" "}
              <span style={{ fontWeight: "bold" }}>
                (anche, brevemente, “CdI”): indica, ove non diversamente
                specificato, le detrazioni di sconto fiscale- Bonus Facciata
                90%);
              </span>{" "}
              <br />
              • Data di Avvio Lavori: indica la data di inizio dei lavori come
              riportato nel Titolo edilizio consegnato all’UTC del Comune di
              Acerra (CIL per intervento di manutenzione ordinario) • Decreto 81
              indica il D.Lgs. 81/2008 Testo Unico in materia di tutela della
              salute e della sicurezza nei luoghi di lavoro; <br /> • Direttore
              dei Lavori: Figura di riferimento dei Committenti per la
              realizzazione degli Interventi;
              <br /> • Interventi: indica gli interventi previsti nel presente
              Contratto; <br /> • Lavori Agevolabili: indica i lavori, inclusi
              negli Interventi, che possono essere ammessi alle detrazioni
              fiscali; <br /> • Lavori Non Agevolabili: indica i lavori, inclusi
              negli Interventi, che non possono essere ammessi alle
              agevolazioni; <br />• Piano Operativo di Sicurezza: indica il
              piano operativo di sicurezza da redigersi da parte della Società
              Appaltatrice prima della Fase di Esecuzione, composto dai piani
              operativi di sicurezza preparati sia dalla Società Appaltatrice
              che da altri Subappaltatori relativamente alle Opere di propria
              competenza, ai sensi di quanto disposto nel Testo Unico Sicurezza
              ed in coerenza con il Piano di Sicurezza e Coordinamento, che
              dovrà essere approvato dal Coordinatore della Sicurezza per
              l’Esecuzione (nominato dai committenti) che potrà richiedere delle
              modifiche; <br /> • Responsabile dei Lavori: Figura di riferimento
              dei Committenti che svolgerà i compiti ad esso attribuiti ai sensi
              del D. lgs. 81/2008 Titolo IV;
            </p>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            2 - Oggetto
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Il presente Contratto ha ad oggetto i lavori straordinari relativi
            all’efficientamento energetico e o sismico dell’edificio sito in
            __________________________________ di cui al DL luglio 2020
          </p>
          <p style={{ fontSize: "10px", color: "black" }}>
            Analogamente costituiscono oggetto del presente contratto le
            seguenti ulteriori attività rese dalla Società Appaltatrice e
            strettamente connesse alla realizzazione degli interventi prima
            indicati:
            <p
              style={{
                fontSize: "10px",
                color: "black",
                marginLeft: 20,
                lineHeight: 3,
              }}
            >
              {" "}
              • realizzare gli Interventi di cui ai computi metrici allegati al
              presente contratto; <br />• garantire, per 24 mesi dalla data di
              eseguito collaudo dei lavori effettuati, la manutenzione delle
              opere realizzate; <br /> • manlevare I Committenti da ogni
              responsabilità per danni durante l’esecuzione dei lavori.{" "}
            </p>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            3 - Esecuzione del contratto
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Tutte le fasi lavorative dovranno essere eseguite da personale
            specializzato ed esperto con la sovrintendenza di un tecnico
            responsabile il cui nominativo dovrà essere comunicato per iscritto
            dall’<span style={{ fontWeight: "bold" }}>Appaltatore</span>
            all’<span style={{ fontWeight: "bold" }}>Appaltante</span> che,
            oltre alla responsabilità del coordinamento e della buona esecuzione
            dei lavori, dovrà attenersi alle disposizioni ed ordini di servizio
            della Direzione lavori. L’esecuzione dei lavori dovrà essere
            eseguita secondo quanto previsto nel Capitolato d'Appalto,
            <span style={{ fontWeight: "bold" }}> all A)</span> nel rispetto
            delle specifiche tecniche fornite dalla Direzione lavori. Si intende
            altresì compreso nel presente contratto ogni altro onere accessorio
            per lo svolgimento della commessa, nonché tutte le opere,
            somministrazioni ed attività, per dare completo, finito e
            collaudabile, sulla base delle vigenti normative italiane, ciò che
            costituisce l'oggetto del presente contratto.{" "}
            <span style={{ fontWeight: "bold" }}>L’Appaltante</span>, qualora
            fosse rilevato un ritardo quantificabile come superiore a un mese
            rispetto al cronoprogramma, all. D) al presente contratto,
            concordato con il l’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> e dovuto a
            causa imputabile esclusivamente a negligenza o colpa grave di
            quest’ultimo, l’
            <span style={{ fontWeight: "bold" }}>Appaltante</span> si riserva il
            diritto – anche al fine del mantenimento dei programmi – di eseguire
            direttamente o di fare eseguire da terzi le suddette prestazioni, in
            forma completa o parzializzata, imputando la spesa all’Appaltatore.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            4 - Norme regolanti l'appalto
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}>L’Appaltatore</span> accetta
            incondizionatamente tutti i documenti tecnici e/o amministrativi che
            regolano l'esecuzione dei lavori di cui in premessa nel rapporto tra
            <span style={{ fontWeight: "bold" }}>
              l'Appaltatore e l’Appaltante
            </span>
            , con particolare riferimento ai seguenti documenti che formano
            parte integrante del presente Contratto, negli aspetti da
            quest'ultimo non diversamente regolati:
            <p style={{ fontSize: "10px", color: "black", fontWeight: "bold" }}>
              • Capitolato Speciale di Appalto; All. A) <br /> • Elenco prezzi
              come descrizioni delle lavorazioni oggetto del presente contratto
              All. B) <br /> • Elaborati di progetto posti a base del contratto
              di appalto All. C) <br /> • Cronoprogramma All. D)
            </p>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            5 - Importo
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Il corrispettivo dell’appalto è determinato a corpo come meglio
            specificato nella documentazione tecnico-amministrativa allegata al
            presente contratto. L’importo complessivo (forfettario) dell’appalto
            ammonta a € _________ (euro__________) IVA inclusa Resta convenuto
            che eventuali integrazioni o stralci da cui derivano variazioni in
            aumento o diminuzione delle opere oggetto del presente contratto,
            non comporteranno nessuna modificazione dei prezzi unitari qui
            convenuti. I prezzi contrattualmente definiti sono proposti ed
            accettati dall’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> nella più
            completa ed approfondita conoscenza della quantità e del tipo di
            lavoro da svolgere.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            6 - Elenco Prezzi unitari
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            I lavori oggetto del presente Contratto verranno compensati a
            misura, secondo i successivi prezzi unitari di cui:
            <p
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "9px",
                marginLeft: 20,
              }}
            >
              • all’allegato A) Capitolato <br />• all’allegato B) Elenco prezzi
            </p>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            7 – Pagamenti
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Con le stesse cadenze di quelli emessi dall’
            <span style={{ fontWeight: "bold" }}>appaltante</span> verranno
            compilati, a cura dell'
            <span style={{ fontWeight: "bold" }}>Appaltatore</span>, gli Stati
            di Avanzamento, SAL) da sottoscriversi da entrambe le Parti.
          </p>
          <p style={{ fontSize: "10px", color: "black" }}>
            Si determineranno sulla base di misurazioni in contraddittorio, le
            quantità effettivamente eseguite dall’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span>, per il cui
            pagamento saranno applicati i prezzi unitari di cui all’allegato B)
            Elenco prezzi Prima dell’inizio dei lavori in oggetto, l’
            <span style={{ fontWeight: "bold" }}>Appaltante </span>
            corrisponderà all’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> le seguenti
            somme:
            <p
              style={{
                color: "black",
                fontSize: "9px",
                marginLeft: 20,
              }}
            >
              {" "}
              • Anticipo pari al 10 % dell’ammontare dell’intero appalto a
              titolo di anticipo, previo invio della documentazione certificante
              la messa a disposizione (ordinativo irrevocabile delle forniture
              dei materiali) di tutti i materiali.
              <br /> • Anticipo del 20% alla data di inizio lavori{" "}
            </p>
          </p>
          <p style={{ fontSize: "10px", color: "black" }}>
            Il pagamento successivo avverrà nella misura del 30% in base al
            corrispondente al SAL 60%, come da cronoprogramma del contratto di
            appalto.
            <br /> Il SAL summenzionato (60%) sarà oggetto di certificazione e
            asseverazione da parte di{" "}
            <span style={{ fontWeight: "bold" }}>
              asseveratori professionali
            </span>
            , come previsto dal decreto oggetto del presente contratto. <br />{" "}
            Quanto al saldo, questo verrà effettuato entro 30 gg fine mese data
            collaudo e relativo verbale di fine lavori. Si stabilisce fin d’ora
            che i pagamenti verranno suddivisi in n. 3 stadi di avanzamenti in
            base alla durata delle lavorazioni come da cronoprogramma{" "}
            <span style={{ fontWeight: "bold" }}>allegato D)</span>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            8 – Ritenuta a garanzia
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Ad ulteriore garanzia dell'esatto e puntuale adempimento del
            presente contratto, nonché della stretta osservanza di tutte le
            obbligazioni di natura salariale, previdenziale, contributiva ed
            infortunistica previste dalla vigente legislazione, l’
            <span style={{ fontWeight: "bold" }}>Appaltante </span>
            tratterrà a titolo di ritenuta sui SAL una somma pari al 5% a titolo
            di garanzia, somma che verrà corrisposta, a 30 giorni dalla consegna
            dei lavori a seguito dell’avvenuto collaudo e relativa asseverazione
            in assenza di contestazioni sui lavori eseguiti.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            9 - Revisione Prezzi
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Resta espressamente convenuto che i prezzi oggetto del presente
            contratto di appalto, resteranno fissi ed invariabili per tutta la
            durata dei lavori e non verranno quindi assoggettati a revisione
            prezzi alcuna, con espressa rinuncia da parte al disposto dell'art.
            1664 c.c., in quanto i prezzi concordati già compensano eventuali
            aumenti dei costi, dei materiali e della mano d'opera.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            10 - Sorveglianza dei lavori
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            L’<span style={{ fontWeight: "bold" }}>Appaltatore </span>deve
            attenersi alle disposizioni della Direzione Lavori dell’Appaltante
            in quanto documentate a quelle del Direttore di Cantiere. L’
            <span style={{ fontWeight: "bold" }}>Appaltatore </span>riconosce il
            potere di verifica dell'esecuzione dei lavori da parte dell'
            <span style={{ fontWeight: "bold" }}>Appaltante</span> e degli
            <span style={{ fontWeight: "bold" }}>
              {" "}
              Asseveratori in qualità di professionisti incaricati alla corretta
              esecuzione dei lavori di cui al decreto luglio 2020,
            </span>{" "}
            sia in corso d'opera ai sensi dell'art. 1662 c.c., sia
            all'ultimazione dei lavori.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            11 - Consegna dei lavori
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            La consegna dei lavori assunti dall’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> avverrà
            contemporaneamente a quella generale disposta dalla Stazione
            appaltante all'
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> ed il
            relativo verbale farà fede anche nel rapporto di appalto.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            12 - Tempi di esecuzione
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Il tempo utile concordato per l’esecuzione dei lavori come da
            Capitolato all A) e da cronoprogramma all D) al presente Contratto è
            di massimo mesi 3 naturali e consecutivi, computati dalla data del
            verbale di consegna principale di cui al precedente art. 11.
            <p style={{ fontSize: "10px", color: "black", marginLeft: 20 }}>
              • Per forniture e servizi: dalla data di sottoscrizione del
              presente contratto. <br /> • Per forniture e servizi: da altra
              data scelta dalle Parti.
            </p>
          </p>
          <p style={{ fontSize: "10px", color: "black" }}>
            All'ultimazione effettiva dei lavori verrà redatto, da parte dell'
            <span style={{ fontWeight: "bold" }}>Appaltante</span>, un apposito
            verbale in duplice copia sottoscritto anche dall’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span>. <br />{" "}
            Durante l’esecuzione degli Interventi tutte le aree oggetto dei
            lavori si intenderanno precluse per altri usi da parte dei
            Committenti che dovranno quindi provvedere a loro esclusiva cura e
            spese agli interventi per assicurare, ove necessari, i servizi
            normalmente erogati in tali aree e non più disponibili per l’intera
            durata dei lavori.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            13 - Penalità
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Per ogni giorno lavorativo di ritardo nella consegna delle opere
            rispetto al termine stabilito dall'allegato programma, dovuto a
            causa esclusivamente imputabile a negligenza o colpa grave dell’
            <span style={{ fontWeight: "bold" }}>Appaltatore </span>verrà
            applicata, anche a mezzo di compensazione sugli importi dovuti
            all’Appaltatore, una penale di{" "}
            <span style={{ fontWeight: "bold" }}>euro 200,00 al giorno</span>.
            Tale penale, nel suo ammontare complessivo, non potrà essere in ogni
            caso superiore al 10% del valore dell’importo del presente
            contratto, fatto salvo il diritto di rivalsa dell’
            <span style={{ fontWeight: "bold" }}>Appaltante</span> per maggior
            danno subito. Tale penale verrà regolarmente fatturata all’
            <span style={{ fontWeight: "bold" }}>Appaltatore </span>e trattenuta
            sui pagamenti a scadere, oltre al pagamento all'
            <span style={{ fontWeight: "bold" }}>Appaltatore </span>dal maggior
            danno da questi eventualmente subito e salva sempre l'eventuale
            risoluzione del Contratto per colpa dell’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span>.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            14 - Verifica
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            L'<span style={{ fontWeight: "bold" }}>Appaltante</span> si riserva
            il diritto di controllare in qualsiasi momento l'avanzamento dei
            lavori ai sensi dell'art. 1662 c.c. e di fissare congruo termine per
            il recupero dell'eventuale ritardo dell’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span>, qualora
            l'avanzamento delle opere non soddisfi il puntuale adempimento di
            quanto previsto nell'unito programma lavori. La verifica finale sarà
            effettuata entro 30 (trenta) giorni dalla loro ultimazione dandone
            regolare preavviso all’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span>. L'elenco
            degli eventuali vizi o manchevolezze da eliminare, verranno
            comunicate all’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span>
            stesso in forma scritta, con invito ad eliminarli entro termine
            concordato dalle parti al momento della redazione del verbale di
            ultimazione lavori; resta comunque inteso che l'accettazione
            definitiva di opere avverrà soltanto dopo il collaudo positivo
            effettuato da parte dell’
            <span style={{ fontWeight: "bold" }}>Appaltante</span> e dagli
            organi di asseverazione.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            15. Subappalto e cessione del credito
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Le parti convengono che il l’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span>, previa
            approvazione dell’
            <span style={{ fontWeight: "bold" }}>Appaltante</span> potrà a sua
            volta subappaltare i lavori previsti nel Capitolato all A) al
            presente contratto nella misura massima del 50%; sub appalto di cui
            l’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> manterrà
            ogni tipo di responsabilità nei confronti dell’
            <span style={{ fontWeight: "bold" }}>Appaltante</span> I Committenti
            autorizzano sin da ora la Società Appaltatrice ad avvalersi del
            subappalto solo per lavorazioni limitate, sia nel tipo che nella
            quantità, a società/imprese di sua fiducia. Il subappalto non
            comporta alcuna modificazione degli obblighi e degli oneri della
            società appaltatrice, che rimane l’unico e solo responsabile nei
            confronti dei Committenti. La Società appaltatrice si impegna a
            garantire che tutti i soggetti affidatari ai sensi del presente
            articolo saranno in possesso dei requisiti d'idoneità tecnico
            professionali per l'esercizio delle attività necessarie per la
            esecuzione dei lavori a norma del contratto.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            16 - Variazioni del contratto di appalto
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Tutte le variazioni debbono essere ordinate per iscritto. L'
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> non può
            introdurre variazioni ovvero addizioni a lavori assunti rispetto
            alle previsioni contrattuali. Ha però l'onere di eseguire ed
            adeguarsi scrupolosamente a tutte le variazioni ordinate
            espressamente e per iscritto dall’
            <span style={{ fontWeight: "bold" }}>Appaltante</span>.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            Art 17. OBBLIGHI DEI COMMITTENTI
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            I Committenti, a condizione che a sua volta la Società Appaltatrice
            rispetti gli obblighi di cui al successivo 3., con riferimento agli
            Interventi si impegnano verso la Società Appaltatrice:
            <p
              style={{
                fontSize: "10px",
                color: "black",
                marginLeft: 20,
                lineHeight: 2,
              }}
            >
              • ad ottenere le autorizzazioni, necessarie per poter procedere
              alla realizzazione degli Interventi presso il Sito; <br /> • a
              dare la piena collaborazione ed a fare tutto quanto in loro potere
              per l’efficace svolgimento dei lavori, fornendo tutti i consensi,
              le informazioni tecniche ed economiche e quant’altro necessario,
              nel più breve tempo possibile e, comunque, tali da non
              compromettere la riuscita del Contratto; <br /> • a rendere
              disponibili le aree dove saranno eseguiti gli Interventi e a
              consentirne la realizzazione presso le stesse aree; <br /> • a
              garantire la fornitura di energia e acqua per le attività di
              cantiere; <br /> • ad assumere a proprio carico, il compenso
              spettante ai tecnici (progettista, direttore dei lavori etc.){" "}
              <br /> • a pagare il prezzo degli Interventi secondo quanto
              stabilito nel presente Contratto;
              <br /> • a cedere in modo irrevocabile alla Società Appaltatrice
              ogni incentivo e/o agevolazione e/o beneficio connesso con gli
              Interventi; <br /> • a non apportare modifiche di qualsiasi natura
              ed entità agli Interventi senza l’autorizzazione da parte della
              Società Appaltatrice; <br /> • ad accettare che la Società
              Appaltatrice utilizzi come garanzie di prestazione quelle fornite
              dal/i costruttore/i dei materiali e/o degli apparati e/o dei
              dispositivi forniti e installati. Ai fini della conclusione del
              presente Contratto e dell’assunzione di tutte le obbligazioni qui
              previste, I Committenti dichiarano e garantiscono di avere pieni
              poteri a concludere ed eseguire il Contratto. In nessun modo
              potranno ricadere sulla Società Appaltatrice eventuali conseguenze
              pregiudizievoli derivanti da impugnative o azioni di terzi
              derivanti o connesse al Contratto e/o agli Interventi, in
              relazione alle quali I Committenti si impegnano a manlevare e a
              tenere indenne la Società Appaltatrice da qualsivoglia conseguenza
              pregiudizievole derivante da qualsivoglia azione o impugnativa da
              parte di terzi.
            </p>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            ART.18 OBBLIGHI DELLA SOCIETA’ APPALTATRICE
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            La Società Appaltatrice, a condizione che, a loro volta, I
            Committenti rispettino gli obblighi di cui al presente Contratto e
            in particolare di cui al precedente art.1, secondo quanto
            specificato, si obbliga verso i Committenti
            <p
              style={{
                fontSize: "10px",
                color: "black",
                marginLeft: 20,
                lineHeight: 2,
              }}
            >
              • a fornire ai Committenti, ove di propria competenza, la
              documentazione necessaria per le istanze di autorizzazione alla
              realizzazione degli Interventi; <br />• a realizzare gli
              Interventi secondo quanto riportato nei computi metrici allegati
              del presente contratto; <br /> • a redigere il Piano Operativo di
              Sicurezza, redatto ai sensi di quanto previsto dal Testo Unico
              Sicurezza, nonché a verificare e controllare tutti i Piani
              Operativi di Sicurezza di tutti i Subappaltatori che saranno
              incaricati, coordinandoli con il proprio Piano Operativo di
              Sicurezza, prima che questi vengano sottoposti al CSE per
              l’approvazione prevista dalla normativa vigente;
              <br /> • a mettere a disposizione dei Committenti le garanzie
              fornite dai costruttori dei materiali e/o degli apparati e/o dei
              dispositivi forniti. <br /> • a fornire l’assistenza Legale,
              amministrativa, tecnica e contabile necessaria per la corretta
              esecuzione delle pratiche riferite alla Cessione del credito
              d’imposta (Cdi), per il conseguimento di ogni autorizzazione
              amministrativa e/o di altro genere necessaria (diverse da quelle
              di cui all’art.1 che competono ai Committenti), per il supporto
              alle contabilizzazioni tecniche ivi compreso le relative e
              connesse certificazioni, per l’elaborazione, redazione e stipula
              contratti con i Committenti, i Tecnici e i Subappaltatori;a
              comunicare tempestivamente - ai sensi e per gli effetti della
              vigente normativa antimafia - di ogni variazione intervenuta nella
              propria composizione societaria nonché dell'eventuale insorgere di
              una o più delle cause ostative previste dall'art.
            </p>
            10 dall'art. 10 ter, L. 31 maggio 1965, n. 575, così come modificati
            dall'art. 3, L. 19 marzo 1990, n. 55; <br />
            ad applicare nei confronti dei dipendenti da essa adibiti alle
            lavorazioni da eseguirsi in adempimento del presente contratto e per
            il periodo per il quale essi sono addetti alle lavorazioni medesime,
            il Contratto Collettivo Nazionale di Lavoro in vigore e gli accordi
            locali integrativi del medesimo, corrispondendo conseguentemente ai
            lavoratori stessi il trattamento minimo inderogabile retributivo e
            normativo e assolvendo nei confronti degli Enti Previdenziali,
            Assicurativi e della Cassa Edile di Mutualità ed Assistenza tutti
            gli adempimenti previsti dalla legge e dai citati Contratti
            Collettivi; <br /> b) A provvedere annualmente all'avvenuto
            pagamento dei premi, relativi alla polizza R.C.T. di cui in premessa
            e ad inviare immediatamente alla committente copia delle denunce in
            caso di eventuali sinistri; <br /> c) Ad ammettere in cantiere
            soltanto i lavoratori propri dipendenti o autorizzati in forza di
            contratto di subappalto intervenuto con l’appaltatore, muniti di un
            documento di riconoscimento valido agli effetti di legge; <br /> d)
            A provvedere alla fornitura di tutti i mezzi, macchinari, ed
            attrezzature necessarie all'esecuzione dei lavori subappaltati nella
            quantità e qualità necessaria al rispetto dei tempi esecutivi
            previsti e che dovranno rispondere a tutte le prescrizioni richieste
            dalla normativa antinfortunistica.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            Art. 19 normativa speciale d.l. 34/2020
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            L’<span style={{ fontWeight: "bold" }}>Appaltatore</span> è reso
            edotto che il presente contratto viene sottoscritto ai fini della
            possibilità di usufruire del Superbonus 110% / Sismabonus 110% /
            Bonus facciate. L’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> è a
            conoscenza che il committente ha optato per lo sconto in fattura /
            cessione del credito in luogo dell’utilizzo diretto della
            detrazione.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            Art. 20 obblighi dell’Appaltatore
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            L’<span style={{ fontWeight: "bold" }}>Appaltatore</span> è reso
            L’Appaltatore dichiara di aver consegnato, preliminarmente alla
            sottoscrizione del presente contratto, tutta la documentazione
            necessaria per la verifica della propria idoneità tecnico
            professionale ai sensi del D. Lgs. 81/2008, tra cui il Durc ed i
            seguenti documenti: Durf, certificato White list o
            autocertificazione antimafia, contratto di assicurazione;
            <br />
            <span style={{ fontWeight: "bold" }}> a) L’Appaltatore </span>si
            impegna a rispettare le norme in materia fiscale, retributiva,
            contributiva, previdenziale e assicurativa contenute nelle
            disposizioni di legge e nel contratto collettivo nazionale e
            territoriale di riferimento
            <br />
            <span style={{ fontWeight: "bold" }}> b) L’Appaltatore</span>
            responsabile dell’inosservanza di tali adempimenti a pena di
            sospensione, da parte dell’
            <span style={{ fontWeight: "bold" }}>Appaltante</span>, del
            pagamento dei corrispettivi contrattuali maturati, sino a
            concorrenza del 10 % del valore complessivo dell’opera o del
            servizio ovvero per un importo pari all’ammontare delle ritenute non
            versate rispetto ai dati evidenziati nella comunicazione trasmessa
            all’<span style={{ fontWeight: "bold" }}>Appaltante</span>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            19 - Danni e responsabilità dell’appaltatore
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}>L’Appaltatore</span> assume la
            responsabilità dell’esatto adempimento della propria prestazione, a
            pena di risoluzione ex 1453 cc e delle opere eseguite fino al
            collaudo, e si impegna a garantire per 10 anni decorrenti dalla data
            dell’inizio dei lavori le opere con assicurazione postuma. La
            responsabilità dell’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> per
            eventuali danni alle opere ultimate o in corso di esecuzione è
            esclusa solo se sia provato che i danni medesimi dipendono da cause
            imputabili alla Appaltante o comunque non altrimenti evitabili dall’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> con il
            ricorso alla diligenza del buon padre di famiglia, permanendo in
            ogni caso sotto la sua responsabilità l'obbligo di prevedere ed
            usare tutti gli accorgimenti atti ad evitare danni provocati da ogni
            evento atmosferico anche a cantiere chiuso. L’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> dovrà essere
            in grado in ogni circostanza di provare di aver adottato ogni
            cautela necessaria per evitare l'evento dannoso. In caso di
            ritardata consegna dei lavori che comporti il mancato rispetto delle
            tempistiche richieste dalla normativa speciale in tema di incentivi
            fiscali è prevista una penale pari alla realizzazione dell’opera
            come da capitolato;
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            Art 20 PROCEDURA DI COLLAUDO DEI LAVORI
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Al termine della fase di realizzazione degli Interventi:
            <p
              style={{
                fontSize: "10px",
                color: "black",
                marginLeft: 20,
                lineHeight: 2,
              }}
            >
              • la Società Appaltatrice invierà al Direttore dei Lavori la
              comunicazione di “Pronto al Collaudo”; <br /> • Il Direttore dei
              Lavori convocherà la Società Appaltatrice per il Collaudo dei
              Lavori, via email; <br /> • nel caso in cui il Collaudo avesse
              esito negativo, il Direttore dei Lavori e il Responsabile di
              Commessa sottoscriveranno una lista di lavori da completare e/o da
              rieseguire (la “Punch List”) indicando il termine massimo entro
              cui tali lavori dovranno essere completati; una volta completati i
              lavori della Punch List, il processo riprenderà dal precedente
              punto A); <br /> • Con l’emissione del Verbale di Collaudo il
              presente Contratto avrà termine.
            </p>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            ART.21 CESSIONE DI Credito CONTRATTO
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Alla società appaltatrice è consentito di cedere i crediti derivanti
            da questo contratto, nel rispetto della normativa vigente. Il
            presente Contratto non può essere ceduto a pena di nullità.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            ART.22 CONDIZIONI COMPLEMENTARI
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Quanto non esplicitamente inserito nel presente Contratto non fa
            parte del Servizio da fornire ai Committenti.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            ART.23 CLAUSOLA RISOLUTIVA ESPRESSA
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Il presente contratto si intende automaticamente risolto qualora le
            prestazioni non siano adempiute con le modalità stabilite nei
            precedenti articoli
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            24 - Risoluzione del contratto
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Ferma restando l'applicazione dell'art. 1453 c.c. e dell'art. 1454
            c.c. è in facoltà dell'
            <span style={{ fontWeight: "bold" }}>Appaltante</span> di risolvere
            il contratto dietro semplice comunicazione all’
            <span style={{ fontWeight: "bold" }}>Appaltatore</span> ai sensi
            dell'art. 1456 c.c. in tutti i casi previsti dal presente contratto,
            nonché:
            <p
              style={{
                fontSize: "10px",
                color: "black",
                marginLeft: 20,
                lineHeight: 2,
              }}
            >
              a) quando l’
              <span style={{ fontWeight: "bold" }}>Appaltatore</span> si renda
              colpevole di frode e negligenza grave; <br /> b) quando per
              negligenza dell’
              <span style={{ fontWeight: "bold" }}>Appaltatore</span> o per
              inadempimento agli obblighi ed alle condizioni stipulate,
              l'avanzamento dei lavori non sia tale da assicurare il compimento
              nel termine prefissato dal programma, ovvero per rispettare il
              programma rischi di risultare compromessa la buona riuscita della
              opera; <br /> c) quando l’
              <span style={{ fontWeight: "bold" }}>Appaltatore</span>, a causa
              di divergenze in ordine alla condotta tecnica ed alla contabilità
              dei lavori o per la pendenza di contestazioni giudiziarie ovvero
              arbitrali o per qualsiasi altra causa, sospenda o ritardi
              l'esecuzione delle opere; Nel caso di risoluzione spetterà all’
              <span style={{ fontWeight: "bold" }}>Appaltatore</span> soltanto
              il pagamento di lavori regolarmente eseguiti salvo il risarcimento
              dei danni che eventualmente l'
              <span style={{ fontWeight: "bold" }}>Appaltante</span> dovesse
              subire per il completamento dei lavori, nonché, per ogni altro
              titolo conseguente all'inadempienza o alla negligenza dell’
              <span style={{ fontWeight: "bold" }}>Appaltatore</span>.
            </p>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            25 – Comunicazioni
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Le comunicazioni fra Appaltante e Appaltatore si conviene verranno
            effettuate esclusivamente via PEC ai rispettivi indirizzi:
            <p
              style={{
                fontSize: "10px",
                color: "black",
                marginLeft: 20,
                lineHeight: 2,
              }}
            >
              Appaltante pec: tipas@legalmail.it <br /> Appaltatore pec:
              ____________________
            </p>
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            26 - Legge applicabile e Foro competente
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Eventuali controversie che insorgessero nell'interpretazione o
            nell'esecuzione del presente contratto o ad esse connesse ivi
            compreso i pagamenti, saranno devolute alla giurisdizione del Foro
            di Milano. Il presente contratto è regolato dalla Legge italiana.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            ART.27 TUTELA DELLA PRIVACY E RISERVATEZZA
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Ai sensi e per gli effetti di quanto disposto dal T.U. sulla privacy
            (tutela delle persone e di altri soggetti rispetto al trattamento
            dei dati personali), I Committenti e la Società Appaltatrice
            dichiarano che tutti i dati e le informazioni trasmessi dalle Parti
            saranno raccolti e trattati nella propria banca dati al fine di
            consentire una corretta gestione del rapporto.
            <br />
            Le Parti assumono formale impegno di riservatezza relativamente a
            tutte quelle informazioni acquisite e/o scambiate in virtù del
            presente contratto. Tale patto di riservatezza è da intendersi
            nell’accezione più ampia ed è esteso a tutti i dipendenti e
            collaboratori terzi delle Parti.
          </p>
        </div>
        <div>
          <h6 style={{ color: "black", fontSize: "9px", fontWeight: "bold" }}>
            28 - Rinvio al Codice Civile
          </h6>
          <p style={{ fontSize: "10px", color: "black" }}>
            Per quanto non è espressamente previsto e derogato dal presente
            contratto di subappalto, valgono, in quanto applicabili le norme di
            cui all'art. 1655 c.c. e ss. e le altre norme di legge applicabili.
          </p>
          <p style={{ fontSize: "10px", color: "black" }}>
            _____________ , lì ______________
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "10px", color: "black" }}>L'Appaltante</p>
            <p style={{ fontSize: "10px", color: "black" }}>Il Subappaltante</p>
          </div>
          <p style={{ fontSize: "10px", color: "black" }}>
            __________________________________
          </p>
          <p style={{ fontSize: "10px", color: "black" }}>
            __________________________________
          </p>
        </div>
      </Card>
    </div>
  );
});

export default Contract;
