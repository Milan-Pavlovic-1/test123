import React, { forwardRef } from "react";
import { Card } from "antd";
import moment from "moment";
const ProfessionalBenefitAgreement = forwardRef((props, ref) => {
  const data = props.data;
  const client = props.client;

  return (
    <div className="container" style={{ padding: 50 }} ref={ref}>
      <Card style={{ border: "none" }}>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "11px",
            textAlign: "center",
            color: "black",
          }}
        >
          CONTRATTO di PRESTAZIONE PROFESSIONALE
        </h3>
        <p style={{ fontSize: "9px", color: "black" }}>
          L'anno ____________ giorno __ del mese di ____________,{" "}
        </p>
        <p style={{ fontSize: "9px", color: "black", textAlign: "center" }}>
          Tra
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          il sottoscritto, Sig. _______________,nato a ____________il
          ____________ C.F.: __________________residente in via
          ____________________, nel comune di ______________________ - C.A.P.:
          ___________,{" "}
          <span style={{ fontWeight: "bold" }}>Legale Rappresentante</span>{" "}
          della società _______________________ con sede in
          __________________nel comune di _______________- C.A.P.: ___________,
          C.F./P.IVA _________________di seguito denominato{" "}
          <span style={{ fontWeight: "bold" }}>"COMMITTENTE"</span>, e il Sig.
          Ing. _______________, nato a _______________il ______________- C.F.:
          ____________, residente in __via __________________nel comune di
          ______________________ ( ___) C.A.P.: ______________,{" "}
          <span style={{ fontWeight: "bold" }}>Legale Rappresentante</span>{" "}
          della società di Progettazione __________________con sede in
          _______________________________ nel comune di
          ______________________CAP __________________C.F./P.IVA
          _________________, di seguito denominato{" "}
          <span style={{ fontWeight: "bold" }}>"PROGETTISTA"</span>,
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          Ai fini del presente{" "}
          <span style={{ fontWeight: "bold" }}>
            ACCORDO QUADRO Il Committente
          </span>
          e <span style={{ fontWeight: "bold" }}>Il Progettista</span> sono
          indicate collettivamente come le “Parti” e individualmente come una
          “Parte”
        </p>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "11px",
            textAlign: "center",
            color: "black",
          }}
        >
          Premesso che:
        </h3>
        <p style={{ fontSize: "9px", color: "black" }}>
          <span style={{ fontWeight: "bold" }}> a) Le Parti</span> hanno avviato
          una rilevante attività, ciascuna nel proprio ambito di
          specializzazione, per rispondere alle opportunità imprenditoriali che
          si sono create in seguito alla approvazione del Decreto Rilancio,
          Legge 77 del 17/07/2020 agli artt. 119 – 121, noti come Ecobonus e
          Sismabonus; <br />{" "}
          <span style={{ fontWeight: "bold" }}>b) Il Committente</span> è una
          società dotata, da un lato di adeguata capacità finanziarie, avendo
          anche sottoscritto accordi con importanti istituzioni finanziarie per
          la Cessione del Credito d’Imposta, come previsto dalla L.77 del
          17/07/2020, e dall’altra, avendo stipulato contratti con Condomini e
          Proprietà per l’esecuzione dei lavori; <br />
          <span style={{ fontWeight: "bold" }}>c) Il Progettista</span> (
          presentazione azienda o professionista )
        </p>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "11px",
            textAlign: "center",
            color: "black",
          }}
        >
          TUTTO CIÓ PREMESSO SI CONVIENE E STIPULA QUANTO SEGUE
        </h3>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 1 Premesse e Allegati
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Le premesse e gli allegati costituiscono parte essenziale ed
            integrantedel presente Contratto con quanto segue ed il tutto
            costituisce, per espressa volontà delle Parti unico ed inscindibile
            contesto.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 2 Oggetto dell'incarico
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Con il presente Contratto,{" "}
            <span style={{ fontWeight: "bold" }}>Il Committente</span> affida al
            <span style={{ fontWeight: "bold" }}>Progettista</span> tutte le
            attività, in seguito dettagliatamente elencate.{" "}
            <span style={{ fontWeight: "bold" }}>Il Progettista</span> si
            obbliga ad eseguire tali attività nel rispetto delle prescrizioni
            tecniche emanate dal legislatore ed in coerenza con il crono
            programma d’esecuzione allegato ai singoli Contratti d’INCARICO per
            ogni specifico edificio da sottoporre alla progettazione. Le
            prestazioni professionali rispondono a quanto previsto dal D.M. 17
            giugno 2016 recante approvazione delle tabelle dei corrispettivi
            delle prestazioni di progettazione. Di seguito l’elenco delle{" "}
            <span style={{ fontWeight: "bold" }}>FASI </span>
            di progettazione con le relative prestazioni:
          </p>
          <p style={{ fontSize: "9px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}>FASE 1</span> (a carico del
            Condominio/Proprietario) <br /> 1. Relazione dell’Attestato di
            Prestazione Energetica{" "}
            <span style={{ fontWeight: "bold" }}>APE iniziale</span> virtuale.
            <br /> 2.{" "}
            <span style={{ fontWeight: "bold" }}>
              Pre-analisi di fattibilità{" "}
            </span>
            in cui verrà valutata la possibilità di operare in ambito
            “Superbonus” o di altri sistemi di agevolazione da parte dello stato
            detrazioni fiscali per l’edilizia (Bonus facciate, Bonus casa, Bonus
            energia, sisma ecc.).{" "}
            <span style={{ fontWeight: "bold" }}>Il Committente</span>{" "}
            formalizzerà con una specifica comunicazione al{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> in quale
            direzione dovrà essere avviata l’attività di consulenza. 
          </p>
          <p style={{ fontSize: "9px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}>FASE 2 </span> <br /> 1.
            <span style={{ fontWeight: "bold" }}>
              Progetto Preliminare
            </span>{" "}
            comprendenti le Relazioni, elaborati grafici come supporto allo
            studio di prefattibilità e fattibilità necessari per ottenere il
            miglioramento di due classi energetiche. <br /> 2.{" "}
            <span style={{ fontWeight: "bold" }}>Progetto Definitivo</span> con
            elaborati, rilievi e relazione energetica (ex Legge 10/91) per
            l’ottenimento del titolo edilizio (Scia, Cila ecc.) da parte
            dell’amministrazione comunale. <br /> 3.{" "}
            <span style={{ fontWeight: "bold" }}>Progetto Esecutivo </span>
            comprendente le relazioni generali e specialistiche, elaborati
            grafici, particolari esecutivi e costruttivi specifici (ponti
            termici), impianti elettrici e termoidraulici. <br />
            4.{" "}
            <span style={{ fontWeight: "bold" }}>
              Computo metrico estimativo
            </span>{" "}
            e quadro economico compreso il quadro dell’incidenza della
            percentuale della manodopera per le opere (1) relative alla
            categoria Edilizia E.20 del Decreto del Ministero di Giustizia di
            concerto con il Ministero delle Infrastrutture e dei Trasporti del
            17 giugno 2016 - G.U. n. 174 del 27/07/2016, nonché lo schema di
            contratto d’Appalto e il Cronoprogramma.
            <br /> 5. Redazione del{" "}
            <span style={{ fontWeight: "bold" }}>Piano per la Sicurezza</span> e
            Coordinamento in fase di progetto.
          </p>
          <p style={{ fontSize: "9px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}>FASE 3 </span> <br />
            6. <span style={{ fontWeight: "bold" }}>Direzione Lavori</span> e
            Assistenza al Collaudo <br /> 7.{" "}
            <span style={{ fontWeight: "bold" }}>Contabilità</span> e Misura dei
            Lavori <br /> 8.{" "}
            <span style={{ fontWeight: "bold" }}>Certificato</span> di regolare
            esecuzione <br /> 9.{" "}
            <span style={{ fontWeight: "bold" }}>Liquidazione</span> tecnico
            contabile <br />
            10.
            <span style={{ fontWeight: "bold" }}>Piano della Sicurezza</span> e
            Coordinamento in fase di esecuzione
          </p>
          <p style={{ fontSize: "9px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}>Fase 4 </span> <br />
            11. Stesura dell’{" "}
            <span style={{ fontWeight: "bold" }}>APE Finale</span> <br /> 12.
            Apposizione del{" "}
            <span style={{ fontWeight: "bold" }}>Visto di Conformità</span>{" "}
            sulle opere eseguite ed inserimento nella piattaforma{" "}
            <span style={{ fontWeight: "bold" }}>ENEA</span> <br />
            <span style={{ fontWeight: "lighter" }}>
              (1) Le voci di Elenco Prezzi saranno desunte dalle guide sui
              “Prezzi informativi dell’edilizia” edite dalla casa editrice DEI -
              Tipografia del Genio Civile odai prezziari delle opere edilizie
              della Provincia.
            </span>
          </p>
          <p style={{ fontSize: "9px", color: "black" }}>
            Sono escluse dal presente incarico le prestazioni non espressamente
            indicate nel presente Contratto.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 3 Documentazione di base
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}> Il Committente</span> si
            impegna a fornire al{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> la
            documentazione pregressa relativa all’edificio oggetto del presente
            contratto di consulenza e necessaria per l’espletamento
            dell'incarico, che in via indicativa viene elencato di seguito:
            <p
              style={{
                fontSize: "9px",
                color: "black",
                marginLeft: 10,
                fontStyle: "italic",
              }}
            >
              - estratto catastale; <br /> - certificato di destinazione
              urbanistica;
              <br /> - eventuali convenzioni gravanti sugli immobili; <br /> -
              vincoli di natura civilistica registrati e non registrati; <br />-
              apposizione di vincolo specifico;
              <br /> - elaborati di qualsiasi tipo riguardanti l’immobile
              (progetti, rilievi, prove geologiche, calcoli statici, ecc.){" "}
              <br />- precedenti pratiche edilizie; - provvedimenti della
              pubblica amministrazione <br /> - pratiche di sanatoria o di
              condono; <br /> - garantire l’accesso agli immobili per i rilievi
              di verifica della congruità urbanistica. <br />- asseverazione del
              Commercialista
            </p>
          </p>
        </div>
        <p style={{ fontSize: "9px", color: "black" }}>
          Nell’eventualità che{" "}
          <span style={{ fontWeight: "bold" }}>Il Committente</span> decida di
          delegare la ricerca dei suddetti documenti al{" "}
          <span style={{ fontWeight: "bold" }}>Progettista</span>, ciò sarà
          oggetto di un addendum economico al presente contratto che Il
          <span style={{ fontWeight: "bold" }}> Progettista</span> sottoporrà
          per approvazione prima dell’avvio delle attività.
        </p>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 4 - Modalità di espletamento dell'incarico
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}>Il Progettista </span>è tenuto
            a eseguire e produrre quanto necessario all'espletamento
            dell'incarico con competenza, perizia e diligenza.{" "}
            <span style={{ fontWeight: "bold" }}>Il Progettista</span>
            svolgerà l'incarico in piena autonomia tecnica ed organizzativa,
            senza alcun vincolo di subordinazione, avvalendosi, ove lo ritenga
            opportuno, del contributo di collaboratori di sua fiducia che
            personalmente dirigerà e di cui assume la piena responsabilità. Dal
            canto suo la Committente dovrà garantire al{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> tutto il
            supporto necessario sia per quel che concerne le scelte tecniche sia
            sull’uso dei materiali che gli verranno sottoposte, dando risposte
            inequivocabili e rapide, tali da non intralciare o ritardare i tempi
            di consegna della documentazione così come indicati nel
            cronoprogramma. Il Committente si dichiara consapevole ed informata
            del grado di complessità dell’incarico e di aver ricevuto tutte le
            informazioni utili circa gli oneri per lo svolgimento dell’incarico
            professionale ipotizzabili ad oggi. Il Committente per lo
            svolgimento dell’incarico porrà a disposizione l'insieme delle
            informazioni e dei documenti in suo possesso o reperibili che si
            rendessero necessari e rilevanti ai fini dell'esecuzione
            dell'incarico. Il Committente si impegna a fornire indicazioni e
            richieste al fine di permettere ai Professionisti di elaborarle ed
            integrarle, se possibile, all’interno del progetto. Indicazioni e
            ordini rivolti alle ditte, imprese od operai presenti in cantiere
            devono venire dati in esclusiva dai Professionisti incaricati della
            Direzione Lavori per non compromettere un andamento rapido e preciso
            dei lavori. Tutte le fatture per lavori eseguiti devono essere
            inoltrate ai Professionisti incaricati per la verifica.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 5 – Modifiche e integrazioni
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            1. Rientrano nell’oggetto dell’affidamento e il{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> si impegna
            ad eseguirle, le integrazioni ai Servizi affidati con il presente
            contratto che derivino dall’introduzione di modifiche normative
            anche successive alla presentazione degli elaborati, che comportino
            modifiche alle scelte progettuali. <br /> 2. Sono inoltre da
            considerarsi incluse nel presente contratto le attività di messa a
            punto delle scelte progettuali che fossero richieste dalle
            Amministrazioni Pubbliche preposte al controllo delle scelte
            adottate e fino al conseguimento dell’Obiettivo. Tali modifiche ed
            integrazioni non saranno oggetto di richieste di ulteriori
            corrispettivi a quanto pattuito. <br /> 3. Tutte le altre modifiche
            degli elaborati progettuali, a qualsiasi titolo richieste al
            <span style={{ fontWeight: "bold" }}>Progettista</span>{" "}
            successivamente alla loro predisposizione ed accettazione da parte
            del <span style={{ fontWeight: "bold" }}>Committente</span>, saranno
            invece compensate in aggiunta al corrispettivo del presente
            contratto e compensate sulla base di nuovo e specifico accordo tra
            il <span style={{ fontWeight: "bold" }}>Committente</span> e il
            Progettista, da definire preliminarmente all'avvio della singola
            attività di modifica o di integrazione.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 6 Termini per l'espletamento dell'incarico
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Le attività di consulenza e progettazione oggetto del presente
            contratto dovranno essere completate dal{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> e consegnate
            al <span style={{ fontWeight: "bold" }}>Committente</span> in
            conformità al Cronoprogramma. Il Committente si impegna dal canto
            suo a rispettare i termini concordati per le risposte dovute al{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> e
            propedeutiche al completamento delle attività
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 7 Determinazione del compenso
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Per le attività espletate in forza del presente incarico, il
            compenso da corrispondere al{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> viene
            calcolato in conformità Decreto del Ministero di Giustizia di
            concerto con il Ministero delle Infrastrutture e dei Trasporti del
            17 giugno 2016 (G.U. n. 174 del 27/07/2016), oltre all’IVA al 22% e
            gli altri eventuali contributi previsti dalla legge. Esso comprende
            e compensa, oltre all'onorario, ogni onere e spesa per
            l'espletamento dell'incarico nei tempi previsti, ivi inclusi
            spostamenti, sopralluoghi, collaboratori, personale, materiale
            d'ufficio, copie ed ogni altro onere. Eventuali modifiche, varianti,
            aggiunte che fossero richieste da{" "}
            <span style={{ fontWeight: "bold" }}> Committente</span> e/o che si
            rendessero necessarie, purché non conseguenti ad errori del
            <span style={{ fontWeight: "bold" }}> Professionista</span>, saranno
            compensate a parte secondo le medesime modalità di calcolo. Il
            compenso si intende fisso ed invariabile a tutti gli effetti, fatte
            salve le eventuali variazioni derivanti dalla diversa
            quantificazione a consuntivo dell'opera. Per la determinazione del
            compenso, <span style={{ fontWeight: "bold" }}>le Parti</span>{" "}
            concordano di assumere un valore dell’importo lavori, calcolato
            secondo i parametri massimi previsti dal Superbonus e/o dai
            prezziari regionali e provinciali. L’importo delle opere verrà
            stabilito di volta in volta per ogni edificio e regolarizzato da
            specifico{" "}
            <span style={{ fontWeight: "bold" }}>contratto d’INCARICO</span>. Il
            compenso verrà rettificato contestualmente all’approvazione del
            capitolato definitivo delle opere (comprensivo di eventuali
            varianti.) ed alla conseguente individuazione del relativo importo.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 8 Fatturazioni e pagamenti
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Il pagamento del corrispettivo di cui al precedente art. 8 verrà
            corrisposto del{" "}
            <span style={{ fontWeight: "bold" }}>Committente</span> al
            <span style={{ fontWeight: "bold" }}> Progettista</span> secondo le
            seguenti modalità: <br />• 30% alla consegna delle prestazioni
            previste al precedente Art. 2 – Fase 2 – Punti 1-2-3-4 <br />• 30%
            al 30 % dei lavori con SAL certificato   <br />• 35% al 60% dei
            lavori con SAL certificato <br />• 5 % Saldo alla fine dei lavori,
            previo eventuale conguaglio sull’ammontare definitivo delle opere
          </p>

          <p style={{ fontSize: "9px", color: "black" }}>
            <span style={{ fontWeight: "bold" }}>Il Committente</span> si
            impegna ad effettuare il pagamento al{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> entro 15
            (quindici) emissione della fattura da parte del{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span>. Qualora il
            pagamento non sia effettuato entro i termini di cui al presente
            articolo, decorrono, alla data di scadenza di detti termini, a
            favore del <span style={{ fontWeight: "bold" }}>Progettista</span>{" "}
            ed a carico del{" "}
            <span style={{ fontWeight: "bold" }}>Committente</span> gli
            interessi di cui all'art. 5 del D. Lgs. 9 ottobre 2002, n.231. In
            caso il ritardato pagamento si protragga oltre il termine di 30 gg,
            Il
            <span style={{ fontWeight: "bold" }}>Progettista</span> avrà diritto
            a sospendere le attività ed a richiedere la risoluzione del
            contratto nonché il saldo dell’intera prestazione.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 9 Diritto di recesso:
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Il Committente può recedere dal contratto in qualsiasi momento a
            mezzo PEC o raccomandata A.R., salvo il pagamento delle seguenti
            indennità:
            <br /> in caso di determinazione del compenso a forfait, il
            Committente dovrà corrispondere l’intero importo concordato sopra
            delle fasi concluse, come definite dal punto 4 del presente
            contratto, oltre all'intero importo della fase in corso. I
            Professionisti hanno diritto di recedere dall’incarico in qualsiasi
            momento, qualora ritengano di non poter assumere le responsabilità
            dell’opera, sotto il profilo statico o estetico, derivante da
            modifiche al progetto pretese dal Committente, ovvero dovessero
            riscontrare difformità dell’opera rispetto alla normativa
            urbanistica o a disposizione di legge a loro non imputabili, con un
            preavviso di 30 giorni. Il recesso da parte dei Professionisti non
            dà diritto a qualsivoglia indennità, penale e/o risarcimento danni a
            favore del Committente.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 10 Diritti d'autore e proprietà degli elaborati originali
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            La proprietà intellettuale ed i relativi diritti d'autore del
            progetto e di quanto altro rappresenta oggetto del presente
            contratto sono riservati al{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span>, malgrado
            l'avvenuto pagamento del relativo compenso da parte del{" "}
            <span style={{ fontWeight: "bold" }}>Committente</span>, a norma
            degli artt. 2575, 2576, 2577, 2578 del Codice Civile, della legge
            633/41 “protezione dei diritti d’autore e di altri diritti connessi
            al suo esercizio” e successive modifiche ed integrazioni. Il
            <span style={{ fontWeight: "bold" }}>Progettista</span> ha diritto
            di pubblicare tipi e fotografie dell'opera di cui è autore; il
            <span style={{ fontWeight: "bold" }}>Committente</span>, per se,
            eredi ed aventi causa, rilascia fin da ora il proprio consenso alla
            pubblicazione, rinunciando ad ogni corrispettivo e/o indennità,
            fermo restando in ogni caso, il dovere del{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span> di garantire
            al <span style={{ fontWeight: "bold" }}>Committente</span>{" "}
            l'assoluta riservatezza dei dati relativi alla proprietà e alla
            ubicazione dell'intervento che non saranno in alcun modo resi noti,
            fatta salva esplicita autorizzazione del
            <span style={{ fontWeight: "bold" }}>Committente </span>.
            <span style={{ fontWeight: "bold" }}> Il Committente</span> che
            intendesse rendere pubblica l'opera progettata dall'architetto è
            tenuto a citare il nome del{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span>, salvo
            diversa disposizione dello stesso.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 11 Disposizioni relative alla privacy
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Ai sensi e per gli effetti dell'art. 13 del D.Lgs. n. 196/2003
            (Codice in materia di protezione dei dati personali), il{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span>
            informa il <span style={{ fontWeight: "bold" }}>
              Committente
            </span>{" "}
            che il trattamento dei dati che Lo riguardano sarà improntato ai
            principi di correttezza, liceità e trasparenza e di tutela della Sua
            riservatezza e dei suoi diritti. Il{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span>
            dichiara inoltre di essere stato informato dei soggetti, delle
            modalità e finalità di trattamento dei propri dati da parte del
            <span style={{ fontWeight: "bold" }}>Committente</span> e di essere
            a conoscenza dei diritti di cui all'art. 7 del medesimo D.Lgs. Con
            la sottoscrizione del presente contratto, il
            <span style={{ fontWeight: "bold" }}> Progettista</span> esprime il
            consenso affinché il{" "}
            <span style={{ fontWeight: "bold" }}> Committente</span> raccolga,
            conservi, utilizzi i dati di cui verrà in possesso ai fini contabili
            e fiscali connessi con l'adempimento del presente contratto.
            Autorizza altresì il
            <span style={{ fontWeight: "bold" }}> Committente</span> a
            trasmettere tali dati a terzi qualificati, per adempimenti di legge
            e contrattuali. Il{" "}
            <span style={{ fontWeight: "bold" }}>Progettista</span>
            si riserva di demandare, in funzione di supporto alla normale
            attività di elaborazione lo svolgimento di particolari e/o
            specifiche operazioni a soggetti esterni che acquisiranno e/o
            elaboreranno dati esclusivamente per le finalità connesse alla
            costituzione, gestione ed esecuzione dei lavori di cui all'incarico
            conferito.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 12 Controversie e foro competente
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Tutte le controversie che dovessero insorgere tra le Parti
            contraenti in relazione al presente contratto, comprese quelle
            inerenti alla sua validità, efficacia, interpretazione, esecuzione e
            risoluzione, saranno deferite ad “Arbitrato non Rituale”, in
            conformità al Regolamento di procedura della Camera di conciliazione
            ed arbitrato della Camera di Commercio di MILANO che le parti
            espressamente dichiarano di conoscere ed accettare, in particolare
            per quanto riguarda il deferimento della decisione ad arbitro
            singolo e le modalità di designazione del medesimo. L'Arbitro
            deciderà in via irrituale, secondo diritto/equità, senza formalità e
            regolando lo svolgimento del procedimento arbitrale nel modo che
            riterrà più opportuno, nel rispetto del principio del
            contraddittorio. Le parti si impegnano a dare pronta e puntuale
            esecuzione alla decisione dell'arbitro o degli arbitri, cui sin
            d'ora attribuiscono la stessa efficacia vincolante della loro stessa
            volontà contrattuale.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: "bold", color: "black", fontSize: "11px" }}>
            Art. 13 Disposizioni finali
          </h5>
          <p style={{ fontSize: "9px", color: "black" }}>
            Per quanto non espressamente convenuto nella presente convenzione,
            le parti fanno espresso riferimento alle norme contenute nel Codice
            Civile e nelle leggi che regolano l’esercizio della professione. Nel
            caso di nullità di una o più delle presenti disposizioni per
            contrasto con norme legislative inderogabili e/o in contrasto con
            norme deontologiche, tali disposizioni si intenderanno di diritto
            sostituite, nei soli limiti del contrasto, da quanto
            legislativamente o deontologicamente previsto. Per deroghe o
            modifiche al presente contratto le parti concordano la forma scritta
            a pena di nullità letto, confermato e sottoscritto. <br />{" "}
            ____________, lì __/__/2021
          </p>
        </div>
        <p style={{ fontSize: "11px", color: "black", fontWeight: "bold" }}>
          Il Committente ________________________________
        </p>
        <p style={{ fontSize: "11px", color: "black", fontWeight: "bold" }}>
          Il Progettista ________________________________
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          <span style={{ fontWeight: "bold" }}>Le Parti</span> si danno
          reciprocamente atto che il presente contratto è frutto di negoziazione
          per ogni singola clausola, non trattandosi di modulo o formulario
          prestampato. Ai sensi e per gli effetti degli artt. 1341 e 1342 del
          Codice Civile tuttavia, al fine di eliminare qualsivoglia dubbio
          interpretativo, si approvano espressamente i seguenti punto di
          contratto: 5. (Termini di pagamento; 6. (Diritto di recesso); 7.
          (Responsabilità dei Professionisti); 9. (Diritti d’autore){" "}
        </p>
        <p style={{ fontSize: "11px", color: "black", fontWeight: "bold" }}>
          Il Committente ________________________________
        </p>
        <p style={{ fontSize: "11px", color: "black", fontWeight: "bold" }}>
          Il Progettista ________________________________
        </p>
      </Card>
    </div>
  );
});

export default ProfessionalBenefitAgreement;
