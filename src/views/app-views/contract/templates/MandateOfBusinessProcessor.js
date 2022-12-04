import React, { forwardRef } from "react";
import { Card } from "antd";
import moment from "moment";
const MandateOFBusinessProcessor = forwardRef((props, ref) => {
  const data = props.data;
  const client = props.client;

  return (
    <div className="container" style={{ padding: 50 }} ref={ref}>
      <Card style={{ border: "none" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "black",
            fontWeight: "bold",
          }}
        >
          <h1 style={{ fontSize: "16px", color: "black" }}>T.I.P.A.S. srl</h1>
          <span style={{ fontSize: "11px" }}>
            Sede legale via Monte Rosa n.86 - 20149 Milano{" "}
          </span>
          <span style={{ fontSize: "11px" }}>
            Sede operativa via Vincenzo Monti – 20017 Rho (MI){" "}
          </span>
        </div>
        <div style={{ marginTop: 40 }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginBottom: 30,
              color: "black",
            }}
          >
            MANDATO DI PROCACCIATORE D’AFFARI
          </h1>
          <p style={{ color: "black", fontSize: "11px" }}>
            Con la presente scrittura la soc. T.I.P.A.S. srl con sede on legale
            in via Monte Rosa n.86 Milano e sede operativa in via Vincenzo Monti
            20017 Rho (MI), (d’ora innanzi TIPAS)
          </p>
          <p style={{ color: "black", fontSize: "11px" }}>
            Il sig ………………………. Nato a …………………………………. e residente in via n.. P.IVA
            …………………………. C.F. d’ora innanzi “il Procacciatore” .
          </p>
          <div>
            <h4
              style={{ color: "black", fontSize: "11px", fontWeight: "bold" }}
            >
              PREMESSE
            </h4>
            <div style={{ paddingInline: 20, fontSize: "11px" }}>
              <div style={{ display: "flex", alignItems: "start" }}>
                <span style={{ color: "black", marginRight: "10px" }}>a)</span>
                <p style={{ color: "black" }}>
                  Premesso che TIPAS, in merito al Decreto Legge 19 maggio 2020
                  n. 119 convertito in legge il 17 Luglio 2020 che ha introdotto
                  la possibilità a soggetti fiscali, aventi a vario titolo
                  diritti su immobili residenziali (denominato SUPERBONUS 110%),
                  si assume il ruolo di GENERAL CONTRACTOR previsto nel decreto
                  di cui sopra
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "start" }}>
                <span style={{ color: "black", marginRight: "10px" }}>b)</span>
                <p style={{ color: "black" }}>
                  Che il Procacciatore è a conoscenza di soggetti fiscali
                  interessati ad usufruire dei benefici del decreto in oggetto e
                  pertanto si è reso disponibile, dopo aver seguito un WEBINAR,
                  informativo organizzato da TIPAS a:
                  <p style={{ color: "black", marginLeft: "10px" }}>
                    - siglare il presente contratto e a promuovere l’azione di
                    GENERAL CONTRACTOR di TIPAS attraverso la raccolta del
                    documento “ADESIONE PRELIMINARE AL SUPERBONUS{" "}
                    <span style={{ fontWeight: "bold" }}> (allegato A)</span>
                    inclusa la relativa documentazione nello stesso richiamata,
                    da parte di interessati che, usufruendo delle agevolazioni
                    previste nel decreto, manifestano la volontà di accedere
                    alla cessione del credito di imposta, maturato in seguito
                    agli interventi di riqualificazione energetica inerenti
                    immobili residenziali rappresentati da singole unità
                    abitative e/o da piccoli condomini.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4
              style={{ color: "black", fontSize: "11px", fontWeight: "bold" }}
            >
              TUTTO CIO PREMESSO SI CONVIENE CHE
            </h4>
            <div style={{ paddingInline: 20, fontSize: "11px" }}>
              <div style={{ display: "flex", alignItems: "start" }}>
                <span style={{ color: "black", marginRight: "10px" }}>1)</span>
                <p style={{ color: "black" }}>
                  MANDATO - Il presente MANDATO sarà svolto in piena autonomia
                  di tempo, mezzi e spese e i collaboratori di cui il
                  Procacciatore dovesse fruire, saranno a totale carico dello
                  stesso. Il mandato prevede che il Procacciatore provveda alla
                  raccolta della firma dell’accordo di adesione. Il
                  Procacciatore potrà occasionalmente, e senza vincolo alcuno,
                  procacciare affari per la Società, contattando liberamente i
                  clienti potenziali ubicati nel territorio indicato dalla
                  Società e segnalando alla Società coloro che riterrà abbiano
                  interesse alla conclusione di affari con la Società. Il
                  Procacciatore dovrà trasmettere, ogni mese, il rendiconto dei
                  rapporti i con i possibili clienti anche quando non siano
                  sfociati in alcun affare con la Società.
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "start" }}>
                <span style={{ color: "black", marginRight: "10px" }}>2)</span>
                <p style={{ color: "black" }}>
                  DURATA - Il presente contratto si intende a tempo determinato
                  non oltre il 31 luglio 2022, salvo specifico accordo scritto
                  fra le parti
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "start" }}>
                <span style={{ color: "black", marginRight: "10px" }}>3)</span>
                <p style={{ color: "black" }}>
                  Corrispettivo
                  <br /> Le Parti convengono che, per ogni singolo affare
                  direttamente procurato e andato a buon fine, il Procacciatore
                  avrà diritto di percepire dalla Società una provvigione pari
                  al 5% maturata sul fatturato andato a buon fine; ove per buon
                  fine si intende l’incasso da parte di TIPAS del credito ceduto
                  agli enti o istituti preposti, credito maturato per gli
                  interventi di riqualificazione energetica dell’immobile
                  oggetto di intervento. Le provvigioni verranno liquidate da
                  TIPAS entro 30 gg a far data dall’incasso del credito ceduto.
                  Il Procacciatore espressamente riconosce che ogni e più
                  duraturo beneficio che possa derivare alla Società da tale sua
                  attività non sarà oggetto di corrispettivo ulteriore Nessun
                  compenso competerà al Procacciatore per la segnalazione di
                  nominativi da parte del Procacciatore con i quali la Società a
                  proprio insindacabile giudizio si sia rifiutata di concludere
                  un affare.
                </p>
              </div>
            </div>
          </div>
          <p style={{ color: "black", fontSize: "11px" }}>
            La liquidazione delle provvigioni avverrà entro 30 gg a far data
            dall’incasso del credito ceduto.
            <br /> (indicare tempi e modalità di pagamento delle provvigioni)
          </p>
          <p style={{ color: "black", fontSize: "11px" }}>
            Spese
            <br /> Il procacciatore svolgerà la propria attività autonomamente e
            ne sopporterà in via esclusiva ogni onere e spesa.
          </p>
          <div>
            <span style={{ color: "black", fontSize: "11px" }}>
              Modalità di svolgimento dell'attività
            </span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il Procacciatore svolgerà la propria attività in piena
              indipendenza ed autonomia, con tutta la dovuta diligenza, perizia
              e cura, senza alcun obbligo di attività minima né obblighi di
              risultato minimi.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il Procacciatore svolgerà la propria attività con piena autonomia
              di azione, di tempo, di organizzazione, senza alcun vincolo, né di
              subordinazione né di dipendenza, né di agenzia, né di associazione
              o società o altro rapporto stabile di collaborazione con la
              Società. In particolare, si esclude espressamente la sussistenza
              di un rapporto di agenzia, non avendo il Procacciatore alcun
              obbligo di procacciare gli affari per conto della Società.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Al Procacciatore non è attribuito alcun potere di rappresentanza
              per la Società; nessuna comunicazione e/o dichiarazione del
              Procacciatore può vincolare la Società ed esse non possono, di
              conseguenza, comportare effetti giuridicamente vincolanti per la
              Società nei confronti di terzi.
            </p>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "black", fontSize: "11px" }}>
              Obblighi del Procacciatore
            </span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il Procacciatore non deve tenere comportamenti contrari alla
              normale correttezza nei confronti della Società e/o di terzi, o
              tenere comportamenti comunque idonei a pregiudicare l'immagine
              della Società. Al Procacciatore è espressamente vietato fare
              affermazioni in qualunque modo, e anche indirettamente, lesive
              dell'onorabilità e del buon nome della Società e/o della sua
              attività.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Stante il suo carattere personale, nello svolgimento dell'attività
              il Procacciatore non potrà farsi assistere da propri consulenti
              e/o collaboratori se non previo consenso scritto della Società. In
              ogni caso, il Procacciatore assume la piena ed esclusiva
              responsabilità per l'azione dei propri consulenti e/o
              collaboratori.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Immediatamente dopo la cessazione - per qualsiasi causa - del
              presente Contratto, il Procacciatore dovrà restituire alla Società
              ogni e qualsiasi tipo di dati e documenti appartenenti alla
              Società o forniti da essa e/o comunque in suo possesso in
              relazione al presente Contratto e/o allo svolgimento
              dell'incarico.
            </p>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "black", fontSize: "11px" }}>
              Proprietà Intellettuale e industriale
            </span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Tutti i diritti di proprietà intellettuale e industriale della
              Società o dalla medesima utilizzati rimangono di esclusiva
              proprietà della Società.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              In particolare, il Procacciatore non può usare i marchi, né i nomi
              o altri segni distintivi della Società, se non previo consenso
              scritto della Società e al solo fine di identificare e
              pubblicizzare l'attività di quest'ultima, nel contesto
              dell'attività di procacciamento prestata in conformità al presente
              Contratto, essendo inteso che tale uso viene fatto nell'esclusivo
              interesse della Società.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Conseguentemente, è fatto espresso divieto al Procacciatore di
              utilizzare direttamente il nome della Società nei propri rapporti
              commerciali, di inserirne il nome nelle lettere commerciali,
              biglietti da visita, materiale pubblicitario ed in ogni altra
              corrispondenza relativa alla propria attività.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il diritto del Procacciatore di usare i marchi, nonché i nomi o
              segni distintivi della Società, ove eventualmente consentito,
              cessa immediatamente con la cessazione, per qualsiasi causa, del
              presente Contratto.
            </p>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "black", fontSize: "11px" }}>
              Riservatezza
            </span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il Procacciatore si impegna a non rivelare a terzi, segreti
              aziendali o commerciali della Società o altre notizie riservate di
              cui sia venuto a conoscenza attraverso la sua attività per la
              Società, né ad utilizzare tali segreti o notizie riservate per
              fini estranei al presente Contratto.
            </p>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "black", fontSize: "11px" }}>Durata</span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il presente contratto entra in vigore il giorno (indicare la
              data). Esso si intende a tempo indeterminato e potrà essere
              risolto in qualsiasi momento da ciascuna delle parti con un
              preavviso di 15 giorni, da comunicarsi mediante lettera
              raccomandata o P.E.C.
            </p>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "black", fontSize: "11px" }}>
              Cessazione anticipata
            </span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Ciascuna delle Parti può risolvere il presente Contratto con
              effetto immediato in presenza di grave inadempimento dell'altra
              parte, dandone comunicazione a mezzo di raccomandata con ricevuta
              di ritorno, ai sensi e per gli effetti di cui all'art. 1456 c.c..
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Si considera grave inadempimento agli effetti di cui sopra
              qualsiasi violazione degli obblighi contrattuali tale da non
              permettere la continuazione del rapporto su una base di fiducia
              reciproca. Le parti dichiarano di considerare in ogni caso, ed
              indipendentemente dalle conseguenze concrete della violazione,
              come grave inadempimento, la violazione degli obblighi di cui
              sopra.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il presente Contratto si risolverà inoltre, senza preavviso
              alcuno, nel caso di: - fallimento, concordato o qualsiasi
              procedura concorsuale cui sia stata sottoposta una delle parti; -
              condanne civili o penali del Procacciatore o altre circostanze che
              possano pregiudicarne il buon nome o ostacolare lo svolgimento
              regolare della sua attività.
            </p>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "black", fontSize: "11px" }}>
              Indennità di fine rapporto
            </span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Resta espressamente convenuto sin d'ora tra le Parti che alla
              cessazione, per qualunque causa, del presente Contratto, il
              Procacciatore non avrà diritto ad alcun compenso, risarcimento,
              indennità o simili.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              In particolare, il Procacciatore dichiara che non gli spetterà
              alcuna indennità o risarcimento per l'attività di procacciamento
              d'affari svolta in favore della Società, e/o per gli affari
              comunque procurati alla Società e/o per il venire meno di tale
              attività con la cessazione, per qualunque causa, del presente
              Contratto.
            </p>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "black", fontSize: "11px" }}>
              Cessione del contratto
            </span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il presente Contratto non è cedibile, in tutto o in parte, se non
              previo diverso accordo tra le Parti.
            </p>
          </div>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "black", fontSize: "11px" }}>
              Varie ed eventuali
            </span>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Il presente Contratto annulla e sostituisce qualsiasi accordo o
              intesa precedente, scritto/a o verbale, intervenuto/a tra le Parti
              sulla materia oggetto del contratto.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Eventuali modifiche o integrazioni dovranno essere fatte per
              iscritto, a pena di nullità. L'eventuale nullità di una o più
              clausole del presente Contratto non incide sulla validità del
              contratto nel suo complesso.
            </p>
            <p style={{ color: "black", fontSize: "11px", margin: 0 }}>
              Per quanto qui non espressamente previsto, il presente Contratto è
              regolato dalla legge italiana. Per qualunque controversia
              derivante dal, o comunque connessa al, presente Contratto sarà
              competente in via esclusiva il foro di …………...
            </p>
          </div>
          <p style={{ color: "black", fontSize: "11px" }}>
            L’approvazione sulla documentazione pervenuta a TIPAS è sottoposta a
            insindacabile giudizio della stessa.
          </p>
          <p style={{ color: "black", fontSize: "11px" }}>Rho gg/mm/aa</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p
                style={{ color: "black", fontSize: "11px", fontWeight: "bold" }}
              >
                Per accettazione
              </p>
              <p
                style={{ color: "black", fontSize: "11px", fontWeight: "bold" }}
              >
                Il Procacciatore: sig. ……………………….
              </p>
            </div>
            <div>
              <p
                style={{ color: "black", fontSize: "11px", fontWeight: "bold" }}
              >
                T.I.P.A.S s.r.l.
              </p>
              <p
                style={{
                  color: "black",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Amministratore <br /> Loris Arena
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "black", fontSize: "16px" }}>T.I.P.A.S. srl</h3>
            <span
              style={{ color: "black", fontSize: "11px", fontWeight: "bold" }}
            >
              Sede legale via Monte Rosa n.86 - 20149 Milano
            </span>
            <span
              style={{ color: "black", fontSize: "11px", fontWeight: "bold" }}
            >
              Sede operativa via Vincenzo Monti – 20017 Rho (MI) P.IVA
              11337860966
            </span>
            <span
              style={{ color: "black", fontSize: "11px", fontWeight: "bold" }}
            >
              Tel 02 89450402 e mail amministrazione@tipas.it
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
});

export default MandateOFBusinessProcessor;
