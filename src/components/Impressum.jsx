// Impressum & Datenschutz (German legal page). Static content; noindex.
const h2 = { margin: '0 0 14px', fontSize: '21px', fontWeight: 800, color: '#12202d' }
const label = {
  margin: '0 0 6px',
  fontSize: '13px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#16436e',
  fontWeight: 700,
}
const h3 = { margin: '0 0 8px', fontSize: '16px', fontWeight: 700, color: '#12202d' }
const body = { margin: '0 0 16px', fontSize: '14.5px', lineHeight: 1.65, color: '#4a5764' }
const info = { margin: '0 0 18px', fontSize: '15.5px', lineHeight: 1.7 }

export default function Impressum() {
  return (
    <div style={{ minHeight: '100vh', color: '#28323d' }}>
      {/* top bar */}
      <div style={{ borderBottom: '1px solid #eef1f4', background: '#fff' }}>
        <div
          className="lp-inner"
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: '0 40px',
            height: '66px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="/"
            style={{
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '-.3px',
              color: '#12202d',
              textDecoration: 'none',
            }}
          >
            Julian Zarges
          </a>
          <div style={{ display: 'flex', gap: '18px', fontSize: '13.5px', fontWeight: 600 }}>
            <a href="/" style={{ textDecoration: 'none' }}>
              ← Home (EN)
            </a>
            <a href="/de" style={{ textDecoration: 'none' }}>
              Startseite (DE)
            </a>
          </div>
        </div>
      </div>

      <div className="lp-inner" style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 40px 80px' }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '34px', fontWeight: 800, letterSpacing: '-.6px', color: '#12202d' }}>
          Impressum &amp; Datenschutz
        </h1>
        <div style={{ width: '44px', height: '3px', background: '#16436e', margin: '14px 0 40px' }} />

        {/* ===== IMPRESSUM ===== */}
        <h2 style={h2}>Impressum</h2>
        <p style={label}>Angaben gemäß § 5 DDG</p>
        <p style={info}>
          Julian Zarges<br />
          Blumenstr. 54/2<br />
          71706 Markgröningen<br />
          Deutschland
        </p>

        <p style={label}>Kontakt</p>
        <p style={info}>
          Telefon: <a href="tel:+491747511438">+49 174 7511438</a>
          <br />
          E-Mail: <a href="mailto:julian@zarges.pro">julian@zarges.pro</a>
          <br />
          Web: <a href="https://zarges.pro">zarges.pro</a>
        </p>

        <p style={label}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</p>
        <p style={{ ...info, margin: '0 0 28px' }}>Julian Zarges (Anschrift wie oben)</p>

        <h3 style={h3}>Haftung für Inhalte</h3>
        <p style={body}>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
          der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        </p>

        <h3 style={h3}>Haftung für Links</h3>
        <p style={body}>
          Mein Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte ich keinen
          Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
          der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei
          Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </p>

        <h3 style={h3}>Urheberrecht</h3>
        <p style={{ ...body, margin: '0 0 40px' }}>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>

        <div style={{ height: '1px', background: '#eef1f4', margin: '0 0 40px' }} />

        {/* ===== DATENSCHUTZ ===== */}
        <h2 style={h2}>Datenschutzerklärung</h2>

        <h3 style={h3}>1. Verantwortlicher</h3>
        <p style={{ ...body, margin: '0 0 20px' }}>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist Julian Zarges, Blumenstr. 54/2, 71706
          Markgröningen, Deutschland, E-Mail: <a href="mailto:julian@zarges.pro">julian@zarges.pro</a>.
        </p>

        <h3 style={h3}>2. Grundsatz &amp; keine Cookies</h3>
        <p style={{ ...body, margin: '0 0 20px' }}>
          Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Diese Website setzt keine Cookies ein und
          erstellt keine Nutzerprofile. Zur statistischen Reichweitenmessung kommt ausschließlich eine selbst
          gehostete, cookielose Analyse-Software zum Einsatz (siehe Ziffer 6); ein Tracking über andere Websites
          hinweg findet nicht statt. Personenbezogene Daten werden darüber hinaus nur verarbeitet, wenn Sie das
          Kontakt- bzw. CV-Anfrageformular nutzen oder wenn dies technisch zur Auslieferung der Seite
          erforderlich ist.
        </p>

        <h3 style={h3}>3. CV-Anfrageformular</h3>
        <p style={{ ...body, margin: '0 0 12px' }}>
          Wenn Sie das Anfrageformular nutzen, verarbeite ich die von Ihnen angegebenen Daten (Name, Unternehmen,
          E-Mail-Adresse, Rolle/Anlass der Anfrage sowie eine optionale Nachricht), um Ihre Anfrage zu bearbeiten
          und Ihnen die angeforderten Unterlagen zukommen zu lassen.
        </p>
        <p style={{ ...body, margin: '0 0 12px' }}>
          <strong>Rechtsgrundlage</strong> ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung bzw. Durchführung
          vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Kommunikation
          mit Interessenten). Die Angaben werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet und nicht
          an Dritte zu Werbezwecken weitergegeben.
        </p>
        <p style={{ ...body, margin: '0 0 12px' }}>
          Zur technischen Verarbeitung und Zustellung der Formularnachrichten setze ich den Dienst{' '}
          <strong>Web3Forms</strong> als Auftragsverarbeiter ein. Dabei werden die eingegebenen Daten an dessen
          Server (Infrastruktur u. a. bei Amazon Web Services) übertragen und dort für kurze Zeit gespeichert; eine
          Übermittlung in Drittländer kann nicht ausgeschlossen werden. Web3Forms speichert Einreichungen im
          kostenlosen Tarif für rund 30 Tage und löscht sie anschließend automatisch.
        </p>
        <p style={{ ...body, margin: '0 0 12px' }}>
          Zusätzlich wird zur Anzeige der Bestätigung eine Kopie Ihrer Eingaben vorübergehend lokal in Ihrem
          eigenen Browser (localStorage) gespeichert. Diese Daten verbleiben auf Ihrem Gerät und werden nicht an
          mich übertragen; Sie können sie jederzeit durch Leeren des Browserspeichers entfernen.
        </p>
        <p style={{ ...body, margin: '0 0 20px' }}>
          Ihre per E-Mail bei mir eingegangene Anfrage bewahre ich so lange auf, wie es zur Bearbeitung erforderlich
          ist bzw. gesetzliche Aufbewahrungsfristen bestehen, und lösche sie anschließend.
        </p>

        <h3 style={h3}>4. Schriftarten</h3>
        <p style={{ ...body, margin: '0 0 20px' }}>
          Diese Website verwendet Schriftarten (Source Sans 3, Fraunces), die lokal auf dem Server eingebunden und
          zusammen mit der Seite ausgeliefert werden. Es besteht keine Verbindung zu Servern Dritter (etwa Google
          Fonts), und zu diesem Zweck wird Ihre IP-Adresse nicht an Dritte übermittelt.
        </p>

        <h3 style={h3}>5. Hosting &amp; Server-Logfiles</h3>
        <p style={{ ...body, margin: '0 0 20px' }}>
          Diese Website wird auf eigener Infrastruktur des Verantwortlichen in Deutschland betrieben
          (Self-Hosting); ein externer Hosting-Anbieter kommt nicht zum Einsatz. Beim Aufruf der Website werden
          technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
          Seite, Browsertyp) in Server-Logfiles verarbeitet, soweit dies zur sicheren und stabilen Bereitstellung
          der Website erforderlich ist; Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Weitergabe dieser
          Daten an Dritte erfolgt nicht.
        </p>

        <h3 style={h3}>6. Reichweitenmessung (Umami)</h3>
        <p style={{ ...body, margin: '0 0 20px' }}>
          Zur statistischen Auswertung der Seitennutzung setze ich die Open-Source-Software <strong>Umami</strong>{' '}
          ein, die auf eigener Infrastruktur des Verantwortlichen betrieben wird. Erfasst werden Seitenaufrufe,
          die verweisende Seite (Referrer), Browser- und Gerätetyp sowie das ungefähre Herkunftsland. Die
          Erfassung erfolgt ohne Cookies; die IP-Adresse wird lediglich flüchtig zur Ermittlung des
          Herkunftslandes verarbeitet und nicht gespeichert. Die erhobenen Daten lassen keine Identifizierung
          einzelner Besucher zu und werden nicht an Dritte übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse an einer anonymen Reichweitenmessung des eigenen Online-Angebots).
        </p>

        <h3 style={h3}>7. Ihre Rechte</h3>
        <p style={{ ...body, margin: '0 0 12px' }}>
          Sie haben jederzeit das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen die
          Verarbeitung (Art. 21 DSGVO). Wenden Sie sich hierzu an die oben genannte Kontaktadresse.
        </p>
        <p style={{ ...body, margin: '0 0 20px' }}>
          Ihnen steht zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, in der Regel am Ort Ihres
          Wohnsitzes oder meines Sitzes (Landesbeauftragter für den Datenschutz Baden-Württemberg).
        </p>

        <p style={{ margin: '32px 0 0', fontSize: '13px', color: '#9aa5af' }}>Stand: Juli 2026</p>
        <p style={{ margin: '14px 0 0', fontSize: '12.5px', color: '#b3bcc4', lineHeight: 1.55 }}>
          Dieser Text ist ein sorgfältig erstellter Entwurf und ersetzt keine Rechtsberatung. Bitte bei Gelegenheit
          anwaltlich bzw. datenschutzrechtlich prüfen lassen.
        </p>
      </div>
    </div>
  )
}
