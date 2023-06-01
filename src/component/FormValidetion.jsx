import React from 'react'
import horizentalline from './img/horizentalline.png';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Col, Container, Row } from 'react-bootstrap';

function FormValidetion() {
  const messageSchema = object({
    username: string().required().min(3).max(15),
    email: string().required().email(),
    message: string().required().max(100)
  })


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      message: ''
    },
    validationSchema: messageSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <div className='formvalidation'>
      <div className="container text-center padding-top ">
        <h3>Let’s Get Started!</h3>
        <img src={horizentalline} alt='Horizental Line Not Fond' />
      </div>
      
     
      <Row>
        <Col  md='7' lg='6' className='text-left'>
          <div className='container'>
            <div className='my-2 mx-auto' style={{ width: '600px' }}>
              <form onSubmit={formik.handleSubmit} >
                <div>
                  <select className='select'>
                    <option>How can we help you?</option>
                    <option>Mobile App Development</option>
                    <option>Enterprise Software Development</option>
                    <option>Web Development</option>
                    <option>Dedicated Teams</option>
                    <option>IT Consulting</option>
                    <option>Internet of Things</option>
                    <option>Blockchain</option>
                    <option>Augmented Reality</option>
                    <option>Artificial Intelligence</option>
                    <option>Cloud Computing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input name="username" onChange={formik.handleChange} type="text" className="form-control" placeholder='Name*' id="name" />

                  {formik.touched.username && formik.errors.username ? <div style={{ color: 'red' }}>{formik.errors.username}</div> : null}

                </div>
                <div className="mb-3">
                  <input name="email" onChange={formik.handleChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Email*" />
                  {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
                </div>
                <div className="mb-3">
                  <input name="email" onChange={formik.handleChange} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Organization" />
                </div>
              </form>

            </div>
          </div>
        </Col>
        <Col md='7' lg='5'>

          <div className='my-2 mx-auto text-right' style={{ width: '500px' }}>
            <form onSubmit={formik.handleSubmit}>

              <div className="mb-3">
                <textarea name="message" onChange={formik.handleChange} className="form-control" placeholder='Message*' id="exampleFormControlTextarea1" rows="3"></textarea>
                {formik.touched.message && formik.errors.message ? <div style={{ color: 'red' }}>{formik.errors.message}</div> : null}

              </div>
              <input type='checkbox' />
              <br></br>Check here to subscribe for newsletter.
              <div className="mb-3">
                <button type="submit" className='btn-success'>SUBMIT MESSAGE</button>
              </div>
            </form>
          </div>

        </Col>
      </Row>
    
    </div>
  )
}

export default FormValidetion