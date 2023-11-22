import React, {useState} from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const [selectedColor, setSelectedColor] = useState('basic');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const containerStyle = {
    backgroundImage: 'linear-gradient(#fde386, #a3f7ea, #ec8e77)',
    minHeight: '100vh',
  };

  const onSubmitPost = () => {
    const payload = {
      title,
      description
    };
    axios.post('http://localhost:8080/post/create', payload)
      .then(response => {
        console.log('Post created successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  const onResetPost = () => {
    setTitle('');
    setDescription('');
    setSelectedColor('basic');
  };

  const handleColourSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <MDBContainer fluid style={containerStyle}>
      <MDBRow className='justify-content-center align-items-center vh-100'>
        <MDBCol md='8'>
          <MDBCard className='my-5'>
            <MDBRow className='rounded-start rounded-end'>
              <MDBCol md='6'>
                <MDBCardImage
                  src='https://img.freepik.com/premium-vector/social-media-influencer-flat-design-illustration_188398-217.jpg?w=740'
                  alt='Sample photo'
                  className='img-fluid rounded-start'
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </MDBCol>

              <MDBCol md='6'>
                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <MDBTypography className='font-family-base text-uppercase' style={{ fontSize: '30px' }}>Create New Post!</MDBTypography>

                  <MDBInput wrapperClass='mb-4' label='Title' size='lg' id='form3' type='text'  value={title} onChange={(e) => setTitle(e.target.value)}/>
                  <MDBCol lg='12' className='pe-0'>
                    <MDBTextArea label='Description' id='textarea' rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
                  </MDBCol>

                  <MDBTypography className='font-family-base' style={{ fontSize: '16px', marginTop: '20px' }}>Tile Colour</MDBTypography>
                  <div className='d-flex justify-content-start'>
                    <Button size='huge' color='red' disabled={selectedColor === 'red'} onClick={() => handleColourSelect('red')}/>
                    <Button size='huge' color='orange' disabled={selectedColor === 'orange'} onClick={() => handleColourSelect('orange')}/>
                    <Button size='huge' color='yellow' disabled={selectedColor === 'yellow'} onClick={() => handleColourSelect('yellow')}/>
                    <Button size='huge' color='olive' disabled={selectedColor === 'olive'} onClick={() => handleColourSelect('olive')}/>
                    <Button size='huge' color='green' disabled={selectedColor === 'green'} onClick={() => handleColourSelect('green')}/>
                    <Button size='huge' color='teal' disabled={selectedColor === 'teal'} onClick={() => handleColourSelect('teal')}/>
                    <Button size='huge' color='blue' disabled={selectedColor === 'blue'} onClick={() => handleColourSelect('blue')}/>
                  </div>

                  <div className='d-flex justify-content-end pt-3' style={{ marginTop: '20px' }}>
                    <MDBBtn color='light' rippleColor='dark' size='lg' onClick={onResetPost}>
                      Reset Post
                    </MDBBtn>
                    <MDBBtn className='ms-2' color='dark' size='lg' onClick={onSubmitPost}>
                      Submit Post
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Post;