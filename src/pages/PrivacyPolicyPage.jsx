import React from 'react';
import Layout from '../layouts/Layout';

function PrivacyPolicy() {
    return (
        <Layout>
            <div className="container">
                <div style={containerStyle}>
                    <h1 style={headingStyle}>Politika privatnosti</h1>
                    <section style={sectionStyle}>
                        <h2 style={subHeadingStyle}>1. Prikupljanje informacija</h2>
                        <p style={paragraphStyle}>Prikupljamo različite vrste informacija u vezi sa vašim korišćenjem našeg sajta, uključujući:</p>
                        <ul style={listStyle}>
                            <li>Informacije koje nam vi pružate: Kada se registrujete na naš sajt, prilikom popunjavanja formulara, ili prilikom komunikacije sa nama, možemo prikupljati informacije kao što su vaše ime, email adresa, telefonski broj, i druge relevantne podatke.</li>
                            <li>Automatski prikupljene informacije: Kada koristite naš sajt, automatski prikupljamo informacije kao što su vaša IP adresa, tip uređaja, pretraživač, i podaci o vašoj interakciji sa sajtom putem kolačića i sličnih tehnologija.</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h2 style={subHeadingStyle}>2. Korišćenje informacija</h2>
                        <p style={paragraphStyle}>Prikupljene informacije koristimo u sledeće svrhe:</p>
                        <ul style={listStyle}>
                            <li>Pružanje usluga: Da bismo omogućili i unapredili usluge na našem sajtu, kao i da bismo obradili vaše zahteve.</li>
                            <li>Komunikacija: Da bismo vas kontaktirali putem emaila, telefona, ili drugih sredstava, kako bismo vas obavestili o promenama na sajtu, novostima, promocijama, ili odgovorili na vaše upite.</li>
                            <li>Unapređenje sajta: Da bismo analizirali korišćenje sajta i razumeli vaše potrebe kako bismo poboljšali funkcionalnost i sadržaj sajta.</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h2 style={subHeadingStyle}>3. Deljenje informacija</h2>
                        <p style={paragraphStyle}>Vaše informacije ne delimo sa trećim stranama osim u sledećim situacijama:</p>
                        <ul style={listStyle}>
                            <li>Sa vašim pristankom: Kada ste nam dali eksplicitnu dozvolu za deljenje vaših informacija.</li>
                            <li>Pravni zahtevi: Ako smo zakonski obavezani da otkrijemo vaše informacije, na primer po nalogu suda.</li>
                            <li>Pružanje usluga: Možemo deliti informacije sa trećim stranama koje pružaju usluge u naše ime, poput hosting provajdera, analitičkih servisa, ili marketing platformi.</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h2 style={subHeadingStyle}>4. Bezbednost informacija</h2>
                        <p style={paragraphStyle}>Preduzimamo odgovarajuće tehničke i organizacione mere kako bismo zaštitili vaše informacije od neovlašćenog pristupa, promene, otkrivanja, ili uništenja.</p>
                    </section>

                    <section style={sectionStyle}>
                        <h2 style={subHeadingStyle}>5. Vaša prava</h2>
                        <p style={paragraphStyle}>Imate pravo da:</p>
                        <ul style={listStyle}>
                            <li>Pristupite svojim informacijama: Možete zatražiti kopiju informacija koje držimo o vama.</li>
                            <li>Ispravite ili obrišete informacije: Možete zatražiti ispravku netačnih informacija ili brisanje vaših podataka.</li>
                            <li>Povučete pristanak: Ako ste nam dali pristanak za obradu vaših podataka, možete ga povući u bilo kom trenutku.</li>
                        </ul>
                    </section>

                    <section style={sectionStyle}>
                        <h2 style={subHeadingStyle}>6. Kolačići</h2>
                        <p style={paragraphStyle}>Naš sajt koristi kolačiće za prikupljanje informacija o vašem korišćenju sajta kako bi vam pružio bolje iskustvo. Možete kontrolisati upotrebu kolačića putem podešavanja u vašem pretraživaču.</p>
                    </section>

                    <section style={sectionStyle}>
                        <h2 style={subHeadingStyle}>7. Izmene politike privatnosti</h2>
                        <p style={paragraphStyle}>Zadržavamo pravo da u bilo kom trenutku izmenimo ovu politiku privatnosti. Sve izmene će biti objavljene na ovoj stranici i vaša dalja upotreba sajta nakon izmena podrazumeva da prihvatate nove uslove.</p>
                    </section>

                    <section style={sectionStyle}>
                        <h2 style={subHeadingStyle}>8. Kontaktirajte nas</h2>
                        <p style={paragraphStyle}>Ako imate bilo kakva pitanja ili nedoumice u vezi sa ovom politikom privatnosti, slobodno nas kontaktirajte putem emaila na tanjirići_zdravići@gmail.com.</p>
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

const subHeadingStyle = {
    fontSize: '2rem',
    marginTop: '20px',
    marginBottom: '10px',
};

const sectionStyle = {
    marginBottom: '20px',
};

const listStyle = {
    fontSize: '1.3rem',
    paddingLeft: '20px',
    listStyleType: 'disc',
};

export default PrivacyPolicy;
