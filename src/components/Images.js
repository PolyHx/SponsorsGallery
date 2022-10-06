import React from 'react';
import Carousel from 'react-material-ui-carousel';
// import AECSP from '../Images/AECSP.svg';
import CGI from '../Images/CGI.png';
import DESJARDINS from '../Images/desjardins.png';
import DIGITAL_OCEAN from '../Images/digital-ocean.png';
import INTAC_LAB from '../Images/IntactLab.png';
import SEMLA from '../Images/semla.png';
import SE4AI from '../Images/se4aiB.png';
import GIRO from '../Images/giro.png';
import DRUIDE from '../Images/druide.png';
import GURU from '../Images/guru.png';
import RCGT from '../Images/rcgt.png';

const sponsorsList = [
  { label: 'SEMLA', image: SEMLA, backgroundColor: '#f9f9f9' },
  {
    label: 'Desjardins',
    image: DESJARDINS,
    backgroundColor: '#00874e',
  },
  { label: 'CGI', image: CGI, backgroundColor: '#e31937' },
  { label: 'Intact Lab', image: INTAC_LAB, backgroundColor: '#f9f9f9' },
];

const Images = () => {
  return (
    <Carousel interval='5000' duration='2000'>
      {sponsorsList.map((sponsor, index) => (
        <div
          id='cover-screen'
          style={{ backgroundColor: `${sponsor.backgroundColor}` }}
        >
          <div key={index} className='sponsors-logo'>
            <img src={sponsor.image} alt={sponsor.label} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Images;
