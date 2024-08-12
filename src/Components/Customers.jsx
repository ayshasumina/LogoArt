import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import customer1 from '../assets/customer1.jpg';
import customer2 from '../assets/customer2.jpg';
import customer3 from '../assets/customer3.jpg';
import customer4 from '../assets/customer4.jpg';
import customer5 from '../assets/customer5.jpg';
import customer6 from '../assets/customer6.png';
import customer7 from '../assets/customer7.jpg';
import customer8 from '../assets/customer8.jpg';
import customer9 from '../assets/customer9.jpg';
import customer10 from '../assets/customer10.jpg';
import customer11 from '../assets/customer11.jpg';
import customer12 from '../assets/customer12.jpg';

const images = [
  { src: customer1, alt: 'Image 1' },
  { src: customer2, alt: 'Image 2' },
  { src: customer3, alt: 'Image 3' },
  { src: customer4, alt: 'Image 4' },
  { src: customer5, alt: 'Image 5' },
  { src: customer6, alt: 'Image 6' },
  { src: customer7, alt: 'Image 7' },
  { src: customer8, alt: 'Image 8' },
  { src: customer9, alt: 'Image 9' },
  { src: customer10, alt: 'Image 10' },
  { src: customer11, alt: 'Image 11' },
  { src: customer12, alt: 'Image 12' },
];

  

const ImageGallery = () => {
  return (
    <section className="image-gallery py-5">
      <Container>
        <Row className='g-2'>
            <h3>Latest Creations</h3>
            <p>See why over 108,704 users have created a logo with Logo Art</p>
          {images.map((image, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-2">
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <h2>Create your unique logo</h2>
      <p>generate unlimited logo for free</p>
      <button>Create logo</button>
    </section>
  );
};

export default ImageGallery;
