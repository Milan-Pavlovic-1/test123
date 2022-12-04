import React, { forwardRef } from "react";
import { Card } from "antd";
import LOGO from "../../../../assets/svg/templogo1.png";
import { Table } from "antd";
import "./templates.css";
import moment from "moment";
const SuperbonusPreliminaryMembershipContract = forwardRef((props, ref) => {
  const localization = props.localization;
  const data = props.data;
  const client = props.client;
  const columns = [
    {
      title: "Documento",
      width: "70%",
      dataIndex: "documento",
      key: "documento",
    },
    {
      title: "Costo",
      width: "30%",
      dataIndex: "costo",
      key: "costo",
    },
  ];
  const tableData = [
    {
      documento:
        "Certificato catastale (i.e. visura aggiornata) dell'unità immobiliare",
      costo: "€	50,00",
    },
    {
      documento: "Mappa e planimetria catastale",
      costo: "€	50,00",
    },
    {
      documento:
        "Certificato conformità urbanistica (compreso di accesso agli atti)  ",
      costo: "€	250,00",
    },
    {
      documento: "APE ante",
      costo: "€	250,00",
    },
    {
      documento: "Documentazione vincolistica eventuale (beni culturali)",
      costo: "da verificare",
    },
  ];
  return (
    <div className="container" style={{ padding: 50 }} ref={ref}>
      <Card style={{ border: "none" }}>
        <div>
          <img src={LOGO} alt="logo" width={100} />
        </div>
        <div style={{ marginTop: 100 }}>
          <h3
            style={{
              fontSize: "9px",
              fontWeight: "bold",
              textAlign: "center",
              color: "black",
            }}
          >
            CONTRATTO DI ADESIONE PRELIMINARE AL SUPERBONUS
          </h3>
          <div style={{ marginTop: 20 }}>
            <p
              style={{
                fontSize: "9px",
                textAlign: "center",
                margin: 0,
                color: "black",
              }}
            >
              TRA
            </p>
            <p
              style={{
                fontSize: "9px",
                textAlign: "center",
                color: "black",
              }}
            >
              TIPAS s.r.l. (P. I.V.A.: 11337860966) con sede legale in Via Monte
              Rosa 86, 20149 Milano MI (di seguito definita “la Società”)
            </p>
            <p
              style={{
                fontSize: "9px",
                textAlign: "center",
                margin: 0,
                color: "black",
              }}
            >
              E
            </p>
            <div>
              <div style={{ fontSize: "9px", color: "black" }}>
                <span>il/la sottoscritto/a: _______________ ,</span>
                <span> C.F.: _______________,</span>
                <span> nato/a a: _______________,</span>
                <span> il: _______________,</span>
                <span> e residente a: _______________,</span>
                <span> Numero di telefono: _______________,</span>
                <span> e mail: _______________,</span>
                <br />
                <span style={{ fontWeight: "lighter" }}>
                  (di seguito definito “il Cliente”).
                </span>
              </div>
            </div>
          </div>
        </div>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "9px",
            marginTop: 20,
            textAlign: "center",
            color: "black",
          }}
        >
          PREMESSO CHE
        </h3>
        <p style={{ fontSize: "9px", color: "black" }}>
          - l’art. 119 del Decreto Legge 19 maggio 2020 n. 119, convertito nella
          Legge 17 Luglio 2020, ha introdotto una detrazione fiscale pari al
          110% delle spese sostenute da parte del Cliente per l’esecuzione di
          interventi di efficientamento energetico condotti su immobili
          residenziali privati (c.d. “Superbonus”);
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          - l’art. 121 del D.L. 34/2020 prevede inoltre la possibilità, per il
          Cliente, di trasformare la detrazione fiscale ad esso spettante in
          credito d’imposta, cedibile nei confronti di soggetti terzi, fra cui
          banche ed intermediari finanziari, oppure in uno sconto sul
          corrispettivo dovuto nei confronti del fornitore che effettua gli
          interventi;
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          - il Cliente, ricorrendo alla agevolazione del Superbonus, ha
          interesse ad effettuare interventi di riqualificazione energetica del
          proprio immobile sito in Via _______________ cap _______________.
          <br />
          (l’“Edificio”);
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          - la Società, è in grado di offrire servizi “chiavi in mano” nel campo
          dell’efficientamento energetico, anche a mezzo intese con
          professionisti qualificati ed aziende operanti nel settore, di
          effettuare un apposito studio sull’Edificio, finalizzato alla
          predisposizione di un Attestato di Prestazione Energetica, APE di
          progetto, e di definire gli interventi di efficientamento energetico
          attuabili sull’Edificio, fra quelli ammessi al Superbonus, al fine di
          ottenere sull’Edificio il salto di 2 classi energetiche, come
          richiesto dal decreto Decreto Legge 19 maggio 2020 n. 119, convertito
          nella Legge 17 Luglio 2020.
        </p>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "9px",
            marginTop: 20,
            textAlign: "center",
            color: "black",
          }}
        >
          Tutto ciò premesso, si conviene e si stipula quanto segue
        </h3>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            1- Oggetto
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            Con il presente accordo, la Società si impegna a svolgere in favore
            del Cliente, le seguenti attività preliminari alla effettuazione
            degli interventi di efficientamento energetico sull’Edificio (di
            seguito, le “Attività”):
            <div style={{ display: "flex", marginLeft: 10 }}>
              <span>a)</span>
              <p style={{ fontSize: "9px", color: "black", marginLeft: 10 }}>
                l’esecuzione di una analisi dell’Edificio finalizzata alla
                verifica dei seguenti aspetti: (i) gli attuali consumi di
                energia primaria dell’Edificio per i servizi di climatizzazione
                e la fornitura di acqua calda sanitaria, il grado di isolamento
                termico dell’Edificio, i consumi di energia elettrica; (ii) le
                tipologie di interventi di efficientamento energetico,
                rientranti fra quelli indicati dal Superbonus, che possono
                essere attuati sull’Edificio, i rispettivi costi e, fra gli
                interventi indicati, quelli maggiormente efficaci per la
                riduzione dei consumi di energia; (iii) il possesso, da parte
                dell’Edificio e del Cliente, dei requisiti tecnico
                amministrativi per poter usufruire del Superbonus.
              </p>
            </div>
            <div style={{ display: "flex", marginLeft: 10 }}>
              <span>b)</span>
              <p style={{ fontSize: "9px", color: "black", marginLeft: 10 }}>
                la preparazione di un Attestato di Prestazione Energetica
                dell’Edificio (“APE”), secondo la normativa nazionale e
                regionale vigente in materia, volto a definire classificazione
                energetica dell’Edificio post intervento e ad individuare gli
                interventi di efficientamento energetico, fra quelli previsti
                dal Superbonus, che possono essere eseguiti sull’Edificio e che
                attestino la possibilità di migliorare, mediante gli interventi
                di efficientamento energetico, la qualificazione energetica di
                quest’ultimo di almeno due classi, come previsto dall’art. 119
                comma 3 del D.L. 34/2020;
              </p>
            </div>
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            2- Analisi preliminare
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            Ai fini dello svolgimento delle attività, di cui al punto 1 che
            precede, la Società si impegna in favore del Cliente ad effettuare
            delle Verifiche Preliminari di idoneità al Superbonus o ad altri
            incentivi. In tal senso si chiede al Cliente di trasmettere entro 15
            giorni alla Società, tutte le informazioni e la documentazione
            obiettivamente necessaria all’esecuzione delle Attività. Per
            l’attività di Verifica Preliminare il Cliente riconosce alla Società
            un corrispettivo, di cui al punto 13 del presente, anticipato a
            mezzo di bonifico bancario, alla firma del seguente contratto, pena
            l’annullamento della pratica.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            3- Adempimenti a carico del Cliente
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            Il Cliente, con la sottoscrizione del presente contratto, si impegna
            a:
            <div style={{ display: "flex", marginLeft: 10 }}>
              <span>a)</span>
              <p style={{ fontSize: "9px", color: "black", marginLeft: 10 }}>
                consentire al personale incaricato dalla Società di effettuare
                sopralluoghi sull’Edificio e sugli impianti tecnologici in esso
                presenti ai fini delle Attività di cui all’Art. 1;
              </p>
            </div>
            <div style={{ display: "flex", marginLeft: 10 }}>
              <span>b)</span>
              <p style={{ fontSize: "9px", color: "black", marginLeft: 10 }}>
                ottenere e trasmettere tempestivamente alla Società tutte le
                informazioni e la documentazione obiettivamente necessaria alla
                esecuzione delle Attività.
              </p>
            </div>
          </p>
        </div>
        <div style={{ marginTop: 0 }}>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            4- Condizioni per la esecuzione degli interventi di efficientamento
            energetico
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            La realizzazione da parte della Società degli interventi di
            efficientamento energetico proposti avrà inizio solo in seguito al
            verificarsi delle seguenti condizioni: l’applicazione da parte della
            società della disciplina dello sconto in fattura, oppure
            l’ottenimento da parte del Cliente, di un adeguato finanziamento a
            copertura del costo degli interventi. Il ricorso a una delle due
            condizioni sopraesposte sarà possibile solo alla positiva verifica
            del possesso, da parte del Cliente e dell’Edificio oggetto di
            analisi, di tutti i requisiti tecnico-amministrativi richiesti per
            potere avere accesso all’agevolazione del Superbonus, mediante
            ricorso alla cessione del credito d’imposta di cui all’art. 121 del
            D.L. 34/2020,.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            5- Affidamento degli interventi
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            A seguito del verificarsi delle condizioni di cui il punto 4, il
            Cliente deciderà, insieme alla Società, gli interventi di
            efficientamento energetico da compiere sull’Edificio, sulla base di
            quanto indicato nell’APE e delle risultanze emerse nel corso delle
            Attività di cui al punto 1. Il Cliente provvederà ad affidare alla
            Società l’esecuzione degli interventi di efficientamento energetico
            prescelti, e delle prestazioni professionali necessarie per poter
            avere accesso ai benefici previsti dal Superbonus. In caso di
            mancato verificarsi di una o più delle condizioni di cui in punto 4,
            gli interventi di efficientamento energetico non saranno effettuati,
            salvo diversa intesa.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            6- Costo degli interventi di efficientamento energetico
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            Il costo degli interventi di efficientamento energetico proposti
            dalla Società non potrà eccedere i livelli massimi di detrazione
            ammissibili ed i limiti di spesa massima previsti dal Decreto
            Ministeriale 6 agosto 2020, attuativo dell’art. 1 comma 3-ter del
            Decreto Legge 63/2013. In caso contrario, il Cliente sarà libero di
            recedere dal presente accordo anche in caso di avveramento delle
            condizioni sospensive di cui il punto 4, fermo restando il pagamento
            delle attività inerenti alle Verifiche Preliminari.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            7- Garanzie
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            La Società non sarà responsabile nel caso in cui il Cliente non
            possa beneficiare dell’agevolazione fiscale prevista dal Superbonus,
            oppure l’agevolazione venga revocata, per motivi imputabili al
            Cliente stesso, tra cui, a titolo esemplificativo, fatti non
            verificabili dalla Società nel corso delle Attività di cui il punto
            2, presentazione di dati o documenti falsi o mendaci. In tali casi,
            il Cliente sarà comunque tenuto al versamento del prezzo stabilito
            per l’esecuzione degli interventi di efficientamento energetico, nel
            caso in cui questi siano stati nel frattempo intrapresi dalla
            Società.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            8- Cessione del Contratto
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            La Società potrà provvedere alla cessione del contratto nei
            confronti di imprese terze dotate delle necessarie competenze e
            requisiti di legge in relazione alle attività da svolgere, a seguito
            dell’invio di una preventiva comunicazione al Cliente con almeno 30
            giorni di anticipo. In caso di mancato assenso alla cessione del
            contratto, il Cliente avrà facoltà di recesso, fermo restando il
            versamento del Corrispettivo per le attività di Verifiche
            Preliminari.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            9- Recesso ai sensi del Codice del Consumo
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            Il Cliente potrà sempre recedere dal presente contratto, ai sensi
            del D.Lgs. 206/2005 (c.d. Codice del Consumo) mediante invio di
            apposita comunicazione agli indirizzi indicati al punto 10, entro 14
            giorni dalla sottoscrizione del presente contratto
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            10- Comunicazioni
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            Tutte le comunicazioni inerenti il presente contratto saranno
            effettuate agli indirizzi di seguito indicati:{" "}
            <span style={{ textDecoration: "underline", color: "blue" }}>
              tecnico@tipas.it
            </span>
            .
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            11- Tribunale competente
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            Qualsiasi controversia dovesse insorgere tra le Parti in merito
            all’interpretazione o all’esecuzione del presente contratto, sarà
            devoluta alla competenza esclusiva del Tribunale ove il Cliente ha
            la propria sede e/o residenza.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            12- Trattamento dei dati personali
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            La Società ottempererà a tutte le norme in materia in relazione al
            Trattamento dei Dati Personali ivi comprese quelle che saranno
            emanate nel corso della durata del Contratto al fine di assicurare,
            nell’ambito delle proprie attività e competenze specifiche, un
            adeguato livello di sicurezza del Trattamento di tutti dati.
          </p>
        </div>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            13- Pagamento
          </h3>
          <p style={{ fontSize: "9px", color: "black" }}>
            Alla stipula del seguente contratto il Cliente si impegna ad
            effettuare nell’immediato il pagamento di:
            <br />
            <span style={{ marginLeft: 10 }}>
              - _______________ (Iva inclusa) per le Verifiche Preliminari
              (punto 2 del seguente contratto)
            </span>
          </p>
          <p style={{ fontSize: "9px", color: "black" }}>
            A mezzo di bonifico bancario alle seguenti coordinate:
            <br />
            <span>
              Beneficiario: T.I.P.A.S. S.R.L. <br />
              IBAN: IT98C0837433220000013351706
            </span>
          </p>
        </div>
        <p style={{ fontSize: "9px", color: "black" }}>
          La somma sopra esposta verrà restituita al Cliente solo all’esito
          positivo dell’analisi preliminare e conseguente appalto lavori in
          favore della Società. La restituzione verrà effettuata a mezzo
          bonifico bancario alle coordinate rilasciate dal Cliente alla chiusura
          del cantiere.
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          Il Cliente : _______________
          <br />
          IBAN: _______________
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          Il Cliente entro 15 giorni dalla sottoscrizione del presente, si
          obbliga a fornire alla Società i documenti richiesti nell’Allegato 1
          del seguente contratto. Nel caso in cui il Cliente volesse delegare
          alla Società il compito di reperire i documenti necessari alle
          verifiche, o avrà la necessità di produrre una parte di questi, dovrà
          corrispondere alla Società il pagamento di tali attività, come dal
          prezziario presente nell’allegato 2. Si specifica che tali spese
          preliminari sono totalmente a carico del Cliente e non verranno
          rimborsate a fine lavori, in quanto non detraibili dal Superbonus
          110%.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "black" }}>
              {" "}
              Letto confermato e sottoscritto
            </p>
            <p style={{ fontSize: "9px", color: "black" }}> La Società</p>
            <p style={{ fontSize: "9px", color: "black" }}>_______________</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "9px", color: "black" }}>
              {" "}
              Desenzano _______________
            </p>
            <p style={{ fontSize: "9px", color: "black" }}> Il Cliente</p>
            <p style={{ fontSize: "9px", color: "black" }}>_______________</p>
          </div>
        </div>
        <p style={{ fontSize: "9px", color: "black" }}>
          Ai sensi dell’art. 1341 c.c., il Cliente approva espressamente le
          clausole seguenti: punto 5 punto 7 (Garanzie), punto 10 (Recesso della
          Società), punto 13 (Trattamento dei dati personali).
        </p>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "9px",
            marginTop: 20,
            textAlign: "center",
            color: "black",
          }}
        >
          ALLEGATO 1
        </h3>
        <p style={{ fontSize: "9px", color: "black" }}>
          I Documenti da fornire alla Società, necessari per le Verifiche
          Preliminari sono:
        </p>
        <div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "11px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            Analisi preliminare dei dati sull'immobile oggetto di intervento
          </h3>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              1.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Copia documenti d'identità della persona fisica che detiene unità
              immobiliare autonoma (i.e. carta d'identità e tesserina regionale
              indicante il codice fiscale) e/o dei legali rappresentanti dei
              soggetti elencati al comma 9 (lett. da c) a e)) del D.L. n.34/2020
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              2.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Copia di visure camerali aggiornate, statuti ed atti costitutivi
              dei soggetti elencati al comma 9 (lett. da c) ad e)) del D.L. n.
              34/2020
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                L'ottenimento di tale documentazione sarà necessario qualora il
                privato sia uno di questi soggetti:
                <p style={{ fontSize: "9px", color: "black" }}>
                  (i) IACP <br />
                  (ii) cooperativa di abitazione a proprietà indivisa <br />{" "}
                  (iii) Onlus <br /> (iv) organizzazione di volontariato <br />
                  (v) associazione di promozione sociale iscritta nel registro
                  nazionale e nei registri regionali delle province autonome di
                  Trento e Bolzano (vi) un'associazione o società sportiva
                  dilettantistica
                </p>
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              3.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Copia della comunicazione trasmessa a cura delle Onlus al
              Ministero delle Finanze ai sensi dell'articolo 11 del decreto
              legislativo 4 dicembre 1997, n. 460
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                L'ottenimento di tale documentazione sarà necessario qualora il
                privato sia una Onlus
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              4.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Certificati catastali (i.e. visure, planimetrie) di ciascuna
              della/e unità immobiliare/i che sarà/anno interessata/e degli
              interventi (*)
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              5.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Modello di Autocertificazione da compilare e firmare debitamente
              dal soggetto privato detentore dell'unità immobiliare nella forma
              di dichiarazione sostitutiva di atto notorio ex artt. 47, 75 e 76
              del D.P.R. n. 445/2000
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                Tale Modello prevede il rilascio di dichiarazioni riguardo alle
                seguenti informazioni:
                <p style={{ fontSize: "9px", color: "black" }}>
                  (i) dati identificativi dell'unità immobiliare e dell'Impresa
                  Appaltatrice; <br />
                  (ii) indicazione della tipologia di interventi commissionati
                  all'Impresa Appaltatrice; <br /> (iii) indicazione della
                  professione/tipologia di attività esercitata dal soggetto
                  privato nel territorio dello Stato e conferma di conseguire
                  redditi assoggettati a tassazione in Italia; <br /> (iv)
                  indicazione del titolo giuridico in base al quale si detiene
                  l'unità immobiliare; <br />
                  (v) natura residenziale o strumentale che caratterizza la
                  suddetta unità;
                  <br /> (vi) conferma che, alla data di tale dichiarazione, il
                  privato (se persona fisica) non abbia beneficiato del
                  Superbonus in relazione ad interventi in materia di efficienza
                  energetica su più di una unità immobiliare
                </p>
                Tale Modello verrà fornito, in forma pre- compilata,
                dall’istituto di credito
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              6.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Certificato rilasciato dai pubblici registri immobiliari (es. atto
              di proprietà e/o di compravendita)
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                L'ottenimento di tale documento risulta necessario qualora il
                privato (persona fisica) sia rappresentato dal proprietario o il
                nudo proprietario dell'immobile
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              7.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Certificato rilasciato dai pubblici registri immobiliari (o altra
              documentazione) attestante la detenzione dell'unità immobiliare in
              forza di specifico diritto reale di godimento
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                L'ottenimento di tale documento risulta necessario qualora il
                privato (persona fisica) sia rappresentato dal titolare di un
                diritto reale di godimento quale usufrutto, uso, abitazione o
                superficie
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              8.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Copia della dichiarazione di consenso da parte del proprietario in
              caso di condòmini titolari di diritti personali di godimento,
              unitamente a copia del contratto con evidenza certificante la
              corretta registrazione
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                L'ottenimento di tale documento risulta necessario qualora il
                privato (persona fisica) sia rappresentato da soggetto privato
                che detiene l'immobile sito nel condominio in base a contratto
                di locazione o di comodato d'uso
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              9.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Copia contratto preliminare regolarmente registrato da cui si
              evinca l'immissione in possesso (e.g. contestuale comodato),
              dichiarazione del consenso da parte del proprietario
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                L'ottenimento di tale documento risulta necessario qualora il
                privato (persona fisica) sia rappresentato dal promissario
                acquirente l'immobile
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              10.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Certificato dell'anagrafe (per convivenza), titolo di possesso
              (certificato immobiliare o contratto registrato) e dichiarazione
              di consenso da parte del proprietario
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                L'ottenimento di tale documento risulta necessario qualora il
                privato (persona fisica) sia rappresentato dal (i) familiare
                convivente del possessore/detentore (ii) dal convivente di fatto
                di cui all'articolo 1, commi 36 e 37 della legge n. 76 del 2016
                del possessore/detentore
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              11.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Documentazione attestante l'assegnazione, titolo di possesso
              (certificato immobiliare) e dichiarazione di consenso da parte del
              proprietario
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                L'ottenimento di tale documento risulta necessario qualora il
                provato (persona fisica) sia rappresentato dal coniuge separato
                assegnatario dell'immobile intestato all'altro coniuge
              </p>
            </p>
          </div>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "11px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            Documentazione da ottenere per la richiesta di finanziamento
          </h3>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              12.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Per gli interventi in ambito di efficienza energetica, copia
              dell'attestato di prestazione energetica (APE, ante intervento, da
              parte del soggetto tecnico abilitato nella forma della
              dichiarazione asseverata (*)
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                Tale documento servirà per la successiva verifica del requisito
                posto dalla norma, ossia di accertare post-intervento il
                miglioramento di almeno due classi energetiche dell'edificio
                condominiale o unità immobiliare ovvero, se non possibile in
                quanto l'edificio o l'unità immobiliare è già nella penultima
                (terzultima) classe, il conseguimento della classe energetica
                più alta
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              13.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Documentazione attestante la regolarità edilizia/urbanistica
              dell'edificio e/o dell'unità immobiliare su cui saranno svolti gli
              interventi ed il rispetto delle norme sulla sicurezza del
              cantiere. Ultimo titolo edilizio presentato completo di tavole di
              progetto (*)
              <p style={{ fontSize: "9px", color: "black", marginLeft: 20 }}>
                In via preliminare va compilata e siglata l’autocertificazione.
                La documentazione attestante la regolarità edilizia/urbanistica,
                rappresentata dal Certificato di conformità urbanistica ed
                edilizia, deriva da un’analisi, svolta e asseverata da un
                tecnico professionista, che mette a confronto lo stato di fatto,
                la documentazione catastale e quanto depositato in Comune
              </p>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              14.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Documentazione vincolistica eventuale (beni culturali) (*)
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <span
              style={{
                fontSize: "10px",
                color: "black",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              15.
            </span>
            <p style={{ fontSize: "9px", color: "black" }}>
              Dichiarazione di Conformità impianti esistenti, libretto caldaia
              esistente, schede tecniche di infissi e materiali da costruzione
              già presenti in opera
            </p>
          </div>
        </div>
        <p style={{ fontSize: "9px", color: "black" }}>
          Altri documenti potrebbero essere richiesti in corso d’opera a causa
          di aggiornamenti della normativa di riferimento. Si chiede pertanto al
          Cliente di fornire tale documentazione quando e se verrà richiesta.
        </p>
        <p style={{ fontSize: "9px", color: "black" }}>
          (*) Qualora la documentazione richiesta non fosse non in possesso del
          Cliente, evidenziamo di seguito il prezziario di riferimento che la
          Società applica per lil reperimento della stessa:
        </p>

        <div style={{ marginBottom: 100 }}>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            ALLEGATO 2
          </h3>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "9px",
              marginTop: 20,
              textAlign: "center",
              color: "black",
            }}
          >
            Prezziario documenti
          </h3>
          <Table
            className="tableData"
            columns={columns}
            dataSource={tableData}
            pagination={false}
          />
        </div>
      </Card>
    </div>
  );
});

export default SuperbonusPreliminaryMembershipContract;
