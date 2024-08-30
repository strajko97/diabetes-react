import React from 'react';
import Layout from '../layouts/Layout';

function AboutUs() {
    return (
        <Layout>
            <div className="container">
                <div style={containerStyle}>
                    <h1 style={headingStyle}>O nama</h1>
                    <section style={sectionStyle}>
                        <p style={paragraphStyle}>
                            Dobrodošli na <strong>Tanjirići Zdravci</strong> – vašu pouzdanu destinaciju za zdravu ishranu prilagođenu osobama sa dijabetesom. Naša misija je da vam olakšamo svakodnevno planiranje obroka, uzimajući u obzir specifične potrebe dijabetičara, kako biste živeli zdravije i kvalitetnije.
                        </p>
                    </section>
                    <section style={sectionStyle}>
                        <p style={paragraphStyle}>
                            <strong>Tanjirići Zdravci</strong> vam nudi širok izbor ukusnih i nutritivno uravnoteženih recepata, osmišljenih tako da zadovolje vaše potrebe bez kompromisa na ukusu. Verujemo da zdrava ishrana ne mora biti dosadna – uz našu pomoć, svaki obrok može postati prava kulinarska avantura.
                        </p>
                    </section>
                    <section style={sectionStyle}>
                        <p style={paragraphStyle}>
                            Osim recepata, naš sajt vam omogućava da pratite svoje dnevne unose hrane i da dobijete analizu svojih prehrambenih navika. Naš cilj je da vam pružimo alate i savete kako biste bolje razumeli kako vaša ishrana utiče na vaše zdravlje, i kako biste mogli donositi informisane odluke o svakom obroku.
                        </p>
                    </section>
                    <section style={sectionStyle}>
                        <p style={paragraphStyle}>
                            <strong>Tanjirići Zdravci</strong> nije samo sajt – to je zajednica ljudi posvećenih zdravlju i dobrobiti. Bilo da ste nedavno dijagnostikovani sa dijabetesom ili ste dugogodišnji borac, naš sajt je tu da vam pruži podršku na vašem putu ka zdravijem životu.
                        </p>
                    </section>
                    <section style={sectionStyle}>
                        <p style={paragraphStyle}>
                            Pridružite nam se i otkrijte kako ukusna i zdrava ishrana može biti jednostavna i dostupna svima.
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
}

const paragraphStyle = {
    fontSize: '1.3rem',
};

const containerStyle = {
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: '1.6',
    color: '#333',
    padding: '20px',
};

const headingStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    textAlign: 'center',
};

const sectionStyle = {
    marginBottom: '20px',
};

export default AboutUs;
